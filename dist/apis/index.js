'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.apis = undefined;

var _ticket = require('./ticket');

var _event = require('./event');

var _api = require('./api');

var apis = exports.apis = {
    ticket: _ticket.Ticket,
    event: _event.Event,
    api: _api.Api
};