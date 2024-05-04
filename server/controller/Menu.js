const Menu = require("../model/Manu");
const restuarent = require("../model/Restaurant");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
const cloudinary = require("cloudinary").v2;
require('dotenv').config

exports.createManu = async (req, res) => {
  try {
    const {restaurant_id,restaurant_email} = req.restaurant;
    console.log(req.restaurant)
    const {menu_name,menu_about,catagory,price} = req.body; 
    const thumbnailImage = req.files
    
    if(!restaurant_id || !restaurant_email ||! menu_name||!menu_about||!catagory||!price ||!thumbnailImage){
      return res.status(400).json( {
        success:false,
        message:"All filed are required",
      })
    }

    const response = await uploadImageToCloudinary(
      thumbnailImage,
      process.env.MENU_FOLDER,

    )

    const newMenu = await Menu.create({
      menu_name,
      menu_about,
      catagory,
      price,
      thumbnail:response.secure_url,
    })

    console.log(newMenu);

    if(!newMenu){
      return res.status(400).json({
        success:false,
        message:"menu creating field"
      })
    }
    
    


  }catch (error){
    console.log(error);
    return res.status(404).json( {
      success:false,
      message:"menu create filed"
    })
  }
};

exports.updateManu = async (req, res) => {
  try {
    const { manuId, name, aboutDish, price, catagory, restuarentId } = req.body;

    // Check if required fields are provided
    if (
      !manuId ||
      !name ||
      !aboutDish ||
      !price ||
      !catagory ||
      !restuarentId
    ) {
      return res.status(200).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Find the menu item by manuId
    let menuToUpdate = await manu.findById(manuId);

    // Check if the menu item exists
    if (!menuToUpdate) {
      return res.status(200).json({
        success: false,
        message: "Menu item not found",
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
    return res.status(200).json({
      success: true,
      message: "Menu item updated successfully",
      data: updatedMenu,
    });
  } catch (error) {
    // Return error response
    res.status(200).json({
      success: false,
      message: "Menu item update failed",
      error: error.message,
    });
  }
};

exports.deleteManu = async (req, res) => {
  try {
    const { restuarentId, manuId } = req.body;

    if (!restuarentId || !manuId) {
      return res.status(200).json({
        success: true,
        message: "some thing went wrong",
      });
    }

    const response = await manu.findById(manuId);

    if (response.images.length !== 0) {
      let deletedCount = 0;

      try {
        for (const url of response.images) {
          const publicId = cloudinary.utils.extractPublicId(url);

          if (publicId) {
            const result = await cloudinary.uploader.destroy(publicId);
          }
          if (result.result === "ok") {
            deletedCount++;
          }
        }
      } catch (err) {
        return res.status(200).json({
          success: false,
          message: "some thing went wrong",
        });
      }
    }

    const deletemanu = await manu.findByIdAndDelete(manuId);

    // if(!deletemanu){
    //     res.status(200).json({
    //         success:false,
    //         message:"Delete faild"
    //     })
    // }

    const updateRestuarent = await restuarent.findByIdAndDelete(
      restuarentId,

      { $pull: { manu: manuId } },
      { new: true }
    );

    // if(!updateRestuarent){

    //     res.status(200).json({
    //         success:false,
    //         message:"Delete faild"
    //     })
    // }

    return res.status(200).json({
      success: true,
      message: "Delete successfully",
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: "Delete falid",
    });
  }
};
