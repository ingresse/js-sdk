'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _api = require('../../src/apis/api.ticket');

var _handler = require('../../src/request/handler');

var _chaiSpies = require('chai-spies');

var _chaiSpies2 = _interopRequireDefault(_chaiSpies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiSpies2.default);

describe('API Ticket Transfer', function () {
    var transfer = void 0;

    beforeEach(function () {
        transfer = new _api.ApiTicketTransfer();
        _chai2.default.spy.on(transfer, 'get');
        _chai2.default.spy.on(transfer, 'post');
    });

    it('should instantiate the class', function () {
        _chai2.default.expect(transfer).to.be.an.instanceof(_api.ApiTicketTransfer);
        _chai2.default.expect(transfer).to.be.an.instanceof(_handler.RequestHandler);
    });

    describe('createTicketTransfer', function () {
        it('should call this.post', function () {
            var id = 123;
            var data = {
                user: 123
            };

            transfer.createTicketTransfer(id, data);

            _chai2.default.expect(transfer.post).to.have.been.called.with.exactly('/ticket/' + id + '/transfer', data, {});
        });

        it('should call this.post if the isReturn equal true', function () {
            var id = 123;
            var data = {
                isReturn: 123
            };

            transfer.createTicketTransfer(id, data);

            _chai2.default.expect(transfer.post).to.have.been.called.with.exactly('/ticket/' + id + '/transfer', data, {});
        });
    });

    describe('updateTicketTransfer', function () {
        it('should call this.post', function () {
            var id = 123;
            var transferId = 456;
            var data = {
                action: 'accept'
            };

            transfer.updateTicketTransfer(id, transferId, data);

            _chai2.default.expect(transfer.post).to.have.been.called.with.exactly('/ticket/' + id + '/transfer/' + transferId, data, {});
        });
    });

    describe('getTicketTransferHistory', function () {
        it('should call this.get', function () {
            var id = 123;

            transfer.getTicketTransferHistory(id);

            _chai2.default.expect(transfer.get).to.have.been.called.with.exactly('/ticket/' + id + '/transfer', {});
        });
    });
});