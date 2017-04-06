import {RequestHandler} from '../request/handler';

/**
 * Ingresse User API
 */
export class ApiUser extends RequestHandler {
    /**
     * Get user
     *
     * @param {string|number} id - The user ID to get.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     */
    getUser(id, query = {}) {
        return this.get(`/user/${id}`, query);
    }

    /**
     * Get user picture
     *
     * @param {string|number} id - The user ID to get.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     */
    getUserPicture(id, query = {}) {
        return this.get(`/user/${id}/picture`, query);
    }
}
