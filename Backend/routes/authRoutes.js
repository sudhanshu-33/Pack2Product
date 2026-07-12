const express = require('express');
const router = express.Router();
const passport = require("passport");
const {protect} = require("../middlewares/authMiddlewares")

const {
  registerValidation,
  loginValidation,
  validate,
} = require("../validation/authValidation");
const {registerUser,loginUser,googleCallback,getMe} = require('../controllers/authController');
const authLimiter = require("../middlewares/rateLimiter");

router.post(
  "/register",
  authLimiter,
  registerValidation,
  validate,
  registerUser
);

router.post(
  "/login",
  authLimiter,
  loginValidation,
  validate,
  loginUser
);
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/login",
  }),
  googleCallback
);
router.get("/me", protect, getMe);
router.get('/test',protect,  (req, res) => {
  res.json({ message: 'Protected route working!' });
});
module.exports=router;