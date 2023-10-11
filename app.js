const express = require("express");

const app = express();
const userRouter = require("./routers/userRouter");
const myLogger = require("./middlewares/logger");
const reqTime = require("./middlewares/reqTime");

app.use(express.json());
app.use(myLogger);
app.use(reqTime);

app.use("/api/v1/users", userRouter);

module.exports = app;