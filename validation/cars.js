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
    errors.plate = "Rendszám szükséges!";
  }

  if (Validator.isEmpty(data.validity)) {
    errors.validity = "Dátum szükséges!";
  }

  if (Validator.isEmpty(data.manufacturer)) {
    errors.manufacturer = "Gyártó szükséges!";
  }

  if (Validator.isEmpty(data.type)) {
    errors.type = "Típus szükséges!";
  }

  if (Validator.isEmpty(data.year)) {
    errors.year = "Év szükséges!";
  }

  if (Validator.isEmpty(data.fuel)) {
    errors.fuel = "Üzemanyag szükséges!";
  }

  if (Validator.isEmpty(data.hp)) {
    errors.hp = "Lóerő szükséges!";
  }

  if (Validator.isEmpty(data.engine)) {
    errors.engine = "Hengerűrtartalom szükséges!";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
