import {auth} from './auth';
import {create as axios} from 'axios';


export class RequestHandler {
    /**
     * Initialize request handler
     *
     * @param {object} settings - Settings
     */
    constructor(settings = {}) {
        this.baseURL = settings.url;
        this._configAuth(settings.auth);
    }

    /**
     * Initialize Authentication
     * The default authentication method is JWT.
     *
     * @private
     * @param {string} method - Authentication method.
     */
    _configAuth(method) {
        switch(method) {
            default:
                this.auth = new auth.Jwt();
                break;
        }
    }

    /**
     * Get API request headers
     *
     * @returns {object}
     */
    get headers() {
        let headers = {
            'User-Agent': 'Ingresse JS SDK',
        };

        if (this.auth) {
            headers = Object.assign(headers, this.auth.headers);
        }

        return headers;
    }

    /**
     * Create new request promise
     *
     * @private
     * @param {object} options - request options.
     *
     * @return {Promise}
     */
    request(options = {}) {
        let def = {
            baseURL: this.baseURL,
            headers: this.headers,
        };

        let request = Object.assign({}, def, options);

        return axios()(request);
    }

    /**
     * Get resource
     *
     * @param {string} resource - Get endpoint e.g. /api-path/1
     * @param {object} [params] - Optional request parameters.
     *
     * @return {Promise}
     */
    get(resource, params) {
        let request = {
            method: 'GET',
            url   : resource,
            params: params,
        };

        return this.request(request);
    }

    /**
     * Post resource
     *
     * @param {string} resource - Resource endpoint e.g. /api-path
     * @param {object} data     - Data to be posted.
     * @param {object} [params] - Optional request parameters.
     *
     * @returns {Promise}
     */
    post(resource, data, params) {
        let request = {
            method: 'POST',
            url   : resource,
            data  : data,
            params: params,
        };

        return this.request(request);
    }

    /**
     * Put resource
     *
     * @param {string} resource - Resource endpoint
     * @param {object} data - Data to be updated.
     * @param {object} [params] - Optional request parameters.
     *
     * @returns {Promise}
     */
    put(resource, data, params) {
        let request = {
            method: 'PUT',
            url   : resource,
            data  : data,
            params: params,
        };

        return this.request(request);
    }

    /**
     * Delete resource
     *
     * @param {string} resource - Resource endpoint
     * @param {object} [params] - Optional request parameters.
     *
     * @returns {Promise}
     */
    delete(resource, params) {
        let request = {
            method: 'DELETE',
            url   : resource,
            params: params,
        };

        return this.request(request);
    }
}

