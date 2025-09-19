const User = require("../models/user");
// const mongoose = require("mongoose");
const session = require('express-session');

exports.userLogin = async (req, res) => {
   const {userName , password } = req.body;
   const foundUser = await User.findAndValidate(userName, password);

   if(foundUser){
        req.session.user_id = foundUser._id;
        req.session.userName = foundUser.userName;
        res.redirect('/students/dash');
   }
   else {
           req.session.errorMessage = "Invalid username or password";
           res.redirect('/user/login');
       }
}

exports.loginget = (req, res) => {
const errorMessage = req.session.errorMessage || '';  
    req.session.errorMessage = null;  
    res.render('login', { errorMessage });
}


exports.userAdd = async (req, res) =>{
      const {userName,password} = req.body
      const user = new User ({userName,password})
      await user.save()
      req.session.user_id = user._id;
      req.session.userName = user.userName;
      res.redirect('/')
}


exports.userAddget = async (req, res) =>{
      res.render('addAdmin')
}


// Destroy session and redirect to home (GET)
exports.logoutGet = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};

// Destroy session and redirect to home (POST)
exports.logoutPost = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};