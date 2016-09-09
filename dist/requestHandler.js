'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RequestHandler = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _auth = require('./auth');

var _axios = require('axios');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RequestHandler = exports.RequestHandler = function () {
    /**
     * Initialize request handler
     *
     * @param {object} settings - Settings
     */
    function RequestHandler() {
        var settings = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, RequestHandler);

        this.baseURL = settings.url;
        this._configAuth(settings.auth);
    }

    /**
     * Initialize Authentication
     * The default authentication method is JWT.
     *
     * @private
     * @param {string} method - Authentication method.
     */


    _createClass(RequestHandler, [{
        key: '_configAuth',
        value: function _configAuth(method) {
            switch (method) {
                default:
                    this.auth = new _auth.auth.Jwt();
                    break;
            }
        }

        /**
         * Get API request headers
         *
         * @returns {object}
         */

    }, {
        key: 'request',


        /**
         * Create new request promise
         *
         * @private
         * @param {object} options - request options.
         *
         * @return {Promise}
         */
        value: function request() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            var def = {
                baseURL: this.baseURL,
                headers: this.headers
            };

            var request = Object.assign({}, def, options);

            return (0, _axios.create)()(request);
        }

        /**
         * Get resource
         *
         * @param {string} resource - Get endpoint e.g. /api-path/1
         * @param {object} [params] - Optional request parameters.
         *
         * @return {Promise}
         */

    }, {
        key: 'get',
        value: function get(resource, params) {
            var request = {
                method: 'GET',
                url: resource,
                params: params
            };

            return this.request(request);
        }

        /**
         * Post resource
         *
         * @param {string} resource - Resource endpoint e.g. /api-path
         * @param {object} data     - Data to be posted.
         * @param {object} [params] - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'post',
        value: function post(resource, data, params) {
            var request = {
                method: 'POST',
                url: resource,
                data: data,
                params: params
            };

            return this.request(request);
        }

        /**
         * Put resource
         *
         * @param {string} resource - Resource endpoint
         * @param {object} data - Data to be updated.
         * @param {object} [params] - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'put',
        value: function put(resource, data, params) {
            var request = {
                method: 'PUT',
                url: resource,
                data: data,
                params: params
            };

            return this.request(request);
        }

        /**
         * Delete resource
         *
         * @param {string} resource - Resource endpoint
         * @param {object} [params] - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'delete',
        value: function _delete(resource, params) {
            var request = {
                method: 'DELETE',
                url: resource,
                params: params
            };

            return this.request(request);
        }
    }, {
        key: 'headers',
        get: function get() {
            var headers = {
                'User-Agent': 'Ingresse JS SDK'
            };

            if (this.auth) {
                headers = Object.assign(headers, this.auth.headers);
            }

            return headers;
        }
    }]);

    return RequestHandler;
}();