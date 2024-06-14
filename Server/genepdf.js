const pdf = require("pdf-creator-node");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");

function genPDFE(
  customerId,
  customerName,
  counterNo,
  totalMonths,
  dateOfEnquiry
) {
  var html = fs.readFileSync("./views/electricity.hbs", "utf8");

  const options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm",
    header: {
      height: "45mm",
      contents: '<div style="text-align: center;">Header Content</div>',
    },
    footer: {
      height: "28mm",
      contents: {
        first: "First Page Footer",
        default:
          "<span style='color: #444;'>{{page}}</span>/<span>{{pages}}</span>",
        last: "Last Page Footer",
      },
    },
    // Add the html option
  };
  var users = {
    customerId: customerId,
    customerName: customerName,
    counterNo: counterNo,
    totalMonths: totalMonths,
    dateOfEnquiry: dateOfEnquiry,
    // customerId, customerName, counterNo, totalMonths, dateOfEnquiry
  };

  const template = handlebars.compile(html);

  // Generate the HTML content using the template and user data
  const htmlContent = template({ users });
  const document = {
    html: htmlContent,
    data: {
      users: users,
    },
    path: "./pdfs/electricity.pdf",
  };

  pdf
    .create(document, options)
    .then((res) => {
      console.log("pdf created");
    })
    .catch((err) => {
      console.log(err);
    });
}
function genPDFW(
  customerId,
  customerName,
  counterNo,
  totalMonths,
  dateOfEnquiry
) {
  var html = fs.readFileSync("./views/water.hbs", "utf8");

  const options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm",
    header: {
      height: "45mm",
      contents: '<div style="text-align: center;">Header Content</div>',
    },
    footer: {
      height: "28mm",
      contents: {
        first: "First Page Footer",
        default:
          "<span style='color: #444;'>{{page}}</span>/<span>{{pages}}</span>",
        last: "Last Page Footer",
      },
    },
    // Add the html option
  };
  var users = {
    customerId: customerId,
    customerName: customerName,
    counterNo: counterNo,
    totalMonths: totalMonths,
    dateOfEnquiry: dateOfEnquiry,
    // customerId, customerName, counterNo, totalMonths, dateOfEnquiry
  };

  const template = handlebars.compile(html);

  // Generate the HTML content using the template and user data
  const htmlContent = template({ users });
  const document = {
    html: htmlContent,
    data: {
      users: users,
    },
    path: "./pdfs/water.pdf",
  };

  pdf
    .create(document, options)
    .then((res) => {
      console.log("pdf created");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  genPDFE,
  genPDFW,
};
