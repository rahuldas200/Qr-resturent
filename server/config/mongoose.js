const mongoose = require("mongoose");
require("dotenv").config();

const { DATA_BASE_URL } = process.env;

exports.connect = () => {
  mongoose
    .connect(DATA_BASE_URL)
    .then(() => {
      console.log(`DB Connection Success`);
    })
    .catch((err) => {
      console.log(`DB Connection Failed`);
      console.log(err);
      process.exit(1);
    });
};
