const Joi = require('joi');
const mongoose = require('mongoose');
const {cardImageSchema} = require('cardImageSchema')

const cardSetSchema = new mongoose.Schema({
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
        type: [cardImageSchema],
        required: true
    }
})

function validateCardSetSchema(cardSet){
    const schema = {
        set_name: Joi.string().required(),
        set_code: Joi.string().required(),
        set_rarity: Joi.string().required(),
        set_rarity_code: Joi.string().required(),
        set_price: Joi.string().required(),
        card_images: Joi.isSchema(cardImageSchema),
    }
    return Joi.validate(cardSet, schema);
}
exports.cardSetSchema = cardSetSchema;
exports.validate = validateCardSetSchema;