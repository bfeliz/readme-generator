const inquirer = require("inquirer");
const mark = require("./utils/generateMarkdown.js");
const fs = require("fs");
const apiData = require("./utils/api.js");
let finalData = {};
let email;

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
        const username = data.githubName;
        pushQuestions();

        function pushQuestions() {
            apiData.getUser(username).then(function(response) {
                if (response.data.email === null) {
                    email = "User email is not public";
                } else {
                    email = response.data.email;
                }
                let qObject = {
                    photo: response.data.avatar_url,
                    email: email,
                    followers: response.data.followers
                };
                finalData = { ...data, ...qObject };
                writeToFile();
            });
        }
    });

function writeToFile() {
    const markdown = mark.generateMarkdown(finalData);
    fs.writeFile("new-readme.md", markdown, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("File generated");
        }
    });
}
