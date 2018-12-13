import chai from 'chai';
import {ApiTransactions} from '../../src/apis/api.transactions';
import {RequestHandler} from '../../src/request/handler';
import spies from 'chai-spies';

chai.use(spies);

describe('API transactions', () => {
    let transactions, query;

    beforeEach(() => {
        transactions = new ApiTransactions();

        query = {
            param: 'test',
        };

        chai.spy.on(transactions, 'get');
        chai.spy.on(transactions, 'post');
    });

    it('should instantiate the class', () => {
        chai.expect(transactions).to.be.an.instanceof(ApiTransactions);
        chai.expect(transactions).to.be.an.instanceof(RequestHandler);
    });

    describe('getReport', () => {
        it('should call this.get', () => {
            transactions.getReport();

            chai.expect(transactions.get).to.have.been.called.with
                .exactly('/transaction-report/date', {});
        });

        it('should call this.get with params', () => {
            let query = {
                term: 'devteam',
                from: '2018-07-06',
                to  : '2018-08-06',
            };

            transactions.getReport('status', query);

            chai.expect(transactions.get).to.have.been.called.with
                .exactly('/transaction-report/status', query);
        });
    });

    describe('getPasskeysReport', () => {
        it('should call this.get', () => {
            transactions.getPasskeysReport(21232);

            chai.expect(transactions.get).to.have.been.called.with
                .exactly('/transaction-report/passkey-ticket', { event: 21232, status: 'approved' });
        });

        it('should call this.get with params', () => {
            let query = {
                status: 'pending',
            };

            transactions.getPasskeysReport(21232, query);

            chai.expect(transactions.get).to.have.been.called.with
                .exactly('/transaction-report/passkey-ticket', { event: 21232, status: 'pending' });
        });
    });

    describe('getList', () => {
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

        it('should call this.getById with query params', () => {
            let id = '1234-55555-6666';

            transactions.getById(id, query);

            chai.expect(transactions.get).to.have.been.called.with
                .exactly(`/transaction/${id}`, query);
        });
    });

    describe('getRefundReasons', () => {
        it('should call this.getRefundReasons', () => {
            transactions.getRefundReasons();

            chai.expect(transactions.get).to.have.been.called.with
                .exactly('/refundReasons', {});
        });

        it('should call this.getRefundReasons with query params', () => {

            transactions.getRefundReasons(query);

            chai.expect(transactions.get).to.have.been.called.with
                .exactly('/refundReasons', query);
        });
    });

    describe('refund', () => {
        it('should call this.refund', () => {
            let id = '1234-55555-6666';

            transactions.refund(id);

            chai.expect(transactions.post).to.have.been.called.with
                .exactly(`/shop/${id}/refund`, null, {});
        });

        it('should call this.refund with query params', () => {
            let id   = '1234-55555-6666';
            let data = {
                property: 'test',
            };

            transactions.refund(id, data, query);

            chai.expect(transactions.post).to.have.been.called.with
                .exactly(`/shop/${id}/refund`, data, query);
        });
    });

    describe('capture', () => {
        it('should call this.capture', () => {
            let id = '1234-55555-6666';

            transactions.capture(id);

            chai.expect(transactions.post).to.have.been.called.with
                .exactly(`/shop/${id}/capture`, null, {});
        });

        it('should call this.capture with query params', () => {
            let id   = '1234-55555-6666';
            let query = {
                property: 'test',
            };

            transactions.capture(id, query);

            chai.expect(transactions.post).to.have.been.called.with
                .exactly(`/shop/${id}/capture`, null, query);
        });
    });

    describe('cancel', () => {
        it('should call this.cancel', () => {
            let id = '1234-55555-6666';

            transactions.cancel(id);

            chai.expect(transactions.post).to.have.been.called.with
                .exactly(`/shop/${id}/cancel`, null, {});
        });

        it('should call this.cancel with query params', () => {
            let id    = '1234-55555-6666';
            let query = {
                property: 'test',
            };

            transactions.cancel(id, query);

            chai.expect(transactions.post).to.have.been.called.with
                .exactly(`/shop/${id}/cancel`, null, query);
        });
    });
});
