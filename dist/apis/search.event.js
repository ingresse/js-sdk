'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EventSearch = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _handler = require('../request/handler');

var _auth = require('../auth');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* Core Packages */


/**
 * Ingresse Event's Search API
 *
 * API to search for events.
 *
 * @example
 * var sdk = require('ingresse-sdk');
 * var ingresse = new Sdk();
 *
 * // You will have access to this API
 * // after instantiate the SDK.
 * var search = ingresse.eventSearch;
 */
var EventSearch = exports.EventSearch = function (_RequestHandler) {
    _inherits(EventSearch, _RequestHandler);

    /**
     * Event Search
     *
     * @param {object} [custom] - Initialize Event Search settings.
     */
    function EventSearch() {
        var custom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, EventSearch);

        var settings = Object.assign({
            auth: _auth.auth.Ingresse.type(),
            resource: 'event-search'
        }, custom);

        var _this = _possibleConstructorReturn(this, (EventSearch.__proto__ || Object.getPrototypeOf(EventSearch)).call(this, settings));

        _this.settings = settings;
        return _this;
    }

    /**
     * Search Events in a Company
     *
     * @param {object} [query] - Optional request parameters.
     * @param {number} companyId - The Company ID to search events.
     *
     * @returns {Promise}
     *
     * @example
     *
     * ingresse.eventSearch.search({
     *     from    : 'now-6h',
     *     to      : 'now+1d',              // Only get events in a day range
     *     state   : 'rj',
     *     orderBy : 'sessions.dateTime',
     *     category: 'festas-e-baladas',
     *     offset  : 21,
     * })
     * .then(function (response) {
     *     console.log(response);
     * })
     * .catch(function (error) {
     *     console.log(error);
     * });
     *
     */


    _createClass(EventSearch, [{
        key: 'search',
        value: function search() {
            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var companyId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            var parameters = Object.assign({
                size: 20
            }, query);

            return this.get('/' + companyId, parameters);
        }

        /**
         * Search Events by Term
         *
         * @param {string} term
         * @param {object} [query]   - Optional request parameters.
         * @param {number} companyId - The Company ID to search events.
         *
         * @returns {Promise}
         *
         * @example
         *
         * ingresse.eventSearch.searchByTerm('Event Name', {
         *     size   : 20,
         *     from   : 'now-6h',
         *     orderBy: 'sessions.dateTime',
         * })
         * .then(function (response) {
         *     console.log(response);
         * })
         * .catch(function (error) {
         *     console.log(error);
         * });
         *
         */

    }, {
        key: 'searchByTerm',
        value: function searchByTerm() {
            var term = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var companyId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

            var parameters = Object.assign({
                term: term
            }, query);

            return this.search(parameters, companyId);
        }
    }]);

    return EventSearch;
}(_handler.RequestHandler);