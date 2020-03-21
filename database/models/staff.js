const SchemaStaff = require('../schemas/staff');

module.exports = {

    async getCategories() {
        try {
            return await SchemaStaff.find();
        } catch (e) {
            console.log(e)
        }
    },

    async getCategory(id) {
        try {
            return await SchemaStaff.findOne({_id: id});
        } catch (e) {
            console.log(e)
        }
    },

    async addCategory(staff) {
        return await SchemaStaff(
            staff
        );
    },

    async updateCategory(id, staff) {
        try {
            await SchemaStaff.update({ _id:id }, staff, { upsert:true });
        } catch (e) {
            console.log(e);
        }
    },

    async deletedCategory(id) {
        try {
            await SchemaStaff.remove({_id: id});
        } catch (e) {
            console.log(e);
        }
    }
};
