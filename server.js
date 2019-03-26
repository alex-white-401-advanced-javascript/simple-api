'use strict';

const superagent = require('superagent');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Set the view engine for templating
app.set('view engine', 'ejs');

// Routes
app.get('/', home);
app.get('/category/', category);

function home(req, res) {
  //superafenbt api call
}

function category(req, res) {
  //superagent api call
}

app.listen(PORT, () => console.log(`Listening on ${PORT}`));