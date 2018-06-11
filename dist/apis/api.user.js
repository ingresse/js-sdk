'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApiUser = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _handler = require('../request/handler');

var _cookie = require('../helper/cookie');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Ingresse User API
 */
var ApiUser = exports.ApiUser = function (_RequestHandler) {
    _inherits(ApiUser, _RequestHandler);

    /**
     * Initialize the Api User
     */
    function ApiUser() {
        _classCallCheck(this, ApiUser);

        var _this = _possibleConstructorReturn(this, (ApiUser.__proto__ || Object.getPrototypeOf(ApiUser)).call(this));

        _this.credentials = {};
        _this.cookie = new _cookie.Cookie();
        return _this;
    }

    /**
     * Get user
     *
     * @param {string|number} id - The user ID to get.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     */


    _createClass(ApiUser, [{
        key: 'getUser',
        value: function getUser(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/user/' + id, query);
        }

        /**
         * Get user picture
         *
         * @param {string|number} id - The user ID to get.
         * @param {object} [query]   - Optional request parameters.
         * @returns {Promise}
         */

    }, {
        key: 'getUserPicture',
        value: function getUserPicture(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/user/' + id + '/picture', query);
        }

        /**
         * Get the user tickets.
         *
         * @param {string|number} id - The user ID to get.
         * @param {object} [query]   - Optional request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * var userId = 123;
         * var query = {
         *    status: 'pending', //Can be [pending, accepted, refused, returned, cancelled].
         *    pageSize: 10,
         *    page: currentPage
         * };
         *
         * ingresse.apiUser.getUserTicket(userId, query)
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'getUserTickets',
        value: function getUserTickets(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/user/' + id + '/tickets', query);
        }

        /**
         * Create a new user.
         *
         * @param {object} [data]  - The form with user data for post.
         * @param {object} [query] - Optional request parameters.
         * @returns {Promise}
         */

    }, {
        key: 'createUser',
        value: function createUser() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.post('/user/', data, query);
        }

        /**
         * Get the new user tickets.
         *
         * @param {string|number} id - The user ID to get.
         * @param {object} [query] - Optional request parameters.
         * @returns {Promise}
         */

    }, {
        key: 'getUserNewTickets',
        value: function getUserNewTickets(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/user/' + id + '/transfers', query);
        }

        /**
         * Get the user events sessions.
         *
         * @param {string|number} id - The user ID to get.
         * @param {object} [query] - Optional request parameters.
         * @returns {Promise}
         */

    }, {
        key: 'getAllUserSessions',
        value: function getAllUserSessions(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/user/' + id + '/sessions', query);
        }

        /*
         * Get the ticket session
         *
         * @param {number} id - The user ID to get.
         * @param {number} sessionId - The session id.
         * @param {object} [query] - Optional request parameters.
         * @returns {Promise}
         */

    }, {
        key: 'getUserSessionTickets',
        value: function getUserSessionTickets(id, sessionId) {
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.get('/user/' + id + '/sessions/' + sessionId + '/tickets', query);
        }

        /**
         * Search the users for transfer ticket.
         *
         * @param {string} term - The text to search.
         * @param {object} [query] - Optional request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * var term = 'Jefferson Silva';
         * var query = {
         *    size: 12
         * };
         * ingresse.apiUser.getUserForTransfer(term, query)
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'getUserForTransfer',
        value: function getUserForTransfer(term) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            query.term = term;
            return this.get('/search/transfer/user', query);
        }

        /**
         * Get the recent transfers of a user.
         *
         * @param {number} id - The user ID to get.
         * @param {object} [query] - Optional request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * var id = 123;
         * var query = {
         *    size: 12,
         *    order: 'DESC'
         * };
         *
         * ingresse.apiUser.getRecentTransfers(id, query)
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'getRecentTransfers',
        value: function getRecentTransfers(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/user/' + id + '/last-transfers', query);
        }

        /**
         * Saves the credentials in cookie.
         *
         * @param {number} userId - User Id.
         * @param {string} token  - The user token.
         * @param {string} jwt    - The user jwt token.
         *
         * @returns {Object}
         */

    }, {
        key: 'saveCredentials',
        value: function saveCredentials(userId, token, jwt) {
            this.credentials.userId = userId;
            this.credentials.token = token;
            this.credentials.jwt = jwt;

            this.cookie.createCookie('userId', userId, 5);
            this.cookie.createCookie('token', token, 5);
            this.cookie.createCookie('jwt', jwt, 5);

            return this.credentials;
        }

        /**
         * Gets the user credentials
         */

    }, {
        key: 'getCredentials',
        value: function getCredentials() {
            for (var prop in this.credentials) {
                if (this.credentials.hasOwnProperty(prop)) {
                    return this.credentials;
                }
            }

            this.credentials.userId = this.cookie.getCookie('userId');
            this.credentials.token = this.cookie.getCookie('token');
            this.credentials.jwt = this.cookie.getCookie('jwt');

            if (this.credentials.userId || this.credentials.token || this.credentials.jwt) {
                return this.credentials;
            }

            return false;
        }

        /**
         * Delete the user credentials
         */

    }, {
        key: 'clearCredentials',
        value: function clearCredentials() {
            this.cookie.deleteCookie('userId');
            this.cookie.deleteCookie('token');
            this.cookie.deleteCookie('jwt');
        }
    }]);

    return ApiUser;
}(_handler.RequestHandler);