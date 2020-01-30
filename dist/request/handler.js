'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RequestHandler = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _popsicle = require('popsicle');

var _popsicle2 = _interopRequireDefault(_popsicle);

var _plugins = require('./plugins');

var _ingresse = require('../auth/ingresse');

var _helper = require('../helper');

var _environments = require('../helper/environments');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* Core Packages */


/**
 * Base request handler for all the API's
 * with `get`, `post`, `put` and `delete` methods
 */
var RequestHandler = exports.RequestHandler = function (_Ingresse) {
    _inherits(RequestHandler, _Ingresse);

    /**
     * Initialize request handler
     *
     * @param {object} settings - Settings
     */
    function RequestHandler() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, RequestHandler);

        var _this = _possibleConstructorReturn(this, (RequestHandler.__proto__ || Object.getPrototypeOf(RequestHandler)).call(this, settings));

        _this.settings = settings;

        if (!_this.settings.url) {
            _this.setEnv(_this.settings.env || _this.settings.host);
        }
        return _this;
    }

    /**
     * Set API url
     *
     * @param {string} url - Base URL, example: 'https://hml-api.ingresse.com'
     *
     * @example
     * var sdk = require('ingresse-sdk');
     * var ingresse = new Sdk();
     *
     * // You will have access to this API
     * // after instantiate the Sdk.
     * var api = ingresse.api;
     *
     * // Can set an specific URL to this API
     * api.setUrl('https://hml-api.ingresse.com');
     *
     */


    _createClass(RequestHandler, [{
        key: 'setUrl',
        value: function setUrl(url) {
            this.settings.url = url;
        }

        /**
         * Set Environment
         *
         * @param {string} env - Environment Type: 'stg', 'hmla', 'hmlb', 'sandbox', 'integration';
         *
         * @example
         * var sdk = require('ingresse-sdk');
         * var ingresse = new Sdk();
         *
         * // You will have access to this API
         * // after instantiate the Sdk.
         * var api = ingresse.api;
         *
         * // Can set an specific Environment to this API
         * api.setEnv('integration');
         *
         */

    }, {
        key: 'setEnv',
        value: function setEnv(env) {
            this.setUrl(_environments.environments.getURL(this.settings.resource, env));
        }

        /**
         * Create new request promise
         *
         * @param {object} options - request options.
         *
         * @returns {Promise}
         */

    }, {
        key: 'request',
        value: function request() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var request = {};

            request = (0, _helper.deepMerge)(request, options);

            if (this.auth) {
                request = (0, _helper.deepMerge)(request, this.auth.getSettings());
            }

            if (!this.settings.url) {
                this.setEnv(this.settings.env || this.settings.host);
            }

            return (0, _popsicle2.default)(request).use((0, _plugins.transformResponse)()).use((0, _plugins.basePrefix)(this.settings.url)).use(_popsicle.plugins.parse(['json']));
        }

        /**
         * Get resource
         *
         * @param {string} path      - Request get to endpoint e.g. /api-path/1
         * @param {object} [query]   - Optional request parameters.
         * @param {object} [headers] - Optional request headers.
         *
         * @returns {Promise}
         */

    }, {
        key: 'get',
        value: function get(path, query) {
            var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var request = {
                method: 'GET',
                url: path,
                query: query,
                headers: headers
            };

            return this.request(request);
        }

        /**
         * Post resource
         *
         * @param {string} path      - Request post to endpoint e.g. /api-path
         * @param {object} data      - Data to be posted.
         * @param {object} [query]   - Optional request parameters.
         * @param {object} [headers] - Optional request headers.
         *
         * @returns {Promise}
         */

    }, {
        key: 'post',
        value: function post(path, data, query) {
            var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

            var request = {
                method: 'POST',
                url: path,
                body: data,
                query: query,
                headers: headers
            };

            return this.request(request);
        }

        /**
         * Put resource
         *
         * @param {string} path      - Request put to end endpoint e.g. /api-path/1
         * @param {object} data      - Data to be updated.
         * @param {object} [query]   - Optional request parameters.
         * @param {object} [headers] - Optional request headers.
         *
         * @returns {Promise}
         */

    }, {
        key: 'put',
        value: function put(path, data, query) {
            var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

            var request = {
                method: 'PUT',
                url: path,
                body: data,
                query: query,
                headers: headers
            };

            return this.request(request);
        }

        /**
         * Delete resource
         *
         * @param {string} path      - Request delete to endpoint e.g. /api-path/1
         * @param {object} [query]   - Optional request parameters.
         * @param {object} [data]    - Data to be deleted.
         * @param {object} [headers] - Optional request headers.
         *
         * @returns {Promise}
         */

    }, {
        key: 'delete',
        value: function _delete(path, query, data) {
            var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

            var request = {
                method: 'DELETE',
                url: path,
                body: data,
                query: query,
                headers: headers
            };

            return this.request(request);
        }

        /**
         * Upload files
         *
         * @param {string} path      - Request post to endpoint e.g. /api-path
         * @param {object} formData  - Data to be posted.
         * @param {object} [query]   - Optional request parameters.
         * @param {object} [headers] - Optional request headers.
         *
         * @returns {Promise}
         */

    }, {
        key: 'upload',
        value: function upload(path) {
            var formData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

            var request = {
                method: 'POST',
                url: path,
                query: query,
                body: formData,
                headers: Object.assign({
                    'Accept': '*/*',
                    'Content-Type': undefined
                }, headers)
            };

            return this.request(request);
        }
    }]);

    return RequestHandler;
}(_ingresse.Ingresse);