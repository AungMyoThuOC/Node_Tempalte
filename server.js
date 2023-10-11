const mongoose  = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({
    path: "./config.env"
});

var dbpass = process.env.DB_PASSWORD;

mongodbUrl = `mongodb+srv://aungmyothu:${dbpass}@newmorningtour.hpz6puv.mongodb.net/myusersdb?retryWrites=true&w=majority`;

mongoose.connect(mongodbUrl).then((con) => {
    console.log("DB connection Successful.");
}).catch((err) => {
    console.log("Error");
});

const port = process.env.PORT;


app.route("/").get((req, res) => {
    res.end("Hello, sever is running....");
});

app.listen(port, () => {
    console.log(`App is running on port ${port}....`);
})