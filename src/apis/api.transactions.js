import {RequestHandler} from '../request/handler';

/**
 * Ingresse Transactions API
 */
export class ApiTransactions extends RequestHandler {
    /**
     * Get a list of transactions
     *
     * @param {object} [query] - Optional request parameters.
     *
     * @returns {Promise}
     */
    getList(query = {}) {
        return this.get('/transactions', query);
    }

    /**
     * Get transaction by ID
     *
     * @param {string} id      - The user data to login.
     * @param {object} [query] - Optional request parameters.
     *
     * @returns {Promise}
     */
    getById(id, query = {}) {
        return this.get(`/transaction/${id}`, query);
    }
}
