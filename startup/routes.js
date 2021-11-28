const deck = require('../routes/deck');
const error = require('../middleware/error');
const express = require('express');

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/decks', deck);
    //app.use(/api/collection)
    //app.use(/api/wishlist)
    app.use(error);
  }