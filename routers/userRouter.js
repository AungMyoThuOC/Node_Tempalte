const express = require("express");
const userCtrl = require("../controllers/userCtr");

const userRouter = express.Router();

userRouter
    .route("/")
    .get(userCtrl.getAllUsers)
    .delete(userCtrl.deleteAllUser);

userRouter
  .route("/:id")
  .get(userCtrl.getOneUser)
  .patch(userCtrl.updateOneUser)
  .delete(userCtrl.deleteOneUser);

userRouter.route("/login").post(userCtrl.checkBody, userCtrl.login);
userRouter.route("/register").post(userCtrl.checkBody, userCtrl.register);

module.exports = userRouter;
