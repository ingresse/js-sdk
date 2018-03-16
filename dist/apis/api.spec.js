'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _api = require('../../src/apis/api');

var _auth = require('../../src/auth');

var _chaiSpies = require('chai-spies');

var _chaiSpies2 = _interopRequireDefault(_chaiSpies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiSpies2.default);

describe('API', function () {
    it('should instantiate the class', function () {
        var api = new _api.Api();

        _chai2.default.expect(api).to.be.an.instanceof(_api.Api);
        _chai2.default.expect(api.login).to.be.a.isFunction;
        _chai2.default.expect(api.getEvent).to.be.a.isFunction;
        _chai2.default.expect(api.createTicketTransfer).to.be.a.isFunction;
        _chai2.default.expect(api.request).to.be.a.isFunction;
        _chai2.default.expect(api.getUser).to.be.a.isFunction;
        _chai2.default.expect(api.recoverPassword).to.be.a.isFunction;
    });

    it('should have default settings', function () {
        var api = new _api.Api();

        _chai2.default.expect(api.settings).to.be.an('object');
        _chai2.default.expect(api.settings.url).to.equal('https://api.ingresse.com');
        _chai2.default.expect(api.settings.auth).to.equal(_auth.auth.Ingresse.type());
    });

    it('should accept custom settings', function () {
        var api = new _api.Api({
            url: 'https://my.custom.api.url.com'
        });

        _chai2.default.expect(api.settings.url).to.equal('https://my.custom.api.url.com');
    });
});