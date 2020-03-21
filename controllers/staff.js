const StaffAPi = require('../database/models/staff');

module.exports = {
    async getStaffs(req, res) {
        try {
            const staff = await StaffAPi.getCategories();
            res.status(200).send(staff);
        } catch (e) {
            res.status(500).send({ message: 'Get staff'});
        }
    },

    async getStaff(req, res) {
        try {
            const id = req.params.id;
            const staff = await StaffAPi.getCategory(id);
            res.status(201).send(staff);
        } catch (e) {
            res.status(500).send({ message: 'Get staff for id'});
        }
    },

    async addStaff(req, res) {
        try {
            const categoryData = req.body;
            const category = await StaffAPi.addCategory(categoryData);
            try {
                await category.save();
                res.status(201).send(category);
            } catch (e) {
                res.status(400).send({ message: 'Save staff'});
            }
        } catch (e) {
            res.status(500).send({ message: 'Add staff'});
        }
    },

    async updateStaff(req, res) {
        try {
            const id = req.params.id;
            const categoryData = req.body;
            await StaffAPi.updateCategory(id, categoryData);
            const category = await StaffAPi.getCategory(id);
            res.status(201).send(category);
        } catch (e) {
            res.status(500).send({ message: 'Update staff'});
        }
    },

    async deletedStaff(req, res) {
        try {
            const id = req.params.id;
            await StaffAPi.deletedCategory(id);
            res.status(200).send({ message: 'Deleted staff'});
        } catch (e) {
            res.status(500).send({ message: 'Deleted staff'});
        }
    }
};