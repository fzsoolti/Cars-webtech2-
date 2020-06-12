const express = require('express');
const router = express.Router();

//@route    GET api/cars/test
//@desc     Tests cars route
//@access   Public
router.get('/test', (req, res) => res.json({ msg: "Cars Works" }));

module.exports = router;