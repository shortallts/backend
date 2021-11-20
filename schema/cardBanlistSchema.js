const Joi = require('joi');
const mongoose = require('mongoose');

const cardBanlistSchema = new mongoose.Schema({
    ban_ocg: {
        type: String,
    },
    ban_tcg: {
        type: String,
    }
})

function validateCardBanlistSchema(cardBanlist){
    const schema = {
        ban_ocg: Joi.string(),
        ban_tcg: Joi.string(),
    }
    return Joi.validate(cardBanlist, schema);
}

exports.cardBanlistSchema = cardBanlistSchema;
exports.validate = validateCardBanlistSchema;