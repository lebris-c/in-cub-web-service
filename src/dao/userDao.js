const ErrorWS = require("../../errorWS");
const User = require("../models/user");

const UserDao = {
    getOne: async (name, pass) => {
        return await User.findOne({name: name, password: pass})
    },
    create: async (modelJSON) => {
        return await User.create(modelJSON)
    }
};

module.exports = UserDao;
