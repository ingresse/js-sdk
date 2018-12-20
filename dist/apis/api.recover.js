'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApiRecover = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _handler = require('../request/handler');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Ingresse Recover Password API
 */
var ApiRecover = exports.ApiRecover = function (_RequestHandler) {
  _inherits(ApiRecover, _RequestHandler);

  function ApiRecover() {
    _classCallCheck(this, ApiRecover);

    return _possibleConstructorReturn(this, (ApiRecover.__proto__ || Object.getPrototypeOf(ApiRecover)).apply(this, arguments));
  }

  _createClass(ApiRecover, [{
    key: 'recoverPassword',

    /**
     * Recover the user password
     *
     * @param {object} data    - The user data to recover password.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     */
    value: function recoverPassword(data) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.post('/recover-password', data, query);
    }

    /**
     * Validate the hash sent for user
     *
     * @param {object} data    - The user data to validate password.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     */

  }, {
    key: 'validateHash',
    value: function validateHash(data) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.post('/recover-validate', data, query);
    }

    /**
     * Update the user password
     *
     * @param {object} data    - The user data to validate password.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     */

  }, {
    key: 'updatePassword',
    value: function updatePassword(data) {
      var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.post('/recover-update-password', data, query);
    }
  }]);

  return ApiRecover;
}(_handler.RequestHandler);