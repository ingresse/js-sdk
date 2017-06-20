import {RequestHandler} from '../request/handler';
import {ApiEvents} from './api.event.js';
import {ApiUser} from './api.user.js';
import {ApiTicketTransfer} from './api.ticket.js';
import {ApiAuth} from './api.auth.js';
import {ApiRecover} from './api.recover.js';
import {auth} from '../auth';
import {mix} from '../helper/mix';

/**
 * Ingresse API
 *
 * @example
 * var Sdk = require('ingresse-sdk');
 * var ingresse = new Sdk();
 *
 * // You will have access to this API
 * // after instantiate the Sdk.
 * var api = ingresse.api;
 */
export class Api extends mix(
    RequestHandler,
    ApiAuth,
    ApiEvents,
    ApiRecover,
    ApiTicketTransfer,
    ApiUser
) {
    /**
     * Ingresse Api
     *
     * @param {object} [custom={}] - Initialize Ticket Api settings.
     */
    constructor(custom = {}) {
        let settings = {
            url : 'https://api.ingresse.com',
            auth: auth.Ingresse.type(),
        };

        Object.assign(settings, custom);
        super(settings);

        this.settings = settings;
    }
}

