const inquirer = require("inquirer");
let mark = require("./utils/generateMarkdown.js");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            name: "githubName",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "projectName",
            message: "What is the name of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Type a description of your project:"
        }
    ])
    .then(function(data) {
        mark.generateMarkdown(data);
        // let returnedData = JSON.stringify(data, null, "\t");
        // console.log(returnedData);
        // module.exports = returnedData;
    });

const questions = [];

function writeToFile(fileName, data) {}

function init() {}

init();
