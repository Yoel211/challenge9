// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');


inquirer 
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is project title?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Description of project',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'Installation',
    },
    {
      type: 'input',
      name: 'Usage',
      message: ' Usage',
    },
    {
      type: 'input',
      name: 'License',
      message: 'License',
    },
    {
      type: 'input',
      name: 'Contributing',
      message: 'Contributing',
    },
    {
      type: 'input',
      name: 'Tests',
      message: 'Tests',
    },
    {
      type: 'input',
      name: 'Github',
      message: 'Github',
    },
    {
      type: 'input',
      name: 'Email',
      message: 'Email',
    },


  ]).then(function(answers){
    console.log(answers)
    var result = generateMarkdown(answers)
    fs.writeFile("Readme2.md", result, function(err){
      if (err) throw err
      console.log("wrote file")
    })
  })
  


































// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
