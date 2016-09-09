import {Authentication} from './authentication';


export class Jwt extends Authentication {
    constructor() {
        super();
    }

    /**
     * Type of the Authentication
     *
     * @returns {string}
     */
    static type() {
        return 'jwt';
    }

    /**
     * Get formatted authentication headers
     *
     * @returns {object}
     */
    get headers() {
        let headers = {
            'Authorization': `Bearer ${this.token}`
        };

        return headers;
    }

    /**
     * Set authentication token value
     *
     * @param {string} - JWT Token value
     */
    set token(token) {
        this.authData = token;
    }

    /**
     * Get authentication token value
     *
     * @returns {string}
     */
    get token() {
        return this.authData;
    }
}

