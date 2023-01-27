const router = require("express").Router();

const { getMenuItems } = require("../Controllers/menu.controller.js");

router.get("/", getMenuItems);

module.exports = router;
