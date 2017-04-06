import {RequestHandler} from '../request/handler';

/**
 * Ingresse Auth API
 */
export class ApiAuth extends RequestHandler {
    /**
     * Login User
     *
     * @param {object} data    - The user data to login.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     */
    login(data, query = {}) {
        return this.post('/login', data, query);
    }

    /**
     * Login User with Facebook
     *
     * @param {object} data    - The user data to login.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     */
    fbLogin(data, query = {}) {
        return this.post('/login/facebook', data, query);
    }
}
