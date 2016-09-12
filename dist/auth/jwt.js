'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Jwt = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _authentication = require('./authentication');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Jwt = exports.Jwt = function (_Authentication) {
    _inherits(Jwt, _Authentication);

    function Jwt() {
        _classCallCheck(this, Jwt);

        return _possibleConstructorReturn(this, (Jwt.__proto__ || Object.getPrototypeOf(Jwt)).call(this));
    }

    /**
     * Authentication type e.g. Jwt, BasicAuth
     *
     * @returns {string}
     */


    _createClass(Jwt, [{
        key: 'getSettings',


        /**
         * Get formatted authentication settings
         *
         * @returns {object}
         */
        value: function getSettings() {
            return {
                headers: {
                    'Authorization': 'Bearer ' + this.getToken()
                }
            };
        }

        /**
         * Set Jwt authentication token value
         *
         * @example
         * ```
         * ingresse.ticket.auth.setToken('12345.67890.1234')
         * ```
         *
         * @param {string} token - JWT Token value
         */

    }, {
        key: 'setToken',
        value: function setToken(token) {
            this.authData = token;
        }

        /**
         * Get Jwt authentication token value
         *
         * @returns {string}
         */

    }, {
        key: 'getToken',
        value: function getToken() {
            return this.authData;
        }
    }], [{
        key: 'type',
        value: function type() {
            return 'Jwt';
        }
    }]);

    return Jwt;
}(_authentication.Authentication);