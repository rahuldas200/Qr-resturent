const mongoose = require("mongoose");

const manuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  aboutDish: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  catagory: {
    type: String,
    enum: ["vag", "nonVag"],
    required: true,
  },
  retingAndReview: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reting_and_review",
    },
  ],
});

const manu = mongoose.model("manu", manuSchema);
module.exports = manu;
