import {RequestHandler} from '../request/handler';
import {auth} from '../auth';

/**
 * Ingresse Ticket's API
 *
 * API to get, create, update or remove tickets.
 *
 * @example
 * var Sdk = require('ingresse-sdk');
 * var ingresse = new Sdk();
 *
 * // You will have access to this API
 * // after instantiate the Sdk.
 * var ticket = ingresse.ticket;
 */
export class Ticket extends RequestHandler {
    /**
     * Ticket Api
     *
     * @param {object} [custom={}] - Initialize Ticket Api settings.
     */
    constructor(custom = {}) {
        let settings = {
            url : 'https://api.ingresse.com/ticket',
            auth: auth.Jwt.type(),
        };

        Object.assign(settings, custom);
        super(settings);

        this.settings = settings;
    }

    /**
     * Get a list of ticket items
     * This method will return a `Promise` so you can use
     * `.then` and `.catach` methdos.
     *
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.ticket.getItems()
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    getItems(query = {}) {
        return this.get('/items', query);
    }

    /**
     * Get item by ID
     *
     * @param {string|number} id - The item ID to get.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.ticket.getItem(200)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    getItem(id, query = {}) {
        return this.get(`/items/${id}`, query);
    }

    /**
     * Create new Ticket item
     *
     * @param {object} data    - Data to create a new ticket item.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.ticket.newItem({ name: 'My Ticket Name' })
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    newItem(data = {}, query = {}) {
        return this.post('/items', data, query);
    }

    /**
     * Update a ticket item
     *
     * @param {string|number} id - The item ID to update.
     * @param {object} data      - Data to update item.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.ticket.updateItem(200, { name: 'My Updated Ticket Name' })
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    updateItem(id, data = {}, query = {}) {
        return this.put(`/items/${id}`, data, query);
    }

    /**
     * Remove a ticket item
     *
     * @param {string|number} id - The item ID to remove.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.ticket.removeItem(200)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    removeItem(id, query = {}) {
        return this.delete(id, query);
    }
}
