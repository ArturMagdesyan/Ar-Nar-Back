const SchemaColor = require('../schemas/color');

module.exports = {

    async getColors() {
        try {
            return await SchemaColor.find();
        } catch (e) {
            console.log(e)
        }
    },

    async getColor(id) {
        try {
            return await SchemaColor.findOne({_id: id});
        } catch (e) {
            console.log(e)
        }
    },

    async addColor(category) {
        return await SchemaColor(
            category
        );
    },

    async updateColor(id, color) {
        try {
            await SchemaColor.update({ _id:id }, color);
        } catch (e) {
            console.log(e);
        }
    },

    async deletedColor(id) {
        try {
            await SchemaColor.remove({_id: id});
        } catch (e) {
            console.log(e);
        }
    }
};