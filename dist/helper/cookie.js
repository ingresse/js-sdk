'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Cookie
 */
var Cookie = exports.Cookie = function () {
    function Cookie() {
        _classCallCheck(this, Cookie);
    }

    _createClass(Cookie, [{
        key: 'createCookie',

        /**
         * Create the cookie.
         *
         * @param {string} cname - The cookie name.
         * @param {string|number} cvalue - The cookie value.
         * @param {number} days - The expiration days.
         *
         * @returns {String}
         */
        value: function createCookie(cname, cvalue, days) {
            var name = this.getCookie(cname);

            if (name !== '') {
                return name;
            }

            if (cname && cvalue && days) {
                this._setCookie(cname, cvalue, days);

                return this.getCookie(cname);
            }

            return '';
        }

        /**
         * Delete the cookie.
         * @param {string} cname - The cookie name.
         */

    }, {
        key: 'deleteCookie',
        value: function deleteCookie(cname) {
            var data = this.getCookie(cname);

            if (data !== '') {
                this._setCookie(cname, data, -1);
            }
        }

        /**
         * Check/Return the cookie if it's exists.
         *
         * @param {string} cname - The cookie name.
         *
         * @returns {String}
         */

    }, {
        key: 'getCookie',
        value: function getCookie(cname) {
            var data = this._getCookie(cname);

            if (data) {
                return data;
            }

            return '';
        }

        /**
         * Set the cookie.
         *
         * @param {string} cname - The cookie name.
         * @param {string|number} cvalue - The cookie value.
         * @param {number} exdays - The expiration days.
         */

    }, {
        key: '_setCookie',
        value: function _setCookie(cname, cvalue, exdays) {
            var date = new Date();
            date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
            var expires = 'expires=' + date.toUTCString();

            document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
        }

        /**
         * Get the cookie.
         *
         * @param {string} cname - The cookie name.
         *
         * @returns {String}
         */

    }, {
        key: '_getCookie',
        value: function _getCookie(cname) {
            var name = cname + '=';
            var decodedCookie = decodeURIComponent(document.cookie);
            var scookie = decodedCookie.split(';');

            for (var i = 0; i < scookie.length; i++) {
                var c = scookie[i];

                while (c.charAt(0) === ' ') {
                    c = c.substring(1);
                }

                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }

            return '';
        }
    }]);

    return Cookie;
}();