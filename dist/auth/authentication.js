"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Authentication = exports.Authentication = function () {
    function Authentication() {
        _classCallCheck(this, Authentication);
    }

    _createClass(Authentication, [{
        key: "authData",

        /**
         * Set authentication data
         *
         * @param {object|string} data - Authentication data.
         */
        set: function set(data) {
            this._authData = data;
        }

        /**
         * Get authentication data
         *
         * @returns {object|string}
         */
        ,
        get: function get() {
            return this._authData;
        }
    }]);

    return Authentication;
}();