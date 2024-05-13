const express = require('express');
const router = express.Router();

const { createManu , updateManu ,deleteManu} = require('../controller/Menu');
const { verifytoken } = require('../middlewares/Auth');
const { CreateCategory,fetchRestaurantCategory } = require('../controller/Cetagory')

// --------- routes --------------------

router.post('/create-menu',verifytoken,createManu);
router.post('/update-menu',verifytoken ,updateManu);
router.delete('/delete-Menu',verifytoken,deleteManu);
router.post('/create-Category',verifytoken,CreateCategory);
router.get('/restaurant-category',verifytoken,fetchRestaurantCategory)

module.exports = router;