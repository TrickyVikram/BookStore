const express = require('express');
const {
    getBooks,
    createBook,
    getBookById,
    updateBook,
    deleteBook,
    test
} = require('../controllers/bookController');

const router = express.Router();

router.route('/')
    .get(getBooks)
    .post(createBook);

router.route('/:id')
    .get(getBookById)
    .put(updateBook)
    .delete(deleteBook);

router.route('/test')
    .get(test);

module.exports = router;
