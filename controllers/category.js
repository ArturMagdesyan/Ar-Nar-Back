const CategoryAPI = require('../database/models/category');

module.exports = {
  async getCategories(req, res) {
    try {
      const categories = await CategoryAPI.getCategories();
      res.status(200).send(categories);
    } catch (e) {
      res.status(500).send({ message: 'Get categories'});
    }
  },

  async getCategory(req, res) {
    try {
      const id = req.params.id;
      const categories = await CategoryAPI.getCategory(id);
      res.status(201).send(categories);
    } catch (e) {
      res.status(500).send({ message: 'Get category for id'});
    }
  },

  async addCategory(req, res) {
    try {
      const categoryData = req.body;
      const category = await CategoryAPI.addCategory(categoryData);
      try {
        await category.save();
        res.status(201).send(category);
      } catch (e) {
        res.status(400).send({ message: 'Save category'});
      }
    } catch (e) {
      res.status(500).send({ message: 'Add category'});
    }
  },

  async updateCategory(req, res) {
    try {
      const id = req.params.id;
      const categoryData = req.body;
      await CategoryAPI.updateCategory(id, categoryData);
      const category = await CategoryAPI.getCategory(id);
      res.status(201).send(category);
    } catch (e) {
      res.status(500).send({ message: 'Update category'});
    }
  },

  async deletedCategory(req, res) {
    try {
      const id = req.params.id;
      await CategoryAPI.deletedCategory(id);
      res.status(200).send({ message: 'Deleted category'});
    } catch (e) {
      res.status(500).send({ message: 'Deleted category'});
    }
  }
};