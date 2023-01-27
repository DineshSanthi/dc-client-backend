const router = require("express").Router();

const { checkout } = require("../Controllers/checkout.controller.js");

router.post("/", checkout);

module.exports = router;
