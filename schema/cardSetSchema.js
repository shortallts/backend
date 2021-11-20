const Joi = require('joi');
const mongoose = require('mongoose');
const {cardImage} = require('./cardImageSchema')

const cardSet = mongoose.model('cardSet', new mongoose.Schema({
    set_name: {
        type: String,
        required: true
    },
    set_code: {
        type: String,
        required: true
    },
    set_rarity: {
        type: String,
        required: true
    },
    set_rarity_code: {
        type: String,
        required: true
    },
    set_price: {
        type: String,
        required: true
    },
    card_images: {
        type: [cardImage],
        required: true
    }
}));

function validateCardSet(cardSet){
    const schema = {
        set_name: Joi.string().required(),
        set_code: Joi.string().required(),
        set_rarity: Joi.string().required(),
        set_rarity_code: Joi.string().required(),
        set_price: Joi.string().required(),
        card_images: Joi.isSchema(cardImage),
    }
    return Joi.validate(cardSet, schema);
}
exports.cardSet = cardSet;
exports.validate = validateCardSet;