'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Jwt = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _authentication = require('./authentication');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Jwt = exports.Jwt = function (_Authentication) {
    _inherits(Jwt, _Authentication);

    function Jwt() {
        _classCallCheck(this, Jwt);

        return _possibleConstructorReturn(this, (Jwt.__proto__ || Object.getPrototypeOf(Jwt)).call(this));
    }

    /**
     * Type of the Authentication
     *
     * @returns {string}
     */


    _createClass(Jwt, [{
        key: 'headers',


        /**
         * Get formatted authentication headers
         *
         * @returns {object}
         */
        get: function get() {
            var headers = {
                'Authorization': 'Bearer ' + this.token
            };

            return headers;
        }

        /**
         * Set authentication token value
         *
         * @param {string} - JWT Token value
         */

    }, {
        key: 'token',
        set: function set(token) {
            this.authData = token;
        }

        /**
         * Get authentication token value
         *
         * @returns {string}
         */
        ,
        get: function get() {
            return this.authData;
        }
    }], [{
        key: 'type',
        value: function type() {
            return 'jwt';
        }
    }]);

    return Jwt;
}(_authentication.Authentication);