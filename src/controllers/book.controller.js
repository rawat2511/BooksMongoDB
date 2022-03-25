const express = require('express');
const crudController = require('./crud.controller');
const Book = require('../models/book.model');

const router = express.Router();
 
router.post('/', crudController(Book).post);

// 3,4. Find books in a section that are not checked out
router.get('/section/:id', async (req, res) => {
    const { isCheckedOut } = req.query;
    const sectionId = req.params.id;
    const criteria = {
        section: [sectionId]
    };
    if( isCheckedOut ){
        criteria.isCheckedOut = isCheckedOut;
    }
    const books = await Book.find(criteria);
    res.status(200).json(books);
} );


// 2. Find all books written by an author
router.get('/author/:id', async (req, res) => {
    const authorId = req.params.id;
    const books = await Book.find({authors: [authorId]});
    res.status(200).json(books);
} );


// 1. Find books that are checked out
router.get('/', async (req, res) => {
    const { isCheckedOut } = req.query;
    const criteria = {};
    if( isCheckedOut ){
        criteria.isCheckedOut = isCheckedOut;
    }
    const books = await Book.find(criteria);
    res.status(200).json(books);
});

// 5. Find books of 1 author inside a section
router.get('/:sectionId/:authorId', async (req, res) => {
    const {sectionId, authorId} = req.params;
    const criteria = {
        section: sectionId,
        authors: authorId
    }
    const books = await Book.find(criteria);
    res.status(200).json(books);
})


router.get('/:id', crudController(Book).getOne);

router.patch('/:id', crudController(Book).updateOne);

router.delete('/:id', crudController(Book).deleteOne);

module.exports = router;