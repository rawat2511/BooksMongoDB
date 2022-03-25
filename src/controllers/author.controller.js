const express = require('express');
const crudController = require('./crud.controller');
const Author = require('../models/author.model');

const router = express.Router();

router.post('/', crudController(Author).post);

router.get('/', crudController(Author).getAll);

router.get('/:id', crudController(Author).getOne);

router.patch('/:id', crudController(Author).updateOne);

router.delete('/:id', crudController(Author).deleteOne);

module.exports = router;