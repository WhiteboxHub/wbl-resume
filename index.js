const fs = require('fs');
const handlebars = require('handlebars');
const handlebarsWax = require('handlebars-wax');
const moment = require('moment');
const path = require('path')

handlebars.registerHelper({
  removeProtocol: url => url.replace(/.*?:\/\//g, ''),
  concat: (...args) => args.filter(arg => typeof arg !== 'object').join(''),
  // Arguments: {address, city, subdivision, postalCode, countryCode}
  // formatAddress: (...args) => addressFormat(args).join(' '),
  formatAddress: (...args) => args.filter(arg => typeof arg !== 'object').join(' '),
  formatDate: date => moment(date).format('MM/YYYY'),
  lowercase: s => s.toLowerCase(),
  eq: (a, b) => a === b,
});

// Read resume.json
const resumePath = path.join(__dirname, 'resume.json');
const resumeData = JSON.parse(fs.readFileSync(resumePath, 'utf-8'));

// Read and compile style.css
const cssPath = path.join(__dirname, 'src', 'style.css');
const css = fs.readFileSync(cssPath, 'utf-8');

// Read and compile resume.hbs
const resumeTemplatePath = path.join(__dirname, 'src', 'resume.hbs');
const resumeTemplate = fs.readFileSync(resumeTemplatePath, 'utf-8');
const Handlebars = handlebarsWax(handlebars);
Handlebars.partials(path.join(__dirname, 'src', 'partials', '**', '*.hbs'));
function render(resume) {
//   const dir = `${__dirname}/src`;
//   const css = fs.readFileSync(`${dir}/style.css`, 'utf-8');
//   const resumeTemplate = fs.readFileSync(`${dir}/resume.hbs`, 'utf-8');

//   const Handlebars = handlebarsWax(handlebars);

//   Handlebars.partials(`${dir}/sections/**/*.{hbs,js}`);

  return Handlebars.compile(resumeTemplate)({
    style: `<style>${css}</style>`,
    resume,
  });
}
// Write rendered HTML to file (optional)
const outputPath = path.join(__dirname, 'dist', 'resume.html');
fs.writeFileSync(outputPath, render(resumeData), 'utf-8');

console.log('Resume generated successfully!');

module.exports = {
  render,
};