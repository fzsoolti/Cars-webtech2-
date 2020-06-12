const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//@route    GET api/cars/test
//@desc     Tests car route
//@access   Public
router.get('/test', (req, res) => res.json({ msg: "Cars Works" }));

module.exports = router;