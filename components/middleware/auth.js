const admin = {
    userName: "Gago.admin.admin",
    password: "pass123456",
    lastName: "Sargsyan",
    firstName: "Gago",
    roles: ['ALL']
};
module.exports = (req, res, next) => {
    const user = req.body;
    if (admin.userName === user.userName && admin.password === user.password) {
        return  res.status(201).send(admin);
    }
    next();
};