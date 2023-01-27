const router = require("express").Router();

const { getMenuItems } = require("../Controllers/menu-items.controller.js");

router.get("/", getMenuItems);

module.exports = router;