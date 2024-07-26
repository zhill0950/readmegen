import fs from "fs";
import inquirer from "inquirer";

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
    name: "license",
    message: "Please provide license information for your project.",
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
    
    ## Installation
    ${data.installation}
    
    ## Usage
    ${data.usage}
    
    ## License
    ${data.license}
    
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
