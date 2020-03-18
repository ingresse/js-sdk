/* Core Packages */
import popsicle from 'popsicle';
import { plugins } from 'popsicle';

import { basePrefix, transformResponse } from './plugins';
import { auth } from '../auth';
import { deepMerge } from '../helper';
import { environments } from '../helper/environments';

/**
 * Base request handler for all the API's
 * with `get`, `post`, `put` and `delete` methods
 */
export class RequestHandler {
    /**
     * Initialize request handler
     *
     * @param {object} settings - Settings
     */
    constructor(settings = {}) {
        this.settings = settings;

        if (auth[settings.auth]) {
            this.auth = new auth[settings.auth]();
        }

        if (!this.settings.url) {
            this.setEnv(this.settings.env || this.settings.host);
        }
    }

    /**
     * Set API url
     *
     * @param {string} url - Base URL, example: 'https://hml-api.ingresse.com'
     *
     * @example
     * var sdk = require('ingresse-sdk');
     * var ingresse = new Sdk();
     *
     * // You will have access to this API
     * // after instantiate the Sdk.
     * var api = ingresse.api;
     *
     * // Can set an specific URL to this API
     * api.setUrl('https://hml-api.ingresse.com');
     *
     */
    setUrl(url) {
        this.settings.url = url;
    }

    /**
     * Set Environment
     *
     * @param {string} env - Environment Type: 'stg', 'hmla', 'hmlb', 'sandbox', 'integration';
     *
     * @example
     * var sdk = require('ingresse-sdk');
     * var ingresse = new Sdk();
     *
     * // You will have access to this API
     * // after instantiate the Sdk.
     * var api = ingresse.api;
     *
     * // Can set an specific Environment to this API
     * api.setEnv('integration');
     *
     */
    setEnv(env) {
        this.setUrl(
            environments.getURL(
                this.settings.resource,
                env,
                this.settings.protocol,
            )
        );
    }

    /**
     * Create new request promise
     *
     * @param {object} options - request options.
     *
     * @returns {Promise}
     */
    request(options = {}) {
        let request = {};

        request = deepMerge(request, options);

        if (this.auth) {
            request = deepMerge(request, this.auth.getSettings());
        }

        if (!this.settings.url) {
            this.setEnv(this.settings.env || this.settings.host);
        }

        return popsicle(request)
            .use(transformResponse())
            .use(basePrefix(this.settings.url))
            .use(plugins.parse(['json']));
    }

    /**
     * Get resource
     *
     * @param {string} path      - Request get to endpoint e.g. /api-path/1
     * @param {object} [query]   - Optional request parameters.
     * @param {object} [headers] - Optional request headers.
     *
     * @returns {Promise}
     */
    get(path, query, headers = {}) {
        let request = {
            method : 'GET',
            url    : path,
            query  : query,
            headers: headers,
        };

        return this.request(request);
    }

    /**
     * Post resource
     *
     * @param {string} path      - Request post to endpoint e.g. /api-path
     * @param {object} data      - Data to be posted.
     * @param {object} [query]   - Optional request parameters.
     * @param {object} [headers] - Optional request headers.
     *
     * @returns {Promise}
     */
    post(path, data, query, headers = {}) {
        let request = {
            method : 'POST',
            url    : path,
            body   : data,
            query  : query,
            headers: headers,
        };

        return this.request(request);
    }

    /**
     * Put resource
     *
     * @param {string} path      - Request put to end endpoint e.g. /api-path/1
     * @param {object} data      - Data to be updated.
     * @param {object} [query]   - Optional request parameters.
     * @param {object} [headers] - Optional request headers.
     *
     * @returns {Promise}
     */
    put(path, data, query, headers = {}) {
        let request = {
            method : 'PUT',
            url    : path,
            body   : data,
            query  : query,
            headers: headers,
        };

        return this.request(request);
    }

    /**
     * Delete resource
     *
     * @param {string} path      - Request delete to endpoint e.g. /api-path/1
     * @param {object} [query]   - Optional request parameters.
     * @param {object} [data]    - Data to be deleted.
     * @param {object} [headers] - Optional request headers.
     *
     * @returns {Promise}
     */
    delete(path, query, data, headers = {}) {
        let request = {
            method : 'DELETE',
            url    : path,
            body   : data,
            query  : query,
            headers: headers,
        };

        return this.request(request);
    }

    /**
     * Upload files
     *
     * @param {string} path      - Request post to endpoint e.g. /api-path
     * @param {object} formData  - Data to be posted.
     * @param {object} [query]   - Optional request parameters.
     * @param {object} [headers] - Optional request headers.
     *
     * @returns {Promise}
     */
    upload(path, formData = {}, query = {}, headers = {}) {
        let request = {
            method : 'POST',
            url    : path,
            query  : query,
            body   : formData,
            headers: Object.assign({
                'Accept'      : '*/*',
                'Content-Type': undefined,
            }, headers),
        };

        return this.request(request);
    }
}
