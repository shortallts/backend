const Joi = require('joi');
const mongoose = require('mongoose');

const cardPrice = mongoose.model('cardPrice', new mongoose.Schema({
    cardmarket_price: {
        type: String,
    },
    tcgplayer_price: {
        type: String,
    },
    ebay_price: {
        type: String,
    },
    amazon_price: {
        type: String,
    },
    coolstuffinc_price: {
        type: String,
    },
}));

function validateCardPrice(cardPrice){
    const schema = {
        cardmarket_price: Joi.string(),
        tcgplayer_price: Joi.string(),
        ebay_price: Joi.string(),
        amazon_price: Joi.string(),
        coolstufinc_price: Joi.string(),
    } 
    return Joi.validate(cardPrice, schema);
}
exports.cardPrice = cardPrice;
exports.validate = validateCardPrice;
