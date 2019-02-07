const ErrorWS = require("../../errorWS");
const startupDao = require("../dao/startupDao");

const startupController = {
    get: async (req, res, next) => {
        let startups = await startupDao.get();
        res.send(startups);
    },
    getOne: async (req, res, next) => {
        let id = req.params.id;
        let startup = await startupDao.getOne(id);
        try {
            res.send(startup);
        } catch (e) {
            console.log(e);
            if (e instanceof ErrorWS) {
                res.send(e)
            } else {
                let error = new ErrorWS(50001);
                res.status(500);
                res.send(e)
            }
        }
    },
    create: async (req, res, next) => {
        let body = req.body;
        console.log(body);
        try {
            let startup = await startupDao.create(body);
            res.send(startup);
        } catch (e) {
            let error = new ErrorWS(50001);
            res.status(500);
            res.send(error)
        }
    },
    update: async (req, res, next) => {
        let body = req.body;
        console.log(body);
        try {
            res.send(await startupDao.update(body));
        } catch (e) {
            console.log(e);
            if (e instanceof ErrorWS) {
                res.send(e)
            } else {
                let error = new ErrorWS(50001);
                res.status(500);
                res.send(error)
            }
        }

    },
    delete: async (req, res, next) => {
        let id = req.params.id;
        res.send(await startupDao.delete(id));
    }
};

module.exports = startupController;
