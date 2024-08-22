const Book = require('../models/bookModel');

// @desc    Get all books
// @route   GET /api/books
// @access  Public
const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a new book
// @route   POST /api/books
// @access  Public
const createBook = async (req, res) => {
    const { title, author, price, category } = req.body;
    const book = new Book({
        title,
        author,
        price,
        category,
    });

    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get a single book by ID
// @route   GET /api/books/:id
// @access  Public
const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update a book by ID
// @route   PUT /api/books/:id
// @access  Public
const updateBook = async (req, res) => {
    const { title, author, price, category } = req.body;

    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        book.title = title || book.title;
        book.author = author || book.author;
        book.price = price || book.price;
        book.category = category || book.category;

        const updatedBook = await book.save();
        res.json(updatedBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a book by ID
// @route   DELETE /api/books/:id
// @access  Public
const deleteBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        await book.remove();
        res.json({ message: 'Book removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getBooks,
    createBook,
    getBookById,
    updateBook,
    deleteBook,
};
