/**
* Rquest middleware to format url with a base URL
*
* @params {string} base - Base URL for all requests.
* @returns {function}
*/
export var basePrefix = (base = '') => {
    return (request, next) => {
        let path = request.url.replace(/^\//, '');
        base = base.replace(/\/$/, '');

        request.url = `${base}/${path}`;

        return next();
    };
};

/**
 * Request middleware to handle response from api
 * and decide based on the status code if the
 * request was a success or an error
 *
 * @params {number} [lower=200]  - Lower status code number.
 * @params {number} [higher=299] - Higher status code number.
 * @returns {function}
 */
export var transformResponse = (lower = 200, higher = 299) => {
    return (request, next) => {
        return next().then((response) => {
            if (response.status >= lower &&
                response.status <= higher) {

                return response.body;
            }

            var error = request.error('', 'EINVALIDSTATUS');
            error.body = response.body;

            throw error.body;
        });
    };
};

