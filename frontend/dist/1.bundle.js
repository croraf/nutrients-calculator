webpackJsonp([1],{

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AdminContainer = undefined;

var _reactRedux = __webpack_require__(33);

var _reduxForm = __webpack_require__(292);

var _defineIngredientDialogue = __webpack_require__(295);

var _ingredientsAdmin = __webpack_require__(765);

var _Admin = __webpack_require__(766);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {

        openDialogue: function openDialogue() {
            dispatch((0, _defineIngredientDialogue.openDialogue)());
        },
        closeDialogue: function closeDialogue() {
            dispatch((0, _defineIngredientDialogue.closeDialogue)());
        },
        saveDialogue: function saveDialogue() {
            dispatch((0, _reduxForm.submit)('manageNutrients'));dispatch((0, _defineIngredientDialogue.closeDialogue)());
        },

        saveIngredient: function saveIngredient(values, editId) {
            editId ? dispatch((0, _ingredientsAdmin.updateIngredient)(values, editId)) : dispatch((0, _ingredientsAdmin.saveIngredient)(values));
        }
    };
};

var mapStateToProps = function mapStateToProps(state) {
    return {

        open: state.defineIngredientDialogue.open,
        initialValues: state.defineIngredientDialogue.initialValues,
        editId: state.defineIngredientDialogue.editId
    };
};

var AdminContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Admin.Admin);

exports.AdminContainer = AdminContainer;

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

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClass;

var _flexboxgrid = __webpack_require__(764);

var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getClass(className) {
  return _flexboxgrid2.default && _flexboxgrid2.default[className] ? _flexboxgrid2.default[className] : className;
}

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createProps;
function createProps(propTypes, props, classNames) {
  var newProps = {};

  Object.keys(props).filter(function (key) {
    return key === 'children' || !propTypes[key];
  }).forEach(function (key) {
    return newProps[key] = props[key];
  });

  var className = classNames.filter(function (cn) {
    return cn;
  }).join(' ');
  return Object.assign({}, newProps, { className: className });
}

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumnProps = exports.Col = exports.getRowProps = exports.Row = exports.Grid = undefined;

var _Row2 = __webpack_require__(762);

Object.defineProperty(exports, 'getRowProps', {
  enumerable: true,
  get: function get() {
    return _Row2.getRowProps;
  }
});

var _Col2 = __webpack_require__(760);

Object.defineProperty(exports, 'getColumnProps', {
  enumerable: true,
  get: function get() {
    return _Col2.getColumnProps;
  }
});

var _Grid2 = __webpack_require__(761);

var _Grid3 = _interopRequireDefault(_Grid2);

var _Row3 = _interopRequireDefault(_Row2);

var _Col3 = _interopRequireDefault(_Col2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Grid = _Grid3.default;
exports.Row = _Row3.default;
exports.Col = _Col3.default;

/***/ }),

/***/ 746:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


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

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewportSizeType = exports.ColumnSizeType = undefined;

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColumnSizeType = exports.ColumnSizeType = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]);
var ViewportSizeType = exports.ViewportSizeType = _propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg']);

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FieldComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(292);

var _FormControlWrapperContainer = __webpack_require__(771);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';*/


var FieldComponent = function (_React$Component) {
    _inherits(FieldComponent, _React$Component);

    function FieldComponent() {
        _classCallCheck(this, FieldComponent);

        return _possibleConstructorReturn(this, (FieldComponent.__proto__ || Object.getPrototypeOf(FieldComponent)).apply(this, arguments));
    }

    _createClass(FieldComponent, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                controlId = _props.controlId,
                help = _props.help,
                props = _objectWithoutProperties(_props, ['controlId', 'help']);

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_reduxForm.Field, _extends({ name: controlId, component: _FormControlWrapperContainer.FormControlWrapperContainer }, props))
            );
        }
    }]);

    return FieldComponent;
}(_react2.default.Component);

exports.FieldComponent = FieldComponent;

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(746)();
// imports


// module
exports.push([module.i, ".container-fluid,\n.container {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.container-fluid {\n  padding-right: 2rem;\n  padding-left: 2rem;\n}\n\n.row {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n}\n\n.row.reverse {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n}\n\n.col.reverse {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: column-reverse;\n  flex-direction: column-reverse;\n}\n\n.col-xs,\n.col-xs-1,\n.col-xs-2,\n.col-xs-3,\n.col-xs-4,\n.col-xs-5,\n.col-xs-6,\n.col-xs-7,\n.col-xs-8,\n.col-xs-9,\n.col-xs-10,\n.col-xs-11,\n.col-xs-12,\n.col-xs-offset-0,\n.col-xs-offset-1,\n.col-xs-offset-2,\n.col-xs-offset-3,\n.col-xs-offset-4,\n.col-xs-offset-5,\n.col-xs-offset-6,\n.col-xs-offset-7,\n.col-xs-offset-8,\n.col-xs-offset-9,\n.col-xs-offset-10,\n.col-xs-offset-11,\n.col-xs-offset-12 {\n  box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n}\n\n.col-xs {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  max-width: 100%;\n}\n\n.col-xs-1 {\n  -ms-flex-preferred-size: 8.33333333%;\n  flex-basis: 8.33333333%;\n  max-width: 8.33333333%;\n}\n\n.col-xs-2 {\n  -ms-flex-preferred-size: 16.66666667%;\n  flex-basis: 16.66666667%;\n  max-width: 16.66666667%;\n}\n\n.col-xs-3 {\n  -ms-flex-preferred-size: 25%;\n  flex-basis: 25%;\n  max-width: 25%;\n}\n\n.col-xs-4 {\n  -ms-flex-preferred-size: 33.33333333%;\n  flex-basis: 33.33333333%;\n  max-width: 33.33333333%;\n}\n\n.col-xs-5 {\n  -ms-flex-preferred-size: 41.66666667%;\n  flex-basis: 41.66666667%;\n  max-width: 41.66666667%;\n}\n\n.col-xs-6 {\n  -ms-flex-preferred-size: 50%;\n  flex-basis: 50%;\n  max-width: 50%;\n}\n\n.col-xs-7 {\n  -ms-flex-preferred-size: 58.33333333%;\n  flex-basis: 58.33333333%;\n  max-width: 58.33333333%;\n}\n\n.col-xs-8 {\n  -ms-flex-preferred-size: 66.66666667%;\n  flex-basis: 66.66666667%;\n  max-width: 66.66666667%;\n}\n\n.col-xs-9 {\n  -ms-flex-preferred-size: 75%;\n  flex-basis: 75%;\n  max-width: 75%;\n}\n\n.col-xs-10 {\n  -ms-flex-preferred-size: 83.33333333%;\n  flex-basis: 83.33333333%;\n  max-width: 83.33333333%;\n}\n\n.col-xs-11 {\n  -ms-flex-preferred-size: 91.66666667%;\n  flex-basis: 91.66666667%;\n  max-width: 91.66666667%;\n}\n\n.col-xs-12 {\n  -ms-flex-preferred-size: 100%;\n  flex-basis: 100%;\n  max-width: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n\n.start-xs {\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  text-align: start;\n}\n\n.center-xs {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.end-xs {\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  text-align: end;\n}\n\n.top-xs {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n}\n\n.middle-xs {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.bottom-xs {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n}\n\n.around-xs {\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n}\n\n.between-xs {\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.first-xs {\n  -webkit-box-ordinal-group: 0;\n  -ms-flex-order: -1;\n  order: -1;\n}\n\n.last-xs {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n}\n\n@media only screen and (min-width: 48em) {\n  .container {\n    width: 49rem;\n  }\n\n  .col-sm,\n  .col-sm-1,\n  .col-sm-2,\n  .col-sm-3,\n  .col-sm-4,\n  .col-sm-5,\n  .col-sm-6,\n  .col-sm-7,\n  .col-sm-8,\n  .col-sm-9,\n  .col-sm-10,\n  .col-sm-11,\n  .col-sm-12,\n  .col-sm-offset-0,\n  .col-sm-offset-1,\n  .col-sm-offset-2,\n  .col-sm-offset-3,\n  .col-sm-offset-4,\n  .col-sm-offset-5,\n  .col-sm-offset-6,\n  .col-sm-offset-7,\n  .col-sm-offset-8,\n  .col-sm-offset-9,\n  .col-sm-offset-10,\n  .col-sm-offset-11,\n  .col-sm-offset-12 {\n    box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .col-sm {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .col-sm-1 {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .col-sm-2 {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .col-sm-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .col-sm-4 {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .col-sm-5 {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .col-sm-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .col-sm-7 {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .col-sm-8 {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .col-sm-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .col-sm-10 {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .col-sm-11 {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .col-sm-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .col-sm-offset-0 {\n    margin-left: 0;\n  }\n\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .start-sm {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .center-sm {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .end-sm {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .top-sm {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .middle-sm {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .bottom-sm {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .around-sm {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .between-sm {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .first-sm {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .last-sm {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}\n\n@media only screen and (min-width: 64em) {\n  .container {\n    width: 65rem;\n  }\n\n  .col-md,\n  .col-md-1,\n  .col-md-2,\n  .col-md-3,\n  .col-md-4,\n  .col-md-5,\n  .col-md-6,\n  .col-md-7,\n  .col-md-8,\n  .col-md-9,\n  .col-md-10,\n  .col-md-11,\n  .col-md-12,\n  .col-md-offset-0,\n  .col-md-offset-1,\n  .col-md-offset-2,\n  .col-md-offset-3,\n  .col-md-offset-4,\n  .col-md-offset-5,\n  .col-md-offset-6,\n  .col-md-offset-7,\n  .col-md-offset-8,\n  .col-md-offset-9,\n  .col-md-offset-10,\n  .col-md-offset-11,\n  .col-md-offset-12 {\n    box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .col-md {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .col-md-1 {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .col-md-2 {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .col-md-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .col-md-4 {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .col-md-5 {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .col-md-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .col-md-7 {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .col-md-8 {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .col-md-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .col-md-10 {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .col-md-11 {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .col-md-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .col-md-offset-0 {\n    margin-left: 0;\n  }\n\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .start-md {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .center-md {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .end-md {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .top-md {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .middle-md {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .bottom-md {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .around-md {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .between-md {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .first-md {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .last-md {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}\n\n@media only screen and (min-width: 75em) {\n  .container {\n    width: 76rem;\n  }\n\n  .col-lg,\n  .col-lg-1,\n  .col-lg-2,\n  .col-lg-3,\n  .col-lg-4,\n  .col-lg-5,\n  .col-lg-6,\n  .col-lg-7,\n  .col-lg-8,\n  .col-lg-9,\n  .col-lg-10,\n  .col-lg-11,\n  .col-lg-12,\n  .col-lg-offset-0,\n  .col-lg-offset-1,\n  .col-lg-offset-2,\n  .col-lg-offset-3,\n  .col-lg-offset-4,\n  .col-lg-offset-5,\n  .col-lg-offset-6,\n  .col-lg-offset-7,\n  .col-lg-offset-8,\n  .col-lg-offset-9,\n  .col-lg-offset-10,\n  .col-lg-offset-11,\n  .col-lg-offset-12 {\n    box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .col-lg {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .col-lg-1 {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .col-lg-2 {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .col-lg-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .col-lg-4 {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .col-lg-5 {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .col-lg-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .col-lg-7 {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .col-lg-8 {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .col-lg-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .col-lg-10 {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .col-lg-11 {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .col-lg-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .col-lg-offset-0 {\n    margin-left: 0;\n  }\n\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .start-lg {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .center-lg {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .end-lg {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .top-lg {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .middle-lg {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .bottom-lg {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .around-lg {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .between-lg {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .first-lg {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .last-lg {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}", ""]);

// exports


/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumnProps = getColumnProps;
exports.default = Col;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createProps = __webpack_require__(744);

var _createProps2 = _interopRequireDefault(_createProps);

var _classNames = __webpack_require__(743);

var _classNames2 = _interopRequireDefault(_classNames);

var _types = __webpack_require__(754);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  xs: _types.ColumnSizeType,
  sm: _types.ColumnSizeType,
  md: _types.ColumnSizeType,
  lg: _types.ColumnSizeType,
  xsOffset: _propTypes2.default.number,
  smOffset: _propTypes2.default.number,
  mdOffset: _propTypes2.default.number,
  lgOffset: _propTypes2.default.number,
  first: _types.ViewportSizeType,
  last: _types.ViewportSizeType,
  className: _propTypes2.default.string,
  tagName: _propTypes2.default.string,
  children: _propTypes2.default.node
};

var classMap = {
  xs: 'col-xs',
  sm: 'col-sm',
  md: 'col-md',
  lg: 'col-lg',
  xsOffset: 'col-xs-offset',
  smOffset: 'col-sm-offset',
  mdOffset: 'col-md-offset',
  lgOffset: 'col-lg-offset'
};

function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function getColClassNames(props) {
  var extraClasses = [];

  if (props.className) {
    extraClasses.push(props.className);
  }

  if (props.first) {
    extraClasses.push((0, _classNames2.default)('first-' + props.first));
  }

  if (props.last) {
    extraClasses.push((0, _classNames2.default)('last-' + props.last));
  }

  return Object.keys(props).filter(function (key) {
    return classMap[key];
  }).map(function (key) {
    return (0, _classNames2.default)(isInteger(props[key]) ? classMap[key] + '-' + props[key] : classMap[key]);
  }).concat(extraClasses);
}

function getColumnProps(props) {
  return (0, _createProps2.default)(propTypes, props, getColClassNames(props));
}

function Col(props) {
  var tagName = props.tagName,
      columnProps = _objectWithoutProperties(props, ['tagName']);

  return _react2.default.createElement(tagName || 'div', getColumnProps(columnProps));
}

Col.propTypes = propTypes;

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Grid;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createProps = __webpack_require__(744);

var _createProps2 = _interopRequireDefault(_createProps);

var _classNames = __webpack_require__(743);

var _classNames2 = _interopRequireDefault(_classNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  fluid: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  tagName: _propTypes2.default.string,
  children: _propTypes2.default.node
};

function Grid(props) {
  var containerClass = (0, _classNames2.default)(props.fluid ? 'container-fluid' : 'container');
  var classNames = [props.className, containerClass];

  return _react2.default.createElement(props.tagName || 'div', (0, _createProps2.default)(propTypes, props, classNames));
}

Grid.propTypes = propTypes;

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRowProps = getRowProps;
exports.default = Row;

var _classNames = __webpack_require__(743);

var _classNames2 = _interopRequireDefault(_classNames);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createProps = __webpack_require__(744);

var _createProps2 = _interopRequireDefault(_createProps);

var _types = __webpack_require__(754);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rowKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between'];

var propTypes = {
  reverse: _propTypes2.default.bool,
  start: _types.ViewportSizeType,
  center: _types.ViewportSizeType,
  end: _types.ViewportSizeType,
  top: _types.ViewportSizeType,
  middle: _types.ViewportSizeType,
  bottom: _types.ViewportSizeType,
  around: _types.ViewportSizeType,
  between: _types.ViewportSizeType,
  className: _propTypes2.default.string,
  tagName: _propTypes2.default.string,
  children: _propTypes2.default.node
};

function getRowClassNames(props) {
  var modificators = [props.className, (0, _classNames2.default)('row')];

  for (var i = 0; i < rowKeys.length; ++i) {
    var key = rowKeys[i];
    var value = props[key];
    if (value) {
      modificators.push((0, _classNames2.default)(key + '-' + value));
    }
  }

  if (props.reverse) {
    modificators.push((0, _classNames2.default)('reverse'));
  }

  return modificators;
}

function getRowProps(props) {
  return (0, _createProps2.default)(propTypes, props, getRowClassNames(props));
}

function Row(props) {
  return _react2.default.createElement(props.tagName || 'div', getRowProps(props));
}

Row.propTypes = propTypes;

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(758);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(755)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./flexboxgrid.css", function() {
			var newContent = require("!!../../css-loader/index.js!./flexboxgrid.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateIngredient = exports.deleteIngredient = exports.editIngredient = exports.saveIngredient = undefined;

var _fetchResourceFromBackend = __webpack_require__(106);

var _ingredients = __webpack_require__(296);

var _defineIngredientDialogue = __webpack_require__(295);

var saveIngredient = function saveIngredient(ingredient) {
    return function (dispatch) {

        dispatch({ type: 'INGREDIENT_SAVING' });

        console.log('saving: ', ingredient);

        var options = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(ingredient) };

        (0, _fetchResourceFromBackend.fetchResourceFromBackend)('/api/ingredients', options).then(function (result) {

            console.log(result);
            dispatch({ type: 'INGREDIENT_SAVED', ingredientId: result });

            dispatch((0, _ingredients.fetchIngredients)());
        });
    };
};

var updateIngredient = function updateIngredient(ingredient, ingredientId) {
    return function (dispatch) {

        dispatch({ type: 'INGREDIENT_UPDATING' });

        console.log('updating: ', ingredient);

        var options = { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(ingredient) };

        (0, _fetchResourceFromBackend.fetchResourceFromBackend)('/api/ingredients/' + ingredientId, options).then(function (result) {

            console.log(result);

            dispatch((0, _ingredients.fetchIngredients)());
        });
    };
};

var deleteIngredient = function deleteIngredient(ingredientId) {
    return function (dispatch) {

        dispatch({ type: 'INGREDIENT_DELETING' });

        console.log('deleting', ingredientId);

        var options = { method: 'DELETE' };

        (0, _fetchResourceFromBackend.fetchResourceFromBackend)('/api/ingredients/' + ingredientId, options).then(function (result) {

            console.log(result);
            dispatch({ type: 'INGREDIENT_DELETED', ingredientId: ingredientId });

            dispatch((0, _ingredients.fetchIngredients)());
        });
    };
};

var editIngredient = function editIngredient(ingredientId) {
    return function (dispatch) {

        console.log('fetching', ingredientId);

        (0, _fetchResourceFromBackend.fetchResourceFromBackend)('/api/ingredients/' + ingredientId).then(function (result) {

            console.log(result);
            dispatch((0, _defineIngredientDialogue.openDialogue)(result, ingredientId));
            /*dispatch({type: 'INGREDIENT_DELETED', ingredientId: ingredientId});
              dispatch(fetchIngredients());*/
        });
    };
};

exports.saveIngredient = saveIngredient;
exports.editIngredient = editIngredient;
exports.deleteIngredient = deleteIngredient;
exports.updateIngredient = updateIngredient;

/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Admin = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FloatingActionButton = __webpack_require__(800);

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _Dialog = __webpack_require__(793);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = __webpack_require__(798);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _add = __webpack_require__(806);

var _add2 = _interopRequireDefault(_add);

var _NutrientForm = __webpack_require__(772);

var _IngredientsListContainer = __webpack_require__(768);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var buttonOuterStyle = {
    position: 'absolute',
    bottom: '-30px',
    right: '50px',
    zIndex: 100
};

var Admin = function (_React$Component) {
    _inherits(Admin, _React$Component);

    function Admin() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Admin);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Admin.__proto__ || Object.getPrototypeOf(Admin)).call.apply(_ref, [this].concat(args))), _this), _this.handleSaveSubmit = function (values) {
            _this.props.saveIngredient(values, _this.props.editId);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Admin, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                openDialogue = _props.openDialogue,
                closeDialogue = _props.closeDialogue,
                saveDialogue = _props.saveDialogue,
                open = _props.open,
                initialValues = _props.initialValues;


            var actions = [_react2.default.createElement(_FlatButton2.default, {
                label: 'Save ingredient',
                primary: true,
                keyboardFocused: true,
                onTouchTap: saveDialogue
            }), _react2.default.createElement(_FlatButton2.default, {
                label: 'Cancel',
                primary: true,
                onTouchTap: closeDialogue
            })];

            return _react2.default.createElement(
                'div',
                { style: { padding: '10px' } },
                _react2.default.createElement(
                    _Dialog2.default,
                    {
                        title: 'Define ingredient',
                        actions: actions,
                        modal: false,
                        open: open,
                        onRequestClose: closeDialogue,
                        autoScrollBodyContent: true
                    },
                    _react2.default.createElement(_NutrientForm.NutrientForm, { onSubmit: this.handleSaveSubmit, initialValues: initialValues })
                ),
                _react2.default.createElement(
                    'div',
                    { style: { position: 'relative' } },
                    _react2.default.createElement(_IngredientsListContainer.IngredientsListContainer, null),
                    _react2.default.createElement(
                        _FloatingActionButton2.default,
                        { onTouchTap: openDialogue, style: buttonOuterStyle, zDepth: 3 },
                        _react2.default.createElement(_add2.default, null)
                    )
                )
            );
        }
    }]);

    return Admin;
}(_react2.default.Component);

Admin.propTypes = {
    openDialogue: _propTypes2.default.func.isRequired,
    closeDialogue: _propTypes2.default.func.isRequired,
    saveDialogue: _propTypes2.default.func.isRequired,
    saveIngredient: _propTypes2.default.func.isRequired,
    editId: _propTypes2.default.string, // only available when Dialogue is open for editing existing nutrient
    open: _propTypes2.default.bool,
    // TODO: define all ingredients
    initialValues: _propTypes2.default.object
};

exports.Admin = Admin;

/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IngredientsList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _List = __webpack_require__(801);

var _inbox = __webpack_require__(807);

var _inbox2 = _interopRequireDefault(_inbox);

var _Paper = __webpack_require__(104);

var _Paper2 = _interopRequireDefault(_Paper);

var _RightIconMenu = __webpack_require__(774);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import Subheader from 'material-ui/Subheader';*/
/*import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';*/

var IngredientsList = function (_React$Component) {
    _inherits(IngredientsList, _React$Component);

    function IngredientsList() {
        _classCallCheck(this, IngredientsList);

        return _possibleConstructorReturn(this, (IngredientsList.__proto__ || Object.getPrototypeOf(IngredientsList)).apply(this, arguments));
    }

    _createClass(IngredientsList, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                _props$ingredients = _props.ingredients,
                ingredients = _props$ingredients === undefined ? {} : _props$ingredients,
                deleteIngredient = _props.deleteIngredient,
                editIngredient = _props.editIngredient;


            return _react2.default.createElement(
                _Paper2.default,
                { zDepth: 2, style: { border: '1px solid black' } },
                _react2.default.createElement(
                    'h3',
                    { style: { textAlign: 'left', padding: '15px 0px 15px 20px', margin: 0 } },
                    'Available ingredients'
                ),
                _react2.default.createElement(
                    _List.List,
                    { style: { border: '1px solid black', marginTop: '0px', height: '400px', overflowY: 'auto' } },
                    Object.keys(ingredients).map(function (key) {

                        {/*RightIconMenu(deleteIngredient, key)*/}
                        return _react2.default.createElement(_List.ListItem, {
                            key: key,
                            primaryText: ingredients[key],
                            leftIcon: _react2.default.createElement(_inbox2.default, null),
                            rightIconButton: _react2.default.createElement(_RightIconMenu.RightIconMenu, {
                                deleteIngredient: deleteIngredient,
                                editIngredient: editIngredient,
                                elementKey: key }) });
                    }).reverse()
                )
            );
        }
    }]);

    return IngredientsList;
}(_react2.default.Component);

IngredientsList.propTypes = {
    ingredients: _propTypes2.default.object,
    deleteIngredient: _propTypes2.default.func.isRequired,
    editIngredient: _propTypes2.default.func.isRequired
};

exports.IngredientsList = IngredientsList;

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IngredientsListContainer = undefined;

var _reactRedux = __webpack_require__(33);

var _IngredientsList = __webpack_require__(767);

var _ingredientsAdmin = __webpack_require__(765);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        deleteIngredient: function deleteIngredient(id) {
            dispatch((0, _ingredientsAdmin.deleteIngredient)(id));
        },
        editIngredient: function editIngredient(id) {
            dispatch((0, _ingredientsAdmin.editIngredient)(id));
        }
    };
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        ingredients: state.ingredients.ingredients
    };
};

var IngredientsListContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_IngredientsList.IngredientsList);

exports.IngredientsListContainer = IngredientsListContainer;

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CarbohidratesComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactFlexboxGrid = __webpack_require__(745);

var _FieldComponent = __webpack_require__(756);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CarbohidratesComponent = function (_React$Component) {
    _inherits(CarbohidratesComponent, _React$Component);

    function CarbohidratesComponent() {
        _classCallCheck(this, CarbohidratesComponent);

        return _possibleConstructorReturn(this, (CarbohidratesComponent.__proto__ || Object.getPrototypeOf(CarbohidratesComponent)).apply(this, arguments));
    }

    _createClass(CarbohidratesComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactFlexboxGrid.Row,
                null,
                _react2.default.createElement(
                    _reactFlexboxGrid.Col,
                    { xs: 3 },
                    _react2.default.createElement(_FieldComponent.FieldComponent, {
                        controlId: 'Carbohidrates',
                        type: 'number',
                        label: 'Carbohidrates',
                        placeholder: 'Enter text' })
                ),
                _react2.default.createElement(
                    _reactFlexboxGrid.Col,
                    { xs: 9 },
                    _react2.default.createElement(
                        _reactFlexboxGrid.Row,
                        null,
                        _react2.default.createElement(
                            _reactFlexboxGrid.Col,
                            { xs: 4 },
                            _react2.default.createElement(_FieldComponent.FieldComponent, {
                                controlId: 'Fiber',
                                type: 'number',
                                label: 'Fiber',
                                placeholder: 'Enter text' })
                        ),
                        _react2.default.createElement(
                            _reactFlexboxGrid.Col,
                            { xs: 4 },
                            _react2.default.createElement(_FieldComponent.FieldComponent, {
                                controlId: 'Sugar',
                                type: 'number',
                                label: 'Sugar',
                                placeholder: 'Enter text' })
                        )
                    )
                )
            );
        }
    }]);

    return CarbohidratesComponent;
}(_react2.default.Component);

exports.CarbohidratesComponent = CarbohidratesComponent;

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FatsComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactFlexboxGrid = __webpack_require__(745);

var _FieldComponent = __webpack_require__(756);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FatsComponent = function (_React$Component) {
    _inherits(FatsComponent, _React$Component);

    function FatsComponent() {
        _classCallCheck(this, FatsComponent);

        return _possibleConstructorReturn(this, (FatsComponent.__proto__ || Object.getPrototypeOf(FatsComponent)).apply(this, arguments));
    }

    _createClass(FatsComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactFlexboxGrid.Row,
                null,
                _react2.default.createElement(
                    _reactFlexboxGrid.Col,
                    { xs: 3 },
                    _react2.default.createElement(_FieldComponent.FieldComponent, {
                        controlId: 'Fats',
                        type: 'number',
                        label: 'Fats',
                        placeholder: 'Enter text' })
                ),
                _react2.default.createElement(
                    _reactFlexboxGrid.Col,
                    { xs: 9 },
                    _react2.default.createElement(
                        _reactFlexboxGrid.Row,
                        null,
                        _react2.default.createElement(
                            _reactFlexboxGrid.Col,
                            { xs: 4 },
                            _react2.default.createElement(_FieldComponent.FieldComponent, {
                                controlId: 'Sat',
                                type: 'number',
                                label: 'Sat',
                                placeholder: 'Enter text' })
                        ),
                        _react2.default.createElement(
                            _reactFlexboxGrid.Col,
                            { xs: 4 },
                            _react2.default.createElement(_FieldComponent.FieldComponent, {
                                controlId: 'Polyuns',
                                type: 'number',
                                label: 'Polyuns',
                                placeholder: 'Enter text' })
                        ),
                        _react2.default.createElement(
                            _reactFlexboxGrid.Col,
                            { xs: 4 },
                            _react2.default.createElement(_FieldComponent.FieldComponent, {
                                controlId: 'Monouns',
                                type: 'number',
                                label: 'Monouns',
                                placeholder: 'Enter text' })
                        )
                    )
                )
            );
        }
    }]);

    return FatsComponent;
}(_react2.default.Component);

exports.FatsComponent = FatsComponent;

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormControlWrapperContainer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(33);

var _TextField = __webpack_require__(742);

var _TextField2 = _interopRequireDefault(_TextField);

var _AutoComplete = __webpack_require__(791);

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormControlWrapper = function (_React$Component) {
    _inherits(FormControlWrapper, _React$Component);

    function FormControlWrapper() {
        _classCallCheck(this, FormControlWrapper);

        return _possibleConstructorReturn(this, (FormControlWrapper.__proto__ || Object.getPrototypeOf(FormControlWrapper)).apply(this, arguments));
    }

    _createClass(FormControlWrapper, [{
        key: 'render',
        value: function render() {

            // catching placeholder not to forward it to TextField
            var _props = this.props,
                label = _props.label,
                placeholder = _props.placeholder,
                input = _props.input,
                meta = _props.meta,
                dataSource = _props.dataSource,
                props = _objectWithoutProperties(_props, ['label', 'placeholder', 'input', 'meta', 'dataSource']);

            return _react2.default.createElement(
                'div',
                null,
                input.name.match(/name$/) ? _react2.default.createElement(_AutoComplete2.default, _extends({
                    floatingLabelText: label,
                    fullWidth: true,
                    dataSource: Object.values(dataSource),
                    searchText: meta.visited === false ? input.value : undefined
                }, input, props)) : _react2.default.createElement(_TextField2.default, _extends({
                    floatingLabelText: label,
                    fullWidth: true
                }, input, props))
            );
        }
    }]);

    return FormControlWrapper;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {};
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        dataSource: state.ingredients.ingredients
    };
};

var FormControlWrapperContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(FormControlWrapper);

exports.FormControlWrapperContainer = FormControlWrapperContainer;

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NutrientForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(33);

var _reduxForm = __webpack_require__(292);

var _RaisedButton = __webpack_require__(748);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FieldComponent = __webpack_require__(756);

var _ProteinsComponent = __webpack_require__(773);

var _FatsComponent = __webpack_require__(770);

var _CarbohidratesComponent = __webpack_require__(769);

var _reactFlexboxGrid = __webpack_require__(745);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/*import {DebounceFieldComponent} from './DebounceFieldComponent';*/


var NutrientForm = function (_React$Component) {
    _inherits(NutrientForm, _React$Component);

    function NutrientForm() {
        _classCallCheck(this, NutrientForm);

        return _possibleConstructorReturn(this, (NutrientForm.__proto__ || Object.getPrototypeOf(NutrientForm)).apply(this, arguments));
    }

    _createClass(NutrientForm, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'form',
                { onSubmit: this.props.handleSubmit },
                _react2.default.createElement(
                    _reactFlexboxGrid.Grid,
                    { fluid: true, style: { padding: '0px' } },
                    _react2.default.createElement(
                        _reactFlexboxGrid.Row,
                        null,
                        _react2.default.createElement(
                            _reactFlexboxGrid.Col,
                            { xs: 12, offset: 0 },
                            _react2.default.createElement(_FieldComponent.FieldComponent, {
                                controlId: 'name',
                                type: 'text',
                                label: 'Nutrient name',
                                placeholder: 'Enter text' })
                        )
                    ),
                    _react2.default.createElement(_ProteinsComponent.ProteinsComponent, null),
                    _react2.default.createElement(_FatsComponent.FatsComponent, null),
                    _react2.default.createElement(_CarbohidratesComponent.CarbohidratesComponent, null),
                    _react2.default.createElement(
                        _reactFlexboxGrid.Row,
                        null,
                        _react2.default.createElement(
                            _reactFlexboxGrid.Col,
                            { xs: 12, offset: 0 },
                            _react2.default.createElement(_FieldComponent.FieldComponent, {
                                controlId: 'Source',
                                type: 'text',
                                label: 'Source link',
                                placeholder: 'Enter text' })
                        )
                    )
                )
            );
        }
    }]);

    return NutrientForm;
}(_react2.default.Component);

var NutrientFormReduxWrapper = (0, _reduxForm.reduxForm)({
    form: 'manageNutrients',
    destroyOnUnmount: true
})(NutrientForm);

/*NutrientFormReduxWrapper = connect(
    state => ({

        initialValues: {
            name: 'rafa',
            AA1: 21
        }
    })
)(NutrientFormReduxWrapper);*/

exports.NutrientForm = NutrientFormReduxWrapper;

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProteinsComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactFlexboxGrid = __webpack_require__(745);

var _FieldComponent = __webpack_require__(756);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProteinsComponent = function (_React$Component) {
    _inherits(ProteinsComponent, _React$Component);

    function ProteinsComponent() {
        _classCallCheck(this, ProteinsComponent);

        return _possibleConstructorReturn(this, (ProteinsComponent.__proto__ || Object.getPrototypeOf(ProteinsComponent)).apply(this, arguments));
    }

    _createClass(ProteinsComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactFlexboxGrid.Row,
                null,
                _react2.default.createElement(
                    _reactFlexboxGrid.Col,
                    { xs: 3 },
                    _react2.default.createElement(_FieldComponent.FieldComponent, {
                        controlId: 'Proteins',
                        type: 'number',
                        label: 'Proteins',
                        placeholder: 'Enter text' })
                ),
                _react2.default.createElement(
                    _reactFlexboxGrid.Col,
                    { xs: 9 },
                    _react2.default.createElement(
                        _reactFlexboxGrid.Row,
                        null,
                        _react2.default.createElement(
                            _reactFlexboxGrid.Col,
                            { xs: 4 },
                            _react2.default.createElement(_FieldComponent.FieldComponent, {
                                controlId: 'AA1',
                                type: 'number',
                                label: 'AA1',
                                placeholder: 'Enter text' }),
                            _react2.default.createElement(_FieldComponent.FieldComponent, {
                                controlId: 'AA4',
                                type: 'number',
                                label: 'AA4',
                                placeholder: 'Enter text' }),
                            _react2.default.createElement(_FieldComponent.FieldComponent, {
                                controlId: 'AA7',
                                type: 'number',
                                label: 'AA7',
                                placeholder: 'Enter text' })
                        ),
                        _react2.default.createElement(
                            _reactFlexboxGrid.Col,
                            { xs: 4 },
                            _react2.default.createElement(_FieldComponent.FieldComponent, {
                                controlId: 'AA2',
                                type: 'number',
                                label: 'AA2',
                                placeholder: 'Enter text' }),
                            _react2.default.createElement(_FieldComponent.FieldComponent, {
                                controlId: 'AA5',
                                type: 'number',
                                label: 'AA5',
                                placeholder: 'Enter text' }),
                            _react2.default.createElement(_FieldComponent.FieldComponent, {
                                controlId: 'AA8',
                                type: 'number',
                                label: 'AA8',
                                placeholder: 'Enter text' })
                        ),
                        _react2.default.createElement(
                            _reactFlexboxGrid.Col,
                            { xs: 4 },
                            _react2.default.createElement(_FieldComponent.FieldComponent, {
                                controlId: 'AA3',
                                type: 'number',
                                label: 'AA3',
                                placeholder: 'Enter text' }),
                            _react2.default.createElement(_FieldComponent.FieldComponent, {
                                controlId: 'AA6',
                                type: 'number',
                                label: 'AA6',
                                placeholder: 'Enter text' }),
                            _react2.default.createElement(_FieldComponent.FieldComponent, {
                                controlId: 'AA9',
                                type: 'number',
                                label: 'AA9',
                                placeholder: 'Enter text' })
                        )
                    )
                )
            );
        }
    }]);

    return ProteinsComponent;
}(_react2.default.Component);

exports.ProteinsComponent = ProteinsComponent;

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RightIconMenu = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = __webpack_require__(108);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _moreVert = __webpack_require__(808);

var _moreVert2 = _interopRequireDefault(_moreVert);

var _IconMenu = __webpack_require__(300);

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = __webpack_require__(294);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _colors = __webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var iconButtonElement = _react2.default.createElement(
    _IconButton2.default,
    {
        touch: true,
        tooltip: 'more',
        tooltipPosition: 'bottom-left'
    },
    _react2.default.createElement(_moreVert2.default, { color: _colors.darkBlack })
);

var RightIconMenu = function (_React$Component) {
    _inherits(RightIconMenu, _React$Component);

    function RightIconMenu() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, RightIconMenu);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RightIconMenu.__proto__ || Object.getPrototypeOf(RightIconMenu)).call.apply(_ref, [this].concat(args))), _this), _this.editHandler = function () {
            _this.props.editIngredient(_this.props.elementKey);
        }, _this.deleteHandler = function () {
            _this.props.deleteIngredient(_this.props.elementKey);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(RightIconMenu, [{
        key: 'render',
        value: function render() {

            // need to catch some properties, not to pass them further
            var _props = this.props,
                elementKey = _props.elementKey,
                deleteIngredient = _props.deleteIngredient,
                editIngredient = _props.editIngredient,
                props = _objectWithoutProperties(_props, ['elementKey', 'deleteIngredient', 'editIngredient']);

            return _react2.default.createElement(
                _IconMenu2.default,
                _extends({}, props, { iconButtonElement: iconButtonElement }),
                _react2.default.createElement(
                    _MenuItem2.default,
                    { onTouchTap: this.editHandler },
                    'Edit'
                ),
                _react2.default.createElement(
                    _MenuItem2.default,
                    { onTouchTap: this.deleteHandler },
                    'Delete'
                )
            );
        }
    }]);

    return RightIconMenu;
}(_react2.default.Component);

/*const RightIconMenu = (deleteIngredient, elementKey) => {
    return (
        <IconMenu iconButtonElement={iconButtonElement} onItemTouchTap={() => {deleteIngredient(elementKey);}}>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Delete</MenuItem>
        </IconMenu>
    );  
};*/

RightIconMenu.propTypes = {
    // TODO: check for other properties
    editIngredient: _propTypes2.default.func.isRequired,
    deleteIngredient: _propTypes2.default.func.isRequired,
    elementKey: _propTypes2.default.string.isRequired
};

exports.RightIconMenu = RightIconMenu;

/***/ }),

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(17);

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = __webpack_require__(107);

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _keycode = __webpack_require__(179);

var _keycode2 = _interopRequireDefault(_keycode);

var _TextField = __webpack_require__(742);

var _TextField2 = _interopRequireDefault(_TextField);

var _Menu = __webpack_require__(803);

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = __webpack_require__(294);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Divider = __webpack_require__(795);

var _Divider2 = _interopRequireDefault(_Divider);

var _Popover = __webpack_require__(183);

var _Popover2 = _interopRequireDefault(_Popover);

var _propTypes3 = __webpack_require__(34);

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var anchorEl = state.anchorEl;
  var fullWidth = props.fullWidth;


  var styles = {
    root: {
      display: 'inline-block',
      position: 'relative',
      width: fullWidth ? '100%' : 256
    },
    menu: {
      width: '100%'
    },
    list: {
      display: 'block',
      width: fullWidth ? '100%' : 256
    },
    innerDiv: {
      overflow: 'hidden'
    }
  };

  if (anchorEl && fullWidth) {
    styles.popover = {
      width: anchorEl.clientWidth
    };
  }

  return styles;
}

var AutoComplete = function (_Component) {
  (0, _inherits3.default)(AutoComplete, _Component);

  function AutoComplete() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AutoComplete);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AutoComplete.__proto__ || (0, _getPrototypeOf2.default)(AutoComplete)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      anchorEl: null,
      focusTextField: true,
      open: false,
      searchText: undefined
    }, _this.handleRequestClose = function () {
      // Only take into account the Popover clickAway when we are
      // not focusing the TextField.
      if (!_this.state.focusTextField) {
        _this.close();
      }
    }, _this.handleMouseDown = function (event) {
      // Keep the TextField focused
      event.preventDefault();
    }, _this.handleItemTouchTap = function (event, child) {
      var dataSource = _this.props.dataSource;
      var index = parseInt(child.key, 10);
      var chosenRequest = dataSource[index];
      var searchText = _this.chosenRequestText(chosenRequest);

      var updateInput = function updateInput() {
        return _this.props.onUpdateInput(searchText, _this.props.dataSource, {
          source: 'touchTap'
        });
      };
      _this.timerTouchTapCloseId = function () {
        return setTimeout(function () {
          _this.timerTouchTapCloseId = null;
          _this.close();
          _this.props.onNewRequest(chosenRequest, index);
        }, _this.props.menuCloseDelay);
      };

      if (typeof _this.props.searchText !== 'undefined') {
        updateInput();
        _this.timerTouchTapCloseId();
      } else {
        _this.setState({
          searchText: searchText
        }, function () {
          updateInput();
          _this.timerTouchTapCloseId();
        });
      }
    }, _this.chosenRequestText = function (chosenRequest) {
      if (typeof chosenRequest === 'string') {
        return chosenRequest;
      } else {
        return chosenRequest[_this.props.dataSourceConfig.text];
      }
    }, _this.handleEscKeyDown = function () {
      _this.close();
    }, _this.handleKeyDown = function (event) {
      if (_this.props.onKeyDown) _this.props.onKeyDown(event);

      switch ((0, _keycode2.default)(event)) {
        case 'enter':
          _this.close();
          var searchText = _this.state.searchText;
          if (searchText !== '') {
            _this.props.onNewRequest(searchText, -1);
          }
          break;

        case 'esc':
          _this.close();
          break;

        case 'down':
          event.preventDefault();
          _this.setState({
            open: true,
            focusTextField: false,
            anchorEl: _reactDom2.default.findDOMNode(_this.refs.searchTextField)
          });
          break;

        default:
          break;
      }
    }, _this.handleChange = function (event) {
      var searchText = event.target.value;

      // Make sure that we have a new searchText.
      // Fix an issue with a Cordova Webview
      if (searchText === _this.state.searchText) {
        return;
      }

      _this.setState({
        searchText: searchText,
        open: true,
        anchorEl: _reactDom2.default.findDOMNode(_this.refs.searchTextField)
      }, function () {
        _this.props.onUpdateInput(searchText, _this.props.dataSource, {
          source: 'change'
        });
      });
    }, _this.handleBlur = function (event) {
      if (_this.state.focusTextField && _this.timerTouchTapCloseId === null) {
        _this.timerBlurClose = setTimeout(function () {
          _this.close();
        }, 0);
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleFocus = function (event) {
      if (!_this.state.open && _this.props.openOnFocus) {
        _this.setState({
          open: true,
          anchorEl: _reactDom2.default.findDOMNode(_this.refs.searchTextField)
        });
      }

      _this.setState({
        focusTextField: true
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AutoComplete, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.requestsList = [];
      this.setState({
        open: this.props.open,
        searchText: this.props.searchText || ''
      });
      this.timerTouchTapCloseId = null;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.searchText !== nextProps.searchText) {
        this.setState({
          searchText: nextProps.searchText
        });
      }
      if (this.props.open !== nextProps.open) {
        this.setState({
          open: nextProps.open,
          anchorEl: _reactDom2.default.findDOMNode(this.refs.searchTextField)
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timerTouchTapCloseId);
      clearTimeout(this.timerBlurClose);
    }
  }, {
    key: 'close',
    value: function close() {
      this.setState({
        open: false,
        anchorEl: null
      });

      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.refs.searchTextField.blur();
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.refs.searchTextField.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          anchorOrigin = _props.anchorOrigin,
          animated = _props.animated,
          animation = _props.animation,
          dataSource = _props.dataSource,
          dataSourceConfig = _props.dataSourceConfig,
          disableFocusRipple = _props.disableFocusRipple,
          errorStyle = _props.errorStyle,
          floatingLabelText = _props.floatingLabelText,
          filter = _props.filter,
          fullWidth = _props.fullWidth,
          style = _props.style,
          hintText = _props.hintText,
          maxSearchResults = _props.maxSearchResults,
          menuCloseDelay = _props.menuCloseDelay,
          textFieldStyle = _props.textFieldStyle,
          menuStyle = _props.menuStyle,
          menuProps = _props.menuProps,
          listStyle = _props.listStyle,
          targetOrigin = _props.targetOrigin,
          onBlur = _props.onBlur,
          onClose = _props.onClose,
          onFocus = _props.onFocus,
          onKeyDown = _props.onKeyDown,
          onNewRequest = _props.onNewRequest,
          onUpdateInput = _props.onUpdateInput,
          openOnFocus = _props.openOnFocus,
          popoverProps = _props.popoverProps,
          searchTextProp = _props.searchText,
          other = (0, _objectWithoutProperties3.default)(_props, ['anchorOrigin', 'animated', 'animation', 'dataSource', 'dataSourceConfig', 'disableFocusRipple', 'errorStyle', 'floatingLabelText', 'filter', 'fullWidth', 'style', 'hintText', 'maxSearchResults', 'menuCloseDelay', 'textFieldStyle', 'menuStyle', 'menuProps', 'listStyle', 'targetOrigin', 'onBlur', 'onClose', 'onFocus', 'onKeyDown', 'onNewRequest', 'onUpdateInput', 'openOnFocus', 'popoverProps', 'searchText']);

      var _ref2 = popoverProps || {},
          popoverStyle = _ref2.style,
          popoverOther = (0, _objectWithoutProperties3.default)(_ref2, ['style']);

      var _state = this.state,
          open = _state.open,
          anchorEl = _state.anchorEl,
          searchText = _state.searchText,
          focusTextField = _state.focusTextField;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context, this.state);

      var requestsList = [];

      dataSource.every(function (item, index) {
        switch (typeof item === 'undefined' ? 'undefined' : (0, _typeof3.default)(item)) {
          case 'string':
            if (filter(searchText, item, item)) {
              requestsList.push({
                text: item,
                value: _react2.default.createElement(_MenuItem2.default, {
                  innerDivStyle: styles.innerDiv,
                  value: item,
                  primaryText: item,
                  disableFocusRipple: disableFocusRipple,
                  key: index
                })
              });
            }
            break;

          case 'object':
            if (item && typeof item[_this2.props.dataSourceConfig.text] === 'string') {
              var itemText = item[_this2.props.dataSourceConfig.text];
              if (!_this2.props.filter(searchText, itemText, item)) break;

              var itemValue = item[_this2.props.dataSourceConfig.value];
              if (itemValue.type && (itemValue.type.muiName === _MenuItem2.default.muiName || itemValue.type.muiName === _Divider2.default.muiName)) {
                requestsList.push({
                  text: itemText,
                  value: _react2.default.cloneElement(itemValue, {
                    key: index,
                    disableFocusRipple: disableFocusRipple
                  })
                });
              } else {
                requestsList.push({
                  text: itemText,
                  value: _react2.default.createElement(_MenuItem2.default, {
                    innerDivStyle: styles.innerDiv,
                    primaryText: itemText,
                    disableFocusRipple: disableFocusRipple,
                    key: index
                  })
                });
              }
            }
            break;

          default:
          // Do nothing
        }

        return !(maxSearchResults && maxSearchResults > 0 && requestsList.length === maxSearchResults);
      });

      this.requestsList = requestsList;

      var menu = open && requestsList.length > 0 && _react2.default.createElement(
        _Menu2.default,
        (0, _extends3.default)({
          ref: 'menu',
          autoWidth: false,
          disableAutoFocus: focusTextField,
          onEscKeyDown: this.handleEscKeyDown,
          initiallyKeyboardFocused: true,
          onItemTouchTap: this.handleItemTouchTap,
          onMouseDown: this.handleMouseDown,
          style: (0, _simpleAssign2.default)(styles.menu, menuStyle),
          listStyle: (0, _simpleAssign2.default)(styles.list, listStyle)
        }, menuProps),
        requestsList.map(function (i) {
          return i.value;
        })
      );

      return _react2.default.createElement(
        'div',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
        _react2.default.createElement(_TextField2.default, (0, _extends3.default)({
          ref: 'searchTextField',
          autoComplete: 'off',
          onBlur: this.handleBlur,
          onFocus: this.handleFocus,
          onKeyDown: this.handleKeyDown,
          floatingLabelText: floatingLabelText,
          hintText: hintText,
          fullWidth: fullWidth,
          multiLine: false,
          errorStyle: errorStyle,
          style: textFieldStyle
        }, other, {
          // value and onChange are idiomatic properties often leaked.
          // We prevent their overrides in order to reduce potential bugs.
          value: searchText,
          onChange: this.handleChange
        })),
        _react2.default.createElement(
          _Popover2.default,
          (0, _extends3.default)({
            style: (0, _simpleAssign2.default)({}, styles.popover, popoverStyle),
            canAutoPosition: false,
            anchorOrigin: anchorOrigin,
            targetOrigin: targetOrigin,
            open: open,
            anchorEl: anchorEl,
            useLayerForClickAway: false,
            onRequestClose: this.handleRequestClose,
            animated: animated,
            animation: animation
          }, popoverOther),
          menu
        )
      );
    }
  }]);
  return AutoComplete;
}(_react.Component);

AutoComplete.defaultProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  animated: true,
  dataSourceConfig: {
    text: 'text',
    value: 'value'
  },
  disableFocusRipple: true,
  filter: function filter(searchText, key) {
    return searchText !== '' && key.indexOf(searchText) !== -1;
  },
  fullWidth: false,
  open: false,
  openOnFocus: false,
  onUpdateInput: function onUpdateInput() {},
  onNewRequest: function onNewRequest() {},
  menuCloseDelay: 300,
  targetOrigin: {
    vertical: 'top',
    horizontal: 'left'
  }
};
AutoComplete.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
AutoComplete.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Location of the anchor for the auto complete.
   */
  anchorOrigin: _propTypes4.default.origin,
  /**
   * If true, the auto complete is animated as it is toggled.
   */
  animated: _propTypes2.default.bool,
  /**
   * Override the default animation component used.
   */
  animation: _propTypes2.default.func,
  /**
   * Array of strings or nodes used to populate the list.
   */
  dataSource: _propTypes2.default.array.isRequired,
  /**
   * Config for objects list dataSource.
   *
   * @typedef {Object} dataSourceConfig
   *
   * @property {string} text `dataSource` element key used to find a string to be matched for search
   * and shown as a `TextField` input value after choosing the result.
   * @property {string} value `dataSource` element key used to find a string to be shown in search results.
   */
  dataSourceConfig: _propTypes2.default.object,
  /**
   * Disables focus ripple when true.
   */
  disableFocusRipple: _propTypes2.default.bool,
  /**
   * Override style prop for error.
   */
  errorStyle: _propTypes2.default.object,
  /**
   * The error content to display.
   */
  errorText: _propTypes2.default.node,
  /**
   * Callback function used to filter the auto complete.
   *
   * @param {string} searchText The text to search for within `dataSource`.
   * @param {string} key `dataSource` element, or `text` property on that element if it's not a string.
   * @returns {boolean} `true` indicates the auto complete list will include `key` when the input is `searchText`.
   */
  filter: _propTypes2.default.func,
  /**
   * The content to use for adding floating label element.
   */
  floatingLabelText: _propTypes2.default.node,
  /**
   * If true, the field receives the property `width: 100%`.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * The hint content to display.
   */
  hintText: _propTypes2.default.node,
  /**
   * Override style for list.
   */
  listStyle: _propTypes2.default.object,
  /**
   * The max number of search results to be shown.
   * By default it shows all the items which matches filter.
   */
  maxSearchResults: _propTypes2.default.number,
  /**
   * Delay for closing time of the menu.
   */
  menuCloseDelay: _propTypes2.default.number,
  /**
   * Props to be passed to menu.
   */
  menuProps: _propTypes2.default.object,
  /**
   * Override style for menu.
   */
  menuStyle: _propTypes2.default.object,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function fired when the menu is closed.
   */
  onClose: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /** @ignore */
  onKeyDown: _propTypes2.default.func,
  /**
   * Callback function that is fired when a list item is selected, or enter is pressed in the `TextField`.
   *
   * @param {string} chosenRequest Either the `TextField` input value, if enter is pressed in the `TextField`,
   * or the text value of the corresponding list item that was selected.
   * @param {number} index The index in `dataSource` of the list item selected, or `-1` if enter is pressed in the
   * `TextField`.
   */
  onNewRequest: _propTypes2.default.func,
  /**
   * Callback function that is fired when the user updates the `TextField`.
   *
   * @param {string} searchText The auto-complete's `searchText` value.
   * @param {array} dataSource The auto-complete's `dataSource` array.
   * @param {object} params Additional information linked the update.
   */
  onUpdateInput: _propTypes2.default.func,
  /**
   * Auto complete menu is open if true.
   */
  open: _propTypes2.default.bool,
  /**
   * If true, the list item is showed when a focus event triggers.
   */
  openOnFocus: _propTypes2.default.bool,
  /**
   * Props to be passed to popover.
   */
  popoverProps: _propTypes2.default.object,
  /**
   * Text being input to auto complete.
   */
  searchText: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Origin for location of target.
   */
  targetOrigin: _propTypes4.default.origin,
  /**
   * Override the inline-styles of AutoComplete's TextField element.
   */
  textFieldStyle: _propTypes2.default.object
} : {};


AutoComplete.levenshteinDistance = function (searchText, key) {
  var current = [];
  var prev = void 0;
  var value = void 0;

  for (var i = 0; i <= key.length; i++) {
    for (var j = 0; j <= searchText.length; j++) {
      if (i && j) {
        if (searchText.charAt(j - 1) === key.charAt(i - 1)) value = prev;else value = Math.min(current[j], current[j - 1], prev) + 1;
      } else {
        value = i + j;
      }
      prev = current[j];
      current[j] = value;
    }
  }
  return current.pop();
};

AutoComplete.noFilter = function () {
  return true;
};

AutoComplete.defaultFilter = AutoComplete.caseSensitiveFilter = function (searchText, key) {
  return searchText !== '' && key.indexOf(searchText) !== -1;
};

AutoComplete.caseInsensitiveFilter = function (searchText, key) {
  return key.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
};

AutoComplete.levenshteinDistanceFilter = function (distanceLessThan) {
  if (distanceLessThan === undefined) {
    return AutoComplete.levenshteinDistance;
  } else if (typeof distanceLessThan !== 'number') {
    throw 'Error: AutoComplete.levenshteinDistanceFilter is a filter generator, not a filter!';
  }

  return function (s, k) {
    return AutoComplete.levenshteinDistance(s, k) < distanceLessThan;
  };
};

AutoComplete.fuzzyFilter = function (searchText, key) {
  var compareString = key.toLowerCase();
  searchText = searchText.toLowerCase();

  var searchTextIndex = 0;
  for (var index = 0; index < key.length; index++) {
    if (compareString[index] === searchText[searchTextIndex]) {
      searchTextIndex += 1;
    }
  }

  return searchTextIndex === searchText.length;
};

AutoComplete.Item = _MenuItem2.default;
AutoComplete.Divider = _Divider2.default;

exports.default = AutoComplete;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 791:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _AutoComplete = __webpack_require__(790);

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AutoComplete2.default;

/***/ }),

/***/ 792:
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

var _reactEventListener = __webpack_require__(293);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _keycode = __webpack_require__(179);

var _keycode2 = _interopRequireDefault(_keycode);

var _transitions = __webpack_require__(25);

var _transitions2 = _interopRequireDefault(_transitions);

var _Overlay = __webpack_require__(805);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _RenderToLayer = __webpack_require__(302);

var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);

var _Paper = __webpack_require__(104);

var _Paper2 = _interopRequireDefault(_Paper);

var _TransitionGroup = __webpack_require__(184);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TransitionItem = function (_Component) {
  (0, _inherits3.default)(TransitionItem, _Component);

  function TransitionItem() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TransitionItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TransitionItem.__proto__ || (0, _getPrototypeOf2.default)(TransitionItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      style: {}
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TransitionItem, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.enterTimeout);
      clearTimeout(this.leaveTimeout);
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(callback) {
      this.componentWillAppear(callback);
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(callback) {
      var spacing = this.context.muiTheme.baseTheme.spacing;

      this.setState({
        style: {
          opacity: 1,
          transform: 'translate(0, ' + spacing.desktopKeylineIncrement + 'px)'
        }
      });

      this.enterTimeout = setTimeout(callback, 450); // matches transition duration
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(callback) {
      this.setState({
        style: {
          opacity: 0,
          transform: 'translate(0, 0)'
        }
      });

      this.leaveTimeout = setTimeout(callback, 450); // matches transition duration
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          children = _props.children,
          other = (0, _objectWithoutProperties3.default)(_props, ['style', 'children']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)({}, this.state.style, style)) }),
        children
      );
    }
  }]);
  return TransitionItem;
}(_react.Component);

TransitionItem.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
TransitionItem.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node,
  style: _propTypes2.default.object
} : {};


function getStyles(props, context) {
  var autoScrollBodyContent = props.autoScrollBodyContent,
      open = props.open;
  var _context$muiTheme = context.muiTheme,
      _context$muiTheme$bas = _context$muiTheme.baseTheme,
      spacing = _context$muiTheme$bas.spacing,
      palette = _context$muiTheme$bas.palette,
      dialog = _context$muiTheme.dialog,
      zIndex = _context$muiTheme.zIndex;


  var gutter = spacing.desktopGutter;
  var borderScroll = '1px solid ' + palette.borderColor;

  return {
    root: {
      position: 'fixed',
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      zIndex: zIndex.dialog,
      top: 0,
      left: open ? 0 : -10000,
      width: '100%',
      height: '100%',
      transition: open ? _transitions2.default.easeOut('0ms', 'left', '0ms') : _transitions2.default.easeOut('0ms', 'left', '450ms')
    },
    content: {
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      transition: _transitions2.default.easeOut(),
      position: 'relative',
      width: '75%',
      maxWidth: spacing.desktopKeylineIncrement * 12,
      margin: '0 auto',
      zIndex: zIndex.dialog
    },
    actionsContainer: {
      boxSizing: 'border-box',
      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated)
      padding: 8,
      width: '100%',
      textAlign: 'right',
      marginTop: autoScrollBodyContent ? -1 : 0
    },
    overlay: {
      zIndex: zIndex.dialogOverlay
    },
    title: {
      margin: 0,
      padding: gutter + 'px ' + gutter + 'px 20px ' + gutter + 'px',
      color: palette.textColor,
      fontSize: dialog.titleFontSize,
      lineHeight: '32px',
      fontWeight: 400,
      marginBottom: autoScrollBodyContent ? -1 : 0
    },
    body: {
      fontSize: dialog.bodyFontSize,
      color: dialog.bodyColor,
      padding: (props.title ? 0 : gutter) + 'px ' + gutter + 'px ' + gutter + 'px',
      boxSizing: 'border-box',
      overflowY: autoScrollBodyContent ? 'auto' : 'hidden',
      borderTop: autoScrollBodyContent ? borderScroll : 'none',
      borderBottom: autoScrollBodyContent ? borderScroll : 'none'
    }
  };
}

var DialogInline = function (_Component2) {
  (0, _inherits3.default)(DialogInline, _Component2);

  function DialogInline() {
    var _ref2;

    var _temp2, _this2, _ret2;

    (0, _classCallCheck3.default)(this, DialogInline);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref2 = DialogInline.__proto__ || (0, _getPrototypeOf2.default)(DialogInline)).call.apply(_ref2, [this].concat(args))), _this2), _this2.handleTouchTapOverlay = function () {
      _this2.requestClose(false);
    }, _this2.handleKeyUp = function (event) {
      if ((0, _keycode2.default)(event) === 'esc') {
        _this2.requestClose(false);
      }
    }, _this2.handleResize = function () {
      _this2.positionDialog();
    }, _temp2), (0, _possibleConstructorReturn3.default)(_this2, _ret2);
  }

  (0, _createClass3.default)(DialogInline, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.positionDialog();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.positionDialog();
    }
  }, {
    key: 'positionDialog',
    value: function positionDialog() {
      var _props2 = this.props,
          actions = _props2.actions,
          autoDetectWindowHeight = _props2.autoDetectWindowHeight,
          autoScrollBodyContent = _props2.autoScrollBodyContent,
          bodyStyle = _props2.bodyStyle,
          open = _props2.open,
          repositionOnUpdate = _props2.repositionOnUpdate,
          title = _props2.title;


      if (!open) {
        return;
      }

      var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      var container = _reactDom2.default.findDOMNode(this);
      var dialogWindow = _reactDom2.default.findDOMNode(this.refs.dialogWindow);
      var dialogContent = _reactDom2.default.findDOMNode(this.refs.dialogContent);
      var minPaddingTop = 16;

      // Reset the height in case the window was resized.
      dialogWindow.style.height = '';
      dialogContent.style.height = '';

      var dialogWindowHeight = dialogWindow.offsetHeight;
      var paddingTop = (clientHeight - dialogWindowHeight) / 2 - 64;
      if (paddingTop < minPaddingTop) paddingTop = minPaddingTop;

      // Vertically center the dialog window, but make sure it doesn't
      // transition to that position.
      if (repositionOnUpdate || !container.style.paddingTop) {
        container.style.paddingTop = paddingTop + 'px';
      }

      // Force a height if the dialog is taller than clientHeight
      if (autoDetectWindowHeight || autoScrollBodyContent) {
        var styles = getStyles(this.props, this.context);
        styles.body = (0, _simpleAssign2.default)(styles.body, bodyStyle);
        var maxDialogContentHeight = clientHeight - 2 * 64;

        if (title) maxDialogContentHeight -= dialogContent.previousSibling.offsetHeight;

        if (_react2.default.Children.count(actions)) {
          maxDialogContentHeight -= dialogContent.nextSibling.offsetHeight;
        }

        dialogContent.style.maxHeight = maxDialogContentHeight + 'px';
        if (maxDialogContentHeight > dialogWindowHeight) {
          dialogContent.style.borderBottom = 'none';
          dialogContent.style.borderTop = 'none';
        }
      }
    }
  }, {
    key: 'requestClose',
    value: function requestClose(buttonClicked) {
      if (!buttonClicked && this.props.modal) {
        return;
      }

      if (this.props.onRequestClose) {
        this.props.onRequestClose(!!buttonClicked);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          actions = _props3.actions,
          actionsContainerClassName = _props3.actionsContainerClassName,
          actionsContainerStyle = _props3.actionsContainerStyle,
          bodyClassName = _props3.bodyClassName,
          bodyStyle = _props3.bodyStyle,
          children = _props3.children,
          className = _props3.className,
          contentClassName = _props3.contentClassName,
          contentStyle = _props3.contentStyle,
          overlayClassName = _props3.overlayClassName,
          overlayStyle = _props3.overlayStyle,
          open = _props3.open,
          titleClassName = _props3.titleClassName,
          titleStyle = _props3.titleStyle,
          title = _props3.title,
          style = _props3.style;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      styles.root = (0, _simpleAssign2.default)(styles.root, style);
      styles.content = (0, _simpleAssign2.default)(styles.content, contentStyle);
      styles.body = (0, _simpleAssign2.default)(styles.body, bodyStyle);
      styles.actionsContainer = (0, _simpleAssign2.default)(styles.actionsContainer, actionsContainerStyle);
      styles.overlay = (0, _simpleAssign2.default)(styles.overlay, overlayStyle);
      styles.title = (0, _simpleAssign2.default)(styles.title, titleStyle);

      var actionsContainer = _react2.default.Children.count(actions) > 0 && _react2.default.createElement(
        'div',
        { className: actionsContainerClassName, style: prepareStyles(styles.actionsContainer) },
        _react2.default.Children.toArray(actions)
      );

      var titleElement = title;
      if (_react2.default.isValidElement(title)) {
        titleElement = _react2.default.cloneElement(title, {
          className: title.props.className || titleClassName,
          style: prepareStyles((0, _simpleAssign2.default)(styles.title, title.props.style))
        });
      } else if (typeof title === 'string') {
        titleElement = _react2.default.createElement(
          'h3',
          { className: titleClassName, style: prepareStyles(styles.title) },
          title
        );
      }

      return _react2.default.createElement(
        'div',
        { className: className, style: prepareStyles(styles.root) },
        open && _react2.default.createElement(_reactEventListener2.default, {
          target: 'window',
          onKeyUp: this.handleKeyUp,
          onResize: this.handleResize
        }),
        _react2.default.createElement(
          _TransitionGroup2.default,
          {
            component: 'div',
            ref: 'dialogWindow',
            transitionAppear: true,
            transitionAppearTimeout: 450,
            transitionEnter: true,
            transitionEnterTimeout: 450
          },
          open && _react2.default.createElement(
            TransitionItem,
            {
              className: contentClassName,
              style: styles.content
            },
            _react2.default.createElement(
              _Paper2.default,
              { zDepth: 4 },
              titleElement,
              _react2.default.createElement(
                'div',
                {
                  ref: 'dialogContent',
                  className: bodyClassName,
                  style: prepareStyles(styles.body)
                },
                children
              ),
              actionsContainer
            )
          )
        ),
        _react2.default.createElement(_Overlay2.default, {
          show: open,
          className: overlayClassName,
          style: styles.overlay,
          onTouchTap: this.handleTouchTapOverlay
        })
      );
    }
  }]);
  return DialogInline;
}(_react.Component);

DialogInline.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
DialogInline.propTypes = process.env.NODE_ENV !== "production" ? {
  actions: _propTypes2.default.node,
  actionsContainerClassName: _propTypes2.default.string,
  actionsContainerStyle: _propTypes2.default.object,
  autoDetectWindowHeight: _propTypes2.default.bool,
  autoScrollBodyContent: _propTypes2.default.bool,
  bodyClassName: _propTypes2.default.string,
  bodyStyle: _propTypes2.default.object,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  contentClassName: _propTypes2.default.string,
  contentStyle: _propTypes2.default.object,
  modal: _propTypes2.default.bool,
  onRequestClose: _propTypes2.default.func,
  open: _propTypes2.default.bool.isRequired,
  overlayClassName: _propTypes2.default.string,
  overlayStyle: _propTypes2.default.object,
  repositionOnUpdate: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  title: _propTypes2.default.node,
  titleClassName: _propTypes2.default.string,
  titleStyle: _propTypes2.default.object
} : {};

var Dialog = function (_Component3) {
  (0, _inherits3.default)(Dialog, _Component3);

  function Dialog() {
    var _ref3;

    var _temp3, _this3, _ret3;

    (0, _classCallCheck3.default)(this, Dialog);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp3 = (_this3 = (0, _possibleConstructorReturn3.default)(this, (_ref3 = Dialog.__proto__ || (0, _getPrototypeOf2.default)(Dialog)).call.apply(_ref3, [this].concat(args))), _this3), _this3.renderLayer = function () {
      return _react2.default.createElement(DialogInline, _this3.props);
    }, _temp3), (0, _possibleConstructorReturn3.default)(_this3, _ret3);
  }

  (0, _createClass3.default)(Dialog, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_RenderToLayer2.default, { render: this.renderLayer, open: true, useLayerForClickAway: false });
    }
  }]);
  return Dialog;
}(_react.Component);

Dialog.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
Dialog.defaultProps = {
  autoDetectWindowHeight: true,
  autoScrollBodyContent: false,
  modal: false,
  repositionOnUpdate: true
};
Dialog.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Action buttons to display below the Dialog content (`children`).
   * This property accepts either a React element, or an array of React elements.
   */
  actions: _propTypes2.default.node,
  /**
   * The `className` to add to the actions container's root element.
   */
  actionsContainerClassName: _propTypes2.default.string,
  /**
   * Overrides the inline-styles of the actions container's root element.
   */
  actionsContainerStyle: _propTypes2.default.object,
  /**
   * If set to true, the height of the `Dialog` will be auto detected. A max height
   * will be enforced so that the content does not extend beyond the viewport.
   */
  autoDetectWindowHeight: _propTypes2.default.bool,
  /**
   * If set to true, the body content of the `Dialog` will be scrollable.
   */
  autoScrollBodyContent: _propTypes2.default.bool,
  /**
   * The `className` to add to the content's root element under the title.
   */
  bodyClassName: _propTypes2.default.string,
  /**
   * Overrides the inline-styles of the content's root element under the title.
   */
  bodyStyle: _propTypes2.default.object,
  /**
   * The contents of the `Dialog`.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The `className` to add to the content container.
   */
  contentClassName: _propTypes2.default.string,
  /**
   * Overrides the inline-styles of the content container.
   */
  contentStyle: _propTypes2.default.object,
  /**
   * Force the user to use one of the actions in the `Dialog`.
   * Clicking outside the `Dialog` will not trigger the `onRequestClose`.
   */
  modal: _propTypes2.default.bool,
  /**
   * Fired when the `Dialog` is requested to be closed by a click outside the `Dialog` or on the buttons.
   *
   * @param {bool} buttonClicked Determines whether a button click triggered this request.
   */
  onRequestClose: _propTypes2.default.func,
  /**
   * Controls whether the Dialog is opened or not.
   */
  open: _propTypes2.default.bool.isRequired,
  /**
   * The `className` to add to the `Overlay` component that is rendered behind the `Dialog`.
   */
  overlayClassName: _propTypes2.default.string,
  /**
   * Overrides the inline-styles of the `Overlay` component that is rendered behind the `Dialog`.
   */
  overlayStyle: _propTypes2.default.object,
  /**
   * Determines whether the `Dialog` should be repositioned when it's contents are updated.
   */
  repositionOnUpdate: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The title to display on the `Dialog`. Could be number, string, element or an array containing these types.
   */
  title: _propTypes2.default.node,
  /**
   * The `className` to add to the title's root container element.
   */
  titleClassName: _propTypes2.default.string,
  /**
   * Overrides the inline-styles of the title's root container element.
   */
  titleStyle: _propTypes2.default.object
} : {};
exports.default = Dialog;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 793:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Dialog = __webpack_require__(792);

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Dialog2.default;

/***/ }),

/***/ 794:
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

var _simpleAssign = __webpack_require__(13);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Divider = function Divider(props, context) {
  var inset = props.inset,
      style = props.style,
      other = (0, _objectWithoutProperties3.default)(props, ['inset', 'style']);
  var _context$muiTheme = context.muiTheme,
      baseTheme = _context$muiTheme.baseTheme,
      prepareStyles = _context$muiTheme.prepareStyles;


  var styles = {
    root: {
      margin: 0,
      marginTop: -1,
      marginLeft: inset ? 72 : 0,
      height: 1,
      border: 'none',
      backgroundColor: baseTheme.palette.borderColor
    }
  };

  return _react2.default.createElement('hr', (0, _extends3.default)({}, other, { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }));
};

Divider.muiName = 'Divider';

Divider.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If true, the `Divider` will be indented.
   */
  inset: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};

Divider.defaultProps = {
  inset: false
};

Divider.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};

exports.default = Divider;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Divider = __webpack_require__(794);

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Divider2.default;

/***/ }),

/***/ 796:
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

var _FlatButtonLabel = __webpack_require__(797);

var _FlatButtonLabel2 = _interopRequireDefault(_FlatButtonLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateLabel(props, propName, componentName) {
  if (process.env.NODE_ENV !== 'production') {
    if (!props.children && props.label !== 0 && !props.label && !props.icon) {
      return new Error('Required prop label or children or icon was not specified in ' + componentName + '.');
    }
  }
}

var FlatButton = function (_Component) {
  (0, _inherits3.default)(FlatButton, _Component);

  function FlatButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FlatButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FlatButton.__proto__ || (0, _getPrototypeOf2.default)(FlatButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false,
      isKeyboardFocused: false,
      touch: false
    }, _this.handleKeyboardFocus = function (event, isKeyboardFocused) {
      _this.setState({ isKeyboardFocused: isKeyboardFocused });
      _this.props.onKeyboardFocus(event, isKeyboardFocused);
    }, _this.handleMouseEnter = function (event) {
      // Cancel hover styles for touch devices
      if (!_this.state.touch) _this.setState({ hovered: true });
      _this.props.onMouseEnter(event);
    }, _this.handleMouseLeave = function (event) {
      _this.setState({ hovered: false });
      _this.props.onMouseLeave(event);
    }, _this.handleTouchStart = function (event) {
      _this.setState({ touch: true });
      _this.props.onTouchStart(event);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FlatButton, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.disabled) {
        this.setState({
          hovered: false
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          backgroundColor = _props.backgroundColor,
          children = _props.children,
          disabled = _props.disabled,
          fullWidth = _props.fullWidth,
          hoverColor = _props.hoverColor,
          icon = _props.icon,
          label = _props.label,
          labelStyle = _props.labelStyle,
          labelPosition = _props.labelPosition,
          primary = _props.primary,
          rippleColor = _props.rippleColor,
          secondary = _props.secondary,
          style = _props.style,
          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'children', 'disabled', 'fullWidth', 'hoverColor', 'icon', 'label', 'labelStyle', 'labelPosition', 'primary', 'rippleColor', 'secondary', 'style']);
      var _context$muiTheme = this.context.muiTheme,
          borderRadius = _context$muiTheme.borderRadius,
          _context$muiTheme$but = _context$muiTheme.button,
          buttonHeight = _context$muiTheme$but.height,
          buttonMinWidth = _context$muiTheme$but.minWidth,
          buttonTextTransform = _context$muiTheme$but.textTransform,
          _context$muiTheme$fla = _context$muiTheme.flatButton,
          buttonFilterColor = _context$muiTheme$fla.buttonFilterColor,
          buttonColor = _context$muiTheme$fla.color,
          disabledTextColor = _context$muiTheme$fla.disabledTextColor,
          fontSize = _context$muiTheme$fla.fontSize,
          fontWeight = _context$muiTheme$fla.fontWeight,
          primaryTextColor = _context$muiTheme$fla.primaryTextColor,
          secondaryTextColor = _context$muiTheme$fla.secondaryTextColor,
          textColor = _context$muiTheme$fla.textColor,
          _context$muiTheme$fla2 = _context$muiTheme$fla.textTransform,
          textTransform = _context$muiTheme$fla2 === undefined ? buttonTextTransform || 'uppercase' : _context$muiTheme$fla2;

      var defaultTextColor = disabled ? disabledTextColor : primary ? primaryTextColor : secondary ? secondaryTextColor : textColor;

      var defaultHoverColor = (0, _colorManipulator.fade)(buttonFilterColor, 0.2);
      var defaultRippleColor = buttonFilterColor;
      var buttonHoverColor = hoverColor || defaultHoverColor;
      var buttonRippleColor = rippleColor || defaultRippleColor;
      var buttonBackgroundColor = backgroundColor || buttonColor;
      var hovered = (this.state.hovered || this.state.isKeyboardFocused) && !disabled;

      var mergedRootStyles = (0, _simpleAssign2.default)({}, {
        height: buttonHeight,
        lineHeight: buttonHeight + 'px',
        minWidth: fullWidth ? '100%' : buttonMinWidth,
        color: defaultTextColor,
        transition: _transitions2.default.easeOut(),
        borderRadius: borderRadius,
        userSelect: 'none',
        overflow: 'hidden',
        backgroundColor: hovered ? buttonHoverColor : buttonBackgroundColor,
        padding: 0,
        margin: 0,
        textAlign: 'center'
      }, style);

      var iconCloned = void 0;
      var labelStyleIcon = {};

      if (icon) {
        var iconStyles = (0, _simpleAssign2.default)({
          verticalAlign: 'middle',
          marginLeft: label && labelPosition !== 'before' ? 12 : 0,
          marginRight: label && labelPosition === 'before' ? 12 : 0
        }, icon.props.style);
        iconCloned = _react2.default.cloneElement(icon, {
          color: icon.props.color || mergedRootStyles.color,
          style: iconStyles,
          key: 'iconCloned'
        });

        if (labelPosition === 'before') {
          labelStyleIcon.paddingRight = 8;
        } else {
          labelStyleIcon.paddingLeft = 8;
        }
      }

      var mergedLabelStyles = (0, _simpleAssign2.default)({
        letterSpacing: 0,
        textTransform: textTransform,
        fontWeight: fontWeight,
        fontSize: fontSize
      }, labelStyleIcon, labelStyle);

      var labelElement = label ? _react2.default.createElement(_FlatButtonLabel2.default, { key: 'labelElement', label: label, style: mergedLabelStyles }) : undefined;

      // Place label before or after children.
      var enhancedButtonChildren = labelPosition === 'before' ? [labelElement, iconCloned, children] : [children, iconCloned, labelElement];

      return _react2.default.createElement(
        _EnhancedButton2.default,
        (0, _extends3.default)({}, other, {
          disabled: disabled,
          focusRippleColor: buttonRippleColor,
          focusRippleOpacity: 0.3,
          onKeyboardFocus: this.handleKeyboardFocus,
          onMouseLeave: this.handleMouseLeave,
          onMouseEnter: this.handleMouseEnter,
          onTouchStart: this.handleTouchStart,
          style: mergedRootStyles,
          touchRippleColor: buttonRippleColor,
          touchRippleOpacity: 0.3
        }),
        enhancedButtonChildren
      );
    }
  }]);
  return FlatButton;
}(_react.Component);

FlatButton.muiName = 'FlatButton';
FlatButton.defaultProps = {
  disabled: false,
  fullWidth: false,
  labelStyle: {},
  labelPosition: 'after',
  onKeyboardFocus: function onKeyboardFocus() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onTouchStart: function onTouchStart() {},
  primary: false,
  secondary: false
};
FlatButton.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
FlatButton.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Color of button when mouse is not hovering over it.
   */
  backgroundColor: _propTypes2.default.string,
  /**
   * This is what will be displayed inside the button.
   * If a label is specified, the text within the label prop will
   * be displayed. Otherwise, the component will expect children
   * which will then be displayed. (In our example,
   * we are nesting an `<input type="file" />` and a `span`
   * that acts as our label to be displayed.) This only
   * applies to flat and raised buttons.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The element to use as the container for the FlatButton. Either a string to
   * use a DOM element or a ReactElement. This is useful for wrapping the
   * FlatButton in a custom Link component. If a ReactElement is given, ensure
   * that it passes all of its given props through to the underlying DOM
   * element and renders its children prop for proper integration.
   */
  containerElement: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /**
   * If true, the element's ripple effect will be disabled.
   */
  disableTouchRipple: _propTypes2.default.bool,
  /**
   * Disables the button if set to true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * Color of button when mouse hovers over.
   */
  hoverColor: _propTypes2.default.string,
  /**
   * The URL to link to when the button is clicked.
   */
  href: _propTypes2.default.string,
  /**
   * Use this property to display an icon.
   */
  icon: _propTypes2.default.node,
  /**
   * Label for the button.
   */
  label: validateLabel,
  /**
   * Place label before or after the passed children.
   */
  labelPosition: _propTypes2.default.oneOf(['before', 'after']),
  /**
   * Override the inline-styles of the button's label element.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * Callback function fired when the element is focused or blurred by the keyboard.
   *
   * @param {object} event `focus` or `blur` event targeting the element.
   * @param {boolean} isKeyboardFocused Indicates whether the element is focused.
   */
  onKeyboardFocus: _propTypes2.default.func,
  /** @ignore */
  onMouseEnter: _propTypes2.default.func,
  /** @ignore */
  onMouseLeave: _propTypes2.default.func,
  /** @ignore */
  onTouchStart: _propTypes2.default.func,
  /**
   * Callback function fired when the button is touch-tapped.
   *
   * @param {object} event TouchTap event targeting the button.
   */
  onTouchTap: _propTypes2.default.func,
  /**
   * If true, colors button according to
   * primaryTextColor from the Theme.
   */
  primary: _propTypes2.default.bool,
  /**
   * Color for the ripple after button is clicked.
   */
  rippleColor: _propTypes2.default.string,
  /**
   * If true, colors button according to secondaryTextColor from the theme.
   * The primary prop has precendent if set to true.
   */
  secondary: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = FlatButton;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 797:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var baseTheme = context.muiTheme.baseTheme;


  return {
    root: {
      position: 'relative',
      paddingLeft: baseTheme.spacing.desktopGutterLess,
      paddingRight: baseTheme.spacing.desktopGutterLess,
      verticalAlign: 'middle'
    }
  };
}

var FlatButtonLabel = function (_Component) {
  (0, _inherits3.default)(FlatButtonLabel, _Component);

  function FlatButtonLabel() {
    (0, _classCallCheck3.default)(this, FlatButtonLabel);
    return (0, _possibleConstructorReturn3.default)(this, (FlatButtonLabel.__proto__ || (0, _getPrototypeOf2.default)(FlatButtonLabel)).apply(this, arguments));
  }

  (0, _createClass3.default)(FlatButtonLabel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          style = _props.style;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        'span',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
        label
      );
    }
  }]);
  return FlatButtonLabel;
}(_react.Component);

FlatButtonLabel.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
FlatButtonLabel.propTypes = process.env.NODE_ENV !== "production" ? {
  label: _propTypes2.default.node,
  style: _propTypes2.default.object
} : {};
exports.default = FlatButtonLabel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _FlatButton = __webpack_require__(796);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FlatButton2.default;

/***/ }),

/***/ 799:
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

var _FontIcon = __webpack_require__(299);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Paper = __webpack_require__(104);

var _Paper2 = _interopRequireDefault(_Paper);

var _childUtils = __webpack_require__(303);

var _warning = __webpack_require__(19);

var _warning2 = _interopRequireDefault(_warning);

var _propTypes3 = __webpack_require__(34);

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var floatingActionButton = context.muiTheme.floatingActionButton;


  var backgroundColor = props.backgroundColor || floatingActionButton.color;
  var iconColor = floatingActionButton.iconColor;

  if (props.disabled) {
    backgroundColor = props.disabledColor || floatingActionButton.disabledColor;
    iconColor = floatingActionButton.disabledTextColor;
  } else if (props.secondary) {
    backgroundColor = floatingActionButton.secondaryColor;
    iconColor = floatingActionButton.secondaryIconColor;
  }

  return {
    root: {
      transition: _transitions2.default.easeOut(),
      display: 'inline-block',
      backgroundColor: 'transparent'
    },
    container: {
      backgroundColor: backgroundColor,
      transition: _transitions2.default.easeOut(),
      height: floatingActionButton.buttonSize,
      width: floatingActionButton.buttonSize,
      padding: 0,
      overflow: 'hidden',
      borderRadius: '50%',
      textAlign: 'center',
      verticalAlign: 'bottom'
    },
    containerWhenMini: {
      height: floatingActionButton.miniSize,
      width: floatingActionButton.miniSize
    },
    overlay: {
      transition: _transitions2.default.easeOut(),
      top: 0
    },
    overlayWhenHovered: {
      backgroundColor: (0, _colorManipulator.fade)(iconColor, 0.4)
    },
    icon: {
      height: floatingActionButton.buttonSize,
      lineHeight: floatingActionButton.buttonSize + 'px',
      fill: iconColor,
      color: iconColor
    },
    iconWhenMini: {
      height: floatingActionButton.miniSize,
      lineHeight: floatingActionButton.miniSize + 'px'
    }
  };
}

var FloatingActionButton = function (_Component) {
  (0, _inherits3.default)(FloatingActionButton, _Component);

  function FloatingActionButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FloatingActionButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FloatingActionButton.__proto__ || (0, _getPrototypeOf2.default)(FloatingActionButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false,
      touch: false,
      zDepth: undefined
    }, _this.handleMouseDown = function (event) {
      // only listen to left clicks
      if (event.button === 0) {
        _this.setState({ zDepth: _this.props.zDepth + 1 });
      }
      if (_this.props.onMouseDown) _this.props.onMouseDown(event);
    }, _this.handleMouseUp = function (event) {
      _this.setState({ zDepth: _this.props.zDepth });
      if (_this.props.onMouseUp) {
        _this.props.onMouseUp(event);
      }
    }, _this.handleMouseLeave = function (event) {
      if (!_this.refs.container.isKeyboardFocused()) {
        _this.setState({ zDepth: _this.props.zDepth, hovered: false });
      }
      if (_this.props.onMouseLeave) {
        _this.props.onMouseLeave(event);
      }
    }, _this.handleMouseEnter = function (event) {
      if (!_this.refs.container.isKeyboardFocused() && !_this.state.touch) {
        _this.setState({ hovered: true });
      }
      if (_this.props.onMouseEnter) {
        _this.props.onMouseEnter(event);
      }
    }, _this.handleTouchStart = function (event) {
      _this.setState({
        touch: true,
        zDepth: _this.props.zDepth + 1
      });
      if (_this.props.onTouchStart) {
        _this.props.onTouchStart(event);
      }
    }, _this.handleTouchEnd = function (event) {
      _this.setState({
        touch: true,
        zDepth: _this.props.zDepth
      });
      if (_this.props.onTouchEnd) {
        _this.props.onTouchEnd(event);
      }
    }, _this.handleKeyboardFocus = function (event, keyboardFocused) {
      if (keyboardFocused && !_this.props.disabled) {
        _this.setState({ zDepth: _this.props.zDepth + 1 });
        _this.refs.overlay.style.backgroundColor = (0, _colorManipulator.fade)(getStyles(_this.props, _this.context).icon.color, 0.4);
      } else if (!_this.state.hovered) {
        _this.setState({ zDepth: _this.props.zDepth });
        _this.refs.overlay.style.backgroundColor = 'transparent';
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FloatingActionButton, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        zDepth: this.props.disabled ? 0 : this.props.zDepth
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(!this.props.iconClassName || !this.props.children, 'Material-UI: You have set both an iconClassName and a child icon. ' + 'It is recommended you use only one method when adding ' + 'icons to FloatingActionButtons.') : void 0;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var nextState = {};

      if (nextProps.disabled !== this.props.disabled) {
        nextState.zDepth = nextProps.disabled ? 0 : this.props.zDepth;
      }
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
          className = _props.className,
          childrenProp = _props.children,
          disabled = _props.disabled,
          disabledColor = _props.disabledColor,
          mini = _props.mini,
          secondary = _props.secondary,
          iconStyle = _props.iconStyle,
          iconClassName = _props.iconClassName,
          zDepth = _props.zDepth,
          other = (0, _objectWithoutProperties3.default)(_props, ['backgroundColor', 'className', 'children', 'disabled', 'disabledColor', 'mini', 'secondary', 'iconStyle', 'iconClassName', 'zDepth']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var iconElement = void 0;
      if (iconClassName) {
        iconElement = _react2.default.createElement(_FontIcon2.default, {
          className: iconClassName,
          style: (0, _simpleAssign2.default)({}, styles.icon, mini && styles.iconWhenMini, iconStyle)
        });
      }

      var children = void 0;

      if (childrenProp) {
        children = (0, _childUtils.extendChildren)(childrenProp, function (child) {
          return {
            style: (0, _simpleAssign2.default)({}, styles.icon, mini && styles.iconWhenMini, iconStyle, child.props.style)
          };
        });
      }

      var buttonEventHandlers = disabled ? null : {
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        onMouseLeave: this.handleMouseLeave,
        onMouseEnter: this.handleMouseEnter,
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd,
        onKeyboardFocus: this.handleKeyboardFocus
      };

      return _react2.default.createElement(
        _Paper2.default,
        {
          className: className,
          style: (0, _simpleAssign2.default)(styles.root, this.props.style),
          zDepth: this.state.zDepth,
          circle: true
        },
        _react2.default.createElement(
          _EnhancedButton2.default,
          (0, _extends3.default)({}, other, buttonEventHandlers, {
            ref: 'container',
            disabled: disabled,
            style: (0, _simpleAssign2.default)(styles.container, this.props.mini && styles.containerWhenMini, iconStyle),
            focusRippleColor: styles.icon.color,
            touchRippleColor: styles.icon.color
          }),
          _react2.default.createElement(
            'div',
            {
              ref: 'overlay',
              style: prepareStyles((0, _simpleAssign2.default)(styles.overlay, this.state.hovered && !this.props.disabled && styles.overlayWhenHovered))
            },
            iconElement,
            children
          )
        )
      );
    }
  }]);
  return FloatingActionButton;
}(_react.Component);

FloatingActionButton.defaultProps = {
  disabled: false,
  mini: false,
  secondary: false,
  zDepth: 2
};
FloatingActionButton.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
FloatingActionButton.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * This value will override the default background color for the button.
   * However it will not override the default disabled background color.
   * This has to be set separately using the disabledColor attribute.
   */
  backgroundColor: _propTypes2.default.string,
  /**
   * This is what displayed inside the floating action button; for example, a SVG Icon.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Disables the button if set to true.
   */
  disabled: _propTypes2.default.bool,
  /**
   * This value will override the default background color for the button when it is disabled.
   */
  disabledColor: _propTypes2.default.string,
  /**
   * The URL to link to when the button is clicked.
   */
  href: _propTypes2.default.string,
  /**
   * The icon within the FloatingActionButton is a FontIcon component.
   * This property is the classname of the icon to be displayed inside the button.
   * An alternative to adding an iconClassName would be to manually insert a
   * FontIcon component or custom SvgIcon component or as a child of FloatingActionButton.
   */
  iconClassName: _propTypes2.default.string,
  /**
   * This is the equivalent to iconClassName except that it is used for
   * overriding the inline-styles of the FontIcon component.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * If true, the button will be a small floating action button.
   */
  mini: _propTypes2.default.bool,
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
   * If true, the button will use the secondary button colors.
   */
  secondary: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The zDepth of the underlying `Paper` component.
   */
  zDepth: _propTypes4.default.zDepth
} : {};
exports.default = FloatingActionButton;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _FloatingActionButton = __webpack_require__(799);

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FloatingActionButton2.default;

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.makeSelectable = exports.ListItem = exports.List = undefined;

var _List2 = __webpack_require__(181);

var _List3 = _interopRequireDefault(_List2);

var _ListItem2 = __webpack_require__(301);

var _ListItem3 = _interopRequireDefault(_ListItem2);

var _makeSelectable2 = __webpack_require__(802);

var _makeSelectable3 = _interopRequireDefault(_makeSelectable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.List = _List3.default;
exports.ListItem = _ListItem3.default;
exports.makeSelectable = _makeSelectable3.default;
exports.default = _List3.default;

/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectable = undefined;

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

var _colorManipulator = __webpack_require__(105);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeSelectable = function makeSelectable(MyComponent) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    (0, _inherits3.default)(_class, _Component);

    function _class() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, _class);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args))), _this), _this.hasSelectedDescendant = function (previousValue, child) {
        if (_react2.default.isValidElement(child) && child.props.nestedItems && child.props.nestedItems.length > 0) {
          return child.props.nestedItems.reduce(_this.hasSelectedDescendant, previousValue);
        }
        return previousValue || _this.isChildSelected(child, _this.props);
      }, _this.handleItemTouchTap = function (event, item) {
        var itemValue = item.props.value;

        if (itemValue !== _this.props.value) {
          if (_this.props.onChange) {
            _this.props.onChange(event, itemValue);
          }
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(_class, [{
      key: 'extendChild',
      value: function extendChild(child, styles, selectedItemStyle) {
        var _this2 = this;

        if (child && child.type && child.type.muiName === 'ListItem') {
          var selected = this.isChildSelected(child, this.props);
          var selectedChildrenStyles = void 0;
          if (selected) {
            selectedChildrenStyles = (0, _simpleAssign2.default)({}, styles, selectedItemStyle);
          }

          var mergedChildrenStyles = (0, _simpleAssign2.default)({}, child.props.style, selectedChildrenStyles);

          this.keyIndex += 1;

          return _react2.default.cloneElement(child, {
            onTouchTap: function onTouchTap(event) {
              _this2.handleItemTouchTap(event, child);
              if (child.props.onTouchTap) {
                child.props.onTouchTap(event);
              }
            },
            key: this.keyIndex,
            style: mergedChildrenStyles,
            nestedItems: child.props.nestedItems.map(function (child) {
              return _this2.extendChild(child, styles, selectedItemStyle);
            }),
            initiallyOpen: this.isInitiallyOpen(child)
          });
        } else {
          return child;
        }
      }
    }, {
      key: 'isInitiallyOpen',
      value: function isInitiallyOpen(child) {
        if (child.props.initiallyOpen) {
          return child.props.initiallyOpen;
        }
        return this.hasSelectedDescendant(false, child);
      }
    }, {
      key: 'isChildSelected',
      value: function isChildSelected(child, props) {
        return props.value === child.props.value;
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var _props = this.props,
            children = _props.children,
            selectedItemStyle = _props.selectedItemStyle,
            other = (0, _objectWithoutProperties3.default)(_props, ['children', 'selectedItemStyle']);


        this.keyIndex = 0;
        var styles = {};

        if (!selectedItemStyle) {
          var textColor = this.context.muiTheme.baseTheme.palette.textColor;
          styles.backgroundColor = (0, _colorManipulator.fade)(textColor, 0.2);
        }

        return _react2.default.createElement(
          MyComponent,
          (0, _extends3.default)({}, other, this.state),
          _react.Children.map(children, function (child) {
            return _this3.extendChild(child, styles, selectedItemStyle);
          })
        );
      }
    }]);
    return _class;
  }(_react.Component), _class.propTypes = {
    children: _propTypes2.default.node,
    onChange: _propTypes2.default.func,
    selectedItemStyle: _propTypes2.default.object,
    value: _propTypes2.default.any
  }, _class.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
  }, _temp2;
};

exports.makeSelectable = makeSelectable;
exports.default = makeSelectable;

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MenuItem = exports.Menu = undefined;

var _Menu2 = __webpack_require__(182);

var _Menu3 = _interopRequireDefault(_Menu2);

var _MenuItem2 = __webpack_require__(294);

var _MenuItem3 = _interopRequireDefault(_MenuItem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Menu = _Menu3.default;
exports.MenuItem = _MenuItem3.default;
exports.default = _Menu3.default;

/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = __webpack_require__(1);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var originalBodyOverflow = null;
var lockingCounter = 0;

var AutoLockScrolling = function (_Component) {
  (0, _inherits3.default)(AutoLockScrolling, _Component);

  function AutoLockScrolling() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AutoLockScrolling);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AutoLockScrolling.__proto__ || (0, _getPrototypeOf2.default)(AutoLockScrolling)).call.apply(_ref, [this].concat(args))), _this), _this.locked = false, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AutoLockScrolling, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.lock === true) {
        this.preventScrolling();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.lock !== nextProps.lock) {
        if (nextProps.lock) {
          this.preventScrolling();
        } else {
          this.allowScrolling();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.allowScrolling();
    }

    // force to only lock/unlock once

  }, {
    key: 'preventScrolling',
    value: function preventScrolling() {
      if (this.locked === true) {
        return;
      }

      lockingCounter = lockingCounter + 1;
      this.locked = true;

      // only lock the first time the component is mounted.
      if (lockingCounter === 1) {
        var body = document.getElementsByTagName('body')[0];
        originalBodyOverflow = body.style.overflow;
        body.style.overflow = 'hidden';
      }
    }
  }, {
    key: 'allowScrolling',
    value: function allowScrolling() {
      if (this.locked === true) {
        lockingCounter = lockingCounter - 1;
        this.locked = false;
      }

      if (lockingCounter === 0 && originalBodyOverflow !== null) {
        var body = document.getElementsByTagName('body')[0];
        body.style.overflow = originalBodyOverflow || '';
        originalBodyOverflow = null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return AutoLockScrolling;
}(_react.Component);

AutoLockScrolling.propTypes = process.env.NODE_ENV !== "production" ? {
  lock: _propTypes2.default.bool.isRequired
} : {};
exports.default = AutoLockScrolling;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 805:
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

var _AutoLockScrolling = __webpack_require__(804);

var _AutoLockScrolling2 = _interopRequireDefault(_AutoLockScrolling);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var overlay = context.muiTheme.overlay;


  var style = {
    root: {
      position: 'fixed',
      height: '100%',
      width: '100%',
      top: 0,
      left: '-100%',
      opacity: 0,
      backgroundColor: overlay.backgroundColor,
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', // Remove mobile color flashing (deprecated)

      // Two ways to promote overlay to its own render layer
      willChange: 'opacity',
      transform: 'translateZ(0)',

      transition: props.transitionEnabled && _transitions2.default.easeOut('0ms', 'left', '400ms') + ', ' + _transitions2.default.easeOut('400ms', 'opacity')
    }
  };

  if (props.show) {
    (0, _simpleAssign2.default)(style.root, {
      left: 0,
      opacity: 1,
      transition: _transitions2.default.easeOut('0ms', 'left') + ', ' + _transitions2.default.easeOut('400ms', 'opacity')
    });
  }

  return style;
}

var Overlay = function (_Component) {
  (0, _inherits3.default)(Overlay, _Component);

  function Overlay() {
    (0, _classCallCheck3.default)(this, Overlay);
    return (0, _possibleConstructorReturn3.default)(this, (Overlay.__proto__ || (0, _getPrototypeOf2.default)(Overlay)).apply(this, arguments));
  }

  (0, _createClass3.default)(Overlay, [{
    key: 'setOpacity',
    value: function setOpacity(opacity) {
      this.refs.overlay.style.opacity = opacity;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          autoLockScrolling = _props.autoLockScrolling,
          show = _props.show,
          style = _props.style,
          transitionEnabled = _props.transitionEnabled,
          other = (0, _objectWithoutProperties3.default)(_props, ['autoLockScrolling', 'show', 'style', 'transitionEnabled']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, { ref: 'overlay', style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) }),
        autoLockScrolling && _react2.default.createElement(_AutoLockScrolling2.default, { lock: show })
      );
    }
  }]);
  return Overlay;
}(_react.Component);

Overlay.defaultProps = {
  autoLockScrolling: true,
  style: {},
  transitionEnabled: true
};
Overlay.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
Overlay.propTypes = process.env.NODE_ENV !== "production" ? {
  autoLockScrolling: _propTypes2.default.bool,
  show: _propTypes2.default.bool.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  transitionEnabled: _propTypes2.default.bool
} : {};
exports.default = Overlay;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 806:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(78);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(77);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentAdd = function ContentAdd(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' })
  );
};
ContentAdd = (0, _pure2.default)(ContentAdd);
ContentAdd.displayName = 'ContentAdd';
ContentAdd.muiName = 'SvgIcon';

exports.default = ContentAdd;

/***/ }),

/***/ 807:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(78);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(77);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentInbox = function ContentInbox(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z' })
  );
};
ContentInbox = (0, _pure2.default)(ContentInbox);
ContentInbox.displayName = 'ContentInbox';
ContentInbox.muiName = 'SvgIcon';

exports.default = ContentInbox;

/***/ }),

/***/ 808:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(78);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(77);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationMoreVert = function NavigationMoreVert(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
  );
};
NavigationMoreVert = (0, _pure2.default)(NavigationMoreVert);
NavigationMoreVert.displayName = 'NavigationMoreVert';
NavigationMoreVert.muiName = 'SvgIcon';

exports.default = NavigationMoreVert;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL0FkbWluL0FkbWluQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL2luZGV4LmpzPzc0NzciLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL2NsYXNzTmFtZXMuanM/ZjU2YSIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWZsZXhib3gtZ3JpZC9saWIvY3JlYXRlUHJvcHMuanM/YjJjMiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWZsZXhib3gtZ3JpZC9saWIvaW5kZXguanM/MjljMSIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzP2RhMDQiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9SYWlzZWRCdXR0b24vUmFpc2VkQnV0dG9uLmpzPzg0ZmQiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9SYWlzZWRCdXR0b24vaW5kZXguanM/OGU5NSIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1RleHRGaWVsZC9FbmhhbmNlZFRleHRhcmVhLmpzPzZhZjIiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkLmpzP2JhNWIiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkSGludC5qcz8xODI1Iiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL1RleHRGaWVsZExhYmVsLmpzP2I4ZjEiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkVW5kZXJsaW5lLmpzP2EzOTAiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL3R5cGVzLmpzPzhiOWMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzP2I5ODAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9BZG1pbi9OdXRyaWVudEZvcm0vRmllbGRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9mbGV4Ym94Z3JpZC9kaXN0L2ZsZXhib3hncmlkLmNzcz9jODRiIiwid2VicGFjazovLy8uL34vcmVhY3QtZmxleGJveC1ncmlkL2xpYi9jb21wb25lbnRzL0NvbC5qcz82YjEyIiwid2VicGFjazovLy8uL34vcmVhY3QtZmxleGJveC1ncmlkL2xpYi9jb21wb25lbnRzL0dyaWQuanM/ZjJlYiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWZsZXhib3gtZ3JpZC9saWIvY29tcG9uZW50cy9Sb3cuanM/NzZiOCIsIndlYnBhY2s6Ly8vLi9+L2ZsZXhib3hncmlkL2Rpc3QvZmxleGJveGdyaWQuY3NzPzRiODkqIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2luZ3JlZGllbnRzQWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9BZG1pbi9BZG1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL0FkbWluL0luZ3JlZGllbnRzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL0FkbWluL0luZ3JlZGllbnRzTGlzdENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL0FkbWluL051dHJpZW50Rm9ybS9DYXJib2hpZHJhdGVzQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvQWRtaW4vTnV0cmllbnRGb3JtL0ZhdHNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9BZG1pbi9OdXRyaWVudEZvcm0vRm9ybUNvbnRyb2xXcmFwcGVyQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvQWRtaW4vTnV0cmllbnRGb3JtL051dHJpZW50Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL0FkbWluL051dHJpZW50Rm9ybS9Qcm90ZWluc0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL0FkbWluL1JpZ2h0SWNvbk1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9BdXRvQ29tcGxldGUvQXV0b0NvbXBsZXRlLmpzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvQXV0b0NvbXBsZXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvRGlhbG9nL0RpYWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0RpYWxvZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0RpdmlkZXIvRGl2aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0RpdmlkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9GbGF0QnV0dG9uL0ZsYXRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9GbGF0QnV0dG9uL0ZsYXRCdXR0b25MYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0ZsYXRCdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9GbG9hdGluZ0FjdGlvbkJ1dHRvbi9GbG9hdGluZ0FjdGlvbkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0Zsb2F0aW5nQWN0aW9uQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvTGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0xpc3QvbWFrZVNlbGVjdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9NZW51L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvaW50ZXJuYWwvQXV0b0xvY2tTY3JvbGxpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9pbnRlcm5hbC9PdmVybGF5LmpzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvc3ZnLWljb25zL2NvbnRlbnQvYWRkLmpzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvc3ZnLWljb25zL2NvbnRlbnQvaW5ib3guanMiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9tb3JlLXZlcnQuanMiXSwibmFtZXMiOlsibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJvcGVuRGlhbG9ndWUiLCJjbG9zZURpYWxvZ3VlIiwic2F2ZURpYWxvZ3VlIiwic2F2ZUluZ3JlZGllbnQiLCJ2YWx1ZXMiLCJlZGl0SWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm9wZW4iLCJkZWZpbmVJbmdyZWRpZW50RGlhbG9ndWUiLCJpbml0aWFsVmFsdWVzIiwiQWRtaW5Db250YWluZXIiLCJGaWVsZENvbXBvbmVudCIsInByb3BzIiwiY29udHJvbElkIiwiaGVscCIsIkNvbXBvbmVudCIsImluZ3JlZGllbnQiLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzdWx0IiwiaW5ncmVkaWVudElkIiwidXBkYXRlSW5ncmVkaWVudCIsImRlbGV0ZUluZ3JlZGllbnQiLCJlZGl0SW5ncmVkaWVudCIsImJ1dHRvbk91dGVyU3R5bGUiLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0IiwiekluZGV4IiwiQWRtaW4iLCJoYW5kbGVTYXZlU3VibWl0IiwiYWN0aW9ucyIsInBhZGRpbmciLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImJvb2wiLCJvYmplY3QiLCJJbmdyZWRpZW50c0xpc3QiLCJpbmdyZWRpZW50cyIsImJvcmRlciIsInRleHRBbGlnbiIsIm1hcmdpbiIsIm1hcmdpblRvcCIsImhlaWdodCIsIm92ZXJmbG93WSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJyZXZlcnNlIiwiaWQiLCJJbmdyZWRpZW50c0xpc3RDb250YWluZXIiLCJDYXJib2hpZHJhdGVzQ29tcG9uZW50IiwiRmF0c0NvbXBvbmVudCIsIkZvcm1Db250cm9sV3JhcHBlciIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJpbnB1dCIsIm1ldGEiLCJkYXRhU291cmNlIiwibmFtZSIsIm1hdGNoIiwidmlzaXRlZCIsInZhbHVlIiwidW5kZWZpbmVkIiwiRm9ybUNvbnRyb2xXcmFwcGVyQ29udGFpbmVyIiwiTnV0cmllbnRGb3JtIiwiaGFuZGxlU3VibWl0IiwiTnV0cmllbnRGb3JtUmVkdXhXcmFwcGVyIiwiZm9ybSIsImRlc3Ryb3lPblVubW91bnQiLCJQcm90ZWluc0NvbXBvbmVudCIsImljb25CdXR0b25FbGVtZW50IiwiUmlnaHRJY29uTWVudSIsImVkaXRIYW5kbGVyIiwiZWxlbWVudEtleSIsImRlbGV0ZUhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFFQSxJQUFNQSxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsV0FBZTs7QUFFdENDLHNCQUFjLHdCQUFNO0FBQUNELHFCQUFTLDZDQUFUO0FBQTBCLFNBRlQ7QUFHdENFLHVCQUFlLHlCQUFNO0FBQUNGLHFCQUFTLDhDQUFUO0FBQTJCLFNBSFg7QUFJdENHLHNCQUFjLHdCQUFNO0FBQUNILHFCQUFTLHVCQUFPLGlCQUFQLENBQVQsRUFBcUNBLFNBQVMsOENBQVQ7QUFBMkIsU0FKL0M7O0FBTXRDSSx3QkFBZ0Isd0JBQUNDLE1BQUQsRUFBU0MsTUFBVCxFQUFvQjtBQUFDQSxxQkFBU04sU0FBUyx3Q0FBaUJLLE1BQWpCLEVBQXlCQyxNQUF6QixDQUFULENBQVQsR0FBc0ROLFNBQVMsc0NBQWVLLE1BQWYsQ0FBVCxDQUF0RDtBQUF3RjtBQU52RixLQUFmO0FBQUEsQ0FBM0I7O0FBU0EsSUFBTUUsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsV0FBWTs7QUFFaENDLGNBQU1ELE1BQU1FLHdC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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZEQUE2RDs7QUFFN0QsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsbUdBQW1HO0FBQzVHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7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QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyw4RUFBOEU7QUFDdkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx1RkFBdUY7QUFDdkY7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDRCOzs7Ozs7Ozs7K0NDdGtCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssd0VBQXdFO0FBQzdFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QW9EO0FBQ3BEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUCxvREFBb0Q7QUFDcEQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxpQ0FBaUMsVUFBVSxvREFBb0QsNkJBQTZCO0FBQzVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxzRUFBc0UsZUFBZTtBQUNyRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLHNGQUFzRjtBQUMvRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxXQUFXLGdFQUFnRTtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsMERBQTBEO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDJDQUEyQztBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCOzs7Ozs7OztBQy9CQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMseUpBQXlKO0FBQ3BNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0I7Ozs7Ozs7O0FDL0JBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx5SkFBeUo7QUFDcE07QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQyIsImZpbGUiOiIxLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBzdWJtaXQgfSBmcm9tICdyZWR1eC1mb3JtJztcclxuXHJcbmltcG9ydCB7b3BlbkRpYWxvZ3VlLCBjbG9zZURpYWxvZ3VlLyosIHNhdmVEaWFsb2d1ZSovfSBmcm9tICdtb2R1bGVzL2RlZmluZUluZ3JlZGllbnREaWFsb2d1ZSc7XHJcbmltcG9ydCB7c2F2ZUluZ3JlZGllbnQsIHVwZGF0ZUluZ3JlZGllbnR9IGZyb20gJ21vZHVsZXMvaW5ncmVkaWVudHNBZG1pbic7XHJcblxyXG5pbXBvcnQge0FkbWlufSBmcm9tICcuL0FkbWluJztcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuXHJcbiAgICBvcGVuRGlhbG9ndWU6ICgpID0+IHtkaXNwYXRjaChvcGVuRGlhbG9ndWUoKSk7fSxcclxuICAgIGNsb3NlRGlhbG9ndWU6ICgpID0+IHtkaXNwYXRjaChjbG9zZURpYWxvZ3VlKCkpO30sXHJcbiAgICBzYXZlRGlhbG9ndWU6ICgpID0+IHtkaXNwYXRjaChzdWJtaXQoJ21hbmFnZU51dHJpZW50cycpKTsgZGlzcGF0Y2goY2xvc2VEaWFsb2d1ZSgpKTt9LFxyXG5cclxuICAgIHNhdmVJbmdyZWRpZW50OiAodmFsdWVzLCBlZGl0SWQpID0+IHtlZGl0SWQgPyBkaXNwYXRjaCh1cGRhdGVJbmdyZWRpZW50KHZhbHVlcywgZWRpdElkKSkgOiBkaXNwYXRjaChzYXZlSW5ncmVkaWVudCh2YWx1ZXMpKTt9XHJcbn0pO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG5cclxuICAgIG9wZW46IHN0YXRlLmRlZmluZUluZ3JlZGllbnREaWFsb2d1ZS5vcGVuLFxyXG4gICAgaW5pdGlhbFZhbHVlczogc3RhdGUuZGVmaW5lSW5ncmVkaWVudERpYWxvZ3VlLmluaXRpYWxWYWx1ZXMsXHJcbiAgICBlZGl0SWQ6IHN0YXRlLmRlZmluZUluZ3JlZGllbnREaWFsb2d1ZS5lZGl0SWRcclxufSk7XHJcblxyXG5jb25zdCBBZG1pbkNvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFkbWluKTtcclxuXHJcbmV4cG9ydCB7QWRtaW5Db250YWluZXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvQWRtaW4vQWRtaW5Db250YWluZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfVGV4dEZpZWxkID0gcmVxdWlyZSgnLi9UZXh0RmllbGQnKTtcblxudmFyIF9UZXh0RmllbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dEZpZWxkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1RleHRGaWVsZDIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3NDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdldENsYXNzO1xuXG52YXIgX2ZsZXhib3hncmlkID0gcmVxdWlyZSgnZmxleGJveGdyaWQvZGlzdC9mbGV4Ym94Z3JpZC5jc3MnKTtcblxudmFyIF9mbGV4Ym94Z3JpZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mbGV4Ym94Z3JpZCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldENsYXNzKGNsYXNzTmFtZSkge1xuICByZXR1cm4gX2ZsZXhib3hncmlkMi5kZWZhdWx0ICYmIF9mbGV4Ym94Z3JpZDIuZGVmYXVsdFtjbGFzc05hbWVdID8gX2ZsZXhib3hncmlkMi5kZWZhdWx0W2NsYXNzTmFtZV0gOiBjbGFzc05hbWU7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWZsZXhib3gtZ3JpZC9saWIvY2xhc3NOYW1lcy5qc1xuLy8gbW9kdWxlIGlkID0gNzQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlUHJvcHM7XG5mdW5jdGlvbiBjcmVhdGVQcm9wcyhwcm9wVHlwZXMsIHByb3BzLCBjbGFzc05hbWVzKSB7XG4gIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gIE9iamVjdC5rZXlzKHByb3BzKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBrZXkgPT09ICdjaGlsZHJlbicgfHwgIXByb3BUeXBlc1trZXldO1xuICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gbmV3UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gIH0pO1xuXG4gIHZhciBjbGFzc05hbWUgPSBjbGFzc05hbWVzLmZpbHRlcihmdW5jdGlvbiAoY24pIHtcbiAgICByZXR1cm4gY247XG4gIH0pLmpvaW4oJyAnKTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG5ld1Byb3BzLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL2NyZWF0ZVByb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSA3NDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldENvbHVtblByb3BzID0gZXhwb3J0cy5Db2wgPSBleHBvcnRzLmdldFJvd1Byb3BzID0gZXhwb3J0cy5Sb3cgPSBleHBvcnRzLkdyaWQgPSB1bmRlZmluZWQ7XG5cbnZhciBfUm93MiA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9Sb3cnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdnZXRSb3dQcm9wcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9Sb3cyLmdldFJvd1Byb3BzO1xuICB9XG59KTtcblxudmFyIF9Db2wyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0NvbCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2dldENvbHVtblByb3BzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX0NvbDIuZ2V0Q29sdW1uUHJvcHM7XG4gIH1cbn0pO1xuXG52YXIgX0dyaWQyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0dyaWQnKTtcblxudmFyIF9HcmlkMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0dyaWQyKTtcblxudmFyIF9Sb3czID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm93Mik7XG5cbnZhciBfQ29sMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvbDIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLkdyaWQgPSBfR3JpZDMuZGVmYXVsdDtcbmV4cG9ydHMuUm93ID0gX1JvdzMuZGVmYXVsdDtcbmV4cG9ydHMuQ29sID0gX0NvbDMuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtZmxleGJveC1ncmlkL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHZhciByZXN1bHQgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxudmFyIF9jb2xvck1hbmlwdWxhdG9yID0gcmVxdWlyZSgnLi4vdXRpbHMvY29sb3JNYW5pcHVsYXRvcicpO1xuXG52YXIgX0VuaGFuY2VkQnV0dG9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvRW5oYW5jZWRCdXR0b24nKTtcblxudmFyIF9FbmhhbmNlZEJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FbmhhbmNlZEJ1dHRvbik7XG5cbnZhciBfUGFwZXIgPSByZXF1aXJlKCcuLi9QYXBlcicpO1xuXG52YXIgX1BhcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhcGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdmFsaWRhdGVMYWJlbChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXByb3BzLmNoaWxkcmVuICYmIHByb3BzLmxhYmVsICE9PSAwICYmICFwcm9wcy5sYWJlbCAmJiAhcHJvcHMuaWNvbikge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignUmVxdWlyZWQgcHJvcCBsYWJlbCBvciBjaGlsZHJlbiBvciBpY29uIHdhcyBub3Qgc3BlY2lmaWVkIGluICcgKyBjb21wb25lbnROYW1lICsgJy4nKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0LCBzdGF0ZSkge1xuICB2YXIgX2NvbnRleHQkbXVpVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lLFxuICAgICAgYmFzZVRoZW1lID0gX2NvbnRleHQkbXVpVGhlbWUuYmFzZVRoZW1lLFxuICAgICAgYnV0dG9uID0gX2NvbnRleHQkbXVpVGhlbWUuYnV0dG9uLFxuICAgICAgcmFpc2VkQnV0dG9uID0gX2NvbnRleHQkbXVpVGhlbWUucmFpc2VkQnV0dG9uLFxuICAgICAgYm9yZGVyUmFkaXVzID0gX2NvbnRleHQkbXVpVGhlbWUuYm9yZGVyUmFkaXVzO1xuICB2YXIgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkQmFja2dyb3VuZENvbG9yID0gcHJvcHMuZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBkaXNhYmxlZExhYmVsQ29sb3IgPSBwcm9wcy5kaXNhYmxlZExhYmVsQ29sb3IsXG4gICAgICBmdWxsV2lkdGggPSBwcm9wcy5mdWxsV2lkdGgsXG4gICAgICBpY29uID0gcHJvcHMuaWNvbixcbiAgICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICBsYWJlbFBvc2l0aW9uID0gcHJvcHMubGFiZWxQb3NpdGlvbixcbiAgICAgIHByaW1hcnkgPSBwcm9wcy5wcmltYXJ5LFxuICAgICAgc2Vjb25kYXJ5ID0gcHJvcHMuc2Vjb25kYXJ5LFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZTtcblxuXG4gIHZhciBhbW91bnQgPSBwcmltYXJ5IHx8IHNlY29uZGFyeSA/IDAuNCA6IDAuMDg7XG5cbiAgdmFyIGJhY2tncm91bmRDb2xvciA9IHJhaXNlZEJ1dHRvbi5jb2xvcjtcbiAgdmFyIGxhYmVsQ29sb3IgPSByYWlzZWRCdXR0b24udGV4dENvbG9yO1xuXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmRDb2xvciA9IGRpc2FibGVkQmFja2dyb3VuZENvbG9yIHx8IHJhaXNlZEJ1dHRvbi5kaXNhYmxlZENvbG9yO1xuICAgIGxhYmVsQ29sb3IgPSBkaXNhYmxlZExhYmVsQ29sb3IgfHwgcmFpc2VkQnV0dG9uLmRpc2FibGVkVGV4dENvbG9yO1xuICB9IGVsc2UgaWYgKHByaW1hcnkpIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3IgPSByYWlzZWRCdXR0b24ucHJpbWFyeUNvbG9yO1xuICAgIGxhYmVsQ29sb3IgPSByYWlzZWRCdXR0b24ucHJpbWFyeVRleHRDb2xvcjtcbiAgfSBlbHNlIGlmIChzZWNvbmRhcnkpIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3IgPSByYWlzZWRCdXR0b24uc2Vjb25kYXJ5Q29sb3I7XG4gICAgbGFiZWxDb2xvciA9IHJhaXNlZEJ1dHRvbi5zZWNvbmRhcnlUZXh0Q29sb3I7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHByb3BzLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgYmFja2dyb3VuZENvbG9yID0gcHJvcHMuYmFja2dyb3VuZENvbG9yO1xuICAgIH1cbiAgICBpZiAocHJvcHMubGFiZWxDb2xvcikge1xuICAgICAgbGFiZWxDb2xvciA9IHByb3BzLmxhYmVsQ29sb3I7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1dHRvbkhlaWdodCA9IHN0eWxlICYmIHN0eWxlLmhlaWdodCB8fCBidXR0b24uaGVpZ2h0O1xuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpLFxuICAgICAgbWluV2lkdGg6IGZ1bGxXaWR0aCA/ICcxMDAlJyA6IGJ1dHRvbi5taW5XaWR0aFxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBoZWlnaHQ6IGJ1dHRvbkhlaWdodCxcbiAgICAgIGxpbmVIZWlnaHQ6IGJ1dHRvbkhlaWdodCArICdweCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgICAgLy8gVGhhdCdzIHRoZSBkZWZhdWx0IHZhbHVlIGZvciBhIGJ1dHRvbiBidXQgbm90IGEgbGlua1xuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGZvbnRTaXplOiByYWlzZWRCdXR0b24uZm9udFNpemUsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwLFxuICAgICAgdGV4dFRyYW5zZm9ybTogcmFpc2VkQnV0dG9uLnRleHRUcmFuc2Zvcm0gfHwgYnV0dG9uLnRleHRUcmFuc2Zvcm0gfHwgJ3VwcGVyY2FzZScsXG4gICAgICBmb250V2VpZ2h0OiByYWlzZWRCdXR0b24uZm9udFdlaWdodCxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIHBhZGRpbmdMZWZ0OiBpY29uICYmIGxhYmVsUG9zaXRpb24gIT09ICdiZWZvcmUnID8gOCA6IGJhc2VUaGVtZS5zcGFjaW5nLmRlc2t0b3BHdXR0ZXJMZXNzLFxuICAgICAgcGFkZGluZ1JpZ2h0OiBpY29uICYmIGxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnID8gOCA6IGJhc2VUaGVtZS5zcGFjaW5nLmRlc2t0b3BHdXR0ZXJMZXNzLFxuICAgICAgY29sb3I6IGxhYmVsQ29sb3JcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgbWFyZ2luTGVmdDogbGFiZWwgJiYgbGFiZWxQb3NpdGlvbiAhPT0gJ2JlZm9yZScgPyAxMiA6IDAsXG4gICAgICBtYXJnaW5SaWdodDogbGFiZWwgJiYgbGFiZWxQb3NpdGlvbiA9PT0gJ2JlZm9yZScgPyAxMiA6IDBcbiAgICB9LFxuICAgIG92ZXJsYXk6IHtcbiAgICAgIGhlaWdodDogYnV0dG9uSGVpZ2h0LFxuICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IChzdGF0ZS5rZXlib2FyZEZvY3VzZWQgfHwgc3RhdGUuaG92ZXJlZCkgJiYgIWRpc2FibGVkICYmICgwLCBfY29sb3JNYW5pcHVsYXRvci5mYWRlKShsYWJlbENvbG9yLCBhbW91bnQpLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIHRvcDogMFxuICAgIH0sXG4gICAgcmlwcGxlOiB7XG4gICAgICBjb2xvcjogbGFiZWxDb2xvcixcbiAgICAgIG9wYWNpdHk6ICEocHJpbWFyeSB8fCBzZWNvbmRhcnkpID8gMC4xIDogMC4xNlxuICAgIH1cbiAgfTtcbn1cblxudmFyIFJhaXNlZEJ1dHRvbiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFJhaXNlZEJ1dHRvbiwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmFpc2VkQnV0dG9uKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFJhaXNlZEJ1dHRvbik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBSYWlzZWRCdXR0b24uX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFJhaXNlZEJ1dHRvbikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgaG92ZXJlZDogZmFsc2UsXG4gICAgICBrZXlib2FyZEZvY3VzZWQ6IGZhbHNlLFxuICAgICAgdG91Y2hlZDogZmFsc2UsXG4gICAgICBpbml0aWFsWkRlcHRoOiAwLFxuICAgICAgekRlcHRoOiAwXG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBvbmx5IGxpc3RlbiB0byBsZWZ0IGNsaWNrc1xuICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgekRlcHRoOiBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoICsgMVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vdXNlRG93bikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VVcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB6RGVwdGg6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGhcbiAgICAgIH0pO1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VVcCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMuc3RhdGUua2V5Ym9hcmRGb2N1c2VkKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB6RGVwdGg6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGgsXG4gICAgICAgICAgaG92ZXJlZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZUxlYXZlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VMZWF2ZShldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VFbnRlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5rZXlib2FyZEZvY3VzZWQgJiYgIV90aGlzLnN0YXRlLnRvdWNoZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGhvdmVyZWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZUVudGVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VFbnRlcihldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0b3VjaGVkOiB0cnVlLFxuICAgICAgICB6RGVwdGg6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGggKyAxXG4gICAgICB9KTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uVG91Y2hTdGFydCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vblRvdWNoU3RhcnQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZVRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRvdWNoZWQ6IHRydWUsXG4gICAgICAgIHpEZXB0aDogX3RoaXMuc3RhdGUuaW5pdGlhbFpEZXB0aFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblRvdWNoRW5kKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uVG91Y2hFbmQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZUtleWJvYXJkRm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQsIGtleWJvYXJkRm9jdXNlZCkge1xuICAgICAgdmFyIHpEZXB0aCA9IGtleWJvYXJkRm9jdXNlZCAmJiAhX3RoaXMucHJvcHMuZGlzYWJsZWQgPyBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoICsgMSA6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGg7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgekRlcHRoOiB6RGVwdGgsXG4gICAgICAgIGtleWJvYXJkRm9jdXNlZDoga2V5Ym9hcmRGb2N1c2VkXG4gICAgICB9KTtcbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoUmFpc2VkQnV0dG9uLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHZhciB6RGVwdGggPSB0aGlzLnByb3BzLmRpc2FibGVkID8gMCA6IDE7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgekRlcHRoOiB6RGVwdGgsXG4gICAgICAgIGluaXRpYWxaRGVwdGg6IHpEZXB0aFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgekRlcHRoID0gbmV4dFByb3BzLmRpc2FibGVkID8gMCA6IDE7XG4gICAgICB2YXIgbmV4dFN0YXRlID0ge1xuICAgICAgICB6RGVwdGg6IHpEZXB0aCxcbiAgICAgICAgaW5pdGlhbFpEZXB0aDogekRlcHRoXG4gICAgICB9O1xuXG4gICAgICBpZiAobmV4dFByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIG5leHRTdGF0ZS5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBfcHJvcHMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgIGJ1dHRvblN0eWxlID0gX3Byb3BzLmJ1dHRvblN0eWxlLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3IgPSBfcHJvcHMuZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgZGlzYWJsZWRMYWJlbENvbG9yID0gX3Byb3BzLmRpc2FibGVkTGFiZWxDb2xvcixcbiAgICAgICAgICBmdWxsV2lkdGggPSBfcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgICAgIGljb24gPSBfcHJvcHMuaWNvbixcbiAgICAgICAgICBsYWJlbCA9IF9wcm9wcy5sYWJlbCxcbiAgICAgICAgICBsYWJlbENvbG9yID0gX3Byb3BzLmxhYmVsQ29sb3IsXG4gICAgICAgICAgbGFiZWxQb3NpdGlvbiA9IF9wcm9wcy5sYWJlbFBvc2l0aW9uLFxuICAgICAgICAgIGxhYmVsU3R5bGUgPSBfcHJvcHMubGFiZWxTdHlsZSxcbiAgICAgICAgICBvdmVybGF5U3R5bGUgPSBfcHJvcHMub3ZlcmxheVN0eWxlLFxuICAgICAgICAgIHByaW1hcnkgPSBfcHJvcHMucHJpbWFyeSxcbiAgICAgICAgICByaXBwbGVTdHlsZSA9IF9wcm9wcy5yaXBwbGVTdHlsZSxcbiAgICAgICAgICBzZWNvbmRhcnkgPSBfcHJvcHMuc2Vjb25kYXJ5LFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2JhY2tncm91bmRDb2xvcicsICdidXR0b25TdHlsZScsICdjaGlsZHJlbicsICdjbGFzc05hbWUnLCAnZGlzYWJsZWQnLCAnZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3InLCAnZGlzYWJsZWRMYWJlbENvbG9yJywgJ2Z1bGxXaWR0aCcsICdpY29uJywgJ2xhYmVsJywgJ2xhYmVsQ29sb3InLCAnbGFiZWxQb3NpdGlvbicsICdsYWJlbFN0eWxlJywgJ292ZXJsYXlTdHlsZScsICdwcmltYXJ5JywgJ3JpcHBsZVN0eWxlJywgJ3NlY29uZGFyeScsICdzdHlsZSddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0LCB0aGlzLnN0YXRlKTtcbiAgICAgIHZhciBtZXJnZWRSaXBwbGVTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5yaXBwbGUsIHJpcHBsZVN0eWxlKTtcblxuICAgICAgdmFyIGJ1dHRvbkV2ZW50SGFuZGxlcnMgPSBkaXNhYmxlZCA/IHt9IDoge1xuICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVNb3VzZURvd24sXG4gICAgICAgIG9uTW91c2VVcDogdGhpcy5oYW5kbGVNb3VzZVVwLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMuaGFuZGxlTW91c2VMZWF2ZSxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhhbmRsZU1vdXNlRW50ZXIsXG4gICAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuICAgICAgICBvblRvdWNoRW5kOiB0aGlzLmhhbmRsZVRvdWNoRW5kLFxuICAgICAgICBvbktleWJvYXJkRm9jdXM6IHRoaXMuaGFuZGxlS2V5Ym9hcmRGb2N1c1xuICAgICAgfTtcblxuICAgICAgdmFyIGxhYmVsRWxlbWVudCA9IGxhYmVsICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5sYWJlbCwgbGFiZWxTdHlsZSkpLCBrZXk6ICdsYWJlbEVsZW1lbnQnIH0sXG4gICAgICAgIGxhYmVsXG4gICAgICApO1xuXG4gICAgICB2YXIgaWNvbkNsb25lZCA9IGljb24gJiYgKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGljb24sIHtcbiAgICAgICAgY29sb3I6IGljb24ucHJvcHMuY29sb3IgfHwgc3R5bGVzLmxhYmVsLmNvbG9yLFxuICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5pY29uLCBpY29uLnByb3BzLnN0eWxlKSxcbiAgICAgICAga2V5OiAnaWNvbkNsb25lZCdcbiAgICAgIH0pO1xuXG4gICAgICAvLyBQbGFjZSBsYWJlbCBiZWZvcmUgb3IgYWZ0ZXIgY2hpbGRyZW4uXG4gICAgICB2YXIgZW5oYW5jZWRCdXR0b25DaGlsZHJlbiA9IGxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnID8gW2xhYmVsRWxlbWVudCwgaWNvbkNsb25lZCwgY2hpbGRyZW5dIDogW2NoaWxkcmVuLCBpY29uQ2xvbmVkLCBsYWJlbEVsZW1lbnRdO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9QYXBlcjIuZGVmYXVsdCxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSxcbiAgICAgICAgICB6RGVwdGg6IHRoaXMuc3RhdGUuekRlcHRoXG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9FbmhhbmNlZEJ1dHRvbjIuZGVmYXVsdCxcbiAgICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwgYnV0dG9uRXZlbnRIYW5kbGVycywge1xuICAgICAgICAgICAgcmVmOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmJ1dHRvbiwgYnV0dG9uU3R5bGUpLFxuICAgICAgICAgICAgZm9jdXNSaXBwbGVDb2xvcjogbWVyZ2VkUmlwcGxlU3R5bGVzLmNvbG9yLFxuICAgICAgICAgICAgdG91Y2hSaXBwbGVDb2xvcjogbWVyZ2VkUmlwcGxlU3R5bGVzLmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNSaXBwbGVPcGFjaXR5OiBtZXJnZWRSaXBwbGVTdHlsZXMub3BhY2l0eSxcbiAgICAgICAgICAgIHRvdWNoUmlwcGxlT3BhY2l0eTogbWVyZ2VkUmlwcGxlU3R5bGVzLm9wYWNpdHlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6ICdvdmVybGF5JyxcbiAgICAgICAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5vdmVybGF5LCBvdmVybGF5U3R5bGUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuaGFuY2VkQnV0dG9uQ2hpbGRyZW5cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBSYWlzZWRCdXR0b247XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5SYWlzZWRCdXR0b24ubXVpTmFtZSA9ICdSYWlzZWRCdXR0b24nO1xuUmFpc2VkQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBsYWJlbFBvc2l0aW9uOiAnYWZ0ZXInLFxuICBmdWxsV2lkdGg6IGZhbHNlLFxuICBwcmltYXJ5OiBmYWxzZSxcbiAgc2Vjb25kYXJ5OiBmYWxzZVxufTtcblJhaXNlZEJ1dHRvbi5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuUmFpc2VkQnV0dG9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSBidXR0b24sXG4gICAqIGJ1dCBub3QgdGhlIGRlZmF1bHQgZGlzYWJsZWQgYmFja2dyb3VuZCBjb2xvclxuICAgKiAodXNlIGBkaXNhYmxlZEJhY2tncm91bmRDb2xvcmAgZm9yIHRoaXMpLlxuICAgKi9cbiAgYmFja2dyb3VuZENvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBidXR0b24gZWxlbWVudC5cbiAgICovXG4gIGJ1dHRvblN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBidXR0b24uXG4gICAqIElmIGEgbGFiZWwgaXMgcHJvdmlkZWQgdmlhIHRoZSBgbGFiZWxgIHByb3AsIHRoZSB0ZXh0IHdpdGhpbiB0aGUgbGFiZWxcbiAgICogd2lsbCBiZSBkaXNwbGF5ZWQgaW4gYWRkaXRpb24gdG8gdGhlIGNvbnRlbnQgcHJvdmlkZWQgaGVyZS5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgQ1NTIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgICogVGhlIGVsZW1lbnQgdG8gdXNlIGFzIHRoZSBjb250YWluZXIgZm9yIHRoZSBSYWlzZWRCdXR0b24uIEVpdGhlciBhIHN0cmluZyB0b1xuICAgICogdXNlIGEgRE9NIGVsZW1lbnQgb3IgYSBSZWFjdEVsZW1lbnQuIFRoaXMgaXMgdXNlZnVsIGZvciB3cmFwcGluZyB0aGVcbiAgICAqIFJhaXNlZEJ1dHRvbiBpbiBhIGN1c3RvbSBMaW5rIGNvbXBvbmVudC4gSWYgYSBSZWFjdEVsZW1lbnQgaXMgZ2l2ZW4sIGVuc3VyZVxuICAgICogdGhhdCBpdCBwYXNzZXMgYWxsIG9mIGl0cyBnaXZlbiBwcm9wcyB0aHJvdWdoIHRvIHRoZSB1bmRlcmx5aW5nIERPTVxuICAgICogZWxlbWVudCBhbmQgcmVuZGVycyBpdHMgY2hpbGRyZW4gcHJvcCBmb3IgcHJvcGVyIGludGVncmF0aW9uLlxuICAgICovXG4gIGNvbnRhaW5lckVsZW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50XSksXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgZWxlbWVudCdzIHJpcHBsZSBlZmZlY3Qgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVUb3VjaFJpcHBsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSBidXR0b25cbiAgICogd2hlbiBpdCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkQmFja2dyb3VuZENvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgYnV0dG9uJ3MgbGFiZWwgd2hlbiB0aGUgYnV0dG9uIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWRMYWJlbENvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBidXR0b24gd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFRoZSBVUkwgdG8gbGluayB0byB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cbiAgICovXG4gIGhyZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogQW4gaWNvbiB0byBiZSBkaXNwbGF5ZWQgd2l0aGluIHRoZSBidXR0b24uXG4gICAqL1xuICBpY29uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgdG8gYmUgZGlzcGxheWVkIHdpdGhpbiB0aGUgYnV0dG9uLlxuICAgKiBJZiBjb250ZW50IGlzIHByb3ZpZGVkIHZpYSB0aGUgYGNoaWxkcmVuYCBwcm9wLCB0aGF0IGNvbnRlbnQgd2lsbCBiZVxuICAgKiBkaXNwbGF5ZWQgaW4gYWRkaXRpb24gdG8gdGhlIGxhYmVsIHByb3ZpZGVkIGhlcmUuXG4gICAqL1xuICBsYWJlbDogdmFsaWRhdGVMYWJlbCxcbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgYnV0dG9uJ3MgbGFiZWwuXG4gICAqL1xuICBsYWJlbENvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgYnV0dG9uJ3MgbGFiZWwgcmVsYXRpdmUgdG8gdGhlIGJ1dHRvbidzIGBjaGlsZHJlbmAuXG4gICAqL1xuICBsYWJlbFBvc2l0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsnYmVmb3JlJywgJ2FmdGVyJ10pLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGJ1dHRvbidzIGxhYmVsIGVsZW1lbnQuXG4gICAqL1xuICBsYWJlbFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZURvd246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZUVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VMZWF2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlVXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Ub3VjaEVuZDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvblRvdWNoU3RhcnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gdGhlIGJ1dHRvbiBpcyB0b3VjaC10YXBwZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUb3VjaFRhcCBldmVudCB0YXJnZXRpbmcgdGhlIGJ1dHRvbi5cbiAgICovXG4gIG9uVG91Y2hUYXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUgc3R5bGUgb2YgdGhlIGJ1dHRvbiBvdmVybGF5LlxuICAgKi9cbiAgb3ZlcmxheVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBidXR0b24gd2lsbCB1c2UgdGhlIHRoZW1lJ3MgcHJpbWFyeSBjb2xvci5cbiAgICovXG4gIHByaW1hcnk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUgc3R5bGUgb2YgdGhlIHJpcHBsZSBlbGVtZW50LlxuICAgKi9cbiAgcmlwcGxlU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIHVzZSB0aGUgdGhlbWUncyBzZWNvbmRhcnkgY29sb3IuXG4gICAqIElmIGJvdGggYHNlY29uZGFyeWAgYW5kIGBwcmltYXJ5YCBhcmUgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIHVzZVxuICAgKiB0aGUgdGhlbWUncyBwcmltYXJ5IGNvbG9yLlxuICAgKi9cbiAgc2Vjb25kYXJ5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBSYWlzZWRCdXR0b247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbi9SYWlzZWRCdXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDc0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX1JhaXNlZEJ1dHRvbiA9IHJlcXVpcmUoJy4vUmFpc2VkQnV0dG9uJyk7XG5cbnZhciBfUmFpc2VkQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JhaXNlZEJ1dHRvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9SYWlzZWRCdXR0b24yLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdEV2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCdyZWFjdC1ldmVudC1saXN0ZW5lcicpO1xuXG52YXIgX3JlYWN0RXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEV2ZW50TGlzdGVuZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcm93c0hlaWdodCA9IDI0O1xuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQsIHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScgfSxcbiAgICB0ZXh0YXJlYToge1xuICAgICAgaGVpZ2h0OiBzdGF0ZS5oZWlnaHQsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgcmVzaXplOiAnbm9uZScsXG4gICAgICBmb250OiAnaW5oZXJpdCcsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgY3Vyc29yOiAnaW5oZXJpdCdcbiAgICB9LFxuICAgIHNoYWRvdzoge1xuICAgICAgcmVzaXplOiAnbm9uZScsXG4gICAgICAvLyBPdmVyZmxvdyBhbHNvIG5lZWRlZCB0byBoZXJlIHRvIHJlbW92ZSB0aGUgZXh0cmEgcm93XG4gICAgICAvLyBhZGRlZCB0byB0ZXh0YXJlYXMgaW4gRmlyZWZveC5cbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIC8vIFZpc2liaWxpdHkgbmVlZGVkIHRvIGhpZGUgdGhlIGV4dHJhIHRleHQgYXJlYSBvbiBpcGFkc1xuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGhlaWdodDogJ2F1dG8nXG4gICAgfVxuICB9O1xufVxuXG52YXIgRW5oYW5jZWRUZXh0YXJlYSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKEVuaGFuY2VkVGV4dGFyZWEsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEVuaGFuY2VkVGV4dGFyZWEoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgRW5oYW5jZWRUZXh0YXJlYSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBFbmhhbmNlZFRleHRhcmVhLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShFbmhhbmNlZFRleHRhcmVhKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBoZWlnaHQ6IG51bGxcbiAgICB9LCBfdGhpcy5oYW5kbGVSZXNpemUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnN5bmNIZWlnaHRXaXRoU2hhZG93KHVuZGVmaW5lZCwgZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICBfdGhpcy5zeW5jSGVpZ2h0V2l0aFNoYWRvdyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlTGluaycpKSB7XG4gICAgICAgIF90aGlzLnByb3BzLnZhbHVlTGluay5yZXF1ZXN0Q2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKEVuaGFuY2VkVGV4dGFyZWEsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5yb3dzICogcm93c0hlaWdodFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc3luY0hlaWdodFdpdGhTaGFkb3coKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUgfHwgbmV4dFByb3BzLnJvd3NNYXggIT09IHRoaXMucHJvcHMucm93c01heCkge1xuICAgICAgICB0aGlzLnN5bmNIZWlnaHRXaXRoU2hhZG93KG5leHRQcm9wcy52YWx1ZSwgbnVsbCwgbmV4dFByb3BzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRJbnB1dE5vZGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnB1dE5vZGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZzLmlucHV0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgIHRoaXMuZ2V0SW5wdXROb2RlKCkudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc3luY0hlaWdodFdpdGhTaGFkb3codmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N5bmNIZWlnaHRXaXRoU2hhZG93JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3luY0hlaWdodFdpdGhTaGFkb3cobmV3VmFsdWUsIGV2ZW50LCBwcm9wcykge1xuICAgICAgdmFyIHNoYWRvdyA9IHRoaXMucmVmcy5zaGFkb3c7XG4gICAgICB2YXIgZGlzcGxheVRleHQgPSB0aGlzLnByb3BzLmhpbnRUZXh0ICYmIChuZXdWYWx1ZSA9PT0gJycgfHwgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBuZXdWYWx1ZSA9PT0gbnVsbCkgPyB0aGlzLnByb3BzLmhpbnRUZXh0IDogbmV3VmFsdWU7XG5cbiAgICAgIGlmIChkaXNwbGF5VGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNoYWRvdy52YWx1ZSA9IGRpc3BsYXlUZXh0O1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3SGVpZ2h0ID0gc2hhZG93LnNjcm9sbEhlaWdodDtcblxuICAgICAgLy8gR3VhcmRpbmcgZm9yIGpzZG9tLCB3aGVyZSBzY3JvbGxIZWlnaHQgaXNuJ3QgcHJlc2VudC5cbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdG1wdmFyL2pzZG9tL2lzc3Vlcy8xMDEzXG4gICAgICBpZiAobmV3SGVpZ2h0ID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgICAgcHJvcHMgPSBwcm9wcyB8fCB0aGlzLnByb3BzO1xuXG4gICAgICBpZiAocHJvcHMucm93c01heCA+PSBwcm9wcy5yb3dzKSB7XG4gICAgICAgIG5ld0hlaWdodCA9IE1hdGgubWluKHByb3BzLnJvd3NNYXggKiByb3dzSGVpZ2h0LCBuZXdIZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICBuZXdIZWlnaHQgPSBNYXRoLm1heChuZXdIZWlnaHQsIHJvd3NIZWlnaHQpO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5oZWlnaHQgIT09IG5ld0hlaWdodCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBoZWlnaHQ6IG5ld0hlaWdodFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocHJvcHMub25IZWlnaHRDaGFuZ2UpIHtcbiAgICAgICAgICBwcm9wcy5vbkhlaWdodENoYW5nZShldmVudCwgbmV3SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3Byb3BzLm9uQ2hhbmdlLFxuICAgICAgICAgIG9uSGVpZ2h0Q2hhbmdlID0gX3Byb3BzLm9uSGVpZ2h0Q2hhbmdlLFxuICAgICAgICAgIHJvd3MgPSBfcHJvcHMucm93cyxcbiAgICAgICAgICByb3dzTWF4ID0gX3Byb3BzLnJvd3NNYXgsXG4gICAgICAgICAgc2hhZG93U3R5bGUgPSBfcHJvcHMuc2hhZG93U3R5bGUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgaGludFRleHQgPSBfcHJvcHMuaGludFRleHQsXG4gICAgICAgICAgdGV4dGFyZWFTdHlsZSA9IF9wcm9wcy50ZXh0YXJlYVN0eWxlLFxuICAgICAgICAgIHZhbHVlTGluayA9IF9wcm9wcy52YWx1ZUxpbmssXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnb25DaGFuZ2UnLCAnb25IZWlnaHRDaGFuZ2UnLCAncm93cycsICdyb3dzTWF4JywgJ3NoYWRvd1N0eWxlJywgJ3N0eWxlJywgJ2hpbnRUZXh0JywgJ3RleHRhcmVhU3R5bGUnLCAndmFsdWVMaW5rJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMuc3RhdGUpO1xuICAgICAgdmFyIHJvb3RTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKTtcbiAgICAgIHZhciB0ZXh0YXJlYVN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMudGV4dGFyZWEsIHRleHRhcmVhU3R5bGUpO1xuICAgICAgdmFyIHNoYWRvd1N0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgdGV4dGFyZWFTdHlsZXMsIHN0eWxlcy5zaGFkb3csIHNoYWRvd1N0eWxlKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlTGluaycpKSB7XG4gICAgICAgIG90aGVyLnZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZUxpbmsudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMocm9vdFN0eWxlcykgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0RXZlbnRMaXN0ZW5lcjIuZGVmYXVsdCwgeyB0YXJnZXQ6ICd3aW5kb3cnLCBvblJlc2l6ZTogdGhpcy5oYW5kbGVSZXNpemUgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIHtcbiAgICAgICAgICByZWY6ICdzaGFkb3cnLFxuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKHNoYWRvd1N0eWxlcyksXG4gICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgcm93czogdGhpcy5wcm9wcy5yb3dzLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUsXG4gICAgICAgICAgdmFsdWVMaW5rOiB0aGlzLnByb3BzLnZhbHVlTGlua1xuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHtcbiAgICAgICAgICByZWY6ICdpbnB1dCcsXG4gICAgICAgICAgcm93czogdGhpcy5wcm9wcy5yb3dzLFxuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKHRleHRhcmVhU3R5bGVzKSxcbiAgICAgICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVDaGFuZ2VcbiAgICAgICAgfSkpXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRW5oYW5jZWRUZXh0YXJlYTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkVuaGFuY2VkVGV4dGFyZWEuZGVmYXVsdFByb3BzID0ge1xuICByb3dzOiAxXG59O1xuRW5oYW5jZWRUZXh0YXJlYS5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuRW5oYW5jZWRUZXh0YXJlYS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGRlZmF1bHRWYWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGhpbnRUZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uSGVpZ2h0Q2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHJvd3M6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICByb3dzTWF4OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgc2hhZG93U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgdGV4dGFyZWFTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdmFsdWVMaW5rOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gRW5oYW5jZWRUZXh0YXJlYTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL0VuaGFuY2VkVGV4dGFyZWEuanNcbi8vIG1vZHVsZSBpZCA9IDc0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgncmVjb21wb3NlL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFsbG93RXF1YWwpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX0VuaGFuY2VkVGV4dGFyZWEgPSByZXF1aXJlKCcuL0VuaGFuY2VkVGV4dGFyZWEnKTtcblxudmFyIF9FbmhhbmNlZFRleHRhcmVhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VuaGFuY2VkVGV4dGFyZWEpO1xuXG52YXIgX1RleHRGaWVsZEhpbnQgPSByZXF1aXJlKCcuL1RleHRGaWVsZEhpbnQnKTtcblxudmFyIF9UZXh0RmllbGRIaW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RleHRGaWVsZEhpbnQpO1xuXG52YXIgX1RleHRGaWVsZExhYmVsID0gcmVxdWlyZSgnLi9UZXh0RmllbGRMYWJlbCcpO1xuXG52YXIgX1RleHRGaWVsZExhYmVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RleHRGaWVsZExhYmVsKTtcblxudmFyIF9UZXh0RmllbGRVbmRlcmxpbmUgPSByZXF1aXJlKCcuL1RleHRGaWVsZFVuZGVybGluZScpO1xuXG52YXIgX1RleHRGaWVsZFVuZGVybGluZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXh0RmllbGRVbmRlcmxpbmUpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCwgc3RhdGUpIHtcbiAgdmFyIF9jb250ZXh0JG11aVRoZW1lID0gY29udGV4dC5tdWlUaGVtZSxcbiAgICAgIGJhc2VUaGVtZSA9IF9jb250ZXh0JG11aVRoZW1lLmJhc2VUaGVtZSxcbiAgICAgIF9jb250ZXh0JG11aVRoZW1lJHRleCA9IF9jb250ZXh0JG11aVRoZW1lLnRleHRGaWVsZCxcbiAgICAgIGZsb2F0aW5nTGFiZWxDb2xvciA9IF9jb250ZXh0JG11aVRoZW1lJHRleC5mbG9hdGluZ0xhYmVsQ29sb3IsXG4gICAgICBmb2N1c0NvbG9yID0gX2NvbnRleHQkbXVpVGhlbWUkdGV4LmZvY3VzQ29sb3IsXG4gICAgICB0ZXh0Q29sb3IgPSBfY29udGV4dCRtdWlUaGVtZSR0ZXgudGV4dENvbG9yLFxuICAgICAgZGlzYWJsZWRUZXh0Q29sb3IgPSBfY29udGV4dCRtdWlUaGVtZSR0ZXguZGlzYWJsZWRUZXh0Q29sb3IsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBfY29udGV4dCRtdWlUaGVtZSR0ZXguYmFja2dyb3VuZENvbG9yLFxuICAgICAgZXJyb3JDb2xvciA9IF9jb250ZXh0JG11aVRoZW1lJHRleC5lcnJvckNvbG9yO1xuXG5cbiAgdmFyIHN0eWxlcyA9IHtcbiAgICByb290OiB7XG4gICAgICBmb250U2l6ZTogMTYsXG4gICAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXG4gICAgICB3aWR0aDogcHJvcHMuZnVsbFdpZHRoID8gJzEwMCUnIDogMjU2LFxuICAgICAgaGVpZ2h0OiAocHJvcHMucm93cyAtIDEpICogMjQgKyAocHJvcHMuZmxvYXRpbmdMYWJlbFRleHQgPyA3MiA6IDQ4KSxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcixcbiAgICAgIGZvbnRGYW1pbHk6IGJhc2VUaGVtZS5mb250RmFtaWx5LFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzIwMG1zJywgJ2hlaWdodCcpLFxuICAgICAgY3Vyc29yOiBwcm9wcy5kaXNhYmxlZCA/ICdub3QtYWxsb3dlZCcgOiAnYXV0bydcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGJvdHRvbTogMixcbiAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgIGxpbmVIZWlnaHQ6ICcxMnB4JyxcbiAgICAgIGNvbG9yOiBlcnJvckNvbG9yLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKVxuICAgIH0sXG4gICAgZmxvYXRpbmdMYWJlbDoge1xuICAgICAgY29sb3I6IHByb3BzLmRpc2FibGVkID8gZGlzYWJsZWRUZXh0Q29sb3IgOiBmbG9hdGluZ0xhYmVsQ29sb3IsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICB9LFxuICAgIGlucHV0OiB7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDApJyxcbiAgICAgIGNvbG9yOiBwcm9wcy5kaXNhYmxlZCA/IGRpc2FibGVkVGV4dENvbG9yIDogdGV4dENvbG9yLFxuICAgICAgY3Vyc29yOiAnaW5oZXJpdCcsXG4gICAgICBmb250OiAnaW5oZXJpdCcsXG4gICAgICBXZWJraXRUZXh0RmlsbENvbG9yOiBwcm9wcy5kaXNhYmxlZCA/IGRpc2FibGVkVGV4dENvbG9yIDogdGV4dENvbG9yLFxuICAgICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6ICdyZ2JhKDAsMCwwLDApJyB9LFxuICAgIGlucHV0TmF0aXZlOiB7XG4gICAgICBhcHBlYXJhbmNlOiAndGV4dGZpZWxkJyB9XG4gIH07XG5cbiAgc3R5bGVzLnRleHRhcmVhID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMuaW5wdXQsIHtcbiAgICBtYXJnaW5Ub3A6IHByb3BzLmZsb2F0aW5nTGFiZWxUZXh0ID8gMzYgOiAxMixcbiAgICBtYXJnaW5Cb3R0b206IHByb3BzLmZsb2F0aW5nTGFiZWxUZXh0ID8gLTM2IDogLTEyLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGZvbnQ6ICdpbmhlcml0J1xuICB9KTtcblxuICAvLyBEbyBub3QgYXNzaWduIGEgaGVpZ2h0IHRvIHRoZSB0ZXh0YXJlYSBhcyBoZSBoYW5kbGVzIGl0IG9uIGhpcyBvd24uXG4gIHN0eWxlcy5pbnB1dC5oZWlnaHQgPSAnMTAwJSc7XG5cbiAgaWYgKHN0YXRlLmlzRm9jdXNlZCkge1xuICAgIHN0eWxlcy5mbG9hdGluZ0xhYmVsLmNvbG9yID0gZm9jdXNDb2xvcjtcbiAgfVxuXG4gIGlmIChwcm9wcy5mbG9hdGluZ0xhYmVsVGV4dCkge1xuICAgIHN0eWxlcy5pbnB1dC5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG5cbiAgICBpZiAoIXByb3BzLm11bHRpTGluZSkge1xuICAgICAgc3R5bGVzLmlucHV0Lm1hcmdpblRvcCA9IDE0O1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5lcnJvclRleHQpIHtcbiAgICAgIHN0eWxlcy5lcnJvci5ib3R0b20gPSAhcHJvcHMubXVsdGlMaW5lID8gc3R5bGVzLmVycm9yLmZvbnRTaXplICsgMyA6IDM7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLmVycm9yVGV4dCkge1xuICAgIGlmIChzdGF0ZS5pc0ZvY3VzZWQpIHtcbiAgICAgIHN0eWxlcy5mbG9hdGluZ0xhYmVsLmNvbG9yID0gc3R5bGVzLmVycm9yLmNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgdmFsaWQgdG8gYmUgZGlzcGxheWVkIGluc2lkZSBhbiBpbnB1dC5cbiAqXG4gKiBAcGFyYW0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RyaW5nIHByb3ZpZGVkIGlzIHZhbGlkLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSAnJyAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmICEoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKTtcbn1cblxudmFyIFRleHRGaWVsZCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFRleHRGaWVsZCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVGV4dEZpZWxkKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFRleHRGaWVsZCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBUZXh0RmllbGQuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFRleHRGaWVsZCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNGb2N1c2VkOiBmYWxzZSxcbiAgICAgIGVycm9yVGV4dDogdW5kZWZpbmVkLFxuICAgICAgaGFzVmFsdWU6IGZhbHNlXG4gICAgfSwgX3RoaXMuaGFuZGxlSW5wdXRCbHVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGlzRm9jdXNlZDogZmFsc2UgfSk7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQmx1cihldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBoYXNWYWx1ZTogaXNWYWxpZChldmVudC50YXJnZXQudmFsdWUpIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCBldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZUlucHV0Rm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGlzRm9jdXNlZDogdHJ1ZSB9KTtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZUhlaWdodENoYW5nZSA9IGZ1bmN0aW9uIChldmVudCwgaGVpZ2h0KSB7XG4gICAgICB2YXIgbmV3SGVpZ2h0ID0gaGVpZ2h0ICsgMjQ7XG4gICAgICBpZiAoX3RoaXMucHJvcHMuZmxvYXRpbmdMYWJlbFRleHQpIHtcbiAgICAgICAgbmV3SGVpZ2h0ICs9IDI0O1xuICAgICAgfVxuICAgICAgX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKF90aGlzKS5zdHlsZS5oZWlnaHQgPSBuZXdIZWlnaHQgKyAncHgnO1xuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShUZXh0RmllbGQsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgbmFtZSA9IF9wcm9wcy5uYW1lLFxuICAgICAgICAgIGhpbnRUZXh0ID0gX3Byb3BzLmhpbnRUZXh0LFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0ID0gX3Byb3BzLmZsb2F0aW5nTGFiZWxUZXh0LFxuICAgICAgICAgIGlkID0gX3Byb3BzLmlkO1xuXG5cbiAgICAgIHZhciBwcm9wc0xlYWYgPSBjaGlsZHJlbiA/IGNoaWxkcmVuLnByb3BzIDogdGhpcy5wcm9wcztcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVycm9yVGV4dDogdGhpcy5wcm9wcy5lcnJvclRleHQsXG4gICAgICAgIGhhc1ZhbHVlOiBpc1ZhbGlkKHByb3BzTGVhZi52YWx1ZSkgfHwgaXNWYWxpZChwcm9wc0xlYWYuZGVmYXVsdFZhbHVlKVxuICAgICAgfSk7XG5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkobmFtZSB8fCBoaW50VGV4dCB8fCBmbG9hdGluZ0xhYmVsVGV4dCB8fCBpZCwgJ01hdGVyaWFsLVVJOiBXZSBkb25cXCd0IGhhdmUgZW5vdWdoIGluZm9ybWF0aW9uXFxuICAgICAgdG8gYnVpbGQgYSByb2J1c3QgdW5pcXVlIGlkIGZvciB0aGUgVGV4dEZpZWxkIGNvbXBvbmVudC4gUGxlYXNlIHByb3ZpZGUgYW4gaWQgb3IgYSBuYW1lLicpIDogdm9pZCAwO1xuXG4gICAgICB2YXIgdW5pcXVlSWQgPSBuYW1lICsgJy0nICsgaGludFRleHQgKyAnLScgKyBmbG9hdGluZ0xhYmVsVGV4dCArICctJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDB4RkZGRik7XG4gICAgICB0aGlzLnVuaXF1ZUlkID0gdW5pcXVlSWQucmVwbGFjZSgvW15BLVphLXowLTktXS9naSwgJycpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKG5leHRQcm9wcy5lcnJvclRleHQgIT09IHRoaXMucHJvcHMuZXJyb3JUZXh0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGVycm9yVGV4dDogbmV4dFByb3BzLmVycm9yVGV4dFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5leHRQcm9wcy5jaGlsZHJlbiAmJiBuZXh0UHJvcHMuY2hpbGRyZW4ucHJvcHMpIHtcbiAgICAgICAgbmV4dFByb3BzID0gbmV4dFByb3BzLmNoaWxkcmVuLnByb3BzO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dFByb3BzLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgIHZhciBoYXNWYWx1ZSA9IGlzVmFsaWQobmV4dFByb3BzLnZhbHVlKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBoYXNWYWx1ZTogaGFzVmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkge1xuICAgICAgcmV0dXJuICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSkgfHwgISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLmNvbnRleHQsIG5leHRDb250ZXh0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdibHVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgIGlmICh0aGlzLmlucHV0KSB7XG4gICAgICAgIHRoaXMuZ2V0SW5wdXROb2RlKCkuYmx1cigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZvY3VzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICBpZiAodGhpcy5pbnB1dCkge1xuICAgICAgICB0aGlzLmdldElucHV0Tm9kZSgpLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2VsZWN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VsZWN0KCkge1xuICAgICAgaWYgKHRoaXMuaW5wdXQpIHtcbiAgICAgICAgdGhpcy5nZXRJbnB1dE5vZGUoKS5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5wdXQgPyB0aGlzLmdldElucHV0Tm9kZSgpLnZhbHVlIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldElucHV0Tm9kZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldElucHV0Tm9kZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuIHx8IHRoaXMucHJvcHMubXVsdGlMaW5lID8gdGhpcy5pbnB1dC5nZXRJbnB1dE5vZGUoKSA6IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLmlucHV0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfaXNDb250cm9sbGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2lzQ29udHJvbGxlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmhhc093blByb3BlcnR5KCd2YWx1ZScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wczIuY2xhc3NOYW1lLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzMi5kaXNhYmxlZCxcbiAgICAgICAgICBlcnJvclN0eWxlID0gX3Byb3BzMi5lcnJvclN0eWxlLFxuICAgICAgICAgIGVycm9yVGV4dCA9IF9wcm9wczIuZXJyb3JUZXh0LFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxGaXhlZCA9IF9wcm9wczIuZmxvYXRpbmdMYWJlbEZpeGVkLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxGb2N1c1N0eWxlID0gX3Byb3BzMi5mbG9hdGluZ0xhYmVsRm9jdXNTdHlsZSxcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsU2hyaW5rU3R5bGUgPSBfcHJvcHMyLmZsb2F0aW5nTGFiZWxTaHJpbmtTdHlsZSxcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsU3R5bGUgPSBfcHJvcHMyLmZsb2F0aW5nTGFiZWxTdHlsZSxcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dCA9IF9wcm9wczIuZmxvYXRpbmdMYWJlbFRleHQsXG4gICAgICAgICAgZnVsbFdpZHRoID0gX3Byb3BzMi5mdWxsV2lkdGgsXG4gICAgICAgICAgaGludFRleHQgPSBfcHJvcHMyLmhpbnRUZXh0LFxuICAgICAgICAgIGhpbnRTdHlsZSA9IF9wcm9wczIuaGludFN0eWxlLFxuICAgICAgICAgIGlkID0gX3Byb3BzMi5pZCxcbiAgICAgICAgICBpbnB1dFN0eWxlID0gX3Byb3BzMi5pbnB1dFN0eWxlLFxuICAgICAgICAgIG11bHRpTGluZSA9IF9wcm9wczIubXVsdGlMaW5lLFxuICAgICAgICAgIG9uQmx1ciA9IF9wcm9wczIub25CbHVyLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3Byb3BzMi5vbkNoYW5nZSxcbiAgICAgICAgICBvbkZvY3VzID0gX3Byb3BzMi5vbkZvY3VzLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzMi5zdHlsZSxcbiAgICAgICAgICB0eXBlID0gX3Byb3BzMi50eXBlLFxuICAgICAgICAgIHVuZGVybGluZURpc2FibGVkU3R5bGUgPSBfcHJvcHMyLnVuZGVybGluZURpc2FibGVkU3R5bGUsXG4gICAgICAgICAgdW5kZXJsaW5lRm9jdXNTdHlsZSA9IF9wcm9wczIudW5kZXJsaW5lRm9jdXNTdHlsZSxcbiAgICAgICAgICB1bmRlcmxpbmVTaG93ID0gX3Byb3BzMi51bmRlcmxpbmVTaG93LFxuICAgICAgICAgIHVuZGVybGluZVN0eWxlID0gX3Byb3BzMi51bmRlcmxpbmVTdHlsZSxcbiAgICAgICAgICByb3dzID0gX3Byb3BzMi5yb3dzLFxuICAgICAgICAgIHJvd3NNYXggPSBfcHJvcHMyLnJvd3NNYXgsXG4gICAgICAgICAgdGV4dGFyZWFTdHlsZSA9IF9wcm9wczIudGV4dGFyZWFTdHlsZSxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wczIsIFsnY2hpbGRyZW4nLCAnY2xhc3NOYW1lJywgJ2Rpc2FibGVkJywgJ2Vycm9yU3R5bGUnLCAnZXJyb3JUZXh0JywgJ2Zsb2F0aW5nTGFiZWxGaXhlZCcsICdmbG9hdGluZ0xhYmVsRm9jdXNTdHlsZScsICdmbG9hdGluZ0xhYmVsU2hyaW5rU3R5bGUnLCAnZmxvYXRpbmdMYWJlbFN0eWxlJywgJ2Zsb2F0aW5nTGFiZWxUZXh0JywgJ2Z1bGxXaWR0aCcsICdoaW50VGV4dCcsICdoaW50U3R5bGUnLCAnaWQnLCAnaW5wdXRTdHlsZScsICdtdWx0aUxpbmUnLCAnb25CbHVyJywgJ29uQ2hhbmdlJywgJ29uRm9jdXMnLCAnc3R5bGUnLCAndHlwZScsICd1bmRlcmxpbmVEaXNhYmxlZFN0eWxlJywgJ3VuZGVybGluZUZvY3VzU3R5bGUnLCAndW5kZXJsaW5lU2hvdycsICd1bmRlcmxpbmVTdHlsZScsICdyb3dzJywgJ3Jvd3NNYXgnLCAndGV4dGFyZWFTdHlsZSddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0LCB0aGlzLnN0YXRlKTtcbiAgICAgIHZhciBpbnB1dElkID0gaWQgfHwgdGhpcy51bmlxdWVJZDtcblxuICAgICAgdmFyIGVycm9yVGV4dEVsZW1lbnQgPSB0aGlzLnN0YXRlLmVycm9yVGV4dCAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5lcnJvciwgZXJyb3JTdHlsZSkpIH0sXG4gICAgICAgIHRoaXMuc3RhdGUuZXJyb3JUZXh0XG4gICAgICApO1xuXG4gICAgICB2YXIgZmxvYXRpbmdMYWJlbFRleHRFbGVtZW50ID0gZmxvYXRpbmdMYWJlbFRleHQgJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9UZXh0RmllbGRMYWJlbDIuZGVmYXVsdCxcbiAgICAgICAge1xuICAgICAgICAgIG11aVRoZW1lOiB0aGlzLmNvbnRleHQubXVpVGhlbWUsXG4gICAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMuZmxvYXRpbmdMYWJlbCwgZmxvYXRpbmdMYWJlbFN0eWxlLCB0aGlzLnN0YXRlLmlzRm9jdXNlZCA/IGZsb2F0aW5nTGFiZWxGb2N1c1N0eWxlIDogbnVsbCksXG4gICAgICAgICAgc2hyaW5rU3R5bGU6IGZsb2F0aW5nTGFiZWxTaHJpbmtTdHlsZSxcbiAgICAgICAgICBodG1sRm9yOiBpbnB1dElkLFxuICAgICAgICAgIHNocmluazogdGhpcy5zdGF0ZS5oYXNWYWx1ZSB8fCB0aGlzLnN0YXRlLmlzRm9jdXNlZCB8fCBmbG9hdGluZ0xhYmVsRml4ZWQsXG4gICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkXG4gICAgICAgIH0sXG4gICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0XG4gICAgICApO1xuXG4gICAgICB2YXIgaW5wdXRQcm9wcyA9IHtcbiAgICAgICAgaWQ6IGlucHV0SWQsXG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLmlucHV0ID0gZWxlbTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICAgIG9uQmx1cjogdGhpcy5oYW5kbGVJbnB1dEJsdXIsXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLFxuICAgICAgICBvbkZvY3VzOiB0aGlzLmhhbmRsZUlucHV0Rm9jdXNcbiAgICAgIH07XG5cbiAgICAgIHZhciBjaGlsZFN0eWxlTWVyZ2VkID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5pbnB1dCwgaW5wdXRTdHlsZSk7XG5cbiAgICAgIHZhciBpbnB1dEVsZW1lbnQgPSB2b2lkIDA7XG4gICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgaW5wdXRFbGVtZW50ID0gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZHJlbiwgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgaW5wdXRQcm9wcywgY2hpbGRyZW4ucHJvcHMsIHtcbiAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKGNoaWxkU3R5bGVNZXJnZWQsIGNoaWxkcmVuLnByb3BzLnN0eWxlKVxuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dEVsZW1lbnQgPSBtdWx0aUxpbmUgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRW5oYW5jZWRUZXh0YXJlYTIuZGVmYXVsdCwgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7XG4gICAgICAgICAgc3R5bGU6IGNoaWxkU3R5bGVNZXJnZWQsXG4gICAgICAgICAgdGV4dGFyZWFTdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy50ZXh0YXJlYSwgc3R5bGVzLmlucHV0TmF0aXZlLCB0ZXh0YXJlYVN0eWxlKSxcbiAgICAgICAgICByb3dzOiByb3dzLFxuICAgICAgICAgIHJvd3NNYXg6IHJvd3NNYXgsXG4gICAgICAgICAgaGludFRleHQ6IGhpbnRUZXh0XG4gICAgICAgIH0sIG90aGVyLCBpbnB1dFByb3BzLCB7XG4gICAgICAgICAgb25IZWlnaHRDaGFuZ2U6IHRoaXMuaGFuZGxlSGVpZ2h0Q2hhbmdlXG4gICAgICAgIH0pKSA6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5pbnB1dE5hdGl2ZSwgY2hpbGRTdHlsZU1lcmdlZCkpXG4gICAgICAgIH0sIG90aGVyLCBpbnB1dFByb3BzKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciByb290UHJvcHMgPSB7fTtcblxuICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgIHJvb3RQcm9wcyA9IG90aGVyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCByb290UHJvcHMsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSlcbiAgICAgICAgfSksXG4gICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0RWxlbWVudCxcbiAgICAgICAgaGludFRleHQgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVGV4dEZpZWxkSGludDIuZGVmYXVsdCwge1xuICAgICAgICAgIG11aVRoZW1lOiB0aGlzLmNvbnRleHQubXVpVGhlbWUsXG4gICAgICAgICAgc2hvdzogISh0aGlzLnN0YXRlLmhhc1ZhbHVlIHx8IGZsb2F0aW5nTGFiZWxUZXh0ICYmICF0aGlzLnN0YXRlLmlzRm9jdXNlZCkgfHwgIXRoaXMuc3RhdGUuaGFzVmFsdWUgJiYgZmxvYXRpbmdMYWJlbFRleHQgJiYgZmxvYXRpbmdMYWJlbEZpeGVkICYmICF0aGlzLnN0YXRlLmlzRm9jdXNlZCxcbiAgICAgICAgICBzdHlsZTogaGludFN0eWxlLFxuICAgICAgICAgIHRleHQ6IGhpbnRUZXh0XG4gICAgICAgIH0pIDogbnVsbCxcbiAgICAgICAgaW5wdXRFbGVtZW50LFxuICAgICAgICB1bmRlcmxpbmVTaG93ID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1RleHRGaWVsZFVuZGVybGluZTIuZGVmYXVsdCwge1xuICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICBkaXNhYmxlZFN0eWxlOiB1bmRlcmxpbmVEaXNhYmxlZFN0eWxlLFxuICAgICAgICAgIGVycm9yOiAhIXRoaXMuc3RhdGUuZXJyb3JUZXh0LFxuICAgICAgICAgIGVycm9yU3R5bGU6IGVycm9yU3R5bGUsXG4gICAgICAgICAgZm9jdXM6IHRoaXMuc3RhdGUuaXNGb2N1c2VkLFxuICAgICAgICAgIGZvY3VzU3R5bGU6IHVuZGVybGluZUZvY3VzU3R5bGUsXG4gICAgICAgICAgbXVpVGhlbWU6IHRoaXMuY29udGV4dC5tdWlUaGVtZSxcbiAgICAgICAgICBzdHlsZTogdW5kZXJsaW5lU3R5bGVcbiAgICAgICAgfSkgOiBudWxsLFxuICAgICAgICBlcnJvclRleHRFbGVtZW50XG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gVGV4dEZpZWxkO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuVGV4dEZpZWxkLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBmbG9hdGluZ0xhYmVsRml4ZWQ6IGZhbHNlLFxuICBtdWx0aUxpbmU6IGZhbHNlLFxuICBmdWxsV2lkdGg6IGZhbHNlLFxuICB0eXBlOiAndGV4dCcsXG4gIHVuZGVybGluZVNob3c6IHRydWUsXG4gIHJvd3M6IDFcbn07XG5UZXh0RmllbGQuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblRleHRGaWVsZC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgY3NzIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgdGV4dCBzdHJpbmcgdG8gdXNlIGZvciB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgdGV4dCBmaWVsZCBpZiBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgc3R5bGUgb2JqZWN0IHRvIHVzZSB0byBvdmVycmlkZSBlcnJvciBzdHlsZXMuXG4gICAqL1xuICBlcnJvclN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBlcnJvciBjb250ZW50IHRvIGRpc3BsYXkuXG4gICAqL1xuICBlcnJvclRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBmbG9hdGluZyBsYWJlbCB3aWxsIGZsb2F0IGV2ZW4gd2hlbiB0aGVyZSBpcyBubyB2YWx1ZS5cbiAgICovXG4gIGZsb2F0aW5nTGFiZWxGaXhlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhlIHN0eWxlIG9iamVjdCB0byB1c2UgdG8gb3ZlcnJpZGUgZmxvYXRpbmcgbGFiZWwgc3R5bGVzIHdoZW4gZm9jdXNlZC5cbiAgICovXG4gIGZsb2F0aW5nTGFiZWxGb2N1c1N0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBzdHlsZSBvYmplY3QgdG8gdXNlIHRvIG92ZXJyaWRlIGZsb2F0aW5nIGxhYmVsIHN0eWxlcyB3aGVuIHNocnVuay5cbiAgICovXG4gIGZsb2F0aW5nTGFiZWxTaHJpbmtTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgc3R5bGUgb2JqZWN0IHRvIHVzZSB0byBvdmVycmlkZSBmbG9hdGluZyBsYWJlbCBzdHlsZXMuXG4gICAqL1xuICBmbG9hdGluZ0xhYmVsU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgdG8gdXNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgZWxlbWVudC5cbiAgICovXG4gIGZsb2F0aW5nTGFiZWxUZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgZmllbGQgcmVjZWl2ZXMgdGhlIHByb3BlcnR5IHdpZHRoIDEwMCUuXG4gICAqL1xuICBmdWxsV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBUZXh0RmllbGQncyBoaW50IHRleHQgZWxlbWVudC5cbiAgICovXG4gIGhpbnRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgaGludCBjb250ZW50IHRvIGRpc3BsYXkuXG4gICAqL1xuICBoaW50VGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogVGhlIGlkIHByb3AgZm9yIHRoZSB0ZXh0IGZpZWxkLlxuICAgKi9cbiAgaWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIFRleHRGaWVsZCdzIGlucHV0IGVsZW1lbnQuXG4gICAqIFdoZW4gbXVsdGlMaW5lIGlzIGZhbHNlOiBkZWZpbmUgdGhlIHN0eWxlIG9mIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKiBXaGVuIG11bHRpTGluZSBpcyB0cnVlOiBkZWZpbmUgdGhlIHN0eWxlIG9mIHRoZSBjb250YWluZXIgb2YgdGhlIHRleHRhcmVhLlxuICAgKi9cbiAgaW5wdXRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBhIHRleHRhcmVhIGVsZW1lbnQgd2lsbCBiZSByZW5kZXJlZC5cbiAgICogVGhlIHRleHRhcmVhIGFsc28gZ3Jvd3MgYW5kIHNocmlua3MgYWNjb3JkaW5nIHRvIHRoZSBudW1iZXIgb2YgbGluZXMuXG4gICAqL1xuICBtdWx0aUxpbmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE5hbWUgYXBwbGllZCB0byB0aGUgaW5wdXQuXG4gICAqL1xuICBuYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25CbHVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGZpcmVkIHdoZW4gdGhlIHRleHRmaWVsZCdzIHZhbHVlIGNoYW5nZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBDaGFuZ2UgZXZlbnQgdGFyZ2V0aW5nIHRoZSB0ZXh0IGZpZWxkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3VmFsdWUgVGhlIG5ldyB2YWx1ZSBvZiB0aGUgdGV4dCBmaWVsZC5cbiAgICovXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIE51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlbiBtdWx0aUxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93czogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlblxuICAgKiBtdWx0aUxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93c01heDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIFRleHRGaWVsZCdzIHRleHRhcmVhIGVsZW1lbnQuXG4gICAqIFRoZSBUZXh0RmllbGQgdXNlIGVpdGhlciBhIHRleHRhcmVhIG9yIGFuIGlucHV0LFxuICAgKiB0aGlzIHByb3BlcnR5IGhhcyBlZmZlY3RzIG9ubHkgd2hlbiBtdWx0aUxpbmUgaXMgdHJ1ZS5cbiAgICovXG4gIHRleHRhcmVhU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSB0eXBlIG9mIGlucHV0IHRvIGRpc3BsYXlcbiAgICogc3VjaCBhcyBcInBhc3N3b3JkXCIgb3IgXCJ0ZXh0XCIuXG4gICAqL1xuICB0eXBlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZVxuICAgKiBUZXh0RmllbGQncyB1bmRlcmxpbmUgZWxlbWVudCB3aGVuIGRpc2FibGVkLlxuICAgKi9cbiAgdW5kZXJsaW5lRGlzYWJsZWRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgVGV4dEZpZWxkJ3NcbiAgICogdW5kZXJsaW5lIGVsZW1lbnQgd2hlbiBmb2N1c3NlZC5cbiAgICovXG4gIHVuZGVybGluZUZvY3VzU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogSWYgdHJ1ZSwgc2hvd3MgdGhlIHVuZGVybGluZSBmb3IgdGhlIHRleHQgZmllbGQuXG4gICAqL1xuICB1bmRlcmxpbmVTaG93OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgVGV4dEZpZWxkJ3MgdW5kZXJsaW5lIGVsZW1lbnQuXG4gICAqL1xuICB1bmRlcmxpbmVTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIHRleHQgZmllbGQuXG4gICAqL1xuICB2YWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnlcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRleHRGaWVsZDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL1RleHRGaWVsZC5qc1xuLy8gbW9kdWxlIGlkID0gNzUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMpIHtcbiAgdmFyIGhpbnRDb2xvciA9IHByb3BzLm11aVRoZW1lLnRleHRGaWVsZC5oaW50Q29sb3IsXG4gICAgICBzaG93ID0gcHJvcHMuc2hvdztcblxuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBvcGFjaXR5OiBzaG93ID8gMSA6IDAsXG4gICAgICBjb2xvcjogaGludENvbG9yLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIGJvdHRvbTogMTJcbiAgICB9XG4gIH07XG59XG5cbnZhciBUZXh0RmllbGRIaW50ID0gZnVuY3Rpb24gVGV4dEZpZWxkSGludChwcm9wcykge1xuICB2YXIgcHJlcGFyZVN0eWxlcyA9IHByb3BzLm11aVRoZW1lLnByZXBhcmVTdHlsZXMsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgdGV4dCA9IHByb3BzLnRleHQ7XG5cblxuICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHByb3BzKTtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSkgfSxcbiAgICB0ZXh0XG4gICk7XG59O1xuXG5UZXh0RmllbGRIaW50LnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogVGhlIG1hdGVyaWFsLXVpIHRoZW1lIGFwcGxpZWQgdG8gdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIGhpbnQgdGV4dCBzaG91bGQgYmUgdmlzaWJsZS5cbiAgICovXG4gIHNob3c6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgaGludCB0ZXh0IGRpc3BsYXllZC5cbiAgICovXG4gIHRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZVxufSA6IHt9O1xuXG5UZXh0RmllbGRIaW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogdHJ1ZVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dEZpZWxkSGludDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL1RleHRGaWVsZEhpbnQuanNcbi8vIG1vZHVsZSBpZCA9IDc1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzKSB7XG4gIHZhciBkZWZhdWx0U3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxpbmVIZWlnaHQ6ICcyMnB4JyxcbiAgICB0b3A6IDM4LFxuICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgekluZGV4OiAxLCAvLyBOZWVkZWQgdG8gZGlzcGxheSBsYWJlbCBhYm92ZSBDaHJvbWUncyBhdXRvY29tcGxldGUgZmllbGQgYmFja2dyb3VuZFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpIHRyYW5zbGF0ZSgwLCAwKScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCB0b3AnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZSdcbiAgfTtcblxuICB2YXIgc2hyaW5rU3R5bGVzID0gcHJvcHMuc2hyaW5rID8gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjc1KSB0cmFuc2xhdGUoMCwgLTI4cHgpJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgfSwgcHJvcHMuc2hyaW5rU3R5bGUpIDogbnVsbDtcblxuICByZXR1cm4ge1xuICAgIHJvb3Q6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShkZWZhdWx0U3R5bGVzLCBwcm9wcy5zdHlsZSwgc2hyaW5rU3R5bGVzKVxuICB9O1xufVxuXG52YXIgVGV4dEZpZWxkTGFiZWwgPSBmdW5jdGlvbiBUZXh0RmllbGRMYWJlbChwcm9wcykge1xuICB2YXIgbXVpVGhlbWUgPSBwcm9wcy5tdWlUaGVtZSxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBodG1sRm9yID0gcHJvcHMuaHRtbEZvcixcbiAgICAgIG9uVG91Y2hUYXAgPSBwcm9wcy5vblRvdWNoVGFwO1xuICB2YXIgcHJlcGFyZVN0eWxlcyA9IG11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyhwcm9wcyk7XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdsYWJlbCcsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcyhzdHlsZXMucm9vdCksXG4gICAgICBodG1sRm9yOiBodG1sRm9yLFxuICAgICAgb25Ub3VjaFRhcDogb25Ub3VjaFRhcFxuICAgIH0sXG4gICAgY2hpbGRyZW5cbiAgKTtcbn07XG5cblRleHRGaWVsZExhYmVsLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIFRoZSBsYWJlbCBjb250ZW50cy5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgY3NzIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgbGFiZWwgaWYgc2V0IHRvIHRydWUuXG4gICAqL1xuICBkaXNhYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSB0YXJnZXQgZWxlbWVudCB0aGF0IHRoaXMgbGFiZWwgc2hvdWxkIHJlZmVyIHRvLlxuICAgKi9cbiAgaHRtbEZvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFRoZSBtYXRlcmlhbC11aSB0aGVtZSBhcHBsaWVkIHRvIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmb3Igd2hlbiB0aGUgbGFiZWwgaXMgc2VsZWN0ZWQgdmlhIGEgdG91Y2ggdGFwLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVG91Y2hUYXAgZXZlbnQgdGFyZ2V0aW5nIHRoZSB0ZXh0IGZpZWxkIGxhYmVsLlxuICAgKi9cbiAgb25Ub3VjaFRhcDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgZmxvYXRpbmcgbGFiZWwgc2hvdWxkIHNocmluay5cbiAgICovXG4gIHNocmluazogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudCB3aGVuIHNocnVuay5cbiAgICovXG4gIHNocmlua1N0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcblxuVGV4dEZpZWxkTGFiZWwuZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIHNocmluazogZmFsc2Vcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRleHRGaWVsZExhYmVsO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkTGFiZWwuanNcbi8vIG1vZHVsZSBpZCA9IDc1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIHBhcmVudCBgVGV4dEZpZWxkYCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgdW5kZXJsaW5lIHdoZW4gcGFyZW50IGBUZXh0RmllbGRgIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBwYXJlbnQgYFRleHRGaWVsZGAgaGFzIGFuIGVycm9yLlxuICAgKi9cbiAgZXJyb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSB1bmRlcmxpbmUgd2hlbiBwYXJlbnQgYFRleHRGaWVsZGAgaGFzIGFuIGVycm9yLlxuICAgKi9cbiAgZXJyb3JTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBwYXJlbnQgYFRleHRGaWVsZGAgaXMgZm9jdXNlZC5cbiAgICovXG4gIGZvY3VzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgdW5kZXJsaW5lIHdoZW4gcGFyZW50IGBUZXh0RmllbGRgIGlzIGZvY3VzZWQuXG4gICAqL1xuICBmb2N1c1N0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogVGhlIG1hdGVyaWFsLXVpIHRoZW1lIGFwcGxpZWQgdG8gdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZGlzYWJsZWRTdHlsZToge30sXG4gIGVycm9yOiBmYWxzZSxcbiAgZXJyb3JTdHlsZToge30sXG4gIGZvY3VzOiBmYWxzZSxcbiAgZm9jdXNTdHlsZToge30sXG4gIHN0eWxlOiB7fVxufTtcblxudmFyIFRleHRGaWVsZFVuZGVybGluZSA9IGZ1bmN0aW9uIFRleHRGaWVsZFVuZGVybGluZShwcm9wcykge1xuICB2YXIgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkU3R5bGUgPSBwcm9wcy5kaXNhYmxlZFN0eWxlLFxuICAgICAgZXJyb3IgPSBwcm9wcy5lcnJvcixcbiAgICAgIGVycm9yU3R5bGUgPSBwcm9wcy5lcnJvclN0eWxlLFxuICAgICAgZm9jdXMgPSBwcm9wcy5mb2N1cyxcbiAgICAgIGZvY3VzU3R5bGUgPSBwcm9wcy5mb2N1c1N0eWxlLFxuICAgICAgbXVpVGhlbWUgPSBwcm9wcy5tdWlUaGVtZSxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGU7XG4gIHZhciBlcnJvclN0eWxlQ29sb3IgPSBlcnJvclN0eWxlLmNvbG9yO1xuICB2YXIgcHJlcGFyZVN0eWxlcyA9IG11aVRoZW1lLnByZXBhcmVTdHlsZXMsXG4gICAgICBfbXVpVGhlbWUkdGV4dEZpZWxkID0gbXVpVGhlbWUudGV4dEZpZWxkLFxuICAgICAgYm9yZGVyQ29sb3IgPSBfbXVpVGhlbWUkdGV4dEZpZWxkLmJvcmRlckNvbG9yLFxuICAgICAgZGlzYWJsZWRUZXh0Q29sb3IgPSBfbXVpVGhlbWUkdGV4dEZpZWxkLmRpc2FibGVkVGV4dENvbG9yLFxuICAgICAgZXJyb3JDb2xvciA9IF9tdWlUaGVtZSR0ZXh0RmllbGQuZXJyb3JDb2xvcixcbiAgICAgIGZvY3VzQ29sb3IgPSBfbXVpVGhlbWUkdGV4dEZpZWxkLmZvY3VzQ29sb3I7XG5cblxuICB2YXIgc3R5bGVzID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGJvcmRlclRvcDogJ25vbmUnLFxuICAgICAgYm9yZGVyTGVmdDogJ25vbmUnLFxuICAgICAgYm9yZGVyUmlnaHQ6ICdub25lJyxcbiAgICAgIGJvcmRlckJvdHRvbTogJ3NvbGlkIDFweCcsXG4gICAgICBib3JkZXJDb2xvcjogYm9yZGVyQ29sb3IsXG4gICAgICBib3R0b206IDgsXG4gICAgICBib3hTaXppbmc6ICdjb250ZW50LWJveCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICBib3JkZXJCb3R0b206ICdkb3R0ZWQgMnB4JyxcbiAgICAgIGJvcmRlckNvbG9yOiBkaXNhYmxlZFRleHRDb2xvclxuICAgIH0sXG4gICAgZm9jdXM6IHtcbiAgICAgIGJvcmRlckJvdHRvbTogJ3NvbGlkIDJweCcsXG4gICAgICBib3JkZXJDb2xvcjogZm9jdXNDb2xvcixcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgwKScsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgYm9yZGVyQ29sb3I6IGVycm9yU3R5bGVDb2xvciA/IGVycm9yU3R5bGVDb2xvciA6IGVycm9yQ29sb3IsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMSknXG4gICAgfVxuICB9O1xuXG4gIHZhciB1bmRlcmxpbmUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5yb290LCBzdHlsZSk7XG4gIHZhciBmb2N1c2VkVW5kZXJsaW5lID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCB1bmRlcmxpbmUsIHN0eWxlcy5mb2N1cywgZm9jdXNTdHlsZSk7XG5cbiAgaWYgKGRpc2FibGVkKSB1bmRlcmxpbmUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHVuZGVybGluZSwgc3R5bGVzLmRpc2FibGVkLCBkaXNhYmxlZFN0eWxlKTtcbiAgaWYgKGZvY3VzKSBmb2N1c2VkVW5kZXJsaW5lID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBmb2N1c2VkVW5kZXJsaW5lLCB7IHRyYW5zZm9ybTogJ3NjYWxlWCgxKScgfSk7XG4gIGlmIChlcnJvcikgZm9jdXNlZFVuZGVybGluZSA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgZm9jdXNlZFVuZGVybGluZSwgc3R5bGVzLmVycm9yKTtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgbnVsbCxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaHInLCB7ICdhcmlhLWhpZGRlbic6ICd0cnVlJywgc3R5bGU6IHByZXBhcmVTdHlsZXModW5kZXJsaW5lKSB9KSxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaHInLCB7ICdhcmlhLWhpZGRlbic6ICd0cnVlJywgc3R5bGU6IHByZXBhcmVTdHlsZXMoZm9jdXNlZFVuZGVybGluZSkgfSlcbiAgKTtcbn07XG5cblRleHRGaWVsZFVuZGVybGluZS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBwcm9wVHlwZXMgOiB7fTtcblRleHRGaWVsZFVuZGVybGluZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRleHRGaWVsZFVuZGVybGluZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL1RleHRGaWVsZFVuZGVybGluZS5qc1xuLy8gbW9kdWxlIGlkID0gNzUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlZpZXdwb3J0U2l6ZVR5cGUgPSBleHBvcnRzLkNvbHVtblNpemVUeXBlID0gdW5kZWZpbmVkO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIENvbHVtblNpemVUeXBlID0gZXhwb3J0cy5Db2x1bW5TaXplVHlwZSA9IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlciwgX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sXSk7XG52YXIgVmlld3BvcnRTaXplVHlwZSA9IGV4cG9ydHMuVmlld3BvcnRTaXplVHlwZSA9IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoWyd4cycsICdzbScsICdtZCcsICdsZyddKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtZmxleGJveC1ncmlkL2xpYi90eXBlcy5qc1xuLy8gbW9kdWxlIGlkID0gNzU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgbWVtbztcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBtZW1vO1xuXHRcdH07XG5cdH0sXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdChzZWxmLm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cdH0pLFxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0fSksXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0aWYoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcblxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDc1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vKmltcG9ydCB7Rm9ybUdyb3VwLCBDb250cm9sTGFiZWwsIEZvcm1Db250cm9sLCBIZWxwQmxvY2t9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7Ki9cclxuaW1wb3J0IHtGaWVsZH0gZnJvbSAncmVkdXgtZm9ybSc7XHJcblxyXG5pbXBvcnQge0Zvcm1Db250cm9sV3JhcHBlckNvbnRhaW5lcn0gZnJvbSAnLi9Gb3JtQ29udHJvbFdyYXBwZXJDb250YWluZXInO1xyXG5cclxuXHJcbmNsYXNzIEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHsgY29udHJvbElkLCBoZWxwLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgey8qPEZvcm1Hcm91cCBjb250cm9sSWQ9e2NvbnRyb2xJZH0+XHJcbiAgICAgICAgICAgICAgICA8Q29udHJvbExhYmVsPntsYWJlbH08L0NvbnRyb2xMYWJlbD4qL31cclxuICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPXtjb250cm9sSWR9IGNvbXBvbmVudD17Rm9ybUNvbnRyb2xXcmFwcGVyQ29udGFpbmVyfSB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICB7LyogICB7aGVscCAmJiA8SGVscEJsb2NrPntoZWxwfTwvSGVscEJsb2NrPn1cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+Ki99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge0ZpZWxkQ29tcG9uZW50fTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy9BZG1pbi9OdXRyaWVudEZvcm0vRmllbGRDb21wb25lbnQuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb250YWluZXItZmx1aWQsXFxuLmNvbnRhaW5lciB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmNvbnRhaW5lci1mbHVpZCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbn1cXG5cXG4ucm93IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAtbXMtZmxleDogMCAxIGF1dG87XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi1yaWdodDogLTAuNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xcbn1cXG5cXG4ucm93LnJldmVyc2Uge1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiByZXZlcnNlO1xcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG59XFxuXFxuLmNvbC5yZXZlcnNlIHtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IHJldmVyc2U7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG5cXG4uY29sLXhzLFxcbi5jb2wteHMtMSxcXG4uY29sLXhzLTIsXFxuLmNvbC14cy0zLFxcbi5jb2wteHMtNCxcXG4uY29sLXhzLTUsXFxuLmNvbC14cy02LFxcbi5jb2wteHMtNyxcXG4uY29sLXhzLTgsXFxuLmNvbC14cy05LFxcbi5jb2wteHMtMTAsXFxuLmNvbC14cy0xMSxcXG4uY29sLXhzLTEyLFxcbi5jb2wteHMtb2Zmc2V0LTAsXFxuLmNvbC14cy1vZmZzZXQtMSxcXG4uY29sLXhzLW9mZnNldC0yLFxcbi5jb2wteHMtb2Zmc2V0LTMsXFxuLmNvbC14cy1vZmZzZXQtNCxcXG4uY29sLXhzLW9mZnNldC01LFxcbi5jb2wteHMtb2Zmc2V0LTYsXFxuLmNvbC14cy1vZmZzZXQtNyxcXG4uY29sLXhzLW9mZnNldC04LFxcbi5jb2wteHMtb2Zmc2V0LTksXFxuLmNvbC14cy1vZmZzZXQtMTAsXFxuLmNvbC14cy1vZmZzZXQtMTEsXFxuLmNvbC14cy1vZmZzZXQtMTIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAtbXMtZmxleDogMCAwIGF1dG87XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG5cXG4uY29sLXhzIHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xcbiAgZmxleC1iYXNpczogMDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbC14cy0xIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4LjMzMzMzMzMzJTtcXG4gIGZsZXgtYmFzaXM6IDguMzMzMzMzMzMlO1xcbiAgbWF4LXdpZHRoOiA4LjMzMzMzMzMzJTtcXG59XFxuXFxuLmNvbC14cy0yIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxNi42NjY2NjY2NyU7XFxuICBmbGV4LWJhc2lzOiAxNi42NjY2NjY2NyU7XFxuICBtYXgtd2lkdGg6IDE2LjY2NjY2NjY3JTtcXG59XFxuXFxuLmNvbC14cy0zIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAyNSU7XFxuICBmbGV4LWJhc2lzOiAyNSU7XFxuICBtYXgtd2lkdGg6IDI1JTtcXG59XFxuXFxuLmNvbC14cy00IHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAzMy4zMzMzMzMzMyU7XFxuICBmbGV4LWJhc2lzOiAzMy4zMzMzMzMzMyU7XFxuICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMzJTtcXG59XFxuXFxuLmNvbC14cy01IHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA0MS42NjY2NjY2NyU7XFxuICBmbGV4LWJhc2lzOiA0MS42NjY2NjY2NyU7XFxuICBtYXgtd2lkdGg6IDQxLjY2NjY2NjY3JTtcXG59XFxuXFxuLmNvbC14cy02IHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1MCU7XFxuICBmbGV4LWJhc2lzOiA1MCU7XFxuICBtYXgtd2lkdGg6IDUwJTtcXG59XFxuXFxuLmNvbC14cy03IHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1OC4zMzMzMzMzMyU7XFxuICBmbGV4LWJhc2lzOiA1OC4zMzMzMzMzMyU7XFxuICBtYXgtd2lkdGg6IDU4LjMzMzMzMzMzJTtcXG59XFxuXFxuLmNvbC14cy04IHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA2Ni42NjY2NjY2NyU7XFxuICBmbGV4LWJhc2lzOiA2Ni42NjY2NjY2NyU7XFxuICBtYXgtd2lkdGg6IDY2LjY2NjY2NjY3JTtcXG59XFxuXFxuLmNvbC14cy05IHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA3NSU7XFxuICBmbGV4LWJhc2lzOiA3NSU7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG59XFxuXFxuLmNvbC14cy0xMCB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogODMuMzMzMzMzMzMlO1xcbiAgZmxleC1iYXNpczogODMuMzMzMzMzMzMlO1xcbiAgbWF4LXdpZHRoOiA4My4zMzMzMzMzMyU7XFxufVxcblxcbi5jb2wteHMtMTEge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDkxLjY2NjY2NjY3JTtcXG4gIGZsZXgtYmFzaXM6IDkxLjY2NjY2NjY3JTtcXG4gIG1heC13aWR0aDogOTEuNjY2NjY2NjclO1xcbn1cXG5cXG4uY29sLXhzLTEyIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcbiAgZmxleC1iYXNpczogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtMCB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtMSB7XFxuICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTIge1xcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtMyB7XFxuICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC00IHtcXG4gIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTUge1xcbiAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtNiB7XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC03IHtcXG4gIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTgge1xcbiAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtOSB7XFxuICBtYXJnaW4tbGVmdDogNzUlO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC0xMCB7XFxuICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC0xMSB7XFxuICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbn1cXG5cXG4uc3RhcnQteHMge1xcbiAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4uY2VudGVyLXhzIHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZW5kLXhzIHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcXG4gIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi50b3AteHMge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xcbiAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5taWRkbGUteHMge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm90dG9tLXhzIHtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAtbXMtZmxleC1hbGlnbjogZW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYXJvdW5kLXhzIHtcXG4gIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmJldHdlZW4teHMge1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5maXJzdC14cyB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAwO1xcbiAgLW1zLWZsZXgtb3JkZXI6IC0xO1xcbiAgb3JkZXI6IC0xO1xcbn1cXG5cXG4ubGFzdC14cyB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyO1xcbiAgLW1zLWZsZXgtb3JkZXI6IDE7XFxuICBvcmRlcjogMTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0OGVtKSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDQ5cmVtO1xcbiAgfVxcblxcbiAgLmNvbC1zbSxcXG4gIC5jb2wtc20tMSxcXG4gIC5jb2wtc20tMixcXG4gIC5jb2wtc20tMyxcXG4gIC5jb2wtc20tNCxcXG4gIC5jb2wtc20tNSxcXG4gIC5jb2wtc20tNixcXG4gIC5jb2wtc20tNyxcXG4gIC5jb2wtc20tOCxcXG4gIC5jb2wtc20tOSxcXG4gIC5jb2wtc20tMTAsXFxuICAuY29sLXNtLTExLFxcbiAgLmNvbC1zbS0xMixcXG4gIC5jb2wtc20tb2Zmc2V0LTAsXFxuICAuY29sLXNtLW9mZnNldC0xLFxcbiAgLmNvbC1zbS1vZmZzZXQtMixcXG4gIC5jb2wtc20tb2Zmc2V0LTMsXFxuICAuY29sLXNtLW9mZnNldC00LFxcbiAgLmNvbC1zbS1vZmZzZXQtNSxcXG4gIC5jb2wtc20tb2Zmc2V0LTYsXFxuICAuY29sLXNtLW9mZnNldC03LFxcbiAgLmNvbC1zbS1vZmZzZXQtOCxcXG4gIC5jb2wtc20tb2Zmc2V0LTksXFxuICAuY29sLXNtLW9mZnNldC0xMCxcXG4gIC5jb2wtc20tb2Zmc2V0LTExLFxcbiAgLmNvbC1zbS1vZmZzZXQtMTIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAtbXMtZmxleDogMCAwIGF1dG87XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgfVxcblxcbiAgLmNvbC1zbSB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xcbiAgICBmbGV4LWJhc2lzOiAwO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuY29sLXNtLTEge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOC4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDguMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS0yIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDE2LjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogMTYuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tMyB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAyNSU7XFxuICAgIGZsZXgtYmFzaXM6IDI1JTtcXG4gICAgbWF4LXdpZHRoOiAyNSU7XFxuICB9XFxuXFxuICAuY29sLXNtLTQge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMzMuMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiAzMy4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS01IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDQxLjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogNDEuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tNiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1MCU7XFxuICAgIGZsZXgtYmFzaXM6IDUwJTtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICB9XFxuXFxuICAuY29sLXNtLTcge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNTguMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA1OC4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogNTguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS04IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDY2LjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogNjYuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tOSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA3NSU7XFxuICAgIGZsZXgtYmFzaXM6IDc1JTtcXG4gICAgbWF4LXdpZHRoOiA3NSU7XFxuICB9XFxuXFxuICAuY29sLXNtLTEwIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDgzLjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogODMuMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tMTEge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOTEuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA5MS42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogOTEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1zbS0xMiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuY29sLXNtLW9mZnNldC0wIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICB9XFxuXFxuICAuY29sLXNtLW9mZnNldC0xIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1vZmZzZXQtMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLXNtLW9mZnNldC0zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTQge1xcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1vZmZzZXQtNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLXNtLW9mZnNldC02IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTcge1xcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1vZmZzZXQtOCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLXNtLW9mZnNldC05IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTEwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTExIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5zdGFydC1zbSB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIH1cXG5cXG4gIC5jZW50ZXItc20ge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5lbmQtc20ge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgfVxcblxcbiAgLnRvcC1zbSB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG5cXG4gIC5taWRkbGUtc20ge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmJvdHRvbS1zbSB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIH1cXG5cXG4gIC5hcm91bmQtc20ge1xcbiAgICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG5cXG4gIC5iZXR3ZWVuLXNtIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgLmZpcnN0LXNtIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMDtcXG4gICAgLW1zLWZsZXgtb3JkZXI6IC0xO1xcbiAgICBvcmRlcjogLTE7XFxuICB9XFxuXFxuICAubGFzdC1zbSB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDI7XFxuICAgIC1tcy1mbGV4LW9yZGVyOiAxO1xcbiAgICBvcmRlcjogMTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDY1cmVtO1xcbiAgfVxcblxcbiAgLmNvbC1tZCxcXG4gIC5jb2wtbWQtMSxcXG4gIC5jb2wtbWQtMixcXG4gIC5jb2wtbWQtMyxcXG4gIC5jb2wtbWQtNCxcXG4gIC5jb2wtbWQtNSxcXG4gIC5jb2wtbWQtNixcXG4gIC5jb2wtbWQtNyxcXG4gIC5jb2wtbWQtOCxcXG4gIC5jb2wtbWQtOSxcXG4gIC5jb2wtbWQtMTAsXFxuICAuY29sLW1kLTExLFxcbiAgLmNvbC1tZC0xMixcXG4gIC5jb2wtbWQtb2Zmc2V0LTAsXFxuICAuY29sLW1kLW9mZnNldC0xLFxcbiAgLmNvbC1tZC1vZmZzZXQtMixcXG4gIC5jb2wtbWQtb2Zmc2V0LTMsXFxuICAuY29sLW1kLW9mZnNldC00LFxcbiAgLmNvbC1tZC1vZmZzZXQtNSxcXG4gIC5jb2wtbWQtb2Zmc2V0LTYsXFxuICAuY29sLW1kLW9mZnNldC03LFxcbiAgLmNvbC1tZC1vZmZzZXQtOCxcXG4gIC5jb2wtbWQtb2Zmc2V0LTksXFxuICAuY29sLW1kLW9mZnNldC0xMCxcXG4gIC5jb2wtbWQtb2Zmc2V0LTExLFxcbiAgLmNvbC1tZC1vZmZzZXQtMTIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAtbXMtZmxleDogMCAwIGF1dG87XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgfVxcblxcbiAgLmNvbC1tZCB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xcbiAgICBmbGV4LWJhc2lzOiAwO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuY29sLW1kLTEge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOC4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDguMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC0yIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDE2LjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogMTYuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtMyB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAyNSU7XFxuICAgIGZsZXgtYmFzaXM6IDI1JTtcXG4gICAgbWF4LXdpZHRoOiAyNSU7XFxuICB9XFxuXFxuICAuY29sLW1kLTQge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMzMuMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiAzMy4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC01IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDQxLjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogNDEuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtNiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1MCU7XFxuICAgIGZsZXgtYmFzaXM6IDUwJTtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICB9XFxuXFxuICAuY29sLW1kLTcge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNTguMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA1OC4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogNTguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC04IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDY2LjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogNjYuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtOSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA3NSU7XFxuICAgIGZsZXgtYmFzaXM6IDc1JTtcXG4gICAgbWF4LXdpZHRoOiA3NSU7XFxuICB9XFxuXFxuICAuY29sLW1kLTEwIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDgzLjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogODMuMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtMTEge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOTEuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA5MS42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogOTEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1tZC0xMiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC0wIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC0xIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC1vZmZzZXQtMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC0zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTQge1xcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC1vZmZzZXQtNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC02IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTcge1xcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC1vZmZzZXQtOCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC05IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTEwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTExIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5zdGFydC1tZCB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIH1cXG5cXG4gIC5jZW50ZXItbWQge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5lbmQtbWQge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgfVxcblxcbiAgLnRvcC1tZCB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG5cXG4gIC5taWRkbGUtbWQge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmJvdHRvbS1tZCB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIH1cXG5cXG4gIC5hcm91bmQtbWQge1xcbiAgICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG5cXG4gIC5iZXR3ZWVuLW1kIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgLmZpcnN0LW1kIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMDtcXG4gICAgLW1zLWZsZXgtb3JkZXI6IC0xO1xcbiAgICBvcmRlcjogLTE7XFxuICB9XFxuXFxuICAubGFzdC1tZCB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDI7XFxuICAgIC1tcy1mbGV4LW9yZGVyOiAxO1xcbiAgICBvcmRlcjogMTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NWVtKSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDc2cmVtO1xcbiAgfVxcblxcbiAgLmNvbC1sZyxcXG4gIC5jb2wtbGctMSxcXG4gIC5jb2wtbGctMixcXG4gIC5jb2wtbGctMyxcXG4gIC5jb2wtbGctNCxcXG4gIC5jb2wtbGctNSxcXG4gIC5jb2wtbGctNixcXG4gIC5jb2wtbGctNyxcXG4gIC5jb2wtbGctOCxcXG4gIC5jb2wtbGctOSxcXG4gIC5jb2wtbGctMTAsXFxuICAuY29sLWxnLTExLFxcbiAgLmNvbC1sZy0xMixcXG4gIC5jb2wtbGctb2Zmc2V0LTAsXFxuICAuY29sLWxnLW9mZnNldC0xLFxcbiAgLmNvbC1sZy1vZmZzZXQtMixcXG4gIC5jb2wtbGctb2Zmc2V0LTMsXFxuICAuY29sLWxnLW9mZnNldC00LFxcbiAgLmNvbC1sZy1vZmZzZXQtNSxcXG4gIC5jb2wtbGctb2Zmc2V0LTYsXFxuICAuY29sLWxnLW9mZnNldC03LFxcbiAgLmNvbC1sZy1vZmZzZXQtOCxcXG4gIC5jb2wtbGctb2Zmc2V0LTksXFxuICAuY29sLWxnLW9mZnNldC0xMCxcXG4gIC5jb2wtbGctb2Zmc2V0LTExLFxcbiAgLmNvbC1sZy1vZmZzZXQtMTIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAtbXMtZmxleDogMCAwIGF1dG87XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgfVxcblxcbiAgLmNvbC1sZyB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xcbiAgICBmbGV4LWJhc2lzOiAwO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuY29sLWxnLTEge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOC4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDguMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy0yIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDE2LjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogMTYuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctMyB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAyNSU7XFxuICAgIGZsZXgtYmFzaXM6IDI1JTtcXG4gICAgbWF4LXdpZHRoOiAyNSU7XFxuICB9XFxuXFxuICAuY29sLWxnLTQge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMzMuMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiAzMy4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy01IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDQxLjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogNDEuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctNiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1MCU7XFxuICAgIGZsZXgtYmFzaXM6IDUwJTtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICB9XFxuXFxuICAuY29sLWxnLTcge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNTguMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA1OC4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogNTguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy04IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDY2LjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogNjYuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctOSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA3NSU7XFxuICAgIGZsZXgtYmFzaXM6IDc1JTtcXG4gICAgbWF4LXdpZHRoOiA3NSU7XFxuICB9XFxuXFxuICAuY29sLWxnLTEwIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDgzLjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogODMuMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctMTEge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOTEuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA5MS42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogOTEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1sZy0xMiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC0wIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC0xIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC0zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTQge1xcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC02IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTcge1xcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtOCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC05IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTEwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTExIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5zdGFydC1sZyB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIH1cXG5cXG4gIC5jZW50ZXItbGcge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5lbmQtbGcge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgfVxcblxcbiAgLnRvcC1sZyB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG5cXG4gIC5taWRkbGUtbGcge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmJvdHRvbS1sZyB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIH1cXG5cXG4gIC5hcm91bmQtbGcge1xcbiAgICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG5cXG4gIC5iZXR3ZWVuLWxnIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgLmZpcnN0LWxnIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMDtcXG4gICAgLW1zLWZsZXgtb3JkZXI6IC0xO1xcbiAgICBvcmRlcjogLTE7XFxuICB9XFxuXFxuICAubGFzdC1sZyB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDI7XFxuICAgIC1tcy1mbGV4LW9yZGVyOiAxO1xcbiAgICBvcmRlcjogMTtcXG4gIH1cXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L2ZsZXhib3hncmlkL2Rpc3QvZmxleGJveGdyaWQuY3NzXG4vLyBtb2R1bGUgaWQgPSA3NThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldENvbHVtblByb3BzID0gZ2V0Q29sdW1uUHJvcHM7XG5leHBvcnRzLmRlZmF1bHQgPSBDb2w7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfY3JlYXRlUHJvcHMgPSByZXF1aXJlKCcuLi9jcmVhdGVQcm9wcycpO1xuXG52YXIgX2NyZWF0ZVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVByb3BzKTtcblxudmFyIF9jbGFzc05hbWVzID0gcmVxdWlyZSgnLi4vY2xhc3NOYW1lcycpO1xuXG52YXIgX2NsYXNzTmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NOYW1lcyk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKCcuLi90eXBlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIHhzOiBfdHlwZXMuQ29sdW1uU2l6ZVR5cGUsXG4gIHNtOiBfdHlwZXMuQ29sdW1uU2l6ZVR5cGUsXG4gIG1kOiBfdHlwZXMuQ29sdW1uU2l6ZVR5cGUsXG4gIGxnOiBfdHlwZXMuQ29sdW1uU2l6ZVR5cGUsXG4gIHhzT2Zmc2V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgc21PZmZzZXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBtZE9mZnNldDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGxnT2Zmc2V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgZmlyc3Q6IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICBsYXN0OiBfdHlwZXMuVmlld3BvcnRTaXplVHlwZSxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdGFnTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVcbn07XG5cbnZhciBjbGFzc01hcCA9IHtcbiAgeHM6ICdjb2wteHMnLFxuICBzbTogJ2NvbC1zbScsXG4gIG1kOiAnY29sLW1kJyxcbiAgbGc6ICdjb2wtbGcnLFxuICB4c09mZnNldDogJ2NvbC14cy1vZmZzZXQnLFxuICBzbU9mZnNldDogJ2NvbC1zbS1vZmZzZXQnLFxuICBtZE9mZnNldDogJ2NvbC1tZC1vZmZzZXQnLFxuICBsZ09mZnNldDogJ2NvbC1sZy1vZmZzZXQnXG59O1xuXG5mdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsdWUpICYmIE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29sQ2xhc3NOYW1lcyhwcm9wcykge1xuICB2YXIgZXh0cmFDbGFzc2VzID0gW107XG5cbiAgaWYgKHByb3BzLmNsYXNzTmFtZSkge1xuICAgIGV4dHJhQ2xhc3Nlcy5wdXNoKHByb3BzLmNsYXNzTmFtZSk7XG4gIH1cblxuICBpZiAocHJvcHMuZmlyc3QpIHtcbiAgICBleHRyYUNsYXNzZXMucHVzaCgoMCwgX2NsYXNzTmFtZXMyLmRlZmF1bHQpKCdmaXJzdC0nICsgcHJvcHMuZmlyc3QpKTtcbiAgfVxuXG4gIGlmIChwcm9wcy5sYXN0KSB7XG4gICAgZXh0cmFDbGFzc2VzLnB1c2goKDAsIF9jbGFzc05hbWVzMi5kZWZhdWx0KSgnbGFzdC0nICsgcHJvcHMubGFzdCkpO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BzKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBjbGFzc01hcFtrZXldO1xuICB9KS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAoMCwgX2NsYXNzTmFtZXMyLmRlZmF1bHQpKGlzSW50ZWdlcihwcm9wc1trZXldKSA/IGNsYXNzTWFwW2tleV0gKyAnLScgKyBwcm9wc1trZXldIDogY2xhc3NNYXBba2V5XSk7XG4gIH0pLmNvbmNhdChleHRyYUNsYXNzZXMpO1xufVxuXG5mdW5jdGlvbiBnZXRDb2x1bW5Qcm9wcyhwcm9wcykge1xuICByZXR1cm4gKDAsIF9jcmVhdGVQcm9wczIuZGVmYXVsdCkocHJvcFR5cGVzLCBwcm9wcywgZ2V0Q29sQ2xhc3NOYW1lcyhwcm9wcykpO1xufVxuXG5mdW5jdGlvbiBDb2wocHJvcHMpIHtcbiAgdmFyIHRhZ05hbWUgPSBwcm9wcy50YWdOYW1lLFxuICAgICAgY29sdW1uUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFsndGFnTmFtZSddKTtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSB8fCAnZGl2JywgZ2V0Q29sdW1uUHJvcHMoY29sdW1uUHJvcHMpKTtcbn1cblxuQ29sLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtZmxleGJveC1ncmlkL2xpYi9jb21wb25lbnRzL0NvbC5qc1xuLy8gbW9kdWxlIGlkID0gNzYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gR3JpZDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9jcmVhdGVQcm9wcyA9IHJlcXVpcmUoJy4uL2NyZWF0ZVByb3BzJyk7XG5cbnZhciBfY3JlYXRlUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlUHJvcHMpO1xuXG52YXIgX2NsYXNzTmFtZXMgPSByZXF1aXJlKCcuLi9jbGFzc05hbWVzJyk7XG5cbnZhciBfY2xhc3NOYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc05hbWVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgZmx1aWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdGFnTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVcbn07XG5cbmZ1bmN0aW9uIEdyaWQocHJvcHMpIHtcbiAgdmFyIGNvbnRhaW5lckNsYXNzID0gKDAsIF9jbGFzc05hbWVzMi5kZWZhdWx0KShwcm9wcy5mbHVpZCA/ICdjb250YWluZXItZmx1aWQnIDogJ2NvbnRhaW5lcicpO1xuICB2YXIgY2xhc3NOYW1lcyA9IFtwcm9wcy5jbGFzc05hbWUsIGNvbnRhaW5lckNsYXNzXTtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocHJvcHMudGFnTmFtZSB8fCAnZGl2JywgKDAsIF9jcmVhdGVQcm9wczIuZGVmYXVsdCkocHJvcFR5cGVzLCBwcm9wcywgY2xhc3NOYW1lcykpO1xufVxuXG5HcmlkLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtZmxleGJveC1ncmlkL2xpYi9jb21wb25lbnRzL0dyaWQuanNcbi8vIG1vZHVsZSBpZCA9IDc2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0Um93UHJvcHMgPSBnZXRSb3dQcm9wcztcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdztcblxudmFyIF9jbGFzc05hbWVzID0gcmVxdWlyZSgnLi4vY2xhc3NOYW1lcycpO1xuXG52YXIgX2NsYXNzTmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NOYW1lcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfY3JlYXRlUHJvcHMgPSByZXF1aXJlKCcuLi9jcmVhdGVQcm9wcycpO1xuXG52YXIgX2NyZWF0ZVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVByb3BzKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoJy4uL3R5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciByb3dLZXlzID0gWydzdGFydCcsICdjZW50ZXInLCAnZW5kJywgJ3RvcCcsICdtaWRkbGUnLCAnYm90dG9tJywgJ2Fyb3VuZCcsICdiZXR3ZWVuJ107XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIHJldmVyc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgc3RhcnQ6IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICBjZW50ZXI6IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICBlbmQ6IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICB0b3A6IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICBtaWRkbGU6IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICBib3R0b206IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICBhcm91bmQ6IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICBiZXR3ZWVuOiBfdHlwZXMuVmlld3BvcnRTaXplVHlwZSxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdGFnTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVcbn07XG5cbmZ1bmN0aW9uIGdldFJvd0NsYXNzTmFtZXMocHJvcHMpIHtcbiAgdmFyIG1vZGlmaWNhdG9ycyA9IFtwcm9wcy5jbGFzc05hbWUsICgwLCBfY2xhc3NOYW1lczIuZGVmYXVsdCkoJ3JvdycpXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd0tleXMubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIga2V5ID0gcm93S2V5c1tpXTtcbiAgICB2YXIgdmFsdWUgPSBwcm9wc1trZXldO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbW9kaWZpY2F0b3JzLnB1c2goKDAsIF9jbGFzc05hbWVzMi5kZWZhdWx0KShrZXkgKyAnLScgKyB2YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9wcy5yZXZlcnNlKSB7XG4gICAgbW9kaWZpY2F0b3JzLnB1c2goKDAsIF9jbGFzc05hbWVzMi5kZWZhdWx0KSgncmV2ZXJzZScpKTtcbiAgfVxuXG4gIHJldHVybiBtb2RpZmljYXRvcnM7XG59XG5cbmZ1bmN0aW9uIGdldFJvd1Byb3BzKHByb3BzKSB7XG4gIHJldHVybiAoMCwgX2NyZWF0ZVByb3BzMi5kZWZhdWx0KShwcm9wVHlwZXMsIHByb3BzLCBnZXRSb3dDbGFzc05hbWVzKHByb3BzKSk7XG59XG5cbmZ1bmN0aW9uIFJvdyhwcm9wcykge1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocHJvcHMudGFnTmFtZSB8fCAnZGl2JywgZ2V0Um93UHJvcHMocHJvcHMpKTtcbn1cblxuUm93LnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtZmxleGJveC1ncmlkL2xpYi9jb21wb25lbnRzL1Jvdy5qc1xuLy8gbW9kdWxlIGlkID0gNzYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9mbGV4Ym94Z3JpZC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmxleGJveGdyaWQuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmxleGJveGdyaWQuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmxleGJveGdyaWQvZGlzdC9mbGV4Ym94Z3JpZC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDc2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCB7ZmV0Y2hSZXNvdXJjZUZyb21CYWNrZW5kfSBmcm9tICcuL3V0aWxpdGllcy9mZXRjaFJlc291cmNlRnJvbUJhY2tlbmQnO1xyXG5pbXBvcnQge2ZldGNoSW5ncmVkaWVudHN9IGZyb20gJy4vaW5ncmVkaWVudHMnO1xyXG5pbXBvcnQge29wZW5EaWFsb2d1ZX0gZnJvbSAnLi9kZWZpbmVJbmdyZWRpZW50RGlhbG9ndWUnO1xyXG5cclxuY29uc3Qgc2F2ZUluZ3JlZGllbnQgPSAoaW5ncmVkaWVudCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBcclxuICAgIGRpc3BhdGNoKHt0eXBlOiAnSU5HUkVESUVOVF9TQVZJTkcnfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3NhdmluZzogJywgaW5ncmVkaWVudCk7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHttZXRob2Q6ICdQT1NUJywgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LCBib2R5OiBKU09OLnN0cmluZ2lmeShpbmdyZWRpZW50KX07XHJcblxyXG4gICAgZmV0Y2hSZXNvdXJjZUZyb21CYWNrZW5kKCcvYXBpL2luZ3JlZGllbnRzJywgb3B0aW9ucykudGhlbiggcmVzdWx0ID0+IHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0lOR1JFRElFTlRfU0FWRUQnLCBpbmdyZWRpZW50SWQ6IHJlc3VsdH0pO1xyXG5cclxuICAgICAgICBkaXNwYXRjaChmZXRjaEluZ3JlZGllbnRzKCkpO1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlSW5ncmVkaWVudCA9IChpbmdyZWRpZW50LCBpbmdyZWRpZW50SWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgXHJcbiAgICBkaXNwYXRjaCh7dHlwZTogJ0lOR1JFRElFTlRfVVBEQVRJTkcnfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3VwZGF0aW5nOiAnLCBpbmdyZWRpZW50KTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge21ldGhvZDogJ1BVVCcsIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSwgYm9keTogSlNPTi5zdHJpbmdpZnkoaW5ncmVkaWVudCl9O1xyXG5cclxuICAgIGZldGNoUmVzb3VyY2VGcm9tQmFja2VuZCgnL2FwaS9pbmdyZWRpZW50cy8nICsgaW5ncmVkaWVudElkLCBvcHRpb25zKS50aGVuKCByZXN1bHQgPT4ge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgICBkaXNwYXRjaChmZXRjaEluZ3JlZGllbnRzKCkpO1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZGVsZXRlSW5ncmVkaWVudCA9IChpbmdyZWRpZW50SWQpID0+IChkaXNwYXRjaCkgPT4ge1xyXG4gICAgXHJcbiAgICBkaXNwYXRjaCh7dHlwZTogJ0lOR1JFRElFTlRfREVMRVRJTkcnfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ2RlbGV0aW5nJywgaW5ncmVkaWVudElkKTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge21ldGhvZDogJ0RFTEVURSd9O1xyXG5cclxuICAgIGZldGNoUmVzb3VyY2VGcm9tQmFja2VuZCgnL2FwaS9pbmdyZWRpZW50cy8nICsgaW5ncmVkaWVudElkLCBvcHRpb25zKS50aGVuKCByZXN1bHQgPT4ge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnSU5HUkVESUVOVF9ERUxFVEVEJywgaW5ncmVkaWVudElkOiBpbmdyZWRpZW50SWR9KTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hJbmdyZWRpZW50cygpKTtcclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGVkaXRJbmdyZWRpZW50ID0gKGluZ3JlZGllbnRJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBcclxuXHJcbiAgICBjb25zb2xlLmxvZygnZmV0Y2hpbmcnLCBpbmdyZWRpZW50SWQpO1xyXG5cclxuICAgIGZldGNoUmVzb3VyY2VGcm9tQmFja2VuZCgnL2FwaS9pbmdyZWRpZW50cy8nICsgaW5ncmVkaWVudElkKS50aGVuKCByZXN1bHQgPT4ge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIGRpc3BhdGNoKG9wZW5EaWFsb2d1ZShyZXN1bHQsIGluZ3JlZGllbnRJZCkpO1xyXG4gICAgICAgIC8qZGlzcGF0Y2goe3R5cGU6ICdJTkdSRURJRU5UX0RFTEVURUQnLCBpbmdyZWRpZW50SWQ6IGluZ3JlZGllbnRJZH0pO1xyXG5cclxuICAgICAgICBkaXNwYXRjaChmZXRjaEluZ3JlZGllbnRzKCkpOyovXHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHtzYXZlSW5ncmVkaWVudCwgZWRpdEluZ3JlZGllbnQsIGRlbGV0ZUluZ3JlZGllbnQsIHVwZGF0ZUluZ3JlZGllbnR9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbW9kdWxlcy9pbmdyZWRpZW50c0FkbWluLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBGbG9hdGluZ0FjdGlvbkJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbG9hdGluZ0FjdGlvbkJ1dHRvbic7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnbWF0ZXJpYWwtdWkvRGlhbG9nJztcclxuaW1wb3J0IEZsYXRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvRmxhdEJ1dHRvbic7XHJcbmltcG9ydCBDb250ZW50QWRkIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9jb250ZW50L2FkZCc7XHJcblxyXG5pbXBvcnQge051dHJpZW50Rm9ybX0gZnJvbSAnLi9OdXRyaWVudEZvcm0vTnV0cmllbnRGb3JtJztcclxuaW1wb3J0IHtJbmdyZWRpZW50c0xpc3RDb250YWluZXJ9IGZyb20gJy4vSW5ncmVkaWVudHNMaXN0Q29udGFpbmVyJztcclxuXHJcbmNvbnN0IGJ1dHRvbk91dGVyU3R5bGUgPSB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvdHRvbTogJy0zMHB4JyxcclxuICAgIHJpZ2h0OiAnNTBweCcsXHJcbiAgICB6SW5kZXg6IDEwMFxyXG59O1xyXG5cclxuY2xhc3MgQWRtaW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGhhbmRsZVNhdmVTdWJtaXQgPSAodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5zYXZlSW5ncmVkaWVudCh2YWx1ZXMsIHRoaXMucHJvcHMuZWRpdElkKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7b3BlbkRpYWxvZ3VlLCBjbG9zZURpYWxvZ3VlLCBzYXZlRGlhbG9ndWUsIG9wZW4sIGluaXRpYWxWYWx1ZXN9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IFtcclxuICAgICAgICAgICAgPEZsYXRCdXR0b25cclxuICAgICAgICAgICAgbGFiZWw9XCJTYXZlIGluZ3JlZGllbnRcIlxyXG4gICAgICAgICAgICBwcmltYXJ5PXt0cnVlfVxyXG4gICAgICAgICAgICBrZXlib2FyZEZvY3VzZWQ9e3RydWV9XHJcbiAgICAgICAgICAgIG9uVG91Y2hUYXA9e3NhdmVEaWFsb2d1ZX1cclxuICAgICAgICAgICAgLz4sXHJcbiAgICAgICAgICAgIDxGbGF0QnV0dG9uXHJcbiAgICAgICAgICAgIGxhYmVsPVwiQ2FuY2VsXCJcclxuICAgICAgICAgICAgcHJpbWFyeT17dHJ1ZX1cclxuICAgICAgICAgICAgb25Ub3VjaFRhcD17Y2xvc2VEaWFsb2d1ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzogJzEwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlZmluZSBpbmdyZWRpZW50XCJcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXthY3Rpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZURpYWxvZ3VlfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9TY3JvbGxCb2R5Q29udGVudD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPE51dHJpZW50Rm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTYXZlU3VibWl0fSBpbml0aWFsVmFsdWVzPXtpbml0aWFsVmFsdWVzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9EaWFsb2c+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxJbmdyZWRpZW50c0xpc3RDb250YWluZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8RmxvYXRpbmdBY3Rpb25CdXR0b24gb25Ub3VjaFRhcD17b3BlbkRpYWxvZ3VlfSBzdHlsZT17YnV0dG9uT3V0ZXJTdHlsZX0gekRlcHRoPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRBZGQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zsb2F0aW5nQWN0aW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5BZG1pbi5wcm9wVHlwZXMgPSB7XHJcbiAgICBvcGVuRGlhbG9ndWU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBjbG9zZURpYWxvZ3VlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgc2F2ZURpYWxvZ3VlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgc2F2ZUluZ3JlZGllbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBlZGl0SWQ6IFByb3BUeXBlcy5zdHJpbmcsIC8vIG9ubHkgYXZhaWxhYmxlIHdoZW4gRGlhbG9ndWUgaXMgb3BlbiBmb3IgZWRpdGluZyBleGlzdGluZyBudXRyaWVudFxyXG4gICAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgICAvLyBUT0RPOiBkZWZpbmUgYWxsIGluZ3JlZGllbnRzXHJcbiAgICBpbml0aWFsVmFsdWVzOiBQcm9wVHlwZXMub2JqZWN0XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7QWRtaW59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL0FkbWluL0FkbWluLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCB7TGlzdCwgTGlzdEl0ZW19IGZyb20gJ21hdGVyaWFsLXVpL0xpc3QnO1xyXG5pbXBvcnQgQ29udGVudEluYm94IGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9jb250ZW50L2luYm94JztcclxuXHJcbmltcG9ydCBQYXBlciBmcm9tICdtYXRlcmlhbC11aS9QYXBlcic7XHJcblxyXG4vKmltcG9ydCBBY3Rpb25HcmFkZSBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvYWN0aW9uL2dyYWRlJztcclxuaW1wb3J0IENvbnRlbnRTZW5kIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9jb250ZW50L3NlbmQnO1xyXG5pbXBvcnQgQ29udGVudERyYWZ0cyBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvY29udGVudC9kcmFmdHMnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdtYXRlcmlhbC11aS9EaXZpZGVyJztcclxuaW1wb3J0IEFjdGlvbkluZm8gZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL2FjdGlvbi9pbmZvJztcclxuaW1wb3J0IEFjdGlvbkRlbGV0ZSBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvYWN0aW9uL2RlbGV0ZSc7XHJcbmltcG9ydCBTdWJoZWFkZXIgZnJvbSAnbWF0ZXJpYWwtdWkvU3ViaGVhZGVyJzsqL1xyXG4vKmltcG9ydCB7Q2FyZCwgQ2FyZEFjdGlvbnMsIENhcmRIZWFkZXIsIENhcmRNZWRpYSwgQ2FyZFRpdGxlLCBDYXJkVGV4dH0gZnJvbSAnbWF0ZXJpYWwtdWkvQ2FyZCc7Ki9cclxuXHJcbmltcG9ydCB7UmlnaHRJY29uTWVudX0gZnJvbSAnLi9SaWdodEljb25NZW51JztcclxuXHJcbmNsYXNzIEluZ3JlZGllbnRzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIgKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7aW5ncmVkaWVudHM9e30sIGRlbGV0ZUluZ3JlZGllbnQsIGVkaXRJbmdyZWRpZW50fSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQYXBlciB6RGVwdGg9ezJ9IHN0eWxlPXt7Ym9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJ319PlxyXG4gICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7dGV4dEFsaWduOiAnbGVmdCcsIHBhZGRpbmc6ICcxNXB4IDBweCAxNXB4IDIwcHgnLCBtYXJnaW46IDB9fT5BdmFpbGFibGUgaW5ncmVkaWVudHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgey8qPENhcmRIZWFkZXIgdGl0bGU9XCJMaXN0IG9mIGF2YWlsYWJsZSBpbmdyZWRpZW50c1wiIC8+Ki99XHJcbiAgICAgICAgICAgICAgICB7Lyo8RGl2aWRlciAvPiovfVxyXG4gICAgICAgICAgICAgICAgPExpc3Qgc3R5bGU9e3tib3JkZXI6ICcxcHggc29saWQgYmxhY2snLCBtYXJnaW5Ub3A6ICcwcHgnLCBoZWlnaHQ6ICc0MDBweCcsIG92ZXJmbG93WTogJ2F1dG8nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKGluZ3JlZGllbnRzKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qUmlnaHRJY29uTWVudShkZWxldGVJbmdyZWRpZW50LCBrZXkpKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtrZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVRleHQ9e2luZ3JlZGllbnRzW2tleV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdEljb249ezxDb250ZW50SW5ib3ggLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRJY29uQnV0dG9uPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJpZ2h0SWNvbk1lbnUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVJbmdyZWRpZW50PXtkZWxldGVJbmdyZWRpZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdEluZ3JlZGllbnQ9e2VkaXRJbmdyZWRpZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudEtleT17a2V5fS8+fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkucmV2ZXJzZSgpfVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkluZ3JlZGllbnRzTGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgICBpbmdyZWRpZW50czogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGRlbGV0ZUluZ3JlZGllbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBlZGl0SW5ncmVkaWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCB7SW5ncmVkaWVudHNMaXN0fTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL0FkbWluL0luZ3JlZGllbnRzTGlzdC5qcyIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IHtJbmdyZWRpZW50c0xpc3R9IGZyb20gJy4vSW5ncmVkaWVudHNMaXN0JztcclxuXHJcbmltcG9ydCB7ZGVsZXRlSW5ncmVkaWVudCwgZWRpdEluZ3JlZGllbnR9IGZyb20gJ21vZHVsZXMvaW5ncmVkaWVudHNBZG1pbic7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgICBkZWxldGVJbmdyZWRpZW50OiAoaWQpID0+IHtkaXNwYXRjaChkZWxldGVJbmdyZWRpZW50KGlkKSk7fSxcclxuICAgIGVkaXRJbmdyZWRpZW50OiAoaWQpID0+IHtkaXNwYXRjaChlZGl0SW5ncmVkaWVudChpZCkpO31cclxufSk7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgICBpbmdyZWRpZW50czogc3RhdGUuaW5ncmVkaWVudHMuaW5ncmVkaWVudHNcclxufSk7XHJcblxyXG5jb25zdCBJbmdyZWRpZW50c0xpc3RDb250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShJbmdyZWRpZW50c0xpc3QpO1xyXG5cclxuZXhwb3J0IHtJbmdyZWRpZW50c0xpc3RDb250YWluZXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvQWRtaW4vSW5ncmVkaWVudHNMaXN0Q29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7Um93LCBDb2x9IGZyb20gJ3JlYWN0LWZsZXhib3gtZ3JpZCc7XHJcblxyXG5pbXBvcnQge0ZpZWxkQ29tcG9uZW50fSBmcm9tICcuL0ZpZWxkQ29tcG9uZW50JztcclxuXHJcbmNsYXNzIENhcmJvaGlkcmF0ZXNDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD0nQ2FyYm9oaWRyYXRlcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQ2FyYm9oaWRyYXRlcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezR9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD0nRmliZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdGaWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdTdWdhcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1N1Z2FyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxDb2wgeHM9ezR9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD0nQUExJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQUExJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD4qL31cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge0NhcmJvaGlkcmF0ZXNDb21wb25lbnR9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvQWRtaW4vTnV0cmllbnRGb3JtL0NhcmJvaGlkcmF0ZXNDb21wb25lbnQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtSb3csIENvbH0gZnJvbSAncmVhY3QtZmxleGJveC1ncmlkJztcclxuXHJcbmltcG9ydCB7RmllbGRDb21wb25lbnR9IGZyb20gJy4vRmllbGRDb21wb25lbnQnO1xyXG5cclxuY2xhc3MgRmF0c0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8RmllbGRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdGYXRzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdGYXRzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCcgLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17OX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17NH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdTYXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdTYXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD0nUG9seXVucydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1BvbHl1bnMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17NH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdNb25vdW5zJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nTW9ub3VucydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtGYXRzQ29tcG9uZW50fTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL0FkbWluL051dHJpZW50Rm9ybS9GYXRzQ29tcG9uZW50LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdtYXRlcmlhbC11aS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgQXV0b0NvbXBsZXRlIGZyb20gJ21hdGVyaWFsLXVpL0F1dG9Db21wbGV0ZSc7XHJcblxyXG5jbGFzcyBGb3JtQ29udHJvbFdyYXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcblxyXG4gICAgICAgIC8vIGNhdGNoaW5nIHBsYWNlaG9sZGVyIG5vdCB0byBmb3J3YXJkIGl0IHRvIFRleHRGaWVsZFxyXG4gICAgICAgIGNvbnN0IHtsYWJlbCwgcGxhY2Vob2xkZXIsIGlucHV0LCBtZXRhLCBkYXRhU291cmNlLCAuLi5wcm9wc30gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7LypFbmhhbmNlZCBGb3JtQ29udHJvbCBpZiBpdCBpcyB0aGUgbmFtZSBvZiB0aGUgaW5ncmVkaWVudCwgcmF0aGVyIHRoYW4gcXVhbnRpdHkqL31cclxuICAgICAgICAgICAgICAgIHtpbnB1dC5uYW1lLm1hdGNoKC9uYW1lJC8pID9cclxuICAgICAgICAgICAgICAgICAgICA8QXV0b0NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PXtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtPYmplY3QudmFsdWVzKGRhdGFTb3VyY2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hUZXh0PXttZXRhLnZpc2l0ZWQgPT09IGZhbHNlID8gaW5wdXQudmFsdWUgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3BzfSAvPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dD17bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcblxyXG59KTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICAgIGRhdGFTb3VyY2U6IHN0YXRlLmluZ3JlZGllbnRzLmluZ3JlZGllbnRzXHJcbn0pO1xyXG5cclxuY29uc3QgRm9ybUNvbnRyb2xXcmFwcGVyQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoRm9ybUNvbnRyb2xXcmFwcGVyKTtcclxuXHJcbmV4cG9ydCB7Rm9ybUNvbnRyb2xXcmFwcGVyQ29udGFpbmVyfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL0FkbWluL051dHJpZW50Rm9ybS9Gb3JtQ29udHJvbFdyYXBwZXJDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQge3JlZHV4Rm9ybX0gZnJvbSAncmVkdXgtZm9ybSc7XHJcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcclxuXHJcbmltcG9ydCB7RmllbGRDb21wb25lbnR9IGZyb20gJy4vRmllbGRDb21wb25lbnQnO1xyXG4vKmltcG9ydCB7RGVib3VuY2VGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9EZWJvdW5jZUZpZWxkQ29tcG9uZW50JzsqL1xyXG5pbXBvcnQge1Byb3RlaW5zQ29tcG9uZW50fSBmcm9tICcuL1Byb3RlaW5zQ29tcG9uZW50JztcclxuaW1wb3J0IHtGYXRzQ29tcG9uZW50fSBmcm9tICcuL0ZhdHNDb21wb25lbnQnO1xyXG5pbXBvcnQge0NhcmJvaGlkcmF0ZXNDb21wb25lbnR9IGZyb20gJy4vQ2FyYm9oaWRyYXRlc0NvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQge0dyaWQsIFJvdywgQ29sfSBmcm9tICdyZWFjdC1mbGV4Ym94LWdyaWQnO1xyXG5cclxuY2xhc3MgTnV0cmllbnRGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBmbHVpZD17dHJ1ZX0gc3R5bGU9e3twYWRkaW5nOiAnMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBvZmZzZXQ9ezB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSduYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J051dHJpZW50IG5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvdGVpbnNDb21wb25lbnQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8RmF0c0NvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJib2hpZHJhdGVzQ29tcG9uZW50IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBvZmZzZXQ9ezB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdTb3VyY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nU291cmNlIGxpbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7Lyo8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0gIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcid9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYWlzZWRCdXR0b24gdHlwZT0nc3VibWl0JyBkaXNhYmxlZD17ZmFsc2UgJiYgIXRoaXMucHJvcHMuZGlydHl9ICBzdHlsZT17e21hcmdpbkxlZnQ6ICc1cHgnLCBtYXJnaW5SaWdodDogJzVweCcsIHBhZGRpbmdMZWZ0OiAnMTBweCcsIHBhZGRpbmdSaWdodDogJzEwcHgnfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmUgbnV0cmllbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFpc2VkQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhaXNlZEJ1dHRvbiB0eXBlPSdidXR0b24nIGRpc2FibGVkPXtmYWxzZSAmJiAhdGhpcy5wcm9wcy5kaXJ0eX0gb25DbGljaz17dGhpcy5wcm9wcy5yZXNldH0gIHN0eWxlPXt7bWFyZ2luTGVmdDogJzVweCcsIG1hcmdpblJpZ2h0OiAnNXB4JywgcGFkZGluZ0xlZnQ6ICcxMHB4JywgcGFkZGluZ1JpZ2h0OiAnMTBweCd9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JhaXNlZEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+Ki99XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxubGV0IE51dHJpZW50Rm9ybVJlZHV4V3JhcHBlciA9IHJlZHV4Rm9ybSh7XHJcbiAgICBmb3JtOiAnbWFuYWdlTnV0cmllbnRzJyxcclxuICAgIGRlc3Ryb3lPblVubW91bnQ6IHRydWVcclxufSkoTnV0cmllbnRGb3JtKTtcclxuXHJcbi8qTnV0cmllbnRGb3JtUmVkdXhXcmFwcGVyID0gY29ubmVjdChcclxuICAgIHN0YXRlID0+ICh7XHJcblxyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM6IHtcclxuICAgICAgICAgICAgbmFtZTogJ3JhZmEnLFxyXG4gICAgICAgICAgICBBQTE6IDIxXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuKShOdXRyaWVudEZvcm1SZWR1eFdyYXBwZXIpOyovXHJcblxyXG5leHBvcnQge051dHJpZW50Rm9ybVJlZHV4V3JhcHBlciBhcyBOdXRyaWVudEZvcm19O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvQWRtaW4vTnV0cmllbnRGb3JtL051dHJpZW50Rm9ybS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge1JvdywgQ29sfSBmcm9tICdyZWFjdC1mbGV4Ym94LWdyaWQnO1xyXG5cclxuaW1wb3J0IHtGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9GaWVsZENvbXBvbmVudCc7XHJcblxyXG5jbGFzcyBQcm90ZWluc0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8RmllbGRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdQcm90ZWlucydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nUHJvdGVpbnMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0JyAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXs5fT5cclxuICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXs0fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J0FBMSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0FBMSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD0nQUE0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQUE0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdBQTcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdBQTcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD0nQUEyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQUEyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdBQTUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdBQTUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J0FBOCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0FBOCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXs0fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J0FBMydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0FBMydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD0nQUE2J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQUE2J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdBQTknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdBQTknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7UHJvdGVpbnNDb21wb25lbnR9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvQWRtaW4vTnV0cmllbnRGb3JtL1Byb3RlaW5zQ29tcG9uZW50LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuXHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgTW9yZVZlcnRJY29uIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9uYXZpZ2F0aW9uL21vcmUtdmVydCc7XHJcbmltcG9ydCBJY29uTWVudSBmcm9tICdtYXRlcmlhbC11aS9JY29uTWVudSc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdtYXRlcmlhbC11aS9NZW51SXRlbSc7XHJcblxyXG5pbXBvcnQgey8qZ3JleTQwMCwgKi9kYXJrQmxhY2svKiwgbGlnaHRCbGFjayovfSBmcm9tICdtYXRlcmlhbC11aS9zdHlsZXMvY29sb3JzJztcclxuXHJcbmNvbnN0IGljb25CdXR0b25FbGVtZW50ID0gKFxyXG4gICAgPEljb25CdXR0b25cclxuICAgICAgICB0b3VjaD17dHJ1ZX1cclxuICAgICAgICB0b29sdGlwPVwibW9yZVwiXHJcbiAgICAgICAgdG9vbHRpcFBvc2l0aW9uPVwiYm90dG9tLWxlZnRcIlxyXG4gICAgPlxyXG4gICAgICAgIDxNb3JlVmVydEljb24gY29sb3I9e2RhcmtCbGFja30gLz5cclxuICAgIDwvSWNvbkJ1dHRvbj5cclxuKTtcclxuXHJcbmNsYXNzIFJpZ2h0SWNvbk1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIGVkaXRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZWRpdEluZ3JlZGllbnQodGhpcy5wcm9wcy5lbGVtZW50S2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGVsZXRlSW5ncmVkaWVudCh0aGlzLnByb3BzLmVsZW1lbnRLZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcblxyXG4gICAgICAgIC8vIG5lZWQgdG8gY2F0Y2ggc29tZSBwcm9wZXJ0aWVzLCBub3QgdG8gcGFzcyB0aGVtIGZ1cnRoZXJcclxuICAgICAgICBjb25zdCB7ZWxlbWVudEtleSwgZGVsZXRlSW5ncmVkaWVudCwgZWRpdEluZ3JlZGllbnQsIC4uLnByb3BzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxJY29uTWVudSB7Li4ucHJvcHN9IGljb25CdXR0b25FbGVtZW50PXtpY29uQnV0dG9uRWxlbWVudH0+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25Ub3VjaFRhcD17dGhpcy5lZGl0SGFuZGxlcn0+RWRpdDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25Ub3VjaFRhcD17dGhpcy5kZWxldGVIYW5kbGVyfT5EZWxldGU8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8L0ljb25NZW51PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qY29uc3QgUmlnaHRJY29uTWVudSA9IChkZWxldGVJbmdyZWRpZW50LCBlbGVtZW50S2V5KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxJY29uTWVudSBpY29uQnV0dG9uRWxlbWVudD17aWNvbkJ1dHRvbkVsZW1lbnR9IG9uSXRlbVRvdWNoVGFwPXsoKSA9PiB7ZGVsZXRlSW5ncmVkaWVudChlbGVtZW50S2V5KTt9fT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtPkVkaXQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0+RGVsZXRlPC9NZW51SXRlbT5cclxuICAgICAgICA8L0ljb25NZW51PlxyXG4gICAgKTsgIFxyXG59OyovXHJcblxyXG5SaWdodEljb25NZW51LnByb3BUeXBlcyA9IHtcclxuICAgIC8vIFRPRE86IGNoZWNrIGZvciBvdGhlciBwcm9wZXJ0aWVzXHJcbiAgICBlZGl0SW5ncmVkaWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIGRlbGV0ZUluZ3JlZGllbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBlbGVtZW50S2V5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcclxufTtcclxuXHJcblxyXG5leHBvcnQge1JpZ2h0SWNvbk1lbnV9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL0FkbWluL1JpZ2h0SWNvbk1lbnUuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mJyk7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9rZXljb2RlID0gcmVxdWlyZSgna2V5Y29kZScpO1xuXG52YXIgX2tleWNvZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5Y29kZSk7XG5cbnZhciBfVGV4dEZpZWxkID0gcmVxdWlyZSgnLi4vVGV4dEZpZWxkJyk7XG5cbnZhciBfVGV4dEZpZWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RleHRGaWVsZCk7XG5cbnZhciBfTWVudSA9IHJlcXVpcmUoJy4uL01lbnUnKTtcblxudmFyIF9NZW51MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbnUpO1xuXG52YXIgX01lbnVJdGVtID0gcmVxdWlyZSgnLi4vTWVudUl0ZW0nKTtcblxudmFyIF9NZW51SXRlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NZW51SXRlbSk7XG5cbnZhciBfRGl2aWRlciA9IHJlcXVpcmUoJy4uL0RpdmlkZXInKTtcblxudmFyIF9EaXZpZGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0RpdmlkZXIpO1xuXG52YXIgX1BvcG92ZXIgPSByZXF1aXJlKCcuLi9Qb3BvdmVyL1BvcG92ZXInKTtcblxudmFyIF9Qb3BvdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BvcG92ZXIpO1xuXG52YXIgX3Byb3BUeXBlczMgPSByZXF1aXJlKCcuLi91dGlscy9wcm9wVHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXM0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzMyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCwgc3RhdGUpIHtcbiAgdmFyIGFuY2hvckVsID0gc3RhdGUuYW5jaG9yRWw7XG4gIHZhciBmdWxsV2lkdGggPSBwcm9wcy5mdWxsV2lkdGg7XG5cblxuICB2YXIgc3R5bGVzID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB3aWR0aDogZnVsbFdpZHRoID8gJzEwMCUnIDogMjU2XG4gICAgfSxcbiAgICBtZW51OiB7XG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICBsaXN0OiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgd2lkdGg6IGZ1bGxXaWR0aCA/ICcxMDAlJyA6IDI1NlxuICAgIH0sXG4gICAgaW5uZXJEaXY6IHtcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH1cbiAgfTtcblxuICBpZiAoYW5jaG9yRWwgJiYgZnVsbFdpZHRoKSB7XG4gICAgc3R5bGVzLnBvcG92ZXIgPSB7XG4gICAgICB3aWR0aDogYW5jaG9yRWwuY2xpZW50V2lkdGhcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cblxudmFyIEF1dG9Db21wbGV0ZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKEF1dG9Db21wbGV0ZSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQXV0b0NvbXBsZXRlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIEF1dG9Db21wbGV0ZSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBBdXRvQ29tcGxldGUuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKEF1dG9Db21wbGV0ZSkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgYW5jaG9yRWw6IG51bGwsXG4gICAgICBmb2N1c1RleHRGaWVsZDogdHJ1ZSxcbiAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgc2VhcmNoVGV4dDogdW5kZWZpbmVkXG4gICAgfSwgX3RoaXMuaGFuZGxlUmVxdWVzdENsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gT25seSB0YWtlIGludG8gYWNjb3VudCB0aGUgUG9wb3ZlciBjbGlja0F3YXkgd2hlbiB3ZSBhcmVcbiAgICAgIC8vIG5vdCBmb2N1c2luZyB0aGUgVGV4dEZpZWxkLlxuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5mb2N1c1RleHRGaWVsZCkge1xuICAgICAgICBfdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy8gS2VlcCB0aGUgVGV4dEZpZWxkIGZvY3VzZWRcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlSXRlbVRvdWNoVGFwID0gZnVuY3Rpb24gKGV2ZW50LCBjaGlsZCkge1xuICAgICAgdmFyIGRhdGFTb3VyY2UgPSBfdGhpcy5wcm9wcy5kYXRhU291cmNlO1xuICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoY2hpbGQua2V5LCAxMCk7XG4gICAgICB2YXIgY2hvc2VuUmVxdWVzdCA9IGRhdGFTb3VyY2VbaW5kZXhdO1xuICAgICAgdmFyIHNlYXJjaFRleHQgPSBfdGhpcy5jaG9zZW5SZXF1ZXN0VGV4dChjaG9zZW5SZXF1ZXN0KTtcblxuICAgICAgdmFyIHVwZGF0ZUlucHV0ID0gZnVuY3Rpb24gdXBkYXRlSW5wdXQoKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5vblVwZGF0ZUlucHV0KHNlYXJjaFRleHQsIF90aGlzLnByb3BzLmRhdGFTb3VyY2UsIHtcbiAgICAgICAgICBzb3VyY2U6ICd0b3VjaFRhcCdcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgX3RoaXMudGltZXJUb3VjaFRhcENsb3NlSWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy50aW1lclRvdWNoVGFwQ2xvc2VJZCA9IG51bGw7XG4gICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbk5ld1JlcXVlc3QoY2hvc2VuUmVxdWVzdCwgaW5kZXgpO1xuICAgICAgICB9LCBfdGhpcy5wcm9wcy5tZW51Q2xvc2VEZWxheSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAodHlwZW9mIF90aGlzLnByb3BzLnNlYXJjaFRleHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHVwZGF0ZUlucHV0KCk7XG4gICAgICAgIF90aGlzLnRpbWVyVG91Y2hUYXBDbG9zZUlkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2VhcmNoVGV4dDogc2VhcmNoVGV4dFxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdXBkYXRlSW5wdXQoKTtcbiAgICAgICAgICBfdGhpcy50aW1lclRvdWNoVGFwQ2xvc2VJZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5jaG9zZW5SZXF1ZXN0VGV4dCA9IGZ1bmN0aW9uIChjaG9zZW5SZXF1ZXN0KSB7XG4gICAgICBpZiAodHlwZW9mIGNob3NlblJlcXVlc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBjaG9zZW5SZXF1ZXN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNob3NlblJlcXVlc3RbX3RoaXMucHJvcHMuZGF0YVNvdXJjZUNvbmZpZy50ZXh0XTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVFc2NLZXlEb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25LZXlEb3duKSBfdGhpcy5wcm9wcy5vbktleURvd24oZXZlbnQpO1xuXG4gICAgICBzd2l0Y2ggKCgwLCBfa2V5Y29kZTIuZGVmYXVsdCkoZXZlbnQpKSB7XG4gICAgICAgIGNhc2UgJ2VudGVyJzpcbiAgICAgICAgICBfdGhpcy5jbG9zZSgpO1xuICAgICAgICAgIHZhciBzZWFyY2hUZXh0ID0gX3RoaXMuc3RhdGUuc2VhcmNoVGV4dDtcbiAgICAgICAgICBpZiAoc2VhcmNoVGV4dCAhPT0gJycpIHtcbiAgICAgICAgICAgIF90aGlzLnByb3BzLm9uTmV3UmVxdWVzdChzZWFyY2hUZXh0LCAtMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2VzYyc6XG4gICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICBmb2N1c1RleHRGaWVsZDogZmFsc2UsXG4gICAgICAgICAgICBhbmNob3JFbDogX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKF90aGlzLnJlZnMuc2VhcmNoVGV4dEZpZWxkKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgc2VhcmNoVGV4dCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgd2UgaGF2ZSBhIG5ldyBzZWFyY2hUZXh0LlxuICAgICAgLy8gRml4IGFuIGlzc3VlIHdpdGggYSBDb3Jkb3ZhIFdlYnZpZXdcbiAgICAgIGlmIChzZWFyY2hUZXh0ID09PSBfdGhpcy5zdGF0ZS5zZWFyY2hUZXh0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzZWFyY2hUZXh0OiBzZWFyY2hUZXh0LFxuICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICBhbmNob3JFbDogX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKF90aGlzLnJlZnMuc2VhcmNoVGV4dEZpZWxkKVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vblVwZGF0ZUlucHV0KHNlYXJjaFRleHQsIF90aGlzLnByb3BzLmRhdGFTb3VyY2UsIHtcbiAgICAgICAgICBzb3VyY2U6ICdjaGFuZ2UnXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSwgX3RoaXMuaGFuZGxlQmx1ciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnN0YXRlLmZvY3VzVGV4dEZpZWxkICYmIF90aGlzLnRpbWVyVG91Y2hUYXBDbG9zZUlkID09PSBudWxsKSB7XG4gICAgICAgIF90aGlzLnRpbWVyQmx1ckNsb3NlID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25CbHVyKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVGb2N1cyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5vcGVuICYmIF90aGlzLnByb3BzLm9wZW5PbkZvY3VzKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgIGFuY2hvckVsOiBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUoX3RoaXMucmVmcy5zZWFyY2hUZXh0RmllbGQpXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzVGV4dEZpZWxkOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Gb2N1cyhldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKEF1dG9Db21wbGV0ZSwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB0aGlzLnJlcXVlc3RzTGlzdCA9IFtdO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9wZW46IHRoaXMucHJvcHMub3BlbixcbiAgICAgICAgc2VhcmNoVGV4dDogdGhpcy5wcm9wcy5zZWFyY2hUZXh0IHx8ICcnXG4gICAgICB9KTtcbiAgICAgIHRoaXMudGltZXJUb3VjaFRhcENsb3NlSWQgPSBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKHRoaXMucHJvcHMuc2VhcmNoVGV4dCAhPT0gbmV4dFByb3BzLnNlYXJjaFRleHQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2VhcmNoVGV4dDogbmV4dFByb3BzLnNlYXJjaFRleHRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5vcGVuICE9PSBuZXh0UHJvcHMub3Blbikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBvcGVuOiBuZXh0UHJvcHMub3BlbixcbiAgICAgICAgICBhbmNob3JFbDogX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5zZWFyY2hUZXh0RmllbGQpXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lclRvdWNoVGFwQ2xvc2VJZCk7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lckJsdXJDbG9zZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xvc2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgYW5jaG9yRWw6IG51bGxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNsb3NlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2JsdXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgdGhpcy5yZWZzLnNlYXJjaFRleHRGaWVsZC5ibHVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZm9jdXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgIHRoaXMucmVmcy5zZWFyY2hUZXh0RmllbGQuZm9jdXMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYW5jaG9yT3JpZ2luID0gX3Byb3BzLmFuY2hvck9yaWdpbixcbiAgICAgICAgICBhbmltYXRlZCA9IF9wcm9wcy5hbmltYXRlZCxcbiAgICAgICAgICBhbmltYXRpb24gPSBfcHJvcHMuYW5pbWF0aW9uLFxuICAgICAgICAgIGRhdGFTb3VyY2UgPSBfcHJvcHMuZGF0YVNvdXJjZSxcbiAgICAgICAgICBkYXRhU291cmNlQ29uZmlnID0gX3Byb3BzLmRhdGFTb3VyY2VDb25maWcsXG4gICAgICAgICAgZGlzYWJsZUZvY3VzUmlwcGxlID0gX3Byb3BzLmRpc2FibGVGb2N1c1JpcHBsZSxcbiAgICAgICAgICBlcnJvclN0eWxlID0gX3Byb3BzLmVycm9yU3R5bGUsXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQgPSBfcHJvcHMuZmxvYXRpbmdMYWJlbFRleHQsXG4gICAgICAgICAgZmlsdGVyID0gX3Byb3BzLmZpbHRlcixcbiAgICAgICAgICBmdWxsV2lkdGggPSBfcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIGhpbnRUZXh0ID0gX3Byb3BzLmhpbnRUZXh0LFxuICAgICAgICAgIG1heFNlYXJjaFJlc3VsdHMgPSBfcHJvcHMubWF4U2VhcmNoUmVzdWx0cyxcbiAgICAgICAgICBtZW51Q2xvc2VEZWxheSA9IF9wcm9wcy5tZW51Q2xvc2VEZWxheSxcbiAgICAgICAgICB0ZXh0RmllbGRTdHlsZSA9IF9wcm9wcy50ZXh0RmllbGRTdHlsZSxcbiAgICAgICAgICBtZW51U3R5bGUgPSBfcHJvcHMubWVudVN0eWxlLFxuICAgICAgICAgIG1lbnVQcm9wcyA9IF9wcm9wcy5tZW51UHJvcHMsXG4gICAgICAgICAgbGlzdFN0eWxlID0gX3Byb3BzLmxpc3RTdHlsZSxcbiAgICAgICAgICB0YXJnZXRPcmlnaW4gPSBfcHJvcHMudGFyZ2V0T3JpZ2luLFxuICAgICAgICAgIG9uQmx1ciA9IF9wcm9wcy5vbkJsdXIsXG4gICAgICAgICAgb25DbG9zZSA9IF9wcm9wcy5vbkNsb3NlLFxuICAgICAgICAgIG9uRm9jdXMgPSBfcHJvcHMub25Gb2N1cyxcbiAgICAgICAgICBvbktleURvd24gPSBfcHJvcHMub25LZXlEb3duLFxuICAgICAgICAgIG9uTmV3UmVxdWVzdCA9IF9wcm9wcy5vbk5ld1JlcXVlc3QsXG4gICAgICAgICAgb25VcGRhdGVJbnB1dCA9IF9wcm9wcy5vblVwZGF0ZUlucHV0LFxuICAgICAgICAgIG9wZW5PbkZvY3VzID0gX3Byb3BzLm9wZW5PbkZvY3VzLFxuICAgICAgICAgIHBvcG92ZXJQcm9wcyA9IF9wcm9wcy5wb3BvdmVyUHJvcHMsXG4gICAgICAgICAgc2VhcmNoVGV4dFByb3AgPSBfcHJvcHMuc2VhcmNoVGV4dCxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydhbmNob3JPcmlnaW4nLCAnYW5pbWF0ZWQnLCAnYW5pbWF0aW9uJywgJ2RhdGFTb3VyY2UnLCAnZGF0YVNvdXJjZUNvbmZpZycsICdkaXNhYmxlRm9jdXNSaXBwbGUnLCAnZXJyb3JTdHlsZScsICdmbG9hdGluZ0xhYmVsVGV4dCcsICdmaWx0ZXInLCAnZnVsbFdpZHRoJywgJ3N0eWxlJywgJ2hpbnRUZXh0JywgJ21heFNlYXJjaFJlc3VsdHMnLCAnbWVudUNsb3NlRGVsYXknLCAndGV4dEZpZWxkU3R5bGUnLCAnbWVudVN0eWxlJywgJ21lbnVQcm9wcycsICdsaXN0U3R5bGUnLCAndGFyZ2V0T3JpZ2luJywgJ29uQmx1cicsICdvbkNsb3NlJywgJ29uRm9jdXMnLCAnb25LZXlEb3duJywgJ29uTmV3UmVxdWVzdCcsICdvblVwZGF0ZUlucHV0JywgJ29wZW5PbkZvY3VzJywgJ3BvcG92ZXJQcm9wcycsICdzZWFyY2hUZXh0J10pO1xuXG4gICAgICB2YXIgX3JlZjIgPSBwb3BvdmVyUHJvcHMgfHwge30sXG4gICAgICAgICAgcG9wb3ZlclN0eWxlID0gX3JlZjIuc3R5bGUsXG4gICAgICAgICAgcG9wb3Zlck90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3JlZjIsIFsnc3R5bGUnXSk7XG5cbiAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIG9wZW4gPSBfc3RhdGUub3BlbixcbiAgICAgICAgICBhbmNob3JFbCA9IF9zdGF0ZS5hbmNob3JFbCxcbiAgICAgICAgICBzZWFyY2hUZXh0ID0gX3N0YXRlLnNlYXJjaFRleHQsXG4gICAgICAgICAgZm9jdXNUZXh0RmllbGQgPSBfc3RhdGUuZm9jdXNUZXh0RmllbGQ7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCwgdGhpcy5zdGF0ZSk7XG5cbiAgICAgIHZhciByZXF1ZXN0c0xpc3QgPSBbXTtcblxuICAgICAgZGF0YVNvdXJjZS5ldmVyeShmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgc3dpdGNoICh0eXBlb2YgaXRlbSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShpdGVtKSkge1xuICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBpZiAoZmlsdGVyKHNlYXJjaFRleHQsIGl0ZW0sIGl0ZW0pKSB7XG4gICAgICAgICAgICAgIHJlcXVlc3RzTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfTWVudUl0ZW0yLmRlZmF1bHQsIHtcbiAgICAgICAgICAgICAgICAgIGlubmVyRGl2U3R5bGU6IHN0eWxlcy5pbm5lckRpdixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgcHJpbWFyeVRleHQ6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlRm9jdXNSaXBwbGU6IGRpc2FibGVGb2N1c1JpcHBsZSxcbiAgICAgICAgICAgICAgICAgIGtleTogaW5kZXhcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGlmIChpdGVtICYmIHR5cGVvZiBpdGVtW190aGlzMi5wcm9wcy5kYXRhU291cmNlQ29uZmlnLnRleHRdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICB2YXIgaXRlbVRleHQgPSBpdGVtW190aGlzMi5wcm9wcy5kYXRhU291cmNlQ29uZmlnLnRleHRdO1xuICAgICAgICAgICAgICBpZiAoIV90aGlzMi5wcm9wcy5maWx0ZXIoc2VhcmNoVGV4dCwgaXRlbVRleHQsIGl0ZW0pKSBicmVhaztcblxuICAgICAgICAgICAgICB2YXIgaXRlbVZhbHVlID0gaXRlbVtfdGhpczIucHJvcHMuZGF0YVNvdXJjZUNvbmZpZy52YWx1ZV07XG4gICAgICAgICAgICAgIGlmIChpdGVtVmFsdWUudHlwZSAmJiAoaXRlbVZhbHVlLnR5cGUubXVpTmFtZSA9PT0gX01lbnVJdGVtMi5kZWZhdWx0Lm11aU5hbWUgfHwgaXRlbVZhbHVlLnR5cGUubXVpTmFtZSA9PT0gX0RpdmlkZXIyLmRlZmF1bHQubXVpTmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0c0xpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtVGV4dCxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGl0ZW1WYWx1ZSwge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRm9jdXNSaXBwbGU6IGRpc2FibGVGb2N1c1JpcHBsZVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0c0xpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBpdGVtVGV4dCxcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfTWVudUl0ZW0yLmRlZmF1bHQsIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJEaXZTdHlsZTogc3R5bGVzLmlubmVyRGl2LFxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5VGV4dDogaXRlbVRleHQsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVGb2N1c1JpcHBsZTogZGlzYWJsZUZvY3VzUmlwcGxlLFxuICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgLy8gRG8gbm90aGluZ1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEobWF4U2VhcmNoUmVzdWx0cyAmJiBtYXhTZWFyY2hSZXN1bHRzID4gMCAmJiByZXF1ZXN0c0xpc3QubGVuZ3RoID09PSBtYXhTZWFyY2hSZXN1bHRzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlcXVlc3RzTGlzdCA9IHJlcXVlc3RzTGlzdDtcblxuICAgICAgdmFyIG1lbnUgPSBvcGVuICYmIHJlcXVlc3RzTGlzdC5sZW5ndGggPiAwICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfTWVudTIuZGVmYXVsdCxcbiAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7XG4gICAgICAgICAgcmVmOiAnbWVudScsXG4gICAgICAgICAgYXV0b1dpZHRoOiBmYWxzZSxcbiAgICAgICAgICBkaXNhYmxlQXV0b0ZvY3VzOiBmb2N1c1RleHRGaWVsZCxcbiAgICAgICAgICBvbkVzY0tleURvd246IHRoaXMuaGFuZGxlRXNjS2V5RG93bixcbiAgICAgICAgICBpbml0aWFsbHlLZXlib2FyZEZvY3VzZWQ6IHRydWUsXG4gICAgICAgICAgb25JdGVtVG91Y2hUYXA6IHRoaXMuaGFuZGxlSXRlbVRvdWNoVGFwLFxuICAgICAgICAgIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZU1vdXNlRG93bixcbiAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5tZW51LCBtZW51U3R5bGUpLFxuICAgICAgICAgIGxpc3RTdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5saXN0LCBsaXN0U3R5bGUpXG4gICAgICAgIH0sIG1lbnVQcm9wcyksXG4gICAgICAgIHJlcXVlc3RzTGlzdC5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICByZXR1cm4gaS52YWx1ZTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yb290LCBzdHlsZSkpIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9UZXh0RmllbGQyLmRlZmF1bHQsICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe1xuICAgICAgICAgIHJlZjogJ3NlYXJjaFRleHRGaWVsZCcsXG4gICAgICAgICAgYXV0b0NvbXBsZXRlOiAnb2ZmJyxcbiAgICAgICAgICBvbkJsdXI6IHRoaXMuaGFuZGxlQmx1cixcbiAgICAgICAgICBvbkZvY3VzOiB0aGlzLmhhbmRsZUZvY3VzLFxuICAgICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0OiBmbG9hdGluZ0xhYmVsVGV4dCxcbiAgICAgICAgICBoaW50VGV4dDogaGludFRleHQsXG4gICAgICAgICAgZnVsbFdpZHRoOiBmdWxsV2lkdGgsXG4gICAgICAgICAgbXVsdGlMaW5lOiBmYWxzZSxcbiAgICAgICAgICBlcnJvclN0eWxlOiBlcnJvclN0eWxlLFxuICAgICAgICAgIHN0eWxlOiB0ZXh0RmllbGRTdHlsZVxuICAgICAgICB9LCBvdGhlciwge1xuICAgICAgICAgIC8vIHZhbHVlIGFuZCBvbkNoYW5nZSBhcmUgaWRpb21hdGljIHByb3BlcnRpZXMgb2Z0ZW4gbGVha2VkLlxuICAgICAgICAgIC8vIFdlIHByZXZlbnQgdGhlaXIgb3ZlcnJpZGVzIGluIG9yZGVyIHRvIHJlZHVjZSBwb3RlbnRpYWwgYnVncy5cbiAgICAgICAgICB2YWx1ZTogc2VhcmNoVGV4dCxcbiAgICAgICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVDaGFuZ2VcbiAgICAgICAgfSkpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfUG9wb3ZlcjIuZGVmYXVsdCxcbiAgICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHtcbiAgICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5wb3BvdmVyLCBwb3BvdmVyU3R5bGUpLFxuICAgICAgICAgICAgY2FuQXV0b1Bvc2l0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIGFuY2hvck9yaWdpbjogYW5jaG9yT3JpZ2luLFxuICAgICAgICAgICAgdGFyZ2V0T3JpZ2luOiB0YXJnZXRPcmlnaW4sXG4gICAgICAgICAgICBvcGVuOiBvcGVuLFxuICAgICAgICAgICAgYW5jaG9yRWw6IGFuY2hvckVsLFxuICAgICAgICAgICAgdXNlTGF5ZXJGb3JDbGlja0F3YXk6IGZhbHNlLFxuICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U6IHRoaXMuaGFuZGxlUmVxdWVzdENsb3NlLFxuICAgICAgICAgICAgYW5pbWF0ZWQ6IGFuaW1hdGVkLFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRpb25cbiAgICAgICAgICB9LCBwb3BvdmVyT3RoZXIpLFxuICAgICAgICAgIG1lbnVcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEF1dG9Db21wbGV0ZTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkF1dG9Db21wbGV0ZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFuY2hvck9yaWdpbjoge1xuICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcbiAgICBob3Jpem9udGFsOiAnbGVmdCdcbiAgfSxcbiAgYW5pbWF0ZWQ6IHRydWUsXG4gIGRhdGFTb3VyY2VDb25maWc6IHtcbiAgICB0ZXh0OiAndGV4dCcsXG4gICAgdmFsdWU6ICd2YWx1ZSdcbiAgfSxcbiAgZGlzYWJsZUZvY3VzUmlwcGxlOiB0cnVlLFxuICBmaWx0ZXI6IGZ1bmN0aW9uIGZpbHRlcihzZWFyY2hUZXh0LCBrZXkpIHtcbiAgICByZXR1cm4gc2VhcmNoVGV4dCAhPT0gJycgJiYga2V5LmluZGV4T2Yoc2VhcmNoVGV4dCkgIT09IC0xO1xuICB9LFxuICBmdWxsV2lkdGg6IGZhbHNlLFxuICBvcGVuOiBmYWxzZSxcbiAgb3Blbk9uRm9jdXM6IGZhbHNlLFxuICBvblVwZGF0ZUlucHV0OiBmdW5jdGlvbiBvblVwZGF0ZUlucHV0KCkge30sXG4gIG9uTmV3UmVxdWVzdDogZnVuY3Rpb24gb25OZXdSZXF1ZXN0KCkge30sXG4gIG1lbnVDbG9zZURlbGF5OiAzMDAsXG4gIHRhcmdldE9yaWdpbjoge1xuICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICBob3Jpem9udGFsOiAnbGVmdCdcbiAgfVxufTtcbkF1dG9Db21wbGV0ZS5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuQXV0b0NvbXBsZXRlLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIExvY2F0aW9uIG9mIHRoZSBhbmNob3IgZm9yIHRoZSBhdXRvIGNvbXBsZXRlLlxuICAgKi9cbiAgYW5jaG9yT3JpZ2luOiBfcHJvcFR5cGVzNC5kZWZhdWx0Lm9yaWdpbixcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBhdXRvIGNvbXBsZXRlIGlzIGFuaW1hdGVkIGFzIGl0IGlzIHRvZ2dsZWQuXG4gICAqL1xuICBhbmltYXRlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgYW5pbWF0aW9uIGNvbXBvbmVudCB1c2VkLlxuICAgKi9cbiAgYW5pbWF0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBBcnJheSBvZiBzdHJpbmdzIG9yIG5vZGVzIHVzZWQgdG8gcG9wdWxhdGUgdGhlIGxpc3QuXG4gICAqL1xuICBkYXRhU291cmNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFycmF5LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBDb25maWcgZm9yIG9iamVjdHMgbGlzdCBkYXRhU291cmNlLlxuICAgKlxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBkYXRhU291cmNlQ29uZmlnXG4gICAqXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0ZXh0IGBkYXRhU291cmNlYCBlbGVtZW50IGtleSB1c2VkIHRvIGZpbmQgYSBzdHJpbmcgdG8gYmUgbWF0Y2hlZCBmb3Igc2VhcmNoXG4gICAqIGFuZCBzaG93biBhcyBhIGBUZXh0RmllbGRgIGlucHV0IHZhbHVlIGFmdGVyIGNob29zaW5nIHRoZSByZXN1bHQuXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB2YWx1ZSBgZGF0YVNvdXJjZWAgZWxlbWVudCBrZXkgdXNlZCB0byBmaW5kIGEgc3RyaW5nIHRvIGJlIHNob3duIGluIHNlYXJjaCByZXN1bHRzLlxuICAgKi9cbiAgZGF0YVNvdXJjZUNvbmZpZzogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBEaXNhYmxlcyBmb2N1cyByaXBwbGUgd2hlbiB0cnVlLlxuICAgKi9cbiAgZGlzYWJsZUZvY3VzUmlwcGxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSBzdHlsZSBwcm9wIGZvciBlcnJvci5cbiAgICovXG4gIGVycm9yU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGVycm9yIGNvbnRlbnQgdG8gZGlzcGxheS5cbiAgICovXG4gIGVycm9yVGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gdXNlZCB0byBmaWx0ZXIgdGhlIGF1dG8gY29tcGxldGUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWFyY2hUZXh0IFRoZSB0ZXh0IHRvIHNlYXJjaCBmb3Igd2l0aGluIGBkYXRhU291cmNlYC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBgZGF0YVNvdXJjZWAgZWxlbWVudCwgb3IgYHRleHRgIHByb3BlcnR5IG9uIHRoYXQgZWxlbWVudCBpZiBpdCdzIG5vdCBhIHN0cmluZy5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpbmRpY2F0ZXMgdGhlIGF1dG8gY29tcGxldGUgbGlzdCB3aWxsIGluY2x1ZGUgYGtleWAgd2hlbiB0aGUgaW5wdXQgaXMgYHNlYXJjaFRleHRgLlxuICAgKi9cbiAgZmlsdGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCB0byB1c2UgZm9yIGFkZGluZyBmbG9hdGluZyBsYWJlbCBlbGVtZW50LlxuICAgKi9cbiAgZmxvYXRpbmdMYWJlbFRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBmaWVsZCByZWNlaXZlcyB0aGUgcHJvcGVydHkgYHdpZHRoOiAxMDAlYC5cbiAgICovXG4gIGZ1bGxXaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhlIGhpbnQgY29udGVudCB0byBkaXNwbGF5LlxuICAgKi9cbiAgaGludFRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHN0eWxlIGZvciBsaXN0LlxuICAgKi9cbiAgbGlzdFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBtYXggbnVtYmVyIG9mIHNlYXJjaCByZXN1bHRzIHRvIGJlIHNob3duLlxuICAgKiBCeSBkZWZhdWx0IGl0IHNob3dzIGFsbCB0aGUgaXRlbXMgd2hpY2ggbWF0Y2hlcyBmaWx0ZXIuXG4gICAqL1xuICBtYXhTZWFyY2hSZXN1bHRzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgLyoqXG4gICAqIERlbGF5IGZvciBjbG9zaW5nIHRpbWUgb2YgdGhlIG1lbnUuXG4gICAqL1xuICBtZW51Q2xvc2VEZWxheTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIC8qKlxuICAgKiBQcm9wcyB0byBiZSBwYXNzZWQgdG8gbWVudS5cbiAgICovXG4gIG1lbnVQcm9wczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSBzdHlsZSBmb3IgbWVudS5cbiAgICovXG4gIG1lbnVTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uQmx1cjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiB0aGUgbWVudSBpcyBjbG9zZWQuXG4gICAqL1xuICBvbkNsb3NlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25LZXlEb3duOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGZpcmVkIHdoZW4gYSBsaXN0IGl0ZW0gaXMgc2VsZWN0ZWQsIG9yIGVudGVyIGlzIHByZXNzZWQgaW4gdGhlIGBUZXh0RmllbGRgLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hvc2VuUmVxdWVzdCBFaXRoZXIgdGhlIGBUZXh0RmllbGRgIGlucHV0IHZhbHVlLCBpZiBlbnRlciBpcyBwcmVzc2VkIGluIHRoZSBgVGV4dEZpZWxkYCxcbiAgICogb3IgdGhlIHRleHQgdmFsdWUgb2YgdGhlIGNvcnJlc3BvbmRpbmcgbGlzdCBpdGVtIHRoYXQgd2FzIHNlbGVjdGVkLlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IGluIGBkYXRhU291cmNlYCBvZiB0aGUgbGlzdCBpdGVtIHNlbGVjdGVkLCBvciBgLTFgIGlmIGVudGVyIGlzIHByZXNzZWQgaW4gdGhlXG4gICAqIGBUZXh0RmllbGRgLlxuICAgKi9cbiAgb25OZXdSZXF1ZXN0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGZpcmVkIHdoZW4gdGhlIHVzZXIgdXBkYXRlcyB0aGUgYFRleHRGaWVsZGAuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWFyY2hUZXh0IFRoZSBhdXRvLWNvbXBsZXRlJ3MgYHNlYXJjaFRleHRgIHZhbHVlLlxuICAgKiBAcGFyYW0ge2FycmF5fSBkYXRhU291cmNlIFRoZSBhdXRvLWNvbXBsZXRlJ3MgYGRhdGFTb3VyY2VgIGFycmF5LlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIEFkZGl0aW9uYWwgaW5mb3JtYXRpb24gbGlua2VkIHRoZSB1cGRhdGUuXG4gICAqL1xuICBvblVwZGF0ZUlucHV0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBBdXRvIGNvbXBsZXRlIG1lbnUgaXMgb3BlbiBpZiB0cnVlLlxuICAgKi9cbiAgb3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGxpc3QgaXRlbSBpcyBzaG93ZWQgd2hlbiBhIGZvY3VzIGV2ZW50IHRyaWdnZXJzLlxuICAgKi9cbiAgb3Blbk9uRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFByb3BzIHRvIGJlIHBhc3NlZCB0byBwb3BvdmVyLlxuICAgKi9cbiAgcG9wb3ZlclByb3BzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRleHQgYmVpbmcgaW5wdXQgdG8gYXV0byBjb21wbGV0ZS5cbiAgICovXG4gIHNlYXJjaFRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIE9yaWdpbiBmb3IgbG9jYXRpb24gb2YgdGFyZ2V0LlxuICAgKi9cbiAgdGFyZ2V0T3JpZ2luOiBfcHJvcFR5cGVzNC5kZWZhdWx0Lm9yaWdpbixcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIEF1dG9Db21wbGV0ZSdzIFRleHRGaWVsZCBlbGVtZW50LlxuICAgKi9cbiAgdGV4dEZpZWxkU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5cblxuQXV0b0NvbXBsZXRlLmxldmVuc2h0ZWluRGlzdGFuY2UgPSBmdW5jdGlvbiAoc2VhcmNoVGV4dCwga2V5KSB7XG4gIHZhciBjdXJyZW50ID0gW107XG4gIHZhciBwcmV2ID0gdm9pZCAwO1xuICB2YXIgdmFsdWUgPSB2b2lkIDA7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPD0ga2V5Lmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yICh2YXIgaiA9IDA7IGogPD0gc2VhcmNoVGV4dC5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKGkgJiYgaikge1xuICAgICAgICBpZiAoc2VhcmNoVGV4dC5jaGFyQXQoaiAtIDEpID09PSBrZXkuY2hhckF0KGkgLSAxKSkgdmFsdWUgPSBwcmV2O2Vsc2UgdmFsdWUgPSBNYXRoLm1pbihjdXJyZW50W2pdLCBjdXJyZW50W2ogLSAxXSwgcHJldikgKyAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBpICsgajtcbiAgICAgIH1cbiAgICAgIHByZXYgPSBjdXJyZW50W2pdO1xuICAgICAgY3VycmVudFtqXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY3VycmVudC5wb3AoKTtcbn07XG5cbkF1dG9Db21wbGV0ZS5ub0ZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5BdXRvQ29tcGxldGUuZGVmYXVsdEZpbHRlciA9IEF1dG9Db21wbGV0ZS5jYXNlU2Vuc2l0aXZlRmlsdGVyID0gZnVuY3Rpb24gKHNlYXJjaFRleHQsIGtleSkge1xuICByZXR1cm4gc2VhcmNoVGV4dCAhPT0gJycgJiYga2V5LmluZGV4T2Yoc2VhcmNoVGV4dCkgIT09IC0xO1xufTtcblxuQXV0b0NvbXBsZXRlLmNhc2VJbnNlbnNpdGl2ZUZpbHRlciA9IGZ1bmN0aW9uIChzZWFyY2hUZXh0LCBrZXkpIHtcbiAgcmV0dXJuIGtleS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpKSAhPT0gLTE7XG59O1xuXG5BdXRvQ29tcGxldGUubGV2ZW5zaHRlaW5EaXN0YW5jZUZpbHRlciA9IGZ1bmN0aW9uIChkaXN0YW5jZUxlc3NUaGFuKSB7XG4gIGlmIChkaXN0YW5jZUxlc3NUaGFuID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gQXV0b0NvbXBsZXRlLmxldmVuc2h0ZWluRGlzdGFuY2U7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGRpc3RhbmNlTGVzc1RoYW4gIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgJ0Vycm9yOiBBdXRvQ29tcGxldGUubGV2ZW5zaHRlaW5EaXN0YW5jZUZpbHRlciBpcyBhIGZpbHRlciBnZW5lcmF0b3IsIG5vdCBhIGZpbHRlciEnO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChzLCBrKSB7XG4gICAgcmV0dXJuIEF1dG9Db21wbGV0ZS5sZXZlbnNodGVpbkRpc3RhbmNlKHMsIGspIDwgZGlzdGFuY2VMZXNzVGhhbjtcbiAgfTtcbn07XG5cbkF1dG9Db21wbGV0ZS5mdXp6eUZpbHRlciA9IGZ1bmN0aW9uIChzZWFyY2hUZXh0LCBrZXkpIHtcbiAgdmFyIGNvbXBhcmVTdHJpbmcgPSBrZXkudG9Mb3dlckNhc2UoKTtcbiAgc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQudG9Mb3dlckNhc2UoKTtcblxuICB2YXIgc2VhcmNoVGV4dEluZGV4ID0gMDtcbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGtleS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBpZiAoY29tcGFyZVN0cmluZ1tpbmRleF0gPT09IHNlYXJjaFRleHRbc2VhcmNoVGV4dEluZGV4XSkge1xuICAgICAgc2VhcmNoVGV4dEluZGV4ICs9IDE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNlYXJjaFRleHRJbmRleCA9PT0gc2VhcmNoVGV4dC5sZW5ndGg7XG59O1xuXG5BdXRvQ29tcGxldGUuSXRlbSA9IF9NZW51SXRlbTIuZGVmYXVsdDtcbkF1dG9Db21wbGV0ZS5EaXZpZGVyID0gX0RpdmlkZXIyLmRlZmF1bHQ7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEF1dG9Db21wbGV0ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvQXV0b0NvbXBsZXRlL0F1dG9Db21wbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9BdXRvQ29tcGxldGUgPSByZXF1aXJlKCcuL0F1dG9Db21wbGV0ZScpO1xuXG52YXIgX0F1dG9Db21wbGV0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BdXRvQ29tcGxldGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfQXV0b0NvbXBsZXRlMi5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9BdXRvQ29tcGxldGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDc5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9yZWFjdEV2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCdyZWFjdC1ldmVudC1saXN0ZW5lcicpO1xuXG52YXIgX3JlYWN0RXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEV2ZW50TGlzdGVuZXIpO1xuXG52YXIgX2tleWNvZGUgPSByZXF1aXJlKCdrZXljb2RlJyk7XG5cbnZhciBfa2V5Y29kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXljb2RlKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxudmFyIF9PdmVybGF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvT3ZlcmxheScpO1xuXG52YXIgX092ZXJsYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfT3ZlcmxheSk7XG5cbnZhciBfUmVuZGVyVG9MYXllciA9IHJlcXVpcmUoJy4uL2ludGVybmFsL1JlbmRlclRvTGF5ZXInKTtcblxudmFyIF9SZW5kZXJUb0xheWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JlbmRlclRvTGF5ZXIpO1xuXG52YXIgX1BhcGVyID0gcmVxdWlyZSgnLi4vUGFwZXInKTtcblxudmFyIF9QYXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYXBlcik7XG5cbnZhciBfVHJhbnNpdGlvbkdyb3VwID0gcmVxdWlyZSgncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uR3JvdXAnKTtcblxudmFyIF9UcmFuc2l0aW9uR3JvdXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhbnNpdGlvbkdyb3VwKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFRyYW5zaXRpb25JdGVtID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoVHJhbnNpdGlvbkl0ZW0sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRyYW5zaXRpb25JdGVtKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFRyYW5zaXRpb25JdGVtKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IFRyYW5zaXRpb25JdGVtLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShUcmFuc2l0aW9uSXRlbSkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgc3R5bGU6IHt9XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFRyYW5zaXRpb25JdGVtLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5lbnRlclRpbWVvdXQpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubGVhdmVUaW1lb3V0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsRW50ZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsRW50ZXIoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuY29tcG9uZW50V2lsbEFwcGVhcihjYWxsYmFjayk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbEFwcGVhcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxBcHBlYXIoY2FsbGJhY2spIHtcbiAgICAgIHZhciBzcGFjaW5nID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLmJhc2VUaGVtZS5zcGFjaW5nO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwLCAnICsgc3BhY2luZy5kZXNrdG9wS2V5bGluZUluY3JlbWVudCArICdweCknXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmVudGVyVGltZW91dCA9IHNldFRpbWVvdXQoY2FsbGJhY2ssIDQ1MCk7IC8vIG1hdGNoZXMgdHJhbnNpdGlvbiBkdXJhdGlvblxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxMZWF2ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxMZWF2ZShjYWxsYmFjaykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwgMCknXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmxlYXZlVGltZW91dCA9IHNldFRpbWVvdXQoY2FsbGJhY2ssIDQ1MCk7IC8vIG1hdGNoZXMgdHJhbnNpdGlvbiBkdXJhdGlvblxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ3N0eWxlJywgJ2NoaWxkcmVuJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwgeyBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHRoaXMuc3RhdGUuc3R5bGUsIHN0eWxlKSkgfSksXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gVHJhbnNpdGlvbkl0ZW07XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5UcmFuc2l0aW9uSXRlbS5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuVHJhbnNpdGlvbkl0ZW0ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcblxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQpIHtcbiAgdmFyIGF1dG9TY3JvbGxCb2R5Q29udGVudCA9IHByb3BzLmF1dG9TY3JvbGxCb2R5Q29udGVudCxcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuO1xuICB2YXIgX2NvbnRleHQkbXVpVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lLFxuICAgICAgX2NvbnRleHQkbXVpVGhlbWUkYmFzID0gX2NvbnRleHQkbXVpVGhlbWUuYmFzZVRoZW1lLFxuICAgICAgc3BhY2luZyA9IF9jb250ZXh0JG11aVRoZW1lJGJhcy5zcGFjaW5nLFxuICAgICAgcGFsZXR0ZSA9IF9jb250ZXh0JG11aVRoZW1lJGJhcy5wYWxldHRlLFxuICAgICAgZGlhbG9nID0gX2NvbnRleHQkbXVpVGhlbWUuZGlhbG9nLFxuICAgICAgekluZGV4ID0gX2NvbnRleHQkbXVpVGhlbWUuekluZGV4O1xuXG5cbiAgdmFyIGd1dHRlciA9IHNwYWNpbmcuZGVza3RvcEd1dHRlcjtcbiAgdmFyIGJvcmRlclNjcm9sbCA9ICcxcHggc29saWQgJyArIHBhbGV0dGUuYm9yZGVyQ29sb3I7XG5cbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6ICdyZ2JhKDAsMCwwLDApJywgLy8gUmVtb3ZlIG1vYmlsZSBjb2xvciBmbGFzaGluZyAoZGVwcmVjYXRlZClcbiAgICAgIHpJbmRleDogekluZGV4LmRpYWxvZyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IG9wZW4gPyAwIDogLTEwMDAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgdHJhbnNpdGlvbjogb3BlbiA/IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCcwbXMnLCAnbGVmdCcsICcwbXMnKSA6IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCcwbXMnLCAnbGVmdCcsICc0NTBtcycpXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIFdlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiAncmdiYSgwLDAsMCwwKScsIC8vIFJlbW92ZSBtb2JpbGUgY29sb3IgZmxhc2hpbmcgKGRlcHJlY2F0ZWQpXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB3aWR0aDogJzc1JScsXG4gICAgICBtYXhXaWR0aDogc3BhY2luZy5kZXNrdG9wS2V5bGluZUluY3JlbWVudCAqIDEyLFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgIHpJbmRleDogekluZGV4LmRpYWxvZ1xuICAgIH0sXG4gICAgYWN0aW9uc0NvbnRhaW5lcjoge1xuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3JnYmEoMCwwLDAsMCknLCAvLyBSZW1vdmUgbW9iaWxlIGNvbG9yIGZsYXNoaW5nIChkZXByZWNhdGVkKVxuICAgICAgcGFkZGluZzogOCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgICBtYXJnaW5Ub3A6IGF1dG9TY3JvbGxCb2R5Q29udGVudCA/IC0xIDogMFxuICAgIH0sXG4gICAgb3ZlcmxheToge1xuICAgICAgekluZGV4OiB6SW5kZXguZGlhbG9nT3ZlcmxheVxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHBhZGRpbmc6IGd1dHRlciArICdweCAnICsgZ3V0dGVyICsgJ3B4IDIwcHggJyArIGd1dHRlciArICdweCcsXG4gICAgICBjb2xvcjogcGFsZXR0ZS50ZXh0Q29sb3IsXG4gICAgICBmb250U2l6ZTogZGlhbG9nLnRpdGxlRm9udFNpemUsXG4gICAgICBsaW5lSGVpZ2h0OiAnMzJweCcsXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICBtYXJnaW5Cb3R0b206IGF1dG9TY3JvbGxCb2R5Q29udGVudCA/IC0xIDogMFxuICAgIH0sXG4gICAgYm9keToge1xuICAgICAgZm9udFNpemU6IGRpYWxvZy5ib2R5Rm9udFNpemUsXG4gICAgICBjb2xvcjogZGlhbG9nLmJvZHlDb2xvcixcbiAgICAgIHBhZGRpbmc6IChwcm9wcy50aXRsZSA/IDAgOiBndXR0ZXIpICsgJ3B4ICcgKyBndXR0ZXIgKyAncHggJyArIGd1dHRlciArICdweCcsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG92ZXJmbG93WTogYXV0b1Njcm9sbEJvZHlDb250ZW50ID8gJ2F1dG8nIDogJ2hpZGRlbicsXG4gICAgICBib3JkZXJUb3A6IGF1dG9TY3JvbGxCb2R5Q29udGVudCA/IGJvcmRlclNjcm9sbCA6ICdub25lJyxcbiAgICAgIGJvcmRlckJvdHRvbTogYXV0b1Njcm9sbEJvZHlDb250ZW50ID8gYm9yZGVyU2Nyb2xsIDogJ25vbmUnXG4gICAgfVxuICB9O1xufVxuXG52YXIgRGlhbG9nSW5saW5lID0gZnVuY3Rpb24gKF9Db21wb25lbnQyKSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKERpYWxvZ0lubGluZSwgX0NvbXBvbmVudDIpO1xuXG4gIGZ1bmN0aW9uIERpYWxvZ0lubGluZSgpIHtcbiAgICB2YXIgX3JlZjI7XG5cbiAgICB2YXIgX3RlbXAyLCBfdGhpczIsIF9yZXQyO1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgRGlhbG9nSW5saW5lKTtcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQyID0gKF90ZW1wMiA9IChfdGhpczIgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmMiA9IERpYWxvZ0lubGluZS5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoRGlhbG9nSW5saW5lKSkuY2FsbC5hcHBseShfcmVmMiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpczIpLCBfdGhpczIuaGFuZGxlVG91Y2hUYXBPdmVybGF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLnJlcXVlc3RDbG9zZShmYWxzZSk7XG4gICAgfSwgX3RoaXMyLmhhbmRsZUtleVVwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoKDAsIF9rZXljb2RlMi5kZWZhdWx0KShldmVudCkgPT09ICdlc2MnKSB7XG4gICAgICAgIF90aGlzMi5yZXF1ZXN0Q2xvc2UoZmFsc2UpO1xuICAgICAgfVxuICAgIH0sIF90aGlzMi5oYW5kbGVSZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIucG9zaXRpb25EaWFsb2coKTtcbiAgICB9LCBfdGVtcDIpLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzMiwgX3JldDIpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoRGlhbG9nSW5saW5lLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnBvc2l0aW9uRGlhbG9nKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdGhpcy5wb3NpdGlvbkRpYWxvZygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Bvc2l0aW9uRGlhbG9nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcG9zaXRpb25EaWFsb2coKSB7XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWN0aW9ucyA9IF9wcm9wczIuYWN0aW9ucyxcbiAgICAgICAgICBhdXRvRGV0ZWN0V2luZG93SGVpZ2h0ID0gX3Byb3BzMi5hdXRvRGV0ZWN0V2luZG93SGVpZ2h0LFxuICAgICAgICAgIGF1dG9TY3JvbGxCb2R5Q29udGVudCA9IF9wcm9wczIuYXV0b1Njcm9sbEJvZHlDb250ZW50LFxuICAgICAgICAgIGJvZHlTdHlsZSA9IF9wcm9wczIuYm9keVN0eWxlLFxuICAgICAgICAgIG9wZW4gPSBfcHJvcHMyLm9wZW4sXG4gICAgICAgICAgcmVwb3NpdGlvbk9uVXBkYXRlID0gX3Byb3BzMi5yZXBvc2l0aW9uT25VcGRhdGUsXG4gICAgICAgICAgdGl0bGUgPSBfcHJvcHMyLnRpdGxlO1xuXG5cbiAgICAgIGlmICghb3Blbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjbGllbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcbiAgICAgIHZhciBjb250YWluZXIgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcyk7XG4gICAgICB2YXIgZGlhbG9nV2luZG93ID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5kaWFsb2dXaW5kb3cpO1xuICAgICAgdmFyIGRpYWxvZ0NvbnRlbnQgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcy5yZWZzLmRpYWxvZ0NvbnRlbnQpO1xuICAgICAgdmFyIG1pblBhZGRpbmdUb3AgPSAxNjtcblxuICAgICAgLy8gUmVzZXQgdGhlIGhlaWdodCBpbiBjYXNlIHRoZSB3aW5kb3cgd2FzIHJlc2l6ZWQuXG4gICAgICBkaWFsb2dXaW5kb3cuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICBkaWFsb2dDb250ZW50LnN0eWxlLmhlaWdodCA9ICcnO1xuXG4gICAgICB2YXIgZGlhbG9nV2luZG93SGVpZ2h0ID0gZGlhbG9nV2luZG93Lm9mZnNldEhlaWdodDtcbiAgICAgIHZhciBwYWRkaW5nVG9wID0gKGNsaWVudEhlaWdodCAtIGRpYWxvZ1dpbmRvd0hlaWdodCkgLyAyIC0gNjQ7XG4gICAgICBpZiAocGFkZGluZ1RvcCA8IG1pblBhZGRpbmdUb3ApIHBhZGRpbmdUb3AgPSBtaW5QYWRkaW5nVG9wO1xuXG4gICAgICAvLyBWZXJ0aWNhbGx5IGNlbnRlciB0aGUgZGlhbG9nIHdpbmRvdywgYnV0IG1ha2Ugc3VyZSBpdCBkb2Vzbid0XG4gICAgICAvLyB0cmFuc2l0aW9uIHRvIHRoYXQgcG9zaXRpb24uXG4gICAgICBpZiAocmVwb3NpdGlvbk9uVXBkYXRlIHx8ICFjb250YWluZXIuc3R5bGUucGFkZGluZ1RvcCkge1xuICAgICAgICBjb250YWluZXIuc3R5bGUucGFkZGluZ1RvcCA9IHBhZGRpbmdUb3AgKyAncHgnO1xuICAgICAgfVxuXG4gICAgICAvLyBGb3JjZSBhIGhlaWdodCBpZiB0aGUgZGlhbG9nIGlzIHRhbGxlciB0aGFuIGNsaWVudEhlaWdodFxuICAgICAgaWYgKGF1dG9EZXRlY3RXaW5kb3dIZWlnaHQgfHwgYXV0b1Njcm9sbEJvZHlDb250ZW50KSB7XG4gICAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgc3R5bGVzLmJvZHkgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmJvZHksIGJvZHlTdHlsZSk7XG4gICAgICAgIHZhciBtYXhEaWFsb2dDb250ZW50SGVpZ2h0ID0gY2xpZW50SGVpZ2h0IC0gMiAqIDY0O1xuXG4gICAgICAgIGlmICh0aXRsZSkgbWF4RGlhbG9nQ29udGVudEhlaWdodCAtPSBkaWFsb2dDb250ZW50LnByZXZpb3VzU2libGluZy5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgaWYgKF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5jb3VudChhY3Rpb25zKSkge1xuICAgICAgICAgIG1heERpYWxvZ0NvbnRlbnRIZWlnaHQgLT0gZGlhbG9nQ29udGVudC5uZXh0U2libGluZy5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBkaWFsb2dDb250ZW50LnN0eWxlLm1heEhlaWdodCA9IG1heERpYWxvZ0NvbnRlbnRIZWlnaHQgKyAncHgnO1xuICAgICAgICBpZiAobWF4RGlhbG9nQ29udGVudEhlaWdodCA+IGRpYWxvZ1dpbmRvd0hlaWdodCkge1xuICAgICAgICAgIGRpYWxvZ0NvbnRlbnQuc3R5bGUuYm9yZGVyQm90dG9tID0gJ25vbmUnO1xuICAgICAgICAgIGRpYWxvZ0NvbnRlbnQuc3R5bGUuYm9yZGVyVG9wID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVxdWVzdENsb3NlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVxdWVzdENsb3NlKGJ1dHRvbkNsaWNrZWQpIHtcbiAgICAgIGlmICghYnV0dG9uQ2xpY2tlZCAmJiB0aGlzLnByb3BzLm1vZGFsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2UpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJlcXVlc3RDbG9zZSghIWJ1dHRvbkNsaWNrZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhY3Rpb25zID0gX3Byb3BzMy5hY3Rpb25zLFxuICAgICAgICAgIGFjdGlvbnNDb250YWluZXJDbGFzc05hbWUgPSBfcHJvcHMzLmFjdGlvbnNDb250YWluZXJDbGFzc05hbWUsXG4gICAgICAgICAgYWN0aW9uc0NvbnRhaW5lclN0eWxlID0gX3Byb3BzMy5hY3Rpb25zQ29udGFpbmVyU3R5bGUsXG4gICAgICAgICAgYm9keUNsYXNzTmFtZSA9IF9wcm9wczMuYm9keUNsYXNzTmFtZSxcbiAgICAgICAgICBib2R5U3R5bGUgPSBfcHJvcHMzLmJvZHlTdHlsZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wczMuY2hpbGRyZW4sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzMy5jbGFzc05hbWUsXG4gICAgICAgICAgY29udGVudENsYXNzTmFtZSA9IF9wcm9wczMuY29udGVudENsYXNzTmFtZSxcbiAgICAgICAgICBjb250ZW50U3R5bGUgPSBfcHJvcHMzLmNvbnRlbnRTdHlsZSxcbiAgICAgICAgICBvdmVybGF5Q2xhc3NOYW1lID0gX3Byb3BzMy5vdmVybGF5Q2xhc3NOYW1lLFxuICAgICAgICAgIG92ZXJsYXlTdHlsZSA9IF9wcm9wczMub3ZlcmxheVN0eWxlLFxuICAgICAgICAgIG9wZW4gPSBfcHJvcHMzLm9wZW4sXG4gICAgICAgICAgdGl0bGVDbGFzc05hbWUgPSBfcHJvcHMzLnRpdGxlQ2xhc3NOYW1lLFxuICAgICAgICAgIHRpdGxlU3R5bGUgPSBfcHJvcHMzLnRpdGxlU3R5bGUsXG4gICAgICAgICAgdGl0bGUgPSBfcHJvcHMzLnRpdGxlLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzMy5zdHlsZTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcblxuICAgICAgc3R5bGVzLnJvb3QgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKTtcbiAgICAgIHN0eWxlcy5jb250ZW50ID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5jb250ZW50LCBjb250ZW50U3R5bGUpO1xuICAgICAgc3R5bGVzLmJvZHkgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmJvZHksIGJvZHlTdHlsZSk7XG4gICAgICBzdHlsZXMuYWN0aW9uc0NvbnRhaW5lciA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMuYWN0aW9uc0NvbnRhaW5lciwgYWN0aW9uc0NvbnRhaW5lclN0eWxlKTtcbiAgICAgIHN0eWxlcy5vdmVybGF5ID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5vdmVybGF5LCBvdmVybGF5U3R5bGUpO1xuICAgICAgc3R5bGVzLnRpdGxlID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy50aXRsZSwgdGl0bGVTdHlsZSk7XG5cbiAgICAgIHZhciBhY3Rpb25zQ29udGFpbmVyID0gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KGFjdGlvbnMpID4gMCAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBhY3Rpb25zQ29udGFpbmVyQ2xhc3NOYW1lLCBzdHlsZTogcHJlcGFyZVN0eWxlcyhzdHlsZXMuYWN0aW9uc0NvbnRhaW5lcikgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkoYWN0aW9ucylcbiAgICAgICk7XG5cbiAgICAgIHZhciB0aXRsZUVsZW1lbnQgPSB0aXRsZTtcbiAgICAgIGlmIChfcmVhY3QyLmRlZmF1bHQuaXNWYWxpZEVsZW1lbnQodGl0bGUpKSB7XG4gICAgICAgIHRpdGxlRWxlbWVudCA9IF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQodGl0bGUsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IHRpdGxlLnByb3BzLmNsYXNzTmFtZSB8fCB0aXRsZUNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnRpdGxlLCB0aXRsZS5wcm9wcy5zdHlsZSkpXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGl0bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRpdGxlRWxlbWVudCA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdoMycsXG4gICAgICAgICAgeyBjbGFzc05hbWU6IHRpdGxlQ2xhc3NOYW1lLCBzdHlsZTogcHJlcGFyZVN0eWxlcyhzdHlsZXMudGl0bGUpIH0sXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgc3R5bGU6IHByZXBhcmVTdHlsZXMoc3R5bGVzLnJvb3QpIH0sXG4gICAgICAgIG9wZW4gJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0RXZlbnRMaXN0ZW5lcjIuZGVmYXVsdCwge1xuICAgICAgICAgIHRhcmdldDogJ3dpbmRvdycsXG4gICAgICAgICAgb25LZXlVcDogdGhpcy5oYW5kbGVLZXlVcCxcbiAgICAgICAgICBvblJlc2l6ZTogdGhpcy5oYW5kbGVSZXNpemVcbiAgICAgICAgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9UcmFuc2l0aW9uR3JvdXAyLmRlZmF1bHQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY29tcG9uZW50OiAnZGl2JyxcbiAgICAgICAgICAgIHJlZjogJ2RpYWxvZ1dpbmRvdycsXG4gICAgICAgICAgICB0cmFuc2l0aW9uQXBwZWFyOiB0cnVlLFxuICAgICAgICAgICAgdHJhbnNpdGlvbkFwcGVhclRpbWVvdXQ6IDQ1MCxcbiAgICAgICAgICAgIHRyYW5zaXRpb25FbnRlcjogdHJ1ZSxcbiAgICAgICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ6IDQ1MFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb3BlbiAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFRyYW5zaXRpb25JdGVtLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IGNvbnRlbnRDbGFzc05hbWUsXG4gICAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuY29udGVudFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBfUGFwZXIyLmRlZmF1bHQsXG4gICAgICAgICAgICAgIHsgekRlcHRoOiA0IH0sXG4gICAgICAgICAgICAgIHRpdGxlRWxlbWVudCxcbiAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcmVmOiAnZGlhbG9nQ29udGVudCcsXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGJvZHlDbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcyhzdHlsZXMuYm9keSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIGFjdGlvbnNDb250YWluZXJcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9PdmVybGF5Mi5kZWZhdWx0LCB7XG4gICAgICAgICAgc2hvdzogb3BlbixcbiAgICAgICAgICBjbGFzc05hbWU6IG92ZXJsYXlDbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGU6IHN0eWxlcy5vdmVybGF5LFxuICAgICAgICAgIG9uVG91Y2hUYXA6IHRoaXMuaGFuZGxlVG91Y2hUYXBPdmVybGF5XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRGlhbG9nSW5saW5lO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuRGlhbG9nSW5saW5lLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5EaWFsb2dJbmxpbmUucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBhY3Rpb25zOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIGFjdGlvbnNDb250YWluZXJDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBhY3Rpb25zQ29udGFpbmVyU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBhdXRvRGV0ZWN0V2luZG93SGVpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGF1dG9TY3JvbGxCb2R5Q29udGVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBib2R5Q2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYm9keVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgY29udGVudENsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNvbnRlbnRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIG1vZGFsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIG9uUmVxdWVzdENsb3NlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbC5pc1JlcXVpcmVkLFxuICBvdmVybGF5Q2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgb3ZlcmxheVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgcmVwb3NpdGlvbk9uVXBkYXRlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgdGl0bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgdGl0bGVDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICB0aXRsZVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuXG52YXIgRGlhbG9nID0gZnVuY3Rpb24gKF9Db21wb25lbnQzKSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKERpYWxvZywgX0NvbXBvbmVudDMpO1xuXG4gIGZ1bmN0aW9uIERpYWxvZygpIHtcbiAgICB2YXIgX3JlZjM7XG5cbiAgICB2YXIgX3RlbXAzLCBfdGhpczMsIF9yZXQzO1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgRGlhbG9nKTtcblxuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQzID0gKF90ZW1wMyA9IChfdGhpczMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmMyA9IERpYWxvZy5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoRGlhbG9nKSkuY2FsbC5hcHBseShfcmVmMywgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpczMpLCBfdGhpczMucmVuZGVyTGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRGlhbG9nSW5saW5lLCBfdGhpczMucHJvcHMpO1xuICAgIH0sIF90ZW1wMyksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMzLCBfcmV0Myk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShEaWFsb2csIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9SZW5kZXJUb0xheWVyMi5kZWZhdWx0LCB7IHJlbmRlcjogdGhpcy5yZW5kZXJMYXllciwgb3BlbjogdHJ1ZSwgdXNlTGF5ZXJGb3JDbGlja0F3YXk6IGZhbHNlIH0pO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRGlhbG9nO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuRGlhbG9nLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5EaWFsb2cuZGVmYXVsdFByb3BzID0ge1xuICBhdXRvRGV0ZWN0V2luZG93SGVpZ2h0OiB0cnVlLFxuICBhdXRvU2Nyb2xsQm9keUNvbnRlbnQ6IGZhbHNlLFxuICBtb2RhbDogZmFsc2UsXG4gIHJlcG9zaXRpb25PblVwZGF0ZTogdHJ1ZVxufTtcbkRpYWxvZy5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBBY3Rpb24gYnV0dG9ucyB0byBkaXNwbGF5IGJlbG93IHRoZSBEaWFsb2cgY29udGVudCAoYGNoaWxkcmVuYCkuXG4gICAqIFRoaXMgcHJvcGVydHkgYWNjZXB0cyBlaXRoZXIgYSBSZWFjdCBlbGVtZW50LCBvciBhbiBhcnJheSBvZiBSZWFjdCBlbGVtZW50cy5cbiAgICovXG4gIGFjdGlvbnM6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBgY2xhc3NOYW1lYCB0byBhZGQgdG8gdGhlIGFjdGlvbnMgY29udGFpbmVyJ3Mgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgYWN0aW9uc0NvbnRhaW5lckNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBPdmVycmlkZXMgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGFjdGlvbnMgY29udGFpbmVyJ3Mgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgYWN0aW9uc0NvbnRhaW5lclN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIElmIHNldCB0byB0cnVlLCB0aGUgaGVpZ2h0IG9mIHRoZSBgRGlhbG9nYCB3aWxsIGJlIGF1dG8gZGV0ZWN0ZWQuIEEgbWF4IGhlaWdodFxuICAgKiB3aWxsIGJlIGVuZm9yY2VkIHNvIHRoYXQgdGhlIGNvbnRlbnQgZG9lcyBub3QgZXh0ZW5kIGJleW9uZCB0aGUgdmlld3BvcnQuXG4gICAqL1xuICBhdXRvRGV0ZWN0V2luZG93SGVpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIGJvZHkgY29udGVudCBvZiB0aGUgYERpYWxvZ2Agd2lsbCBiZSBzY3JvbGxhYmxlLlxuICAgKi9cbiAgYXV0b1Njcm9sbEJvZHlDb250ZW50OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgYGNsYXNzTmFtZWAgdG8gYWRkIHRvIHRoZSBjb250ZW50J3Mgcm9vdCBlbGVtZW50IHVuZGVyIHRoZSB0aXRsZS5cbiAgICovXG4gIGJvZHlDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogT3ZlcnJpZGVzIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBjb250ZW50J3Mgcm9vdCBlbGVtZW50IHVuZGVyIHRoZSB0aXRsZS5cbiAgICovXG4gIGJvZHlTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgY29udGVudHMgb2YgdGhlIGBEaWFsb2dgLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBjc3MgY2xhc3MgbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBgY2xhc3NOYW1lYCB0byBhZGQgdG8gdGhlIGNvbnRlbnQgY29udGFpbmVyLlxuICAgKi9cbiAgY29udGVudENsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBPdmVycmlkZXMgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGNvbnRlbnQgY29udGFpbmVyLlxuICAgKi9cbiAgY29udGVudFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIEZvcmNlIHRoZSB1c2VyIHRvIHVzZSBvbmUgb2YgdGhlIGFjdGlvbnMgaW4gdGhlIGBEaWFsb2dgLlxuICAgKiBDbGlja2luZyBvdXRzaWRlIHRoZSBgRGlhbG9nYCB3aWxsIG5vdCB0cmlnZ2VyIHRoZSBgb25SZXF1ZXN0Q2xvc2VgLlxuICAgKi9cbiAgbW9kYWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIEZpcmVkIHdoZW4gdGhlIGBEaWFsb2dgIGlzIHJlcXVlc3RlZCB0byBiZSBjbG9zZWQgYnkgYSBjbGljayBvdXRzaWRlIHRoZSBgRGlhbG9nYCBvciBvbiB0aGUgYnV0dG9ucy5cbiAgICpcbiAgICogQHBhcmFtIHtib29sfSBidXR0b25DbGlja2VkIERldGVybWluZXMgd2hldGhlciBhIGJ1dHRvbiBjbGljayB0cmlnZ2VyZWQgdGhpcyByZXF1ZXN0LlxuICAgKi9cbiAgb25SZXF1ZXN0Q2xvc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENvbnRyb2xzIHdoZXRoZXIgdGhlIERpYWxvZyBpcyBvcGVuZWQgb3Igbm90LlxuICAgKi9cbiAgb3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBUaGUgYGNsYXNzTmFtZWAgdG8gYWRkIHRvIHRoZSBgT3ZlcmxheWAgY29tcG9uZW50IHRoYXQgaXMgcmVuZGVyZWQgYmVoaW5kIHRoZSBgRGlhbG9nYC5cbiAgICovXG4gIG92ZXJsYXlDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogT3ZlcnJpZGVzIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBgT3ZlcmxheWAgY29tcG9uZW50IHRoYXQgaXMgcmVuZGVyZWQgYmVoaW5kIHRoZSBgRGlhbG9nYC5cbiAgICovXG4gIG92ZXJsYXlTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGBEaWFsb2dgIHNob3VsZCBiZSByZXBvc2l0aW9uZWQgd2hlbiBpdCdzIGNvbnRlbnRzIGFyZSB1cGRhdGVkLlxuICAgKi9cbiAgcmVwb3NpdGlvbk9uVXBkYXRlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIHRpdGxlIHRvIGRpc3BsYXkgb24gdGhlIGBEaWFsb2dgLiBDb3VsZCBiZSBudW1iZXIsIHN0cmluZywgZWxlbWVudCBvciBhbiBhcnJheSBjb250YWluaW5nIHRoZXNlIHR5cGVzLlxuICAgKi9cbiAgdGl0bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBgY2xhc3NOYW1lYCB0byBhZGQgdG8gdGhlIHRpdGxlJ3Mgcm9vdCBjb250YWluZXIgZWxlbWVudC5cbiAgICovXG4gIHRpdGxlQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgdGl0bGUncyByb290IGNvbnRhaW5lciBlbGVtZW50LlxuICAgKi9cbiAgdGl0bGVTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IERpYWxvZztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvRGlhbG9nL0RpYWxvZy5qc1xuLy8gbW9kdWxlIGlkID0gNzkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9EaWFsb2cgPSByZXF1aXJlKCcuL0RpYWxvZycpO1xuXG52YXIgX0RpYWxvZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EaWFsb2cpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfRGlhbG9nMi5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9EaWFsb2cvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDc5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgRGl2aWRlciA9IGZ1bmN0aW9uIERpdmlkZXIocHJvcHMsIGNvbnRleHQpIHtcbiAgdmFyIGluc2V0ID0gcHJvcHMuaW5zZXQsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShwcm9wcywgWydpbnNldCcsICdzdHlsZSddKTtcbiAgdmFyIF9jb250ZXh0JG11aVRoZW1lID0gY29udGV4dC5tdWlUaGVtZSxcbiAgICAgIGJhc2VUaGVtZSA9IF9jb250ZXh0JG11aVRoZW1lLmJhc2VUaGVtZSxcbiAgICAgIHByZXBhcmVTdHlsZXMgPSBfY29udGV4dCRtdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG5cbiAgdmFyIHN0eWxlcyA9IHtcbiAgICByb290OiB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgICBtYXJnaW5Ub3A6IC0xLFxuICAgICAgbWFyZ2luTGVmdDogaW5zZXQgPyA3MiA6IDAsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYmFzZVRoZW1lLnBhbGV0dGUuYm9yZGVyQ29sb3JcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdocicsICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpKSB9KSk7XG59O1xuXG5EaXZpZGVyLm11aU5hbWUgPSAnRGl2aWRlcic7XG5cbkRpdmlkZXIucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGBEaXZpZGVyYCB3aWxsIGJlIGluZGVudGVkLlxuICAgKi9cbiAgaW5zZXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcblxuRGl2aWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGluc2V0OiBmYWxzZVxufTtcblxuRGl2aWRlci5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBEaXZpZGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9EaXZpZGVyL0RpdmlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDc5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfRGl2aWRlciA9IHJlcXVpcmUoJy4vRGl2aWRlcicpO1xuXG52YXIgX0RpdmlkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRGl2aWRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9EaXZpZGVyMi5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9EaXZpZGVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3OTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbnZhciBfY29sb3JNYW5pcHVsYXRvciA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbG9yTWFuaXB1bGF0b3InKTtcblxudmFyIF9FbmhhbmNlZEJ1dHRvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFsL0VuaGFuY2VkQnV0dG9uJyk7XG5cbnZhciBfRW5oYW5jZWRCdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRW5oYW5jZWRCdXR0b24pO1xuXG52YXIgX0ZsYXRCdXR0b25MYWJlbCA9IHJlcXVpcmUoJy4vRmxhdEJ1dHRvbkxhYmVsJyk7XG5cbnZhciBfRmxhdEJ1dHRvbkxhYmVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZsYXRCdXR0b25MYWJlbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHZhbGlkYXRlTGFiZWwocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFwcm9wcy5jaGlsZHJlbiAmJiBwcm9wcy5sYWJlbCAhPT0gMCAmJiAhcHJvcHMubGFiZWwgJiYgIXByb3BzLmljb24pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1JlcXVpcmVkIHByb3AgbGFiZWwgb3IgY2hpbGRyZW4gb3IgaWNvbiB3YXMgbm90IHNwZWNpZmllZCBpbiAnICsgY29tcG9uZW50TmFtZSArICcuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBGbGF0QnV0dG9uID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoRmxhdEJ1dHRvbiwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRmxhdEJ1dHRvbigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBGbGF0QnV0dG9uKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IEZsYXRCdXR0b24uX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKEZsYXRCdXR0b24pKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvdmVyZWQ6IGZhbHNlLFxuICAgICAgaXNLZXlib2FyZEZvY3VzZWQ6IGZhbHNlLFxuICAgICAgdG91Y2g6IGZhbHNlXG4gICAgfSwgX3RoaXMuaGFuZGxlS2V5Ym9hcmRGb2N1cyA9IGZ1bmN0aW9uIChldmVudCwgaXNLZXlib2FyZEZvY3VzZWQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgaXNLZXlib2FyZEZvY3VzZWQ6IGlzS2V5Ym9hcmRGb2N1c2VkIH0pO1xuICAgICAgX3RoaXMucHJvcHMub25LZXlib2FyZEZvY3VzKGV2ZW50LCBpc0tleWJvYXJkRm9jdXNlZCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VFbnRlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy8gQ2FuY2VsIGhvdmVyIHN0eWxlcyBmb3IgdG91Y2ggZGV2aWNlc1xuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS50b3VjaCkgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiB0cnVlIH0pO1xuICAgICAgX3RoaXMucHJvcHMub25Nb3VzZUVudGVyKGV2ZW50KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZUxlYXZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGhvdmVyZWQ6IGZhbHNlIH0pO1xuICAgICAgX3RoaXMucHJvcHMub25Nb3VzZUxlYXZlKGV2ZW50KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVUb3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IHRvdWNoOiB0cnVlIH0pO1xuICAgICAgX3RoaXMucHJvcHMub25Ub3VjaFN0YXJ0KGV2ZW50KTtcbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoRmxhdEJ1dHRvbiwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaG92ZXJlZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yID0gX3Byb3BzLmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBmdWxsV2lkdGggPSBfcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgICAgIGhvdmVyQ29sb3IgPSBfcHJvcHMuaG92ZXJDb2xvcixcbiAgICAgICAgICBpY29uID0gX3Byb3BzLmljb24sXG4gICAgICAgICAgbGFiZWwgPSBfcHJvcHMubGFiZWwsXG4gICAgICAgICAgbGFiZWxTdHlsZSA9IF9wcm9wcy5sYWJlbFN0eWxlLFxuICAgICAgICAgIGxhYmVsUG9zaXRpb24gPSBfcHJvcHMubGFiZWxQb3NpdGlvbixcbiAgICAgICAgICBwcmltYXJ5ID0gX3Byb3BzLnByaW1hcnksXG4gICAgICAgICAgcmlwcGxlQ29sb3IgPSBfcHJvcHMucmlwcGxlQ29sb3IsXG4gICAgICAgICAgc2Vjb25kYXJ5ID0gX3Byb3BzLnNlY29uZGFyeSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydiYWNrZ3JvdW5kQ29sb3InLCAnY2hpbGRyZW4nLCAnZGlzYWJsZWQnLCAnZnVsbFdpZHRoJywgJ2hvdmVyQ29sb3InLCAnaWNvbicsICdsYWJlbCcsICdsYWJlbFN0eWxlJywgJ2xhYmVsUG9zaXRpb24nLCAncHJpbWFyeScsICdyaXBwbGVDb2xvcicsICdzZWNvbmRhcnknLCAnc3R5bGUnXSk7XG4gICAgICB2YXIgX2NvbnRleHQkbXVpVGhlbWUgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzID0gX2NvbnRleHQkbXVpVGhlbWUuYm9yZGVyUmFkaXVzLFxuICAgICAgICAgIF9jb250ZXh0JG11aVRoZW1lJGJ1dCA9IF9jb250ZXh0JG11aVRoZW1lLmJ1dHRvbixcbiAgICAgICAgICBidXR0b25IZWlnaHQgPSBfY29udGV4dCRtdWlUaGVtZSRidXQuaGVpZ2h0LFxuICAgICAgICAgIGJ1dHRvbk1pbldpZHRoID0gX2NvbnRleHQkbXVpVGhlbWUkYnV0Lm1pbldpZHRoLFxuICAgICAgICAgIGJ1dHRvblRleHRUcmFuc2Zvcm0gPSBfY29udGV4dCRtdWlUaGVtZSRidXQudGV4dFRyYW5zZm9ybSxcbiAgICAgICAgICBfY29udGV4dCRtdWlUaGVtZSRmbGEgPSBfY29udGV4dCRtdWlUaGVtZS5mbGF0QnV0dG9uLFxuICAgICAgICAgIGJ1dHRvbkZpbHRlckNvbG9yID0gX2NvbnRleHQkbXVpVGhlbWUkZmxhLmJ1dHRvbkZpbHRlckNvbG9yLFxuICAgICAgICAgIGJ1dHRvbkNvbG9yID0gX2NvbnRleHQkbXVpVGhlbWUkZmxhLmNvbG9yLFxuICAgICAgICAgIGRpc2FibGVkVGV4dENvbG9yID0gX2NvbnRleHQkbXVpVGhlbWUkZmxhLmRpc2FibGVkVGV4dENvbG9yLFxuICAgICAgICAgIGZvbnRTaXplID0gX2NvbnRleHQkbXVpVGhlbWUkZmxhLmZvbnRTaXplLFxuICAgICAgICAgIGZvbnRXZWlnaHQgPSBfY29udGV4dCRtdWlUaGVtZSRmbGEuZm9udFdlaWdodCxcbiAgICAgICAgICBwcmltYXJ5VGV4dENvbG9yID0gX2NvbnRleHQkbXVpVGhlbWUkZmxhLnByaW1hcnlUZXh0Q29sb3IsXG4gICAgICAgICAgc2Vjb25kYXJ5VGV4dENvbG9yID0gX2NvbnRleHQkbXVpVGhlbWUkZmxhLnNlY29uZGFyeVRleHRDb2xvcixcbiAgICAgICAgICB0ZXh0Q29sb3IgPSBfY29udGV4dCRtdWlUaGVtZSRmbGEudGV4dENvbG9yLFxuICAgICAgICAgIF9jb250ZXh0JG11aVRoZW1lJGZsYTIgPSBfY29udGV4dCRtdWlUaGVtZSRmbGEudGV4dFRyYW5zZm9ybSxcbiAgICAgICAgICB0ZXh0VHJhbnNmb3JtID0gX2NvbnRleHQkbXVpVGhlbWUkZmxhMiA9PT0gdW5kZWZpbmVkID8gYnV0dG9uVGV4dFRyYW5zZm9ybSB8fCAndXBwZXJjYXNlJyA6IF9jb250ZXh0JG11aVRoZW1lJGZsYTI7XG5cbiAgICAgIHZhciBkZWZhdWx0VGV4dENvbG9yID0gZGlzYWJsZWQgPyBkaXNhYmxlZFRleHRDb2xvciA6IHByaW1hcnkgPyBwcmltYXJ5VGV4dENvbG9yIDogc2Vjb25kYXJ5ID8gc2Vjb25kYXJ5VGV4dENvbG9yIDogdGV4dENvbG9yO1xuXG4gICAgICB2YXIgZGVmYXVsdEhvdmVyQ29sb3IgPSAoMCwgX2NvbG9yTWFuaXB1bGF0b3IuZmFkZSkoYnV0dG9uRmlsdGVyQ29sb3IsIDAuMik7XG4gICAgICB2YXIgZGVmYXVsdFJpcHBsZUNvbG9yID0gYnV0dG9uRmlsdGVyQ29sb3I7XG4gICAgICB2YXIgYnV0dG9uSG92ZXJDb2xvciA9IGhvdmVyQ29sb3IgfHwgZGVmYXVsdEhvdmVyQ29sb3I7XG4gICAgICB2YXIgYnV0dG9uUmlwcGxlQ29sb3IgPSByaXBwbGVDb2xvciB8fCBkZWZhdWx0UmlwcGxlQ29sb3I7XG4gICAgICB2YXIgYnV0dG9uQmFja2dyb3VuZENvbG9yID0gYmFja2dyb3VuZENvbG9yIHx8IGJ1dHRvbkNvbG9yO1xuICAgICAgdmFyIGhvdmVyZWQgPSAodGhpcy5zdGF0ZS5ob3ZlcmVkIHx8IHRoaXMuc3RhdGUuaXNLZXlib2FyZEZvY3VzZWQpICYmICFkaXNhYmxlZDtcblxuICAgICAgdmFyIG1lcmdlZFJvb3RTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHtcbiAgICAgICAgaGVpZ2h0OiBidXR0b25IZWlnaHQsXG4gICAgICAgIGxpbmVIZWlnaHQ6IGJ1dHRvbkhlaWdodCArICdweCcsXG4gICAgICAgIG1pbldpZHRoOiBmdWxsV2lkdGggPyAnMTAwJScgOiBidXR0b25NaW5XaWR0aCxcbiAgICAgICAgY29sb3I6IGRlZmF1bHRUZXh0Q29sb3IsXG4gICAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBob3ZlcmVkID8gYnV0dG9uSG92ZXJDb2xvciA6IGJ1dHRvbkJhY2tncm91bmRDb2xvcixcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgICB9LCBzdHlsZSk7XG5cbiAgICAgIHZhciBpY29uQ2xvbmVkID0gdm9pZCAwO1xuICAgICAgdmFyIGxhYmVsU3R5bGVJY29uID0ge307XG5cbiAgICAgIGlmIChpY29uKSB7XG4gICAgICAgIHZhciBpY29uU3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHtcbiAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgICAgICBtYXJnaW5MZWZ0OiBsYWJlbCAmJiBsYWJlbFBvc2l0aW9uICE9PSAnYmVmb3JlJyA/IDEyIDogMCxcbiAgICAgICAgICBtYXJnaW5SaWdodDogbGFiZWwgJiYgbGFiZWxQb3NpdGlvbiA9PT0gJ2JlZm9yZScgPyAxMiA6IDBcbiAgICAgICAgfSwgaWNvbi5wcm9wcy5zdHlsZSk7XG4gICAgICAgIGljb25DbG9uZWQgPSBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGljb24sIHtcbiAgICAgICAgICBjb2xvcjogaWNvbi5wcm9wcy5jb2xvciB8fCBtZXJnZWRSb290U3R5bGVzLmNvbG9yLFxuICAgICAgICAgIHN0eWxlOiBpY29uU3R5bGVzLFxuICAgICAgICAgIGtleTogJ2ljb25DbG9uZWQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChsYWJlbFBvc2l0aW9uID09PSAnYmVmb3JlJykge1xuICAgICAgICAgIGxhYmVsU3R5bGVJY29uLnBhZGRpbmdSaWdodCA9IDg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGFiZWxTdHlsZUljb24ucGFkZGluZ0xlZnQgPSA4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBtZXJnZWRMYWJlbFN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7XG4gICAgICAgIGxldHRlclNwYWNpbmc6IDAsXG4gICAgICAgIHRleHRUcmFuc2Zvcm06IHRleHRUcmFuc2Zvcm0sXG4gICAgICAgIGZvbnRXZWlnaHQ6IGZvbnRXZWlnaHQsXG4gICAgICAgIGZvbnRTaXplOiBmb250U2l6ZVxuICAgICAgfSwgbGFiZWxTdHlsZUljb24sIGxhYmVsU3R5bGUpO1xuXG4gICAgICB2YXIgbGFiZWxFbGVtZW50ID0gbGFiZWwgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRmxhdEJ1dHRvbkxhYmVsMi5kZWZhdWx0LCB7IGtleTogJ2xhYmVsRWxlbWVudCcsIGxhYmVsOiBsYWJlbCwgc3R5bGU6IG1lcmdlZExhYmVsU3R5bGVzIH0pIDogdW5kZWZpbmVkO1xuXG4gICAgICAvLyBQbGFjZSBsYWJlbCBiZWZvcmUgb3IgYWZ0ZXIgY2hpbGRyZW4uXG4gICAgICB2YXIgZW5oYW5jZWRCdXR0b25DaGlsZHJlbiA9IGxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnID8gW2xhYmVsRWxlbWVudCwgaWNvbkNsb25lZCwgY2hpbGRyZW5dIDogW2NoaWxkcmVuLCBpY29uQ2xvbmVkLCBsYWJlbEVsZW1lbnRdO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9FbmhhbmNlZEJ1dHRvbjIuZGVmYXVsdCxcbiAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHtcbiAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgZm9jdXNSaXBwbGVDb2xvcjogYnV0dG9uUmlwcGxlQ29sb3IsXG4gICAgICAgICAgZm9jdXNSaXBwbGVPcGFjaXR5OiAwLjMsXG4gICAgICAgICAgb25LZXlib2FyZEZvY3VzOiB0aGlzLmhhbmRsZUtleWJvYXJkRm9jdXMsXG4gICAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhhbmRsZU1vdXNlTGVhdmUsXG4gICAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhhbmRsZU1vdXNlRW50ZXIsXG4gICAgICAgICAgb25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG4gICAgICAgICAgc3R5bGU6IG1lcmdlZFJvb3RTdHlsZXMsXG4gICAgICAgICAgdG91Y2hSaXBwbGVDb2xvcjogYnV0dG9uUmlwcGxlQ29sb3IsXG4gICAgICAgICAgdG91Y2hSaXBwbGVPcGFjaXR5OiAwLjNcbiAgICAgICAgfSksXG4gICAgICAgIGVuaGFuY2VkQnV0dG9uQ2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBGbGF0QnV0dG9uO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuRmxhdEJ1dHRvbi5tdWlOYW1lID0gJ0ZsYXRCdXR0b24nO1xuRmxhdEJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZnVsbFdpZHRoOiBmYWxzZSxcbiAgbGFiZWxTdHlsZToge30sXG4gIGxhYmVsUG9zaXRpb246ICdhZnRlcicsXG4gIG9uS2V5Ym9hcmRGb2N1czogZnVuY3Rpb24gb25LZXlib2FyZEZvY3VzKCkge30sXG4gIG9uTW91c2VFbnRlcjogZnVuY3Rpb24gb25Nb3VzZUVudGVyKCkge30sXG4gIG9uTW91c2VMZWF2ZTogZnVuY3Rpb24gb25Nb3VzZUxlYXZlKCkge30sXG4gIG9uVG91Y2hTdGFydDogZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KCkge30sXG4gIHByaW1hcnk6IGZhbHNlLFxuICBzZWNvbmRhcnk6IGZhbHNlXG59O1xuRmxhdEJ1dHRvbi5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuRmxhdEJ1dHRvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBDb2xvciBvZiBidXR0b24gd2hlbiBtb3VzZSBpcyBub3QgaG92ZXJpbmcgb3ZlciBpdC5cbiAgICovXG4gIGJhY2tncm91bmRDb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGlzIGlzIHdoYXQgd2lsbCBiZSBkaXNwbGF5ZWQgaW5zaWRlIHRoZSBidXR0b24uXG4gICAqIElmIGEgbGFiZWwgaXMgc3BlY2lmaWVkLCB0aGUgdGV4dCB3aXRoaW4gdGhlIGxhYmVsIHByb3Agd2lsbFxuICAgKiBiZSBkaXNwbGF5ZWQuIE90aGVyd2lzZSwgdGhlIGNvbXBvbmVudCB3aWxsIGV4cGVjdCBjaGlsZHJlblxuICAgKiB3aGljaCB3aWxsIHRoZW4gYmUgZGlzcGxheWVkLiAoSW4gb3VyIGV4YW1wbGUsXG4gICAqIHdlIGFyZSBuZXN0aW5nIGFuIGA8aW5wdXQgdHlwZT1cImZpbGVcIiAvPmAgYW5kIGEgYHNwYW5gXG4gICAqIHRoYXQgYWN0cyBhcyBvdXIgbGFiZWwgdG8gYmUgZGlzcGxheWVkLikgVGhpcyBvbmx5XG4gICAqIGFwcGxpZXMgdG8gZmxhdCBhbmQgcmFpc2VkIGJ1dHRvbnMuXG4gICAqL1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogVGhlIENTUyBjbGFzcyBuYW1lIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogVGhlIGVsZW1lbnQgdG8gdXNlIGFzIHRoZSBjb250YWluZXIgZm9yIHRoZSBGbGF0QnV0dG9uLiBFaXRoZXIgYSBzdHJpbmcgdG9cbiAgICogdXNlIGEgRE9NIGVsZW1lbnQgb3IgYSBSZWFjdEVsZW1lbnQuIFRoaXMgaXMgdXNlZnVsIGZvciB3cmFwcGluZyB0aGVcbiAgICogRmxhdEJ1dHRvbiBpbiBhIGN1c3RvbSBMaW5rIGNvbXBvbmVudC4gSWYgYSBSZWFjdEVsZW1lbnQgaXMgZ2l2ZW4sIGVuc3VyZVxuICAgKiB0aGF0IGl0IHBhc3NlcyBhbGwgb2YgaXRzIGdpdmVuIHByb3BzIHRocm91Z2ggdG8gdGhlIHVuZGVybHlpbmcgRE9NXG4gICAqIGVsZW1lbnQgYW5kIHJlbmRlcnMgaXRzIGNoaWxkcmVuIHByb3AgZm9yIHByb3BlciBpbnRlZ3JhdGlvbi5cbiAgICovXG4gIGNvbnRhaW5lckVsZW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50XSksXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgZWxlbWVudCdzIHJpcHBsZSBlZmZlY3Qgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVUb3VjaFJpcHBsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGJ1dHRvbiBpZiBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgYnV0dG9uIHdpbGwgdGFrZSB1cCB0aGUgZnVsbCB3aWR0aCBvZiBpdHMgY29udGFpbmVyLlxuICAgKi9cbiAgZnVsbFdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBDb2xvciBvZiBidXR0b24gd2hlbiBtb3VzZSBob3ZlcnMgb3Zlci5cbiAgICovXG4gIGhvdmVyQ29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogVGhlIFVSTCB0byBsaW5rIHRvIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgaHJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBVc2UgdGhpcyBwcm9wZXJ0eSB0byBkaXNwbGF5IGFuIGljb24uXG4gICAqL1xuICBpY29uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBMYWJlbCBmb3IgdGhlIGJ1dHRvbi5cbiAgICovXG4gIGxhYmVsOiB2YWxpZGF0ZUxhYmVsLFxuICAvKipcbiAgICogUGxhY2UgbGFiZWwgYmVmb3JlIG9yIGFmdGVyIHRoZSBwYXNzZWQgY2hpbGRyZW4uXG4gICAqL1xuICBsYWJlbFBvc2l0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsnYmVmb3JlJywgJ2FmdGVyJ10pLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGJ1dHRvbidzIGxhYmVsIGVsZW1lbnQuXG4gICAqL1xuICBsYWJlbFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gdGhlIGVsZW1lbnQgaXMgZm9jdXNlZCBvciBibHVycmVkIGJ5IHRoZSBrZXlib2FyZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IGBmb2N1c2Agb3IgYGJsdXJgIGV2ZW50IHRhcmdldGluZyB0aGUgZWxlbWVudC5cbiAgICogQHBhcmFtIHtib29sZWFufSBpc0tleWJvYXJkRm9jdXNlZCBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZWxlbWVudCBpcyBmb2N1c2VkLlxuICAgKi9cbiAgb25LZXlib2FyZEZvY3VzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VFbnRlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlTGVhdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Ub3VjaFN0YXJ0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIHRoZSBidXR0b24gaXMgdG91Y2gtdGFwcGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVG91Y2hUYXAgZXZlbnQgdGFyZ2V0aW5nIHRoZSBidXR0b24uXG4gICAqL1xuICBvblRvdWNoVGFwOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBjb2xvcnMgYnV0dG9uIGFjY29yZGluZyB0b1xuICAgKiBwcmltYXJ5VGV4dENvbG9yIGZyb20gdGhlIFRoZW1lLlxuICAgKi9cbiAgcHJpbWFyeTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogQ29sb3IgZm9yIHRoZSByaXBwbGUgYWZ0ZXIgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqL1xuICByaXBwbGVDb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBjb2xvcnMgYnV0dG9uIGFjY29yZGluZyB0byBzZWNvbmRhcnlUZXh0Q29sb3IgZnJvbSB0aGUgdGhlbWUuXG4gICAqIFRoZSBwcmltYXJ5IHByb3AgaGFzIHByZWNlbmRlbnQgaWYgc2V0IHRvIHRydWUuXG4gICAqL1xuICBzZWNvbmRhcnk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IEZsYXRCdXR0b247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL0ZsYXRCdXR0b24vRmxhdEJ1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gNzk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQpIHtcbiAgdmFyIGJhc2VUaGVtZSA9IGNvbnRleHQubXVpVGhlbWUuYmFzZVRoZW1lO1xuXG5cbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHBhZGRpbmdMZWZ0OiBiYXNlVGhlbWUuc3BhY2luZy5kZXNrdG9wR3V0dGVyTGVzcyxcbiAgICAgIHBhZGRpbmdSaWdodDogYmFzZVRoZW1lLnNwYWNpbmcuZGVza3RvcEd1dHRlckxlc3MsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xuICAgIH1cbiAgfTtcbn1cblxudmFyIEZsYXRCdXR0b25MYWJlbCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKEZsYXRCdXR0b25MYWJlbCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRmxhdEJ1dHRvbkxhYmVsKCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIEZsYXRCdXR0b25MYWJlbCk7XG4gICAgcmV0dXJuICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKEZsYXRCdXR0b25MYWJlbC5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoRmxhdEJ1dHRvbkxhYmVsKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShGbGF0QnV0dG9uTGFiZWwsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbGFiZWwgPSBfcHJvcHMubGFiZWwsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGU7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpKSB9LFxuICAgICAgICBsYWJlbFxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEZsYXRCdXR0b25MYWJlbDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkZsYXRCdXR0b25MYWJlbC5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuRmxhdEJ1dHRvbkxhYmVsLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgbGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBGbGF0QnV0dG9uTGFiZWw7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL0ZsYXRCdXR0b24vRmxhdEJ1dHRvbkxhYmVsLmpzXG4vLyBtb2R1bGUgaWQgPSA3OTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX0ZsYXRCdXR0b24gPSByZXF1aXJlKCcuL0ZsYXRCdXR0b24nKTtcblxudmFyIF9GbGF0QnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZsYXRCdXR0b24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfRmxhdEJ1dHRvbjIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvRmxhdEJ1dHRvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX2NvbG9yTWFuaXB1bGF0b3IgPSByZXF1aXJlKCcuLi91dGlscy9jb2xvck1hbmlwdWxhdG9yJyk7XG5cbnZhciBfRW5oYW5jZWRCdXR0b24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9FbmhhbmNlZEJ1dHRvbicpO1xuXG52YXIgX0VuaGFuY2VkQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VuaGFuY2VkQnV0dG9uKTtcblxudmFyIF9Gb250SWNvbiA9IHJlcXVpcmUoJy4uL0ZvbnRJY29uJyk7XG5cbnZhciBfRm9udEljb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRm9udEljb24pO1xuXG52YXIgX1BhcGVyID0gcmVxdWlyZSgnLi4vUGFwZXInKTtcblxudmFyIF9QYXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYXBlcik7XG5cbnZhciBfY2hpbGRVdGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NoaWxkVXRpbHMnKTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfcHJvcFR5cGVzMyA9IHJlcXVpcmUoJy4uL3V0aWxzL3Byb3BUeXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0KSB7XG4gIHZhciBmbG9hdGluZ0FjdGlvbkJ1dHRvbiA9IGNvbnRleHQubXVpVGhlbWUuZmxvYXRpbmdBY3Rpb25CdXR0b247XG5cblxuICB2YXIgYmFja2dyb3VuZENvbG9yID0gcHJvcHMuYmFja2dyb3VuZENvbG9yIHx8IGZsb2F0aW5nQWN0aW9uQnV0dG9uLmNvbG9yO1xuICB2YXIgaWNvbkNvbG9yID0gZmxvYXRpbmdBY3Rpb25CdXR0b24uaWNvbkNvbG9yO1xuXG4gIGlmIChwcm9wcy5kaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmRDb2xvciA9IHByb3BzLmRpc2FibGVkQ29sb3IgfHwgZmxvYXRpbmdBY3Rpb25CdXR0b24uZGlzYWJsZWRDb2xvcjtcbiAgICBpY29uQ29sb3IgPSBmbG9hdGluZ0FjdGlvbkJ1dHRvbi5kaXNhYmxlZFRleHRDb2xvcjtcbiAgfSBlbHNlIGlmIChwcm9wcy5zZWNvbmRhcnkpIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3IgPSBmbG9hdGluZ0FjdGlvbkJ1dHRvbi5zZWNvbmRhcnlDb2xvcjtcbiAgICBpY29uQ29sb3IgPSBmbG9hdGluZ0FjdGlvbkJ1dHRvbi5zZWNvbmRhcnlJY29uQ29sb3I7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgIH0sXG4gICAgY29udGFpbmVyOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcixcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgICBoZWlnaHQ6IGZsb2F0aW5nQWN0aW9uQnV0dG9uLmJ1dHRvblNpemUsXG4gICAgICB3aWR0aDogZmxvYXRpbmdBY3Rpb25CdXR0b24uYnV0dG9uU2l6ZSxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdib3R0b20nXG4gICAgfSxcbiAgICBjb250YWluZXJXaGVuTWluaToge1xuICAgICAgaGVpZ2h0OiBmbG9hdGluZ0FjdGlvbkJ1dHRvbi5taW5pU2l6ZSxcbiAgICAgIHdpZHRoOiBmbG9hdGluZ0FjdGlvbkJ1dHRvbi5taW5pU2l6ZVxuICAgIH0sXG4gICAgb3ZlcmxheToge1xuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIHRvcDogMFxuICAgIH0sXG4gICAgb3ZlcmxheVdoZW5Ib3ZlcmVkOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICgwLCBfY29sb3JNYW5pcHVsYXRvci5mYWRlKShpY29uQ29sb3IsIDAuNClcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIGhlaWdodDogZmxvYXRpbmdBY3Rpb25CdXR0b24uYnV0dG9uU2l6ZSxcbiAgICAgIGxpbmVIZWlnaHQ6IGZsb2F0aW5nQWN0aW9uQnV0dG9uLmJ1dHRvblNpemUgKyAncHgnLFxuICAgICAgZmlsbDogaWNvbkNvbG9yLFxuICAgICAgY29sb3I6IGljb25Db2xvclxuICAgIH0sXG4gICAgaWNvbldoZW5NaW5pOiB7XG4gICAgICBoZWlnaHQ6IGZsb2F0aW5nQWN0aW9uQnV0dG9uLm1pbmlTaXplLFxuICAgICAgbGluZUhlaWdodDogZmxvYXRpbmdBY3Rpb25CdXR0b24ubWluaVNpemUgKyAncHgnXG4gICAgfVxuICB9O1xufVxuXG52YXIgRmxvYXRpbmdBY3Rpb25CdXR0b24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShGbG9hdGluZ0FjdGlvbkJ1dHRvbiwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRmxvYXRpbmdBY3Rpb25CdXR0b24oKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgRmxvYXRpbmdBY3Rpb25CdXR0b24pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gRmxvYXRpbmdBY3Rpb25CdXR0b24uX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKEZsb2F0aW5nQWN0aW9uQnV0dG9uKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBob3ZlcmVkOiBmYWxzZSxcbiAgICAgIHRvdWNoOiBmYWxzZSxcbiAgICAgIHpEZXB0aDogdW5kZWZpbmVkXG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBvbmx5IGxpc3RlbiB0byBsZWZ0IGNsaWNrc1xuICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IHpEZXB0aDogX3RoaXMucHJvcHMuekRlcHRoICsgMSB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vdXNlRG93bikgX3RoaXMucHJvcHMub25Nb3VzZURvd24oZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlVXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgekRlcHRoOiBfdGhpcy5wcm9wcy56RGVwdGggfSk7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZVVwKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VVcChldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5yZWZzLmNvbnRhaW5lci5pc0tleWJvYXJkRm9jdXNlZCgpKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgekRlcHRoOiBfdGhpcy5wcm9wcy56RGVwdGgsIGhvdmVyZWQ6IGZhbHNlIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VMZWF2ZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlTGVhdmUoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMucmVmcy5jb250YWluZXIuaXNLZXlib2FyZEZvY3VzZWQoKSAmJiAhX3RoaXMuc3RhdGUudG91Y2gpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiB0cnVlIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VFbnRlcikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlRW50ZXIoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZVRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdG91Y2g6IHRydWUsXG4gICAgICAgIHpEZXB0aDogX3RoaXMucHJvcHMuekRlcHRoICsgMVxuICAgICAgfSk7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Ub3VjaFN0YXJ0KSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uVG91Y2hTdGFydChldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdG91Y2g6IHRydWUsXG4gICAgICAgIHpEZXB0aDogX3RoaXMucHJvcHMuekRlcHRoXG4gICAgICB9KTtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblRvdWNoRW5kKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uVG91Y2hFbmQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZUtleWJvYXJkRm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQsIGtleWJvYXJkRm9jdXNlZCkge1xuICAgICAgaWYgKGtleWJvYXJkRm9jdXNlZCAmJiAhX3RoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyB6RGVwdGg6IF90aGlzLnByb3BzLnpEZXB0aCArIDEgfSk7XG4gICAgICAgIF90aGlzLnJlZnMub3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAoMCwgX2NvbG9yTWFuaXB1bGF0b3IuZmFkZSkoZ2V0U3R5bGVzKF90aGlzLnByb3BzLCBfdGhpcy5jb250ZXh0KS5pY29uLmNvbG9yLCAwLjQpO1xuICAgICAgfSBlbHNlIGlmICghX3RoaXMuc3RhdGUuaG92ZXJlZCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IHpEZXB0aDogX3RoaXMucHJvcHMuekRlcHRoIH0pO1xuICAgICAgICBfdGhpcy5yZWZzLm92ZXJsYXkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAgIH1cbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoRmxvYXRpbmdBY3Rpb25CdXR0b24sIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHpEZXB0aDogdGhpcy5wcm9wcy5kaXNhYmxlZCA/IDAgOiB0aGlzLnByb3BzLnpEZXB0aFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkoIXRoaXMucHJvcHMuaWNvbkNsYXNzTmFtZSB8fCAhdGhpcy5wcm9wcy5jaGlsZHJlbiwgJ01hdGVyaWFsLVVJOiBZb3UgaGF2ZSBzZXQgYm90aCBhbiBpY29uQ2xhc3NOYW1lIGFuZCBhIGNoaWxkIGljb24uICcgKyAnSXQgaXMgcmVjb21tZW5kZWQgeW91IHVzZSBvbmx5IG9uZSBtZXRob2Qgd2hlbiBhZGRpbmcgJyArICdpY29ucyB0byBGbG9hdGluZ0FjdGlvbkJ1dHRvbnMuJykgOiB2b2lkIDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgbmV4dFN0YXRlID0ge307XG5cbiAgICAgIGlmIChuZXh0UHJvcHMuZGlzYWJsZWQgIT09IHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgbmV4dFN0YXRlLnpEZXB0aCA9IG5leHRQcm9wcy5kaXNhYmxlZCA/IDAgOiB0aGlzLnByb3BzLnpEZXB0aDtcbiAgICAgIH1cbiAgICAgIGlmIChuZXh0UHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgbmV4dFN0YXRlLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvciA9IF9wcm9wcy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBjaGlsZHJlblByb3AgPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgZGlzYWJsZWRDb2xvciA9IF9wcm9wcy5kaXNhYmxlZENvbG9yLFxuICAgICAgICAgIG1pbmkgPSBfcHJvcHMubWluaSxcbiAgICAgICAgICBzZWNvbmRhcnkgPSBfcHJvcHMuc2Vjb25kYXJ5LFxuICAgICAgICAgIGljb25TdHlsZSA9IF9wcm9wcy5pY29uU3R5bGUsXG4gICAgICAgICAgaWNvbkNsYXNzTmFtZSA9IF9wcm9wcy5pY29uQ2xhc3NOYW1lLFxuICAgICAgICAgIHpEZXB0aCA9IF9wcm9wcy56RGVwdGgsXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnYmFja2dyb3VuZENvbG9yJywgJ2NsYXNzTmFtZScsICdjaGlsZHJlbicsICdkaXNhYmxlZCcsICdkaXNhYmxlZENvbG9yJywgJ21pbmknLCAnc2Vjb25kYXJ5JywgJ2ljb25TdHlsZScsICdpY29uQ2xhc3NOYW1lJywgJ3pEZXB0aCddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcblxuICAgICAgdmFyIGljb25FbGVtZW50ID0gdm9pZCAwO1xuICAgICAgaWYgKGljb25DbGFzc05hbWUpIHtcbiAgICAgICAgaWNvbkVsZW1lbnQgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRm9udEljb24yLmRlZmF1bHQsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGljb25DbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLmljb24sIG1pbmkgJiYgc3R5bGVzLmljb25XaGVuTWluaSwgaWNvblN0eWxlKVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNoaWxkcmVuID0gdm9pZCAwO1xuXG4gICAgICBpZiAoY2hpbGRyZW5Qcm9wKSB7XG4gICAgICAgIGNoaWxkcmVuID0gKDAsIF9jaGlsZFV0aWxzLmV4dGVuZENoaWxkcmVuKShjaGlsZHJlblByb3AsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMuaWNvbiwgbWluaSAmJiBzdHlsZXMuaWNvbldoZW5NaW5pLCBpY29uU3R5bGUsIGNoaWxkLnByb3BzLnN0eWxlKVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgYnV0dG9uRXZlbnRIYW5kbGVycyA9IGRpc2FibGVkID8gbnVsbCA6IHtcbiAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlTW91c2VEb3duLFxuICAgICAgICBvbk1vdXNlVXA6IHRoaXMuaGFuZGxlTW91c2VVcCxcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLmhhbmRsZU1vdXNlTGVhdmUsXG4gICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5oYW5kbGVNb3VzZUVudGVyLFxuICAgICAgICBvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcbiAgICAgICAgb25Ub3VjaEVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZCxcbiAgICAgICAgb25LZXlib2FyZEZvY3VzOiB0aGlzLmhhbmRsZUtleWJvYXJkRm9jdXNcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1BhcGVyMi5kZWZhdWx0LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgdGhpcy5wcm9wcy5zdHlsZSksXG4gICAgICAgICAgekRlcHRoOiB0aGlzLnN0YXRlLnpEZXB0aCxcbiAgICAgICAgICBjaXJjbGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX0VuaGFuY2VkQnV0dG9uMi5kZWZhdWx0LFxuICAgICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCBidXR0b25FdmVudEhhbmRsZXJzLCB7XG4gICAgICAgICAgICByZWY6ICdjb250YWluZXInLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMuY29udGFpbmVyLCB0aGlzLnByb3BzLm1pbmkgJiYgc3R5bGVzLmNvbnRhaW5lcldoZW5NaW5pLCBpY29uU3R5bGUpLFxuICAgICAgICAgICAgZm9jdXNSaXBwbGVDb2xvcjogc3R5bGVzLmljb24uY29sb3IsXG4gICAgICAgICAgICB0b3VjaFJpcHBsZUNvbG9yOiBzdHlsZXMuaWNvbi5jb2xvclxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogJ292ZXJsYXknLFxuICAgICAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLm92ZXJsYXksIHRoaXMuc3RhdGUuaG92ZXJlZCAmJiAhdGhpcy5wcm9wcy5kaXNhYmxlZCAmJiBzdHlsZXMub3ZlcmxheVdoZW5Ib3ZlcmVkKSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpY29uRWxlbWVudCxcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRmxvYXRpbmdBY3Rpb25CdXR0b247XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5GbG9hdGluZ0FjdGlvbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgbWluaTogZmFsc2UsXG4gIHNlY29uZGFyeTogZmFsc2UsXG4gIHpEZXB0aDogMlxufTtcbkZsb2F0aW5nQWN0aW9uQnV0dG9uLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5GbG9hdGluZ0FjdGlvbkJ1dHRvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBUaGlzIHZhbHVlIHdpbGwgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgYmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIGJ1dHRvbi5cbiAgICogSG93ZXZlciBpdCB3aWxsIG5vdCBvdmVycmlkZSB0aGUgZGVmYXVsdCBkaXNhYmxlZCBiYWNrZ3JvdW5kIGNvbG9yLlxuICAgKiBUaGlzIGhhcyB0byBiZSBzZXQgc2VwYXJhdGVseSB1c2luZyB0aGUgZGlzYWJsZWRDb2xvciBhdHRyaWJ1dGUuXG4gICAqL1xuICBiYWNrZ3JvdW5kQ29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogVGhpcyBpcyB3aGF0IGRpc3BsYXllZCBpbnNpZGUgdGhlIGZsb2F0aW5nIGFjdGlvbiBidXR0b247IGZvciBleGFtcGxlLCBhIFNWRyBJY29uLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBjc3MgY2xhc3MgbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBidXR0b24gaWYgc2V0IHRvIHRydWUuXG4gICAqL1xuICBkaXNhYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhpcyB2YWx1ZSB3aWxsIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSBidXR0b24gd2hlbiBpdCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkQ29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogVGhlIFVSTCB0byBsaW5rIHRvIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgaHJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB3aXRoaW4gdGhlIEZsb2F0aW5nQWN0aW9uQnV0dG9uIGlzIGEgRm9udEljb24gY29tcG9uZW50LlxuICAgKiBUaGlzIHByb3BlcnR5IGlzIHRoZSBjbGFzc25hbWUgb2YgdGhlIGljb24gdG8gYmUgZGlzcGxheWVkIGluc2lkZSB0aGUgYnV0dG9uLlxuICAgKiBBbiBhbHRlcm5hdGl2ZSB0byBhZGRpbmcgYW4gaWNvbkNsYXNzTmFtZSB3b3VsZCBiZSB0byBtYW51YWxseSBpbnNlcnQgYVxuICAgKiBGb250SWNvbiBjb21wb25lbnQgb3IgY3VzdG9tIFN2Z0ljb24gY29tcG9uZW50IG9yIGFzIGEgY2hpbGQgb2YgRmxvYXRpbmdBY3Rpb25CdXR0b24uXG4gICAqL1xuICBpY29uQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIGVxdWl2YWxlbnQgdG8gaWNvbkNsYXNzTmFtZSBleGNlcHQgdGhhdCBpdCBpcyB1c2VkIGZvclxuICAgKiBvdmVycmlkaW5nIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBGb250SWNvbiBjb21wb25lbnQuXG4gICAqL1xuICBpY29uU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIGJlIGEgc21hbGwgZmxvYXRpbmcgYWN0aW9uIGJ1dHRvbi5cbiAgICovXG4gIG1pbmk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZURvd246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZUVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VMZWF2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlVXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Ub3VjaEVuZDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvblRvdWNoU3RhcnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gdGhlIGJ1dHRvbiBpcyB0b3VjaC10YXBwZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUb3VjaFRhcCBldmVudCB0YXJnZXRpbmcgdGhlIGJ1dHRvbi5cbiAgICovXG4gIG9uVG91Y2hUYXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBidXR0b24gd2lsbCB1c2UgdGhlIHNlY29uZGFyeSBidXR0b24gY29sb3JzLlxuICAgKi9cbiAgc2Vjb25kYXJ5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIHpEZXB0aCBvZiB0aGUgdW5kZXJseWluZyBgUGFwZXJgIGNvbXBvbmVudC5cbiAgICovXG4gIHpEZXB0aDogX3Byb3BUeXBlczQuZGVmYXVsdC56RGVwdGhcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IEZsb2F0aW5nQWN0aW9uQnV0dG9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9GbG9hdGluZ0FjdGlvbkJ1dHRvbi9GbG9hdGluZ0FjdGlvbkJ1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gNzk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9GbG9hdGluZ0FjdGlvbkJ1dHRvbiA9IHJlcXVpcmUoJy4vRmxvYXRpbmdBY3Rpb25CdXR0b24nKTtcblxudmFyIF9GbG9hdGluZ0FjdGlvbkJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GbG9hdGluZ0FjdGlvbkJ1dHRvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9GbG9hdGluZ0FjdGlvbkJ1dHRvbjIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvRmxvYXRpbmdBY3Rpb25CdXR0b24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDgwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLm1ha2VTZWxlY3RhYmxlID0gZXhwb3J0cy5MaXN0SXRlbSA9IGV4cG9ydHMuTGlzdCA9IHVuZGVmaW5lZDtcblxudmFyIF9MaXN0MiA9IHJlcXVpcmUoJy4vTGlzdCcpO1xuXG52YXIgX0xpc3QzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGlzdDIpO1xuXG52YXIgX0xpc3RJdGVtMiA9IHJlcXVpcmUoJy4vTGlzdEl0ZW0nKTtcblxudmFyIF9MaXN0SXRlbTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaXN0SXRlbTIpO1xuXG52YXIgX21ha2VTZWxlY3RhYmxlMiA9IHJlcXVpcmUoJy4vbWFrZVNlbGVjdGFibGUnKTtcblxudmFyIF9tYWtlU2VsZWN0YWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYWtlU2VsZWN0YWJsZTIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLkxpc3QgPSBfTGlzdDMuZGVmYXVsdDtcbmV4cG9ydHMuTGlzdEl0ZW0gPSBfTGlzdEl0ZW0zLmRlZmF1bHQ7XG5leHBvcnRzLm1ha2VTZWxlY3RhYmxlID0gX21ha2VTZWxlY3RhYmxlMy5kZWZhdWx0O1xuZXhwb3J0cy5kZWZhdWx0ID0gX0xpc3QzLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL0xpc3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDgwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1ha2VTZWxlY3RhYmxlID0gdW5kZWZpbmVkO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfY29sb3JNYW5pcHVsYXRvciA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbG9yTWFuaXB1bGF0b3InKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIG1ha2VTZWxlY3RhYmxlID0gZnVuY3Rpb24gbWFrZVNlbGVjdGFibGUoTXlDb21wb25lbnQpIHtcbiAgdmFyIF9jbGFzcywgX3RlbXAyO1xuXG4gIHJldHVybiBfdGVtcDIgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKF9jbGFzcywgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBfY2xhc3MoKSB7XG4gICAgICB2YXIgX3JlZjtcblxuICAgICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgX2NsYXNzKTtcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gX2NsYXNzLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShfY2xhc3MpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5oYXNTZWxlY3RlZERlc2NlbmRhbnQgPSBmdW5jdGlvbiAocHJldmlvdXNWYWx1ZSwgY2hpbGQpIHtcbiAgICAgICAgaWYgKF9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkgJiYgY2hpbGQucHJvcHMubmVzdGVkSXRlbXMgJiYgY2hpbGQucHJvcHMubmVzdGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJldHVybiBjaGlsZC5wcm9wcy5uZXN0ZWRJdGVtcy5yZWR1Y2UoX3RoaXMuaGFzU2VsZWN0ZWREZXNjZW5kYW50LCBwcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJldmlvdXNWYWx1ZSB8fCBfdGhpcy5pc0NoaWxkU2VsZWN0ZWQoY2hpbGQsIF90aGlzLnByb3BzKTtcbiAgICAgIH0sIF90aGlzLmhhbmRsZUl0ZW1Ub3VjaFRhcCA9IGZ1bmN0aW9uIChldmVudCwgaXRlbSkge1xuICAgICAgICB2YXIgaXRlbVZhbHVlID0gaXRlbS5wcm9wcy52YWx1ZTtcblxuICAgICAgICBpZiAoaXRlbVZhbHVlICE9PSBfdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgX3RoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIGl0ZW1WYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICAgIH1cblxuICAgICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKF9jbGFzcywgW3tcbiAgICAgIGtleTogJ2V4dGVuZENoaWxkJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBleHRlbmRDaGlsZChjaGlsZCwgc3R5bGVzLCBzZWxlY3RlZEl0ZW1TdHlsZSkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICBpZiAoY2hpbGQgJiYgY2hpbGQudHlwZSAmJiBjaGlsZC50eXBlLm11aU5hbWUgPT09ICdMaXN0SXRlbScpIHtcbiAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSB0aGlzLmlzQ2hpbGRTZWxlY3RlZChjaGlsZCwgdGhpcy5wcm9wcyk7XG4gICAgICAgICAgdmFyIHNlbGVjdGVkQ2hpbGRyZW5TdHlsZXMgPSB2b2lkIDA7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICBzZWxlY3RlZENoaWxkcmVuU3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMsIHNlbGVjdGVkSXRlbVN0eWxlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgbWVyZ2VkQ2hpbGRyZW5TdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIGNoaWxkLnByb3BzLnN0eWxlLCBzZWxlY3RlZENoaWxkcmVuU3R5bGVzKTtcblxuICAgICAgICAgIHRoaXMua2V5SW5kZXggKz0gMTtcblxuICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgICBvblRvdWNoVGFwOiBmdW5jdGlvbiBvblRvdWNoVGFwKGV2ZW50KSB7XG4gICAgICAgICAgICAgIF90aGlzMi5oYW5kbGVJdGVtVG91Y2hUYXAoZXZlbnQsIGNoaWxkKTtcbiAgICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzLm9uVG91Y2hUYXApIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5vblRvdWNoVGFwKGV2ZW50KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGtleTogdGhpcy5rZXlJbmRleCxcbiAgICAgICAgICAgIHN0eWxlOiBtZXJnZWRDaGlsZHJlblN0eWxlcyxcbiAgICAgICAgICAgIG5lc3RlZEl0ZW1zOiBjaGlsZC5wcm9wcy5uZXN0ZWRJdGVtcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpczIuZXh0ZW5kQ2hpbGQoY2hpbGQsIHN0eWxlcywgc2VsZWN0ZWRJdGVtU3R5bGUpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBpbml0aWFsbHlPcGVuOiB0aGlzLmlzSW5pdGlhbGx5T3BlbihjaGlsZClcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdpc0luaXRpYWxseU9wZW4nLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzSW5pdGlhbGx5T3BlbihjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMuaW5pdGlhbGx5T3Blbikge1xuICAgICAgICAgIHJldHVybiBjaGlsZC5wcm9wcy5pbml0aWFsbHlPcGVuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmhhc1NlbGVjdGVkRGVzY2VuZGFudChmYWxzZSwgY2hpbGQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2lzQ2hpbGRTZWxlY3RlZCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNDaGlsZFNlbGVjdGVkKGNoaWxkLCBwcm9wcykge1xuICAgICAgICByZXR1cm4gcHJvcHMudmFsdWUgPT09IGNoaWxkLnByb3BzLnZhbHVlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtU3R5bGUgPSBfcHJvcHMuc2VsZWN0ZWRJdGVtU3R5bGUsXG4gICAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydjaGlsZHJlbicsICdzZWxlY3RlZEl0ZW1TdHlsZSddKTtcblxuXG4gICAgICAgIHRoaXMua2V5SW5kZXggPSAwO1xuICAgICAgICB2YXIgc3R5bGVzID0ge307XG5cbiAgICAgICAgaWYgKCFzZWxlY3RlZEl0ZW1TdHlsZSkge1xuICAgICAgICAgIHZhciB0ZXh0Q29sb3IgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUuYmFzZVRoZW1lLnBhbGV0dGUudGV4dENvbG9yO1xuICAgICAgICAgIHN0eWxlcy5iYWNrZ3JvdW5kQ29sb3IgPSAoMCwgX2NvbG9yTWFuaXB1bGF0b3IuZmFkZSkodGV4dENvbG9yLCAwLjIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIE15Q29tcG9uZW50LFxuICAgICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCB0aGlzLnN0YXRlKSxcbiAgICAgICAgICBfcmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuZXh0ZW5kQ2hpbGQoY2hpbGQsIHN0eWxlcywgc2VsZWN0ZWRJdGVtU3R5bGUpO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBfY2xhc3M7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCksIF9jbGFzcy5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgICBvbkNoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgIHNlbGVjdGVkSXRlbVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgICB2YWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnlcbiAgfSwgX2NsYXNzLmNvbnRleHRUeXBlcyA9IHtcbiAgICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxuICB9LCBfdGVtcDI7XG59O1xuXG5leHBvcnRzLm1ha2VTZWxlY3RhYmxlID0gbWFrZVNlbGVjdGFibGU7XG5leHBvcnRzLmRlZmF1bHQgPSBtYWtlU2VsZWN0YWJsZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvTGlzdC9tYWtlU2VsZWN0YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gODAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuTWVudUl0ZW0gPSBleHBvcnRzLk1lbnUgPSB1bmRlZmluZWQ7XG5cbnZhciBfTWVudTIgPSByZXF1aXJlKCcuL01lbnUnKTtcblxudmFyIF9NZW51MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbnUyKTtcblxudmFyIF9NZW51SXRlbTIgPSByZXF1aXJlKCcuLi9NZW51SXRlbScpO1xuXG52YXIgX01lbnVJdGVtMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbnVJdGVtMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuTWVudSA9IF9NZW51My5kZWZhdWx0O1xuZXhwb3J0cy5NZW51SXRlbSA9IF9NZW51SXRlbTMuZGVmYXVsdDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9NZW51My5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9NZW51L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4MDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgb3JpZ2luYWxCb2R5T3ZlcmZsb3cgPSBudWxsO1xudmFyIGxvY2tpbmdDb3VudGVyID0gMDtcblxudmFyIEF1dG9Mb2NrU2Nyb2xsaW5nID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoQXV0b0xvY2tTY3JvbGxpbmcsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEF1dG9Mb2NrU2Nyb2xsaW5nKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIEF1dG9Mb2NrU2Nyb2xsaW5nKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IEF1dG9Mb2NrU2Nyb2xsaW5nLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShBdXRvTG9ja1Njcm9sbGluZykpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmxvY2tlZCA9IGZhbHNlLCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoQXV0b0xvY2tTY3JvbGxpbmcsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmxvY2sgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5wcmV2ZW50U2Nyb2xsaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sb2NrICE9PSBuZXh0UHJvcHMubG9jaykge1xuICAgICAgICBpZiAobmV4dFByb3BzLmxvY2spIHtcbiAgICAgICAgICB0aGlzLnByZXZlbnRTY3JvbGxpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFsbG93U2Nyb2xsaW5nKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5hbGxvd1Njcm9sbGluZygpO1xuICAgIH1cblxuICAgIC8vIGZvcmNlIHRvIG9ubHkgbG9jay91bmxvY2sgb25jZVxuXG4gIH0sIHtcbiAgICBrZXk6ICdwcmV2ZW50U2Nyb2xsaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJldmVudFNjcm9sbGluZygpIHtcbiAgICAgIGlmICh0aGlzLmxvY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxvY2tpbmdDb3VudGVyID0gbG9ja2luZ0NvdW50ZXIgKyAxO1xuICAgICAgdGhpcy5sb2NrZWQgPSB0cnVlO1xuXG4gICAgICAvLyBvbmx5IGxvY2sgdGhlIGZpcnN0IHRpbWUgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgICAgaWYgKGxvY2tpbmdDb3VudGVyID09PSAxKSB7XG4gICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbiAgICAgICAgb3JpZ2luYWxCb2R5T3ZlcmZsb3cgPSBib2R5LnN0eWxlLm92ZXJmbG93O1xuICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWxsb3dTY3JvbGxpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhbGxvd1Njcm9sbGluZygpIHtcbiAgICAgIGlmICh0aGlzLmxvY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBsb2NraW5nQ291bnRlciA9IGxvY2tpbmdDb3VudGVyIC0gMTtcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxvY2tpbmdDb3VudGVyID09PSAwICYmIG9yaWdpbmFsQm9keU92ZXJmbG93ICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IG9yaWdpbmFsQm9keU92ZXJmbG93IHx8ICcnO1xuICAgICAgICBvcmlnaW5hbEJvZHlPdmVyZmxvdyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBBdXRvTG9ja1Njcm9sbGluZztcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkF1dG9Mb2NrU2Nyb2xsaW5nLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgbG9jazogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWRcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IEF1dG9Mb2NrU2Nyb2xsaW5nO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9pbnRlcm5hbC9BdXRvTG9ja1Njcm9sbGluZy5qc1xuLy8gbW9kdWxlIGlkID0gODA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX0F1dG9Mb2NrU2Nyb2xsaW5nID0gcmVxdWlyZSgnLi9BdXRvTG9ja1Njcm9sbGluZycpO1xuXG52YXIgX0F1dG9Mb2NrU2Nyb2xsaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0F1dG9Mb2NrU2Nyb2xsaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0KSB7XG4gIHZhciBvdmVybGF5ID0gY29udGV4dC5tdWlUaGVtZS5vdmVybGF5O1xuXG5cbiAgdmFyIHN0eWxlID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogJy0xMDAlJyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IG92ZXJsYXkuYmFja2dyb3VuZENvbG9yLFxuICAgICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJywgLy8gUmVtb3ZlIG1vYmlsZSBjb2xvciBmbGFzaGluZyAoZGVwcmVjYXRlZClcblxuICAgICAgLy8gVHdvIHdheXMgdG8gcHJvbW90ZSBvdmVybGF5IHRvIGl0cyBvd24gcmVuZGVyIGxheWVyXG4gICAgICB3aWxsQ2hhbmdlOiAnb3BhY2l0eScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVaKDApJyxcblxuICAgICAgdHJhbnNpdGlvbjogcHJvcHMudHJhbnNpdGlvbkVuYWJsZWQgJiYgX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzBtcycsICdsZWZ0JywgJzQwMG1zJykgKyAnLCAnICsgX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzQwMG1zJywgJ29wYWNpdHknKVxuICAgIH1cbiAgfTtcblxuICBpZiAocHJvcHMuc2hvdykge1xuICAgICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZS5yb290LCB7XG4gICAgICBsZWZ0OiAwLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCcwbXMnLCAnbGVmdCcpICsgJywgJyArIF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCc0MDBtcycsICdvcGFjaXR5JylcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxudmFyIE92ZXJsYXkgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShPdmVybGF5LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBPdmVybGF5KCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIE92ZXJsYXkpO1xuICAgIHJldHVybiAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChPdmVybGF5Ll9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShPdmVybGF5KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShPdmVybGF5LCBbe1xuICAgIGtleTogJ3NldE9wYWNpdHknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRPcGFjaXR5KG9wYWNpdHkpIHtcbiAgICAgIHRoaXMucmVmcy5vdmVybGF5LnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGF1dG9Mb2NrU2Nyb2xsaW5nID0gX3Byb3BzLmF1dG9Mb2NrU2Nyb2xsaW5nLFxuICAgICAgICAgIHNob3cgPSBfcHJvcHMuc2hvdyxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICB0cmFuc2l0aW9uRW5hYmxlZCA9IF9wcm9wcy50cmFuc2l0aW9uRW5hYmxlZCxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydhdXRvTG9ja1Njcm9sbGluZycsICdzaG93JywgJ3N0eWxlJywgJ3RyYW5zaXRpb25FbmFibGVkJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwgeyByZWY6ICdvdmVybGF5Jywgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yb290LCBzdHlsZSkpIH0pLFxuICAgICAgICBhdXRvTG9ja1Njcm9sbGluZyAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfQXV0b0xvY2tTY3JvbGxpbmcyLmRlZmF1bHQsIHsgbG9jazogc2hvdyB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE92ZXJsYXk7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5PdmVybGF5LmRlZmF1bHRQcm9wcyA9IHtcbiAgYXV0b0xvY2tTY3JvbGxpbmc6IHRydWUsXG4gIHN0eWxlOiB7fSxcbiAgdHJhbnNpdGlvbkVuYWJsZWQ6IHRydWVcbn07XG5PdmVybGF5LmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5PdmVybGF5LnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgYXV0b0xvY2tTY3JvbGxpbmc6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgc2hvdzogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICB0cmFuc2l0aW9uRW5hYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sXG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBPdmVybGF5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9pbnRlcm5hbC9PdmVybGF5LmpzXG4vLyBtb2R1bGUgaWQgPSA4MDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHVyZSA9IHJlcXVpcmUoJ3JlY29tcG9zZS9wdXJlJyk7XG5cbnZhciBfcHVyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wdXJlKTtcblxudmFyIF9TdmdJY29uID0gcmVxdWlyZSgnLi4vLi4vU3ZnSWNvbicpO1xuXG52YXIgX1N2Z0ljb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3ZnSWNvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBDb250ZW50QWRkID0gZnVuY3Rpb24gQ29udGVudEFkZChwcm9wcykge1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgX1N2Z0ljb24yLmRlZmF1bHQsXG4gICAgcHJvcHMsXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdNMTkgMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNnYyeicgfSlcbiAgKTtcbn07XG5Db250ZW50QWRkID0gKDAsIF9wdXJlMi5kZWZhdWx0KShDb250ZW50QWRkKTtcbkNvbnRlbnRBZGQuZGlzcGxheU5hbWUgPSAnQ29udGVudEFkZCc7XG5Db250ZW50QWRkLm11aU5hbWUgPSAnU3ZnSWNvbic7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENvbnRlbnRBZGQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL3N2Zy1pY29ucy9jb250ZW50L2FkZC5qc1xuLy8gbW9kdWxlIGlkID0gODA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3B1cmUgPSByZXF1aXJlKCdyZWNvbXBvc2UvcHVyZScpO1xuXG52YXIgX3B1cmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHVyZSk7XG5cbnZhciBfU3ZnSWNvbiA9IHJlcXVpcmUoJy4uLy4uL1N2Z0ljb24nKTtcblxudmFyIF9TdmdJY29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N2Z0ljb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgQ29udGVudEluYm94ID0gZnVuY3Rpb24gQ29udGVudEluYm94KHByb3BzKSB7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICBfU3ZnSWNvbjIuZGVmYXVsdCxcbiAgICBwcm9wcyxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ00xOSAzSDQuOTljLTEuMTEgMC0xLjk4Ljg5LTEuOTggMkwzIDE5YzAgMS4xLjg4IDIgMS45OSAySDE5YzEuMSAwIDItLjkgMi0yVjVjMC0xLjExLS45LTItMi0yem0wIDEyaC00YzAgMS42Ni0xLjM1IDMtMyAzcy0zLTEuMzQtMy0zSDQuOTlWNUgxOXYxMHonIH0pXG4gICk7XG59O1xuQ29udGVudEluYm94ID0gKDAsIF9wdXJlMi5kZWZhdWx0KShDb250ZW50SW5ib3gpO1xuQ29udGVudEluYm94LmRpc3BsYXlOYW1lID0gJ0NvbnRlbnRJbmJveCc7XG5Db250ZW50SW5ib3gubXVpTmFtZSA9ICdTdmdJY29uJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ29udGVudEluYm94O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9zdmctaWNvbnMvY29udGVudC9pbmJveC5qc1xuLy8gbW9kdWxlIGlkID0gODA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3B1cmUgPSByZXF1aXJlKCdyZWNvbXBvc2UvcHVyZScpO1xuXG52YXIgX3B1cmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHVyZSk7XG5cbnZhciBfU3ZnSWNvbiA9IHJlcXVpcmUoJy4uLy4uL1N2Z0ljb24nKTtcblxudmFyIF9TdmdJY29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N2Z0ljb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTmF2aWdhdGlvbk1vcmVWZXJ0ID0gZnVuY3Rpb24gTmF2aWdhdGlvbk1vcmVWZXJ0KHByb3BzKSB7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICBfU3ZnSWNvbjIuZGVmYXVsdCxcbiAgICBwcm9wcyxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ00xMiA4YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptMCAyYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMCA2Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnonIH0pXG4gICk7XG59O1xuTmF2aWdhdGlvbk1vcmVWZXJ0ID0gKDAsIF9wdXJlMi5kZWZhdWx0KShOYXZpZ2F0aW9uTW9yZVZlcnQpO1xuTmF2aWdhdGlvbk1vcmVWZXJ0LmRpc3BsYXlOYW1lID0gJ05hdmlnYXRpb25Nb3JlVmVydCc7XG5OYXZpZ2F0aW9uTW9yZVZlcnQubXVpTmFtZSA9ICdTdmdJY29uJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gTmF2aWdhdGlvbk1vcmVWZXJ0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9tb3JlLXZlcnQuanNcbi8vIG1vZHVsZSBpZCA9IDgwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9