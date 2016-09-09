'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _apis = require('./apis');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IngresseSdk = function () {
    /**
     * Initialize Ingresse API's SDK
     *
     * @param {object} [settings] - SDK configuration settings
     */
    function IngresseSdk() {
        var settings = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, IngresseSdk);

        this._init(settings);
    }

    /**
     * Sdk Version
     *
     * @return {string}
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

            var settings = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            var list = settings.apis || Object.keys(_apis.apis);

            list.map(function (key) {
                var Api = _apis.apis[key];

                if (Api) {
                    var options = settings[key] || null;
                    _this[key] = new Api(options);
                }
            });
        }
    }], [{
        key: 'version',
        value: function version() {
            return '{{version}}';
        }
    }]);

    return IngresseSdk;
}();

module.exports = IngresseSdk;
module.exports.default = IngresseSdk;