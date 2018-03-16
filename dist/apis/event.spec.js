'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _event = require('../../src/apis/event');

var _handler = require('../../src/request/handler');

var _auth = require('../../src/auth');

var _chaiSpies = require('chai-spies');

var _chaiSpies2 = _interopRequireDefault(_chaiSpies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiSpies2.default);

describe('Event API', function () {
    it('should instantiate the class', function () {
        var event = new _event.Event();

        _chai2.default.expect(event).to.be.an.instanceof(_event.Event);
        _chai2.default.expect(event).to.be.an.instanceof(_handler.RequestHandler);
    });

    it('should have default settings', function () {
        var event = new _event.Event();

        _chai2.default.expect(event.settings).to.be.an('object');
        _chai2.default.expect(event.settings.url).to.equal('https://event.ingresse.com');
        _chai2.default.expect(event.settings.auth).to.equal(_auth.auth.Jwt.type());
    });

    it('should accept custom settings', function () {
        var event = new _event.Event({
            url: 'https://my.custom.event.url.com'
        });

        _chai2.default.expect(event.settings.url).to.equal('https://my.custom.event.url.com');
    });

    it('should have default methods', function () {
        var event = new _event.Event();

        _chai2.default.expect(event.getById).not.to.be.undefined;
        _chai2.default.expect(event.getById).to.be.a('function');

        _chai2.default.expect(event.getAttributes).not.to.be.undefined;
        _chai2.default.expect(event.getAttributes).to.be.a('function');

        _chai2.default.expect(event.create).not.to.be.undefined;
        _chai2.default.expect(event.create).to.be.a('function');

        _chai2.default.expect(event.update).not.to.be.undefined;
        _chai2.default.expect(event.update).to.be.a('function');

        _chai2.default.expect(event.updatePoster).not.to.be.undefined;
        _chai2.default.expect(event.updatePoster).to.be.a('function');

        _chai2.default.expect(event.deletePoster).not.to.be.undefined;
        _chai2.default.expect(event.deletePoster).to.be.a('function');

        _chai2.default.expect(event.updateAttributes).not.to.be.undefined;
        _chai2.default.expect(event.updateAttributes).to.be.a('function');

        _chai2.default.expect(event.validateSlug).not.to.be.undefined;
        _chai2.default.expect(event.validateSlug).to.be.a('function');

        _chai2.default.expect(event.getCategories).not.to.be.undefined;
        _chai2.default.expect(event.getCategories).to.be.a('function');

        _chai2.default.expect(event.getPrivateCategories).not.to.be.undefined;
        _chai2.default.expect(event.getPrivateCategories).to.be.a('function');

        _chai2.default.expect(event.getCategory).not.to.be.undefined;
        _chai2.default.expect(event.getCategory).to.be.a('function');

        _chai2.default.expect(event.deleteCategory).not.to.be.undefined;
        _chai2.default.expect(event.deleteCategory).to.be.a('function');

        _chai2.default.expect(event.deleteSession).not.to.be.undefined;
        _chai2.default.expect(event.deleteSession).to.be.a('function');

        _chai2.default.expect(event.searchByProducer).not.to.be.undefined;
        _chai2.default.expect(event.searchByProducer).to.be.a('function');
    });

    describe('getById', function () {
        var event = void 0;
        var id = 1;

        beforeEach(function () {
            event = new _event.Event();
            _chai2.default.spy.on(event, 'get');
        });

        it('should getById call this.get', function () {
            event.getById(id);

            _chai2.default.expect(event.get).to.have.been.called.with.exactly('/' + id, {});
        });

        it('should getById call this.get and accept query argument', function () {
            event.getById(id, { limit: 10 });

            _chai2.default.expect(event.get).to.have.been.called.with.exactly('/' + id, { limit: 10 });
        });
    });

    describe('getAttributes', function () {
        var event = void 0;
        var id = 1;

        beforeEach(function () {
            event = new _event.Event();
            _chai2.default.spy.on(event, 'get');
        });

        it('should getAttributes call this.get', function () {
            event.getAttributes(id);

            _chai2.default.expect(event.get).to.have.been.called.with.exactly('/' + id + '/attributes', {});
        });

        it('should getAttributes call this.get and accept query argument', function () {
            event.getAttributes(id, { limit: 10 });

            _chai2.default.expect(event.get).to.have.been.called.with.exactly('/' + id + '/attributes', { limit: 10 });
        });
    });

    describe('create', function () {
        var event = void 0;
        var data = {};
        var query = { test: 'test' };
        beforeEach(function () {
            event = new _event.Event();
            _chai2.default.spy.on(event, 'post');
        });

        it('should create call this.post without data', function () {
            event.create();

            _chai2.default.expect(event.post).to.have.been.called.with.exactly('/', data, {});
        });

        it('should create call this.post', function () {
            data = {
                id: 1,
                description: 'aaaaaa'
            };

            event.create(data);

            _chai2.default.expect(event.post).to.have.been.called.with.exactly('/', data, {});
        });

        it('should create call this.post and accept query argument', function () {
            data = {
                id: 1,
                description: 'aaaaaa'
            };

            event.create(data, query);

            _chai2.default.expect(event.post).to.have.been.called.with.exactly('/', data, query);
        });
    });

    describe('update', function () {
        var event = void 0;
        var id = 1;
        var data = {};
        var query = { test: 'test' };
        beforeEach(function () {
            event = new _event.Event();
            _chai2.default.spy.on(event, 'put');
        });

        it('should update call this.put without data', function () {
            event.update(id);

            _chai2.default.expect(event.put).to.have.been.called.with.exactly('/' + id, data, {});
        });

        it('should update call this.put', function () {
            data = {
                title: 'test',
                description: 'aaaaaa'
            };

            event.update(id, data);

            _chai2.default.expect(event.put).to.have.been.called.with.exactly('/' + id, data, {});
        });

        it('should update call this.put and accept query argument', function () {
            data = {
                title: 'test',
                description: 'aaaaaa'
            };

            event.update(id, data, query);

            _chai2.default.expect(event.put).to.have.been.called.with.exactly('/' + id, data, query);
        });
    });

    describe('updatePoster', function () {
        var event = void 0;
        var id = 1;
        var data = {};
        var query = { test: 'test' };

        beforeEach(function () {
            event = new _event.Event();
            _chai2.default.spy.on(event, 'put');
        });

        it('should updatePoster call this.put without data', function () {
            event.updatePoster(id);

            _chai2.default.expect(event.put).to.have.been.called.with.exactly('/' + id + '/poster', data, {});
        });

        it('should updatePoster call this.put', function () {
            data = {
                title: 'test',
                description: 'aaaaaa'
            };

            event.updatePoster(id, data);

            _chai2.default.expect(event.put).to.have.been.called.with.exactly('/' + id + '/poster', data, {});
        });

        it('should updatePoster call this.put and accept query argument', function () {
            data = {
                title: 'test',
                description: 'aaaaaa'
            };

            event.updatePoster(id, data, query);

            _chai2.default.expect(event.put).to.have.been.called.with.exactly('/' + id + '/poster', data, query);
        });
    });

    describe('deletePoster', function () {
        var event = void 0;
        var id = 1;
        var query = { test: 'test' };

        beforeEach(function () {
            event = new _event.Event();
            _chai2.default.spy.on(event, 'delete');
        });

        it('should deletePoster call this.delete', function () {
            event.deletePoster(id);

            _chai2.default.expect(event.delete).to.have.been.called.with.exactly('/' + id + '/poster', {});
        });

        it('should deletePoster call this.put and accept query argument', function () {
            event.deletePoster(id, query);

            _chai2.default.expect(event.delete).to.have.been.called.with.exactly('/' + id + '/poster', query);
        });
    });

    describe('updateAttributes', function () {
        var event = void 0;
        var id = 1;
        var data = {};
        var query = { test: 'test' };

        beforeEach(function () {
            event = new _event.Event();
            _chai2.default.spy.on(event, 'put');
        });

        it('should updateAttributes call this.put without', function () {
            event.updateAttributes(id);

            _chai2.default.expect(event.put).to.have.been.called.with.exactly('/' + id + '/attributes', data, {});
        });

        it('should updateAttributes call this.put', function () {
            data = {
                title: 'test',
                description: 'aaaaaa'
            };

            event.updateAttributes(id, data);

            _chai2.default.expect(event.put).to.have.been.called.with.exactly('/' + id + '/attributes', data, {});
        });

        it('should updateAttributes call this.put and accept query argument', function () {
            data = {
                title: 'test',
                description: 'aaaaaa'
            };

            event.updateAttributes(id, data, query);

            _chai2.default.expect(event.put).to.have.been.called.with.exactly('/' + id + '/attributes', data, query);
        });
    });

    describe('validateSlug', function () {
        var event = void 0;
        var slug = 'test';
        var query = { test: 'test' };

        beforeEach(function () {
            event = new _event.Event();
            _chai2.default.spy.on(event, 'get');
        });

        it('should validateSlug call this.get', function () {
            event.validateSlug(slug);

            _chai2.default.expect(event.get).to.have.been.called.with.exactly('/slugs/' + slug, {});
        });

        it('should validateSlug call this.get and accept query argument', function () {
            event.validateSlug(slug, query);

            _chai2.default.expect(event.get).to.have.been.called.with.exactly('/slugs/' + slug, query);
        });
    });

    describe('getCategories', function () {
        var event = void 0;
        var query = { test: 'test' };

        beforeEach(function () {
            event = new _event.Event();
            _chai2.default.spy.on(event, 'get');
        });

        it('should getCategories call this.get', function () {
            event.getCategories();

            _chai2.default.expect(event.get).to.have.been.called.with.exactly('/categories', {});
        });

        it('should getCategories call this.get and accept query argument', function () {
            event.getCategories(query);

            _chai2.default.expect(event.get).to.have.been.called.with.exactly('/categories', query);
        });
    });

    describe('getPrivateCategories', function () {
        var event = void 0;
        var query = { test: 'test' };

        beforeEach(function () {
            event = new _event.Event();
            _chai2.default.spy.on(event, 'get');
        });

        it('should getPrivateCategories call this.get', function () {
            event.getPrivateCategories();

            _chai2.default.expect(event.get).to.have.been.called.with.exactly('/categories/private', {});
        });

        it('should getPrivateCategories call this.get and accept query argument', function () {
            event.getPrivateCategories(query);

            _chai2.default.expect(event.get).to.have.been.called.with.exactly('/categories/private', query);
        });
    });

    describe('getCategory', function () {
        var event = void 0;
        var id = 1;
        var query = { test: 'test' };

        beforeEach(function () {
            event = new _event.Event();
            _chai2.default.spy.on(event, 'get');
        });

        it('should getCategory call this.get', function () {
            event.getCategory(id);

            _chai2.default.expect(event.get).to.have.been.called.with.exactly('/categories/' + id, {});
        });

        it('should getCategory call this.get and accept query argument', function () {
            event.getCategory(id, query);

            _chai2.default.expect(event.get).to.have.been.called.with.exactly('/categories/' + id, query);
        });
    });

    describe('deleteCategory', function () {
        var event = void 0;
        var id = 1;
        var categoryId = 2;
        var query = { test: 'test' };

        beforeEach(function () {
            event = new _event.Event();
            _chai2.default.spy.on(event, 'delete');
        });

        it('should deleteCategory call this.delete', function () {
            event.deleteCategory(id, categoryId);

            _chai2.default.expect(event.delete).to.have.been.called.with.exactly('/' + id + '/category/' + categoryId, {});
        });

        it('should deleteCategory call this.delete and accept query argument', function () {
            event.deleteCategory(id, categoryId, query);

            _chai2.default.expect(event.delete).to.have.been.called.with.exactly('/' + id + '/category/' + categoryId, query);
        });
    });

    describe('deleteSession', function () {
        var event = void 0;
        var id = 1;
        var sessionId = 2;
        var query = { test: 'test' };

        beforeEach(function () {
            event = new _event.Event();
            _chai2.default.spy.on(event, 'delete');
        });

        it('should deleteSession call this.delete', function () {
            event.deleteSession(id, sessionId);

            _chai2.default.expect(event.delete).to.have.been.called.with.exactly('/' + id + '/sessions/' + sessionId, {});
        });

        it('should deleteSession call this.delete and accept query argument', function () {
            event.deleteSession(id, sessionId, query);

            _chai2.default.expect(event.delete).to.have.been.called.with.exactly('/' + id + '/sessions/' + sessionId, query);
        });
    });

    describe('searchByProducer', function () {
        var event = void 0;
        var filters = {};

        beforeEach(function () {
            event = new _event.Event();
            filters = {};
            _chai2.default.spy.on(event, 'searchByProducer');
        });

        it('should searchByProducer call this.searchByProducer', function () {
            event.searchByProducer({});

            _chai2.default.expect(event.searchByProducer).to.have.been.called.with.exactly('/search/producer', {});
        });

        it('should searchByProducer call this.get and accept query argument', function () {
            filters = { from: 'now-1d' };
            event.searchByProducer(filters);

            _chai2.default.expect(event.searchByProducer).to.have.been.called.with.exactly('/search/producer', filters);
        });
    });
});