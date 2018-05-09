'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = require('../../common/helpers');

var _TreeViewNode = require('./TreeViewNode');

var _TreeViewNode2 = _interopRequireDefault(_TreeViewNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeView = function TreeView(_ref) {
  var nodes = _ref.nodes,
      selectNode = _ref.selectNode,
      highlightOnSelect = _ref.highlightOnSelect,
      highlightOnHover = _ref.highlightOnHover;

  var classes = (0, _classnames2.default)('list-group', {
    'treeview-pf-select': highlightOnSelect,
    'treeview-pf-hover': highlightOnHover
  });

  return _react2.default.createElement(
    'div',
    { className: 'treeview' },
    _react2.default.createElement(
      'ul',
      { className: classes },
      nodes && nodes.map(function (node, index) {
        return _react2.default.createElement(_TreeViewNode2.default, {
          node: node,
          key: index,
          level: 1,
          selectNode: selectNode
        });
      })
    )
  );
};

TreeView.propTypes = {
  /** Array of node objects */
  nodes: _propTypes2.default.array,
  /** Function that will be triggered when a selectable node is clicked */
  selectNode: _propTypes2.default.func,
  /** Highlight node row on hover */
  highlightOnHover: _propTypes2.default.bool,
  /** Highlight node row when clicked */
  highlightOnSelect: _propTypes2.default.bool
};

TreeView.defaultProps = {
  highlightOnHover: false,
  highlightOnSelect: false,
  nodes: [],
  selectNode: _helpers.noop
};

exports.default = TreeView;