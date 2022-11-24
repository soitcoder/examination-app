const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user");
const teacher = require("./routes/teacher");
const student = require("./routes/student");
const InitiateMongoServer = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require('cors');
var path = require("path");
require('dotenv').config()



InitiateMongoServer();

const app = express();

// PORT
const PORT = 5000;


app.set("Access-Control-Allow-Origin" , "*");
app.set("Access-Control-Allow-Methods", "POST,GET,OPTIONS,DELETE,PUT")
app.set("Access-Control-Allow-Headers", "*")


// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS,DELETE,PUT")
  next();
})





app.use("/user", user);

app.use("/teacher", teacher);
app.use("/student", student);

app.use(express.static(path.join(__dirname, "/client/esm-client/build")));







app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
