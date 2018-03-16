'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _api = require('../../src/apis/api.recover');

var _handler = require('../../src/request/handler');

var _chaiSpies = require('chai-spies');

var _chaiSpies2 = _interopRequireDefault(_chaiSpies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiSpies2.default);

describe('API Recover Password', function () {
    var recover = void 0;

    beforeEach(function () {
        recover = new _api.ApiRecover();
        _chai2.default.spy.on(recover, 'post');
    });

    it('should instantiate the class', function () {
        _chai2.default.expect(recover).to.be.an.instanceof(_api.ApiRecover);
        _chai2.default.expect(recover).to.be.an.instanceof(_handler.RequestHandler);
    });

    describe('recoverPassword', function () {
        it('should call this.post', function () {
            var data = {
                email: 'test@test.com'
            };
            recover.recoverPassword(data);

            _chai2.default.expect(recover.post).to.have.been.called.with.exactly('/recover/password', data, {});
        });
    });

    describe('validateHash', function () {
        it('should call this.post', function () {
            var data = {
                email: 'test@test.com'
            };
            recover.validateHash(data);

            _chai2.default.expect(recover.post).to.have.been.called.with.exactly('/recover/validate', data, {});
        });
    });

    describe('update', function () {
        it('should call this.post', function () {
            var data = {
                email: 'test@test.com'
            };
            recover.updatePassword(data);

            _chai2.default.expect(recover.post).to.have.been.called.with.exactly('/recover/update-password', data, {});
        });
    });
});