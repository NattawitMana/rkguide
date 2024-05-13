const express = require("express");
const {register,login,getMyProfile} = require("../controllers/auth");

const router = express.Router();
const {protect}=require('../middleware/auth')

router.post('/register',register);
router.post('/login',login);
router.get('/me',protect,getMyProfile);

module.exports=router;