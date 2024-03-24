const restuarent = require('../model/Restuarant');
const otp = require('../model/Otp');
const otpGenerator = require('otp-generator')

exports.sendMail = async (req, res) => {
    try{

        const {email} = req.body;

        if(!email){
            res.status(200).json(
                {
                    success:false,
                    message:"Email is required",
                }
            )
        }

        const checkRestuarendPresent = await restuarent.findOne({email});

        if(checkRestuarendPresent){
            res.status(200).json(
                {
                    success:false,
                    message:"Restuarent is already registered",
                }
            )
        }

        var otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        })

        const existatingOtp = await otp.findOne({otp})

        while (existatingOtp) {
            otp = otpGenerator.generate(6, {
              upperCaseAlphabets: false,
              lowerCaseAlphabets: false,
              specialChars: false,
            })
          }
          const otpPayload = { email, otp }

          const otpBody = await OTP.create(otpPayload)
          console.log("OTP Body", otpBody)
          res.status(200).json({
            success: true,
            message: `OTP Sent Successfully`,
            otp,
        })


    }catch(error){
        res.status(200).json({
            success:false,
            message:"Restuarent registation faild"
        })
    }
}

exports.registation = async (req, res) => {
    try{

        const {email,restuarentName,password,confirmPassword,otp} = req.body;

        if(!email || !restuarentName || !password || !confirmPassword || !otp){
            res.status(200).json({
                success:false,
                message:"All field are required"
            })
        }

        if(password !== confirmPassword){
            res.status(200).json({
                success:false,
                message:"Password and confirm password are not match"
            })
        }

        const userExits = await restuarent.findOne({email})

        if(userExits){
            res.status(200).json({
                success:false,
                message:"User already presents"
            })
        }

        const response = await otp.find({ email }).sort({ createdAt: -1 }).limit(1)

        if(response.length === 0){
            res.status(200).json({
                success:false,
                message:"OTP is not valild"
            })
        }
        else if(response[0].otp !== otp){
            res.status(200).json({
                success:false,
                message:"Otp is not valid"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await restuarent.create({
            email,
            restuarentName,
            password:hashedPassword,
        });

        if(user){
            res.status(200).json({
                success:true,
                user,
            })
        }

    }catch(error){
        res.status(200).json({
            success:false,
            message:"Restuarent registation faild"
        })
    }
}

exports.login = async (req, res) => {
    try {


    } catch(error){
        

    }
} 

