const { getUsers, postUser } = require("../../services/users/users.service");
const userCtrl = {};

userCtrl.users = async (request, response) => {
    let users;
    await getUsers()
    .then((res) => {
        users = res.data;
    })
    .catch(err => console.log(err.message));
    response.render("users/users", { users });
};

userCtrl.userForm = async (request, response) => {
    response.render("users/userForm");
};

userCtrl.createUser = async (request, response) => {
    const user = {
        name,
        firstName,
        lastName,
        email,
        password,
        status
    } = request.body;
    await postUser(user)
    .then((res) => {
        console.log(user);
    })
    .catch(err => console.log(err.message));
    response.redirect("/users");
};

module.exports = userCtrl;