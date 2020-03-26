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
    bag: [
        {
            quantity: Number,
            size: String,
            colors: [String],
            price: Number,
            percentOff: Number,
        }
        ],
    productCode: String,
    byOrder: Number,
    images: [{
        name: String,
        bagItemId: { type: mongoose.ObjectId, default: null },
        base: { type: Boolean, default: false, required: true }
    }],
});


module.exports = mongoose.model('Product', ProductSchema);
