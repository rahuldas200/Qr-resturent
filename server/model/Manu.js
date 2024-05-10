const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  thumbnail: {
      type: String,
      required: true,
  },
  catagory: {
    type:mongoose.Schema.Types.ObjectId,
    require:true,
  },
  retingAndReview: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RetingAndReview",
    },
  ],
});

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
