
// const express = require("express");
// const bodyParser = require("body-parser");
// const path = require("path");
// const hbs = require("hbs");
// const pdf = require('html-pdf');
// const handlebars = require('handlebars');
// const handlebarsWax = require('handlebars-wax');
// const moment = require('moment');
// const fs = require("fs");


// const app = express();
// const port = 8081;
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "public")));
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'src')); // Set directory for template files

// // Register Handlebars helpers
// handlebars.registerHelper({
//   removeProtocol: url => url.replace(/.*?:\/\//g, ''),
//   concat: (...args) => args.filter(arg => typeof arg !== 'object').join(''),
//   formatAddress: (...args) => args.filter(arg => typeof arg !== 'object').join(' '),
//   formatDate: date => moment(date).format('MM/YYYY'),
//   lowercase: s => s.toLowerCase(),
//   eq: (a, b) => a === b,
// });


// // Register partials directory
// hbs.registerPartials(path.join(__dirname, 'src', 'partials'));


// // Read and compile style.css
// const cssPath = path.join(__dirname, 'src', 'style.css');
// const css = fs.readFileSync(cssPath, 'utf-8');


// // Read and compile resume.hbs
// const resumeTemplatePath = path.join(__dirname, 'src', 'resume.hbs');
// const resumeTemplate = fs.readFileSync(resumeTemplatePath, 'utf-8');
// const Handlebars = handlebarsWax(handlebars);
// Handlebars.partials(path.join(__dirname, 'src', 'partials', '**', '*.hbs'));
// console.log(Handlebars.partials())



// // Function to render resume using Handlebars
// function renderResume(formData) {
//   const template = Handlebars.compile(resumeTemplate);
//   const html = template({
//     style: `<style>${css}</style>`,
//     formData
//   });
//   return html;
// }

// // Serve the landing page of the application
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/html/index.html");
// });

// // Serve forms page when /forms is called
// app.get("/forms", (req, res) => {
//   res.sendFile(__dirname + "/public/forms/macchiato.html");
// });

// app.post("/submit-form", (req, res) => {
  
//   const formData = req.body;

//   const data = JSON.stringify(formData)
//   console.log("receviced json:"+data);

//   // Generate HTML from formData
//   const html = renderResume(data);

//   console.log(html);
//   // Send HTML response
//   res.send(html);
// });

// // Endpoint to generate PDF resume
// app.post('/generate-pdf', (req, res) => {
//   const resumeData = req.body; // Get resume data from request body
//   const html = renderResume(resumeData);

//   // Create PDF from HTML in memory
//   pdf.create(html).toBuffer((err, buffer) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     res.setHeader('Content-Disposition', 'attachment;filename=resume.pdf');
//     res.setHeader('Content-Type', 'application/pdf');
//     res.send(buffer);
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// module.exports = {
//   renderResume,
// };





















// const express = require("express");
// const bodyParser = require("body-parser");
// const path = require("path");
// const hbs = require("hbs");
// const pdf = require('html-pdf');
// const handlebars = require('handlebars');
// const handlebarsWax = require('handlebars-wax');
// const moment = require('moment');
// const fs = require("fs");
// const { log } = require("console");

// const app = express();
// const port = 8081;

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "public")));
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'src')); // Set directory for template files

// // Register Handlebars helpers
// handlebars.registerHelper({
//   removeProtocol: url => url.replace(/.*?:\/\//g, ''),
//   concat: (...args) => args.filter(arg => typeof arg !== 'object').join(''),
//   formatAddress: (...args) => args.filter(arg => typeof arg !== 'object').join(' '),
//   formatDate: date => moment(date).format('MM/YYYY'),
//   lowercase: s => s.toLowerCase(),
//   eq: (a, b) => a === b,
// });


// // Register partials directory
// hbs.registerPartials(path.join(__dirname, 'src', 'partials'));




// // Read and compile style.css
// const cssPath = path.join(__dirname, 'src', 'style.css');
// const css = fs.readFileSync(cssPath, 'utf-8');




// // Read and compile resume.hbs
// const resumeTemplatePath = path.join(__dirname, 'src', 'resume.hbs');
// const resumeTemplate = fs.readFileSync(resumeTemplatePath, 'utf-8');
// const Handlebars = handlebarsWax(handlebars);
// Handlebars.partials(path.join(__dirname, 'src', 'partials', '**', '*.hbs'));



// // Function to render resume using Handlebars
// function renderResume(formData) {
//   console.log("FormData to be rendered:", formData);

//   const template = Handlebars.compile(resumeTemplate);
//   const html = template({
//     style: `<style>${css}</style>`,
//     resume: formData
//   });
//   console.log("Generated HTML:", html);
//   return html;
// }



// // Serve the landing page of the application
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/html/index.html"));
// });


// // Serve forms page when /forms is called
// app.get("/forms", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/forms/macchiato.html"));
// });



// // Endpoint to submit form data and render HTML
// app.post("/submit-form", (req, res) => {
//   const formData = req.body;

//   // Log the received formData for inspection
//   console.log("Received formData:", formData);

//   // Generate HTML from formData
//   const html = renderResume(formData);

//   console.log(html)
//   // Send HTML response
//   res.send(html);
// });



// // Endpoint to generate PDF resume
// app.post('/generate-pdf', (req, res) => {
//   const resumeData = req.body; // Get resume data from request body
//   const html = renderResume(resumeData);

//   // Create PDF from HTML in memory
//   pdf.create(html).toBuffer((err, buffer) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     res.setHeader('Content-Disposition', 'attachment;filename=resume.pdf');
//     res.setHeader('Content-Type', 'application/pdf');
//     res.send(buffer);
//   });
// });



// app.listen(port, () => {
//   console.log(`Server is running on http://localhost${port}`);
// });



// module.exports = {
//   renderResume,
// };





















const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const hbs = require("hbs");
const pdf = require('html-pdf');
const handlebars = require('handlebars');
const handlebarsWax = require('handlebars-wax');
const moment = require('moment');
const fs = require("fs");
const { log } = require("console");

const app = express();
const port = 8081;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src')); // Set directory for template files

// Register Handlebars helpers
handlebars.registerHelper({
  removeProtocol: url => url.replace(/.*?:\/\//g, ''),
  concat: (...args) => args.filter(arg => typeof arg !== 'object').join(''),
  formatAddress: (...args) => args.filter(arg => typeof arg !== 'object').join(' '),
  formatDate: date => moment(date).format('MM/YYYY'),
  lowercase: s => s.toLowerCase(),
  eq: (a, b) => a === b,
});

// Initialize HandlebarsWax with Handlebars
const Handlebars = handlebarsWax(handlebars);

// Register partials
Handlebars.partials(path.join(__dirname, 'src', 'partials', '', '*.hbs'));

// Function to render resume using Handlebars
function renderResume(formData) {
  const css = fs.readFileSync(path.join(__dirname, 'src', 'style.css'), 'utf-8');
  const resumeTemplate = fs.readFileSync(path.join(__dirname, 'src', 'resume.hbs'), 'utf-8');
  const template = Handlebars.compile(resumeTemplate);
  const html = template({
    style: `<style>${css}</style>`,
    resume: formData
  });
  return html;
}

// Serve the landing page of the application
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/html/index.html"));
});

// Serve forms page when /forms is called
app.get("/forms", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/forms/macchiato.html"));
});

// Endpoint to submit form data and render HTML
app.post("/submit-form", (req, res) => {
  const formData = req.body;
  const html = renderResume(formData);
  console.log(html)
  res.send(html);
});

// Endpoint to generate PDF resume
app.post('/generate-pdf', (req, res) => {
  const resumeData = req.body; // Get resume data from request body
  const html = renderResume(resumeData);
  pdf.create(html).toBuffer((err, buffer) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.setHeader('Content-Disposition', 'attachment;filename=resume.pdf');
    res.setHeader('Content-Type', 'application/pdf');
    res.send(buffer);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = {
  renderResume,
};