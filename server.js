// // // const express = require("express");
// // // const exphbs  = require('express-handlebars'); // Require Handlebars module for Express
// // // const bodyParser = require("body-parser");
// // // const fs = require("fs");
// // // const path = require("path");
// // // const crypto = require("crypto");
// // // const session = require("express-session");
// // // const hbs = require("hbs");

// // // const app = express();
// // // const port = 8081;
// // // const secretKey = crypto.randomBytes(64).toString("hex");
// // // const dataFilePath = path.join(__dirname, "data", "allUsersData.json");

// // // // Ensure the data directory exists
// // // const dataDir = path.join(__dirname, "data");
// // // if (!fs.existsSync(dataDir)) {
// // //   fs.mkdirSync(dataDir);
// // // }

// // // // Initialize the JSON file to be empty on server start
// // // fs.writeFileSync(dataFilePath, JSON.stringify({}), "utf8");

// // // app.use(
// // //   session({
// // //     secret: secretKey,
// // //     resave: false,
// // //     saveUninitialized: true,
// // //     cookie: { secure: false },
// // //   })
// // // );

// // // app.use(bodyParser.urlencoded({ extended: true }));
// // // app.use(bodyParser.json());
// // // app.use(express.static(path.join(__dirname, "public")));
// // // app.use('/exports', express.static(path.join(__dirname, 'exports')));
// // // app.set('view engine', 'hbs');
// // // app.set('views', path.join(__dirname, 'src')); // Set directory for template files

// // // // Register partials directory
// // // hbs.registerPartials(path.join(__dirname, 'src', 'partials'));


// // // // serve the landing page of application
// // // app.get("/", (req, res) => {
// // //   res.sendFile(__dirname + "/public/html/index.html");
// // // });

// // // // serve forms page when /forms get called
// // // app.get("/forms", (req, res) => {
// // //   res.sendFile(__dirname + "/public/forms/macchiato.html");
// // // });

// // // // Example route rendering a Handlebars view
// // // app.get('/forms/getResume', (req, res) => {
// // //   res.render('resume'); // Renders src/resume.hbs
// // // });


// // // // Post method to submit the data/store data in the current json
// // // app.post("/submit-form", (req, res) => {
// // //   const formData = req.body;

// // //   // Save updated data
// // //   fs.writeFile(
// // //     dataFilePath,
// // //     JSON.stringify(formData, null, 2),
// // //     "utf8",
// // //     (err) => {
// // //       if (err) {
// // //         console.error("Error writing file:", err);
// // //         res.status(500).json({ error: "Internal Server Error" });
// // //         return;
// // //       }

// // //       res.json(formData);
// // //     }
// // //   );
// // // });

// // // app.listen(port, () => {
// // //   console.log(`Server is running on http://localhost:${port}`);
// // // });
// // const express = require("express");
// // const exphbs  = require('express-handlebars');
// // const bodyParser = require("body-parser");
// // const fs = require("fs");
// // const path = require("path");
// // const crypto = require("crypto");
// // const session = require("express-session");
// // const hbs = require("hbs");
// // const pdf = require('html-pdf');
// // const handlebars = require('handlebars');
// // const handlebarsWax = require('handlebars-wax');
// // const moment = require('moment');

// // const app = express();
// // const port = 8081;
// // const secretKey = crypto.randomBytes(64).toString("hex");
// // const dataFilePath = path.join(__dirname, "data", "allUsersData.json");

// // // Ensure the data directory exists
// // const dataDir = path.join(__dirname, "data");
// // if (!fs.existsSync(dataDir)) {
// //   fs.mkdirSync(dataDir);
// // }

// // // Initialize the JSON file to be empty on server start
// // fs.writeFileSync(dataFilePath, JSON.stringify({}), "utf8");

// // app.use(
// //   session({
// //     secret: secretKey,
// //     resave: false,
// //     saveUninitialized: true,
// //     cookie: { secure: false },
// //   })
// // );

// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(bodyParser.json());
// // app.use(express.static(path.join(__dirname, "public")));
// // app.use('/exports', express.static(path.join(__dirname, 'exports')));
// // app.set('view engine', 'hbs');
// // app.set('views', path.join(__dirname, 'src')); // Set directory for template files

// // // Register partials directory
// // hbs.registerPartials(path.join(__dirname, 'src', 'partials'));

// // // Register Handlebars helpers
// // handlebars.registerHelper({
// //   removeProtocol: url => url.replace(/.*?:\/\//g, ''),
// //   concat: (...args) => args.filter(arg => typeof arg !== 'object').join(''),
// //   formatAddress: (...args) => args.filter(arg => typeof arg !== 'object').join(' '),
// //   formatDate: date => moment(date).format('MM/YYYY'),
// //   lowercase: s => s.toLowerCase(),
// //   eq: (a, b) => a === b,
// // });


// // // Read and compile style.css
// // const cssPath = path.join(__dirname, 'src', 'style.css');
// // const css = fs.readFileSync(cssPath, 'utf-8');

// // // Read and compile resume.hbs
// // const resumeTemplatePath = path.join(__dirname, 'src', 'resume.hbs');
// // const resumeTemplate = fs.readFileSync(resumeTemplatePath, 'utf-8');
// // const Handlebars = handlebarsWax(handlebars);
// // Handlebars.partials(path.join(__dirname, 'src', 'partials', '**', '*.hbs'));

// // function render(resume) {
// //   return Handlebars.compile(resumeTemplate)({
// //     style: `<style>${css}</style>`,
// //     resume,
// //   });
// // }

// // // Serve the landing page of the application
// // app.get("/", (req, res) => {
// //   res.sendFile(__dirname + "/public/html/index.html");
// // });

// // // Serve forms page when /forms is called
// // app.get("/forms", (req, res) => {
// //   res.sendFile(__dirname + "/public/forms/macchiato.html");
// // });

// // // Example route rendering a Handlebars view
// // app.get('/forms/getResume', (req, res) => {
// //   res.render('resume'); // Renders src/resume.hbs
// // });

// // // Post method to submit the data/store data in the current json
// // app.post("/submit-form", (req, res) => {
// //   const formData = req.body;

// //   // Save updated data
// //   fs.writeFile(
// //     dataFilePath,
// //     JSON.stringify(formData, null, 2),
// //     "utf8",
// //     (err) => {
// //       if (err) {
// //         console.error("Error writing file:", err);
// //         res.status(500).json({ error: "Internal Server Error" });
// //         return;
// //       }

// //       res.json(formData);
// //     }
// //   );
// // });

// // // Endpoint to get HTML resume
// // app.post('/generate-html', (req, res) => {
// //   const resumeData = req.body;
// //   const html = render(resumeData);
// //   res.send(html);
// // });

// // // Endpoint to get PDF resume
// // app.post('/generate-pdf', (req, res) => {
// //   const resumeData = req.body;
// //   const html = render(resumeData);

// //   // Create PDF from HTML in memory
// //   pdf.create(html).toBuffer((err, buffer) => {
// //     if (err) {
// //       return res.status(500).send(err);
// //     }
// //     res.setHeader('Content-Disposition', 'attachment;filename=resume.pdf');
// //     res.setHeader('Content-Type', 'application/pdf');
// //     res.send(buffer);
// //   });
// // });

// // app.listen(port, () => {
// //   console.log(`Server is running on http://localhost:${port}`);
// // });

// // module.exports = {
// //   render,
// // };
// const express = require("express");
// const exphbs  = require('express-handlebars');
// const bodyParser = require("body-parser");
// const path = require("path");
// const crypto = require("crypto");
// const session = require("express-session");
// const hbs = require("hbs");
// const pdf = require('html-pdf');
// const handlebars = require('handlebars');
// const handlebarsWax = require('handlebars-wax');
// const moment = require('moment');
// const fs = require("fs")

// const app = express();
// const port = 8081;
// const secretKey = crypto.randomBytes(64).toString("hex");

// app.use(
//   session({
//     secret: secretKey,
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false },
//   })
// );

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "public")));
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'src')); // Set directory for template files

// // Register partials directory
// hbs.registerPartials(path.join(__dirname, 'src', 'partials'));

// // Register Handlebars helpers
// handlebars.registerHelper({
//   removeProtocol: url => url.replace(/.*?:\/\//g, ''),
//   concat: (...args) => args.filter(arg => typeof arg !== 'object').join(''),
//   formatAddress: (...args) => args.filter(arg => typeof arg !== 'object').join(' '),
//   formatDate: date => moment(date).format('MM/YYYY'),
//   lowercase: s => s.toLowerCase(),
//   eq: (a, b) => a === b,
// });

// // Read and compile style.css
// const cssPath = path.join(__dirname, 'src', 'style.css');
// const css = fs.readFileSync(cssPath, 'utf-8');

// // Read and compile resume.hbs
// const resumeTemplatePath = path.join(__dirname, 'src', 'resume.hbs');
// const resumeTemplate = fs.readFileSync(resumeTemplatePath, 'utf-8');
// const Handlebars = handlebarsWax(handlebars);
// Handlebars.partials(path.join(__dirname, 'src', 'partials', '**', '*.hbs'));

// function render(resume) {
//   return Handlebars.compile(resumeTemplate)({
//     style: `<style>${css}</style>`,
//     resume,
//   });
// }

// // Serve the landing page of the application
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/html/index.html");
// });

// // Serve forms page when /forms is called
// app.get("/forms", (req, res) => {
//   res.sendFile(__dirname + "/public/forms/macchiato.html");
// });

// // Post method to submit the data/store data in the current json
// app.post("/submit-form", (req, res) => {
//   const formData = req.body;

//   // Generate the HTML from the formData
//   const html = render(formData);

//   // Send back the HTML response
//   res.send(html);
// });

// // Endpoint to get PDF resume
// app.post('/generate-pdf', (req, res) => {
//   const resumeData = req.body; // Get resume data from request body
//   const html = render(resumeData);

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
//   render,
// };
// const express = require("express");
// const exphbs = require('express-handlebars');
// const bodyParser = require("body-parser");
// const path = require("path");
// const crypto = require("crypto");
// const session = require("express-session");
// const hbs = require("hbs");
// const pdf = require('html-pdf');
// const handlebars = require('handlebars');
// const handlebarsWax = require('handlebars-wax');
// const moment = require('moment');
// const fs = require("fs");

// const app = express();
// const port = 8081;
// const secretKey = crypto.randomBytes(64).toString("hex");

// app.use(
//   session({
//     secret: secretKey,
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false },
//   })
// );

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
//   const template = Handlebars.compile(resumeTemplate);
//   const html = template({ resume: formData }); // Assuming 'resume' is the key for formData
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

// // Endpoint to submit form data and render HTML
// app.post("/submit-form", (req, res) => {
//   const formData = req.body;

//   // Generate HTML from formData
//   const html = renderResume(formData);

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
// const exphbs = require('express-handlebars');
// const bodyParser = require("body-parser");
// const path = require("path");
// const crypto = require("crypto");
// const session = require("express-session");
// const hbs = require("hbs");
// const pdf = require('html-pdf');
// const handlebars = require('handlebars');
// const handlebarsWax = require('handlebars-wax');
// const moment = require('moment');
// const fs = require("fs");

// const app = express();
// const port = 8081;
// const secretKey = crypto.randomBytes(64).toString("hex");

// app.use(
//   session({
//     secret: secretKey,
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false },
//   })
// );

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
// console.log(Handlebars.partials)
// //console.log(formData)

// // Function to render resume using Handlebars
// function renderResume(formData) {
//   const template = Handlebars.compile(resumeTemplate);
//   const html = template({
//     style: `<style>${css}</style>`,
//     resume: formData
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

//   // Log formData to console for inspection
//   console.log("Received formData:", formData);

//   // Generate HTML from formData
//   const html = renderResume(formData);

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
Handlebars.partials(path.join(__dirname, 'src', 'partials', '**', '*.hbs'));
console.log(Handlebars.partials())

// Function to render resume using Handlebars
// function renderResume(formData) {
//   console.log(formData);
//   const template = Handlebars.compile(resumeTemplate);
//   //console.log(template());
//   const html = template({
//     style: `<style>${css}</style>`,
//     resume: formData
//   });
//   return html;
// }

function renderResume(formData) {
  const template = Handlebars.compile(resumeTemplate);


  const html = template({
    style: `<style>${css}</style>`,
    resume: formData
  });
 // console.log("Generated HTML:", html);
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

app.post("/submit-form", (req, res) => {
  const formData = req.body;

  // Log formData to console for inspection
  //console.log("Received formData:", );

  const data = JSON.stringify(formData)
  console.log("receviced json:"+data);

  // Generate HTML from formData
  const html = renderResume(data);

  // Send HTML response
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