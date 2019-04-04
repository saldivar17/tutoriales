const express = require('express');
const router = express.Router();

const perController = require('../controllers/perController');
const uniController = require('../controllers/uniController');

//persona
router.get('/', perController.list);
router.post('/add', perController.save);
router.get('/delete/:id', perController.delete);
router.get('/update/:id', perController.update);
router.post('/edit/:id', perController.edit);

//universidad
router.get('/list', uniController.list)
router.post('/add_u', uniController.insertar)
router.get('/add_uni', uniController.ventanaSave)
router.post('/add_universidad', uniController.save)

module.exports = router;
