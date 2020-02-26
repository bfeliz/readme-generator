const inquirer = require("inquirer");
const mark = require("./utils/generateMarkdown.js");
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
        },
        {
            type: "input",
            name: "install",
            message: "Type the steps to install your project:"
        },
        {
            type: "input",
            name: "usage",
            message: "Type project instructions and examples of use:"
        },
        {
            type: "input",
            name: "license",
            message: "Type your chosen license:"
        },
        {
            type: "input",
            name: "contrib",
            message: "Add guidelines for community contribution:"
        },
        {
            type: "input",
            name: "tests",
            message: "Type how to run your project tests:"
        }
    ])
    .then(function(data) {
        writeToFile();

        function writeToFile() {
            const markdown = mark.generateMarkdown(data);
            fs.writeFile("new-readme.md", markdown, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("File generated");
                }
            });
        }
    });

function init() {}

init();
