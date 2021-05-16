// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  https://github.com/${data.Username}/${data.Title}
  # Description
  ${data.Description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#License)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  
  # Installation
  The following dependences are needed to be installed to run the application: 
  ${data.Installation}
  # Usage
  ${data.Usage}
  # License
  This application runs under the ${data.License} license.
  # Contributors:
  ${data.Contributors}
  # Tests
  How to run tests: ${data.Tests}
  # Questions
  If there are any questions, issues contact ${data.Username} or email at ${data.Email}
`;
}

module.exports = generateMarkdown;
