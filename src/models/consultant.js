const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    name: 'string',
    surname: 'string',
    description: 'string'
});
let Consultant = mongoose.model('Consultant', schema);

module.exports = Consultant;

