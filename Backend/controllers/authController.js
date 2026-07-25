const user = require('../models/userModel');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs')

const token = (id) =>{
  return jwt.sign({id},process.env.JWT_SECRET ,{
    expiresIn : process.env.JWT_EXPIRE
  });
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email already registered' });
    }
    bcrypt.genSalt(10,(err, salt) =>{
      bcrypt.hash(password, salt, async (err, hash) =>{
        let user = await User.create({
          name,
          email,
          password:hash
        });

    

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token : token(user._id)
    });
  });
});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("EMAIL:", email);
    console.log("PASSWORD:", password);

    const loggedUser = await User.findOne({ email });
     console.log("USER FOUND:", loggedUser);
    if (!loggedUser) {
      return res.status(400).json({ message: 'enter valid email or password' });
    }
       bcrypt.compare(password,loggedUser.password, (err,result) =>{
        if(result) {
            res.status(200).json({
            _id: loggedUser._id,
            name: loggedUser.name,
            email: loggedUser.email,
            token : token(loggedUser._id)
    });
           
        }else{
          res.status(400).json({message : "Enter valid email or password"})
        }
    })

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const googleCallback = async (req, res) => {
  try {
    const user = req.user;

    const jwtToken = token(user._id);

    res.redirect(
      `${process.env.FRONTEND_URL}/google-success?token=${jwtToken}`
    );

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const User = require("../models/Usermodel");

const updateProfile = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required.",
      });
    }

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    user.name = name;
    user.email = email;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile updated successfully.",
      user,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  googleCallback,
  getMe,
  updateProfile
};