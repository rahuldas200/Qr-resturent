const express = require('express');
const router = express.Router();

const { createManu , updateManu ,deleteManu} = require('../controller/Manu');
const { verifytoken } = require('../middlewares/Auth');

// --------- routes --------------------

router.post('/createManu',verifytoken,createManu);
router.post('/updateManu',verifytoken ,updateManu);
router.delete('/delete',verifytoken,deleteManu);

module.exports = router;