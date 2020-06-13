const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateCarInput(data) {
  let errors = {};

  data.plate = !isEmpty(data.plate) ? data.plate : "";
  data.validity = !isEmpty(data.validity) ? data.validity : "";
  data.manufacturer = !isEmpty(data.manufacturer) ? data.manufacturer : "";
  data.type = !isEmpty(data.type) ? data.type : "";
  data.year = !isEmpty(data.year) ? data.year : "";
  data.fuel = !isEmpty(data.fuel) ? data.fuel : "";
  data.hp = !isEmpty(data.hp) ? data.hp : "";
  data.engine = !isEmpty(data.engine) ? data.engine : "";

  if (Validator.isEmpty(data.plate)) {
    errors.plate = "Plate is required";
  }

  if (Validator.isEmpty(data.validity)) {
    errors.validity = "Date is required";
  }

  if (Validator.isEmpty(data.manufacturer)) {
    errors.manufacturer = "Manufacturer is required";
  }

  if (Validator.isEmpty(data.type)) {
    errors.type = "Type is required";
  }

  if (Validator.isEmpty(data.year)) {
    errors.year = "Year is required";
  }

  if (Validator.isEmpty(data.fuel)) {
    errors.fuel = "Fuel is required";
  }

  if (Validator.isEmpty(data.hp)) {
    errors.hp = "hp is required";
  }

  if (Validator.isEmpty(data.engine)) {
    errors.engine = "Engine is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
