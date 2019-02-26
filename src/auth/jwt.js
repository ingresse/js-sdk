import {Authentication} from './authentication';


export class Jwt extends Authentication {
    constructor() {
        super();

        this.authData = '';
    }

    /**
     * Authentication type e.g. Jwt, BasicAuth
     *
     * @returns {string}
     */
    static type() {
        return 'Jwt';
    }

    /**
     * Get formatted authentication settings
     *
     * @returns {object}
     */
    getSettings() {
        return {
            headers: {
                'Authorization': `Bearer ${this.getToken()}`
            }
        };
    }

    /**
     * Set Jwt authentication token value
     *
     * @param {string} token - JWT Token value
     *
     * @example
     * ingresse.ticket.auth.setToken('12345.67890.1234');
     */
    setToken(token) {
        this.authData = token;
    }

    /**
     * Get Jwt authentication token value
     *
     * @returns {string}
     *
     * @example
     * ingresse.ticket.auth.getToken();
     */
    getToken() {
        return this.authData || '';
    }
}
