const mongoose = require('mongoose');

const retingAndReviewSchema = new mongoose.Schema(
    {
        reting:Number,
        required:true,
    },
    {
        review:String,
        required:true,
    },

)
const RetingAndReview = mongoose.model("RetingAndReview", retingAndReviewSchema);

module.exports = RetingAndReview;