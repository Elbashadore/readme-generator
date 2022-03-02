// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "github",
      message: "What is your github username?",
    },
    {
        type: 'input',
        name: 'githubUrl',
        message: 'Please provide your github URL',
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "list",
      name: "license",
      message: "What license are you using?",
      //Drop down menu of choices
      choices: [ "apache", "boost", "bsd2-clause", "bsd3-clause", "creative commons", "eclipse", "gnu", "mit", "mozilla"],
    },
    {
      type: "input",
      name: "description",
      message: "Write a brief description of your project.",
    },
    {
      type: "input",
      name: "usage",
      message: "Write the uses for your application.",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps for installing your application?",
    },
    {
      type: "input",
      name: "contributing",
      message: "How can others contribute to your application?",
    },
    {
    type: "input",
    name: "tests",
    message: "How can others test your application?",
  },
    {
      type: "input",
      name: "sources",
      message: "Do you need to cite any sources?",
    },
  ];

// TODO: Create a function to write README file

// CASE Switch for license tags




function writeToFile(content) {
    fs.writeFile('README.md',content, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
const license = answers.license;
console.log(license);
 // Determine License Badge based on license selection from inquirer
 switch (license) {
  case license == 'apache':
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)';
    break;
  case license == 'gnu':
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    break;
  case license == 'mit':
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    break;
  case license == 'bsd2-clause':
    licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_2-Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
    break;
  case license == 'bsd3-clause':
    licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3-Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    break;
  case license == 'boost':
    licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    break;
  case license == 'creative commons':
    licenseBadge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
    break;
  case license == 'eclipse':
    licenseBadge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    break;
  case license == 'mozilla':
    licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    break;
  default:
    licenseBadge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
    break;
}
        const content = `# ${answers.title} ${licenseBadge}
  
## Description
        
            ${answers.description}
## Table of Contents
        
            - [Installation](#installation)
            - [Usage](#usage)
            - [Contributing](#contributing)
            - [Tests](#tests)
            - [Questions](#questions)
            - [Sources](#sources)
        
## Installation
        
            ${answers.installation}
          
## Usage
        
            ${answers.usage}
        
## License
        
            The ${answers.license} license was used for this project.

## Contributing
        
            ${answers.contributing}

## Tests
        
            ${answers.tests}
        
 ## Questions?
        
            Contact Info:
            
            Github profile: ${answers.github} ${answers.githubUrl}
            
            Email: ${answers.email}

            If you have any questions please reach out to me at the email address provided above. 
        
## Sources
            ${answers.sources}`
        writeToFile(content);
    
    })
}

// Function call to initialize app
init();
