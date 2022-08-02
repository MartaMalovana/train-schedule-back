const express = require('express')
const router = express.Router()
const {lvivStation, kyivStation, krakowStation} = require("../controllers");

router.get('lviv', lvivStation);
router.get('kyiv', kyivStation);
router.get('krakow', krakowStation);

module.exports = router;