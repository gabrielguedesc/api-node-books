const Book = require('../../../src/models/Book');
const BookController = require('../../../src/controllers/BookController');

const bookController = new BookController(Book);

let sandbox;
beforeEach(() => {
  sandbox = sinon.createSandbox();
});

afterEach(() => {
  sandbox.restore();
});

describe('Unit Tests BookController', () => {
  context('Return a list of books', () => {
    it('should return a list of books', async () => {
      const expectResponse = [{
        _id: "5ba554fbeea5252cfcb6a40f",
        name: "1984",
        author: "George Orwell",
        __v: 0
      }];
  
      sandbox.stub(Book, 'find').returns(Promise.resolve(expectResponse));
      const response = await bookController.getAll();
  
      expect(Book.find).to.have.been.calledOnce;
      expect(response.data).to.be.eql(expectResponse);
      expect(response.statusCode).to.be.eql(200);
    });

    it('should return error if it is not possible to return a list of books', async () => {
      const error = {
        message: 'Não foi possível consultar a lista de livros.',
      };
  
      sandbox.stub(Book, 'find').returns(Promise.reject(error));
      const response = await bookController.getAll();
      
      expect(Book.find).to.have.been.calledOnce;
      expect(response.data.error).to.be.eql(error.message);
      expect(response.statusCode).to.be.eql(422);
    });

  });

  context('Return a book by ID', () => {
    const _id = "5ba554fbeea5252cfcb6a40f";

    it('should return a book by ID', async () => {
      const expectResponse = {
        _id: "5ba554fbeea5252cfcb6a40f",
        name: "1984",
        author: "George Orwell",
        __v: 0
      };
  
      sandbox.stub(Book, 'findOne').returns(Promise.resolve(expectResponse));
      const response = await bookController.getById(_id);
  
      expect(Book.findOne).to.have.been.calledOnce;
      expect(response.data).to.be.eql(expectResponse);
      expect(response.statusCode).to.be.eql(200);
    });

    it('should return error if it is not possible to return a book by ID', async () => {
      const error = {
        message: 'Não foi possível consultar um livro pelo ID',
      };

      sandbox.stub(Book, 'findOne').returns(Promise.reject(error));
      const response = await bookController.getById(_id);

      expect(Book.findOne).to.have.been.calledOnce;
      expect(response.data.error).to.be.eql(error.message);
      expect(response.statusCode).to.be.eql(422);
    });
  });

  context('Create a book', () => {
    const request = {
      name: "1984",
      author: "George Orwell",
    };

    it('should create a book', async () => {
      
      const expectResponse = {
        _id: "5ba554fbeea5252cfcb6a40f",
        name: "1984",
        author: "George Orwell",
        __v: 0
      };
  
      sandbox.stub(Book, 'create').returns(Promise.resolve(expectResponse));
      const response = await bookController.create(request);
    
      expect(Book.create).to.have.been.calledOnce;
      expect(response.data).to.be.eql(expectResponse);
      expect(response.statusCode).to.be.eql(201);
    });

    it('should return error if it is not possible create a book', async () => {
      const error = {
        message: 'Não foi possível criar um novo livro',
      };

      sandbox.stub(Book, 'create').returns(Promise.reject(error));
      const response = await bookController.create(request);

      expect(Book.create).to.have.been.calledOnce;
      expect(response.data.error).to.be.eql(error.message);
      expect(response.statusCode).to.be.eql(422);
    });
  });

  context('Delete a book', () => {
    const _id = '5ba584f6f2daef07f86676ba';

    it('should delete a book', async () => {
      sandbox.stub(Book, 'findByIdAndDelete').returns(Promise.resolve({}));

      const response = await bookController.delete(_id);
  
      expect(Book.findByIdAndDelete).to.have.been.calledOnce;
      expect(response.statusCode).to.be.eql(204);
    });

    it('should return error if it is not possible delete a book', async () => {
      const error = {
        message: 'Não foi possível deletar o livro',
      };

      sandbox.stub(Book, 'findByIdAndDelete').returns(Promise.reject(error));

      const response = await bookController.delete(_id);
      
      expect(Book.findByIdAndDelete).to.have.been.calledOnce;
      expect(response.data.error).to.be.eql(error.message);
      expect(response.statusCode).to.be.eql(422);
    });
  });

  context('Delete a book', () => {
    const _idRequest = '5ba59363271e6238ac2909a2';

    const dataRequest = {
      name: 'Name updated',
      author: 'Author updated',
    };

    it('should update a book', async () => {
      sandbox.stub(Book, 'findByIdAndUpdate').returns(Promise.resolve({}));
      const response = await bookController.update(_idRequest, dataRequest);
  
      expect(Book.findByIdAndUpdate).to.have.been.calledOnce;
      expect(response.statusCode).to.be.eql(204);
    });

    it('should return error if it is not possible update a book', async () => {
      const error = {
        message: 'Não foi possível atualizar o livro',
      };
      
      sandbox.stub(Book, 'findByIdAndUpdate').returns(Promise.reject(error));
      const response = await bookController.update(_idRequest, dataRequest);

      expect(Book.findByIdAndUpdate).to.have.been.calledOnce;
      expect(response.data.error).to.be.eql(error.message);
      expect(response.statusCode).to.be.eql(422);
    });
  });
});