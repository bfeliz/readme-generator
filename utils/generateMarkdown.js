module.exports = {
    generateMarkdown: function(finalData) {
        return ` # ${finalData.projectName} \n ![license](https://img.shields.io/badge/License-${finalData.license}-blue) ![followers](https://img.shields.io/badge/Followers-${finalData.followers}-orange) \n ## Description \n ${finalData.description} \n ## Table of Contents \n * [Installation](#installation) \n * [Usage](#usage) \n * [License](#license) \n * [Contributing](#contributing) \n * [Tests](#tests) \n * [Questions](#questions) \n ## Installation \n ${finalData.install} \n ## Usage \n ${finalData.usage} \n ## License \n ${finalData.license} \n ## Contributing \n ${finalData.contrib} \n ## Tests \n ${finalData.tests} \n ## Questions \n <img src="${finalData.photo}" alt="photo" width="100"/> \n \n Email: ${finalData.email}`;
    }
};
