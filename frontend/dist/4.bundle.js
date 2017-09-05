webpackJsonp([4],{

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Login = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LoginBoxContainer = __webpack_require__(1183);

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

/***/ 1183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginBoxContainer = undefined;

var _reactRedux = __webpack_require__(25);

var _LoginBoxForm = __webpack_require__(1184);

var _login = __webpack_require__(174);

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

/***/ 1184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginBoxForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Paper = __webpack_require__(100);

var _Paper2 = _interopRequireDefault(_Paper);

var _RaisedButton = __webpack_require__(902);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _reduxForm = __webpack_require__(289);

var _MyTextField = __webpack_require__(1185);

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
                { style: { display: 'flex', justifyContent: 'center', marginTop: '7%', marginBottom: '3%' } },
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

/***/ 1185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MyTextField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextField = __webpack_require__(894);

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

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = __webpack_require__(25);

var _Login = __webpack_require__(1182);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {};
};

var mapStateToProps = function mapStateToProps(state) {
    return {};
};

var LoginContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Login.Login);

exports.default = LoginContainer;

/***/ }),

/***/ 894:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _TextField = __webpack_require__(925);

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TextField2.default;

/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _RaisedButton = __webpack_require__(923);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _RaisedButton2.default;

/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(16);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(15);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(8);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(13);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(24);

var _transitions2 = _interopRequireDefault(_transitions);

var _colorManipulator = __webpack_require__(101);

var _EnhancedButton = __webpack_require__(172);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _Paper = __webpack_require__(100);

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateLabel(props, propName, componentName) {
  if (undefined !== 'production') {
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
RaisedButton.propTypes = undefined !== "production" ? {
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

/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(16);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(15);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(8);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(13);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactEventListener = __webpack_require__(288);

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
EnhancedTextarea.propTypes = undefined !== "production" ? {
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

/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(16);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(15);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(8);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(9);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(13);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(46);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _transitions = __webpack_require__(24);

var _transitions2 = _interopRequireDefault(_transitions);

var _EnhancedTextarea = __webpack_require__(924);

var _EnhancedTextarea2 = _interopRequireDefault(_EnhancedTextarea);

var _TextFieldHint = __webpack_require__(926);

var _TextFieldHint2 = _interopRequireDefault(_TextFieldHint);

var _TextFieldLabel = __webpack_require__(927);

var _TextFieldLabel2 = _interopRequireDefault(_TextFieldLabel);

var _TextFieldUnderline = __webpack_require__(928);

var _TextFieldUnderline2 = _interopRequireDefault(_TextFieldUnderline);

var _warning = __webpack_require__(11);

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

      undefined !== "production" ? (0, _warning2.default)(name || hintText || floatingLabelText || id, 'Material-UI: We don\'t have enough information\n      to build a robust unique id for the TextField component. Please provide an id or a name.') : void 0;

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
TextField.propTypes = undefined !== "production" ? {
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

/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleAssign = __webpack_require__(13);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(24);

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

TextFieldHint.propTypes = undefined !== "production" ? {
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

/***/ }),

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleAssign = __webpack_require__(13);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(24);

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

TextFieldLabel.propTypes = undefined !== "production" ? {
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

/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleAssign = __webpack_require__(13);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(24);

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

TextFieldUnderline.propTypes = undefined !== "production" ? propTypes : {};
TextFieldUnderline.defaultProps = defaultProps;

exports.default = TextFieldUnderline;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL0xvZ2luL0xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvTG9naW4vTG9naW5Cb3hDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9Mb2dpbi9Mb2dpbkJveEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9Mb2dpbi9NeVRleHRGaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL0xvZ2luL0xvZ2luQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL2luZGV4LmpzPzc0NzcqIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uL2luZGV4LmpzPzhlOTUqIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uL1JhaXNlZEJ1dHRvbi5qcz84NGZkKiIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1RleHRGaWVsZC9FbmhhbmNlZFRleHRhcmVhLmpzPzZhZjIqIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL1RleHRGaWVsZC5qcz9iYTViKiIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1RleHRGaWVsZC9UZXh0RmllbGRIaW50LmpzPzE4MjUqIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL1RleHRGaWVsZExhYmVsLmpzP2I4ZjEqIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL1RleHRGaWVsZFVuZGVybGluZS5qcz9hMzkwKiJdLCJuYW1lcyI6WyJMb2dpbiIsIkNvbXBvbmVudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInJlamVjdGVkIiwibG9naW4iLCJMb2dpbkJveENvbnRhaW5lciIsInN0eWxlIiwibWF4V2lkdGgiLCJ3aWR0aCIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJib3JkZXJSYWRpdXMiLCJMb2dpbkJveCIsInByb3BzIiwiaGFuZGxlU3VibWl0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZmxleERpcmVjdGlvbiIsInBvc2l0aW9uIiwiY29sb3IiLCJtYXJnaW4iLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJMb2dpbkJveEZvcm0iLCJmb3JtIiwiTXlUZXh0RmllbGQiLCJmbG9hdGluZ0xhYmVsVGV4dCIsInR5cGUiLCJpbnB1dCIsIm1ldGEiLCJlcnJvciIsInN0cmluZyIsIm9iamVjdCIsIkxvZ2luQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBR01BLEs7Ozs7Ozs7Ozs7O2lDQUNROztBQUVOLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBREosYUFESjtBQVlIOzs7O0VBZmUsZ0JBQU1DLFM7O1FBa0JsQkQsSyxHQUFBQSxLOzs7Ozs7Ozs7Ozs7Ozs7QUN0QlI7O0FBR0E7O0FBRUE7O0FBSkE7O0FBTUEsSUFBTUUscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ0MsUUFBRDtBQUFBLFdBQWU7QUFDdENDLGtCQUFVLGtCQUFDQyxNQUFELEVBQVk7QUFDbEJGLHFCQUFTLDZCQUFpQkUsTUFBakIsQ0FBVDtBQUNBOzs7QUFHSDtBQU5xQyxLQUFmO0FBQUEsQ0FBM0I7O0FBU0EsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsV0FBWTtBQUNoQ0Msa0JBQVVELE1BQU1FLEtBQU4sQ0FBWUQsUUFBWixLQUF5QjtBQURILEtBQVo7QUFBQSxDQUF4Qjs7QUFJQSxJQUFNRSxvQkFBb0IseUJBQVFKLGVBQVIsRUFBeUJKLGtCQUF6Qiw2QkFBMUI7O1FBRVFRLGlCLEdBQUFBLGlCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCUjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBRUE7QUFDQTs7O0FBR0EsSUFBTUMsUUFBUTtBQUNWQyxjQUFVLE9BREE7QUFFVkMsV0FBTyxNQUZHO0FBR1ZDLGFBQVMsYUFIQztBQUlWQyxlQUFXLFFBSkQ7QUFLVkMsa0JBQWM7QUFMSixDQUFkOztJQVFNQyxROzs7Ozs7Ozs7OztpQ0FDUTtBQUFBLHlCQUUyQixLQUFLQyxLQUZoQztBQUFBLGdCQUVDQyxZQUZELFVBRUNBLFlBRkQ7QUFBQSxnQkFFZVgsUUFGZixVQUVlQSxRQUZmOzs7QUFJTixtQkFFSTtBQUFBO0FBQUEsa0JBQUssT0FBTyxFQUFDWSxTQUFTLE1BQVYsRUFBa0JDLGdCQUFnQixRQUFsQyxFQUE0Q0MsV0FBVyxJQUF2RCxFQUE2REMsY0FBYyxJQUEzRSxFQUFaO0FBQ0k7QUFBQTtBQUFBLHNCQUFPLE9BQU9aLEtBQWQsRUFBcUIsUUFBUSxDQUE3QjtBQUNJO0FBQUE7QUFBQSwwQkFBTSxVQUFVUSxZQUFoQixFQUE4QixPQUFPLEVBQUNDLFNBQVMsTUFBVixFQUFrQkksZUFBZSxRQUFqQyxFQUEyQ0gsZ0JBQWdCLFFBQTNELEVBQXJDO0FBQ0k7QUFDSSxrQ0FBSyxVQURUO0FBRUksK0RBRko7QUFHSSwrQ0FBa0IsVUFIdEI7QUFJSSxrQ0FBSztBQUpULDBCQURKO0FBT0k7QUFDSSxrQ0FBSyxVQURUO0FBRUksK0RBRko7QUFHSSwrQ0FBa0IsMEJBSHRCO0FBSUksa0NBQUssVUFKVCxHQVBKO0FBYUk7QUFBQTtBQUFBLDhCQUFLLE9BQU8sRUFBQ0QsU0FBUyxNQUFWLEVBQWtCSSxlQUFlLFFBQWpDLEVBQTJDQyxVQUFVLFVBQXJELEVBQVo7QUFFUWpCLHdDQUNBO0FBQUE7QUFBQSxrQ0FBSyxPQUFPLEVBQUNrQixPQUFPLEtBQVIsRUFBZUQsVUFBVSxVQUF6QixFQUFxQ1osT0FBTyxNQUE1QyxFQUFaO0FBQUE7QUFBQSw2QkFIUjtBQUtJLG9GQUFjLE1BQUssUUFBbkIsRUFBNEIsT0FBTSxRQUFsQyxFQUEyQyxTQUFTLElBQXBELEVBQTBELE9BQU8sRUFBQ2MsUUFBUSxNQUFULEVBQWlCTCxXQUFXLE1BQTVCLEVBQWpFO0FBTEo7QUFiSjtBQURKO0FBREosYUFGSjtBQXNDSDs7OztFQTNDa0IsZ0JBQU1yQixTOztBQThDN0JnQixTQUFTVyxTQUFULEdBQXFCO0FBQ2pCVCxrQkFBYyxvQkFBVVUsSUFBVixDQUFlQyxVQURaO0FBRWpCdEIsY0FBVSxvQkFBVXVCO0FBRkgsQ0FBckI7O0FBT0E7QUFDQSxJQUFNQyxlQUFlLDBCQUFVO0FBQzNCQyxVQUFNO0FBRHFCLENBQVYsRUFFbEJoQixRQUZrQixDQUFyQjs7QUFJQWUsYUFBYUosU0FBYixHQUF5QjtBQUNyQnhCLGNBQVUsb0JBQVV5QixJQUFWLENBQWVDLFVBREo7QUFFckJ0QixjQUFVLG9CQUFVdUI7QUFGQyxDQUF6Qjs7UUFLUUMsWSxHQUFBQSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZSOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRU1FLFc7Ozs7Ozs7Ozs7O2lDQUVRO0FBQUEseUJBRXlDLEtBQUtoQixLQUY5QztBQUFBLGdCQUVDaUIsaUJBRkQsVUFFQ0EsaUJBRkQ7QUFBQSxnQkFFb0JDLElBRnBCLFVBRW9CQSxJQUZwQjtBQUFBLGdCQUUwQkMsS0FGMUIsVUFFMEJBLEtBRjFCO0FBQUEsZ0JBRWlDQyxJQUZqQyxVQUVpQ0EsSUFGakM7OztBQUlOLG1CQUNJO0FBQUE7QUFBQTtBQUNJLGdGQUNRRCxLQURSO0FBRUksd0NBQW9CLElBRnhCO0FBR0ksdUNBQW1CRixpQkFIdkI7QUFJSSwwQkFBTUMsSUFKVjtBQUtJLGtDQUFhLEtBTGpCO0FBTUksMkJBQU8sRUFBQ1QsUUFBUSxNQUFUO0FBTlgsbUJBREo7QUFTS1Usc0JBQU1FLEtBQU4sSUFDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkosYUFESjtBQWdCSDs7OztFQXRCcUIsZ0JBQU10QyxTOztBQXlCaENpQyxZQUFZTixTQUFaLEdBQXdCO0FBQ3BCTyx1QkFBbUIsb0JBQVVLLE1BQVYsQ0FBaUJWLFVBRGhCO0FBRXBCTSxVQUFNLG9CQUFVSSxNQUFWLENBQWlCVixVQUZIO0FBR3BCTyxXQUFPLG9CQUFVSSxNQUhHO0FBSXBCSCxVQUFNLG9CQUFVRztBQUpJLENBQXhCOztRQU9RUCxXLEdBQUFBLFc7Ozs7Ozs7Ozs7Ozs7O0FDckNSOztBQUVBOztBQUVBLElBQU1oQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsV0FBZSxFQUFmO0FBQUEsQ0FBM0I7O0FBSUEsSUFBTUcsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsV0FBWSxFQUFaO0FBQUEsQ0FBeEI7O0FBSUEsSUFBTW1DLGlCQUFpQix5QkFBUXBDLGVBQVIsRUFBeUJKLGtCQUF6QixlQUF2Qjs7a0JBRWV3QyxjOzs7Ozs7OztBQ2RmOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLHNDOzs7Ozs7OztBQ2JBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLHlDOzs7Ozs7OztBQ2JBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG1FQUFtRSxhQUFhO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2REFBNkQ7O0FBRTdELDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLG1HQUFtRztBQUM1RztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCwrQjs7Ozs7Ozs7QUNwZUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG1FQUFtRSxhQUFhO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLG1DQUFtQztBQUM1QyxxRUFBcUUsZ0RBQWdEO0FBQ3JIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsbUM7Ozs7Ozs7O0FDMVBBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG1FQUFtRSxhQUFhO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsc0JBQXNCLG1CQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx3QkFBd0Isd0NBQXdDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrQkFBa0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyw4RUFBOEU7QUFDdkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx1RkFBdUY7QUFDdkY7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDRCOzs7Ozs7OztBQ3RrQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLHdFQUF3RTtBQUM3RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsZ0M7Ozs7Ozs7O0FDL0VBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7O0FDcEhBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdEO0FBQ2hELHVEQUF1RDs7QUFFdkQsMERBQTBEO0FBQzFELDhEQUE4RCxxQkFBcUIseUJBQXlCO0FBQzVHLDhEQUE4RDs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHlEQUF5RDtBQUNsRyx5Q0FBeUMsZ0VBQWdFO0FBQ3pHO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQyIsImZpbGUiOiI0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7TG9naW5Cb3hDb250YWluZXJ9IGZyb20gJy4vTG9naW5Cb3hDb250YWluZXInO1xyXG5cclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlciAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TG9naW5Cb3hDb250YWluZXIgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qe3VuYXV0aG9yaXplZD09PXRydWUgJiYgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpblRvcDogJzEwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vY2F0cGxhbmV0Lm9yZy93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wOS9DYXRzLWFzLWVycm9yLW1lc3NhZ2UtNDAxLmpwZ1wiIGFsdD1cIlVOQVVUSE9SSVpFRFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPSc0MDAnIGhlaWdodD0nMzAwJy8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj59Ki99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7TG9naW59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvTG9naW4vTG9naW4uanMiLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuLyppbXBvcnQge1N1Ym1pc3Npb25FcnJvcn0gZnJvbSAncmVkdXgtZm9ybSc7Ki9cclxuXHJcbmltcG9ydCB7TG9naW5Cb3hGb3JtfSBmcm9tICcuL0xvZ2luQm94Rm9ybSc7XHJcblxyXG5pbXBvcnQge3NlbmRMb2dpblJlcXVlc3R9IGZyb20gJ21vZHVsZXMvbG9naW4nO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gICAgb25TdWJtaXQ6ICh2YWx1ZXMpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChzZW5kTG9naW5SZXF1ZXN0KHZhbHVlcykpO1xyXG4gICAgICAgIC8qcmV0dXJuIG5ldyBQcm9taXNlICgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTdWJtaXNzaW9uRXJyb3IoeyB1c2VybmFtZTogJ1VzZXIgZG9lcyBub3QgZXhpc3QnLCBfZXJyb3I6ICdMb2dpbiBmYWlsZWQhJyB9KTtcclxuICAgICAgICB9KTsqL1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICAgIHJlamVjdGVkOiBzdGF0ZS5sb2dpbi5yZWplY3RlZCA9PT0gdHJ1ZVxyXG59KTtcclxuXHJcbmNvbnN0IExvZ2luQm94Q29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTG9naW5Cb3hGb3JtKTtcclxuXHJcbmV4cG9ydCB7TG9naW5Cb3hDb250YWluZXJ9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL0xvZ2luL0xvZ2luQm94Q29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ21hdGVyaWFsLXVpL1BhcGVyJztcclxuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xyXG5cclxuaW1wb3J0IHtyZWR1eEZvcm0sIEZpZWxkfSBmcm9tICdyZWR1eC1mb3JtJztcclxuXHJcbmltcG9ydCB7TXlUZXh0RmllbGR9IGZyb20gJy4vTXlUZXh0RmllbGQnO1xyXG5cclxuLy9wbGFubmVkIHRvIHNob3cgZnVubnkgaW1hZ2UgaWYgdW5hdXRob3JpemVkXHJcbi8vaW1wb3J0IGltYWdlIGZyb20gJ3Jlc291cmNlcy80MDEucG5nJztcclxuXHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICAgIG1heFdpZHRoOiAnNDAwcHgnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHBhZGRpbmc6ICczJSAyJSAyJSAyJScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMyUnXHJcbn07XHJcblxyXG5jbGFzcyBMb2dpbkJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBjb25zdCB7aGFuZGxlU3VibWl0LCByZWplY3RlZH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICc3JScsIG1hcmdpbkJvdHRvbTogJzMlJ319PlxyXG4gICAgICAgICAgICAgICAgPFBhcGVyIHN0eWxlPXtzdHlsZX0gekRlcHRoPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd1c2VybmFtZScgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e015VGV4dEZpZWxkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtNeVRleHRGaWVsZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIlBhc3N3b3JkIChVU0UgJ2FkbWluJylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIHBvc2l0aW9uOiAncmVsYXRpdmUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0ZWQgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yOiAncmVkJywgcG9zaXRpb246ICdhYnNvbHV0ZScsIHdpZHRoOiAnMTAwJSd9fT5JbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFpc2VkQnV0dG9uIHR5cGU9J3N1Ym1pdCcgbGFiZWw9XCJMb2cgaW5cIiBwcmltYXJ5PXt0cnVlfSBzdHlsZT17e21hcmdpbjogJ2F1dG8nLCBtYXJnaW5Ub3A6ICczMHB4J319IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmF1dGhvcml6ZWQgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPSdodHRwczovL2Jsb2cuZGFzaGJ1cnN0LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wMy82NTA4MDIzMDY1XzFiM2JmNzEwY2Vfby03Mjh4NTgyLmpwZycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxyXG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuTG9naW5Cb3gucHJvcFR5cGVzID0ge1xyXG4gICAgaGFuZGxlU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgcmVqZWN0ZWQ6IFByb3BUeXBlcy5ib29sXHJcbn07XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuY29uc3QgTG9naW5Cb3hGb3JtID0gcmVkdXhGb3JtKHtcclxuICAgIGZvcm06ICdsb2dpbidcclxufSkoTG9naW5Cb3gpO1xyXG5cclxuTG9naW5Cb3hGb3JtLnByb3BUeXBlcyA9IHtcclxuICAgIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgcmVqZWN0ZWQ6IFByb3BUeXBlcy5ib29sXHJcbn07XHJcblxyXG5leHBvcnQge0xvZ2luQm94Rm9ybX07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvTG9naW4vTG9naW5Cb3hGb3JtLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvVGV4dEZpZWxkJztcclxuXHJcbmNsYXNzIE15VGV4dEZpZWxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7ZmxvYXRpbmdMYWJlbFRleHQsIHR5cGUsIGlucHV0LCBtZXRhfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICBmbG9hdGluZ0xhYmVsRml4ZWQ9e3RydWV9IFxyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PXtmbG9hdGluZ0xhYmVsVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT0nb2ZmJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiAnYXV0byd9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtpbnB1dC5lcnJvciAmJiBcclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIEludmFsaWRcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbk15VGV4dEZpZWxkLnByb3BUeXBlcyA9IHtcclxuICAgIGZsb2F0aW5nTGFiZWxUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBpbnB1dDogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIG1ldGE6IFByb3BUeXBlcy5vYmplY3RcclxufTtcclxuXHJcbmV4cG9ydCB7TXlUZXh0RmllbGR9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvTG9naW4vTXlUZXh0RmllbGQuanMiLCJpbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCB7TG9naW59IGZyb20gJy4vTG9naW4nO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG5cclxufSk7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgICBcclxufSk7XHJcblxyXG5jb25zdCBMb2dpbkNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExvZ2luKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luQ29udGFpbmVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL0xvZ2luL0xvZ2luQ29udGFpbmVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX1RleHRGaWVsZCA9IHJlcXVpcmUoJy4vVGV4dEZpZWxkJyk7XG5cbnZhciBfVGV4dEZpZWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RleHRGaWVsZCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9UZXh0RmllbGQyLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL1RleHRGaWVsZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfUmFpc2VkQnV0dG9uID0gcmVxdWlyZSgnLi9SYWlzZWRCdXR0b24nKTtcblxudmFyIF9SYWlzZWRCdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmFpc2VkQnV0dG9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1JhaXNlZEJ1dHRvbjIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5MDJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX2NvbG9yTWFuaXB1bGF0b3IgPSByZXF1aXJlKCcuLi91dGlscy9jb2xvck1hbmlwdWxhdG9yJyk7XG5cbnZhciBfRW5oYW5jZWRCdXR0b24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9FbmhhbmNlZEJ1dHRvbicpO1xuXG52YXIgX0VuaGFuY2VkQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VuaGFuY2VkQnV0dG9uKTtcblxudmFyIF9QYXBlciA9IHJlcXVpcmUoJy4uL1BhcGVyJyk7XG5cbnZhciBfUGFwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFwZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUxhYmVsKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghcHJvcHMuY2hpbGRyZW4gJiYgcHJvcHMubGFiZWwgIT09IDAgJiYgIXByb3BzLmxhYmVsICYmICFwcm9wcy5pY29uKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdSZXF1aXJlZCBwcm9wIGxhYmVsIG9yIGNoaWxkcmVuIG9yIGljb24gd2FzIG5vdCBzcGVjaWZpZWQgaW4gJyArIGNvbXBvbmVudE5hbWUgKyAnLicpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQsIHN0YXRlKSB7XG4gIHZhciBfY29udGV4dCRtdWlUaGVtZSA9IGNvbnRleHQubXVpVGhlbWUsXG4gICAgICBiYXNlVGhlbWUgPSBfY29udGV4dCRtdWlUaGVtZS5iYXNlVGhlbWUsXG4gICAgICBidXR0b24gPSBfY29udGV4dCRtdWlUaGVtZS5idXR0b24sXG4gICAgICByYWlzZWRCdXR0b24gPSBfY29udGV4dCRtdWlUaGVtZS5yYWlzZWRCdXR0b24sXG4gICAgICBib3JkZXJSYWRpdXMgPSBfY29udGV4dCRtdWlUaGVtZS5ib3JkZXJSYWRpdXM7XG4gIHZhciBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3IgPSBwcm9wcy5kaXNhYmxlZEJhY2tncm91bmRDb2xvcixcbiAgICAgIGRpc2FibGVkTGFiZWxDb2xvciA9IHByb3BzLmRpc2FibGVkTGFiZWxDb2xvcixcbiAgICAgIGZ1bGxXaWR0aCA9IHByb3BzLmZ1bGxXaWR0aCxcbiAgICAgIGljb24gPSBwcm9wcy5pY29uLFxuICAgICAgbGFiZWwgPSBwcm9wcy5sYWJlbCxcbiAgICAgIGxhYmVsUG9zaXRpb24gPSBwcm9wcy5sYWJlbFBvc2l0aW9uLFxuICAgICAgcHJpbWFyeSA9IHByb3BzLnByaW1hcnksXG4gICAgICBzZWNvbmRhcnkgPSBwcm9wcy5zZWNvbmRhcnksXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlO1xuXG5cbiAgdmFyIGFtb3VudCA9IHByaW1hcnkgfHwgc2Vjb25kYXJ5ID8gMC40IDogMC4wODtcblxuICB2YXIgYmFja2dyb3VuZENvbG9yID0gcmFpc2VkQnV0dG9uLmNvbG9yO1xuICB2YXIgbGFiZWxDb2xvciA9IHJhaXNlZEJ1dHRvbi50ZXh0Q29sb3I7XG5cbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZENvbG9yID0gZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3IgfHwgcmFpc2VkQnV0dG9uLmRpc2FibGVkQ29sb3I7XG4gICAgbGFiZWxDb2xvciA9IGRpc2FibGVkTGFiZWxDb2xvciB8fCByYWlzZWRCdXR0b24uZGlzYWJsZWRUZXh0Q29sb3I7XG4gIH0gZWxzZSBpZiAocHJpbWFyeSkge1xuICAgIGJhY2tncm91bmRDb2xvciA9IHJhaXNlZEJ1dHRvbi5wcmltYXJ5Q29sb3I7XG4gICAgbGFiZWxDb2xvciA9IHJhaXNlZEJ1dHRvbi5wcmltYXJ5VGV4dENvbG9yO1xuICB9IGVsc2UgaWYgKHNlY29uZGFyeSkge1xuICAgIGJhY2tncm91bmRDb2xvciA9IHJhaXNlZEJ1dHRvbi5zZWNvbmRhcnlDb2xvcjtcbiAgICBsYWJlbENvbG9yID0gcmFpc2VkQnV0dG9uLnNlY29uZGFyeVRleHRDb2xvcjtcbiAgfSBlbHNlIHtcbiAgICBpZiAocHJvcHMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBwcm9wcy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgfVxuICAgIGlmIChwcm9wcy5sYWJlbENvbG9yKSB7XG4gICAgICBsYWJlbENvbG9yID0gcHJvcHMubGFiZWxDb2xvcjtcbiAgICB9XG4gIH1cblxuICB2YXIgYnV0dG9uSGVpZ2h0ID0gc3R5bGUgJiYgc3R5bGUuaGVpZ2h0IHx8IGJ1dHRvbi5oZWlnaHQ7XG5cbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgICBtaW5XaWR0aDogZnVsbFdpZHRoID8gJzEwMCUnIDogYnV0dG9uLm1pbldpZHRoXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgIGhlaWdodDogYnV0dG9uSGVpZ2h0LFxuICAgICAgbGluZUhlaWdodDogYnV0dG9uSGVpZ2h0ICsgJ3B4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAvLyBUaGF0J3MgdGhlIGRlZmF1bHQgdmFsdWUgZm9yIGEgYnV0dG9uIGJ1dCBub3QgYSBsaW5rXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgZm9udFNpemU6IHJhaXNlZEJ1dHRvbi5mb250U2l6ZSxcbiAgICAgIGxldHRlclNwYWNpbmc6IDAsXG4gICAgICB0ZXh0VHJhbnNmb3JtOiByYWlzZWRCdXR0b24udGV4dFRyYW5zZm9ybSB8fCBidXR0b24udGV4dFRyYW5zZm9ybSB8fCAndXBwZXJjYXNlJyxcbiAgICAgIGZvbnRXZWlnaHQ6IHJhaXNlZEJ1dHRvbi5mb250V2VpZ2h0LFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgcGFkZGluZ0xlZnQ6IGljb24gJiYgbGFiZWxQb3NpdGlvbiAhPT0gJ2JlZm9yZScgPyA4IDogYmFzZVRoZW1lLnNwYWNpbmcuZGVza3RvcEd1dHRlckxlc3MsXG4gICAgICBwYWRkaW5nUmlnaHQ6IGljb24gJiYgbGFiZWxQb3NpdGlvbiA9PT0gJ2JlZm9yZScgPyA4IDogYmFzZVRoZW1lLnNwYWNpbmcuZGVza3RvcEd1dHRlckxlc3MsXG4gICAgICBjb2xvcjogbGFiZWxDb2xvclxuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICBtYXJnaW5MZWZ0OiBsYWJlbCAmJiBsYWJlbFBvc2l0aW9uICE9PSAnYmVmb3JlJyA/IDEyIDogMCxcbiAgICAgIG1hcmdpblJpZ2h0OiBsYWJlbCAmJiBsYWJlbFBvc2l0aW9uID09PSAnYmVmb3JlJyA/IDEyIDogMFxuICAgIH0sXG4gICAgb3ZlcmxheToge1xuICAgICAgaGVpZ2h0OiBidXR0b25IZWlnaHQsXG4gICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogKHN0YXRlLmtleWJvYXJkRm9jdXNlZCB8fCBzdGF0ZS5ob3ZlcmVkKSAmJiAhZGlzYWJsZWQgJiYgKDAsIF9jb2xvck1hbmlwdWxhdG9yLmZhZGUpKGxhYmVsQ29sb3IsIGFtb3VudCksXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpLFxuICAgICAgdG9wOiAwXG4gICAgfSxcbiAgICByaXBwbGU6IHtcbiAgICAgIGNvbG9yOiBsYWJlbENvbG9yLFxuICAgICAgb3BhY2l0eTogIShwcmltYXJ5IHx8IHNlY29uZGFyeSkgPyAwLjEgOiAwLjE2XG4gICAgfVxuICB9O1xufVxuXG52YXIgUmFpc2VkQnV0dG9uID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoUmFpc2VkQnV0dG9uLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSYWlzZWRCdXR0b24oKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgUmFpc2VkQnV0dG9uKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IFJhaXNlZEJ1dHRvbi5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoUmFpc2VkQnV0dG9uKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBob3ZlcmVkOiBmYWxzZSxcbiAgICAgIGtleWJvYXJkRm9jdXNlZDogZmFsc2UsXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcbiAgICAgIGluaXRpYWxaRGVwdGg6IDAsXG4gICAgICB6RGVwdGg6IDBcbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIG9ubHkgbGlzdGVuIHRvIGxlZnQgY2xpY2tzXG4gICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB6RGVwdGg6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGggKyAxXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VEb3duKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZVVwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHpEZXB0aDogX3RoaXMuc3RhdGUuaW5pdGlhbFpEZXB0aFxuICAgICAgfSk7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZVVwKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VVcChldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5rZXlib2FyZEZvY3VzZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHpEZXB0aDogX3RoaXMuc3RhdGUuaW5pdGlhbFpEZXB0aCxcbiAgICAgICAgICBob3ZlcmVkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vdXNlTGVhdmUpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Nb3VzZUxlYXZlKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZUVudGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIV90aGlzLnN0YXRlLmtleWJvYXJkRm9jdXNlZCAmJiAhX3RoaXMuc3RhdGUudG91Y2hlZCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaG92ZXJlZDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vdXNlRW50ZXIpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Nb3VzZUVudGVyKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVUb3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRvdWNoZWQ6IHRydWUsXG4gICAgICAgIHpEZXB0aDogX3RoaXMuc3RhdGUuaW5pdGlhbFpEZXB0aCArIDFcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Ub3VjaFN0YXJ0KSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uVG91Y2hTdGFydChldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdG91Y2hlZDogdHJ1ZSxcbiAgICAgICAgekRlcHRoOiBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoXG4gICAgICB9KTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uVG91Y2hFbmQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Ub3VjaEVuZChldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlS2V5Ym9hcmRGb2N1cyA9IGZ1bmN0aW9uIChldmVudCwga2V5Ym9hcmRGb2N1c2VkKSB7XG4gICAgICB2YXIgekRlcHRoID0ga2V5Ym9hcmRGb2N1c2VkICYmICFfdGhpcy5wcm9wcy5kaXNhYmxlZCA/IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGggKyAxIDogX3RoaXMuc3RhdGUuaW5pdGlhbFpEZXB0aDtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB6RGVwdGg6IHpEZXB0aCxcbiAgICAgICAga2V5Ym9hcmRGb2N1c2VkOiBrZXlib2FyZEZvY3VzZWRcbiAgICAgIH0pO1xuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShSYWlzZWRCdXR0b24sIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdmFyIHpEZXB0aCA9IHRoaXMucHJvcHMuZGlzYWJsZWQgPyAwIDogMTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB6RGVwdGg6IHpEZXB0aCxcbiAgICAgICAgaW5pdGlhbFpEZXB0aDogekRlcHRoXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHZhciB6RGVwdGggPSBuZXh0UHJvcHMuZGlzYWJsZWQgPyAwIDogMTtcbiAgICAgIHZhciBuZXh0U3RhdGUgPSB7XG4gICAgICAgIHpEZXB0aDogekRlcHRoLFxuICAgICAgICBpbml0aWFsWkRlcHRoOiB6RGVwdGhcbiAgICAgIH07XG5cbiAgICAgIGlmIChuZXh0UHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgbmV4dFN0YXRlLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvciA9IF9wcm9wcy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgYnV0dG9uU3R5bGUgPSBfcHJvcHMuYnV0dG9uU3R5bGUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBkaXNhYmxlZEJhY2tncm91bmRDb2xvciA9IF9wcm9wcy5kaXNhYmxlZEJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICBkaXNhYmxlZExhYmVsQ29sb3IgPSBfcHJvcHMuZGlzYWJsZWRMYWJlbENvbG9yLFxuICAgICAgICAgIGZ1bGxXaWR0aCA9IF9wcm9wcy5mdWxsV2lkdGgsXG4gICAgICAgICAgaWNvbiA9IF9wcm9wcy5pY29uLFxuICAgICAgICAgIGxhYmVsID0gX3Byb3BzLmxhYmVsLFxuICAgICAgICAgIGxhYmVsQ29sb3IgPSBfcHJvcHMubGFiZWxDb2xvcixcbiAgICAgICAgICBsYWJlbFBvc2l0aW9uID0gX3Byb3BzLmxhYmVsUG9zaXRpb24sXG4gICAgICAgICAgbGFiZWxTdHlsZSA9IF9wcm9wcy5sYWJlbFN0eWxlLFxuICAgICAgICAgIG92ZXJsYXlTdHlsZSA9IF9wcm9wcy5vdmVybGF5U3R5bGUsXG4gICAgICAgICAgcHJpbWFyeSA9IF9wcm9wcy5wcmltYXJ5LFxuICAgICAgICAgIHJpcHBsZVN0eWxlID0gX3Byb3BzLnJpcHBsZVN0eWxlLFxuICAgICAgICAgIHNlY29uZGFyeSA9IF9wcm9wcy5zZWNvbmRhcnksXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnYmFja2dyb3VuZENvbG9yJywgJ2J1dHRvblN0eWxlJywgJ2NoaWxkcmVuJywgJ2NsYXNzTmFtZScsICdkaXNhYmxlZCcsICdkaXNhYmxlZEJhY2tncm91bmRDb2xvcicsICdkaXNhYmxlZExhYmVsQ29sb3InLCAnZnVsbFdpZHRoJywgJ2ljb24nLCAnbGFiZWwnLCAnbGFiZWxDb2xvcicsICdsYWJlbFBvc2l0aW9uJywgJ2xhYmVsU3R5bGUnLCAnb3ZlcmxheVN0eWxlJywgJ3ByaW1hcnknLCAncmlwcGxlU3R5bGUnLCAnc2Vjb25kYXJ5JywgJ3N0eWxlJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMuc3RhdGUpO1xuICAgICAgdmFyIG1lcmdlZFJpcHBsZVN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLnJpcHBsZSwgcmlwcGxlU3R5bGUpO1xuXG4gICAgICB2YXIgYnV0dG9uRXZlbnRIYW5kbGVycyA9IGRpc2FibGVkID8ge30gOiB7XG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZU1vdXNlRG93bixcbiAgICAgICAgb25Nb3VzZVVwOiB0aGlzLmhhbmRsZU1vdXNlVXAsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5oYW5kbGVNb3VzZUxlYXZlLFxuICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuaGFuZGxlTW91c2VFbnRlcixcbiAgICAgICAgb25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG4gICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmQsXG4gICAgICAgIG9uS2V5Ym9hcmRGb2N1czogdGhpcy5oYW5kbGVLZXlib2FyZEZvY3VzXG4gICAgICB9O1xuXG4gICAgICB2YXIgbGFiZWxFbGVtZW50ID0gbGFiZWwgJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmxhYmVsLCBsYWJlbFN0eWxlKSksIGtleTogJ2xhYmVsRWxlbWVudCcgfSxcbiAgICAgICAgbGFiZWxcbiAgICAgICk7XG5cbiAgICAgIHZhciBpY29uQ2xvbmVkID0gaWNvbiAmJiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoaWNvbiwge1xuICAgICAgICBjb2xvcjogaWNvbi5wcm9wcy5jb2xvciB8fCBzdHlsZXMubGFiZWwuY29sb3IsXG4gICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmljb24sIGljb24ucHJvcHMuc3R5bGUpLFxuICAgICAgICBrZXk6ICdpY29uQ2xvbmVkJ1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFBsYWNlIGxhYmVsIGJlZm9yZSBvciBhZnRlciBjaGlsZHJlbi5cbiAgICAgIHZhciBlbmhhbmNlZEJ1dHRvbkNoaWxkcmVuID0gbGFiZWxQb3NpdGlvbiA9PT0gJ2JlZm9yZScgPyBbbGFiZWxFbGVtZW50LCBpY29uQ2xvbmVkLCBjaGlsZHJlbl0gOiBbY2hpbGRyZW4sIGljb25DbG9uZWQsIGxhYmVsRWxlbWVudF07XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1BhcGVyMi5kZWZhdWx0LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpLFxuICAgICAgICAgIHpEZXB0aDogdGhpcy5zdGF0ZS56RGVwdGhcbiAgICAgICAgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX0VuaGFuY2VkQnV0dG9uMi5kZWZhdWx0LFxuICAgICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCBidXR0b25FdmVudEhhbmRsZXJzLCB7XG4gICAgICAgICAgICByZWY6ICdjb250YWluZXInLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMuYnV0dG9uLCBidXR0b25TdHlsZSksXG4gICAgICAgICAgICBmb2N1c1JpcHBsZUNvbG9yOiBtZXJnZWRSaXBwbGVTdHlsZXMuY29sb3IsXG4gICAgICAgICAgICB0b3VjaFJpcHBsZUNvbG9yOiBtZXJnZWRSaXBwbGVTdHlsZXMuY29sb3IsXG4gICAgICAgICAgICBmb2N1c1JpcHBsZU9wYWNpdHk6IG1lcmdlZFJpcHBsZVN0eWxlcy5vcGFjaXR5LFxuICAgICAgICAgICAgdG91Y2hSaXBwbGVPcGFjaXR5OiBtZXJnZWRSaXBwbGVTdHlsZXMub3BhY2l0eVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogJ292ZXJsYXknLFxuICAgICAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLm92ZXJsYXksIG92ZXJsYXlTdHlsZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5oYW5jZWRCdXR0b25DaGlsZHJlblxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFJhaXNlZEJ1dHRvbjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblJhaXNlZEJ1dHRvbi5tdWlOYW1lID0gJ1JhaXNlZEJ1dHRvbic7XG5SYWlzZWRCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIGxhYmVsUG9zaXRpb246ICdhZnRlcicsXG4gIGZ1bGxXaWR0aDogZmFsc2UsXG4gIHByaW1hcnk6IGZhbHNlLFxuICBzZWNvbmRhcnk6IGZhbHNlXG59O1xuUmFpc2VkQnV0dG9uLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5SYWlzZWRCdXR0b24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgYmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIGJ1dHRvbixcbiAgICogYnV0IG5vdCB0aGUgZGVmYXVsdCBkaXNhYmxlZCBiYWNrZ3JvdW5kIGNvbG9yXG4gICAqICh1c2UgYGRpc2FibGVkQmFja2dyb3VuZENvbG9yYCBmb3IgdGhpcykuXG4gICAqL1xuICBiYWNrZ3JvdW5kQ29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGJ1dHRvbiBlbGVtZW50LlxuICAgKi9cbiAgYnV0dG9uU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGJ1dHRvbi5cbiAgICogSWYgYSBsYWJlbCBpcyBwcm92aWRlZCB2aWEgdGhlIGBsYWJlbGAgcHJvcCwgdGhlIHRleHQgd2l0aGluIHRoZSBsYWJlbFxuICAgKiB3aWxsIGJlIGRpc3BsYXllZCBpbiBhZGRpdGlvbiB0byB0aGUgY29udGVudCBwcm92aWRlZCBoZXJlLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBDU1MgY2xhc3MgbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAgKiBUaGUgZWxlbWVudCB0byB1c2UgYXMgdGhlIGNvbnRhaW5lciBmb3IgdGhlIFJhaXNlZEJ1dHRvbi4gRWl0aGVyIGEgc3RyaW5nIHRvXG4gICAgKiB1c2UgYSBET00gZWxlbWVudCBvciBhIFJlYWN0RWxlbWVudC4gVGhpcyBpcyB1c2VmdWwgZm9yIHdyYXBwaW5nIHRoZVxuICAgICogUmFpc2VkQnV0dG9uIGluIGEgY3VzdG9tIExpbmsgY29tcG9uZW50LiBJZiBhIFJlYWN0RWxlbWVudCBpcyBnaXZlbiwgZW5zdXJlXG4gICAgKiB0aGF0IGl0IHBhc3NlcyBhbGwgb2YgaXRzIGdpdmVuIHByb3BzIHRocm91Z2ggdG8gdGhlIHVuZGVybHlpbmcgRE9NXG4gICAgKiBlbGVtZW50IGFuZCByZW5kZXJzIGl0cyBjaGlsZHJlbiBwcm9wIGZvciBwcm9wZXIgaW50ZWdyYXRpb24uXG4gICAgKi9cbiAgY29udGFpbmVyRWxlbWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnRdKSxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBlbGVtZW50J3MgcmlwcGxlIGVmZmVjdCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZVRvdWNoUmlwcGxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgYnV0dG9uIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgYmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIGJ1dHRvblxuICAgKiB3aGVuIGl0IGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBidXR0b24ncyBsYWJlbCB3aGVuIHRoZSBidXR0b24gaXMgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZExhYmVsQ29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cbiAgICovXG4gIGZ1bGxXaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhlIFVSTCB0byBsaW5rIHRvIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgaHJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBBbiBpY29uIHRvIGJlIGRpc3BsYXllZCB3aXRoaW4gdGhlIGJ1dHRvbi5cbiAgICovXG4gIGljb246IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBsYWJlbCB0byBiZSBkaXNwbGF5ZWQgd2l0aGluIHRoZSBidXR0b24uXG4gICAqIElmIGNvbnRlbnQgaXMgcHJvdmlkZWQgdmlhIHRoZSBgY2hpbGRyZW5gIHByb3AsIHRoYXQgY29udGVudCB3aWxsIGJlXG4gICAqIGRpc3BsYXllZCBpbiBhZGRpdGlvbiB0byB0aGUgbGFiZWwgcHJvdmlkZWQgaGVyZS5cbiAgICovXG4gIGxhYmVsOiB2YWxpZGF0ZUxhYmVsLFxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBidXR0b24ncyBsYWJlbC5cbiAgICovXG4gIGxhYmVsQ29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSBidXR0b24ncyBsYWJlbCByZWxhdGl2ZSB0byB0aGUgYnV0dG9uJ3MgYGNoaWxkcmVuYC5cbiAgICovXG4gIGxhYmVsUG9zaXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoWydiZWZvcmUnLCAnYWZ0ZXInXSksXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgYnV0dG9uJ3MgbGFiZWwgZWxlbWVudC5cbiAgICovXG4gIGxhYmVsU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlRG93bjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlRW50ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZUxlYXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VVcDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvblRvdWNoRW5kOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uVG91Y2hTdGFydDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiB0aGUgYnV0dG9uIGlzIHRvdWNoLXRhcHBlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRvdWNoVGFwIGV2ZW50IHRhcmdldGluZyB0aGUgYnV0dG9uLlxuICAgKi9cbiAgb25Ub3VjaFRhcDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZSBzdHlsZSBvZiB0aGUgYnV0dG9uIG92ZXJsYXkuXG4gICAqL1xuICBvdmVybGF5U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIHVzZSB0aGUgdGhlbWUncyBwcmltYXJ5IGNvbG9yLlxuICAgKi9cbiAgcHJpbWFyeTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZSBzdHlsZSBvZiB0aGUgcmlwcGxlIGVsZW1lbnQuXG4gICAqL1xuICByaXBwbGVTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgYnV0dG9uIHdpbGwgdXNlIHRoZSB0aGVtZSdzIHNlY29uZGFyeSBjb2xvci5cbiAgICogSWYgYm90aCBgc2Vjb25kYXJ5YCBhbmQgYHByaW1hcnlgIGFyZSB0cnVlLCB0aGUgYnV0dG9uIHdpbGwgdXNlXG4gICAqIHRoZSB0aGVtZSdzIHByaW1hcnkgY29sb3IuXG4gICAqL1xuICBzZWNvbmRhcnk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJhaXNlZEJ1dHRvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uL1JhaXNlZEJ1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gOTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdEV2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCdyZWFjdC1ldmVudC1saXN0ZW5lcicpO1xuXG52YXIgX3JlYWN0RXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEV2ZW50TGlzdGVuZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcm93c0hlaWdodCA9IDI0O1xuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQsIHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScgfSxcbiAgICB0ZXh0YXJlYToge1xuICAgICAgaGVpZ2h0OiBzdGF0ZS5oZWlnaHQsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgcmVzaXplOiAnbm9uZScsXG4gICAgICBmb250OiAnaW5oZXJpdCcsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgY3Vyc29yOiAnaW5oZXJpdCdcbiAgICB9LFxuICAgIHNoYWRvdzoge1xuICAgICAgcmVzaXplOiAnbm9uZScsXG4gICAgICAvLyBPdmVyZmxvdyBhbHNvIG5lZWRlZCB0byBoZXJlIHRvIHJlbW92ZSB0aGUgZXh0cmEgcm93XG4gICAgICAvLyBhZGRlZCB0byB0ZXh0YXJlYXMgaW4gRmlyZWZveC5cbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIC8vIFZpc2liaWxpdHkgbmVlZGVkIHRvIGhpZGUgdGhlIGV4dHJhIHRleHQgYXJlYSBvbiBpcGFkc1xuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGhlaWdodDogJ2F1dG8nXG4gICAgfVxuICB9O1xufVxuXG52YXIgRW5oYW5jZWRUZXh0YXJlYSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKEVuaGFuY2VkVGV4dGFyZWEsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEVuaGFuY2VkVGV4dGFyZWEoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgRW5oYW5jZWRUZXh0YXJlYSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBFbmhhbmNlZFRleHRhcmVhLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShFbmhhbmNlZFRleHRhcmVhKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBoZWlnaHQ6IG51bGxcbiAgICB9LCBfdGhpcy5oYW5kbGVSZXNpemUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnN5bmNIZWlnaHRXaXRoU2hhZG93KHVuZGVmaW5lZCwgZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICBfdGhpcy5zeW5jSGVpZ2h0V2l0aFNoYWRvdyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlTGluaycpKSB7XG4gICAgICAgIF90aGlzLnByb3BzLnZhbHVlTGluay5yZXF1ZXN0Q2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKEVuaGFuY2VkVGV4dGFyZWEsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5yb3dzICogcm93c0hlaWdodFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc3luY0hlaWdodFdpdGhTaGFkb3coKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUgfHwgbmV4dFByb3BzLnJvd3NNYXggIT09IHRoaXMucHJvcHMucm93c01heCkge1xuICAgICAgICB0aGlzLnN5bmNIZWlnaHRXaXRoU2hhZG93KG5leHRQcm9wcy52YWx1ZSwgbnVsbCwgbmV4dFByb3BzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRJbnB1dE5vZGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnB1dE5vZGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZzLmlucHV0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgIHRoaXMuZ2V0SW5wdXROb2RlKCkudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc3luY0hlaWdodFdpdGhTaGFkb3codmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N5bmNIZWlnaHRXaXRoU2hhZG93JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3luY0hlaWdodFdpdGhTaGFkb3cobmV3VmFsdWUsIGV2ZW50LCBwcm9wcykge1xuICAgICAgdmFyIHNoYWRvdyA9IHRoaXMucmVmcy5zaGFkb3c7XG4gICAgICB2YXIgZGlzcGxheVRleHQgPSB0aGlzLnByb3BzLmhpbnRUZXh0ICYmIChuZXdWYWx1ZSA9PT0gJycgfHwgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBuZXdWYWx1ZSA9PT0gbnVsbCkgPyB0aGlzLnByb3BzLmhpbnRUZXh0IDogbmV3VmFsdWU7XG5cbiAgICAgIGlmIChkaXNwbGF5VGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNoYWRvdy52YWx1ZSA9IGRpc3BsYXlUZXh0O1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3SGVpZ2h0ID0gc2hhZG93LnNjcm9sbEhlaWdodDtcblxuICAgICAgLy8gR3VhcmRpbmcgZm9yIGpzZG9tLCB3aGVyZSBzY3JvbGxIZWlnaHQgaXNuJ3QgcHJlc2VudC5cbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdG1wdmFyL2pzZG9tL2lzc3Vlcy8xMDEzXG4gICAgICBpZiAobmV3SGVpZ2h0ID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgICAgcHJvcHMgPSBwcm9wcyB8fCB0aGlzLnByb3BzO1xuXG4gICAgICBpZiAocHJvcHMucm93c01heCA+PSBwcm9wcy5yb3dzKSB7XG4gICAgICAgIG5ld0hlaWdodCA9IE1hdGgubWluKHByb3BzLnJvd3NNYXggKiByb3dzSGVpZ2h0LCBuZXdIZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICBuZXdIZWlnaHQgPSBNYXRoLm1heChuZXdIZWlnaHQsIHJvd3NIZWlnaHQpO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5oZWlnaHQgIT09IG5ld0hlaWdodCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBoZWlnaHQ6IG5ld0hlaWdodFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocHJvcHMub25IZWlnaHRDaGFuZ2UpIHtcbiAgICAgICAgICBwcm9wcy5vbkhlaWdodENoYW5nZShldmVudCwgbmV3SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3Byb3BzLm9uQ2hhbmdlLFxuICAgICAgICAgIG9uSGVpZ2h0Q2hhbmdlID0gX3Byb3BzLm9uSGVpZ2h0Q2hhbmdlLFxuICAgICAgICAgIHJvd3MgPSBfcHJvcHMucm93cyxcbiAgICAgICAgICByb3dzTWF4ID0gX3Byb3BzLnJvd3NNYXgsXG4gICAgICAgICAgc2hhZG93U3R5bGUgPSBfcHJvcHMuc2hhZG93U3R5bGUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgaGludFRleHQgPSBfcHJvcHMuaGludFRleHQsXG4gICAgICAgICAgdGV4dGFyZWFTdHlsZSA9IF9wcm9wcy50ZXh0YXJlYVN0eWxlLFxuICAgICAgICAgIHZhbHVlTGluayA9IF9wcm9wcy52YWx1ZUxpbmssXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnb25DaGFuZ2UnLCAnb25IZWlnaHRDaGFuZ2UnLCAncm93cycsICdyb3dzTWF4JywgJ3NoYWRvd1N0eWxlJywgJ3N0eWxlJywgJ2hpbnRUZXh0JywgJ3RleHRhcmVhU3R5bGUnLCAndmFsdWVMaW5rJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMuc3RhdGUpO1xuICAgICAgdmFyIHJvb3RTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKTtcbiAgICAgIHZhciB0ZXh0YXJlYVN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMudGV4dGFyZWEsIHRleHRhcmVhU3R5bGUpO1xuICAgICAgdmFyIHNoYWRvd1N0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgdGV4dGFyZWFTdHlsZXMsIHN0eWxlcy5zaGFkb3csIHNoYWRvd1N0eWxlKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlTGluaycpKSB7XG4gICAgICAgIG90aGVyLnZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZUxpbmsudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMocm9vdFN0eWxlcykgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0RXZlbnRMaXN0ZW5lcjIuZGVmYXVsdCwgeyB0YXJnZXQ6ICd3aW5kb3cnLCBvblJlc2l6ZTogdGhpcy5oYW5kbGVSZXNpemUgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIHtcbiAgICAgICAgICByZWY6ICdzaGFkb3cnLFxuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKHNoYWRvd1N0eWxlcyksXG4gICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgcm93czogdGhpcy5wcm9wcy5yb3dzLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUsXG4gICAgICAgICAgdmFsdWVMaW5rOiB0aGlzLnByb3BzLnZhbHVlTGlua1xuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHtcbiAgICAgICAgICByZWY6ICdpbnB1dCcsXG4gICAgICAgICAgcm93czogdGhpcy5wcm9wcy5yb3dzLFxuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKHRleHRhcmVhU3R5bGVzKSxcbiAgICAgICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVDaGFuZ2VcbiAgICAgICAgfSkpXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRW5oYW5jZWRUZXh0YXJlYTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkVuaGFuY2VkVGV4dGFyZWEuZGVmYXVsdFByb3BzID0ge1xuICByb3dzOiAxXG59O1xuRW5oYW5jZWRUZXh0YXJlYS5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuRW5oYW5jZWRUZXh0YXJlYS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGRlZmF1bHRWYWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGhpbnRUZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uSGVpZ2h0Q2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHJvd3M6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICByb3dzTWF4OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgc2hhZG93U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgdGV4dGFyZWFTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdmFsdWVMaW5rOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gRW5oYW5jZWRUZXh0YXJlYTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL0VuaGFuY2VkVGV4dGFyZWEuanNcbi8vIG1vZHVsZSBpZCA9IDkyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgncmVjb21wb3NlL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFsbG93RXF1YWwpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX0VuaGFuY2VkVGV4dGFyZWEgPSByZXF1aXJlKCcuL0VuaGFuY2VkVGV4dGFyZWEnKTtcblxudmFyIF9FbmhhbmNlZFRleHRhcmVhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VuaGFuY2VkVGV4dGFyZWEpO1xuXG52YXIgX1RleHRGaWVsZEhpbnQgPSByZXF1aXJlKCcuL1RleHRGaWVsZEhpbnQnKTtcblxudmFyIF9UZXh0RmllbGRIaW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RleHRGaWVsZEhpbnQpO1xuXG52YXIgX1RleHRGaWVsZExhYmVsID0gcmVxdWlyZSgnLi9UZXh0RmllbGRMYWJlbCcpO1xuXG52YXIgX1RleHRGaWVsZExhYmVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RleHRGaWVsZExhYmVsKTtcblxudmFyIF9UZXh0RmllbGRVbmRlcmxpbmUgPSByZXF1aXJlKCcuL1RleHRGaWVsZFVuZGVybGluZScpO1xuXG52YXIgX1RleHRGaWVsZFVuZGVybGluZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXh0RmllbGRVbmRlcmxpbmUpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCwgc3RhdGUpIHtcbiAgdmFyIF9jb250ZXh0JG11aVRoZW1lID0gY29udGV4dC5tdWlUaGVtZSxcbiAgICAgIGJhc2VUaGVtZSA9IF9jb250ZXh0JG11aVRoZW1lLmJhc2VUaGVtZSxcbiAgICAgIF9jb250ZXh0JG11aVRoZW1lJHRleCA9IF9jb250ZXh0JG11aVRoZW1lLnRleHRGaWVsZCxcbiAgICAgIGZsb2F0aW5nTGFiZWxDb2xvciA9IF9jb250ZXh0JG11aVRoZW1lJHRleC5mbG9hdGluZ0xhYmVsQ29sb3IsXG4gICAgICBmb2N1c0NvbG9yID0gX2NvbnRleHQkbXVpVGhlbWUkdGV4LmZvY3VzQ29sb3IsXG4gICAgICB0ZXh0Q29sb3IgPSBfY29udGV4dCRtdWlUaGVtZSR0ZXgudGV4dENvbG9yLFxuICAgICAgZGlzYWJsZWRUZXh0Q29sb3IgPSBfY29udGV4dCRtdWlUaGVtZSR0ZXguZGlzYWJsZWRUZXh0Q29sb3IsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBfY29udGV4dCRtdWlUaGVtZSR0ZXguYmFja2dyb3VuZENvbG9yLFxuICAgICAgZXJyb3JDb2xvciA9IF9jb250ZXh0JG11aVRoZW1lJHRleC5lcnJvckNvbG9yO1xuXG5cbiAgdmFyIHN0eWxlcyA9IHtcbiAgICByb290OiB7XG4gICAgICBmb250U2l6ZTogMTYsXG4gICAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXG4gICAgICB3aWR0aDogcHJvcHMuZnVsbFdpZHRoID8gJzEwMCUnIDogMjU2LFxuICAgICAgaGVpZ2h0OiAocHJvcHMucm93cyAtIDEpICogMjQgKyAocHJvcHMuZmxvYXRpbmdMYWJlbFRleHQgPyA3MiA6IDQ4KSxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcixcbiAgICAgIGZvbnRGYW1pbHk6IGJhc2VUaGVtZS5mb250RmFtaWx5LFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzIwMG1zJywgJ2hlaWdodCcpLFxuICAgICAgY3Vyc29yOiBwcm9wcy5kaXNhYmxlZCA/ICdub3QtYWxsb3dlZCcgOiAnYXV0bydcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGJvdHRvbTogMixcbiAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgIGxpbmVIZWlnaHQ6ICcxMnB4JyxcbiAgICAgIGNvbG9yOiBlcnJvckNvbG9yLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKVxuICAgIH0sXG4gICAgZmxvYXRpbmdMYWJlbDoge1xuICAgICAgY29sb3I6IHByb3BzLmRpc2FibGVkID8gZGlzYWJsZWRUZXh0Q29sb3IgOiBmbG9hdGluZ0xhYmVsQ29sb3IsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICB9LFxuICAgIGlucHV0OiB7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDApJyxcbiAgICAgIGNvbG9yOiBwcm9wcy5kaXNhYmxlZCA/IGRpc2FibGVkVGV4dENvbG9yIDogdGV4dENvbG9yLFxuICAgICAgY3Vyc29yOiAnaW5oZXJpdCcsXG4gICAgICBmb250OiAnaW5oZXJpdCcsXG4gICAgICBXZWJraXRUZXh0RmlsbENvbG9yOiBwcm9wcy5kaXNhYmxlZCA/IGRpc2FibGVkVGV4dENvbG9yIDogdGV4dENvbG9yLFxuICAgICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6ICdyZ2JhKDAsMCwwLDApJyB9LFxuICAgIGlucHV0TmF0aXZlOiB7XG4gICAgICBhcHBlYXJhbmNlOiAndGV4dGZpZWxkJyB9XG4gIH07XG5cbiAgc3R5bGVzLnRleHRhcmVhID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMuaW5wdXQsIHtcbiAgICBtYXJnaW5Ub3A6IHByb3BzLmZsb2F0aW5nTGFiZWxUZXh0ID8gMzYgOiAxMixcbiAgICBtYXJnaW5Cb3R0b206IHByb3BzLmZsb2F0aW5nTGFiZWxUZXh0ID8gLTM2IDogLTEyLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGZvbnQ6ICdpbmhlcml0J1xuICB9KTtcblxuICAvLyBEbyBub3QgYXNzaWduIGEgaGVpZ2h0IHRvIHRoZSB0ZXh0YXJlYSBhcyBoZSBoYW5kbGVzIGl0IG9uIGhpcyBvd24uXG4gIHN0eWxlcy5pbnB1dC5oZWlnaHQgPSAnMTAwJSc7XG5cbiAgaWYgKHN0YXRlLmlzRm9jdXNlZCkge1xuICAgIHN0eWxlcy5mbG9hdGluZ0xhYmVsLmNvbG9yID0gZm9jdXNDb2xvcjtcbiAgfVxuXG4gIGlmIChwcm9wcy5mbG9hdGluZ0xhYmVsVGV4dCkge1xuICAgIHN0eWxlcy5pbnB1dC5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG5cbiAgICBpZiAoIXByb3BzLm11bHRpTGluZSkge1xuICAgICAgc3R5bGVzLmlucHV0Lm1hcmdpblRvcCA9IDE0O1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5lcnJvclRleHQpIHtcbiAgICAgIHN0eWxlcy5lcnJvci5ib3R0b20gPSAhcHJvcHMubXVsdGlMaW5lID8gc3R5bGVzLmVycm9yLmZvbnRTaXplICsgMyA6IDM7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLmVycm9yVGV4dCkge1xuICAgIGlmIChzdGF0ZS5pc0ZvY3VzZWQpIHtcbiAgICAgIHN0eWxlcy5mbG9hdGluZ0xhYmVsLmNvbG9yID0gc3R5bGVzLmVycm9yLmNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgdmFsaWQgdG8gYmUgZGlzcGxheWVkIGluc2lkZSBhbiBpbnB1dC5cbiAqXG4gKiBAcGFyYW0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RyaW5nIHByb3ZpZGVkIGlzIHZhbGlkLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSAnJyAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmICEoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKTtcbn1cblxudmFyIFRleHRGaWVsZCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFRleHRGaWVsZCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVGV4dEZpZWxkKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFRleHRGaWVsZCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBUZXh0RmllbGQuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFRleHRGaWVsZCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNGb2N1c2VkOiBmYWxzZSxcbiAgICAgIGVycm9yVGV4dDogdW5kZWZpbmVkLFxuICAgICAgaGFzVmFsdWU6IGZhbHNlXG4gICAgfSwgX3RoaXMuaGFuZGxlSW5wdXRCbHVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGlzRm9jdXNlZDogZmFsc2UgfSk7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQmx1cihldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBoYXNWYWx1ZTogaXNWYWxpZChldmVudC50YXJnZXQudmFsdWUpIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCBldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZUlucHV0Rm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGlzRm9jdXNlZDogdHJ1ZSB9KTtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZUhlaWdodENoYW5nZSA9IGZ1bmN0aW9uIChldmVudCwgaGVpZ2h0KSB7XG4gICAgICB2YXIgbmV3SGVpZ2h0ID0gaGVpZ2h0ICsgMjQ7XG4gICAgICBpZiAoX3RoaXMucHJvcHMuZmxvYXRpbmdMYWJlbFRleHQpIHtcbiAgICAgICAgbmV3SGVpZ2h0ICs9IDI0O1xuICAgICAgfVxuICAgICAgX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKF90aGlzKS5zdHlsZS5oZWlnaHQgPSBuZXdIZWlnaHQgKyAncHgnO1xuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShUZXh0RmllbGQsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgbmFtZSA9IF9wcm9wcy5uYW1lLFxuICAgICAgICAgIGhpbnRUZXh0ID0gX3Byb3BzLmhpbnRUZXh0LFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0ID0gX3Byb3BzLmZsb2F0aW5nTGFiZWxUZXh0LFxuICAgICAgICAgIGlkID0gX3Byb3BzLmlkO1xuXG5cbiAgICAgIHZhciBwcm9wc0xlYWYgPSBjaGlsZHJlbiA/IGNoaWxkcmVuLnByb3BzIDogdGhpcy5wcm9wcztcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVycm9yVGV4dDogdGhpcy5wcm9wcy5lcnJvclRleHQsXG4gICAgICAgIGhhc1ZhbHVlOiBpc1ZhbGlkKHByb3BzTGVhZi52YWx1ZSkgfHwgaXNWYWxpZChwcm9wc0xlYWYuZGVmYXVsdFZhbHVlKVxuICAgICAgfSk7XG5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkobmFtZSB8fCBoaW50VGV4dCB8fCBmbG9hdGluZ0xhYmVsVGV4dCB8fCBpZCwgJ01hdGVyaWFsLVVJOiBXZSBkb25cXCd0IGhhdmUgZW5vdWdoIGluZm9ybWF0aW9uXFxuICAgICAgdG8gYnVpbGQgYSByb2J1c3QgdW5pcXVlIGlkIGZvciB0aGUgVGV4dEZpZWxkIGNvbXBvbmVudC4gUGxlYXNlIHByb3ZpZGUgYW4gaWQgb3IgYSBuYW1lLicpIDogdm9pZCAwO1xuXG4gICAgICB2YXIgdW5pcXVlSWQgPSBuYW1lICsgJy0nICsgaGludFRleHQgKyAnLScgKyBmbG9hdGluZ0xhYmVsVGV4dCArICctJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDB4RkZGRik7XG4gICAgICB0aGlzLnVuaXF1ZUlkID0gdW5pcXVlSWQucmVwbGFjZSgvW15BLVphLXowLTktXS9naSwgJycpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKG5leHRQcm9wcy5lcnJvclRleHQgIT09IHRoaXMucHJvcHMuZXJyb3JUZXh0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGVycm9yVGV4dDogbmV4dFByb3BzLmVycm9yVGV4dFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5leHRQcm9wcy5jaGlsZHJlbiAmJiBuZXh0UHJvcHMuY2hpbGRyZW4ucHJvcHMpIHtcbiAgICAgICAgbmV4dFByb3BzID0gbmV4dFByb3BzLmNoaWxkcmVuLnByb3BzO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dFByb3BzLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgIHZhciBoYXNWYWx1ZSA9IGlzVmFsaWQobmV4dFByb3BzLnZhbHVlKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBoYXNWYWx1ZTogaGFzVmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkge1xuICAgICAgcmV0dXJuICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSkgfHwgISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLmNvbnRleHQsIG5leHRDb250ZXh0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdibHVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgIGlmICh0aGlzLmlucHV0KSB7XG4gICAgICAgIHRoaXMuZ2V0SW5wdXROb2RlKCkuYmx1cigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZvY3VzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICBpZiAodGhpcy5pbnB1dCkge1xuICAgICAgICB0aGlzLmdldElucHV0Tm9kZSgpLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2VsZWN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VsZWN0KCkge1xuICAgICAgaWYgKHRoaXMuaW5wdXQpIHtcbiAgICAgICAgdGhpcy5nZXRJbnB1dE5vZGUoKS5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5wdXQgPyB0aGlzLmdldElucHV0Tm9kZSgpLnZhbHVlIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldElucHV0Tm9kZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldElucHV0Tm9kZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuIHx8IHRoaXMucHJvcHMubXVsdGlMaW5lID8gdGhpcy5pbnB1dC5nZXRJbnB1dE5vZGUoKSA6IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLmlucHV0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfaXNDb250cm9sbGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2lzQ29udHJvbGxlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmhhc093blByb3BlcnR5KCd2YWx1ZScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wczIuY2xhc3NOYW1lLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzMi5kaXNhYmxlZCxcbiAgICAgICAgICBlcnJvclN0eWxlID0gX3Byb3BzMi5lcnJvclN0eWxlLFxuICAgICAgICAgIGVycm9yVGV4dCA9IF9wcm9wczIuZXJyb3JUZXh0LFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxGaXhlZCA9IF9wcm9wczIuZmxvYXRpbmdMYWJlbEZpeGVkLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxGb2N1c1N0eWxlID0gX3Byb3BzMi5mbG9hdGluZ0xhYmVsRm9jdXNTdHlsZSxcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsU2hyaW5rU3R5bGUgPSBfcHJvcHMyLmZsb2F0aW5nTGFiZWxTaHJpbmtTdHlsZSxcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsU3R5bGUgPSBfcHJvcHMyLmZsb2F0aW5nTGFiZWxTdHlsZSxcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dCA9IF9wcm9wczIuZmxvYXRpbmdMYWJlbFRleHQsXG4gICAgICAgICAgZnVsbFdpZHRoID0gX3Byb3BzMi5mdWxsV2lkdGgsXG4gICAgICAgICAgaGludFRleHQgPSBfcHJvcHMyLmhpbnRUZXh0LFxuICAgICAgICAgIGhpbnRTdHlsZSA9IF9wcm9wczIuaGludFN0eWxlLFxuICAgICAgICAgIGlkID0gX3Byb3BzMi5pZCxcbiAgICAgICAgICBpbnB1dFN0eWxlID0gX3Byb3BzMi5pbnB1dFN0eWxlLFxuICAgICAgICAgIG11bHRpTGluZSA9IF9wcm9wczIubXVsdGlMaW5lLFxuICAgICAgICAgIG9uQmx1ciA9IF9wcm9wczIub25CbHVyLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3Byb3BzMi5vbkNoYW5nZSxcbiAgICAgICAgICBvbkZvY3VzID0gX3Byb3BzMi5vbkZvY3VzLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzMi5zdHlsZSxcbiAgICAgICAgICB0eXBlID0gX3Byb3BzMi50eXBlLFxuICAgICAgICAgIHVuZGVybGluZURpc2FibGVkU3R5bGUgPSBfcHJvcHMyLnVuZGVybGluZURpc2FibGVkU3R5bGUsXG4gICAgICAgICAgdW5kZXJsaW5lRm9jdXNTdHlsZSA9IF9wcm9wczIudW5kZXJsaW5lRm9jdXNTdHlsZSxcbiAgICAgICAgICB1bmRlcmxpbmVTaG93ID0gX3Byb3BzMi51bmRlcmxpbmVTaG93LFxuICAgICAgICAgIHVuZGVybGluZVN0eWxlID0gX3Byb3BzMi51bmRlcmxpbmVTdHlsZSxcbiAgICAgICAgICByb3dzID0gX3Byb3BzMi5yb3dzLFxuICAgICAgICAgIHJvd3NNYXggPSBfcHJvcHMyLnJvd3NNYXgsXG4gICAgICAgICAgdGV4dGFyZWFTdHlsZSA9IF9wcm9wczIudGV4dGFyZWFTdHlsZSxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wczIsIFsnY2hpbGRyZW4nLCAnY2xhc3NOYW1lJywgJ2Rpc2FibGVkJywgJ2Vycm9yU3R5bGUnLCAnZXJyb3JUZXh0JywgJ2Zsb2F0aW5nTGFiZWxGaXhlZCcsICdmbG9hdGluZ0xhYmVsRm9jdXNTdHlsZScsICdmbG9hdGluZ0xhYmVsU2hyaW5rU3R5bGUnLCAnZmxvYXRpbmdMYWJlbFN0eWxlJywgJ2Zsb2F0aW5nTGFiZWxUZXh0JywgJ2Z1bGxXaWR0aCcsICdoaW50VGV4dCcsICdoaW50U3R5bGUnLCAnaWQnLCAnaW5wdXRTdHlsZScsICdtdWx0aUxpbmUnLCAnb25CbHVyJywgJ29uQ2hhbmdlJywgJ29uRm9jdXMnLCAnc3R5bGUnLCAndHlwZScsICd1bmRlcmxpbmVEaXNhYmxlZFN0eWxlJywgJ3VuZGVybGluZUZvY3VzU3R5bGUnLCAndW5kZXJsaW5lU2hvdycsICd1bmRlcmxpbmVTdHlsZScsICdyb3dzJywgJ3Jvd3NNYXgnLCAndGV4dGFyZWFTdHlsZSddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0LCB0aGlzLnN0YXRlKTtcbiAgICAgIHZhciBpbnB1dElkID0gaWQgfHwgdGhpcy51bmlxdWVJZDtcblxuICAgICAgdmFyIGVycm9yVGV4dEVsZW1lbnQgPSB0aGlzLnN0YXRlLmVycm9yVGV4dCAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5lcnJvciwgZXJyb3JTdHlsZSkpIH0sXG4gICAgICAgIHRoaXMuc3RhdGUuZXJyb3JUZXh0XG4gICAgICApO1xuXG4gICAgICB2YXIgZmxvYXRpbmdMYWJlbFRleHRFbGVtZW50ID0gZmxvYXRpbmdMYWJlbFRleHQgJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9UZXh0RmllbGRMYWJlbDIuZGVmYXVsdCxcbiAgICAgICAge1xuICAgICAgICAgIG11aVRoZW1lOiB0aGlzLmNvbnRleHQubXVpVGhlbWUsXG4gICAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMuZmxvYXRpbmdMYWJlbCwgZmxvYXRpbmdMYWJlbFN0eWxlLCB0aGlzLnN0YXRlLmlzRm9jdXNlZCA/IGZsb2F0aW5nTGFiZWxGb2N1c1N0eWxlIDogbnVsbCksXG4gICAgICAgICAgc2hyaW5rU3R5bGU6IGZsb2F0aW5nTGFiZWxTaHJpbmtTdHlsZSxcbiAgICAgICAgICBodG1sRm9yOiBpbnB1dElkLFxuICAgICAgICAgIHNocmluazogdGhpcy5zdGF0ZS5oYXNWYWx1ZSB8fCB0aGlzLnN0YXRlLmlzRm9jdXNlZCB8fCBmbG9hdGluZ0xhYmVsRml4ZWQsXG4gICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkXG4gICAgICAgIH0sXG4gICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0XG4gICAgICApO1xuXG4gICAgICB2YXIgaW5wdXRQcm9wcyA9IHtcbiAgICAgICAgaWQ6IGlucHV0SWQsXG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLmlucHV0ID0gZWxlbTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICAgIG9uQmx1cjogdGhpcy5oYW5kbGVJbnB1dEJsdXIsXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLFxuICAgICAgICBvbkZvY3VzOiB0aGlzLmhhbmRsZUlucHV0Rm9jdXNcbiAgICAgIH07XG5cbiAgICAgIHZhciBjaGlsZFN0eWxlTWVyZ2VkID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5pbnB1dCwgaW5wdXRTdHlsZSk7XG5cbiAgICAgIHZhciBpbnB1dEVsZW1lbnQgPSB2b2lkIDA7XG4gICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgaW5wdXRFbGVtZW50ID0gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZHJlbiwgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgaW5wdXRQcm9wcywgY2hpbGRyZW4ucHJvcHMsIHtcbiAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKGNoaWxkU3R5bGVNZXJnZWQsIGNoaWxkcmVuLnByb3BzLnN0eWxlKVxuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dEVsZW1lbnQgPSBtdWx0aUxpbmUgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRW5oYW5jZWRUZXh0YXJlYTIuZGVmYXVsdCwgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7XG4gICAgICAgICAgc3R5bGU6IGNoaWxkU3R5bGVNZXJnZWQsXG4gICAgICAgICAgdGV4dGFyZWFTdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy50ZXh0YXJlYSwgc3R5bGVzLmlucHV0TmF0aXZlLCB0ZXh0YXJlYVN0eWxlKSxcbiAgICAgICAgICByb3dzOiByb3dzLFxuICAgICAgICAgIHJvd3NNYXg6IHJvd3NNYXgsXG4gICAgICAgICAgaGludFRleHQ6IGhpbnRUZXh0XG4gICAgICAgIH0sIG90aGVyLCBpbnB1dFByb3BzLCB7XG4gICAgICAgICAgb25IZWlnaHRDaGFuZ2U6IHRoaXMuaGFuZGxlSGVpZ2h0Q2hhbmdlXG4gICAgICAgIH0pKSA6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5pbnB1dE5hdGl2ZSwgY2hpbGRTdHlsZU1lcmdlZCkpXG4gICAgICAgIH0sIG90aGVyLCBpbnB1dFByb3BzKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciByb290UHJvcHMgPSB7fTtcblxuICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgIHJvb3RQcm9wcyA9IG90aGVyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCByb290UHJvcHMsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSlcbiAgICAgICAgfSksXG4gICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0RWxlbWVudCxcbiAgICAgICAgaGludFRleHQgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVGV4dEZpZWxkSGludDIuZGVmYXVsdCwge1xuICAgICAgICAgIG11aVRoZW1lOiB0aGlzLmNvbnRleHQubXVpVGhlbWUsXG4gICAgICAgICAgc2hvdzogISh0aGlzLnN0YXRlLmhhc1ZhbHVlIHx8IGZsb2F0aW5nTGFiZWxUZXh0ICYmICF0aGlzLnN0YXRlLmlzRm9jdXNlZCkgfHwgIXRoaXMuc3RhdGUuaGFzVmFsdWUgJiYgZmxvYXRpbmdMYWJlbFRleHQgJiYgZmxvYXRpbmdMYWJlbEZpeGVkICYmICF0aGlzLnN0YXRlLmlzRm9jdXNlZCxcbiAgICAgICAgICBzdHlsZTogaGludFN0eWxlLFxuICAgICAgICAgIHRleHQ6IGhpbnRUZXh0XG4gICAgICAgIH0pIDogbnVsbCxcbiAgICAgICAgaW5wdXRFbGVtZW50LFxuICAgICAgICB1bmRlcmxpbmVTaG93ID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1RleHRGaWVsZFVuZGVybGluZTIuZGVmYXVsdCwge1xuICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICBkaXNhYmxlZFN0eWxlOiB1bmRlcmxpbmVEaXNhYmxlZFN0eWxlLFxuICAgICAgICAgIGVycm9yOiAhIXRoaXMuc3RhdGUuZXJyb3JUZXh0LFxuICAgICAgICAgIGVycm9yU3R5bGU6IGVycm9yU3R5bGUsXG4gICAgICAgICAgZm9jdXM6IHRoaXMuc3RhdGUuaXNGb2N1c2VkLFxuICAgICAgICAgIGZvY3VzU3R5bGU6IHVuZGVybGluZUZvY3VzU3R5bGUsXG4gICAgICAgICAgbXVpVGhlbWU6IHRoaXMuY29udGV4dC5tdWlUaGVtZSxcbiAgICAgICAgICBzdHlsZTogdW5kZXJsaW5lU3R5bGVcbiAgICAgICAgfSkgOiBudWxsLFxuICAgICAgICBlcnJvclRleHRFbGVtZW50XG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gVGV4dEZpZWxkO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuVGV4dEZpZWxkLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBmbG9hdGluZ0xhYmVsRml4ZWQ6IGZhbHNlLFxuICBtdWx0aUxpbmU6IGZhbHNlLFxuICBmdWxsV2lkdGg6IGZhbHNlLFxuICB0eXBlOiAndGV4dCcsXG4gIHVuZGVybGluZVNob3c6IHRydWUsXG4gIHJvd3M6IDFcbn07XG5UZXh0RmllbGQuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblRleHRGaWVsZC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgY3NzIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgdGV4dCBzdHJpbmcgdG8gdXNlIGZvciB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgdGV4dCBmaWVsZCBpZiBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgc3R5bGUgb2JqZWN0IHRvIHVzZSB0byBvdmVycmlkZSBlcnJvciBzdHlsZXMuXG4gICAqL1xuICBlcnJvclN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBlcnJvciBjb250ZW50IHRvIGRpc3BsYXkuXG4gICAqL1xuICBlcnJvclRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBmbG9hdGluZyBsYWJlbCB3aWxsIGZsb2F0IGV2ZW4gd2hlbiB0aGVyZSBpcyBubyB2YWx1ZS5cbiAgICovXG4gIGZsb2F0aW5nTGFiZWxGaXhlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhlIHN0eWxlIG9iamVjdCB0byB1c2UgdG8gb3ZlcnJpZGUgZmxvYXRpbmcgbGFiZWwgc3R5bGVzIHdoZW4gZm9jdXNlZC5cbiAgICovXG4gIGZsb2F0aW5nTGFiZWxGb2N1c1N0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBzdHlsZSBvYmplY3QgdG8gdXNlIHRvIG92ZXJyaWRlIGZsb2F0aW5nIGxhYmVsIHN0eWxlcyB3aGVuIHNocnVuay5cbiAgICovXG4gIGZsb2F0aW5nTGFiZWxTaHJpbmtTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgc3R5bGUgb2JqZWN0IHRvIHVzZSB0byBvdmVycmlkZSBmbG9hdGluZyBsYWJlbCBzdHlsZXMuXG4gICAqL1xuICBmbG9hdGluZ0xhYmVsU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgdG8gdXNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgZWxlbWVudC5cbiAgICovXG4gIGZsb2F0aW5nTGFiZWxUZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgZmllbGQgcmVjZWl2ZXMgdGhlIHByb3BlcnR5IHdpZHRoIDEwMCUuXG4gICAqL1xuICBmdWxsV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBUZXh0RmllbGQncyBoaW50IHRleHQgZWxlbWVudC5cbiAgICovXG4gIGhpbnRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgaGludCBjb250ZW50IHRvIGRpc3BsYXkuXG4gICAqL1xuICBoaW50VGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogVGhlIGlkIHByb3AgZm9yIHRoZSB0ZXh0IGZpZWxkLlxuICAgKi9cbiAgaWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIFRleHRGaWVsZCdzIGlucHV0IGVsZW1lbnQuXG4gICAqIFdoZW4gbXVsdGlMaW5lIGlzIGZhbHNlOiBkZWZpbmUgdGhlIHN0eWxlIG9mIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKiBXaGVuIG11bHRpTGluZSBpcyB0cnVlOiBkZWZpbmUgdGhlIHN0eWxlIG9mIHRoZSBjb250YWluZXIgb2YgdGhlIHRleHRhcmVhLlxuICAgKi9cbiAgaW5wdXRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBhIHRleHRhcmVhIGVsZW1lbnQgd2lsbCBiZSByZW5kZXJlZC5cbiAgICogVGhlIHRleHRhcmVhIGFsc28gZ3Jvd3MgYW5kIHNocmlua3MgYWNjb3JkaW5nIHRvIHRoZSBudW1iZXIgb2YgbGluZXMuXG4gICAqL1xuICBtdWx0aUxpbmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE5hbWUgYXBwbGllZCB0byB0aGUgaW5wdXQuXG4gICAqL1xuICBuYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25CbHVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGZpcmVkIHdoZW4gdGhlIHRleHRmaWVsZCdzIHZhbHVlIGNoYW5nZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBDaGFuZ2UgZXZlbnQgdGFyZ2V0aW5nIHRoZSB0ZXh0IGZpZWxkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3VmFsdWUgVGhlIG5ldyB2YWx1ZSBvZiB0aGUgdGV4dCBmaWVsZC5cbiAgICovXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIE51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlbiBtdWx0aUxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93czogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlblxuICAgKiBtdWx0aUxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93c01heDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIFRleHRGaWVsZCdzIHRleHRhcmVhIGVsZW1lbnQuXG4gICAqIFRoZSBUZXh0RmllbGQgdXNlIGVpdGhlciBhIHRleHRhcmVhIG9yIGFuIGlucHV0LFxuICAgKiB0aGlzIHByb3BlcnR5IGhhcyBlZmZlY3RzIG9ubHkgd2hlbiBtdWx0aUxpbmUgaXMgdHJ1ZS5cbiAgICovXG4gIHRleHRhcmVhU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSB0eXBlIG9mIGlucHV0IHRvIGRpc3BsYXlcbiAgICogc3VjaCBhcyBcInBhc3N3b3JkXCIgb3IgXCJ0ZXh0XCIuXG4gICAqL1xuICB0eXBlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZVxuICAgKiBUZXh0RmllbGQncyB1bmRlcmxpbmUgZWxlbWVudCB3aGVuIGRpc2FibGVkLlxuICAgKi9cbiAgdW5kZXJsaW5lRGlzYWJsZWRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgVGV4dEZpZWxkJ3NcbiAgICogdW5kZXJsaW5lIGVsZW1lbnQgd2hlbiBmb2N1c3NlZC5cbiAgICovXG4gIHVuZGVybGluZUZvY3VzU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogSWYgdHJ1ZSwgc2hvd3MgdGhlIHVuZGVybGluZSBmb3IgdGhlIHRleHQgZmllbGQuXG4gICAqL1xuICB1bmRlcmxpbmVTaG93OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgVGV4dEZpZWxkJ3MgdW5kZXJsaW5lIGVsZW1lbnQuXG4gICAqL1xuICB1bmRlcmxpbmVTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIHRleHQgZmllbGQuXG4gICAqL1xuICB2YWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnlcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRleHRGaWVsZDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL1RleHRGaWVsZC5qc1xuLy8gbW9kdWxlIGlkID0gOTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMpIHtcbiAgdmFyIGhpbnRDb2xvciA9IHByb3BzLm11aVRoZW1lLnRleHRGaWVsZC5oaW50Q29sb3IsXG4gICAgICBzaG93ID0gcHJvcHMuc2hvdztcblxuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBvcGFjaXR5OiBzaG93ID8gMSA6IDAsXG4gICAgICBjb2xvcjogaGludENvbG9yLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIGJvdHRvbTogMTJcbiAgICB9XG4gIH07XG59XG5cbnZhciBUZXh0RmllbGRIaW50ID0gZnVuY3Rpb24gVGV4dEZpZWxkSGludChwcm9wcykge1xuICB2YXIgcHJlcGFyZVN0eWxlcyA9IHByb3BzLm11aVRoZW1lLnByZXBhcmVTdHlsZXMsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgdGV4dCA9IHByb3BzLnRleHQ7XG5cblxuICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHByb3BzKTtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSkgfSxcbiAgICB0ZXh0XG4gICk7XG59O1xuXG5UZXh0RmllbGRIaW50LnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogVGhlIG1hdGVyaWFsLXVpIHRoZW1lIGFwcGxpZWQgdG8gdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIGhpbnQgdGV4dCBzaG91bGQgYmUgdmlzaWJsZS5cbiAgICovXG4gIHNob3c6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgaGludCB0ZXh0IGRpc3BsYXllZC5cbiAgICovXG4gIHRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZVxufSA6IHt9O1xuXG5UZXh0RmllbGRIaW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogdHJ1ZVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dEZpZWxkSGludDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL1RleHRGaWVsZEhpbnQuanNcbi8vIG1vZHVsZSBpZCA9IDkyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzKSB7XG4gIHZhciBkZWZhdWx0U3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxpbmVIZWlnaHQ6ICcyMnB4JyxcbiAgICB0b3A6IDM4LFxuICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgekluZGV4OiAxLCAvLyBOZWVkZWQgdG8gZGlzcGxheSBsYWJlbCBhYm92ZSBDaHJvbWUncyBhdXRvY29tcGxldGUgZmllbGQgYmFja2dyb3VuZFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpIHRyYW5zbGF0ZSgwLCAwKScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCB0b3AnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZSdcbiAgfTtcblxuICB2YXIgc2hyaW5rU3R5bGVzID0gcHJvcHMuc2hyaW5rID8gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjc1KSB0cmFuc2xhdGUoMCwgLTI4cHgpJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgfSwgcHJvcHMuc2hyaW5rU3R5bGUpIDogbnVsbDtcblxuICByZXR1cm4ge1xuICAgIHJvb3Q6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShkZWZhdWx0U3R5bGVzLCBwcm9wcy5zdHlsZSwgc2hyaW5rU3R5bGVzKVxuICB9O1xufVxuXG52YXIgVGV4dEZpZWxkTGFiZWwgPSBmdW5jdGlvbiBUZXh0RmllbGRMYWJlbChwcm9wcykge1xuICB2YXIgbXVpVGhlbWUgPSBwcm9wcy5tdWlUaGVtZSxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBodG1sRm9yID0gcHJvcHMuaHRtbEZvcixcbiAgICAgIG9uVG91Y2hUYXAgPSBwcm9wcy5vblRvdWNoVGFwO1xuICB2YXIgcHJlcGFyZVN0eWxlcyA9IG11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyhwcm9wcyk7XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdsYWJlbCcsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcyhzdHlsZXMucm9vdCksXG4gICAgICBodG1sRm9yOiBodG1sRm9yLFxuICAgICAgb25Ub3VjaFRhcDogb25Ub3VjaFRhcFxuICAgIH0sXG4gICAgY2hpbGRyZW5cbiAgKTtcbn07XG5cblRleHRGaWVsZExhYmVsLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIFRoZSBsYWJlbCBjb250ZW50cy5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgY3NzIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgbGFiZWwgaWYgc2V0IHRvIHRydWUuXG4gICAqL1xuICBkaXNhYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSB0YXJnZXQgZWxlbWVudCB0aGF0IHRoaXMgbGFiZWwgc2hvdWxkIHJlZmVyIHRvLlxuICAgKi9cbiAgaHRtbEZvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFRoZSBtYXRlcmlhbC11aSB0aGVtZSBhcHBsaWVkIHRvIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmb3Igd2hlbiB0aGUgbGFiZWwgaXMgc2VsZWN0ZWQgdmlhIGEgdG91Y2ggdGFwLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVG91Y2hUYXAgZXZlbnQgdGFyZ2V0aW5nIHRoZSB0ZXh0IGZpZWxkIGxhYmVsLlxuICAgKi9cbiAgb25Ub3VjaFRhcDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgZmxvYXRpbmcgbGFiZWwgc2hvdWxkIHNocmluay5cbiAgICovXG4gIHNocmluazogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudCB3aGVuIHNocnVuay5cbiAgICovXG4gIHNocmlua1N0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcblxuVGV4dEZpZWxkTGFiZWwuZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIHNocmluazogZmFsc2Vcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRleHRGaWVsZExhYmVsO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkTGFiZWwuanNcbi8vIG1vZHVsZSBpZCA9IDkyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIHBhcmVudCBgVGV4dEZpZWxkYCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgdW5kZXJsaW5lIHdoZW4gcGFyZW50IGBUZXh0RmllbGRgIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBwYXJlbnQgYFRleHRGaWVsZGAgaGFzIGFuIGVycm9yLlxuICAgKi9cbiAgZXJyb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSB1bmRlcmxpbmUgd2hlbiBwYXJlbnQgYFRleHRGaWVsZGAgaGFzIGFuIGVycm9yLlxuICAgKi9cbiAgZXJyb3JTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBwYXJlbnQgYFRleHRGaWVsZGAgaXMgZm9jdXNlZC5cbiAgICovXG4gIGZvY3VzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgdW5kZXJsaW5lIHdoZW4gcGFyZW50IGBUZXh0RmllbGRgIGlzIGZvY3VzZWQuXG4gICAqL1xuICBmb2N1c1N0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogVGhlIG1hdGVyaWFsLXVpIHRoZW1lIGFwcGxpZWQgdG8gdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZGlzYWJsZWRTdHlsZToge30sXG4gIGVycm9yOiBmYWxzZSxcbiAgZXJyb3JTdHlsZToge30sXG4gIGZvY3VzOiBmYWxzZSxcbiAgZm9jdXNTdHlsZToge30sXG4gIHN0eWxlOiB7fVxufTtcblxudmFyIFRleHRGaWVsZFVuZGVybGluZSA9IGZ1bmN0aW9uIFRleHRGaWVsZFVuZGVybGluZShwcm9wcykge1xuICB2YXIgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkU3R5bGUgPSBwcm9wcy5kaXNhYmxlZFN0eWxlLFxuICAgICAgZXJyb3IgPSBwcm9wcy5lcnJvcixcbiAgICAgIGVycm9yU3R5bGUgPSBwcm9wcy5lcnJvclN0eWxlLFxuICAgICAgZm9jdXMgPSBwcm9wcy5mb2N1cyxcbiAgICAgIGZvY3VzU3R5bGUgPSBwcm9wcy5mb2N1c1N0eWxlLFxuICAgICAgbXVpVGhlbWUgPSBwcm9wcy5tdWlUaGVtZSxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGU7XG4gIHZhciBlcnJvclN0eWxlQ29sb3IgPSBlcnJvclN0eWxlLmNvbG9yO1xuICB2YXIgcHJlcGFyZVN0eWxlcyA9IG11aVRoZW1lLnByZXBhcmVTdHlsZXMsXG4gICAgICBfbXVpVGhlbWUkdGV4dEZpZWxkID0gbXVpVGhlbWUudGV4dEZpZWxkLFxuICAgICAgYm9yZGVyQ29sb3IgPSBfbXVpVGhlbWUkdGV4dEZpZWxkLmJvcmRlckNvbG9yLFxuICAgICAgZGlzYWJsZWRUZXh0Q29sb3IgPSBfbXVpVGhlbWUkdGV4dEZpZWxkLmRpc2FibGVkVGV4dENvbG9yLFxuICAgICAgZXJyb3JDb2xvciA9IF9tdWlUaGVtZSR0ZXh0RmllbGQuZXJyb3JDb2xvcixcbiAgICAgIGZvY3VzQ29sb3IgPSBfbXVpVGhlbWUkdGV4dEZpZWxkLmZvY3VzQ29sb3I7XG5cblxuICB2YXIgc3R5bGVzID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGJvcmRlclRvcDogJ25vbmUnLFxuICAgICAgYm9yZGVyTGVmdDogJ25vbmUnLFxuICAgICAgYm9yZGVyUmlnaHQ6ICdub25lJyxcbiAgICAgIGJvcmRlckJvdHRvbTogJ3NvbGlkIDFweCcsXG4gICAgICBib3JkZXJDb2xvcjogYm9yZGVyQ29sb3IsXG4gICAgICBib3R0b206IDgsXG4gICAgICBib3hTaXppbmc6ICdjb250ZW50LWJveCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICBib3JkZXJCb3R0b206ICdkb3R0ZWQgMnB4JyxcbiAgICAgIGJvcmRlckNvbG9yOiBkaXNhYmxlZFRleHRDb2xvclxuICAgIH0sXG4gICAgZm9jdXM6IHtcbiAgICAgIGJvcmRlckJvdHRvbTogJ3NvbGlkIDJweCcsXG4gICAgICBib3JkZXJDb2xvcjogZm9jdXNDb2xvcixcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgwKScsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgYm9yZGVyQ29sb3I6IGVycm9yU3R5bGVDb2xvciA/IGVycm9yU3R5bGVDb2xvciA6IGVycm9yQ29sb3IsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMSknXG4gICAgfVxuICB9O1xuXG4gIHZhciB1bmRlcmxpbmUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5yb290LCBzdHlsZSk7XG4gIHZhciBmb2N1c2VkVW5kZXJsaW5lID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCB1bmRlcmxpbmUsIHN0eWxlcy5mb2N1cywgZm9jdXNTdHlsZSk7XG5cbiAgaWYgKGRpc2FibGVkKSB1bmRlcmxpbmUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHVuZGVybGluZSwgc3R5bGVzLmRpc2FibGVkLCBkaXNhYmxlZFN0eWxlKTtcbiAgaWYgKGZvY3VzKSBmb2N1c2VkVW5kZXJsaW5lID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBmb2N1c2VkVW5kZXJsaW5lLCB7IHRyYW5zZm9ybTogJ3NjYWxlWCgxKScgfSk7XG4gIGlmIChlcnJvcikgZm9jdXNlZFVuZGVybGluZSA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgZm9jdXNlZFVuZGVybGluZSwgc3R5bGVzLmVycm9yKTtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgbnVsbCxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaHInLCB7ICdhcmlhLWhpZGRlbic6ICd0cnVlJywgc3R5bGU6IHByZXBhcmVTdHlsZXModW5kZXJsaW5lKSB9KSxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaHInLCB7ICdhcmlhLWhpZGRlbic6ICd0cnVlJywgc3R5bGU6IHByZXBhcmVTdHlsZXMoZm9jdXNlZFVuZGVybGluZSkgfSlcbiAgKTtcbn07XG5cblRleHRGaWVsZFVuZGVybGluZS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBwcm9wVHlwZXMgOiB7fTtcblRleHRGaWVsZFVuZGVybGluZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRleHRGaWVsZFVuZGVybGluZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL1RleHRGaWVsZFVuZGVybGluZS5qc1xuLy8gbW9kdWxlIGlkID0gOTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIDQiXSwic291cmNlUm9vdCI6IiJ9