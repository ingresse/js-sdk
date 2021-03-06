import {RequestHandler} from '../request/handler';
import {Cookie} from '../helper/cookie';

/**
 * Ingresse User API
 */
export class ApiUser extends RequestHandler {
    /**
     * Initialize the Api User
     */
    constructor(settings) {
        super();
        this.credentials = {};
        this.cookie = new Cookie(settings ? settings.companyId : null);
    }

    /**
     * Get user
     *
     * @DEPRECATED: Use `getUserById` instead
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

    /**
     * Get the user tickets.
     *
     * @param {string|number} id - The user ID to get.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * var userId = 123;
     * var query = {
     *    status: 'pending', //Can be [pending, accepted, refused, returned, cancelled].
     *    pageSize: 10,
     *    page: currentPage
     * };
     *
     * ingresse.apiUser.getUserTicket(userId, query)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    getUserTickets(id, query = {}) {
        return this.get(`/user/${id}/tickets`, query);
    }

    /**
     * Create a new user.
     *
     * @param {object} [data]  - The form with user data for post.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     */
    createUser(data = {}, query = {}) {
        query.method = 'create';
        return this.post('/user/', data, query);
    }

    /**
     * Get the new user tickets.
     *
     * @param {string|number} id - The user ID to get.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     */
    getUserNewTickets(id, query = {}) {
        return this.get(`/user/${id}/transfers`, query);
    }

    /**
     * Get the user events sessions.
     *
     * @param {string|number} id - The user ID to get.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     */
    getAllUserSessions(id, query = {}) {
        return this.get(`/user/${id}/sessions`, query);
    }

    /**
     * Get the user permission.
     *
     * @param {number} id - The user id to get.
     * @param {object} [query] - Optional request parameters.
     * @param {object} [query.context] - The context that get user permission. Ex: 'event'
     * @param {object} [query.contextValue] - The contex value. Ex: '123123'
     * @param {object} [query.resource] - The resource type. Ex: 'tickets'.
     * @param {object} [query.resourceValue] - For a specific type of permission. Ex: '__ANY__' or 123123.
     * @param {object} [query.page] - The current page with user permission.
     * @param {object} [query.pageSize] - Quantity of permission per page. Default: 25
     */
    getUserPermissions(id, query = {}) {
        return this.get(`/user/${id}/permissions`, query);
    }

    /*
     * Get the ticket session
     *
     * @param {number} id - The user ID to get.
     * @param {number} sessionId - The session id.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     */
    getUserSessionTickets(id, sessionId, query = {}) {
        return this.get(`/user/${id}/sessions/${sessionId}/tickets`, query);
    }

    /**
     * Search the users for transfer ticket.
     *
     * @param {string} term - The text to search.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * var term = 'Jefferson Silva';
     * var query = {
     *    size: 12
     * };
     * ingresse.apiUser.getUserForTransfer(term, query)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    getUserForTransfer(term, query = {}) {
        query.term = term;
        return this.get('/search/transfer/user', query);
    }

    /**
     * Get the recent transfers of a user.
     *
     * @param {number} id - The user ID to get.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * var id = 123;
     * var query = {
     *    size: 12,
     *    order: 'DESC'
     * };
     *
     * ingresse.apiUser.getRecentTransfers(id, query)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    getRecentTransfers(id, query = {}) {
        return this.get(`/user/${id}/last-transfers`, query);
    }

    /**
     * Saves the credentials in cookie.
     *
     * @param {number} userId - User Id.
     * @param {string} token  - The user token.
     * @param {string} jwt    - The user jwt token.
     *
     * @returns {Object}
     */
    saveCredentials(userId, token, jwt) {
        this.credentials.userId = userId;
        this.credentials.token  = token;
        this.credentials.jwt    = jwt;

        this.cookie.createCookie('userId', userId, 5);
        this.cookie.createCookie('token', token, 5);
        this.cookie.createCookie('jwt', jwt, 5);

        return this.credentials;
    }

    /**
     * Gets the user credentials
     *
     * @returns {Object}
     */
    getCredentials() {
        for (let prop in this.credentials) {
            if (this.credentials[prop]) {
                return this.credentials;
            }
        }

        this.credentials.userId = this.cookie.getCookie('userId');
        this.credentials.token  = this.cookie.getCookie('token');
        this.credentials.jwt    = this.cookie.getCookie('jwt');

        if (this.credentials.userId ||
            this.credentials.token ||
            this.credentials.jwt) {
            return this.credentials;
        }

        return null;
    }

    /**
     * Delete the user credentials
     */
    clearCredentials() {
        this.cookie.deleteCookie('userId');
        this.cookie.deleteCookie('token');
        this.cookie.deleteCookie('jwt');
    }

    /**
     * Search users by term
     *
     * @param {string} term
     * @param {object} query
     *
     * @return {Promise}
     */
    search(term = '', query = {}) {
        return this.get('/users', Object.assign({
            term,
        }, query));
    }

    /**
     * Get user by ID from
     *
     * @param {string} id
     * @param {object} query
     *
     * @return {Promise}
     */
    getUserById(id, query = {}) {
        return this.get(`/users/${id}`, query);
    }
}
