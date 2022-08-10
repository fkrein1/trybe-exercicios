const sinon = require('sinon');
const { expect } = require('chai');

const moviesService = require('../../services/movieService');
const moviesController = require('../../controllers/movieController');

describe('Controller: Ao chamar o controller de create', () => {
  describe('quando o payload informado não é válido', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();
      sinon.stub(moviesService, 'create').resolves(false);
    });

    after(() => {
      moviesService.create.restore();
    });

    it('é chamado o status com o código 400', async () => {
      await moviesController.create(request, response);

      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Dados inválidos"', async () => {
      await moviesController.create(request, response);

      expect(response.send.calledWith('Dados inválidos')).to.be.equal(true);
    });
  });

  describe('quando é inserido com sucesso', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();

      sinon.stub(moviesService, 'create').resolves(true);
    });

    after(() => {
      moviesService.create.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await moviesController.create(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
      await moviesController.create(request, response);

      expect(response.send.calledWith('Filme criado com sucesso!')).to.be.equal(
        true,
      );
    });
  });
});
