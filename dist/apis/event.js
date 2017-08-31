'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Event = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _handler = require('../request/handler');

var _auth = require('../auth');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Ingresse Event's API
 *
 * API to get, create and update events.
 *
 * @example
 * var sdk = require('ingresse-sdk');
 * var ingresse = new Sdk();
 *
 * // You will have access to this API
 * // after instantiate the Sdk.
 * var event = ingresse.event;
 */
var Event = exports.Event = function (_RequestHandler) {
    _inherits(Event, _RequestHandler);

    /**
     * Event Api
     *
     * @param {object} [custom={}] - Initialize Event Api settings.
     */
    function Event() {
        var custom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Event);

        var settings = {
            url: 'https://event.ingresse.com',
            auth: _auth.auth.Jwt.type()
        };

        Object.assign(settings, custom);

        var _this = _possibleConstructorReturn(this, (Event.__proto__ || Object.getPrototypeOf(Event)).call(this, settings));

        _this.settings = settings;
        return _this;
    }

    /**
     * Get event by ID
     *
     * @param {number} id      - The event ID to get.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.event.get(200)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */


    _createClass(Event, [{
        key: 'get',
        value: function get(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/' + id, query);
        }

        /**
         * Create new Event
         *
         * @param {object} data    - Data to create a new event.
         * @param {object} [query] - Optional request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.event.new({ name: 'My Event Name' })
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'new',
        value: function _new() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.post('/', data, query);
        }

        /**
         * Update an Event
         *
         * @param {string|number} id - The Event ID to update.
         * @param {object} data      - Data to update Event.
         * @param {object} [query]   - Optional request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.event.update(200, { name: 'My Updated Event Name' })
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'update',
        value: function update(id) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.put('/' + id, data, query);
        }

        /**
         * Update an Event Poster
         *
         * @param {string|number} id - The Event ID to update.
         * @param {object} data      - Data to update event poster.
         * @param {object} [query]   - Optional request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.event.update(12, {
         *          poster: {
         *              format: 'base64',
         *              image : 'data:image/jpeg;base64 8aAVdagg87h87t8q...',
         *          }
         *     })
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'updatePoster',
        value: function updatePoster(id) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.put('/' + id + '/poster', data, query);
        }

        /**
         * Check if slug is available to use in an Event.
         *
         * This method will return a `Promise` so you can use
         * `.then` and `.catch` methods.
         *
         * @param {string} id      - The slug ID to check.
         * @param {object} [query] - Optional request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.ticket.checkSlug('my-event-slug')
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'checkSlug',
        value: function checkSlug(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/slugs', id, query);
        }

        /**
         * Get all Events Categories
         *
         * This method will return a `Promise` so you can use
         * `.then` and `.catch` methods.
         *
         * @param {object} [query] - Optional request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.ticket.categories()
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'getCategories',
        value: function getCategories() {
            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.get('/categories', query);
        }

        /**
         * Create new Event Category
         *
         * @param {string} id      - The Category ID to get.
         * @param {object} [query] - Optional request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.event.getCategory(12)
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'getCategory',
        value: function getCategory(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/categories/' + id, id, query);
        }

        /**
         * Remove an Event Session
         *
         * @param {number} eventId   - The Event ID to remove session.
         * @param {number} sessionId - The Session ID to remove.
         * @param {object} [query]   - Optional request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.ticket.removeSession(123)
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'removeSession',
        value: function removeSession(eventId, sessionId) {
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.delete('/' + eventId + '/sessions/' + sessionId, query);
        }
    }]);

    return Event;
}(_handler.RequestHandler);