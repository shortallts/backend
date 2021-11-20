const express = require('express');
const deck = require('../routes/deck');
const error = require('../middleware/error');

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/deck', deck);
    app.use(error);
  }