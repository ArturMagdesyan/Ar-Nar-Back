const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    categoryId: {
        type: mongoose.ObjectId
    },
    subCategoryId: {
        type: mongoose.ObjectId
    },
    hy: {
        name: String,
        description: String,
    },
    en: {
        name: String,
        description: String,
    },
    ru: {
        name: String,
        description: String,
    },
    onlyQuantity: {
        type: Boolean

    },
    productCode: String,
    quantitySize: [{ quantity: Number, size: String}],
    quantity: Number,
    color: [String],
    price: Number,
    byOrder: Number,
    percentOff: Number,
    images: [{ name: String, base: { type: Boolean, default: false, required: true }}],
});


module.exports = mongoose.model('Product', ProductSchema);
