const mongoose = require("mongoose");

const CetagorySchema = new mongoose.Schema({
  categoryName: {
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


const Category = mongoose.model("Category",CetagorySchema);
module.exports = Category;
