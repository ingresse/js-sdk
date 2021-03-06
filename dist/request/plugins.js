'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
* Rquest middleware to format url with a base URL
*
* @params {string} base - Base URL for all requests.
* @returns {function}
*/
var basePrefix = exports.basePrefix = function basePrefix() {
    var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    return function (request, next) {
        var path = request.url.replace(/^\//, '');
        base = base.replace(/\/$/, '');

        request.url = base + '/' + path;

        return next();
    };
};

/**
 * Request middleware to handle response from api
 * and decide based on the status code if the
 * request was a success or an error
 *
 * @params {number} [lower=200]  - Lower status code number.
 * @params {number} [higher=299] - Higher status code number.
 * @returns {function}
 */
var transformResponse = exports.transformResponse = function transformResponse() {
    var lower = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
    var higher = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 299;

    return function (request, next) {
        return next().then(function (response) {
            if (response.status >= lower && response.status <= higher) {

                return response.body;
            }

            var error = request.error('', 'EINVALIDSTATUS');
            error.body = response.body;

            throw error.body;
        });
    };
};