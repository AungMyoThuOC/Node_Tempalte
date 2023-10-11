const myLogger = (req, res, next) => {
    console.log("Hello Form Sever");
    next();
}

module.exports = myLogger;