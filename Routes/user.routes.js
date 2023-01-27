const router = require("express").Router();

const { getUserDetails } = require("../Controllers/user.controller.js");

router.all("/", getUserDetails);

module.exports = router;