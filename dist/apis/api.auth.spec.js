'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _api = require('../../src/apis/api.auth');

var _handler = require('../../src/request/handler');

var _chaiSpies = require('chai-spies');

var _chaiSpies2 = _interopRequireDefault(_chaiSpies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiSpies2.default);

describe('API Auth', function () {
    var auth = void 0;

    beforeEach(function () {
        auth = new _api.ApiAuth();
        _chai2.default.spy.on(auth, 'post');
    });

    it('should instantiate the class', function () {
        _chai2.default.expect(auth).to.be.an.instanceof(_api.ApiAuth);
        _chai2.default.expect(auth).to.be.an.instanceof(_handler.RequestHandler);
    });

    describe('login', function () {
        it('should call this.post', function () {
            var data = {
                name: 'test',
                pass: '123'
            };
            auth.login(data);

            _chai2.default.expect(auth.post).to.have.been.called.with.exactly('/login', data, {});
        });
    });

    describe('fbLogin', function () {
        it('should call this.post', function () {
            var data = {
                name: 'test',
                pass: '123'
            };
            auth.fbLogin(data);

            _chai2.default.expect(auth.post).to.have.been.called.with.exactly('/login/facebook', data, {});
        });
    });
});