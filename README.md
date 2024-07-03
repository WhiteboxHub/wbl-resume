# json-resume

## Description
**json-resume** is a tool designed to help candidates create professional resumes. It provides a user-friendly interface for building resumes and offers functionalities such as data validation and export to PDF format using various themes.

## Features
- **Create and Manage Resumes**: Users can create and manage their resume data.
- **Tailwind CSS Integration**: Utilizes Tailwind CSS for styling.
- **Data Validation**: Validates resume data to ensure completeness and correctness.
- **Export to PDF**: Export resumes to PDF format using the `macchiato` theme.

## Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)

## Installation

To install and set up the project, follow these steps:

1. Clone the repository:

    \`\`\`
    git clone https://github.com/WhiteboxHub/JSON-Resume.git
    cd json-resume
    \`\`\`

2. Install the dependencies:

    \`\`\`
    npm install
    \`\`\`

3. Build the CSS:

    \`\`\`
    npm run build:css
    \`\`\`

## Usage

### Running the Application

To start the server, run:

\`\`\`
npm start
\`\`\`

The server will be running on \`http://localhost:3000\`.

### Building CSS

To watch and build the CSS files using Tailwind CSS, run:

\`\`\`
npm run build:css
\`\`\`

### Validating Resume Data

To validate the resume data, run:

\`\`\`
npm run validate
\`\`\`

### Exporting Resume to PDF

To export the resume data to a PDF file using the \`macchiato\` theme, run:

\`\`\`
npm run export
\`\`\`

### Get html from JSON

To get the html from the generated json of the \`macchiato\` theme, run :

\`\`\`
npm run html
\`\`\`

## Scripts

- \`start\`: Starts the server.
- \`build:css\`: Builds the CSS using Tailwind CSS.
- \`validate\`: Validates the resume data.
- \`export\`: Exports the resume data to a PDF file.
- \`pdf\` : run npm run pdf to get the resume pdf.
- \`html\` : Get the html for the json


## API Endpoints

### `GET /`

Serves the main index HTML file.

### `GET /forms`

Serves the form HTML file for resume input.

### `POST /submit-form`

Handles form submissions and saves user data in a JSON file.

### `GET /generate-pdf`

Generates a PDF resume from the stored user data.

### License

This project is liscensed under the MIT License.

Made with ❤ by -WBL 