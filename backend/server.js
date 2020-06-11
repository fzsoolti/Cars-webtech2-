const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cars = require('./routes/api/cars');

const app = express();

//Bodyparser middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongodb connected'))
    .catch(err => console.log(err));

//use routes
app.use('/api/cars', cars);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));