const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
const cars = require('./routes/api/cars');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

// Connect to mongo
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDb connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('hello world'));

//use routes
app.use('/api/users',users);
app.use('/api/cars',cars);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));