'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoveButton = exports.DisposableLabel = exports.Label = undefined;

var _Label = require('./Label');

Object.defineProperty(exports, 'Label', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Label).default;
  }
});

var _DisposableLabel = require('./DisposableLabel');

var _DisposableLabel2 = _interopRequireDefault(_DisposableLabel);

var _RemoveButton = require('./RemoveButton');

var _RemoveButton2 = _interopRequireDefault(_RemoveButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DisposableLabel = _DisposableLabel2.default;
exports.RemoveButton = _RemoveButton2.default;