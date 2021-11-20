const Joi = require('joi');
const mongoose = require('mongoose');

const cardImageSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    image_url_small: {
        type: String,
        required: true
    },
})

function validateCardImageSchema(cardImg){
    const schema ={
        id: Joi.number().required(),
        image_url: Joi.string().required().domain(),
        image_url_small: Joi.string().required().domain(),
    };
    return Joi.validate(cardImg, schema)
}

exports.cardImageSchema = cardImageSchema;
exports.validate = validateCardImageSchema;