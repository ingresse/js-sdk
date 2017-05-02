import {Authentication} from './authentication';
import * as CryptoJS from 'crypto-js';


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
        const timestamp = this._getTimestamp();

        return {
            query: {
                'publickey': encodeURI(this.getPublicKey()),
                'signature': encodeURI(this._getSignature(timestamp)),
                'timestamp': timestamp,
            }
        };
    }

    /**
     * Set Ingresse PublicKey
     *
     * @param {string} publicKey - Ingresse PublicKey
     *
     * @example
     * ingresse.api.auth.setPublicKey('12345678901234');
     */
    setPublicKey(publicKey) {
        this.authData.publicKey = publicKey;
    }

    /**
     * Get Ingresse PublicKey
     *
     * @returns {string}
     *
     * @example
     * ingresse.api.auth.getPublicKey();
     */
    getPublicKey() {
        return this.authData.publicKey;
    }

    /**
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
     * Get timestamp
     *
     * @private
     * @returns {string}
     */
    _getTimestamp() {
        return new Date().toJSON().replace(/\.\d+/, '');
    }

    /**
     * Get Ingresse Signature
     *
     * @private
     * @returns {string}
     */
    _getSignature(timestamp) {
        const sha1 = CryptoJS.HmacSHA1(this.getPublicKey() + timestamp, this.getPrivateKey());
        return sha1.toString(CryptoJS.enc.Base64);
    }
}
