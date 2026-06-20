const express = require('express');
const router = express.Router();
const {protect} = require("../middlewares/authMiddlewares")

const {registerUser,loginUser} = require('../controllers/authController');

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/test',protect,  (req, res) => {
  res.json({ message: 'Protected route working!' });
});
module.exports=router;