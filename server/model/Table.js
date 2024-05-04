const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema( 
    {
        tableNumber:{
            type:Number,
            required:true,
        },
        tableQrCode:{
            type:String,
            required:true
        },
        restuarantId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"restuarent"
        },
        settingCapachity:{
            type:Number,
            required:true,
        }
    }
)

const Table = mongoose.model("Table",tableSchema);
module.exports = Table;