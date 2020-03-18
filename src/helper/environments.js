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
const getURL = function (resource = 'api', env = '', protocol = 'https') {
    if (env && env.includes('http')) {
        return env;
    }

    return `${protocol}://${env ? env.concat('-') : ''}${resource}.ingresse.com`;
};

/* Exporting */
export const environments = {
    getURL: getURL,
};
