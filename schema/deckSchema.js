const Joi = require('joi');
const mongoose = require('mongoose');
const {Card} = require('./cardSchema')

const Deck = new mongoose.model('Deck', new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mainDeck: {
        type: [Card],
        max: 60,
        required: true
    },
    
    sideDeck: {
        type: [Card],
        max: 15,
        required: true
    },

    extraDeck: {
        type: [Card],
        max: 15,
        required: true
    },
    date: { type: Date, default: Date.now }
}));
function validateDeck(deck){
    const schema ={
        name: Joi.string().required(),
        mainDeck: Joi. array().length(60).items(Joi.isSchema(Card)),
        sideDeck: Joi. array().length(15).items(Joi.isSchema(Card)),
        extraDeck: Joi. array().length(15).items(Joi.isSchema(Card)),
    }

    return Joi.validate(deck, schema);
}
exports.Deck = Deck; 
exports.validate = validateDeck;
