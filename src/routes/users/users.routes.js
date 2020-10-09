const router = require("express").Router();
const { users } = require("../../controllers/users/users.controller");

router.get("/users", users);

module.exports = router;