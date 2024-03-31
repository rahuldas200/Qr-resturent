const Restuarent = require("../model/Restuarant");
const Otp = require("../model/Otp");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

exports.sendotp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      res.status(200).json({
        success: false,
        message: "Email is required",
      });
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

    const otpBody = await Otp.create(email, otp);
    console.log("OTP Body", otpBody);
    res.status(200).json({
      success: true,
      message: `OTP Sent Successfully`,
      otpBody,
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      success: false,
      message: "Restuarent registation faild",
    });
  }
};

exports.registation = async (req, res) => {
  try {
    const { email, restuarentName, password, confirmPassword, otp } = req.body;

    if (!email || !restuarentName || !password || !confirmPassword || !otp) {
      res.status(200).json({
        success: false,
        message: "All field are required",
      });
    }

    if (password !== confirmPassword) {
      res.status(200).json({
        success: false,
        message: "Password and confirm password are not match",
      });
    }

    const userExits = await Restuarent.findOne({ email });

    if (userExits) {
      res.status(200).json({
        success: false,
        message: "User already presents",
      });
    }

    const response = await otp.find({ email }).sort({ createdAt: -1 }).limit(1);

    if (response.length === 0) {
      res.status(200).json({
        success: false,
        message: "OTP is not valild",
      });
    } else if (response[0].otp !== otp) {
      res.status(200).json({
        success: false,
        message: "Otp is not valid",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await Restuarent.create({
      email,
      restuarentName,
      password: hashedPassword,
    });

    if (user) {
      res.status(200).json({
        success: true,
        user,
      });
    }
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Restuarent registation faild",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(200).json({
        success: false,
        message: "All field are required",
      });
    }

    const user = await Restuarent.findOne({ email });

    if (!user) {
      res.status(200).json({
        success: false,
        message: "User not found , please signup again",
      });
    }

    const passwordVerify = bcrypt.compare(password, user.password);

    if (!passwordVerify) {
      res.status(200).json({
        success: false,
        message: "Password is not matched , please try again",
      });
    }

    const payload = {
      userId: user._id,
      email: user.email,
    };

    const secret_key = process.env.SECRET_KEY;

    const newtToken = jwt.sign(payload, secret_key);

    if (!token) {
      res.status(200).json({
        success: false,
        message: "token is not created, please try it again",
      });
    }

    const response = await Restuarent.findByIdAndUpdate(
      user._id,
      {
        token: newtToken,
      },
      { new: true }
    );

    if (response) {
      res.status(200).json({
        success: true,
        message: "User loging successfully",
        data: response,
      });
    }
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Login faild",
      error,
    });
  }
};

exports.UpdateRestuarent = async (req, res) => {
  try {
    const { restuarentName, restuarentAbout, totalTables, email, userId } =
      req.body;

    if (!userId || !email) {
      res.status(200).json({
        success: false,
        message: "Unauthodrized",
      });
    }
    const profile = req.files.profile;
    const banner = req.files.banner;

    const user = await Restuarent.findById({ userId });

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
        res.status(200).json({
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
        res.status(200).json({
          success: false,
          message: "banner not uploaded",
        });
      }

      user.banner = bannerImg;
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: "profile updated successfully",
      user,
    });
  } catch (error) {
    res.status(200).json({
      success: true,
      message: "something went wrong while profile updated",
      user,
    });
  }
};
