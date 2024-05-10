const mongoose = require("mongoose");

const CetagorySchema = new mongoose.Schema({
  cetagoryName: {
    type: String,
    require: true,
  },
  menu: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Menu",

    },
  ],
  thumbnail:{
    type:String,
    require:true
  },

});

const Cetagory = mongoose.model("Cetagory",CetagorySchema);
module.exports = Cetagory;
