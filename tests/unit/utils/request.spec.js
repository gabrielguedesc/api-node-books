const { defaultResponse, errorResponse } = require('../../../src/utils/request');

describe('Util Tests utils', () => {
  context('Request', () => {
    it('should return a default response', () => {
      const data = {
        name: 'Default response',
      };
      const statusCode = 200;
      const response = defaultResponse(data, statusCode);
  
      expect(response.data).to.be.eql(data);
      expect(response.statusCode).to.be.eql(statusCode);
    });

    it('should return a error response', () => {
      const data = {
        name: 'Error response',
      };
      const statusCode = 400;
      const response = defaultResponse(data, statusCode);
  
      expect(response.data).to.be.eql(data);
      expect(response.statusCode).to.be.eql(statusCode);
    });
  });
});