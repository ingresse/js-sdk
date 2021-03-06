import { RequestHandler } from '../request/handler';
import { auth } from '../auth';

/**
 * Ingresse Event's API
 *
 * API to get, create and update events.
 *
 * @example
 * var sdk = require('ingresse-sdk');
 * var ingresse = new Sdk();
 *
 * // You will have access to this API
 * // after instantiate the Sdk.
 * var event = ingresse.event;
 */
export class Event extends RequestHandler {
    /**
     * Event Api
     *
     * @param {object} [custom={}] - Initialize Event Api settings.
     */
    constructor(custom = {}) {
        let settings = Object.assign({
            auth    : auth.Jwt.type(),
            resource: 'event',
        }, custom);

        super(settings);

        this.settings = settings;
    }

    /**
     * Get event by ID
     *
     * @param {number} id      - The event ID to get.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.event.getById(200)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    getById(id, query = {}) {
        return this.get(`/${id}`, query);
    }

    /**
     * Get event attributes
     *
     * @param {number} id      - The event ID to get.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.event.getAttributes(20866)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    getAttributes(id, query = {}) {
        return this.get(`/${id}/attributes`, query);
    }

    /**
     * Create new Event
     *
     * @param {object} data    - Data to create a new event.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.event.create({ name: 'My Event Name' })
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    create(data = {}, query = {}) {
        return this.post('/', data, query);
    }

    /**
     * Update an Event
     *
     * @param {string|number} id - The Event ID to update.
     * @param {object} data      - Data to update Event.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.event.update(200, { name: 'My Updated Event Name' })
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    update(id, data = {}, query = {}) {
        return this.put(`/${id}`, data, query);
    }

    /**
     * Update an Event Poster
     *
     * @param {string|number} id - The Event ID to update.
     * @param {object} data      - Data to update event poster.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.event.updatePoster(12, {
     *          poster: {
     *              format: 'base64',
     *              image : 'data:image/jpeg;base64 8aAVdagg87h87t8q...',
     *          }
     *     })
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    updatePoster(id, data = {}, query = {}) {
        return this.put(`/${id}/poster`, data, query);
    }

    /**
     * Delete Event Poster
     *
     * @param {string|number} id - The Event ID to delete poster.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.event.deletePoster(12)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    deletePoster(id, query = {}) {
        return this.delete(`/${id}/poster`, query);
    }

    /**
     * Update Event Attributes
     *
     * @param {string|number} id - The Event ID to update.
     * @param {object} data      - Data to update event attributes.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.event.updateAttributes(12, {
     *          attributes: [
     *              {
     *                  name : 'video_url',
     *                  value: 'https://www.youtube.com/watch?v=hRGnjgBOHIk',
     *              }
     *          ]
     *     })
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    updateAttributes(id, data = {}, query = {}) {
        return this.put(`/${id}/attributes`, data, query);
    }

    /**
     * Validate if slug is available to use in an Event.
     *
     * This method will return a `Promise` so you can use
     * `.then` and `.catch` methods.
     *
     * @param {string} term    - The slug term to check.
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.event.validateSlug('my-event-slug')
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    validateSlug(term, query = {}) {
        return this.get(`/slugs/${term}`, query);
    }

    /**
     * Get all Events Categories
     *
     * This method will return a `Promise` so you can use
     * `.then` and `.catch` methods.
     *
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.event.getCategories()
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    getCategories(query = {}) {
        return this.get('/categories', query);
    }

    /**
     * Get all Private Events Categories
     *
     * This method will return a `Promise` so you can use
     * `.then` and `.catch` methods.
     *
     * @param {object} [query] - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.event.getPrivateCategories()
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    getPrivateCategories(query = {}) {
        return this.get('/categories/private', query);
    }

    /**
     * Get Event Category by ID
     *
     * @param {string|number} id - The Category ID to get.
     * @param {object} [query]   - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.event.getCategory(12)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    getCategory(id, query = {}) {
        return this.get(`/categories/${id}`, query);
    }

    /**
     * Remove Category from specific Event
     *
     * @param {string|number} eventId    - The Event ID to remove category.
     * @param {string|number} categoryId - The Category ID to remove.
     * @param {object} [query]           - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.event.deleteCategory(123, 321)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    deleteCategory(eventId, categoryId, query = {}) {
        return this.delete(`/${eventId}/category/${categoryId}`, query);
    }

    /**
     * Remove an Event Session
     *
     * @param {string|number} eventId   - The Event ID to remove session.
     * @param {string|number} sessionId - The Session ID to remove.
     * @param {object} [query]          - Optional request parameters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.event.deleteSession(123, 321)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    deleteSession(eventId, sessionId, query = {}) {
        return this.delete(`/${eventId}/sessions/${sessionId}`, query);
    }

    /**
     * Get events by producer, based on JWT
     *
     * @param {object} [query] - Request parameters/filters.
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.event.searchByProducer({ from: 'now-1d' })
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    searchByProducer(query = {}) {
        return this.get('/search/producer', query);
    }

    /**
     * Update/Add users permission to the event
     *
     * @param {string|number} eventId - The Event ID.
     * @param {object}        data    - Object with attribute `usersPermission` as Array with Users IDs to attribute Permission.
     * @param {object}        [query] - Request parameters/filters.
     *
     * @returns {Promise}
     *
     * @example
     * ...
     * var data = { usersPermission: [ 321 ] };
     *
     * ingresse.event.updatePermission(21232, data)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    updatePermission(eventId, data = {}, query = {}) {
        return this.put(`/${eventId}/permission`, data, query);
    }

    /**
     * Remove permission on the event of only unique user
     *
     * @param {string|number} eventId - The Event ID.
     * @param {object}        data    - Object with attribute `usersPermission` as Array with Users IDs to delete Permission.
     * @param {object}        [query] - Request parameters/filters.
     *
     * @returns {Promise}
     *
     * @example
     * ...
     * var data = { usersPermission: [ 321 ] };
     *
     * ingresse.event.deletePermission(21232, data)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    deletePermission(eventId, data = {}, query = {}) {
        return this.delete(`/${eventId}/permission`, query, data);
    }

    /**
     * @DEPRECATED
     *
     * Add users as admins of the event
     *
     * @param {string|number} eventId - The Event ID.
     * @param {object}        data    - Object with attribute `usersPermission` as Array with Users IDs to attribute Permission.
     * @param {object}        [query] - Request parameters/filters.
     *
     * @returns {Promise}
     *
     * @example
     * ...
     * var data = { admins: [ 321, 123, 654 ] };
     *
     * ingresse.event.addAdmins(21232, data)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    addAdmins(eventId, data = {}, query = {}) {
        return this.post(`/${eventId}/admin`, data, query);
    }

    /**
     * @DEPRECATED
     *
     * Delete user as event's admin
     * Only unique user
     *
     * @param {string|number} eventId - The Event ID.
     * @param {string|number} userId  - The User ID.
     * @param {object}        [query] - Request parameters/filters.
     *
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.event.deleteAdmin(21232, 654)
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    deleteAdmin(eventId, userId, query = {}) {
        return this.delete(`/${eventId}/admin/${userId}`, query);
    }

    /**
     * Add user to the event staff
     *
     * @param {number} eventId - The Event ID.
     * @param {number} userId  - User ID
     * @param {string} role    - Role in Event: 'admin' or 'producer'...
     * @param {object} [data]  - Request body.
     * @param {object} [query] - Request parameters/filters.
     *
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.event.staffAdd(21232, 123, 'producer')
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    staffAdd(eventId, userId, role = 'producer', data = {}, query = {}) {
        return this.post(`/${eventId}/staff/${role}/user/${userId}`, data, query);
    }

    /**
     * Remove user of event staff
     *
     * @param {number} eventId - The Event ID.
     * @param {number} userId  - User ID
     * @param {string} role    - Role in Event: 'admin' or 'producer'...
     * @param {object} [query] - Request parameters/filters.
     *
     * @returns {Promise}
     *
     * @example
     * ...
     *
     * ingresse.event.staffRemove(21232, 123, 'producer')
     *     .then(function (response) {
     *         console.log(response);
     *     })
     *     .catch(function (error) {
     *         console.log(error);
     *     });
     */
    staffRemove(eventId, userId, role = 'producer', query = {}) {
        return this.delete(`/${eventId}/staff/${role}/user/${userId}`, query);
    }
}
