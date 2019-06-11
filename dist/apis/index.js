'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.apis = undefined;

var _api = require('./api');

var _event = require('./event');

var _search = require('./search.event');

var _ticket = require('./ticket');

/* Exporting APIs */
/* Importing APIs */
var apis = exports.apis = {
    api: _api.Api,
    event: _event.Event,
    eventSearch: _search.EventSearch,
    ticket: _ticket.Ticket
};