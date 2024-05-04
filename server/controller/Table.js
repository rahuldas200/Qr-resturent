const restuarent = require('../model/Restaurant');
const table = require('../model/Table');
const QRCode = require('qrcode');


exports.createTable = async (req, res) => {

    try{
        const{ restuarantId ,tableNumber,settingCapachity } = req.body;

        if(!restuarantId || !tableNumber ||!settingCapachity){
            res.status(200).json({
                success:false,
                message:"All field are required"
            })
        }


        const data = 'https://new-portfolio-git-main-rahul-das-projects.vercel.app/';

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
        let qrCode = null;

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
                    qrCode = result.result.secure_url;
                }

            });
        });

        const result = await table.create(
            {
                tableNumber:tableNumber,
                tableQrCode:qrCode,
                restuarantId:restuarantId,
                settingCapachity:settingCapachity,

            }
        )

        const resturentUpdate = await restuarent.findById(restuarantId,
            {
                tables:result._id
            } ,{new:true})

        res.status(200).json(
            {
                success:true,
                message:"table created successfully"
            }
        )

    }catch(err){
        res.status(200).json(
            {
                success:false,
                message:"table creation failed"
            }
        )
    }
}

exports.updateTable = async (req, res) => {
    
    try{
        const { tableId, tableNumber, settingCapachity } = req.body;

        // Check if required fields are provided
        if(!tableId || !tableNumber || !settingCapachity){
            return res.status(200).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Find the table by tableId
        let tableToUpdate = await table.findById(tableId);

        // Check if the table exists
        if(!tableToUpdate){
            return res.status(200).json({
                success: false,
                message: "Table not found"
            });
        }

        // Update the table details
        tableToUpdate.tableNumber = tableNumber;
        tableToUpdate.settingCapachity = settingCapachity;

        // Save the updated table
        const updatedTable = await tableToUpdate.save();

        // Return success response
        res.status(200).json({
            success: true,
            message: "Table updated successfully",
            data: updatedTable
        });

    } catch(error){
        // Return error response
        res.status(200).json({
            success: false,
            message: "Table update failed",
            error: error.message
        });
    }
}

exports.deleteTable = async (req, res) => {
    
    try{
        const { tableId, restaurantId } = req.body;

        // Check if tableId is provided
        if(!tableId || !restaurantId){
            return res.status(200).json({
                success: false,
                message: "tableId and restaurantId are required"
            });
        }

        // Find the table by tableId
        let tableToDelete = await table.findById(tableId);

        // Check if the table exists
        if(!tableToDelete){
            return res.status(200).json({
                success: false,
                message: "Table not found"
            });
        }

        // Delete the table
        await tableToDelete.remove();

        // Remove tableId from the associated restaurant's tables array
        await restuarent.findByIdAndUpdate(restaurantId, {
            $pull: { tables: tableId }
        });

        // Return success response
        res.status(200).json({
            success: true,
            message: "Table deleted successfully"
        });

    } catch(error){
        // Return error response
        res.status(200).json({
            success: false,
            message: "Table deletion failed",
            error: error.message
        });
    }
}
