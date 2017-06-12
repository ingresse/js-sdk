import chai from 'chai';
import {ApiTicketTransfer} from '../../src/apis/api.ticket';
import {RequestHandler} from '../../src/request/handler';
import spies from 'chai-spies';

chai.use(spies);


describe('API Ticket Transfer', () => {
    let transfer;

    beforeEach(() => {
        transfer = new ApiTicketTransfer();
        chai.spy.on(transfer, 'get');
        chai.spy.on(transfer, 'post');
    });

    it('should instantiate the class', () => {
        chai.expect(transfer).to.be.an.instanceof(ApiTicketTransfer);
        chai.expect(transfer).to.be.an.instanceof(RequestHandler);
    });

    describe('createTicketTransfer', () => {
        it('should call this.post', () => {
            let id = 123;
            let data = {
                user: 123
            };

            transfer.createTicketTransfer(id, data);

            chai.expect(transfer.post).to.have.been.called.with
                .exactly(`/ticket/${id}/transfer`, data, {});
        });

        it('should call this.post if the isReturn equal true', () => {
            let id = 123;
            let data = {
                isReturn: 123
            };

            transfer.createTicketTransfer(id, data);

            chai.expect(transfer.post).to.have.been.called.with
                .exactly(`/ticket/${id}/transfer`, data, {});
        });
    });

    describe('updateTicketTransfer', () => {
        it('should call this.post', () => {
            let id = 123;
            let transferId = 456;
            let data = {
                action: 'accept'
            };

            transfer.updateTicketTransfer(id, transferId, data);

            chai.expect(transfer.post).to.have.been.called.with
                .exactly(`/ticket/${id}/transfer/${transferId}`, data, {});
        });
    });

    describe('getTicketTransferHistory', () => {
        it('should call this.get', () => {
            let id = 123;

            transfer.getTicketTransferHistory(id);

            chai.expect(transfer.get).to.have.been.called.with
                .exactly(`/ticket/${id}/transfer`, {});
        });
    });
});

