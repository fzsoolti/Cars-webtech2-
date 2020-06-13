const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Car = require("../../models/Car");

const validateCarInput = require("../../validation/cars");

//@route    GET api/cars/test
//@desc     Tests car route
//@access   Public
router.get('/test', (req, res) => res.json({ msg: "Cars Works" }));


// @route   Post api/cars/add
// @desc    Add car
// @access  Private
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateCarInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    Car.findOne({ plate: req.body.plate })
      .then((car) => {
        if (car) {
          errors.plate = "Car already exists!";
          return res.status(400).json(errors);
        }

        const newCar = {
          plate: req.body.plate,
          validity: req.body.validity,
          manufacturer: req.body.manufacturer,
          type: req.body.type,
          year: req.body.year,
          fuel: req.body.fuel,
          hp: req.body.hp,
          engine: req.body.engine,
        };

        new Car(newCar)
          .save()
          .then((car) => res.json(car))
          .catch((err) => res.status(400).json(err));
      })
      .catch((err) => res.status(400).json(err));
  }
);

// @route   GET api/cars/
// @desc    Get cars
// @access  Private
router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      Car.find()
        .then((cars) => res.json(cars))
        .catch((err) => res.status(400).json("Error: " + err));
    }
  );

// @route   POST api/cars/edit/:id
// @desc    Edit car
// @access  Private
router.post(
    "/edit/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      Car.findById(req.params.id)
        .then((car) => {
          car.plate = req.body.plate;
          car.validity = req.body.validity;
          car.manufacturer = req.body.manufacturer;
          car.type = req.body.type;
          car.year = req.body.year;
          car.fuel = req.body.fuel;
          car.hp = req.body.hp;
          car.engine = req.body.engine;
  
          car
            .save()
            .then(() => res.json(car))
            .catch((err) => res.status(400).json(err));
        })
        .catch((err) => res.status(400).json(err));
    }
  );

// @route   DELETE api/cars/delete/:id
// @desc    Delete car
// @access  Private
router.delete(
    "/delete/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      Car.findByIdAndDelete(req.params.id)
        .then(() => res.json("Car deleted"))
        .catch((err) => res.status(400).json(err));
    }
  );


module.exports = router;