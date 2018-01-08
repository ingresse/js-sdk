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
     * Get a list of ticket types
     * This method will return a `Promise` so you can use
     * `.then` and `.catch` methods.
     *
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.ticket.getTypes()
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    getTypes(query = {}) {
        return this.get('/types', query);
    }

    /**
     * Get a list of ticket items
     * This method will return a `Promise` so you can use
     * `.then` and `.catch` methdos.
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
        return this.put(`/items/${id}`, query);
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
     * @param {object} attribute   - The attribute data.
     * @param {object} [query]     - Optional request parameters.
     *
     * @returns Promise
     *
     * @example
     * ...
     *
     * ingresse.ticket.updateAttribute(200, { key: 'minimum', value: 5, type: 'integer' })
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    updateAttribute(id, attribute, query) {
        return this.put(`/items/${id}/attributes`, attribute, query);
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

    /**
     * Create new values to ticket
     *
     * @param {number} id      - The item ID to create values.
     * @param {object} values  - The values data.
     * @param {object} [query] - Optional request parameters.
     *
     * @returns Promise
     *
     * @example
     * ...
     *
     * ingresse.ticket.newValues({
     *          price: 10000,
     *          feeSale: 500,
     *          feeProducer: 500
     *      })
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    newValues(id, values, query) {
        return this.post(`/items/${id}/values`, values, query);
    }

    /**
     * Updated ticket values
     *
     * @param {number} id      - The item ID to update values.
     * @param {object} values  - The values data.
     * @param {object} [query] - Optional request parameters.
     *
     * @returns Promise
     *
     * @example
     * ...
     *
     * ingresse.ticket.updateValues(200, {
     *          price: 20000,
     *          feeSale: 1000,
     *          feeProducer: 1000
     *      })
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    updateValues(id, values, query) {
        return this.put(`/items/${id}/values`, values, query);
    }

    /**
     * Get a list of triggers
     * This method will return a `Promise` so you can use
     * `.then` and `.catch` methods.
     *
     * @param {number} id      - The item ID to get the triggers.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.ticket.getTriggers(10000040)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    getTriggers(id, query = {}) {
        return this.get(`/items/${id}/triggers`, query);
    }

    /**
     * Get the tax calculated
     *
     * @param {Object} query - The request parameters.
     * @param {Number} [query.producerId] - The producer id.
     * @param {Number} [query.eventId] - The event id.
     * @param {Number} [query.price] - The ticket's price in cents.
     * @param {Number} [query.taxDistribution] - The tax payed by customer (in percent).
     * @param {Number} [query.tax] - The custom tax in cents.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * var query = {
     *  eventId: 123, // must be informed one eventId or producerId.
     *  taxDistribution: 50
     * };
     *
     * ingresse.ticket.getTax(query)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    getTax(query = {}) {
        return this.get('/tax', query);
    }
}

