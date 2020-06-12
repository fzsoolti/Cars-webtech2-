const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarSchema = new Schema({
  plate: {
    type: String,
    required: true,
  },
  validity: {
    type: Date,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  fuel: {
    type: String,
    required: true,
  },
  hp: {
    type: Number,
    required: true,
  },
  engine: {
    type: Number,
    required: true,
  },
});

module.exports = Car = mongoose.model("cars", CarSchema);