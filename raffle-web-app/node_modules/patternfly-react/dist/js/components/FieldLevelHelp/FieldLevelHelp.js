'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Icon = require('../Icon');

var _Button = require('../Button');

var _Popover = require('../Popover');

var _OverlayTrigger = require('../OverlayTrigger');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * FieldLevelHelp Component for Patternfly React
 */
var FieldLevelHelp = function FieldLevelHelp(_ref) {
  var children = _ref.children,
      content = _ref.content,
      close = _ref.close,
      props = _objectWithoutProperties(_ref, ['children', 'content', 'close']);

  var trigger = 'click';
  var overlay = _react2.default.createElement(
    _Popover.Popover,
    { id: 'popover' },
    content
  );
  var rootClose = close === 'true';

  return _react2.default.createElement(
    _OverlayTrigger.OverlayTrigger,
    {
      overlay: overlay,
      placement: 'top',
      trigger: trigger.split(' '),
      rootClose: rootClose
    },
    _react2.default.createElement(
      _Button.Button,
      { bsStyle: 'link' },
      _react2.default.createElement(_Icon.Icon, { type: 'pf', name: 'info' })
    )
  );
};

FieldLevelHelp.propTypes = {
  /** additional fieldlevelhelp classes */
  content: _propTypes2.default.node,
  /** leave popover/tooltip open  */
  close: _propTypes2.default.string,
  /** children nodes  */
  children: _propTypes2.default.node
};
FieldLevelHelp.defaultProps = {
  content: null,
  close: 'true',
  children: null
};

exports.default = FieldLevelHelp;