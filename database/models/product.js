const SchemaProduct = require('../schemas/product');

module.exports = {

    async getProducts() {
        try {
            return await SchemaProduct.find();
        } catch (e) {
            console.log(e)
        }
    },

    async getProductsFilter(filter) {
        try {
            return await SchemaProduct.find(filter);
        } catch (e) {
            console.log(e)
        }
    },

    async getProduct(id) {
        try {
            return await SchemaProduct.findOne({ _id: id });
        } catch (e) {
            console.log(e)
        }
    },

    async addProduct(product) {
        return await SchemaProduct(product);
    },

    async updateProduct(id, product) {
        try {
            await SchemaProduct.updateOne({ _id: id }, product);
        } catch (e) {
            console.log(e);
        }
    },

    async deletedProduct(id) {
        try {
            await SchemaProduct.remove({_id: id});
        } catch (e) {
            console.log(e);
        }
    }
};
