'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.auth = undefined;

var _auth;

var _jwt = require('./jwt');

var _ingresse = require('./ingresse');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var auth = exports.auth = (_auth = {}, _defineProperty(_auth, _jwt.Jwt.type(), _jwt.Jwt), _defineProperty(_auth, _ingresse.Ingresse.type(), _ingresse.Ingresse), _auth);