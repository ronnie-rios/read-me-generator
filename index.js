// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
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
        type: 'list',
        message: "What license are you using?",
        name: 'License',
        choices: ['MIT', 'GNU', 'Apache License 2.0'],
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
