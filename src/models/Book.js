const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
  },
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
