/* Core Packages */
import { RequestHandler } from '../request/handler';
import { auth } from '../auth';

/**
 * Ingresse Checkin API
 *
 * API to search for checkin.
 *
 * @example
 * var sdk = require('ingresse-sdk');
 * var ingresse = new Sdk();
 *
 * // You will have access to this API
 * // after instantiate the SDK.
 * var search = ingresse.checkin;
 */
export class Checkin extends RequestHandler {
    /**
     * Checkin Search
     *
     * @param {object} [custom] - Initialize Checkin Search settings.
     */
    constructor(custom = {}) {
        let settings = Object.assign({
            auth    : auth.Ingresse.type(),
            resource: 'checkin',
        }, custom);

        super(settings);

        this.settings = settings;
    }

    /**
     * Get Session Report
     *
     * @param {string} sessionId
     * @param {object} query
     *
     * @return {Promise}
     */
    getReport(eventId, sessionId, query = {}) {
        return this.get(`/report/${eventId}/entrance`, Object.assign({
            'session_id': sessionId,
        }, query));
    }
}
