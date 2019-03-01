'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
* Deep merge objeect
*
* @returns {object}
*/
var deepMerge = exports.deepMerge = function deepMerge(target, source) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Object.keys(source)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            if (source[key] instanceof Object && !source[key].hasOwnProperty('length')) {
                Object.assign(source[key], deepMerge(target[key] || {}, source[key]));
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    Object.assign(target || {}, source);

    return target;
};