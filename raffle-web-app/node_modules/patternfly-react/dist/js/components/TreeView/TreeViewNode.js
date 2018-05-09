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

var _helpers = require('../../common/helpers');

var _TreeViewExpand = require('./TreeViewExpand');

var _TreeViewExpand2 = _interopRequireDefault(_TreeViewExpand);

var _TreeViewIcon = require('./TreeViewIcon');

var _TreeViewIcon2 = _interopRequireDefault(_TreeViewIcon);

var _TreeViewIndents = require('./TreeViewIndents');

var _TreeViewIndents2 = _interopRequireDefault(_TreeViewIndents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TreeViewNode = function (_Component) {
  _inherits(TreeViewNode, _Component);

  function TreeViewNode(props) {
    _classCallCheck(this, TreeViewNode);

    // A node can be set to be expanded by default
    var _this = _possibleConstructorReturn(this, (TreeViewNode.__proto__ || Object.getPrototypeOf(TreeViewNode)).call(this, props));

    _this.state = {
      expanded: props.node.hasOwnProperty('state') && props.node.state.expanded || false
    };

    _this.toggleExpand = _this.toggleExpand.bind(_this);
    _this.handleSelect = _this.handleSelect.bind(_this);
    return _this;
  }

  // Collapse the current node if any of its parents is collapsed. This should
  // only fire for nodes that are level 2 or greater


  _createClass(TreeViewNode, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!nextProps.visible && nextProps.level > 1) {
        this.setState(function () {
          return { expanded: false };
        });
      }
    }
  }, {
    key: 'handleSelect',
    value: function handleSelect() {
      var _props = this.props,
          node = _props.node,
          selectNode = _props.selectNode;

      if (node.selectable) {
        selectNode(node);
      }
    }
  }, {
    key: 'toggleExpand',
    value: function toggleExpand(e) {
      e.stopPropagation();
      this.setState(function (prevState) {
        return { expanded: !prevState.expanded };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          node = _props2.node,
          level = _props2.level,
          visible = _props2.visible,
          selectNode = _props2.selectNode;
      var expanded = this.state.expanded;

      var classes = (0, _classnames2.default)('list-group-item', {
        'node-hidden': level > 1 ? !visible : false,
        'node-selected': node.selected
      });
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          'li',
          { className: classes, onClick: this.handleSelect },
          _react2.default.createElement(_TreeViewIndents2.default, { level: level }),
          _react2.default.createElement(_TreeViewExpand2.default, {
            nodes: node.nodes,
            expanded: expanded,
            toggleExpand: this.toggleExpand
          }),
          _react2.default.createElement(_TreeViewIcon2.default, { icon: node.icon }),
          node.text
        ),
        node.nodes && node.nodes.map(function (childNode, index) {
          return _react2.default.createElement(TreeViewNode, {
            node: childNode,
            key: index,
            level: level + 1,
            visible: expanded,
            selectNode: selectNode
          });
        })
      );
    }
  }]);

  return TreeViewNode;
}(_react.Component);

TreeViewNode.propTypes = {
  node: _propTypes2.default.object,
  level: _propTypes2.default.number.isRequired,
  visible: _propTypes2.default.bool,
  selectNode: _propTypes2.default.func
};

TreeViewNode.defaultProps = {
  node: {},
  visible: false,
  selectNode: _helpers.noop
};

exports.default = TreeViewNode;