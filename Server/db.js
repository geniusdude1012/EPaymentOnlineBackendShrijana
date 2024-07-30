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
  accountno: {
    type: Number,
    default: null,
  },
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
  address: {
    type: String,
    required: true,
  },
  contactno: {
    type: Number,
    required: true,
  },
  Balance: {
    type: Number,
    default: 500,
  },
  token: {
    type: String,
    default: null,
  },
  Pin: {
    type: Number,
    default: 0,
  },
});
const collection = new mongoose.model("collection1", userSchema);

//For admin
const Adminschema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    default: null,
  },
});
const collection2 = new mongoose.model("collection2", Adminschema);

const transactionschema = new mongoose.Schema({
  log: {
    type: String,
    required: true,
  },
});
const transactions = new mongoose.model("transactions", transactionschema);

//For billing
const Billschema = new mongoose.Schema({
  customerid: {
    type: Number,
    required: true,
  },
  customername: {
    type: String,
    required: true,
  },
});
const billpays = new mongoose.model("billpays", Billschema);
module.exports = {
  collection,
  collection2,
  transactions,
  billpays,
};
