const mongoose = require("mongoose");

const restuarentSchema = new mongoose.Schema(
  {
    restuarentName: {
      type: String,
      requred: true,
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
        ref: "courseProgress",
      },
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

const Restuarent = mongoose.model("Restuarent", restuarentSchema);

module.exports = Restuarent;
