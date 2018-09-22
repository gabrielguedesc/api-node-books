const BookController = require('../controllers/BookController');
const Book = require('../models/Book');

module.exports = app => {
  const bookController = new BookController(Book);

  app.route('/books')
    .get((_, res) => {
      bookController.getAll()
        .then(response => res.status(response.statusCode).json(response.data));
    })
    .post((req, res) => {
      bookController.create(req.body)
      .then(response => res.status(response.statusCode).json(response.data));
    });

  app.route('/book/:_id')
    .get((req, res) => {
      bookController.getById(req.params._id)
      .then(response => res.status(response.statusCode).json(response.data));
    })
    .delete((req, res) => {
      bookController.delete(req.params._id)
      .then(response => res.status(response.statusCode).json(response.data));
    })
    .put((req, res) => {
      bookController.update(req.params._id, req.body)
      .then(response => res.status(response.statusCode).json(response.data));
    });
};
