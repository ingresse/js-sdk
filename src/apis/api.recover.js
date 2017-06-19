import {RequestHandler} from '../request/handler';

/**
 * Ingresse Recover Password API
 */
export class ApiRecover extends RequestHandler {
    /**
     * Recover the user password
     *
     * @param {object} data    - The user data to recover password.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     */
    recoverPassword(data, query = {}) {
        return this.post('/recover/password', data, query);
    }

    /**
     * Validate the hash sent for user
     *
     * @param {object} data    - The user data to validate password.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     */
    validateHash(data, query = {}) {
        return this.post('/recover/validate-hash', data, query);
    }

    /**
     * Update the user password
     *
     * @param {object} data    - The user data to validate password.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     */
    updatePassword(data, query = {}) {
        return this.post('/recover/update-password', data, query);
    }
}
