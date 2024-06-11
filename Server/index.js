const cors = require("cors");
const express = require("express");
const app = express();
const hbs = require("hbs");
const collection = require("./db");
const PORT = 8000;
const path = require("path");
const bcrypt = require("bcryptjs");
const { hashSync } = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const genPDF = require("./genepdf");
const { engine } = require("express-handlebars");

//...

app.set("view engine", "hbs");
app.engine("hbs", engine({ extname: "hbs" }));

//...
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const templatePath = path.join(__dirname, "../templates");
app.listen(PORT, (req, res) => {
  console.log("Port connected");
});
app.use(express.json());
app.use(cors());
// app.set("view engine", "ejs");
// app.set("view engine", "hbs");

// app.engine("hbs", exphbs({ extname: "hbs" }));
// const exphbs = require("express-handlebars");

// hbs.registerPartials(path.join(__dirname, "views/electricity"));
// app.set("views", templatePath);
app.use(express.urlencoded({ extended: false }));
app.get("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await collection.findOne({ email: email });
    if (user) {
      if (check) {
        res.json("exist");
      } else {
        res.json("not exist");
      }
    } else {
      res.json("not exist");
    }
  } catch (err) {}
});
// app.get("/Login", (req, res) => {
//   res.render("login");
// });
// app.get("/signup", (req, res) => {
//   res.render("signup");
// });
F
//acquire data from register
app.post("/Register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashpassword = await hashSync(req.body.password, 10);
  const data = { name: name, email: email, password: hashpassword };
  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      return res.json({ status: "error" });
    } else {
      console.log("User registered successfully");
      await collection.insertMany([data]);
      return res.json({ status: "success" });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//Login verify

app.post("/Login", async (req, res) => {
  const user = await collection.findOne({
    email: req.body.email,
  });
  if (user) {
    const validpassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (validpassword) {
      console.log("Login successful");
      return res.json({ status: "success", user: true });
    } else {
      console.log("Incorrect password");
      return res.json({ status: "error", user: false });
    }
  } else {
    console.log("User not found");
    return res.json({ status: "invalid", user: false });
  }
});
app.post("/electricitybill", async (req, res) => {
  const { customerId, customerName, counterNo, totalMonths, dateOfEnquiry } =
    req.body;
  console.log({
    customerId,
    customerName,
    counterNo,
    totalMonths,
    dateOfEnquiry,
  });

  genPDF(customerId, customerName, counterNo, totalMonths, dateOfEnquiry);
  return res.json({ status: "success", data: req.body });
});
