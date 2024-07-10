document.addEventListener("DOMContentLoaded", function () {
  const sectionLinks = document.querySelectorAll(".section-link");
  const sections = document.querySelectorAll(".section");

  // Function to show a section by its ID
  function showSection(sectionId) {
    sections.forEach((section) => {
      section.classList.remove("active");
      if (section.id === sectionId) {
        section.classList.add("active");
      }
    });
  }

  // Set up click event listeners for section links
  sectionLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      sectionLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
      const sectionId = this.getAttribute("data-section");
      showSection(sectionId);
    });
  });

  // Show the "Basics" section by default
  showSection("basics-section");
});
//add work section

// function addWorkEntry() {
//   const container = document.getElementById("work-section");
//   const entryDiv = document.createElement("div");
//   entryDiv.classList.add("work-entry");
//   entryDiv.innerHTML = `
//     <div class="form-group">
//       <label for="work_name">Name:</label>
//       <input type="text" name="work_name[]" class="form-control"><br>
//     </div>
//     <div class="form-group">
//       <label for="work_position">Position:</label>
//       <input type="text" name="work_position[]" class="form-control"><br>
//     </div>
//     <div class="form-group">
//       <label for="work_url">URL:</label>
//       <input type="url" name="work_url[]" class="form-control"><br>
//     </div>
//     <div class="form-group">
//       <label for="work_startDate">Start Date:</label>
//       <input type="date" name="work_startDate[]" class="form-control"><br>
//     </div>
//     <div class="form-group">
//       <label for="work_endDate">End Date:</label>
//       <input type="date" name="work_endDate[]" class="form-control"><br>
//     </div>
//     <div class="form-group">
//       <label for="work_summary">Summary:</label>
//       <textarea name="work_summary[]" class="form-control"></textarea><br>
//     </div>
//     <h3>Highlights</h3>
//     <div class="form-group">
//       <ul class="highlights-list" data-field="work_highlights">
//         <li><input type="text" name="work_highlights[][0]" class="form-control"></li>
//       </ul>
//     </div>
//     <button type="button" onclick="addHighlight(this)" class="highlights">Add Highlight</button>
//     <button type="button" onclick="removeEntry(this)" class="removes">Remove</button>
//   `;
//   container.appendChild(entryDiv);
// }


let workEntryCount = 1;

function addWorkEntry() {
  const container = document.getElementById("work-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("work-entry");

  entryDiv.innerHTML = `
    <div class="form-group">
      <label for="work_name">Company Name:</label>
      <input type="text" id="work_name" name="work_name[]" class="form-control"><br>
    </div>
    <div class="form-group">
      <label for="work_position">Position:</label>
      <input type="text" id="work_position" name="work_position[]" class="form-control"><br>
    </div>
    <div class="form-group">
      <label for="work_startDate">Start Date:</label>
      <input type="date" id="work_startDate" name="work_startDate[]" class="form-control"><br>
    </div>
    <div class="form-group">
      <label for="work_endDate">End Date:</label>
      <input type="date" id="work_endDate" name="work_endDate[]" class="form-control"><br>
    </div>
    <div class="form-group">
      <label for="work_summary">Summary:</label>
      <textarea id="work_summary" name="work_summary[]" class="form-control"></textarea><br>
    </div>
    <h3>Highlights</h3>
    <div class="form-group">
      <ul class="highlights-list" data-field="work_highlights">
        <li><input type="text" name="work_highlights[${workEntryCount}][]" class="form-control"></li>
      </ul>
    </div>
    <button type="button" onclick="addHighlight(this, ${workEntryCount})" class="highlights">Add Highlight</button>
    <button type="button" onclick="removeEntry(this)" class="removes">Remove</button>
  `;
  container.appendChild(entryDiv);
  workEntryCount++;
}

function addHighlight(button, workEntryIndex) {
  const highlightList = button.previousElementSibling.querySelector('ul.highlights-list');
  const newHighlight = document.createElement('li');
  newHighlight.innerHTML = `<input type="text" name="work_highlights[${workEntryIndex}][]" class="form-control">`;
  highlightList.appendChild(newHighlight);
}


function removeEntry(button) {
  const entryDiv = button.parentNode;
  entryDiv.remove();
}

// Function to remove an education entry
function removeEntry(button) {
  button.parentElement.remove();
}

// Function to add a new education entry
function addEducationEntry() {
  const container = document.getElementById("education-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("education-entry");
  entryDiv.innerHTML = `
    <div class="form-group">
      <label for="education_institution">Institution:</label>
      <input type="text" name="education_institution[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="education_area">Area of Study:</label>
      <input type="text" name="education_area[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="education_studyType">Study Type:</label>
      <input type="text" name="education_studyType[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="education_startDate">Start Date:</label>
      <input type="date" name="education_startDate[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="education_endDate">End Date:</label>
      <input type="date" name="education_endDate[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="education_score">Score:</label>
      <input type="text" name="education_score[]" class="form-control" />
    </div>
    <button type="button" onclick="removeEntry(this)" class="removes">Remove</button>
  `;
  // Insert the new entry before the "Add Education" button
  container.insertBefore(
    entryDiv,
    container.querySelector('button[onclick= "addEducationEntry()"]')
  );
}

// Function to remove an award entry
function removeEntry(button) {
  button.parentElement.remove();
}

// Function to remove a certificate entry
function removeEntry(button) {
  button.parentElement.remove();
}

// Function to add a new certificate entry
function addCertificateEntry() {
  const container = document.getElementById("certificates-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("certificate-entry");
  entryDiv.innerHTML = `
    <div class="form-group">
      <label for="certificates_name">Name:</label>
      <input type="text" name="certificates_name[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="certificates_date">Date:</label>
      <input type="date" name="certificates_date[]" class="form-control" />
    </div>
    <button type="button" onclick="removeEntry(this)">Remove</button>
  `;
  // Insert the new entry before the "Add Certificate" button
  container.insertBefore(
    entryDiv,
    container.querySelector('button[onclick="addCertificateEntry()"]')
  );
}

// Function to remove a skill entry
function removeEntry(button) {
  button.parentElement.remove();
}

// Function to add a new skill entry
function addSkillEntry() {
  const container = document.getElementById("skills-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("skill-entry");
  entryDiv.innerHTML = `
    <div class="form-group">
      <label for="skills_name">Name:</label>
      <input type="text" name="skills_name[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="skills_level">Level:</label>
      <input type="text" name="skills_level[]" class="form-control" />
    </div>
    <button type="button" onclick="removeEntry(this)">Remove</button>
  `;
  // Insert the new entry before the "Add Skill" button
  container.insertBefore(
    entryDiv,
    container.querySelector('button[onclick="addSkillEntry()"]')
  );
}

// Function to remove a language entry
function removeEntry(button) {
  button.parentElement.remove();
}

// Function to add a new language entry
function addLanguageEntry() {
  const container = document.getElementById("languages-section");
  const entryDiv = document.createElement("div");
  entryDiv.classList.add("language-entry");
  entryDiv.innerHTML = `
    <div class="form-group">
      <label for="languages_language">Language:</label>
      <input type="text" name="languages_language[]" class="form-control" />
    </div>
    <div class="form-group">
      <label for="languages_fluency">Fluency:</label>
      <input type="text" name="languages_fluency[]" class="form-control" />
    </div>
    <button type="button" onclick="addLanguageEntry()">
            Add Language
          </button>
    <button type="button" onclick="removeEntry(this)">Remove</button>
  `;
  container.appendChild(entryDiv);
}

// Function to remove an entry (interest or keyword)
function removeEntry(button) {
  button.parentElement.remove();
}

function addHighlight(button) {
  const highlightsList = button.previousElementSibling;
  const newHighlight = document.createElement("li");
  const index = highlightsList.querySelectorAll("li").length;
  newHighlight.innerHTML = `<input type="text" name="${highlightsList.dataset.field}[][${index}]">`;
  highlightsList.appendChild(newHighlight);
}

function submitJson() {
  const form = document.getElementById("submit-form");
  const formData = new FormData(form);
  const jsonObject = {
    basics: {
      name: formData.get("basics_name"),
      label: formData.get("basics_label"),
      email: formData.get("basics_email"),
      phone: formData.get("basics_phone"),
      url: formData.get("basics_url"),
      summary: formData.get("basics_summary"),
      location: {
        address: formData.get("basics_location_address"),
        postalCode: formData.get("basics_location_postalCode"),
        city: formData.get("basics_location_city"),
        countryCode: formData.get("basics_location_countryCode"),
        region: formData.get("basics_location_region"),
      },
      profiles: [],
    },
    work: [],
    education: [],
    certificates: [],
    skills: [],
    languages: [],
  };

  // Add profiles
  const profilesContainer = document.getElementById("profiles-container");
  const profiles = profilesContainer.querySelectorAll(".profile");
  profiles.forEach((profile) => {
    jsonObject.basics.profiles.push({
      network: profile.querySelector('input[name="basics_profiles_network[]"]')
        .value,
      username: profile.querySelector(
        'input[name="basics_profiles_username[]"]'
      ).value,
      url: profile.querySelector('input[name="basics_profiles_url[]"]').value,
    });
  });

  // Add work experience
  const workEntries = document.querySelectorAll(".work-entry");
  workEntries.forEach((entry) => {
    jsonObject.work.push({
      name: entry.querySelector('input[name="work_name[]"]').value,
      position: entry.querySelector('input[name="work_position[]"]').value,
      //url: entry.querySelector('input[name="work_url[]"]').value,
      startDate: entry.querySelector('input[name="work_startDate[]"]').value,
      endDate: entry.querySelector('input[name="work_endDate[]"]').value,
      summary: entry.querySelector('textarea[name="work_summary[]"]').value,
      highlights: Array.from(
        entry.querySelectorAll('input[name="work_highlights[][0]"]')
      ).map((input) => input.value),
    });
  });

  // Add volunteer experience
  const volunteerEntries = document.querySelectorAll(".volunteer-entry");
  volunteerEntries.forEach((entry) => {
    jsonObject.volunteer.push({
      organization: entry.querySelector(
        'input[name="volunteer_organization[]"]'
      ).value,
      position: entry.querySelector('input[name="volunteer_position[]"]').value,
      url: entry.querySelector('input[name="volunteer_url[]"]').value,
      startDate: entry.querySelector('input[name="volunteer_startDate[]"]')
        .value,
      endDate: entry.querySelector('input[name="volunteer_endDate[]"]').value,
      summary: entry.querySelector('textarea[name="volunteer_summary[]"]')
        .value,
    });
  });

  // Add education
  const educationEntries = document.querySelectorAll(".education-entry");
  educationEntries.forEach((entry) => {
    jsonObject.education.push({
      institution: entry.querySelector('input[name="education_institution[]"]')
        .value,

      area: entry.querySelector('input[name="education_area[]"]').value,

      startDate: entry.querySelector('input[name="education_startDate[]"]')
        .value,
      endDate: entry.querySelector('input[name="education_endDate[]"]').value,
      score: entry.querySelector('input[name="education_score[]"]').value,
      courses: Array.from(
        entry.querySelectorAll('input[name="education_courses[][0]"]')
      ).map((input) => input.value),
    });
  });

  // Add awards
  const awardEntries = document.querySelectorAll(".award-entry");
  awardEntries.forEach((entry) => {
    jsonObject.awards.push({
      title: entry.querySelector('input[name="awards_title[]"]').value,
      date: entry.querySelector('input[name="awards_date[]"]').value,
      awarder: entry.querySelector('input[name="awards_awarder[]"]').value,
      summary: entry.querySelector('textarea[name="awards_summary[]"]').value,
    });
  });

  // Add certificates
  const certificateEntries = document.querySelectorAll(".certificate-entry");
  certificateEntries.forEach((entry) => {
    jsonObject.certificates.push({
      name: entry.querySelector('input[name="certificates_name[]"]').value,
      date: entry.querySelector('input[name="certificates_date[]"]').value,
    });
  });

  // Add skills
  const skillEntries = document.querySelectorAll(".skill-entry");
  skillEntries.forEach((entry) => {
    jsonObject.skills.push({
      name: entry.querySelector('input[name="skills_name[]"]').value,
      level: entry.querySelector('input[name="skills_level[]"]').value,
      keywords: Array.from(
        entry.querySelectorAll('input[name="skills_keywords[][0]"]')
      ).map((input) => input.value),
    });
  });

  // Add languages
  const languageEntries = document.querySelectorAll(".language-entry");
  languageEntries.forEach((entry) => {
    jsonObject.languages.push({
      language: entry.querySelector('input[name="languages_language[]"]').value,
      fluency: entry.querySelector('input[name="languages_fluency[]"]').value,
    });
  });

  // Add projects
  const projectEntries = document.querySelectorAll(".project-entry");
  projectEntries.forEach((entry) => {
    jsonObject.projects.push({
      name: entry.querySelector('input[name="projects_name[]"]').value,
      description: entry.querySelector(
        'textarea[name="projects_description[]"]'
      ).value,
      keywords: Array.from(
        entry.querySelectorAll('input[name="projects_keywords[][0]"]')
      ).map((input) => input.value),
      url: entry.querySelector('input[name="projects_url[]"]').value,
      roles: Array.from(
        entry.querySelectorAll('input[name="projects_roles[]"]')
      ).map((input) => input.value),
      startDate: entry.querySelector('input[name="projects_startDate[]"]')
        .value,
      endDate: entry.querySelector('input[name="projects_endDate[]"]').value,
      entity: entry.querySelector('input[name="projects_entity[]"]').value,
      type: entry.querySelector('input[name="projects_type[]"]').value,
    });
  });

  const jsonString = JSON.stringify(jsonObject, null, 2);

  // Display the JSON string in the PDF previewer

  const jsonPreviewDiv = document.getElementById("json-preview");
  jsonPreviewDiv.textContent = jsonString;
  console.log(jsonString);
  //send data to the server
  fetch("/submit-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonString,
  })
    .then((response) => {
      // Check if the response is JSON
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return response.json();
      } else {
        throw new Error("Server response was not JSON");
      }
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // Hide the PDF iframe
  document.getElementById("pdf-preview").style.display = "none";

  // Show the JSON preview
  document.getElementById("json-preview").style.display = "block";
}

function showPdf() {
  document.getElementById("pdf-preview").style.display = "block";

  // Clear the JSON preview and hide it
  document.getElementById("json-preview").innerText = "";
  document.getElementById("json-preview").style.display = "none";
}
