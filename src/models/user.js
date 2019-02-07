const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    name: 'string',
    password: 'string'
});
let User = mongoose.model('User', schema);

module.exports = User;

