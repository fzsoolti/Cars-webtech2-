const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data){
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';


    if(!Validator.isLength(data.name,{min: 2, max: 30})){
        errors.name = "A felhasználónévnek 2 és 30 karakter között kell lennie!";
    }

    if(Validator.isEmpty(data.name)){
        errors.name = 'Felhasználónév megadása szükséges!';
    }

    if(Validator.isEmpty(data.password)){
        errors.password = 'Jeslzó megadása szükséges!';
    }

    if(Validator.isEmpty(data.password2)){
        errors.password2 = 'Megerősítő jelszó megadása szükséges!';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})){
        errors.password = 'Jelszónak legalább 6 karakternek kell lennie!';
    }

    if(!Validator.equals(data.password, data.password2)){
        errors.password2 = 'Jelszó nem egyezik!';
    }

    return{
        errors,
        isValid: isEmpty(errors)
    }
}