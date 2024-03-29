/**
 * Cookie
 */
export class Cookie {

    constructor(companyId) {
        this.companyId = (companyId || 1);
    }

    /**
     * Create the cookie.
     *
     * @param {string} cname - The cookie name.
     * @param {string|number} cvalue - The cookie value.
     * @param {number} days - The expiration days.
     *
     * @returns {String}
     */
    createCookie(cname, cvalue, days) {
        let name = this.getCookie(cname);

        if (name !== '') {
            return name;
        }

        if (cname && cvalue && days) {
            this._setCookie(cname, cvalue, days);

            return this.getCookie(cname);
        }

        return '';
    }

    /**
     * Delete the cookie.
     * @param {string} cname - The cookie name.
     */
    deleteCookie(cname) {
        let data = this.getCookie(cname);

        if (data !== '') {
            this._setCookie(cname, data, -1);
        }
    }

    /**
     * Check/Return the cookie if it's exists.
     *
     * @param {string} cname - The cookie name.
     *
     * @returns {String}
     */
    getCookie(cname) {
        let data = this._getCookie(cname);

        if (data) {
            return data;
        }

        return '';
    }

    /**
     * Concat cookie name
     *
     * @param {string} cname - Cookie name
     *
     * @return {string}
     */
    _concatName(cname) {
        let cookieName = '';

        return cookieName.concat(
            'ing',
            '_',
            this.companyId,
            '_',
            (cname || '')
        );
    }

    /**
     * Set the cookie.
     *
     * @param {string} cname - The cookie name.
     * @param {string|number} cvalue - The cookie value.
     * @param {number} exdays - The expiration days.
     */
    _setCookie(cname, cvalue, exdays) {
        let date = new Date();
        date.setTime(date.getTime() + (exdays*24*60*60*1000));
        let expires = 'expires=' + date.toUTCString();
        let domain =
            document.location.hostname.includes('.ingresse.com') ?
                '.ingresse.com' : document.location.hostname;

        document.cookie =
            this._concatName(cname) + '=' + cvalue + ';secure' +
            expires + ';' +
            'domain=' + domain + ';' +
            'path=/'
        ;
    }

    /**
     * Get the cookie.
     *
     * @param {string} cname - The cookie name.
     *
     * @returns {String}
     */
    _getCookie(cname) {
        let name = (this._concatName(cname) + '=');
        let decodedCookie = decodeURIComponent(document.cookie);
        let scookie = decodedCookie.split(';');

        for (let i = 0; i < scookie.length; i++) {
            let c = scookie[i];

            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }

            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }

        return '';
    }
}

