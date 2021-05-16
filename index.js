// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
     {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'Please give a description of your project',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'What are the neccessary dependencies that must be installed to run this app?',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'What will this application be used for?',
        name: 'Usage',
    },
    {
        type: 'list',
        message: "What license are you using?",
        name: 'License',
        choices: ['MIT', 'GNU GPLv3', 'Apache'],
    },
    {
        type: 'input',
        message: 'Please list any contributors.',
        name: 'Contributors',
    },
    {
        type: 'input',
        message: 'What commands are needed to test this application?',
        name: 'Tests',
    },
    {
        type:"input",
        message: "What is your Github username?",
        name: "Username",   
    },
    {
        type: "input",
        messaage: 'What is your email address?',
        name: "Email",
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 fs.writeFile( fileName, data, err=> {
     if (err) {
         return console.log(err);
     }
     console.log("File Successfully wrote: " + fileName);
 })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('README.MD', generateMarkdown(data))
    })
}

// Function call to initialize app
init();
