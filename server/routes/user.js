const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const requirelogin = require('../../authMdlwr');


router.post('/login', userController.userLogin);
router.get('/login', userController.loginget);


router.post('/addAdmin',userController.userAdd)
router.get('/addAdmin',requirelogin,userController.userAddget)


router.get('/logout', userController.logoutGet);
router.post('/logout', userController.logoutPost);

module.exports = router;