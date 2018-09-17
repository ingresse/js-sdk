import {RequestHandler} from '../request/handler';

/**
 * Ingresse Transactions API
 */
export class ApiTransactions extends RequestHandler {
    /**
     * Get transactions report
     *
     * @param {string} [agregateBy] - Optional: 'status'.
     * @param {object} [query]      - Optional request parameters.
     *
     * @returns {Promise}
     */
    getReport(agregateBy = 'date', query = {}) {
        return this.get(`/transaction-report/${agregateBy}`, query);
    }

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
     * Get a transaction by ID
     *
     * @param {string} id      - Transaction ID.
     * @param {object} [query] - Optional request parameters.
     *
     * @returns {Promise}
     */
    getById(id, query = {}) {
        return this.get(`/transaction/${id}`, query);
    }

    /**
     * Get refund reasons
     *
     * @param {object} [query] - Optional request parameters.
     *
     * @returns {Promise}
     */
    getRefundReasons(query = {}) {
        return this.get('/refundReasons', query);
    }

    /**
     * Refund a transaction
     *
     * @param {string} id      - Transaction ID.
     * @param {object} [data]  - Optional transaction data.
     * @param {object} [query] - Optional request parameters.
     *
     * @returns {Promise}
     */
    refund(id, data = null, query = {}) {
        let filters = Object.assign(query, {
            method: 'refund',
        });

        return this.post(`/sale/${id}`, data, filters);
    }
}
