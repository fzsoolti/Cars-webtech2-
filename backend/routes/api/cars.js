const express = require('express');
const router = express.Router();

//car model
const Car = require('../../models/car');

// @route GET api/cars
router.get('/', (req,res) => {
    Car.find()
        .sort({ valid: -1 })
        .then(cars => res.json(cars))
});

// @route POST api/cars
router.post('/', (req,res) => {
    const newCar = new Car({
        id: req.body.id
    });

    newCar.save().then(car => res.json(car));
});

// @route DELETE api/cars
router.delete('/:id', (req,res) => {
    Car.findById(req.params.id)
    .then(car => car.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});



module.exports = router;