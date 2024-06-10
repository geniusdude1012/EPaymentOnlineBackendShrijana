const pdf = require("pdf-creator-node");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");

const template = fs.readFileSync("./views/template.hbs", "utf-8");
const templatecomp = handlebars.compile(template);

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
  html: "<html><body><h1>Hello, World!</h1></body></html>",
};
const document = {
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
