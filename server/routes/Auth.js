const express = require('express');
const router = express.Router();

const { sendotp ,registation, login ,UpdateRestuarent,getUserData } = require('../controller/RestuarantRegistation')
const { verifytoken } = require('../middlewares/Auth');

// -------------  routes --------------

router.post('/login',login);
router.post('/registation',registation);
router.post('/sendotp',sendotp);
router.post('updaterestuarent',verifytoken,UpdateRestuarent);
router.get('/getuser',verifytoken,getUserData);

module.exports = router;