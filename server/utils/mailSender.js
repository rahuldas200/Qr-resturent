const nodemailer = require('nodemailer');
require('dotenv').config()

const mailSender = async (email,title,body) => {
    try{

        const transporter = nodemailer.createTransport(
            {
                host:process.env.MAIL_HOST,
                auth: {
                    user:process.env.MAIL_USER,
                    pass:process.env.MAIL_PASS,
                },
                Secure: false,
            }
        )

        let info = await transporter.sendMail(
            {
                from:`QR-restuarant `,
                to:`${email}`,
                subject:`${title}`,
                html:`${body}`
            }
        )

        console.log(info.response);
        return info;

    }catch(error) {
        console.log(error)
    }
}

module.exports = mailSender;