'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _ingresseSdk = require('../src/ingresse-sdk');

var _ingresseSdk2 = _interopRequireDefault(_ingresseSdk);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('IngresseSdk', function () {
    it('should instantiate the class', function () {
        var sdk = new _ingresseSdk2.default();
        _chai2.default.expect(sdk).to.be.an.instanceof(_ingresseSdk2.default);
    });

    it('should have static method version ' + _package2.default.version, function () {
        _chai2.default.expect(_ingresseSdk2.default.version).to.be.an('function');
        _chai2.default.expect(_ingresseSdk2.default.version()).to.equal(_package2.default.version);
    });

    it('should accept custom params for each api', function () {
        var sdk = new _ingresseSdk2.default({
            ticket: {
                url: 'https://my.custom.ticket.url.com'
            }
        });

        _chai2.default.expect(sdk.ticket.settings.url).to.equal('https://my.custom.ticket.url.com');
        _chai2.default.expect(sdk.ticket.settings.auth).to.equal('Jwt');
    });

    it('should initializ only api that are defined in the api modules', function () {
        var sdk = new _ingresseSdk2.default({
            myTestApi: {
                url: 'https://this.dont.exist.com'
            }
        });

        _chai2.default.expect(sdk.myTestApi).to.be.undefined;
    });

    it('should accept a list of apis to use', function () {
        var sdk = new _ingresseSdk2.default({
            apis: [] // empty array will not initialize any api
        });

        // Ticket api should not be initialized
        _chai2.default.expect(sdk.ticket).to.be.undefined;

        var sdk2 = new _ingresseSdk2.default({
            apis: ['ticket']
        });

        _chai2.default.expect(sdk2.ticket).not.to.be.undefined;
    });

    it('should set custom url', function () {
        var sdk = new _ingresseSdk2.default();

        sdk.api.setUrl('test');

        _chai2.default.expect(sdk.api.settings.url).to.be.equal('test');
    });
});