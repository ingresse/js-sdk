'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ingresse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _authentication = require('./authentication');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ingresse = exports.Ingresse = function (_Authentication) {
    _inherits(Ingresse, _Authentication);

    function Ingresse() {
        _classCallCheck(this, Ingresse);

        var _this = _possibleConstructorReturn(this, (Ingresse.__proto__ || Object.getPrototypeOf(Ingresse)).call(this));

        _this.authData = {
            apiKey: '',
            jwt: '',
            userToken: ''
        };
        return _this;
    }

    /**
     * Authentication type e.g. Jwt, BasicAuth, Ingresse
     *
     * @returns {string}
     */


    _createClass(Ingresse, [{
        key: 'getSettings',


        /**
         * Get formatted authentication settings
         *
         * @returns {object}
         */
        value: function getSettings() {
            var apikey = encodeURI(this.getApiKey());
            var jwt = encodeURI(this.getJWT());
            var usertoken = encodeURI(this.getToken());
            var headers = !jwt ? {} : {
                'Authorization': 'Bearer ' + jwt
            };
            var query = {
                apikey: apikey,
                usertoken: usertoken
            };

            return {
                headers: headers,
                query: query
            };
        }

        /**
         * Set Ingresse ApiKey
         *
         * @param {string} apiKey - Ingresse ApiKey
         *
         * @example
         * ingresse.api.auth.setApiKey('12345678901234');
         */

    }, {
        key: 'setApiKey',
        value: function setApiKey() {
            var apiKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            this.authData.apiKey = apiKey;
        }

        /**
         * Get Ingresse ApiKey
         *
         * @returns {string}
         *
         * @example
         * ingresse.api.auth.getApiKey();
         */

    }, {
        key: 'getApiKey',
        value: function getApiKey() {
            return this.authData.apiKey || '';
        }

        /**
         * Set authentication token value
         *
         * @param {string} token - Token value
         *
         * @example
         * ingresse.api.auth.setToken('12345-31t4v1d431t4v1d4d3c40....');
         */

    }, {
        key: 'setToken',
        value: function setToken() {
            var token = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            this.authData.userToken = token;
        }

        /**
         * Get authentication token value
         *
         * @returns {string}
         *
         * @example
         * const userToken = ingresse.api.auth.getToken();
         */

    }, {
        key: 'getToken',
        value: function getToken() {
            return this.authData.userToken || '';
        }

        /**
         * Set authentication JWT value
         *
         * @param {string} jwt - JWT value
         *
         * @example
         * ingresse.api.auth.setJWT('...');
         */

    }, {
        key: 'setJWT',
        value: function setJWT() {
            var jwt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            this.authData.jwt = jwt;
        }

        /**
         * Get authentication JWT value
         *
         * @returns {string}
         *
         * @example
         * const jwt = ingresse.api.auth.getJWT();
         */

    }, {
        key: 'getJWT',
        value: function getJWT() {
            return this.authData.jwt || '';
        }
    }], [{
        key: 'type',
        value: function type() {
            return 'Ingresse';
        }
    }]);

    return Ingresse;
}(_authentication.Authentication);