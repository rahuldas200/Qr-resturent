const mongoose = require('mongoose');
const mailsender = require('../utils/mailSender')

const otpSchema = new mongoose.Schema( 
    {
        email: {
            type: String,
            required: true,
        },
        otp: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
        },

    }
)

const varificationEmail = async (email,otp) => {
    try{

        const res = mailsender(email,"verification email",`your otp is ${otp}`);

        console.log("Mail send successfully" , res.response);

    }catch(error) {
        console.log("Error occured when sending email",error);
        throw error;
    }
}

otpSchema.pre('save', async (next) => {
    console.log("new document save to the database");

    if(this.isNew){
      await  varificationEmail(this.email,this.otp);
    }
    next();
})

const otp = mongoose.model("otpSchema",otpSchema)

module.exports = otp;