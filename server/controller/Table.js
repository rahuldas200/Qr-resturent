const restuarent = require('../model/Restuarant');
const table = require('../model/Table');
const QRCode = require('qrcode');


exports.createTable = async (req, res) => {

    try{
        const{ restuarantId ,tableNumber,tableQrCode,settingCapachity } = req.body;

        if(!restuarantId || !tableNumber ||!tableQrCode ||!settingCapachity){
            res.status(200).json({
                success:false,
                message:"All field are required"
            })
        }


        const data = 'https://studynotion-myweiuztn-rahul-das-projects.vercel.app';

        const options = {
            color: {
                dark: '#000',
                light: '#fff'
            },
            errorCorrectionLevel: 'H',  // L (Low), M (Medium), Q (Quite Good), H (High)
            version: 10,                // 1 to 40. Higher number means larger size
            margin: 2                   // Width of the white border around the QR code
        };

       // Generate QR code as a data URI
        QRCode.toDataURL(data,options, (err, url) => {
            if (err) throw err;
    
            cloudinary.uploader.upload(url, {
                folder: 'qrcodes', 
                public_id: 'my_qrcode',
                overwrite: true
            }, 
                (error, result) => {
                if (error) {
                    console.error('Error uploading to Cloudinary:', error);
                } 
                else {
                    console.log('QR code uploaded to Cloudinary:', result.secure_url);
                }

            });
        });


    }catch(err){

    }
}