webpackJsonp([2],{

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginContainer = undefined;

var _reactRedux = __webpack_require__(33);

var _Login = __webpack_require__(784);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {};
};

var mapStateToProps = function mapStateToProps(state) {
    return {};
};

var LoginContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Login.Login);

exports.LoginContainer = LoginContainer;

/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _TextField = __webpack_require__(750);

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TextField2.default;

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(17);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(16);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(10);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(13);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(25);

var _transitions2 = _interopRequireDefault(_transitions);

var _colorManipulator = __webpack_require__(105);

var _EnhancedButton = __webpack_require__(178);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _Paper = __webpack_require__(104);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateLabel(props, propName, componentName) {
  if (process.env.NODE_ENV !== 'production') {
    if (!props.children && props.label !== 0 && !props.label && !props.icon) {
      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
    }
  }
}

function getStyles(props, context, state) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      button = _context$muiTheme.button,
      raisedButton = _context$muiTheme.raisedButton,
      borderRadius = _context$muiTheme.borderRadius;
  var disabled = props.disabled,
      disabledBackgroundColor = props.disabledBackgroundColor,
      disabledLabelColor = props.disabledLabelColor,
      fullWidth = props.fullWidth,
      icon = props.icon,
      label = props.label,
      labelPosition = props.labelPosition,
      primary = props.primary,
      secondary = props.secondary,
      style = props.style;


  var amount = primary || secondary ? 0.4 : 0.08;

  var backgroundColor = raisedButton.color;
  var labelColor = raisedButton.textColor;

  if (disabled) {
    backgroundColor = disabledBackgroundColor || raisedButton.disabledColor;
    labelColor = disabledLabelColor || raisedButton.disabledTextColor;
  } else if (primary) {
    backgroundColor = raisedButton.primaryColor;
    labelColor = raisedButton.primaryTextColor;
  } else if (secondary) {
    backgroundColor = raisedButton.secondaryColor;
    labelColor = raisedButton.secondaryTextColor;
  } else {
    if (props.backgroundColor) {
      backgroundColor = props.backgroundColor;
    }
    if (props.labelColor) {
      labelColor = props.labelColor;
    }
  }

  var buttonHeight = style && style.height || button.height;

  return {
    root: {
      display: 'inline-block',
      transition: _transitions2.default.easeOut(),
      minWidth: fullWidth ? '100%' : button.minWidth
    },
    button: {
      height: buttonHeight,
      lineHeight: buttonHeight + 'px',
      width: '100%',
      padding: 0,
      borderRadius: borderRadius,
      transition: _transitions2.default.easeOut(),
      backgroundColor: backgroundColor,
      // That's the default value for a button but not a link
      textAlign: 'center'
    },
    label: {
      position: 'relative',
      opacity: 1,
      fontSize: raisedButton.fontSize,
      letterSpacing: 0,
      textTransform: raisedButton.textTransform || button.textTransform || 'uppercase',
      fontWeight: raisedButton.fontWeight,
      margin: 0,
      userSelect: 'none',
      paddingLeft: icon && labelPosition !== 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
      paddingRight: icon && labelPosition === 'before' ? 8 : baseTheme.spacing.desktopGutterLess,
      color: labelColor
    },
    icon: {
      verticalAlign: 'middle',
      marginLeft: label && labelPosition !== 'before' ? 12 : 0,
      marginRight: label && labelPosition === 'before' ? 12 : 0
    },
    overlay: {
      height: buttonHeight,
      borderRadius: borderRadius,
      backgroundColor: (state.keyboardFocused || state.hovered) && !disabled && (0, _colorManipulator.fade)(labelColor, amount),
      transition: _transitions2.default.easeOut(),
      top: 0
    },
    ripple: {
      color: labelColor,
      opacity: !(primary || secondary) ? 0.1 : 0.16
    }
  };
}

var RaisedButton = function (_Component) {
  (0, _inherits3.default)(RaisedButton, _Component);

  function RaisedButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RaisedButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RaisedButton.__proto__ || (0, _getPrototypeOf2.default)(RaisedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false,
      keyboardFocused: false,
      touched: false,
      initialZDepth: 0,
      zDepth: 0
    }, _this.handleMouseDown = function (event) {
      // only listen to left clicks
      if (event.button === 0) {
        _this.setState({
          zDepth: _this.state.initialZDepth + 1
        });
      }
      if (_this.props.onMouseDown) {
        _this.props.onMouseDown(event);
      }
    }, _this.handleMouseUp = function (event) {
      _this.setState({
        zDepth: _this.state.initialZDepth
      });
      if (_this.props.onMouseUp) {
        _this.props.onMouseUp(event);
      }
    }, _this.handleMouseLeave = function (event) {
      if (!_this.state.keyboardFocused) {
        _this.setState({
          zDepth: _this.state.initialZDepth,
          hovered: false
        });
      }
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    }, _this.handleMouseEnter = function (event) {
      if (!_this.state.keyboardFocused && !_this.state.touched) {
        _this.setState({
          hovered: true
        });
      }
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _this.handleTouchStart = function (event) {
      _this.setState({
        touched: true,
        zDepth: _this.state.initialZDepth + 1
      });

      if (_this.props.onTouchStart) {
        _this.props.onTouchStart(event);
      }
    }, _this.handleTouchEnd = function (event) {
      _this.setState({
        touched: true,
        zDepth: _this.state.initialZDepth
      });

      if (_this.props.onTouchEnd) {
        _this.props.onTouchEnd(event);
      }
    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
      var zDepth = keyboardFocused && !_this.props.disabled ? _this.state.initialZDepth + 1 : _this.state.initialZDepth;

      _this.setState({
        zDepth: zDepth,
        keyboardFocused: keyboardFocused
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RaisedButton, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var zDepth = this.props.disabled ? 0 : 1;
      this.setState({
        zDepth: zDepth,
        initialZDepth: zDepth
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var zDepth = nextProps.disabled ? 0 : 1;
      var nextState = {
        zDepth: zDepth,
        initialZDepth: zDepth
      };

      if (nextProps.disabled) {
        nextState.hovered = false;
      }

      this.setState(nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          backgroundColor = _props.backgroundColor,
          buttonStyle = _props.buttonStyle,
          children = _props.children,
          className = _props.className,
          disabled = _props.disabled,
          disabledBackgroundColor = _props.disabledBackgroundColor,
          disabledLabelColor = _props.disabledLabelColor,
          fullWidth = _props.fullWidth,
          icon = _props.icon,
          label = _props.label,
          labelColor = _props.labelColor,
          labelPosition = _props.labelPosition,
          labelStyle = _props.labelStyle,
          overlayStyle = _props.overlayStyle,
          primary = _props.primary,
          rippleStyle = _props.rippleStyle,
          secondary = _props.secondary,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'buttonStyle', 'children', 'className', 'disabled', 'disabledBackgroundColor', 'disabledLabelColor', 'fullWidth', 'icon', 'label', 'labelColor', 'labelPosition', 'labelStyle', 'overlayStyle', 'primary', 'rippleStyle', 'secondary', 'style']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);
      var mergedRippleStyles = (0, _simpleAssign2.default)({}, styles.ripple, rippleStyle);

      var buttonEventHandlers = disabled ? {} : {
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        onMouseLeave: this.handleMouseLeave,
        onMouseEnter: this.handleMouseEnter,
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd,
        onKeyboardFocus: this.handleKeyboardFocus
      };

      var labelElement = label && _react2.default.createElement(
        'span',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)), key: 'labelElement' },
        label
      );

      var iconCloned = icon && (0, _react.cloneElement)(icon, {
        color: icon.props.color || styles.label.color,
        style: (0, _simpleAssign2.default)(styles.icon, icon.props.style),
        key: 'iconCloned'
      });

      // Place label before or after children.
      var enhancedButtonChildren = labelPosition === 'before' ? [labelElement, iconCloned, children] : [children, iconCloned, labelElement];

      return _react2.default.createElement(
        _Paper2.default,
        {
          className: className,
          style: (0, _simpleAssign2.default)(styles.root, style),
          zDepth: this.state.zDepth
        },
        _react2.default.createElement(
          _EnhancedButton2.default,
          (0, _extends3.default)({}, other, buttonEventHandlers, {
            ref: 'container',
            disabled: disabled,
            style: (0, _simpleAssign2.default)(styles.button, buttonStyle),
            focusRippleColor: mergedRippleStyles.color,
            touchRippleColor: mergedRippleStyles.color,
            focusRippleOpacity: mergedRippleStyles.opacity,
            touchRippleOpacity: mergedRippleStyles.opacity
          }),
          _react2.default.createElement(
            'div',
            {
              ref: 'overlay',
              style: prepareStyles((0, _simpleAssign2.default)(styles.overlay, overlayStyle))
            },
            enhancedButtonChildren
          )
        )
      );
    }
  }]);
  return RaisedButton;
}(_react.Component);

RaisedButton.muiName = 'RaisedButton';
RaisedButton.defaultProps = {
  disabled: false,
  labelPosition: 'after',
  fullWidth: false,
  primary: false,
  secondary: false
};
RaisedButton.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
RaisedButton.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Override the default background color for the button,
   * but not the default disabled background color
   * (use `disabledBackgroundColor` for this).
   */
  backgroundColor: _propTypes2.default.string,
  /**
   * Override the inline-styles of the button element.
   */
  buttonStyle: _propTypes2.default.object,
  /**
   * The content of the button.
   * If a label is provided via the `label` prop, the text within the label
   * will be displayed in addition to the content provided here.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
    * The element to use as the container for the RaisedButton. Either a string to
    * use a DOM element or a ReactElement. This is useful for wrapping the
    * RaisedButton in a custom Link component. If a ReactElement is given, ensure
    * that it passes all of its given props through to the underlying DOM
    * element and renders its children prop for proper integration.
    */
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /**
   * If true, the element's ripple effect will be disabled.
   */
  disableTouchRipple: _propTypes2.default.bool,
  /**
   * If true, the button will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Override the default background color for the button
   * when it is disabled.
   */
  disabledBackgroundColor: _propTypes2.default.string,
  /**
   * The color of the button's label when the button is disabled.
   */
  disabledLabelColor: _propTypes2.default.string,
  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * The URL to link to when the button is clicked.
   */
  href: _propTypes2.default.string,
  /**
   * An icon to be displayed within the button.
   */
  icon: _propTypes2.default.node,
  /**
   * The label to be displayed within the button.
   * If content is provided via the `children` prop, that content will be
   * displayed in addition to the label provided here.
   */
  label: validateLabel,
  /**
   * The color of the button's label.
   */
  labelColor: _propTypes2.default.string,
  /**
   * The position of the button's label relative to the button's `children`.
   */
  labelPosition: _propTypes2.default.oneOf(['before', 'after']),
  /**
   * Override the inline-styles of the button's label element.
   */
  labelStyle: _propTypes2.default.object,
  /** @ignore */
  onMouseDown: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onMouseUp: _propTypes2.default.func,
  /** @ignore */
  onTouchEnd: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * Callback function fired when the button is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the button.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * Override the inline style of the button overlay.
   */
  overlayStyle: _propTypes2.default.object,
  /**
   * If true, the button will use the theme's primary color.
   */
  primary: _propTypes2.default.bool,
  /**
   * Override the inline style of the ripple element.
   */
  rippleStyle: _propTypes2.default.object,
  /**
   * If true, the button will use the theme's secondary color.
   * If both `secondary` and `primary` are true, the button will use
   * the theme's primary color.
   */
  secondary: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = RaisedButton;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _RaisedButton = __webpack_require__(747);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _RaisedButton2.default;

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(17);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(16);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(10);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(13);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEventListener = __webpack_require__(293);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rowsHeight = 24;

function getStyles(props, context, state) {
  return {
    root: {
      position: 'relative' },
    textarea: {
      height: state.height,
      width: '100%',
      resize: 'none',
      font: 'inherit',
      padding: 0,
      cursor: 'inherit'
    },
    shadow: {
      resize: 'none',
      // Overflow also needed to here to remove the extra row
      // added to textareas in Firefox.
      overflow: 'hidden',
      // Visibility needed to hide the extra text area on ipads
      visibility: 'hidden',
      position: 'absolute',
      height: 'auto'
    }
  };
}

var EnhancedTextarea = function (_Component) {
  (0, _inherits3.default)(EnhancedTextarea, _Component);

  function EnhancedTextarea() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EnhancedTextarea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedTextarea.__proto__ || (0, _getPrototypeOf2.default)(EnhancedTextarea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      height: null
    }, _this.handleResize = function (event) {
      _this.syncHeightWithShadow(undefined, event);
    }, _this.handleChange = function (event) {
      if (!_this.props.hasOwnProperty('value')) {
        _this.syncHeightWithShadow(event.target.value);
      }

      if (_this.props.hasOwnProperty('valueLink')) {
        _this.props.valueLink.requestChange(event.target.value);
      }

      if (_this.props.onChange) {
        _this.props.onChange(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(EnhancedTextarea, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        height: this.props.rows * rowsHeight
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.syncHeightWithShadow();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value || nextProps.rowsMax !== this.props.rowsMax) {
        this.syncHeightWithShadow(nextProps.value, null, nextProps);
      }
    }
  }, {
    key: 'getInputNode',
    value: function getInputNode() {
      return this.refs.input;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.getInputNode().value = value;
      this.syncHeightWithShadow(value);
    }
  }, {
    key: 'syncHeightWithShadow',
    value: function syncHeightWithShadow(newValue, event, props) {
      var shadow = this.refs.shadow;
      var displayText = this.props.hintText && (newValue === '' || newValue === undefined || newValue === null) ? this.props.hintText : newValue;

      if (displayText !== undefined) {
        shadow.value = displayText;
      }

      var newHeight = shadow.scrollHeight;

      // Guarding for jsdom, where scrollHeight isn't present.
      // See https://github.com/tmpvar/jsdom/issues/1013
      if (newHeight === undefined) return;

      props = props || this.props;

      if (props.rowsMax >= props.rows) {
        newHeight = Math.min(props.rowsMax * rowsHeight, newHeight);
      }

      newHeight = Math.max(newHeight, rowsHeight);

      if (this.state.height !== newHeight) {
        this.setState({
          height: newHeight
        });

        if (props.onHeightChange) {
          props.onHeightChange(event, newHeight);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onChange = _props.onChange,
          onHeightChange = _props.onHeightChange,
          rows = _props.rows,
          rowsMax = _props.rowsMax,
          shadowStyle = _props.shadowStyle,
          style = _props.style,
          hintText = _props.hintText,
          textareaStyle = _props.textareaStyle,
          valueLink = _props.valueLink,
          other = (0, _objectWithoutProperties3.default)(_props, ['onChange', 'onHeightChange', 'rows', 'rowsMax', 'shadowStyle', 'style', 'hintText', 'textareaStyle', 'valueLink']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);
      var rootStyles = (0, _simpleAssign2.default)(styles.root, style);
      var textareaStyles = (0, _simpleAssign2.default)(styles.textarea, textareaStyle);
      var shadowStyles = (0, _simpleAssign2.default)({}, textareaStyles, styles.shadow, shadowStyle);

      if (this.props.hasOwnProperty('valueLink')) {
        other.value = this.props.valueLink.value;
      }

      return _react2.default.createElement(
        'div',
        { style: prepareStyles(rootStyles) },
        _react2.default.createElement(_reactEventListener2.default, { target: 'window', onResize: this.handleResize }),
        _react2.default.createElement('textarea', {
          ref: 'shadow',
          style: prepareStyles(shadowStyles),
          tabIndex: '-1',
          rows: this.props.rows,
          defaultValue: this.props.defaultValue,
          readOnly: true,
          value: this.props.value,
          valueLink: this.props.valueLink
        }),
        _react2.default.createElement('textarea', (0, _extends3.default)({}, other, {
          ref: 'input',
          rows: this.props.rows,
          style: prepareStyles(textareaStyles),
          onChange: this.handleChange
        }))
      );
    }
  }]);
  return EnhancedTextarea;
}(_react.Component);

EnhancedTextarea.defaultProps = {
  rows: 1
};
EnhancedTextarea.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
EnhancedTextarea.propTypes = process.env.NODE_ENV !== "production" ? {
  defaultValue: _propTypes2.default.any,
  disabled: _propTypes2.default.bool,
  hintText: _propTypes2.default.node,
  onChange: _propTypes2.default.func,
  onHeightChange: _propTypes2.default.func,
  rows: _propTypes2.default.number,
  rowsMax: _propTypes2.default.number,
  shadowStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  textareaStyle: _propTypes2.default.object,
  value: _propTypes2.default.string,
  valueLink: _propTypes2.default.object
} : {};
exports.default = EnhancedTextarea;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(17);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(16);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(10);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(7);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(8);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(12);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(13);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(50);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _transitions = __webpack_require__(25);

var _transitions2 = _interopRequireDefault(_transitions);

var _EnhancedTextarea = __webpack_require__(749);

var _EnhancedTextarea2 = _interopRequireDefault(_EnhancedTextarea);

var _TextFieldHint = __webpack_require__(751);

var _TextFieldHint2 = _interopRequireDefault(_TextFieldHint);

var _TextFieldLabel = __webpack_require__(752);

var _TextFieldLabel2 = _interopRequireDefault(_TextFieldLabel);

var _TextFieldUnderline = __webpack_require__(753);

var _TextFieldUnderline2 = _interopRequireDefault(_TextFieldUnderline);

var _warning = __webpack_require__(19);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getStyles = function getStyles(props, context, state) {
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      _context$muiTheme$tex = _context$muiTheme.textField,
      floatingLabelColor = _context$muiTheme$tex.floatingLabelColor,
      focusColor = _context$muiTheme$tex.focusColor,
      textColor = _context$muiTheme$tex.textColor,
      disabledTextColor = _context$muiTheme$tex.disabledTextColor,
      backgroundColor = _context$muiTheme$tex.backgroundColor,
      errorColor = _context$muiTheme$tex.errorColor;


  var styles = {
    root: {
      fontSize: 16,
      lineHeight: '24px',
      width: props.fullWidth ? '100%' : 256,
      height: (props.rows - 1) * 24 + (props.floatingLabelText ? 72 : 48),
      display: 'inline-block',
      position: 'relative',
      backgroundColor: backgroundColor,
      fontFamily: baseTheme.fontFamily,
      transition: _transitions2.default.easeOut('200ms', 'height'),
      cursor: props.disabled ? 'not-allowed' : 'auto'
    },
    error: {
      position: 'relative',
      bottom: 2,
      fontSize: 12,
      lineHeight: '12px',
      color: errorColor,
      transition: _transitions2.default.easeOut()
    },
    floatingLabel: {
      color: props.disabled ? disabledTextColor : floatingLabelColor,
      pointerEvents: 'none'
    },
    input: {
      padding: 0,
      position: 'relative',
      width: '100%',
      border: 'none',
      outline: 'none',
      backgroundColor: 'rgba(0,0,0,0)',
      color: props.disabled ? disabledTextColor : textColor,
      cursor: 'inherit',
      font: 'inherit',
      WebkitTextFillColor: props.disabled ? disabledTextColor : textColor,
      WebkitTapHighlightColor: 'rgba(0,0,0,0)' },
    inputNative: {
      appearance: 'textfield' }
  };

  styles.textarea = (0, _simpleAssign2.default)({}, styles.input, {
    marginTop: props.floatingLabelText ? 36 : 12,
    marginBottom: props.floatingLabelText ? -36 : -12,
    boxSizing: 'border-box',
    font: 'inherit'
  });

  // Do not assign a height to the textarea as he handles it on his own.
  styles.input.height = '100%';

  if (state.isFocused) {
    styles.floatingLabel.color = focusColor;
  }

  if (props.floatingLabelText) {
    styles.input.boxSizing = 'border-box';

    if (!props.multiLine) {
      styles.input.marginTop = 14;
    }

    if (state.errorText) {
      styles.error.bottom = !props.multiLine ? styles.error.fontSize + 3 : 3;
    }
  }

  if (state.errorText) {
    if (state.isFocused) {
      styles.floatingLabel.color = styles.error.color;
    }
  }

  return styles;
};

/**
 * Check if a value is valid to be displayed inside an input.
 *
 * @param The value to check.
 * @returns True if the string provided is valid, false otherwise.
 */
function isValid(value) {
  return value !== '' && value !== undefined && value !== null && !(Array.isArray(value) && value.length === 0);
}

var TextField = function (_Component) {
  (0, _inherits3.default)(TextField, _Component);

  function TextField() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TextField.__proto__ || (0, _getPrototypeOf2.default)(TextField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isFocused: false,
      errorText: undefined,
      hasValue: false
    }, _this.handleInputBlur = function (event) {
      _this.setState({ isFocused: false });
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleInputChange = function (event) {
      if (!_this.props.hasOwnProperty('value')) {
        _this.setState({ hasValue: isValid(event.target.value) });
      }
      if (_this.props.onChange) {
        _this.props.onChange(event, event.target.value);
      }
    }, _this.handleInputFocus = function (event) {
      if (_this.props.disabled) {
        return;
      }
      _this.setState({ isFocused: true });
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _this.handleHeightChange = function (event, height) {
      var newHeight = height + 24;
      if (_this.props.floatingLabelText) {
        newHeight += 24;
      }
      _reactDom2.default.findDOMNode(_this).style.height = newHeight + 'px';
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TextField, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          children = _props.children,
          name = _props.name,
          hintText = _props.hintText,
          floatingLabelText = _props.floatingLabelText,
          id = _props.id;


      var propsLeaf = children ? children.props : this.props;

      this.setState({
        errorText: this.props.errorText,
        hasValue: isValid(propsLeaf.value) || isValid(propsLeaf.defaultValue)
      });

      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(name || hintText || floatingLabelText || id, 'Material-UI: We don\'t have enough information\n      to build a robust unique id for the TextField component. Please provide an id or a name.') : void 0;

      var uniqueId = name + '-' + hintText + '-' + floatingLabelText + '-' + Math.floor(Math.random() * 0xFFFF);
      this.uniqueId = uniqueId.replace(/[^A-Za-z0-9-]/gi, '');
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.errorText !== this.props.errorText) {
        this.setState({
          errorText: nextProps.errorText
        });
      }

      if (nextProps.children && nextProps.children.props) {
        nextProps = nextProps.children.props;
      }

      if (nextProps.hasOwnProperty('value')) {
        var hasValue = isValid(nextProps.value);

        this.setState({
          hasValue: hasValue
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return !(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState) || !(0, _shallowEqual2.default)(this.context, nextContext);
    }
  }, {
    key: 'blur',
    value: function blur() {
      if (this.input) {
        this.getInputNode().blur();
      }
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.input) {
        this.getInputNode().focus();
      }
    }
  }, {
    key: 'select',
    value: function select() {
      if (this.input) {
        this.getInputNode().select();
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.input ? this.getInputNode().value : undefined;
    }
  }, {
    key: 'getInputNode',
    value: function getInputNode() {
      return this.props.children || this.props.multiLine ? this.input.getInputNode() : _reactDom2.default.findDOMNode(this.input);
    }
  }, {
    key: '_isControlled',
    value: function _isControlled() {
      return this.props.hasOwnProperty('value');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          disabled = _props2.disabled,
          errorStyle = _props2.errorStyle,
          errorText = _props2.errorText,
          floatingLabelFixed = _props2.floatingLabelFixed,
          floatingLabelFocusStyle = _props2.floatingLabelFocusStyle,
          floatingLabelShrinkStyle = _props2.floatingLabelShrinkStyle,
          floatingLabelStyle = _props2.floatingLabelStyle,
          floatingLabelText = _props2.floatingLabelText,
          fullWidth = _props2.fullWidth,
          hintText = _props2.hintText,
          hintStyle = _props2.hintStyle,
          id = _props2.id,
          inputStyle = _props2.inputStyle,
          multiLine = _props2.multiLine,
          onBlur = _props2.onBlur,
          onChange = _props2.onChange,
          onFocus = _props2.onFocus,
          style = _props2.style,
          type = _props2.type,
          underlineDisabledStyle = _props2.underlineDisabledStyle,
          underlineFocusStyle = _props2.underlineFocusStyle,
          underlineShow = _props2.underlineShow,
          underlineStyle = _props2.underlineStyle,
          rows = _props2.rows,
          rowsMax = _props2.rowsMax,
          textareaStyle = _props2.textareaStyle,
          other = (0, _objectWithoutProperties3.default)(_props2, ['children', 'className', 'disabled', 'errorStyle', 'errorText', 'floatingLabelFixed', 'floatingLabelFocusStyle', 'floatingLabelShrinkStyle', 'floatingLabelStyle', 'floatingLabelText', 'fullWidth', 'hintText', 'hintStyle', 'id', 'inputStyle', 'multiLine', 'onBlur', 'onChange', 'onFocus', 'style', 'type', 'underlineDisabledStyle', 'underlineFocusStyle', 'underlineShow', 'underlineStyle', 'rows', 'rowsMax', 'textareaStyle']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);
      var inputId = id || this.uniqueId;

      var errorTextElement = this.state.errorText && _react2.default.createElement(
        'div',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.error, errorStyle)) },
        this.state.errorText
      );

      var floatingLabelTextElement = floatingLabelText && _react2.default.createElement(
        _TextFieldLabel2.default,
        {
          muiTheme: this.context.muiTheme,
          style: (0, _simpleAssign2.default)(styles.floatingLabel, floatingLabelStyle, this.state.isFocused ? floatingLabelFocusStyle : null),
          shrinkStyle: floatingLabelShrinkStyle,
          htmlFor: inputId,
          shrink: this.state.hasValue || this.state.isFocused || floatingLabelFixed,
          disabled: disabled
        },
        floatingLabelText
      );

      var inputProps = {
        id: inputId,
        ref: function ref(elem) {
          return _this2.input = elem;
        },
        disabled: this.props.disabled,
        onBlur: this.handleInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.handleInputFocus
      };

      var childStyleMerged = (0, _simpleAssign2.default)(styles.input, inputStyle);

      var inputElement = void 0;
      if (children) {
        inputElement = _react2.default.cloneElement(children, (0, _extends3.default)({}, inputProps, children.props, {
          style: (0, _simpleAssign2.default)(childStyleMerged, children.props.style)
        }));
      } else {
        inputElement = multiLine ? _react2.default.createElement(_EnhancedTextarea2.default, (0, _extends3.default)({
          style: childStyleMerged,
          textareaStyle: (0, _simpleAssign2.default)(styles.textarea, styles.inputNative, textareaStyle),
          rows: rows,
          rowsMax: rowsMax,
          hintText: hintText
        }, other, inputProps, {
          onHeightChange: this.handleHeightChange
        })) : _react2.default.createElement('input', (0, _extends3.default)({
          type: type,
          style: prepareStyles((0, _simpleAssign2.default)(styles.inputNative, childStyleMerged))
        }, other, inputProps));
      }

      var rootProps = {};

      if (children) {
        rootProps = other;
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, rootProps, {
          className: className,
          style: prepareStyles((0, _simpleAssign2.default)(styles.root, style))
        }),
        floatingLabelTextElement,
        hintText ? _react2.default.createElement(_TextFieldHint2.default, {
          muiTheme: this.context.muiTheme,
          show: !(this.state.hasValue || floatingLabelText && !this.state.isFocused) || !this.state.hasValue && floatingLabelText && floatingLabelFixed && !this.state.isFocused,
          style: hintStyle,
          text: hintText
        }) : null,
        inputElement,
        underlineShow ? _react2.default.createElement(_TextFieldUnderline2.default, {
          disabled: disabled,
          disabledStyle: underlineDisabledStyle,
          error: !!this.state.errorText,
          errorStyle: errorStyle,
          focus: this.state.isFocused,
          focusStyle: underlineFocusStyle,
          muiTheme: this.context.muiTheme,
          style: underlineStyle
        }) : null,
        errorTextElement
      );
    }
  }]);
  return TextField;
}(_react.Component);

TextField.defaultProps = {
  disabled: false,
  floatingLabelFixed: false,
  multiLine: false,
  fullWidth: false,
  type: 'text',
  underlineShow: true,
  rows: 1
};
TextField.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
TextField.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The text string to use for the default value.
   */
  defaultValue: _propTypes2.default.any,
  /**
   * Disables the text field if set to true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The style object to use to override error styles.
   */
  errorStyle: _propTypes2.default.object,
  /**
   * The error content to display.
   */
  errorText: _propTypes2.default.node,
  /**
   * If true, the floating label will float even when there is no value.
   */
  floatingLabelFixed: _propTypes2.default.bool,
  /**
   * The style object to use to override floating label styles when focused.
   */
  floatingLabelFocusStyle: _propTypes2.default.object,
  /**
   * The style object to use to override floating label styles when shrunk.
   */
  floatingLabelShrinkStyle: _propTypes2.default.object,
  /**
   * The style object to use to override floating label styles.
   */
  floatingLabelStyle: _propTypes2.default.object,
  /**
   * The content to use for the floating label element.
   */
  floatingLabelText: _propTypes2.default.node,
  /**
   * If true, the field receives the property width 100%.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the TextField's hint text element.
   */
  hintStyle: _propTypes2.default.object,
  /**
   * The hint content to display.
   */
  hintText: _propTypes2.default.node,
  /**
   * The id prop for the text field.
   */
  id: _propTypes2.default.string,
  /**
   * Override the inline-styles of the TextField's input element.
   * When multiLine is false: define the style of the input element.
   * When multiLine is true: define the style of the container of the textarea.
   */
  inputStyle: _propTypes2.default.object,
  /**
   * If true, a textarea element will be rendered.
   * The textarea also grows and shrinks according to the number of lines.
   */
  multiLine: _propTypes2.default.bool,
  /**
   * Name applied to the input.
   */
  name: _propTypes2.default.string,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function that is fired when the textfield's value changes.
   *
   * @param {object} event Change event targeting the text field.
   * @param {string} newValue The new value of the text field.
   */
  onChange: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /**
   * Number of rows to display when multiLine option is set to true.
   */
  rows: _propTypes2.default.number,
  /**
   * Maximum number of rows to display when
   * multiLine option is set to true.
   */
  rowsMax: _propTypes2.default.number,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override the inline-styles of the TextField's textarea element.
   * The TextField use either a textarea or an input,
   * this property has effects only when multiLine is true.
   */
  textareaStyle: _propTypes2.default.object,
  /**
   * Specifies the type of input to display
   * such as "password" or "text".
   */
  type: _propTypes2.default.string,
  /**
   * Override the inline-styles of the
   * TextField's underline element when disabled.
   */
  underlineDisabledStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the TextField's
   * underline element when focussed.
   */
  underlineFocusStyle: _propTypes2.default.object,
  /**
   * If true, shows the underline for the text field.
   */
  underlineShow: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the TextField's underline element.
   */
  underlineStyle: _propTypes2.default.object,
  /**
   * The value of the text field.
   */
  value: _propTypes2.default.any
} : {};
exports.default = TextField;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleAssign = __webpack_require__(13);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(25);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props) {
  var hintColor = props.muiTheme.textField.hintColor,
      show = props.show;


  return {
    root: {
      position: 'absolute',
      opacity: show ? 1 : 0,
      color: hintColor,
      transition: _transitions2.default.easeOut(),
      bottom: 12
    }
  };
}

var TextFieldHint = function TextFieldHint(props) {
  var prepareStyles = props.muiTheme.prepareStyles,
      style = props.style,
      text = props.text;


  var styles = getStyles(props);

  return _react2.default.createElement(
    'div',
    { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
    text
  );
};

TextFieldHint.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * @ignore
   * The material-ui theme applied to this component.
   */
  muiTheme: _propTypes2.default.object.isRequired,
  /**
   * True if the hint text should be visible.
   */
  show: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The hint text displayed.
   */
  text: _propTypes2.default.node
} : {};

TextFieldHint.defaultProps = {
  show: true
};

exports.default = TextFieldHint;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleAssign = __webpack_require__(13);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(25);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props) {
  var defaultStyles = {
    position: 'absolute',
    lineHeight: '22px',
    top: 38,
    transition: _transitions2.default.easeOut(),
    zIndex: 1, // Needed to display label above Chrome's autocomplete field background
    transform: 'scale(1) translate(0, 0)',
    transformOrigin: 'left top',
    pointerEvents: 'auto',
    userSelect: 'none'
  };

  var shrinkStyles = props.shrink ? (0, _simpleAssign2.default)({
    transform: 'scale(0.75) translate(0, -28px)',
    pointerEvents: 'none'
  }, props.shrinkStyle) : null;

  return {
    root: (0, _simpleAssign2.default)(defaultStyles, props.style, shrinkStyles)
  };
}

var TextFieldLabel = function TextFieldLabel(props) {
  var muiTheme = props.muiTheme,
      className = props.className,
      children = props.children,
      htmlFor = props.htmlFor,
      onTouchTap = props.onTouchTap;
  var prepareStyles = muiTheme.prepareStyles;

  var styles = getStyles(props);

  return _react2.default.createElement(
    'label',
    {
      className: className,
      style: prepareStyles(styles.root),
      htmlFor: htmlFor,
      onTouchTap: onTouchTap
    },
    children
  );
};

TextFieldLabel.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The label contents.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Disables the label if set to true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * The id of the target element that this label should refer to.
   */
  htmlFor: _propTypes2.default.string,
  /**
   * @ignore
   * The material-ui theme applied to this component.
   */
  muiTheme: _propTypes2.default.object.isRequired,
  /**
   * Callback function for when the label is selected via a touch tap.
   *
   * @param {object} event TouchTap event targeting the text field label.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * True if the floating label should shrink.
   */
  shrink: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element when shrunk.
   */
  shrinkStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};

TextFieldLabel.defaultProps = {
  disabled: false,
  shrink: false
};

exports.default = TextFieldLabel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleAssign = __webpack_require__(13);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(25);

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  /**
   * True if the parent `TextField` is disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the underline when parent `TextField` is disabled.
   */
  disabledStyle: _propTypes2.default.object,
  /**
   * True if the parent `TextField` has an error.
   */
  error: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the underline when parent `TextField` has an error.
   */
  errorStyle: _propTypes2.default.object,
  /**
   * True if the parent `TextField` is focused.
   */
  focus: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the underline when parent `TextField` is focused.
   */
  focusStyle: _propTypes2.default.object,
  /**
   * @ignore
   * The material-ui theme applied to this component.
   */
  muiTheme: _propTypes2.default.object.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
};

var defaultProps = {
  disabled: false,
  disabledStyle: {},
  error: false,
  errorStyle: {},
  focus: false,
  focusStyle: {},
  style: {}
};

var TextFieldUnderline = function TextFieldUnderline(props) {
  var disabled = props.disabled,
      disabledStyle = props.disabledStyle,
      error = props.error,
      errorStyle = props.errorStyle,
      focus = props.focus,
      focusStyle = props.focusStyle,
      muiTheme = props.muiTheme,
      style = props.style;
  var errorStyleColor = errorStyle.color;
  var prepareStyles = muiTheme.prepareStyles,
      _muiTheme$textField = muiTheme.textField,
      borderColor = _muiTheme$textField.borderColor,
      disabledTextColor = _muiTheme$textField.disabledTextColor,
      errorColor = _muiTheme$textField.errorColor,
      focusColor = _muiTheme$textField.focusColor;


  var styles = {
    root: {
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderBottom: 'solid 1px',
      borderColor: borderColor,
      bottom: 8,
      boxSizing: 'content-box',
      margin: 0,
      position: 'absolute',
      width: '100%'
    },
    disabled: {
      borderBottom: 'dotted 2px',
      borderColor: disabledTextColor
    },
    focus: {
      borderBottom: 'solid 2px',
      borderColor: focusColor,
      transform: 'scaleX(0)',
      transition: _transitions2.default.easeOut()
    },
    error: {
      borderColor: errorStyleColor ? errorStyleColor : errorColor,
      transform: 'scaleX(1)'
    }
  };

  var underline = (0, _simpleAssign2.default)({}, styles.root, style);
  var focusedUnderline = (0, _simpleAssign2.default)({}, underline, styles.focus, focusStyle);

  if (disabled) underline = (0, _simpleAssign2.default)({}, underline, styles.disabled, disabledStyle);
  if (focus) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, { transform: 'scaleX(1)' });
  if (error) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, styles.error);

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('hr', { 'aria-hidden': 'true', style: prepareStyles(underline) }),
    _react2.default.createElement('hr', { 'aria-hidden': 'true', style: prepareStyles(focusedUnderline) })
  );
};

TextFieldUnderline.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
TextFieldUnderline.defaultProps = defaultProps;

exports.default = TextFieldUnderline;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Login = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _LoginBoxContainer = __webpack_require__(785);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login() {
        _classCallCheck(this, Login);

        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
    }

    _createClass(Login, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_LoginBoxContainer.LoginBoxContainer, null)
            );
        }
    }]);

    return Login;
}(_react2.default.Component);

exports.Login = Login;

/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginBoxContainer = undefined;

var _reactRedux = __webpack_require__(33);

var _LoginBoxForm = __webpack_require__(786);

var _login = __webpack_require__(180);

/*import {SubmissionError} from 'redux-form';*/

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        onSubmit: function onSubmit(values) {
            dispatch((0, _login.sendLoginRequest)(values));
            /*return new Promise ((resolve, reject) => {
                throw new SubmissionError({ username: 'User does not exist', _error: 'Login failed!' });
            });*/
        }
    };
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        rejected: state.login.rejected === true
    };
};

var LoginBoxContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_LoginBoxForm.LoginBoxForm);

exports.LoginBoxContainer = LoginBoxContainer;

/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginBoxForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Paper = __webpack_require__(104);

var _Paper2 = _interopRequireDefault(_Paper);

var _RaisedButton = __webpack_require__(748);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _reduxForm = __webpack_require__(292);

var _MyTextField = __webpack_require__(787);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//planned to show funny image if unauthorized
//import image from 'resources/401.png';


var style = {
    maxWidth: '400px',
    width: '100%',
    padding: '3% 2% 2% 2%',
    textAlign: 'center',
    borderRadius: '3%'
};

var LoginBox = function (_React$Component) {
    _inherits(LoginBox, _React$Component);

    function LoginBox() {
        _classCallCheck(this, LoginBox);

        return _possibleConstructorReturn(this, (LoginBox.__proto__ || Object.getPrototypeOf(LoginBox)).apply(this, arguments));
    }

    _createClass(LoginBox, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                handleSubmit = _props.handleSubmit,
                rejected = _props.rejected;


            return _react2.default.createElement(
                'div',
                { style: { display: 'flex', justifyContent: 'center', marginTop: '10%' } },
                _react2.default.createElement(
                    _Paper2.default,
                    { style: style, zDepth: 4 },
                    _react2.default.createElement(
                        'form',
                        { onSubmit: handleSubmit, style: { display: 'flex', flexDirection: 'column', justifyContent: 'center' } },
                        _react2.default.createElement(_reduxForm.Field, {
                            name: 'username',
                            component: _MyTextField.MyTextField,
                            floatingLabelText: 'Username',
                            type: 'text'
                        }),
                        _react2.default.createElement(_reduxForm.Field, {
                            name: 'password',
                            component: _MyTextField.MyTextField,
                            floatingLabelText: 'Password (USE \'admin\')',
                            type: 'password' }),
                        _react2.default.createElement(
                            'div',
                            { style: { display: 'flex', flexDirection: 'column', position: 'relative' } },
                            rejected && _react2.default.createElement(
                                'div',
                                { style: { color: 'red', position: 'absolute', width: '100%' } },
                                'Invalid username or password'
                            ),
                            _react2.default.createElement(_RaisedButton2.default, { type: 'submit', label: 'Log in', primary: true, style: { margin: 'auto', marginTop: '30px' } })
                        )
                    )
                )
            );
        }
    }]);

    return LoginBox;
}(_react2.default.Component);

LoginBox.propTypes = {
    handleSubmit: _propTypes2.default.func.isRequired,
    rejected: _propTypes2.default.bool
};

//////////////////////////////////////////////////////////////////////////////////////////////
var LoginBoxForm = (0, _reduxForm.reduxForm)({
    form: 'login'
})(LoginBox);

LoginBoxForm.propTypes = {
    onSubmit: _propTypes2.default.func.isRequired,
    rejected: _propTypes2.default.bool
};

exports.LoginBoxForm = LoginBoxForm;

/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MyTextField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextField = __webpack_require__(742);

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyTextField = function (_React$Component) {
    _inherits(MyTextField, _React$Component);

    function MyTextField() {
        _classCallCheck(this, MyTextField);

        return _possibleConstructorReturn(this, (MyTextField.__proto__ || Object.getPrototypeOf(MyTextField)).apply(this, arguments));
    }

    _createClass(MyTextField, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                floatingLabelText = _props.floatingLabelText,
                type = _props.type,
                input = _props.input,
                meta = _props.meta;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_TextField2.default, _extends({}, input, {
                    floatingLabelFixed: true,
                    floatingLabelText: floatingLabelText,
                    type: type,
                    autoComplete: 'off',
                    style: { margin: 'auto' }
                })),
                input.error && _react2.default.createElement(
                    'span',
                    null,
                    'Invalid'
                )
            );
        }
    }]);

    return MyTextField;
}(_react2.default.Component);

MyTextField.propTypes = {
    floatingLabelText: _propTypes2.default.string.isRequired,
    type: _propTypes2.default.string.isRequired,
    input: _propTypes2.default.object,
    meta: _propTypes2.default.object
};

exports.MyTextField = MyTextField;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL0xvZ2luL0xvZ2luQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL2luZGV4LmpzPzc0NzcqIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uL1JhaXNlZEJ1dHRvbi5qcz84NGZkKiIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbi9pbmRleC5qcz84ZTk1KiIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1RleHRGaWVsZC9FbmhhbmNlZFRleHRhcmVhLmpzPzZhZjIqIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL1RleHRGaWVsZC5qcz9iYTViKiIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1RleHRGaWVsZC9UZXh0RmllbGRIaW50LmpzPzE4MjUqIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL1RleHRGaWVsZExhYmVsLmpzP2I4ZjEqIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL1RleHRGaWVsZFVuZGVybGluZS5qcz9hMzkwKiIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL0xvZ2luL0xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvTG9naW4vTG9naW5Cb3hDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9Mb2dpbi9Mb2dpbkJveEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9Mb2dpbi9NeVRleHRGaWVsZC5qcyJdLCJuYW1lcyI6WyJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiTG9naW5Db250YWluZXIiLCJMb2dpbiIsIkNvbXBvbmVudCIsIm9uU3VibWl0IiwidmFsdWVzIiwicmVqZWN0ZWQiLCJsb2dpbiIsIkxvZ2luQm94Q29udGFpbmVyIiwic3R5bGUiLCJtYXhXaWR0aCIsIndpZHRoIiwicGFkZGluZyIsInRleHRBbGlnbiIsImJvcmRlclJhZGl1cyIsIkxvZ2luQm94IiwicHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJmbGV4RGlyZWN0aW9uIiwicG9zaXRpb24iLCJjb2xvciIsIm1hcmdpbiIsInByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsIkxvZ2luQm94Rm9ybSIsImZvcm0iLCJNeVRleHRGaWVsZCIsImZsb2F0aW5nTGFiZWxUZXh0IiwidHlwZSIsImlucHV0IiwibWV0YSIsImVycm9yIiwic3RyaW5nIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRUEsSUFBTUEscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFdBQWUsRUFBZjtBQUFBLENBQTNCOztBQUlBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFdBQVksRUFBWjtBQUFBLENBQXhCOztBQUlBLElBQU1DLGlCQUFpQix5QkFBUUYsZUFBUixFQUF5QkYsa0JBQXpCLGVBQXZCOztRQUVRSSxjLEdBQUFBLGM7Ozs7Ozs7O0FDZFI7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysc0M7Ozs7Ozs7OytDQ2JBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG1FQUFtRSxhQUFhO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2REFBNkQ7O0FBRTdELDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLG1HQUFtRztBQUM1RztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0JBQWtCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsOEVBQThFO0FBQ3ZGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsdUZBQXVGO0FBQ3ZGO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCw0Qjs7Ozs7Ozs7OytDQ3RrQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHdFQUF3RTtBQUM3RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsZ0M7Ozs7Ozs7OzsrQ0MvRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QWUsMEJBQVU7QUFDM0JDLFVBQU07QUFEcUIsQ0FBVixFQUVsQmYsUUFGa0IsQ0FBckI7O0FBSUFjLGFBQWFKLFNBQWIsR0FBeUI7QUFDckJyQixjQUFVLG9CQUFVc0IsSUFBVixDQUFlQyxVQURKO0FBRXJCckIsY0FBVSxvQkFBVXNCO0FBRkMsQ0FBekI7O1FBS1FDLFksR0FBQUEsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGUjs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVNRSxXOzs7Ozs7Ozs7OztpQ0FFUTtBQUFBLHlCQUV5QyxLQUFLZixLQUY5QztBQUFBLGdCQUVDZ0IsaUJBRkQsVUFFQ0EsaUJBRkQ7QUFBQSxnQkFFb0JDLElBRnBCLFVBRW9CQSxJQUZwQjtBQUFBLGdCQUUwQkMsS0FGMUIsVUFFMEJBLEtBRjFCO0FBQUEsZ0JBRWlDQyxJQUZqQyxVQUVpQ0EsSUFGakM7OztBQUlOLG1CQUNJO0FBQUE7QUFBQTtBQUNJLGdGQUNRRCxLQURSO0FBRUksd0NBQW9CLElBRnhCO0FBR0ksdUNBQW1CRixpQkFIdkI7QUFJSSwwQkFBTUMsSUFKVjtBQUtJLGtDQUFhLEtBTGpCO0FBTUksMkJBQU8sRUFBQ1QsUUFBUSxNQUFUO0FBTlgsbUJBREo7QUFTS1Usc0JBQU1FLEtBQU4sSUFDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkosYUFESjtBQWdCSDs7OztFQXRCcUIsZ0JBQU1qQyxTOztBQXlCaEM0QixZQUFZTixTQUFaLEdBQXdCO0FBQ3BCTyx1QkFBbUIsb0JBQVVLLE1BQVYsQ0FBaUJWLFVBRGhCO0FBRXBCTSxVQUFNLG9CQUFVSSxNQUFWLENBQWlCVixVQUZIO0FBR3BCTyxXQUFPLG9CQUFVSSxNQUhHO0FBSXBCSCxVQUFNLG9CQUFVRztBQUpJLENBQXhCOztRQU9RUCxXLEdBQUFBLFciLCJmaWxlIjoiMi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCB7TG9naW59IGZyb20gJy4vTG9naW4nO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG5cclxufSk7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgICBcclxufSk7XHJcblxyXG5jb25zdCBMb2dpbkNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExvZ2luKTtcclxuXHJcbmV4cG9ydCB7TG9naW5Db250YWluZXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvTG9naW4vTG9naW5Db250YWluZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfVGV4dEZpZWxkID0gcmVxdWlyZSgnLi9UZXh0RmllbGQnKTtcblxudmFyIF9UZXh0RmllbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dEZpZWxkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1RleHRGaWVsZDIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3NDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX2NvbG9yTWFuaXB1bGF0b3IgPSByZXF1aXJlKCcuLi91dGlscy9jb2xvck1hbmlwdWxhdG9yJyk7XG5cbnZhciBfRW5oYW5jZWRCdXR0b24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9FbmhhbmNlZEJ1dHRvbicpO1xuXG52YXIgX0VuaGFuY2VkQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VuaGFuY2VkQnV0dG9uKTtcblxudmFyIF9QYXBlciA9IHJlcXVpcmUoJy4uL1BhcGVyJyk7XG5cbnZhciBfUGFwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFwZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUxhYmVsKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghcHJvcHMuY2hpbGRyZW4gJiYgcHJvcHMubGFiZWwgIT09IDAgJiYgIXByb3BzLmxhYmVsICYmICFwcm9wcy5pY29uKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdSZXF1aXJlZCBwcm9wIGxhYmVsIG9yIGNoaWxkcmVuIG9yIGljb24gd2FzIG5vdCBzcGVjaWZpZWQgaW4gJyArIGNvbXBvbmVudE5hbWUgKyAnLicpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQsIHN0YXRlKSB7XG4gIHZhciBfY29udGV4dCRtdWlUaGVtZSA9IGNvbnRleHQubXVpVGhlbWUsXG4gICAgICBiYXNlVGhlbWUgPSBfY29udGV4dCRtdWlUaGVtZS5iYXNlVGhlbWUsXG4gICAgICBidXR0b24gPSBfY29udGV4dCRtdWlUaGVtZS5idXR0b24sXG4gICAgICByYWlzZWRCdXR0b24gPSBfY29udGV4dCRtdWlUaGVtZS5yYWlzZWRCdXR0b24sXG4gICAgICBib3JkZXJSYWRpdXMgPSBfY29udGV4dCRtdWlUaGVtZS5ib3JkZXJSYWRpdXM7XG4gIHZhciBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3IgPSBwcm9wcy5kaXNhYmxlZEJhY2tncm91bmRDb2xvcixcbiAgICAgIGRpc2FibGVkTGFiZWxDb2xvciA9IHByb3BzLmRpc2FibGVkTGFiZWxDb2xvcixcbiAgICAgIGZ1bGxXaWR0aCA9IHByb3BzLmZ1bGxXaWR0aCxcbiAgICAgIGljb24gPSBwcm9wcy5pY29uLFxuICAgICAgbGFiZWwgPSBwcm9wcy5sYWJlbCxcbiAgICAgIGxhYmVsUG9zaXRpb24gPSBwcm9wcy5sYWJlbFBvc2l0aW9uLFxuICAgICAgcHJpbWFyeSA9IHByb3BzLnByaW1hcnksXG4gICAgICBzZWNvbmRhcnkgPSBwcm9wcy5zZWNvbmRhcnksXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlO1xuXG5cbiAgdmFyIGFtb3VudCA9IHByaW1hcnkgfHwgc2Vjb25kYXJ5ID8gMC40IDogMC4wODtcblxuICB2YXIgYmFja2dyb3VuZENvbG9yID0gcmFpc2VkQnV0dG9uLmNvbG9yO1xuICB2YXIgbGFiZWxDb2xvciA9IHJhaXNlZEJ1dHRvbi50ZXh0Q29sb3I7XG5cbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZENvbG9yID0gZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3IgfHwgcmFpc2VkQnV0dG9uLmRpc2FibGVkQ29sb3I7XG4gICAgbGFiZWxDb2xvciA9IGRpc2FibGVkTGFiZWxDb2xvciB8fCByYWlzZWRCdXR0b24uZGlzYWJsZWRUZXh0Q29sb3I7XG4gIH0gZWxzZSBpZiAocHJpbWFyeSkge1xuICAgIGJhY2tncm91bmRDb2xvciA9IHJhaXNlZEJ1dHRvbi5wcmltYXJ5Q29sb3I7XG4gICAgbGFiZWxDb2xvciA9IHJhaXNlZEJ1dHRvbi5wcmltYXJ5VGV4dENvbG9yO1xuICB9IGVsc2UgaWYgKHNlY29uZGFyeSkge1xuICAgIGJhY2tncm91bmRDb2xvciA9IHJhaXNlZEJ1dHRvbi5zZWNvbmRhcnlDb2xvcjtcbiAgICBsYWJlbENvbG9yID0gcmFpc2VkQnV0dG9uLnNlY29uZGFyeVRleHRDb2xvcjtcbiAgfSBlbHNlIHtcbiAgICBpZiAocHJvcHMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBwcm9wcy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgfVxuICAgIGlmIChwcm9wcy5sYWJlbENvbG9yKSB7XG4gICAgICBsYWJlbENvbG9yID0gcHJvcHMubGFiZWxDb2xvcjtcbiAgICB9XG4gIH1cblxuICB2YXIgYnV0dG9uSGVpZ2h0ID0gc3R5bGUgJiYgc3R5bGUuaGVpZ2h0IHx8IGJ1dHRvbi5oZWlnaHQ7XG5cbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgICBtaW5XaWR0aDogZnVsbFdpZHRoID8gJzEwMCUnIDogYnV0dG9uLm1pbldpZHRoXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgIGhlaWdodDogYnV0dG9uSGVpZ2h0LFxuICAgICAgbGluZUhlaWdodDogYnV0dG9uSGVpZ2h0ICsgJ3B4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAvLyBUaGF0J3MgdGhlIGRlZmF1bHQgdmFsdWUgZm9yIGEgYnV0dG9uIGJ1dCBub3QgYSBsaW5rXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgZm9udFNpemU6IHJhaXNlZEJ1dHRvbi5mb250U2l6ZSxcbiAgICAgIGxldHRlclNwYWNpbmc6IDAsXG4gICAgICB0ZXh0VHJhbnNmb3JtOiByYWlzZWRCdXR0b24udGV4dFRyYW5zZm9ybSB8fCBidXR0b24udGV4dFRyYW5zZm9ybSB8fCAndXBwZXJjYXNlJyxcbiAgICAgIGZvbnRXZWlnaHQ6IHJhaXNlZEJ1dHRvbi5mb250V2VpZ2h0LFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgcGFkZGluZ0xlZnQ6IGljb24gJiYgbGFiZWxQb3NpdGlvbiAhPT0gJ2JlZm9yZScgPyA4IDogYmFzZVRoZW1lLnNwYWNpbmcuZGVza3RvcEd1dHRlckxlc3MsXG4gICAgICBwYWRkaW5nUmlnaHQ6IGljb24gJiYgbGFiZWxQb3NpdGlvbiA9PT0gJ2JlZm9yZScgPyA4IDogYmFzZVRoZW1lLnNwYWNpbmcuZGVza3RvcEd1dHRlckxlc3MsXG4gICAgICBjb2xvcjogbGFiZWxDb2xvclxuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICBtYXJnaW5MZWZ0OiBsYWJlbCAmJiBsYWJlbFBvc2l0aW9uICE9PSAnYmVmb3JlJyA/IDEyIDogMCxcbiAgICAgIG1hcmdpblJpZ2h0OiBsYWJlbCAmJiBsYWJlbFBvc2l0aW9uID09PSAnYmVmb3JlJyA/IDEyIDogMFxuICAgIH0sXG4gICAgb3ZlcmxheToge1xuICAgICAgaGVpZ2h0OiBidXR0b25IZWlnaHQsXG4gICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogKHN0YXRlLmtleWJvYXJkRm9jdXNlZCB8fCBzdGF0ZS5ob3ZlcmVkKSAmJiAhZGlzYWJsZWQgJiYgKDAsIF9jb2xvck1hbmlwdWxhdG9yLmZhZGUpKGxhYmVsQ29sb3IsIGFtb3VudCksXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpLFxuICAgICAgdG9wOiAwXG4gICAgfSxcbiAgICByaXBwbGU6IHtcbiAgICAgIGNvbG9yOiBsYWJlbENvbG9yLFxuICAgICAgb3BhY2l0eTogIShwcmltYXJ5IHx8IHNlY29uZGFyeSkgPyAwLjEgOiAwLjE2XG4gICAgfVxuICB9O1xufVxuXG52YXIgUmFpc2VkQnV0dG9uID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoUmFpc2VkQnV0dG9uLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSYWlzZWRCdXR0b24oKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgUmFpc2VkQnV0dG9uKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IFJhaXNlZEJ1dHRvbi5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoUmFpc2VkQnV0dG9uKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBob3ZlcmVkOiBmYWxzZSxcbiAgICAgIGtleWJvYXJkRm9jdXNlZDogZmFsc2UsXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcbiAgICAgIGluaXRpYWxaRGVwdGg6IDAsXG4gICAgICB6RGVwdGg6IDBcbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIG9ubHkgbGlzdGVuIHRvIGxlZnQgY2xpY2tzXG4gICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB6RGVwdGg6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGggKyAxXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VEb3duKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZVVwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHpEZXB0aDogX3RoaXMuc3RhdGUuaW5pdGlhbFpEZXB0aFxuICAgICAgfSk7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZVVwKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VVcChldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5rZXlib2FyZEZvY3VzZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHpEZXB0aDogX3RoaXMuc3RhdGUuaW5pdGlhbFpEZXB0aCxcbiAgICAgICAgICBob3ZlcmVkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vdXNlTGVhdmUpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Nb3VzZUxlYXZlKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZUVudGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIV90aGlzLnN0YXRlLmtleWJvYXJkRm9jdXNlZCAmJiAhX3RoaXMuc3RhdGUudG91Y2hlZCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaG92ZXJlZDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vdXNlRW50ZXIpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Nb3VzZUVudGVyKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVUb3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRvdWNoZWQ6IHRydWUsXG4gICAgICAgIHpEZXB0aDogX3RoaXMuc3RhdGUuaW5pdGlhbFpEZXB0aCArIDFcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Ub3VjaFN0YXJ0KSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uVG91Y2hTdGFydChldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdG91Y2hlZDogdHJ1ZSxcbiAgICAgICAgekRlcHRoOiBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoXG4gICAgICB9KTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uVG91Y2hFbmQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Ub3VjaEVuZChldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlS2V5Ym9hcmRGb2N1cyA9IGZ1bmN0aW9uIChldmVudCwga2V5Ym9hcmRGb2N1c2VkKSB7XG4gICAgICB2YXIgekRlcHRoID0ga2V5Ym9hcmRGb2N1c2VkICYmICFfdGhpcy5wcm9wcy5kaXNhYmxlZCA/IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGggKyAxIDogX3RoaXMuc3RhdGUuaW5pdGlhbFpEZXB0aDtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB6RGVwdGg6IHpEZXB0aCxcbiAgICAgICAga2V5Ym9hcmRGb2N1c2VkOiBrZXlib2FyZEZvY3VzZWRcbiAgICAgIH0pO1xuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShSYWlzZWRCdXR0b24sIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdmFyIHpEZXB0aCA9IHRoaXMucHJvcHMuZGlzYWJsZWQgPyAwIDogMTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB6RGVwdGg6IHpEZXB0aCxcbiAgICAgICAgaW5pdGlhbFpEZXB0aDogekRlcHRoXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHZhciB6RGVwdGggPSBuZXh0UHJvcHMuZGlzYWJsZWQgPyAwIDogMTtcbiAgICAgIHZhciBuZXh0U3RhdGUgPSB7XG4gICAgICAgIHpEZXB0aDogekRlcHRoLFxuICAgICAgICBpbml0aWFsWkRlcHRoOiB6RGVwdGhcbiAgICAgIH07XG5cbiAgICAgIGlmIChuZXh0UHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgbmV4dFN0YXRlLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvciA9IF9wcm9wcy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgYnV0dG9uU3R5bGUgPSBfcHJvcHMuYnV0dG9uU3R5bGUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBkaXNhYmxlZEJhY2tncm91bmRDb2xvciA9IF9wcm9wcy5kaXNhYmxlZEJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICBkaXNhYmxlZExhYmVsQ29sb3IgPSBfcHJvcHMuZGlzYWJsZWRMYWJlbENvbG9yLFxuICAgICAgICAgIGZ1bGxXaWR0aCA9IF9wcm9wcy5mdWxsV2lkdGgsXG4gICAgICAgICAgaWNvbiA9IF9wcm9wcy5pY29uLFxuICAgICAgICAgIGxhYmVsID0gX3Byb3BzLmxhYmVsLFxuICAgICAgICAgIGxhYmVsQ29sb3IgPSBfcHJvcHMubGFiZWxDb2xvcixcbiAgICAgICAgICBsYWJlbFBvc2l0aW9uID0gX3Byb3BzLmxhYmVsUG9zaXRpb24sXG4gICAgICAgICAgbGFiZWxTdHlsZSA9IF9wcm9wcy5sYWJlbFN0eWxlLFxuICAgICAgICAgIG92ZXJsYXlTdHlsZSA9IF9wcm9wcy5vdmVybGF5U3R5bGUsXG4gICAgICAgICAgcHJpbWFyeSA9IF9wcm9wcy5wcmltYXJ5LFxuICAgICAgICAgIHJpcHBsZVN0eWxlID0gX3Byb3BzLnJpcHBsZVN0eWxlLFxuICAgICAgICAgIHNlY29uZGFyeSA9IF9wcm9wcy5zZWNvbmRhcnksXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnYmFja2dyb3VuZENvbG9yJywgJ2J1dHRvblN0eWxlJywgJ2NoaWxkcmVuJywgJ2NsYXNzTmFtZScsICdkaXNhYmxlZCcsICdkaXNhYmxlZEJhY2tncm91bmRDb2xvcicsICdkaXNhYmxlZExhYmVsQ29sb3InLCAnZnVsbFdpZHRoJywgJ2ljb24nLCAnbGFiZWwnLCAnbGFiZWxDb2xvcicsICdsYWJlbFBvc2l0aW9uJywgJ2xhYmVsU3R5bGUnLCAnb3ZlcmxheVN0eWxlJywgJ3ByaW1hcnknLCAncmlwcGxlU3R5bGUnLCAnc2Vjb25kYXJ5JywgJ3N0eWxlJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMuc3RhdGUpO1xuICAgICAgdmFyIG1lcmdlZFJpcHBsZVN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLnJpcHBsZSwgcmlwcGxlU3R5bGUpO1xuXG4gICAgICB2YXIgYnV0dG9uRXZlbnRIYW5kbGVycyA9IGRpc2FibGVkID8ge30gOiB7XG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZU1vdXNlRG93bixcbiAgICAgICAgb25Nb3VzZVVwOiB0aGlzLmhhbmRsZU1vdXNlVXAsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5oYW5kbGVNb3VzZUxlYXZlLFxuICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuaGFuZGxlTW91c2VFbnRlcixcbiAgICAgICAgb25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG4gICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmQsXG4gICAgICAgIG9uS2V5Ym9hcmRGb2N1czogdGhpcy5oYW5kbGVLZXlib2FyZEZvY3VzXG4gICAgICB9O1xuXG4gICAgICB2YXIgbGFiZWxFbGVtZW50ID0gbGFiZWwgJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmxhYmVsLCBsYWJlbFN0eWxlKSksIGtleTogJ2xhYmVsRWxlbWVudCcgfSxcbiAgICAgICAgbGFiZWxcbiAgICAgICk7XG5cbiAgICAgIHZhciBpY29uQ2xvbmVkID0gaWNvbiAmJiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoaWNvbiwge1xuICAgICAgICBjb2xvcjogaWNvbi5wcm9wcy5jb2xvciB8fCBzdHlsZXMubGFiZWwuY29sb3IsXG4gICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmljb24sIGljb24ucHJvcHMuc3R5bGUpLFxuICAgICAgICBrZXk6ICdpY29uQ2xvbmVkJ1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFBsYWNlIGxhYmVsIGJlZm9yZSBvciBhZnRlciBjaGlsZHJlbi5cbiAgICAgIHZhciBlbmhhbmNlZEJ1dHRvbkNoaWxkcmVuID0gbGFiZWxQb3NpdGlvbiA9PT0gJ2JlZm9yZScgPyBbbGFiZWxFbGVtZW50LCBpY29uQ2xvbmVkLCBjaGlsZHJlbl0gOiBbY2hpbGRyZW4sIGljb25DbG9uZWQsIGxhYmVsRWxlbWVudF07XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1BhcGVyMi5kZWZhdWx0LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpLFxuICAgICAgICAgIHpEZXB0aDogdGhpcy5zdGF0ZS56RGVwdGhcbiAgICAgICAgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX0VuaGFuY2VkQnV0dG9uMi5kZWZhdWx0LFxuICAgICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCBidXR0b25FdmVudEhhbmRsZXJzLCB7XG4gICAgICAgICAgICByZWY6ICdjb250YWluZXInLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMuYnV0dG9uLCBidXR0b25TdHlsZSksXG4gICAgICAgICAgICBmb2N1c1JpcHBsZUNvbG9yOiBtZXJnZWRSaXBwbGVTdHlsZXMuY29sb3IsXG4gICAgICAgICAgICB0b3VjaFJpcHBsZUNvbG9yOiBtZXJnZWRSaXBwbGVTdHlsZXMuY29sb3IsXG4gICAgICAgICAgICBmb2N1c1JpcHBsZU9wYWNpdHk6IG1lcmdlZFJpcHBsZVN0eWxlcy5vcGFjaXR5LFxuICAgICAgICAgICAgdG91Y2hSaXBwbGVPcGFjaXR5OiBtZXJnZWRSaXBwbGVTdHlsZXMub3BhY2l0eVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogJ292ZXJsYXknLFxuICAgICAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLm92ZXJsYXksIG92ZXJsYXlTdHlsZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5oYW5jZWRCdXR0b25DaGlsZHJlblxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFJhaXNlZEJ1dHRvbjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblJhaXNlZEJ1dHRvbi5tdWlOYW1lID0gJ1JhaXNlZEJ1dHRvbic7XG5SYWlzZWRCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIGxhYmVsUG9zaXRpb246ICdhZnRlcicsXG4gIGZ1bGxXaWR0aDogZmFsc2UsXG4gIHByaW1hcnk6IGZhbHNlLFxuICBzZWNvbmRhcnk6IGZhbHNlXG59O1xuUmFpc2VkQnV0dG9uLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5SYWlzZWRCdXR0b24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgYmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIGJ1dHRvbixcbiAgICogYnV0IG5vdCB0aGUgZGVmYXVsdCBkaXNhYmxlZCBiYWNrZ3JvdW5kIGNvbG9yXG4gICAqICh1c2UgYGRpc2FibGVkQmFja2dyb3VuZENvbG9yYCBmb3IgdGhpcykuXG4gICAqL1xuICBiYWNrZ3JvdW5kQ29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGJ1dHRvbiBlbGVtZW50LlxuICAgKi9cbiAgYnV0dG9uU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGJ1dHRvbi5cbiAgICogSWYgYSBsYWJlbCBpcyBwcm92aWRlZCB2aWEgdGhlIGBsYWJlbGAgcHJvcCwgdGhlIHRleHQgd2l0aGluIHRoZSBsYWJlbFxuICAgKiB3aWxsIGJlIGRpc3BsYXllZCBpbiBhZGRpdGlvbiB0byB0aGUgY29udGVudCBwcm92aWRlZCBoZXJlLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBDU1MgY2xhc3MgbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAgKiBUaGUgZWxlbWVudCB0byB1c2UgYXMgdGhlIGNvbnRhaW5lciBmb3IgdGhlIFJhaXNlZEJ1dHRvbi4gRWl0aGVyIGEgc3RyaW5nIHRvXG4gICAgKiB1c2UgYSBET00gZWxlbWVudCBvciBhIFJlYWN0RWxlbWVudC4gVGhpcyBpcyB1c2VmdWwgZm9yIHdyYXBwaW5nIHRoZVxuICAgICogUmFpc2VkQnV0dG9uIGluIGEgY3VzdG9tIExpbmsgY29tcG9uZW50LiBJZiBhIFJlYWN0RWxlbWVudCBpcyBnaXZlbiwgZW5zdXJlXG4gICAgKiB0aGF0IGl0IHBhc3NlcyBhbGwgb2YgaXRzIGdpdmVuIHByb3BzIHRocm91Z2ggdG8gdGhlIHVuZGVybHlpbmcgRE9NXG4gICAgKiBlbGVtZW50IGFuZCByZW5kZXJzIGl0cyBjaGlsZHJlbiBwcm9wIGZvciBwcm9wZXIgaW50ZWdyYXRpb24uXG4gICAgKi9cbiAgY29udGFpbmVyRWxlbWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnRdKSxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBlbGVtZW50J3MgcmlwcGxlIGVmZmVjdCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZVRvdWNoUmlwcGxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgYnV0dG9uIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgYmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIGJ1dHRvblxuICAgKiB3aGVuIGl0IGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBidXR0b24ncyBsYWJlbCB3aGVuIHRoZSBidXR0b24gaXMgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZExhYmVsQ29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cbiAgICovXG4gIGZ1bGxXaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhlIFVSTCB0byBsaW5rIHRvIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgaHJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBBbiBpY29uIHRvIGJlIGRpc3BsYXllZCB3aXRoaW4gdGhlIGJ1dHRvbi5cbiAgICovXG4gIGljb246IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBsYWJlbCB0byBiZSBkaXNwbGF5ZWQgd2l0aGluIHRoZSBidXR0b24uXG4gICAqIElmIGNvbnRlbnQgaXMgcHJvdmlkZWQgdmlhIHRoZSBgY2hpbGRyZW5gIHByb3AsIHRoYXQgY29udGVudCB3aWxsIGJlXG4gICAqIGRpc3BsYXllZCBpbiBhZGRpdGlvbiB0byB0aGUgbGFiZWwgcHJvdmlkZWQgaGVyZS5cbiAgICovXG4gIGxhYmVsOiB2YWxpZGF0ZUxhYmVsLFxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBidXR0b24ncyBsYWJlbC5cbiAgICovXG4gIGxhYmVsQ29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSBidXR0b24ncyBsYWJlbCByZWxhdGl2ZSB0byB0aGUgYnV0dG9uJ3MgYGNoaWxkcmVuYC5cbiAgICovXG4gIGxhYmVsUG9zaXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoWydiZWZvcmUnLCAnYWZ0ZXInXSksXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgYnV0dG9uJ3MgbGFiZWwgZWxlbWVudC5cbiAgICovXG4gIGxhYmVsU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlRG93bjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlRW50ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZUxlYXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VVcDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvblRvdWNoRW5kOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uVG91Y2hTdGFydDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiB0aGUgYnV0dG9uIGlzIHRvdWNoLXRhcHBlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRvdWNoVGFwIGV2ZW50IHRhcmdldGluZyB0aGUgYnV0dG9uLlxuICAgKi9cbiAgb25Ub3VjaFRhcDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZSBzdHlsZSBvZiB0aGUgYnV0dG9uIG92ZXJsYXkuXG4gICAqL1xuICBvdmVybGF5U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIHVzZSB0aGUgdGhlbWUncyBwcmltYXJ5IGNvbG9yLlxuICAgKi9cbiAgcHJpbWFyeTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZSBzdHlsZSBvZiB0aGUgcmlwcGxlIGVsZW1lbnQuXG4gICAqL1xuICByaXBwbGVTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgYnV0dG9uIHdpbGwgdXNlIHRoZSB0aGVtZSdzIHNlY29uZGFyeSBjb2xvci5cbiAgICogSWYgYm90aCBgc2Vjb25kYXJ5YCBhbmQgYHByaW1hcnlgIGFyZSB0cnVlLCB0aGUgYnV0dG9uIHdpbGwgdXNlXG4gICAqIHRoZSB0aGVtZSdzIHByaW1hcnkgY29sb3IuXG4gICAqL1xuICBzZWNvbmRhcnk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJhaXNlZEJ1dHRvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uL1JhaXNlZEJ1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gNzQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfUmFpc2VkQnV0dG9uID0gcmVxdWlyZSgnLi9SYWlzZWRCdXR0b24nKTtcblxudmFyIF9SYWlzZWRCdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmFpc2VkQnV0dG9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1JhaXNlZEJ1dHRvbjIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3NDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0RXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJ3JlYWN0LWV2ZW50LWxpc3RlbmVyJyk7XG5cbnZhciBfcmVhY3RFdmVudExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RXZlbnRMaXN0ZW5lcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciByb3dzSGVpZ2h0ID0gMjQ7XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCwgc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9LFxuICAgIHRleHRhcmVhOiB7XG4gICAgICBoZWlnaHQ6IHN0YXRlLmhlaWdodCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICByZXNpemU6ICdub25lJyxcbiAgICAgIGZvbnQ6ICdpbmhlcml0JyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBjdXJzb3I6ICdpbmhlcml0J1xuICAgIH0sXG4gICAgc2hhZG93OiB7XG4gICAgICByZXNpemU6ICdub25lJyxcbiAgICAgIC8vIE92ZXJmbG93IGFsc28gbmVlZGVkIHRvIGhlcmUgdG8gcmVtb3ZlIHRoZSBleHRyYSByb3dcbiAgICAgIC8vIGFkZGVkIHRvIHRleHRhcmVhcyBpbiBGaXJlZm94LlxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgLy8gVmlzaWJpbGl0eSBuZWVkZWQgdG8gaGlkZSB0aGUgZXh0cmEgdGV4dCBhcmVhIG9uIGlwYWRzXG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgaGVpZ2h0OiAnYXV0bydcbiAgICB9XG4gIH07XG59XG5cbnZhciBFbmhhbmNlZFRleHRhcmVhID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoRW5oYW5jZWRUZXh0YXJlYSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRW5oYW5jZWRUZXh0YXJlYSgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBFbmhhbmNlZFRleHRhcmVhKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IEVuaGFuY2VkVGV4dGFyZWEuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKEVuaGFuY2VkVGV4dGFyZWEpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhlaWdodDogbnVsbFxuICAgIH0sIF90aGlzLmhhbmRsZVJlc2l6ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc3luY0hlaWdodFdpdGhTaGFkb3codW5kZWZpbmVkLCBldmVudCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIV90aGlzLnByb3BzLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgIF90aGlzLnN5bmNIZWlnaHRXaXRoU2hhZG93KGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndmFsdWVMaW5rJykpIHtcbiAgICAgICAgX3RoaXMucHJvcHMudmFsdWVMaW5rLnJlcXVlc3RDaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoRW5oYW5jZWRUZXh0YXJlYSwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaGVpZ2h0OiB0aGlzLnByb3BzLnJvd3MgKiByb3dzSGVpZ2h0XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zeW5jSGVpZ2h0V2l0aFNoYWRvdygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKG5leHRQcm9wcy52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSB8fCBuZXh0UHJvcHMucm93c01heCAhPT0gdGhpcy5wcm9wcy5yb3dzTWF4KSB7XG4gICAgICAgIHRoaXMuc3luY0hlaWdodFdpdGhTaGFkb3cobmV4dFByb3BzLnZhbHVlLCBudWxsLCBuZXh0UHJvcHMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldElucHV0Tm9kZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldElucHV0Tm9kZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZnMuaW5wdXQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0VmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgdGhpcy5nZXRJbnB1dE5vZGUoKS52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5zeW5jSGVpZ2h0V2l0aFNoYWRvdyh2YWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc3luY0hlaWdodFdpdGhTaGFkb3cnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzeW5jSGVpZ2h0V2l0aFNoYWRvdyhuZXdWYWx1ZSwgZXZlbnQsIHByb3BzKSB7XG4gICAgICB2YXIgc2hhZG93ID0gdGhpcy5yZWZzLnNoYWRvdztcbiAgICAgIHZhciBkaXNwbGF5VGV4dCA9IHRoaXMucHJvcHMuaGludFRleHQgJiYgKG5ld1ZhbHVlID09PSAnJyB8fCBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8IG5ld1ZhbHVlID09PSBudWxsKSA/IHRoaXMucHJvcHMuaGludFRleHQgOiBuZXdWYWx1ZTtcblxuICAgICAgaWYgKGRpc3BsYXlUZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2hhZG93LnZhbHVlID0gZGlzcGxheVRleHQ7XG4gICAgICB9XG5cbiAgICAgIHZhciBuZXdIZWlnaHQgPSBzaGFkb3cuc2Nyb2xsSGVpZ2h0O1xuXG4gICAgICAvLyBHdWFyZGluZyBmb3IganNkb20sIHdoZXJlIHNjcm9sbEhlaWdodCBpc24ndCBwcmVzZW50LlxuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90bXB2YXIvanNkb20vaXNzdWVzLzEwMTNcbiAgICAgIGlmIChuZXdIZWlnaHQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgICBwcm9wcyA9IHByb3BzIHx8IHRoaXMucHJvcHM7XG5cbiAgICAgIGlmIChwcm9wcy5yb3dzTWF4ID49IHByb3BzLnJvd3MpIHtcbiAgICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5taW4ocHJvcHMucm93c01heCAqIHJvd3NIZWlnaHQsIG5ld0hlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIG5ld0hlaWdodCA9IE1hdGgubWF4KG5ld0hlaWdodCwgcm93c0hlaWdodCk7XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLmhlaWdodCAhPT0gbmV3SGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGhlaWdodDogbmV3SGVpZ2h0XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwcm9wcy5vbkhlaWdodENoYW5nZSkge1xuICAgICAgICAgIHByb3BzLm9uSGVpZ2h0Q2hhbmdlKGV2ZW50LCBuZXdIZWlnaHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgb25DaGFuZ2UgPSBfcHJvcHMub25DaGFuZ2UsXG4gICAgICAgICAgb25IZWlnaHRDaGFuZ2UgPSBfcHJvcHMub25IZWlnaHRDaGFuZ2UsXG4gICAgICAgICAgcm93cyA9IF9wcm9wcy5yb3dzLFxuICAgICAgICAgIHJvd3NNYXggPSBfcHJvcHMucm93c01heCxcbiAgICAgICAgICBzaGFkb3dTdHlsZSA9IF9wcm9wcy5zaGFkb3dTdHlsZSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICBoaW50VGV4dCA9IF9wcm9wcy5oaW50VGV4dCxcbiAgICAgICAgICB0ZXh0YXJlYVN0eWxlID0gX3Byb3BzLnRleHRhcmVhU3R5bGUsXG4gICAgICAgICAgdmFsdWVMaW5rID0gX3Byb3BzLnZhbHVlTGluayxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydvbkNoYW5nZScsICdvbkhlaWdodENoYW5nZScsICdyb3dzJywgJ3Jvd3NNYXgnLCAnc2hhZG93U3R5bGUnLCAnc3R5bGUnLCAnaGludFRleHQnLCAndGV4dGFyZWFTdHlsZScsICd2YWx1ZUxpbmsnXSk7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCwgdGhpcy5zdGF0ZSk7XG4gICAgICB2YXIgcm9vdFN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpO1xuICAgICAgdmFyIHRleHRhcmVhU3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy50ZXh0YXJlYSwgdGV4dGFyZWFTdHlsZSk7XG4gICAgICB2YXIgc2hhZG93U3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCB0ZXh0YXJlYVN0eWxlcywgc3R5bGVzLnNoYWRvdywgc2hhZG93U3R5bGUpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndmFsdWVMaW5rJykpIHtcbiAgICAgICAgb3RoZXIudmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlTGluay52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcyhyb290U3R5bGVzKSB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3RFdmVudExpc3RlbmVyMi5kZWZhdWx0LCB7IHRhcmdldDogJ3dpbmRvdycsIG9uUmVzaXplOiB0aGlzLmhhbmRsZVJlc2l6ZSB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywge1xuICAgICAgICAgIHJlZjogJ3NoYWRvdycsXG4gICAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMoc2hhZG93U3R5bGVzKSxcbiAgICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICByb3dzOiB0aGlzLnByb3BzLnJvd3MsXG4gICAgICAgICAgZGVmYXVsdFZhbHVlOiB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSxcbiAgICAgICAgICB2YWx1ZUxpbms6IHRoaXMucHJvcHMudmFsdWVMaW5rXG4gICAgICAgIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnLCAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwge1xuICAgICAgICAgIHJlZjogJ2lucHV0JyxcbiAgICAgICAgICByb3dzOiB0aGlzLnByb3BzLnJvd3MsXG4gICAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXModGV4dGFyZWFTdHlsZXMpLFxuICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUNoYW5nZVxuICAgICAgICB9KSlcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBFbmhhbmNlZFRleHRhcmVhO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuRW5oYW5jZWRUZXh0YXJlYS5kZWZhdWx0UHJvcHMgPSB7XG4gIHJvd3M6IDFcbn07XG5FbmhhbmNlZFRleHRhcmVhLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5FbmhhbmNlZFRleHRhcmVhLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgZGVmYXVsdFZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgaGludFRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgb25DaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25IZWlnaHRDaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgcm93czogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHJvd3NNYXg6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBzaGFkb3dTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICB0ZXh0YXJlYVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgdmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICB2YWx1ZUxpbms6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBFbmhhbmNlZFRleHRhcmVhO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9UZXh0RmllbGQvRW5oYW5jZWRUZXh0YXJlYS5qc1xuLy8gbW9kdWxlIGlkID0gNzQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9zaGFsbG93RXF1YWwgPSByZXF1aXJlKCdyZWNvbXBvc2Uvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dFcXVhbCk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbnZhciBfRW5oYW5jZWRUZXh0YXJlYSA9IHJlcXVpcmUoJy4vRW5oYW5jZWRUZXh0YXJlYScpO1xuXG52YXIgX0VuaGFuY2VkVGV4dGFyZWEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRW5oYW5jZWRUZXh0YXJlYSk7XG5cbnZhciBfVGV4dEZpZWxkSGludCA9IHJlcXVpcmUoJy4vVGV4dEZpZWxkSGludCcpO1xuXG52YXIgX1RleHRGaWVsZEhpbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dEZpZWxkSGludCk7XG5cbnZhciBfVGV4dEZpZWxkTGFiZWwgPSByZXF1aXJlKCcuL1RleHRGaWVsZExhYmVsJyk7XG5cbnZhciBfVGV4dEZpZWxkTGFiZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dEZpZWxkTGFiZWwpO1xuXG52YXIgX1RleHRGaWVsZFVuZGVybGluZSA9IHJlcXVpcmUoJy4vVGV4dEZpZWxkVW5kZXJsaW5lJyk7XG5cbnZhciBfVGV4dEZpZWxkVW5kZXJsaW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RleHRGaWVsZFVuZGVybGluZSk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0LCBzdGF0ZSkge1xuICB2YXIgX2NvbnRleHQkbXVpVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lLFxuICAgICAgYmFzZVRoZW1lID0gX2NvbnRleHQkbXVpVGhlbWUuYmFzZVRoZW1lLFxuICAgICAgX2NvbnRleHQkbXVpVGhlbWUkdGV4ID0gX2NvbnRleHQkbXVpVGhlbWUudGV4dEZpZWxkLFxuICAgICAgZmxvYXRpbmdMYWJlbENvbG9yID0gX2NvbnRleHQkbXVpVGhlbWUkdGV4LmZsb2F0aW5nTGFiZWxDb2xvcixcbiAgICAgIGZvY3VzQ29sb3IgPSBfY29udGV4dCRtdWlUaGVtZSR0ZXguZm9jdXNDb2xvcixcbiAgICAgIHRleHRDb2xvciA9IF9jb250ZXh0JG11aVRoZW1lJHRleC50ZXh0Q29sb3IsXG4gICAgICBkaXNhYmxlZFRleHRDb2xvciA9IF9jb250ZXh0JG11aVRoZW1lJHRleC5kaXNhYmxlZFRleHRDb2xvcixcbiAgICAgIGJhY2tncm91bmRDb2xvciA9IF9jb250ZXh0JG11aVRoZW1lJHRleC5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBlcnJvckNvbG9yID0gX2NvbnRleHQkbXVpVGhlbWUkdGV4LmVycm9yQ29sb3I7XG5cblxuICB2YXIgc3R5bGVzID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgIGxpbmVIZWlnaHQ6ICcyNHB4JyxcbiAgICAgIHdpZHRoOiBwcm9wcy5mdWxsV2lkdGggPyAnMTAwJScgOiAyNTYsXG4gICAgICBoZWlnaHQ6IChwcm9wcy5yb3dzIC0gMSkgKiAyNCArIChwcm9wcy5mbG9hdGluZ0xhYmVsVGV4dCA/IDcyIDogNDgpLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgICAgZm9udEZhbWlseTogYmFzZVRoZW1lLmZvbnRGYW1pbHksXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnMjAwbXMnLCAnaGVpZ2h0JyksXG4gICAgICBjdXJzb3I6IHByb3BzLmRpc2FibGVkID8gJ25vdC1hbGxvd2VkJyA6ICdhdXRvJ1xuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgYm90dG9tOiAyLFxuICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgbGluZUhlaWdodDogJzEycHgnLFxuICAgICAgY29sb3I6IGVycm9yQ29sb3IsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpXG4gICAgfSxcbiAgICBmbG9hdGluZ0xhYmVsOiB7XG4gICAgICBjb2xvcjogcHJvcHMuZGlzYWJsZWQgPyBkaXNhYmxlZFRleHRDb2xvciA6IGZsb2F0aW5nTGFiZWxDb2xvcixcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH0sXG4gICAgaW5wdXQ6IHtcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxuICAgICAgY29sb3I6IHByb3BzLmRpc2FibGVkID8gZGlzYWJsZWRUZXh0Q29sb3IgOiB0ZXh0Q29sb3IsXG4gICAgICBjdXJzb3I6ICdpbmhlcml0JyxcbiAgICAgIGZvbnQ6ICdpbmhlcml0JyxcbiAgICAgIFdlYmtpdFRleHRGaWxsQ29sb3I6IHByb3BzLmRpc2FibGVkID8gZGlzYWJsZWRUZXh0Q29sb3IgOiB0ZXh0Q29sb3IsXG4gICAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3JnYmEoMCwwLDAsMCknIH0sXG4gICAgaW5wdXROYXRpdmU6IHtcbiAgICAgIGFwcGVhcmFuY2U6ICd0ZXh0ZmllbGQnIH1cbiAgfTtcblxuICBzdHlsZXMudGV4dGFyZWEgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5pbnB1dCwge1xuICAgIG1hcmdpblRvcDogcHJvcHMuZmxvYXRpbmdMYWJlbFRleHQgPyAzNiA6IDEyLFxuICAgIG1hcmdpbkJvdHRvbTogcHJvcHMuZmxvYXRpbmdMYWJlbFRleHQgPyAtMzYgOiAtMTIsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZm9udDogJ2luaGVyaXQnXG4gIH0pO1xuXG4gIC8vIERvIG5vdCBhc3NpZ24gYSBoZWlnaHQgdG8gdGhlIHRleHRhcmVhIGFzIGhlIGhhbmRsZXMgaXQgb24gaGlzIG93bi5cbiAgc3R5bGVzLmlucHV0LmhlaWdodCA9ICcxMDAlJztcblxuICBpZiAoc3RhdGUuaXNGb2N1c2VkKSB7XG4gICAgc3R5bGVzLmZsb2F0aW5nTGFiZWwuY29sb3IgPSBmb2N1c0NvbG9yO1xuICB9XG5cbiAgaWYgKHByb3BzLmZsb2F0aW5nTGFiZWxUZXh0KSB7XG4gICAgc3R5bGVzLmlucHV0LmJveFNpemluZyA9ICdib3JkZXItYm94JztcblxuICAgIGlmICghcHJvcHMubXVsdGlMaW5lKSB7XG4gICAgICBzdHlsZXMuaW5wdXQubWFyZ2luVG9wID0gMTQ7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmVycm9yVGV4dCkge1xuICAgICAgc3R5bGVzLmVycm9yLmJvdHRvbSA9ICFwcm9wcy5tdWx0aUxpbmUgPyBzdHlsZXMuZXJyb3IuZm9udFNpemUgKyAzIDogMztcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhdGUuZXJyb3JUZXh0KSB7XG4gICAgaWYgKHN0YXRlLmlzRm9jdXNlZCkge1xuICAgICAgc3R5bGVzLmZsb2F0aW5nTGFiZWwuY29sb3IgPSBzdHlsZXMuZXJyb3IuY29sb3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyB2YWxpZCB0byBiZSBkaXNwbGF5ZWQgaW5zaWRlIGFuIGlucHV0LlxuICpcbiAqIEBwYXJhbSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdHJpbmcgcHJvdmlkZWQgaXMgdmFsaWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gaXNWYWxpZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09ICcnICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgJiYgIShBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApO1xufVxuXG52YXIgVGV4dEZpZWxkID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoVGV4dEZpZWxkLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUZXh0RmllbGQoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgVGV4dEZpZWxkKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IFRleHRGaWVsZC5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoVGV4dEZpZWxkKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc0ZvY3VzZWQ6IGZhbHNlLFxuICAgICAgZXJyb3JUZXh0OiB1bmRlZmluZWQsXG4gICAgICBoYXNWYWx1ZTogZmFsc2VcbiAgICB9LCBfdGhpcy5oYW5kbGVJbnB1dEJsdXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgaXNGb2N1c2VkOiBmYWxzZSB9KTtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25CbHVyKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGhhc1ZhbHVlOiBpc1ZhbGlkKGV2ZW50LnRhcmdldC52YWx1ZSkgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlSW5wdXRGb2N1cyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIF90aGlzLnNldFN0YXRlKHsgaXNGb2N1c2VkOiB0cnVlIH0pO1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Gb2N1cyhldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlSGVpZ2h0Q2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50LCBoZWlnaHQpIHtcbiAgICAgIHZhciBuZXdIZWlnaHQgPSBoZWlnaHQgKyAyNDtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5mbG9hdGluZ0xhYmVsVGV4dCkge1xuICAgICAgICBuZXdIZWlnaHQgKz0gMjQ7XG4gICAgICB9XG4gICAgICBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUoX3RoaXMpLnN0eWxlLmhlaWdodCA9IG5ld0hlaWdodCArICdweCc7XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFRleHRGaWVsZCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBuYW1lID0gX3Byb3BzLm5hbWUsXG4gICAgICAgICAgaGludFRleHQgPSBfcHJvcHMuaGludFRleHQsXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQgPSBfcHJvcHMuZmxvYXRpbmdMYWJlbFRleHQsXG4gICAgICAgICAgaWQgPSBfcHJvcHMuaWQ7XG5cblxuICAgICAgdmFyIHByb3BzTGVhZiA9IGNoaWxkcmVuID8gY2hpbGRyZW4ucHJvcHMgOiB0aGlzLnByb3BzO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZXJyb3JUZXh0OiB0aGlzLnByb3BzLmVycm9yVGV4dCxcbiAgICAgICAgaGFzVmFsdWU6IGlzVmFsaWQocHJvcHNMZWFmLnZhbHVlKSB8fCBpc1ZhbGlkKHByb3BzTGVhZi5kZWZhdWx0VmFsdWUpXG4gICAgICB9KTtcblxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShuYW1lIHx8IGhpbnRUZXh0IHx8IGZsb2F0aW5nTGFiZWxUZXh0IHx8IGlkLCAnTWF0ZXJpYWwtVUk6IFdlIGRvblxcJ3QgaGF2ZSBlbm91Z2ggaW5mb3JtYXRpb25cXG4gICAgICB0byBidWlsZCBhIHJvYnVzdCB1bmlxdWUgaWQgZm9yIHRoZSBUZXh0RmllbGQgY29tcG9uZW50LiBQbGVhc2UgcHJvdmlkZSBhbiBpZCBvciBhIG5hbWUuJykgOiB2b2lkIDA7XG5cbiAgICAgIHZhciB1bmlxdWVJZCA9IG5hbWUgKyAnLScgKyBoaW50VGV4dCArICctJyArIGZsb2F0aW5nTGFiZWxUZXh0ICsgJy0nICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMHhGRkZGKTtcbiAgICAgIHRoaXMudW5pcXVlSWQgPSB1bmlxdWVJZC5yZXBsYWNlKC9bXkEtWmEtejAtOS1dL2dpLCAnJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAobmV4dFByb3BzLmVycm9yVGV4dCAhPT0gdGhpcy5wcm9wcy5lcnJvclRleHQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZXJyb3JUZXh0OiBuZXh0UHJvcHMuZXJyb3JUZXh0XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dFByb3BzLmNoaWxkcmVuICYmIG5leHRQcm9wcy5jaGlsZHJlbi5wcm9wcykge1xuICAgICAgICBuZXh0UHJvcHMgPSBuZXh0UHJvcHMuY2hpbGRyZW4ucHJvcHM7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0UHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgICAgdmFyIGhhc1ZhbHVlID0gaXNWYWxpZChuZXh0UHJvcHMudmFsdWUpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGhhc1ZhbHVlOiBoYXNWYWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG4gICAgICByZXR1cm4gISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKSB8fCAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMuY29udGV4dCwgbmV4dENvbnRleHQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2JsdXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgaWYgKHRoaXMuaW5wdXQpIHtcbiAgICAgICAgdGhpcy5nZXRJbnB1dE5vZGUoKS5ibHVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZm9jdXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgIGlmICh0aGlzLmlucHV0KSB7XG4gICAgICAgIHRoaXMuZ2V0SW5wdXROb2RlKCkuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZWxlY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3QoKSB7XG4gICAgICBpZiAodGhpcy5pbnB1dCkge1xuICAgICAgICB0aGlzLmdldElucHV0Tm9kZSgpLnNlbGVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnB1dCA/IHRoaXMuZ2V0SW5wdXROb2RlKCkudmFsdWUgOiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SW5wdXROb2RlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5wdXROb2RlKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4gfHwgdGhpcy5wcm9wcy5tdWx0aUxpbmUgPyB0aGlzLmlucHV0LmdldElucHV0Tm9kZSgpIDogX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMuaW5wdXQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19pc0NvbnRyb2xsZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaXNDb250cm9sbGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wczIuY2hpbGRyZW4sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzMi5jbGFzc05hbWUsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMyLmRpc2FibGVkLFxuICAgICAgICAgIGVycm9yU3R5bGUgPSBfcHJvcHMyLmVycm9yU3R5bGUsXG4gICAgICAgICAgZXJyb3JUZXh0ID0gX3Byb3BzMi5lcnJvclRleHQsXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbEZpeGVkID0gX3Byb3BzMi5mbG9hdGluZ0xhYmVsRml4ZWQsXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbEZvY3VzU3R5bGUgPSBfcHJvcHMyLmZsb2F0aW5nTGFiZWxGb2N1c1N0eWxlLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxTaHJpbmtTdHlsZSA9IF9wcm9wczIuZmxvYXRpbmdMYWJlbFNocmlua1N0eWxlLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxTdHlsZSA9IF9wcm9wczIuZmxvYXRpbmdMYWJlbFN0eWxlLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0ID0gX3Byb3BzMi5mbG9hdGluZ0xhYmVsVGV4dCxcbiAgICAgICAgICBmdWxsV2lkdGggPSBfcHJvcHMyLmZ1bGxXaWR0aCxcbiAgICAgICAgICBoaW50VGV4dCA9IF9wcm9wczIuaGludFRleHQsXG4gICAgICAgICAgaGludFN0eWxlID0gX3Byb3BzMi5oaW50U3R5bGUsXG4gICAgICAgICAgaWQgPSBfcHJvcHMyLmlkLFxuICAgICAgICAgIGlucHV0U3R5bGUgPSBfcHJvcHMyLmlucHV0U3R5bGUsXG4gICAgICAgICAgbXVsdGlMaW5lID0gX3Byb3BzMi5tdWx0aUxpbmUsXG4gICAgICAgICAgb25CbHVyID0gX3Byb3BzMi5vbkJsdXIsXG4gICAgICAgICAgb25DaGFuZ2UgPSBfcHJvcHMyLm9uQ2hhbmdlLFxuICAgICAgICAgIG9uRm9jdXMgPSBfcHJvcHMyLm9uRm9jdXMsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMyLnN0eWxlLFxuICAgICAgICAgIHR5cGUgPSBfcHJvcHMyLnR5cGUsXG4gICAgICAgICAgdW5kZXJsaW5lRGlzYWJsZWRTdHlsZSA9IF9wcm9wczIudW5kZXJsaW5lRGlzYWJsZWRTdHlsZSxcbiAgICAgICAgICB1bmRlcmxpbmVGb2N1c1N0eWxlID0gX3Byb3BzMi51bmRlcmxpbmVGb2N1c1N0eWxlLFxuICAgICAgICAgIHVuZGVybGluZVNob3cgPSBfcHJvcHMyLnVuZGVybGluZVNob3csXG4gICAgICAgICAgdW5kZXJsaW5lU3R5bGUgPSBfcHJvcHMyLnVuZGVybGluZVN0eWxlLFxuICAgICAgICAgIHJvd3MgPSBfcHJvcHMyLnJvd3MsXG4gICAgICAgICAgcm93c01heCA9IF9wcm9wczIucm93c01heCxcbiAgICAgICAgICB0ZXh0YXJlYVN0eWxlID0gX3Byb3BzMi50ZXh0YXJlYVN0eWxlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzMiwgWydjaGlsZHJlbicsICdjbGFzc05hbWUnLCAnZGlzYWJsZWQnLCAnZXJyb3JTdHlsZScsICdlcnJvclRleHQnLCAnZmxvYXRpbmdMYWJlbEZpeGVkJywgJ2Zsb2F0aW5nTGFiZWxGb2N1c1N0eWxlJywgJ2Zsb2F0aW5nTGFiZWxTaHJpbmtTdHlsZScsICdmbG9hdGluZ0xhYmVsU3R5bGUnLCAnZmxvYXRpbmdMYWJlbFRleHQnLCAnZnVsbFdpZHRoJywgJ2hpbnRUZXh0JywgJ2hpbnRTdHlsZScsICdpZCcsICdpbnB1dFN0eWxlJywgJ211bHRpTGluZScsICdvbkJsdXInLCAnb25DaGFuZ2UnLCAnb25Gb2N1cycsICdzdHlsZScsICd0eXBlJywgJ3VuZGVybGluZURpc2FibGVkU3R5bGUnLCAndW5kZXJsaW5lRm9jdXNTdHlsZScsICd1bmRlcmxpbmVTaG93JywgJ3VuZGVybGluZVN0eWxlJywgJ3Jvd3MnLCAncm93c01heCcsICd0ZXh0YXJlYVN0eWxlJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMuc3RhdGUpO1xuICAgICAgdmFyIGlucHV0SWQgPSBpZCB8fCB0aGlzLnVuaXF1ZUlkO1xuXG4gICAgICB2YXIgZXJyb3JUZXh0RWxlbWVudCA9IHRoaXMuc3RhdGUuZXJyb3JUZXh0ICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmVycm9yLCBlcnJvclN0eWxlKSkgfSxcbiAgICAgICAgdGhpcy5zdGF0ZS5lcnJvclRleHRcbiAgICAgICk7XG5cbiAgICAgIHZhciBmbG9hdGluZ0xhYmVsVGV4dEVsZW1lbnQgPSBmbG9hdGluZ0xhYmVsVGV4dCAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1RleHRGaWVsZExhYmVsMi5kZWZhdWx0LFxuICAgICAgICB7XG4gICAgICAgICAgbXVpVGhlbWU6IHRoaXMuY29udGV4dC5tdWlUaGVtZSxcbiAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5mbG9hdGluZ0xhYmVsLCBmbG9hdGluZ0xhYmVsU3R5bGUsIHRoaXMuc3RhdGUuaXNGb2N1c2VkID8gZmxvYXRpbmdMYWJlbEZvY3VzU3R5bGUgOiBudWxsKSxcbiAgICAgICAgICBzaHJpbmtTdHlsZTogZmxvYXRpbmdMYWJlbFNocmlua1N0eWxlLFxuICAgICAgICAgIGh0bWxGb3I6IGlucHV0SWQsXG4gICAgICAgICAgc2hyaW5rOiB0aGlzLnN0YXRlLmhhc1ZhbHVlIHx8IHRoaXMuc3RhdGUuaXNGb2N1c2VkIHx8IGZsb2F0aW5nTGFiZWxGaXhlZCxcbiAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWRcbiAgICAgICAgfSxcbiAgICAgICAgZmxvYXRpbmdMYWJlbFRleHRcbiAgICAgICk7XG5cbiAgICAgIHZhciBpbnB1dFByb3BzID0ge1xuICAgICAgICBpZDogaW5wdXRJZCxcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoZWxlbSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuaW5wdXQgPSBlbGVtO1xuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgb25CbHVyOiB0aGlzLmhhbmRsZUlucHV0Qmx1cixcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UsXG4gICAgICAgIG9uRm9jdXM6IHRoaXMuaGFuZGxlSW5wdXRGb2N1c1xuICAgICAgfTtcblxuICAgICAgdmFyIGNoaWxkU3R5bGVNZXJnZWQgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmlucHV0LCBpbnB1dFN0eWxlKTtcblxuICAgICAgdmFyIGlucHV0RWxlbWVudCA9IHZvaWQgMDtcbiAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICBpbnB1dEVsZW1lbnQgPSBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBpbnB1dFByb3BzLCBjaGlsZHJlbi5wcm9wcywge1xuICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoY2hpbGRTdHlsZU1lcmdlZCwgY2hpbGRyZW4ucHJvcHMuc3R5bGUpXG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0RWxlbWVudCA9IG11bHRpTGluZSA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9FbmhhbmNlZFRleHRhcmVhMi5kZWZhdWx0LCAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHtcbiAgICAgICAgICBzdHlsZTogY2hpbGRTdHlsZU1lcmdlZCxcbiAgICAgICAgICB0ZXh0YXJlYVN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnRleHRhcmVhLCBzdHlsZXMuaW5wdXROYXRpdmUsIHRleHRhcmVhU3R5bGUpLFxuICAgICAgICAgIHJvd3M6IHJvd3MsXG4gICAgICAgICAgcm93c01heDogcm93c01heCxcbiAgICAgICAgICBoaW50VGV4dDogaGludFRleHRcbiAgICAgICAgfSwgb3RoZXIsIGlucHV0UHJvcHMsIHtcbiAgICAgICAgICBvbkhlaWdodENoYW5nZTogdGhpcy5oYW5kbGVIZWlnaHRDaGFuZ2VcbiAgICAgICAgfSkpIDogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmlucHV0TmF0aXZlLCBjaGlsZFN0eWxlTWVyZ2VkKSlcbiAgICAgICAgfSwgb3RoZXIsIGlucHV0UHJvcHMpKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJvb3RQcm9wcyA9IHt9O1xuXG4gICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgcm9vdFByb3BzID0gb3RoZXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIHJvb3RQcm9wcywge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpKVxuICAgICAgICB9KSxcbiAgICAgICAgZmxvYXRpbmdMYWJlbFRleHRFbGVtZW50LFxuICAgICAgICBoaW50VGV4dCA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9UZXh0RmllbGRIaW50Mi5kZWZhdWx0LCB7XG4gICAgICAgICAgbXVpVGhlbWU6IHRoaXMuY29udGV4dC5tdWlUaGVtZSxcbiAgICAgICAgICBzaG93OiAhKHRoaXMuc3RhdGUuaGFzVmFsdWUgfHwgZmxvYXRpbmdMYWJlbFRleHQgJiYgIXRoaXMuc3RhdGUuaXNGb2N1c2VkKSB8fCAhdGhpcy5zdGF0ZS5oYXNWYWx1ZSAmJiBmbG9hdGluZ0xhYmVsVGV4dCAmJiBmbG9hdGluZ0xhYmVsRml4ZWQgJiYgIXRoaXMuc3RhdGUuaXNGb2N1c2VkLFxuICAgICAgICAgIHN0eWxlOiBoaW50U3R5bGUsXG4gICAgICAgICAgdGV4dDogaGludFRleHRcbiAgICAgICAgfSkgOiBudWxsLFxuICAgICAgICBpbnB1dEVsZW1lbnQsXG4gICAgICAgIHVuZGVybGluZVNob3cgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVGV4dEZpZWxkVW5kZXJsaW5lMi5kZWZhdWx0LCB7XG4gICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgIGRpc2FibGVkU3R5bGU6IHVuZGVybGluZURpc2FibGVkU3R5bGUsXG4gICAgICAgICAgZXJyb3I6ICEhdGhpcy5zdGF0ZS5lcnJvclRleHQsXG4gICAgICAgICAgZXJyb3JTdHlsZTogZXJyb3JTdHlsZSxcbiAgICAgICAgICBmb2N1czogdGhpcy5zdGF0ZS5pc0ZvY3VzZWQsXG4gICAgICAgICAgZm9jdXNTdHlsZTogdW5kZXJsaW5lRm9jdXNTdHlsZSxcbiAgICAgICAgICBtdWlUaGVtZTogdGhpcy5jb250ZXh0Lm11aVRoZW1lLFxuICAgICAgICAgIHN0eWxlOiB1bmRlcmxpbmVTdHlsZVxuICAgICAgICB9KSA6IG51bGwsXG4gICAgICAgIGVycm9yVGV4dEVsZW1lbnRcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBUZXh0RmllbGQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5UZXh0RmllbGQuZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIGZsb2F0aW5nTGFiZWxGaXhlZDogZmFsc2UsXG4gIG11bHRpTGluZTogZmFsc2UsXG4gIGZ1bGxXaWR0aDogZmFsc2UsXG4gIHR5cGU6ICd0ZXh0JyxcbiAgdW5kZXJsaW5lU2hvdzogdHJ1ZSxcbiAgcm93czogMVxufTtcblRleHRGaWVsZC5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuVGV4dEZpZWxkLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBjc3MgY2xhc3MgbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHN0cmluZyB0byB1c2UgZm9yIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSB0ZXh0IGZpZWxkIGlmIHNldCB0byB0cnVlLlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFRoZSBzdHlsZSBvYmplY3QgdG8gdXNlIHRvIG92ZXJyaWRlIGVycm9yIHN0eWxlcy5cbiAgICovXG4gIGVycm9yU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGVycm9yIGNvbnRlbnQgdG8gZGlzcGxheS5cbiAgICovXG4gIGVycm9yVGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGZsb2F0aW5nIGxhYmVsIHdpbGwgZmxvYXQgZXZlbiB3aGVuIHRoZXJlIGlzIG5vIHZhbHVlLlxuICAgKi9cbiAgZmxvYXRpbmdMYWJlbEZpeGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgc3R5bGUgb2JqZWN0IHRvIHVzZSB0byBvdmVycmlkZSBmbG9hdGluZyBsYWJlbCBzdHlsZXMgd2hlbiBmb2N1c2VkLlxuICAgKi9cbiAgZmxvYXRpbmdMYWJlbEZvY3VzU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIHN0eWxlIG9iamVjdCB0byB1c2UgdG8gb3ZlcnJpZGUgZmxvYXRpbmcgbGFiZWwgc3R5bGVzIHdoZW4gc2hydW5rLlxuICAgKi9cbiAgZmxvYXRpbmdMYWJlbFNocmlua1N0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBzdHlsZSBvYmplY3QgdG8gdXNlIHRvIG92ZXJyaWRlIGZsb2F0aW5nIGxhYmVsIHN0eWxlcy5cbiAgICovXG4gIGZsb2F0aW5nTGFiZWxTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCB0byB1c2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBlbGVtZW50LlxuICAgKi9cbiAgZmxvYXRpbmdMYWJlbFRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBmaWVsZCByZWNlaXZlcyB0aGUgcHJvcGVydHkgd2lkdGggMTAwJS5cbiAgICovXG4gIGZ1bGxXaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIFRleHRGaWVsZCdzIGhpbnQgdGV4dCBlbGVtZW50LlxuICAgKi9cbiAgaGludFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBoaW50IGNvbnRlbnQgdG8gZGlzcGxheS5cbiAgICovXG4gIGhpbnRUZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgaWQgcHJvcCBmb3IgdGhlIHRleHQgZmllbGQuXG4gICAqL1xuICBpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgVGV4dEZpZWxkJ3MgaW5wdXQgZWxlbWVudC5cbiAgICogV2hlbiBtdWx0aUxpbmUgaXMgZmFsc2U6IGRlZmluZSB0aGUgc3R5bGUgb2YgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqIFdoZW4gbXVsdGlMaW5lIGlzIHRydWU6IGRlZmluZSB0aGUgc3R5bGUgb2YgdGhlIGNvbnRhaW5lciBvZiB0aGUgdGV4dGFyZWEuXG4gICAqL1xuICBpbnB1dFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIElmIHRydWUsIGEgdGV4dGFyZWEgZWxlbWVudCB3aWxsIGJlIHJlbmRlcmVkLlxuICAgKiBUaGUgdGV4dGFyZWEgYWxzbyBncm93cyBhbmQgc2hyaW5rcyBhY2NvcmRpbmcgdG8gdGhlIG51bWJlciBvZiBsaW5lcy5cbiAgICovXG4gIG11bHRpTGluZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogTmFtZSBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAgICovXG4gIG5hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbkJsdXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgZmlyZWQgd2hlbiB0aGUgdGV4dGZpZWxkJ3MgdmFsdWUgY2hhbmdlcy5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IENoYW5nZSBldmVudCB0YXJnZXRpbmcgdGhlIHRleHQgZmllbGQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdWYWx1ZSBUaGUgbmV3IHZhbHVlIG9mIHRoZSB0ZXh0IGZpZWxkLlxuICAgKi9cbiAgb25DaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Gb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogTnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpTGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuXG4gICAqIG11bHRpTGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzTWF4OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgVGV4dEZpZWxkJ3MgdGV4dGFyZWEgZWxlbWVudC5cbiAgICogVGhlIFRleHRGaWVsZCB1c2UgZWl0aGVyIGEgdGV4dGFyZWEgb3IgYW4gaW5wdXQsXG4gICAqIHRoaXMgcHJvcGVydHkgaGFzIGVmZmVjdHMgb25seSB3aGVuIG11bHRpTGluZSBpcyB0cnVlLlxuICAgKi9cbiAgdGV4dGFyZWFTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIHR5cGUgb2YgaW5wdXQgdG8gZGlzcGxheVxuICAgKiBzdWNoIGFzIFwicGFzc3dvcmRcIiBvciBcInRleHRcIi5cbiAgICovXG4gIHR5cGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlXG4gICAqIFRleHRGaWVsZCdzIHVuZGVybGluZSBlbGVtZW50IHdoZW4gZGlzYWJsZWQuXG4gICAqL1xuICB1bmRlcmxpbmVEaXNhYmxlZFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBUZXh0RmllbGQnc1xuICAgKiB1bmRlcmxpbmUgZWxlbWVudCB3aGVuIGZvY3Vzc2VkLlxuICAgKi9cbiAgdW5kZXJsaW5lRm9jdXNTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBzaG93cyB0aGUgdW5kZXJsaW5lIGZvciB0aGUgdGV4dCBmaWVsZC5cbiAgICovXG4gIHVuZGVybGluZVNob3c6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBUZXh0RmllbGQncyB1bmRlcmxpbmUgZWxlbWVudC5cbiAgICovXG4gIHVuZGVybGluZVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgdGV4dCBmaWVsZC5cbiAgICovXG4gIHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueVxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dEZpZWxkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkLmpzXG4vLyBtb2R1bGUgaWQgPSA3NTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcykge1xuICB2YXIgaGludENvbG9yID0gcHJvcHMubXVpVGhlbWUudGV4dEZpZWxkLmhpbnRDb2xvcixcbiAgICAgIHNob3cgPSBwcm9wcy5zaG93O1xuXG5cbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIG9wYWNpdHk6IHNob3cgPyAxIDogMCxcbiAgICAgIGNvbG9yOiBoaW50Q29sb3IsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpLFxuICAgICAgYm90dG9tOiAxMlxuICAgIH1cbiAgfTtcbn1cblxudmFyIFRleHRGaWVsZEhpbnQgPSBmdW5jdGlvbiBUZXh0RmllbGRIaW50KHByb3BzKSB7XG4gIHZhciBwcmVwYXJlU3R5bGVzID0gcHJvcHMubXVpVGhlbWUucHJlcGFyZVN0eWxlcyxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICB0ZXh0ID0gcHJvcHMudGV4dDtcblxuXG4gIHZhciBzdHlsZXMgPSBnZXRTdHlsZXMocHJvcHMpO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpKSB9LFxuICAgIHRleHRcbiAgKTtcbn07XG5cblRleHRGaWVsZEhpbnQucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBUaGUgbWF0ZXJpYWwtdWkgdGhlbWUgYXBwbGllZCB0byB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgaGludCB0ZXh0IHNob3VsZCBiZSB2aXNpYmxlLlxuICAgKi9cbiAgc2hvdzogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBoaW50IHRleHQgZGlzcGxheWVkLlxuICAgKi9cbiAgdGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlXG59IDoge307XG5cblRleHRGaWVsZEhpbnQuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiB0cnVlXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUZXh0RmllbGRIaW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkSGludC5qc1xuLy8gbW9kdWxlIGlkID0gNzUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMpIHtcbiAgdmFyIGRlZmF1bHRTdHlsZXMgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGluZUhlaWdodDogJzIycHgnLFxuICAgIHRvcDogMzgsXG4gICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICB6SW5kZXg6IDEsIC8vIE5lZWRlZCB0byBkaXNwbGF5IGxhYmVsIGFib3ZlIENocm9tZSdzIGF1dG9jb21wbGV0ZSBmaWVsZCBiYWNrZ3JvdW5kXG4gICAgdHJhbnNmb3JtOiAnc2NhbGUoMSkgdHJhbnNsYXRlKDAsIDApJyxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0IHRvcCcsXG4gICAgcG9pbnRlckV2ZW50czogJ2F1dG8nLFxuICAgIHVzZXJTZWxlY3Q6ICdub25lJ1xuICB9O1xuXG4gIHZhciBzaHJpbmtTdHlsZXMgPSBwcm9wcy5zaHJpbmsgPyAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe1xuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuNzUpIHRyYW5zbGF0ZSgwLCAtMjhweCknLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICB9LCBwcm9wcy5zaHJpbmtTdHlsZSkgOiBudWxsO1xuXG4gIHJldHVybiB7XG4gICAgcm9vdDogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKGRlZmF1bHRTdHlsZXMsIHByb3BzLnN0eWxlLCBzaHJpbmtTdHlsZXMpXG4gIH07XG59XG5cbnZhciBUZXh0RmllbGRMYWJlbCA9IGZ1bmN0aW9uIFRleHRGaWVsZExhYmVsKHByb3BzKSB7XG4gIHZhciBtdWlUaGVtZSA9IHByb3BzLm11aVRoZW1lLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGh0bWxGb3IgPSBwcm9wcy5odG1sRm9yLFxuICAgICAgb25Ub3VjaFRhcCA9IHByb3BzLm9uVG91Y2hUYXA7XG4gIHZhciBwcmVwYXJlU3R5bGVzID0gbXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHByb3BzKTtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2xhYmVsJyxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKHN0eWxlcy5yb290KSxcbiAgICAgIGh0bWxGb3I6IGh0bWxGb3IsXG4gICAgICBvblRvdWNoVGFwOiBvblRvdWNoVGFwXG4gICAgfSxcbiAgICBjaGlsZHJlblxuICApO1xufTtcblxuVGV4dEZpZWxkTGFiZWwucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogVGhlIGxhYmVsIGNvbnRlbnRzLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBjc3MgY2xhc3MgbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBsYWJlbCBpZiBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgaWQgb2YgdGhlIHRhcmdldCBlbGVtZW50IHRoYXQgdGhpcyBsYWJlbCBzaG91bGQgcmVmZXIgdG8uXG4gICAqL1xuICBodG1sRm9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogVGhlIG1hdGVyaWFsLXVpIHRoZW1lIGFwcGxpZWQgdG8gdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZvciB3aGVuIHRoZSBsYWJlbCBpcyBzZWxlY3RlZCB2aWEgYSB0b3VjaCB0YXAuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUb3VjaFRhcCBldmVudCB0YXJnZXRpbmcgdGhlIHRleHQgZmllbGQgbGFiZWwuXG4gICAqL1xuICBvblRvdWNoVGFwOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBmbG9hdGluZyBsYWJlbCBzaG91bGQgc2hyaW5rLlxuICAgKi9cbiAgc2hyaW5rOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50IHdoZW4gc2hydW5rLlxuICAgKi9cbiAgc2hyaW5rU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuXG5UZXh0RmllbGRMYWJlbC5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgc2hyaW5rOiBmYWxzZVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dEZpZWxkTGFiZWw7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL1RleHRGaWVsZC9UZXh0RmllbGRMYWJlbC5qc1xuLy8gbW9kdWxlIGlkID0gNzUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgcGFyZW50IGBUZXh0RmllbGRgIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSB1bmRlcmxpbmUgd2hlbiBwYXJlbnQgYFRleHRGaWVsZGAgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIHBhcmVudCBgVGV4dEZpZWxkYCBoYXMgYW4gZXJyb3IuXG4gICAqL1xuICBlcnJvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHVuZGVybGluZSB3aGVuIHBhcmVudCBgVGV4dEZpZWxkYCBoYXMgYW4gZXJyb3IuXG4gICAqL1xuICBlcnJvclN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIHBhcmVudCBgVGV4dEZpZWxkYCBpcyBmb2N1c2VkLlxuICAgKi9cbiAgZm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSB1bmRlcmxpbmUgd2hlbiBwYXJlbnQgYFRleHRGaWVsZGAgaXMgZm9jdXNlZC5cbiAgICovXG4gIGZvY3VzU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBUaGUgbWF0ZXJpYWwtdWkgdGhlbWUgYXBwbGllZCB0byB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBkaXNhYmxlZFN0eWxlOiB7fSxcbiAgZXJyb3I6IGZhbHNlLFxuICBlcnJvclN0eWxlOiB7fSxcbiAgZm9jdXM6IGZhbHNlLFxuICBmb2N1c1N0eWxlOiB7fSxcbiAgc3R5bGU6IHt9XG59O1xuXG52YXIgVGV4dEZpZWxkVW5kZXJsaW5lID0gZnVuY3Rpb24gVGV4dEZpZWxkVW5kZXJsaW5lKHByb3BzKSB7XG4gIHZhciBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzYWJsZWRTdHlsZSA9IHByb3BzLmRpc2FibGVkU3R5bGUsXG4gICAgICBlcnJvciA9IHByb3BzLmVycm9yLFxuICAgICAgZXJyb3JTdHlsZSA9IHByb3BzLmVycm9yU3R5bGUsXG4gICAgICBmb2N1cyA9IHByb3BzLmZvY3VzLFxuICAgICAgZm9jdXNTdHlsZSA9IHByb3BzLmZvY3VzU3R5bGUsXG4gICAgICBtdWlUaGVtZSA9IHByb3BzLm11aVRoZW1lLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZTtcbiAgdmFyIGVycm9yU3R5bGVDb2xvciA9IGVycm9yU3R5bGUuY29sb3I7XG4gIHZhciBwcmVwYXJlU3R5bGVzID0gbXVpVGhlbWUucHJlcGFyZVN0eWxlcyxcbiAgICAgIF9tdWlUaGVtZSR0ZXh0RmllbGQgPSBtdWlUaGVtZS50ZXh0RmllbGQsXG4gICAgICBib3JkZXJDb2xvciA9IF9tdWlUaGVtZSR0ZXh0RmllbGQuYm9yZGVyQ29sb3IsXG4gICAgICBkaXNhYmxlZFRleHRDb2xvciA9IF9tdWlUaGVtZSR0ZXh0RmllbGQuZGlzYWJsZWRUZXh0Q29sb3IsXG4gICAgICBlcnJvckNvbG9yID0gX211aVRoZW1lJHRleHRGaWVsZC5lcnJvckNvbG9yLFxuICAgICAgZm9jdXNDb2xvciA9IF9tdWlUaGVtZSR0ZXh0RmllbGQuZm9jdXNDb2xvcjtcblxuXG4gIHZhciBzdHlsZXMgPSB7XG4gICAgcm9vdDoge1xuICAgICAgYm9yZGVyVG9wOiAnbm9uZScsXG4gICAgICBib3JkZXJMZWZ0OiAnbm9uZScsXG4gICAgICBib3JkZXJSaWdodDogJ25vbmUnLFxuICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgMXB4JyxcbiAgICAgIGJvcmRlckNvbG9yOiBib3JkZXJDb2xvcixcbiAgICAgIGJvdHRvbTogOCxcbiAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIGJvcmRlckJvdHRvbTogJ2RvdHRlZCAycHgnLFxuICAgICAgYm9yZGVyQ29sb3I6IGRpc2FibGVkVGV4dENvbG9yXG4gICAgfSxcbiAgICBmb2N1czoge1xuICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgMnB4JyxcbiAgICAgIGJvcmRlckNvbG9yOiBmb2N1c0NvbG9yLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDApJyxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KClcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBib3JkZXJDb2xvcjogZXJyb3JTdHlsZUNvbG9yID8gZXJyb3JTdHlsZUNvbG9yIDogZXJyb3JDb2xvcixcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgxKSdcbiAgICB9XG4gIH07XG5cbiAgdmFyIHVuZGVybGluZSA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLnJvb3QsIHN0eWxlKTtcbiAgdmFyIGZvY3VzZWRVbmRlcmxpbmUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHVuZGVybGluZSwgc3R5bGVzLmZvY3VzLCBmb2N1c1N0eWxlKTtcblxuICBpZiAoZGlzYWJsZWQpIHVuZGVybGluZSA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgdW5kZXJsaW5lLCBzdHlsZXMuZGlzYWJsZWQsIGRpc2FibGVkU3R5bGUpO1xuICBpZiAoZm9jdXMpIGZvY3VzZWRVbmRlcmxpbmUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIGZvY3VzZWRVbmRlcmxpbmUsIHsgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJyB9KTtcbiAgaWYgKGVycm9yKSBmb2N1c2VkVW5kZXJsaW5lID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBmb2N1c2VkVW5kZXJsaW5lLCBzdHlsZXMuZXJyb3IpO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICBudWxsLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdocicsIHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLCBzdHlsZTogcHJlcGFyZVN0eWxlcyh1bmRlcmxpbmUpIH0pLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdocicsIHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLCBzdHlsZTogcHJlcGFyZVN0eWxlcyhmb2N1c2VkVW5kZXJsaW5lKSB9KVxuICApO1xufTtcblxuVGV4dEZpZWxkVW5kZXJsaW5lLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHByb3BUeXBlcyA6IHt9O1xuVGV4dEZpZWxkVW5kZXJsaW5lLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dEZpZWxkVW5kZXJsaW5lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkVW5kZXJsaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA3NTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7TG9naW5Cb3hDb250YWluZXJ9IGZyb20gJy4vTG9naW5Cb3hDb250YWluZXInO1xyXG5cclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlciAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TG9naW5Cb3hDb250YWluZXIgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qe3VuYXV0aG9yaXplZD09PXRydWUgJiYgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpblRvcDogJzEwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vY2F0cGxhbmV0Lm9yZy93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wOS9DYXRzLWFzLWVycm9yLW1lc3NhZ2UtNDAxLmpwZ1wiIGFsdD1cIlVOQVVUSE9SSVpFRFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPSc0MDAnIGhlaWdodD0nMzAwJy8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59Ki99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7TG9naW59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvTG9naW4vTG9naW4uanMiLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuLyppbXBvcnQge1N1Ym1pc3Npb25FcnJvcn0gZnJvbSAncmVkdXgtZm9ybSc7Ki9cclxuXHJcbmltcG9ydCB7TG9naW5Cb3hGb3JtfSBmcm9tICcuL0xvZ2luQm94Rm9ybSc7XHJcblxyXG5pbXBvcnQge3NlbmRMb2dpblJlcXVlc3R9IGZyb20gJ21vZHVsZXMvbG9naW4nO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gICAgb25TdWJtaXQ6ICh2YWx1ZXMpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChzZW5kTG9naW5SZXF1ZXN0KHZhbHVlcykpO1xyXG4gICAgICAgIC8qcmV0dXJuIG5ldyBQcm9taXNlICgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTdWJtaXNzaW9uRXJyb3IoeyB1c2VybmFtZTogJ1VzZXIgZG9lcyBub3QgZXhpc3QnLCBfZXJyb3I6ICdMb2dpbiBmYWlsZWQhJyB9KTtcclxuICAgICAgICB9KTsqL1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICAgIHJlamVjdGVkOiBzdGF0ZS5sb2dpbi5yZWplY3RlZCA9PT0gdHJ1ZVxyXG59KTtcclxuXHJcbmNvbnN0IExvZ2luQm94Q29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTG9naW5Cb3hGb3JtKTtcclxuXHJcbmV4cG9ydCB7TG9naW5Cb3hDb250YWluZXJ9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL0xvZ2luL0xvZ2luQm94Q29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ21hdGVyaWFsLXVpL1BhcGVyJztcclxuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xyXG5cclxuaW1wb3J0IHtyZWR1eEZvcm0sIEZpZWxkfSBmcm9tICdyZWR1eC1mb3JtJztcclxuXHJcbmltcG9ydCB7TXlUZXh0RmllbGR9IGZyb20gJy4vTXlUZXh0RmllbGQnO1xyXG5cclxuLy9wbGFubmVkIHRvIHNob3cgZnVubnkgaW1hZ2UgaWYgdW5hdXRob3JpemVkXHJcbi8vaW1wb3J0IGltYWdlIGZyb20gJ3Jlc291cmNlcy80MDEucG5nJztcclxuXHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICAgIG1heFdpZHRoOiAnNDAwcHgnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHBhZGRpbmc6ICczJSAyJSAyJSAyJScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMyUnXHJcbn07XHJcblxyXG5jbGFzcyBMb2dpbkJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjb25zdCB7aGFuZGxlU3VibWl0LCByZWplY3RlZH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICcxMCUnfX0+XHJcbiAgICAgICAgICAgICAgICA8UGFwZXIgc3R5bGU9e3N0eWxlfSB6RGVwdGg9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3VzZXJuYW1lJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TXlUZXh0RmllbGR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXNzd29yZCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e015VGV4dEZpZWxkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiUGFzc3dvcmQgKFVTRSAnYWRtaW4nKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgcG9zaXRpb246ICdyZWxhdGl2ZSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3RlZCAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y29sb3I6ICdyZWQnLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgd2lkdGg6ICcxMDAlJ319PkludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWlzZWRCdXR0b24gdHlwZT0nc3VibWl0JyBsYWJlbD1cIkxvZyBpblwiIHByaW1hcnk9e3RydWV9IHN0eWxlPXt7bWFyZ2luOiAnYXV0bycsIG1hcmdpblRvcDogJzMwcHgnfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHsvKjxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuYXV0aG9yaXplZCAmJiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezM2MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI3MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9J2h0dHBzOi8vYmxvZy5kYXNoYnVyc3QuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzAzLzY1MDgwMjMwNjVfMWIzYmY3MTBjZV9vLTcyOHg1ODIuanBnJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+Ki99XHJcbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5Mb2dpbkJveC5wcm9wVHlwZXMgPSB7XHJcbiAgICBoYW5kbGVTdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICByZWplY3RlZDogUHJvcFR5cGVzLmJvb2xcclxufTtcclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jb25zdCBMb2dpbkJveEZvcm0gPSByZWR1eEZvcm0oe1xyXG4gICAgZm9ybTogJ2xvZ2luJ1xyXG59KShMb2dpbkJveCk7XHJcblxyXG5Mb2dpbkJveEZvcm0ucHJvcFR5cGVzID0ge1xyXG4gICAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICByZWplY3RlZDogUHJvcFR5cGVzLmJvb2xcclxufTtcclxuXHJcbmV4cG9ydCB7TG9naW5Cb3hGb3JtfTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy9Mb2dpbi9Mb2dpbkJveEZvcm0uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdtYXRlcmlhbC11aS9UZXh0RmllbGQnO1xyXG5cclxuY2xhc3MgTXlUZXh0RmllbGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtmbG9hdGluZ0xhYmVsVGV4dCwgdHlwZSwgaW5wdXQsIG1ldGF9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxGaXhlZD17dHJ1ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9e2Zsb2F0aW5nTGFiZWxUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPSdvZmYnXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46ICdhdXRvJ319XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2lucHV0LmVycm9yICYmIFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgSW52YWxpZFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuTXlUZXh0RmllbGQucHJvcFR5cGVzID0ge1xyXG4gICAgZmxvYXRpbmdMYWJlbFRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGlucHV0OiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgbWV0YTogUHJvcFR5cGVzLm9iamVjdFxyXG59O1xyXG5cclxuZXhwb3J0IHtNeVRleHRGaWVsZH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy9Mb2dpbi9NeVRleHRGaWVsZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=