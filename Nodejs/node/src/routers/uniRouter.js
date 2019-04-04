const express = require('express');
const router = express.Router();

const uniController = require('../controllers/uniController');

router.get('/', uniController.list);
router.post('/add_uni', uniController.insertar)

module.exports = router;