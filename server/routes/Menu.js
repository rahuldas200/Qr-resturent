const express = require('express');
const router = express.Router();

const { createManu , updateManu ,deleteManu} = require('../controller/Menu');
const { verifytoken } = require('../middlewares/Auth');
const { CreateCategory } = require('../controller/Cetagory')

// --------- routes --------------------

router.post('/create-menu',verifytoken,createManu);
router.post('/update-menu',verifytoken ,updateManu);
router.delete('/delete-Menu',verifytoken,deleteManu);
router.post('/create-Category',verifytoken,CreateCategory)

module.exports = router;