'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('../../index');

var _helpers = require('../../common/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolbarFind = function (_React$Component) {
  _inherits(ToolbarFind, _React$Component);

  function ToolbarFind() {
    _classCallCheck(this, ToolbarFind);

    var _this = _possibleConstructorReturn(this, (ToolbarFind.__proto__ || Object.getPrototypeOf(ToolbarFind)).call(this));

    _this.state = {
      dropdownShown: false,
      currentValue: ''
    };

    (0, _helpers.bindMethods)(_this, ['toggleDropdownShown', 'hideDropdown', 'onValueKeyPress', 'handleValueChange', 'handleFindNext', 'handleFindPrevious']);
    return _this;
  }

  _createClass(ToolbarFind, [{
    key: 'onValueKeyPress',
    value: function onValueKeyPress(keyEvent) {
      var onEnter = this.props.onEnter;
      var currentValue = this.state.currentValue;


      if (keyEvent.key === 'Enter' && onEnter) {
        onEnter(currentValue);
      }
    }
  }, {
    key: 'handleFindNext',
    value: function handleFindNext() {
      var currentValue = this.state.currentValue;
      var onFindNext = this.props.onFindNext;


      if (onFindNext) {
        onFindNext(currentValue);
      }
    }
  }, {
    key: 'handleFindPrevious',
    value: function handleFindPrevious() {
      var currentValue = this.state.currentValue;
      var onFindPrevious = this.props.onFindPrevious;


      if (onFindPrevious) {
        onFindPrevious(currentValue);
      }
    }
  }, {
    key: 'handleValueChange',
    value: function handleValueChange(event) {
      var onChange = this.props.onChange;


      this.setState({ currentValue: event.target.value });

      if (onChange) {
        onChange(event.target.value);
      }
    }
  }, {
    key: 'hideDropdown',
    value: function hideDropdown() {
      this.setState({ dropdownShown: false });
    }
  }, {
    key: 'toggleDropdownShown',
    value: function toggleDropdownShown() {
      this.setState(function (prevState) {
        return { dropdownShown: !prevState.dropdownShown };
      });
    }
  }, {
    key: 'renderCounts',
    value: function renderCounts() {
      var currentValue = this.state.currentValue;
      var _props = this.props,
          currentIndex = _props.currentIndex,
          totalCount = _props.totalCount;


      if (currentValue && currentValue !== '') {
        return [_react2.default.createElement(
          'span',
          { className: 'find-pf-nums', key: 'findCountText' },
          currentIndex || 0,
          ' of ',
          totalCount
        ), _react2.default.createElement(
          _index.Button,
          {
            bsStyle: 'link',
            key: 'findPrevious',
            onClick: this.handleFindPrevious
          },
          _react2.default.createElement(_index.Icon, { type: 'fa', name: 'angle-up' })
        ), _react2.default.createElement(
          _index.Button,
          { bsStyle: 'link', key: 'findNext', onClick: this.handleFindNext },
          _react2.default.createElement(_index.Icon, { type: 'fa', name: 'angle-down' })
        )];
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          dropdownShown = _state.dropdownShown,
          currentValue = _state.currentValue;
      var _props2 = this.props,
          className = _props2.className,
          placeholder = _props2.placeholder;


      var classes = (0, _classnames2.default)('form-group toolbar-pf-find', className);

      var dropdownClasses = (0, _classnames2.default)('find-pf-dropdown-container', {
        show: dropdownShown
      });

      return _react2.default.createElement(
        'div',
        { className: classes },
        _react2.default.createElement(
          _index.Button,
          {
            bsStyle: 'link',
            className: 'btn-find',
            onClick: this.toggleDropdownShown
          },
          _react2.default.createElement(_index.Icon, { type: 'fa', name: 'search' })
        ),
        _react2.default.createElement(
          'div',
          { className: dropdownClasses },
          _react2.default.createElement(_index.FormControl, {
            type: 'text',
            id: 'find',
            value: currentValue,
            placeholder: placeholder,
            onKeyPress: function onKeyPress(e) {
              return _this2.onValueKeyPress(e);
            },
            onChange: this.handleValueChange
          }),
          _react2.default.createElement(
            'div',
            { className: 'find-pf-buttons' },
            this.renderCounts(),
            _react2.default.createElement(
              _index.Button,
              {
                bsStyle: 'link',
                className: 'btn-find-close',
                onClick: this.hideDropdown
              },
              _react2.default.createElement(_index.Icon, { type: 'pf', name: 'close' })
            )
          )
        )
      );
    }
  }]);

  return ToolbarFind;
}(_react2.default.Component);

ToolbarFind.propTypes = {
  /** Additional css classes */
  className: _propTypes2.default.string,
  /** index of current item */
  currentIndex: _propTypes2.default.number,
  /** total number of items */
  totalCount: _propTypes2.default.number.isRequired,
  /** Placeholder text when empty */
  placeholder: _propTypes2.default.string,
  /** Callback function when user hits the enter key */
  onEnter: _propTypes2.default.func,
  /** Callback function when the find value changes */
  onChange: _propTypes2.default.func,
  /** Callback function when the find next is selected */
  onFindNext: _propTypes2.default.func,
  /** Callback function when the find previous is selected */
  onFindPrevious: _propTypes2.default.func
};

ToolbarFind.defaultProps = {
  className: '',
  currentIndex: 0,
  placeholder: '',
  onEnter: _helpers.noop,
  onChange: _helpers.noop,
  onFindNext: _helpers.noop,
  onFindPrevious: _helpers.noop
};

exports.default = ToolbarFind;