const SchemaCategory = require('../schemas/category');

module.exports = {

    async getCategories() {
        try {
            const categories = await SchemaCategory.find();
            return categories;
        } catch (e) {
            console.log(e)
        }
    },

    async getCategory(id) {
        try {
            return await SchemaCategory.findOne({_id: id});
        } catch (e) {
            console.log(e)
        }
    },

    async addCategory(category) {
        return await SchemaCategory(
            category
        );
    },

    async updateCategory(id, category) {
        try {
            await SchemaCategory.update({ _id:id }, category, { upsert:true });
        } catch (e) {
            console.log(e);
        }
    },

    async deletedCategory(id) {
        try {
            await SchemaCategory.remove({_id: id});
        } catch (e) {
             console.log(e);
        }
    }
}