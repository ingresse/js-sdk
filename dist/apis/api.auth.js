'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApiAuth = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _handler = require('../request/handler');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Ingresse Auth API
 */
var ApiAuth = exports.ApiAuth = function (_RequestHandler) {
    _inherits(ApiAuth, _RequestHandler);

    function ApiAuth() {
        _classCallCheck(this, ApiAuth);

        return _possibleConstructorReturn(this, (ApiAuth.__proto__ || Object.getPrototypeOf(ApiAuth)).apply(this, arguments));
    }

    _createClass(ApiAuth, [{
        key: 'login',

        /**
         * Login User
         *
         * @param {object} data    - The user data to login.
         * @param {object} [query] - Optional request parameters.
         * @returns {Promise}
         */
        value: function login(data) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.post('/login', data, query);
        }

        /**
         * Login User by Company
         *
         * @param {object} data    - The user data to login.
         * @param {object} [query] - Optional request parameters.
         * @returns {Promise}
         */

    }, {
        key: 'companyLogin',
        value: function companyLogin(data) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.post('/company-login', data, query);
        }

        /**
         * Login User with Facebook
         *
         * @param {object} data    - The user data to login.
         * @param {object} [query] - Optional request parameters.
         * @returns {Promise}
         */

    }, {
        key: 'fbLogin',
        value: function fbLogin(data) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.post('/login/facebook', data, query);
        }

        /**
         * Register a new user.
         *
         * @param {object} [data]  - The form with user data for post.
         * @param {object} [query] - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'register',
        value: function register() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.post('/user', data, query);
        }

        /**
         * Renew User JWT
         *
         * @param {object} userToken - Current user token.
         * @param {object} [query]   - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'renewJWT',
        value: function renewJWT(userToken) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var _query = Object.assign({}, query, {
                usertoken: userToken
            });

            return this.get('/login/renew-token', _query);
        }
    }]);

    return ApiAuth;
}(_handler.RequestHandler);