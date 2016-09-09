export class Authentication {
    /**
     * Set authentication data
     *
     * @param {object|string} data - Authentication data.
     */
    set authData(data) {
        this._data = data;
    }

    /**
     * Get authentication data
     *
     * @returns {object|string}
     */
    get authData() {
        return this._data;
    }
}

