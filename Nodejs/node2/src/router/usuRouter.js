const express = require('express');
const router = express.Router();

const usuController = require('../controller/usuController');
router.get('/', usuController.inicio);

module.exports = router;
