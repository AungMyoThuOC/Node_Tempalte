const User = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            status: "success",
            users,
        });
    } catch (err) {
        res.status(401).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.getOneUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            status: "success",
            user,
        });
    } catch(err) {
        res.status(401).json({
            status: "fail",
            message: "Something went wrong",
            error: err,
        });
    }
};

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });

        res.status(200).json({
            status: "success",
            req: req.requestTime,
            user,
        });
    } catch (err) {
        console.log(err);
        res.status(401).json ({
            status: "fail",
            message: `${err.message} ${err.name}`,
        });
    }
};

exports.register = async (req, res) => {
    try {
        const newUser = await User.create(req.body);

        res.status(200).json({
            status: "Success",
            message: "Successfully added a user to database",
            user: newUser,
        });
    } catch(err) {
        console.log(err);
        res.status(401).json({
            status: "fail",
            message: `${err.message} ${err.name}`,
        });
    }
};

exports.updateOneUser = async (req, res) => {
    try {
        const newUser = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        res.status(200).json({
            status: "success",
            message: "User has been updated successfully.",
            user: newUser,
        });
    } catch(err) {
        res.status(401).json({
            status: "fail",
            message: "Something went wrong",
            error: err,
        });
    }
};

exports.deleteOneUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: "success",
            message: "User has been deleted successfully."
        });
    } catch(err) {
        res.status(400).json({
            status: "fail",
            message: "Error whild deleting user",
        });
    }
};

exports.deleteAllUser = async (req, res) => {
    try {
        await User.deleteMany();
        res.status(204).json({
          status: "Success",
          message: "User has been deleted successfully.",
        });
      } catch (err) {
        res.status(400).json({
          status: 'fail',
          message: "Error whild deleting ",
        });
      }
};

exports.checkBody = (req, res, next) => {
    console.log(req.body);
    console.log(">>>> this is checkbody middleware");
    if (!req.body.email || !req.body.name) {
        return res.status(400).json({
            status: "fail",
            message: "Missing email or name",
        });
    }
    next();
};