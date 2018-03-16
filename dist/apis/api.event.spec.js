'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _api = require('../../src/apis/api.event');

var _handler = require('../../src/request/handler');

var _chaiSpies = require('chai-spies');

var _chaiSpies2 = _interopRequireDefault(_chaiSpies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiSpies2.default);

describe('API Events', function () {
    var event = void 0;

    beforeEach(function () {
        event = new _api.ApiEvents();
        _chai2.default.spy.on(event, 'get');
    });

    it('should instantiate the class', function () {
        _chai2.default.expect(event).to.be.an.instanceof(_api.ApiEvents);
        _chai2.default.expect(event).to.be.an.instanceof(_handler.RequestHandler);
    });

    describe('identifyEvent', function () {
        it('should call this.get', function () {
            var link = 'devteamtest2018';
            var fields = 'id,title,description';

            event.identifyEvent(link, fields);

            _chai2.default.expect(event.get).to.have.been.called.with.exactly('/event', { link: link, fields: fields, method: 'identify' });
        });

        it('should call this.get', function () {
            var optionalQuery = {
                link: 'devteamtest2018udi',
                fields: 'id,title,description,poster',
                method: 'identify'
            };

            event.identifyEvent(null, null, optionalQuery);

            _chai2.default.expect(event.get).to.have.been.called.with.exactly('/event', optionalQuery);
        });
    });

    describe('getEvent', function () {
        it('should call this.get', function () {
            var id = 123;
            event.getEvent(id);

            _chai2.default.expect(event.get).to.have.been.called.with.exactly('/event/' + id, {});
        });
    });

    describe('getEventTickets', function () {
        it('should call this.get', function () {
            var id = 123;
            event.getEventTickets(id);

            _chai2.default.expect(event.get).to.have.been.called.with.exactly('/event/' + id + '/tickets', {});
        });
    });

    describe('getEventSessionTickets', function () {
        it('should call this.get', function () {
            var id = 123;
            var sessionId = 321;
            event.getEventSessionTickets(id, sessionId);

            _chai2.default.expect(event.get).to.have.been.called.with.exactly('/event/' + id + '/session/' + sessionId + '/tickets', {});
        });
    });

    describe('getEventCrew', function () {
        it('should call this.get', function () {
            var id = 123;
            event.getEventCrew(id);

            _chai2.default.expect(event.get).to.have.been.called.with.exactly('/event/' + id + '/crew', {});
        });
    });

    describe('getEventAttributes', function () {
        it('should call this.get', function () {
            var id = 123;
            event.getEventAttributes(id);

            _chai2.default.expect(event.get).to.have.been.called.with.exactly('/event/' + id + '/attributes', {});
        });
    });

    describe('getFeatured', function () {
        it('should call this.get', function () {
            var id = 123;
            event.getFeatured(id);

            _chai2.default.expect(event.get).to.have.been.called.with.exactly('/featured/' + id, {});
        });
    });

    describe('getEventTypes', function () {
        it('should call this.get', function () {
            event.getEventTypes();

            _chai2.default.expect(event.get).to.have.been.called.with.exactly('/home/sections');
        });
    });

    describe('getEventCategories', function () {
        it('should call this.get', function () {
            var category = 'date/today';
            event.getEventCategories(category);

            _chai2.default.expect(event.get).to.have.been.called.with.exactly('/' + category, {});
        });
    });
});