var express = require('express');
var router = express.Router();
const consultantController = require("../controllers/consultantController");

/* GET users listing. */
router.get('/', consultantController.get);
router.get('/:id', consultantController.getOne);
router.post('/', consultantController.create);
router.put('/', consultantController.update);

module.exports = router;
