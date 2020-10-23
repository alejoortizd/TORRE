const express = require('express');
const path = require('path');

// Controller
const validatorRouter = require('./validator/routes');

// Initialization
const app = express();

// Settings
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './views'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', validatorRouter);

// Static files
app.use(express.static('public'));


module.exports = app;