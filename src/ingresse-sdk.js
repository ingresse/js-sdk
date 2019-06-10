import {apis} from './apis';
import {version} from '../package.json';


/**
 * Ingresse JavaScript SDK
 */
class IngresseSdk {
    /**
     * Instantiate the SDK
     *
     * @param {object} [settings] - SDK configuration settings
     *
     * @example
     * ```
     * var Sdk = require('ingresse-sdk');
     *
     * var ingresse = new Sdk({
     *   companyId: 4,
     *   ticket: {
     *     env: 'integration'
     *   }
     * });
     * ```
     */
    constructor(settings = {}) {
        this._init(settings);
    }

    /**
     * Ingresse Sdk Version
     *
     * @returns {string}
     */
    static version() {
        return version;
    }

    /**
     * Initialize API's configurations
     *
     * @param {object} settings - SDK settings.
     */
    _init(settings = {}) {
        let apiList = settings.apis || Object.keys(apis);
        settings.companyId = (settings.companyId || 1);

        apiList.map((key) => {
            let Api = apis[key];

            if (Api) {
                let options = settings[key] || null;
                this[key]   = new Api(Object.assign({ companyId: settings.companyId }, options));
            }
        });
    }
}

module.exports = IngresseSdk
module.exports.default = IngresseSdk

