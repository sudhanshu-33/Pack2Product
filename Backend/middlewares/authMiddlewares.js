const jwt = require("jsonwebtoken");
const userModel = require("../models/Usermodel");


const protect = async (req, res, next) => {
    try {
       const token = req.cookies.token 
           || req.headers.authorization?.split(' ')[1]
           || req.query.token;  // ← ye add karo
        console.log('TOKEN RECEIVED:', token);
        console.log('JWT_SECRET:', process.env.JWT_SECRET);
        if (!token) {
            return res.status(401).json({ message: "token not found" });
        }
        const user = jwt.verify(token, process.env.JWT_SECRET);
        console.log(user);
        req.user = await userModel.findById(user.id);
        if (!req.user) {
            return res.status(401).json({ message: "user not found" });
        }
        next();
    } catch(err) {
        console.log('JWT ERROR:', err.message);
        res.status(401).json({ message: 'login token invalid' });
    }
}

module.exports = {protect};