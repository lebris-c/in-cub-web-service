const ErrorWS = require("../../errorWS");
const Startup = require("../models/startup");


const startupDao = {
    get: async () => {
        return await Startup.find({}).populate('consultant')
    },
    getOne: async (id) => {
        return await Startup.findOne({_id: id}).populate('consultant')
    },
    create: async (modelJSON) => {
        return await Startup.create(modelJSON)
    },
    update: async (model) => {
        const id = model._id;
        delete model._id;
        return await Startup.update({_id: id}, model, {upsert: true})
    },
    delete: async (id) => {
        return await Startup.deleteOne({_id: id});
    }
};

module.exports = startupDao;
