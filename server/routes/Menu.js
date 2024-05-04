const express = require('express');
const router = express.Router();

const { createManu , updateManu ,deleteManu} = require('../controller/Menu');
const { verifytoken } = require('../middlewares/Auth');

// --------- routes --------------------

router.post('/create-menu',verifytoken,createManu);
router.post('/update-menu',verifytoken ,updateManu);
router.delete('/delete-Menu',verifytoken,deleteManu);

module.exports = router;