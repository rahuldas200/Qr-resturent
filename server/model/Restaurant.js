const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    restuarentName: {
      type: String,
      require: true,
    },
    restuarentAbout: {
      type: String,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      requred: true,
    },
    token: {
      type: String,
    },
    image: {
      type: String,
    },
    banner: {
      type: String,
    },
    menu: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Menu",
      },
    ],
    category:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
      }
    ],
    totalTables: {
      type: Number,
    },
    tables: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tables",
      },
    ],
  },
  { timestamps: true }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
