require('dotenv').config();

const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.static(__dirname + "/public"));
// body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// cors
app.use(cors());

// Routes
const routes = require('./routes/index');
app.use('/api', routes);

// Connect to mongodb
const mongoose = require('mongoose');
const mongooseOption = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

mongoose.connect(process.env.DATABASE_URL, mongooseOption);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

// Server start
app.listen(port, () => console.log('Server started'));