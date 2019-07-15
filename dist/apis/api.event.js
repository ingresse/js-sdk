'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApiEvents = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _handler = require('../request/handler');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Ingresse Event API
 */
var ApiEvents = exports.ApiEvents = function (_RequestHandler) {
    _inherits(ApiEvents, _RequestHandler);

    function ApiEvents() {
        _classCallCheck(this, ApiEvents);

        return _possibleConstructorReturn(this, (ApiEvents.__proto__ || Object.getPrototypeOf(ApiEvents)).apply(this, arguments));
    }

    _createClass(ApiEvents, [{
        key: 'identifyEvent',

        /**
         * Identify event
         *
         * @param {string} link       - Link/Slug or id.
         * @param {string} fields     - Event fields to get.
         * @param {object} [queryOpt] - Optional request parameters.
         * @returns {Promise}
         */
        value: function identifyEvent(link, fields, queryOpt) {
            var query = queryOpt || {
                link: link,
                fields: fields,
                method: 'identify'
            };

            return this.get('/event', query);
        }

        /**
         * Get event
         *
         * @param {string|number} id - The event ID to get.
         * @param {object} [query]   - Optional request parameters.
         * @returns {Promise}
         */

    }, {
        key: 'getEvent',
        value: function getEvent(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/event/' + id, query);
        }

        /**
         * Get event tickets
         *
         * @param {string|number} id - The event ID to get.
         * @param {object} [query]   - Optional request parameters.
         * @returns {Promise}
         */

    }, {
        key: 'getEventTickets',
        value: function getEventTickets(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/event/' + id + '/tickets', query);
        }

        /**
         * Get event session tickets
         *
         * @param {string|number} id        - The event ID to get.
         * @param {string|number} sessionId - The event session ID to get.
         * @param {object} [query]          - Optional request parameters.
         * @returns {Promise}
         */

    }, {
        key: 'getEventSessionTickets',
        value: function getEventSessionTickets(id, sessionId) {
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.get('/event/' + id + '/session/' + sessionId + '/tickets', query);
        }

        /**
         * Get event crew
         *
         * @param {string|number} id - The event ID to get.
         * @param {object} [query]   - Optional request parameters.
         * @returns {Promise}
         */

    }, {
        key: 'getEventCrew',
        value: function getEventCrew(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/event/' + id + '/crew', query);
        }

        /**
         * Get event attributes
         *
         * @param {string|number} id - The event ID to get.
         * @param {object} [query]   - Optional request parameters.
         * @returns {Promise}
         */

    }, {
        key: 'getEventAttributes',
        value: function getEventAttributes(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/event/' + id + '/attributes', query);
        }

        /**
         * Featured events
         *
         * @param {object} [query] - Optional request parameters.
         *
         * @returns {Promise}
         *
         * @example
         *
         * ENDPOINT: '/featured'
         *
         * ...
         *
         * ingresse.ApiEvents.getFeatured({ method: 'banner', state: 'sp' })
         * .then(function (response) {
         *     console.log(response);
         * })
         * .catch(function (error) {
         *     console.log(error);
         * });
         */

    }, {
        key: 'getFeatured',
        value: function getFeatured() {
            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.get('/featured', query);
        }

        /**
         * Get Home Sections
         *
         * @param {object} [query] - Optional request parameters.
         *
         * @returns {Promise}
         *
         * @example
         *
         * ENDPOINT: '/home/sections'
         *
         * ...
         *
         * ingresse.ApiEvents.getHomeSections()
         * .then(function (response) {
         *     console.log(response);
         * })
         * .catch(function (error) {
         *     console.log(error);
         * });
         */

    }, {
        key: 'getHomeSections',
        value: function getHomeSections() {
            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.get('/home/sections', query);
        }

        /**
         * Deprecated
         */

    }, {
        key: 'getEventTypes',
        value: function getEventTypes() {
            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.get('/home/sections', query);
        }

        /**
         * Home Cover
         *
         * @param {object} [query] - Optional request parameters.
         *
         * @returns {Promise}
         *
         * @example
         *
         * ENDPOINT: '/home/cover'
         *
         * ...
         *
         * ingresse.ApiEvents.getHomeCover()
         * .then(function (response) {
         *     console.log(response);
         * })
         * .catch(function (error) {
         *     console.log(error);
         * });
         */

    }, {
        key: 'getHomeCover',
        value: function getHomeCover() {
            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.get('/home/cover', query);
        }

        /**
         * Get the search event categorie.
         *
         * @param {string} category - The search category to get.
         * @param {object} [query]   - Optional request parameters.
         * @returns {Promise}
         */

    }, {
        key: 'getEventCategories',
        value: function getEventCategories(category) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/' + category, query);
        }

        /**
         * Request the passkeys report processment.
         *
         * Will request to API generate the Passkeys Report
         * and API will send an email to the user when the report
         * is available, with the link to download file.
         *
         * @param {number} eventId - The event ID.
         * @param {object} data    - Report requisition details.
         * @param {object} [query] - Optional request parameters.
         *
         * @returns {Promise}
         *
         * @example
         * ...
         * const ing = new Sdk();
         *
         * ing.api.requestPasskeysReport(21232, {
         *     "type":  "passkey",
         *     "format": "xlsx",
         *     "filters": [{
         *         "status": "approved"
         *     }]
         * })
         * .then((response) => {
         *     console.log(response);
         * })
         * .catch((error) => {
         *     console.log(error);
         * });
         */

    }, {
        key: 'requestPasskeysReport',
        value: function requestPasskeysReport(eventId) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var _data = Object.assign({
                type: 'passkey',
                format: 'csv',
                filters: [{
                    status: 'approved'
                }]
            }, data);

            return this.post('/event/' + eventId + '/export', _data, query);
        }

        /**
         * Request export list processment.
         *
         * Will request to API generate an List
         * and API will send an email to the user when the list
         * is available, with the link to download file.
         *
         * @param {number} eventId - The event ID.
         * @param {object} data    - Report requisition details.
         * @param {object} [query] - Optional request parameters.
         * @param {array}  [query.filters]
         * @param {string} [query.format] - 'csv' or 'xlsx'. Default: 'csv'.
         * @param {string} [query.type]   - 'guestlist', 'passkey' or 'transactions'. Default: 'transactions'
         *
         * @returns {Promise}
         *
         * @example
         * ...
         * const ing = new Sdk();
         *
         * ing.api.requestExportList(21232, {
         *     "type":  "guestlist",
         *     "format": "xlsx",
         *     "filters": [
         *          {
         *              "name" : "channel",
         *              "value": "offline",
         *          },
         *          {
         *              "name" : "term",
         *              "value": "udi",
         *          }
         *      ]
         * })
         * .then((response) => {
         *     console.log(response);
         * })
         * .catch((error) => {
         *     console.log(error);
         * });
         */

    }, {
        key: 'requestExportList',
        value: function requestExportList(eventId) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var _data = Object.assign({
                type: 'transactions',
                format: 'csv'
            }, data);

            return this.post('/event/' + eventId + '/export', _data, query);
        }

        /**
         * Get Event Entry Report
         *
         * @param {number} eventId     - The event ID.
         * @param {number} [sessionId] - The event session ID to get.
         * @param {object} [query]     - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'getEntryReport',
        value: function getEntryReport(eventId, sessionId) {
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var _query = Object.assign({}, query, {
                method: 'report'
            }, !sessionId ? {} : {
                sessionId: sessionId
            });

            return this.get('/event/' + eventId + '/guestlist', _query);
        }

        /**
         * Get Event Bordero Report
         *
         * @param {number} eventId - The event ID.
         * @param {object} [query] - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'getBorderoReport',
        value: function getBorderoReport(eventId) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/event/' + eventId + '/bordero', query);
        }
    }]);

    return ApiEvents;
}(_handler.RequestHandler);