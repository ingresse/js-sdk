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
     * Login User by Company
     *
     * @param {object} data    - The user data to login.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     */
    companyLogin(data, query = {}) {
        return this.post('/company-login', data, query);
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

    /**
     * Register a new user.
     *
     * @param {object} [data]  - The form with user data for post.
     * @param {object} [query] - Optional request parameters.
     *
     * @returns {Promise}
     */
    register(data = {}, query = {}) {
        return this.post('/user', data, query);
    }

    /**
     * Renew User JWT
     *
     * @param {object} userToken - Current user token.
     * @param {object} [query]   - Optional request parameters.
     *
     * @returns {Promise}
     */
    renewJWT(userToken, query = {}) {
        const _query = Object.assign({}, query, {
            usertoken: userToken,
        });

        return this.get('/login/renew-token', _query);
    }

    /**
     * Password Strength
     *
     * @param {string} password - Required.
     * @param {object} [query]  - Optional request parameters.
     *
     * @returns {Promise}
     */
    passwordStrength(password, query = {}) {
        return this.post('/password', { password: password }, query);
    }

    /**
     * Two Factor Authentication.
     *
     * @param {object} otp     - Optional request parameters.
     * @param {object} device  - User device.
     * @param {object} [query] - Optional request parameters.
     * @param {object} headers - Optional request parameters.
     *
     * @returns {Promise}
     */
    twoFactor(device, otp, query, headers = {}) {
        return this.post('/two-step', query, Object.assign({}, headers, {
            'X-INGRESSE-DEVICE': device,
        }, !otp ? {} : {
            'X-INGRESSE-OTP': otp,
        }));
    }
}
