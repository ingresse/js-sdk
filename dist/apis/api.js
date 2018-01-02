'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Api = undefined;

var _handler = require('../request/handler');

var _apiEvent = require('./api.event.js');

var _apiUser = require('./api.user.js');

var _apiTicket = require('./api.ticket.js');

var _apiAuth = require('./api.auth.js');

var _apiRecover = require('./api.recover.js');

var _auth = require('../auth');

var _mixin = require('../helper/mixin.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Ingresse API
 *
 * @example
 * var Sdk = require('ingresse-sdk');
 * var ingresse = new Sdk();
 *
 * // You will have access to this API
 * // after instantiate the Sdk.
 * var api = ingresse.api;
 */
var Api = exports.Api = function (_Mixin$inherit) {
    _inherits(Api, _Mixin$inherit);

    /**
     * Ingresse Api
     *
     * @param {object} [custom={}] - Initialize Api settings.
     */
    function Api() {
        var custom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Api);

        var settings = {
            url: 'https://api.ingresse.com',
            auth: _auth.auth.Ingresse.type()
        };

        Object.assign(settings, custom);

        var _this = _possibleConstructorReturn(this, (Api.__proto__ || Object.getPrototypeOf(Api)).call(this, settings));

        _this.settings = settings;
        return _this;
    }

    return Api;
}(_mixin.Mixin.inherit(_apiAuth.ApiAuth, _apiEvent.ApiEvents, _apiRecover.ApiRecover, _apiTicket.ApiTicketTransfer, _apiUser.ApiUser, _handler.RequestHandler));