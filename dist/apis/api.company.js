'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApiCompany = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _handler = require('../request/handler');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Ingresse company API
 */
var ApiCompany = exports.ApiCompany = function (_RequestHandler) {
  _inherits(ApiCompany, _RequestHandler);

  /**
   * Initialize the API company.
   */
  function ApiCompany(settings) {
    _classCallCheck(this, ApiCompany);

    var _this = _possibleConstructorReturn(this, (ApiCompany.__proto__ || Object.getPrototypeOf(ApiCompany)).call(this));

    _this.companyId = settings ? settings.companyId : null;
    return _this;
  }

  /**
   * Get company attributes.
   */


  _createClass(ApiCompany, [{
    key: 'getAttributes',
    value: function getAttributes() {
      return this.get('/company/' + this.companyId + '/attributes');
    }

    /**
     * Update company attributes.
     *
     * @param {object} data - New attributes.
     *
     * @return {Promise}
     */

  }, {
    key: 'saveAttributes',
    value: function saveAttributes(data) {
      return this.post('/company/' + this.companyId + '/attributes', data);
    }
  }]);

  return ApiCompany;
}(_handler.RequestHandler);