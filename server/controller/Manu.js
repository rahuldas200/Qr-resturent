const manu = require("../model/Manu");
const restuarent = require('../model/Restuarant');

exports.createManu = async (req, res) => {

  try {

    const {name,aboutDish,price,catagory,userId,email} = req.body;

    if(!name || !aboutDish || !price || !catagory || !userId || !email){
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
            folder: 'manus'
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

    const response = await restuarent.findByIdAndUpdate(userId,{
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
        

    } catch(err){

    }
}
