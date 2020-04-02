'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Coupon = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _handler = require('../request/handler');

var _auth = require('../auth');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Ingresse Coupon API
 */
var Coupon = exports.Coupon = function (_RequestHandler) {
    _inherits(Coupon, _RequestHandler);

    /**
     * Coupon
     *
     * @param {object} [custom] - Initialize Coupon settings.
     */
    function Coupon() {
        var custom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, Coupon);

        var settings = Object.assign({
            auth: _auth.auth.Jwt.type(),
            resource: 'coupon'
        }, custom);

        var _this = _possibleConstructorReturn(this, (Coupon.__proto__ || Object.getPrototypeOf(Coupon)).call(this, settings));

        _this.settings = settings;
        return _this;
    }

    /**
     * Get a list of coupon
     *
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     */


    _createClass(Coupon, [{
        key: 'getCoupons',
        value: function getCoupons() {
            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.get('/coupons', query);
        }

        /**
         * Get a coupon
         *
         * @param {string} id      - Coupon ID.
         * @param {object} [query] - Optional request parameters.
         * @returns {Promise}
         */

    }, {
        key: 'getCoupon',
        value: function getCoupon(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.get('/coupons/' + id, query);
        }

        /**
         * Create the coupon
         *
         * @param {object} body    - Coupon data.
         * @param {object} [query] - Optional request parameters.
         * @returns {Promise}
         */

    }, {
        key: 'createCoupon',
        value: function createCoupon(body) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.post('/coupons', body, query);
        }

        /**
         * Update the coupon
         *
         * @param {string} id      - Transaction ID.
         * @param {object} body    - Coupon data.
         * @param {object} [query] - Optional request parameters.
         * @returns {Promise}
         */

    }, {
        key: 'updateCoupon',
        value: function updateCoupon(id, body) {
            var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            return this.put('/coupons/' + id, body, query);
        }

        /**
         * Delete the coupon
         *
         * @param {string} id      - Transaction ID.
         * @param {object} [query] - Optional request parameters.
         * @returns {Promise}
         */

    }, {
        key: 'deleteCoupon',
        value: function deleteCoupon(id) {
            var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.delete('/coupons/' + id, query);
        }
    }]);

    return Coupon;
}(_handler.RequestHandler);