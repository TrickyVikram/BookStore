const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    publishedDate: {
        type: Date,
        default: Date.now,
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
