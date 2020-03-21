const StaffSchema = require('../schemas/staff');

module.exports = async adminUser => {
  const user = await StaffSchema.find({ userName: adminUser.userName, password: adminUser.password});
  return user;
};