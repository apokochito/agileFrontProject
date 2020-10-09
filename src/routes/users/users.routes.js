const router = require("express").Router();
const { users, userForm, createUser } = require("../../controllers/users/users.controller");

router.get("/users", users);

router.get("/user/form", userForm);

router.post("/user/add", createUser);

module.exports = router;