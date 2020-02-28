import {RequestHandler} from '../request/handler';

/**
 * Ingresse Coupon API
 */
export class ApiCoupon extends RequestHandler {

    /**
     * Get a list of coupon
     *
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     */
    getCoupons(query = {}) {
        return this.get('/coupons', query);
    }

    /**
     * Get a coupon
     *
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     */
    getCoupon(id, query = {}) {
        return this.get(`/coupons/${id}`, query);
    }

    /**
     * Create the coupon
     *
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     */
    createCoupon(body, query = {}) {
        return this.post('/coupons', body, query);
    }

    /**
     * Update the coupon
     *
     * @param {string} id - Transaction ID.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     */
    updateCoupon(id, body, query = {}) {
        return this.put(`/coupons/${id}`, body, query);
    }

    /**
     * Delete the coupon
     *
     * @param {string} id - Transaction ID.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     */
    deleteCoupon(id, query = {}) {
        return this.delete(`/coupons/${id}`, query);
    }
}
