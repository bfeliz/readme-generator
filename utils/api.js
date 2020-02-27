// get packages
require("dotenv").config();
const axios = require("axios");

// API call with axios to get GitHub data, using keys hidden in .env file
const api = {
    getUser(username) {
        return axios
            .get(
                `https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
            )
            .catch(err => {
                console.log("User not found", err);
                process.exit(1);
            });
    }
};

module.exports = api;
