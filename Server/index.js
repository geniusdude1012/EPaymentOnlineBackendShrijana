const cors = require("cors");
const express = require("express");
const app = express();
const hbs = require("hbs");
const collection = require("./db");
// const number = require("./db");
const PORT = 8000;
const path = require("path");
const bcrypt = require("bcryptjs");
const { hashSync } = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const { genPDFE, genPDFW } = require("./genepdf");
const { engine } = require("express-handlebars");
const secret = "epayment123forncitproject2ndinsemestersixth1234455";
const Cookieparser = require("cookie-parser");
const { BADFLAGS } = require("dns");
const sendEmail = require("./mails/mailer");
const randomstring = require("randomstring");
const tokenauth = require("./middleware/auth");

//...

app.set("view engine", "hbs");
app.engine("hbs", engine({ extname: "hbs" }));

//...
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Cookieparser());

// const templatePath = path.join(__dirname, "../templates");
app.listen(PORT, (req, res) => {
  console.log("Port connected");
});
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:8000", "http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST"],
  })
);

//user authentication

//

//////////////////

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

//generateotp
function generateotp() {
  return randomstring.generate({ length: 6, charset: "numeric" });
}

let geneotp = 0;
let data = {};
let checktoken = 0;
let num = 0;

//function for expired otp
const resetotp = () => {
  otp = generateotp();
  geneotp = otp;
  console.log("OTP is expired");
  console.log(otp);
};
async function generateUniqueAccountNumber(baseNumber, suffixLength) {
  let unique = false;
  let accountNumber;

  while (!unique) {
    const suffix = randomstring.generate({
      length: suffixLength,
      charset: "numeric",
    });
    accountNumber = baseNumber + Number(suffix);

    // Check if the account number already exists in the database
    const existingUser = await collection.findOne({ accountno: accountNumber });
    if (!existingUser) {
      unique = true;
    }
  }

  return accountNumber;
}
//sending otp to mail
const emailsender = async () => {
  const otp = generateotp();
  geneotp = otp;
  //sending email notification
  // function sendOTP(email, otp) {
  const msg =
    "<p> Hi " +
    data.name +
    ", Please verify your email.<br> Your OTP for verification is " +
    otp +
    "</p>";
  sendEmail(data.email, "Email verification", msg);
  if (sendEmail) {
    console.log("Email sent successfully");
  } else {
    console.log("Email not sent successfully");
  }
};
//for account number

function checkotp(a) {
  return a;
}
//acquire data from register
app.post("/Register", async (req, res) => {
  const { name, email, password } = req.body;
  const baseAccountNumber = 1600500000000000;
  const suffixLength = 4;

  const accountnum1 = await generateUniqueAccountNumber(
    baseAccountNumber,
    suffixLength
  );
  const hashpassword = await hashSync(req.body.password, 10);
  data = {
    name: name,
    email: email,
    password: hashpassword,
    token: "token",
    Balance: 0,
    accountno: accountnum1,
  };

  try {
    //request otp
    const check = await collection.findOne({ email: data.email });
    if (check) {
      res.json("User already exist");
    } else {
      emailsender();
      // sendOTP(email, otp);
      // app.post("/otpverify, ");
      function generateaccno() {
        return randomstring.generate({ length: 6, charset: "numeric" });
      }
      const randomizenum = generateaccno();
      const timer = setTimeout(resetotp, 62000);

      return res.status(201).json({ status: "success", user: data });
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

      ///token validation
      const token = await jwt.sign({ email: user.email }, secret, {
        expiresIn: "3d",
      });
      console.log(token);
      // user.password = undefined;
      const result = await collection.updateOne({ $set: { token: token } });

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        sameSite: "Lax",
      };
      res.cookie("jwt", token);
      return res.status(200).json({
        status: "success",
      });
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

  genPDFE(customerId, customerName, counterNo, totalMonths, dateOfEnquiry);
  return res.json({ status: "success", data: req.body });
});
app.post("/waterbill", async (req, res) => {
  const { customerId, customerName, counterNo, totalMonths, dateOfEnquiry } =
    req.body;
  console.log({
    customerId,
    customerName,
    counterNo,
    totalMonths,
    dateOfEnquiry,
  });

  genPDFW(customerId, customerName, counterNo, totalMonths, dateOfEnquiry);
  return res.json({ status: "success", data: req.body });
});

app.post("/verifyotp", async (req, res) => {
  const userotp = req.body.otp;
  console.log(userotp);
  console.log(geneotp);
  if (userotp === geneotp) {
    checkotp(1);
    const user = await collection.findOne({ email: data.email });
    if (user) {
      return res.json({ status: "error" });
    } else {
      console.log("User registered successfully");
      await collection.insertMany([data]);

      //token generation
      const token = jwt.sign({ email: data.email }, secret);
      console.log(token);

      //otpverification--------------------
      return res
        .status(201)
        .json({ status: "success", user: user, token: token });
    }
  } else {
    console.log("OTP didnt matched");
    res.json({ status: "error" });
  }
});

//Resend otp
app.post("/resendotp", async (req, res) => {
  emailsender();
  res.status(201).json({ status: "success" });
});
app.get("/dashboard", tokenauth, (req, res) => {
  console.log("HELLO");
  // console.log(number);
  res.send(req.rootuser);
});
app.get("/deposit", tokenauth, (req, res) => {});

app.get("/logout", async (req, res) => {
  res.clearCookie("jwt");
  res.status(200).send("Logged out");
});
app.get("/deposit", async (req, res) => {
  const user = await collection.findOne({
    email: req.body.email,
  });

  if (user) {
    const { amount } = req.body.amount;
    if (!amount || !email) {
      return res
        .status(400)
        .json({ status: "error", message: "Missing amount or email" });
    }
    const updatedBalance = user.Balance + amount;

    await collection.updateOne({ $set: { Balance: updatedBalance } });

    res.status(200).json({ status: "success", updatedBalance });
  } else {
    res.status(404).json({ status: "error", message: "User not found" });
  }
});
