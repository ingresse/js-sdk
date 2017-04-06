import {RequestHandler} from '../request/handler';

/**
 * Ingresse Event API
 */
export class ApiEvents extends RequestHandler {
    /**
     * Get event
     *
     * @param {string|number} id - The event ID to get.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     */
    getEvent(id, query = {}) {
        return this.get(`/event/${id}`, query);
    }

    /**
     * Get event crew
     *
     * @param {string|number} id - The event ID to get.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     */
    getEventCrew(id, query = {}) {
        return this.get(`/event/${id}/crew`, query);
    }

    /**
     * Get event attributes
     *
     * @param {string|number} id - The event ID to get.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     */
    getEventAttributes(id, query = {}) {
        return this.get(`/event/${id}/attributes`, query);
    }

    /**
     * Featured events
     *
     * @param {string|number} id - The event ID to get.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     */
    getFeatured(id, query = {}) {
        return this.get(`/featured/${id}`, query);
    }
}

