const express = require('express');
const router = express.Router();

const {createTable,updateTable,deleteTable} = require('../controller/Table');
const { verifytoken } = require('../middlewares/Auth');

// ---------------- routes ------------

router.post('/createtable',verifytoken,createTable);
router.post('/updatetable',verifytoken,updateTable);
router.post('/deletetable',verifytoken,deleteTable);

module.exports = router;