'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ApiTransactions = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _handler = require('../request/handler');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Ingresse Transactions API
 */
var ApiTransactions = exports.ApiTransactions = function (_RequestHandler) {
    _inherits(ApiTransactions, _RequestHandler);

    function ApiTransactions() {
        _classCallCheck(this, ApiTransactions);

        return _possibleConstructorReturn(this, (ApiTransactions.__proto__ || Object.getPrototypeOf(ApiTransactions)).apply(this, arguments));
    }

    _createClass(ApiTransactions, [{
        key: 'getReport',

        /**
         * Get transactions report
         *
         * @param {string} [agregateBy] - Optional: 'status'.
         * @param {object} [query]      - Optional request parameters.
         *
         * @returns {Promise}
         */
        value: function getReport() {
            var agregateBy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'date';
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/transaction-report/' + agregateBy, query);
        }

        /**
         * Get Passkeys Report
         *
         * @param {number} eventId - Event ID.
         * @param {object} [query] - Optional request parameters.
         *
         * @return {Promise}
         *
         * @example
         * ...
         * const ing = new Sdk();
         *
         * ing.api.getPasskeysReport(21232, { status: 'pending' })
         * .then((response) => {
         *     console.log(response);
         * })
         * .catch((error) => {
         *     console.log(error);
         * });
         */

    }, {
        key: 'getPasskeysReport',
        value: function getPasskeysReport(eventId) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var _query = Object.assign({
                event: eventId,
                status: 'approved'
            }, query);

            return this.get('/transaction-report/passkey-ticket', _query);
        }

        /**
         * Get a list of transactions
         *
         * @param {object} [query] - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'getList',
        value: function getList() {
            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.get('/transactions', query);
        }

        /**
         * Get a transaction by ID
         *
         * @param {string} id      - Transaction ID.
         * @param {object} [query] - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'getById',
        value: function getById(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/transaction/' + id, query);
        }

        /**
         * Get refund reasons
         *
         * @param {object} [query] - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'getRefundReasons',
        value: function getRefundReasons() {
            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.get('/refundReasons', query);
        }

        /**
         * Get decision reason
         *
         * @param {object} [query] - Require parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'getDecisionReasons',
        value: function getDecisionReasons() {
            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.get('/decisionReasons', query);
        }

        /**
         * Refund a transaction
         *
         * @param {string} id      - Transaction ID.
         * @param {object} [data]  - Optional transaction data.
         * @param {object} [query] - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'refund',
        value: function refund(id) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.post('/shop/' + id + '/refund', data, query);
        }

        /**
         * Capture an authorized transaction
         *
         * @param {string} id      - Transaction ID.
         * @param {object} [query] - Optional request parameters.
         *
         * @returns {Promise}
         */

    }, {
        key: 'capture',
        value: function capture(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.post('/shop/' + id + '/capture', null, query);
        }

        /**
         * Cancel a pending transaction
         *
         * @param {string} id      - Transaction ID.
         * @param {object} [query] - Optional request parameters.
         *
         * @return {Promise}
         */

    }, {
        key: 'cancel',
        value: function cancel(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.post('/shop/' + id + '/cancel', null, query);
        }
    }]);

    return ApiTransactions;
}(_handler.RequestHandler);