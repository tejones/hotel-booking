'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Alert = require('../Alert');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * ToastNotification Component for Patternfly React
 */
var ToastNotification = function ToastNotification(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'className']);

  var notificationClasses = (0, _classnames2.default)('toast-pf', className);

  return _react2.default.createElement(
    _Alert.Alert,
    _extends({ className: notificationClasses }, props),
    children
  );
};

ToastNotification.propTypes = _extends({}, _Alert.Alert.propTypes);
ToastNotification.defaultProps = _extends({}, _Alert.Alert.defaultProps);

ToastNotification.TOAST_NOTIFICATION_TYPES = [].concat(_toConsumableArray(_Alert.Alert.ALERT_TYPES));

exports.default = ToastNotification;