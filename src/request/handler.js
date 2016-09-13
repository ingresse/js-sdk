import popsicle from 'popsicle';
import {plugins} from 'popsicle';
import {basePrefix, transformResponse} from './plugins';
import {auth} from '../auth';
import status from 'popsicle-status';


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
    }

    /**
     * Create new request promise
     *
     * @param {object} options - request options.
     *
     * @returns {Promise}
     */
    request(options = {}) {
        let request = {
            headers: {
                'User-Agent': 'Ingresse JS SDK',
            },
        };

        if (this.auth) {
            Object.assign(request, this.auth.getSettings());
        }

        Object.assign(request, options);

        return popsicle(request)
            .use(transformResponse())
            .use(basePrefix(this.settings.url))
            .use(plugins.parse(['json']));
    }

    /**
     * Get resource
     *
     * @param {string} path    - Request get to endpoint e.g. /api-path/1
     * @param {object} [query] - Optional request parameters.
     *
     * @returns {Promise}
     */
    get(path, query) {
        let request = {
            method: 'GET',
            url   : path,
            query : query,
        };

        return this.request(request);
    }

    /**
     * Post resource
     *
     * @param {string} path    - Request post to endpoint e.g. /api-path
     * @param {object} data    - Data to be posted.
     * @param {object} [query] - Optional request parameters.
     *
     * @returns {Promise}
     */
    post(path, data, query) {
        let request = {
            method: 'POST',
            url   : path,
            data  : data,
            query : query,
        };

        return this.request(request);
    }

    /**
     * Put resource
     *
     * @param {string} path    - Request put to end endpoint e.g. /api-path/1
     * @param {object} data    - Data to be updated.
     * @param {object} [query] - Optional request parameters.
     *
     * @returns {Promise}
     */
    put(path, data, query) {
        let request = {
            method: 'PUT',
            url   : path,
            data  : data,
            query : query,
        };

        return this.request(request);
    }

    /**
     * Delete resource
     *
     * @param {string} path    - Request delete to endpoint e.g. /api-path/1
     * @param {object} [query] - Optional request parameters.
     *
     * @returns {Promise}
     */
    delete(path, query) {
        let request = {
            method: 'DELETE',
            url   : path,
            query : query,
        };

        return this.request(request);
    }
}

