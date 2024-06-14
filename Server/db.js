const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/login")
  .then(() => {
    console.log("mongo connected");
  })
  .catch((err) => {
    console.log(err);
  });
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  Balance: {
    type: Number,
    default: 0,
  },
  token: {
    type: String,
    default: null,
  },
});
const collection = new mongoose.model("collection1", userSchema);
module.exports = collection;
