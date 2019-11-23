import {RequestHandler} from '../request/handler';

/**
 * Ingresse company API
 */
export class ApiCompany extends RequestHandler {

    /**
     * Initialize the API company.
     */
    constructor(settings) {
        super();
        this.companyId = settings ? settings.companyId : null;
    }

    /**
     * Get company attributes.
     */
    getAttributes() {
        return this.get(`/company/${this.companyId}/attributes`);
    }

    /**
     * Update company attributes.
     *
     * @param {object} data - New attributes.
     *
     * @return {Promise}
     */
    saveAttributes(data) {
        return this.post(`/company/${this.companyId}/attributes`, data);
    }
}
