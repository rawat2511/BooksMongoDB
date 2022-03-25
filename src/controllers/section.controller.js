const express = require('express');
const crudController = require('./crud.controller');
const Section = require('../models/section.model');

const router = express.Router();

router.post('/', crudController(Section).post);

router.get('/', crudController(Section).getAll);

router.get('/:id', crudController(Section).getOne);

router.patch('/:id', crudController(Section).updateOne);

router.delete('/:id', crudController(Section).deleteOne);

module.exports = router;