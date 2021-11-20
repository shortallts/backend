const Joi = require('joi');
const mongoose = require('mongoose');

const cardPriceSchema = new mongoose.Schema({
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
})

function validateCardPriceSchema(cardPrice){
    const schema = {
        cardmarket_price: Joi.string(),
        tcgplayer_price: Joi.string(),
        ebay_price: Joi.string(),
        amazon_price: Joi.string(),
        coolstufinc_price: Joi.string(),
    } 
    return Joi.validate(cardPrice, schema);
}
exports.cardPriceSchema = cardPriceSchema;
exports.validate = validateCardPriceSchema;
