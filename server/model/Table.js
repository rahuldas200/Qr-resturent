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

const table = mongoose.model("table",tableSchema);
module.exports = table;