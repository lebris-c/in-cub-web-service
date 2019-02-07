const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

let schema = new mongoose.Schema({
    name: 'string',
    activity: 'string',
    nbCofounder: "number",
    description: 'string',
    address: 'string',
    official: 'string',
    consultant: {type: ObjectId, ref: 'Consultant' }
});
let Startup = mongoose.model('Startup', schema);

module.exports = Startup;

