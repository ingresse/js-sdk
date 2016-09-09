'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ticket = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestHandler = require('../requestHandler');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ticket = exports.Ticket = function (_RequestHandler) {
    _inherits(Ticket, _RequestHandler);

    /**
     * Ticket api
     *
     * @param {object} [settings] - Initialize Ticket api settings.
     */
    function Ticket() {
        var settings = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, Ticket);

        var def = {
            url: 'https://api.ingresse.com/ticket',
            auth: 'jwt'
        };

        var _settigns = Object.assign({}, def, settings);

        return _possibleConstructorReturn(this, (Ticket.__proto__ || Object.getPrototypeOf(Ticket)).call(this, _settigns));
    }

    /**
     * Get a list of ticket items
     *
     * @param {object} [params]- Optional request parameters.
     *
     * @returns {Promise}
     */


    _createClass(Ticket, [{
        key: 'getItems',
        value: function getItems(params) {
            return this.get('/items', params);
        }

        /**
         * Get item by ID
         *
         * @param {string|number} id - The item ID to get.
         * @param {object} [params] - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'getItem',
        value: function getItem(id, params) {
            return this.get('/items/' + id, params);
        }

        /**
         * Create new Ticket item
         *
         * @param {object} data - Data to create a new ticket item.
         * @param {object} [params] - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'newItem',
        value: function newItem(data, params) {
            return this.post('/items', data, params);
        }

        /**
         * Update a ticket item
         *
         * @param {string|number} id - The item ID to update.
         * @param {object} data - Data to update item.
         * @param {object} [params] - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'updateItem',
        value: function updateItem(id, data, params) {
            return this.put('/items/' + id, data, params);
        }

        /**
         * Remove a ticket item
         *
         * @param {string|number} id - The item ID to remove.
         * @param {object} [params] - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'removeItem',
        value: function removeItem(id, params) {
            return this.delete(id, params);
        }
    }]);

    return Ticket;
}(_requestHandler.RequestHandler);