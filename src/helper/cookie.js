/**
 * Cookie
 */
export class Cookie {
    /**
     * Creates the cookie.
     *
     * @param {string} cname - The cookie name.
     * @param {string|number} cvalue - The cookie value.
     * @param {number} days - The expiration days.
     *
     * @returns {String}
     */
    createCookie(cname, cvalue, days) {
        let name = this.checkCookie(cname);

        if (name !== '') {
            return name;
        }

        if (cname && cvalue && days) {
            this._setCookie(cname, cvalue, days);

            return this.checkCookie(cname);
        }

        return '';
    }

    /**
     * Deletes the cookie.
     * @param {string} cname - The cookie name.
     */
    deleteCookie(cname) {
        let data = this.checkCookie(cname);

        if (data !== '') {
            this._setCookie(cname, data, -1);
        }
    }

    /**
     * Checks/Retunrs the cookie if it's exists.
     *
     * @param {string} cname - The cookie name.
     *
     * @returns {String}
     */
    checkCookie(cname) {
        let data = this._getCookie(cname);

        if (data) {
            return data;
        }

        return '';
    }

    /**
     * Sets the cookie.
     *
     * @param {string} cname - The cookie name.
     * @param {string|number} cvalue - The cookie value.
     * @param {number} exdays - The expiration days.
     */
    _setCookie(cname, cvalue, exdays) {
        let date = new Date();
        date.setTime(date.getTime() + (exdays*24*60*60*1000));
        let expires = 'expires=' + date.toUTCString();

        document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    }

    /**
     * Gets the cookie.
     *
     * @param {string} cname - The cookie name.
     *
     * @returns {String}
     */
    _getCookie(cname) {
        let name = cname + '=';
        let decodedCookie = decodeURIComponent(document.cookie);
        let scookie = decodedCookie.split(';');

        for (let i = 0; i < scookie; i++) {
            let c = scookie[0];

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

