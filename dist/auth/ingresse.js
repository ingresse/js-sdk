'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ingresse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _authentication = require('./authentication');

var _cryptoJs = require('crypto-js');

var CryptoJS = _interopRequireWildcard(_cryptoJs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ingresse = exports.Ingresse = function (_Authentication) {
    _inherits(Ingresse, _Authentication);

    function Ingresse() {
        _classCallCheck(this, Ingresse);

        var _this = _possibleConstructorReturn(this, (Ingresse.__proto__ || Object.getPrototypeOf(Ingresse)).call(this));

        _this.authData = {};
        return _this;
    }

    /**
     * Authentication type e.g. Jwt, BasicAuth, Ingresse
     *
     * @returns {string}
     */


    _createClass(Ingresse, [{
        key: 'getSettings',


        /**
         * Get formatted authentication settings
         *
         * @returns {object}
         */
        value: function getSettings() {
            var timestamp = this._getTimestamp();

            return {
                query: {
                    'publickey': encodeURI(this.getPublicKey()),
                    'signature': encodeURI(this._getSignature(timestamp)),
                    'timestamp': timestamp
                }
            };
        }

        /**
         * Set Ingresse PublicKey
         *
         * @param {string} publicKey - Ingresse PublicKey
         *
         * @example
         * ingresse.api.auth.setPublicKey('12345678901234');
         */

    }, {
        key: 'setPublicKey',
        value: function setPublicKey(publicKey) {
            this.authData.publicKey = publicKey;
        }

        /**
         * Get Ingresse PublicKey
         *
         * @returns {string}
         *
         * @example
         * ingresse.api.auth.getPublicKey();
         */

    }, {
        key: 'getPublicKey',
        value: function getPublicKey() {
            return this.authData.publicKey;
        }

        /**
         * Set Ingresse PrivateKey
         *
         * @param {string} privateKey - Ingresse PrivateKey
         *
         * @example
         * ingresse.api.auth.setPrivateKey('12345678901234');
         */

    }, {
        key: 'setPrivateKey',
        value: function setPrivateKey(privateKey) {
            this.authData.privateKey = privateKey;
        }

        /**
         * Get Ingresse PrivateKey
         *
         * @returns {string}
         *
         * @example
         * ingresse.api.auth.getPrivateKey();
         */

    }, {
        key: 'getPrivateKey',
        value: function getPrivateKey() {
            return this.authData.privateKey;
        }

        /**
         * Set Auth settings to 'Others Companies' validations
         *
         * @param {string} timestamp
         * @param {string} signature
         * @param {string} publicKey (optional)
         *
         * @example
         * ingresse.api.auth.setAuth('2018-03-14T16:10:13Z', 'signature-generated-before', 'your-app-public-key--optional');
         */

    }, {
        key: 'setAuth',
        value: function setAuth(timestamp, signature, publicKey) {
            if (!timestamp || !signature) {
                return false;
            }

            this.authData.timestamp = timestamp;
            this.authData.signature = signature;
            this.setPublicKey(publicKey || this.getPublicKey());

            return true;
        }

        /**
         * Get timestamp
         *
         * @private
         * @returns {string}
         */

    }, {
        key: '_getTimestamp',
        value: function _getTimestamp() {
            return this.authData.timestamp || new Date().toJSON().replace(/\.\d+/, '');
        }

        /**
         * Get Ingresse Signature
         *
         * @private
         * @returns {string}
         */

    }, {
        key: '_getSignature',
        value: function _getSignature(timestamp) {
            var sha1 = CryptoJS.HmacSHA1(this.getPublicKey() + timestamp, this.getPrivateKey());
            return sha1.toString(CryptoJS.enc.Base64);
        }
    }], [{
        key: 'type',
        value: function type() {
            return 'Ingresse';
        }
    }]);

    return Ingresse;
}(_authentication.Authentication);