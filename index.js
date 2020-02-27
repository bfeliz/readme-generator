// get data from other modules
const mark = require("./utils/generateMarkdown.js");
const questions = require("./utils/questions.js");
const apiData = require("./utils/api.js");
// get data from packages
const inquirer = require("inquirer");
const fs = require("fs");

// asynchronous function to gather all the data requested and condense into one data object
(async function init() {
    try {
        const user = await inquirer.prompt(questions.questions);
        const { data: githubData } = await apiData.getUser(user.githubName);
        writeToFile({
            ...user,
            photo: githubData.avatar_url,
            email: githubData.email || "User email is not public",
            followers: githubData.followers
        });
    } catch (err) {
        console.log(err);
    }
})();

// function to write markdown file with gathered data
function writeToFile(data) {
    const markdown = mark.generateMarkdown(data);
    fs.writeFile("new-readme.md", markdown, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("File generated");
        }
    });
}
