const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const protect = async (req, res, next) => {
    try {
       const token = req.cookies.token 
           || req.headers.authorization?.split(' ')[1]
           || req.query.token;  // ← ye add karo
       
        if (!token) {
            return res.status(401).json({ message: "token not found" });
        }
        const user = jwt.verify(token, process.env.JWT_SECRET);
       
        req.user = await userModel.findById(user.id);
        if (!req.user) {
            return res.status(401).json({ message: "user not found" });
        }
        next();
    } catch(err) {
        
        res.status(401).json({ message: 'login token invalid' });
    }
}

module.exports = {protect};