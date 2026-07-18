const express = require('express');
// const path = require('path');
const cors = require('cors');
const cookieparser = require("cookie-parser");
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();
const authRoutes = require('./routes/authRoutes');
const contentRoutes = require('./routes/contentRoutes');
const session = require("express-session");
const passport = require("./config/passport");
const aiRoutes = require("./routes/aiRoutes");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
connectDB();
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use('/auth', authRoutes);
app.use("/content", contentRoutes);
app.use("/api/ai", aiRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));