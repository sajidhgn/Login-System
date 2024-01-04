import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";


const app = express();

// app.use(cors({credentials: true, origin: true}))
app.use(cors());
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');

    next();
});

app.use(compression());
app.use(cookieParser());

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3050;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});