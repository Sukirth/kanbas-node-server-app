// const express = require('express');
import "dotenv/config";
import mongoose from "mongoose";
import session from "express-session";
//mongodb://localhost:27017/kanbas
// "mongodb://127.0.0.1:27017/kanbas"
//mongodb+srv://kanbas:<password>@atlascluster.kojujf1.mongodb.net/?retryWrites=true&w=majority

import UserRoutes from "./users/routes.js";
import "dotenv/config";
import express from "express";
import cors from "cors";
import helloRoutes from "./hello.js";
import lab5 from './lab5.js';
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
const app = express();
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";
mongoose.connect(CONNECTION_STRING);
// mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
// app.use(cors());
app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND_URL,
    //   origin: "http://localhost:3000",
    })
);

const sessionOptions = {
secret: "any string",
resave: false,
saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
  }  
app.use(
session(sessionOptions)
);
  
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
helloRoutes(app);
lab5(app);
UserRoutes(app);
app.listen(process.env.PORT || 4000);
// app.listen(4000);