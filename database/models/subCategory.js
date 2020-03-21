const SchemaSubCategory = require('../schemas/subCategory');

module.exports = {

    async getSubCategories() {
        try {
            return await SchemaSubCategory.find();

        } catch (e) {
            console.log(e)
        }
    },

    async getSubCategory(id) {
        try {
            return await SchemaSubCategory.findOne({_id: id});
        } catch (e) {
            console.log(e)
        }
    },

    async addSubCategory(subCategory) {
        return await SchemaSubCategory(
            subCategory
        );
    },

    async updateSubCategory(id, subCategory) {
        try {
            await SchemaSubCategory.update({ _id:id }, subCategory, { upsert:true });
        } catch (e) {
            console.log(e);
        }
    },

    async deletedSubCategory(id) {
        try {
            await SchemaSubCategory.remove({_id: id});
        } catch (e) {
            console.log(e);
        }
    },

    async getSubCategoriesForCategory(categoryId) {
        try {
            return await SchemaSubCategory.find({categoryId});
        } catch (e) {
            console.log(e);
        }
    }
};