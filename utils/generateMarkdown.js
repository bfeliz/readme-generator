module.exports = {
    generateMarkdown: function(data) {
        let stringData = JSON.stringify(data, null, 2);
        console.log(stringData);
    }
};

// function generateMarkdown(data) {
//     //     return `
//     // # ${data.title}

//     // `;
// }

// module.exports = generateMarkdown;
