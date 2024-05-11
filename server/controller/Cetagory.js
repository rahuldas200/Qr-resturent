const Menu = require("../model/Manu");
const Category = require("../model/Cetagory");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
const Restaurant = require("../model/Restaurant");
require("dotenv").config();

exports.CreateCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    }

    const { restaurant_id } = req.restaurant;
    const file = req.files.file;
    console.log(categoryName, restaurant_id, file);

    if (!categoryName || !file) {
      return res.status(200).json({
        success: false,
        message: "All field are required",
      });
    }

    const cloudinaryRes = await uploadImageToCloudinary(
      file,
      process.env.CATEGORY_FOLDER
    );

    if (!cloudinaryRes) {
      return res.status(404).json({
        success: false,
        message: "Thumbnail upload faild",
      });
    }

    const newCategory = await Category.create({
        categoryName,
        thumbnail: cloudinaryRes.secure_url,
    });

    if (!newCategory) {
      return res.status(404).json({
        success: false,
        message: "Category create failed",
      });
    }

    const updateRestaurant = await Restaurant.findByIdAndUpdate(
      restaurant_id,
      { $push: { category: newCategory._id } },
      { new: true }
    )
      .populate({
        path: "category",
      })
      .exec();

    return res.status(200).json({
      success: true,
      message: "Category create successfully",
      category: updateRestaurant.category,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      success: false,
      message: "Cetagory Create faild",
    });
  }
};
