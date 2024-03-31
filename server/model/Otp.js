const mongose = require("mongoose");
const mailSender = require('../utils/mailSender');
// const otpTemplate = require("../tamplate/OtpTamplate");

const otpSchema = new mongose.Schema( 
    {
        email:{
            type:String,
            required:true,
        },
        otp: {
            type:String,
            required:true,
        },
        createdAt : {
            type:Date,
            default:Date.now,
            expires:60 * 5
        }
    }
)

async function sendVerificationEmail(email,otp) {
    try{

        const mailResponse  = await mailSender(
            email,
            'Verification Email',
            // otpTemplate(otp,email)
            
        );
        console.log("Email send successfully",mailResponse.response);


    } catch (error) {
        console.log("Error occured while sending email");
        throw error;
    }
}

otpSchema.pre("save",async function (next) {
    console.log("New document save to database");

    if(this.isNew) {
        await sendVerificationEmail(this.email,this.otp);
    }
    next();
});

const Otp = mongose.model("Otp",otpSchema);
module.exports = Otp;