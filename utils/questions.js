// questions array for inquirer prompts
var questions = [
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
];

module.exports = {
    questions
};
