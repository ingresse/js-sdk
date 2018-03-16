'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _ticket = require('../../src/apis/ticket');

var _handler = require('../../src/request/handler');

var _auth = require('../../src/auth');

var _chaiSpies = require('chai-spies');

var _chaiSpies2 = _interopRequireDefault(_chaiSpies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiSpies2.default);

describe('Ticket API', function () {
    it('should instantiate the class', function () {
        var ticket = new _ticket.Ticket();

        _chai2.default.expect(ticket).to.be.an.instanceof(_ticket.Ticket);
        _chai2.default.expect(ticket).to.be.an.instanceof(_handler.RequestHandler);
    });

    it('should have default settings', function () {
        var ticket = new _ticket.Ticket();

        _chai2.default.expect(ticket.settings).to.be.an('object');
        _chai2.default.expect(ticket.settings.url).to.equal('https://ticket.ingresse.com');
        _chai2.default.expect(ticket.settings.auth).to.equal(_auth.auth.Jwt.type());
    });

    it('should accept custom settings', function () {
        var ticket = new _ticket.Ticket({
            url: 'https://my.custom.ticket.url.com'
        });

        _chai2.default.expect(ticket.settings.url).to.equal('https://my.custom.ticket.url.com');
    });

    it('should have default methods', function () {
        var ticket = new _ticket.Ticket();

        _chai2.default.expect(ticket.getItems).not.to.be.undefined;
        _chai2.default.expect(ticket.getItems).to.be.a('function');

        _chai2.default.expect(ticket.getItem).not.to.be.undefined;
        _chai2.default.expect(ticket.getItem).to.be.a('function');

        _chai2.default.expect(ticket.newItem).not.to.be.undefined;
        _chai2.default.expect(ticket.newItem).to.be.a('function');

        _chai2.default.expect(ticket.updateItem).not.to.be.undefined;
        _chai2.default.expect(ticket.updateItem).to.be.a('function');

        _chai2.default.expect(ticket.removeItem).not.to.be.undefined;
        _chai2.default.expect(ticket.removeItem).to.be.a('function');
    });

    describe('getTypes', function () {
        var ticket = void 0;

        beforeEach(function () {
            ticket = new _ticket.Ticket();
            _chai2.default.spy.on(ticket, 'get');
        });

        it('should getItems call this.get', function () {
            ticket.getTypes();

            _chai2.default.expect(ticket.get).to.have.been.called.with.exactly('/types', {});
        });

        it('should getItems call this.get and accept query argument', function () {
            ticket.getTypes({ limit: 10 });

            _chai2.default.expect(ticket.get).to.have.been.called.with.exactly('/types', { limit: 10 });
        });
    });

    describe('getItems', function () {
        var ticket = void 0;

        beforeEach(function () {
            ticket = new _ticket.Ticket();
            _chai2.default.spy.on(ticket, 'get');
        });

        it('should getItems call this.get', function () {
            ticket.getItems();

            _chai2.default.expect(ticket.get).to.have.been.called.with.exactly('/items', {});
        });

        it('should getItems call this.get and accept query argument', function () {
            ticket.getItems({ limit: 10 });

            _chai2.default.expect(ticket.get).to.have.been.called.with.exactly('/items', { limit: 10 });
        });
    });

    describe('getItem', function () {
        var ticket = void 0;

        beforeEach(function () {
            ticket = new _ticket.Ticket();
            _chai2.default.spy.on(ticket, 'get');
        });

        it('should getItem call this.get with id', function () {
            ticket.getItem(10);

            _chai2.default.expect(ticket.get).to.have.been.called.with.exactly('/items/10', {});
        });

        it('should getItem call this.get with id and query arguments', function () {
            ticket.getItem(10, { limit: 10 });

            _chai2.default.expect(ticket.get).to.have.been.called.with.exactly('/items/10', { limit: 10 });
        });
    });

    describe('newItem', function () {
        var ticket = void 0;

        beforeEach(function () {
            ticket = new _ticket.Ticket();
            _chai2.default.spy.on(ticket, 'post');
        });

        it('should newItem call this.post', function () {
            ticket.newItem();

            _chai2.default.expect(ticket.post).to.have.been.called.with.exactly('/items', {}, {});
        });

        it('should newItem call this.post sending data', function () {
            ticket.newItem({ name: 'Test' });

            _chai2.default.expect(ticket.post).to.have.been.called.with.exactly('/items', { name: 'Test' }, {});
        });

        it('should newItem call this.post sending data and query params', function () {
            ticket.newItem({ name: 'Test' }, { query: 'Test' });

            _chai2.default.expect(ticket.post).to.have.been.called.with.exactly('/items', { name: 'Test' }, { query: 'Test' });
        });
    });

    describe('updateItem', function () {
        var ticket = void 0;

        beforeEach(function () {
            ticket = new _ticket.Ticket();
            _chai2.default.spy.on(ticket, 'put');
        });

        it('should updateItem call this.put with id', function () {
            ticket.updateItem(10);

            _chai2.default.expect(ticket.put).to.have.been.called.with.exactly('/items/10', {}, {});
        });

        it('should updateItem call this.put with id and send data', function () {
            ticket.updateItem(10, { name: 'Test' });

            _chai2.default.expect(ticket.put).to.have.been.called.with.exactly('/items/10', { name: 'Test' }, {});
        });

        it('should updateItem call this.put with id and send data and query arguments', function () {
            ticket.updateItem(10, { name: 'Test' }, { query: 'Test' });

            _chai2.default.expect(ticket.put).to.have.been.called.with.exactly('/items/10', { name: 'Test' }, { query: 'Test' });
        });
    });
});