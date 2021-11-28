const Joi = require('joi');
const mongoose = require('mongoose');
const {cardSet} = require('./cardSetSchema');
const {cardPrice} = require('./cardPriceSchema');
const {cardImage} = require('./cardImageSchema');
const {cardBanlist} = require('./cardBanlistSchema');

const Card = mongoose.Schema({
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
        type: [cardSet],
        required: true
    },
    card_images: {
        type: [cardImage],
        required: true
    },
    card_prices: {
        type: [cardPrice],
        required: true
    },
});

function validateCard(card){
    const schema= Joi.object({
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
        card_sets: Joi.isSchema(cardSet),
        card_images: Joi.isSchema(cardImage),
        card_prices: Joi.isSchema(cardPrice),
    })
    return Joi.validate(card, schema);
}

exports.Card = Card;
exports.validate = validateCard;