const ErrorWS = require("../../errorWS");
const consultantDao = require("../dao/consultantDao");


const consultantController = {
    get: async (req, res, next) => {
        try {
            let consultants = await consultantDao.get();
            res.send(consultants);
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
    getOne: async (req, res, next) => {
        let id = req.params.id;
        try {
            let consultant = await consultantDao.getOne(id);
            res.send(consultant);
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
    create: async (req, res, next) => {
        let body = req.body;

        try {
            let consultant = await consultantDao.create(body);
            res.send(consultant);
        } catch (e) {
            console.log(e);
            let error = new ErrorWS(50001);
            res.status(500);
            res.send(error)
        }
    },
    update: async (req, res, next) => {
        let body = req.body;
        try {
            res.send(await consultantDao.update(body));
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

    }
};

module.exports = consultantController;
