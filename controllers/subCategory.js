const SubCategoryAPI = require('../database/models/subCategory');

module.exports = {
    async getSubCategories(req, res) {
        try {
            const categories = await SubCategoryAPI.getSubCategories();
            res.status(200).send(categories);
        } catch (e) {
            res.status(500).send({ message: 'Get sub categories'});
        }
    },

    async getSubCategory(req, res) {
        try {
            const id = req.params.id;
            const subCategory = await SubCategoryAPI.getSubCategory(id);
            res.status(201).send(subCategory);
        } catch (e) {
            res.status(500).send({ message: 'Get sub category for id'});
        }
    },

    async addSubCategory(req, res) {
        try {
            const subCategoryData = req.body;
            const subCategory = await SubCategoryAPI.addSubCategory(subCategoryData);
            try {
                await subCategory.save();
                res.status(201).send(subCategory);
            } catch (e) {
                res.status(400).send({ message: 'Save sub category'});
            }
        } catch (e) {
            res.status(500).send({ message: 'Add sub category'});
        }
    },

    async updateSubCategory(req, res) {
        try {
            const id = req.params.id;
            const subCategoryData = req.body;
            await SubCategoryAPI.updateSubCategory(id, subCategoryData);
            const subCategory = await SubCategoryAPI.getSubCategory(id);
            res.status(201).send(subCategory);
        } catch (e) {
            res.status(500).send({ message: 'Update sub category'});
        }
    },

    async deletedSubCategory(req, res) {
        try {
            const id = req.params.id;
            await SubCategoryAPI.deletedSubCategory(id);
            res.status(200).send({ message: 'Deleted sub category'});
        } catch (e) {
            res.status(500).send({ message: 'Deleted sub category'});
        }
    },

    async getSubCategoriesForCategory(req, res) {
        try {
            const categoryId = req.params.categoryId;
            const subCategories = await SubCategoryAPI.getSubCategoriesForCategory(categoryId);
            res.status(200).send(subCategories);
        } catch (e) {
            res.status(500).send({ message: 'Deleted sub category'});
        }
    }
};