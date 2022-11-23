const jwt = require("jsonwebtoken");
// require('dotenv').config()

module.exports = function (req, res, next) {

  console.log("THE REQUESTION IS ", req);
  const authHeader = req.header("Authorization").split(" ");
  console.log(authHeader);
  const token = authHeader[1];
  if (!token) return res.status(401).json({ message: "Auth Error" });


  try {
    const decoded = jwt.verify(token, "sohel");
    console.log("decoded", decoded)
    req.user = decoded.user;
    next();
  } catch (e) {
    console.error(e);
    res.status(400).send({ message: "Invalid Token", error:e });
  }
};
