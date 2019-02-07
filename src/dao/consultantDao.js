const ErrorWS = require("../../errorWS");
const Consultant = require("../models/consultant");

const consultantDao = {
    get: async () => {
        return await Consultant.find({})
    },
    getOne: async (id) => {
        return await Consultant.findOne({_id: id})
    },
    create: async (modelJSON) => {
        return await Consultant.create(modelJSON)
    },
    update: async (model) => {
        const id = model._id;
        delete model._id;
        return await Consultant.update({_id: id}, model, {upsert: true})
    },
    delete: async (req, res, next) => {

    }
};

module.exports = consultantDao;
