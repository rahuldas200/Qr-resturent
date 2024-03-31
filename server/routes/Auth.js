const express = require('express');
const router = express.Router();

const { sendotp ,registation, login ,UpdateRestuarent } = require('../controller/RestuarantRegistation')
const { verifytoken } = require('../middlewares/Auth');

// -------------  routes --------------

router.post('/login',login);
router.post('/registation',registation);
router.post('/sendotp',sendotp);
router.post('updaterestuarent',verifytoken,UpdateRestuarent);

module.exports = router;