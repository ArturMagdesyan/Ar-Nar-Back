const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    hy: {
        name: String
    },
    en: {
        name: String
    },
    ru: {
        name: String
    }
});

module.exports = mongoose.model('Category', CategorySchema);
