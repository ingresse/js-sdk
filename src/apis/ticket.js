import {RequestHandler} from '../request/handler';
import {auth} from '../auth';


export class Ticket extends RequestHandler {
    /**
     * Ticket Api
     *
     * @param {object} [custom] - Initialize Ticket Api settings.
     */
    constructor(custom = {}) {
        let settings = {
            url : 'https://api.ingresse.com/ticket',
            auth: auth.Jwt.type(),
        };

        Object.assign(settings, custom);

        super(settings);
    }

    /**
     * Get a list of ticket items
     *
     * @param {object} [query] - Optional request parameters.
     *
     * @returns {Promise}
     */
    getItems(query) {
        return this.get('/items', query);
    }

    /**
     * Get item by ID
     *
     * @param {string|number} id - The item ID to get.
     * @param {object} [query]   - Optional request parameters.
     *
     * @returns {Promise}
     */
    getItem(id, query) {
        return this.get(`/items/${id}`, query);
    }

    /**
     * Create new Ticket item
     *
     * @param {object} data    - Data to create a new ticket item.
     * @param {object} [query] - Optional request parameters.
     *
     * @returns {Promise}
     */
    newItem(data, query) {
        return this.post('/items', data, query);
    }

    /**
     * Update a ticket item
     *
     * @param {string|number} id - The item ID to update.
     * @param {object} data      - Data to update item.
     * @param {object} [query]   - Optional request parameters.
     *
     * @returns {Promise}
     */
    updateItem(id, data, query) {
        return this.put(`/items/${id}`, data, query);
    }

    /**
     * Remove a ticket item
     *
     * @param {string|number} id - The item ID to remove.
     * @param {object} [query]   - Optional request parameters.
     *
     * @returns {Promise}
     */
    removeItem(id, query) {
        return this.delete(id, query);
    }
}

