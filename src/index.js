import {apis} from './apis';


class IngresseSdk {
    /**
     * Initialize Ingresse API's SDK
     *
     * @param {object} [settings] - SDK configuration settings
     */
    constructor(settings = {}) {
        this._init(settings);
    }

    /**
     * Sdk Version
     *
     * @return {string}
     */
    static version() {
        return '{{version}}';
    }

    /**
     * Initialize API's configurations
     *
     * @param {object} settings - SDK settings.
     */
    _init(settings = {}) {
        let list = settings.apis || Object.keys(apis);

        list.map((key) => {
            let Api = apis[key];

            if (Api) {
                let options = settings[key] || null;
                this[key]   = new Api(options);
            }
        });
    }
}

module.exports = IngresseSdk
module.exports.default = IngresseSdk

