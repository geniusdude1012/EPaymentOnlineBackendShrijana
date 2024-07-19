const jwt = require("jsonwebtoken");
const collection = require("../db");
require("dotenv").config();
const tokenauth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    console.log("Token is \t");
    console.log(token);
    if (!token) {
      return res.status(401).json({ message: "No token acquired" });
    }
    const verifyjwt = jwt.verify(token, process.env.SECRET);
    const rootuser = await collection.findOne({
      email: verifyjwt.email,
      "token.token": verifyjwt.token,
    });
    if (!rootuser) {
      throw new Error("User not found");
    }
    req.token = token;
    req.rootuser = rootuser;
    req.name = rootuser.name;
    req.Balance = rootuser.Balance;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: "Unauthorized user" });
  }
};
module.exports = tokenauth;
