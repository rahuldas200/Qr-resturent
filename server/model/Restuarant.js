const mongoose = require('mongoose');

const restuarentSchema = new mongose.Schema( 

    {
        restuarentName: {
            type:String,
            requred:true,
        },
        restuarentAbout:{
            type:String,
        },
        email:{
            type:String,
            require:true
        },
        password:{
            type:String,
            requred:true
        },
        token:{
            type:String,
        },
        image:{
            type:String
        },
        banner:{
            type:String
        },
        menu:[
            {
                type:mongose.Schema.Types.ObjectId,
                ref: "courseProgress",
            }
        ],
        totalTables:{
            type:Number,
        },
        tables:[
            {
                type:mongose.Schema.Types.ObjectId,
                ref:"tables"
            }
        ]

    },
    { timestamps: true }
       

)

module.exports = mongoose.model("restuarent", restuarentSchema)

