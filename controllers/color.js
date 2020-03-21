const ColorAPI = require('../database/models/color');

module.exports = {
    async getColors(req, res) {
        try {
            const categories = await ColorAPI.getColors();
            res.status(200).send(categories);
        } catch (e) {
            res.status(500).send({ message: 'Get Colors'});
        }
    },

    async getColor(req, res) {
        try {
            const id = req.params.id;
            const colors = await ColorAPI.getColor(id);
            res.status(201).send(colors);
        } catch (e) {
            res.status(500).send({ message: 'Get color for id'});
        }
    },

    async addColor(req, res) {
        try {
            const colorData = req.body;
            const color = await ColorAPI.addColor(colorData);
            try {
                await color.save();
                res.status(201).send(color);
            } catch (e) {
                res.status(400).send({ message: 'Save color'});
            }
        } catch (e) {
            res.status(500).send({ message: 'Add color'});
        }
    },

    async updateColor(req, res) {
        try {
            const id = req.params.id;
            const colorData = req.body;
            await ColorAPI.updateColor(id, colorData);
            const color = await ColorAPI.getColor(id);
            res.status(201).send(color);
        } catch (e) {
            res.status(500).send({ message: 'Update color'});
        }
    },

    async deletedColor(req, res) {
        try {
            const id = req.params.id;
            await ColorAPI.deletedColor(id);
            res.status(200).send({ message: 'Deleted color'});
        } catch (e) {
            res.status(500).send({ message: 'Deleted color'});
        }
    }
};