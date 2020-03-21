const mongoose = require('mongoose');

const ColorSchema = new mongoose.Schema({
    hy: { name: String },
    en: { name: String },
    ru: { name: String }
});

module.exports = mongoose.model('Color', ColorSchema);
