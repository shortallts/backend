const Joi = require('joi');
const mongoose = require('mongoose');
const {Card} = require('./cardSchema');

const deck = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mainDeck: {
        type: [Card],
        required: true
    },
    
    sideDeck: {
        type: [Card],
        required: true
    },

    extraDeck: {
        type: [Card],
        required: true
    },
    date: { type: Date, default: Date.now }
});

const Deck = mongoose.model('Deck', deck);

const validateDeck = deck => {
    const schema = Joi.object({
        name: Joi.string().required(),
        mainDeck: Joi.array().max(60).required(),
        sideDeck: Joi.array().max(15).required(),
        extraDeck: Joi.array().max(15).required(),
    });

    return schema.validate(deck);
}
exports.deck = deck; 
exports.Deck = Deck;
exports.validate = validateDeck;
