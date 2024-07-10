const jwt = require("jsonwebtoken");
const collection = require("../db");
const tokenauth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const verifyjwt = jwt.verify(token, process.env.SECRET);
    const rootuser = collection.find({
      email: verify.email,
      "token.token": token,
    });
    if (!rootuser) {
      return res.status(401).json({ message: "Unauthorized user" });
    }
    req.token = token;
    req.rootuser = rootuser;
    req.name = rootuser.name;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
module.exports = tokenauth;
