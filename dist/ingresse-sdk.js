'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _apis = require('./apis');

var _package = require('../package.json');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Ingresse JavaScript SDK
 */
var IngresseSdk = function () {
    /**
     * Instantiate the SDK
     *
     * @param {object} [settings] - SDK configuration settings
     *
     * @example
     * ```
     * var Sdk = require('ingresse-sdk');
     *
     * var ingresse = new Sdk({
     *   companyId: 4,
     *   ticket: {
     *     env: 'integration'
     *   }
     * });
     * ```
     */
    function IngresseSdk() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, IngresseSdk);

        this._init(settings);
    }

    /**
     * Ingresse Sdk Version
     *
     * @returns {string}
     */


    _createClass(IngresseSdk, [{
        key: '_init',


        /**
         * Initialize API's configurations
         *
         * @param {object} settings - SDK settings.
         */
        value: function _init() {
            var _this = this;

            var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var apiList = settings.apis || Object.keys(_apis.apis);
            settings.companyId = settings.companyId || 1;

            apiList.map(function (key) {
                var Api = _apis.apis[key];

                if (Api) {
                    var options = settings[key] || null;
                    _this[key] = new Api(Object.assign({ companyId: settings.companyId }, options));
                }
            });
        }
    }], [{
        key: 'version',
        value: function version() {
            return _package.version;
        }
    }]);

    return IngresseSdk;
}();

module.exports = IngresseSdk;
module.exports.default = IngresseSdk;