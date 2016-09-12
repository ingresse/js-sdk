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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ticket = exports.Ticket = function (_RequestHandler) {
    _inherits(Ticket, _RequestHandler);

    /**
     * Ticket Api
     *
     * @param {object} [custom] - Initialize Ticket Api settings.
     */
    function Ticket() {
        var custom = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Ticket);

        var settings = {
            url: 'https://api.ingresse.com/ticket',
            auth: _auth.auth.Jwt.type()
        };

        Object.assign(settings, custom);

        return _possibleConstructorReturn(this, (Ticket.__proto__ || Object.getPrototypeOf(Ticket)).call(this, settings));
    }

    /**
     * Get a list of ticket items
     *
     * @param {object} [query] - Optional request parameters.
     *
     * @returns {Promise}
     */


    _createClass(Ticket, [{
        key: 'getItems',
        value: function getItems(query) {
            return this.get('/items', query);
        }

        /**
         * Get item by ID
         *
         * @param {string|number} id - The item ID to get.
         * @param {object} [query]   - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'getItem',
        value: function getItem(id, query) {
            return this.get('/items/' + id, query);
        }

        /**
         * Create new Ticket item
         *
         * @param {object} data    - Data to create a new ticket item.
         * @param {object} [query] - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'newItem',
        value: function newItem(data, query) {
            return this.post('/items', data, query);
        }

        /**
         * Update a ticket item
         *
         * @param {string|number} id - The item ID to update.
         * @param {object} data      - Data to update item.
         * @param {object} [query]   - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'updateItem',
        value: function updateItem(id, data, query) {
            return this.put('/items/' + id, data, query);
        }

        /**
         * Remove a ticket item
         *
         * @param {string|number} id - The item ID to remove.
         * @param {object} [query]   - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'removeItem',
        value: function removeItem(id, query) {
            return this.delete(id, query);
        }
    }]);

    return Ticket;
}(_handler.RequestHandler);