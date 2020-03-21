const mongoose = require('mongoose');
const CategorySchema = require('./category');

const SubCategorySchema = new mongoose.Schema({
    hy: {
        name: String
    },
    en: {
        name: String
    },
    ru: {
        name: String
    },
    categoryId: {$ref: '_id', type: mongoose.ObjectId, $db: 'Categories' }
});

module.exports = mongoose.model('SubCategory', SubCategorySchema);
