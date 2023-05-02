const { join } = require('path');
const express = require('express');
const router = require('./router/index');
require('dotenv').config();
const app = express();

app.set('PORT', 3000 || process.env.PORT)
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(express.static(join(__dirname, '..', 'public')))

app.use(router);

module.exports = app;