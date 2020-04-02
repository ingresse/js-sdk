'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApiCoupon = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _handler = require('../request/handler');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Ingresse Coupon API
 */
var ApiCoupon = exports.ApiCoupon = function (_RequestHandler) {
  _inherits(ApiCoupon, _RequestHandler);

  function ApiCoupon() {
    _classCallCheck(this, ApiCoupon);

    return _possibleConstructorReturn(this, (ApiCoupon.__proto__ || Object.getPrototypeOf(ApiCoupon)).apply(this, arguments));
  }

  _createClass(ApiCoupon, [{
    key: 'getCoupons',


    /**
     * Get a list of coupon
     *
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     */
    value: function getCoupons() {
      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.get('/coupons', query);
    }

    /**
     * Get a coupon
     *
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
     * @param {string} id - Transaction ID.
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
     * @param {string} id - Transaction ID.
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

  return ApiCoupon;
}(_handler.RequestHandler);