const Joi = require('joi');
const mongoose = require('mongoose');
const cardSetSchema = require('./cardSetSchema')
const cardPriceSchema = require('./cardPriceSchema')
const cardImageSchema = require('./cardImageSchema')

const cardSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    atk: {
        type: Number
    },
    def: {
        type: Number
    },
    level: {
        type: Number
    },
    race: {
        type: String,
        required: true
    },
    attribute: {
        type: String,
    },
    archetype: {
        type: String,
    },
    card_sets: {
        type: [cardSetSchema],
        required: true
    },
    card_images: {
        type: [cardImageSchema],
        required: true
    },
    card_prices: {
        type: [cardPriceSchema],
        required: true
    },
})

function validateCardSchema(card){
    const schema={
        id: Joi.number().required(),
        name: Joi.String().required(),
        type: Joi.String().required(),
        desc: Joi.String().required(),
        atk: Joi.number(),
        def: Joi.number(),
        lvl: Joi.number(),
        race: Joi.String().required(),
        attribute: Joi.String().required(),
        archetype: Joi.String(),
        card_sets: Joi.isSchema(cardSetSchema),
        card_images: Joi.isSchema(cardImageSchema),
        card_prices: Joi.isSchema(cardPriceSchema),
    }
    return Joi.validate(card, schema);
}

exports.cardSchema = cardSchema;
exports.validate = validateCardSchema;