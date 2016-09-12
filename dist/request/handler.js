'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RequestHandler = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _popsicle = require('popsicle');

var _popsicle2 = _interopRequireDefault(_popsicle);

var _plugins = require('./plugins');

var _auth = require('../auth');

var _popsicleStatus = require('popsicle-status');

var _popsicleStatus2 = _interopRequireDefault(_popsicleStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base request handler for all the API's
 * with `get`, `post`, `put` and `delete` methods
 */
var RequestHandler = exports.RequestHandler = function () {
    /**
     * Initialize request handler
     *
     * @param {object} settings - Settings
     */
    function RequestHandler() {
        var settings = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, RequestHandler);

        this.settings = settings;

        if (_auth.auth[settings.auth]) {
            this.auth = new _auth.auth[settings.auth]();
        }
    }

    /**
     * Create new request promise
     *
     * @private
     * @param {object} options - request options.
     *
     * @returns {Promise}
     */


    _createClass(RequestHandler, [{
        key: 'request',
        value: function request() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            var request = {
                headers: {
                    'User-Agent': 'Ingresse JS SDK'
                }
            };

            if (this.auth) {
                Object.assign(request, this.auth.getSettings());
            }

            Object.assign(request, options);

            return (0, _popsicle2.default)(request).use((0, _plugins.transformResponse)()).use((0, _plugins.basePrefix)(this.settings.url)).use(_popsicle.plugins.parse(['json']));
        }

        /**
         * Get resource
         *
         * @param {string} path    - Request get to endpoint e.g. /api-path/1
         * @param {object} [query] - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'get',
        value: function get(path, query) {
            var request = {
                method: 'GET',
                url: path,
                query: query
            };

            return this.request(request);
        }

        /**
         * Post resource
         *
         * @param {string} path    - Request post to endpoint e.g. /api-path
         * @param {object} data    - Data to be posted.
         * @param {object} [query] - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'post',
        value: function post(path, data, query) {
            var request = {
                method: 'POST',
                url: path,
                data: data,
                query: query
            };

            return this.request(request);
        }

        /**
         * Put resource
         *
         * @param {string} path    - Request put to end endpoint e.g. /api-path/1
         * @param {object} data    - Data to be updated.
         * @param {object} [query] - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'put',
        value: function put(path, data, query) {
            var request = {
                method: 'PUT',
                url: path,
                data: data,
                query: query
            };

            return this.request(request);
        }

        /**
         * Delete resource
         *
         * @param {string} path    - Request delete to endpoint e.g. /api-path/1
         * @param {object} [query] - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'delete',
        value: function _delete(path, query) {
            var request = {
                method: 'DELETE',
                url: path,
                query: query
            };

            return this.request(request);
        }
    }]);

    return RequestHandler;
}();