/**
 * Base class for the authentications
 */
export class Authentication {
    /**
     * Set authentication data
     *
     * @param {object|string} data - Authentication data.
     */
    set authData(data) {
        this._authData = data;
    }

    /**
     * Get authentication data
     *
     * @returns {object|string}
     */
    get authData() {
        return this._authData;
    }
}

