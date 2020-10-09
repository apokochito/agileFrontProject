const { getUsers, postUser } = require("../../services/users/users.service");
const userCtrl = {};

userCtrl.users = async (req, res) => {
    let users;
    await getUsers().then((result) => {
        users = result.data;
    });
    res.render("users/users", {
        users
    });
};

module.exports = userCtrl;