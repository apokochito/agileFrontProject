const axios = require("axios");
const AT_SSO_SERVICE_URI = process.env.AT_SSO_SERVICE_URI;
const userService = {};

userService.getUsers = () => {
    return axios({
        method: "GET",
        url: AT_SSO_SERVICE_URI + `/v1/user`,
        headers: {
            "content-type": "application/json",
        },
    }).catch(function (error) {
        console.log('Error: ' + error.message);
    });
};

userService.postUser = (user) => {
    return axios({
        method: "POST",
        url: AT_SSO_SERVICE_URI + `/v1/user`,
        data: {
            name: user.name,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
            status: user.status
        },
    }).catch(function (error) {
        console.log('Error: ' + error.message);
    });
}

module.exports = userService;
