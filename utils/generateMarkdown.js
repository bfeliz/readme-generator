module.exports = {
    generateMarkdown: function(data) {
        return ` # ${data.projectName} \n ## Description \n ${data.description} \n ## Table of Contents \n * [Installation](#installation) \n * [Usage](#usage) \n * [License](#license) \n * [Contributing](#contributing) \n * [Tests](#tests) \n * [Questions](#questions) \n ## Installation \n ${data.install} \n ## Usage \n ${data.usage} \n ## License \n ${data.license} \n ## Contributing \n ${data.contrib} \n ## Tests \n ${data.tests} \n ## Questions \n github info will go here`;
    }
};
