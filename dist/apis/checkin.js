'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Checkin = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _handler = require('../request/handler');

var _auth = require('../auth');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* Core Packages */


/**
 * Ingresse Checkin API
 *
 * API to search for checkin.
 *
 * @example
 * var sdk = require('ingresse-sdk');
 * var ingresse = new Sdk();
 *
 * // You will have access to this API
 * // after instantiate the SDK.
 * var search = ingresse.checkin;
 */
var Checkin = exports.Checkin = function (_RequestHandler) {
    _inherits(Checkin, _RequestHandler);

    /**
     * Checkin Search
     *
     * @param {object} [custom] - Initialize Checkin Search settings.
     */
    function Checkin() {
        var custom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Checkin);

        var settings = Object.assign({
            auth: _auth.auth.Jwt.type(),
            resource: 'checkin'
        }, custom);

        var _this = _possibleConstructorReturn(this, (Checkin.__proto__ || Object.getPrototypeOf(Checkin)).call(this, settings));

        _this.settings = settings;
        return _this;
    }

    /**
     * Get Session Report
     *
     * @param {string} sessionId
     * @param {object} query
     *
     * @return {Promise}
     */


    _createClass(Checkin, [{
        key: 'getReport',
        value: function getReport(sessionId) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/report/entrance', Object.assign({
                'session_id': sessionId
            }, query));
        }
    }]);

    return Checkin;
}(_handler.RequestHandler);