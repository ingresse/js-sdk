/* Core Packages */
import { RequestHandler } from '../request/handler';
import { auth } from '../auth';

/**
 * Ingresse Event's Search API
 *
 * API to search for events.
 *
 * @example
 * var sdk = require('ingresse-sdk');
 * var ingresse = new Sdk();
 *
 * // You will have access to this API
 * // after instantiate the SDK.
 * var search = ingresse.eventSearch;
 */
export class EventSearch extends RequestHandler {
    /**
     * Event Search
     *
     * @param {object} [custom] - Initialize Event Search settings.
     */
    constructor(custom = {}) {
        let settings = Object.assign({
            auth    : auth.Ingresse.type(),
            resource: 'event-search',
        }, custom);

        super(settings);

        this.settings = settings;
    }

    /**
     * Search Events in a Company
     *
     * @param {object} [query] - Optional request parameters.
     * @param {number} companyId - The Company ID to search events.
     *
     * @returns {Promise}
     *
     * @example
     *
     * ingresse.eventSearch.search({
     *     from    : 'now-6h',
     *     to      : 'now+1d',              // Only get events in a day range
     *     state   : 'rj',
     *     orderBy : 'sessions.dateTime',
     *     category: 'festas-e-baladas',
     *     offset  : 21,
     * })
     * .then(function (response) {
     *     console.log(response);
     * })
     * .catch(function (error) {
     *     console.log(error);
     * });
     *
     */
    search(query = {}, companyId = 1) {
        let parameters = Object.assign({
            size: 20,
        }, query);

        return this.get(`/${companyId}`, parameters);
    }

    /**
     * Search Events by Term
     *
     * @param {string} term
     * @param {object} [query]   - Optional request parameters.
     * @param {number} companyId - The Company ID to search events.
     *
     * @returns {Promise}
     *
     * @example
     *
     * ingresse.eventSearch.searchByTerm('Event Name', {
     *     size   : 20,
     *     from   : 'now-6h',
     *     orderBy: 'sessions.dateTime',
     * })
     * .then(function (response) {
     *     console.log(response);
     * })
     * .catch(function (error) {
     *     console.log(error);
     * });
     *
     */
    searchByTerm(term = '', query = {}, companyId = 1) {
        let parameters = Object.assign({
            term: term,
        }, query);

        return this.search(parameters, companyId);
    }
}
