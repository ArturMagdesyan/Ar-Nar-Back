const UserAPI = require("../database/models/auth");

module.exports =  async (req, res) => {
    try {
        const authUser = req.body;
        const user = await UserAPI(authUser);
        if(user.length) {
           return  res.status(201).send(user[0]);
        }
        res.status(401).send('Admin user not a found')
    } catch (e) {
        res.sendStatus(500);
    }
};