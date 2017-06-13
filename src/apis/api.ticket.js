import {RequestHandler} from '../request/handler';

/**
 * Ingresse Tickets Transfer API
 */
export class ApiTicketTransfer extends RequestHandler {
    /**
     * Creates a ticket transfer.
     *
     * @param {number} id - The ticket ID to get.
     * @param {object} [data]  - The form with transfer data for post.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * var ticketId = 123;
     * var data = {
     *      user: 456 //The user that will get the ticket
     * };
     *
     * ingresse.apiTickets.createTicketTransfer(ticketId, data)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     *
     * ...
     *  // To return the ticket for the last owner
     *
     * var ticketId = 123;
     * var data = {
     *      isReturn: true //With this option, the ticket will return to last owner.
     * };
     *
     * ingresse.apiTickets.createTicketTransfer(ticketId, data)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    createTicketTransfer(id, data = {}, query = {}) {
        return this.post(`/ticket/${id}/transfer`, data, query);
    }

    /**
     * Update a ticket transfer.
     *
     * @param {number} id - The ticket ID to get.
     * @param {number} transferId - The transfer ID to get.
     * @param {object} [data]  - The form with transfer data to post.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * var ticketId = 123;
     * var transferId = 456;
     * var data = {
     *      action: 'accept' // can be [accept, cancel, refuse]
     * };
     *
     * ingresse.apiTickets.updateTicketTransfer(ticketId, transferId, data)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    updateTicketTransfer(id, transferId, data = {}, query = {}) {
        return this.post(`/ticket/${id}/transfer/${transferId}`, data, query);
    }

    /**
     * Get the ticket transfer history.
     *
     * @param {string|number} id - The ticket ID to get.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     */
    getTicketTransferHistory(id, query = {}) {
        return this.get(`/ticket/${id}/transfer`, query);
    }
}

