import { Authentication } from './authentication';

export class Ingresse extends Authentication {
    constructor() {
        super();
        this.authData = {};
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
        return {
            query: {
                'apikey': encodeURI(this.getApiKey()),
            }
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
    setApiKey(apiKey) {
        this.authData.apiKey = apiKey;
    }

    /**
     * @DEPRECATED
     *
     * Only compatibility purposes
     */
    setPublicKey(apiKey) {
        this.setApiKey(apiKey);
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
        return this.authData.apiKey;
    }

    /**
     * @DEPRECATED
     *
     * Only compatibility purposes
     */
    getPublicKey() {
        return this.getApiKey();
    }

    /**
     * @DEPRECATED
     *
     * Set Ingresse PrivateKey
     *
     * @param {string} privateKey - Ingresse PrivateKey
     *
     * @example
     * ingresse.api.auth.setPrivateKey('12345678901234');
     */
    setPrivateKey(privateKey) {
        this.authData.privateKey = privateKey;
    }

    /**
     * @DEPRECATED
     *
     * Get Ingresse PrivateKey
     *
     * @returns {string}
     *
     * @example
     * ingresse.api.auth.getPrivateKey();
     */
    getPrivateKey() {
        return this.authData.privateKey;
    }

    /**
     * Set Auth settings to 'Others Companies' validations
     *
     * @param {string} timestamp
     * @param {string} signature
     * @param {string} apiKey (optional)
     *
     * @example
     * ingresse.api.auth.setAuth('2018-03-14T16:10:13Z', 'signature-generated-before', 'your-app-api-key--optional');
     */
    setAuth(timestamp, signature, apiKey) {
        if (!timestamp || !signature) {
            return false;
        }

        this.authData.timestamp = timestamp;
        this.authData.signature = signature;
        this.setApiKey(apiKey || this.getApiKey());

        return true;
    }
}
