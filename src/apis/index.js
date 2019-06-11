/* Importing APIs */
import { Api } from './api';
import { Event } from './event';
import { EventSearch } from './search.event';
import { Ticket } from './ticket';

/* Exporting APIs */
export var apis = {
    api        : Api,
    event      : Event,
    eventSearch: EventSearch,
    ticket     : Ticket,
};
