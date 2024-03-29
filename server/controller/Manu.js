const manu = require("../model/Manu");
const restuarent = require('../model/Restuarant');
const {uploadImageToCloudinary} = require('../utils/imageUploader')
const cloudinary = require('cloudinary').v2


exports.createManu = async (req, res) => {

  try {

    const {name,aboutDish,price,catagory,restuarentId,email} = req.body;

    if(!name || !aboutDish || !price || !catagory || !restuarentId || !email){
        res.status(200).json({
            success:false,
            message:"All field are required",
        })
    }

    const files = req.files;

    if(!files || files.length === 0){
        res.status(200).json(
            {
                success:false,
                message:"Atleast one image are required"
            }
        )
    }

    const uploadPromises = files.map(file => {
        return cloudinary.uploader.upload(file.buffer.toString('base64'), {
            resource_type: 'auto',
            folder:process.env.MANU_FOLDER_NAME
        });
    });

    const results = await Promise.all(uploadPromises);

    const uploadedFiles = results.map(result => ({
        url: result.secure_url
    }));

    const result = await manu.create(
        {
            name:name,
            aboutDish:aboutDish,
            price:price,
            images:uploadedFiles,
            catagory:catagory,  
        }
    )

    const response = await restuarent.findByIdAndUpdate(restuarentId,{
        $push: { manu: result._id }
    })

    res.status(200).json({
        success:true,
        message:"manu created successflly",
        result,
    })

  } catch (error) {
    res.status(200).json({
        success:true,
        message:"manu created successflly"
    })
  }
};

exports.updateManu = async (req, res) => {
    try{
        const { manuId, name, aboutDish, price, catagory, restuarentId } = req.body;

        // Check if required fields are provided
        if(!manuId || !name || !aboutDish || !price || !catagory || !restuarentId){
            return res.status(200).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Find the menu item by manuId
        let menuToUpdate = await manu.findById(manuId);

        // Check if the menu item exists
        if(!menuToUpdate){
            return res.status(200).json({
                success: false,
                message: "Menu item not found"
            });
        }

        // Update the menu item details
        menuToUpdate.name = name;
        menuToUpdate.aboutDish = aboutDish;
        menuToUpdate.price = price;
        menuToUpdate.catagory = catagory;

        // Save the updated menu item
        const updatedMenu = await menuToUpdate.save();

        // Return success response
        res.status(200).json({
            success: true,
            message: "Menu item updated successfully",
            data: updatedMenu
        });

    } catch(error){
        // Return error response
        res.status(200).json({
            success: false,
            message: "Menu item update failed",
            error: error.message
        });
    }
}


exports.deleteManu = async (req , res) => {
    try{
        const {restuarentId, manuId} = req.body

        if(!restuarentId || !manuId){
            res.status(200).json({
                success:true,
                message:"some thing went wrong"
            })
        }

        const response = await manu.findById(manuId);

        

        if(response.images.length !== 0 ){
            let deletedCount = 0;

            try{

                for(const url of response.images) {
                    const publicId = cloudinary.utils.extractPublicId(url);

                    if(publicId){
                        const result = await cloudinary.uploader.destroy(publicId);
                    }
                    if(result.result === 'ok'){
                        deletedCount++;
                    }
                }    

            } catch(err){
                res.status(200).json({
                    success:false,
                    message:"some thing went wrong"
                })
            }
        }

        const deletemanu = await manu.findByIdAndDelete(manuId);

        // if(!deletemanu){
        //     res.status(200).json({
        //         success:false,
        //         message:"Delete faild"
        //     })
        // }

        const updateRestuarent = await restuarent.findByIdAndDelete(restuarentId,
            
            {$pull:{manu:manuId}},
            {new:true}
        )

        // if(!updateRestuarent){

        //     res.status(200).json({
        //         success:false,
        //         message:"Delete faild"
        //     })
        // }

        res.status(200).json({
            success:true,
            message:"Delete successfully"
        })


    }catch(error){
        res.status(200).json({
            success:false,
            message:"Delete falid"
        })
    }
}



