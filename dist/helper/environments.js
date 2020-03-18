'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Environments Helper
 */

/**
 * Get Environment URL
 *
 * @param {string} resource - Environment Resource: 'api', 'ticket', 'event', 'checkin';
 * @param {string} env      - Environment Type    : 'stg', 'hmla', 'hmlb', 'sandbox', 'integration';
 * @param {string} protocol - Web Protocol        : 'http', 'https';
 *
 * @returns {string} environment URL
 */
var getURL = function getURL() {
    var resource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'api';
    var env = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var protocol = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'https';

    if (env && env.includes('http')) {
        return env;
    }

    return protocol + '://' + (env ? env.concat('-') : '') + resource + '.ingresse.com';
};

/* Exporting */
var environments = exports.environments = {
    getURL: getURL
};