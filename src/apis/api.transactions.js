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
     * Get Passkeys Report
     *
     * @param {number} eventId - Event ID.
     * @param {object} [query] - Optional request parameters.
     *
     * @return {Promise}
     *
     * @example
     * ...
     * const ing = new Sdk();
     *
     * ing.api.getPasskeysReport(21232, { status: 'pending' })
     * .then((response) => {
     *     console.log(response);
     * })
     * .catch((error) => {
     *     console.log(error);
     * });
     */
    getPasskeysReport(eventId, query = {}) {
        let _query = Object.assign({
            event : eventId,
            status: 'approved',
        }, query);

        return this.get('/transaction-report/passkey-ticket', _query);
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
     * Get decision reason
     *
     * @param {object} [query] - Require parameters.
     *
     * @returns {Promise}
     */
    getDecisionReasons(query = {}) {
        return this.get('/decisionReasons', query);
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
        return this.post(`/shop/${id}/refund`, data, query);
    }

    /**
     * Capture an authorized transaction
     *
     * @param {string} id      - Transaction ID.
     * @param {object} [query] - Optional request parameters.
     *
     * @returns {Promise}
     */
    capture(id, query = {}) {
        return this.post(`/shop/${id}/capture`, null, query);
    }

    /**
     * Cancel a pending transaction
     *
     * @param {string} id      - Transaction ID.
     * @param {object} [query] - Optional request parameters.
     *
     * @return {Promise}
     */
    cancel(id, query = {}) {
        return this.post(`/shop/${id}/cancel`, null, query);
    }

    /**
     * Include chargeback transaction
     *
     * @param {string} id      - Transaction ID.
     * @param {string} type    - Required.
     * @param {string} [body]  - Optional.
     * @param {object} [query] - Optional request parameters.
     *
     * @return {Promise}
     */
    chargeback(id,  type = 'pre-chargeback', body = {}, query = {}) {
        const _body = Object.assign({
            type: type,
        }, body);

        return this.post(`/shop/${id}/chargeback`, _body, query);
    }
}
