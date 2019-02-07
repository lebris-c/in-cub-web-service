const ErrorWS = require("../../errorWS");
const userDao = require("../dao/userDao");
const mySecret = 'my_secret';
const jwt = require('jsonwebtoken');

const userController = {
    login: async (req, res, next) => {
        let body = req.body;
        let user = await userDao.getOne(body.name, body.password);
        let token = jwt.sign({
            username: user.name
        }, mySecret);
        res.send({
            token: token,
        });
    },
    register: async (req, res, next) => {
        try {
            return await userDao.create(req.body)
        } catch (e) {
            console.log(e)
        }

    },
};

module.exports = userController;
