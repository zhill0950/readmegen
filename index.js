import fs from "fs";
import inquirer from "inquirer";

const licenses = ["MIT", "Apache", "GPL", "BSD"];

const questions = [
  {
    name: "title",
    message: "What is the title of your project?",
  },

  {
    name: "description",
    message: "Please provide a description of your project.",
  },

  {
    name: "installation",
    message: "Please provide installation instructions for your project.",
  },

  {
    name: "usage",
    message: "Please provide usage information for your project.",
  },

  {
    type: "checkbox",
    name: "license",
    message: "Please choose the license for your project.",
    choices: licenses,
  },

  {
    name: "contributing",
    message: "Please provide contributing information for your project.",
  },

  {
    name: "tests",
    message: "Please provide test instructions for your project.",
  },

  {
    name: "questions",
    message: "Please provide question information for your project.",
  },

  {
    name: "username",
    message: "What is your GitHub username?",
  },

  {
    name: "email",
    message: "What is your email address?",
  },
];

function generateBadgeMarkdown(license) {
  const licenseBadges = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    GPLv3:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "Apache 2.0":
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "BSD 3-Clause":
      "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    Unlicense:
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  };

  return licenseBadges[license];
}

const badgeMarkdowns = licenses.map(generateBadgeMarkdown).join(" ");

function genReadMe(data) {
  return `# ${data.title}
    
## Description
${data.description}
    
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Contact](#contact)
    
## Installation
${data.installation}
    
## Usage
${data.usage}
    
## License
${badgeMarkdowns}
    
## Contributing
${data.contributing}
    
## Tests
${data.tests}
    
## Questions
${data.questions}
    
## Contact
- GitHub: [${data.username}]
- Email: ${data.email}`;
}

inquirer.prompt(questions).then((data) => {
  const readmeData = genReadMe(data);
  fs.writeFileSync("README.md", readmeData, (err) => {
    if (err) console.error(err);
  });
});
