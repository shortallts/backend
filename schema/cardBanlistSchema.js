const Joi = require('joi');
const mongoose = require('mongoose');

const cardBanlist = mongoose.Schema({
    ban_ocg: {
        type: String,
    },
    ban_tcg: {
        type: String,
    }
});

function validateCardBanlist(cardBanlist){
    const schema = {
        ban_ocg: Joi.string(),
        ban_tcg: Joi.string(),
    }
    return Joi.validate(cardBanlist, schema);
}

exports.cardBanlist = cardBanlist;
exports.validate = validateCardBanlist;