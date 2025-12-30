const express = require('express');
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser")
require("dotenv").config();






const app = express();

// Helmet is security middleware for express it helps protect your app
// by setting variour HTTP headers
app.use(helmet())

// Morgan used for logger
app.use(morgan('dev'))
app.use(cors({
    origin : (process.env.ALLOWED_ORIGINS || "").split(",").map(s => s.trim()).filter(Boolean)
}))