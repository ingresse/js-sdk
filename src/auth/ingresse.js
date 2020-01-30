import { Authentication } from './authentication';

export class Ingresse extends Authentication {
    constructor() {
        super();

        this.authData = {
            apiKey   : '',
            jwt      : '',
            userToken: '',
        };
    }

    /**
     * Authentication type e.g. Jwt, BasicAuth, Ingresse
     *
     * @returns {string}
     */
    static type() {
        return 'Ingresse';
    }

    /**
     * Get formatted authentication settings
     *
     * @returns {object}
     */
    getSettings() {
        const apikey    = encodeURI(this.getApiKey());
        const jwt       = encodeURI(this.getJWT());
        const usertoken = encodeURI(this.getToken());
        const headers   = (!jwt ? {} : {
            'Authorization': `Bearer ${jwt}`,
        });
        const query     = {
            apikey,
            usertoken,
        };

        return {
            headers: headers,
            query  : query,
        };
    }

    /**
     * Set Ingresse ApiKey
     *
     * @param {string} apiKey - Ingresse ApiKey
     *
     * @example
     * ingresse.api.auth.setApiKey('12345678901234');
     */
    setApiKey(apiKey = '') {
        this.authData.apiKey = apiKey;
    }

    /**
     * Get Ingresse ApiKey
     *
     * @returns {string}
     *
     * @example
     * ingresse.api.auth.getApiKey();
     */
    getApiKey() {
        return this.authData.apiKey || '';
    }

    /**
     * Set authentication token value
     *
     * @param {string} token - Token value
     *
     * @example
     * ingresse.api.auth.setToken('12345-31t4v1d431t4v1d4d3c40....');
     */
    setToken(token = '') {
        this.authData.userToken = token;
    }

    /**
     * Get authentication token value
     *
     * @returns {string}
     *
     * @example
     * const userToken = ingresse.api.auth.getToken();
     */
    getToken() {
        return this.authData.userToken || '';
    }

    /**
     * Set authentication JWT value
     *
     * @param {string} jwt - JWT value
     *
     * @example
     * ingresse.api.auth.setJWT('...');
     */
    setJWT(jwt = '') {
        this.authData.jwt = jwt;
    }

    /**
     * Get authentication JWT value
     *
     * @returns {string}
     *
     * @example
     * const jwt = ingresse.api.auth.getJWT();
     */
    getJWT() {
        return (this.authData.jwt || '');
    }
}
