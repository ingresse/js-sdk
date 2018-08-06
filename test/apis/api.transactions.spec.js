import chai from 'chai';
import {ApiTransactions} from '../../src/apis/api.transactions';
import {RequestHandler} from '../../src/request/handler';
import spies from 'chai-spies';

chai.use(spies);

describe('API transactions', () => {
    let transactions;

    beforeEach(() => {
        transactions = new ApiTransactions();
        chai.spy.on(transactions, 'get');
    });

    it('should instantiate the class', () => {
        chai.expect(transactions).to.be.an.instanceof(ApiTransactions);
        chai.expect(transactions).to.be.an.instanceof(RequestHandler);
    });

    describe('get', () => {
        it('should call this.get', () => {
            transactions.getList();

            chai.expect(transactions.get).to.have.been.called.with
                .exactly('/transactions', {});
        });

        it('should call this.get with params', () => {
            let query = {
                term: 'devteam',
                from: '2018-07-06',
                to  : '2018-08-06',
            };

            transactions.getList(query);

            chai.expect(transactions.get).to.have.been.called.with
                .exactly('/transactions', query);
        });
    });

    describe('getById', () => {
        it('should call this.getById', () => {
            let id = '1234-55555-6666';

            transactions.getById(id);

            chai.expect(transactions.get).to.have.been.called.with
                .exactly(`/transaction/${id}`, {});
        });
    });
});

