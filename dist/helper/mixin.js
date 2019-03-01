'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Mixin = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('babel-polyfill');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Class for creating multi inheritance.
var Mixin = exports.Mixin = function () {
    function Mixin() {
        _classCallCheck(this, Mixin);
    }

    _createClass(Mixin, null, [{
        key: 'inherit',


        // Inherit method to create base classes.
        value: function inherit() {
            for (var _len = arguments.length, _bases = Array(_len), _key = 0; _key < _len; _key++) {
                _bases[_key] = arguments[_key];
            }

            var classes = function () {
                _createClass(classes, [{
                    key: 'base',


                    // The base classes
                    get: function get() {
                        return _bases;
                    }
                }]);

                function classes() {
                    _classCallCheck(this, classes);

                    var index = 0;

                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = this.base[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var _ref;

                            var b = _step.value;

                            var obj = new b((_ref = index++, arguments.length <= _ref ? undefined : arguments[_ref]));
                            Mixin.copy(this, obj);
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
                }

                return classes;
            }();

            // Copy over properties and methods


            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = _bases[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var base = _step2.value;

                    Mixin.copy(classes, base);
                    Mixin.copy(classes.prototype, base.prototype);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return classes;
        }

        // Copies the properties from one class to another

    }, {
        key: 'copy',
        value: function copy(_target, _source) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = Reflect.ownKeys(_source)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var key = _step3.value;

                    if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
                        var desc = Object.getOwnPropertyDescriptor(_source, key);
                        Object.defineProperty(_target, key, desc);
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }
    }]);

    return Mixin;
}();