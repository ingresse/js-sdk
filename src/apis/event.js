import {RequestHandler} from '../request/handler';
import {auth} from '../auth';

/**
 * Ingresse Event's API
 *
 * API to get, create and update events.
 *
 * @example
 * var sdk = require('ingresse-sdk');
 * var ingresse = new Sdk();
 *
 * // You will have access to this API
 * // after instantiate the Sdk.
 * var event = ingresse.event;
 */
export class Event extends RequestHandler {
    /**
     * Event Api
     *
     * @param {object} [custom={}] - Initialize Event Api settings.
     */
    constructor(custom = {}) {
        let settings = {
            url : 'https://event.ingresse.com',
            auth: auth.Jwt.type(),
        };

        Object.assign(settings, custom);
        super(settings);

        this.settings = settings;
    }

    /**
     * Get event by ID
     *
     * @param {number} id      - The event ID to get.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.event.get(200)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    get(id, query = {}) {
        return this.get(`/${id}`, query);
    }

    /**
     * Create new Event
     *
     * @param {object} data    - Data to create a new event.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.event.new({ name: 'My Event Name' })
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    new(data = {}, query = {}) {
        return this.post('/', data, query);
    }

    /**
     * Update an Event
     *
     * @param {string|number} id - The Event ID to update.
     * @param {object} data      - Data to update Event.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.event.update(200, { name: 'My Updated Event Name' })
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    update(id, data = {}, query = {}) {
        return this.put(`/${id}`, data, query);
    }

    /**
     * Update an Event Poster
     *
     * @param {string|number} id - The Event ID to update.
     * @param {object} data      - Data to update event poster.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.event.update(12, {
     *          poster: {
     *              format: 'base64',
     *              image : 'data:image/jpeg;base64 8aAVdagg87h87t8q...',
     *          }
     *     })
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    updatePoster(id, data = {}, query = {}) {
        return this.put(`/${id}/poster`, data, query);
    }

    /**
     * Check if slug is available to use in an Event.
     *
     * This method will return a `Promise` so you can use
     * `.then` and `.catch` methods.
     *
     * @param {string} id      - The slug ID to check.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.ticket.checkSlug('my-event-slug')
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    checkSlug(id, query = {}) {
        return this.get('/slugs', id, query);
    }

    /**
     * Get all Events Categories
     *
     * This method will return a `Promise` so you can use
     * `.then` and `.catch` methods.
     *
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.ticket.categories()
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    getCategories(query = {}) {
        return this.get('/categories', query);
    }

    /**
     * Create new Event Category
     *
     * @param {string} id      - The Category ID to get.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.event.getCategory(12)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    getCategory(id, query = {}) {
        return this.get(`/categories/${id}`, id, query);
    }

    /**
     * Remove an Event Session
     *
     * @param {number} eventId   - The Event ID to remove session.
     * @param {number} sessionId - The Session ID to remove.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.ticket.removeSession(123)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    removeSession(eventId, sessionId, query = {}) {
        return this.delete(`/${eventId}/sessions/${sessionId}`, query);
    }
}
