import {RequestHandler} from '../requestHandler';


export class Ticket extends RequestHandler {
    /**
     * Ticket api
     *
     * @param {object} [settings] - Initialize Ticket api settings.
     */
    constructor(settings = {}) {
        let def = {
            url : 'https://api.ingresse.com/ticket',
            auth: 'jwt'
        };

        let _settigns = Object.assign({}, def, settings);

        super(_settigns);
    }

    /**
     * Get a list of ticket items
     *
     * @param {object} [params]- Optional request parameters.
     *
     * @returns {Promise}
     */
    getItems(params) {
        return this.get('/items', params);
    }

    /**
     * Get item by ID
     *
     * @param {string|number} id - The item ID to get.
     * @param {object} [params] - Optional request parameters.
     *
     * @returns {Promise}
     */
    getItem(id, params) {
        return this.get(`/items/${id}`, params);
    }

    /**
     * Create new Ticket item
     *
     * @param {object} data - Data to create a new ticket item.
     * @param {object} [params] - Optional request parameters.
     *
     * @returns {Promise}
     */
    newItem(data, params) {
        return this.post('/items', data, params);
    }

    /**
     * Update a ticket item
     *
     * @param {string|number} id - The item ID to update.
     * @param {object} data - Data to update item.
     * @param {object} [params] - Optional request parameters.
     *
     * @returns {Promise}
     */
    updateItem(id, data, params) {
        return this.put(`/items/${id}`, data, params);
    }

    /**
     * Remove a ticket item
     *
     * @param {string|number} id - The item ID to remove.
     * @param {object} [params] - Optional request parameters.
     *
     * @returns {Promise}
     */
    removeItem(id, params) {
        return this.delete(id, params);
    }
}

