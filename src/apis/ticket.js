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

    /**
     * Create new ticket attribute
     *
     * @param {number} id        - The item ID to create attribute.
     * @param {object} attribute - The attribute data.
     * @param {object} [query]   - Optional request parameters.
     *
     * @returns Promise
     *
     * @example
     * ...
     *
     * ingresse.ticket.newAttribute(200, { key: 'min', value: '1', type: 'integer' })
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    newAttribute(id, attribute, query) {
        return this.post(`/items/${id}/attributes`, attribute, query);
    }

    /**
     * Updated ticket attribute
     *
     * @param {number} id          - The item ID to update attribute.
     * @param {number} attributeId - The attribute id to be updated.
     * @param {object} attribute   - The attribute data.
     * @param {object} [query]     - Optional request parameters.
     *
     * @returns Promise
     *
     * @example
     * ...
     *
     * ingresse.ticket.updateAttribute(200, 1, { key: 'min', value: '5', type: 'integer' })
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    updateAttribute(id, attributeId, attribute, query) {
        return this.put(`/items/${id}/attributes/${attributeId}`, attribute, query);
    }

    /**
     * Create new sale period to ticket
     *
     * @param {number} id         - The item ID to create sale period.
     * @param {object} salePeriod - The sale period data.
     * @param {object} [query]    - Optional request parameters.
     *
     * @returns Promise
     *
     * @example
     * ...
     *
     * ingresse.ticket.newSalePeriod({
     *          appCategoryId: 1,
     *          start: '2016-10-10 20:20:00',
     *          finish: '2016-11-10 20:20:00',
     *          available: 1
     *      })
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    newSalePeriod(id, salePeriod, query) {
        return this.post(`/items/${id}/sales-period`, salePeriod, query);
    }

    /**
     * Updated ticket sale period
     *
     * @param {number} id         - The item ID to update the sale period.
     * @param {object} salePeriod - The salePeriod data.
     * @param {object} [query]    - Optional request parameters.
     *
     * @returns Promise
     *
     * @example
     * ...
     *
     * ingresse.ticket.updateSalePeriod(200, {
     *          appCategoryId: 1,
     *          start: '2016-11-20 10:10:00',
     *          finish: '2016-12-20 10:10:00',
     *          available: 1
     *      })
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    updateSalePeriod(id, salePeriod, query) {
        return this.put(`/items/${id}/sales-period`, salePeriod, query);
    }
}

