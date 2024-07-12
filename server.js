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
    style:`<style>${css}</style>`,
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
// 
app.post("/submit-form", (req, res) => {
  const formData = req.body;
  const html = renderResume(formData);
  console.log(html);
  res.json({ html });  // Return the HTML content as JSON
});

// Endpoint to generate PDF resume
app.post('/generate-pdf', (req, res) => {
  const { html } = req.body;  // Get HTML from request body
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