const express = require('express');
const router = express.Router();
const startupController = require("../controllers/startupController");


/* GET users listing. */
router.get('/', startupController.get);
router.get('/:id', startupController.getOne);
router.post('/', startupController.create);
router.put('/', startupController.update);
router.delete('/:id', startupController.delete);

module.exports = router;
