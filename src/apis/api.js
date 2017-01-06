import {RequestHandler} from '../request/handler';
import {ApiEvents} from './api.event.js';
import {auth} from '../auth';

/**
 * Ingresse API
 *
 * @example
 * var Sdk = require('ingresse-sdk');
 * var ingresse = new Sdk();
 *
 * // You will have access to this API
 * // after instantiate the Sdk.
 * var api = ingresse.api;
 */
export class Api extends (RequestHandler, ApiEvents) {
    /**
     * Ingresse Api
     *
     * @param {object} [custom={}] - Initialize Ticket Api settings.
     */
    constructor(custom = {}) {
        let settings = {
            url : 'https://api.ingresse.com',
            auth: auth.Ingresse.type(),
        };

        Object.assign(settings, custom);
        super(settings);

        this.settings = settings;
    }

    /**
     * Get user transfers in the elasticsearch microservice
     *
     * @param {string|number} id - The item ID to get.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     */
    getUserTransfer(id, query = {}) {
        return this.get(`/transfer/user/${id}`, query);
    }
}
