import {RequestHandler} from '../request/handler';

/**
 * Ingresse Event API
 */
export class ApiEvents extends RequestHandler {
    /**
     * Identify event
     *
     * @param {string} link       - Link/Slug or id.
     * @param {string} fields     - Event fields to get.
     * @param {object} [queryOpt] - Optional request parameters.
     * @returns {Promise}
     */
    identifyEvent(link, fields, queryOpt) {
        let query = queryOpt || {
            link  : link,
            fields: fields,
            method: 'identify',
        };

        return this.get('/event', query);
    }

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
     * Get event tickets
     *
     * @param {string|number} id - The event ID to get.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     */
    getEventTickets(id, query = {}) {
        return this.get(`/event/${id}/tickets`, query);
    }

    /**
     * Get event session tickets
     *
     * @param {string|number} id        - The event ID to get.
     * @param {string|number} sessionId - The event session ID to get.
     * @param {object} [query]          - Optional request parameters.
     * @returns {Promise}
     */
    getEventSessionTickets(id, sessionId, query = {}) {
        return this.get(`/event/${id}/session/${sessionId}/tickets`, query);
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
     * @param {object} [query] - Optional request parameters.
     *
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.ApiEvents.getFeatured({ method: 'banner', state: 'sp' })
     * .then(function (response) {
     *     console.log(response);
     * })
     * .catch(function (error) {
     *     console.log(error);
     * });
     */
    getFeatured(query = {}) {
        return this.get('/featured', query);
    }

    /**
     * Get the events type
     *
     * @returns {Promise}
     */
    getEventTypes() {
        return this.get('/home/sections');
    }

    /**
     * Get the search event categorie.
     *
     * @param {string} category - The search category to get.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     */
    getEventCategories(category, query = {}) {
        return this.get(`/${category}`, query);
    }

    /**
     * Request the passkeys report processment.
     *
     * Will request to API generate the Passkeys Report
     * and API will send an email to the user when the report
     * is available, with the link to download file.
     *
     * @param {number} eventId - The event ID.
     * @param {object} data    - Report requisition details.
     * @param {object} [query] - Optional request parameters.
     *
     * @returns {Promise}
     *
     * @example
     * ...
     * const ing = new Sdk();
     *
     * ing.api.requestPasskeysReport(21232, {
     *     "type":  "passkey",
     *     "format": "xlsx",
     *     "filters": [{
     *         "status": "approved"
     *     }]
     * })
     * .then((response) => {
     *     console.log(response);
     * })
     * .catch((error) => {
     *     console.log(error);
     * });
     */
    requestPasskeysReport(eventId, data = {}, query = {}) {
        let _data = Object.assign({
            type   : 'passkey',
            format : 'csv',
            filters: [
                {
                    status: 'approved',
                },
            ],
        }, data);

        return this.post(`/event/${eventId}/export`, _data, query);
    }

    /**
     * Request export list processment.
     *
     * Will request to API generate an List
     * and API will send an email to the user when the list
     * is available, with the link to download file.
     *
     * @param {number} eventId - The event ID.
     * @param {object} data    - Report requisition details.
     * @param {object} [query] - Optional request parameters.
     * @param {array}  [query.filters]
     * @param {string} [query.format] - 'csv' or 'xlsx'. Default: 'csv'.
     * @param {string} [query.type]   - 'guestlist', 'passkey' or 'transactions'. Default: 'transactions'
     *
     * @returns {Promise}
     *
     * @example
     * ...
     * const ing = new Sdk();
     *
     * ing.api.requestExportList(21232, {
     *     "type":  "guestlist",
     *     "format": "xlsx",
     *     "filters": [
     *          {
     *              "name" : "channel",
     *              "value": "offline",
     *          },
     *          {
     *              "name" : "term",
     *              "value": "udi",
     *          }
     *      ]
     * })
     * .then((response) => {
     *     console.log(response);
     * })
     * .catch((error) => {
     *     console.log(error);
     * });
     */
    requestExportList(eventId, data = {}, query = {}) {
        let _data = Object.assign({
            type  : 'transactions',
            format: 'csv',
        }, data);

        return this.post(`/event/${eventId}/export`, _data, query);
    }

    /**
     * Get Event Entry Report
     *
     * @param {number} eventId     - The event ID.
     * @param {number} [sessionId] - The event session ID to get.
     * @param {object} [query]     - Optional request parameters.
     *
     * @returns {Promise}
     */
    getEntryReport(eventId, sessionId, query = {}) {
        const _query = Object.assign(
            {},
            query,
            {
                method: 'report'
            },
            (!sessionId ? {} : {
                sessionId: sessionId
            })
        );

        return this.get(`/event/${eventId}/guestlist`, _query);
    }

    /**
     * Get Event Bordero Report
     *
     * @param {number} eventId - The event ID.
     * @param {object} [query] - Optional request parameters.
     *
     * @returns {Promise}
     */
    getBorderoReport(eventId, query = {}) {
        return this.get(`/bordero/${eventId}`, query);
    }
}
