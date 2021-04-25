const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/generateHtml');

const employees = [];
const ids = [];

// array of common inquiries for user
const commonQuestions = [{
    name: 'id',
    type: 'input',
    message: 'Id:',
    validate: userInput => {
      var validationResult = true;
      
      const isValid = userInput.match(/^[1-9]\d*$/);
      const isTaken = ids.includes(userInput);
      
      if (!isValid) {
        validationResult = 'Please enter an integer greater than zero.';
      } else if (isTaken) {
        validationResult = 'This Id is already taken.  Please enter a different one.';
      }
      
      return validationResult;
    }
  }, {
    name: 'name',
    type: 'input',
    message: 'Name:',
    validate: userInput => {
      var validationResult = 'Please enter at least one character.';
      
      const isValid = userInput.trim() !== '';
      if (isValid) { 
        validationResult = true;
      }
      
      return validationResult;
    }
  }, {
    name: 'email',
    type: 'input',
    message: 'Email Address:',
    validate: userInput => {
      var validationResult = 'Please enter a valid email address.';

      const isValid = userInput.match(/\S+@\S+\.\S+/);
      if (isValid) {
        validationResult = true;
      }

      return validationResult;
    }
  }
];

const officeQuestion = {
  name: 'officeNumber',
  type: 'input',
  message: 'Office Number:',
  validate: userInput => {
    var validationResult = 'Please enter a number greater than zero.';

    const isValid = userInput.match(/^[1-9]\d*$/);
    if (isValid) {
      validationResult = true;
    }
    
    return validationResult;
  }
};

const githubQuestion = {
  name: 'github',
  type: 'input',
  message: 'Github User Name:',
  validate: userInput => {
    var validationResult = 'Please enter at least one character.';
      
    const isValid = userInput.trim() !== '';
    if (isValid) { 
      validationResult = true;
    }
    
    return validationResult;
  }
};

const schoolQuestion = {
  name: 'school',
  type: 'input',
  message: 'School:',
  validate: userInput => {
    var validationResult = 'Please enter at least one character.';
      
    const isValid = userInput.trim() !== '';
    if (isValid) { 
      validationResult = true;
    }
    
    return validationResult;
  }
};

const managerQuestions = [...commonQuestions, officeQuestion];
const engineerQuestions = [...commonQuestions, githubQuestion];
const internQuestions = [...commonQuestions, schoolQuestion];

// function to write HTML file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!  The team roster has been generated!')
  );
}

// Start program
function main() {

  var isTeamCompleted = false;
  
  async function addManager() {
    console.log('Please provide the following information about the team manager:');
    
    await inquirer.prompt(managerQuestions)
    .then(responses => {
      const manager = new Manager(responses.id, responses.name, responses.email, responses.officeNumber);
      employees.push(manager);
      ids.push(responses.id);

      console.log('\nTeam manager added.\n');
    });

  }
  
  async function addEngineer() {
    console.log('Please provide the following information about the engineer:');

    await inquirer.prompt(engineerQuestions)
    .then(responses => {
      const engineer = new Engineer(responses.id, responses.name, responses.email, responses.github);
      employees.push(engineer);
      ids.push(responses.id);

      console.log('\nEngineer added.\n');
    });
  }
  
  async function addIntern() {
    console.log('Please provide the following information about the intern:');

    await inquirer.prompt(internQuestions)
    .then(responses => {
      const intern = new Intern(responses.id, responses.name, responses.email, responses.school);
      employees.push(intern);
      ids.push(responses.id);

      console.log('\nIntern added.\n');
    });
  }
  
  async function addNextEmployee() {
    const engineerStr = 'Engineer';
    const internStr = 'Intern';

    let userInput = await inquirer.prompt([
    {
      name: 'employeeType',
      type: 'list',
      message: 'What type of employee would you like to add next to the team?',
      choices: [engineerStr, internStr, 'None, team is completed']
    }]);
  
    switch (userInput.employeeType) {
      case engineerStr:
        await addEngineer();
        break;
      case internStr:
        await addIntern();
        break;
      default:
        isTeamCompleted = true;
    }
  }

  function generateRoster() {
    const OUTPUT_DIR = path.resolve(__dirname, 'dist')
    const outputPath = path.join(OUTPUT_DIR, 'teamProfile.html');

    // if (!fs.existsSync(OUTPUT_DIR)) {
    //   fs.mkdirSync(OUTPUT_DIR)
    // }

    // ---generate HTML HERE ------
    const htmlContent = generateHtml(employees);
    fs.writeFileSync(outputPath, htmlContent, 'utf-8');

    // ---generate JSON HERE ------
    // const jsonContent = JSON.stringify(employees, null, 2);
    // console.log(jsonContent);
    // writeToFile('teamRoster.json', jsonContent);
  }

  async function createTeam() {
    console.log('Build your team:\n');
    
    await addManager();
    
    while (!isTeamCompleted) {
      await addNextEmployee();
    }
 
    console.log('\nYou have completed entering the team members!\n');
    generateRoster();
  }

  createTeam();

}

main();
