'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tableCellFormatter = function tableCellFormatter(value) {
  return _react2.default.createElement(
    _index.Table.Cell,
    null,
    value
  );
};
tableCellFormatter.propTypes = {
  /** cell value */
  value: _propTypes2.default.node // eslint-disable-line react/no-unused-prop-types
};
tableCellFormatter.defaultProps = {
  value: null
};
exports.default = tableCellFormatter;