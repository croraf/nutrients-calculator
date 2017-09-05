webpackJsonp([3],{

/***/ 1141:
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

var _EnhancedSwitch = __webpack_require__(1512);

var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);

var _radioButtonUnchecked = __webpack_require__(1519);

var _radioButtonUnchecked2 = _interopRequireDefault(_radioButtonUnchecked);

var _radioButtonChecked = __webpack_require__(1518);

var _radioButtonChecked2 = _interopRequireDefault(_radioButtonChecked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var radioButton = context.muiTheme.radioButton;


  return {
    icon: {
      height: radioButton.size,
      width: radioButton.size
    },
    target: {
      transition: _transitions2.default.easeOut(),
      position: 'absolute',
      opacity: 1,
      transform: 'scale(1)',
      fill: radioButton.borderColor
    },
    fill: {
      position: 'absolute',
      opacity: 1,
      transform: 'scale(0)',
      transformOrigin: '50% 50%',
      transition: _transitions2.default.easeOut(),
      fill: radioButton.checkedColor
    },
    targetWhenChecked: {
      opacity: 0,
      transform: 'scale(0)'
    },
    fillWhenChecked: {
      opacity: 1,
      transform: 'scale(1)'
    },
    targetWhenDisabled: {
      fill: radioButton.disabledColor
    },
    fillWhenDisabled: {
      fill: radioButton.disabledColor
    },
    label: {
      color: props.disabled ? radioButton.labelDisabledColor : radioButton.labelColor
    },
    ripple: {
      color: props.checked ? radioButton.checkedColor : radioButton.borderColor
    }
  };
}

var RadioButton = function (_Component) {
  (0, _inherits3.default)(RadioButton, _Component);

  function RadioButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RadioButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RadioButton.__proto__ || (0, _getPrototypeOf2.default)(RadioButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleSwitch = function (event) {
      if (_this.props.onCheck) {
        _this.props.onCheck(event, _this.props.value);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  // Only called when selected, not when unselected.


  (0, _createClass3.default)(RadioButton, [{
    key: 'isChecked',
    value: function isChecked() {
      return this.refs.enhancedSwitch.isSwitched();
    }

    // Use RadioButtonGroup.setSelectedValue(newSelectionValue) to set a
    // RadioButton's checked value.

  }, {
    key: 'setChecked',
    value: function setChecked(newCheckedValue) {
      this.refs.enhancedSwitch.setSwitched(newCheckedValue);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs.enhancedSwitch.getValue();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          checkedIcon = _props.checkedIcon,
          checked = _props.checked,
          iconStyle = _props.iconStyle,
          labelStyle = _props.labelStyle,
          labelPosition = _props.labelPosition,
          onCheck = _props.onCheck,
          uncheckedIcon = _props.uncheckedIcon,
          disabled = _props.disabled,
          other = (0, _objectWithoutProperties3.default)(_props, ['checkedIcon', 'checked', 'iconStyle', 'labelStyle', 'labelPosition', 'onCheck', 'uncheckedIcon', 'disabled']);


      var styles = getStyles(this.props, this.context);

      var uncheckedStyles = (0, _simpleAssign2.default)(styles.target, checked && styles.targetWhenChecked, iconStyle, disabled && styles.targetWhenDisabled);

      var checkedStyles = (0, _simpleAssign2.default)(styles.fill, checked && styles.fillWhenChecked, iconStyle, disabled && styles.fillWhenDisabled);

      var uncheckedElement = _react2.default.isValidElement(uncheckedIcon) ? _react2.default.cloneElement(uncheckedIcon, {
        style: (0, _simpleAssign2.default)(uncheckedStyles, uncheckedIcon.props.style)
      }) : _react2.default.createElement(_radioButtonUnchecked2.default, { style: uncheckedStyles });

      var checkedElement = _react2.default.isValidElement(checkedIcon) ? _react2.default.cloneElement(checkedIcon, {
        style: (0, _simpleAssign2.default)(checkedStyles, checkedIcon.props.style)
      }) : _react2.default.createElement(_radioButtonChecked2.default, { style: checkedStyles });

      var mergedIconStyle = (0, _simpleAssign2.default)(styles.icon, iconStyle);
      var mergedLabelStyle = (0, _simpleAssign2.default)(styles.label, labelStyle);

      return _react2.default.createElement(_EnhancedSwitch2.default, (0, _extends3.default)({}, other, {
        ref: 'enhancedSwitch',
        inputType: 'radio',
        checked: checked,
        switched: checked,
        disabled: disabled,
        rippleColor: styles.ripple.color,
        iconStyle: mergedIconStyle,
        labelStyle: mergedLabelStyle,
        labelPosition: labelPosition,
        onSwitch: this.handleSwitch,
        switchElement: _react2.default.createElement(
          'div',
          null,
          uncheckedElement,
          checkedElement
        )
      }));
    }
  }]);
  return RadioButton;
}(_react.Component);

RadioButton.defaultProps = {
  checked: false,
  disabled: false,
  labelPosition: 'right'
};
RadioButton.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
RadioButton.propTypes = undefined !== "production" ? {
  /**
   * @ignore
   * checked if true
   * Used internally by `RadioButtonGroup`.
   */
  checked: _propTypes2.default.bool,
  /**
   * The icon element to show when the radio button is checked.
   */
  checkedIcon: _propTypes2.default.element,
  /**
   * If true, the radio button is disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the input element.
   */
  inputStyle: _propTypes2.default.object,
  /**
   * @ignore
   * Used internally by `RadioButtonGroup`. Use the `labelPosition` property of `RadioButtonGroup` instead.
   * Where the label will be placed next to the radio button.
   */
  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * Override the inline-styles of the label element.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * @ignore
   * Callback function fired when the radio button is checked. Note that this
   * function will not be called if the radio button is part of a
   * radio button group: in this case, use the `onChange` property of
   * `RadioButtonGroup`.
   *
   * @param {object} event `change` event targeting the element.
   * @param {string} value The element's `value`.
   */
  onCheck: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The icon element to show when the radio button is unchecked.
   */
  uncheckedIcon: _propTypes2.default.element,
  /**
   * The value of the radio button.
   */
  value: _propTypes2.default.any
} : {};
exports.default = RadioButton;

/***/ }),

/***/ 1186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Profile = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFlexboxGrid = __webpack_require__(770);

var _ProfileForm = __webpack_require__(1187);

var _ProfileForm2 = _interopRequireDefault(_ProfileForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_React$Component) {
    _inherits(Profile, _React$Component);

    function Profile() {
        _classCallCheck(this, Profile);

        return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
    }

    _createClass(Profile, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactFlexboxGrid.Grid,
                { fluid: true },
                _react2.default.createElement(
                    _reactFlexboxGrid.Row,
                    null,
                    _react2.default.createElement(
                        _reactFlexboxGrid.Col,
                        { xs: 12, xsOffset: 0, md: 8, mdOffset: 2, lg: 6, lgOffset: 3 },
                        _react2.default.createElement(
                            'div',
                            { style: { position: 'relative',
                                    marginTop: '10px', marginBottom: '10px', border: '2px solid black',
                                    borderRadius: '5px', borderColor: 'rgb(0, 188, 212)' } },
                            _react2.default.createElement(
                                'h2',
                                { style: { textAlign: 'center', color: 'rgb(0, 188, 212)' } },
                                'My Profile'
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: { position: 'relative', width: '90%', margin: 'auto' } },
                                _react2.default.createElement(_ProfileForm2.default, { onSubmit: this.props.calculateCaloriesTarget, caloriesTarget: this.props.caloriesTarget })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Profile;
}(_react2.default.Component);

exports.Profile = Profile;

/***/ }),

/***/ 1187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(289);

var _RaisedButton = __webpack_require__(902);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _TextField = __webpack_require__(894);

var _TextField2 = _interopRequireDefault(_TextField);

var _RadioButton = __webpack_require__(1503);

var _reactFlexboxGrid = __webpack_require__(770);

var _SelectField = __webpack_require__(1505);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(299);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fieldStyle = {
    width: '100%',
    marginBottom: '10px',
    marginLeft: '2px'
};

var fieldStyle2 = {
    width: '100px',
    marginLeft: '5px',
    marginBottom: '10px'
};

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
                input = _props.input,
                meta = _props.meta,
                type = _props.type,
                label = _props.label;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_TextField2.default, _extends({}, input, {
                    type: type,
                    floatingLabelText: label,
                    fullWidth: true,
                    errorText: meta.error && 'required' }))
            );
        }
    }]);

    return MyTextField;
}(_react2.default.Component);

var MyRadioField = function (_React$Component2) {
    _inherits(MyRadioField, _React$Component2);

    function MyRadioField() {
        _classCallCheck(this, MyRadioField);

        return _possibleConstructorReturn(this, (MyRadioField.__proto__ || Object.getPrototypeOf(MyRadioField)).apply(this, arguments));
    }

    _createClass(MyRadioField, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                input = _props2.input,
                meta = _props2.meta,
                label = _props2.label;


            return _react2.default.createElement(
                _RadioButton.RadioButtonGroup,
                _extends({
                    name: input.name,
                    valueSelected: input.value
                }, input, {
                    style: { border: '1px solid lightgray', margin: 'auto', textAlign: 'center', height: '52px', paddingTop: '10px' } }),
                _react2.default.createElement(_RadioButton.RadioButton, {
                    value: 'male',
                    label: 'Male'
                }),
                _react2.default.createElement(_RadioButton.RadioButton, {
                    value: 'female',
                    label: 'Female'
                })
            );
        }
    }]);

    return MyRadioField;
}(_react2.default.Component);

var MySelectField = function (_React$Component3) {
    _inherits(MySelectField, _React$Component3);

    function MySelectField() {
        _classCallCheck(this, MySelectField);

        return _possibleConstructorReturn(this, (MySelectField.__proto__ || Object.getPrototypeOf(MySelectField)).apply(this, arguments));
    }

    _createClass(MySelectField, [{
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                input = _props3.input,
                meta = _props3.meta,
                label = _props3.label;


            return _react2.default.createElement(
                _SelectField2.default,
                _extends({
                    floatingLabelText: label,
                    fullWidth: true
                }, input, {
                    onChange: function onChange(event, key, payload) {
                        input.onChange(payload);
                    } }),
                _react2.default.createElement(_MenuItem2.default, { value: 'none', primaryText: 'None' }),
                _react2.default.createElement(_MenuItem2.default, { value: 'minor', primaryText: 'Minor walking' }),
                _react2.default.createElement(_MenuItem2.default, { value: 'average', primaryText: 'Walking and minor excercise' }),
                _react2.default.createElement(_MenuItem2.default, { value: 'heavy', primaryText: 'Heavier excercise or sports' }),
                _react2.default.createElement(_MenuItem2.default, { value: 'pro', primaryText: 'Professional excercise or sports' })
            );
        }
    }]);

    return MySelectField;
}(_react2.default.Component);

var ProfileForm = function ProfileForm(props) {
    var handleSubmit = props.handleSubmit,
        caloriesTarget = props.caloriesTarget;


    return _react2.default.createElement(
        'form',
        { onSubmit: handleSubmit },
        _react2.default.createElement(_reduxForm.Field, { name: 'firstName', label: 'First Name', component: MyTextField }),
        _react2.default.createElement(_reduxForm.Field, { name: 'lastName', label: 'Last Name', component: MyTextField }),
        _react2.default.createElement(_reduxForm.Field, { name: 'email', label: 'E-mail', component: MyTextField, type: 'email' }),
        _react2.default.createElement(
            _reactFlexboxGrid.Row,
            null,
            _react2.default.createElement(
                _reactFlexboxGrid.Col,
                { xs: 6, style: { minWidth: '200px' } },
                _react2.default.createElement(_reduxForm.Field, { name: 'height', label: 'Height', component: MyTextField, type: 'number' })
            ),
            _react2.default.createElement(
                _reactFlexboxGrid.Col,
                { xs: 6, style: { minWidth: '200px' } },
                _react2.default.createElement(_reduxForm.Field, { name: 'weight', label: 'Weight', component: MyTextField, type: 'number' })
            )
        ),
        _react2.default.createElement(
            _reactFlexboxGrid.Row,
            null,
            _react2.default.createElement(
                _reactFlexboxGrid.Col,
                { xs: 6, style: { minWidth: '200px' } },
                _react2.default.createElement(_reduxForm.Field, { name: 'age', label: 'Age', component: MyTextField, type: 'number' })
            ),
            _react2.default.createElement(
                _reactFlexboxGrid.Col,
                { xs: 6, style: { minWidth: '200px' } },
                _react2.default.createElement(_reduxForm.Field, { name: 'sex', label: 'Sex', component: MyRadioField })
            )
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_reduxForm.Field, { name: 'activity', label: 'Physical activity', component: MySelectField })
        ),
        _react2.default.createElement(
            'div',
            { style: { display: 'flex', justifyContent: 'center', marginTop: '10px', marginBottom: '20px' } },
            _react2.default.createElement(_RaisedButton2.default, {
                style: {},
                label: 'Calculate Calories Target',
                primary: true,
                type: 'submit' })
        ),
        _react2.default.createElement(
            'div',
            { style: { display: 'flex', justifyContent: 'center', marginBottom: '20px' } },
            _react2.default.createElement(
                'div',
                { style: { fontSize: 24 } },
                _react2.default.createElement(
                    'span',
                    { style: {
                            display: 'inline-block',
                            border: '1px solid rgb(0, 188, 212)',
                            borderRadius: '4px',
                            width: '100px',
                            textAlign: 'center',
                            marginLeft: '100px'
                        } },
                    caloriesTarget.toFixed(0)
                ),
                _react2.default.createElement(
                    'span',
                    { style: {
                            display: 'inline-block',
                            width: '100px',
                            textAlign: 'left'
                        } },
                    'kcal'
                )
            )
        )
    );
};

ProfileForm = (0, _reduxForm.reduxForm)({
    // a unique name for the form
    form: 'profile',
    destroyOnUnmount: false,
    initialValues: { sex: 'female', activity: 'minor', firstName: 'rafa', height: '200', weight: '100', age: 30 }
})(ProfileForm);

exports.default = ProfileForm;

/***/ }),

/***/ 1499:
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

var _transitions = __webpack_require__(24);

var _transitions2 = _interopRequireDefault(_transitions);

var _arrowDropDown = __webpack_require__(1516);

var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

var _Menu = __webpack_require__(176);

var _Menu2 = _interopRequireDefault(_Menu);

var _ClearFix = __webpack_require__(1511);

var _ClearFix2 = _interopRequireDefault(_ClearFix);

var _Popover = __webpack_require__(177);

var _Popover2 = _interopRequireDefault(_Popover);

var _PopoverAnimationVertical = __webpack_require__(1501);

var _PopoverAnimationVertical2 = _interopRequireDefault(_PopoverAnimationVertical);

var _keycode = __webpack_require__(173);

var _keycode2 = _interopRequireDefault(_keycode);

var _events = __webpack_require__(103);

var _events2 = _interopRequireDefault(_events);

var _IconButton = __webpack_require__(102);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _propTypes3 = __webpack_require__(32);

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var disabled = props.disabled;

  var spacing = context.muiTheme.baseTheme.spacing;
  var palette = context.muiTheme.baseTheme.palette;
  var accentColor = context.muiTheme.dropDownMenu.accentColor;
  return {
    control: {
      cursor: disabled ? 'not-allowed' : 'pointer',
      height: '100%',
      position: 'relative',
      width: '100%'
    },
    icon: {
      fill: accentColor,
      position: 'absolute',
      right: spacing.desktopGutterLess,
      top: (spacing.iconSize - 24) / 2 + spacing.desktopGutterMini / 2
    },
    iconChildren: {
      fill: 'inherit'
    },
    label: {
      color: disabled ? palette.disabledColor : palette.textColor,
      height: spacing.desktopToolbarHeight + 'px',
      lineHeight: spacing.desktopToolbarHeight + 'px',
      overflow: 'hidden',
      opacity: 1,
      position: 'relative',
      paddingLeft: spacing.desktopGutter,
      paddingRight: spacing.iconSize * 2 + spacing.desktopGutterMini,
      textOverflow: 'ellipsis',
      top: 0,
      whiteSpace: 'nowrap'
    },
    labelWhenOpen: {
      opacity: 0,
      top: spacing.desktopToolbarHeight / 8
    },
    root: {
      display: 'inline-block',
      fontSize: spacing.desktopDropDownMenuFontSize,
      height: spacing.desktopSubheaderHeight,
      fontFamily: context.muiTheme.baseTheme.fontFamily,
      outline: 'none',
      position: 'relative',
      transition: _transitions2.default.easeOut()
    },
    rootWhenOpen: {
      opacity: 1
    },
    underline: {
      borderTop: 'solid 1px ' + accentColor,
      bottom: 1,
      left: 0,
      margin: '-1px ' + spacing.desktopGutter + 'px',
      right: 0,
      position: 'absolute'
    }
  };
}

var DropDownMenu = function (_Component) {
  (0, _inherits3.default)(DropDownMenu, _Component);

  function DropDownMenu() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DropDownMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DropDownMenu.__proto__ || (0, _getPrototypeOf2.default)(DropDownMenu)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.rootNode = undefined, _this.arrowNode = undefined, _this.handleTouchTapControl = function (event) {
      event.preventDefault();
      if (!_this.props.disabled) {
        _this.setState({
          open: !_this.state.open,
          anchorEl: _this.rootNode
        });
      }
    }, _this.handleRequestCloseMenu = function () {
      _this.close(false);
    }, _this.handleEscKeyDownMenu = function () {
      _this.close(true);
    }, _this.handleKeyDown = function (event) {
      switch ((0, _keycode2.default)(event)) {
        case 'up':
        case 'down':
        case 'space':
        case 'enter':
          event.preventDefault();
          _this.setState({
            open: true,
            anchorEl: _this.rootNode
          });
          break;
      }
    }, _this.handleItemTouchTap = function (event, child, index) {
      if (_this.props.multiple) {
        if (!_this.state.open) {
          _this.setState({ open: true });
        }
      } else {
        event.persist();
        _this.setState({
          open: false
        }, function () {
          if (_this.props.onChange) {
            _this.props.onChange(event, index, child.props.value);
          }

          _this.close(_events2.default.isKeyboard(event));
        });
      }
    }, _this.handleChange = function (event, value) {
      if (_this.props.multiple && _this.props.onChange) {
        _this.props.onChange(event, undefined, value);
      }
    }, _this.close = function (isKeyboard) {
      _this.setState({
        open: false
      }, function () {
        if (_this.props.onClose) {
          _this.props.onClose();
        }

        if (isKeyboard) {
          var dropArrow = _this.arrowNode;
          var dropNode = _reactDom2.default.findDOMNode(dropArrow);
          dropNode.focus();
          dropArrow.setKeyboardFocus(true);
        }
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  // The nested styles for drop-down-menu are modified by toolbar and possibly
  // other user components, so it will give full access to its js styles rather
  // than just the parent.


  (0, _createClass3.default)(DropDownMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.autoWidth) {
        this.setWidth();
      }
      if (this.props.openImmediately) {
        // TODO: Temporary fix to make openImmediately work with popover.
        /* eslint-disable react/no-did-mount-set-state */
        setTimeout(function () {
          return _this2.setState({
            open: true,
            anchorEl: _this2.rootNode
          });
        }, 0);
        /* eslint-enable react/no-did-mount-set-state */
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      if (this.props.autoWidth) {
        this.setWidth();
      }
    }
  }, {
    key: 'getInputNode',


    /**
     * This method is deprecated but still here because the TextField
     * need it in order to work. TODO: That will be addressed later.
     */
    value: function getInputNode() {
      var _this3 = this;

      var rootNode = this.rootNode;

      rootNode.focus = function () {
        if (!_this3.props.disabled) {
          _this3.setState({
            open: !_this3.state.open,
            anchorEl: _this3.rootNode
          });
        }
      };

      return rootNode;
    }
  }, {
    key: 'setWidth',
    value: function setWidth() {
      var el = this.rootNode;
      if (!this.props.style || !this.props.style.hasOwnProperty('width')) {
        el.style.width = 'auto';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          animated = _props.animated,
          animation = _props.animation,
          autoWidth = _props.autoWidth,
          multiple = _props.multiple,
          children = _props.children,
          className = _props.className,
          disabled = _props.disabled,
          iconStyle = _props.iconStyle,
          labelStyle = _props.labelStyle,
          listStyle = _props.listStyle,
          maxHeight = _props.maxHeight,
          menuStyleProp = _props.menuStyle,
          selectionRenderer = _props.selectionRenderer,
          onClose = _props.onClose,
          openImmediately = _props.openImmediately,
          menuItemStyle = _props.menuItemStyle,
          selectedMenuItemStyle = _props.selectedMenuItemStyle,
          style = _props.style,
          underlineStyle = _props.underlineStyle,
          value = _props.value,
          iconButton = _props.iconButton,
          anchorOrigin = _props.anchorOrigin,
          targetOrigin = _props.targetOrigin,
          other = (0, _objectWithoutProperties3.default)(_props, ['animated', 'animation', 'autoWidth', 'multiple', 'children', 'className', 'disabled', 'iconStyle', 'labelStyle', 'listStyle', 'maxHeight', 'menuStyle', 'selectionRenderer', 'onClose', 'openImmediately', 'menuItemStyle', 'selectedMenuItemStyle', 'style', 'underlineStyle', 'value', 'iconButton', 'anchorOrigin', 'targetOrigin']);
      var _state = this.state,
          anchorEl = _state.anchorEl,
          open = _state.open;
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);

      var displayValue = '';
      if (!multiple) {
        _react2.default.Children.forEach(children, function (child) {
          if (child && value === child.props.value) {
            if (selectionRenderer) {
              displayValue = selectionRenderer(value, child);
            } else {
              // This will need to be improved (in case primaryText is a node)
              displayValue = child.props.label || child.props.primaryText;
            }
          }
        });
      } else {
        var values = [];
        var selectionRendererChildren = [];
        _react2.default.Children.forEach(children, function (child) {
          if (child && value && value.indexOf(child.props.value) > -1) {
            if (selectionRenderer) {
              values.push(child.props.value);
              selectionRendererChildren.push(child);
            } else {
              values.push(child.props.label || child.props.primaryText);
            }
          }
        });

        displayValue = [];
        if (selectionRenderer) {
          displayValue = selectionRenderer(values, selectionRendererChildren);
        } else {
          displayValue = values.join(', ');
        }
      }

      var menuStyle = void 0;
      if (anchorEl && !autoWidth) {
        menuStyle = (0, _simpleAssign2.default)({
          width: anchorEl.clientWidth
        }, menuStyleProp);
      } else {
        menuStyle = menuStyleProp;
      }

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, other, {
          ref: function ref(node) {
            _this4.rootNode = node;
          },
          className: className,
          style: prepareStyles((0, _simpleAssign2.default)({}, styles.root, open && styles.rootWhenOpen, style))
        }),
        _react2.default.createElement(
          _ClearFix2.default,
          { style: styles.control, onTouchTap: this.handleTouchTapControl },
          _react2.default.createElement(
            'div',
            { style: prepareStyles((0, _simpleAssign2.default)({}, styles.label, open && styles.labelWhenOpen, labelStyle)) },
            displayValue
          ),
          _react2.default.createElement(
            _IconButton2.default,
            {
              disabled: disabled,
              onKeyDown: this.handleKeyDown,
              ref: function ref(node) {
                _this4.arrowNode = node;
              },
              style: (0, _simpleAssign2.default)({}, styles.icon, iconStyle),
              iconStyle: styles.iconChildren
            },
            iconButton
          ),
          _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)({}, styles.underline, underlineStyle)) })
        ),
        _react2.default.createElement(
          _Popover2.default,
          {
            anchorOrigin: anchorOrigin,
            targetOrigin: targetOrigin,
            anchorEl: anchorEl,
            animation: animation || _PopoverAnimationVertical2.default,
            open: open,
            animated: animated,
            onRequestClose: this.handleRequestCloseMenu
          },
          _react2.default.createElement(
            _Menu2.default,
            {
              multiple: multiple,
              maxHeight: maxHeight,
              desktop: true,
              value: value,
              onEscKeyDown: this.handleEscKeyDownMenu,
              style: menuStyle,
              listStyle: listStyle,
              onItemTouchTap: this.handleItemTouchTap,
              onChange: this.handleChange,
              menuItemStyle: menuItemStyle,
              selectedMenuItemStyle: selectedMenuItemStyle,
              autoWidth: autoWidth,
              width: !autoWidth && menuStyle ? menuStyle.width : null
            },
            children
          )
        )
      );
    }
  }]);
  return DropDownMenu;
}(_react.Component);

DropDownMenu.muiName = 'DropDownMenu';
DropDownMenu.defaultProps = {
  animated: true,
  autoWidth: true,
  disabled: false,
  iconButton: _react2.default.createElement(_arrowDropDown2.default, null),
  openImmediately: false,
  maxHeight: 500,
  multiple: false,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left'
  }
};
DropDownMenu.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
DropDownMenu.propTypes = undefined !== "production" ? {
  /**
   * This is the point on the anchor that the popover's
   * `targetOrigin` will attach to.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  anchorOrigin: _propTypes4.default.origin,
  /**
   * If true, the popover will apply transitions when
   * it gets added to the DOM.
   */
  animated: _propTypes2.default.bool,
  /**
   * Override the default animation component used.
   */
  animation: _propTypes2.default.func,
  /**
   * The width will automatically be set according to the items inside the menu.
   * To control this width in css instead, set this prop to `false`.
   */
  autoWidth: _propTypes2.default.bool,
  /**
   * The `MenuItem`s to populate the `Menu` with. If the `MenuItems` have the
   * prop `label` that value will be used to render the representation of that
   * item within the field.
   */
  children: _propTypes2.default.node,
  /**
   * The css class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * Disables the menu.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Overrides default `SvgIcon` dropdown arrow component.
   */
  iconButton: _propTypes2.default.node,
  /**
   * Overrides the styles of icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * Overrides the styles of label when the `DropDownMenu` is inactive.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * The style object to use to override underlying list style.
   */
  listStyle: _propTypes2.default.object,
  /**
   * The maximum height of the `Menu` when it is displayed.
   */
  maxHeight: _propTypes2.default.number,
  /**
   * Override the inline-styles of menu items.
   */
  menuItemStyle: _propTypes2.default.object,
  /**
   * Overrides the styles of `Menu` when the `DropDownMenu` is displayed.
   */
  menuStyle: _propTypes2.default.object,
  /**
   * If true, `value` must be an array and the menu will support
   * multiple selections.
   */
  multiple: _propTypes2.default.bool,
  /**
   * Callback function fired when a menu item is clicked, other than the one currently selected.
   *
   * @param {object} event TouchTap event targeting the menu item that was clicked.
   * @param {number} key The index of the clicked menu item in the `children` collection.
   * @param {any} value If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   */
  onChange: _propTypes2.default.func,
  /**
   * Callback function fired when the menu is closed.
   */
  onClose: _propTypes2.default.func,
  /**
   * Set to true to have the `DropDownMenu` automatically open on mount.
   */
  openImmediately: _propTypes2.default.bool,
  /**
   * Override the inline-styles of selected menu items.
   */
  selectedMenuItemStyle: _propTypes2.default.object,
  /**
   * Callback function fired when a menu item is clicked, other than the one currently selected.
   *
   * @param {any} value If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   * @param {any} menuItem The selected `MenuItem`.
   * If `multiple` is true, this will be an array with the `MenuItem`s matching the `value`s parameter.
   */
  selectionRenderer: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * This is the point on the popover which will attach to
   * the anchor's origin.
   * Options:
   * vertical: [top, center, bottom]
   * horizontal: [left, middle, right].
   */
  targetOrigin: _propTypes4.default.origin,
  /**
   * Overrides the inline-styles of the underline.
   */
  underlineStyle: _propTypes2.default.object,
  /**
   * If `multiple` is true, an array of the `value`s of the selected
   * menu items. Otherwise, the `value` of the selected menu item.
   * If provided, the menu will be a controlled component.
   */
  value: _propTypes2.default.any
} : {};
exports.default = DropDownMenu;

/***/ }),

/***/ 1500:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MenuItem = exports.DropDownMenu = undefined;

var _DropDownMenu2 = __webpack_require__(1499);

var _DropDownMenu3 = _interopRequireDefault(_DropDownMenu2);

var _MenuItem2 = __webpack_require__(175);

var _MenuItem3 = _interopRequireDefault(_MenuItem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DropDownMenu = _DropDownMenu3.default;
exports.MenuItem = _MenuItem3.default;
exports.default = _DropDownMenu3.default;

/***/ }),

/***/ 1501:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _Paper = __webpack_require__(100);

var _Paper2 = _interopRequireDefault(_Paper);

var _transitions = __webpack_require__(24);

var _transitions2 = _interopRequireDefault(_transitions);

var _propTypes3 = __webpack_require__(32);

var _propTypes4 = _interopRequireDefault(_propTypes3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context, state) {
  var targetOrigin = props.targetOrigin;
  var open = state.open;
  var muiTheme = context.muiTheme;

  var horizontal = targetOrigin.horizontal.replace('middle', 'vertical');

  return {
    root: {
      position: 'fixed',
      zIndex: muiTheme.zIndex.popover,
      opacity: open ? 1 : 0,
      transform: open ? 'scaleY(1)' : 'scaleY(0)',
      transformOrigin: horizontal + ' ' + targetOrigin.vertical,
      transition: _transitions2.default.easeOut('450ms', ['transform', 'opacity']),
      maxHeight: '100%'
    }
  };
}

var PopoverAnimationVertical = function (_Component) {
  (0, _inherits3.default)(PopoverAnimationVertical, _Component);

  function PopoverAnimationVertical() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PopoverAnimationVertical);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PopoverAnimationVertical.__proto__ || (0, _getPrototypeOf2.default)(PopoverAnimationVertical)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PopoverAnimationVertical, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ open: true }); // eslint-disable-line react/no-did-mount-set-state
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        open: nextProps.open
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          zDepth = _props.zDepth;


      var styles = getStyles(this.props, this.context, this.state);

      return _react2.default.createElement(
        _Paper2.default,
        {
          style: (0, _simpleAssign2.default)(styles.root, style),
          zDepth: zDepth,
          className: className
        },
        this.props.children
      );
    }
  }]);
  return PopoverAnimationVertical;
}(_react.Component);

PopoverAnimationVertical.defaultProps = {
  style: {},
  zDepth: 1
};
PopoverAnimationVertical.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
PopoverAnimationVertical.propTypes = undefined !== "production" ? {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  open: _propTypes2.default.bool.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  targetOrigin: _propTypes4.default.origin.isRequired,
  zDepth: _propTypes4.default.zDepth
} : {};
exports.default = PopoverAnimationVertical;

/***/ }),

/***/ 1502:
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

var _RadioButton = __webpack_require__(1141);

var _RadioButton2 = _interopRequireDefault(_RadioButton);

var _warning = __webpack_require__(11);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioButtonGroup = function (_Component) {
  (0, _inherits3.default)(RadioButtonGroup, _Component);

  function RadioButtonGroup() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RadioButtonGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RadioButtonGroup.__proto__ || (0, _getPrototypeOf2.default)(RadioButtonGroup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      numberCheckedRadioButtons: 0,
      selected: ''
    }, _this.handleChange = function (event, newSelection) {
      _this.updateRadioButtons(newSelection);

      // Successful update
      if (_this.state.numberCheckedRadioButtons === 0) {
        if (_this.props.onChange) _this.props.onChange(event, newSelection);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RadioButtonGroup, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      var cnt = 0;
      var selected = '';
      var _props = this.props,
          valueSelected = _props.valueSelected,
          defaultSelected = _props.defaultSelected;

      if (valueSelected !== undefined) {
        selected = valueSelected;
      } else if (defaultSelected !== undefined) {
        selected = defaultSelected;
      }

      _react2.default.Children.forEach(this.props.children, function (option) {
        if (_this2.hasCheckAttribute(option)) cnt++;
      }, this);

      this.setState({
        numberCheckedRadioButtons: cnt,
        selected: selected
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.hasOwnProperty('valueSelected')) {
        this.setState({
          selected: nextProps.valueSelected
        });
      }
    }
  }, {
    key: 'hasCheckAttribute',
    value: function hasCheckAttribute(radioButton) {
      return radioButton.props.hasOwnProperty('checked') && radioButton.props.checked;
    }
  }, {
    key: 'updateRadioButtons',
    value: function updateRadioButtons(newSelection) {
      if (this.state.numberCheckedRadioButtons === 0) {
        this.setState({ selected: newSelection });
      } else {
        undefined !== "production" ? (0, _warning2.default)(false, 'Material-UI: Cannot select a different radio button while another radio button\n        has the \'checked\' property set to true.') : void 0;
      }
    }
  }, {
    key: 'getSelectedValue',
    value: function getSelectedValue() {
      return this.state.selected;
    }
  }, {
    key: 'setSelectedValue',
    value: function setSelectedValue(newSelectionValue) {
      this.updateRadioButtons(newSelectionValue);
    }
  }, {
    key: 'clearValue',
    value: function clearValue() {
      this.setSelectedValue('');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var prepareStyles = this.context.muiTheme.prepareStyles;


      var options = _react2.default.Children.map(this.props.children, function (option) {
        var _option$props = option.props,
            name = _option$props.name,
            value = _option$props.value,
            label = _option$props.label,
            onCheck = _option$props.onCheck,
            other = (0, _objectWithoutProperties3.default)(_option$props, ['name', 'value', 'label', 'onCheck']);


        return _react2.default.createElement(_RadioButton2.default, (0, _extends3.default)({}, other, {
          ref: option.props.value,
          name: _this3.props.name,
          key: option.props.value,
          value: option.props.value,
          label: option.props.label,
          labelPosition: _this3.props.labelPosition,
          onCheck: _this3.handleChange,
          checked: option.props.value === _this3.state.selected
        }));
      }, this);

      return _react2.default.createElement(
        'div',
        {
          style: prepareStyles((0, _simpleAssign2.default)({}, this.props.style)),
          className: this.props.className
        },
        options
      );
    }
  }]);
  return RadioButtonGroup;
}(_react.Component);

RadioButtonGroup.defaultProps = {
  style: {}
};
RadioButtonGroup.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
RadioButtonGroup.propTypes = undefined !== "production" ? {
  /**
   * Should be used to pass `RadioButton` components.
   */
  children: _propTypes2.default.node,
  /**
   * The CSS class name of the root element.
   */
  className: _propTypes2.default.string,
  /**
   * The `value` property of the radio button that will be
   * selected by default. This takes precedence over the `checked` property
   * of the `RadioButton` elements.
   */
  defaultSelected: _propTypes2.default.any,
  /**
   * Where the label will be placed for all child radio buttons.
   * This takes precedence over the `labelPosition` property of the
   * `RadioButton` elements.
   */
  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
  /**
   * The name that will be applied to all child radio buttons.
   */
  name: _propTypes2.default.string.isRequired,
  /**
   * Callback function that is fired when a radio button has
   * been checked.
   *
   * @param {object} event `change` event targeting the selected
   * radio button.
   * @param {*} value The `value` of the selected radio button.
   */
  onChange: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * The `value` of the currently selected radio button.
   */
  valueSelected: _propTypes2.default.any
} : {};
exports.default = RadioButtonGroup;

/***/ }),

/***/ 1503:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RadioButtonGroup = exports.RadioButton = undefined;

var _RadioButton2 = __webpack_require__(1141);

var _RadioButton3 = _interopRequireDefault(_RadioButton2);

var _RadioButtonGroup2 = __webpack_require__(1502);

var _RadioButtonGroup3 = _interopRequireDefault(_RadioButtonGroup2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RadioButton = _RadioButton3.default;
exports.RadioButtonGroup = _RadioButtonGroup3.default;
exports.default = _RadioButton3.default;

/***/ }),

/***/ 1504:
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

var _TextField = __webpack_require__(894);

var _TextField2 = _interopRequireDefault(_TextField);

var _DropDownMenu = __webpack_require__(1500);

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props) {
  return {
    label: {
      paddingLeft: 0,
      top: props.floatingLabelText ? 6 : -4
    },
    icon: {
      right: 0,
      top: props.floatingLabelText ? 8 : 0
    },
    hideDropDownUnderline: {
      borderTop: 'none'
    },
    dropDownMenu: {
      display: 'block'
    }
  };
}

var SelectField = function (_Component) {
  (0, _inherits3.default)(SelectField, _Component);

  function SelectField() {
    (0, _classCallCheck3.default)(this, SelectField);
    return (0, _possibleConstructorReturn3.default)(this, (SelectField.__proto__ || (0, _getPrototypeOf2.default)(SelectField)).apply(this, arguments));
  }

  (0, _createClass3.default)(SelectField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          autoWidth = _props.autoWidth,
          multiple = _props.multiple,
          children = _props.children,
          style = _props.style,
          labelStyle = _props.labelStyle,
          iconStyle = _props.iconStyle,
          id = _props.id,
          underlineDisabledStyle = _props.underlineDisabledStyle,
          underlineFocusStyle = _props.underlineFocusStyle,
          menuItemStyle = _props.menuItemStyle,
          selectedMenuItemStyle = _props.selectedMenuItemStyle,
          underlineStyle = _props.underlineStyle,
          dropDownMenuProps = _props.dropDownMenuProps,
          errorStyle = _props.errorStyle,
          disabled = _props.disabled,
          floatingLabelFixed = _props.floatingLabelFixed,
          floatingLabelText = _props.floatingLabelText,
          floatingLabelStyle = _props.floatingLabelStyle,
          hintStyle = _props.hintStyle,
          hintText = _props.hintText,
          fullWidth = _props.fullWidth,
          errorText = _props.errorText,
          listStyle = _props.listStyle,
          maxHeight = _props.maxHeight,
          menuStyle = _props.menuStyle,
          onFocus = _props.onFocus,
          onBlur = _props.onBlur,
          onChange = _props.onChange,
          selectionRenderer = _props.selectionRenderer,
          value = _props.value,
          other = (0, _objectWithoutProperties3.default)(_props, ['autoWidth', 'multiple', 'children', 'style', 'labelStyle', 'iconStyle', 'id', 'underlineDisabledStyle', 'underlineFocusStyle', 'menuItemStyle', 'selectedMenuItemStyle', 'underlineStyle', 'dropDownMenuProps', 'errorStyle', 'disabled', 'floatingLabelFixed', 'floatingLabelText', 'floatingLabelStyle', 'hintStyle', 'hintText', 'fullWidth', 'errorText', 'listStyle', 'maxHeight', 'menuStyle', 'onFocus', 'onBlur', 'onChange', 'selectionRenderer', 'value']);


      var styles = getStyles(this.props, this.context);

      return _react2.default.createElement(
        _TextField2.default,
        (0, _extends3.default)({}, other, {
          style: style,
          disabled: disabled,
          floatingLabelFixed: floatingLabelFixed,
          floatingLabelText: floatingLabelText,
          floatingLabelStyle: floatingLabelStyle,
          hintStyle: hintStyle,
          hintText: !hintText && !floatingLabelText ? ' ' : hintText,
          fullWidth: fullWidth,
          errorText: errorText,
          underlineStyle: underlineStyle,
          errorStyle: errorStyle,
          onFocus: onFocus,
          onBlur: onBlur,
          id: id,
          underlineDisabledStyle: underlineDisabledStyle,
          underlineFocusStyle: underlineFocusStyle
        }),
        _react2.default.createElement(
          _DropDownMenu2.default,
          (0, _extends3.default)({
            disabled: disabled,
            style: (0, _simpleAssign2.default)(styles.dropDownMenu, menuStyle),
            labelStyle: (0, _simpleAssign2.default)(styles.label, labelStyle),
            iconStyle: (0, _simpleAssign2.default)(styles.icon, iconStyle),
            menuItemStyle: menuItemStyle,
            selectedMenuItemStyle: selectedMenuItemStyle,
            underlineStyle: styles.hideDropDownUnderline,
            listStyle: listStyle,
            autoWidth: autoWidth,
            value: value,
            onChange: onChange,
            maxHeight: maxHeight,
            multiple: multiple,
            selectionRenderer: selectionRenderer
          }, dropDownMenuProps),
          children
        )
      );
    }
  }]);
  return SelectField;
}(_react.Component);

SelectField.defaultProps = {
  autoWidth: false,
  disabled: false,
  fullWidth: false,
  multiple: false
};
SelectField.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
SelectField.propTypes = undefined !== "production" ? {
  /**
   * If true, the width will automatically be set according to the
   * items inside the menu.
   * To control the width in CSS instead, leave this prop set to `false`.
   */
  autoWidth: _propTypes2.default.bool,
  /**
   * The `MenuItem` elements to populate the select field with.
   * If the menu items have a `label` prop, that value will
   * represent the selected menu item in the rendered select field.
   */
  children: _propTypes2.default.node,
  /**
   * If true, the select field will be disabled.
   */
  disabled: _propTypes2.default.bool,
  /**
   * Object that can handle and override any property of component DropDownMenu.
   */
  dropDownMenuProps: _propTypes2.default.object,
  /**
   * Override the inline-styles of the error element.
   */
  errorStyle: _propTypes2.default.object,
  /**
   * The error content to display.
   */
  errorText: _propTypes2.default.node,
  /**
   * If true, the floating label will float even when no value is selected.
   */
  floatingLabelFixed: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the floating label.
   */
  floatingLabelStyle: _propTypes2.default.object,
  /**
   * The content of the floating label.
   */
  floatingLabelText: _propTypes2.default.node,
  /**
   * If true, the select field will take up the full width of its container.
   */
  fullWidth: _propTypes2.default.bool,
  /**
   * Override the inline-styles of the hint element.
   */
  hintStyle: _propTypes2.default.object,
  /**
   * The hint content to display.
   */
  hintText: _propTypes2.default.node,
  /**
   * Override the inline-styles of the icon element.
   */
  iconStyle: _propTypes2.default.object,
  /**
   * The id prop for the text field.
   */
  id: _propTypes2.default.string,
  /**
   * Override the label style when the select field is inactive.
   */
  labelStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the underlying `List` element.
   */
  listStyle: _propTypes2.default.object,
  /**
   * Override the default max-height of the underlying `DropDownMenu` element.
   */
  maxHeight: _propTypes2.default.number,
  /**
   * Override the inline-styles of menu items.
   */
  menuItemStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the underlying `DropDownMenu` element.
   */
  menuStyle: _propTypes2.default.object,
  /**
   * If true, `value` must be an array and the menu will support
   * multiple selections.
   */
  multiple: _propTypes2.default.bool,
  /** @ignore */
  onBlur: _propTypes2.default.func,
  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event TouchTap event targeting the menu item
   * that was selected.
   * @param {number} key The index of the selected menu item, or undefined
   * if `multiple` is true.
   * @param {any} payload If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   */
  onChange: _propTypes2.default.func,
  /** @ignore */
  onFocus: _propTypes2.default.func,
  /**
   * Override the inline-styles of selected menu items.
   */
  selectedMenuItemStyle: _propTypes2.default.object,
  /**
   * Customize the rendering of the selected item.
   *
   * @param {any} value If `multiple` is true, the menu's `value`
   * array with either the menu item's `value` added (if
   * it wasn't already selected) or omitted (if it was already selected).
   * Otherwise, the `value` of the menu item.
   * @param {any} menuItem The selected `MenuItem`.
   * If `multiple` is true, this will be an array with the `MenuItem`s matching the `value`s parameter.
   */
  selectionRenderer: _propTypes2.default.func,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  /**
   * Override the inline-styles of the underline element when the select
   * field is disabled.
   */
  underlineDisabledStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the underline element when the select field
   * is focused.
   */
  underlineFocusStyle: _propTypes2.default.object,
  /**
   * Override the inline-styles of the underline element.
   */
  underlineStyle: _propTypes2.default.object,
  /**
   * If `multiple` is true, an array of the `value`s of the selected
   * menu items. Otherwise, the `value` of the selected menu item.
   * If provided, the menu will be a controlled component.
   */
  value: _propTypes2.default.any
} : {};
exports.default = SelectField;

/***/ }),

/***/ 1505:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _SelectField = __webpack_require__(1504);

var _SelectField2 = _interopRequireDefault(_SelectField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SelectField2.default;

/***/ }),

/***/ 1510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  BeforeAfterWrapper
 *    An alternative for the ::before and ::after css pseudo-elements for
 *    components whose styles are defined in javascript instead of css.
 *
 *  Usage: For the element that we want to apply before and after elements to,
 *    wrap its children with BeforeAfterWrapper. For example:
 *
 *                                            <Paper>
 *  <Paper>                                     <div> // See notice
 *    <BeforeAfterWrapper>        renders         <div/> // before element
 *      [children of paper]       ------>         [children of paper]
 *    </BeforeAfterWrapper>                       <div/> // after element
 *  </Paper>                                    </div>
 *                                            </Paper>
 *
 *  Notice: Notice that this div bundles together our elements. If the element
 *    that we want to apply before and after elements is a HTML tag (i.e. a
 *    div, p, or button tag), we can avoid this extra nesting by passing using
 *    the BeforeAfterWrapper in place of said tag like so:
 *
 *  <p>
 *    <BeforeAfterWrapper>   do this instead   <BeforeAfterWrapper elementType='p'>
 *      [children of p]          ------>         [children of p]
 *    </BeforeAfterWrapper>                    </BeforeAfterWrapper>
 *  </p>
 *
 *  BeforeAfterWrapper features spread functionality. This means that we can
 *  pass HTML tag properties directly into the BeforeAfterWrapper tag.
 *
 *  When using BeforeAfterWrapper, ensure that the parent of the beforeElement
 *  and afterElement have a defined style position.
 */

var styles = {
  box: {
    boxSizing: 'border-box'
  }
};

var BeforeAfterWrapper = function (_Component) {
  (0, _inherits3.default)(BeforeAfterWrapper, _Component);

  function BeforeAfterWrapper() {
    (0, _classCallCheck3.default)(this, BeforeAfterWrapper);
    return (0, _possibleConstructorReturn3.default)(this, (BeforeAfterWrapper.__proto__ || (0, _getPrototypeOf2.default)(BeforeAfterWrapper)).apply(this, arguments));
  }

  (0, _createClass3.default)(BeforeAfterWrapper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          beforeStyle = _props.beforeStyle,
          afterStyle = _props.afterStyle,
          beforeElementType = _props.beforeElementType,
          afterElementType = _props.afterElementType,
          elementType = _props.elementType,
          other = (0, _objectWithoutProperties3.default)(_props, ['beforeStyle', 'afterStyle', 'beforeElementType', 'afterElementType', 'elementType']);
      var prepareStyles = this.context.muiTheme.prepareStyles;


      var beforeElement = void 0;
      var afterElement = void 0;

      if (beforeStyle) {
        beforeElement = _react2.default.createElement(this.props.beforeElementType, {
          style: prepareStyles((0, _simpleAssign2.default)({}, styles.box, beforeStyle)),
          key: '::before'
        });
      }

      if (afterStyle) {
        afterElement = _react2.default.createElement(this.props.afterElementType, {
          style: prepareStyles((0, _simpleAssign2.default)({}, styles.box, afterStyle)),
          key: '::after'
        });
      }

      var children = [beforeElement, this.props.children, afterElement];

      var props = other;
      props.style = prepareStyles((0, _simpleAssign2.default)({}, this.props.style));

      return _react2.default.createElement(this.props.elementType, props, children);
    }
  }]);
  return BeforeAfterWrapper;
}(_react.Component);

BeforeAfterWrapper.defaultProps = {
  beforeElementType: 'div',
  afterElementType: 'div',
  elementType: 'div'
};
BeforeAfterWrapper.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
BeforeAfterWrapper.propTypes = undefined !== "production" ? {
  afterElementType: _propTypes2.default.string,
  afterStyle: _propTypes2.default.object,
  beforeElementType: _propTypes2.default.string,
  beforeStyle: _propTypes2.default.object,
  children: _propTypes2.default.node,
  elementType: _propTypes2.default.string,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};
exports.default = BeforeAfterWrapper;

/***/ }),

/***/ 1511:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(16);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(15);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BeforeAfterWrapper = __webpack_require__(1510);

var _BeforeAfterWrapper2 = _interopRequireDefault(_BeforeAfterWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  before: {
    content: "' '",
    display: 'table'
  },
  after: {
    content: "' '",
    clear: 'both',
    display: 'table'
  }
};

var ClearFix = function ClearFix(_ref) {
  var style = _ref.style,
      children = _ref.children,
      other = (0, _objectWithoutProperties3.default)(_ref, ['style', 'children']);
  return _react2.default.createElement(
    _BeforeAfterWrapper2.default,
    (0, _extends3.default)({}, other, {
      beforeStyle: styles.before,
      afterStyle: styles.after,
      style: style
    }),
    children
  );
};

ClearFix.muiName = 'ClearFix';

ClearFix.propTypes = undefined !== "production" ? {
  children: _propTypes2.default.node,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object
} : {};

exports.default = ClearFix;

/***/ }),

/***/ 1512:
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

var _keycode = __webpack_require__(173);

var _keycode2 = _interopRequireDefault(_keycode);

var _transitions = __webpack_require__(24);

var _transitions2 = _interopRequireDefault(_transitions);

var _FocusRipple = __webpack_require__(301);

var _FocusRipple2 = _interopRequireDefault(_FocusRipple);

var _TouchRipple = __webpack_require__(303);

var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

var _Paper = __webpack_require__(100);

var _Paper2 = _interopRequireDefault(_Paper);

var _warning = __webpack_require__(11);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyles(props, context) {
  var baseTheme = context.muiTheme.baseTheme;


  return {
    root: {
      cursor: props.disabled ? 'not-allowed' : 'pointer',
      position: 'relative',
      overflow: 'visible',
      display: 'table',
      height: 'auto',
      width: '100%'
    },
    input: {
      position: 'absolute',
      cursor: 'inherit',
      pointerEvents: 'all',
      opacity: 0,
      width: '100%',
      height: '100%',
      zIndex: 2,
      left: 0,
      boxSizing: 'border-box',
      padding: 0,
      margin: 0
    },
    controls: {
      display: 'flex',
      width: '100%',
      height: '100%'
    },
    label: {
      float: 'left',
      position: 'relative',
      display: 'block',
      width: 'calc(100% - 60px)',
      lineHeight: '24px',
      color: baseTheme.palette.textColor,
      fontFamily: baseTheme.fontFamily
    },
    wrap: {
      transition: _transitions2.default.easeOut(),
      float: 'left',
      position: 'relative',
      display: 'block',
      flexShrink: 0,
      width: 60 - baseTheme.spacing.desktopGutterLess,
      marginRight: props.labelPosition === 'right' ? baseTheme.spacing.desktopGutterLess : 0,
      marginLeft: props.labelPosition === 'left' ? baseTheme.spacing.desktopGutterLess : 0
    },
    ripple: {
      color: props.rippleColor || baseTheme.palette.primary1Color,
      height: '200%',
      width: '200%',
      top: -12,
      left: -12
    }
  };
}

var EnhancedSwitch = function (_Component) {
  (0, _inherits3.default)(EnhancedSwitch, _Component);

  function EnhancedSwitch() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EnhancedSwitch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EnhancedSwitch.__proto__ || (0, _getPrototypeOf2.default)(EnhancedSwitch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isKeyboardFocused: false
    }, _this.handleChange = function (event) {
      _this.tabPressed = false;
      _this.setState({
        isKeyboardFocused: false
      });

      var isInputChecked = _this.refs.checkbox.checked;

      if (!_this.props.hasOwnProperty('checked') && _this.props.onParentShouldUpdate) {
        _this.props.onParentShouldUpdate(isInputChecked);
      }

      if (_this.props.onSwitch) {
        _this.props.onSwitch(event, isInputChecked);
      }
    }, _this.handleKeyDown = function (event) {
      var code = (0, _keycode2.default)(event);

      if (code === 'tab') {
        _this.tabPressed = true;
      }
      if (_this.state.isKeyboardFocused && code === 'space') {
        _this.handleChange(event);
      }
    }, _this.handleKeyUp = function (event) {
      if (_this.state.isKeyboardFocused && (0, _keycode2.default)(event) === 'space') {
        _this.handleChange(event);
      }
    }, _this.handleMouseDown = function (event) {
      // only listen to left clicks
      if (event.button === 0) {
        _this.refs.touchRipple.start(event);
      }
    }, _this.handleMouseUp = function () {
      _this.refs.touchRipple.end();
    }, _this.handleMouseLeave = function () {
      _this.refs.touchRipple.end();
    }, _this.handleTouchStart = function (event) {
      _this.refs.touchRipple.start(event);
    }, _this.handleTouchEnd = function () {
      _this.refs.touchRipple.end();
    }, _this.handleBlur = function (event) {
      _this.setState({
        isKeyboardFocused: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleFocus = function (event) {
      // setTimeout is needed becuase the focus event fires first
      // Wait so that we can capture if this was a keyboard focus
      // or touch focus
      setTimeout(function () {
        if (_this.tabPressed) {
          _this.setState({
            isKeyboardFocused: true
          });
        }
      }, 150);

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(EnhancedSwitch, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var inputNode = this.refs.checkbox;
      if ((!this.props.switched || inputNode.checked !== this.props.switched) && this.props.onParentShouldUpdate) {
        this.props.onParentShouldUpdate(inputNode.checked);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var hasCheckedProp = nextProps.hasOwnProperty('checked');
      var hasNewDefaultProp = nextProps.hasOwnProperty('defaultChecked') && nextProps.defaultChecked !== this.props.defaultChecked;

      if (hasCheckedProp || hasNewDefaultProp) {
        var switched = nextProps.checked || nextProps.defaultChecked || false;

        this.setState({
          switched: switched
        });

        if (this.props.onParentShouldUpdate && switched !== this.props.switched) {
          this.props.onParentShouldUpdate(switched);
        }
      }
    }
  }, {
    key: 'isSwitched',
    value: function isSwitched() {
      return this.refs.checkbox.checked;
    }

    // no callback here because there is no event

  }, {
    key: 'setSwitched',
    value: function setSwitched(newSwitchedValue) {
      if (!this.props.hasOwnProperty('checked') || this.props.checked === false) {
        if (this.props.onParentShouldUpdate) {
          this.props.onParentShouldUpdate(newSwitchedValue);
        }
        this.refs.checkbox.checked = newSwitchedValue;
      } else {
        undefined !== "production" ? (0, _warning2.default)(false, 'Material-UI: Cannot call set method while checked is defined as a property.') : void 0;
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs.checkbox.value;
    }

    // Checkbox inputs only use SPACE to change their state. Using ENTER will
    // update the ui but not the input.


    /**
     * Because both the ripples and the checkbox input cannot share pointer
     * events, the checkbox input takes control of pointer events and calls
     * ripple animations manually.
     */

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          value = _props.value,
          iconStyle = _props.iconStyle,
          inputStyle = _props.inputStyle,
          inputType = _props.inputType,
          label = _props.label,
          labelStyle = _props.labelStyle,
          labelPosition = _props.labelPosition,
          onSwitch = _props.onSwitch,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          onMouseUp = _props.onMouseUp,
          onMouseDown = _props.onMouseDown,
          onMouseLeave = _props.onMouseLeave,
          onTouchStart = _props.onTouchStart,
          onTouchEnd = _props.onTouchEnd,
          onParentShouldUpdate = _props.onParentShouldUpdate,
          disabled = _props.disabled,
          disableTouchRipple = _props.disableTouchRipple,
          disableFocusRipple = _props.disableFocusRipple,
          className = _props.className,
          rippleColor = _props.rippleColor,
          rippleStyle = _props.rippleStyle,
          style = _props.style,
          switched = _props.switched,
          switchElement = _props.switchElement,
          thumbStyle = _props.thumbStyle,
          trackStyle = _props.trackStyle,
          other = (0, _objectWithoutProperties3.default)(_props, ['name', 'value', 'iconStyle', 'inputStyle', 'inputType', 'label', 'labelStyle', 'labelPosition', 'onSwitch', 'onBlur', 'onFocus', 'onMouseUp', 'onMouseDown', 'onMouseLeave', 'onTouchStart', 'onTouchEnd', 'onParentShouldUpdate', 'disabled', 'disableTouchRipple', 'disableFocusRipple', 'className', 'rippleColor', 'rippleStyle', 'style', 'switched', 'switchElement', 'thumbStyle', 'trackStyle']);
      var prepareStyles = this.context.muiTheme.prepareStyles;

      var styles = getStyles(this.props, this.context);
      var wrapStyles = (0, _simpleAssign2.default)(styles.wrap, iconStyle);
      var mergedRippleStyle = (0, _simpleAssign2.default)(styles.ripple, rippleStyle);

      if (thumbStyle) {
        wrapStyles.marginLeft /= 2;
        wrapStyles.marginRight /= 2;
      }

      var labelElement = label && _react2.default.createElement(
        'label',
        { style: prepareStyles((0, _simpleAssign2.default)(styles.label, labelStyle)) },
        label
      );

      var showTouchRipple = !disabled && !disableTouchRipple;
      var showFocusRipple = !disabled && !disableFocusRipple;

      var touchRipple = _react2.default.createElement(_TouchRipple2.default, {
        ref: 'touchRipple',
        key: 'touchRipple',
        style: mergedRippleStyle,
        color: mergedRippleStyle.color,
        muiTheme: this.context.muiTheme,
        centerRipple: true
      });

      var focusRipple = _react2.default.createElement(_FocusRipple2.default, {
        key: 'focusRipple',
        innerStyle: mergedRippleStyle,
        color: mergedRippleStyle.color,
        muiTheme: this.context.muiTheme,
        show: this.state.isKeyboardFocused
      });

      var ripples = [showTouchRipple ? touchRipple : null, showFocusRipple ? focusRipple : null];

      var inputElement = _react2.default.createElement('input', (0, _extends3.default)({}, other, {
        ref: 'checkbox',
        type: inputType,
        style: prepareStyles((0, _simpleAssign2.default)(styles.input, inputStyle)),
        name: name,
        value: value,
        disabled: disabled,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onChange: this.handleChange,
        onMouseUp: showTouchRipple && this.handleMouseUp,
        onMouseDown: showTouchRipple && this.handleMouseDown,
        onMouseLeave: showTouchRipple && this.handleMouseLeave,
        onTouchStart: showTouchRipple && this.handleTouchStart,
        onTouchEnd: showTouchRipple && this.handleTouchEnd
      }));

      // If toggle component (indicated by whether the style includes thumb) manually lay out
      // elements in order to nest ripple elements
      var switchOrThumbElement = !thumbStyle ? _react2.default.createElement(
        'div',
        { style: prepareStyles(wrapStyles) },
        switchElement,
        ripples
      ) : _react2.default.createElement(
        'div',
        { style: prepareStyles(wrapStyles) },
        _react2.default.createElement('div', { style: prepareStyles((0, _simpleAssign2.default)({}, trackStyle)) }),
        _react2.default.createElement(
          _Paper2.default,
          { style: thumbStyle, zDepth: 1, circle: true },
          ' ',
          ripples,
          ' '
        )
      );

      var elementsInOrder = labelPosition === 'right' ? _react2.default.createElement(
        'div',
        { style: styles.controls },
        switchOrThumbElement,
        labelElement
      ) : _react2.default.createElement(
        'div',
        { style: styles.controls },
        labelElement,
        switchOrThumbElement
      );

      return _react2.default.createElement(
        'div',
        { ref: 'root', className: className, style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
        _react2.default.createElement(_reactEventListener2.default, {
          target: 'window',
          onKeyDown: this.handleKeyDown,
          onKeyUp: this.handleKeyUp
        }),
        inputElement,
        elementsInOrder
      );
    }
  }]);
  return EnhancedSwitch;
}(_react.Component);

EnhancedSwitch.contextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
EnhancedSwitch.propTypes = undefined !== "production" ? {
  checked: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  defaultChecked: _propTypes2.default.bool,
  disableFocusRipple: _propTypes2.default.bool,
  disableTouchRipple: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  iconStyle: _propTypes2.default.object,
  inputStyle: _propTypes2.default.object,
  inputType: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.node,
  labelPosition: _propTypes2.default.oneOf(['left', 'right']),
  labelStyle: _propTypes2.default.object,
  name: _propTypes2.default.string,
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onMouseDown: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  onMouseUp: _propTypes2.default.func,
  onParentShouldUpdate: _propTypes2.default.func,
  onSwitch: _propTypes2.default.func,
  onTouchEnd: _propTypes2.default.func,
  onTouchStart: _propTypes2.default.func,
  rippleColor: _propTypes2.default.string,
  rippleStyle: _propTypes2.default.object,
  style: _propTypes2.default.object,
  switchElement: _propTypes2.default.element.isRequired,
  switched: _propTypes2.default.bool.isRequired,
  thumbStyle: _propTypes2.default.object,
  trackStyle: _propTypes2.default.object,
  value: _propTypes2.default.any
} : {};
exports.default = EnhancedSwitch;

/***/ }),

/***/ 1516:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(73);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(72);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationArrowDropDown = function NavigationArrowDropDown(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M7 10l5 5 5-5z' })
  );
};
NavigationArrowDropDown = (0, _pure2.default)(NavigationArrowDropDown);
NavigationArrowDropDown.displayName = 'NavigationArrowDropDown';
NavigationArrowDropDown.muiName = 'SvgIcon';

exports.default = NavigationArrowDropDown;

/***/ }),

/***/ 1518:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(73);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(72);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleRadioButtonChecked = function ToggleRadioButtonChecked(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' })
  );
};
ToggleRadioButtonChecked = (0, _pure2.default)(ToggleRadioButtonChecked);
ToggleRadioButtonChecked.displayName = 'ToggleRadioButtonChecked';
ToggleRadioButtonChecked.muiName = 'SvgIcon';

exports.default = ToggleRadioButtonChecked;

/***/ }),

/***/ 1519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(73);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(72);

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleRadioButtonUnchecked = function ToggleRadioButtonUnchecked(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' })
  );
};
ToggleRadioButtonUnchecked = (0, _pure2.default)(ToggleRadioButtonUnchecked);
ToggleRadioButtonUnchecked.displayName = 'ToggleRadioButtonUnchecked';
ToggleRadioButtonUnchecked.muiName = 'SvgIcon';

exports.default = ToggleRadioButtonUnchecked;

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = __webpack_require__(25);

var _Profile = __webpack_require__(1186);

var _caloriesTarget = __webpack_require__(290);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        calculateCaloriesTarget: function calculateCaloriesTarget(values) {
            dispatch((0, _caloriesTarget.calculateCaloriesTarget)(values));
        }
    };
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        caloriesTarget: state.caloriesTarget
    };
};

var ProfileContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Profile.Profile);

exports.default = ProfileContainer;

/***/ }),

/***/ 757:
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

/***/ 760:
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

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClass;

var _flexboxgrid = __webpack_require__(936);

var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getClass(className) {
  return _flexboxgrid2.default && _flexboxgrid2.default[className] ? _flexboxgrid2.default[className] : className;
}

/***/ }),

/***/ 765:
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

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumnProps = exports.Col = exports.getRowProps = exports.Row = exports.Grid = undefined;

var _Row2 = __webpack_require__(934);

Object.defineProperty(exports, 'getRowProps', {
  enumerable: true,
  get: function get() {
    return _Row2.getRowProps;
  }
});

var _Col2 = __webpack_require__(932);

Object.defineProperty(exports, 'getColumnProps', {
  enumerable: true,
  get: function get() {
    return _Col2.getColumnProps;
  }
});

var _Grid2 = __webpack_require__(933);

var _Grid3 = _interopRequireDefault(_Grid2);

var _Row3 = _interopRequireDefault(_Row2);

var _Col3 = _interopRequireDefault(_Col2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Grid = _Grid3.default;
exports.Row = _Row3.default;
exports.Col = _Col3.default;

/***/ }),

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewportSizeType = exports.ColumnSizeType = undefined;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColumnSizeType = exports.ColumnSizeType = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]);
var ViewportSizeType = exports.ViewportSizeType = _propTypes2.default.oneOf(['xs', 'sm', 'md', 'lg']);

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

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(757)();
// imports


// module
exports.push([module.i, ".container-fluid,\n.container {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.container-fluid {\n  padding-right: 2rem;\n  padding-left: 2rem;\n}\n\n.row {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n}\n\n.row.reverse {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n}\n\n.col.reverse {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: column-reverse;\n  flex-direction: column-reverse;\n}\n\n.col-xs,\n.col-xs-1,\n.col-xs-2,\n.col-xs-3,\n.col-xs-4,\n.col-xs-5,\n.col-xs-6,\n.col-xs-7,\n.col-xs-8,\n.col-xs-9,\n.col-xs-10,\n.col-xs-11,\n.col-xs-12,\n.col-xs-offset-0,\n.col-xs-offset-1,\n.col-xs-offset-2,\n.col-xs-offset-3,\n.col-xs-offset-4,\n.col-xs-offset-5,\n.col-xs-offset-6,\n.col-xs-offset-7,\n.col-xs-offset-8,\n.col-xs-offset-9,\n.col-xs-offset-10,\n.col-xs-offset-11,\n.col-xs-offset-12 {\n  box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n}\n\n.col-xs {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  max-width: 100%;\n}\n\n.col-xs-1 {\n  -ms-flex-preferred-size: 8.33333333%;\n  flex-basis: 8.33333333%;\n  max-width: 8.33333333%;\n}\n\n.col-xs-2 {\n  -ms-flex-preferred-size: 16.66666667%;\n  flex-basis: 16.66666667%;\n  max-width: 16.66666667%;\n}\n\n.col-xs-3 {\n  -ms-flex-preferred-size: 25%;\n  flex-basis: 25%;\n  max-width: 25%;\n}\n\n.col-xs-4 {\n  -ms-flex-preferred-size: 33.33333333%;\n  flex-basis: 33.33333333%;\n  max-width: 33.33333333%;\n}\n\n.col-xs-5 {\n  -ms-flex-preferred-size: 41.66666667%;\n  flex-basis: 41.66666667%;\n  max-width: 41.66666667%;\n}\n\n.col-xs-6 {\n  -ms-flex-preferred-size: 50%;\n  flex-basis: 50%;\n  max-width: 50%;\n}\n\n.col-xs-7 {\n  -ms-flex-preferred-size: 58.33333333%;\n  flex-basis: 58.33333333%;\n  max-width: 58.33333333%;\n}\n\n.col-xs-8 {\n  -ms-flex-preferred-size: 66.66666667%;\n  flex-basis: 66.66666667%;\n  max-width: 66.66666667%;\n}\n\n.col-xs-9 {\n  -ms-flex-preferred-size: 75%;\n  flex-basis: 75%;\n  max-width: 75%;\n}\n\n.col-xs-10 {\n  -ms-flex-preferred-size: 83.33333333%;\n  flex-basis: 83.33333333%;\n  max-width: 83.33333333%;\n}\n\n.col-xs-11 {\n  -ms-flex-preferred-size: 91.66666667%;\n  flex-basis: 91.66666667%;\n  max-width: 91.66666667%;\n}\n\n.col-xs-12 {\n  -ms-flex-preferred-size: 100%;\n  flex-basis: 100%;\n  max-width: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n\n.start-xs {\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  text-align: start;\n}\n\n.center-xs {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.end-xs {\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  text-align: end;\n}\n\n.top-xs {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n}\n\n.middle-xs {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.bottom-xs {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n}\n\n.around-xs {\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n}\n\n.between-xs {\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.first-xs {\n  -webkit-box-ordinal-group: 0;\n  -ms-flex-order: -1;\n  order: -1;\n}\n\n.last-xs {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n}\n\n@media only screen and (min-width: 48em) {\n  .container {\n    width: 49rem;\n  }\n\n  .col-sm,\n  .col-sm-1,\n  .col-sm-2,\n  .col-sm-3,\n  .col-sm-4,\n  .col-sm-5,\n  .col-sm-6,\n  .col-sm-7,\n  .col-sm-8,\n  .col-sm-9,\n  .col-sm-10,\n  .col-sm-11,\n  .col-sm-12,\n  .col-sm-offset-0,\n  .col-sm-offset-1,\n  .col-sm-offset-2,\n  .col-sm-offset-3,\n  .col-sm-offset-4,\n  .col-sm-offset-5,\n  .col-sm-offset-6,\n  .col-sm-offset-7,\n  .col-sm-offset-8,\n  .col-sm-offset-9,\n  .col-sm-offset-10,\n  .col-sm-offset-11,\n  .col-sm-offset-12 {\n    box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .col-sm {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .col-sm-1 {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .col-sm-2 {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .col-sm-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .col-sm-4 {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .col-sm-5 {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .col-sm-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .col-sm-7 {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .col-sm-8 {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .col-sm-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .col-sm-10 {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .col-sm-11 {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .col-sm-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .col-sm-offset-0 {\n    margin-left: 0;\n  }\n\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .start-sm {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .center-sm {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .end-sm {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .top-sm {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .middle-sm {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .bottom-sm {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .around-sm {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .between-sm {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .first-sm {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .last-sm {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}\n\n@media only screen and (min-width: 64em) {\n  .container {\n    width: 65rem;\n  }\n\n  .col-md,\n  .col-md-1,\n  .col-md-2,\n  .col-md-3,\n  .col-md-4,\n  .col-md-5,\n  .col-md-6,\n  .col-md-7,\n  .col-md-8,\n  .col-md-9,\n  .col-md-10,\n  .col-md-11,\n  .col-md-12,\n  .col-md-offset-0,\n  .col-md-offset-1,\n  .col-md-offset-2,\n  .col-md-offset-3,\n  .col-md-offset-4,\n  .col-md-offset-5,\n  .col-md-offset-6,\n  .col-md-offset-7,\n  .col-md-offset-8,\n  .col-md-offset-9,\n  .col-md-offset-10,\n  .col-md-offset-11,\n  .col-md-offset-12 {\n    box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .col-md {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .col-md-1 {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .col-md-2 {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .col-md-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .col-md-4 {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .col-md-5 {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .col-md-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .col-md-7 {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .col-md-8 {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .col-md-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .col-md-10 {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .col-md-11 {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .col-md-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .col-md-offset-0 {\n    margin-left: 0;\n  }\n\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .start-md {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .center-md {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .end-md {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .top-md {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .middle-md {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .bottom-md {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .around-md {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .between-md {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .first-md {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .last-md {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}\n\n@media only screen and (min-width: 75em) {\n  .container {\n    width: 76rem;\n  }\n\n  .col-lg,\n  .col-lg-1,\n  .col-lg-2,\n  .col-lg-3,\n  .col-lg-4,\n  .col-lg-5,\n  .col-lg-6,\n  .col-lg-7,\n  .col-lg-8,\n  .col-lg-9,\n  .col-lg-10,\n  .col-lg-11,\n  .col-lg-12,\n  .col-lg-offset-0,\n  .col-lg-offset-1,\n  .col-lg-offset-2,\n  .col-lg-offset-3,\n  .col-lg-offset-4,\n  .col-lg-offset-5,\n  .col-lg-offset-6,\n  .col-lg-offset-7,\n  .col-lg-offset-8,\n  .col-lg-offset-9,\n  .col-lg-offset-10,\n  .col-lg-offset-11,\n  .col-lg-offset-12 {\n    box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .col-lg {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .col-lg-1 {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .col-lg-2 {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .col-lg-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .col-lg-4 {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .col-lg-5 {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .col-lg-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .col-lg-7 {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .col-lg-8 {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .col-lg-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .col-lg-10 {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .col-lg-11 {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .col-lg-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .col-lg-offset-0 {\n    margin-left: 0;\n  }\n\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .start-lg {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .center-lg {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .end-lg {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .top-lg {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .middle-lg {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .bottom-lg {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .around-lg {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .between-lg {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .first-lg {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .last-lg {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}", ""]);

// exports


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

/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumnProps = getColumnProps;
exports.default = Col;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createProps = __webpack_require__(765);

var _createProps2 = _interopRequireDefault(_createProps);

var _classNames = __webpack_require__(764);

var _classNames2 = _interopRequireDefault(_classNames);

var _types = __webpack_require__(888);

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

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Grid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createProps = __webpack_require__(765);

var _createProps2 = _interopRequireDefault(_createProps);

var _classNames = __webpack_require__(764);

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

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRowProps = getRowProps;
exports.default = Row;

var _classNames = __webpack_require__(764);

var _classNames2 = _interopRequireDefault(_classNames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createProps = __webpack_require__(765);

var _createProps2 = _interopRequireDefault(_createProps);

var _types = __webpack_require__(888);

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

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(904);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(760)(content, {});
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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1JhZGlvQnV0dG9uL1JhZGlvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvUHJvZmlsZS9Qcm9maWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvUHJvZmlsZS9Qcm9maWxlRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0Ryb3BEb3duTWVudS9Ecm9wRG93bk1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9Ecm9wRG93bk1lbnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9Qb3BvdmVyL1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1JhZGlvQnV0dG9uL1JhZGlvQnV0dG9uR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9SYWRpb0J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1NlbGVjdEZpZWxkL1NlbGVjdEZpZWxkLmpzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvU2VsZWN0RmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9pbnRlcm5hbC9CZWZvcmVBZnRlcldyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9pbnRlcm5hbC9DbGVhckZpeC5qcyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL2ludGVybmFsL0VuaGFuY2VkU3dpdGNoLmpzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvc3ZnLWljb25zL25hdmlnYXRpb24vYXJyb3ctZHJvcC1kb3duLmpzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvc3ZnLWljb25zL3RvZ2dsZS9yYWRpby1idXR0b24tY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL3N2Zy1pY29ucy90b2dnbGUvcmFkaW8tYnV0dG9uLXVuY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL1Byb2ZpbGUvUHJvZmlsZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzP2RhMDQqKiIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanM/Yjk4MCoqIiwid2VicGFjazovLy8uL34vcmVhY3QtZmxleGJveC1ncmlkL2xpYi9jbGFzc05hbWVzLmpzP2Y1NmEqIiwid2VicGFjazovLy8uL34vcmVhY3QtZmxleGJveC1ncmlkL2xpYi9jcmVhdGVQcm9wcy5qcz9iMmMyKiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWZsZXhib3gtZ3JpZC9saWIvaW5kZXguanM/MjljMSoiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL3R5cGVzLmpzPzhiOWMqIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL2luZGV4LmpzPzc0NzciLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9SYWlzZWRCdXR0b24vaW5kZXguanM/OGU5NSIsIndlYnBhY2s6Ly8vLi9+L2ZsZXhib3hncmlkL2Rpc3QvZmxleGJveGdyaWQuY3NzP2M4NGIqIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uL1JhaXNlZEJ1dHRvbi5qcz84NGZkIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL0VuaGFuY2VkVGV4dGFyZWEuanM/NmFmMiIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1RleHRGaWVsZC9UZXh0RmllbGQuanM/YmE1YiIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1RleHRGaWVsZC9UZXh0RmllbGRIaW50LmpzPzE4MjUiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkTGFiZWwuanM/YjhmMSIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1RleHRGaWVsZC9UZXh0RmllbGRVbmRlcmxpbmUuanM/YTM5MCIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWZsZXhib3gtZ3JpZC9saWIvY29tcG9uZW50cy9Db2wuanM/NmIxMioiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL2NvbXBvbmVudHMvR3JpZC5qcz9mMmViKiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWZsZXhib3gtZ3JpZC9saWIvY29tcG9uZW50cy9Sb3cuanM/NzZiOCoiLCJ3ZWJwYWNrOi8vLy4vfi9mbGV4Ym94Z3JpZC9kaXN0L2ZsZXhib3hncmlkLmNzcz80Yjg5KioiXSwibmFtZXMiOlsiUHJvZmlsZSIsInBvc2l0aW9uIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsIndpZHRoIiwibWFyZ2luIiwicHJvcHMiLCJjYWxjdWxhdGVDYWxvcmllc1RhcmdldCIsImNhbG9yaWVzVGFyZ2V0IiwiQ29tcG9uZW50IiwiZmllbGRTdHlsZSIsIm1hcmdpbkxlZnQiLCJmaWVsZFN0eWxlMiIsIk15VGV4dEZpZWxkIiwiaW5wdXQiLCJtZXRhIiwidHlwZSIsImxhYmVsIiwiZXJyb3IiLCJNeVJhZGlvRmllbGQiLCJuYW1lIiwidmFsdWUiLCJoZWlnaHQiLCJwYWRkaW5nVG9wIiwiTXlTZWxlY3RGaWVsZCIsImV2ZW50Iiwia2V5IiwicGF5bG9hZCIsIm9uQ2hhbmdlIiwiUHJvZmlsZUZvcm0iLCJoYW5kbGVTdWJtaXQiLCJtaW5XaWR0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTaXplIiwidG9GaXhlZCIsImZvcm0iLCJkZXN0cm95T25Vbm1vdW50IiwiaW5pdGlhbFZhbHVlcyIsInNleCIsImFjdGl2aXR5IiwiZmlyc3ROYW1lIiwid2VpZ2h0IiwiYWdlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJ2YWx1ZXMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIlByb2ZpbGVDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU8sbUVBQW1FLHlCQUF5Qjs7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QSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMEJBQTBCLGFBQWE7QUFDdkM7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtB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N0Y7QUFDQTtBQUNBLHdDOzs7Ozs7OztBQ25CQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELDJCOzs7Ozs7OztBQ2pFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FB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O0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxtQ0FBbUM7QUFDNUMscUVBQXFFLGdEQUFnRDtBQUNySDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELG1DOzs7Ozs7OztBQzFQQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHNCQUFzQixtQkFBbUI7QUFDekM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0JBQXdCLHdDQUF3QztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0JBQWtCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsOEVBQThFO0FBQ3ZGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsdUZBQXVGO0FBQ3ZGO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCw0Qjs7Ozs7Ozs7QUN0a0JBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyx3RUFBd0U7QUFDN0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBLGdDOzs7Ozs7OztBQy9FQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7OztBQ3BIQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Iid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX0VuaGFuY2VkU3dpdGNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvRW5oYW5jZWRTd2l0Y2gnKTtcblxudmFyIF9FbmhhbmNlZFN3aXRjaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FbmhhbmNlZFN3aXRjaCk7XG5cbnZhciBfcmFkaW9CdXR0b25VbmNoZWNrZWQgPSByZXF1aXJlKCcuLi9zdmctaWNvbnMvdG9nZ2xlL3JhZGlvLWJ1dHRvbi11bmNoZWNrZWQnKTtcblxudmFyIF9yYWRpb0J1dHRvblVuY2hlY2tlZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYWRpb0J1dHRvblVuY2hlY2tlZCk7XG5cbnZhciBfcmFkaW9CdXR0b25DaGVja2VkID0gcmVxdWlyZSgnLi4vc3ZnLWljb25zL3RvZ2dsZS9yYWRpby1idXR0b24tY2hlY2tlZCcpO1xuXG52YXIgX3JhZGlvQnV0dG9uQ2hlY2tlZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yYWRpb0J1dHRvbkNoZWNrZWQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQpIHtcbiAgdmFyIHJhZGlvQnV0dG9uID0gY29udGV4dC5tdWlUaGVtZS5yYWRpb0J1dHRvbjtcblxuXG4gIHJldHVybiB7XG4gICAgaWNvbjoge1xuICAgICAgaGVpZ2h0OiByYWRpb0J1dHRvbi5zaXplLFxuICAgICAgd2lkdGg6IHJhZGlvQnV0dG9uLnNpemVcbiAgICB9LFxuICAgIHRhcmdldDoge1xuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcbiAgICAgIGZpbGw6IHJhZGlvQnV0dG9uLmJvcmRlckNvbG9yXG4gICAgfSxcbiAgICBmaWxsOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKScsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgNTAlJyxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgICBmaWxsOiByYWRpb0J1dHRvbi5jaGVja2VkQ29sb3JcbiAgICB9LFxuICAgIHRhcmdldFdoZW5DaGVja2VkOiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMCknXG4gICAgfSxcbiAgICBmaWxsV2hlbkNoZWNrZWQ6IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgICB9LFxuICAgIHRhcmdldFdoZW5EaXNhYmxlZDoge1xuICAgICAgZmlsbDogcmFkaW9CdXR0b24uZGlzYWJsZWRDb2xvclxuICAgIH0sXG4gICAgZmlsbFdoZW5EaXNhYmxlZDoge1xuICAgICAgZmlsbDogcmFkaW9CdXR0b24uZGlzYWJsZWRDb2xvclxuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgIGNvbG9yOiBwcm9wcy5kaXNhYmxlZCA/IHJhZGlvQnV0dG9uLmxhYmVsRGlzYWJsZWRDb2xvciA6IHJhZGlvQnV0dG9uLmxhYmVsQ29sb3JcbiAgICB9LFxuICAgIHJpcHBsZToge1xuICAgICAgY29sb3I6IHByb3BzLmNoZWNrZWQgPyByYWRpb0J1dHRvbi5jaGVja2VkQ29sb3IgOiByYWRpb0J1dHRvbi5ib3JkZXJDb2xvclxuICAgIH1cbiAgfTtcbn1cblxudmFyIFJhZGlvQnV0dG9uID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoUmFkaW9CdXR0b24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJhZGlvQnV0dG9uKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFJhZGlvQnV0dG9uKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IFJhZGlvQnV0dG9uLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShSYWRpb0J1dHRvbikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmhhbmRsZVN3aXRjaCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hlY2spIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25DaGVjayhldmVudCwgX3RoaXMucHJvcHMudmFsdWUpO1xuICAgICAgfVxuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAvLyBPbmx5IGNhbGxlZCB3aGVuIHNlbGVjdGVkLCBub3Qgd2hlbiB1bnNlbGVjdGVkLlxuXG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoUmFkaW9CdXR0b24sIFt7XG4gICAga2V5OiAnaXNDaGVja2VkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNDaGVja2VkKCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVmcy5lbmhhbmNlZFN3aXRjaC5pc1N3aXRjaGVkKCk7XG4gICAgfVxuXG4gICAgLy8gVXNlIFJhZGlvQnV0dG9uR3JvdXAuc2V0U2VsZWN0ZWRWYWx1ZShuZXdTZWxlY3Rpb25WYWx1ZSkgdG8gc2V0IGFcbiAgICAvLyBSYWRpb0J1dHRvbidzIGNoZWNrZWQgdmFsdWUuXG5cbiAgfSwge1xuICAgIGtleTogJ3NldENoZWNrZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRDaGVja2VkKG5ld0NoZWNrZWRWYWx1ZSkge1xuICAgICAgdGhpcy5yZWZzLmVuaGFuY2VkU3dpdGNoLnNldFN3aXRjaGVkKG5ld0NoZWNrZWRWYWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZnMuZW5oYW5jZWRTd2l0Y2guZ2V0VmFsdWUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGVja2VkSWNvbiA9IF9wcm9wcy5jaGVja2VkSWNvbixcbiAgICAgICAgICBjaGVja2VkID0gX3Byb3BzLmNoZWNrZWQsXG4gICAgICAgICAgaWNvblN0eWxlID0gX3Byb3BzLmljb25TdHlsZSxcbiAgICAgICAgICBsYWJlbFN0eWxlID0gX3Byb3BzLmxhYmVsU3R5bGUsXG4gICAgICAgICAgbGFiZWxQb3NpdGlvbiA9IF9wcm9wcy5sYWJlbFBvc2l0aW9uLFxuICAgICAgICAgIG9uQ2hlY2sgPSBfcHJvcHMub25DaGVjayxcbiAgICAgICAgICB1bmNoZWNrZWRJY29uID0gX3Byb3BzLnVuY2hlY2tlZEljb24sXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnY2hlY2tlZEljb24nLCAnY2hlY2tlZCcsICdpY29uU3R5bGUnLCAnbGFiZWxTdHlsZScsICdsYWJlbFBvc2l0aW9uJywgJ29uQ2hlY2snLCAndW5jaGVja2VkSWNvbicsICdkaXNhYmxlZCddKTtcblxuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG5cbiAgICAgIHZhciB1bmNoZWNrZWRTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnRhcmdldCwgY2hlY2tlZCAmJiBzdHlsZXMudGFyZ2V0V2hlbkNoZWNrZWQsIGljb25TdHlsZSwgZGlzYWJsZWQgJiYgc3R5bGVzLnRhcmdldFdoZW5EaXNhYmxlZCk7XG5cbiAgICAgIHZhciBjaGVja2VkU3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5maWxsLCBjaGVja2VkICYmIHN0eWxlcy5maWxsV2hlbkNoZWNrZWQsIGljb25TdHlsZSwgZGlzYWJsZWQgJiYgc3R5bGVzLmZpbGxXaGVuRGlzYWJsZWQpO1xuXG4gICAgICB2YXIgdW5jaGVja2VkRWxlbWVudCA9IF9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudCh1bmNoZWNrZWRJY29uKSA/IF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQodW5jaGVja2VkSWNvbiwge1xuICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHVuY2hlY2tlZFN0eWxlcywgdW5jaGVja2VkSWNvbi5wcm9wcy5zdHlsZSlcbiAgICAgIH0pIDogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JhZGlvQnV0dG9uVW5jaGVja2VkMi5kZWZhdWx0LCB7IHN0eWxlOiB1bmNoZWNrZWRTdHlsZXMgfSk7XG5cbiAgICAgIHZhciBjaGVja2VkRWxlbWVudCA9IF9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChjaGVja2VkSWNvbikgPyBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoZWNrZWRJY29uLCB7XG4gICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoY2hlY2tlZFN0eWxlcywgY2hlY2tlZEljb24ucHJvcHMuc3R5bGUpXG4gICAgICB9KSA6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yYWRpb0J1dHRvbkNoZWNrZWQyLmRlZmF1bHQsIHsgc3R5bGU6IGNoZWNrZWRTdHlsZXMgfSk7XG5cbiAgICAgIHZhciBtZXJnZWRJY29uU3R5bGUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmljb24sIGljb25TdHlsZSk7XG4gICAgICB2YXIgbWVyZ2VkTGFiZWxTdHlsZSA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMubGFiZWwsIGxhYmVsU3R5bGUpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0VuaGFuY2VkU3dpdGNoMi5kZWZhdWx0LCAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwge1xuICAgICAgICByZWY6ICdlbmhhbmNlZFN3aXRjaCcsXG4gICAgICAgIGlucHV0VHlwZTogJ3JhZGlvJyxcbiAgICAgICAgY2hlY2tlZDogY2hlY2tlZCxcbiAgICAgICAgc3dpdGNoZWQ6IGNoZWNrZWQsXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgcmlwcGxlQ29sb3I6IHN0eWxlcy5yaXBwbGUuY29sb3IsXG4gICAgICAgIGljb25TdHlsZTogbWVyZ2VkSWNvblN0eWxlLFxuICAgICAgICBsYWJlbFN0eWxlOiBtZXJnZWRMYWJlbFN0eWxlLFxuICAgICAgICBsYWJlbFBvc2l0aW9uOiBsYWJlbFBvc2l0aW9uLFxuICAgICAgICBvblN3aXRjaDogdGhpcy5oYW5kbGVTd2l0Y2gsXG4gICAgICAgIHN3aXRjaEVsZW1lbnQ6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdW5jaGVja2VkRWxlbWVudCxcbiAgICAgICAgICBjaGVja2VkRWxlbWVudFxuICAgICAgICApXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBSYWRpb0J1dHRvbjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblJhZGlvQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hlY2tlZDogZmFsc2UsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgbGFiZWxQb3NpdGlvbjogJ3JpZ2h0J1xufTtcblJhZGlvQnV0dG9uLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5SYWRpb0J1dHRvbi5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIGNoZWNrZWQgaWYgdHJ1ZVxuICAgKiBVc2VkIGludGVybmFsbHkgYnkgYFJhZGlvQnV0dG9uR3JvdXBgLlxuICAgKi9cbiAgY2hlY2tlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhlIGljb24gZWxlbWVudCB0byBzaG93IHdoZW4gdGhlIHJhZGlvIGJ1dHRvbiBpcyBjaGVja2VkLlxuICAgKi9cbiAgY2hlY2tlZEljb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudCxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSByYWRpbyBidXR0b24gaXMgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGljb24gZWxlbWVudC5cbiAgICovXG4gIGljb25TdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgaW5wdXQgZWxlbWVudC5cbiAgICovXG4gIGlucHV0U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBVc2VkIGludGVybmFsbHkgYnkgYFJhZGlvQnV0dG9uR3JvdXBgLiBVc2UgdGhlIGBsYWJlbFBvc2l0aW9uYCBwcm9wZXJ0eSBvZiBgUmFkaW9CdXR0b25Hcm91cGAgaW5zdGVhZC5cbiAgICogV2hlcmUgdGhlIGxhYmVsIHdpbGwgYmUgcGxhY2VkIG5leHQgdG8gdGhlIHJhZGlvIGJ1dHRvbi5cbiAgICovXG4gIGxhYmVsUG9zaXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoWydsZWZ0JywgJ3JpZ2h0J10pLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGxhYmVsIGVsZW1lbnQuXG4gICAqL1xuICBsYWJlbFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiB0aGUgcmFkaW8gYnV0dG9uIGlzIGNoZWNrZWQuIE5vdGUgdGhhdCB0aGlzXG4gICAqIGZ1bmN0aW9uIHdpbGwgbm90IGJlIGNhbGxlZCBpZiB0aGUgcmFkaW8gYnV0dG9uIGlzIHBhcnQgb2YgYVxuICAgKiByYWRpbyBidXR0b24gZ3JvdXA6IGluIHRoaXMgY2FzZSwgdXNlIHRoZSBgb25DaGFuZ2VgIHByb3BlcnR5IG9mXG4gICAqIGBSYWRpb0J1dHRvbkdyb3VwYC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IGBjaGFuZ2VgIGV2ZW50IHRhcmdldGluZyB0aGUgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSBlbGVtZW50J3MgYHZhbHVlYC5cbiAgICovXG4gIG9uQ2hlY2s6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgaWNvbiBlbGVtZW50IHRvIHNob3cgd2hlbiB0aGUgcmFkaW8gYnV0dG9uIGlzIHVuY2hlY2tlZC5cbiAgICovXG4gIHVuY2hlY2tlZEljb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudCxcbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgcmFkaW8gYnV0dG9uLlxuICAgKi9cbiAgdmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBSYWRpb0J1dHRvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvUmFkaW9CdXR0b24vUmFkaW9CdXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDExNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQgeyBHcmlkLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWZsZXhib3gtZ3JpZCc7XHJcblxyXG5pbXBvcnQgUHJvZmlsZUZvcm0gZnJvbSAnLi9Qcm9maWxlRm9ybSc7XHJcblxyXG5jbGFzcyBQcm9maWxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEdyaWQgZmx1aWQ+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSB4c09mZnNldD17MH0gbWQ9ezh9IG1kT2Zmc2V0PXsyfSBsZz17Nn0gbGdPZmZzZXQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJzEwcHgnLCBtYXJnaW5Cb3R0b206ICcxMHB4JywgYm9yZGVyOiAnMnB4IHNvbGlkIGJsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsIGJvcmRlckNvbG9yOiAncmdiKDAsIDE4OCwgMjEyKSd9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsIGNvbG9yOiAncmdiKDAsIDE4OCwgMjEyKSd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNeSBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZScsIHdpZHRoOiAnOTAlJywgbWFyZ2luOiAnYXV0byd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUZvcm0gb25TdWJtaXQ9e3RoaXMucHJvcHMuY2FsY3VsYXRlQ2Fsb3JpZXNUYXJnZXR9IGNhbG9yaWVzVGFyZ2V0PXt0aGlzLnByb3BzLmNhbG9yaWVzVGFyZ2V0fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7UHJvZmlsZX07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvUHJvZmlsZS9Qcm9maWxlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmllbGQsIHJlZHV4Rm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xyXG5cclxuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ21hdGVyaWFsLXVpL1RleHRGaWVsZCc7XHJcbmltcG9ydCB7UmFkaW9CdXR0b24sIFJhZGlvQnV0dG9uR3JvdXB9IGZyb20gJ21hdGVyaWFsLXVpL1JhZGlvQnV0dG9uJztcclxuXHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3QtZmxleGJveC1ncmlkJztcclxuXHJcbmltcG9ydCBTZWxlY3RGaWVsZCBmcm9tICdtYXRlcmlhbC11aS9TZWxlY3RGaWVsZCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdtYXRlcmlhbC11aS9NZW51SXRlbSc7XHJcblxyXG5jb25zdCBmaWVsZFN0eWxlID0ge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG4gICAgbWFyZ2luTGVmdDogJzJweCdcclxufTtcclxuXHJcbmNvbnN0IGZpZWxkU3R5bGUyID0ge1xyXG4gICAgd2lkdGg6ICcxMDBweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAnNXB4JyxcclxuICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnXHJcbn07XHJcblxyXG5jbGFzcyBNeVRleHRGaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIGNvbnN0IHtpbnB1dCwgbWV0YSwgdHlwZSwgbGFiZWx9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICAgICAgey4uLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9e2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICBlcnJvclRleHQ9e21ldGEuZXJyb3IgJiYgJ3JlcXVpcmVkJ30vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBNeVJhZGlvRmllbGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBjb25zdCB7aW5wdXQsIG1ldGEsIGxhYmVsfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cCBcclxuICAgICAgICAgICAgICAgIG5hbWU9e2lucHV0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZVNlbGVjdGVkPXtpbnB1dC52YWx1ZX1cclxuICAgICAgICAgICAgICAgIHsuLi5pbnB1dH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyOiAnMXB4IHNvbGlkIGxpZ2h0Z3JheScsIG1hcmdpbjogJ2F1dG8nLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBoZWlnaHQ6ICc1MnB4JywgcGFkZGluZ1RvcDogJzEwcHgnfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJtYWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1hbGVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZmVtYWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZlbWFsZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1JhZGlvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTXlTZWxlY3RGaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIGNvbnN0IHtpbnB1dCwgbWV0YSwgbGFiZWx9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxTZWxlY3RGaWVsZFxyXG4gICAgICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9e2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgey4uLmlucHV0fSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGV2ZW50LCBrZXksIHBheWxvYWQpID0+IHtpbnB1dC5vbkNoYW5nZShwYXlsb2FkKTt9IH0gPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J25vbmUnIHByaW1hcnlUZXh0PVwiTm9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J21pbm9yJyBwcmltYXJ5VGV4dD1cIk1pbm9yIHdhbGtpbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdhdmVyYWdlJyBwcmltYXJ5VGV4dD1cIldhbGtpbmcgYW5kIG1pbm9yIGV4Y2VyY2lzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J2hlYXZ5JyBwcmltYXJ5VGV4dD1cIkhlYXZpZXIgZXhjZXJjaXNlIG9yIHNwb3J0c1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9J3BybycgcHJpbWFyeVRleHQ9XCJQcm9mZXNzaW9uYWwgZXhjZXJjaXNlIG9yIHNwb3J0c1wiIC8+XHJcbiAgICAgICAgICAgIDwvU2VsZWN0RmllbGQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmxldCBQcm9maWxlRm9ybSA9IHByb3BzID0+IHtcclxuXHJcbiAgICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgY2Fsb3JpZXNUYXJnZXQgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyBoYW5kbGVTdWJtaXQgfT5cclxuICAgICAgICAgICAgPEZpZWxkIG5hbWU9J2ZpcnN0TmFtZScgbGFiZWw9J0ZpcnN0IE5hbWUnIGNvbXBvbmVudD17TXlUZXh0RmllbGR9IC8+XHJcbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdsYXN0TmFtZScgbGFiZWw9J0xhc3QgTmFtZScgY29tcG9uZW50PXtNeVRleHRGaWVsZH0gLz5cclxuICAgICAgICAgICAgPEZpZWxkIG5hbWU9J2VtYWlsJyBsYWJlbD0nRS1tYWlsJyBjb21wb25lbnQ9e015VGV4dEZpZWxkfSB0eXBlPSdlbWFpbCcgLz5cclxuXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXs2fSBzdHlsZT17e21pbldpZHRoOiAnMjAwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J2hlaWdodCcgbGFiZWw9J0hlaWdodCcgY29tcG9uZW50PXtNeVRleHRGaWVsZH0gdHlwZT0nbnVtYmVyJyAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXs2fSAgc3R5bGU9e3ttaW5XaWR0aDogJzIwMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSd3ZWlnaHQnIGxhYmVsPSdXZWlnaHQnIGNvbXBvbmVudD17TXlUZXh0RmllbGR9IHR5cGU9J251bWJlcicgLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXs2fSBzdHlsZT17e21pbldpZHRoOiAnMjAwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J2FnZScgbGFiZWw9J0FnZScgY29tcG9uZW50PXtNeVRleHRGaWVsZH0gdHlwZT0nbnVtYmVyJyAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXs2fSBzdHlsZT17e21pbldpZHRoOiAnMjAwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J3NleCcgbGFiZWw9J1NleCcgY29tcG9uZW50PXtNeVJhZGlvRmllbGR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9J2FjdGl2aXR5JyBsYWJlbD0nUGh5c2ljYWwgYWN0aXZpdHknIGNvbXBvbmVudD17TXlTZWxlY3RGaWVsZH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIG1hcmdpblRvcDogJzEwcHgnLCBtYXJnaW5Cb3R0b206ICcyMHB4J319PlxyXG4gICAgICAgICAgICAgICAgPFJhaXNlZEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e319XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0NhbGN1bGF0ZSBDYWxvcmllcyBUYXJnZXQnXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzIwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6IDI0fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZ2IoMCwgMTg4LCAyMTIpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDBweCcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAnMTAwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYWxvcmllc1RhcmdldC50b0ZpeGVkKDApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDBweCcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0J1xyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrY2FsXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qIDxSYWlzZWRCdXR0b24gc3R5bGU9e3ttYXJnaW46ICdhdXRvJywgZGlzcGxheTogJ2Jsb2NrJywgd2lkdGg6JzEwMHB4JywgbWFyZ2luQm90dG9tOiAnMTBweCd9fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9J1NhdmUnXHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319IC8+ICovfVxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbn07XHJcblxyXG5Qcm9maWxlRm9ybSA9IHJlZHV4Rm9ybSh7XHJcbiAgLy8gYSB1bmlxdWUgbmFtZSBmb3IgdGhlIGZvcm1cclxuICAgIGZvcm06ICdwcm9maWxlJyxcclxuICAgIGRlc3Ryb3lPblVubW91bnQ6IGZhbHNlLFxyXG4gICAgaW5pdGlhbFZhbHVlczoge3NleDogJ2ZlbWFsZScsIGFjdGl2aXR5OiAnbWlub3InLCBmaXJzdE5hbWU6ICdyYWZhJywgaGVpZ2h0OiAnMjAwJywgd2VpZ2h0OiAnMTAwJywgYWdlOiAzMH1cclxufSkoUHJvZmlsZUZvcm0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUZvcm07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvUHJvZmlsZS9Qcm9maWxlRm9ybS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX2Fycm93RHJvcERvd24gPSByZXF1aXJlKCcuLi9zdmctaWNvbnMvbmF2aWdhdGlvbi9hcnJvdy1kcm9wLWRvd24nKTtcblxudmFyIF9hcnJvd0Ryb3BEb3duMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fycm93RHJvcERvd24pO1xuXG52YXIgX01lbnUgPSByZXF1aXJlKCcuLi9NZW51L01lbnUnKTtcblxudmFyIF9NZW51MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbnUpO1xuXG52YXIgX0NsZWFyRml4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvQ2xlYXJGaXgnKTtcblxudmFyIF9DbGVhckZpeDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9DbGVhckZpeCk7XG5cbnZhciBfUG9wb3ZlciA9IHJlcXVpcmUoJy4uL1BvcG92ZXIvUG9wb3ZlcicpO1xuXG52YXIgX1BvcG92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9wb3Zlcik7XG5cbnZhciBfUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsID0gcmVxdWlyZSgnLi4vUG9wb3Zlci9Qb3BvdmVyQW5pbWF0aW9uVmVydGljYWwnKTtcblxudmFyIF9Qb3BvdmVyQW5pbWF0aW9uVmVydGljYWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsKTtcblxudmFyIF9rZXljb2RlID0gcmVxdWlyZSgna2V5Y29kZScpO1xuXG52YXIgX2tleWNvZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5Y29kZSk7XG5cbnZhciBfZXZlbnRzID0gcmVxdWlyZSgnLi4vdXRpbHMvZXZlbnRzJyk7XG5cbnZhciBfZXZlbnRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V2ZW50cyk7XG5cbnZhciBfSWNvbkJ1dHRvbiA9IHJlcXVpcmUoJy4uL0ljb25CdXR0b24nKTtcblxudmFyIF9JY29uQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ljb25CdXR0b24pO1xuXG52YXIgX3Byb3BUeXBlczMgPSByZXF1aXJlKCcuLi91dGlscy9wcm9wVHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXM0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzMyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCkge1xuICB2YXIgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZDtcblxuICB2YXIgc3BhY2luZyA9IGNvbnRleHQubXVpVGhlbWUuYmFzZVRoZW1lLnNwYWNpbmc7XG4gIHZhciBwYWxldHRlID0gY29udGV4dC5tdWlUaGVtZS5iYXNlVGhlbWUucGFsZXR0ZTtcbiAgdmFyIGFjY2VudENvbG9yID0gY29udGV4dC5tdWlUaGVtZS5kcm9wRG93bk1lbnUuYWNjZW50Q29sb3I7XG4gIHJldHVybiB7XG4gICAgY29udHJvbDoge1xuICAgICAgY3Vyc29yOiBkaXNhYmxlZCA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcicsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgZmlsbDogYWNjZW50Q29sb3IsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHJpZ2h0OiBzcGFjaW5nLmRlc2t0b3BHdXR0ZXJMZXNzLFxuICAgICAgdG9wOiAoc3BhY2luZy5pY29uU2l6ZSAtIDI0KSAvIDIgKyBzcGFjaW5nLmRlc2t0b3BHdXR0ZXJNaW5pIC8gMlxuICAgIH0sXG4gICAgaWNvbkNoaWxkcmVuOiB7XG4gICAgICBmaWxsOiAnaW5oZXJpdCdcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICBjb2xvcjogZGlzYWJsZWQgPyBwYWxldHRlLmRpc2FibGVkQ29sb3IgOiBwYWxldHRlLnRleHRDb2xvcixcbiAgICAgIGhlaWdodDogc3BhY2luZy5kZXNrdG9wVG9vbGJhckhlaWdodCArICdweCcsXG4gICAgICBsaW5lSGVpZ2h0OiBzcGFjaW5nLmRlc2t0b3BUb29sYmFySGVpZ2h0ICsgJ3B4JyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHBhZGRpbmdMZWZ0OiBzcGFjaW5nLmRlc2t0b3BHdXR0ZXIsXG4gICAgICBwYWRkaW5nUmlnaHQ6IHNwYWNpbmcuaWNvblNpemUgKiAyICsgc3BhY2luZy5kZXNrdG9wR3V0dGVyTWluaSxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gICAgfSxcbiAgICBsYWJlbFdoZW5PcGVuOiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgdG9wOiBzcGFjaW5nLmRlc2t0b3BUb29sYmFySGVpZ2h0IC8gOFxuICAgIH0sXG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBmb250U2l6ZTogc3BhY2luZy5kZXNrdG9wRHJvcERvd25NZW51Rm9udFNpemUsXG4gICAgICBoZWlnaHQ6IHNwYWNpbmcuZGVza3RvcFN1YmhlYWRlckhlaWdodCxcbiAgICAgIGZvbnRGYW1pbHk6IGNvbnRleHQubXVpVGhlbWUuYmFzZVRoZW1lLmZvbnRGYW1pbHksXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KClcbiAgICB9LFxuICAgIHJvb3RXaGVuT3Blbjoge1xuICAgICAgb3BhY2l0eTogMVxuICAgIH0sXG4gICAgdW5kZXJsaW5lOiB7XG4gICAgICBib3JkZXJUb3A6ICdzb2xpZCAxcHggJyArIGFjY2VudENvbG9yLFxuICAgICAgYm90dG9tOiAxLFxuICAgICAgbGVmdDogMCxcbiAgICAgIG1hcmdpbjogJy0xcHggJyArIHNwYWNpbmcuZGVza3RvcEd1dHRlciArICdweCcsXG4gICAgICByaWdodDogMCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfVxuICB9O1xufVxuXG52YXIgRHJvcERvd25NZW51ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoRHJvcERvd25NZW51LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEcm9wRG93bk1lbnUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgRHJvcERvd25NZW51KTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IERyb3BEb3duTWVudS5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoRHJvcERvd25NZW51KSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBmYWxzZVxuICAgIH0sIF90aGlzLnJvb3ROb2RlID0gdW5kZWZpbmVkLCBfdGhpcy5hcnJvd05vZGUgPSB1bmRlZmluZWQsIF90aGlzLmhhbmRsZVRvdWNoVGFwQ29udHJvbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICghX3RoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG9wZW46ICFfdGhpcy5zdGF0ZS5vcGVuLFxuICAgICAgICAgIGFuY2hvckVsOiBfdGhpcy5yb290Tm9kZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2VNZW51ID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuY2xvc2UoZmFsc2UpO1xuICAgIH0sIF90aGlzLmhhbmRsZUVzY0tleURvd25NZW51ID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuY2xvc2UodHJ1ZSk7XG4gICAgfSwgX3RoaXMuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgc3dpdGNoICgoMCwgX2tleWNvZGUyLmRlZmF1bHQpKGV2ZW50KSkge1xuICAgICAgICBjYXNlICd1cCc6XG4gICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICBjYXNlICdzcGFjZSc6XG4gICAgICAgIGNhc2UgJ2VudGVyJzpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICBhbmNob3JFbDogX3RoaXMucm9vdE5vZGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVJdGVtVG91Y2hUYXAgPSBmdW5jdGlvbiAoZXZlbnQsIGNoaWxkLCBpbmRleCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLm11bHRpcGxlKSB7XG4gICAgICAgIGlmICghX3RoaXMuc3RhdGUub3Blbikge1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXZlbnQucGVyc2lzdCgpO1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgX3RoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIGluZGV4LCBjaGlsZC5wcm9wcy52YWx1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX3RoaXMuY2xvc2UoX2V2ZW50czIuZGVmYXVsdC5pc0tleWJvYXJkKGV2ZW50KSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCwgdmFsdWUpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5tdWx0aXBsZSAmJiBfdGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgdW5kZWZpbmVkLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuY2xvc2UgPSBmdW5jdGlvbiAoaXNLZXlib2FyZCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMub25DbG9zZSkge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0tleWJvYXJkKSB7XG4gICAgICAgICAgdmFyIGRyb3BBcnJvdyA9IF90aGlzLmFycm93Tm9kZTtcbiAgICAgICAgICB2YXIgZHJvcE5vZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUoZHJvcEFycm93KTtcbiAgICAgICAgICBkcm9wTm9kZS5mb2N1cygpO1xuICAgICAgICAgIGRyb3BBcnJvdy5zZXRLZXlib2FyZEZvY3VzKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgLy8gVGhlIG5lc3RlZCBzdHlsZXMgZm9yIGRyb3AtZG93bi1tZW51IGFyZSBtb2RpZmllZCBieSB0b29sYmFyIGFuZCBwb3NzaWJseVxuICAvLyBvdGhlciB1c2VyIGNvbXBvbmVudHMsIHNvIGl0IHdpbGwgZ2l2ZSBmdWxsIGFjY2VzcyB0byBpdHMganMgc3R5bGVzIHJhdGhlclxuICAvLyB0aGFuIGp1c3QgdGhlIHBhcmVudC5cblxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKERyb3BEb3duTWVudSwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9XaWR0aCkge1xuICAgICAgICB0aGlzLnNldFdpZHRoKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5vcGVuSW1tZWRpYXRlbHkpIHtcbiAgICAgICAgLy8gVE9ETzogVGVtcG9yYXJ5IGZpeCB0byBtYWtlIG9wZW5JbW1lZGlhdGVseSB3b3JrIHdpdGggcG9wb3Zlci5cbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tZGlkLW1vdW50LXNldC1zdGF0ZSAqL1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgICBhbmNob3JFbDogX3RoaXMyLnJvb3ROb2RlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDApO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0L25vLWRpZC1tb3VudC1zZXQtc3RhdGUgKi9cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmF1dG9XaWR0aCkge1xuICAgICAgICB0aGlzLnNldFdpZHRoKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SW5wdXROb2RlJyxcblxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaXMgZGVwcmVjYXRlZCBidXQgc3RpbGwgaGVyZSBiZWNhdXNlIHRoZSBUZXh0RmllbGRcbiAgICAgKiBuZWVkIGl0IGluIG9yZGVyIHRvIHdvcmsuIFRPRE86IFRoYXQgd2lsbCBiZSBhZGRyZXNzZWQgbGF0ZXIuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldElucHV0Tm9kZSgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgcm9vdE5vZGUgPSB0aGlzLnJvb3ROb2RlO1xuXG4gICAgICByb290Tm9kZS5mb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFfdGhpczMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgICBfdGhpczMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbjogIV90aGlzMy5zdGF0ZS5vcGVuLFxuICAgICAgICAgICAgYW5jaG9yRWw6IF90aGlzMy5yb290Tm9kZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gcm9vdE5vZGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0V2lkdGgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRXaWR0aCgpIHtcbiAgICAgIHZhciBlbCA9IHRoaXMucm9vdE5vZGU7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuc3R5bGUgfHwgIXRoaXMucHJvcHMuc3R5bGUuaGFzT3duUHJvcGVydHkoJ3dpZHRoJykpIHtcbiAgICAgICAgZWwuc3R5bGUud2lkdGggPSAnYXV0byc7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFuaW1hdGVkID0gX3Byb3BzLmFuaW1hdGVkLFxuICAgICAgICAgIGFuaW1hdGlvbiA9IF9wcm9wcy5hbmltYXRpb24sXG4gICAgICAgICAgYXV0b1dpZHRoID0gX3Byb3BzLmF1dG9XaWR0aCxcbiAgICAgICAgICBtdWx0aXBsZSA9IF9wcm9wcy5tdWx0aXBsZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkLFxuICAgICAgICAgIGljb25TdHlsZSA9IF9wcm9wcy5pY29uU3R5bGUsXG4gICAgICAgICAgbGFiZWxTdHlsZSA9IF9wcm9wcy5sYWJlbFN0eWxlLFxuICAgICAgICAgIGxpc3RTdHlsZSA9IF9wcm9wcy5saXN0U3R5bGUsXG4gICAgICAgICAgbWF4SGVpZ2h0ID0gX3Byb3BzLm1heEhlaWdodCxcbiAgICAgICAgICBtZW51U3R5bGVQcm9wID0gX3Byb3BzLm1lbnVTdHlsZSxcbiAgICAgICAgICBzZWxlY3Rpb25SZW5kZXJlciA9IF9wcm9wcy5zZWxlY3Rpb25SZW5kZXJlcixcbiAgICAgICAgICBvbkNsb3NlID0gX3Byb3BzLm9uQ2xvc2UsXG4gICAgICAgICAgb3BlbkltbWVkaWF0ZWx5ID0gX3Byb3BzLm9wZW5JbW1lZGlhdGVseSxcbiAgICAgICAgICBtZW51SXRlbVN0eWxlID0gX3Byb3BzLm1lbnVJdGVtU3R5bGUsXG4gICAgICAgICAgc2VsZWN0ZWRNZW51SXRlbVN0eWxlID0gX3Byb3BzLnNlbGVjdGVkTWVudUl0ZW1TdHlsZSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICB1bmRlcmxpbmVTdHlsZSA9IF9wcm9wcy51bmRlcmxpbmVTdHlsZSxcbiAgICAgICAgICB2YWx1ZSA9IF9wcm9wcy52YWx1ZSxcbiAgICAgICAgICBpY29uQnV0dG9uID0gX3Byb3BzLmljb25CdXR0b24sXG4gICAgICAgICAgYW5jaG9yT3JpZ2luID0gX3Byb3BzLmFuY2hvck9yaWdpbixcbiAgICAgICAgICB0YXJnZXRPcmlnaW4gPSBfcHJvcHMudGFyZ2V0T3JpZ2luLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2FuaW1hdGVkJywgJ2FuaW1hdGlvbicsICdhdXRvV2lkdGgnLCAnbXVsdGlwbGUnLCAnY2hpbGRyZW4nLCAnY2xhc3NOYW1lJywgJ2Rpc2FibGVkJywgJ2ljb25TdHlsZScsICdsYWJlbFN0eWxlJywgJ2xpc3RTdHlsZScsICdtYXhIZWlnaHQnLCAnbWVudVN0eWxlJywgJ3NlbGVjdGlvblJlbmRlcmVyJywgJ29uQ2xvc2UnLCAnb3BlbkltbWVkaWF0ZWx5JywgJ21lbnVJdGVtU3R5bGUnLCAnc2VsZWN0ZWRNZW51SXRlbVN0eWxlJywgJ3N0eWxlJywgJ3VuZGVybGluZVN0eWxlJywgJ3ZhbHVlJywgJ2ljb25CdXR0b24nLCAnYW5jaG9yT3JpZ2luJywgJ3RhcmdldE9yaWdpbiddKTtcbiAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGFuY2hvckVsID0gX3N0YXRlLmFuY2hvckVsLFxuICAgICAgICAgIG9wZW4gPSBfc3RhdGUub3BlbjtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcblxuICAgICAgdmFyIGRpc3BsYXlWYWx1ZSA9ICcnO1xuICAgICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgaWYgKGNoaWxkICYmIHZhbHVlID09PSBjaGlsZC5wcm9wcy52YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHNlbGVjdGlvblJlbmRlcmVyKSB7XG4gICAgICAgICAgICAgIGRpc3BsYXlWYWx1ZSA9IHNlbGVjdGlvblJlbmRlcmVyKHZhbHVlLCBjaGlsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBUaGlzIHdpbGwgbmVlZCB0byBiZSBpbXByb3ZlZCAoaW4gY2FzZSBwcmltYXJ5VGV4dCBpcyBhIG5vZGUpXG4gICAgICAgICAgICAgIGRpc3BsYXlWYWx1ZSA9IGNoaWxkLnByb3BzLmxhYmVsIHx8IGNoaWxkLnByb3BzLnByaW1hcnlUZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICAgIHZhciBzZWxlY3Rpb25SZW5kZXJlckNoaWxkcmVuID0gW107XG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICBpZiAoY2hpbGQgJiYgdmFsdWUgJiYgdmFsdWUuaW5kZXhPZihjaGlsZC5wcm9wcy52YWx1ZSkgPiAtMSkge1xuICAgICAgICAgICAgaWYgKHNlbGVjdGlvblJlbmRlcmVyKSB7XG4gICAgICAgICAgICAgIHZhbHVlcy5wdXNoKGNoaWxkLnByb3BzLnZhbHVlKTtcbiAgICAgICAgICAgICAgc2VsZWN0aW9uUmVuZGVyZXJDaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhbHVlcy5wdXNoKGNoaWxkLnByb3BzLmxhYmVsIHx8IGNoaWxkLnByb3BzLnByaW1hcnlUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRpc3BsYXlWYWx1ZSA9IFtdO1xuICAgICAgICBpZiAoc2VsZWN0aW9uUmVuZGVyZXIpIHtcbiAgICAgICAgICBkaXNwbGF5VmFsdWUgPSBzZWxlY3Rpb25SZW5kZXJlcih2YWx1ZXMsIHNlbGVjdGlvblJlbmRlcmVyQ2hpbGRyZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BsYXlWYWx1ZSA9IHZhbHVlcy5qb2luKCcsICcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBtZW51U3R5bGUgPSB2b2lkIDA7XG4gICAgICBpZiAoYW5jaG9yRWwgJiYgIWF1dG9XaWR0aCkge1xuICAgICAgICBtZW51U3R5bGUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe1xuICAgICAgICAgIHdpZHRoOiBhbmNob3JFbC5jbGllbnRXaWR0aFxuICAgICAgICB9LCBtZW51U3R5bGVQcm9wKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbnVTdHlsZSA9IG1lbnVTdHlsZVByb3A7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCB7XG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYobm9kZSkge1xuICAgICAgICAgICAgX3RoaXM0LnJvb3ROb2RlID0gbm9kZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLnJvb3QsIG9wZW4gJiYgc3R5bGVzLnJvb3RXaGVuT3Blbiwgc3R5bGUpKVxuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX0NsZWFyRml4Mi5kZWZhdWx0LFxuICAgICAgICAgIHsgc3R5bGU6IHN0eWxlcy5jb250cm9sLCBvblRvdWNoVGFwOiB0aGlzLmhhbmRsZVRvdWNoVGFwQ29udHJvbCB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLmxhYmVsLCBvcGVuICYmIHN0eWxlcy5sYWJlbFdoZW5PcGVuLCBsYWJlbFN0eWxlKSkgfSxcbiAgICAgICAgICAgIGRpc3BsYXlWYWx1ZVxuICAgICAgICAgICksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBfSWNvbkJ1dHRvbjIuZGVmYXVsdCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgICAgICBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93bixcbiAgICAgICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYobm9kZSkge1xuICAgICAgICAgICAgICAgIF90aGlzNC5hcnJvd05vZGUgPSBub2RlO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMuaWNvbiwgaWNvblN0eWxlKSxcbiAgICAgICAgICAgICAgaWNvblN0eWxlOiBzdHlsZXMuaWNvbkNoaWxkcmVuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWNvbkJ1dHRvblxuICAgICAgICAgICksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMudW5kZXJsaW5lLCB1bmRlcmxpbmVTdHlsZSkpIH0pXG4gICAgICAgICksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9Qb3BvdmVyMi5kZWZhdWx0LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFuY2hvck9yaWdpbjogYW5jaG9yT3JpZ2luLFxuICAgICAgICAgICAgdGFyZ2V0T3JpZ2luOiB0YXJnZXRPcmlnaW4sXG4gICAgICAgICAgICBhbmNob3JFbDogYW5jaG9yRWwsXG4gICAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGlvbiB8fCBfUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsMi5kZWZhdWx0LFxuICAgICAgICAgICAgb3Blbjogb3BlbixcbiAgICAgICAgICAgIGFuaW1hdGVkOiBhbmltYXRlZCxcbiAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlOiB0aGlzLmhhbmRsZVJlcXVlc3RDbG9zZU1lbnVcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgX01lbnUyLmRlZmF1bHQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG11bHRpcGxlOiBtdWx0aXBsZSxcbiAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHQsXG4gICAgICAgICAgICAgIGRlc2t0b3A6IHRydWUsXG4gICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgb25Fc2NLZXlEb3duOiB0aGlzLmhhbmRsZUVzY0tleURvd25NZW51LFxuICAgICAgICAgICAgICBzdHlsZTogbWVudVN0eWxlLFxuICAgICAgICAgICAgICBsaXN0U3R5bGU6IGxpc3RTdHlsZSxcbiAgICAgICAgICAgICAgb25JdGVtVG91Y2hUYXA6IHRoaXMuaGFuZGxlSXRlbVRvdWNoVGFwLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVDaGFuZ2UsXG4gICAgICAgICAgICAgIG1lbnVJdGVtU3R5bGU6IG1lbnVJdGVtU3R5bGUsXG4gICAgICAgICAgICAgIHNlbGVjdGVkTWVudUl0ZW1TdHlsZTogc2VsZWN0ZWRNZW51SXRlbVN0eWxlLFxuICAgICAgICAgICAgICBhdXRvV2lkdGg6IGF1dG9XaWR0aCxcbiAgICAgICAgICAgICAgd2lkdGg6ICFhdXRvV2lkdGggJiYgbWVudVN0eWxlID8gbWVudVN0eWxlLndpZHRoIDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRHJvcERvd25NZW51O1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuRHJvcERvd25NZW51Lm11aU5hbWUgPSAnRHJvcERvd25NZW51JztcbkRyb3BEb3duTWVudS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFuaW1hdGVkOiB0cnVlLFxuICBhdXRvV2lkdGg6IHRydWUsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgaWNvbkJ1dHRvbjogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2Fycm93RHJvcERvd24yLmRlZmF1bHQsIG51bGwpLFxuICBvcGVuSW1tZWRpYXRlbHk6IGZhbHNlLFxuICBtYXhIZWlnaHQ6IDUwMCxcbiAgbXVsdGlwbGU6IGZhbHNlLFxuICBhbmNob3JPcmlnaW46IHtcbiAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgaG9yaXpvbnRhbDogJ2xlZnQnXG4gIH1cbn07XG5Ecm9wRG93bk1lbnUuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcbkRyb3BEb3duTWVudS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBwb2ludCBvbiB0aGUgYW5jaG9yIHRoYXQgdGhlIHBvcG92ZXInc1xuICAgKiBgdGFyZ2V0T3JpZ2luYCB3aWxsIGF0dGFjaCB0by5cbiAgICogT3B0aW9uczpcbiAgICogdmVydGljYWw6IFt0b3AsIGNlbnRlciwgYm90dG9tXVxuICAgKiBob3Jpem9udGFsOiBbbGVmdCwgbWlkZGxlLCByaWdodF0uXG4gICAqL1xuICBhbmNob3JPcmlnaW46IF9wcm9wVHlwZXM0LmRlZmF1bHQub3JpZ2luLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIHBvcG92ZXIgd2lsbCBhcHBseSB0cmFuc2l0aW9ucyB3aGVuXG4gICAqIGl0IGdldHMgYWRkZWQgdG8gdGhlIERPTS5cbiAgICovXG4gIGFuaW1hdGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdCBhbmltYXRpb24gY29tcG9uZW50IHVzZWQuXG4gICAqL1xuICBhbmltYXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIFRoZSB3aWR0aCB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgc2V0IGFjY29yZGluZyB0byB0aGUgaXRlbXMgaW5zaWRlIHRoZSBtZW51LlxuICAgKiBUbyBjb250cm9sIHRoaXMgd2lkdGggaW4gY3NzIGluc3RlYWQsIHNldCB0aGlzIHByb3AgdG8gYGZhbHNlYC5cbiAgICovXG4gIGF1dG9XaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhlIGBNZW51SXRlbWBzIHRvIHBvcHVsYXRlIHRoZSBgTWVudWAgd2l0aC4gSWYgdGhlIGBNZW51SXRlbXNgIGhhdmUgdGhlXG4gICAqIHByb3AgYGxhYmVsYCB0aGF0IHZhbHVlIHdpbGwgYmUgdXNlZCB0byByZW5kZXIgdGhlIHJlcHJlc2VudGF0aW9uIG9mIHRoYXRcbiAgICogaXRlbSB3aXRoaW4gdGhlIGZpZWxkLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBjc3MgY2xhc3MgbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBtZW51LlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlcyBkZWZhdWx0IGBTdmdJY29uYCBkcm9wZG93biBhcnJvdyBjb21wb25lbnQuXG4gICAqL1xuICBpY29uQnV0dG9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBPdmVycmlkZXMgdGhlIHN0eWxlcyBvZiBpY29uIGVsZW1lbnQuXG4gICAqL1xuICBpY29uU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGVzIHRoZSBzdHlsZXMgb2YgbGFiZWwgd2hlbiB0aGUgYERyb3BEb3duTWVudWAgaXMgaW5hY3RpdmUuXG4gICAqL1xuICBsYWJlbFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBzdHlsZSBvYmplY3QgdG8gdXNlIHRvIG92ZXJyaWRlIHVuZGVybHlpbmcgbGlzdCBzdHlsZS5cbiAgICovXG4gIGxpc3RTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSBoZWlnaHQgb2YgdGhlIGBNZW51YCB3aGVuIGl0IGlzIGRpc3BsYXllZC5cbiAgICovXG4gIG1heEhlaWdodDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiBtZW51IGl0ZW1zLlxuICAgKi9cbiAgbWVudUl0ZW1TdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZXMgdGhlIHN0eWxlcyBvZiBgTWVudWAgd2hlbiB0aGUgYERyb3BEb3duTWVudWAgaXMgZGlzcGxheWVkLlxuICAgKi9cbiAgbWVudVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIElmIHRydWUsIGB2YWx1ZWAgbXVzdCBiZSBhbiBhcnJheSBhbmQgdGhlIG1lbnUgd2lsbCBzdXBwb3J0XG4gICAqIG11bHRpcGxlIHNlbGVjdGlvbnMuXG4gICAqL1xuICBtdWx0aXBsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiBhIG1lbnUgaXRlbSBpcyBjbGlja2VkLCBvdGhlciB0aGFuIHRoZSBvbmUgY3VycmVudGx5IHNlbGVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVG91Y2hUYXAgZXZlbnQgdGFyZ2V0aW5nIHRoZSBtZW51IGl0ZW0gdGhhdCB3YXMgY2xpY2tlZC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGtleSBUaGUgaW5kZXggb2YgdGhlIGNsaWNrZWQgbWVudSBpdGVtIGluIHRoZSBgY2hpbGRyZW5gIGNvbGxlY3Rpb24uXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZSBJZiBgbXVsdGlwbGVgIGlzIHRydWUsIHRoZSBtZW51J3MgYHZhbHVlYFxuICAgKiBhcnJheSB3aXRoIGVpdGhlciB0aGUgbWVudSBpdGVtJ3MgYHZhbHVlYCBhZGRlZCAoaWZcbiAgICogaXQgd2Fzbid0IGFscmVhZHkgc2VsZWN0ZWQpIG9yIG9taXR0ZWQgKGlmIGl0IHdhcyBhbHJlYWR5IHNlbGVjdGVkKS5cbiAgICogT3RoZXJ3aXNlLCB0aGUgYHZhbHVlYCBvZiB0aGUgbWVudSBpdGVtLlxuICAgKi9cbiAgb25DaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gdGhlIG1lbnUgaXMgY2xvc2VkLlxuICAgKi9cbiAgb25DbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gaGF2ZSB0aGUgYERyb3BEb3duTWVudWAgYXV0b21hdGljYWxseSBvcGVuIG9uIG1vdW50LlxuICAgKi9cbiAgb3BlbkltbWVkaWF0ZWx5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiBzZWxlY3RlZCBtZW51IGl0ZW1zLlxuICAgKi9cbiAgc2VsZWN0ZWRNZW51SXRlbVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gYSBtZW51IGl0ZW0gaXMgY2xpY2tlZCwgb3RoZXIgdGhhbiB0aGUgb25lIGN1cnJlbnRseSBzZWxlY3RlZC5cbiAgICpcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlIElmIGBtdWx0aXBsZWAgaXMgdHJ1ZSwgdGhlIG1lbnUncyBgdmFsdWVgXG4gICAqIGFycmF5IHdpdGggZWl0aGVyIHRoZSBtZW51IGl0ZW0ncyBgdmFsdWVgIGFkZGVkIChpZlxuICAgKiBpdCB3YXNuJ3QgYWxyZWFkeSBzZWxlY3RlZCkgb3Igb21pdHRlZCAoaWYgaXQgd2FzIGFscmVhZHkgc2VsZWN0ZWQpLlxuICAgKiBPdGhlcndpc2UsIHRoZSBgdmFsdWVgIG9mIHRoZSBtZW51IGl0ZW0uXG4gICAqIEBwYXJhbSB7YW55fSBtZW51SXRlbSBUaGUgc2VsZWN0ZWQgYE1lbnVJdGVtYC5cbiAgICogSWYgYG11bHRpcGxlYCBpcyB0cnVlLCB0aGlzIHdpbGwgYmUgYW4gYXJyYXkgd2l0aCB0aGUgYE1lbnVJdGVtYHMgbWF0Y2hpbmcgdGhlIGB2YWx1ZWBzIHBhcmFtZXRlci5cbiAgICovXG4gIHNlbGVjdGlvblJlbmRlcmVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgcG9pbnQgb24gdGhlIHBvcG92ZXIgd2hpY2ggd2lsbCBhdHRhY2ggdG9cbiAgICogdGhlIGFuY2hvcidzIG9yaWdpbi5cbiAgICogT3B0aW9uczpcbiAgICogdmVydGljYWw6IFt0b3AsIGNlbnRlciwgYm90dG9tXVxuICAgKiBob3Jpem9udGFsOiBbbGVmdCwgbWlkZGxlLCByaWdodF0uXG4gICAqL1xuICB0YXJnZXRPcmlnaW46IF9wcm9wVHlwZXM0LmRlZmF1bHQub3JpZ2luLFxuICAvKipcbiAgICogT3ZlcnJpZGVzIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSB1bmRlcmxpbmUuXG4gICAqL1xuICB1bmRlcmxpbmVTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiBgbXVsdGlwbGVgIGlzIHRydWUsIGFuIGFycmF5IG9mIHRoZSBgdmFsdWVgcyBvZiB0aGUgc2VsZWN0ZWRcbiAgICogbWVudSBpdGVtcy4gT3RoZXJ3aXNlLCB0aGUgYHZhbHVlYCBvZiB0aGUgc2VsZWN0ZWQgbWVudSBpdGVtLlxuICAgKiBJZiBwcm92aWRlZCwgdGhlIG1lbnUgd2lsbCBiZSBhIGNvbnRyb2xsZWQgY29tcG9uZW50LlxuICAgKi9cbiAgdmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBEcm9wRG93bk1lbnU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL0Ryb3BEb3duTWVudS9Ecm9wRG93bk1lbnUuanNcbi8vIG1vZHVsZSBpZCA9IDE0OTlcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5NZW51SXRlbSA9IGV4cG9ydHMuRHJvcERvd25NZW51ID0gdW5kZWZpbmVkO1xuXG52YXIgX0Ryb3BEb3duTWVudTIgPSByZXF1aXJlKCcuL0Ryb3BEb3duTWVudScpO1xuXG52YXIgX0Ryb3BEb3duTWVudTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ecm9wRG93bk1lbnUyKTtcblxudmFyIF9NZW51SXRlbTIgPSByZXF1aXJlKCcuLi9NZW51SXRlbS9NZW51SXRlbScpO1xuXG52YXIgX01lbnVJdGVtMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbnVJdGVtMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuRHJvcERvd25NZW51ID0gX0Ryb3BEb3duTWVudTMuZGVmYXVsdDtcbmV4cG9ydHMuTWVudUl0ZW0gPSBfTWVudUl0ZW0zLmRlZmF1bHQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfRHJvcERvd25NZW51My5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9Ecm9wRG93bk1lbnUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE1MDBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfUGFwZXIgPSByZXF1aXJlKCcuLi9QYXBlcicpO1xuXG52YXIgX1BhcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhcGVyKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxudmFyIF9wcm9wVHlwZXMzID0gcmVxdWlyZSgnLi4vdXRpbHMvcHJvcFR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlczMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQsIHN0YXRlKSB7XG4gIHZhciB0YXJnZXRPcmlnaW4gPSBwcm9wcy50YXJnZXRPcmlnaW47XG4gIHZhciBvcGVuID0gc3RhdGUub3BlbjtcbiAgdmFyIG11aVRoZW1lID0gY29udGV4dC5tdWlUaGVtZTtcblxuICB2YXIgaG9yaXpvbnRhbCA9IHRhcmdldE9yaWdpbi5ob3Jpem9udGFsLnJlcGxhY2UoJ21pZGRsZScsICd2ZXJ0aWNhbCcpO1xuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICB6SW5kZXg6IG11aVRoZW1lLnpJbmRleC5wb3BvdmVyLFxuICAgICAgb3BhY2l0eTogb3BlbiA/IDEgOiAwLFxuICAgICAgdHJhbnNmb3JtOiBvcGVuID8gJ3NjYWxlWSgxKScgOiAnc2NhbGVZKDApJyxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogaG9yaXpvbnRhbCArICcgJyArIHRhcmdldE9yaWdpbi52ZXJ0aWNhbCxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCc0NTBtcycsIFsndHJhbnNmb3JtJywgJ29wYWNpdHknXSksXG4gICAgICBtYXhIZWlnaHQ6ICcxMDAlJ1xuICAgIH1cbiAgfTtcbn1cblxudmFyIFBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBQb3BvdmVyQW5pbWF0aW9uVmVydGljYWwuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogZmFsc2VcbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC9uby1kaWQtbW91bnQtc2V0LXN0YXRlXG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlbjogbmV4dFByb3BzLm9wZW5cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgekRlcHRoID0gX3Byb3BzLnpEZXB0aDtcblxuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCwgdGhpcy5zdGF0ZSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1BhcGVyMi5kZWZhdWx0LFxuICAgICAgICB7XG4gICAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpLFxuICAgICAgICAgIHpEZXB0aDogekRlcHRoLFxuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBQb3BvdmVyQW5pbWF0aW9uVmVydGljYWw7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5Qb3BvdmVyQW5pbWF0aW9uVmVydGljYWwuZGVmYXVsdFByb3BzID0ge1xuICBzdHlsZToge30sXG4gIHpEZXB0aDogMVxufTtcblBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbC5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgb3BlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICB0YXJnZXRPcmlnaW46IF9wcm9wVHlwZXM0LmRlZmF1bHQub3JpZ2luLmlzUmVxdWlyZWQsXG4gIHpEZXB0aDogX3Byb3BUeXBlczQuZGVmYXVsdC56RGVwdGhcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvUG9wb3Zlci9Qb3BvdmVyQW5pbWF0aW9uVmVydGljYWwuanNcbi8vIG1vZHVsZSBpZCA9IDE1MDFcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfUmFkaW9CdXR0b24gPSByZXF1aXJlKCcuL1JhZGlvQnV0dG9uJyk7XG5cbnZhciBfUmFkaW9CdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUmFkaW9CdXR0b24pO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFJhZGlvQnV0dG9uR3JvdXAgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShSYWRpb0J1dHRvbkdyb3VwLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSYWRpb0J1dHRvbkdyb3VwKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFJhZGlvQnV0dG9uR3JvdXApO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gUmFkaW9CdXR0b25Hcm91cC5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoUmFkaW9CdXR0b25Hcm91cCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgbnVtYmVyQ2hlY2tlZFJhZGlvQnV0dG9uczogMCxcbiAgICAgIHNlbGVjdGVkOiAnJ1xuICAgIH0sIF90aGlzLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCwgbmV3U2VsZWN0aW9uKSB7XG4gICAgICBfdGhpcy51cGRhdGVSYWRpb0J1dHRvbnMobmV3U2VsZWN0aW9uKTtcblxuICAgICAgLy8gU3VjY2Vzc2Z1bCB1cGRhdGVcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5udW1iZXJDaGVja2VkUmFkaW9CdXR0b25zID09PSAwKSB7XG4gICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoYW5nZSkgX3RoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIG5ld1NlbGVjdGlvbik7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFJhZGlvQnV0dG9uR3JvdXAsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBjbnQgPSAwO1xuICAgICAgdmFyIHNlbGVjdGVkID0gJyc7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB2YWx1ZVNlbGVjdGVkID0gX3Byb3BzLnZhbHVlU2VsZWN0ZWQsXG4gICAgICAgICAgZGVmYXVsdFNlbGVjdGVkID0gX3Byb3BzLmRlZmF1bHRTZWxlY3RlZDtcblxuICAgICAgaWYgKHZhbHVlU2VsZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzZWxlY3RlZCA9IHZhbHVlU2VsZWN0ZWQ7XG4gICAgICB9IGVsc2UgaWYgKGRlZmF1bHRTZWxlY3RlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNlbGVjdGVkID0gZGVmYXVsdFNlbGVjdGVkO1xuICAgICAgfVxuXG4gICAgICBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4uZm9yRWFjaCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgIGlmIChfdGhpczIuaGFzQ2hlY2tBdHRyaWJ1dGUob3B0aW9uKSkgY250Kys7XG4gICAgICB9LCB0aGlzKTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG51bWJlckNoZWNrZWRSYWRpb0J1dHRvbnM6IGNudCxcbiAgICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlU2VsZWN0ZWQnKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzZWxlY3RlZDogbmV4dFByb3BzLnZhbHVlU2VsZWN0ZWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGFzQ2hlY2tBdHRyaWJ1dGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNDaGVja0F0dHJpYnV0ZShyYWRpb0J1dHRvbikge1xuICAgICAgcmV0dXJuIHJhZGlvQnV0dG9uLnByb3BzLmhhc093blByb3BlcnR5KCdjaGVja2VkJykgJiYgcmFkaW9CdXR0b24ucHJvcHMuY2hlY2tlZDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVSYWRpb0J1dHRvbnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVSYWRpb0J1dHRvbnMobmV3U2VsZWN0aW9uKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5udW1iZXJDaGVja2VkUmFkaW9CdXR0b25zID09PSAwKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZDogbmV3U2VsZWN0aW9uIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ01hdGVyaWFsLVVJOiBDYW5ub3Qgc2VsZWN0IGEgZGlmZmVyZW50IHJhZGlvIGJ1dHRvbiB3aGlsZSBhbm90aGVyIHJhZGlvIGJ1dHRvblxcbiAgICAgICAgaGFzIHRoZSBcXCdjaGVja2VkXFwnIHByb3BlcnR5IHNldCB0byB0cnVlLicpIDogdm9pZCAwO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFNlbGVjdGVkVmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTZWxlY3RlZFZhbHVlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuc2VsZWN0ZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0U2VsZWN0ZWRWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFNlbGVjdGVkVmFsdWUobmV3U2VsZWN0aW9uVmFsdWUpIHtcbiAgICAgIHRoaXMudXBkYXRlUmFkaW9CdXR0b25zKG5ld1NlbGVjdGlvblZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbGVhclZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXJWYWx1ZSgpIHtcbiAgICAgIHRoaXMuc2V0U2VsZWN0ZWRWYWx1ZSgnJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cblxuICAgICAgdmFyIG9wdGlvbnMgPSBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgdmFyIF9vcHRpb24kcHJvcHMgPSBvcHRpb24ucHJvcHMsXG4gICAgICAgICAgICBuYW1lID0gX29wdGlvbiRwcm9wcy5uYW1lLFxuICAgICAgICAgICAgdmFsdWUgPSBfb3B0aW9uJHByb3BzLnZhbHVlLFxuICAgICAgICAgICAgbGFiZWwgPSBfb3B0aW9uJHByb3BzLmxhYmVsLFxuICAgICAgICAgICAgb25DaGVjayA9IF9vcHRpb24kcHJvcHMub25DaGVjayxcbiAgICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX29wdGlvbiRwcm9wcywgWyduYW1lJywgJ3ZhbHVlJywgJ2xhYmVsJywgJ29uQ2hlY2snXSk7XG5cblxuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1JhZGlvQnV0dG9uMi5kZWZhdWx0LCAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwge1xuICAgICAgICAgIHJlZjogb3B0aW9uLnByb3BzLnZhbHVlLFxuICAgICAgICAgIG5hbWU6IF90aGlzMy5wcm9wcy5uYW1lLFxuICAgICAgICAgIGtleTogb3B0aW9uLnByb3BzLnZhbHVlLFxuICAgICAgICAgIHZhbHVlOiBvcHRpb24ucHJvcHMudmFsdWUsXG4gICAgICAgICAgbGFiZWw6IG9wdGlvbi5wcm9wcy5sYWJlbCxcbiAgICAgICAgICBsYWJlbFBvc2l0aW9uOiBfdGhpczMucHJvcHMubGFiZWxQb3NpdGlvbixcbiAgICAgICAgICBvbkNoZWNrOiBfdGhpczMuaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgIGNoZWNrZWQ6IG9wdGlvbi5wcm9wcy52YWx1ZSA9PT0gX3RoaXMzLnN0YXRlLnNlbGVjdGVkXG4gICAgICAgIH0pKTtcbiAgICAgIH0sIHRoaXMpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCB0aGlzLnByb3BzLnN0eWxlKSksXG4gICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZVxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gUmFkaW9CdXR0b25Hcm91cDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblJhZGlvQnV0dG9uR3JvdXAuZGVmYXVsdFByb3BzID0ge1xuICBzdHlsZToge31cbn07XG5SYWRpb0J1dHRvbkdyb3VwLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5SYWRpb0J1dHRvbkdyb3VwLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIFNob3VsZCBiZSB1c2VkIHRvIHBhc3MgYFJhZGlvQnV0dG9uYCBjb21wb25lbnRzLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBDU1MgY2xhc3MgbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBgdmFsdWVgIHByb3BlcnR5IG9mIHRoZSByYWRpbyBidXR0b24gdGhhdCB3aWxsIGJlXG4gICAqIHNlbGVjdGVkIGJ5IGRlZmF1bHQuIFRoaXMgdGFrZXMgcHJlY2VkZW5jZSBvdmVyIHRoZSBgY2hlY2tlZGAgcHJvcGVydHlcbiAgICogb2YgdGhlIGBSYWRpb0J1dHRvbmAgZWxlbWVudHMuXG4gICAqL1xuICBkZWZhdWx0U2VsZWN0ZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55LFxuICAvKipcbiAgICogV2hlcmUgdGhlIGxhYmVsIHdpbGwgYmUgcGxhY2VkIGZvciBhbGwgY2hpbGQgcmFkaW8gYnV0dG9ucy5cbiAgICogVGhpcyB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgdGhlIGBsYWJlbFBvc2l0aW9uYCBwcm9wZXJ0eSBvZiB0aGVcbiAgICogYFJhZGlvQnV0dG9uYCBlbGVtZW50cy5cbiAgICovXG4gIGxhYmVsUG9zaXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoWydsZWZ0JywgJ3JpZ2h0J10pLFxuICAvKipcbiAgICogVGhlIG5hbWUgdGhhdCB3aWxsIGJlIGFwcGxpZWQgdG8gYWxsIGNoaWxkIHJhZGlvIGJ1dHRvbnMuXG4gICAqL1xuICBuYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBmaXJlZCB3aGVuIGEgcmFkaW8gYnV0dG9uIGhhc1xuICAgKiBiZWVuIGNoZWNrZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBgY2hhbmdlYCBldmVudCB0YXJnZXRpbmcgdGhlIHNlbGVjdGVkXG4gICAqIHJhZGlvIGJ1dHRvbi5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgYHZhbHVlYCBvZiB0aGUgc2VsZWN0ZWQgcmFkaW8gYnV0dG9uLlxuICAgKi9cbiAgb25DaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgYHZhbHVlYCBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHJhZGlvIGJ1dHRvbi5cbiAgICovXG4gIHZhbHVlU2VsZWN0ZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBSYWRpb0J1dHRvbkdyb3VwO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9SYWRpb0J1dHRvbi9SYWRpb0J1dHRvbkdyb3VwLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuUmFkaW9CdXR0b25Hcm91cCA9IGV4cG9ydHMuUmFkaW9CdXR0b24gPSB1bmRlZmluZWQ7XG5cbnZhciBfUmFkaW9CdXR0b24yID0gcmVxdWlyZSgnLi9SYWRpb0J1dHRvbicpO1xuXG52YXIgX1JhZGlvQnV0dG9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JhZGlvQnV0dG9uMik7XG5cbnZhciBfUmFkaW9CdXR0b25Hcm91cDIgPSByZXF1aXJlKCcuL1JhZGlvQnV0dG9uR3JvdXAnKTtcblxudmFyIF9SYWRpb0J1dHRvbkdyb3VwMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JhZGlvQnV0dG9uR3JvdXAyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5SYWRpb0J1dHRvbiA9IF9SYWRpb0J1dHRvbjMuZGVmYXVsdDtcbmV4cG9ydHMuUmFkaW9CdXR0b25Hcm91cCA9IF9SYWRpb0J1dHRvbkdyb3VwMy5kZWZhdWx0O1xuZXhwb3J0cy5kZWZhdWx0ID0gX1JhZGlvQnV0dG9uMy5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9SYWRpb0J1dHRvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTUwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9UZXh0RmllbGQgPSByZXF1aXJlKCcuLi9UZXh0RmllbGQnKTtcblxudmFyIF9UZXh0RmllbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dEZpZWxkKTtcblxudmFyIF9Ecm9wRG93bk1lbnUgPSByZXF1aXJlKCcuLi9Ecm9wRG93bk1lbnUnKTtcblxudmFyIF9Ecm9wRG93bk1lbnUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJvcERvd25NZW51KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgbGFiZWw6IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiAwLFxuICAgICAgdG9wOiBwcm9wcy5mbG9hdGluZ0xhYmVsVGV4dCA/IDYgOiAtNFxuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgcmlnaHQ6IDAsXG4gICAgICB0b3A6IHByb3BzLmZsb2F0aW5nTGFiZWxUZXh0ID8gOCA6IDBcbiAgICB9LFxuICAgIGhpZGVEcm9wRG93blVuZGVybGluZToge1xuICAgICAgYm9yZGVyVG9wOiAnbm9uZSdcbiAgICB9LFxuICAgIGRyb3BEb3duTWVudToge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH1cbiAgfTtcbn1cblxudmFyIFNlbGVjdEZpZWxkID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoU2VsZWN0RmllbGQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFNlbGVjdEZpZWxkKCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFNlbGVjdEZpZWxkKTtcbiAgICByZXR1cm4gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoU2VsZWN0RmllbGQuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFNlbGVjdEZpZWxkKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShTZWxlY3RGaWVsZCwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhdXRvV2lkdGggPSBfcHJvcHMuYXV0b1dpZHRoLFxuICAgICAgICAgIG11bHRpcGxlID0gX3Byb3BzLm11bHRpcGxlLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIGxhYmVsU3R5bGUgPSBfcHJvcHMubGFiZWxTdHlsZSxcbiAgICAgICAgICBpY29uU3R5bGUgPSBfcHJvcHMuaWNvblN0eWxlLFxuICAgICAgICAgIGlkID0gX3Byb3BzLmlkLFxuICAgICAgICAgIHVuZGVybGluZURpc2FibGVkU3R5bGUgPSBfcHJvcHMudW5kZXJsaW5lRGlzYWJsZWRTdHlsZSxcbiAgICAgICAgICB1bmRlcmxpbmVGb2N1c1N0eWxlID0gX3Byb3BzLnVuZGVybGluZUZvY3VzU3R5bGUsXG4gICAgICAgICAgbWVudUl0ZW1TdHlsZSA9IF9wcm9wcy5tZW51SXRlbVN0eWxlLFxuICAgICAgICAgIHNlbGVjdGVkTWVudUl0ZW1TdHlsZSA9IF9wcm9wcy5zZWxlY3RlZE1lbnVJdGVtU3R5bGUsXG4gICAgICAgICAgdW5kZXJsaW5lU3R5bGUgPSBfcHJvcHMudW5kZXJsaW5lU3R5bGUsXG4gICAgICAgICAgZHJvcERvd25NZW51UHJvcHMgPSBfcHJvcHMuZHJvcERvd25NZW51UHJvcHMsXG4gICAgICAgICAgZXJyb3JTdHlsZSA9IF9wcm9wcy5lcnJvclN0eWxlLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxGaXhlZCA9IF9wcm9wcy5mbG9hdGluZ0xhYmVsRml4ZWQsXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQgPSBfcHJvcHMuZmxvYXRpbmdMYWJlbFRleHQsXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbFN0eWxlID0gX3Byb3BzLmZsb2F0aW5nTGFiZWxTdHlsZSxcbiAgICAgICAgICBoaW50U3R5bGUgPSBfcHJvcHMuaGludFN0eWxlLFxuICAgICAgICAgIGhpbnRUZXh0ID0gX3Byb3BzLmhpbnRUZXh0LFxuICAgICAgICAgIGZ1bGxXaWR0aCA9IF9wcm9wcy5mdWxsV2lkdGgsXG4gICAgICAgICAgZXJyb3JUZXh0ID0gX3Byb3BzLmVycm9yVGV4dCxcbiAgICAgICAgICBsaXN0U3R5bGUgPSBfcHJvcHMubGlzdFN0eWxlLFxuICAgICAgICAgIG1heEhlaWdodCA9IF9wcm9wcy5tYXhIZWlnaHQsXG4gICAgICAgICAgbWVudVN0eWxlID0gX3Byb3BzLm1lbnVTdHlsZSxcbiAgICAgICAgICBvbkZvY3VzID0gX3Byb3BzLm9uRm9jdXMsXG4gICAgICAgICAgb25CbHVyID0gX3Byb3BzLm9uQmx1cixcbiAgICAgICAgICBvbkNoYW5nZSA9IF9wcm9wcy5vbkNoYW5nZSxcbiAgICAgICAgICBzZWxlY3Rpb25SZW5kZXJlciA9IF9wcm9wcy5zZWxlY3Rpb25SZW5kZXJlcixcbiAgICAgICAgICB2YWx1ZSA9IF9wcm9wcy52YWx1ZSxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydhdXRvV2lkdGgnLCAnbXVsdGlwbGUnLCAnY2hpbGRyZW4nLCAnc3R5bGUnLCAnbGFiZWxTdHlsZScsICdpY29uU3R5bGUnLCAnaWQnLCAndW5kZXJsaW5lRGlzYWJsZWRTdHlsZScsICd1bmRlcmxpbmVGb2N1c1N0eWxlJywgJ21lbnVJdGVtU3R5bGUnLCAnc2VsZWN0ZWRNZW51SXRlbVN0eWxlJywgJ3VuZGVybGluZVN0eWxlJywgJ2Ryb3BEb3duTWVudVByb3BzJywgJ2Vycm9yU3R5bGUnLCAnZGlzYWJsZWQnLCAnZmxvYXRpbmdMYWJlbEZpeGVkJywgJ2Zsb2F0aW5nTGFiZWxUZXh0JywgJ2Zsb2F0aW5nTGFiZWxTdHlsZScsICdoaW50U3R5bGUnLCAnaGludFRleHQnLCAnZnVsbFdpZHRoJywgJ2Vycm9yVGV4dCcsICdsaXN0U3R5bGUnLCAnbWF4SGVpZ2h0JywgJ21lbnVTdHlsZScsICdvbkZvY3VzJywgJ29uQmx1cicsICdvbkNoYW5nZScsICdzZWxlY3Rpb25SZW5kZXJlcicsICd2YWx1ZSddKTtcblxuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1RleHRGaWVsZDIuZGVmYXVsdCxcbiAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHtcbiAgICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxGaXhlZDogZmxvYXRpbmdMYWJlbEZpeGVkLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0OiBmbG9hdGluZ0xhYmVsVGV4dCxcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsU3R5bGU6IGZsb2F0aW5nTGFiZWxTdHlsZSxcbiAgICAgICAgICBoaW50U3R5bGU6IGhpbnRTdHlsZSxcbiAgICAgICAgICBoaW50VGV4dDogIWhpbnRUZXh0ICYmICFmbG9hdGluZ0xhYmVsVGV4dCA/ICcgJyA6IGhpbnRUZXh0LFxuICAgICAgICAgIGZ1bGxXaWR0aDogZnVsbFdpZHRoLFxuICAgICAgICAgIGVycm9yVGV4dDogZXJyb3JUZXh0LFxuICAgICAgICAgIHVuZGVybGluZVN0eWxlOiB1bmRlcmxpbmVTdHlsZSxcbiAgICAgICAgICBlcnJvclN0eWxlOiBlcnJvclN0eWxlLFxuICAgICAgICAgIG9uRm9jdXM6IG9uRm9jdXMsXG4gICAgICAgICAgb25CbHVyOiBvbkJsdXIsXG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIHVuZGVybGluZURpc2FibGVkU3R5bGU6IHVuZGVybGluZURpc2FibGVkU3R5bGUsXG4gICAgICAgICAgdW5kZXJsaW5lRm9jdXNTdHlsZTogdW5kZXJsaW5lRm9jdXNTdHlsZVxuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX0Ryb3BEb3duTWVudTIuZGVmYXVsdCxcbiAgICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHtcbiAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmRyb3BEb3duTWVudSwgbWVudVN0eWxlKSxcbiAgICAgICAgICAgIGxhYmVsU3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMubGFiZWwsIGxhYmVsU3R5bGUpLFxuICAgICAgICAgICAgaWNvblN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmljb24sIGljb25TdHlsZSksXG4gICAgICAgICAgICBtZW51SXRlbVN0eWxlOiBtZW51SXRlbVN0eWxlLFxuICAgICAgICAgICAgc2VsZWN0ZWRNZW51SXRlbVN0eWxlOiBzZWxlY3RlZE1lbnVJdGVtU3R5bGUsXG4gICAgICAgICAgICB1bmRlcmxpbmVTdHlsZTogc3R5bGVzLmhpZGVEcm9wRG93blVuZGVybGluZSxcbiAgICAgICAgICAgIGxpc3RTdHlsZTogbGlzdFN0eWxlLFxuICAgICAgICAgICAgYXV0b1dpZHRoOiBhdXRvV2lkdGgsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodCxcbiAgICAgICAgICAgIG11bHRpcGxlOiBtdWx0aXBsZSxcbiAgICAgICAgICAgIHNlbGVjdGlvblJlbmRlcmVyOiBzZWxlY3Rpb25SZW5kZXJlclxuICAgICAgICAgIH0sIGRyb3BEb3duTWVudVByb3BzKSxcbiAgICAgICAgICBjaGlsZHJlblxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gU2VsZWN0RmllbGQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5TZWxlY3RGaWVsZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGF1dG9XaWR0aDogZmFsc2UsXG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZnVsbFdpZHRoOiBmYWxzZSxcbiAgbXVsdGlwbGU6IGZhbHNlXG59O1xuU2VsZWN0RmllbGQuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblNlbGVjdEZpZWxkLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSB3aWR0aCB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgc2V0IGFjY29yZGluZyB0byB0aGVcbiAgICogaXRlbXMgaW5zaWRlIHRoZSBtZW51LlxuICAgKiBUbyBjb250cm9sIHRoZSB3aWR0aCBpbiBDU1MgaW5zdGVhZCwgbGVhdmUgdGhpcyBwcm9wIHNldCB0byBgZmFsc2VgLlxuICAgKi9cbiAgYXV0b1dpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgYE1lbnVJdGVtYCBlbGVtZW50cyB0byBwb3B1bGF0ZSB0aGUgc2VsZWN0IGZpZWxkIHdpdGguXG4gICAqIElmIHRoZSBtZW51IGl0ZW1zIGhhdmUgYSBgbGFiZWxgIHByb3AsIHRoYXQgdmFsdWUgd2lsbFxuICAgKiByZXByZXNlbnQgdGhlIHNlbGVjdGVkIG1lbnUgaXRlbSBpbiB0aGUgcmVuZGVyZWQgc2VsZWN0IGZpZWxkLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBzZWxlY3QgZmllbGQgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPYmplY3QgdGhhdCBjYW4gaGFuZGxlIGFuZCBvdmVycmlkZSBhbnkgcHJvcGVydHkgb2YgY29tcG9uZW50IERyb3BEb3duTWVudS5cbiAgICovXG4gIGRyb3BEb3duTWVudVByb3BzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBlcnJvciBlbGVtZW50LlxuICAgKi9cbiAgZXJyb3JTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgZXJyb3IgY29udGVudCB0byBkaXNwbGF5LlxuICAgKi9cbiAgZXJyb3JUZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgZmxvYXRpbmcgbGFiZWwgd2lsbCBmbG9hdCBldmVuIHdoZW4gbm8gdmFsdWUgaXMgc2VsZWN0ZWQuXG4gICAqL1xuICBmbG9hdGluZ0xhYmVsRml4ZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgICovXG4gIGZsb2F0aW5nTGFiZWxTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICAqL1xuICBmbG9hdGluZ0xhYmVsVGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIHNlbGVjdCBmaWVsZCB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cbiAgICovXG4gIGZ1bGxXaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGhpbnQgZWxlbWVudC5cbiAgICovXG4gIGhpbnRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgaGludCBjb250ZW50IHRvIGRpc3BsYXkuXG4gICAqL1xuICBoaW50VGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGljb24gZWxlbWVudC5cbiAgICovXG4gIGljb25TdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgaWQgcHJvcCBmb3IgdGhlIHRleHQgZmllbGQuXG4gICAqL1xuICBpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgbGFiZWwgc3R5bGUgd2hlbiB0aGUgc2VsZWN0IGZpZWxkIGlzIGluYWN0aXZlLlxuICAgKi9cbiAgbGFiZWxTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgdW5kZXJseWluZyBgTGlzdGAgZWxlbWVudC5cbiAgICovXG4gIGxpc3RTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdCBtYXgtaGVpZ2h0IG9mIHRoZSB1bmRlcmx5aW5nIGBEcm9wRG93bk1lbnVgIGVsZW1lbnQuXG4gICAqL1xuICBtYXhIZWlnaHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgbWVudSBpdGVtcy5cbiAgICovXG4gIG1lbnVJdGVtU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHVuZGVybHlpbmcgYERyb3BEb3duTWVudWAgZWxlbWVudC5cbiAgICovXG4gIG1lbnVTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBgdmFsdWVgIG11c3QgYmUgYW4gYXJyYXkgYW5kIHRoZSBtZW51IHdpbGwgc3VwcG9ydFxuICAgKiBtdWx0aXBsZSBzZWxlY3Rpb25zLlxuICAgKi9cbiAgbXVsdGlwbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25CbHVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIGEgbWVudSBpdGVtIGlzIHNlbGVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVG91Y2hUYXAgZXZlbnQgdGFyZ2V0aW5nIHRoZSBtZW51IGl0ZW1cbiAgICogdGhhdCB3YXMgc2VsZWN0ZWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBrZXkgVGhlIGluZGV4IG9mIHRoZSBzZWxlY3RlZCBtZW51IGl0ZW0sIG9yIHVuZGVmaW5lZFxuICAgKiBpZiBgbXVsdGlwbGVgIGlzIHRydWUuXG4gICAqIEBwYXJhbSB7YW55fSBwYXlsb2FkIElmIGBtdWx0aXBsZWAgaXMgdHJ1ZSwgdGhlIG1lbnUncyBgdmFsdWVgXG4gICAqIGFycmF5IHdpdGggZWl0aGVyIHRoZSBtZW51IGl0ZW0ncyBgdmFsdWVgIGFkZGVkIChpZlxuICAgKiBpdCB3YXNuJ3QgYWxyZWFkeSBzZWxlY3RlZCkgb3Igb21pdHRlZCAoaWYgaXQgd2FzIGFscmVhZHkgc2VsZWN0ZWQpLlxuICAgKiBPdGhlcndpc2UsIHRoZSBgdmFsdWVgIG9mIHRoZSBtZW51IGl0ZW0uXG4gICAqL1xuICBvbkNoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbkZvY3VzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiBzZWxlY3RlZCBtZW51IGl0ZW1zLlxuICAgKi9cbiAgc2VsZWN0ZWRNZW51SXRlbVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIEN1c3RvbWl6ZSB0aGUgcmVuZGVyaW5nIG9mIHRoZSBzZWxlY3RlZCBpdGVtLlxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgSWYgYG11bHRpcGxlYCBpcyB0cnVlLCB0aGUgbWVudSdzIGB2YWx1ZWBcbiAgICogYXJyYXkgd2l0aCBlaXRoZXIgdGhlIG1lbnUgaXRlbSdzIGB2YWx1ZWAgYWRkZWQgKGlmXG4gICAqIGl0IHdhc24ndCBhbHJlYWR5IHNlbGVjdGVkKSBvciBvbWl0dGVkIChpZiBpdCB3YXMgYWxyZWFkeSBzZWxlY3RlZCkuXG4gICAqIE90aGVyd2lzZSwgdGhlIGB2YWx1ZWAgb2YgdGhlIG1lbnUgaXRlbS5cbiAgICogQHBhcmFtIHthbnl9IG1lbnVJdGVtIFRoZSBzZWxlY3RlZCBgTWVudUl0ZW1gLlxuICAgKiBJZiBgbXVsdGlwbGVgIGlzIHRydWUsIHRoaXMgd2lsbCBiZSBhbiBhcnJheSB3aXRoIHRoZSBgTWVudUl0ZW1gcyBtYXRjaGluZyB0aGUgYHZhbHVlYHMgcGFyYW1ldGVyLlxuICAgKi9cbiAgc2VsZWN0aW9uUmVuZGVyZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgdW5kZXJsaW5lIGVsZW1lbnQgd2hlbiB0aGUgc2VsZWN0XG4gICAqIGZpZWxkIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgdW5kZXJsaW5lRGlzYWJsZWRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgdW5kZXJsaW5lIGVsZW1lbnQgd2hlbiB0aGUgc2VsZWN0IGZpZWxkXG4gICAqIGlzIGZvY3VzZWQuXG4gICAqL1xuICB1bmRlcmxpbmVGb2N1c1N0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSB1bmRlcmxpbmUgZWxlbWVudC5cbiAgICovXG4gIHVuZGVybGluZVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIElmIGBtdWx0aXBsZWAgaXMgdHJ1ZSwgYW4gYXJyYXkgb2YgdGhlIGB2YWx1ZWBzIG9mIHRoZSBzZWxlY3RlZFxuICAgKiBtZW51IGl0ZW1zLiBPdGhlcndpc2UsIHRoZSBgdmFsdWVgIG9mIHRoZSBzZWxlY3RlZCBtZW51IGl0ZW0uXG4gICAqIElmIHByb3ZpZGVkLCB0aGUgbWVudSB3aWxsIGJlIGEgY29udHJvbGxlZCBjb21wb25lbnQuXG4gICAqL1xuICB2YWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnlcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNlbGVjdEZpZWxkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9TZWxlY3RGaWVsZC9TZWxlY3RGaWVsZC5qc1xuLy8gbW9kdWxlIGlkID0gMTUwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfU2VsZWN0RmllbGQgPSByZXF1aXJlKCcuL1NlbGVjdEZpZWxkJyk7XG5cbnZhciBfU2VsZWN0RmllbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU2VsZWN0RmllbGQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfU2VsZWN0RmllbGQyLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL1NlbGVjdEZpZWxkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogIEJlZm9yZUFmdGVyV3JhcHBlclxuICogICAgQW4gYWx0ZXJuYXRpdmUgZm9yIHRoZSA6OmJlZm9yZSBhbmQgOjphZnRlciBjc3MgcHNldWRvLWVsZW1lbnRzIGZvclxuICogICAgY29tcG9uZW50cyB3aG9zZSBzdHlsZXMgYXJlIGRlZmluZWQgaW4gamF2YXNjcmlwdCBpbnN0ZWFkIG9mIGNzcy5cbiAqXG4gKiAgVXNhZ2U6IEZvciB0aGUgZWxlbWVudCB0aGF0IHdlIHdhbnQgdG8gYXBwbHkgYmVmb3JlIGFuZCBhZnRlciBlbGVtZW50cyB0byxcbiAqICAgIHdyYXAgaXRzIGNoaWxkcmVuIHdpdGggQmVmb3JlQWZ0ZXJXcmFwcGVyLiBGb3IgZXhhbXBsZTpcbiAqXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyPlxuICogIDxQYXBlcj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4gLy8gU2VlIG5vdGljZVxuICogICAgPEJlZm9yZUFmdGVyV3JhcHBlcj4gICAgICAgIHJlbmRlcnMgICAgICAgICA8ZGl2Lz4gLy8gYmVmb3JlIGVsZW1lbnRcbiAqICAgICAgW2NoaWxkcmVuIG9mIHBhcGVyXSAgICAgICAtLS0tLS0+ICAgICAgICAgW2NoaWxkcmVuIG9mIHBhcGVyXVxuICogICAgPC9CZWZvcmVBZnRlcldyYXBwZXI+ICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Lz4gLy8gYWZ0ZXIgZWxlbWVudFxuICogIDwvUGFwZXI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAqXG4gKiAgTm90aWNlOiBOb3RpY2UgdGhhdCB0aGlzIGRpdiBidW5kbGVzIHRvZ2V0aGVyIG91ciBlbGVtZW50cy4gSWYgdGhlIGVsZW1lbnRcbiAqICAgIHRoYXQgd2Ugd2FudCB0byBhcHBseSBiZWZvcmUgYW5kIGFmdGVyIGVsZW1lbnRzIGlzIGEgSFRNTCB0YWcgKGkuZS4gYVxuICogICAgZGl2LCBwLCBvciBidXR0b24gdGFnKSwgd2UgY2FuIGF2b2lkIHRoaXMgZXh0cmEgbmVzdGluZyBieSBwYXNzaW5nIHVzaW5nXG4gKiAgICB0aGUgQmVmb3JlQWZ0ZXJXcmFwcGVyIGluIHBsYWNlIG9mIHNhaWQgdGFnIGxpa2Ugc286XG4gKlxuICogIDxwPlxuICogICAgPEJlZm9yZUFmdGVyV3JhcHBlcj4gICBkbyB0aGlzIGluc3RlYWQgICA8QmVmb3JlQWZ0ZXJXcmFwcGVyIGVsZW1lbnRUeXBlPSdwJz5cbiAqICAgICAgW2NoaWxkcmVuIG9mIHBdICAgICAgICAgIC0tLS0tLT4gICAgICAgICBbY2hpbGRyZW4gb2YgcF1cbiAqICAgIDwvQmVmb3JlQWZ0ZXJXcmFwcGVyPiAgICAgICAgICAgICAgICAgICAgPC9CZWZvcmVBZnRlcldyYXBwZXI+XG4gKiAgPC9wPlxuICpcbiAqICBCZWZvcmVBZnRlcldyYXBwZXIgZmVhdHVyZXMgc3ByZWFkIGZ1bmN0aW9uYWxpdHkuIFRoaXMgbWVhbnMgdGhhdCB3ZSBjYW5cbiAqICBwYXNzIEhUTUwgdGFnIHByb3BlcnRpZXMgZGlyZWN0bHkgaW50byB0aGUgQmVmb3JlQWZ0ZXJXcmFwcGVyIHRhZy5cbiAqXG4gKiAgV2hlbiB1c2luZyBCZWZvcmVBZnRlcldyYXBwZXIsIGVuc3VyZSB0aGF0IHRoZSBwYXJlbnQgb2YgdGhlIGJlZm9yZUVsZW1lbnRcbiAqICBhbmQgYWZ0ZXJFbGVtZW50IGhhdmUgYSBkZWZpbmVkIHN0eWxlIHBvc2l0aW9uLlxuICovXG5cbnZhciBzdHlsZXMgPSB7XG4gIGJveDoge1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG4gIH1cbn07XG5cbnZhciBCZWZvcmVBZnRlcldyYXBwZXIgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShCZWZvcmVBZnRlcldyYXBwZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEJlZm9yZUFmdGVyV3JhcHBlcigpIHtcbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBCZWZvcmVBZnRlcldyYXBwZXIpO1xuICAgIHJldHVybiAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChCZWZvcmVBZnRlcldyYXBwZXIuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKEJlZm9yZUFmdGVyV3JhcHBlcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoQmVmb3JlQWZ0ZXJXcmFwcGVyLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGJlZm9yZVN0eWxlID0gX3Byb3BzLmJlZm9yZVN0eWxlLFxuICAgICAgICAgIGFmdGVyU3R5bGUgPSBfcHJvcHMuYWZ0ZXJTdHlsZSxcbiAgICAgICAgICBiZWZvcmVFbGVtZW50VHlwZSA9IF9wcm9wcy5iZWZvcmVFbGVtZW50VHlwZSxcbiAgICAgICAgICBhZnRlckVsZW1lbnRUeXBlID0gX3Byb3BzLmFmdGVyRWxlbWVudFR5cGUsXG4gICAgICAgICAgZWxlbWVudFR5cGUgPSBfcHJvcHMuZWxlbWVudFR5cGUsXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnYmVmb3JlU3R5bGUnLCAnYWZ0ZXJTdHlsZScsICdiZWZvcmVFbGVtZW50VHlwZScsICdhZnRlckVsZW1lbnRUeXBlJywgJ2VsZW1lbnRUeXBlJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuXG4gICAgICB2YXIgYmVmb3JlRWxlbWVudCA9IHZvaWQgMDtcbiAgICAgIHZhciBhZnRlckVsZW1lbnQgPSB2b2lkIDA7XG5cbiAgICAgIGlmIChiZWZvcmVTdHlsZSkge1xuICAgICAgICBiZWZvcmVFbGVtZW50ID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy5iZWZvcmVFbGVtZW50VHlwZSwge1xuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLmJveCwgYmVmb3JlU3R5bGUpKSxcbiAgICAgICAgICBrZXk6ICc6OmJlZm9yZSdcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhZnRlclN0eWxlKSB7XG4gICAgICAgIGFmdGVyRWxlbWVudCA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHRoaXMucHJvcHMuYWZ0ZXJFbGVtZW50VHlwZSwge1xuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLmJveCwgYWZ0ZXJTdHlsZSkpLFxuICAgICAgICAgIGtleTogJzo6YWZ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hpbGRyZW4gPSBbYmVmb3JlRWxlbWVudCwgdGhpcy5wcm9wcy5jaGlsZHJlbiwgYWZ0ZXJFbGVtZW50XTtcblxuICAgICAgdmFyIHByb3BzID0gb3RoZXI7XG4gICAgICBwcm9wcy5zdHlsZSA9IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCB0aGlzLnByb3BzLnN0eWxlKSk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmVsZW1lbnRUeXBlLCBwcm9wcywgY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQmVmb3JlQWZ0ZXJXcmFwcGVyO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuQmVmb3JlQWZ0ZXJXcmFwcGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgYmVmb3JlRWxlbWVudFR5cGU6ICdkaXYnLFxuICBhZnRlckVsZW1lbnRUeXBlOiAnZGl2JyxcbiAgZWxlbWVudFR5cGU6ICdkaXYnXG59O1xuQmVmb3JlQWZ0ZXJXcmFwcGVyLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5CZWZvcmVBZnRlcldyYXBwZXIucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBhZnRlckVsZW1lbnRUeXBlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYWZ0ZXJTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGJlZm9yZUVsZW1lbnRUeXBlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYmVmb3JlU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICBlbGVtZW50VHlwZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBCZWZvcmVBZnRlcldyYXBwZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL2ludGVybmFsL0JlZm9yZUFmdGVyV3JhcHBlci5qc1xuLy8gbW9kdWxlIGlkID0gMTUxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfQmVmb3JlQWZ0ZXJXcmFwcGVyID0gcmVxdWlyZSgnLi9CZWZvcmVBZnRlcldyYXBwZXInKTtcblxudmFyIF9CZWZvcmVBZnRlcldyYXBwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQmVmb3JlQWZ0ZXJXcmFwcGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHN0eWxlcyA9IHtcbiAgYmVmb3JlOiB7XG4gICAgY29udGVudDogXCInICdcIixcbiAgICBkaXNwbGF5OiAndGFibGUnXG4gIH0sXG4gIGFmdGVyOiB7XG4gICAgY29udGVudDogXCInICdcIixcbiAgICBjbGVhcjogJ2JvdGgnLFxuICAgIGRpc3BsYXk6ICd0YWJsZSdcbiAgfVxufTtcblxudmFyIENsZWFyRml4ID0gZnVuY3Rpb24gQ2xlYXJGaXgoX3JlZikge1xuICB2YXIgc3R5bGUgPSBfcmVmLnN0eWxlLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcmVmLCBbJ3N0eWxlJywgJ2NoaWxkcmVuJ10pO1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgX0JlZm9yZUFmdGVyV3JhcHBlcjIuZGVmYXVsdCxcbiAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwge1xuICAgICAgYmVmb3JlU3R5bGU6IHN0eWxlcy5iZWZvcmUsXG4gICAgICBhZnRlclN0eWxlOiBzdHlsZXMuYWZ0ZXIsXG4gICAgICBzdHlsZTogc3R5bGVcbiAgICB9KSxcbiAgICBjaGlsZHJlblxuICApO1xufTtcblxuQ2xlYXJGaXgubXVpTmFtZSA9ICdDbGVhckZpeCc7XG5cbkNsZWFyRml4LnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQ2xlYXJGaXg7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL2ludGVybmFsL0NsZWFyRml4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0RXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJ3JlYWN0LWV2ZW50LWxpc3RlbmVyJyk7XG5cbnZhciBfcmVhY3RFdmVudExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RXZlbnRMaXN0ZW5lcik7XG5cbnZhciBfa2V5Y29kZSA9IHJlcXVpcmUoJ2tleWNvZGUnKTtcblxudmFyIF9rZXljb2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleWNvZGUpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX0ZvY3VzUmlwcGxlID0gcmVxdWlyZSgnLi9Gb2N1c1JpcHBsZScpO1xuXG52YXIgX0ZvY3VzUmlwcGxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZvY3VzUmlwcGxlKTtcblxudmFyIF9Ub3VjaFJpcHBsZSA9IHJlcXVpcmUoJy4vVG91Y2hSaXBwbGUnKTtcblxudmFyIF9Ub3VjaFJpcHBsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ub3VjaFJpcHBsZSk7XG5cbnZhciBfUGFwZXIgPSByZXF1aXJlKCcuLy4uL1BhcGVyJyk7XG5cbnZhciBfUGFwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFwZXIpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0KSB7XG4gIHZhciBiYXNlVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lLmJhc2VUaGVtZTtcblxuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgY3Vyc29yOiBwcm9wcy5kaXNhYmxlZCA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcicsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIG92ZXJmbG93OiAndmlzaWJsZScsXG4gICAgICBkaXNwbGF5OiAndGFibGUnLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICBpbnB1dDoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBjdXJzb3I6ICdpbmhlcml0JyxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdhbGwnLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHpJbmRleDogMixcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBtYXJnaW46IDBcbiAgICB9LFxuICAgIGNvbnRyb2xzOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICBmbG9hdDogJ2xlZnQnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgd2lkdGg6ICdjYWxjKDEwMCUgLSA2MHB4KScsXG4gICAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXG4gICAgICBjb2xvcjogYmFzZVRoZW1lLnBhbGV0dGUudGV4dENvbG9yLFxuICAgICAgZm9udEZhbWlseTogYmFzZVRoZW1lLmZvbnRGYW1pbHlcbiAgICB9LFxuICAgIHdyYXA6IHtcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgICBmbG9hdDogJ2xlZnQnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgZmxleFNocmluazogMCxcbiAgICAgIHdpZHRoOiA2MCAtIGJhc2VUaGVtZS5zcGFjaW5nLmRlc2t0b3BHdXR0ZXJMZXNzLFxuICAgICAgbWFyZ2luUmlnaHQ6IHByb3BzLmxhYmVsUG9zaXRpb24gPT09ICdyaWdodCcgPyBiYXNlVGhlbWUuc3BhY2luZy5kZXNrdG9wR3V0dGVyTGVzcyA6IDAsXG4gICAgICBtYXJnaW5MZWZ0OiBwcm9wcy5sYWJlbFBvc2l0aW9uID09PSAnbGVmdCcgPyBiYXNlVGhlbWUuc3BhY2luZy5kZXNrdG9wR3V0dGVyTGVzcyA6IDBcbiAgICB9LFxuICAgIHJpcHBsZToge1xuICAgICAgY29sb3I6IHByb3BzLnJpcHBsZUNvbG9yIHx8IGJhc2VUaGVtZS5wYWxldHRlLnByaW1hcnkxQ29sb3IsXG4gICAgICBoZWlnaHQ6ICcyMDAlJyxcbiAgICAgIHdpZHRoOiAnMjAwJScsXG4gICAgICB0b3A6IC0xMixcbiAgICAgIGxlZnQ6IC0xMlxuICAgIH1cbiAgfTtcbn1cblxudmFyIEVuaGFuY2VkU3dpdGNoID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoRW5oYW5jZWRTd2l0Y2gsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEVuaGFuY2VkU3dpdGNoKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIEVuaGFuY2VkU3dpdGNoKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IEVuaGFuY2VkU3dpdGNoLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShFbmhhbmNlZFN3aXRjaCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNLZXlib2FyZEZvY3VzZWQ6IGZhbHNlXG4gICAgfSwgX3RoaXMuaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy50YWJQcmVzc2VkID0gZmFsc2U7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzS2V5Ym9hcmRGb2N1c2VkOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIHZhciBpc0lucHV0Q2hlY2tlZCA9IF90aGlzLnJlZnMuY2hlY2tib3guY2hlY2tlZDtcblxuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY2hlY2tlZCcpICYmIF90aGlzLnByb3BzLm9uUGFyZW50U2hvdWxkVXBkYXRlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uUGFyZW50U2hvdWxkVXBkYXRlKGlzSW5wdXRDaGVja2VkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uU3dpdGNoKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uU3dpdGNoKGV2ZW50LCBpc0lucHV0Q2hlY2tlZCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIGNvZGUgPSAoMCwgX2tleWNvZGUyLmRlZmF1bHQpKGV2ZW50KTtcblxuICAgICAgaWYgKGNvZGUgPT09ICd0YWInKSB7XG4gICAgICAgIF90aGlzLnRhYlByZXNzZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnN0YXRlLmlzS2V5Ym9hcmRGb2N1c2VkICYmIGNvZGUgPT09ICdzcGFjZScpIHtcbiAgICAgICAgX3RoaXMuaGFuZGxlQ2hhbmdlKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVLZXlVcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnN0YXRlLmlzS2V5Ym9hcmRGb2N1c2VkICYmICgwLCBfa2V5Y29kZTIuZGVmYXVsdCkoZXZlbnQpID09PSAnc3BhY2UnKSB7XG4gICAgICAgIF90aGlzLmhhbmRsZUNoYW5nZShldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBvbmx5IGxpc3RlbiB0byBsZWZ0IGNsaWNrc1xuICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICBfdGhpcy5yZWZzLnRvdWNoUmlwcGxlLnN0YXJ0KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZVVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucmVmcy50b3VjaFJpcHBsZS5lbmQoKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZUxlYXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucmVmcy50b3VjaFJpcHBsZS5lbmQoKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVUb3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5yZWZzLnRvdWNoUmlwcGxlLnN0YXJ0KGV2ZW50KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVUb3VjaEVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnJlZnMudG91Y2hSaXBwbGUuZW5kKCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlQmx1ciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc0tleWJvYXJkRm9jdXNlZDogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQmx1cihldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlRm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIHNldFRpbWVvdXQgaXMgbmVlZGVkIGJlY3Vhc2UgdGhlIGZvY3VzIGV2ZW50IGZpcmVzIGZpcnN0XG4gICAgICAvLyBXYWl0IHNvIHRoYXQgd2UgY2FuIGNhcHR1cmUgaWYgdGhpcyB3YXMgYSBrZXlib2FyZCBmb2N1c1xuICAgICAgLy8gb3IgdG91Y2ggZm9jdXNcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMudGFiUHJlc3NlZCkge1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzS2V5Ym9hcmRGb2N1c2VkOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDE1MCk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShFbmhhbmNlZFN3aXRjaCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIGlucHV0Tm9kZSA9IHRoaXMucmVmcy5jaGVja2JveDtcbiAgICAgIGlmICgoIXRoaXMucHJvcHMuc3dpdGNoZWQgfHwgaW5wdXROb2RlLmNoZWNrZWQgIT09IHRoaXMucHJvcHMuc3dpdGNoZWQpICYmIHRoaXMucHJvcHMub25QYXJlbnRTaG91bGRVcGRhdGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblBhcmVudFNob3VsZFVwZGF0ZShpbnB1dE5vZGUuY2hlY2tlZCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgaGFzQ2hlY2tlZFByb3AgPSBuZXh0UHJvcHMuaGFzT3duUHJvcGVydHkoJ2NoZWNrZWQnKTtcbiAgICAgIHZhciBoYXNOZXdEZWZhdWx0UHJvcCA9IG5leHRQcm9wcy5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdENoZWNrZWQnKSAmJiBuZXh0UHJvcHMuZGVmYXVsdENoZWNrZWQgIT09IHRoaXMucHJvcHMuZGVmYXVsdENoZWNrZWQ7XG5cbiAgICAgIGlmIChoYXNDaGVja2VkUHJvcCB8fCBoYXNOZXdEZWZhdWx0UHJvcCkge1xuICAgICAgICB2YXIgc3dpdGNoZWQgPSBuZXh0UHJvcHMuY2hlY2tlZCB8fCBuZXh0UHJvcHMuZGVmYXVsdENoZWNrZWQgfHwgZmFsc2U7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc3dpdGNoZWQ6IHN3aXRjaGVkXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uUGFyZW50U2hvdWxkVXBkYXRlICYmIHN3aXRjaGVkICE9PSB0aGlzLnByb3BzLnN3aXRjaGVkKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vblBhcmVudFNob3VsZFVwZGF0ZShzd2l0Y2hlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc1N3aXRjaGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNTd2l0Y2hlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZnMuY2hlY2tib3guY2hlY2tlZDtcbiAgICB9XG5cbiAgICAvLyBubyBjYWxsYmFjayBoZXJlIGJlY2F1c2UgdGhlcmUgaXMgbm8gZXZlbnRcblxuICB9LCB7XG4gICAga2V5OiAnc2V0U3dpdGNoZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTd2l0Y2hlZChuZXdTd2l0Y2hlZFZhbHVlKSB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ2NoZWNrZWQnKSB8fCB0aGlzLnByb3BzLmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uUGFyZW50U2hvdWxkVXBkYXRlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vblBhcmVudFNob3VsZFVwZGF0ZShuZXdTd2l0Y2hlZFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZnMuY2hlY2tib3guY2hlY2tlZCA9IG5ld1N3aXRjaGVkVmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAoMCwgX3dhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnTWF0ZXJpYWwtVUk6IENhbm5vdCBjYWxsIHNldCBtZXRob2Qgd2hpbGUgY2hlY2tlZCBpcyBkZWZpbmVkIGFzIGEgcHJvcGVydHkuJykgOiB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZnMuY2hlY2tib3gudmFsdWU7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2tib3ggaW5wdXRzIG9ubHkgdXNlIFNQQUNFIHRvIGNoYW5nZSB0aGVpciBzdGF0ZS4gVXNpbmcgRU5URVIgd2lsbFxuICAgIC8vIHVwZGF0ZSB0aGUgdWkgYnV0IG5vdCB0aGUgaW5wdXQuXG5cblxuICAgIC8qKlxuICAgICAqIEJlY2F1c2UgYm90aCB0aGUgcmlwcGxlcyBhbmQgdGhlIGNoZWNrYm94IGlucHV0IGNhbm5vdCBzaGFyZSBwb2ludGVyXG4gICAgICogZXZlbnRzLCB0aGUgY2hlY2tib3ggaW5wdXQgdGFrZXMgY29udHJvbCBvZiBwb2ludGVyIGV2ZW50cyBhbmQgY2FsbHNcbiAgICAgKiByaXBwbGUgYW5pbWF0aW9ucyBtYW51YWxseS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbmFtZSA9IF9wcm9wcy5uYW1lLFxuICAgICAgICAgIHZhbHVlID0gX3Byb3BzLnZhbHVlLFxuICAgICAgICAgIGljb25TdHlsZSA9IF9wcm9wcy5pY29uU3R5bGUsXG4gICAgICAgICAgaW5wdXRTdHlsZSA9IF9wcm9wcy5pbnB1dFN0eWxlLFxuICAgICAgICAgIGlucHV0VHlwZSA9IF9wcm9wcy5pbnB1dFR5cGUsXG4gICAgICAgICAgbGFiZWwgPSBfcHJvcHMubGFiZWwsXG4gICAgICAgICAgbGFiZWxTdHlsZSA9IF9wcm9wcy5sYWJlbFN0eWxlLFxuICAgICAgICAgIGxhYmVsUG9zaXRpb24gPSBfcHJvcHMubGFiZWxQb3NpdGlvbixcbiAgICAgICAgICBvblN3aXRjaCA9IF9wcm9wcy5vblN3aXRjaCxcbiAgICAgICAgICBvbkJsdXIgPSBfcHJvcHMub25CbHVyLFxuICAgICAgICAgIG9uRm9jdXMgPSBfcHJvcHMub25Gb2N1cyxcbiAgICAgICAgICBvbk1vdXNlVXAgPSBfcHJvcHMub25Nb3VzZVVwLFxuICAgICAgICAgIG9uTW91c2VEb3duID0gX3Byb3BzLm9uTW91c2VEb3duLFxuICAgICAgICAgIG9uTW91c2VMZWF2ZSA9IF9wcm9wcy5vbk1vdXNlTGVhdmUsXG4gICAgICAgICAgb25Ub3VjaFN0YXJ0ID0gX3Byb3BzLm9uVG91Y2hTdGFydCxcbiAgICAgICAgICBvblRvdWNoRW5kID0gX3Byb3BzLm9uVG91Y2hFbmQsXG4gICAgICAgICAgb25QYXJlbnRTaG91bGRVcGRhdGUgPSBfcHJvcHMub25QYXJlbnRTaG91bGRVcGRhdGUsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgZGlzYWJsZVRvdWNoUmlwcGxlID0gX3Byb3BzLmRpc2FibGVUb3VjaFJpcHBsZSxcbiAgICAgICAgICBkaXNhYmxlRm9jdXNSaXBwbGUgPSBfcHJvcHMuZGlzYWJsZUZvY3VzUmlwcGxlLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgcmlwcGxlQ29sb3IgPSBfcHJvcHMucmlwcGxlQ29sb3IsXG4gICAgICAgICAgcmlwcGxlU3R5bGUgPSBfcHJvcHMucmlwcGxlU3R5bGUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgc3dpdGNoZWQgPSBfcHJvcHMuc3dpdGNoZWQsXG4gICAgICAgICAgc3dpdGNoRWxlbWVudCA9IF9wcm9wcy5zd2l0Y2hFbGVtZW50LFxuICAgICAgICAgIHRodW1iU3R5bGUgPSBfcHJvcHMudGh1bWJTdHlsZSxcbiAgICAgICAgICB0cmFja1N0eWxlID0gX3Byb3BzLnRyYWNrU3R5bGUsXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnbmFtZScsICd2YWx1ZScsICdpY29uU3R5bGUnLCAnaW5wdXRTdHlsZScsICdpbnB1dFR5cGUnLCAnbGFiZWwnLCAnbGFiZWxTdHlsZScsICdsYWJlbFBvc2l0aW9uJywgJ29uU3dpdGNoJywgJ29uQmx1cicsICdvbkZvY3VzJywgJ29uTW91c2VVcCcsICdvbk1vdXNlRG93bicsICdvbk1vdXNlTGVhdmUnLCAnb25Ub3VjaFN0YXJ0JywgJ29uVG91Y2hFbmQnLCAnb25QYXJlbnRTaG91bGRVcGRhdGUnLCAnZGlzYWJsZWQnLCAnZGlzYWJsZVRvdWNoUmlwcGxlJywgJ2Rpc2FibGVGb2N1c1JpcHBsZScsICdjbGFzc05hbWUnLCAncmlwcGxlQ29sb3InLCAncmlwcGxlU3R5bGUnLCAnc3R5bGUnLCAnc3dpdGNoZWQnLCAnc3dpdGNoRWxlbWVudCcsICd0aHVtYlN0eWxlJywgJ3RyYWNrU3R5bGUnXSk7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgICB2YXIgd3JhcFN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMud3JhcCwgaWNvblN0eWxlKTtcbiAgICAgIHZhciBtZXJnZWRSaXBwbGVTdHlsZSA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucmlwcGxlLCByaXBwbGVTdHlsZSk7XG5cbiAgICAgIGlmICh0aHVtYlN0eWxlKSB7XG4gICAgICAgIHdyYXBTdHlsZXMubWFyZ2luTGVmdCAvPSAyO1xuICAgICAgICB3cmFwU3R5bGVzLm1hcmdpblJpZ2h0IC89IDI7XG4gICAgICB9XG5cbiAgICAgIHZhciBsYWJlbEVsZW1lbnQgPSBsYWJlbCAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmxhYmVsLCBsYWJlbFN0eWxlKSkgfSxcbiAgICAgICAgbGFiZWxcbiAgICAgICk7XG5cbiAgICAgIHZhciBzaG93VG91Y2hSaXBwbGUgPSAhZGlzYWJsZWQgJiYgIWRpc2FibGVUb3VjaFJpcHBsZTtcbiAgICAgIHZhciBzaG93Rm9jdXNSaXBwbGUgPSAhZGlzYWJsZWQgJiYgIWRpc2FibGVGb2N1c1JpcHBsZTtcblxuICAgICAgdmFyIHRvdWNoUmlwcGxlID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1RvdWNoUmlwcGxlMi5kZWZhdWx0LCB7XG4gICAgICAgIHJlZjogJ3RvdWNoUmlwcGxlJyxcbiAgICAgICAga2V5OiAndG91Y2hSaXBwbGUnLFxuICAgICAgICBzdHlsZTogbWVyZ2VkUmlwcGxlU3R5bGUsXG4gICAgICAgIGNvbG9yOiBtZXJnZWRSaXBwbGVTdHlsZS5jb2xvcixcbiAgICAgICAgbXVpVGhlbWU6IHRoaXMuY29udGV4dC5tdWlUaGVtZSxcbiAgICAgICAgY2VudGVyUmlwcGxlOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgdmFyIGZvY3VzUmlwcGxlID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0ZvY3VzUmlwcGxlMi5kZWZhdWx0LCB7XG4gICAgICAgIGtleTogJ2ZvY3VzUmlwcGxlJyxcbiAgICAgICAgaW5uZXJTdHlsZTogbWVyZ2VkUmlwcGxlU3R5bGUsXG4gICAgICAgIGNvbG9yOiBtZXJnZWRSaXBwbGVTdHlsZS5jb2xvcixcbiAgICAgICAgbXVpVGhlbWU6IHRoaXMuY29udGV4dC5tdWlUaGVtZSxcbiAgICAgICAgc2hvdzogdGhpcy5zdGF0ZS5pc0tleWJvYXJkRm9jdXNlZFxuICAgICAgfSk7XG5cbiAgICAgIHZhciByaXBwbGVzID0gW3Nob3dUb3VjaFJpcHBsZSA/IHRvdWNoUmlwcGxlIDogbnVsbCwgc2hvd0ZvY3VzUmlwcGxlID8gZm9jdXNSaXBwbGUgOiBudWxsXTtcblxuICAgICAgdmFyIGlucHV0RWxlbWVudCA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCB7XG4gICAgICAgIHJlZjogJ2NoZWNrYm94JyxcbiAgICAgICAgdHlwZTogaW5wdXRUeXBlLFxuICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmlucHV0LCBpbnB1dFN0eWxlKSksXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICBvbkJsdXI6IHRoaXMuaGFuZGxlQmx1cixcbiAgICAgICAgb25Gb2N1czogdGhpcy5oYW5kbGVGb2N1cyxcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMuaGFuZGxlQ2hhbmdlLFxuICAgICAgICBvbk1vdXNlVXA6IHNob3dUb3VjaFJpcHBsZSAmJiB0aGlzLmhhbmRsZU1vdXNlVXAsXG4gICAgICAgIG9uTW91c2VEb3duOiBzaG93VG91Y2hSaXBwbGUgJiYgdGhpcy5oYW5kbGVNb3VzZURvd24sXG4gICAgICAgIG9uTW91c2VMZWF2ZTogc2hvd1RvdWNoUmlwcGxlICYmIHRoaXMuaGFuZGxlTW91c2VMZWF2ZSxcbiAgICAgICAgb25Ub3VjaFN0YXJ0OiBzaG93VG91Y2hSaXBwbGUgJiYgdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuICAgICAgICBvblRvdWNoRW5kOiBzaG93VG91Y2hSaXBwbGUgJiYgdGhpcy5oYW5kbGVUb3VjaEVuZFxuICAgICAgfSkpO1xuXG4gICAgICAvLyBJZiB0b2dnbGUgY29tcG9uZW50IChpbmRpY2F0ZWQgYnkgd2hldGhlciB0aGUgc3R5bGUgaW5jbHVkZXMgdGh1bWIpIG1hbnVhbGx5IGxheSBvdXRcbiAgICAgIC8vIGVsZW1lbnRzIGluIG9yZGVyIHRvIG5lc3QgcmlwcGxlIGVsZW1lbnRzXG4gICAgICB2YXIgc3dpdGNoT3JUaHVtYkVsZW1lbnQgPSAhdGh1bWJTdHlsZSA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcyh3cmFwU3R5bGVzKSB9LFxuICAgICAgICBzd2l0Y2hFbGVtZW50LFxuICAgICAgICByaXBwbGVzXG4gICAgICApIDogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKHdyYXBTdHlsZXMpIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgdHJhY2tTdHlsZSkpIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfUGFwZXIyLmRlZmF1bHQsXG4gICAgICAgICAgeyBzdHlsZTogdGh1bWJTdHlsZSwgekRlcHRoOiAxLCBjaXJjbGU6IHRydWUgfSxcbiAgICAgICAgICAnICcsXG4gICAgICAgICAgcmlwcGxlcyxcbiAgICAgICAgICAnICdcbiAgICAgICAgKVxuICAgICAgKTtcblxuICAgICAgdmFyIGVsZW1lbnRzSW5PcmRlciA9IGxhYmVsUG9zaXRpb24gPT09ICdyaWdodCcgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IHN0eWxlcy5jb250cm9scyB9LFxuICAgICAgICBzd2l0Y2hPclRodW1iRWxlbWVudCxcbiAgICAgICAgbGFiZWxFbGVtZW50XG4gICAgICApIDogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IHN0eWxlOiBzdHlsZXMuY29udHJvbHMgfSxcbiAgICAgICAgbGFiZWxFbGVtZW50LFxuICAgICAgICBzd2l0Y2hPclRodW1iRWxlbWVudFxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyByZWY6ICdyb290JywgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpKSB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3RFdmVudExpc3RlbmVyMi5kZWZhdWx0LCB7XG4gICAgICAgICAgdGFyZ2V0OiAnd2luZG93JyxcbiAgICAgICAgICBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93bixcbiAgICAgICAgICBvbktleVVwOiB0aGlzLmhhbmRsZUtleVVwXG4gICAgICAgIH0pLFxuICAgICAgICBpbnB1dEVsZW1lbnQsXG4gICAgICAgIGVsZW1lbnRzSW5PcmRlclxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEVuaGFuY2VkU3dpdGNoO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuRW5oYW5jZWRTd2l0Y2guY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcbkVuaGFuY2VkU3dpdGNoLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2hlY2tlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBkZWZhdWx0Q2hlY2tlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBkaXNhYmxlRm9jdXNSaXBwbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgZGlzYWJsZVRvdWNoUmlwcGxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGljb25TdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGlucHV0U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBpbnB1dFR5cGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxhYmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIGxhYmVsUG9zaXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoWydsZWZ0JywgJ3JpZ2h0J10pLFxuICBsYWJlbFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgbmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIG9uQmx1cjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbkZvY3VzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uTW91c2VEb3duOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uTW91c2VMZWF2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbk1vdXNlVXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25QYXJlbnRTaG91bGRVcGRhdGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25Td2l0Y2g6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25Ub3VjaEVuZDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvblRvdWNoU3RhcnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgcmlwcGxlQ29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICByaXBwbGVTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgc3dpdGNoRWxlbWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50LmlzUmVxdWlyZWQsXG4gIHN3aXRjaGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wuaXNSZXF1aXJlZCxcbiAgdGh1bWJTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHRyYWNrU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICB2YWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnlcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IEVuaGFuY2VkU3dpdGNoO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9pbnRlcm5hbC9FbmhhbmNlZFN3aXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gMTUxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wdXJlID0gcmVxdWlyZSgncmVjb21wb3NlL3B1cmUnKTtcblxudmFyIF9wdXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B1cmUpO1xuXG52YXIgX1N2Z0ljb24gPSByZXF1aXJlKCcuLi8uLi9TdmdJY29uJyk7XG5cbnZhciBfU3ZnSWNvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TdmdJY29uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE5hdmlnYXRpb25BcnJvd0Ryb3BEb3duID0gZnVuY3Rpb24gTmF2aWdhdGlvbkFycm93RHJvcERvd24ocHJvcHMpIHtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgIF9TdmdJY29uMi5kZWZhdWx0LFxuICAgIHByb3BzLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnTTcgMTBsNSA1IDUtNXonIH0pXG4gICk7XG59O1xuTmF2aWdhdGlvbkFycm93RHJvcERvd24gPSAoMCwgX3B1cmUyLmRlZmF1bHQpKE5hdmlnYXRpb25BcnJvd0Ryb3BEb3duKTtcbk5hdmlnYXRpb25BcnJvd0Ryb3BEb3duLmRpc3BsYXlOYW1lID0gJ05hdmlnYXRpb25BcnJvd0Ryb3BEb3duJztcbk5hdmlnYXRpb25BcnJvd0Ryb3BEb3duLm11aU5hbWUgPSAnU3ZnSWNvbic7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE5hdmlnYXRpb25BcnJvd0Ryb3BEb3duO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9hcnJvdy1kcm9wLWRvd24uanNcbi8vIG1vZHVsZSBpZCA9IDE1MTZcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHVyZSA9IHJlcXVpcmUoJ3JlY29tcG9zZS9wdXJlJyk7XG5cbnZhciBfcHVyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wdXJlKTtcblxudmFyIF9TdmdJY29uID0gcmVxdWlyZSgnLi4vLi4vU3ZnSWNvbicpO1xuXG52YXIgX1N2Z0ljb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3ZnSWNvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUb2dnbGVSYWRpb0J1dHRvbkNoZWNrZWQgPSBmdW5jdGlvbiBUb2dnbGVSYWRpb0J1dHRvbkNoZWNrZWQocHJvcHMpIHtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgIF9TdmdJY29uMi5kZWZhdWx0LFxuICAgIHByb3BzLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnTTEyIDdjLTIuNzYgMC01IDIuMjQtNSA1czIuMjQgNSA1IDUgNS0yLjI0IDUtNS0yLjI0LTUtNS01em0wLTVDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDIgMC04LTMuNTgtOC04czMuNTgtOCA4LTggOCAzLjU4IDggOC0zLjU4IDgtOCA4eicgfSlcbiAgKTtcbn07XG5Ub2dnbGVSYWRpb0J1dHRvbkNoZWNrZWQgPSAoMCwgX3B1cmUyLmRlZmF1bHQpKFRvZ2dsZVJhZGlvQnV0dG9uQ2hlY2tlZCk7XG5Ub2dnbGVSYWRpb0J1dHRvbkNoZWNrZWQuZGlzcGxheU5hbWUgPSAnVG9nZ2xlUmFkaW9CdXR0b25DaGVja2VkJztcblRvZ2dsZVJhZGlvQnV0dG9uQ2hlY2tlZC5tdWlOYW1lID0gJ1N2Z0ljb24nO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUb2dnbGVSYWRpb0J1dHRvbkNoZWNrZWQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL3N2Zy1pY29ucy90b2dnbGUvcmFkaW8tYnV0dG9uLWNoZWNrZWQuanNcbi8vIG1vZHVsZSBpZCA9IDE1MThcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHVyZSA9IHJlcXVpcmUoJ3JlY29tcG9zZS9wdXJlJyk7XG5cbnZhciBfcHVyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wdXJlKTtcblxudmFyIF9TdmdJY29uID0gcmVxdWlyZSgnLi4vLi4vU3ZnSWNvbicpO1xuXG52YXIgX1N2Z0ljb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3ZnSWNvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUb2dnbGVSYWRpb0J1dHRvblVuY2hlY2tlZCA9IGZ1bmN0aW9uIFRvZ2dsZVJhZGlvQnV0dG9uVW5jaGVja2VkKHByb3BzKSB7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICBfU3ZnSWNvbjIuZGVmYXVsdCxcbiAgICBwcm9wcyxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ00xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHonIH0pXG4gICk7XG59O1xuVG9nZ2xlUmFkaW9CdXR0b25VbmNoZWNrZWQgPSAoMCwgX3B1cmUyLmRlZmF1bHQpKFRvZ2dsZVJhZGlvQnV0dG9uVW5jaGVja2VkKTtcblRvZ2dsZVJhZGlvQnV0dG9uVW5jaGVja2VkLmRpc3BsYXlOYW1lID0gJ1RvZ2dsZVJhZGlvQnV0dG9uVW5jaGVja2VkJztcblRvZ2dsZVJhZGlvQnV0dG9uVW5jaGVja2VkLm11aU5hbWUgPSAnU3ZnSWNvbic7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRvZ2dsZVJhZGlvQnV0dG9uVW5jaGVja2VkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9zdmctaWNvbnMvdG9nZ2xlL3JhZGlvLWJ1dHRvbi11bmNoZWNrZWQuanNcbi8vIG1vZHVsZSBpZCA9IDE1MTlcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQge1Byb2ZpbGV9IGZyb20gJy4vUHJvZmlsZSc7XHJcblxyXG5pbXBvcnQge2NhbGN1bGF0ZUNhbG9yaWVzVGFyZ2V0fSBmcm9tICdtb2R1bGVzL2NhbG9yaWVzVGFyZ2V0JztcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICAgIGNhbGN1bGF0ZUNhbG9yaWVzVGFyZ2V0OiAodmFsdWVzKSA9PiB7ZGlzcGF0Y2goY2FsY3VsYXRlQ2Fsb3JpZXNUYXJnZXQodmFsdWVzKSk7fVxyXG59KTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICAgIGNhbG9yaWVzVGFyZ2V0OiBzdGF0ZS5jYWxvcmllc1RhcmdldFxyXG59KTtcclxuXHJcbmNvbnN0IFByb2ZpbGVDb250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQcm9maWxlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVDb250YWluZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvUHJvZmlsZS9Qcm9maWxlQ29udGFpbmVyLmpzIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHZhciByZXN1bHQgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgbWVtbztcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBtZW1vO1xuXHRcdH07XG5cdH0sXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdChzZWxmLm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cdH0pLFxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0fSksXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0aWYoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcblxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDc2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBnZXRDbGFzcztcblxudmFyIF9mbGV4Ym94Z3JpZCA9IHJlcXVpcmUoJ2ZsZXhib3hncmlkL2Rpc3QvZmxleGJveGdyaWQuY3NzJyk7XG5cbnZhciBfZmxleGJveGdyaWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmxleGJveGdyaWQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRDbGFzcyhjbGFzc05hbWUpIHtcbiAgcmV0dXJuIF9mbGV4Ym94Z3JpZDIuZGVmYXVsdCAmJiBfZmxleGJveGdyaWQyLmRlZmF1bHRbY2xhc3NOYW1lXSA/IF9mbGV4Ym94Z3JpZDIuZGVmYXVsdFtjbGFzc05hbWVdIDogY2xhc3NOYW1lO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL2NsYXNzTmFtZXMuanNcbi8vIG1vZHVsZSBpZCA9IDc2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlUHJvcHM7XG5mdW5jdGlvbiBjcmVhdGVQcm9wcyhwcm9wVHlwZXMsIHByb3BzLCBjbGFzc05hbWVzKSB7XG4gIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gIE9iamVjdC5rZXlzKHByb3BzKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBrZXkgPT09ICdjaGlsZHJlbicgfHwgIXByb3BUeXBlc1trZXldO1xuICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gbmV3UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gIH0pO1xuXG4gIHZhciBjbGFzc05hbWUgPSBjbGFzc05hbWVzLmZpbHRlcihmdW5jdGlvbiAoY24pIHtcbiAgICByZXR1cm4gY247XG4gIH0pLmpvaW4oJyAnKTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG5ld1Byb3BzLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL2NyZWF0ZVByb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSA3NjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0Q29sdW1uUHJvcHMgPSBleHBvcnRzLkNvbCA9IGV4cG9ydHMuZ2V0Um93UHJvcHMgPSBleHBvcnRzLlJvdyA9IGV4cG9ydHMuR3JpZCA9IHVuZGVmaW5lZDtcblxudmFyIF9Sb3cyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL1JvdycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2dldFJvd1Byb3BzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX1JvdzIuZ2V0Um93UHJvcHM7XG4gIH1cbn0pO1xuXG52YXIgX0NvbDIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvQ29sJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZ2V0Q29sdW1uUHJvcHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfQ29sMi5nZXRDb2x1bW5Qcm9wcztcbiAgfVxufSk7XG5cbnZhciBfR3JpZDIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvR3JpZCcpO1xuXG52YXIgX0dyaWQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfR3JpZDIpO1xuXG52YXIgX1JvdzMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3cyKTtcblxudmFyIF9Db2wzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuR3JpZCA9IF9HcmlkMy5kZWZhdWx0O1xuZXhwb3J0cy5Sb3cgPSBfUm93My5kZWZhdWx0O1xuZXhwb3J0cy5Db2wgPSBfQ29sMy5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3NzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVmlld3BvcnRTaXplVHlwZSA9IGV4cG9ydHMuQ29sdW1uU2l6ZVR5cGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgQ29sdW1uU2l6ZVR5cGUgPSBleHBvcnRzLkNvbHVtblNpemVUeXBlID0gX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLCBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2xdKTtcbnZhciBWaWV3cG9ydFNpemVUeXBlID0gZXhwb3J0cy5WaWV3cG9ydFNpemVUeXBlID0gX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJ10pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL3R5cGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4ODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9UZXh0RmllbGQgPSByZXF1aXJlKCcuL1RleHRGaWVsZCcpO1xuXG52YXIgX1RleHRGaWVsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXh0RmllbGQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfVGV4dEZpZWxkMi5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9UZXh0RmllbGQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDg5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX1JhaXNlZEJ1dHRvbiA9IHJlcXVpcmUoJy4vUmFpc2VkQnV0dG9uJyk7XG5cbnZhciBfUmFpc2VkQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JhaXNlZEJ1dHRvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9SYWlzZWRCdXR0b24yLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIDQiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb250YWluZXItZmx1aWQsXFxuLmNvbnRhaW5lciB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmNvbnRhaW5lci1mbHVpZCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbn1cXG5cXG4ucm93IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAtbXMtZmxleDogMCAxIGF1dG87XFxuICBmbGV4OiAwIDEgYXV0bztcXG4gIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbi1yaWdodDogLTAuNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAtMC41cmVtO1xcbn1cXG5cXG4ucm93LnJldmVyc2Uge1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiByZXZlcnNlO1xcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG59XFxuXFxuLmNvbC5yZXZlcnNlIHtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IHJldmVyc2U7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG5cXG4uY29sLXhzLFxcbi5jb2wteHMtMSxcXG4uY29sLXhzLTIsXFxuLmNvbC14cy0zLFxcbi5jb2wteHMtNCxcXG4uY29sLXhzLTUsXFxuLmNvbC14cy02LFxcbi5jb2wteHMtNyxcXG4uY29sLXhzLTgsXFxuLmNvbC14cy05LFxcbi5jb2wteHMtMTAsXFxuLmNvbC14cy0xMSxcXG4uY29sLXhzLTEyLFxcbi5jb2wteHMtb2Zmc2V0LTAsXFxuLmNvbC14cy1vZmZzZXQtMSxcXG4uY29sLXhzLW9mZnNldC0yLFxcbi5jb2wteHMtb2Zmc2V0LTMsXFxuLmNvbC14cy1vZmZzZXQtNCxcXG4uY29sLXhzLW9mZnNldC01LFxcbi5jb2wteHMtb2Zmc2V0LTYsXFxuLmNvbC14cy1vZmZzZXQtNyxcXG4uY29sLXhzLW9mZnNldC04LFxcbi5jb2wteHMtb2Zmc2V0LTksXFxuLmNvbC14cy1vZmZzZXQtMTAsXFxuLmNvbC14cy1vZmZzZXQtMTEsXFxuLmNvbC14cy1vZmZzZXQtMTIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAtbXMtZmxleDogMCAwIGF1dG87XFxuICBmbGV4OiAwIDAgYXV0bztcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbn1cXG5cXG4uY29sLXhzIHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xcbiAgZmxleC1iYXNpczogMDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbC14cy0xIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4LjMzMzMzMzMzJTtcXG4gIGZsZXgtYmFzaXM6IDguMzMzMzMzMzMlO1xcbiAgbWF4LXdpZHRoOiA4LjMzMzMzMzMzJTtcXG59XFxuXFxuLmNvbC14cy0yIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxNi42NjY2NjY2NyU7XFxuICBmbGV4LWJhc2lzOiAxNi42NjY2NjY2NyU7XFxuICBtYXgtd2lkdGg6IDE2LjY2NjY2NjY3JTtcXG59XFxuXFxuLmNvbC14cy0zIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAyNSU7XFxuICBmbGV4LWJhc2lzOiAyNSU7XFxuICBtYXgtd2lkdGg6IDI1JTtcXG59XFxuXFxuLmNvbC14cy00IHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAzMy4zMzMzMzMzMyU7XFxuICBmbGV4LWJhc2lzOiAzMy4zMzMzMzMzMyU7XFxuICBtYXgtd2lkdGg6IDMzLjMzMzMzMzMzJTtcXG59XFxuXFxuLmNvbC14cy01IHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA0MS42NjY2NjY2NyU7XFxuICBmbGV4LWJhc2lzOiA0MS42NjY2NjY2NyU7XFxuICBtYXgtd2lkdGg6IDQxLjY2NjY2NjY3JTtcXG59XFxuXFxuLmNvbC14cy02IHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1MCU7XFxuICBmbGV4LWJhc2lzOiA1MCU7XFxuICBtYXgtd2lkdGg6IDUwJTtcXG59XFxuXFxuLmNvbC14cy03IHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1OC4zMzMzMzMzMyU7XFxuICBmbGV4LWJhc2lzOiA1OC4zMzMzMzMzMyU7XFxuICBtYXgtd2lkdGg6IDU4LjMzMzMzMzMzJTtcXG59XFxuXFxuLmNvbC14cy04IHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA2Ni42NjY2NjY2NyU7XFxuICBmbGV4LWJhc2lzOiA2Ni42NjY2NjY2NyU7XFxuICBtYXgtd2lkdGg6IDY2LjY2NjY2NjY3JTtcXG59XFxuXFxuLmNvbC14cy05IHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA3NSU7XFxuICBmbGV4LWJhc2lzOiA3NSU7XFxuICBtYXgtd2lkdGg6IDc1JTtcXG59XFxuXFxuLmNvbC14cy0xMCB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogODMuMzMzMzMzMzMlO1xcbiAgZmxleC1iYXNpczogODMuMzMzMzMzMzMlO1xcbiAgbWF4LXdpZHRoOiA4My4zMzMzMzMzMyU7XFxufVxcblxcbi5jb2wteHMtMTEge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDkxLjY2NjY2NjY3JTtcXG4gIGZsZXgtYmFzaXM6IDkxLjY2NjY2NjY3JTtcXG4gIG1heC13aWR0aDogOTEuNjY2NjY2NjclO1xcbn1cXG5cXG4uY29sLXhzLTEyIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcbiAgZmxleC1iYXNpczogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtMCB7XFxuICBtYXJnaW4tbGVmdDogMDtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtMSB7XFxuICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTIge1xcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtMyB7XFxuICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC00IHtcXG4gIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTUge1xcbiAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtNiB7XFxuICBtYXJnaW4tbGVmdDogNTAlO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC03IHtcXG4gIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTgge1xcbiAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtOSB7XFxuICBtYXJnaW4tbGVmdDogNzUlO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC0xMCB7XFxuICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC0xMSB7XFxuICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbn1cXG5cXG4uc3RhcnQteHMge1xcbiAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4uY2VudGVyLXhzIHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZW5kLXhzIHtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcXG4gIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi50b3AteHMge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xcbiAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5taWRkbGUteHMge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm90dG9tLXhzIHtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAtbXMtZmxleC1hbGlnbjogZW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4uYXJvdW5kLXhzIHtcXG4gIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmJldHdlZW4teHMge1xcbiAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5maXJzdC14cyB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAwO1xcbiAgLW1zLWZsZXgtb3JkZXI6IC0xO1xcbiAgb3JkZXI6IC0xO1xcbn1cXG5cXG4ubGFzdC14cyB7XFxuICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAyO1xcbiAgLW1zLWZsZXgtb3JkZXI6IDE7XFxuICBvcmRlcjogMTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0OGVtKSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDQ5cmVtO1xcbiAgfVxcblxcbiAgLmNvbC1zbSxcXG4gIC5jb2wtc20tMSxcXG4gIC5jb2wtc20tMixcXG4gIC5jb2wtc20tMyxcXG4gIC5jb2wtc20tNCxcXG4gIC5jb2wtc20tNSxcXG4gIC5jb2wtc20tNixcXG4gIC5jb2wtc20tNyxcXG4gIC5jb2wtc20tOCxcXG4gIC5jb2wtc20tOSxcXG4gIC5jb2wtc20tMTAsXFxuICAuY29sLXNtLTExLFxcbiAgLmNvbC1zbS0xMixcXG4gIC5jb2wtc20tb2Zmc2V0LTAsXFxuICAuY29sLXNtLW9mZnNldC0xLFxcbiAgLmNvbC1zbS1vZmZzZXQtMixcXG4gIC5jb2wtc20tb2Zmc2V0LTMsXFxuICAuY29sLXNtLW9mZnNldC00LFxcbiAgLmNvbC1zbS1vZmZzZXQtNSxcXG4gIC5jb2wtc20tb2Zmc2V0LTYsXFxuICAuY29sLXNtLW9mZnNldC03LFxcbiAgLmNvbC1zbS1vZmZzZXQtOCxcXG4gIC5jb2wtc20tb2Zmc2V0LTksXFxuICAuY29sLXNtLW9mZnNldC0xMCxcXG4gIC5jb2wtc20tb2Zmc2V0LTExLFxcbiAgLmNvbC1zbS1vZmZzZXQtMTIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAtbXMtZmxleDogMCAwIGF1dG87XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgfVxcblxcbiAgLmNvbC1zbSB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xcbiAgICBmbGV4LWJhc2lzOiAwO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuY29sLXNtLTEge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOC4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDguMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS0yIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDE2LjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogMTYuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tMyB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAyNSU7XFxuICAgIGZsZXgtYmFzaXM6IDI1JTtcXG4gICAgbWF4LXdpZHRoOiAyNSU7XFxuICB9XFxuXFxuICAuY29sLXNtLTQge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMzMuMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiAzMy4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS01IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDQxLjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogNDEuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tNiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1MCU7XFxuICAgIGZsZXgtYmFzaXM6IDUwJTtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICB9XFxuXFxuICAuY29sLXNtLTcge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNTguMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA1OC4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogNTguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS04IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDY2LjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogNjYuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tOSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA3NSU7XFxuICAgIGZsZXgtYmFzaXM6IDc1JTtcXG4gICAgbWF4LXdpZHRoOiA3NSU7XFxuICB9XFxuXFxuICAuY29sLXNtLTEwIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDgzLjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogODMuMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tMTEge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOTEuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA5MS42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogOTEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1zbS0xMiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuY29sLXNtLW9mZnNldC0wIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICB9XFxuXFxuICAuY29sLXNtLW9mZnNldC0xIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1vZmZzZXQtMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLXNtLW9mZnNldC0zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTQge1xcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1vZmZzZXQtNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLXNtLW9mZnNldC02IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTcge1xcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1vZmZzZXQtOCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLXNtLW9mZnNldC05IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTEwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTExIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5zdGFydC1zbSB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIH1cXG5cXG4gIC5jZW50ZXItc20ge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5lbmQtc20ge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgfVxcblxcbiAgLnRvcC1zbSB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG5cXG4gIC5taWRkbGUtc20ge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmJvdHRvbS1zbSB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIH1cXG5cXG4gIC5hcm91bmQtc20ge1xcbiAgICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG5cXG4gIC5iZXR3ZWVuLXNtIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgLmZpcnN0LXNtIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMDtcXG4gICAgLW1zLWZsZXgtb3JkZXI6IC0xO1xcbiAgICBvcmRlcjogLTE7XFxuICB9XFxuXFxuICAubGFzdC1zbSB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDI7XFxuICAgIC1tcy1mbGV4LW9yZGVyOiAxO1xcbiAgICBvcmRlcjogMTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDY1cmVtO1xcbiAgfVxcblxcbiAgLmNvbC1tZCxcXG4gIC5jb2wtbWQtMSxcXG4gIC5jb2wtbWQtMixcXG4gIC5jb2wtbWQtMyxcXG4gIC5jb2wtbWQtNCxcXG4gIC5jb2wtbWQtNSxcXG4gIC5jb2wtbWQtNixcXG4gIC5jb2wtbWQtNyxcXG4gIC5jb2wtbWQtOCxcXG4gIC5jb2wtbWQtOSxcXG4gIC5jb2wtbWQtMTAsXFxuICAuY29sLW1kLTExLFxcbiAgLmNvbC1tZC0xMixcXG4gIC5jb2wtbWQtb2Zmc2V0LTAsXFxuICAuY29sLW1kLW9mZnNldC0xLFxcbiAgLmNvbC1tZC1vZmZzZXQtMixcXG4gIC5jb2wtbWQtb2Zmc2V0LTMsXFxuICAuY29sLW1kLW9mZnNldC00LFxcbiAgLmNvbC1tZC1vZmZzZXQtNSxcXG4gIC5jb2wtbWQtb2Zmc2V0LTYsXFxuICAuY29sLW1kLW9mZnNldC03LFxcbiAgLmNvbC1tZC1vZmZzZXQtOCxcXG4gIC5jb2wtbWQtb2Zmc2V0LTksXFxuICAuY29sLW1kLW9mZnNldC0xMCxcXG4gIC5jb2wtbWQtb2Zmc2V0LTExLFxcbiAgLmNvbC1tZC1vZmZzZXQtMTIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAtbXMtZmxleDogMCAwIGF1dG87XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgfVxcblxcbiAgLmNvbC1tZCB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xcbiAgICBmbGV4LWJhc2lzOiAwO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuY29sLW1kLTEge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOC4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDguMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC0yIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDE2LjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogMTYuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtMyB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAyNSU7XFxuICAgIGZsZXgtYmFzaXM6IDI1JTtcXG4gICAgbWF4LXdpZHRoOiAyNSU7XFxuICB9XFxuXFxuICAuY29sLW1kLTQge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMzMuMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiAzMy4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC01IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDQxLjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogNDEuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtNiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1MCU7XFxuICAgIGZsZXgtYmFzaXM6IDUwJTtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICB9XFxuXFxuICAuY29sLW1kLTcge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNTguMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA1OC4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogNTguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC04IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDY2LjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogNjYuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtOSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA3NSU7XFxuICAgIGZsZXgtYmFzaXM6IDc1JTtcXG4gICAgbWF4LXdpZHRoOiA3NSU7XFxuICB9XFxuXFxuICAuY29sLW1kLTEwIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDgzLjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogODMuMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtMTEge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOTEuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA5MS42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogOTEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1tZC0xMiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC0wIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC0xIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC1vZmZzZXQtMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC0zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTQge1xcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC1vZmZzZXQtNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC02IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTcge1xcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC1vZmZzZXQtOCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC05IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTEwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTExIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5zdGFydC1tZCB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIH1cXG5cXG4gIC5jZW50ZXItbWQge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5lbmQtbWQge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgfVxcblxcbiAgLnRvcC1tZCB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG5cXG4gIC5taWRkbGUtbWQge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmJvdHRvbS1tZCB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIH1cXG5cXG4gIC5hcm91bmQtbWQge1xcbiAgICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG5cXG4gIC5iZXR3ZWVuLW1kIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgLmZpcnN0LW1kIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMDtcXG4gICAgLW1zLWZsZXgtb3JkZXI6IC0xO1xcbiAgICBvcmRlcjogLTE7XFxuICB9XFxuXFxuICAubGFzdC1tZCB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDI7XFxuICAgIC1tcy1mbGV4LW9yZGVyOiAxO1xcbiAgICBvcmRlcjogMTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NWVtKSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDc2cmVtO1xcbiAgfVxcblxcbiAgLmNvbC1sZyxcXG4gIC5jb2wtbGctMSxcXG4gIC5jb2wtbGctMixcXG4gIC5jb2wtbGctMyxcXG4gIC5jb2wtbGctNCxcXG4gIC5jb2wtbGctNSxcXG4gIC5jb2wtbGctNixcXG4gIC5jb2wtbGctNyxcXG4gIC5jb2wtbGctOCxcXG4gIC5jb2wtbGctOSxcXG4gIC5jb2wtbGctMTAsXFxuICAuY29sLWxnLTExLFxcbiAgLmNvbC1sZy0xMixcXG4gIC5jb2wtbGctb2Zmc2V0LTAsXFxuICAuY29sLWxnLW9mZnNldC0xLFxcbiAgLmNvbC1sZy1vZmZzZXQtMixcXG4gIC5jb2wtbGctb2Zmc2V0LTMsXFxuICAuY29sLWxnLW9mZnNldC00LFxcbiAgLmNvbC1sZy1vZmZzZXQtNSxcXG4gIC5jb2wtbGctb2Zmc2V0LTYsXFxuICAuY29sLWxnLW9mZnNldC03LFxcbiAgLmNvbC1sZy1vZmZzZXQtOCxcXG4gIC5jb2wtbGctb2Zmc2V0LTksXFxuICAuY29sLWxnLW9mZnNldC0xMCxcXG4gIC5jb2wtbGctb2Zmc2V0LTExLFxcbiAgLmNvbC1sZy1vZmZzZXQtMTIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAtbXMtZmxleDogMCAwIGF1dG87XFxuICAgIGZsZXg6IDAgMCBhdXRvO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgfVxcblxcbiAgLmNvbC1sZyB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xcbiAgICBmbGV4LWJhc2lzOiAwO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuY29sLWxnLTEge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOC4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDguMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy0yIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDE2LjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogMTYuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctMyB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAyNSU7XFxuICAgIGZsZXgtYmFzaXM6IDI1JTtcXG4gICAgbWF4LXdpZHRoOiAyNSU7XFxuICB9XFxuXFxuICAuY29sLWxnLTQge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMzMuMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiAzMy4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy01IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDQxLjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogNDEuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctNiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1MCU7XFxuICAgIGZsZXgtYmFzaXM6IDUwJTtcXG4gICAgbWF4LXdpZHRoOiA1MCU7XFxuICB9XFxuXFxuICAuY29sLWxnLTcge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNTguMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA1OC4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogNTguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy04IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDY2LjY2NjY2NjY3JTtcXG4gICAgZmxleC1iYXNpczogNjYuNjY2NjY2NjclO1xcbiAgICBtYXgtd2lkdGg6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctOSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA3NSU7XFxuICAgIGZsZXgtYmFzaXM6IDc1JTtcXG4gICAgbWF4LXdpZHRoOiA3NSU7XFxuICB9XFxuXFxuICAuY29sLWxnLTEwIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDgzLjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogODMuMzMzMzMzMzMlO1xcbiAgICBtYXgtd2lkdGg6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctMTEge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOTEuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA5MS42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogOTEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1sZy0xMiB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxMDAlO1xcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC0wIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC0xIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC0zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTQge1xcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC02IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTcge1xcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtOCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC05IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTEwIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTExIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5zdGFydC1sZyB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IHN0YXJ0O1xcbiAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIH1cXG5cXG4gIC5jZW50ZXItbGcge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5lbmQtbGcge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgfVxcblxcbiAgLnRvcC1sZyB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG5cXG4gIC5taWRkbGUtbGcge1xcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmJvdHRvbS1sZyB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIH1cXG5cXG4gIC5hcm91bmQtbGcge1xcbiAgICAtbXMtZmxleC1wYWNrOiBkaXN0cmlidXRlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG5cXG4gIC5iZXR3ZWVuLWxnIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG4gICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgLmZpcnN0LWxnIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMDtcXG4gICAgLW1zLWZsZXgtb3JkZXI6IC0xO1xcbiAgICBvcmRlcjogLTE7XFxuICB9XFxuXFxuICAubGFzdC1sZyB7XFxuICAgIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDI7XFxuICAgIC1tcy1mbGV4LW9yZGVyOiAxO1xcbiAgICBvcmRlcjogMTtcXG4gIH1cXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L2ZsZXhib3hncmlkL2Rpc3QvZmxleGJveGdyaWQuY3NzXG4vLyBtb2R1bGUgaWQgPSA5MDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX2NvbG9yTWFuaXB1bGF0b3IgPSByZXF1aXJlKCcuLi91dGlscy9jb2xvck1hbmlwdWxhdG9yJyk7XG5cbnZhciBfRW5oYW5jZWRCdXR0b24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9FbmhhbmNlZEJ1dHRvbicpO1xuXG52YXIgX0VuaGFuY2VkQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VuaGFuY2VkQnV0dG9uKTtcblxudmFyIF9QYXBlciA9IHJlcXVpcmUoJy4uL1BhcGVyJyk7XG5cbnZhciBfUGFwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFwZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUxhYmVsKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghcHJvcHMuY2hpbGRyZW4gJiYgcHJvcHMubGFiZWwgIT09IDAgJiYgIXByb3BzLmxhYmVsICYmICFwcm9wcy5pY29uKSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdSZXF1aXJlZCBwcm9wIGxhYmVsIG9yIGNoaWxkcmVuIG9yIGljb24gd2FzIG5vdCBzcGVjaWZpZWQgaW4gJyArIGNvbXBvbmVudE5hbWUgKyAnLicpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQsIHN0YXRlKSB7XG4gIHZhciBfY29udGV4dCRtdWlUaGVtZSA9IGNvbnRleHQubXVpVGhlbWUsXG4gICAgICBiYXNlVGhlbWUgPSBfY29udGV4dCRtdWlUaGVtZS5iYXNlVGhlbWUsXG4gICAgICBidXR0b24gPSBfY29udGV4dCRtdWlUaGVtZS5idXR0b24sXG4gICAgICByYWlzZWRCdXR0b24gPSBfY29udGV4dCRtdWlUaGVtZS5yYWlzZWRCdXR0b24sXG4gICAgICBib3JkZXJSYWRpdXMgPSBfY29udGV4dCRtdWlUaGVtZS5ib3JkZXJSYWRpdXM7XG4gIHZhciBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3IgPSBwcm9wcy5kaXNhYmxlZEJhY2tncm91bmRDb2xvcixcbiAgICAgIGRpc2FibGVkTGFiZWxDb2xvciA9IHByb3BzLmRpc2FibGVkTGFiZWxDb2xvcixcbiAgICAgIGZ1bGxXaWR0aCA9IHByb3BzLmZ1bGxXaWR0aCxcbiAgICAgIGljb24gPSBwcm9wcy5pY29uLFxuICAgICAgbGFiZWwgPSBwcm9wcy5sYWJlbCxcbiAgICAgIGxhYmVsUG9zaXRpb24gPSBwcm9wcy5sYWJlbFBvc2l0aW9uLFxuICAgICAgcHJpbWFyeSA9IHByb3BzLnByaW1hcnksXG4gICAgICBzZWNvbmRhcnkgPSBwcm9wcy5zZWNvbmRhcnksXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlO1xuXG5cbiAgdmFyIGFtb3VudCA9IHByaW1hcnkgfHwgc2Vjb25kYXJ5ID8gMC40IDogMC4wODtcblxuICB2YXIgYmFja2dyb3VuZENvbG9yID0gcmFpc2VkQnV0dG9uLmNvbG9yO1xuICB2YXIgbGFiZWxDb2xvciA9IHJhaXNlZEJ1dHRvbi50ZXh0Q29sb3I7XG5cbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZENvbG9yID0gZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3IgfHwgcmFpc2VkQnV0dG9uLmRpc2FibGVkQ29sb3I7XG4gICAgbGFiZWxDb2xvciA9IGRpc2FibGVkTGFiZWxDb2xvciB8fCByYWlzZWRCdXR0b24uZGlzYWJsZWRUZXh0Q29sb3I7XG4gIH0gZWxzZSBpZiAocHJpbWFyeSkge1xuICAgIGJhY2tncm91bmRDb2xvciA9IHJhaXNlZEJ1dHRvbi5wcmltYXJ5Q29sb3I7XG4gICAgbGFiZWxDb2xvciA9IHJhaXNlZEJ1dHRvbi5wcmltYXJ5VGV4dENvbG9yO1xuICB9IGVsc2UgaWYgKHNlY29uZGFyeSkge1xuICAgIGJhY2tncm91bmRDb2xvciA9IHJhaXNlZEJ1dHRvbi5zZWNvbmRhcnlDb2xvcjtcbiAgICBsYWJlbENvbG9yID0gcmFpc2VkQnV0dG9uLnNlY29uZGFyeVRleHRDb2xvcjtcbiAgfSBlbHNlIHtcbiAgICBpZiAocHJvcHMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBwcm9wcy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgfVxuICAgIGlmIChwcm9wcy5sYWJlbENvbG9yKSB7XG4gICAgICBsYWJlbENvbG9yID0gcHJvcHMubGFiZWxDb2xvcjtcbiAgICB9XG4gIH1cblxuICB2YXIgYnV0dG9uSGVpZ2h0ID0gc3R5bGUgJiYgc3R5bGUuaGVpZ2h0IHx8IGJ1dHRvbi5oZWlnaHQ7XG5cbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgICBtaW5XaWR0aDogZnVsbFdpZHRoID8gJzEwMCUnIDogYnV0dG9uLm1pbldpZHRoXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgIGhlaWdodDogYnV0dG9uSGVpZ2h0LFxuICAgICAgbGluZUhlaWdodDogYnV0dG9uSGVpZ2h0ICsgJ3B4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAvLyBUaGF0J3MgdGhlIGRlZmF1bHQgdmFsdWUgZm9yIGEgYnV0dG9uIGJ1dCBub3QgYSBsaW5rXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgZm9udFNpemU6IHJhaXNlZEJ1dHRvbi5mb250U2l6ZSxcbiAgICAgIGxldHRlclNwYWNpbmc6IDAsXG4gICAgICB0ZXh0VHJhbnNmb3JtOiByYWlzZWRCdXR0b24udGV4dFRyYW5zZm9ybSB8fCBidXR0b24udGV4dFRyYW5zZm9ybSB8fCAndXBwZXJjYXNlJyxcbiAgICAgIGZvbnRXZWlnaHQ6IHJhaXNlZEJ1dHRvbi5mb250V2VpZ2h0LFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgcGFkZGluZ0xlZnQ6IGljb24gJiYgbGFiZWxQb3NpdGlvbiAhPT0gJ2JlZm9yZScgPyA4IDogYmFzZVRoZW1lLnNwYWNpbmcuZGVza3RvcEd1dHRlckxlc3MsXG4gICAgICBwYWRkaW5nUmlnaHQ6IGljb24gJiYgbGFiZWxQb3NpdGlvbiA9PT0gJ2JlZm9yZScgPyA4IDogYmFzZVRoZW1lLnNwYWNpbmcuZGVza3RvcEd1dHRlckxlc3MsXG4gICAgICBjb2xvcjogbGFiZWxDb2xvclxuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICBtYXJnaW5MZWZ0OiBsYWJlbCAmJiBsYWJlbFBvc2l0aW9uICE9PSAnYmVmb3JlJyA/IDEyIDogMCxcbiAgICAgIG1hcmdpblJpZ2h0OiBsYWJlbCAmJiBsYWJlbFBvc2l0aW9uID09PSAnYmVmb3JlJyA/IDEyIDogMFxuICAgIH0sXG4gICAgb3ZlcmxheToge1xuICAgICAgaGVpZ2h0OiBidXR0b25IZWlnaHQsXG4gICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1cyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogKHN0YXRlLmtleWJvYXJkRm9jdXNlZCB8fCBzdGF0ZS5ob3ZlcmVkKSAmJiAhZGlzYWJsZWQgJiYgKDAsIF9jb2xvck1hbmlwdWxhdG9yLmZhZGUpKGxhYmVsQ29sb3IsIGFtb3VudCksXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpLFxuICAgICAgdG9wOiAwXG4gICAgfSxcbiAgICByaXBwbGU6IHtcbiAgICAgIGNvbG9yOiBsYWJlbENvbG9yLFxuICAgICAgb3BhY2l0eTogIShwcmltYXJ5IHx8IHNlY29uZGFyeSkgPyAwLjEgOiAwLjE2XG4gICAgfVxuICB9O1xufVxuXG52YXIgUmFpc2VkQnV0dG9uID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoUmFpc2VkQnV0dG9uLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSYWlzZWRCdXR0b24oKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgUmFpc2VkQnV0dG9uKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IFJhaXNlZEJ1dHRvbi5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoUmFpc2VkQnV0dG9uKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBob3ZlcmVkOiBmYWxzZSxcbiAgICAgIGtleWJvYXJkRm9jdXNlZDogZmFsc2UsXG4gICAgICB0b3VjaGVkOiBmYWxzZSxcbiAgICAgIGluaXRpYWxaRGVwdGg6IDAsXG4gICAgICB6RGVwdGg6IDBcbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIG9ubHkgbGlzdGVuIHRvIGxlZnQgY2xpY2tzXG4gICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB6RGVwdGg6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGggKyAxXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VEb3duKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VEb3duKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZVVwID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHpEZXB0aDogX3RoaXMuc3RhdGUuaW5pdGlhbFpEZXB0aFxuICAgICAgfSk7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZVVwKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VVcChldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5rZXlib2FyZEZvY3VzZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHpEZXB0aDogX3RoaXMuc3RhdGUuaW5pdGlhbFpEZXB0aCxcbiAgICAgICAgICBob3ZlcmVkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vdXNlTGVhdmUpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Nb3VzZUxlYXZlKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZUVudGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIV90aGlzLnN0YXRlLmtleWJvYXJkRm9jdXNlZCAmJiAhX3RoaXMuc3RhdGUudG91Y2hlZCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaG92ZXJlZDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vdXNlRW50ZXIpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Nb3VzZUVudGVyKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVUb3VjaFN0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRvdWNoZWQ6IHRydWUsXG4gICAgICAgIHpEZXB0aDogX3RoaXMuc3RhdGUuaW5pdGlhbFpEZXB0aCArIDFcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Ub3VjaFN0YXJ0KSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uVG91Y2hTdGFydChldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hFbmQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdG91Y2hlZDogdHJ1ZSxcbiAgICAgICAgekRlcHRoOiBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoXG4gICAgICB9KTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uVG91Y2hFbmQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Ub3VjaEVuZChldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlS2V5Ym9hcmRGb2N1cyA9IGZ1bmN0aW9uIChldmVudCwga2V5Ym9hcmRGb2N1c2VkKSB7XG4gICAgICB2YXIgekRlcHRoID0ga2V5Ym9hcmRGb2N1c2VkICYmICFfdGhpcy5wcm9wcy5kaXNhYmxlZCA/IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGggKyAxIDogX3RoaXMuc3RhdGUuaW5pdGlhbFpEZXB0aDtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB6RGVwdGg6IHpEZXB0aCxcbiAgICAgICAga2V5Ym9hcmRGb2N1c2VkOiBrZXlib2FyZEZvY3VzZWRcbiAgICAgIH0pO1xuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShSYWlzZWRCdXR0b24sIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdmFyIHpEZXB0aCA9IHRoaXMucHJvcHMuZGlzYWJsZWQgPyAwIDogMTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB6RGVwdGg6IHpEZXB0aCxcbiAgICAgICAgaW5pdGlhbFpEZXB0aDogekRlcHRoXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHZhciB6RGVwdGggPSBuZXh0UHJvcHMuZGlzYWJsZWQgPyAwIDogMTtcbiAgICAgIHZhciBuZXh0U3RhdGUgPSB7XG4gICAgICAgIHpEZXB0aDogekRlcHRoLFxuICAgICAgICBpbml0aWFsWkRlcHRoOiB6RGVwdGhcbiAgICAgIH07XG5cbiAgICAgIGlmIChuZXh0UHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgbmV4dFN0YXRlLmhvdmVyZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvciA9IF9wcm9wcy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgYnV0dG9uU3R5bGUgPSBfcHJvcHMuYnV0dG9uU3R5bGUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBkaXNhYmxlZEJhY2tncm91bmRDb2xvciA9IF9wcm9wcy5kaXNhYmxlZEJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICBkaXNhYmxlZExhYmVsQ29sb3IgPSBfcHJvcHMuZGlzYWJsZWRMYWJlbENvbG9yLFxuICAgICAgICAgIGZ1bGxXaWR0aCA9IF9wcm9wcy5mdWxsV2lkdGgsXG4gICAgICAgICAgaWNvbiA9IF9wcm9wcy5pY29uLFxuICAgICAgICAgIGxhYmVsID0gX3Byb3BzLmxhYmVsLFxuICAgICAgICAgIGxhYmVsQ29sb3IgPSBfcHJvcHMubGFiZWxDb2xvcixcbiAgICAgICAgICBsYWJlbFBvc2l0aW9uID0gX3Byb3BzLmxhYmVsUG9zaXRpb24sXG4gICAgICAgICAgbGFiZWxTdHlsZSA9IF9wcm9wcy5sYWJlbFN0eWxlLFxuICAgICAgICAgIG92ZXJsYXlTdHlsZSA9IF9wcm9wcy5vdmVybGF5U3R5bGUsXG4gICAgICAgICAgcHJpbWFyeSA9IF9wcm9wcy5wcmltYXJ5LFxuICAgICAgICAgIHJpcHBsZVN0eWxlID0gX3Byb3BzLnJpcHBsZVN0eWxlLFxuICAgICAgICAgIHNlY29uZGFyeSA9IF9wcm9wcy5zZWNvbmRhcnksXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnYmFja2dyb3VuZENvbG9yJywgJ2J1dHRvblN0eWxlJywgJ2NoaWxkcmVuJywgJ2NsYXNzTmFtZScsICdkaXNhYmxlZCcsICdkaXNhYmxlZEJhY2tncm91bmRDb2xvcicsICdkaXNhYmxlZExhYmVsQ29sb3InLCAnZnVsbFdpZHRoJywgJ2ljb24nLCAnbGFiZWwnLCAnbGFiZWxDb2xvcicsICdsYWJlbFBvc2l0aW9uJywgJ2xhYmVsU3R5bGUnLCAnb3ZlcmxheVN0eWxlJywgJ3ByaW1hcnknLCAncmlwcGxlU3R5bGUnLCAnc2Vjb25kYXJ5JywgJ3N0eWxlJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMuc3RhdGUpO1xuICAgICAgdmFyIG1lcmdlZFJpcHBsZVN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLnJpcHBsZSwgcmlwcGxlU3R5bGUpO1xuXG4gICAgICB2YXIgYnV0dG9uRXZlbnRIYW5kbGVycyA9IGRpc2FibGVkID8ge30gOiB7XG4gICAgICAgIG9uTW91c2VEb3duOiB0aGlzLmhhbmRsZU1vdXNlRG93bixcbiAgICAgICAgb25Nb3VzZVVwOiB0aGlzLmhhbmRsZU1vdXNlVXAsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5oYW5kbGVNb3VzZUxlYXZlLFxuICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuaGFuZGxlTW91c2VFbnRlcixcbiAgICAgICAgb25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG4gICAgICAgIG9uVG91Y2hFbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmQsXG4gICAgICAgIG9uS2V5Ym9hcmRGb2N1czogdGhpcy5oYW5kbGVLZXlib2FyZEZvY3VzXG4gICAgICB9O1xuXG4gICAgICB2YXIgbGFiZWxFbGVtZW50ID0gbGFiZWwgJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmxhYmVsLCBsYWJlbFN0eWxlKSksIGtleTogJ2xhYmVsRWxlbWVudCcgfSxcbiAgICAgICAgbGFiZWxcbiAgICAgICk7XG5cbiAgICAgIHZhciBpY29uQ2xvbmVkID0gaWNvbiAmJiAoMCwgX3JlYWN0LmNsb25lRWxlbWVudCkoaWNvbiwge1xuICAgICAgICBjb2xvcjogaWNvbi5wcm9wcy5jb2xvciB8fCBzdHlsZXMubGFiZWwuY29sb3IsXG4gICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmljb24sIGljb24ucHJvcHMuc3R5bGUpLFxuICAgICAgICBrZXk6ICdpY29uQ2xvbmVkJ1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFBsYWNlIGxhYmVsIGJlZm9yZSBvciBhZnRlciBjaGlsZHJlbi5cbiAgICAgIHZhciBlbmhhbmNlZEJ1dHRvbkNoaWxkcmVuID0gbGFiZWxQb3NpdGlvbiA9PT0gJ2JlZm9yZScgPyBbbGFiZWxFbGVtZW50LCBpY29uQ2xvbmVkLCBjaGlsZHJlbl0gOiBbY2hpbGRyZW4sIGljb25DbG9uZWQsIGxhYmVsRWxlbWVudF07XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1BhcGVyMi5kZWZhdWx0LFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpLFxuICAgICAgICAgIHpEZXB0aDogdGhpcy5zdGF0ZS56RGVwdGhcbiAgICAgICAgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX0VuaGFuY2VkQnV0dG9uMi5kZWZhdWx0LFxuICAgICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCBidXR0b25FdmVudEhhbmRsZXJzLCB7XG4gICAgICAgICAgICByZWY6ICdjb250YWluZXInLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMuYnV0dG9uLCBidXR0b25TdHlsZSksXG4gICAgICAgICAgICBmb2N1c1JpcHBsZUNvbG9yOiBtZXJnZWRSaXBwbGVTdHlsZXMuY29sb3IsXG4gICAgICAgICAgICB0b3VjaFJpcHBsZUNvbG9yOiBtZXJnZWRSaXBwbGVTdHlsZXMuY29sb3IsXG4gICAgICAgICAgICBmb2N1c1JpcHBsZU9wYWNpdHk6IG1lcmdlZFJpcHBsZVN0eWxlcy5vcGFjaXR5LFxuICAgICAgICAgICAgdG91Y2hSaXBwbGVPcGFjaXR5OiBtZXJnZWRSaXBwbGVTdHlsZXMub3BhY2l0eVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogJ292ZXJsYXknLFxuICAgICAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLm92ZXJsYXksIG92ZXJsYXlTdHlsZSkpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5oYW5jZWRCdXR0b25DaGlsZHJlblxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFJhaXNlZEJ1dHRvbjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblJhaXNlZEJ1dHRvbi5tdWlOYW1lID0gJ1JhaXNlZEJ1dHRvbic7XG5SYWlzZWRCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIGxhYmVsUG9zaXRpb246ICdhZnRlcicsXG4gIGZ1bGxXaWR0aDogZmFsc2UsXG4gIHByaW1hcnk6IGZhbHNlLFxuICBzZWNvbmRhcnk6IGZhbHNlXG59O1xuUmFpc2VkQnV0dG9uLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5SYWlzZWRCdXR0b24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgYmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIGJ1dHRvbixcbiAgICogYnV0IG5vdCB0aGUgZGVmYXVsdCBkaXNhYmxlZCBiYWNrZ3JvdW5kIGNvbG9yXG4gICAqICh1c2UgYGRpc2FibGVkQmFja2dyb3VuZENvbG9yYCBmb3IgdGhpcykuXG4gICAqL1xuICBiYWNrZ3JvdW5kQ29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGJ1dHRvbiBlbGVtZW50LlxuICAgKi9cbiAgYnV0dG9uU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGJ1dHRvbi5cbiAgICogSWYgYSBsYWJlbCBpcyBwcm92aWRlZCB2aWEgdGhlIGBsYWJlbGAgcHJvcCwgdGhlIHRleHQgd2l0aGluIHRoZSBsYWJlbFxuICAgKiB3aWxsIGJlIGRpc3BsYXllZCBpbiBhZGRpdGlvbiB0byB0aGUgY29udGVudCBwcm92aWRlZCBoZXJlLlxuICAgKi9cbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBDU1MgY2xhc3MgbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAgKiBUaGUgZWxlbWVudCB0byB1c2UgYXMgdGhlIGNvbnRhaW5lciBmb3IgdGhlIFJhaXNlZEJ1dHRvbi4gRWl0aGVyIGEgc3RyaW5nIHRvXG4gICAgKiB1c2UgYSBET00gZWxlbWVudCBvciBhIFJlYWN0RWxlbWVudC4gVGhpcyBpcyB1c2VmdWwgZm9yIHdyYXBwaW5nIHRoZVxuICAgICogUmFpc2VkQnV0dG9uIGluIGEgY3VzdG9tIExpbmsgY29tcG9uZW50LiBJZiBhIFJlYWN0RWxlbWVudCBpcyBnaXZlbiwgZW5zdXJlXG4gICAgKiB0aGF0IGl0IHBhc3NlcyBhbGwgb2YgaXRzIGdpdmVuIHByb3BzIHRocm91Z2ggdG8gdGhlIHVuZGVybHlpbmcgRE9NXG4gICAgKiBlbGVtZW50IGFuZCByZW5kZXJzIGl0cyBjaGlsZHJlbiBwcm9wIGZvciBwcm9wZXIgaW50ZWdyYXRpb24uXG4gICAgKi9cbiAgY29udGFpbmVyRWxlbWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnRdKSxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBlbGVtZW50J3MgcmlwcGxlIGVmZmVjdCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZVRvdWNoUmlwcGxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgYnV0dG9uIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgYmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIGJ1dHRvblxuICAgKiB3aGVuIGl0IGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBidXR0b24ncyBsYWJlbCB3aGVuIHRoZSBidXR0b24gaXMgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZExhYmVsQ29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cbiAgICovXG4gIGZ1bGxXaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhlIFVSTCB0byBsaW5rIHRvIHdoZW4gdGhlIGJ1dHRvbiBpcyBjbGlja2VkLlxuICAgKi9cbiAgaHJlZjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBBbiBpY29uIHRvIGJlIGRpc3BsYXllZCB3aXRoaW4gdGhlIGJ1dHRvbi5cbiAgICovXG4gIGljb246IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBsYWJlbCB0byBiZSBkaXNwbGF5ZWQgd2l0aGluIHRoZSBidXR0b24uXG4gICAqIElmIGNvbnRlbnQgaXMgcHJvdmlkZWQgdmlhIHRoZSBgY2hpbGRyZW5gIHByb3AsIHRoYXQgY29udGVudCB3aWxsIGJlXG4gICAqIGRpc3BsYXllZCBpbiBhZGRpdGlvbiB0byB0aGUgbGFiZWwgcHJvdmlkZWQgaGVyZS5cbiAgICovXG4gIGxhYmVsOiB2YWxpZGF0ZUxhYmVsLFxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBidXR0b24ncyBsYWJlbC5cbiAgICovXG4gIGxhYmVsQ29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSBidXR0b24ncyBsYWJlbCByZWxhdGl2ZSB0byB0aGUgYnV0dG9uJ3MgYGNoaWxkcmVuYC5cbiAgICovXG4gIGxhYmVsUG9zaXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoWydiZWZvcmUnLCAnYWZ0ZXInXSksXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgYnV0dG9uJ3MgbGFiZWwgZWxlbWVudC5cbiAgICovXG4gIGxhYmVsU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlRG93bjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlRW50ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZUxlYXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VVcDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvblRvdWNoRW5kOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uVG91Y2hTdGFydDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiB0aGUgYnV0dG9uIGlzIHRvdWNoLXRhcHBlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRvdWNoVGFwIGV2ZW50IHRhcmdldGluZyB0aGUgYnV0dG9uLlxuICAgKi9cbiAgb25Ub3VjaFRhcDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZSBzdHlsZSBvZiB0aGUgYnV0dG9uIG92ZXJsYXkuXG4gICAqL1xuICBvdmVybGF5U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIHVzZSB0aGUgdGhlbWUncyBwcmltYXJ5IGNvbG9yLlxuICAgKi9cbiAgcHJpbWFyeTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZSBzdHlsZSBvZiB0aGUgcmlwcGxlIGVsZW1lbnQuXG4gICAqL1xuICByaXBwbGVTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgYnV0dG9uIHdpbGwgdXNlIHRoZSB0aGVtZSdzIHNlY29uZGFyeSBjb2xvci5cbiAgICogSWYgYm90aCBgc2Vjb25kYXJ5YCBhbmQgYHByaW1hcnlgIGFyZSB0cnVlLCB0aGUgYnV0dG9uIHdpbGwgdXNlXG4gICAqIHRoZSB0aGVtZSdzIHByaW1hcnkgY29sb3IuXG4gICAqL1xuICBzZWNvbmRhcnk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJhaXNlZEJ1dHRvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uL1JhaXNlZEJ1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gOTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdEV2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCdyZWFjdC1ldmVudC1saXN0ZW5lcicpO1xuXG52YXIgX3JlYWN0RXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEV2ZW50TGlzdGVuZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcm93c0hlaWdodCA9IDI0O1xuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQsIHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScgfSxcbiAgICB0ZXh0YXJlYToge1xuICAgICAgaGVpZ2h0OiBzdGF0ZS5oZWlnaHQsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgcmVzaXplOiAnbm9uZScsXG4gICAgICBmb250OiAnaW5oZXJpdCcsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgY3Vyc29yOiAnaW5oZXJpdCdcbiAgICB9LFxuICAgIHNoYWRvdzoge1xuICAgICAgcmVzaXplOiAnbm9uZScsXG4gICAgICAvLyBPdmVyZmxvdyBhbHNvIG5lZWRlZCB0byBoZXJlIHRvIHJlbW92ZSB0aGUgZXh0cmEgcm93XG4gICAgICAvLyBhZGRlZCB0byB0ZXh0YXJlYXMgaW4gRmlyZWZveC5cbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIC8vIFZpc2liaWxpdHkgbmVlZGVkIHRvIGhpZGUgdGhlIGV4dHJhIHRleHQgYXJlYSBvbiBpcGFkc1xuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGhlaWdodDogJ2F1dG8nXG4gICAgfVxuICB9O1xufVxuXG52YXIgRW5oYW5jZWRUZXh0YXJlYSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKEVuaGFuY2VkVGV4dGFyZWEsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEVuaGFuY2VkVGV4dGFyZWEoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgRW5oYW5jZWRUZXh0YXJlYSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBFbmhhbmNlZFRleHRhcmVhLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShFbmhhbmNlZFRleHRhcmVhKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBoZWlnaHQ6IG51bGxcbiAgICB9LCBfdGhpcy5oYW5kbGVSZXNpemUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnN5bmNIZWlnaHRXaXRoU2hhZG93KHVuZGVmaW5lZCwgZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICBfdGhpcy5zeW5jSGVpZ2h0V2l0aFNoYWRvdyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlTGluaycpKSB7XG4gICAgICAgIF90aGlzLnByb3BzLnZhbHVlTGluay5yZXF1ZXN0Q2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKEVuaGFuY2VkVGV4dGFyZWEsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5yb3dzICogcm93c0hlaWdodFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc3luY0hlaWdodFdpdGhTaGFkb3coKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUgfHwgbmV4dFByb3BzLnJvd3NNYXggIT09IHRoaXMucHJvcHMucm93c01heCkge1xuICAgICAgICB0aGlzLnN5bmNIZWlnaHRXaXRoU2hhZG93KG5leHRQcm9wcy52YWx1ZSwgbnVsbCwgbmV4dFByb3BzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRJbnB1dE5vZGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnB1dE5vZGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZzLmlucHV0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgIHRoaXMuZ2V0SW5wdXROb2RlKCkudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc3luY0hlaWdodFdpdGhTaGFkb3codmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N5bmNIZWlnaHRXaXRoU2hhZG93JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3luY0hlaWdodFdpdGhTaGFkb3cobmV3VmFsdWUsIGV2ZW50LCBwcm9wcykge1xuICAgICAgdmFyIHNoYWRvdyA9IHRoaXMucmVmcy5zaGFkb3c7XG4gICAgICB2YXIgZGlzcGxheVRleHQgPSB0aGlzLnByb3BzLmhpbnRUZXh0ICYmIChuZXdWYWx1ZSA9PT0gJycgfHwgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBuZXdWYWx1ZSA9PT0gbnVsbCkgPyB0aGlzLnByb3BzLmhpbnRUZXh0IDogbmV3VmFsdWU7XG5cbiAgICAgIGlmIChkaXNwbGF5VGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNoYWRvdy52YWx1ZSA9IGRpc3BsYXlUZXh0O1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3SGVpZ2h0ID0gc2hhZG93LnNjcm9sbEhlaWdodDtcblxuICAgICAgLy8gR3VhcmRpbmcgZm9yIGpzZG9tLCB3aGVyZSBzY3JvbGxIZWlnaHQgaXNuJ3QgcHJlc2VudC5cbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdG1wdmFyL2pzZG9tL2lzc3Vlcy8xMDEzXG4gICAgICBpZiAobmV3SGVpZ2h0ID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgICAgcHJvcHMgPSBwcm9wcyB8fCB0aGlzLnByb3BzO1xuXG4gICAgICBpZiAocHJvcHMucm93c01heCA+PSBwcm9wcy5yb3dzKSB7XG4gICAgICAgIG5ld0hlaWdodCA9IE1hdGgubWluKHByb3BzLnJvd3NNYXggKiByb3dzSGVpZ2h0LCBuZXdIZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICBuZXdIZWlnaHQgPSBNYXRoLm1heChuZXdIZWlnaHQsIHJvd3NIZWlnaHQpO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5oZWlnaHQgIT09IG5ld0hlaWdodCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBoZWlnaHQ6IG5ld0hlaWdodFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocHJvcHMub25IZWlnaHRDaGFuZ2UpIHtcbiAgICAgICAgICBwcm9wcy5vbkhlaWdodENoYW5nZShldmVudCwgbmV3SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3Byb3BzLm9uQ2hhbmdlLFxuICAgICAgICAgIG9uSGVpZ2h0Q2hhbmdlID0gX3Byb3BzLm9uSGVpZ2h0Q2hhbmdlLFxuICAgICAgICAgIHJvd3MgPSBfcHJvcHMucm93cyxcbiAgICAgICAgICByb3dzTWF4ID0gX3Byb3BzLnJvd3NNYXgsXG4gICAgICAgICAgc2hhZG93U3R5bGUgPSBfcHJvcHMuc2hhZG93U3R5bGUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgaGludFRleHQgPSBfcHJvcHMuaGludFRleHQsXG4gICAgICAgICAgdGV4dGFyZWFTdHlsZSA9IF9wcm9wcy50ZXh0YXJlYVN0eWxlLFxuICAgICAgICAgIHZhbHVlTGluayA9IF9wcm9wcy52YWx1ZUxpbmssXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnb25DaGFuZ2UnLCAnb25IZWlnaHRDaGFuZ2UnLCAncm93cycsICdyb3dzTWF4JywgJ3NoYWRvd1N0eWxlJywgJ3N0eWxlJywgJ2hpbnRUZXh0JywgJ3RleHRhcmVhU3R5bGUnLCAndmFsdWVMaW5rJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMuc3RhdGUpO1xuICAgICAgdmFyIHJvb3RTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKTtcbiAgICAgIHZhciB0ZXh0YXJlYVN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMudGV4dGFyZWEsIHRleHRhcmVhU3R5bGUpO1xuICAgICAgdmFyIHNoYWRvd1N0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgdGV4dGFyZWFTdHlsZXMsIHN0eWxlcy5zaGFkb3csIHNoYWRvd1N0eWxlKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlTGluaycpKSB7XG4gICAgICAgIG90aGVyLnZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZUxpbmsudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMocm9vdFN0eWxlcykgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0RXZlbnRMaXN0ZW5lcjIuZGVmYXVsdCwgeyB0YXJnZXQ6ICd3aW5kb3cnLCBvblJlc2l6ZTogdGhpcy5oYW5kbGVSZXNpemUgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIHtcbiAgICAgICAgICByZWY6ICdzaGFkb3cnLFxuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKHNoYWRvd1N0eWxlcyksXG4gICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgcm93czogdGhpcy5wcm9wcy5yb3dzLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUsXG4gICAgICAgICAgdmFsdWVMaW5rOiB0aGlzLnByb3BzLnZhbHVlTGlua1xuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHtcbiAgICAgICAgICByZWY6ICdpbnB1dCcsXG4gICAgICAgICAgcm93czogdGhpcy5wcm9wcy5yb3dzLFxuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKHRleHRhcmVhU3R5bGVzKSxcbiAgICAgICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVDaGFuZ2VcbiAgICAgICAgfSkpXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRW5oYW5jZWRUZXh0YXJlYTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkVuaGFuY2VkVGV4dGFyZWEuZGVmYXVsdFByb3BzID0ge1xuICByb3dzOiAxXG59O1xuRW5oYW5jZWRUZXh0YXJlYS5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuRW5oYW5jZWRUZXh0YXJlYS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGRlZmF1bHRWYWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGhpbnRUZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uSGVpZ2h0Q2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHJvd3M6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICByb3dzTWF4OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgc2hhZG93U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgdGV4dGFyZWFTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdmFsdWVMaW5rOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gRW5oYW5jZWRUZXh0YXJlYTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL0VuaGFuY2VkVGV4dGFyZWEuanNcbi8vIG1vZHVsZSBpZCA9IDkyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfc2hhbGxvd0VxdWFsID0gcmVxdWlyZSgncmVjb21wb3NlL3NoYWxsb3dFcXVhbCcpO1xuXG52YXIgX3NoYWxsb3dFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFsbG93RXF1YWwpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX0VuaGFuY2VkVGV4dGFyZWEgPSByZXF1aXJlKCcuL0VuaGFuY2VkVGV4dGFyZWEnKTtcblxudmFyIF9FbmhhbmNlZFRleHRhcmVhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0VuaGFuY2VkVGV4dGFyZWEpO1xuXG52YXIgX1RleHRGaWVsZEhpbnQgPSByZXF1aXJlKCcuL1RleHRGaWVsZEhpbnQnKTtcblxudmFyIF9UZXh0RmllbGRIaW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RleHRGaWVsZEhpbnQpO1xuXG52YXIgX1RleHRGaWVsZExhYmVsID0gcmVxdWlyZSgnLi9UZXh0RmllbGRMYWJlbCcpO1xuXG52YXIgX1RleHRGaWVsZExhYmVsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RleHRGaWVsZExhYmVsKTtcblxudmFyIF9UZXh0RmllbGRVbmRlcmxpbmUgPSByZXF1aXJlKCcuL1RleHRGaWVsZFVuZGVybGluZScpO1xuXG52YXIgX1RleHRGaWVsZFVuZGVybGluZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UZXh0RmllbGRVbmRlcmxpbmUpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCwgc3RhdGUpIHtcbiAgdmFyIF9jb250ZXh0JG11aVRoZW1lID0gY29udGV4dC5tdWlUaGVtZSxcbiAgICAgIGJhc2VUaGVtZSA9IF9jb250ZXh0JG11aVRoZW1lLmJhc2VUaGVtZSxcbiAgICAgIF9jb250ZXh0JG11aVRoZW1lJHRleCA9IF9jb250ZXh0JG11aVRoZW1lLnRleHRGaWVsZCxcbiAgICAgIGZsb2F0aW5nTGFiZWxDb2xvciA9IF9jb250ZXh0JG11aVRoZW1lJHRleC5mbG9hdGluZ0xhYmVsQ29sb3IsXG4gICAgICBmb2N1c0NvbG9yID0gX2NvbnRleHQkbXVpVGhlbWUkdGV4LmZvY3VzQ29sb3IsXG4gICAgICB0ZXh0Q29sb3IgPSBfY29udGV4dCRtdWlUaGVtZSR0ZXgudGV4dENvbG9yLFxuICAgICAgZGlzYWJsZWRUZXh0Q29sb3IgPSBfY29udGV4dCRtdWlUaGVtZSR0ZXguZGlzYWJsZWRUZXh0Q29sb3IsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBfY29udGV4dCRtdWlUaGVtZSR0ZXguYmFja2dyb3VuZENvbG9yLFxuICAgICAgZXJyb3JDb2xvciA9IF9jb250ZXh0JG11aVRoZW1lJHRleC5lcnJvckNvbG9yO1xuXG5cbiAgdmFyIHN0eWxlcyA9IHtcbiAgICByb290OiB7XG4gICAgICBmb250U2l6ZTogMTYsXG4gICAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXG4gICAgICB3aWR0aDogcHJvcHMuZnVsbFdpZHRoID8gJzEwMCUnIDogMjU2LFxuICAgICAgaGVpZ2h0OiAocHJvcHMucm93cyAtIDEpICogMjQgKyAocHJvcHMuZmxvYXRpbmdMYWJlbFRleHQgPyA3MiA6IDQ4KSxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvcixcbiAgICAgIGZvbnRGYW1pbHk6IGJhc2VUaGVtZS5mb250RmFtaWx5LFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzIwMG1zJywgJ2hlaWdodCcpLFxuICAgICAgY3Vyc29yOiBwcm9wcy5kaXNhYmxlZCA/ICdub3QtYWxsb3dlZCcgOiAnYXV0bydcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGJvdHRvbTogMixcbiAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgIGxpbmVIZWlnaHQ6ICcxMnB4JyxcbiAgICAgIGNvbG9yOiBlcnJvckNvbG9yLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKVxuICAgIH0sXG4gICAgZmxvYXRpbmdMYWJlbDoge1xuICAgICAgY29sb3I6IHByb3BzLmRpc2FibGVkID8gZGlzYWJsZWRUZXh0Q29sb3IgOiBmbG9hdGluZ0xhYmVsQ29sb3IsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICB9LFxuICAgIGlucHV0OiB7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDApJyxcbiAgICAgIGNvbG9yOiBwcm9wcy5kaXNhYmxlZCA/IGRpc2FibGVkVGV4dENvbG9yIDogdGV4dENvbG9yLFxuICAgICAgY3Vyc29yOiAnaW5oZXJpdCcsXG4gICAgICBmb250OiAnaW5oZXJpdCcsXG4gICAgICBXZWJraXRUZXh0RmlsbENvbG9yOiBwcm9wcy5kaXNhYmxlZCA/IGRpc2FibGVkVGV4dENvbG9yIDogdGV4dENvbG9yLFxuICAgICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6ICdyZ2JhKDAsMCwwLDApJyB9LFxuICAgIGlucHV0TmF0aXZlOiB7XG4gICAgICBhcHBlYXJhbmNlOiAndGV4dGZpZWxkJyB9XG4gIH07XG5cbiAgc3R5bGVzLnRleHRhcmVhID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMuaW5wdXQsIHtcbiAgICBtYXJnaW5Ub3A6IHByb3BzLmZsb2F0aW5nTGFiZWxUZXh0ID8gMzYgOiAxMixcbiAgICBtYXJnaW5Cb3R0b206IHByb3BzLmZsb2F0aW5nTGFiZWxUZXh0ID8gLTM2IDogLTEyLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGZvbnQ6ICdpbmhlcml0J1xuICB9KTtcblxuICAvLyBEbyBub3QgYXNzaWduIGEgaGVpZ2h0IHRvIHRoZSB0ZXh0YXJlYSBhcyBoZSBoYW5kbGVzIGl0IG9uIGhpcyBvd24uXG4gIHN0eWxlcy5pbnB1dC5oZWlnaHQgPSAnMTAwJSc7XG5cbiAgaWYgKHN0YXRlLmlzRm9jdXNlZCkge1xuICAgIHN0eWxlcy5mbG9hdGluZ0xhYmVsLmNvbG9yID0gZm9jdXNDb2xvcjtcbiAgfVxuXG4gIGlmIChwcm9wcy5mbG9hdGluZ0xhYmVsVGV4dCkge1xuICAgIHN0eWxlcy5pbnB1dC5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG5cbiAgICBpZiAoIXByb3BzLm11bHRpTGluZSkge1xuICAgICAgc3R5bGVzLmlucHV0Lm1hcmdpblRvcCA9IDE0O1xuICAgIH1cblxuICAgIGlmIChzdGF0ZS5lcnJvclRleHQpIHtcbiAgICAgIHN0eWxlcy5lcnJvci5ib3R0b20gPSAhcHJvcHMubXVsdGlMaW5lID8gc3R5bGVzLmVycm9yLmZvbnRTaXplICsgMyA6IDM7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0YXRlLmVycm9yVGV4dCkge1xuICAgIGlmIChzdGF0ZS5pc0ZvY3VzZWQpIHtcbiAgICAgIHN0eWxlcy5mbG9hdGluZ0xhYmVsLmNvbG9yID0gc3R5bGVzLmVycm9yLmNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgdmFsaWQgdG8gYmUgZGlzcGxheWVkIGluc2lkZSBhbiBpbnB1dC5cbiAqXG4gKiBAcGFyYW0gVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgc3RyaW5nIHByb3ZpZGVkIGlzIHZhbGlkLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSAnJyAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmICEoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKTtcbn1cblxudmFyIFRleHRGaWVsZCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFRleHRGaWVsZCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVGV4dEZpZWxkKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFRleHRGaWVsZCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBUZXh0RmllbGQuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFRleHRGaWVsZCkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgaXNGb2N1c2VkOiBmYWxzZSxcbiAgICAgIGVycm9yVGV4dDogdW5kZWZpbmVkLFxuICAgICAgaGFzVmFsdWU6IGZhbHNlXG4gICAgfSwgX3RoaXMuaGFuZGxlSW5wdXRCbHVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGlzRm9jdXNlZDogZmFsc2UgfSk7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQmx1cihldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBoYXNWYWx1ZTogaXNWYWxpZChldmVudC50YXJnZXQudmFsdWUpIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCBldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZUlucHV0Rm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGlzRm9jdXNlZDogdHJ1ZSB9KTtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZUhlaWdodENoYW5nZSA9IGZ1bmN0aW9uIChldmVudCwgaGVpZ2h0KSB7XG4gICAgICB2YXIgbmV3SGVpZ2h0ID0gaGVpZ2h0ICsgMjQ7XG4gICAgICBpZiAoX3RoaXMucHJvcHMuZmxvYXRpbmdMYWJlbFRleHQpIHtcbiAgICAgICAgbmV3SGVpZ2h0ICs9IDI0O1xuICAgICAgfVxuICAgICAgX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKF90aGlzKS5zdHlsZS5oZWlnaHQgPSBuZXdIZWlnaHQgKyAncHgnO1xuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShUZXh0RmllbGQsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgbmFtZSA9IF9wcm9wcy5uYW1lLFxuICAgICAgICAgIGhpbnRUZXh0ID0gX3Byb3BzLmhpbnRUZXh0LFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0ID0gX3Byb3BzLmZsb2F0aW5nTGFiZWxUZXh0LFxuICAgICAgICAgIGlkID0gX3Byb3BzLmlkO1xuXG5cbiAgICAgIHZhciBwcm9wc0xlYWYgPSBjaGlsZHJlbiA/IGNoaWxkcmVuLnByb3BzIDogdGhpcy5wcm9wcztcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVycm9yVGV4dDogdGhpcy5wcm9wcy5lcnJvclRleHQsXG4gICAgICAgIGhhc1ZhbHVlOiBpc1ZhbGlkKHByb3BzTGVhZi52YWx1ZSkgfHwgaXNWYWxpZChwcm9wc0xlYWYuZGVmYXVsdFZhbHVlKVxuICAgICAgfSk7XG5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkobmFtZSB8fCBoaW50VGV4dCB8fCBmbG9hdGluZ0xhYmVsVGV4dCB8fCBpZCwgJ01hdGVyaWFsLVVJOiBXZSBkb25cXCd0IGhhdmUgZW5vdWdoIGluZm9ybWF0aW9uXFxuICAgICAgdG8gYnVpbGQgYSByb2J1c3QgdW5pcXVlIGlkIGZvciB0aGUgVGV4dEZpZWxkIGNvbXBvbmVudC4gUGxlYXNlIHByb3ZpZGUgYW4gaWQgb3IgYSBuYW1lLicpIDogdm9pZCAwO1xuXG4gICAgICB2YXIgdW5pcXVlSWQgPSBuYW1lICsgJy0nICsgaGludFRleHQgKyAnLScgKyBmbG9hdGluZ0xhYmVsVGV4dCArICctJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDB4RkZGRik7XG4gICAgICB0aGlzLnVuaXF1ZUlkID0gdW5pcXVlSWQucmVwbGFjZSgvW15BLVphLXowLTktXS9naSwgJycpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKG5leHRQcm9wcy5lcnJvclRleHQgIT09IHRoaXMucHJvcHMuZXJyb3JUZXh0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGVycm9yVGV4dDogbmV4dFByb3BzLmVycm9yVGV4dFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5leHRQcm9wcy5jaGlsZHJlbiAmJiBuZXh0UHJvcHMuY2hpbGRyZW4ucHJvcHMpIHtcbiAgICAgICAgbmV4dFByb3BzID0gbmV4dFByb3BzLmNoaWxkcmVuLnByb3BzO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dFByb3BzLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgIHZhciBoYXNWYWx1ZSA9IGlzVmFsaWQobmV4dFByb3BzLnZhbHVlKTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBoYXNWYWx1ZTogaGFzVmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkge1xuICAgICAgcmV0dXJuICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMuc3RhdGUsIG5leHRTdGF0ZSkgfHwgISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLmNvbnRleHQsIG5leHRDb250ZXh0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdibHVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgIGlmICh0aGlzLmlucHV0KSB7XG4gICAgICAgIHRoaXMuZ2V0SW5wdXROb2RlKCkuYmx1cigpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZvY3VzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICBpZiAodGhpcy5pbnB1dCkge1xuICAgICAgICB0aGlzLmdldElucHV0Tm9kZSgpLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2VsZWN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VsZWN0KCkge1xuICAgICAgaWYgKHRoaXMuaW5wdXQpIHtcbiAgICAgICAgdGhpcy5nZXRJbnB1dE5vZGUoKS5zZWxlY3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5wdXQgPyB0aGlzLmdldElucHV0Tm9kZSgpLnZhbHVlIDogdW5kZWZpbmVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldElucHV0Tm9kZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldElucHV0Tm9kZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuIHx8IHRoaXMucHJvcHMubXVsdGlMaW5lID8gdGhpcy5pbnB1dC5nZXRJbnB1dE5vZGUoKSA6IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLmlucHV0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfaXNDb250cm9sbGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2lzQ29udHJvbGxlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmhhc093blByb3BlcnR5KCd2YWx1ZScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wczIuY2xhc3NOYW1lLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzMi5kaXNhYmxlZCxcbiAgICAgICAgICBlcnJvclN0eWxlID0gX3Byb3BzMi5lcnJvclN0eWxlLFxuICAgICAgICAgIGVycm9yVGV4dCA9IF9wcm9wczIuZXJyb3JUZXh0LFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxGaXhlZCA9IF9wcm9wczIuZmxvYXRpbmdMYWJlbEZpeGVkLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxGb2N1c1N0eWxlID0gX3Byb3BzMi5mbG9hdGluZ0xhYmVsRm9jdXNTdHlsZSxcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsU2hyaW5rU3R5bGUgPSBfcHJvcHMyLmZsb2F0aW5nTGFiZWxTaHJpbmtTdHlsZSxcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsU3R5bGUgPSBfcHJvcHMyLmZsb2F0aW5nTGFiZWxTdHlsZSxcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dCA9IF9wcm9wczIuZmxvYXRpbmdMYWJlbFRleHQsXG4gICAgICAgICAgZnVsbFdpZHRoID0gX3Byb3BzMi5mdWxsV2lkdGgsXG4gICAgICAgICAgaGludFRleHQgPSBfcHJvcHMyLmhpbnRUZXh0LFxuICAgICAgICAgIGhpbnRTdHlsZSA9IF9wcm9wczIuaGludFN0eWxlLFxuICAgICAgICAgIGlkID0gX3Byb3BzMi5pZCxcbiAgICAgICAgICBpbnB1dFN0eWxlID0gX3Byb3BzMi5pbnB1dFN0eWxlLFxuICAgICAgICAgIG11bHRpTGluZSA9IF9wcm9wczIubXVsdGlMaW5lLFxuICAgICAgICAgIG9uQmx1ciA9IF9wcm9wczIub25CbHVyLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3Byb3BzMi5vbkNoYW5nZSxcbiAgICAgICAgICBvbkZvY3VzID0gX3Byb3BzMi5vbkZvY3VzLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzMi5zdHlsZSxcbiAgICAgICAgICB0eXBlID0gX3Byb3BzMi50eXBlLFxuICAgICAgICAgIHVuZGVybGluZURpc2FibGVkU3R5bGUgPSBfcHJvcHMyLnVuZGVybGluZURpc2FibGVkU3R5bGUsXG4gICAgICAgICAgdW5kZXJsaW5lRm9jdXNTdHlsZSA9IF9wcm9wczIudW5kZXJsaW5lRm9jdXNTdHlsZSxcbiAgICAgICAgICB1bmRlcmxpbmVTaG93ID0gX3Byb3BzMi51bmRlcmxpbmVTaG93LFxuICAgICAgICAgIHVuZGVybGluZVN0eWxlID0gX3Byb3BzMi51bmRlcmxpbmVTdHlsZSxcbiAgICAgICAgICByb3dzID0gX3Byb3BzMi5yb3dzLFxuICAgICAgICAgIHJvd3NNYXggPSBfcHJvcHMyLnJvd3NNYXgsXG4gICAgICAgICAgdGV4dGFyZWFTdHlsZSA9IF9wcm9wczIudGV4dGFyZWFTdHlsZSxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wczIsIFsnY2hpbGRyZW4nLCAnY2xhc3NOYW1lJywgJ2Rpc2FibGVkJywgJ2Vycm9yU3R5bGUnLCAnZXJyb3JUZXh0JywgJ2Zsb2F0aW5nTGFiZWxGaXhlZCcsICdmbG9hdGluZ0xhYmVsRm9jdXNTdHlsZScsICdmbG9hdGluZ0xhYmVsU2hyaW5rU3R5bGUnLCAnZmxvYXRpbmdMYWJlbFN0eWxlJywgJ2Zsb2F0aW5nTGFiZWxUZXh0JywgJ2Z1bGxXaWR0aCcsICdoaW50VGV4dCcsICdoaW50U3R5bGUnLCAnaWQnLCAnaW5wdXRTdHlsZScsICdtdWx0aUxpbmUnLCAnb25CbHVyJywgJ29uQ2hhbmdlJywgJ29uRm9jdXMnLCAnc3R5bGUnLCAndHlwZScsICd1bmRlcmxpbmVEaXNhYmxlZFN0eWxlJywgJ3VuZGVybGluZUZvY3VzU3R5bGUnLCAndW5kZXJsaW5lU2hvdycsICd1bmRlcmxpbmVTdHlsZScsICdyb3dzJywgJ3Jvd3NNYXgnLCAndGV4dGFyZWFTdHlsZSddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0LCB0aGlzLnN0YXRlKTtcbiAgICAgIHZhciBpbnB1dElkID0gaWQgfHwgdGhpcy51bmlxdWVJZDtcblxuICAgICAgdmFyIGVycm9yVGV4dEVsZW1lbnQgPSB0aGlzLnN0YXRlLmVycm9yVGV4dCAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5lcnJvciwgZXJyb3JTdHlsZSkpIH0sXG4gICAgICAgIHRoaXMuc3RhdGUuZXJyb3JUZXh0XG4gICAgICApO1xuXG4gICAgICB2YXIgZmxvYXRpbmdMYWJlbFRleHRFbGVtZW50ID0gZmxvYXRpbmdMYWJlbFRleHQgJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9UZXh0RmllbGRMYWJlbDIuZGVmYXVsdCxcbiAgICAgICAge1xuICAgICAgICAgIG11aVRoZW1lOiB0aGlzLmNvbnRleHQubXVpVGhlbWUsXG4gICAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMuZmxvYXRpbmdMYWJlbCwgZmxvYXRpbmdMYWJlbFN0eWxlLCB0aGlzLnN0YXRlLmlzRm9jdXNlZCA/IGZsb2F0aW5nTGFiZWxGb2N1c1N0eWxlIDogbnVsbCksXG4gICAgICAgICAgc2hyaW5rU3R5bGU6IGZsb2F0aW5nTGFiZWxTaHJpbmtTdHlsZSxcbiAgICAgICAgICBodG1sRm9yOiBpbnB1dElkLFxuICAgICAgICAgIHNocmluazogdGhpcy5zdGF0ZS5oYXNWYWx1ZSB8fCB0aGlzLnN0YXRlLmlzRm9jdXNlZCB8fCBmbG9hdGluZ0xhYmVsRml4ZWQsXG4gICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkXG4gICAgICAgIH0sXG4gICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0XG4gICAgICApO1xuXG4gICAgICB2YXIgaW5wdXRQcm9wcyA9IHtcbiAgICAgICAgaWQ6IGlucHV0SWQsXG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGVsZW0pIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLmlucHV0ID0gZWxlbTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMucHJvcHMuZGlzYWJsZWQsXG4gICAgICAgIG9uQmx1cjogdGhpcy5oYW5kbGVJbnB1dEJsdXIsXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLFxuICAgICAgICBvbkZvY3VzOiB0aGlzLmhhbmRsZUlucHV0Rm9jdXNcbiAgICAgIH07XG5cbiAgICAgIHZhciBjaGlsZFN0eWxlTWVyZ2VkID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5pbnB1dCwgaW5wdXRTdHlsZSk7XG5cbiAgICAgIHZhciBpbnB1dEVsZW1lbnQgPSB2b2lkIDA7XG4gICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgaW5wdXRFbGVtZW50ID0gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZHJlbiwgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgaW5wdXRQcm9wcywgY2hpbGRyZW4ucHJvcHMsIHtcbiAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKGNoaWxkU3R5bGVNZXJnZWQsIGNoaWxkcmVuLnByb3BzLnN0eWxlKVxuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dEVsZW1lbnQgPSBtdWx0aUxpbmUgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRW5oYW5jZWRUZXh0YXJlYTIuZGVmYXVsdCwgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7XG4gICAgICAgICAgc3R5bGU6IGNoaWxkU3R5bGVNZXJnZWQsXG4gICAgICAgICAgdGV4dGFyZWFTdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy50ZXh0YXJlYSwgc3R5bGVzLmlucHV0TmF0aXZlLCB0ZXh0YXJlYVN0eWxlKSxcbiAgICAgICAgICByb3dzOiByb3dzLFxuICAgICAgICAgIHJvd3NNYXg6IHJvd3NNYXgsXG4gICAgICAgICAgaGludFRleHQ6IGhpbnRUZXh0XG4gICAgICAgIH0sIG90aGVyLCBpbnB1dFByb3BzLCB7XG4gICAgICAgICAgb25IZWlnaHRDaGFuZ2U6IHRoaXMuaGFuZGxlSGVpZ2h0Q2hhbmdlXG4gICAgICAgIH0pKSA6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe1xuICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5pbnB1dE5hdGl2ZSwgY2hpbGRTdHlsZU1lcmdlZCkpXG4gICAgICAgIH0sIG90aGVyLCBpbnB1dFByb3BzKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciByb290UHJvcHMgPSB7fTtcblxuICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgIHJvb3RQcm9wcyA9IG90aGVyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCByb290UHJvcHMsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSlcbiAgICAgICAgfSksXG4gICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0RWxlbWVudCxcbiAgICAgICAgaGludFRleHQgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVGV4dEZpZWxkSGludDIuZGVmYXVsdCwge1xuICAgICAgICAgIG11aVRoZW1lOiB0aGlzLmNvbnRleHQubXVpVGhlbWUsXG4gICAgICAgICAgc2hvdzogISh0aGlzLnN0YXRlLmhhc1ZhbHVlIHx8IGZsb2F0aW5nTGFiZWxUZXh0ICYmICF0aGlzLnN0YXRlLmlzRm9jdXNlZCkgfHwgIXRoaXMuc3RhdGUuaGFzVmFsdWUgJiYgZmxvYXRpbmdMYWJlbFRleHQgJiYgZmxvYXRpbmdMYWJlbEZpeGVkICYmICF0aGlzLnN0YXRlLmlzRm9jdXNlZCxcbiAgICAgICAgICBzdHlsZTogaGludFN0eWxlLFxuICAgICAgICAgIHRleHQ6IGhpbnRUZXh0XG4gICAgICAgIH0pIDogbnVsbCxcbiAgICAgICAgaW5wdXRFbGVtZW50LFxuICAgICAgICB1bmRlcmxpbmVTaG93ID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1RleHRGaWVsZFVuZGVybGluZTIuZGVmYXVsdCwge1xuICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICBkaXNhYmxlZFN0eWxlOiB1bmRlcmxpbmVEaXNhYmxlZFN0eWxlLFxuICAgICAgICAgIGVycm9yOiAhIXRoaXMuc3RhdGUuZXJyb3JUZXh0LFxuICAgICAgICAgIGVycm9yU3R5bGU6IGVycm9yU3R5bGUsXG4gICAgICAgICAgZm9jdXM6IHRoaXMuc3RhdGUuaXNGb2N1c2VkLFxuICAgICAgICAgIGZvY3VzU3R5bGU6IHVuZGVybGluZUZvY3VzU3R5bGUsXG4gICAgICAgICAgbXVpVGhlbWU6IHRoaXMuY29udGV4dC5tdWlUaGVtZSxcbiAgICAgICAgICBzdHlsZTogdW5kZXJsaW5lU3R5bGVcbiAgICAgICAgfSkgOiBudWxsLFxuICAgICAgICBlcnJvclRleHRFbGVtZW50XG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gVGV4dEZpZWxkO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuVGV4dEZpZWxkLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBmbG9hdGluZ0xhYmVsRml4ZWQ6IGZhbHNlLFxuICBtdWx0aUxpbmU6IGZhbHNlLFxuICBmdWxsV2lkdGg6IGZhbHNlLFxuICB0eXBlOiAndGV4dCcsXG4gIHVuZGVybGluZVNob3c6IHRydWUsXG4gIHJvd3M6IDFcbn07XG5UZXh0RmllbGQuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblRleHRGaWVsZC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgY3NzIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgdGV4dCBzdHJpbmcgdG8gdXNlIGZvciB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgdGV4dCBmaWVsZCBpZiBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgc3R5bGUgb2JqZWN0IHRvIHVzZSB0byBvdmVycmlkZSBlcnJvciBzdHlsZXMuXG4gICAqL1xuICBlcnJvclN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBlcnJvciBjb250ZW50IHRvIGRpc3BsYXkuXG4gICAqL1xuICBlcnJvclRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBmbG9hdGluZyBsYWJlbCB3aWxsIGZsb2F0IGV2ZW4gd2hlbiB0aGVyZSBpcyBubyB2YWx1ZS5cbiAgICovXG4gIGZsb2F0aW5nTGFiZWxGaXhlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhlIHN0eWxlIG9iamVjdCB0byB1c2UgdG8gb3ZlcnJpZGUgZmxvYXRpbmcgbGFiZWwgc3R5bGVzIHdoZW4gZm9jdXNlZC5cbiAgICovXG4gIGZsb2F0aW5nTGFiZWxGb2N1c1N0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBzdHlsZSBvYmplY3QgdG8gdXNlIHRvIG92ZXJyaWRlIGZsb2F0aW5nIGxhYmVsIHN0eWxlcyB3aGVuIHNocnVuay5cbiAgICovXG4gIGZsb2F0aW5nTGFiZWxTaHJpbmtTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgc3R5bGUgb2JqZWN0IHRvIHVzZSB0byBvdmVycmlkZSBmbG9hdGluZyBsYWJlbCBzdHlsZXMuXG4gICAqL1xuICBmbG9hdGluZ0xhYmVsU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgdG8gdXNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgZWxlbWVudC5cbiAgICovXG4gIGZsb2F0aW5nTGFiZWxUZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgZmllbGQgcmVjZWl2ZXMgdGhlIHByb3BlcnR5IHdpZHRoIDEwMCUuXG4gICAqL1xuICBmdWxsV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBUZXh0RmllbGQncyBoaW50IHRleHQgZWxlbWVudC5cbiAgICovXG4gIGhpbnRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgaGludCBjb250ZW50IHRvIGRpc3BsYXkuXG4gICAqL1xuICBoaW50VGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogVGhlIGlkIHByb3AgZm9yIHRoZSB0ZXh0IGZpZWxkLlxuICAgKi9cbiAgaWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIFRleHRGaWVsZCdzIGlucHV0IGVsZW1lbnQuXG4gICAqIFdoZW4gbXVsdGlMaW5lIGlzIGZhbHNlOiBkZWZpbmUgdGhlIHN0eWxlIG9mIHRoZSBpbnB1dCBlbGVtZW50LlxuICAgKiBXaGVuIG11bHRpTGluZSBpcyB0cnVlOiBkZWZpbmUgdGhlIHN0eWxlIG9mIHRoZSBjb250YWluZXIgb2YgdGhlIHRleHRhcmVhLlxuICAgKi9cbiAgaW5wdXRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBhIHRleHRhcmVhIGVsZW1lbnQgd2lsbCBiZSByZW5kZXJlZC5cbiAgICogVGhlIHRleHRhcmVhIGFsc28gZ3Jvd3MgYW5kIHNocmlua3MgYWNjb3JkaW5nIHRvIHRoZSBudW1iZXIgb2YgbGluZXMuXG4gICAqL1xuICBtdWx0aUxpbmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE5hbWUgYXBwbGllZCB0byB0aGUgaW5wdXQuXG4gICAqL1xuICBuYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25CbHVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiB0aGF0IGlzIGZpcmVkIHdoZW4gdGhlIHRleHRmaWVsZCdzIHZhbHVlIGNoYW5nZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBDaGFuZ2UgZXZlbnQgdGFyZ2V0aW5nIHRoZSB0ZXh0IGZpZWxkLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3VmFsdWUgVGhlIG5ldyB2YWx1ZSBvZiB0aGUgdGV4dCBmaWVsZC5cbiAgICovXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIE51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlbiBtdWx0aUxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93czogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlblxuICAgKiBtdWx0aUxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93c01heDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIFRleHRGaWVsZCdzIHRleHRhcmVhIGVsZW1lbnQuXG4gICAqIFRoZSBUZXh0RmllbGQgdXNlIGVpdGhlciBhIHRleHRhcmVhIG9yIGFuIGlucHV0LFxuICAgKiB0aGlzIHByb3BlcnR5IGhhcyBlZmZlY3RzIG9ubHkgd2hlbiBtdWx0aUxpbmUgaXMgdHJ1ZS5cbiAgICovXG4gIHRleHRhcmVhU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSB0eXBlIG9mIGlucHV0IHRvIGRpc3BsYXlcbiAgICogc3VjaCBhcyBcInBhc3N3b3JkXCIgb3IgXCJ0ZXh0XCIuXG4gICAqL1xuICB0eXBlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZVxuICAgKiBUZXh0RmllbGQncyB1bmRlcmxpbmUgZWxlbWVudCB3aGVuIGRpc2FibGVkLlxuICAgKi9cbiAgdW5kZXJsaW5lRGlzYWJsZWRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgVGV4dEZpZWxkJ3NcbiAgICogdW5kZXJsaW5lIGVsZW1lbnQgd2hlbiBmb2N1c3NlZC5cbiAgICovXG4gIHVuZGVybGluZUZvY3VzU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogSWYgdHJ1ZSwgc2hvd3MgdGhlIHVuZGVybGluZSBmb3IgdGhlIHRleHQgZmllbGQuXG4gICAqL1xuICB1bmRlcmxpbmVTaG93OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgVGV4dEZpZWxkJ3MgdW5kZXJsaW5lIGVsZW1lbnQuXG4gICAqL1xuICB1bmRlcmxpbmVTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIHRleHQgZmllbGQuXG4gICAqL1xuICB2YWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnlcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRleHRGaWVsZDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL1RleHRGaWVsZC5qc1xuLy8gbW9kdWxlIGlkID0gOTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMpIHtcbiAgdmFyIGhpbnRDb2xvciA9IHByb3BzLm11aVRoZW1lLnRleHRGaWVsZC5oaW50Q29sb3IsXG4gICAgICBzaG93ID0gcHJvcHMuc2hvdztcblxuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBvcGFjaXR5OiBzaG93ID8gMSA6IDAsXG4gICAgICBjb2xvcjogaGludENvbG9yLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIGJvdHRvbTogMTJcbiAgICB9XG4gIH07XG59XG5cbnZhciBUZXh0RmllbGRIaW50ID0gZnVuY3Rpb24gVGV4dEZpZWxkSGludChwcm9wcykge1xuICB2YXIgcHJlcGFyZVN0eWxlcyA9IHByb3BzLm11aVRoZW1lLnByZXBhcmVTdHlsZXMsXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgdGV4dCA9IHByb3BzLnRleHQ7XG5cblxuICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHByb3BzKTtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSkgfSxcbiAgICB0ZXh0XG4gICk7XG59O1xuXG5UZXh0RmllbGRIaW50LnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogVGhlIG1hdGVyaWFsLXVpIHRoZW1lIGFwcGxpZWQgdG8gdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIGhpbnQgdGV4dCBzaG91bGQgYmUgdmlzaWJsZS5cbiAgICovXG4gIHNob3c6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgaGludCB0ZXh0IGRpc3BsYXllZC5cbiAgICovXG4gIHRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZVxufSA6IHt9O1xuXG5UZXh0RmllbGRIaW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogdHJ1ZVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dEZpZWxkSGludDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL1RleHRGaWVsZEhpbnQuanNcbi8vIG1vZHVsZSBpZCA9IDkyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzKSB7XG4gIHZhciBkZWZhdWx0U3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxpbmVIZWlnaHQ6ICcyMnB4JyxcbiAgICB0b3A6IDM4LFxuICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgekluZGV4OiAxLCAvLyBOZWVkZWQgdG8gZGlzcGxheSBsYWJlbCBhYm92ZSBDaHJvbWUncyBhdXRvY29tcGxldGUgZmllbGQgYmFja2dyb3VuZFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpIHRyYW5zbGF0ZSgwLCAwKScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCB0b3AnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZSdcbiAgfTtcblxuICB2YXIgc2hyaW5rU3R5bGVzID0gcHJvcHMuc2hyaW5rID8gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjc1KSB0cmFuc2xhdGUoMCwgLTI4cHgpJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgfSwgcHJvcHMuc2hyaW5rU3R5bGUpIDogbnVsbDtcblxuICByZXR1cm4ge1xuICAgIHJvb3Q6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShkZWZhdWx0U3R5bGVzLCBwcm9wcy5zdHlsZSwgc2hyaW5rU3R5bGVzKVxuICB9O1xufVxuXG52YXIgVGV4dEZpZWxkTGFiZWwgPSBmdW5jdGlvbiBUZXh0RmllbGRMYWJlbChwcm9wcykge1xuICB2YXIgbXVpVGhlbWUgPSBwcm9wcy5tdWlUaGVtZSxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBodG1sRm9yID0gcHJvcHMuaHRtbEZvcixcbiAgICAgIG9uVG91Y2hUYXAgPSBwcm9wcy5vblRvdWNoVGFwO1xuICB2YXIgcHJlcGFyZVN0eWxlcyA9IG11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyhwcm9wcyk7XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdsYWJlbCcsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcyhzdHlsZXMucm9vdCksXG4gICAgICBodG1sRm9yOiBodG1sRm9yLFxuICAgICAgb25Ub3VjaFRhcDogb25Ub3VjaFRhcFxuICAgIH0sXG4gICAgY2hpbGRyZW5cbiAgKTtcbn07XG5cblRleHRGaWVsZExhYmVsLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIFRoZSBsYWJlbCBjb250ZW50cy5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgY3NzIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgbGFiZWwgaWYgc2V0IHRvIHRydWUuXG4gICAqL1xuICBkaXNhYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSB0YXJnZXQgZWxlbWVudCB0aGF0IHRoaXMgbGFiZWwgc2hvdWxkIHJlZmVyIHRvLlxuICAgKi9cbiAgaHRtbEZvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFRoZSBtYXRlcmlhbC11aSB0aGVtZSBhcHBsaWVkIHRvIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmb3Igd2hlbiB0aGUgbGFiZWwgaXMgc2VsZWN0ZWQgdmlhIGEgdG91Y2ggdGFwLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVG91Y2hUYXAgZXZlbnQgdGFyZ2V0aW5nIHRoZSB0ZXh0IGZpZWxkIGxhYmVsLlxuICAgKi9cbiAgb25Ub3VjaFRhcDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgZmxvYXRpbmcgbGFiZWwgc2hvdWxkIHNocmluay5cbiAgICovXG4gIHNocmluazogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudCB3aGVuIHNocnVuay5cbiAgICovXG4gIHNocmlua1N0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcblxuVGV4dEZpZWxkTGFiZWwuZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIHNocmluazogZmFsc2Vcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRleHRGaWVsZExhYmVsO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkTGFiZWwuanNcbi8vIG1vZHVsZSBpZCA9IDkyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIHBhcmVudCBgVGV4dEZpZWxkYCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgdW5kZXJsaW5lIHdoZW4gcGFyZW50IGBUZXh0RmllbGRgIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBwYXJlbnQgYFRleHRGaWVsZGAgaGFzIGFuIGVycm9yLlxuICAgKi9cbiAgZXJyb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSB1bmRlcmxpbmUgd2hlbiBwYXJlbnQgYFRleHRGaWVsZGAgaGFzIGFuIGVycm9yLlxuICAgKi9cbiAgZXJyb3JTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBwYXJlbnQgYFRleHRGaWVsZGAgaXMgZm9jdXNlZC5cbiAgICovXG4gIGZvY3VzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgdW5kZXJsaW5lIHdoZW4gcGFyZW50IGBUZXh0RmllbGRgIGlzIGZvY3VzZWQuXG4gICAqL1xuICBmb2N1c1N0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogVGhlIG1hdGVyaWFsLXVpIHRoZW1lIGFwcGxpZWQgdG8gdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn07XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZSxcbiAgZGlzYWJsZWRTdHlsZToge30sXG4gIGVycm9yOiBmYWxzZSxcbiAgZXJyb3JTdHlsZToge30sXG4gIGZvY3VzOiBmYWxzZSxcbiAgZm9jdXNTdHlsZToge30sXG4gIHN0eWxlOiB7fVxufTtcblxudmFyIFRleHRGaWVsZFVuZGVybGluZSA9IGZ1bmN0aW9uIFRleHRGaWVsZFVuZGVybGluZShwcm9wcykge1xuICB2YXIgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkU3R5bGUgPSBwcm9wcy5kaXNhYmxlZFN0eWxlLFxuICAgICAgZXJyb3IgPSBwcm9wcy5lcnJvcixcbiAgICAgIGVycm9yU3R5bGUgPSBwcm9wcy5lcnJvclN0eWxlLFxuICAgICAgZm9jdXMgPSBwcm9wcy5mb2N1cyxcbiAgICAgIGZvY3VzU3R5bGUgPSBwcm9wcy5mb2N1c1N0eWxlLFxuICAgICAgbXVpVGhlbWUgPSBwcm9wcy5tdWlUaGVtZSxcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGU7XG4gIHZhciBlcnJvclN0eWxlQ29sb3IgPSBlcnJvclN0eWxlLmNvbG9yO1xuICB2YXIgcHJlcGFyZVN0eWxlcyA9IG11aVRoZW1lLnByZXBhcmVTdHlsZXMsXG4gICAgICBfbXVpVGhlbWUkdGV4dEZpZWxkID0gbXVpVGhlbWUudGV4dEZpZWxkLFxuICAgICAgYm9yZGVyQ29sb3IgPSBfbXVpVGhlbWUkdGV4dEZpZWxkLmJvcmRlckNvbG9yLFxuICAgICAgZGlzYWJsZWRUZXh0Q29sb3IgPSBfbXVpVGhlbWUkdGV4dEZpZWxkLmRpc2FibGVkVGV4dENvbG9yLFxuICAgICAgZXJyb3JDb2xvciA9IF9tdWlUaGVtZSR0ZXh0RmllbGQuZXJyb3JDb2xvcixcbiAgICAgIGZvY3VzQ29sb3IgPSBfbXVpVGhlbWUkdGV4dEZpZWxkLmZvY3VzQ29sb3I7XG5cblxuICB2YXIgc3R5bGVzID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGJvcmRlclRvcDogJ25vbmUnLFxuICAgICAgYm9yZGVyTGVmdDogJ25vbmUnLFxuICAgICAgYm9yZGVyUmlnaHQ6ICdub25lJyxcbiAgICAgIGJvcmRlckJvdHRvbTogJ3NvbGlkIDFweCcsXG4gICAgICBib3JkZXJDb2xvcjogYm9yZGVyQ29sb3IsXG4gICAgICBib3R0b206IDgsXG4gICAgICBib3hTaXppbmc6ICdjb250ZW50LWJveCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICBib3JkZXJCb3R0b206ICdkb3R0ZWQgMnB4JyxcbiAgICAgIGJvcmRlckNvbG9yOiBkaXNhYmxlZFRleHRDb2xvclxuICAgIH0sXG4gICAgZm9jdXM6IHtcbiAgICAgIGJvcmRlckJvdHRvbTogJ3NvbGlkIDJweCcsXG4gICAgICBib3JkZXJDb2xvcjogZm9jdXNDb2xvcixcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgwKScsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgYm9yZGVyQ29sb3I6IGVycm9yU3R5bGVDb2xvciA/IGVycm9yU3R5bGVDb2xvciA6IGVycm9yQ29sb3IsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMSknXG4gICAgfVxuICB9O1xuXG4gIHZhciB1bmRlcmxpbmUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5yb290LCBzdHlsZSk7XG4gIHZhciBmb2N1c2VkVW5kZXJsaW5lID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCB1bmRlcmxpbmUsIHN0eWxlcy5mb2N1cywgZm9jdXNTdHlsZSk7XG5cbiAgaWYgKGRpc2FibGVkKSB1bmRlcmxpbmUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHVuZGVybGluZSwgc3R5bGVzLmRpc2FibGVkLCBkaXNhYmxlZFN0eWxlKTtcbiAgaWYgKGZvY3VzKSBmb2N1c2VkVW5kZXJsaW5lID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBmb2N1c2VkVW5kZXJsaW5lLCB7IHRyYW5zZm9ybTogJ3NjYWxlWCgxKScgfSk7XG4gIGlmIChlcnJvcikgZm9jdXNlZFVuZGVybGluZSA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgZm9jdXNlZFVuZGVybGluZSwgc3R5bGVzLmVycm9yKTtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAgbnVsbCxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaHInLCB7ICdhcmlhLWhpZGRlbic6ICd0cnVlJywgc3R5bGU6IHByZXBhcmVTdHlsZXModW5kZXJsaW5lKSB9KSxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaHInLCB7ICdhcmlhLWhpZGRlbic6ICd0cnVlJywgc3R5bGU6IHByZXBhcmVTdHlsZXMoZm9jdXNlZFVuZGVybGluZSkgfSlcbiAgKTtcbn07XG5cblRleHRGaWVsZFVuZGVybGluZS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBwcm9wVHlwZXMgOiB7fTtcblRleHRGaWVsZFVuZGVybGluZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRleHRGaWVsZFVuZGVybGluZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL1RleHRGaWVsZFVuZGVybGluZS5qc1xuLy8gbW9kdWxlIGlkID0gOTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldENvbHVtblByb3BzID0gZ2V0Q29sdW1uUHJvcHM7XG5leHBvcnRzLmRlZmF1bHQgPSBDb2w7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfY3JlYXRlUHJvcHMgPSByZXF1aXJlKCcuLi9jcmVhdGVQcm9wcycpO1xuXG52YXIgX2NyZWF0ZVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVByb3BzKTtcblxudmFyIF9jbGFzc05hbWVzID0gcmVxdWlyZSgnLi4vY2xhc3NOYW1lcycpO1xuXG52YXIgX2NsYXNzTmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NOYW1lcyk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKCcuLi90eXBlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIHhzOiBfdHlwZXMuQ29sdW1uU2l6ZVR5cGUsXG4gIHNtOiBfdHlwZXMuQ29sdW1uU2l6ZVR5cGUsXG4gIG1kOiBfdHlwZXMuQ29sdW1uU2l6ZVR5cGUsXG4gIGxnOiBfdHlwZXMuQ29sdW1uU2l6ZVR5cGUsXG4gIHhzT2Zmc2V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgc21PZmZzZXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBtZE9mZnNldDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGxnT2Zmc2V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgZmlyc3Q6IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICBsYXN0OiBfdHlwZXMuVmlld3BvcnRTaXplVHlwZSxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdGFnTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVcbn07XG5cbnZhciBjbGFzc01hcCA9IHtcbiAgeHM6ICdjb2wteHMnLFxuICBzbTogJ2NvbC1zbScsXG4gIG1kOiAnY29sLW1kJyxcbiAgbGc6ICdjb2wtbGcnLFxuICB4c09mZnNldDogJ2NvbC14cy1vZmZzZXQnLFxuICBzbU9mZnNldDogJ2NvbC1zbS1vZmZzZXQnLFxuICBtZE9mZnNldDogJ2NvbC1tZC1vZmZzZXQnLFxuICBsZ09mZnNldDogJ2NvbC1sZy1vZmZzZXQnXG59O1xuXG5mdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsdWUpICYmIE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29sQ2xhc3NOYW1lcyhwcm9wcykge1xuICB2YXIgZXh0cmFDbGFzc2VzID0gW107XG5cbiAgaWYgKHByb3BzLmNsYXNzTmFtZSkge1xuICAgIGV4dHJhQ2xhc3Nlcy5wdXNoKHByb3BzLmNsYXNzTmFtZSk7XG4gIH1cblxuICBpZiAocHJvcHMuZmlyc3QpIHtcbiAgICBleHRyYUNsYXNzZXMucHVzaCgoMCwgX2NsYXNzTmFtZXMyLmRlZmF1bHQpKCdmaXJzdC0nICsgcHJvcHMuZmlyc3QpKTtcbiAgfVxuXG4gIGlmIChwcm9wcy5sYXN0KSB7XG4gICAgZXh0cmFDbGFzc2VzLnB1c2goKDAsIF9jbGFzc05hbWVzMi5kZWZhdWx0KSgnbGFzdC0nICsgcHJvcHMubGFzdCkpO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKHByb3BzKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBjbGFzc01hcFtrZXldO1xuICB9KS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAoMCwgX2NsYXNzTmFtZXMyLmRlZmF1bHQpKGlzSW50ZWdlcihwcm9wc1trZXldKSA/IGNsYXNzTWFwW2tleV0gKyAnLScgKyBwcm9wc1trZXldIDogY2xhc3NNYXBba2V5XSk7XG4gIH0pLmNvbmNhdChleHRyYUNsYXNzZXMpO1xufVxuXG5mdW5jdGlvbiBnZXRDb2x1bW5Qcm9wcyhwcm9wcykge1xuICByZXR1cm4gKDAsIF9jcmVhdGVQcm9wczIuZGVmYXVsdCkocHJvcFR5cGVzLCBwcm9wcywgZ2V0Q29sQ2xhc3NOYW1lcyhwcm9wcykpO1xufVxuXG5mdW5jdGlvbiBDb2wocHJvcHMpIHtcbiAgdmFyIHRhZ05hbWUgPSBwcm9wcy50YWdOYW1lLFxuICAgICAgY29sdW1uUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFsndGFnTmFtZSddKTtcblxuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSB8fCAnZGl2JywgZ2V0Q29sdW1uUHJvcHMoY29sdW1uUHJvcHMpKTtcbn1cblxuQ29sLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtZmxleGJveC1ncmlkL2xpYi9jb21wb25lbnRzL0NvbC5qc1xuLy8gbW9kdWxlIGlkID0gOTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBHcmlkO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2NyZWF0ZVByb3BzID0gcmVxdWlyZSgnLi4vY3JlYXRlUHJvcHMnKTtcblxudmFyIF9jcmVhdGVQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVQcm9wcyk7XG5cbnZhciBfY2xhc3NOYW1lcyA9IHJlcXVpcmUoJy4uL2NsYXNzTmFtZXMnKTtcblxudmFyIF9jbGFzc05hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzTmFtZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICBmbHVpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICB0YWdOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZVxufTtcblxuZnVuY3Rpb24gR3JpZChwcm9wcykge1xuICB2YXIgY29udGFpbmVyQ2xhc3MgPSAoMCwgX2NsYXNzTmFtZXMyLmRlZmF1bHQpKHByb3BzLmZsdWlkID8gJ2NvbnRhaW5lci1mbHVpZCcgOiAnY29udGFpbmVyJyk7XG4gIHZhciBjbGFzc05hbWVzID0gW3Byb3BzLmNsYXNzTmFtZSwgY29udGFpbmVyQ2xhc3NdO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChwcm9wcy50YWdOYW1lIHx8ICdkaXYnLCAoMCwgX2NyZWF0ZVByb3BzMi5kZWZhdWx0KShwcm9wVHlwZXMsIHByb3BzLCBjbGFzc05hbWVzKSk7XG59XG5cbkdyaWQucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL2NvbXBvbmVudHMvR3JpZC5qc1xuLy8gbW9kdWxlIGlkID0gOTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldFJvd1Byb3BzID0gZ2V0Um93UHJvcHM7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3c7XG5cbnZhciBfY2xhc3NOYW1lcyA9IHJlcXVpcmUoJy4uL2NsYXNzTmFtZXMnKTtcblxudmFyIF9jbGFzc05hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzTmFtZXMpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2NyZWF0ZVByb3BzID0gcmVxdWlyZSgnLi4vY3JlYXRlUHJvcHMnKTtcblxudmFyIF9jcmVhdGVQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVQcm9wcyk7XG5cbnZhciBfdHlwZXMgPSByZXF1aXJlKCcuLi90eXBlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcm93S2V5cyA9IFsnc3RhcnQnLCAnY2VudGVyJywgJ2VuZCcsICd0b3AnLCAnbWlkZGxlJywgJ2JvdHRvbScsICdhcm91bmQnLCAnYmV0d2VlbiddO1xuXG52YXIgcHJvcFR5cGVzID0ge1xuICByZXZlcnNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHN0YXJ0OiBfdHlwZXMuVmlld3BvcnRTaXplVHlwZSxcbiAgY2VudGVyOiBfdHlwZXMuVmlld3BvcnRTaXplVHlwZSxcbiAgZW5kOiBfdHlwZXMuVmlld3BvcnRTaXplVHlwZSxcbiAgdG9wOiBfdHlwZXMuVmlld3BvcnRTaXplVHlwZSxcbiAgbWlkZGxlOiBfdHlwZXMuVmlld3BvcnRTaXplVHlwZSxcbiAgYm90dG9tOiBfdHlwZXMuVmlld3BvcnRTaXplVHlwZSxcbiAgYXJvdW5kOiBfdHlwZXMuVmlld3BvcnRTaXplVHlwZSxcbiAgYmV0d2VlbjogX3R5cGVzLlZpZXdwb3J0U2l6ZVR5cGUsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHRhZ05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlXG59O1xuXG5mdW5jdGlvbiBnZXRSb3dDbGFzc05hbWVzKHByb3BzKSB7XG4gIHZhciBtb2RpZmljYXRvcnMgPSBbcHJvcHMuY2xhc3NOYW1lLCAoMCwgX2NsYXNzTmFtZXMyLmRlZmF1bHQpKCdyb3cnKV07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dLZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGtleSA9IHJvd0tleXNbaV07XG4gICAgdmFyIHZhbHVlID0gcHJvcHNba2V5XTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIG1vZGlmaWNhdG9ycy5wdXNoKCgwLCBfY2xhc3NOYW1lczIuZGVmYXVsdCkoa2V5ICsgJy0nICsgdmFsdWUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAocHJvcHMucmV2ZXJzZSkge1xuICAgIG1vZGlmaWNhdG9ycy5wdXNoKCgwLCBfY2xhc3NOYW1lczIuZGVmYXVsdCkoJ3JldmVyc2UnKSk7XG4gIH1cblxuICByZXR1cm4gbW9kaWZpY2F0b3JzO1xufVxuXG5mdW5jdGlvbiBnZXRSb3dQcm9wcyhwcm9wcykge1xuICByZXR1cm4gKDAsIF9jcmVhdGVQcm9wczIuZGVmYXVsdCkocHJvcFR5cGVzLCBwcm9wcywgZ2V0Um93Q2xhc3NOYW1lcyhwcm9wcykpO1xufVxuXG5mdW5jdGlvbiBSb3cocHJvcHMpIHtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHByb3BzLnRhZ05hbWUgfHwgJ2RpdicsIGdldFJvd1Byb3BzKHByb3BzKSk7XG59XG5cblJvdy5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWZsZXhib3gtZ3JpZC9saWIvY29tcG9uZW50cy9Sb3cuanNcbi8vIG1vZHVsZSBpZCA9IDkzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9mbGV4Ym94Z3JpZC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmxleGJveGdyaWQuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmxleGJveGdyaWQuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmxleGJveGdyaWQvZGlzdC9mbGV4Ym94Z3JpZC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDkzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIl0sInNvdXJjZVJvb3QiOiIifQ==