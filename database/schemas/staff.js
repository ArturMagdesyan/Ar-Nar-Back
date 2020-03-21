const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
    lastName: String,
    firstName: String,
    email: String,
    phone: Number,
    userName: String,
    password: String,
    roles: [String],
});

module.exports = mongoose.model('Staff', StaffSchema);
