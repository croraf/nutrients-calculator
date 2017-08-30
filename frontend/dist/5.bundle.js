webpackJsonp([5],{

/***/ 1205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Login = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LoginBoxContainer = __webpack_require__(1206);

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

/***/ 1206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginBoxContainer = undefined;

var _reactRedux = __webpack_require__(30);

var _LoginBoxForm = __webpack_require__(1207);

var _login = __webpack_require__(185);

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

/***/ 1207:
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

var _Paper = __webpack_require__(103);

var _Paper2 = _interopRequireDefault(_Paper);

var _RaisedButton = __webpack_require__(784);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _reduxForm = __webpack_require__(294);

var _MyTextField = __webpack_require__(1208);

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

/***/ 1208:
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

var _TextField = __webpack_require__(778);

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

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginContainer = undefined;

var _reactRedux = __webpack_require__(30);

var _Login = __webpack_require__(1205);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {};
};

var mapStateToProps = function mapStateToProps(state) {
    return {};
};

var LoginContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Login.Login);

exports.LoginContainer = LoginContainer;

/***/ }),

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _TextField = __webpack_require__(908);

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TextField2.default;

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _RaisedButton = __webpack_require__(906);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _RaisedButton2.default;

/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(16);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(15);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(11);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(12);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _transitions = __webpack_require__(24);

var _transitions2 = _interopRequireDefault(_transitions);

var _colorManipulator = __webpack_require__(104);

var _EnhancedButton = __webpack_require__(179);

var _EnhancedButton2 = _interopRequireDefault(_EnhancedButton);

var _Paper = __webpack_require__(103);

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

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(16);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(15);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(11);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(12);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

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

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(16);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(15);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(9);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(11);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(10);

var _inherits3 = _interopRequireDefault(_inherits2);

var _simpleAssign = __webpack_require__(12);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _shallowEqual = __webpack_require__(49);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _transitions = __webpack_require__(24);

var _transitions2 = _interopRequireDefault(_transitions);

var _EnhancedTextarea = __webpack_require__(907);

var _EnhancedTextarea2 = _interopRequireDefault(_EnhancedTextarea);

var _TextFieldHint = __webpack_require__(909);

var _TextFieldHint2 = _interopRequireDefault(_TextFieldHint);

var _TextFieldLabel = __webpack_require__(910);

var _TextFieldLabel2 = _interopRequireDefault(_TextFieldLabel);

var _TextFieldUnderline = __webpack_require__(911);

var _TextFieldUnderline2 = _interopRequireDefault(_TextFieldUnderline);

var _warning = __webpack_require__(18);

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

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleAssign = __webpack_require__(12);

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

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleAssign = __webpack_require__(12);

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

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleAssign = __webpack_require__(12);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL0xvZ2luL0xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvTG9naW4vTG9naW5Cb3hDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9Mb2dpbi9Mb2dpbkJveEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9Mb2dpbi9NeVRleHRGaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL0xvZ2luL0xvZ2luQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL2luZGV4LmpzPzc0NzcqKiIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbi9pbmRleC5qcz84ZTk1KioiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9SYWlzZWRCdXR0b24vUmFpc2VkQnV0dG9uLmpzPzg0ZmQqKiIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1RleHRGaWVsZC9FbmhhbmNlZFRleHRhcmVhLmpzPzZhZjIqKiIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1RleHRGaWVsZC9UZXh0RmllbGQuanM/YmE1YioqIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL1RleHRGaWVsZEhpbnQuanM/MTgyNSoqIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL1RleHRGaWVsZExhYmVsLmpzP2I4ZjEqKiIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1RleHRGaWVsZC9UZXh0RmllbGRVbmRlcmxpbmUuanM/YTM5MCoqIl0sIm5hbWVzIjpbIkxvZ2luIiwiQ29tcG9uZW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJvblN1Ym1pdCIsInZhbHVlcyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicmVqZWN0ZWQiLCJsb2dpbiIsIkxvZ2luQm94Q29udGFpbmVyIiwic3R5bGUiLCJtYXhXaWR0aCIsIndpZHRoIiwicGFkZGluZyIsInRleHRBbGlnbiIsImJvcmRlclJhZGl1cyIsIkxvZ2luQm94IiwicHJvcHMiLCJoYW5kbGVTdWJtaXQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJmbGV4RGlyZWN0aW9uIiwicG9zaXRpb24iLCJjb2xvciIsIm1hcmdpbiIsInByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsIkxvZ2luQm94Rm9ybSIsImZvcm0iLCJNeVRleHRGaWVsZCIsImZsb2F0aW5nTGFiZWxUZXh0IiwidHlwZSIsImlucHV0IiwibWV0YSIsImVycm9yIiwic3RyaW5nIiwib2JqZWN0IiwiTG9naW5Db250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFHTUEsSzs7Ozs7Ozs7Ozs7aUNBQ1E7O0FBRU4sbUJBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFESixhQURKO0FBWUg7Ozs7RUFmZSxnQkFBTUMsUzs7UUFrQmxCRCxLLEdBQUFBLEs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCUjs7QUFHQTs7QUFFQTs7QUFKQTs7QUFNQSxJQUFNRSxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsV0FBZTtBQUN0Q0Msa0JBQVUsa0JBQUNDLE1BQUQsRUFBWTtBQUNsQkYscUJBQVMsNkJBQWlCRSxNQUFqQixDQUFUO0FBQ0E7OztBQUdIO0FBTnFDLEtBQWY7QUFBQSxDQUEzQjs7QUFTQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxXQUFZO0FBQ2hDQyxrQkFBVUQsTUFBTUUsS0FBTixDQUFZRCxRQUFaLEtBQXlCO0FBREgsS0FBWjtBQUFBLENBQXhCOztBQUlBLElBQU1FLG9CQUFvQix5QkFBUUosZUFBUixFQUF5Qkosa0JBQXpCLDZCQUExQjs7UUFFUVEsaUIsR0FBQUEsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJSOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7QUFFQTtBQUNBOzs7QUFHQSxJQUFNQyxRQUFRO0FBQ1ZDLGNBQVUsT0FEQTtBQUVWQyxXQUFPLE1BRkc7QUFHVkMsYUFBUyxhQUhDO0FBSVZDLGVBQVcsUUFKRDtBQUtWQyxrQkFBYztBQUxKLENBQWQ7O0lBUU1DLFE7Ozs7Ozs7Ozs7O2lDQUNRO0FBQUEseUJBRTJCLEtBQUtDLEtBRmhDO0FBQUEsZ0JBRUNDLFlBRkQsVUFFQ0EsWUFGRDtBQUFBLGdCQUVlWCxRQUZmLFVBRWVBLFFBRmY7OztBQUlOLG1CQUVJO0FBQUE7QUFBQSxrQkFBSyxPQUFPLEVBQUNZLFNBQVMsTUFBVixFQUFrQkMsZ0JBQWdCLFFBQWxDLEVBQTRDQyxXQUFXLElBQXZELEVBQTZEQyxjQUFjLElBQTNFLEVBQVo7QUFDSTtBQUFBO0FBQUEsc0JBQU8sT0FBT1osS0FBZCxFQUFxQixRQUFRLENBQTdCO0FBQ0k7QUFBQTtBQUFBLDBCQUFNLFVBQVVRLFlBQWhCLEVBQThCLE9BQU8sRUFBQ0MsU0FBUyxNQUFWLEVBQWtCSSxlQUFlLFFBQWpDLEVBQTJDSCxnQkFBZ0IsUUFBM0QsRUFBckM7QUFDSTtBQUNJLGtDQUFLLFVBRFQ7QUFFSSwrREFGSjtBQUdJLCtDQUFrQixVQUh0QjtBQUlJLGtDQUFLO0FBSlQsMEJBREo7QUFPSTtBQUNJLGtDQUFLLFVBRFQ7QUFFSSwrREFGSjtBQUdJLCtDQUFrQiwwQkFIdEI7QUFJSSxrQ0FBSyxVQUpULEdBUEo7QUFhSTtBQUFBO0FBQUEsOEJBQUssT0FBTyxFQUFDRCxTQUFTLE1BQVYsRUFBa0JJLGVBQWUsUUFBakMsRUFBMkNDLFVBQVUsVUFBckQsRUFBWjtBQUVRakIsd0NBQ0E7QUFBQTtBQUFBLGtDQUFLLE9BQU8sRUFBQ2tCLE9BQU8sS0FBUixFQUFlRCxVQUFVLFVBQXpCLEVBQXFDWixPQUFPLE1BQTVDLEVBQVo7QUFBQTtBQUFBLDZCQUhSO0FBS0ksb0ZBQWMsTUFBSyxRQUFuQixFQUE0QixPQUFNLFFBQWxDLEVBQTJDLFNBQVMsSUFBcEQsRUFBMEQsT0FBTyxFQUFDYyxRQUFRLE1BQVQsRUFBaUJMLFdBQVcsTUFBNUIsRUFBakU7QUFMSjtBQWJKO0FBREo7QUFESixhQUZKO0FBc0NIOzs7O0VBM0NrQixnQkFBTXJCLFM7O0FBOEM3QmdCLFNBQVNXLFNBQVQsR0FBcUI7QUFDakJULGtCQUFjLG9CQUFVVSxJQUFWLENBQWVDLFVBRFo7QUFFakJ0QixjQUFVLG9CQUFVdUI7QUFGSCxDQUFyQjs7QUFPQTtBQUNBLElBQU1DLGVBQWUsMEJBQVU7QUFDM0JDLFVBQU07QUFEcUIsQ0FBVixFQUVsQmhCLFFBRmtCLENBQXJCOztBQUlBZSxhQUFhSixTQUFiLEdBQXlCO0FBQ3JCeEIsY0FBVSxvQkFBVXlCLElBQVYsQ0FBZUMsVUFESjtBQUVyQnRCLGNBQVUsb0JBQVV1QjtBQUZDLENBQXpCOztRQUtRQyxZLEdBQUFBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRlI7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFTUUsVzs7Ozs7Ozs7Ozs7aUNBRVE7QUFBQSx5QkFFeUMsS0FBS2hCLEtBRjlDO0FBQUEsZ0JBRUNpQixpQkFGRCxVQUVDQSxpQkFGRDtBQUFBLGdCQUVvQkMsSUFGcEIsVUFFb0JBLElBRnBCO0FBQUEsZ0JBRTBCQyxLQUYxQixVQUUwQkEsS0FGMUI7QUFBQSxnQkFFaUNDLElBRmpDLFVBRWlDQSxJQUZqQzs7O0FBSU4sbUJBQ0k7QUFBQTtBQUFBO0FBQ0ksZ0ZBQ1FELEtBRFI7QUFFSSx3Q0FBb0IsSUFGeEI7QUFHSSx1Q0FBbUJGLGlCQUh2QjtBQUlJLDBCQUFNQyxJQUpWO0FBS0ksa0NBQWEsS0FMakI7QUFNSSwyQkFBTyxFQUFDVCxRQUFRLE1BQVQ7QUFOWCxtQkFESjtBQVNLVSxzQkFBTUUsS0FBTixJQUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWSixhQURKO0FBZ0JIOzs7O0VBdEJxQixnQkFBTXRDLFM7O0FBeUJoQ2lDLFlBQVlOLFNBQVosR0FBd0I7QUFDcEJPLHVCQUFtQixvQkFBVUssTUFBVixDQUFpQlYsVUFEaEI7QUFFcEJNLFVBQU0sb0JBQVVJLE1BQVYsQ0FBaUJWLFVBRkg7QUFHcEJPLFdBQU8sb0JBQVVJLE1BSEc7QUFJcEJILFVBQU0sb0JBQVVHO0FBSkksQ0FBeEI7O1FBT1FQLFcsR0FBQUEsVzs7Ozs7Ozs7Ozs7Ozs7O0FDckNSOztBQUVBOztBQUVBLElBQU1oQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsV0FBZSxFQUFmO0FBQUEsQ0FBM0I7O0FBSUEsSUFBTUcsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsV0FBWSxFQUFaO0FBQUEsQ0FBeEI7O0FBSUEsSUFBTW1DLGlCQUFpQix5QkFBUXBDLGVBQVIsRUFBeUJKLGtCQUF6QixlQUF2Qjs7UUFFUXdDLGMsR0FBQUEsYzs7Ozs7Ozs7QUNkUjs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixzQzs7Ozs7Ozs7QUNiQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rix5Qzs7Ozs7Ozs7QUNiQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkRBQTZEOztBQUU3RCw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxtR0FBbUc7QUFDNUc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsK0I7Ozs7Ozs7O0FDcGVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxtQ0FBbUM7QUFDNUMscUVBQXFFLGdEQUFnRDtBQUNySDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELG1DOzs7Ozs7OztBQzFQQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHNCQUFzQixtQkFBbUI7QUFDekM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0JBQXdCLHdDQUF3QztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0JBQWtCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsOEVBQThFO0FBQ3ZGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsdUZBQXVGO0FBQ3ZGO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCw0Qjs7Ozs7Ozs7QUN0a0JBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyx3RUFBd0U7QUFDN0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGdDOzs7Ozs7OztBQy9FQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7OztBQ3BIQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUFnRDtBQUNoRCx1REFBdUQ7O0FBRXZELDBEQUEwRDtBQUMxRCw4REFBOEQscUJBQXFCLHlCQUF5QjtBQUM1Ryw4REFBOEQ7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx5REFBeUQ7QUFDbEcseUNBQXlDLGdFQUFnRTtBQUN6RztBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUMiLCJmaWxlIjoiNS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0xvZ2luQm94Q29udGFpbmVyfSBmcm9tICcuL0xvZ2luQm94Q29udGFpbmVyJztcclxuXHJcblxyXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIgKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExvZ2luQm94Q29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKnt1bmF1dGhvcml6ZWQ9PT10cnVlICYmIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICcxMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL2NhdHBsYW5ldC5vcmcvd3AtY29udGVudC91cGxvYWRzLzIwMTQvMDkvQ2F0cy1hcy1lcnJvci1tZXNzYWdlLTQwMS5qcGdcIiBhbHQ9XCJVTkFVVEhPUklaRURcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD0nNDAwJyBoZWlnaHQ9JzMwMCcvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+fSovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge0xvZ2lufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL0xvZ2luL0xvZ2luLmpzIiwiaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbi8qaW1wb3J0IHtTdWJtaXNzaW9uRXJyb3J9IGZyb20gJ3JlZHV4LWZvcm0nOyovXHJcblxyXG5pbXBvcnQge0xvZ2luQm94Rm9ybX0gZnJvbSAnLi9Mb2dpbkJveEZvcm0nO1xyXG5cclxuaW1wb3J0IHtzZW5kTG9naW5SZXF1ZXN0fSBmcm9tICdtb2R1bGVzL2xvZ2luJztcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICAgIG9uU3VibWl0OiAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2VuZExvZ2luUmVxdWVzdCh2YWx1ZXMpKTtcclxuICAgICAgICAvKnJldHVybiBuZXcgUHJvbWlzZSAoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU3VibWlzc2lvbkVycm9yKHsgdXNlcm5hbWU6ICdVc2VyIGRvZXMgbm90IGV4aXN0JywgX2Vycm9yOiAnTG9naW4gZmFpbGVkIScgfSk7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgIH1cclxufSk7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgICByZWplY3RlZDogc3RhdGUubG9naW4ucmVqZWN0ZWQgPT09IHRydWVcclxufSk7XHJcblxyXG5jb25zdCBMb2dpbkJveENvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExvZ2luQm94Rm9ybSk7XHJcblxyXG5leHBvcnQge0xvZ2luQm94Q29udGFpbmVyfTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy9Mb2dpbi9Mb2dpbkJveENvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdtYXRlcmlhbC11aS9QYXBlcic7XHJcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcclxuXHJcbmltcG9ydCB7cmVkdXhGb3JtLCBGaWVsZH0gZnJvbSAncmVkdXgtZm9ybSc7XHJcblxyXG5pbXBvcnQge015VGV4dEZpZWxkfSBmcm9tICcuL015VGV4dEZpZWxkJztcclxuXHJcbi8vcGxhbm5lZCB0byBzaG93IGZ1bm55IGltYWdlIGlmIHVuYXV0aG9yaXplZFxyXG4vL2ltcG9ydCBpbWFnZSBmcm9tICdyZXNvdXJjZXMvNDAxLnBuZyc7XHJcblxyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgICBtYXhXaWR0aDogJzQwMHB4JyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBwYWRkaW5nOiAnMyUgMiUgMiUgMiUnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGJvcmRlclJhZGl1czogJzMlJ1xyXG59O1xyXG5cclxuY2xhc3MgTG9naW5Cb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgY29uc3Qge2hhbmRsZVN1Ym1pdCwgcmVqZWN0ZWR9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgbWFyZ2luVG9wOiAnNyUnLCBtYXJnaW5Cb3R0b206ICczJSd9fT5cclxuICAgICAgICAgICAgICAgIDxQYXBlciBzdHlsZT17c3R5bGV9IHpEZXB0aD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndXNlcm5hbWUnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtNeVRleHRGaWVsZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD17TXlUZXh0RmllbGR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9XCJQYXNzd29yZCAoVVNFICdhZG1pbicpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBwb3NpdGlvbjogJ3JlbGF0aXZlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdGVkICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjb2xvcjogJ3JlZCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB3aWR0aDogJzEwMCUnfX0+SW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhaXNlZEJ1dHRvbiB0eXBlPSdzdWJtaXQnIGxhYmVsPVwiTG9nIGluXCIgcHJpbWFyeT17dHJ1ZX0gc3R5bGU9e3ttYXJnaW46ICdhdXRvJywgbWFyZ2luVG9wOiAnMzBweCd9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgey8qPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5hdXRob3JpemVkICYmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzYwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjcwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0naHR0cHM6Ly9ibG9nLmRhc2hidXJzdC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTQvMDMvNjUwODAyMzA2NV8xYjNiZjcxMGNlX28tNzI4eDU4Mi5qcGcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cclxuICAgICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkxvZ2luQm94LnByb3BUeXBlcyA9IHtcclxuICAgIGhhbmRsZVN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHJlamVjdGVkOiBQcm9wVHlwZXMuYm9vbFxyXG59O1xyXG5cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbmNvbnN0IExvZ2luQm94Rm9ybSA9IHJlZHV4Rm9ybSh7XHJcbiAgICBmb3JtOiAnbG9naW4nXHJcbn0pKExvZ2luQm94KTtcclxuXHJcbkxvZ2luQm94Rm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIHJlamVjdGVkOiBQcm9wVHlwZXMuYm9vbFxyXG59O1xyXG5cclxuZXhwb3J0IHtMb2dpbkJveEZvcm19O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL0xvZ2luL0xvZ2luQm94Rm9ybS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ21hdGVyaWFsLXVpL1RleHRGaWVsZCc7XHJcblxyXG5jbGFzcyBNeVRleHRGaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuXHJcbiAgICAgICAgY29uc3Qge2Zsb2F0aW5nTGFiZWxUZXh0LCB0eXBlLCBpbnB1dCwgbWV0YX0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBcclxuICAgICAgICAgICAgICAgICAgICB7Li4uaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdMYWJlbEZpeGVkPXt0cnVlfSBcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD17ZmxvYXRpbmdMYWJlbFRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9J29mZidcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjogJ2F1dG8nfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7aW5wdXQuZXJyb3IgJiYgXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICBJbnZhbGlkXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5NeVRleHRGaWVsZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBmbG9hdGluZ0xhYmVsVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgaW5wdXQ6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBtZXRhOiBQcm9wVHlwZXMub2JqZWN0XHJcbn07XHJcblxyXG5leHBvcnQge015VGV4dEZpZWxkfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL0xvZ2luL015VGV4dEZpZWxkLmpzIiwiaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQge0xvZ2lufSBmcm9tICcuL0xvZ2luJztcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gICAgXHJcbn0pO1xyXG5cclxuY29uc3QgTG9naW5Db250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShMb2dpbik7XHJcblxyXG5leHBvcnQge0xvZ2luQ29udGFpbmVyfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL0xvZ2luL0xvZ2luQ29udGFpbmVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX1RleHRGaWVsZCA9IHJlcXVpcmUoJy4vVGV4dEZpZWxkJyk7XG5cbnZhciBfVGV4dEZpZWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RleHRGaWVsZCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9UZXh0RmllbGQyLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL1RleHRGaWVsZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIDQgNSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9SYWlzZWRCdXR0b24gPSByZXF1aXJlKCcuL1JhaXNlZEJ1dHRvbicpO1xuXG52YXIgX1JhaXNlZEJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SYWlzZWRCdXR0b24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfUmFpc2VkQnV0dG9uMi5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9SYWlzZWRCdXR0b24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDc4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxudmFyIF9jb2xvck1hbmlwdWxhdG9yID0gcmVxdWlyZSgnLi4vdXRpbHMvY29sb3JNYW5pcHVsYXRvcicpO1xuXG52YXIgX0VuaGFuY2VkQnV0dG9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvRW5oYW5jZWRCdXR0b24nKTtcblxudmFyIF9FbmhhbmNlZEJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FbmhhbmNlZEJ1dHRvbik7XG5cbnZhciBfUGFwZXIgPSByZXF1aXJlKCcuLi9QYXBlcicpO1xuXG52YXIgX1BhcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhcGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdmFsaWRhdGVMYWJlbChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXByb3BzLmNoaWxkcmVuICYmIHByb3BzLmxhYmVsICE9PSAwICYmICFwcm9wcy5sYWJlbCAmJiAhcHJvcHMuaWNvbikge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignUmVxdWlyZWQgcHJvcCBsYWJlbCBvciBjaGlsZHJlbiBvciBpY29uIHdhcyBub3Qgc3BlY2lmaWVkIGluICcgKyBjb21wb25lbnROYW1lICsgJy4nKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0LCBzdGF0ZSkge1xuICB2YXIgX2NvbnRleHQkbXVpVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lLFxuICAgICAgYmFzZVRoZW1lID0gX2NvbnRleHQkbXVpVGhlbWUuYmFzZVRoZW1lLFxuICAgICAgYnV0dG9uID0gX2NvbnRleHQkbXVpVGhlbWUuYnV0dG9uLFxuICAgICAgcmFpc2VkQnV0dG9uID0gX2NvbnRleHQkbXVpVGhlbWUucmFpc2VkQnV0dG9uLFxuICAgICAgYm9yZGVyUmFkaXVzID0gX2NvbnRleHQkbXVpVGhlbWUuYm9yZGVyUmFkaXVzO1xuICB2YXIgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkQmFja2dyb3VuZENvbG9yID0gcHJvcHMuZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBkaXNhYmxlZExhYmVsQ29sb3IgPSBwcm9wcy5kaXNhYmxlZExhYmVsQ29sb3IsXG4gICAgICBmdWxsV2lkdGggPSBwcm9wcy5mdWxsV2lkdGgsXG4gICAgICBpY29uID0gcHJvcHMuaWNvbixcbiAgICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICBsYWJlbFBvc2l0aW9uID0gcHJvcHMubGFiZWxQb3NpdGlvbixcbiAgICAgIHByaW1hcnkgPSBwcm9wcy5wcmltYXJ5LFxuICAgICAgc2Vjb25kYXJ5ID0gcHJvcHMuc2Vjb25kYXJ5LFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZTtcblxuXG4gIHZhciBhbW91bnQgPSBwcmltYXJ5IHx8IHNlY29uZGFyeSA/IDAuNCA6IDAuMDg7XG5cbiAgdmFyIGJhY2tncm91bmRDb2xvciA9IHJhaXNlZEJ1dHRvbi5jb2xvcjtcbiAgdmFyIGxhYmVsQ29sb3IgPSByYWlzZWRCdXR0b24udGV4dENvbG9yO1xuXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmRDb2xvciA9IGRpc2FibGVkQmFja2dyb3VuZENvbG9yIHx8IHJhaXNlZEJ1dHRvbi5kaXNhYmxlZENvbG9yO1xuICAgIGxhYmVsQ29sb3IgPSBkaXNhYmxlZExhYmVsQ29sb3IgfHwgcmFpc2VkQnV0dG9uLmRpc2FibGVkVGV4dENvbG9yO1xuICB9IGVsc2UgaWYgKHByaW1hcnkpIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3IgPSByYWlzZWRCdXR0b24ucHJpbWFyeUNvbG9yO1xuICAgIGxhYmVsQ29sb3IgPSByYWlzZWRCdXR0b24ucHJpbWFyeVRleHRDb2xvcjtcbiAgfSBlbHNlIGlmIChzZWNvbmRhcnkpIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3IgPSByYWlzZWRCdXR0b24uc2Vjb25kYXJ5Q29sb3I7XG4gICAgbGFiZWxDb2xvciA9IHJhaXNlZEJ1dHRvbi5zZWNvbmRhcnlUZXh0Q29sb3I7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHByb3BzLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgYmFja2dyb3VuZENvbG9yID0gcHJvcHMuYmFja2dyb3VuZENvbG9yO1xuICAgIH1cbiAgICBpZiAocHJvcHMubGFiZWxDb2xvcikge1xuICAgICAgbGFiZWxDb2xvciA9IHByb3BzLmxhYmVsQ29sb3I7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1dHRvbkhlaWdodCA9IHN0eWxlICYmIHN0eWxlLmhlaWdodCB8fCBidXR0b24uaGVpZ2h0O1xuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpLFxuICAgICAgbWluV2lkdGg6IGZ1bGxXaWR0aCA/ICcxMDAlJyA6IGJ1dHRvbi5taW5XaWR0aFxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBoZWlnaHQ6IGJ1dHRvbkhlaWdodCxcbiAgICAgIGxpbmVIZWlnaHQ6IGJ1dHRvbkhlaWdodCArICdweCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgICAgLy8gVGhhdCdzIHRoZSBkZWZhdWx0IHZhbHVlIGZvciBhIGJ1dHRvbiBidXQgbm90IGEgbGlua1xuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGZvbnRTaXplOiByYWlzZWRCdXR0b24uZm9udFNpemUsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwLFxuICAgICAgdGV4dFRyYW5zZm9ybTogcmFpc2VkQnV0dG9uLnRleHRUcmFuc2Zvcm0gfHwgYnV0dG9uLnRleHRUcmFuc2Zvcm0gfHwgJ3VwcGVyY2FzZScsXG4gICAgICBmb250V2VpZ2h0OiByYWlzZWRCdXR0b24uZm9udFdlaWdodCxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIHBhZGRpbmdMZWZ0OiBpY29uICYmIGxhYmVsUG9zaXRpb24gIT09ICdiZWZvcmUnID8gOCA6IGJhc2VUaGVtZS5zcGFjaW5nLmRlc2t0b3BHdXR0ZXJMZXNzLFxuICAgICAgcGFkZGluZ1JpZ2h0OiBpY29uICYmIGxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnID8gOCA6IGJhc2VUaGVtZS5zcGFjaW5nLmRlc2t0b3BHdXR0ZXJMZXNzLFxuICAgICAgY29sb3I6IGxhYmVsQ29sb3JcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgbWFyZ2luTGVmdDogbGFiZWwgJiYgbGFiZWxQb3NpdGlvbiAhPT0gJ2JlZm9yZScgPyAxMiA6IDAsXG4gICAgICBtYXJnaW5SaWdodDogbGFiZWwgJiYgbGFiZWxQb3NpdGlvbiA9PT0gJ2JlZm9yZScgPyAxMiA6IDBcbiAgICB9LFxuICAgIG92ZXJsYXk6IHtcbiAgICAgIGhlaWdodDogYnV0dG9uSGVpZ2h0LFxuICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IChzdGF0ZS5rZXlib2FyZEZvY3VzZWQgfHwgc3RhdGUuaG92ZXJlZCkgJiYgIWRpc2FibGVkICYmICgwLCBfY29sb3JNYW5pcHVsYXRvci5mYWRlKShsYWJlbENvbG9yLCBhbW91bnQpLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIHRvcDogMFxuICAgIH0sXG4gICAgcmlwcGxlOiB7XG4gICAgICBjb2xvcjogbGFiZWxDb2xvcixcbiAgICAgIG9wYWNpdHk6ICEocHJpbWFyeSB8fCBzZWNvbmRhcnkpID8gMC4xIDogMC4xNlxuICAgIH1cbiAgfTtcbn1cblxudmFyIFJhaXNlZEJ1dHRvbiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFJhaXNlZEJ1dHRvbiwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmFpc2VkQnV0dG9uKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFJhaXNlZEJ1dHRvbik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBSYWlzZWRCdXR0b24uX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFJhaXNlZEJ1dHRvbikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgaG92ZXJlZDogZmFsc2UsXG4gICAgICBrZXlib2FyZEZvY3VzZWQ6IGZhbHNlLFxuICAgICAgdG91Y2hlZDogZmFsc2UsXG4gICAgICBpbml0aWFsWkRlcHRoOiAwLFxuICAgICAgekRlcHRoOiAwXG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBvbmx5IGxpc3RlbiB0byBsZWZ0IGNsaWNrc1xuICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgekRlcHRoOiBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoICsgMVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vdXNlRG93bikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VVcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB6RGVwdGg6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGhcbiAgICAgIH0pO1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VVcCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMuc3RhdGUua2V5Ym9hcmRGb2N1c2VkKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB6RGVwdGg6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGgsXG4gICAgICAgICAgaG92ZXJlZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZUxlYXZlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VMZWF2ZShldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VFbnRlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5rZXlib2FyZEZvY3VzZWQgJiYgIV90aGlzLnN0YXRlLnRvdWNoZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGhvdmVyZWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZUVudGVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VFbnRlcihldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0b3VjaGVkOiB0cnVlLFxuICAgICAgICB6RGVwdGg6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGggKyAxXG4gICAgICB9KTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uVG91Y2hTdGFydCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vblRvdWNoU3RhcnQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZVRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRvdWNoZWQ6IHRydWUsXG4gICAgICAgIHpEZXB0aDogX3RoaXMuc3RhdGUuaW5pdGlhbFpEZXB0aFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblRvdWNoRW5kKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uVG91Y2hFbmQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZUtleWJvYXJkRm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQsIGtleWJvYXJkRm9jdXNlZCkge1xuICAgICAgdmFyIHpEZXB0aCA9IGtleWJvYXJkRm9jdXNlZCAmJiAhX3RoaXMucHJvcHMuZGlzYWJsZWQgPyBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoICsgMSA6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGg7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgekRlcHRoOiB6RGVwdGgsXG4gICAgICAgIGtleWJvYXJkRm9jdXNlZDoga2V5Ym9hcmRGb2N1c2VkXG4gICAgICB9KTtcbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoUmFpc2VkQnV0dG9uLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHZhciB6RGVwdGggPSB0aGlzLnByb3BzLmRpc2FibGVkID8gMCA6IDE7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgekRlcHRoOiB6RGVwdGgsXG4gICAgICAgIGluaXRpYWxaRGVwdGg6IHpEZXB0aFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgekRlcHRoID0gbmV4dFByb3BzLmRpc2FibGVkID8gMCA6IDE7XG4gICAgICB2YXIgbmV4dFN0YXRlID0ge1xuICAgICAgICB6RGVwdGg6IHpEZXB0aCxcbiAgICAgICAgaW5pdGlhbFpEZXB0aDogekRlcHRoXG4gICAgICB9O1xuXG4gICAgICBpZiAobmV4dFByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIG5leHRTdGF0ZS5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBfcHJvcHMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgIGJ1dHRvblN0eWxlID0gX3Byb3BzLmJ1dHRvblN0eWxlLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3IgPSBfcHJvcHMuZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgZGlzYWJsZWRMYWJlbENvbG9yID0gX3Byb3BzLmRpc2FibGVkTGFiZWxDb2xvcixcbiAgICAgICAgICBmdWxsV2lkdGggPSBfcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgICAgIGljb24gPSBfcHJvcHMuaWNvbixcbiAgICAgICAgICBsYWJlbCA9IF9wcm9wcy5sYWJlbCxcbiAgICAgICAgICBsYWJlbENvbG9yID0gX3Byb3BzLmxhYmVsQ29sb3IsXG4gICAgICAgICAgbGFiZWxQb3NpdGlvbiA9IF9wcm9wcy5sYWJlbFBvc2l0aW9uLFxuICAgICAgICAgIGxhYmVsU3R5bGUgPSBfcHJvcHMubGFiZWxTdHlsZSxcbiAgICAgICAgICBvdmVybGF5U3R5bGUgPSBfcHJvcHMub3ZlcmxheVN0eWxlLFxuICAgICAgICAgIHByaW1hcnkgPSBfcHJvcHMucHJpbWFyeSxcbiAgICAgICAgICByaXBwbGVTdHlsZSA9IF9wcm9wcy5yaXBwbGVTdHlsZSxcbiAgICAgICAgICBzZWNvbmRhcnkgPSBfcHJvcHMuc2Vjb25kYXJ5LFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2JhY2tncm91bmRDb2xvcicsICdidXR0b25TdHlsZScsICdjaGlsZHJlbicsICdjbGFzc05hbWUnLCAnZGlzYWJsZWQnLCAnZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3InLCAnZGlzYWJsZWRMYWJlbENvbG9yJywgJ2Z1bGxXaWR0aCcsICdpY29uJywgJ2xhYmVsJywgJ2xhYmVsQ29sb3InLCAnbGFiZWxQb3NpdGlvbicsICdsYWJlbFN0eWxlJywgJ292ZXJsYXlTdHlsZScsICdwcmltYXJ5JywgJ3JpcHBsZVN0eWxlJywgJ3NlY29uZGFyeScsICdzdHlsZSddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0LCB0aGlzLnN0YXRlKTtcbiAgICAgIHZhciBtZXJnZWRSaXBwbGVTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5yaXBwbGUsIHJpcHBsZVN0eWxlKTtcblxuICAgICAgdmFyIGJ1dHRvbkV2ZW50SGFuZGxlcnMgPSBkaXNhYmxlZCA/IHt9IDoge1xuICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVNb3VzZURvd24sXG4gICAgICAgIG9uTW91c2VVcDogdGhpcy5oYW5kbGVNb3VzZVVwLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMuaGFuZGxlTW91c2VMZWF2ZSxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhhbmRsZU1vdXNlRW50ZXIsXG4gICAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuICAgICAgICBvblRvdWNoRW5kOiB0aGlzLmhhbmRsZVRvdWNoRW5kLFxuICAgICAgICBvbktleWJvYXJkRm9jdXM6IHRoaXMuaGFuZGxlS2V5Ym9hcmRGb2N1c1xuICAgICAgfTtcblxuICAgICAgdmFyIGxhYmVsRWxlbWVudCA9IGxhYmVsICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5sYWJlbCwgbGFiZWxTdHlsZSkpLCBrZXk6ICdsYWJlbEVsZW1lbnQnIH0sXG4gICAgICAgIGxhYmVsXG4gICAgICApO1xuXG4gICAgICB2YXIgaWNvbkNsb25lZCA9IGljb24gJiYgKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGljb24sIHtcbiAgICAgICAgY29sb3I6IGljb24ucHJvcHMuY29sb3IgfHwgc3R5bGVzLmxhYmVsLmNvbG9yLFxuICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5pY29uLCBpY29uLnByb3BzLnN0eWxlKSxcbiAgICAgICAga2V5OiAnaWNvbkNsb25lZCdcbiAgICAgIH0pO1xuXG4gICAgICAvLyBQbGFjZSBsYWJlbCBiZWZvcmUgb3IgYWZ0ZXIgY2hpbGRyZW4uXG4gICAgICB2YXIgZW5oYW5jZWRCdXR0b25DaGlsZHJlbiA9IGxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnID8gW2xhYmVsRWxlbWVudCwgaWNvbkNsb25lZCwgY2hpbGRyZW5dIDogW2NoaWxkcmVuLCBpY29uQ2xvbmVkLCBsYWJlbEVsZW1lbnRdO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9QYXBlcjIuZGVmYXVsdCxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSxcbiAgICAgICAgICB6RGVwdGg6IHRoaXMuc3RhdGUuekRlcHRoXG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9FbmhhbmNlZEJ1dHRvbjIuZGVmYXVsdCxcbiAgICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwgYnV0dG9uRXZlbnRIYW5kbGVycywge1xuICAgICAgICAgICAgcmVmOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmJ1dHRvbiwgYnV0dG9uU3R5bGUpLFxuICAgICAgICAgICAgZm9jdXNSaXBwbGVDb2xvcjogbWVyZ2VkUmlwcGxlU3R5bGVzLmNvbG9yLFxuICAgICAgICAgICAgdG91Y2hSaXBwbGVDb2xvcjogbWVyZ2VkUmlwcGxlU3R5bGVzLmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNSaXBwbGVPcGFjaXR5OiBtZXJnZWRSaXBwbGVTdHlsZXMub3BhY2l0eSxcbiAgICAgICAgICAgIHRvdWNoUmlwcGxlT3BhY2l0eTogbWVyZ2VkUmlwcGxlU3R5bGVzLm9wYWNpdHlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6ICdvdmVybGF5JyxcbiAgICAgICAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5vdmVybGF5LCBvdmVybGF5U3R5bGUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuaGFuY2VkQnV0dG9uQ2hpbGRyZW5cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBSYWlzZWRCdXR0b247XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5SYWlzZWRCdXR0b24ubXVpTmFtZSA9ICdSYWlzZWRCdXR0b24nO1xuUmFpc2VkQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBsYWJlbFBvc2l0aW9uOiAnYWZ0ZXInLFxuICBmdWxsV2lkdGg6IGZhbHNlLFxuICBwcmltYXJ5OiBmYWxzZSxcbiAgc2Vjb25kYXJ5OiBmYWxzZVxufTtcblJhaXNlZEJ1dHRvbi5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuUmFpc2VkQnV0dG9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSBidXR0b24sXG4gICAqIGJ1dCBub3QgdGhlIGRlZmF1bHQgZGlzYWJsZWQgYmFja2dyb3VuZCBjb2xvclxuICAgKiAodXNlIGBkaXNhYmxlZEJhY2tncm91bmRDb2xvcmAgZm9yIHRoaXMpLlxuICAgKi9cbiAgYmFja2dyb3VuZENvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBidXR0b24gZWxlbWVudC5cbiAgICovXG4gIGJ1dHRvblN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBidXR0b24uXG4gICAqIElmIGEgbGFiZWwgaXMgcHJvdmlkZWQgdmlhIHRoZSBgbGFiZWxgIHByb3AsIHRoZSB0ZXh0IHdpdGhpbiB0aGUgbGFiZWxcbiAgICogd2lsbCBiZSBkaXNwbGF5ZWQgaW4gYWRkaXRpb24gdG8gdGhlIGNvbnRlbnQgcHJvdmlkZWQgaGVyZS5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgQ1NTIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgICogVGhlIGVsZW1lbnQgdG8gdXNlIGFzIHRoZSBjb250YWluZXIgZm9yIHRoZSBSYWlzZWRCdXR0b24uIEVpdGhlciBhIHN0cmluZyB0b1xuICAgICogdXNlIGEgRE9NIGVsZW1lbnQgb3IgYSBSZWFjdEVsZW1lbnQuIFRoaXMgaXMgdXNlZnVsIGZvciB3cmFwcGluZyB0aGVcbiAgICAqIFJhaXNlZEJ1dHRvbiBpbiBhIGN1c3RvbSBMaW5rIGNvbXBvbmVudC4gSWYgYSBSZWFjdEVsZW1lbnQgaXMgZ2l2ZW4sIGVuc3VyZVxuICAgICogdGhhdCBpdCBwYXNzZXMgYWxsIG9mIGl0cyBnaXZlbiBwcm9wcyB0aHJvdWdoIHRvIHRoZSB1bmRlcmx5aW5nIERPTVxuICAgICogZWxlbWVudCBhbmQgcmVuZGVycyBpdHMgY2hpbGRyZW4gcHJvcCBmb3IgcHJvcGVyIGludGVncmF0aW9uLlxuICAgICovXG4gIGNvbnRhaW5lckVsZW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50XSksXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgZWxlbWVudCdzIHJpcHBsZSBlZmZlY3Qgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVUb3VjaFJpcHBsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSBidXR0b25cbiAgICogd2hlbiBpdCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkQmFja2dyb3VuZENvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgYnV0dG9uJ3MgbGFiZWwgd2hlbiB0aGUgYnV0dG9uIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWRMYWJlbENvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBidXR0b24gd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFRoZSBVUkwgdG8gbGluayB0byB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cbiAgICovXG4gIGhyZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogQW4gaWNvbiB0byBiZSBkaXNwbGF5ZWQgd2l0aGluIHRoZSBidXR0b24uXG4gICAqL1xuICBpY29uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgdG8gYmUgZGlzcGxheWVkIHdpdGhpbiB0aGUgYnV0dG9uLlxuICAgKiBJZiBjb250ZW50IGlzIHByb3ZpZGVkIHZpYSB0aGUgYGNoaWxkcmVuYCBwcm9wLCB0aGF0IGNvbnRlbnQgd2lsbCBiZVxuICAgKiBkaXNwbGF5ZWQgaW4gYWRkaXRpb24gdG8gdGhlIGxhYmVsIHByb3ZpZGVkIGhlcmUuXG4gICAqL1xuICBsYWJlbDogdmFsaWRhdGVMYWJlbCxcbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgYnV0dG9uJ3MgbGFiZWwuXG4gICAqL1xuICBsYWJlbENvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgYnV0dG9uJ3MgbGFiZWwgcmVsYXRpdmUgdG8gdGhlIGJ1dHRvbidzIGBjaGlsZHJlbmAuXG4gICAqL1xuICBsYWJlbFBvc2l0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsnYmVmb3JlJywgJ2FmdGVyJ10pLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGJ1dHRvbidzIGxhYmVsIGVsZW1lbnQuXG4gICAqL1xuICBsYWJlbFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZURvd246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZUVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VMZWF2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlVXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Ub3VjaEVuZDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvblRvdWNoU3RhcnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gdGhlIGJ1dHRvbiBpcyB0b3VjaC10YXBwZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUb3VjaFRhcCBldmVudCB0YXJnZXRpbmcgdGhlIGJ1dHRvbi5cbiAgICovXG4gIG9uVG91Y2hUYXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUgc3R5bGUgb2YgdGhlIGJ1dHRvbiBvdmVybGF5LlxuICAgKi9cbiAgb3ZlcmxheVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBidXR0b24gd2lsbCB1c2UgdGhlIHRoZW1lJ3MgcHJpbWFyeSBjb2xvci5cbiAgICovXG4gIHByaW1hcnk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUgc3R5bGUgb2YgdGhlIHJpcHBsZSBlbGVtZW50LlxuICAgKi9cbiAgcmlwcGxlU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIHVzZSB0aGUgdGhlbWUncyBzZWNvbmRhcnkgY29sb3IuXG4gICAqIElmIGJvdGggYHNlY29uZGFyeWAgYW5kIGBwcmltYXJ5YCBhcmUgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIHVzZVxuICAgKiB0aGUgdGhlbWUncyBwcmltYXJ5IGNvbG9yLlxuICAgKi9cbiAgc2Vjb25kYXJ5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBSYWlzZWRCdXR0b247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbi9SYWlzZWRCdXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDkwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdEV2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCdyZWFjdC1ldmVudC1saXN0ZW5lcicpO1xuXG52YXIgX3JlYWN0RXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEV2ZW50TGlzdGVuZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcm93c0hlaWdodCA9IDI0O1xuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQsIHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScgfSxcbiAgICB0ZXh0YXJlYToge1xuICAgICAgaGVpZ2h0OiBzdGF0ZS5oZWlnaHQsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgcmVzaXplOiAnbm9uZScsXG4gICAgICBmb250OiAnaW5oZXJpdCcsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgY3Vyc29yOiAnaW5oZXJpdCdcbiAgICB9LFxuICAgIHNoYWRvdzoge1xuICAgICAgcmVzaXplOiAnbm9uZScsXG4gICAgICAvLyBPdmVyZmxvdyBhbHNvIG5lZWRlZCB0byBoZXJlIHRvIHJlbW92ZSB0aGUgZXh0cmEgcm93XG4gICAgICAvLyBhZGRlZCB0byB0ZXh0YXJlYXMgaW4gRmlyZWZveC5cbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIC8vIFZpc2liaWxpdHkgbmVlZGVkIHRvIGhpZGUgdGhlIGV4dHJhIHRleHQgYXJlYSBvbiBpcGFkc1xuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGhlaWdodDogJ2F1dG8nXG4gICAgfVxuICB9O1xufVxuXG52YXIgRW5oYW5jZWRUZXh0YXJlYSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKEVuaGFuY2VkVGV4dGFyZWEsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEVuaGFuY2VkVGV4dGFyZWEoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgRW5oYW5jZWRUZXh0YXJlYSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBFbmhhbmNlZFRleHRhcmVhLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShFbmhhbmNlZFRleHRhcmVhKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBoZWlnaHQ6IG51bGxcbiAgICB9LCBfdGhpcy5oYW5kbGVSZXNpemUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnN5bmNIZWlnaHRXaXRoU2hhZG93KHVuZGVmaW5lZCwgZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICBfdGhpcy5zeW5jSGVpZ2h0V2l0aFNoYWRvdyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlTGluaycpKSB7XG4gICAgICAgIF90aGlzLnByb3BzLnZhbHVlTGluay5yZXF1ZXN0Q2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKEVuaGFuY2VkVGV4dGFyZWEsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5yb3dzICogcm93c0hlaWdodFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc3luY0hlaWdodFdpdGhTaGFkb3coKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUgfHwgbmV4dFByb3BzLnJvd3NNYXggIT09IHRoaXMucHJvcHMucm93c01heCkge1xuICAgICAgICB0aGlzLnN5bmNIZWlnaHRXaXRoU2hhZG93KG5leHRQcm9wcy52YWx1ZSwgbnVsbCwgbmV4dFByb3BzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRJbnB1dE5vZGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnB1dE5vZGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZzLmlucHV0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgIHRoaXMuZ2V0SW5wdXROb2RlKCkudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc3luY0hlaWdodFdpdGhTaGFkb3codmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N5bmNIZWlnaHRXaXRoU2hhZG93JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3luY0hlaWdodFdpdGhTaGFkb3cobmV3VmFsdWUsIGV2ZW50LCBwcm9wcykge1xuICAgICAgdmFyIHNoYWRvdyA9IHRoaXMucmVmcy5zaGFkb3c7XG4gICAgICB2YXIgZGlzcGxheVRleHQgPSB0aGlzLnByb3BzLmhpbnRUZXh0ICYmIChuZXdWYWx1ZSA9PT0gJycgfHwgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBuZXdWYWx1ZSA9PT0gbnVsbCkgPyB0aGlzLnByb3BzLmhpbnRUZXh0IDogbmV3VmFsdWU7XG5cbiAgICAgIGlmIChkaXNwbGF5VGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNoYWRvdy52YWx1ZSA9IGRpc3BsYXlUZXh0O1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3SGVpZ2h0ID0gc2hhZG93LnNjcm9sbEhlaWdodDtcblxuICAgICAgLy8gR3VhcmRpbmcgZm9yIGpzZG9tLCB3aGVyZSBzY3JvbGxIZWlnaHQgaXNuJ3QgcHJlc2VudC5cbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdG1wdmFyL2pzZG9tL2lzc3Vlcy8xMDEzXG4gICAgICBpZiAobmV3SGVpZ2h0ID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgICAgcHJvcHMgPSBwcm9wcyB8fCB0aGlzLnByb3BzO1xuXG4gICAgICBpZiAocHJvcHMucm93c01heCA+PSBwcm9wcy5yb3dzKSB7XG4gICAgICAgIG5ld0hlaWdodCA9IE1hdGgubWluKHByb3BzLnJvd3NNYXggKiByb3dzSGVpZ2h0LCBuZXdIZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICBuZXdIZWlnaHQgPSBNYXRoLm1heChuZXdIZWlnaHQsIHJvd3NIZWlnaHQpO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5oZWlnaHQgIT09IG5ld0hlaWdodCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBoZWlnaHQ6IG5ld0hlaWdodFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocHJvcHMub25IZWlnaHRDaGFuZ2UpIHtcbiAgICAgICAgICBwcm9wcy5vbkhlaWdodENoYW5nZShldmVudCwgbmV3SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3Byb3BzLm9uQ2hhbmdlLFxuICAgICAgICAgIG9uSGVpZ2h0Q2hhbmdlID0gX3Byb3BzLm9uSGVpZ2h0Q2hhbmdlLFxuICAgICAgICAgIHJvd3MgPSBfcHJvcHMucm93cyxcbiAgICAgICAgICByb3dzTWF4ID0gX3Byb3BzLnJvd3NNYXgsXG4gICAgICAgICAgc2hhZG93U3R5bGUgPSBfcHJvcHMuc2hhZG93U3R5bGUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgaGludFRleHQgPSBfcHJvcHMuaGludFRleHQsXG4gICAgICAgICAgdGV4dGFyZWFTdHlsZSA9IF9wcm9wcy50ZXh0YXJlYVN0eWxlLFxuICAgICAgICAgIHZhbHVlTGluayA9IF9wcm9wcy52YWx1ZUxpbmssXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnb25DaGFuZ2UnLCAnb25IZWlnaHRDaGFuZ2UnLCAncm93cycsICdyb3dzTWF4JywgJ3NoYWRvd1N0eWxlJywgJ3N0eWxlJywgJ2hpbnRUZXh0JywgJ3RleHRhcmVhU3R5bGUnLCAndmFsdWVMaW5rJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMuc3RhdGUpO1xuICAgICAgdmFyIHJvb3RTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKTtcbiAgICAgIHZhciB0ZXh0YXJlYVN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMudGV4dGFyZWEsIHRleHRhcmVhU3R5bGUpO1xuICAgICAgdmFyIHNoYWRvd1N0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgdGV4dGFyZWFTdHlsZXMsIHN0eWxlcy5zaGFkb3csIHNoYWRvd1N0eWxlKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlTGluaycpKSB7XG4gICAgICAgIG90aGVyLnZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZUxpbmsudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMocm9vdFN0eWxlcykgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0RXZlbnRMaXN0ZW5lcjIuZGVmYXVsdCwgeyB0YXJnZXQ6ICd3aW5kb3cnLCBvblJlc2l6ZTogdGhpcy5oYW5kbGVSZXNpemUgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIHtcbiAgICAgICAgICByZWY6ICdzaGFkb3cnLFxuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKHNoYWRvd1N0eWxlcyksXG4gICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgcm93czogdGhpcy5wcm9wcy5yb3dzLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUsXG4gICAgICAgICAgdmFsdWVMaW5rOiB0aGlzLnByb3BzLnZhbHVlTGlua1xuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHtcbiAgICAgICAgICByZWY6ICdpbnB1dCcsXG4gICAgICAgICAgcm93czogdGhpcy5wcm9wcy5yb3dzLFxuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKHRleHRhcmVhU3R5bGVzKSxcbiAgICAgICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVDaGFuZ2VcbiAgICAgICAgfSkpXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRW5oYW5jZWRUZXh0YXJlYTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkVuaGFuY2VkVGV4dGFyZWEuZGVmYXVsdFByb3BzID0ge1xuICByb3dzOiAxXG59O1xuRW5oYW5jZWRUZXh0YXJlYS5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuRW5oYW5jZWRUZXh0YXJlYS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGRlZmF1bHRWYWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGhpbnRUZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uSGVpZ2h0Q2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHJvd3M6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICByb3dzTWF4OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgc2hhZG93U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgdGV4dGFyZWFTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdmFsdWVMaW5rOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gRW5oYW5jZWRUZXh0YXJlYTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL0VuaGFuY2VkVGV4dGFyZWEuanNcbi8vIG1vZHVsZSBpZCA9IDkwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9zaGFsbG93RXF1YWwgPSByZXF1aXJlKCdyZWNvbXBvc2Uvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dFcXVhbCk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbnZhciBfRW5oYW5jZWRUZXh0YXJlYSA9IHJlcXVpcmUoJy4vRW5oYW5jZWRUZXh0YXJlYScpO1xuXG52YXIgX0VuaGFuY2VkVGV4dGFyZWEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRW5oYW5jZWRUZXh0YXJlYSk7XG5cbnZhciBfVGV4dEZpZWxkSGludCA9IHJlcXVpcmUoJy4vVGV4dEZpZWxkSGludCcpO1xuXG52YXIgX1RleHRGaWVsZEhpbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dEZpZWxkSGludCk7XG5cbnZhciBfVGV4dEZpZWxkTGFiZWwgPSByZXF1aXJlKCcuL1RleHRGaWVsZExhYmVsJyk7XG5cbnZhciBfVGV4dEZpZWxkTGFiZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dEZpZWxkTGFiZWwpO1xuXG52YXIgX1RleHRGaWVsZFVuZGVybGluZSA9IHJlcXVpcmUoJy4vVGV4dEZpZWxkVW5kZXJsaW5lJyk7XG5cbnZhciBfVGV4dEZpZWxkVW5kZXJsaW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RleHRGaWVsZFVuZGVybGluZSk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0LCBzdGF0ZSkge1xuICB2YXIgX2NvbnRleHQkbXVpVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lLFxuICAgICAgYmFzZVRoZW1lID0gX2NvbnRleHQkbXVpVGhlbWUuYmFzZVRoZW1lLFxuICAgICAgX2NvbnRleHQkbXVpVGhlbWUkdGV4ID0gX2NvbnRleHQkbXVpVGhlbWUudGV4dEZpZWxkLFxuICAgICAgZmxvYXRpbmdMYWJlbENvbG9yID0gX2NvbnRleHQkbXVpVGhlbWUkdGV4LmZsb2F0aW5nTGFiZWxDb2xvcixcbiAgICAgIGZvY3VzQ29sb3IgPSBfY29udGV4dCRtdWlUaGVtZSR0ZXguZm9jdXNDb2xvcixcbiAgICAgIHRleHRDb2xvciA9IF9jb250ZXh0JG11aVRoZW1lJHRleC50ZXh0Q29sb3IsXG4gICAgICBkaXNhYmxlZFRleHRDb2xvciA9IF9jb250ZXh0JG11aVRoZW1lJHRleC5kaXNhYmxlZFRleHRDb2xvcixcbiAgICAgIGJhY2tncm91bmRDb2xvciA9IF9jb250ZXh0JG11aVRoZW1lJHRleC5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBlcnJvckNvbG9yID0gX2NvbnRleHQkbXVpVGhlbWUkdGV4LmVycm9yQ29sb3I7XG5cblxuICB2YXIgc3R5bGVzID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgIGxpbmVIZWlnaHQ6ICcyNHB4JyxcbiAgICAgIHdpZHRoOiBwcm9wcy5mdWxsV2lkdGggPyAnMTAwJScgOiAyNTYsXG4gICAgICBoZWlnaHQ6IChwcm9wcy5yb3dzIC0gMSkgKiAyNCArIChwcm9wcy5mbG9hdGluZ0xhYmVsVGV4dCA/IDcyIDogNDgpLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgICAgZm9udEZhbWlseTogYmFzZVRoZW1lLmZvbnRGYW1pbHksXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnMjAwbXMnLCAnaGVpZ2h0JyksXG4gICAgICBjdXJzb3I6IHByb3BzLmRpc2FibGVkID8gJ25vdC1hbGxvd2VkJyA6ICdhdXRvJ1xuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgYm90dG9tOiAyLFxuICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgbGluZUhlaWdodDogJzEycHgnLFxuICAgICAgY29sb3I6IGVycm9yQ29sb3IsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpXG4gICAgfSxcbiAgICBmbG9hdGluZ0xhYmVsOiB7XG4gICAgICBjb2xvcjogcHJvcHMuZGlzYWJsZWQgPyBkaXNhYmxlZFRleHRDb2xvciA6IGZsb2F0aW5nTGFiZWxDb2xvcixcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH0sXG4gICAgaW5wdXQ6IHtcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxuICAgICAgY29sb3I6IHByb3BzLmRpc2FibGVkID8gZGlzYWJsZWRUZXh0Q29sb3IgOiB0ZXh0Q29sb3IsXG4gICAgICBjdXJzb3I6ICdpbmhlcml0JyxcbiAgICAgIGZvbnQ6ICdpbmhlcml0JyxcbiAgICAgIFdlYmtpdFRleHRGaWxsQ29sb3I6IHByb3BzLmRpc2FibGVkID8gZGlzYWJsZWRUZXh0Q29sb3IgOiB0ZXh0Q29sb3IsXG4gICAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3JnYmEoMCwwLDAsMCknIH0sXG4gICAgaW5wdXROYXRpdmU6IHtcbiAgICAgIGFwcGVhcmFuY2U6ICd0ZXh0ZmllbGQnIH1cbiAgfTtcblxuICBzdHlsZXMudGV4dGFyZWEgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5pbnB1dCwge1xuICAgIG1hcmdpblRvcDogcHJvcHMuZmxvYXRpbmdMYWJlbFRleHQgPyAzNiA6IDEyLFxuICAgIG1hcmdpbkJvdHRvbTogcHJvcHMuZmxvYXRpbmdMYWJlbFRleHQgPyAtMzYgOiAtMTIsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZm9udDogJ2luaGVyaXQnXG4gIH0pO1xuXG4gIC8vIERvIG5vdCBhc3NpZ24gYSBoZWlnaHQgdG8gdGhlIHRleHRhcmVhIGFzIGhlIGhhbmRsZXMgaXQgb24gaGlzIG93bi5cbiAgc3R5bGVzLmlucHV0LmhlaWdodCA9ICcxMDAlJztcblxuICBpZiAoc3RhdGUuaXNGb2N1c2VkKSB7XG4gICAgc3R5bGVzLmZsb2F0aW5nTGFiZWwuY29sb3IgPSBmb2N1c0NvbG9yO1xuICB9XG5cbiAgaWYgKHByb3BzLmZsb2F0aW5nTGFiZWxUZXh0KSB7XG4gICAgc3R5bGVzLmlucHV0LmJveFNpemluZyA9ICdib3JkZXItYm94JztcblxuICAgIGlmICghcHJvcHMubXVsdGlMaW5lKSB7XG4gICAgICBzdHlsZXMuaW5wdXQubWFyZ2luVG9wID0gMTQ7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmVycm9yVGV4dCkge1xuICAgICAgc3R5bGVzLmVycm9yLmJvdHRvbSA9ICFwcm9wcy5tdWx0aUxpbmUgPyBzdHlsZXMuZXJyb3IuZm9udFNpemUgKyAzIDogMztcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhdGUuZXJyb3JUZXh0KSB7XG4gICAgaWYgKHN0YXRlLmlzRm9jdXNlZCkge1xuICAgICAgc3R5bGVzLmZsb2F0aW5nTGFiZWwuY29sb3IgPSBzdHlsZXMuZXJyb3IuY29sb3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyB2YWxpZCB0byBiZSBkaXNwbGF5ZWQgaW5zaWRlIGFuIGlucHV0LlxuICpcbiAqIEBwYXJhbSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdHJpbmcgcHJvdmlkZWQgaXMgdmFsaWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gaXNWYWxpZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09ICcnICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgJiYgIShBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApO1xufVxuXG52YXIgVGV4dEZpZWxkID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoVGV4dEZpZWxkLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUZXh0RmllbGQoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgVGV4dEZpZWxkKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IFRleHRGaWVsZC5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoVGV4dEZpZWxkKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc0ZvY3VzZWQ6IGZhbHNlLFxuICAgICAgZXJyb3JUZXh0OiB1bmRlZmluZWQsXG4gICAgICBoYXNWYWx1ZTogZmFsc2VcbiAgICB9LCBfdGhpcy5oYW5kbGVJbnB1dEJsdXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgaXNGb2N1c2VkOiBmYWxzZSB9KTtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25CbHVyKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGhhc1ZhbHVlOiBpc1ZhbGlkKGV2ZW50LnRhcmdldC52YWx1ZSkgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlSW5wdXRGb2N1cyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIF90aGlzLnNldFN0YXRlKHsgaXNGb2N1c2VkOiB0cnVlIH0pO1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Gb2N1cyhldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlSGVpZ2h0Q2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50LCBoZWlnaHQpIHtcbiAgICAgIHZhciBuZXdIZWlnaHQgPSBoZWlnaHQgKyAyNDtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5mbG9hdGluZ0xhYmVsVGV4dCkge1xuICAgICAgICBuZXdIZWlnaHQgKz0gMjQ7XG4gICAgICB9XG4gICAgICBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUoX3RoaXMpLnN0eWxlLmhlaWdodCA9IG5ld0hlaWdodCArICdweCc7XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFRleHRGaWVsZCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBuYW1lID0gX3Byb3BzLm5hbWUsXG4gICAgICAgICAgaGludFRleHQgPSBfcHJvcHMuaGludFRleHQsXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQgPSBfcHJvcHMuZmxvYXRpbmdMYWJlbFRleHQsXG4gICAgICAgICAgaWQgPSBfcHJvcHMuaWQ7XG5cblxuICAgICAgdmFyIHByb3BzTGVhZiA9IGNoaWxkcmVuID8gY2hpbGRyZW4ucHJvcHMgOiB0aGlzLnByb3BzO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZXJyb3JUZXh0OiB0aGlzLnByb3BzLmVycm9yVGV4dCxcbiAgICAgICAgaGFzVmFsdWU6IGlzVmFsaWQocHJvcHNMZWFmLnZhbHVlKSB8fCBpc1ZhbGlkKHByb3BzTGVhZi5kZWZhdWx0VmFsdWUpXG4gICAgICB9KTtcblxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShuYW1lIHx8IGhpbnRUZXh0IHx8IGZsb2F0aW5nTGFiZWxUZXh0IHx8IGlkLCAnTWF0ZXJpYWwtVUk6IFdlIGRvblxcJ3QgaGF2ZSBlbm91Z2ggaW5mb3JtYXRpb25cXG4gICAgICB0byBidWlsZCBhIHJvYnVzdCB1bmlxdWUgaWQgZm9yIHRoZSBUZXh0RmllbGQgY29tcG9uZW50LiBQbGVhc2UgcHJvdmlkZSBhbiBpZCBvciBhIG5hbWUuJykgOiB2b2lkIDA7XG5cbiAgICAgIHZhciB1bmlxdWVJZCA9IG5hbWUgKyAnLScgKyBoaW50VGV4dCArICctJyArIGZsb2F0aW5nTGFiZWxUZXh0ICsgJy0nICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMHhGRkZGKTtcbiAgICAgIHRoaXMudW5pcXVlSWQgPSB1bmlxdWVJZC5yZXBsYWNlKC9bXkEtWmEtejAtOS1dL2dpLCAnJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAobmV4dFByb3BzLmVycm9yVGV4dCAhPT0gdGhpcy5wcm9wcy5lcnJvclRleHQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZXJyb3JUZXh0OiBuZXh0UHJvcHMuZXJyb3JUZXh0XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dFByb3BzLmNoaWxkcmVuICYmIG5leHRQcm9wcy5jaGlsZHJlbi5wcm9wcykge1xuICAgICAgICBuZXh0UHJvcHMgPSBuZXh0UHJvcHMuY2hpbGRyZW4ucHJvcHM7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0UHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgICAgdmFyIGhhc1ZhbHVlID0gaXNWYWxpZChuZXh0UHJvcHMudmFsdWUpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGhhc1ZhbHVlOiBoYXNWYWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG4gICAgICByZXR1cm4gISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKSB8fCAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMuY29udGV4dCwgbmV4dENvbnRleHQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2JsdXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgaWYgKHRoaXMuaW5wdXQpIHtcbiAgICAgICAgdGhpcy5nZXRJbnB1dE5vZGUoKS5ibHVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZm9jdXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgIGlmICh0aGlzLmlucHV0KSB7XG4gICAgICAgIHRoaXMuZ2V0SW5wdXROb2RlKCkuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZWxlY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3QoKSB7XG4gICAgICBpZiAodGhpcy5pbnB1dCkge1xuICAgICAgICB0aGlzLmdldElucHV0Tm9kZSgpLnNlbGVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnB1dCA/IHRoaXMuZ2V0SW5wdXROb2RlKCkudmFsdWUgOiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SW5wdXROb2RlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5wdXROb2RlKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4gfHwgdGhpcy5wcm9wcy5tdWx0aUxpbmUgPyB0aGlzLmlucHV0LmdldElucHV0Tm9kZSgpIDogX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMuaW5wdXQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19pc0NvbnRyb2xsZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaXNDb250cm9sbGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wczIuY2hpbGRyZW4sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzMi5jbGFzc05hbWUsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMyLmRpc2FibGVkLFxuICAgICAgICAgIGVycm9yU3R5bGUgPSBfcHJvcHMyLmVycm9yU3R5bGUsXG4gICAgICAgICAgZXJyb3JUZXh0ID0gX3Byb3BzMi5lcnJvclRleHQsXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbEZpeGVkID0gX3Byb3BzMi5mbG9hdGluZ0xhYmVsRml4ZWQsXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbEZvY3VzU3R5bGUgPSBfcHJvcHMyLmZsb2F0aW5nTGFiZWxGb2N1c1N0eWxlLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxTaHJpbmtTdHlsZSA9IF9wcm9wczIuZmxvYXRpbmdMYWJlbFNocmlua1N0eWxlLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxTdHlsZSA9IF9wcm9wczIuZmxvYXRpbmdMYWJlbFN0eWxlLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0ID0gX3Byb3BzMi5mbG9hdGluZ0xhYmVsVGV4dCxcbiAgICAgICAgICBmdWxsV2lkdGggPSBfcHJvcHMyLmZ1bGxXaWR0aCxcbiAgICAgICAgICBoaW50VGV4dCA9IF9wcm9wczIuaGludFRleHQsXG4gICAgICAgICAgaGludFN0eWxlID0gX3Byb3BzMi5oaW50U3R5bGUsXG4gICAgICAgICAgaWQgPSBfcHJvcHMyLmlkLFxuICAgICAgICAgIGlucHV0U3R5bGUgPSBfcHJvcHMyLmlucHV0U3R5bGUsXG4gICAgICAgICAgbXVsdGlMaW5lID0gX3Byb3BzMi5tdWx0aUxpbmUsXG4gICAgICAgICAgb25CbHVyID0gX3Byb3BzMi5vbkJsdXIsXG4gICAgICAgICAgb25DaGFuZ2UgPSBfcHJvcHMyLm9uQ2hhbmdlLFxuICAgICAgICAgIG9uRm9jdXMgPSBfcHJvcHMyLm9uRm9jdXMsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMyLnN0eWxlLFxuICAgICAgICAgIHR5cGUgPSBfcHJvcHMyLnR5cGUsXG4gICAgICAgICAgdW5kZXJsaW5lRGlzYWJsZWRTdHlsZSA9IF9wcm9wczIudW5kZXJsaW5lRGlzYWJsZWRTdHlsZSxcbiAgICAgICAgICB1bmRlcmxpbmVGb2N1c1N0eWxlID0gX3Byb3BzMi51bmRlcmxpbmVGb2N1c1N0eWxlLFxuICAgICAgICAgIHVuZGVybGluZVNob3cgPSBfcHJvcHMyLnVuZGVybGluZVNob3csXG4gICAgICAgICAgdW5kZXJsaW5lU3R5bGUgPSBfcHJvcHMyLnVuZGVybGluZVN0eWxlLFxuICAgICAgICAgIHJvd3MgPSBfcHJvcHMyLnJvd3MsXG4gICAgICAgICAgcm93c01heCA9IF9wcm9wczIucm93c01heCxcbiAgICAgICAgICB0ZXh0YXJlYVN0eWxlID0gX3Byb3BzMi50ZXh0YXJlYVN0eWxlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzMiwgWydjaGlsZHJlbicsICdjbGFzc05hbWUnLCAnZGlzYWJsZWQnLCAnZXJyb3JTdHlsZScsICdlcnJvclRleHQnLCAnZmxvYXRpbmdMYWJlbEZpeGVkJywgJ2Zsb2F0aW5nTGFiZWxGb2N1c1N0eWxlJywgJ2Zsb2F0aW5nTGFiZWxTaHJpbmtTdHlsZScsICdmbG9hdGluZ0xhYmVsU3R5bGUnLCAnZmxvYXRpbmdMYWJlbFRleHQnLCAnZnVsbFdpZHRoJywgJ2hpbnRUZXh0JywgJ2hpbnRTdHlsZScsICdpZCcsICdpbnB1dFN0eWxlJywgJ211bHRpTGluZScsICdvbkJsdXInLCAnb25DaGFuZ2UnLCAnb25Gb2N1cycsICdzdHlsZScsICd0eXBlJywgJ3VuZGVybGluZURpc2FibGVkU3R5bGUnLCAndW5kZXJsaW5lRm9jdXNTdHlsZScsICd1bmRlcmxpbmVTaG93JywgJ3VuZGVybGluZVN0eWxlJywgJ3Jvd3MnLCAncm93c01heCcsICd0ZXh0YXJlYVN0eWxlJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMuc3RhdGUpO1xuICAgICAgdmFyIGlucHV0SWQgPSBpZCB8fCB0aGlzLnVuaXF1ZUlkO1xuXG4gICAgICB2YXIgZXJyb3JUZXh0RWxlbWVudCA9IHRoaXMuc3RhdGUuZXJyb3JUZXh0ICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmVycm9yLCBlcnJvclN0eWxlKSkgfSxcbiAgICAgICAgdGhpcy5zdGF0ZS5lcnJvclRleHRcbiAgICAgICk7XG5cbiAgICAgIHZhciBmbG9hdGluZ0xhYmVsVGV4dEVsZW1lbnQgPSBmbG9hdGluZ0xhYmVsVGV4dCAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1RleHRGaWVsZExhYmVsMi5kZWZhdWx0LFxuICAgICAgICB7XG4gICAgICAgICAgbXVpVGhlbWU6IHRoaXMuY29udGV4dC5tdWlUaGVtZSxcbiAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5mbG9hdGluZ0xhYmVsLCBmbG9hdGluZ0xhYmVsU3R5bGUsIHRoaXMuc3RhdGUuaXNGb2N1c2VkID8gZmxvYXRpbmdMYWJlbEZvY3VzU3R5bGUgOiBudWxsKSxcbiAgICAgICAgICBzaHJpbmtTdHlsZTogZmxvYXRpbmdMYWJlbFNocmlua1N0eWxlLFxuICAgICAgICAgIGh0bWxGb3I6IGlucHV0SWQsXG4gICAgICAgICAgc2hyaW5rOiB0aGlzLnN0YXRlLmhhc1ZhbHVlIHx8IHRoaXMuc3RhdGUuaXNGb2N1c2VkIHx8IGZsb2F0aW5nTGFiZWxGaXhlZCxcbiAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWRcbiAgICAgICAgfSxcbiAgICAgICAgZmxvYXRpbmdMYWJlbFRleHRcbiAgICAgICk7XG5cbiAgICAgIHZhciBpbnB1dFByb3BzID0ge1xuICAgICAgICBpZDogaW5wdXRJZCxcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoZWxlbSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuaW5wdXQgPSBlbGVtO1xuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgb25CbHVyOiB0aGlzLmhhbmRsZUlucHV0Qmx1cixcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UsXG4gICAgICAgIG9uRm9jdXM6IHRoaXMuaGFuZGxlSW5wdXRGb2N1c1xuICAgICAgfTtcblxuICAgICAgdmFyIGNoaWxkU3R5bGVNZXJnZWQgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmlucHV0LCBpbnB1dFN0eWxlKTtcblxuICAgICAgdmFyIGlucHV0RWxlbWVudCA9IHZvaWQgMDtcbiAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICBpbnB1dEVsZW1lbnQgPSBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBpbnB1dFByb3BzLCBjaGlsZHJlbi5wcm9wcywge1xuICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoY2hpbGRTdHlsZU1lcmdlZCwgY2hpbGRyZW4ucHJvcHMuc3R5bGUpXG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0RWxlbWVudCA9IG11bHRpTGluZSA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9FbmhhbmNlZFRleHRhcmVhMi5kZWZhdWx0LCAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHtcbiAgICAgICAgICBzdHlsZTogY2hpbGRTdHlsZU1lcmdlZCxcbiAgICAgICAgICB0ZXh0YXJlYVN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnRleHRhcmVhLCBzdHlsZXMuaW5wdXROYXRpdmUsIHRleHRhcmVhU3R5bGUpLFxuICAgICAgICAgIHJvd3M6IHJvd3MsXG4gICAgICAgICAgcm93c01heDogcm93c01heCxcbiAgICAgICAgICBoaW50VGV4dDogaGludFRleHRcbiAgICAgICAgfSwgb3RoZXIsIGlucHV0UHJvcHMsIHtcbiAgICAgICAgICBvbkhlaWdodENoYW5nZTogdGhpcy5oYW5kbGVIZWlnaHRDaGFuZ2VcbiAgICAgICAgfSkpIDogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmlucHV0TmF0aXZlLCBjaGlsZFN0eWxlTWVyZ2VkKSlcbiAgICAgICAgfSwgb3RoZXIsIGlucHV0UHJvcHMpKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJvb3RQcm9wcyA9IHt9O1xuXG4gICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgcm9vdFByb3BzID0gb3RoZXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIHJvb3RQcm9wcywge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpKVxuICAgICAgICB9KSxcbiAgICAgICAgZmxvYXRpbmdMYWJlbFRleHRFbGVtZW50LFxuICAgICAgICBoaW50VGV4dCA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9UZXh0RmllbGRIaW50Mi5kZWZhdWx0LCB7XG4gICAgICAgICAgbXVpVGhlbWU6IHRoaXMuY29udGV4dC5tdWlUaGVtZSxcbiAgICAgICAgICBzaG93OiAhKHRoaXMuc3RhdGUuaGFzVmFsdWUgfHwgZmxvYXRpbmdMYWJlbFRleHQgJiYgIXRoaXMuc3RhdGUuaXNGb2N1c2VkKSB8fCAhdGhpcy5zdGF0ZS5oYXNWYWx1ZSAmJiBmbG9hdGluZ0xhYmVsVGV4dCAmJiBmbG9hdGluZ0xhYmVsRml4ZWQgJiYgIXRoaXMuc3RhdGUuaXNGb2N1c2VkLFxuICAgICAgICAgIHN0eWxlOiBoaW50U3R5bGUsXG4gICAgICAgICAgdGV4dDogaGludFRleHRcbiAgICAgICAgfSkgOiBudWxsLFxuICAgICAgICBpbnB1dEVsZW1lbnQsXG4gICAgICAgIHVuZGVybGluZVNob3cgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVGV4dEZpZWxkVW5kZXJsaW5lMi5kZWZhdWx0LCB7XG4gICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgIGRpc2FibGVkU3R5bGU6IHVuZGVybGluZURpc2FibGVkU3R5bGUsXG4gICAgICAgICAgZXJyb3I6ICEhdGhpcy5zdGF0ZS5lcnJvclRleHQsXG4gICAgICAgICAgZXJyb3JTdHlsZTogZXJyb3JTdHlsZSxcbiAgICAgICAgICBmb2N1czogdGhpcy5zdGF0ZS5pc0ZvY3VzZWQsXG4gICAgICAgICAgZm9jdXNTdHlsZTogdW5kZXJsaW5lRm9jdXNTdHlsZSxcbiAgICAgICAgICBtdWlUaGVtZTogdGhpcy5jb250ZXh0Lm11aVRoZW1lLFxuICAgICAgICAgIHN0eWxlOiB1bmRlcmxpbmVTdHlsZVxuICAgICAgICB9KSA6IG51bGwsXG4gICAgICAgIGVycm9yVGV4dEVsZW1lbnRcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBUZXh0RmllbGQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5UZXh0RmllbGQuZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIGZsb2F0aW5nTGFiZWxGaXhlZDogZmFsc2UsXG4gIG11bHRpTGluZTogZmFsc2UsXG4gIGZ1bGxXaWR0aDogZmFsc2UsXG4gIHR5cGU6ICd0ZXh0JyxcbiAgdW5kZXJsaW5lU2hvdzogdHJ1ZSxcbiAgcm93czogMVxufTtcblRleHRGaWVsZC5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuVGV4dEZpZWxkLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBjc3MgY2xhc3MgbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHN0cmluZyB0byB1c2UgZm9yIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSB0ZXh0IGZpZWxkIGlmIHNldCB0byB0cnVlLlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFRoZSBzdHlsZSBvYmplY3QgdG8gdXNlIHRvIG92ZXJyaWRlIGVycm9yIHN0eWxlcy5cbiAgICovXG4gIGVycm9yU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGVycm9yIGNvbnRlbnQgdG8gZGlzcGxheS5cbiAgICovXG4gIGVycm9yVGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGZsb2F0aW5nIGxhYmVsIHdpbGwgZmxvYXQgZXZlbiB3aGVuIHRoZXJlIGlzIG5vIHZhbHVlLlxuICAgKi9cbiAgZmxvYXRpbmdMYWJlbEZpeGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgc3R5bGUgb2JqZWN0IHRvIHVzZSB0byBvdmVycmlkZSBmbG9hdGluZyBsYWJlbCBzdHlsZXMgd2hlbiBmb2N1c2VkLlxuICAgKi9cbiAgZmxvYXRpbmdMYWJlbEZvY3VzU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIHN0eWxlIG9iamVjdCB0byB1c2UgdG8gb3ZlcnJpZGUgZmxvYXRpbmcgbGFiZWwgc3R5bGVzIHdoZW4gc2hydW5rLlxuICAgKi9cbiAgZmxvYXRpbmdMYWJlbFNocmlua1N0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBzdHlsZSBvYmplY3QgdG8gdXNlIHRvIG92ZXJyaWRlIGZsb2F0aW5nIGxhYmVsIHN0eWxlcy5cbiAgICovXG4gIGZsb2F0aW5nTGFiZWxTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCB0byB1c2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBlbGVtZW50LlxuICAgKi9cbiAgZmxvYXRpbmdMYWJlbFRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBmaWVsZCByZWNlaXZlcyB0aGUgcHJvcGVydHkgd2lkdGggMTAwJS5cbiAgICovXG4gIGZ1bGxXaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIFRleHRGaWVsZCdzIGhpbnQgdGV4dCBlbGVtZW50LlxuICAgKi9cbiAgaGludFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBoaW50IGNvbnRlbnQgdG8gZGlzcGxheS5cbiAgICovXG4gIGhpbnRUZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgaWQgcHJvcCBmb3IgdGhlIHRleHQgZmllbGQuXG4gICAqL1xuICBpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgVGV4dEZpZWxkJ3MgaW5wdXQgZWxlbWVudC5cbiAgICogV2hlbiBtdWx0aUxpbmUgaXMgZmFsc2U6IGRlZmluZSB0aGUgc3R5bGUgb2YgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqIFdoZW4gbXVsdGlMaW5lIGlzIHRydWU6IGRlZmluZSB0aGUgc3R5bGUgb2YgdGhlIGNvbnRhaW5lciBvZiB0aGUgdGV4dGFyZWEuXG4gICAqL1xuICBpbnB1dFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIElmIHRydWUsIGEgdGV4dGFyZWEgZWxlbWVudCB3aWxsIGJlIHJlbmRlcmVkLlxuICAgKiBUaGUgdGV4dGFyZWEgYWxzbyBncm93cyBhbmQgc2hyaW5rcyBhY2NvcmRpbmcgdG8gdGhlIG51bWJlciBvZiBsaW5lcy5cbiAgICovXG4gIG11bHRpTGluZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogTmFtZSBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAgICovXG4gIG5hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbkJsdXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgZmlyZWQgd2hlbiB0aGUgdGV4dGZpZWxkJ3MgdmFsdWUgY2hhbmdlcy5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IENoYW5nZSBldmVudCB0YXJnZXRpbmcgdGhlIHRleHQgZmllbGQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdWYWx1ZSBUaGUgbmV3IHZhbHVlIG9mIHRoZSB0ZXh0IGZpZWxkLlxuICAgKi9cbiAgb25DaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Gb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogTnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpTGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuXG4gICAqIG11bHRpTGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzTWF4OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgVGV4dEZpZWxkJ3MgdGV4dGFyZWEgZWxlbWVudC5cbiAgICogVGhlIFRleHRGaWVsZCB1c2UgZWl0aGVyIGEgdGV4dGFyZWEgb3IgYW4gaW5wdXQsXG4gICAqIHRoaXMgcHJvcGVydHkgaGFzIGVmZmVjdHMgb25seSB3aGVuIG11bHRpTGluZSBpcyB0cnVlLlxuICAgKi9cbiAgdGV4dGFyZWFTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIHR5cGUgb2YgaW5wdXQgdG8gZGlzcGxheVxuICAgKiBzdWNoIGFzIFwicGFzc3dvcmRcIiBvciBcInRleHRcIi5cbiAgICovXG4gIHR5cGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlXG4gICAqIFRleHRGaWVsZCdzIHVuZGVybGluZSBlbGVtZW50IHdoZW4gZGlzYWJsZWQuXG4gICAqL1xuICB1bmRlcmxpbmVEaXNhYmxlZFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBUZXh0RmllbGQnc1xuICAgKiB1bmRlcmxpbmUgZWxlbWVudCB3aGVuIGZvY3Vzc2VkLlxuICAgKi9cbiAgdW5kZXJsaW5lRm9jdXNTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBzaG93cyB0aGUgdW5kZXJsaW5lIGZvciB0aGUgdGV4dCBmaWVsZC5cbiAgICovXG4gIHVuZGVybGluZVNob3c6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBUZXh0RmllbGQncyB1bmRlcmxpbmUgZWxlbWVudC5cbiAgICovXG4gIHVuZGVybGluZVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgdGV4dCBmaWVsZC5cbiAgICovXG4gIHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueVxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dEZpZWxkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkLmpzXG4vLyBtb2R1bGUgaWQgPSA5MDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMgNCA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzKSB7XG4gIHZhciBoaW50Q29sb3IgPSBwcm9wcy5tdWlUaGVtZS50ZXh0RmllbGQuaGludENvbG9yLFxuICAgICAgc2hvdyA9IHByb3BzLnNob3c7XG5cblxuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3BhY2l0eTogc2hvdyA/IDEgOiAwLFxuICAgICAgY29sb3I6IGhpbnRDb2xvcixcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgICBib3R0b206IDEyXG4gICAgfVxuICB9O1xufVxuXG52YXIgVGV4dEZpZWxkSGludCA9IGZ1bmN0aW9uIFRleHRGaWVsZEhpbnQocHJvcHMpIHtcbiAgdmFyIHByZXBhcmVTdHlsZXMgPSBwcm9wcy5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIHRleHQgPSBwcm9wcy50ZXh0O1xuXG5cbiAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyhwcm9wcyk7XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yb290LCBzdHlsZSkpIH0sXG4gICAgdGV4dFxuICApO1xufTtcblxuVGV4dEZpZWxkSGludC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFRoZSBtYXRlcmlhbC11aSB0aGVtZSBhcHBsaWVkIHRvIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBoaW50IHRleHQgc2hvdWxkIGJlIHZpc2libGUuXG4gICAqL1xuICBzaG93OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGhpbnQgdGV4dCBkaXNwbGF5ZWQuXG4gICAqL1xuICB0ZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVcbn0gOiB7fTtcblxuVGV4dEZpZWxkSGludC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3c6IHRydWVcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRleHRGaWVsZEhpbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL1RleHRGaWVsZC9UZXh0RmllbGRIaW50LmpzXG4vLyBtb2R1bGUgaWQgPSA5MDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMgNCA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzKSB7XG4gIHZhciBkZWZhdWx0U3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxpbmVIZWlnaHQ6ICcyMnB4JyxcbiAgICB0b3A6IDM4LFxuICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgekluZGV4OiAxLCAvLyBOZWVkZWQgdG8gZGlzcGxheSBsYWJlbCBhYm92ZSBDaHJvbWUncyBhdXRvY29tcGxldGUgZmllbGQgYmFja2dyb3VuZFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpIHRyYW5zbGF0ZSgwLCAwKScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCB0b3AnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZSdcbiAgfTtcblxuICB2YXIgc2hyaW5rU3R5bGVzID0gcHJvcHMuc2hyaW5rID8gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjc1KSB0cmFuc2xhdGUoMCwgLTI4cHgpJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgfSwgcHJvcHMuc2hyaW5rU3R5bGUpIDogbnVsbDtcblxuICByZXR1cm4ge1xuICAgIHJvb3Q6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShkZWZhdWx0U3R5bGVzLCBwcm9wcy5zdHlsZSwgc2hyaW5rU3R5bGVzKVxuICB9O1xufVxuXG52YXIgVGV4dEZpZWxkTGFiZWwgPSBmdW5jdGlvbiBUZXh0RmllbGRMYWJlbChwcm9wcykge1xuICB2YXIgbXVpVGhlbWUgPSBwcm9wcy5tdWlUaGVtZSxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBodG1sRm9yID0gcHJvcHMuaHRtbEZvcixcbiAgICAgIG9uVG91Y2hUYXAgPSBwcm9wcy5vblRvdWNoVGFwO1xuICB2YXIgcHJlcGFyZVN0eWxlcyA9IG11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyhwcm9wcyk7XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdsYWJlbCcsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcyhzdHlsZXMucm9vdCksXG4gICAgICBodG1sRm9yOiBodG1sRm9yLFxuICAgICAgb25Ub3VjaFRhcDogb25Ub3VjaFRhcFxuICAgIH0sXG4gICAgY2hpbGRyZW5cbiAgKTtcbn07XG5cblRleHRGaWVsZExhYmVsLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIFRoZSBsYWJlbCBjb250ZW50cy5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgY3NzIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgbGFiZWwgaWYgc2V0IHRvIHRydWUuXG4gICAqL1xuICBkaXNhYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSB0YXJnZXQgZWxlbWVudCB0aGF0IHRoaXMgbGFiZWwgc2hvdWxkIHJlZmVyIHRvLlxuICAgKi9cbiAgaHRtbEZvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFRoZSBtYXRlcmlhbC11aSB0aGVtZSBhcHBsaWVkIHRvIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmb3Igd2hlbiB0aGUgbGFiZWwgaXMgc2VsZWN0ZWQgdmlhIGEgdG91Y2ggdGFwLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVG91Y2hUYXAgZXZlbnQgdGFyZ2V0aW5nIHRoZSB0ZXh0IGZpZWxkIGxhYmVsLlxuICAgKi9cbiAgb25Ub3VjaFRhcDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgZmxvYXRpbmcgbGFiZWwgc2hvdWxkIHNocmluay5cbiAgICovXG4gIHNocmluazogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudCB3aGVuIHNocnVuay5cbiAgICovXG4gIHNocmlua1N0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcblxuVGV4dEZpZWxkTGFiZWwuZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIHNocmluazogZmFsc2Vcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRleHRGaWVsZExhYmVsO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkTGFiZWwuanNcbi8vIG1vZHVsZSBpZCA9IDkxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgcGFyZW50IGBUZXh0RmllbGRgIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSB1bmRlcmxpbmUgd2hlbiBwYXJlbnQgYFRleHRGaWVsZGAgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIHBhcmVudCBgVGV4dEZpZWxkYCBoYXMgYW4gZXJyb3IuXG4gICAqL1xuICBlcnJvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHVuZGVybGluZSB3aGVuIHBhcmVudCBgVGV4dEZpZWxkYCBoYXMgYW4gZXJyb3IuXG4gICAqL1xuICBlcnJvclN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIHBhcmVudCBgVGV4dEZpZWxkYCBpcyBmb2N1c2VkLlxuICAgKi9cbiAgZm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSB1bmRlcmxpbmUgd2hlbiBwYXJlbnQgYFRleHRGaWVsZGAgaXMgZm9jdXNlZC5cbiAgICovXG4gIGZvY3VzU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBUaGUgbWF0ZXJpYWwtdWkgdGhlbWUgYXBwbGllZCB0byB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBkaXNhYmxlZFN0eWxlOiB7fSxcbiAgZXJyb3I6IGZhbHNlLFxuICBlcnJvclN0eWxlOiB7fSxcbiAgZm9jdXM6IGZhbHNlLFxuICBmb2N1c1N0eWxlOiB7fSxcbiAgc3R5bGU6IHt9XG59O1xuXG52YXIgVGV4dEZpZWxkVW5kZXJsaW5lID0gZnVuY3Rpb24gVGV4dEZpZWxkVW5kZXJsaW5lKHByb3BzKSB7XG4gIHZhciBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzYWJsZWRTdHlsZSA9IHByb3BzLmRpc2FibGVkU3R5bGUsXG4gICAgICBlcnJvciA9IHByb3BzLmVycm9yLFxuICAgICAgZXJyb3JTdHlsZSA9IHByb3BzLmVycm9yU3R5bGUsXG4gICAgICBmb2N1cyA9IHByb3BzLmZvY3VzLFxuICAgICAgZm9jdXNTdHlsZSA9IHByb3BzLmZvY3VzU3R5bGUsXG4gICAgICBtdWlUaGVtZSA9IHByb3BzLm11aVRoZW1lLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZTtcbiAgdmFyIGVycm9yU3R5bGVDb2xvciA9IGVycm9yU3R5bGUuY29sb3I7XG4gIHZhciBwcmVwYXJlU3R5bGVzID0gbXVpVGhlbWUucHJlcGFyZVN0eWxlcyxcbiAgICAgIF9tdWlUaGVtZSR0ZXh0RmllbGQgPSBtdWlUaGVtZS50ZXh0RmllbGQsXG4gICAgICBib3JkZXJDb2xvciA9IF9tdWlUaGVtZSR0ZXh0RmllbGQuYm9yZGVyQ29sb3IsXG4gICAgICBkaXNhYmxlZFRleHRDb2xvciA9IF9tdWlUaGVtZSR0ZXh0RmllbGQuZGlzYWJsZWRUZXh0Q29sb3IsXG4gICAgICBlcnJvckNvbG9yID0gX211aVRoZW1lJHRleHRGaWVsZC5lcnJvckNvbG9yLFxuICAgICAgZm9jdXNDb2xvciA9IF9tdWlUaGVtZSR0ZXh0RmllbGQuZm9jdXNDb2xvcjtcblxuXG4gIHZhciBzdHlsZXMgPSB7XG4gICAgcm9vdDoge1xuICAgICAgYm9yZGVyVG9wOiAnbm9uZScsXG4gICAgICBib3JkZXJMZWZ0OiAnbm9uZScsXG4gICAgICBib3JkZXJSaWdodDogJ25vbmUnLFxuICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgMXB4JyxcbiAgICAgIGJvcmRlckNvbG9yOiBib3JkZXJDb2xvcixcbiAgICAgIGJvdHRvbTogOCxcbiAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIGJvcmRlckJvdHRvbTogJ2RvdHRlZCAycHgnLFxuICAgICAgYm9yZGVyQ29sb3I6IGRpc2FibGVkVGV4dENvbG9yXG4gICAgfSxcbiAgICBmb2N1czoge1xuICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgMnB4JyxcbiAgICAgIGJvcmRlckNvbG9yOiBmb2N1c0NvbG9yLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDApJyxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KClcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBib3JkZXJDb2xvcjogZXJyb3JTdHlsZUNvbG9yID8gZXJyb3JTdHlsZUNvbG9yIDogZXJyb3JDb2xvcixcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgxKSdcbiAgICB9XG4gIH07XG5cbiAgdmFyIHVuZGVybGluZSA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLnJvb3QsIHN0eWxlKTtcbiAgdmFyIGZvY3VzZWRVbmRlcmxpbmUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHVuZGVybGluZSwgc3R5bGVzLmZvY3VzLCBmb2N1c1N0eWxlKTtcblxuICBpZiAoZGlzYWJsZWQpIHVuZGVybGluZSA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgdW5kZXJsaW5lLCBzdHlsZXMuZGlzYWJsZWQsIGRpc2FibGVkU3R5bGUpO1xuICBpZiAoZm9jdXMpIGZvY3VzZWRVbmRlcmxpbmUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIGZvY3VzZWRVbmRlcmxpbmUsIHsgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJyB9KTtcbiAgaWYgKGVycm9yKSBmb2N1c2VkVW5kZXJsaW5lID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBmb2N1c2VkVW5kZXJsaW5lLCBzdHlsZXMuZXJyb3IpO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICBudWxsLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdocicsIHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLCBzdHlsZTogcHJlcGFyZVN0eWxlcyh1bmRlcmxpbmUpIH0pLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdocicsIHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLCBzdHlsZTogcHJlcGFyZVN0eWxlcyhmb2N1c2VkVW5kZXJsaW5lKSB9KVxuICApO1xufTtcblxuVGV4dEZpZWxkVW5kZXJsaW5lLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHByb3BUeXBlcyA6IHt9O1xuVGV4dEZpZWxkVW5kZXJsaW5lLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dEZpZWxkVW5kZXJsaW5lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkVW5kZXJsaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA5MTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMgNCA1Il0sInNvdXJjZVJvb3QiOiIifQ==