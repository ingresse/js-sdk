'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ticket = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _handler = require('../request/handler');

var _auth = require('../auth');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* Core Packages */


/**
 * Ingresse Ticket's API
 *
 * API to get, create, update or remove tickets.
 *
 * @example
 * var Sdk = require('ingresse-sdk');
 * var ingresse = new Sdk();
 *
 * // You will have access to this API
 * // after instantiate the Sdk.
 * var ticket = ingresse.ticket;
 */
var Ticket = exports.Ticket = function (_RequestHandler) {
    _inherits(Ticket, _RequestHandler);

    /**
     * Ticket Api
     *
     * @param {object} [custom={}] - Initialize Ticket Api settings.
     */
    function Ticket() {
        var custom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Ticket);

        var settings = Object.assign({
            auth: _auth.auth.Ingresse.type(),
            resource: 'ticket'
        }, custom);

        var _this = _possibleConstructorReturn(this, (Ticket.__proto__ || Object.getPrototypeOf(Ticket)).call(this, settings));

        _this.settings = settings;
        return _this;
    }

    /**
     * Get a list of ticket types
     * This method will return a `Promise` so you can use
     * `.then` and `.catch` methods.
     *
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.ticket.getTypes()
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */


    _createClass(Ticket, [{
        key: 'getTypes',
        value: function getTypes() {
            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.get('/types', query);
        }

        /**
         * Get a list of ticket items
         * This method will return a `Promise` so you can use
         * `.then` and `.catch` methdos.
         *
         * @param {object} [query] - Optional request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.ticket.getItems()
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'getItems',
        value: function getItems() {
            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.get('/items', query);
        }

        /**
         * Get item by ID
         *
         * @param {string|number} id - The item ID to get.
         * @param {object} [query]   - Optional request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.ticket.getItem(200)
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'getItem',
        value: function getItem(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/items/' + id, query);
        }

        /**
         * Create new Ticket item
         *
         * @param {object} data    - Data to create a new ticket item.
         * @param {object} [query] - Optional request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.ticket.newItem({ name: 'My Ticket Name' })
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'newItem',
        value: function newItem() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.post('/items', data, query);
        }

        /**
         * Update a ticket item
         *
         * @param {string|number} id - The item ID to update.
         * @param {object} data      - Data to update item.
         * @param {object} [query]   - Optional request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.ticket.updateItem(200, { name: 'My Updated Ticket Name' })
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'updateItem',
        value: function updateItem(id) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.put('/items/' + id, data, query);
        }

        /**
         * Remove a ticket item
         *
         * @param {string|number} id - The item ID to remove.
         * @param {object} [query]   - Optional request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.ticket.removeItem(200)
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'removeItem',
        value: function removeItem(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.put('/items/' + id, query);
        }

        /**
         * Create new ticket attribute
         *
         * @param {number} id        - The item ID to create attribute.
         * @param {object} attribute - The attribute data.
         * @param {object} [query]   - Optional request parameters.
         *
         * @returns Promise
         *
         * @example
         * ...
         *
         * ingresse.ticket.newAttribute(200, { key: 'min', value: '1', type: 'integer' })
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'newAttribute',
        value: function newAttribute(id, attribute, query) {
            return this.post('/items/' + id + '/attributes', attribute, query);
        }

        /**
         * Updated ticket attribute
         *
         * @param {number} id          - The item ID to update attribute.
         * @param {object} attribute   - The attribute data.
         * @param {object} [query]     - Optional request parameters.
         *
         * @returns Promise
         *
         * @example
         * ...
         *
         * ingresse.ticket.updateAttribute(200, { key: 'minimum', value: 5, type: 'integer' })
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'updateAttribute',
        value: function updateAttribute(id, attribute, query) {
            return this.put('/items/' + id + '/attributes', attribute, query);
        }

        /**
         * Create new sale period to ticket
         *
         * @param {number} id         - The item ID to create sale period.
         * @param {object} salePeriod - The sale period data.
         * @param {object} [query]    - Optional request parameters.
         *
         * @returns Promise
         *
         * @example
         * ...
         *
         * ingresse.ticket.newSalePeriod({
         *          appCategoryId: 1,
         *          start: '2016-10-10 20:20:00',
         *          finish: '2016-11-10 20:20:00',
         *          available: 1
         *      })
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'newSalePeriod',
        value: function newSalePeriod(id, salePeriod, query) {
            return this.post('/items/' + id + '/sales-period', salePeriod, query);
        }

        /**
         * Updated ticket sale period
         *
         * @param {number} id         - The item ID to update the sale period.
         * @param {object} salePeriod - The salePeriod data.
         * @param {object} [query]    - Optional request parameters.
         *
         * @returns Promise
         *
         * @example
         * ...
         *
         * ingresse.ticket.updateSalePeriod(200, {
         *          appCategoryId: 1,
         *          start: '2016-11-20 10:10:00',
         *          finish: '2016-12-20 10:10:00',
         *          available: 1
         *      })
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'updateSalePeriod',
        value: function updateSalePeriod(id, salePeriod, query) {
            return this.put('/items/' + id + '/sales-period', salePeriod, query);
        }

        /**
         * Create new values to ticket
         *
         * @param {number} id      - The item ID to create values.
         * @param {object} values  - The values data.
         * @param {object} [query] - Optional request parameters.
         *
         * @returns Promise
         *
         * @example
         * ...
         *
         * ingresse.ticket.newValues({
         *          price: 10000,
         *          feeSale: 500,
         *          feeProducer: 500
         *      })
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'newValues',
        value: function newValues(id, values, query) {
            return this.post('/items/' + id + '/values', values, query);
        }

        /**
         * Updated ticket values
         *
         * @param {number} id      - The item ID to update values.
         * @param {object} values  - The values data.
         * @param {object} [query] - Optional request parameters.
         *
         * @returns Promise
         *
         * @example
         * ...
         *
         * ingresse.ticket.updateValues(200, {
         *          price: 20000,
         *          feeSale: 1000,
         *          feeProducer: 1000
         *      })
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'updateValues',
        value: function updateValues(id, values, query) {
            return this.put('/items/' + id + '/values', values, query);
        }

        /**
         * Get a list of triggers
         * This method will return a `Promise` so you can use
         * `.then` and `.catch` methods.
         *
         * @param {number} id      - The item ID to get the triggers.
         * @param {object} [query] - Optional request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.ticket.getTriggers(10000040)
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'getTriggers',
        value: function getTriggers(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/items/' + id + '/triggers', query);
        }

        /**
         * Get the tax calculated
         *
         * @param {Object} query - The request parameters.
         * @param {Number} [query.producerId] - The producer id.
         * @param {Number} [query.eventId] - The event id.
         * @param {Number} [query.price] - The ticket's price in cents.
         * @param {Number} [query.taxDistribution] - The tax payed by customer (in percent).
         * @param {Number} [query.tax] - The custom tax in cents.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * var query = {
         *  eventId: 123, // must be informed one eventId or producerId.
         *  taxDistribution: 50
         * };
         *
         * ingresse.ticket.getTax(query)
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'getTax',
        value: function getTax() {
            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.get('/tax', query);
        }

        /**
         * Get the ticket passkeys list.
         *
         * @param {Object} query - The request parameters.
         * @param {Number} query.eventId - The event id.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * var query = {
         *  eventId: 123, // must be informed one eventId.
         * };
         *
         * ingresse.ticket.getPasskeys(query)
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'getPasskeys',
        value: function getPasskeys() {
            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.get('/passkeys', query);
        }

        /**
         * Get the ticket passkeys by id.
         *
         * @param {number} id      - The passkey id.
         * @param {Object} [query] - The request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.ticket.getPasskeyById(id, query)
         *     .then(function (response) {
         *         console.log(response);
         *     })
         *     .catch(function (error) {
         *         console.log(error);
         *     });
         */

    }, {
        key: 'getPasskeyById',
        value: function getPasskeyById(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/passkeys/' + id, query);
        }

        /**
         * Create a new passkey
         *
         * @param {object} data         - Data to create a new passkey.
         * @param {number} data.eventId - The event id.
         * @param {string} data.passkey - The passkey.
         * @param {date}   [data.start] - The date that this passkey will works.
         * @param {date}   [data.finish]- The data that this passkey will stop works.
         * @param {Object} [query]      - The request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         *ingresse.ticket.createPasskey({
         *    "eventId": 26899,
         *    "passkey": "passkey",
         *    "start"  : "2018-10-31 12:00:00",
         *    "finish" : "2019-11-10 20:20:00"
         *})
         *.then(function (response) {
         *    console.log(response);
         *})
         *.catch(function (error) {
         *    console.log(error);
         *});
         */

    }, {
        key: 'createPasskey',
        value: function createPasskey(data) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.post('/passkeys', data, query);
        }

        /**
         * Delete a passkey
         *
         * @param {number} id      - The passkey id.
         * @param {object} [data]  - Data to delete passkey.
         * @param {Object} [query] - The request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         *ingresse.ticket.deletePasskey(123)
         *.then(function (response) {
         *    console.log(response);
         *})
         *.catch(function (error) {
         *    console.log(error);
         *});
         */

    }, {
        key: 'deletePasskey',
        value: function deletePasskey(id) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.delete('/passkeys/' + id, query, data);
        }

        /**
         * Update a passkey
         *
         * @param {string|number} id    - The passkey id to update.
         * @param {object} data         - Data to update a passkey.
         * @param {number} data.eventId - The event id.
         * @param {string} data.passkey - The passkey.
         * @param {date}   [data.start] - The date that this passkey will works (can not be lower than current day).
         * @param {date}   [data.finish]- The data that this passkey will stop works.
         * @param {Object} [query]      - The request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.ticket.updatePasskey(200, {
         *    "eventId": 26899,
         *    "passkey": "passkey",
         *    "start"  : "2018-10-31 12:00:00",
         *    "finish" : "2019-11-10 20:20:00"
         *})
         *.then(function (response) {
         *    console.log(response);
         *})
         *.catch(function (error) {
         *   console.log(error);
         *});
         */

    }, {
        key: 'updatePasskey',
        value: function updatePasskey(id) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.put('/passkeys/' + id, data, query);
        }

        /**
         * Associate a passkey to items
         *
         * @param {string|number} id    - The passkey id to update.
         * @param {object} data         - Data to be updated.
         * @param {array}  data.itemIds - An array with tickets id.
         * @param {Object} [query]      - The request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.ticket.associatePasskey(820, { itemIds: [ 1, 2, 3] })
         *.then(function (response) {
         *    console.log(response);
         *})
         *.catch(function (error) {
         *   console.log(error);
         *});
         */

    }, {
        key: 'associatePasskey',
        value: function associatePasskey(id) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.put('/passkeys/' + id + '/items', data, query);
        }

        /**
         * Create many passkeys and associate it for many tickets.
         *
         * @param {number}         eventId        - The event id.
         * @param {object}         data           - Data with passkeys details.
         * @param {array[string]}  data.codes     - Array with passkeys strings.
         * @param {array[integer]} [data.itemIds] - Array with tickets id.
         * @param {date}           [data.start]   - The date that this passkey will works (can not be lower than current day).
         * @param {date}           [data.finish]  - The data that this passkey will stop works.
         * @param {integer}        [data.limit]   - The usage limit.
         * @param {Object}         [query]        - The request parameters.
         * @returns {Promise}
         *
         * @example
         * ...
         *
         * ingresse.ticket.batchPasskeys(200, {
         *    "codes"  : ["passkey1", "passkey2", "passkey3"],
         *    "itemIds": [1,2,3],
         *    "limit"  : 100,
         *    "start"  : "2018-10-31 12:00:00",
         *    "finish" : "2019-11-10 20:20:00"
         * })
         *.then(function (response) {
         *    console.log(response);
         *})
         *.catch(function (error) {
         *   console.log(error);
         *});
         */

    }, {
        key: 'batchPasskeys',
        value: function batchPasskeys(eventId) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.post('/event/' + eventId + '/passkeys', data, query);
        }

        /**
         * Upload External Codes via CSV file
         *
         * @param {number} eventId
         * @param {object} formData
         * @param {file}   formData.file
         * @param {object} [query]
         *
         * @return {Promise}
         *
         * @example
         * ....
         *
         * var uploadData = new FormData();
         *
         * uploadData.append('file', document.getElementById('input-file-id').value);
         *
         * ingresse.ticket.uploadExternals(21232, uploadData)
         * .then(function (response) {
         *     console.log(response);
         * })
         * .catch(function (error) {
         *    console.log(error);
         * });
         *
         */

    }, {
        key: 'uploadExternals',
        value: function uploadExternals(eventId) {
            var formData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.upload('/events/' + eventId + '/codes', formData, query);
        }

        /**
         * Get External Item Codes
         *
         * @param {number} itemId
         * @param {object} [query]
         *
         * @return {Promise}
         *
         * @example
         * ....
         *
         * ingresse.ticket.getExternalCodes(456789)
         * .then(function (response) {
         *     console.log(response);
         * })
         * .catch(function (error) {
         *    console.log(error);
         * });
         *
         */

    }, {
        key: 'getExternalCodes',
        value: function getExternalCodes(itemId) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/items/' + itemId + '/codes', query);
        }

        /**
         * Delete External Item
         *
         * @param {number} eventId
         * @param {object} [query]
         *
         * @return {Promise}
         *
         * @example
         * ....
         *
         * ingresse.ticket.deleteExternal(21232, { name: 'My Ticket Name' })
         * .then(function (response) {
         *     console.log(response);
         * })
         * .catch(function (error) {
         *    console.log(error);
         * });
         *
         */

    }, {
        key: 'deleteExternal',
        value: function deleteExternal(eventId) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.delete('/events/' + eventId + '/codes', query);
        }

        /**
         * Delete External Item Code
         *
         * @param {number} itemId
         * @param {number|string} codeId
         * @param {object} [query]
         *
         * @return {Promise}
         *
         * @example
         * ....
         *
         * ingresse.ticket.deleteExternalCode(123456, 987654321)
         * .then(function (response) {
         *     console.log(response);
         * })
         * .catch(function (error) {
         *    console.log(error);
         * });
         *
         */

    }, {
        key: 'deleteExternalCode',
        value: function deleteExternalCode(itemId, codeId) {
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.delete('/items/' + itemId + '/codes/' + codeId, query);
        }
    }]);

    return Ticket;
}(_handler.RequestHandler);