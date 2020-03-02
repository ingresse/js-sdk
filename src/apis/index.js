/* Importing APIs */
import { Api } from './api';
import { Checkin } from './checkin';
import { Coupon } from './coupon';
import { Event } from './event';
import { EventSearch } from './search.event';
import { Ticket } from './ticket';

/* Exporting APIs */
export var apis = {
    api        : Api,
    checkin    : Checkin,
    coupon     : Coupon,
    event      : Event,
    eventSearch: EventSearch,
    ticket     : Ticket,
};
