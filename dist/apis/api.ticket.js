'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApiTicketTransfer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _handler = require('../request/handler');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Ingresse Tickets Transfer API
 */
var ApiTicketTransfer = exports.ApiTicketTransfer = function (_RequestHandler) {
  _inherits(ApiTicketTransfer, _RequestHandler);

  function ApiTicketTransfer() {
    _classCallCheck(this, ApiTicketTransfer);

    return _possibleConstructorReturn(this, (ApiTicketTransfer.__proto__ || Object.getPrototypeOf(ApiTicketTransfer)).apply(this, arguments));
  }

  _createClass(ApiTicketTransfer, [{
    key: 'createTicketTransfer',

    /**
     * Creates a ticket transfer.
     *
     * @param {number} id - The ticket ID to get.
     * @param {object} [data]  - The form with transfer data for post.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * var ticketId = 123;
     * var data = {
     *      user: 456 //The user that will get the ticket
     * };
     *
     * ingresse.apiTickets.createTicketTransfer(ticketId, data)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     *
     * ...
     *  // To return the ticket for the last owner
     *
     * var ticketId = 123;
     * var data = {
     *      isReturn: true //With this option, the ticket will return to last owner.
     * };
     *
     * ingresse.apiTickets.createTicketTransfer(ticketId, data)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    value: function createTicketTransfer(id) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      return this.post('/ticket/' + id + '/transfer', data, query);
    }

    /**
     * Update a ticket transfer.
     *
     * @param {number} id - The ticket ID to get.
     * @param {number} transferId - The transfer ID to get.
     * @param {object} [data]  - The form with transfer data to post.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * var ticketId = 123;
     * var transferId = 456;
     * var data = {
     *      action: 'accept' // can be [accept, cancel, refuse]
     * };
     *
     * ingresse.apiTickets.updateTicketTransfer(ticketId, transferId, data)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */

  }, {
    key: 'updateTicketTransfer',
    value: function updateTicketTransfer(id, transferId) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var query = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      return this.post('/ticket/' + id + '/transfer/' + transferId, data, query);
    }

    /**
     * Get the ticket transfer history.
     *
     * @param {string|number} id - The ticket ID to get.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     */

  }, {
    key: 'getTicketTransferHistory',
    value: function getTicketTransferHistory(id) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.get('/ticket/' + id + '/transfer', query);
    }
  }]);

  return ApiTicketTransfer;
}(_handler.RequestHandler);