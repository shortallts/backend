const Joi = require('joi');
const mongoose = require('mongoose');
const cardSchema = require('./cardSchema')
const deckSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mainDeck: {
        type: [cardSchema],
        max: 60,
        required: true
    },
    
    sideDeck: {
        type: [cardSchema],
        max: 15,
        required: true
    },

    extraDeck: {
        type: [cardSchema],
        max: 15,
        required: true
    },
    date: { type: Date, default: Date.now }
})
function validateDeckSchema(deck){
    const schema ={
        name: Joi.string().required(),
        mainDeck: Joi. array().length(60).items(Joi.isSchema(cardSchema)),
        sideDeck: Joi. array().length(15).items(Joi.isSchema(cardSchema)),
        extraDeck: Joi. array().length(15).items(Joi.isSchema(cardSchema)),
    }

    return Joi.validate(deck, schema);
}
exports.Customer = Customer; 
exports.validate = validateCustomer;
