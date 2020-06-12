const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

//load user model
const User = require('../../models/User');


//@route    GET api/users/test
//@desc     Tests user route
//@access   Public
router.get('/test', (req, res) => res.json({ msg: "Users Works" }));

//@route    GET api/users/register
//@desc     Register user
//@access   Public
router.post('/register', (req, res) => {
    User.findOne({ name: req.body.name })
        .then(user => {
            if (user) {
                return res.status(400).json({ name: 'username already exists' });
            } else {
                const newUser = new User({
                    name: req.body.name,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    })
                })
            }
        })
});

//@route    GET api/users/login
//@desc     Login user / returning token
//@access   Public
router.post('/login', (req, res) => {
    const name = req.body.name;
    const password = req.body.password;

    //find user by name
    User.findOne({ name })
        .then(user => {
            //check for user
            if (!user) {
                return res.status(404).json({ name: 'User not found' });
            }

            // check password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        //user matched

                        const payload = { id: user.id } //create jwt payload

                        //sign token
                        jwt.sign(payload, 
                                keys.secretOrKey, 
                                { expiresIn: 3600 }, 
                                (err,token) => {
                                    res.json({
                                        success: true,
                                        token: 'Bearer ' + token
                                    });
                                });
                    } else {
                        return res.status(400).json({ password: 'Password incorrect' });
                    }
                })
        });
});

module.exports = router;