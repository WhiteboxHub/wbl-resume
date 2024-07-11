// // const express = require("express");
// // const bodyParser = require("body-parser");
// // const fs = require("fs");
// // const path = require("path");
// // const crypto = require("crypto");
// // const session = require("express-session");



// // const app = express();
// // const port = 8081;
// // const secretKey = crypto.randomBytes(64).toString("hex");
// // const dataFilePath = path.join(__dirname, "data", "allUsersData.json");
// // // Ensure the data directory exists
// // const dataDir = path.join(__dirname, "data");
// // if (!fs.existsSync(dataDir)) {
// //   fs.mkdirSync(dataDir);
// // }
// // //console.log(secretKey);

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


// // // Configure Handlebars
// // // app.engine('hbs', exphbs({
// // //   extname: 'hbs', // Set extension of template files
// // //   defaultLayout: false, // Disable default layout
// // // }));
// // app.set('view engine', 'hbs');
// // app.set('views', path.join(__dirname, 'src')); // Set directory for template files

// // // Example route rendering a Handlebars view
// // app.get('/forms/getResume', (req, res) => {
// //   res.render('resume'); // Renders src/resume.hbs
// // });

// // // serve the landing page of application
// // app.get("/", (req, res) => {
// //   res.sendFile(__dirname + "/public/html/index.html");
// // });

// // // serve forms page when /forms get called

// // app.get("/forms", (req, res) => {
// //   res.sendFile(__dirname + "/public/forms/macchiato.html");
// // });


// // //post method to submit the data/store data in the current json

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

// // app.listen(port, () => {
// //     console.log(`Server is running on http://localhost:${port}`);
// //    });



// // // app.listen(port, () => {
// // //   console.log(`Server is running on http://localhost:${port}`);
// // // });
// // // const express = require("express");
// // // const bodyParser = require("body-parser");
// // // const fs = require("fs");
// // // const path = require("path");
// // // const crypto = require("crypto");
// // // const session = require("express-session");
// // // const { exec } = require("child_process");
// // // const temp = require("temp").track(); // Automatically track and cleanup files at exit
// // // const pdf = require('html-pdf');

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

// // // // Serve the landing page of application
// // // app.get("/", (req, res) => {
// // //   res.sendFile(__dirname + "/public/html/index.html");
// // // });

// // // // Serve forms page when /forms get called
// // // app.get("/forms", (req, res) => {
// // //   res.sendFile(__dirname + "/public/forms/macchiato.html");
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

// // // // Endpoint to generate and download PDF
// // // app.post("/generate-pdf", (req, res) => {
// // //   const resumeJson = req.body;
// // //   temp.open('resume', (err, info) => {
// // //     if (err) {
// // //       return res.status(500).json({ error: "Could not create temporary file" });
// // //     }
// // //     fs.writeFileSync(info.path, JSON.stringify(resumeJson));
// // //     const command = `resume export --resume ./data/allUsersData.json --format html --theme macchiato`;
// // //     console.log(info.path);
// // //     exec(command, (error, stdout, stderr) => {
// // //       if (error) {
// // //         console.error(`exec error: ${error}`);
// // //         return res.status(500).json({ error: "Failed to generate HTML" });
// // //       }

// // //       const htmlFilePath = stdout.trim();
// // //       const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

// // //       pdf.create(htmlContent).toStream((err, pdfStream) => {
// // //         if (err) {
// // //           return res.status(500).json({ error: "Failed to generate PDF" });
// // //         }
// // //         res.setHeader("Content-Type", "application/pdf");
// // //         pdfStream.pipe(res);
// // //       });
// // //     });
// // //   });
// // // });

// // // app.listen(port, () => {
// // //   console.log(`Server is running on http://localhost:${port}`);
// // // });
// const express = require("express");
// const bodyParser = require("body-parser");
// const fs = require("fs");
// const path = require("path");
// const crypto = require("crypto");
// const session = require("express-session");
// const Handlebars = require('handlebars'); // Require Handlebars module
// // const exphbs  = require('hbs');
// const exphbs = require('express-handlebars'); 


// const app = express();
// const port = 8081;
// const secretKey = crypto.randomBytes(64).toString("hex");
// const dataFilePath = path.join(__dirname, "data", "allUsersData.json");

// // Ensure the data directory exists
// const dataDir = path.join(__dirname, "data");
// if (!fs.existsSync(dataDir)) {
//   fs.mkdirSync(dataDir);
// }

// // Initialize the JSON file to be empty on server start
// fs.writeFileSync(dataFilePath, JSON.stringify({}), "utf8");

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
// app.use('/exports', express.static(path.join(__dirname, 'exports')));
// // Configure Handlebars
// app.engine('hbs', exphbs({
//   extname: 'hbs', // Set extension of template files
//   defaultLayout: false, // Disable default layout
//   partialsDir: [
//     path.join(__dirname, 'src', 'partials') // Set directory for partials
//   ]
// }));
// // Set the view engine to Handlebars
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'src')); // Set directory for template files

// // Register partials directory
// // Handlebars.registerPartials(path.join(__dirname, 'src', 'partials'));

// // Example route rendering a Handlebars view
// app.get('/forms/getResume', (req, res) => {
//   res.render('resume'); // Renders src/resume.hbs
// });

// // serve the landing page of application
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/html/index.html");
// });

// // serve forms page when /forms get called
// app.get("/forms", (req, res) => {
//   res.sendFile(__dirname + "/public/forms/macchiato.html");
// });

// // Post method to submit the data/store data in the current json
// app.post("/submit-form", (req, res) => {
//   const formData = req.body;

//   // Save updated data
//   fs.writeFile(
//     dataFilePath,
//     JSON.stringify(formData, null, 2),
//     "utf8",
//     (err) => {
//       if (err) {
//         console.error("Error writing file:", err);
//         res.status(500).json({ error: "Internal Server Error" });
//         return;
//       }

//       res.json(formData);
//     }
//   );
// });

// // Endpoint to generate and download PDF
// app.post("/generate-pdf", (req, res) => {
//   const resumeJson = req.body;
//   temp.open('resume', (err, info) => {
//     if (err) {
//       return res.status(500).json({ error: "Could not create temporary file" });
//     }
//     fs.writeFileSync(info.path, JSON.stringify(resumeJson));
//     const command = `resume export --resume ./data/allUsersData.json --format html --theme macchiato`;
//     console.log(info.path);
//     exec(command, (error, stdout, stderr) => {
//       if (error) {
//         console.error(`exec error: ${error}`);
//         return res.status(500).json({ error: "Failed to generate HTML" });
//       }

//       const htmlFilePath = stdout.trim();
//       const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

//       pdf.create(htmlContent).toStream((err, pdfStream) => {
//         if (err) {
//           return res.status(500).json({ error: "Failed to generate PDF" });
//         }
//         res.setHeader("Content-Type", "application/pdf");
//         pdfStream.pipe(res);
//       });
//     });
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
const express = require("express");
const exphbs  = require('express-handlebars'); // Require Handlebars module for Express
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const session = require("express-session");
const hbs = require("hbs");

const app = express();
const port = 8081;
const secretKey = crypto.randomBytes(64).toString("hex");
const dataFilePath = path.join(__dirname, "data", "allUsersData.json");

// Ensure the data directory exists
const dataDir = path.join(__dirname, "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// Initialize the JSON file to be empty on server start
fs.writeFileSync(dataFilePath, JSON.stringify({}), "utf8");

app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use('/exports', express.static(path.join(__dirname, 'exports')));

// // Configure Handlebars
// app.engine('hbs', exphbs({
//   extname: 'hbs', // Set extension of template files
//   defaultLayout: false, // Disable default layout
//   partialsDir: [
//     path.join(__dirname, 'src', 'partials') // Set directory for partials
//   ]
// }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src')); // Set directory for template files

// Register partials directory
hbs.registerPartials(path.join(__dirname, 'src', 'partials'));

// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'src')); // Set directory for template files

// Example route rendering a Handlebars view
app.get('/forms/getResume', (req, res) => {
  res.render('resume'); // Renders src/resume.hbs
});

// serve the landing page of application
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
});

// serve forms page when /forms get called
app.get("/forms", (req, res) => {
  res.sendFile(__dirname + "/public/forms/macchiato.html");
});

// Post method to submit the data/store data in the current json
app.post("/submit-form", (req, res) => {
  const formData = req.body;

  // Save updated data
  fs.writeFile(
    dataFilePath,
    JSON.stringify(formData, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.error("Error writing file:", err);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }

      res.json(formData);
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
