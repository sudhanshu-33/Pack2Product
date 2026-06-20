const User = require('../models/Usermodel');
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

    const loggedUser = await User.findOne({ email });
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


module.exports = { registerUser,loginUser };