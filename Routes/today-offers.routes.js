const router = require("express").Router();

const { getTodayOffers } = require("../Controllers/today-offers.controller.js");

router.get("/", getTodayOffers);

module.exports = router;