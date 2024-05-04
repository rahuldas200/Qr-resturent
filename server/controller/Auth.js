const Restaurant = require("../model/Restaurant");
const Otp = require("../model/Otp");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
require('dotenv').config();

exports.sendotp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(200).json({
        success: false,
        message: "Email is required",
      });
    }

    const CheckUser = await Restaurant.findOne({email});

    if(CheckUser){
      return res.status(200).json({
        success:false,
        message:"User already registered",
      })
    }

    var otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    const existatingOtp = await Otp.findOne({ otp });

    while (existatingOtp) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
    }

    const otpBody = await Otp.create({email, otp});

    console.log("OTP Body", otpBody);

    return res.status(200).json({
      success: true,
      message: `OTP Sent Successfully`,
      otp,
    });

  } catch (error) {
     console.log(error);
     return res.status(200).json({
      success: false,
      message: "Restaurant registation faield",
    });
  }
};

exports.registation = async (req, res) => {
  try {
    console.log(req.body);
    const { email, restaurantName, password, confirmPassword, otp } = req.body;
    

    if (!email || !restaurantName || !password || !confirmPassword || !otp) {
      return res.status(200).json({
        success: false,
        message: "All field are required i dont know why,",

      });
    }

    
    if (password !== confirmPassword) {
      return res.status(200).json({
        success: false,
        message: "Password and confirm password are not match",
      });
    }

    const userExits = await Restaurant.findOne({ email });


    if (userExits) {
      return res.status(200).json({
        success: false,
        message: "User already presents",
      });
    }

    const response = await Otp.find({ email }).sort({ createdAt: -1 }).limit(1);

    console.log("hii ",response);

    if (response.length === 0) {
      return res.status(200).json({
        success: false,
        message: "OTP is not valild",
      });
    } else if (response[0].otp !== otp) {
      return res.status(200).json({
        success: false,
        message: "Otp is not valid",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Restaurant.create({
      email,
      restaurantName,
      password: hashedPassword,
    });

    if (user) {
      return res.status(200).json({
        success: true,
        user,
      });
    }
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: "Restuarent registation faild",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(200).json({
        success: false,
        message: "All fields are required",
      });
    }

    const restaurant = await Restaurant.findOne({ email });

    if (!restaurant) {
      return res.status(200).json({
        success: false,
        message: "User not found, please sign up again",
      });
    }

    const passwordVerify = await bcrypt.compare(password, restaurant.password);

    if (!passwordVerify) {
      return res.status(200).json({
        success: false,
        message: "Password is not matched, please try again",
      });
    }

    const payload = {
      restaurant_id: restaurant._id,
      restaurant_email: restaurant.email,
    };


    const newToken = jwt.sign(payload, process.env.secret_key);

    if (!newToken) {
      return res.status(200).json({
        success: false,
        message: "Token is not created, please try again",
      });
    }

    console.log("hii boss - ",newToken);

    const response = await Restaurant.findByIdAndUpdate(
      restaurant._id,
      {
        token: newToken,
      },
      { new: true }
    );
    console.log(response)
    if (response) {
      return res.status(200).json({
        success: true,
        message: "User logged in successfully",
        user: response,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Login failed",
      error: error.message,
    });
  }
};


exports.UpdateRestuarent = async (req, res) => {
  try {
    const { restuarentName, restuarentAbout, totalTables, email, userId } =
      req.body;

    if (!userId || !email) {
      return res.status(200).json({
        success: false,
        message: "Unauthodrized",
      });
    }
    const profile = req.files.profile;
    const banner = req.files.banner;

    const user = await Restaurant.findById({ userId });

    if (restuarentAbout) {
      user.restuarentAbout = restuarentAbout;
    }

    if (restuarentName) {
      user.restuarentName = restuarentName;
    }

    if (totalTables) {
      user.totalTables = totalTables;
    }

    if (profile) {
      const img = await uploadImageToCloudinary(
        profile,
        process.env.RESTUARENT_FOLDER_NAME
      );

      if (!img) {
        return res.status(200).json({
          success: false,
          message: "profile not uploaded",
        });
      }

      user.image = img;
    }
    if (banner) {
      const bannerImg = await uploadImageToCloudinary(
        banner,
        process.env.RESTUARENT_FOLDER_NAME
      );

      if (!img) {
        return res.status(200).json({
          success: false,
          message: "banner not uploaded",
        });
      }

      user.banner = bannerImg;
    }

    await user.save();

    return  res.status(200).json({
      success: true,
      message: "profile updated successfully",
      user,
    });
  } catch (error) {
    return res.status(200).json({
      success: true,
      message: "something went wrong while profile updated",
    });
  }
};

exports.getUserData = async (req, res) => {
  try{
    const { userId } = req.body;

    console.log(req.body)

    if(!userId){
      return res.status(200).json( {
        success:false,
        message:"User id rquired"
      })
    }

    const response = await Restuarent.findById(userId);

    if(!response){
      return res.status(200).json( {
        success:false,
        message:"User not found"
      })
    }

    return res.status(200).json( {
      success:true,
      message:"User find successfully",
      response
    })

  }catch(error){
    if(!response){
      return res.status(200).json( {
        success:false,
        message:"User foud error"
      })
    }
  }
}