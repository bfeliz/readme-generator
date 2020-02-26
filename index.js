const inquirer = require("inquirer");
const mark = require("./utils/generateMarkdown.js");
const questions = require("./utils/questions.js");
const fs = require("fs");
const apiData = require("./utils/api.js");

(async function init() {
    const user = await inquirer.prompt(questions.questions);
    const { data: githubData } = await apiData.getUser(user.githubName);
    writeToFile({
        ...user,
        photo: githubData.avatar_url,
        email: githubData.email || "User email is not public",
        followers: githubData.followers
    });
})();

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
