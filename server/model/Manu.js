const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  aboutMenu: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  thumbnail: [
    {
      type: String,
      required: true,
    },
  ],
  catagory: {
    type: String,
    enum: ["vag", "nonvag"],
    required: true,
  },
  retingAndReview: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reting_and_review",
    },
  ],
});

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
