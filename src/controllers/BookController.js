const { defaultResponse, errorResponse, HttpStatus } = require('../utils/request');

class BookController {
  constructor(Book) {
    this.Book = Book;
  }

  getAll() {
    return this.Book.find({})
      .then(result => defaultResponse(result, HttpStatus.Ok))
      .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }

  getById(_id) {
    return this.Book.findById({ _id })
      .then(result => defaultResponse(result, HttpStatus.Ok))
      .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }

  create(data) {
    return this.Book.create(data)
      .then(result => defaultResponse(result, HttpStatus.CREATED))
      .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }

  update(_id, data) {
    return this.Book.findByIdAndUpdate(_id, data)
      .then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
      .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }

  delete(_id) {
    return this.Book.findByIdAndDelete({ _id })
      .then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
      .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }
}

module.exports = BookController;
