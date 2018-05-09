'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../../common/helpers');

var _Timer = require('../../common/Timer');

var _Timer2 = _interopRequireDefault(_Timer);

var _ToastNotification = require('./ToastNotification');

var _ToastNotification2 = _interopRequireDefault(_ToastNotification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * TimedToastNotification Component for Patternfly React
 */
var TimedToastNotification = function (_React$Component) {
  _inherits(TimedToastNotification, _React$Component);

  function TimedToastNotification(props) {
    _classCallCheck(this, TimedToastNotification);

    var _this = _possibleConstructorReturn(this, (TimedToastNotification.__proto__ || Object.getPrototypeOf(TimedToastNotification)).call(this, props));

    (0, _helpers.bindMethods)(_this, ['onMouseEnter', 'onMouseLeave']);
    return _this;
  }

  _createClass(TimedToastNotification, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          paused = _props.paused,
          persistent = _props.persistent,
          onDismiss = _props.onDismiss,
          timerdelay = _props.timerdelay;


      if (!persistent) {
        this.timer = new _Timer2.default(onDismiss, timerdelay);
        this.timer.startTimer();
      }

      /** if we are paused on mount, then clear the timer
       * after having initialized with the correct delay */
      if (paused) {
        this.timer && this.timer.clearTimer();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      /**
       * If paused prop changes, update our timer
       */
      if (nextProps.paused !== this.props.paused) {
        if (nextProps.paused) {
          this.timer && this.timer.clearTimer();
        } else {
          this.timer && this.timer.startTimer();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.timer && this.timer.clearTimer();
    }
  }, {
    key: 'onMouseEnter',
    value: function onMouseEnter() {
      var onMouseEnter = this.props.onMouseEnter;

      onMouseEnter && onMouseEnter();
    }
  }, {
    key: 'onMouseLeave',
    value: function onMouseLeave() {
      var onMouseLeave = this.props.onMouseLeave;

      onMouseLeave && onMouseLeave();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          type = _props2.type,
          onDismiss = _props2.onDismiss;
      var onMouseEnter = this.onMouseEnter,
          onMouseLeave = this.onMouseLeave;


      var toastProps = {
        className: className,
        type: type,
        onDismiss: onDismiss,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave
      };

      return _react2.default.createElement(
        _ToastNotification2.default,
        toastProps,
        children
      );
    }
  }]);

  return TimedToastNotification;
}(_react2.default.Component);

TimedToastNotification.propTypes = _extends({}, _ToastNotification2.default.propTypes, {
  /** pauses notification from dismissing */
  paused: _propTypes2.default.bool,
  /** persistent keeps the notification up endlessly until closed */
  persistent: _propTypes2.default.bool,
  /** timer delay until dismiss */
  timerdelay: _propTypes2.default.number,
  /** onMouseEnter callback */
  onMouseEnter: _propTypes2.default.func,
  /** onMouseLeave callback */
  onMouseLeave: _propTypes2.default.func
});
TimedToastNotification.defaultProps = _extends({}, _ToastNotification2.default.defaultProps, {
  paused: false,
  timerdelay: 8000
});

TimedToastNotification.TOAST_NOTIFICATION_TYPES = [].concat(_toConsumableArray(_ToastNotification2.default.TOAST_NOTIFICATION_TYPES));

exports.default = TimedToastNotification;