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
     * ingresse.event.getById(200)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */


    _createClass(Event, [{
        key: 'getById',
        value: function getById(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/' + id, query);
        }

        /**
         * Get event attributes
         *
         * @param {number} id      - The event ID to get.
         * @param {object} [query] - Optional request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.event.getAttributes(20866)
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'getAttributes',
        value: function getAttributes(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/' + id + '/attributes', query);
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
         * ingresse.event.create({ name: 'My Event Name' })
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'create',
        value: function create() {
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
         * ingresse.event.updatePoster(12, {
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
         * Delete Event Poster
         *
         * @param {string|number} id - The Event ID to delete poster.
         * @param {object} [query]   - Optional request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.event.deletePoster(12)
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'deletePoster',
        value: function deletePoster(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.delete('/' + id + '/poster', query);
        }

        /**
         * Update Event Attributes
         *
         * @param {string|number} id - The Event ID to update.
         * @param {object} data      - Data to update event attributes.
         * @param {object} [query]   - Optional request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.event.updateAttributes(12, {
         *          attributes: [
         *              {
         *                  name : 'video_url',
         *                  value: 'https://www.youtube.com/watch?v=hRGnjgBOHIk',
         *              }
         *          ]
         *     })
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'updateAttributes',
        value: function updateAttributes(id) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.put('/' + id + '/attributes', data, query);
        }

        /**
         * Validate if slug is available to use in an Event.
         *
         * This method will return a `Promise` so you can use
         * `.then` and `.catch` methods.
         *
         * @param {string} term    - The slug term to check.
         * @param {object} [query] - Optional request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.event.validateSlug('my-event-slug')
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'validateSlug',
        value: function validateSlug(term) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/slugs/' + term, query);
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
         * ingresse.event.getCategories()
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
         * Get all Private Events Categories
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
         * ingresse.event.getPrivateCategories()
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'getPrivateCategories',
        value: function getPrivateCategories() {
            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.get('/categories/private', query);
        }

        /**
         * Get Event Category by ID
         *
         * @param {string|number} id - The Category ID to get.
         * @param {object} [query]   - Optional request parameters.
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

            return this.get('/categories/' + id, query);
        }

        /**
         * Remove Category from specific Event
         *
         * @param {string|number} eventId    - The Event ID to remove category.
         * @param {string|number} categoryId - The Category ID to remove.
         * @param {object} [query]           - Optional request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.event.deleteCategory(123, 321)
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'deleteCategory',
        value: function deleteCategory(eventId, categoryId) {
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.delete('/' + eventId + '/category/' + categoryId, query);
        }

        /**
         * Remove an Event Session
         *
         * @param {string|number} eventId   - The Event ID to remove session.
         * @param {string|number} sessionId - The Session ID to remove.
         * @param {object} [query]          - Optional request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.event.deleteSession(123, 321)
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'deleteSession',
        value: function deleteSession(eventId, sessionId) {
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.delete('/' + eventId + '/sessions/' + sessionId, query);
        }

        /**
         * Get events by producer, based on JWT
         *
         * @param {object} [query] - Request parameters/filters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.event.searchByProducer({ from: 'now-1d' })
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'searchByProducer',
        value: function searchByProducer() {
            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.get('/search/producer', query);
        }

        /**
         * Update/Add users permission to the event
         *
         * @param {string|number} eventId - The Event ID.
         * @param {object}        data    - Object with attribute `usersPermission` as Array with Users IDs to attribute Permission.
         * @param {object}        [query] - Request parameters/filters.
         *
         * @returns {Promise}
         *
         * @example
         * ...
         * var data = { usersPermission: [ 321 ] };
         *
         * ingresse.event.updatePermission(21232, data)
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'updatePermission',
        value: function updatePermission(eventId) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.put('/' + eventId + '/permission', data, query);
        }

        /**
         * Remove permission on the event of only unique user
         *
         * @param {string|number} eventId - The Event ID.
         * @param {object}        data    - Object with attribute `usersPermission` as Array with Users IDs to delete Permission.
         * @param {object}        [query] - Request parameters/filters.
         *
         * @returns {Promise}
         *
         * @example
         * ...
         * var data = { usersPermission: [ 321 ] };
         *
         * ingresse.event.deletePermission(21232, data)
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'deletePermission',
        value: function deletePermission(eventId) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.delete('/' + eventId + '/permission', query, data);
        }

        /**
         * @DEPRECATED
         *
         * Add users as admins of the event
         *
         * @param {string|number} eventId - The Event ID.
         * @param {object}        data    - Object with attribute `usersPermission` as Array with Users IDs to attribute Permission.
         * @param {object}        [query] - Request parameters/filters.
         *
         * @returns {Promise}
         *
         * @example
         * ...
         * var data = { admins: [ 321, 123, 654 ] };
         *
         * ingresse.event.addAdmins(21232, data)
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'addAdmins',
        value: function addAdmins(eventId) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.post('/' + eventId + '/admin', data, query);
        }

        /**
         * @DEPRECATED
         *
         * Delete user as event's admin
         * Only unique user
         *
         * @param {string|number} eventId - The Event ID.
         * @param {string|number} userId  - The User ID.
         * @param {object}        [query] - Request parameters/filters.
         *
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.event.deleteAdmin(21232, 654)
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'deleteAdmin',
        value: function deleteAdmin(eventId, userId) {
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.delete('/' + eventId + '/admin/' + userId, query);
        }

        /**
         * Add user to the event staff
         *
         * @param {number} eventId - The Event ID.
         * @param {number} userId  - User ID
         * @param {string} role    - Role in Event: 'admin' or 'producer'...
         * @param {object} [data]  - Request body.
         * @param {object} [query] - Request parameters/filters.
         *
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.event.staffAdd(21232, 123, 'producer')
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'staffAdd',
        value: function staffAdd(eventId, userId) {
            var role = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'producer';
            var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var query = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

            return this.post('/' + eventId + '/staff/' + role + '/user/' + userId, data, query);
        }

        /**
         * Remove user of event staff
         *
         * @param {number} eventId - The Event ID.
         * @param {number} userId  - User ID
         * @param {string} role    - Role in Event: 'admin' or 'producer'...
         * @param {object} [query] - Request parameters/filters.
         *
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.event.staffRemove(21232, 123, 'producer')
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'staffRemove',
        value: function staffRemove(eventId, userId) {
            var role = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'producer';
            var query = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

            return this.delete('/' + eventId + '/staff/' + role + '/user/' + userId, query);
        }
    }]);

    return Event;
}(_handler.RequestHandler);