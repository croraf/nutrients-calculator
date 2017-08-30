webpackJsonp([4],{

/***/ 1155:
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

var _EnhancedSwitch = __webpack_require__(1540);

var _EnhancedSwitch2 = _interopRequireDefault(_EnhancedSwitch);

var _radioButtonUnchecked = __webpack_require__(1549);

var _radioButtonUnchecked2 = _interopRequireDefault(_radioButtonUnchecked);

var _radioButtonChecked = __webpack_require__(1548);

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

/***/ 1209:
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

var _ProfileForm = __webpack_require__(1210);

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

/***/ 1210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(294);

var _RaisedButton = __webpack_require__(784);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _TextField = __webpack_require__(778);

var _TextField2 = _interopRequireDefault(_TextField);

var _RadioButton = __webpack_require__(1532);

var _reactFlexboxGrid = __webpack_require__(770);

var _SelectField = __webpack_require__(1534);

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = __webpack_require__(295);

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

/***/ 1523:
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

var _transitions = __webpack_require__(24);

var _transitions2 = _interopRequireDefault(_transitions);

var _arrowDropDown = __webpack_require__(1545);

var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

var _Menu = __webpack_require__(182);

var _Menu2 = _interopRequireDefault(_Menu);

var _ClearFix = __webpack_require__(1539);

var _ClearFix2 = _interopRequireDefault(_ClearFix);

var _Popover = __webpack_require__(183);

var _Popover2 = _interopRequireDefault(_Popover);

var _PopoverAnimationVertical = __webpack_require__(1530);

var _PopoverAnimationVertical2 = _interopRequireDefault(_PopoverAnimationVertical);

var _keycode = __webpack_require__(181);

var _keycode2 = _interopRequireDefault(_keycode);

var _events = __webpack_require__(109);

var _events2 = _interopRequireDefault(_events);

var _IconButton = __webpack_require__(105);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _propTypes3 = __webpack_require__(33);

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

/***/ 1524:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MenuItem = exports.DropDownMenu = undefined;

var _DropDownMenu2 = __webpack_require__(1523);

var _DropDownMenu3 = _interopRequireDefault(_DropDownMenu2);

var _MenuItem2 = __webpack_require__(187);

var _MenuItem3 = _interopRequireDefault(_MenuItem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DropDownMenu = _DropDownMenu3.default;
exports.MenuItem = _MenuItem3.default;
exports.default = _DropDownMenu3.default;

/***/ }),

/***/ 1530:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _Paper = __webpack_require__(103);

var _Paper2 = _interopRequireDefault(_Paper);

var _transitions = __webpack_require__(24);

var _transitions2 = _interopRequireDefault(_transitions);

var _propTypes3 = __webpack_require__(33);

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

/***/ 1531:
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

var _RadioButton = __webpack_require__(1155);

var _RadioButton2 = _interopRequireDefault(_RadioButton);

var _warning = __webpack_require__(18);

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

/***/ 1532:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.RadioButtonGroup = exports.RadioButton = undefined;

var _RadioButton2 = __webpack_require__(1155);

var _RadioButton3 = _interopRequireDefault(_RadioButton2);

var _RadioButtonGroup2 = __webpack_require__(1531);

var _RadioButtonGroup3 = _interopRequireDefault(_RadioButtonGroup2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RadioButton = _RadioButton3.default;
exports.RadioButtonGroup = _RadioButtonGroup3.default;
exports.default = _RadioButton3.default;

/***/ }),

/***/ 1533:
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

var _TextField = __webpack_require__(778);

var _TextField2 = _interopRequireDefault(_TextField);

var _DropDownMenu = __webpack_require__(1524);

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

/***/ 1534:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _SelectField = __webpack_require__(1533);

var _SelectField2 = _interopRequireDefault(_SelectField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SelectField2.default;

/***/ }),

/***/ 1538:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

/***/ 1539:
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

var _BeforeAfterWrapper = __webpack_require__(1538);

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

/***/ 1540:
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

var _keycode = __webpack_require__(181);

var _keycode2 = _interopRequireDefault(_keycode);

var _transitions = __webpack_require__(24);

var _transitions2 = _interopRequireDefault(_transitions);

var _FocusRipple = __webpack_require__(308);

var _FocusRipple2 = _interopRequireDefault(_FocusRipple);

var _TouchRipple = __webpack_require__(309);

var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

var _Paper = __webpack_require__(103);

var _Paper2 = _interopRequireDefault(_Paper);

var _warning = __webpack_require__(18);

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

/***/ 1545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(78);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(77);

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

/***/ 1548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(78);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(77);

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

/***/ 1549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__(78);

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__(77);

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

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProfileContainer = undefined;

var _reactRedux = __webpack_require__(30);

var _Profile = __webpack_require__(1209);

var _caloriesTarget = __webpack_require__(298);

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

exports.ProfileContainer = ProfileContainer;

/***/ }),

/***/ 763:
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

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getClass;

var _flexboxgrid = __webpack_require__(916);

var _flexboxgrid2 = _interopRequireDefault(_flexboxgrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getClass(className) {
  return _flexboxgrid2.default && _flexboxgrid2.default[className] ? _flexboxgrid2.default[className] : className;
}

/***/ }),

/***/ 766:
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

/***/ 768:
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

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumnProps = exports.Col = exports.getRowProps = exports.Row = exports.Grid = undefined;

var _Row2 = __webpack_require__(915);

Object.defineProperty(exports, 'getRowProps', {
  enumerable: true,
  get: function get() {
    return _Row2.getRowProps;
  }
});

var _Col2 = __webpack_require__(913);

Object.defineProperty(exports, 'getColumnProps', {
  enumerable: true,
  get: function get() {
    return _Col2.getColumnProps;
  }
});

var _Grid2 = __webpack_require__(914);

var _Grid3 = _interopRequireDefault(_Grid2);

var _Row3 = _interopRequireDefault(_Row2);

var _Col3 = _interopRequireDefault(_Col2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Grid = _Grid3.default;
exports.Row = _Row3.default;
exports.Col = _Col3.default;

/***/ }),

/***/ 776:
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

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(763)();
// imports


// module
exports.push([module.i, ".container-fluid,\n.container {\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.container-fluid {\n  padding-right: 2rem;\n  padding-left: 2rem;\n}\n\n.row {\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem;\n}\n\n.row.reverse {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n}\n\n.col.reverse {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n  -ms-flex-direction: column-reverse;\n  flex-direction: column-reverse;\n}\n\n.col-xs,\n.col-xs-1,\n.col-xs-2,\n.col-xs-3,\n.col-xs-4,\n.col-xs-5,\n.col-xs-6,\n.col-xs-7,\n.col-xs-8,\n.col-xs-9,\n.col-xs-10,\n.col-xs-11,\n.col-xs-12,\n.col-xs-offset-0,\n.col-xs-offset-1,\n.col-xs-offset-2,\n.col-xs-offset-3,\n.col-xs-offset-4,\n.col-xs-offset-5,\n.col-xs-offset-6,\n.col-xs-offset-7,\n.col-xs-offset-8,\n.col-xs-offset-9,\n.col-xs-offset-10,\n.col-xs-offset-11,\n.col-xs-offset-12 {\n  box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n}\n\n.col-xs {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  max-width: 100%;\n}\n\n.col-xs-1 {\n  -ms-flex-preferred-size: 8.33333333%;\n  flex-basis: 8.33333333%;\n  max-width: 8.33333333%;\n}\n\n.col-xs-2 {\n  -ms-flex-preferred-size: 16.66666667%;\n  flex-basis: 16.66666667%;\n  max-width: 16.66666667%;\n}\n\n.col-xs-3 {\n  -ms-flex-preferred-size: 25%;\n  flex-basis: 25%;\n  max-width: 25%;\n}\n\n.col-xs-4 {\n  -ms-flex-preferred-size: 33.33333333%;\n  flex-basis: 33.33333333%;\n  max-width: 33.33333333%;\n}\n\n.col-xs-5 {\n  -ms-flex-preferred-size: 41.66666667%;\n  flex-basis: 41.66666667%;\n  max-width: 41.66666667%;\n}\n\n.col-xs-6 {\n  -ms-flex-preferred-size: 50%;\n  flex-basis: 50%;\n  max-width: 50%;\n}\n\n.col-xs-7 {\n  -ms-flex-preferred-size: 58.33333333%;\n  flex-basis: 58.33333333%;\n  max-width: 58.33333333%;\n}\n\n.col-xs-8 {\n  -ms-flex-preferred-size: 66.66666667%;\n  flex-basis: 66.66666667%;\n  max-width: 66.66666667%;\n}\n\n.col-xs-9 {\n  -ms-flex-preferred-size: 75%;\n  flex-basis: 75%;\n  max-width: 75%;\n}\n\n.col-xs-10 {\n  -ms-flex-preferred-size: 83.33333333%;\n  flex-basis: 83.33333333%;\n  max-width: 83.33333333%;\n}\n\n.col-xs-11 {\n  -ms-flex-preferred-size: 91.66666667%;\n  flex-basis: 91.66666667%;\n  max-width: 91.66666667%;\n}\n\n.col-xs-12 {\n  -ms-flex-preferred-size: 100%;\n  flex-basis: 100%;\n  max-width: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n\n.start-xs {\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  justify-content: flex-start;\n  text-align: start;\n}\n\n.center-xs {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.end-xs {\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n  text-align: end;\n}\n\n.top-xs {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n}\n\n.middle-xs {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.bottom-xs {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  align-items: flex-end;\n}\n\n.around-xs {\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n}\n\n.between-xs {\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.first-xs {\n  -webkit-box-ordinal-group: 0;\n  -ms-flex-order: -1;\n  order: -1;\n}\n\n.last-xs {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n}\n\n@media only screen and (min-width: 48em) {\n  .container {\n    width: 49rem;\n  }\n\n  .col-sm,\n  .col-sm-1,\n  .col-sm-2,\n  .col-sm-3,\n  .col-sm-4,\n  .col-sm-5,\n  .col-sm-6,\n  .col-sm-7,\n  .col-sm-8,\n  .col-sm-9,\n  .col-sm-10,\n  .col-sm-11,\n  .col-sm-12,\n  .col-sm-offset-0,\n  .col-sm-offset-1,\n  .col-sm-offset-2,\n  .col-sm-offset-3,\n  .col-sm-offset-4,\n  .col-sm-offset-5,\n  .col-sm-offset-6,\n  .col-sm-offset-7,\n  .col-sm-offset-8,\n  .col-sm-offset-9,\n  .col-sm-offset-10,\n  .col-sm-offset-11,\n  .col-sm-offset-12 {\n    box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .col-sm {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .col-sm-1 {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .col-sm-2 {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .col-sm-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .col-sm-4 {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .col-sm-5 {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .col-sm-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .col-sm-7 {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .col-sm-8 {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .col-sm-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .col-sm-10 {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .col-sm-11 {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .col-sm-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .col-sm-offset-0 {\n    margin-left: 0;\n  }\n\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .start-sm {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .center-sm {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .end-sm {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .top-sm {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .middle-sm {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .bottom-sm {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .around-sm {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .between-sm {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .first-sm {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .last-sm {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}\n\n@media only screen and (min-width: 64em) {\n  .container {\n    width: 65rem;\n  }\n\n  .col-md,\n  .col-md-1,\n  .col-md-2,\n  .col-md-3,\n  .col-md-4,\n  .col-md-5,\n  .col-md-6,\n  .col-md-7,\n  .col-md-8,\n  .col-md-9,\n  .col-md-10,\n  .col-md-11,\n  .col-md-12,\n  .col-md-offset-0,\n  .col-md-offset-1,\n  .col-md-offset-2,\n  .col-md-offset-3,\n  .col-md-offset-4,\n  .col-md-offset-5,\n  .col-md-offset-6,\n  .col-md-offset-7,\n  .col-md-offset-8,\n  .col-md-offset-9,\n  .col-md-offset-10,\n  .col-md-offset-11,\n  .col-md-offset-12 {\n    box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .col-md {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .col-md-1 {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .col-md-2 {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .col-md-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .col-md-4 {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .col-md-5 {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .col-md-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .col-md-7 {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .col-md-8 {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .col-md-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .col-md-10 {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .col-md-11 {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .col-md-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .col-md-offset-0 {\n    margin-left: 0;\n  }\n\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .start-md {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .center-md {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .end-md {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .top-md {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .middle-md {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .bottom-md {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .around-md {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .between-md {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .first-md {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .last-md {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}\n\n@media only screen and (min-width: 75em) {\n  .container {\n    width: 76rem;\n  }\n\n  .col-lg,\n  .col-lg-1,\n  .col-lg-2,\n  .col-lg-3,\n  .col-lg-4,\n  .col-lg-5,\n  .col-lg-6,\n  .col-lg-7,\n  .col-lg-8,\n  .col-lg-9,\n  .col-lg-10,\n  .col-lg-11,\n  .col-lg-12,\n  .col-lg-offset-0,\n  .col-lg-offset-1,\n  .col-lg-offset-2,\n  .col-lg-offset-3,\n  .col-lg-offset-4,\n  .col-lg-offset-5,\n  .col-lg-offset-6,\n  .col-lg-offset-7,\n  .col-lg-offset-8,\n  .col-lg-offset-9,\n  .col-lg-offset-10,\n  .col-lg-offset-11,\n  .col-lg-offset-12 {\n    box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 auto;\n    flex: 0 0 auto;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n  }\n\n  .col-lg {\n    -webkit-box-flex: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n\n  .col-lg-1 {\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%;\n  }\n\n  .col-lg-2 {\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%;\n  }\n\n  .col-lg-3 {\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n\n  .col-lg-4 {\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%;\n  }\n\n  .col-lg-5 {\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%;\n  }\n\n  .col-lg-6 {\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n\n  .col-lg-7 {\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%;\n  }\n\n  .col-lg-8 {\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%;\n  }\n\n  .col-lg-9 {\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n\n  .col-lg-10 {\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%;\n  }\n\n  .col-lg-11 {\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%;\n  }\n\n  .col-lg-12 {\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n\n  .col-lg-offset-0 {\n    margin-left: 0;\n  }\n\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n\n  .start-lg {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    text-align: start;\n  }\n\n  .center-lg {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  .end-lg {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n    text-align: end;\n  }\n\n  .top-lg {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n  }\n\n  .middle-lg {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n  }\n\n  .bottom-lg {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    align-items: flex-end;\n  }\n\n  .around-lg {\n    -ms-flex-pack: distribute;\n    justify-content: space-around;\n  }\n\n  .between-lg {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .first-lg {\n    -webkit-box-ordinal-group: 0;\n    -ms-flex-order: -1;\n    order: -1;\n  }\n\n  .last-lg {\n    -webkit-box-ordinal-group: 2;\n    -ms-flex-order: 1;\n    order: 1;\n  }\n}", ""]);

// exports


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

/***/ }),

/***/ 913:
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

var _createProps = __webpack_require__(766);

var _createProps2 = _interopRequireDefault(_createProps);

var _classNames = __webpack_require__(765);

var _classNames2 = _interopRequireDefault(_classNames);

var _types = __webpack_require__(776);

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

/***/ 914:
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

var _createProps = __webpack_require__(766);

var _createProps2 = _interopRequireDefault(_createProps);

var _classNames = __webpack_require__(765);

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

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRowProps = getRowProps;
exports.default = Row;

var _classNames = __webpack_require__(765);

var _classNames2 = _interopRequireDefault(_classNames);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createProps = __webpack_require__(766);

var _createProps2 = _interopRequireDefault(_createProps);

var _types = __webpack_require__(776);

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

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(900);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(768)(content, {});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1JhZGlvQnV0dG9uL1JhZGlvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvUHJvZmlsZS9Qcm9maWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvUHJvZmlsZS9Qcm9maWxlRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0Ryb3BEb3duTWVudS9Ecm9wRG93bk1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9Ecm9wRG93bk1lbnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9Qb3BvdmVyL1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1JhZGlvQnV0dG9uL1JhZGlvQnV0dG9uR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9SYWRpb0J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1NlbGVjdEZpZWxkL1NlbGVjdEZpZWxkLmpzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvU2VsZWN0RmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9pbnRlcm5hbC9CZWZvcmVBZnRlcldyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9pbnRlcm5hbC9DbGVhckZpeC5qcyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL2ludGVybmFsL0VuaGFuY2VkU3dpdGNoLmpzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvc3ZnLWljb25zL25hdmlnYXRpb24vYXJyb3ctZHJvcC1kb3duLmpzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvc3ZnLWljb25zL3RvZ2dsZS9yYWRpby1idXR0b24tY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL3N2Zy1pY29ucy90b2dnbGUvcmFkaW8tYnV0dG9uLXVuY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL1Byb2ZpbGUvUHJvZmlsZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzP2RhMDQqKioiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL2NsYXNzTmFtZXMuanM/ZjU2YSoqIiwid2VicGFjazovLy8uL34vcmVhY3QtZmxleGJveC1ncmlkL2xpYi9jcmVhdGVQcm9wcy5qcz9iMmMyKioiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzP2I5ODAqKioiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL2luZGV4LmpzPzI5YzEqKiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWZsZXhib3gtZ3JpZC9saWIvdHlwZXMuanM/OGI5YyoqIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL2luZGV4LmpzPzc0NzcqIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uL2luZGV4LmpzPzhlOTUqIiwid2VicGFjazovLy8uL34vZmxleGJveGdyaWQvZGlzdC9mbGV4Ym94Z3JpZC5jc3M/Yzg0YioqIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uL1JhaXNlZEJ1dHRvbi5qcz84NGZkKiIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1RleHRGaWVsZC9FbmhhbmNlZFRleHRhcmVhLmpzPzZhZjIqIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL1RleHRGaWVsZC5qcz9iYTViKiIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1RleHRGaWVsZC9UZXh0RmllbGRIaW50LmpzPzE4MjUqIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL1RleHRGaWVsZExhYmVsLmpzP2I4ZjEqIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL1RleHRGaWVsZFVuZGVybGluZS5qcz9hMzkwKiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWZsZXhib3gtZ3JpZC9saWIvY29tcG9uZW50cy9Db2wuanM/NmIxMioqIiwid2VicGFjazovLy8uL34vcmVhY3QtZmxleGJveC1ncmlkL2xpYi9jb21wb25lbnRzL0dyaWQuanM/ZjJlYioqIiwid2VicGFjazovLy8uL34vcmVhY3QtZmxleGJveC1ncmlkL2xpYi9jb21wb25lbnRzL1Jvdy5qcz83NmI4KioiLCJ3ZWJwYWNrOi8vLy4vfi9mbGV4Ym94Z3JpZC9kaXN0L2ZsZXhib3hncmlkLmNzcz80Yjg5KioqIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJwb3NpdGlvbiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwidGV4dEFsaWduIiwiY29sb3IiLCJ3aWR0aCIsIm1hcmdpbiIsInByb3BzIiwiY2FsY3VsYXRlQ2Fsb3JpZXNUYXJnZXQiLCJjYWxvcmllc1RhcmdldCIsIkNvbXBvbmVudCIsImZpZWxkU3R5bGUiLCJtYXJnaW5MZWZ0IiwiZmllbGRTdHlsZTIiLCJNeVRleHRGaWVsZCIsImlucHV0IiwibWV0YSIsInR5cGUiLCJsYWJlbCIsImVycm9yIiwiTXlSYWRpb0ZpZWxkIiwibmFtZSIsInZhbHVlIiwiaGVpZ2h0IiwicGFkZGluZ1RvcCIsIk15U2VsZWN0RmllbGQiLCJldmVudCIsImtleSIsInBheWxvYWQiLCJvbkNoYW5nZSIsIlByb2ZpbGVGb3JtIiwiaGFuZGxlU3VibWl0IiwibWluV2lkdGgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmb250U2l6ZSIsInRvRml4ZWQiLCJmb3JtIiwiZGVzdHJveU9uVW5tb3VudCIsImluaXRpYWxWYWx1ZXMiLCJzZXgiLCJhY3Rpdml0eSIsImZpcnN0TmFtZSIsIndlaWdodCIsImFnZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwidmFsdWVzIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJQcm9maWxlQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsbUVBQW1FLGFBQWE7QUFDaEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxP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QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDBCQUEwQixhQUFhO0FBQ3ZDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQSx3Qzs7Ozs7Ozs7QUNuQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsbUVBQW1FLGFBQWE7QUFDaEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZEQUE2RDs7QUFFN0QsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsbUdBQW1HO0FBQzVHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELCtCOzs7Ozs7OztBQ3BlQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsbUVBQW1FLGFBQWE7QUFDaEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsbUNBQW1DO0FBQzVDLHFFQUFxRSxnREFBZ0Q7QUFDckg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDJFQUEyRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxtQzs7Ozs7Ozs7QUMxUEE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBOztBQUVBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsbUVBQW1FLGFBQWE7QUFDaEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQkFBc0IsbUJBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHdCQUF3Qix3Q0FBd0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtCQUFrQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLDhFQUE4RTtBQUN2RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHVGQUF1RjtBQUN2RjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsNEI7Ozs7Ozs7O0FDdGtCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssd0VBQXdFO0FBQzdFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxnQzs7Ozs7Ozs7QUMvRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7QUNwSEE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0Q7QUFDaEQsdURBQXVEOztBQUV2RCwwREFBMEQ7QUFDMUQsOERBQThELHFCQUFxQix5QkFBeUI7QUFDNUcsOERBQThEOztBQUU5RDtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMseURBQXlEO0FBQ2xHLHlDQUF5QyxnRUFBZ0U7QUFDekc7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFDOzs7Ozs7OztBQ3ZJQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLDhDQUE4QyxpQkFBaUIscUJBQXFCLG9DQUFvQyw2REFBNkQsb0JBQW9CLEVBQUUsZUFBZTs7QUFFMU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCOzs7Ozs7OztBQzlGQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMkI7Ozs7Ozs7O0FDdkNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEI7Ozs7Ozs7QUN2RUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBb0U7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoiNC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxudmFyIF9FbmhhbmNlZFN3aXRjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL0VuaGFuY2VkU3dpdGNoJyk7XG5cbnZhciBfRW5oYW5jZWRTd2l0Y2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRW5oYW5jZWRTd2l0Y2gpO1xuXG52YXIgX3JhZGlvQnV0dG9uVW5jaGVja2VkID0gcmVxdWlyZSgnLi4vc3ZnLWljb25zL3RvZ2dsZS9yYWRpby1idXR0b24tdW5jaGVja2VkJyk7XG5cbnZhciBfcmFkaW9CdXR0b25VbmNoZWNrZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFkaW9CdXR0b25VbmNoZWNrZWQpO1xuXG52YXIgX3JhZGlvQnV0dG9uQ2hlY2tlZCA9IHJlcXVpcmUoJy4uL3N2Zy1pY29ucy90b2dnbGUvcmFkaW8tYnV0dG9uLWNoZWNrZWQnKTtcblxudmFyIF9yYWRpb0J1dHRvbkNoZWNrZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFkaW9CdXR0b25DaGVja2VkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0KSB7XG4gIHZhciByYWRpb0J1dHRvbiA9IGNvbnRleHQubXVpVGhlbWUucmFkaW9CdXR0b247XG5cblxuICByZXR1cm4ge1xuICAgIGljb246IHtcbiAgICAgIGhlaWdodDogcmFkaW9CdXR0b24uc2l6ZSxcbiAgICAgIHdpZHRoOiByYWRpb0J1dHRvbi5zaXplXG4gICAgfSxcbiAgICB0YXJnZXQ6IHtcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXG4gICAgICBmaWxsOiByYWRpb0J1dHRvbi5ib3JkZXJDb2xvclxuICAgIH0sXG4gICAgZmlsbDoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMCknLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDUwJScsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpLFxuICAgICAgZmlsbDogcmFkaW9CdXR0b24uY2hlY2tlZENvbG9yXG4gICAgfSxcbiAgICB0YXJnZXRXaGVuQ2hlY2tlZDoge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJ1xuICAgIH0sXG4gICAgZmlsbFdoZW5DaGVja2VkOiB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSknXG4gICAgfSxcbiAgICB0YXJnZXRXaGVuRGlzYWJsZWQ6IHtcbiAgICAgIGZpbGw6IHJhZGlvQnV0dG9uLmRpc2FibGVkQ29sb3JcbiAgICB9LFxuICAgIGZpbGxXaGVuRGlzYWJsZWQ6IHtcbiAgICAgIGZpbGw6IHJhZGlvQnV0dG9uLmRpc2FibGVkQ29sb3JcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICBjb2xvcjogcHJvcHMuZGlzYWJsZWQgPyByYWRpb0J1dHRvbi5sYWJlbERpc2FibGVkQ29sb3IgOiByYWRpb0J1dHRvbi5sYWJlbENvbG9yXG4gICAgfSxcbiAgICByaXBwbGU6IHtcbiAgICAgIGNvbG9yOiBwcm9wcy5jaGVja2VkID8gcmFkaW9CdXR0b24uY2hlY2tlZENvbG9yIDogcmFkaW9CdXR0b24uYm9yZGVyQ29sb3JcbiAgICB9XG4gIH07XG59XG5cbnZhciBSYWRpb0J1dHRvbiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFJhZGlvQnV0dG9uLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBSYWRpb0J1dHRvbigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBSYWRpb0J1dHRvbik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBSYWRpb0J1dHRvbi5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoUmFkaW9CdXR0b24pKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5oYW5kbGVTd2l0Y2ggPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoZWNrKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQ2hlY2soZXZlbnQsIF90aGlzLnByb3BzLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgLy8gT25seSBjYWxsZWQgd2hlbiBzZWxlY3RlZCwgbm90IHdoZW4gdW5zZWxlY3RlZC5cblxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFJhZGlvQnV0dG9uLCBbe1xuICAgIGtleTogJ2lzQ2hlY2tlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzQ2hlY2tlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZnMuZW5oYW5jZWRTd2l0Y2guaXNTd2l0Y2hlZCgpO1xuICAgIH1cblxuICAgIC8vIFVzZSBSYWRpb0J1dHRvbkdyb3VwLnNldFNlbGVjdGVkVmFsdWUobmV3U2VsZWN0aW9uVmFsdWUpIHRvIHNldCBhXG4gICAgLy8gUmFkaW9CdXR0b24ncyBjaGVja2VkIHZhbHVlLlxuXG4gIH0sIHtcbiAgICBrZXk6ICdzZXRDaGVja2VkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q2hlY2tlZChuZXdDaGVja2VkVmFsdWUpIHtcbiAgICAgIHRoaXMucmVmcy5lbmhhbmNlZFN3aXRjaC5zZXRTd2l0Y2hlZChuZXdDaGVja2VkVmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZzLmVuaGFuY2VkU3dpdGNoLmdldFZhbHVlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hlY2tlZEljb24gPSBfcHJvcHMuY2hlY2tlZEljb24sXG4gICAgICAgICAgY2hlY2tlZCA9IF9wcm9wcy5jaGVja2VkLFxuICAgICAgICAgIGljb25TdHlsZSA9IF9wcm9wcy5pY29uU3R5bGUsXG4gICAgICAgICAgbGFiZWxTdHlsZSA9IF9wcm9wcy5sYWJlbFN0eWxlLFxuICAgICAgICAgIGxhYmVsUG9zaXRpb24gPSBfcHJvcHMubGFiZWxQb3NpdGlvbixcbiAgICAgICAgICBvbkNoZWNrID0gX3Byb3BzLm9uQ2hlY2ssXG4gICAgICAgICAgdW5jaGVja2VkSWNvbiA9IF9wcm9wcy51bmNoZWNrZWRJY29uLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2NoZWNrZWRJY29uJywgJ2NoZWNrZWQnLCAnaWNvblN0eWxlJywgJ2xhYmVsU3R5bGUnLCAnbGFiZWxQb3NpdGlvbicsICdvbkNoZWNrJywgJ3VuY2hlY2tlZEljb24nLCAnZGlzYWJsZWQnXSk7XG5cblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuXG4gICAgICB2YXIgdW5jaGVja2VkU3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy50YXJnZXQsIGNoZWNrZWQgJiYgc3R5bGVzLnRhcmdldFdoZW5DaGVja2VkLCBpY29uU3R5bGUsIGRpc2FibGVkICYmIHN0eWxlcy50YXJnZXRXaGVuRGlzYWJsZWQpO1xuXG4gICAgICB2YXIgY2hlY2tlZFN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMuZmlsbCwgY2hlY2tlZCAmJiBzdHlsZXMuZmlsbFdoZW5DaGVja2VkLCBpY29uU3R5bGUsIGRpc2FibGVkICYmIHN0eWxlcy5maWxsV2hlbkRpc2FibGVkKTtcblxuICAgICAgdmFyIHVuY2hlY2tlZEVsZW1lbnQgPSBfcmVhY3QyLmRlZmF1bHQuaXNWYWxpZEVsZW1lbnQodW5jaGVja2VkSWNvbikgPyBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KHVuY2hlY2tlZEljb24sIHtcbiAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh1bmNoZWNrZWRTdHlsZXMsIHVuY2hlY2tlZEljb24ucHJvcHMuc3R5bGUpXG4gICAgICB9KSA6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yYWRpb0J1dHRvblVuY2hlY2tlZDIuZGVmYXVsdCwgeyBzdHlsZTogdW5jaGVja2VkU3R5bGVzIH0pO1xuXG4gICAgICB2YXIgY2hlY2tlZEVsZW1lbnQgPSBfcmVhY3QyLmRlZmF1bHQuaXNWYWxpZEVsZW1lbnQoY2hlY2tlZEljb24pID8gX3JlYWN0Mi5kZWZhdWx0LmNsb25lRWxlbWVudChjaGVja2VkSWNvbiwge1xuICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKGNoZWNrZWRTdHlsZXMsIGNoZWNrZWRJY29uLnByb3BzLnN0eWxlKVxuICAgICAgfSkgOiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmFkaW9CdXR0b25DaGVja2VkMi5kZWZhdWx0LCB7IHN0eWxlOiBjaGVja2VkU3R5bGVzIH0pO1xuXG4gICAgICB2YXIgbWVyZ2VkSWNvblN0eWxlID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5pY29uLCBpY29uU3R5bGUpO1xuICAgICAgdmFyIG1lcmdlZExhYmVsU3R5bGUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmxhYmVsLCBsYWJlbFN0eWxlKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9FbmhhbmNlZFN3aXRjaDIuZGVmYXVsdCwgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHtcbiAgICAgICAgcmVmOiAnZW5oYW5jZWRTd2l0Y2gnLFxuICAgICAgICBpbnB1dFR5cGU6ICdyYWRpbycsXG4gICAgICAgIGNoZWNrZWQ6IGNoZWNrZWQsXG4gICAgICAgIHN3aXRjaGVkOiBjaGVja2VkLFxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgIHJpcHBsZUNvbG9yOiBzdHlsZXMucmlwcGxlLmNvbG9yLFxuICAgICAgICBpY29uU3R5bGU6IG1lcmdlZEljb25TdHlsZSxcbiAgICAgICAgbGFiZWxTdHlsZTogbWVyZ2VkTGFiZWxTdHlsZSxcbiAgICAgICAgbGFiZWxQb3NpdGlvbjogbGFiZWxQb3NpdGlvbixcbiAgICAgICAgb25Td2l0Y2g6IHRoaXMuaGFuZGxlU3dpdGNoLFxuICAgICAgICBzd2l0Y2hFbGVtZW50OiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHVuY2hlY2tlZEVsZW1lbnQsXG4gICAgICAgICAgY2hlY2tlZEVsZW1lbnRcbiAgICAgICAgKVxuICAgICAgfSkpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gUmFkaW9CdXR0b247XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5SYWRpb0J1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoZWNrZWQ6IGZhbHNlLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGxhYmVsUG9zaXRpb246ICdyaWdodCdcbn07XG5SYWRpb0J1dHRvbi5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuUmFkaW9CdXR0b24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBjaGVja2VkIGlmIHRydWVcbiAgICogVXNlZCBpbnRlcm5hbGx5IGJ5IGBSYWRpb0J1dHRvbkdyb3VwYC5cbiAgICovXG4gIGNoZWNrZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFRoZSBpY29uIGVsZW1lbnQgdG8gc2hvdyB3aGVuIHRoZSByYWRpbyBidXR0b24gaXMgY2hlY2tlZC5cbiAgICovXG4gIGNoZWNrZWRJY29uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgcmFkaW8gYnV0dG9uIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBpY29uIGVsZW1lbnQuXG4gICAqL1xuICBpY29uU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogVXNlZCBpbnRlcm5hbGx5IGJ5IGBSYWRpb0J1dHRvbkdyb3VwYC4gVXNlIHRoZSBgbGFiZWxQb3NpdGlvbmAgcHJvcGVydHkgb2YgYFJhZGlvQnV0dG9uR3JvdXBgIGluc3RlYWQuXG4gICAqIFdoZXJlIHRoZSBsYWJlbCB3aWxsIGJlIHBsYWNlZCBuZXh0IHRvIHRoZSByYWRpbyBidXR0b24uXG4gICAqL1xuICBsYWJlbFBvc2l0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsnbGVmdCcsICdyaWdodCddKSxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBsYWJlbCBlbGVtZW50LlxuICAgKi9cbiAgbGFiZWxTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gdGhlIHJhZGlvIGJ1dHRvbiBpcyBjaGVja2VkLiBOb3RlIHRoYXQgdGhpc1xuICAgKiBmdW5jdGlvbiB3aWxsIG5vdCBiZSBjYWxsZWQgaWYgdGhlIHJhZGlvIGJ1dHRvbiBpcyBwYXJ0IG9mIGFcbiAgICogcmFkaW8gYnV0dG9uIGdyb3VwOiBpbiB0aGlzIGNhc2UsIHVzZSB0aGUgYG9uQ2hhbmdlYCBwcm9wZXJ0eSBvZlxuICAgKiBgUmFkaW9CdXR0b25Hcm91cGAuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBgY2hhbmdlYCBldmVudCB0YXJnZXRpbmcgdGhlIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgZWxlbWVudCdzIGB2YWx1ZWAuXG4gICAqL1xuICBvbkNoZWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGljb24gZWxlbWVudCB0byBzaG93IHdoZW4gdGhlIHJhZGlvIGJ1dHRvbiBpcyB1bmNoZWNrZWQuXG4gICAqL1xuICB1bmNoZWNrZWRJY29uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIHJhZGlvIGJ1dHRvbi5cbiAgICovXG4gIHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueVxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gUmFkaW9CdXR0b247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL1JhZGlvQnV0dG9uL1JhZGlvQnV0dG9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTU1XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IHsgR3JpZCwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1mbGV4Ym94LWdyaWQnO1xyXG5cclxuaW1wb3J0IFByb2ZpbGVGb3JtIGZyb20gJy4vUHJvZmlsZUZvcm0nO1xyXG5cclxuY2xhc3MgUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxHcmlkIGZsdWlkPlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0geHNPZmZzZXQ9ezB9IG1kPXs4fSBtZE9mZnNldD17Mn0gbGc9ezZ9IGxnT2Zmc2V0PXszfT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcxMHB4JywgbWFyZ2luQm90dG9tOiAnMTBweCcsIGJvcmRlcjogJzJweCBzb2xpZCBibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLCBib3JkZXJDb2xvcjogJ3JnYigwLCAxODgsIDIxMiknfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInLCBjb2xvcjogJ3JnYigwLCAxODgsIDIxMiknfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTXkgUHJvZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnLCB3aWR0aDogJzkwJScsIG1hcmdpbjogJ2F1dG8nfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVGb3JtIG9uU3VibWl0PXt0aGlzLnByb3BzLmNhbGN1bGF0ZUNhbG9yaWVzVGFyZ2V0fSBjYWxvcmllc1RhcmdldD17dGhpcy5wcm9wcy5jYWxvcmllc1RhcmdldH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1Byb2ZpbGV9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL1Byb2ZpbGUvUHJvZmlsZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZpZWxkLCByZWR1eEZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcclxuXHJcbmltcG9ydCBSYWlzZWRCdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdtYXRlcmlhbC11aS9UZXh0RmllbGQnO1xyXG5pbXBvcnQge1JhZGlvQnV0dG9uLCBSYWRpb0J1dHRvbkdyb3VwfSBmcm9tICdtYXRlcmlhbC11aS9SYWRpb0J1dHRvbic7XHJcblxyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWZsZXhib3gtZ3JpZCc7XHJcblxyXG5pbXBvcnQgU2VsZWN0RmllbGQgZnJvbSAnbWF0ZXJpYWwtdWkvU2VsZWN0RmllbGQnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnbWF0ZXJpYWwtdWkvTWVudUl0ZW0nO1xyXG5cclxuY29uc3QgZmllbGRTdHlsZSA9IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuICAgIG1hcmdpbkxlZnQ6ICcycHgnXHJcbn07XHJcblxyXG5jb25zdCBmaWVsZFN0eWxlMiA9IHtcclxuICAgIHdpZHRoOiAnMTAwcHgnLFxyXG4gICAgbWFyZ2luTGVmdDogJzVweCcsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcxMHB4J1xyXG59O1xyXG5cclxuY2xhc3MgTXlUZXh0RmllbGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBjb25zdCB7aW5wdXQsIG1ldGEsIHR5cGUsIGxhYmVsfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PXtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUZXh0PXttZXRhLmVycm9yICYmICdyZXF1aXJlZCd9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTXlSYWRpb0ZpZWxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgY29uc3Qge2lucHV0LCBtZXRhLCBsYWJlbH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPFJhZGlvQnV0dG9uR3JvdXAgXHJcbiAgICAgICAgICAgICAgICBuYW1lPXtpbnB1dC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgdmFsdWVTZWxlY3RlZD17aW5wdXQudmFsdWV9XHJcbiAgICAgICAgICAgICAgICB7Li4uaW5wdXR9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2JvcmRlcjogJzFweCBzb2xpZCBsaWdodGdyYXknLCBtYXJnaW46ICdhdXRvJywgdGV4dEFsaWduOiAnY2VudGVyJywgaGVpZ2h0OiAnNTJweCcsIHBhZGRpbmdUb3A6ICcxMHB4J319PlxyXG5cclxuICAgICAgICAgICAgICAgIDxSYWRpb0J1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwibWFsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNYWxlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cImZlbWFsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGZW1hbGVcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9SYWRpb0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIE15U2VsZWN0RmllbGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBjb25zdCB7aW5wdXQsIG1ldGEsIGxhYmVsfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8U2VsZWN0RmllbGRcclxuICAgICAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PXtsYWJlbH1cclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHsuLi5pbnB1dH0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChldmVudCwga2V5LCBwYXlsb2FkKSA9PiB7aW5wdXQub25DaGFuZ2UocGF5bG9hZCk7fSB9ID5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdub25lJyBwcmltYXJ5VGV4dD1cIk5vbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdtaW5vcicgcHJpbWFyeVRleHQ9XCJNaW5vciB3YWxraW5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT0nYXZlcmFnZScgcHJpbWFyeVRleHQ9XCJXYWxraW5nIGFuZCBtaW5vciBleGNlcmNpc2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdoZWF2eScgcHJpbWFyeVRleHQ9XCJIZWF2aWVyIGV4Y2VyY2lzZSBvciBzcG9ydHNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPSdwcm8nIHByaW1hcnlUZXh0PVwiUHJvZmVzc2lvbmFsIGV4Y2VyY2lzZSBvciBzcG9ydHNcIiAvPlxyXG4gICAgICAgICAgICA8L1NlbGVjdEZpZWxkPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5sZXQgUHJvZmlsZUZvcm0gPSBwcm9wcyA9PiB7XHJcblxyXG4gICAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIGNhbG9yaWVzVGFyZ2V0IH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsgaGFuZGxlU3VibWl0IH0+XHJcbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdmaXJzdE5hbWUnIGxhYmVsPSdGaXJzdCBOYW1lJyBjb21wb25lbnQ9e015VGV4dEZpZWxkfSAvPlxyXG4gICAgICAgICAgICA8RmllbGQgbmFtZT0nbGFzdE5hbWUnIGxhYmVsPSdMYXN0IE5hbWUnIGNvbXBvbmVudD17TXlUZXh0RmllbGR9IC8+XHJcbiAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdlbWFpbCcgbGFiZWw9J0UtbWFpbCcgY29tcG9uZW50PXtNeVRleHRGaWVsZH0gdHlwZT0nZW1haWwnIC8+XHJcblxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17Nn0gc3R5bGU9e3ttaW5XaWR0aDogJzIwMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdoZWlnaHQnIGxhYmVsPSdIZWlnaHQnIGNvbXBvbmVudD17TXlUZXh0RmllbGR9IHR5cGU9J251bWJlcicgLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17Nn0gIHN0eWxlPXt7bWluV2lkdGg6ICcyMDBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RmllbGQgbmFtZT0nd2VpZ2h0JyBsYWJlbD0nV2VpZ2h0JyBjb21wb25lbnQ9e015VGV4dEZpZWxkfSB0eXBlPSdudW1iZXInIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17Nn0gc3R5bGU9e3ttaW5XaWR0aDogJzIwMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdhZ2UnIGxhYmVsPSdBZ2UnIGNvbXBvbmVudD17TXlUZXh0RmllbGR9IHR5cGU9J251bWJlcicgLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17Nn0gc3R5bGU9e3ttaW5XaWR0aDogJzIwMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdzZXgnIGxhYmVsPSdTZXgnIGNvbXBvbmVudD17TXlSYWRpb0ZpZWxkfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPSdhY3Rpdml0eScgbGFiZWw9J1BoeXNpY2FsIGFjdGl2aXR5JyBjb21wb25lbnQ9e015U2VsZWN0RmllbGR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICcxMHB4JywgbWFyZ2luQm90dG9tOiAnMjBweCd9fT5cclxuICAgICAgICAgICAgICAgIDxSYWlzZWRCdXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t9fVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdDYWxjdWxhdGUgQ2Fsb3JpZXMgVGFyZ2V0J1xyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICcyMHB4J319PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOiAyNH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgcmdiKDAsIDE4OCwgMjEyKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwcHgnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzEwMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2Fsb3JpZXNUYXJnZXQudG9GaXhlZCgwKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwcHgnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCdcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAga2NhbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiA8UmFpc2VkQnV0dG9uIHN0eWxlPXt7bWFyZ2luOiAnYXV0bycsIGRpc3BsYXk6ICdibG9jaycsIHdpZHRoOicxMDBweCcsIG1hcmdpbkJvdHRvbTogJzEwcHgnfX1cclxuICAgICAgICAgICAgICAgIGxhYmVsPSdTYXZlJ1xyXG4gICAgICAgICAgICAgICAgcHJpbWFyeT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fSAvPiAqL31cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG59O1xyXG5cclxuUHJvZmlsZUZvcm0gPSByZWR1eEZvcm0oe1xyXG4gIC8vIGEgdW5pcXVlIG5hbWUgZm9yIHRoZSBmb3JtXHJcbiAgICBmb3JtOiAncHJvZmlsZScsXHJcbiAgICBkZXN0cm95T25Vbm1vdW50OiBmYWxzZSxcclxuICAgIGluaXRpYWxWYWx1ZXM6IHtzZXg6ICdmZW1hbGUnLCBhY3Rpdml0eTogJ21pbm9yJywgZmlyc3ROYW1lOiAncmFmYScsIGhlaWdodDogJzIwMCcsIHdlaWdodDogJzEwMCcsIGFnZTogMzB9XHJcbn0pKFByb2ZpbGVGb3JtKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVGb3JtO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL1Byb2ZpbGUvUHJvZmlsZUZvcm0uanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxudmFyIF9hcnJvd0Ryb3BEb3duID0gcmVxdWlyZSgnLi4vc3ZnLWljb25zL25hdmlnYXRpb24vYXJyb3ctZHJvcC1kb3duJyk7XG5cbnZhciBfYXJyb3dEcm9wRG93bjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcnJvd0Ryb3BEb3duKTtcblxudmFyIF9NZW51ID0gcmVxdWlyZSgnLi4vTWVudS9NZW51Jyk7XG5cbnZhciBfTWVudTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NZW51KTtcblxudmFyIF9DbGVhckZpeCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL0NsZWFyRml4Jyk7XG5cbnZhciBfQ2xlYXJGaXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ2xlYXJGaXgpO1xuXG52YXIgX1BvcG92ZXIgPSByZXF1aXJlKCcuLi9Qb3BvdmVyL1BvcG92ZXInKTtcblxudmFyIF9Qb3BvdmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BvcG92ZXIpO1xuXG52YXIgX1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbCA9IHJlcXVpcmUoJy4uL1BvcG92ZXIvUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsJyk7XG5cbnZhciBfUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbCk7XG5cbnZhciBfa2V5Y29kZSA9IHJlcXVpcmUoJ2tleWNvZGUnKTtcblxudmFyIF9rZXljb2RlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleWNvZGUpO1xuXG52YXIgX2V2ZW50cyA9IHJlcXVpcmUoJy4uL3V0aWxzL2V2ZW50cycpO1xuXG52YXIgX2V2ZW50czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ldmVudHMpO1xuXG52YXIgX0ljb25CdXR0b24gPSByZXF1aXJlKCcuLi9JY29uQnV0dG9uJyk7XG5cbnZhciBfSWNvbkJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JY29uQnV0dG9uKTtcblxudmFyIF9wcm9wVHlwZXMzID0gcmVxdWlyZSgnLi4vdXRpbHMvcHJvcFR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlczMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQpIHtcbiAgdmFyIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQ7XG5cbiAgdmFyIHNwYWNpbmcgPSBjb250ZXh0Lm11aVRoZW1lLmJhc2VUaGVtZS5zcGFjaW5nO1xuICB2YXIgcGFsZXR0ZSA9IGNvbnRleHQubXVpVGhlbWUuYmFzZVRoZW1lLnBhbGV0dGU7XG4gIHZhciBhY2NlbnRDb2xvciA9IGNvbnRleHQubXVpVGhlbWUuZHJvcERvd25NZW51LmFjY2VudENvbG9yO1xuICByZXR1cm4ge1xuICAgIGNvbnRyb2w6IHtcbiAgICAgIGN1cnNvcjogZGlzYWJsZWQgPyAnbm90LWFsbG93ZWQnIDogJ3BvaW50ZXInLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIGZpbGw6IGFjY2VudENvbG9yLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICByaWdodDogc3BhY2luZy5kZXNrdG9wR3V0dGVyTGVzcyxcbiAgICAgIHRvcDogKHNwYWNpbmcuaWNvblNpemUgLSAyNCkgLyAyICsgc3BhY2luZy5kZXNrdG9wR3V0dGVyTWluaSAvIDJcbiAgICB9LFxuICAgIGljb25DaGlsZHJlbjoge1xuICAgICAgZmlsbDogJ2luaGVyaXQnXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgY29sb3I6IGRpc2FibGVkID8gcGFsZXR0ZS5kaXNhYmxlZENvbG9yIDogcGFsZXR0ZS50ZXh0Q29sb3IsXG4gICAgICBoZWlnaHQ6IHNwYWNpbmcuZGVza3RvcFRvb2xiYXJIZWlnaHQgKyAncHgnLFxuICAgICAgbGluZUhlaWdodDogc3BhY2luZy5kZXNrdG9wVG9vbGJhckhlaWdodCArICdweCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBwYWRkaW5nTGVmdDogc3BhY2luZy5kZXNrdG9wR3V0dGVyLFxuICAgICAgcGFkZGluZ1JpZ2h0OiBzcGFjaW5nLmljb25TaXplICogMiArIHNwYWNpbmcuZGVza3RvcEd1dHRlck1pbmksXG4gICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICB0b3A6IDAsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICAgIH0sXG4gICAgbGFiZWxXaGVuT3Blbjoge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHRvcDogc3BhY2luZy5kZXNrdG9wVG9vbGJhckhlaWdodCAvIDhcbiAgICB9LFxuICAgIHJvb3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZm9udFNpemU6IHNwYWNpbmcuZGVza3RvcERyb3BEb3duTWVudUZvbnRTaXplLFxuICAgICAgaGVpZ2h0OiBzcGFjaW5nLmRlc2t0b3BTdWJoZWFkZXJIZWlnaHQsXG4gICAgICBmb250RmFtaWx5OiBjb250ZXh0Lm11aVRoZW1lLmJhc2VUaGVtZS5mb250RmFtaWx5LFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpXG4gICAgfSxcbiAgICByb290V2hlbk9wZW46IHtcbiAgICAgIG9wYWNpdHk6IDFcbiAgICB9LFxuICAgIHVuZGVybGluZToge1xuICAgICAgYm9yZGVyVG9wOiAnc29saWQgMXB4ICcgKyBhY2NlbnRDb2xvcixcbiAgICAgIGJvdHRvbTogMSxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBtYXJnaW46ICctMXB4ICcgKyBzcGFjaW5nLmRlc2t0b3BHdXR0ZXIgKyAncHgnLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH1cbiAgfTtcbn1cblxudmFyIERyb3BEb3duTWVudSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKERyb3BEb3duTWVudSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRHJvcERvd25NZW51KCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIERyb3BEb3duTWVudSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBEcm9wRG93bk1lbnUuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKERyb3BEb3duTWVudSkpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogZmFsc2VcbiAgICB9LCBfdGhpcy5yb290Tm9kZSA9IHVuZGVmaW5lZCwgX3RoaXMuYXJyb3dOb2RlID0gdW5kZWZpbmVkLCBfdGhpcy5oYW5kbGVUb3VjaFRhcENvbnRyb2wgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoIV90aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBvcGVuOiAhX3RoaXMuc3RhdGUub3BlbixcbiAgICAgICAgICBhbmNob3JFbDogX3RoaXMucm9vdE5vZGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlUmVxdWVzdENsb3NlTWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmNsb3NlKGZhbHNlKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVFc2NLZXlEb3duTWVudSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmNsb3NlKHRydWUpO1xuICAgIH0sIF90aGlzLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHN3aXRjaCAoKDAsIF9rZXljb2RlMi5kZWZhdWx0KShldmVudCkpIHtcbiAgICAgICAgY2FzZSAndXAnOlxuICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgY2FzZSAnc3BhY2UnOlxuICAgICAgICBjYXNlICdlbnRlcic6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgICAgYW5jaG9yRWw6IF90aGlzLnJvb3ROb2RlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlSXRlbVRvdWNoVGFwID0gZnVuY3Rpb24gKGV2ZW50LCBjaGlsZCwgaW5kZXgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5tdWx0aXBsZSkge1xuICAgICAgICBpZiAoIV90aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX3RoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgICAgIF90aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCBpbmRleCwgY2hpbGQucHJvcHMudmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzLmNsb3NlKF9ldmVudHMyLmRlZmF1bHQuaXNLZXlib2FyZChldmVudCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQsIHZhbHVlKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMubXVsdGlwbGUgJiYgX3RoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIHVuZGVmaW5lZCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmNsb3NlID0gZnVuY3Rpb24gKGlzS2V5Ym9hcmQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2xvc2UpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNLZXlib2FyZCkge1xuICAgICAgICAgIHZhciBkcm9wQXJyb3cgPSBfdGhpcy5hcnJvd05vZGU7XG4gICAgICAgICAgdmFyIGRyb3BOb2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKGRyb3BBcnJvdyk7XG4gICAgICAgICAgZHJvcE5vZGUuZm9jdXMoKTtcbiAgICAgICAgICBkcm9wQXJyb3cuc2V0S2V5Ym9hcmRGb2N1cyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIC8vIFRoZSBuZXN0ZWQgc3R5bGVzIGZvciBkcm9wLWRvd24tbWVudSBhcmUgbW9kaWZpZWQgYnkgdG9vbGJhciBhbmQgcG9zc2libHlcbiAgLy8gb3RoZXIgdXNlciBjb21wb25lbnRzLCBzbyBpdCB3aWxsIGdpdmUgZnVsbCBhY2Nlc3MgdG8gaXRzIGpzIHN0eWxlcyByYXRoZXJcbiAgLy8gdGhhbiBqdXN0IHRoZSBwYXJlbnQuXG5cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShEcm9wRG93bk1lbnUsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5hdXRvV2lkdGgpIHtcbiAgICAgICAgdGhpcy5zZXRXaWR0aCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMub3BlbkltbWVkaWF0ZWx5KSB7XG4gICAgICAgIC8vIFRPRE86IFRlbXBvcmFyeSBmaXggdG8gbWFrZSBvcGVuSW1tZWRpYXRlbHkgd29yayB3aXRoIHBvcG92ZXIuXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWRpZC1tb3VudC1zZXQtc3RhdGUgKi9cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgICAgYW5jaG9yRWw6IF90aGlzMi5yb290Tm9kZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LCAwKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC9uby1kaWQtbW91bnQtc2V0LXN0YXRlICovXG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hdXRvV2lkdGgpIHtcbiAgICAgICAgdGhpcy5zZXRXaWR0aCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldElucHV0Tm9kZScsXG5cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIGRlcHJlY2F0ZWQgYnV0IHN0aWxsIGhlcmUgYmVjYXVzZSB0aGUgVGV4dEZpZWxkXG4gICAgICogbmVlZCBpdCBpbiBvcmRlciB0byB3b3JrLiBUT0RPOiBUaGF0IHdpbGwgYmUgYWRkcmVzc2VkIGxhdGVyLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnB1dE5vZGUoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHJvb3ROb2RlID0gdGhpcy5yb290Tm9kZTtcblxuICAgICAgcm9vdE5vZGUuZm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghX3RoaXMzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgX3RoaXMzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46ICFfdGhpczMuc3RhdGUub3BlbixcbiAgICAgICAgICAgIGFuY2hvckVsOiBfdGhpczMucm9vdE5vZGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHJvb3ROb2RlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFdpZHRoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0V2lkdGgoKSB7XG4gICAgICB2YXIgZWwgPSB0aGlzLnJvb3ROb2RlO1xuICAgICAgaWYgKCF0aGlzLnByb3BzLnN0eWxlIHx8ICF0aGlzLnByb3BzLnN0eWxlLmhhc093blByb3BlcnR5KCd3aWR0aCcpKSB7XG4gICAgICAgIGVsLnN0eWxlLndpZHRoID0gJ2F1dG8nO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhbmltYXRlZCA9IF9wcm9wcy5hbmltYXRlZCxcbiAgICAgICAgICBhbmltYXRpb24gPSBfcHJvcHMuYW5pbWF0aW9uLFxuICAgICAgICAgIGF1dG9XaWR0aCA9IF9wcm9wcy5hdXRvV2lkdGgsXG4gICAgICAgICAgbXVsdGlwbGUgPSBfcHJvcHMubXVsdGlwbGUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBpY29uU3R5bGUgPSBfcHJvcHMuaWNvblN0eWxlLFxuICAgICAgICAgIGxhYmVsU3R5bGUgPSBfcHJvcHMubGFiZWxTdHlsZSxcbiAgICAgICAgICBsaXN0U3R5bGUgPSBfcHJvcHMubGlzdFN0eWxlLFxuICAgICAgICAgIG1heEhlaWdodCA9IF9wcm9wcy5tYXhIZWlnaHQsXG4gICAgICAgICAgbWVudVN0eWxlUHJvcCA9IF9wcm9wcy5tZW51U3R5bGUsXG4gICAgICAgICAgc2VsZWN0aW9uUmVuZGVyZXIgPSBfcHJvcHMuc2VsZWN0aW9uUmVuZGVyZXIsXG4gICAgICAgICAgb25DbG9zZSA9IF9wcm9wcy5vbkNsb3NlLFxuICAgICAgICAgIG9wZW5JbW1lZGlhdGVseSA9IF9wcm9wcy5vcGVuSW1tZWRpYXRlbHksXG4gICAgICAgICAgbWVudUl0ZW1TdHlsZSA9IF9wcm9wcy5tZW51SXRlbVN0eWxlLFxuICAgICAgICAgIHNlbGVjdGVkTWVudUl0ZW1TdHlsZSA9IF9wcm9wcy5zZWxlY3RlZE1lbnVJdGVtU3R5bGUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgdW5kZXJsaW5lU3R5bGUgPSBfcHJvcHMudW5kZXJsaW5lU3R5bGUsXG4gICAgICAgICAgdmFsdWUgPSBfcHJvcHMudmFsdWUsXG4gICAgICAgICAgaWNvbkJ1dHRvbiA9IF9wcm9wcy5pY29uQnV0dG9uLFxuICAgICAgICAgIGFuY2hvck9yaWdpbiA9IF9wcm9wcy5hbmNob3JPcmlnaW4sXG4gICAgICAgICAgdGFyZ2V0T3JpZ2luID0gX3Byb3BzLnRhcmdldE9yaWdpbixcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydhbmltYXRlZCcsICdhbmltYXRpb24nLCAnYXV0b1dpZHRoJywgJ211bHRpcGxlJywgJ2NoaWxkcmVuJywgJ2NsYXNzTmFtZScsICdkaXNhYmxlZCcsICdpY29uU3R5bGUnLCAnbGFiZWxTdHlsZScsICdsaXN0U3R5bGUnLCAnbWF4SGVpZ2h0JywgJ21lbnVTdHlsZScsICdzZWxlY3Rpb25SZW5kZXJlcicsICdvbkNsb3NlJywgJ29wZW5JbW1lZGlhdGVseScsICdtZW51SXRlbVN0eWxlJywgJ3NlbGVjdGVkTWVudUl0ZW1TdHlsZScsICdzdHlsZScsICd1bmRlcmxpbmVTdHlsZScsICd2YWx1ZScsICdpY29uQnV0dG9uJywgJ2FuY2hvck9yaWdpbicsICd0YXJnZXRPcmlnaW4nXSk7XG4gICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBhbmNob3JFbCA9IF9zdGF0ZS5hbmNob3JFbCxcbiAgICAgICAgICBvcGVuID0gX3N0YXRlLm9wZW47XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG5cbiAgICAgIHZhciBkaXNwbGF5VmFsdWUgPSAnJztcbiAgICAgIGlmICghbXVsdGlwbGUpIHtcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgIGlmIChjaGlsZCAmJiB2YWx1ZSA9PT0gY2hpbGQucHJvcHMudmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb25SZW5kZXJlcikge1xuICAgICAgICAgICAgICBkaXNwbGF5VmFsdWUgPSBzZWxlY3Rpb25SZW5kZXJlcih2YWx1ZSwgY2hpbGQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyB3aWxsIG5lZWQgdG8gYmUgaW1wcm92ZWQgKGluIGNhc2UgcHJpbWFyeVRleHQgaXMgYSBub2RlKVxuICAgICAgICAgICAgICBkaXNwbGF5VmFsdWUgPSBjaGlsZC5wcm9wcy5sYWJlbCB8fCBjaGlsZC5wcm9wcy5wcmltYXJ5VGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgICB2YXIgc2VsZWN0aW9uUmVuZGVyZXJDaGlsZHJlbiA9IFtdO1xuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgaWYgKGNoaWxkICYmIHZhbHVlICYmIHZhbHVlLmluZGV4T2YoY2hpbGQucHJvcHMudmFsdWUpID4gLTEpIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb25SZW5kZXJlcikge1xuICAgICAgICAgICAgICB2YWx1ZXMucHVzaChjaGlsZC5wcm9wcy52YWx1ZSk7XG4gICAgICAgICAgICAgIHNlbGVjdGlvblJlbmRlcmVyQ2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YWx1ZXMucHVzaChjaGlsZC5wcm9wcy5sYWJlbCB8fCBjaGlsZC5wcm9wcy5wcmltYXJ5VGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkaXNwbGF5VmFsdWUgPSBbXTtcbiAgICAgICAgaWYgKHNlbGVjdGlvblJlbmRlcmVyKSB7XG4gICAgICAgICAgZGlzcGxheVZhbHVlID0gc2VsZWN0aW9uUmVuZGVyZXIodmFsdWVzLCBzZWxlY3Rpb25SZW5kZXJlckNoaWxkcmVuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwbGF5VmFsdWUgPSB2YWx1ZXMuam9pbignLCAnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgbWVudVN0eWxlID0gdm9pZCAwO1xuICAgICAgaWYgKGFuY2hvckVsICYmICFhdXRvV2lkdGgpIHtcbiAgICAgICAgbWVudVN0eWxlID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHtcbiAgICAgICAgICB3aWR0aDogYW5jaG9yRWwuY2xpZW50V2lkdGhcbiAgICAgICAgfSwgbWVudVN0eWxlUHJvcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW51U3R5bGUgPSBtZW51U3R5bGVQcm9wO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwge1xuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgICAgICAgIF90aGlzNC5yb290Tm9kZSA9IG5vZGU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5yb290LCBvcGVuICYmIHN0eWxlcy5yb290V2hlbk9wZW4sIHN0eWxlKSlcbiAgICAgICAgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9DbGVhckZpeDIuZGVmYXVsdCxcbiAgICAgICAgICB7IHN0eWxlOiBzdHlsZXMuY29udHJvbCwgb25Ub3VjaFRhcDogdGhpcy5oYW5kbGVUb3VjaFRhcENvbnRyb2wgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5sYWJlbCwgb3BlbiAmJiBzdHlsZXMubGFiZWxXaGVuT3BlbiwgbGFiZWxTdHlsZSkpIH0sXG4gICAgICAgICAgICBkaXNwbGF5VmFsdWVcbiAgICAgICAgICApLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgX0ljb25CdXR0b24yLmRlZmF1bHQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpczQuYXJyb3dOb2RlID0gbm9kZTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLmljb24sIGljb25TdHlsZSksXG4gICAgICAgICAgICAgIGljb25TdHlsZTogc3R5bGVzLmljb25DaGlsZHJlblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGljb25CdXR0b25cbiAgICAgICAgICApLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLnVuZGVybGluZSwgdW5kZXJsaW5lU3R5bGUpKSB9KVxuICAgICAgICApLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfUG9wb3ZlcjIuZGVmYXVsdCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhbmNob3JPcmlnaW46IGFuY2hvck9yaWdpbixcbiAgICAgICAgICAgIHRhcmdldE9yaWdpbjogdGFyZ2V0T3JpZ2luLFxuICAgICAgICAgICAgYW5jaG9yRWw6IGFuY2hvckVsLFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBhbmltYXRpb24gfHwgX1BvcG92ZXJBbmltYXRpb25WZXJ0aWNhbDIuZGVmYXVsdCxcbiAgICAgICAgICAgIG9wZW46IG9wZW4sXG4gICAgICAgICAgICBhbmltYXRlZDogYW5pbWF0ZWQsXG4gICAgICAgICAgICBvblJlcXVlc3RDbG9zZTogdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2VNZW51XG4gICAgICAgICAgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIF9NZW51Mi5kZWZhdWx0LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtdWx0aXBsZTogbXVsdGlwbGUsXG4gICAgICAgICAgICAgIG1heEhlaWdodDogbWF4SGVpZ2h0LFxuICAgICAgICAgICAgICBkZXNrdG9wOiB0cnVlLFxuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgIG9uRXNjS2V5RG93bjogdGhpcy5oYW5kbGVFc2NLZXlEb3duTWVudSxcbiAgICAgICAgICAgICAgc3R5bGU6IG1lbnVTdHlsZSxcbiAgICAgICAgICAgICAgbGlzdFN0eWxlOiBsaXN0U3R5bGUsXG4gICAgICAgICAgICAgIG9uSXRlbVRvdWNoVGFwOiB0aGlzLmhhbmRsZUl0ZW1Ub3VjaFRhcCxcbiAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMuaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgICBtZW51SXRlbVN0eWxlOiBtZW51SXRlbVN0eWxlLFxuICAgICAgICAgICAgICBzZWxlY3RlZE1lbnVJdGVtU3R5bGU6IHNlbGVjdGVkTWVudUl0ZW1TdHlsZSxcbiAgICAgICAgICAgICAgYXV0b1dpZHRoOiBhdXRvV2lkdGgsXG4gICAgICAgICAgICAgIHdpZHRoOiAhYXV0b1dpZHRoICYmIG1lbnVTdHlsZSA/IG1lbnVTdHlsZS53aWR0aCA6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIERyb3BEb3duTWVudTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkRyb3BEb3duTWVudS5tdWlOYW1lID0gJ0Ryb3BEb3duTWVudSc7XG5Ecm9wRG93bk1lbnUuZGVmYXVsdFByb3BzID0ge1xuICBhbmltYXRlZDogdHJ1ZSxcbiAgYXV0b1dpZHRoOiB0cnVlLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGljb25CdXR0b246IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9hcnJvd0Ryb3BEb3duMi5kZWZhdWx0LCBudWxsKSxcbiAgb3BlbkltbWVkaWF0ZWx5OiBmYWxzZSxcbiAgbWF4SGVpZ2h0OiA1MDAsXG4gIG11bHRpcGxlOiBmYWxzZSxcbiAgYW5jaG9yT3JpZ2luOiB7XG4gICAgdmVydGljYWw6ICd0b3AnLFxuICAgIGhvcml6b250YWw6ICdsZWZ0J1xuICB9XG59O1xuRHJvcERvd25NZW51LmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5Ecm9wRG93bk1lbnUucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogVGhpcyBpcyB0aGUgcG9pbnQgb24gdGhlIGFuY2hvciB0aGF0IHRoZSBwb3BvdmVyJ3NcbiAgICogYHRhcmdldE9yaWdpbmAgd2lsbCBhdHRhY2ggdG8uXG4gICAqIE9wdGlvbnM6XG4gICAqIHZlcnRpY2FsOiBbdG9wLCBjZW50ZXIsIGJvdHRvbV1cbiAgICogaG9yaXpvbnRhbDogW2xlZnQsIG1pZGRsZSwgcmlnaHRdLlxuICAgKi9cbiAgYW5jaG9yT3JpZ2luOiBfcHJvcFR5cGVzNC5kZWZhdWx0Lm9yaWdpbixcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBwb3BvdmVyIHdpbGwgYXBwbHkgdHJhbnNpdGlvbnMgd2hlblxuICAgKiBpdCBnZXRzIGFkZGVkIHRvIHRoZSBET00uXG4gICAqL1xuICBhbmltYXRlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgYW5pbWF0aW9uIGNvbXBvbmVudCB1c2VkLlxuICAgKi9cbiAgYW5pbWF0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBUaGUgd2lkdGggd2lsbCBhdXRvbWF0aWNhbGx5IGJlIHNldCBhY2NvcmRpbmcgdG8gdGhlIGl0ZW1zIGluc2lkZSB0aGUgbWVudS5cbiAgICogVG8gY29udHJvbCB0aGlzIHdpZHRoIGluIGNzcyBpbnN0ZWFkLCBzZXQgdGhpcyBwcm9wIHRvIGBmYWxzZWAuXG4gICAqL1xuICBhdXRvV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFRoZSBgTWVudUl0ZW1gcyB0byBwb3B1bGF0ZSB0aGUgYE1lbnVgIHdpdGguIElmIHRoZSBgTWVudUl0ZW1zYCBoYXZlIHRoZVxuICAgKiBwcm9wIGBsYWJlbGAgdGhhdCB2YWx1ZSB3aWxsIGJlIHVzZWQgdG8gcmVuZGVyIHRoZSByZXByZXNlbnRhdGlvbiBvZiB0aGF0XG4gICAqIGl0ZW0gd2l0aGluIHRoZSBmaWVsZC5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgY3NzIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgbWVudS5cbiAgICovXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZXMgZGVmYXVsdCBgU3ZnSWNvbmAgZHJvcGRvd24gYXJyb3cgY29tcG9uZW50LlxuICAgKi9cbiAgaWNvbkJ1dHRvbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogT3ZlcnJpZGVzIHRoZSBzdHlsZXMgb2YgaWNvbiBlbGVtZW50LlxuICAgKi9cbiAgaWNvblN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aGUgc3R5bGVzIG9mIGxhYmVsIHdoZW4gdGhlIGBEcm9wRG93bk1lbnVgIGlzIGluYWN0aXZlLlxuICAgKi9cbiAgbGFiZWxTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgc3R5bGUgb2JqZWN0IHRvIHVzZSB0byBvdmVycmlkZSB1bmRlcmx5aW5nIGxpc3Qgc3R5bGUuXG4gICAqL1xuICBsaXN0U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIG1heGltdW0gaGVpZ2h0IG9mIHRoZSBgTWVudWAgd2hlbiBpdCBpcyBkaXNwbGF5ZWQuXG4gICAqL1xuICBtYXhIZWlnaHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgbWVudSBpdGVtcy5cbiAgICovXG4gIG1lbnVJdGVtU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGVzIHRoZSBzdHlsZXMgb2YgYE1lbnVgIHdoZW4gdGhlIGBEcm9wRG93bk1lbnVgIGlzIGRpc3BsYXllZC5cbiAgICovXG4gIG1lbnVTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBgdmFsdWVgIG11c3QgYmUgYW4gYXJyYXkgYW5kIHRoZSBtZW51IHdpbGwgc3VwcG9ydFxuICAgKiBtdWx0aXBsZSBzZWxlY3Rpb25zLlxuICAgKi9cbiAgbXVsdGlwbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gYSBtZW51IGl0ZW0gaXMgY2xpY2tlZCwgb3RoZXIgdGhhbiB0aGUgb25lIGN1cnJlbnRseSBzZWxlY3RlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRvdWNoVGFwIGV2ZW50IHRhcmdldGluZyB0aGUgbWVudSBpdGVtIHRoYXQgd2FzIGNsaWNrZWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBrZXkgVGhlIGluZGV4IG9mIHRoZSBjbGlja2VkIG1lbnUgaXRlbSBpbiB0aGUgYGNoaWxkcmVuYCBjb2xsZWN0aW9uLlxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWUgSWYgYG11bHRpcGxlYCBpcyB0cnVlLCB0aGUgbWVudSdzIGB2YWx1ZWBcbiAgICogYXJyYXkgd2l0aCBlaXRoZXIgdGhlIG1lbnUgaXRlbSdzIGB2YWx1ZWAgYWRkZWQgKGlmXG4gICAqIGl0IHdhc24ndCBhbHJlYWR5IHNlbGVjdGVkKSBvciBvbWl0dGVkIChpZiBpdCB3YXMgYWxyZWFkeSBzZWxlY3RlZCkuXG4gICAqIE90aGVyd2lzZSwgdGhlIGB2YWx1ZWAgb2YgdGhlIG1lbnUgaXRlbS5cbiAgICovXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIHRoZSBtZW51IGlzIGNsb3NlZC5cbiAgICovXG4gIG9uQ2xvc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIGhhdmUgdGhlIGBEcm9wRG93bk1lbnVgIGF1dG9tYXRpY2FsbHkgb3BlbiBvbiBtb3VudC5cbiAgICovXG4gIG9wZW5JbW1lZGlhdGVseTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2Ygc2VsZWN0ZWQgbWVudSBpdGVtcy5cbiAgICovXG4gIHNlbGVjdGVkTWVudUl0ZW1TdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIGEgbWVudSBpdGVtIGlzIGNsaWNrZWQsIG90aGVyIHRoYW4gdGhlIG9uZSBjdXJyZW50bHkgc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZSBJZiBgbXVsdGlwbGVgIGlzIHRydWUsIHRoZSBtZW51J3MgYHZhbHVlYFxuICAgKiBhcnJheSB3aXRoIGVpdGhlciB0aGUgbWVudSBpdGVtJ3MgYHZhbHVlYCBhZGRlZCAoaWZcbiAgICogaXQgd2Fzbid0IGFscmVhZHkgc2VsZWN0ZWQpIG9yIG9taXR0ZWQgKGlmIGl0IHdhcyBhbHJlYWR5IHNlbGVjdGVkKS5cbiAgICogT3RoZXJ3aXNlLCB0aGUgYHZhbHVlYCBvZiB0aGUgbWVudSBpdGVtLlxuICAgKiBAcGFyYW0ge2FueX0gbWVudUl0ZW0gVGhlIHNlbGVjdGVkIGBNZW51SXRlbWAuXG4gICAqIElmIGBtdWx0aXBsZWAgaXMgdHJ1ZSwgdGhpcyB3aWxsIGJlIGFuIGFycmF5IHdpdGggdGhlIGBNZW51SXRlbWBzIG1hdGNoaW5nIHRoZSBgdmFsdWVgcyBwYXJhbWV0ZXIuXG4gICAqL1xuICBzZWxlY3Rpb25SZW5kZXJlcjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIHBvaW50IG9uIHRoZSBwb3BvdmVyIHdoaWNoIHdpbGwgYXR0YWNoIHRvXG4gICAqIHRoZSBhbmNob3IncyBvcmlnaW4uXG4gICAqIE9wdGlvbnM6XG4gICAqIHZlcnRpY2FsOiBbdG9wLCBjZW50ZXIsIGJvdHRvbV1cbiAgICogaG9yaXpvbnRhbDogW2xlZnQsIG1pZGRsZSwgcmlnaHRdLlxuICAgKi9cbiAgdGFyZ2V0T3JpZ2luOiBfcHJvcFR5cGVzNC5kZWZhdWx0Lm9yaWdpbixcbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgdW5kZXJsaW5lLlxuICAgKi9cbiAgdW5kZXJsaW5lU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogSWYgYG11bHRpcGxlYCBpcyB0cnVlLCBhbiBhcnJheSBvZiB0aGUgYHZhbHVlYHMgb2YgdGhlIHNlbGVjdGVkXG4gICAqIG1lbnUgaXRlbXMuIE90aGVyd2lzZSwgdGhlIGB2YWx1ZWAgb2YgdGhlIHNlbGVjdGVkIG1lbnUgaXRlbS5cbiAgICogSWYgcHJvdmlkZWQsIHRoZSBtZW51IHdpbGwgYmUgYSBjb250cm9sbGVkIGNvbXBvbmVudC5cbiAgICovXG4gIHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueVxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gRHJvcERvd25NZW51O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9Ecm9wRG93bk1lbnUvRHJvcERvd25NZW51LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuTWVudUl0ZW0gPSBleHBvcnRzLkRyb3BEb3duTWVudSA9IHVuZGVmaW5lZDtcblxudmFyIF9Ecm9wRG93bk1lbnUyID0gcmVxdWlyZSgnLi9Ecm9wRG93bk1lbnUnKTtcblxudmFyIF9Ecm9wRG93bk1lbnUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRHJvcERvd25NZW51Mik7XG5cbnZhciBfTWVudUl0ZW0yID0gcmVxdWlyZSgnLi4vTWVudUl0ZW0vTWVudUl0ZW0nKTtcblxudmFyIF9NZW51SXRlbTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9NZW51SXRlbTIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLkRyb3BEb3duTWVudSA9IF9Ecm9wRG93bk1lbnUzLmRlZmF1bHQ7XG5leHBvcnRzLk1lbnVJdGVtID0gX01lbnVJdGVtMy5kZWZhdWx0O1xuZXhwb3J0cy5kZWZhdWx0ID0gX0Ryb3BEb3duTWVudTMuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvRHJvcERvd25NZW51L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX1BhcGVyID0gcmVxdWlyZSgnLi4vUGFwZXInKTtcblxudmFyIF9QYXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QYXBlcik7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbnZhciBfcHJvcFR5cGVzMyA9IHJlcXVpcmUoJy4uL3V0aWxzL3Byb3BUeXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0LCBzdGF0ZSkge1xuICB2YXIgdGFyZ2V0T3JpZ2luID0gcHJvcHMudGFyZ2V0T3JpZ2luO1xuICB2YXIgb3BlbiA9IHN0YXRlLm9wZW47XG4gIHZhciBtdWlUaGVtZSA9IGNvbnRleHQubXVpVGhlbWU7XG5cbiAgdmFyIGhvcml6b250YWwgPSB0YXJnZXRPcmlnaW4uaG9yaXpvbnRhbC5yZXBsYWNlKCdtaWRkbGUnLCAndmVydGljYWwnKTtcblxuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgekluZGV4OiBtdWlUaGVtZS56SW5kZXgucG9wb3ZlcixcbiAgICAgIG9wYWNpdHk6IG9wZW4gPyAxIDogMCxcbiAgICAgIHRyYW5zZm9ybTogb3BlbiA/ICdzY2FsZVkoMSknIDogJ3NjYWxlWSgwKScsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IGhvcml6b250YWwgKyAnICcgKyB0YXJnZXRPcmlnaW4udmVydGljYWwsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnNDUwbXMnLCBbJ3RyYW5zZm9ybScsICdvcGFjaXR5J10pLFxuICAgICAgbWF4SGVpZ2h0OiAnMTAwJSdcbiAgICB9XG4gIH07XG59XG5cbnZhciBQb3BvdmVyQW5pbWF0aW9uVmVydGljYWwgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShQb3BvdmVyQW5pbWF0aW9uVmVydGljYWwsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbCgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBQb3BvdmVyQW5pbWF0aW9uVmVydGljYWwpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShQb3BvdmVyQW5pbWF0aW9uVmVydGljYWwpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW46IGZhbHNlXG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3Qvbm8tZGlkLW1vdW50LXNldC1zdGF0ZVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9wZW46IG5leHRQcm9wcy5vcGVuXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIHpEZXB0aCA9IF9wcm9wcy56RGVwdGg7XG5cblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMuc3RhdGUpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9QYXBlcjIuZGVmYXVsdCxcbiAgICAgICAge1xuICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSxcbiAgICAgICAgICB6RGVwdGg6IHpEZXB0aCxcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgICAgICB9LFxuICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3R5bGU6IHt9LFxuICB6RGVwdGg6IDFcbn07XG5Qb3BvdmVyQW5pbWF0aW9uVmVydGljYWwuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblBvcG92ZXJBbmltYXRpb25WZXJ0aWNhbC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIG9wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgdGFyZ2V0T3JpZ2luOiBfcHJvcFR5cGVzNC5kZWZhdWx0Lm9yaWdpbi5pc1JlcXVpcmVkLFxuICB6RGVwdGg6IF9wcm9wVHlwZXM0LmRlZmF1bHQuekRlcHRoXG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBQb3BvdmVyQW5pbWF0aW9uVmVydGljYWw7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL1BvcG92ZXIvUG9wb3ZlckFuaW1hdGlvblZlcnRpY2FsLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX1JhZGlvQnV0dG9uID0gcmVxdWlyZSgnLi9SYWRpb0J1dHRvbicpO1xuXG52YXIgX1JhZGlvQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JhZGlvQnV0dG9uKTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBSYWRpb0J1dHRvbkdyb3VwID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoUmFkaW9CdXR0b25Hcm91cCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmFkaW9CdXR0b25Hcm91cCgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBSYWRpb0J1dHRvbkdyb3VwKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IFJhZGlvQnV0dG9uR3JvdXAuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFJhZGlvQnV0dG9uR3JvdXApKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG51bWJlckNoZWNrZWRSYWRpb0J1dHRvbnM6IDAsXG4gICAgICBzZWxlY3RlZDogJydcbiAgICB9LCBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQsIG5ld1NlbGVjdGlvbikge1xuICAgICAgX3RoaXMudXBkYXRlUmFkaW9CdXR0b25zKG5ld1NlbGVjdGlvbik7XG5cbiAgICAgIC8vIFN1Y2Nlc3NmdWwgdXBkYXRlXG4gICAgICBpZiAoX3RoaXMuc3RhdGUubnVtYmVyQ2hlY2tlZFJhZGlvQnV0dG9ucyA9PT0gMCkge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMub25DaGFuZ2UpIF90aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50LCBuZXdTZWxlY3Rpb24pO1xuICAgICAgfVxuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShSYWRpb0J1dHRvbkdyb3VwLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgY250ID0gMDtcbiAgICAgIHZhciBzZWxlY3RlZCA9ICcnO1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgdmFsdWVTZWxlY3RlZCA9IF9wcm9wcy52YWx1ZVNlbGVjdGVkLFxuICAgICAgICAgIGRlZmF1bHRTZWxlY3RlZCA9IF9wcm9wcy5kZWZhdWx0U2VsZWN0ZWQ7XG5cbiAgICAgIGlmICh2YWx1ZVNlbGVjdGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2VsZWN0ZWQgPSB2YWx1ZVNlbGVjdGVkO1xuICAgICAgfSBlbHNlIGlmIChkZWZhdWx0U2VsZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzZWxlY3RlZCA9IGRlZmF1bHRTZWxlY3RlZDtcbiAgICAgIH1cblxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLmZvckVhY2godGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICBpZiAoX3RoaXMyLmhhc0NoZWNrQXR0cmlidXRlKG9wdGlvbikpIGNudCsrO1xuICAgICAgfSwgdGhpcyk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBudW1iZXJDaGVja2VkUmFkaW9CdXR0b25zOiBjbnQsXG4gICAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAobmV4dFByb3BzLmhhc093blByb3BlcnR5KCd2YWx1ZVNlbGVjdGVkJykpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgc2VsZWN0ZWQ6IG5leHRQcm9wcy52YWx1ZVNlbGVjdGVkXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hhc0NoZWNrQXR0cmlidXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzQ2hlY2tBdHRyaWJ1dGUocmFkaW9CdXR0b24pIHtcbiAgICAgIHJldHVybiByYWRpb0J1dHRvbi5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY2hlY2tlZCcpICYmIHJhZGlvQnV0dG9uLnByb3BzLmNoZWNrZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlUmFkaW9CdXR0b25zJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlUmFkaW9CdXR0b25zKG5ld1NlbGVjdGlvbikge1xuICAgICAgaWYgKHRoaXMuc3RhdGUubnVtYmVyQ2hlY2tlZFJhZGlvQnV0dG9ucyA9PT0gMCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IG5ld1NlbGVjdGlvbiB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICgwLCBfd2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdNYXRlcmlhbC1VSTogQ2Fubm90IHNlbGVjdCBhIGRpZmZlcmVudCByYWRpbyBidXR0b24gd2hpbGUgYW5vdGhlciByYWRpbyBidXR0b25cXG4gICAgICAgIGhhcyB0aGUgXFwnY2hlY2tlZFxcJyBwcm9wZXJ0eSBzZXQgdG8gdHJ1ZS4nKSA6IHZvaWQgMDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTZWxlY3RlZFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2VsZWN0ZWRWYWx1ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLnNlbGVjdGVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFNlbGVjdGVkVmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTZWxlY3RlZFZhbHVlKG5ld1NlbGVjdGlvblZhbHVlKSB7XG4gICAgICB0aGlzLnVwZGF0ZVJhZGlvQnV0dG9ucyhuZXdTZWxlY3Rpb25WYWx1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xlYXJWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyVmFsdWUoKSB7XG4gICAgICB0aGlzLnNldFNlbGVjdGVkVmFsdWUoJycpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG5cbiAgICAgIHZhciBvcHRpb25zID0gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgIHZhciBfb3B0aW9uJHByb3BzID0gb3B0aW9uLnByb3BzLFxuICAgICAgICAgICAgbmFtZSA9IF9vcHRpb24kcHJvcHMubmFtZSxcbiAgICAgICAgICAgIHZhbHVlID0gX29wdGlvbiRwcm9wcy52YWx1ZSxcbiAgICAgICAgICAgIGxhYmVsID0gX29wdGlvbiRwcm9wcy5sYWJlbCxcbiAgICAgICAgICAgIG9uQ2hlY2sgPSBfb3B0aW9uJHByb3BzLm9uQ2hlY2ssXG4gICAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9vcHRpb24kcHJvcHMsIFsnbmFtZScsICd2YWx1ZScsICdsYWJlbCcsICdvbkNoZWNrJ10pO1xuXG5cbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9SYWRpb0J1dHRvbjIuZGVmYXVsdCwgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHtcbiAgICAgICAgICByZWY6IG9wdGlvbi5wcm9wcy52YWx1ZSxcbiAgICAgICAgICBuYW1lOiBfdGhpczMucHJvcHMubmFtZSxcbiAgICAgICAgICBrZXk6IG9wdGlvbi5wcm9wcy52YWx1ZSxcbiAgICAgICAgICB2YWx1ZTogb3B0aW9uLnByb3BzLnZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBvcHRpb24ucHJvcHMubGFiZWwsXG4gICAgICAgICAgbGFiZWxQb3NpdGlvbjogX3RoaXMzLnByb3BzLmxhYmVsUG9zaXRpb24sXG4gICAgICAgICAgb25DaGVjazogX3RoaXMzLmhhbmRsZUNoYW5nZSxcbiAgICAgICAgICBjaGVja2VkOiBvcHRpb24ucHJvcHMudmFsdWUgPT09IF90aGlzMy5zdGF0ZS5zZWxlY3RlZFxuICAgICAgICB9KSk7XG4gICAgICB9LCB0aGlzKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgdGhpcy5wcm9wcy5zdHlsZSkpLFxuICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5jbGFzc05hbWVcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFJhZGlvQnV0dG9uR3JvdXA7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5SYWRpb0J1dHRvbkdyb3VwLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3R5bGU6IHt9XG59O1xuUmFkaW9CdXR0b25Hcm91cC5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuUmFkaW9CdXR0b25Hcm91cC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBTaG91bGQgYmUgdXNlZCB0byBwYXNzIGBSYWRpb0J1dHRvbmAgY29tcG9uZW50cy5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgQ1NTIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgYHZhbHVlYCBwcm9wZXJ0eSBvZiB0aGUgcmFkaW8gYnV0dG9uIHRoYXQgd2lsbCBiZVxuICAgKiBzZWxlY3RlZCBieSBkZWZhdWx0LiBUaGlzIHRha2VzIHByZWNlZGVuY2Ugb3ZlciB0aGUgYGNoZWNrZWRgIHByb3BlcnR5XG4gICAqIG9mIHRoZSBgUmFkaW9CdXR0b25gIGVsZW1lbnRzLlxuICAgKi9cbiAgZGVmYXVsdFNlbGVjdGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcbiAgLyoqXG4gICAqIFdoZXJlIHRoZSBsYWJlbCB3aWxsIGJlIHBsYWNlZCBmb3IgYWxsIGNoaWxkIHJhZGlvIGJ1dHRvbnMuXG4gICAqIFRoaXMgdGFrZXMgcHJlY2VkZW5jZSBvdmVyIHRoZSBgbGFiZWxQb3NpdGlvbmAgcHJvcGVydHkgb2YgdGhlXG4gICAqIGBSYWRpb0J1dHRvbmAgZWxlbWVudHMuXG4gICAqL1xuICBsYWJlbFBvc2l0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsnbGVmdCcsICdyaWdodCddKSxcbiAgLyoqXG4gICAqIFRoZSBuYW1lIHRoYXQgd2lsbCBiZSBhcHBsaWVkIHRvIGFsbCBjaGlsZCByYWRpbyBidXR0b25zLlxuICAgKi9cbiAgbmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgZmlyZWQgd2hlbiBhIHJhZGlvIGJ1dHRvbiBoYXNcbiAgICogYmVlbiBjaGVja2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgYGNoYW5nZWAgZXZlbnQgdGFyZ2V0aW5nIHRoZSBzZWxlY3RlZFxuICAgKiByYWRpbyBidXR0b24uXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIGB2YWx1ZWAgb2YgdGhlIHNlbGVjdGVkIHJhZGlvIGJ1dHRvbi5cbiAgICovXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGB2YWx1ZWAgb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCByYWRpbyBidXR0b24uXG4gICAqL1xuICB2YWx1ZVNlbGVjdGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueVxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gUmFkaW9CdXR0b25Hcm91cDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvUmFkaW9CdXR0b24vUmFkaW9CdXR0b25Hcm91cC5qc1xuLy8gbW9kdWxlIGlkID0gMTUzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLlJhZGlvQnV0dG9uR3JvdXAgPSBleHBvcnRzLlJhZGlvQnV0dG9uID0gdW5kZWZpbmVkO1xuXG52YXIgX1JhZGlvQnV0dG9uMiA9IHJlcXVpcmUoJy4vUmFkaW9CdXR0b24nKTtcblxudmFyIF9SYWRpb0J1dHRvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SYWRpb0J1dHRvbjIpO1xuXG52YXIgX1JhZGlvQnV0dG9uR3JvdXAyID0gcmVxdWlyZSgnLi9SYWRpb0J1dHRvbkdyb3VwJyk7XG5cbnZhciBfUmFkaW9CdXR0b25Hcm91cDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SYWRpb0J1dHRvbkdyb3VwMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuUmFkaW9CdXR0b24gPSBfUmFkaW9CdXR0b24zLmRlZmF1bHQ7XG5leHBvcnRzLlJhZGlvQnV0dG9uR3JvdXAgPSBfUmFkaW9CdXR0b25Hcm91cDMuZGVmYXVsdDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9SYWRpb0J1dHRvbjMuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvUmFkaW9CdXR0b24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE1MzJcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfVGV4dEZpZWxkID0gcmVxdWlyZSgnLi4vVGV4dEZpZWxkJyk7XG5cbnZhciBfVGV4dEZpZWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RleHRGaWVsZCk7XG5cbnZhciBfRHJvcERvd25NZW51ID0gcmVxdWlyZSgnLi4vRHJvcERvd25NZW51Jyk7XG5cbnZhciBfRHJvcERvd25NZW51MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Ryb3BEb3duTWVudSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcykge1xuICByZXR1cm4ge1xuICAgIGxhYmVsOiB7XG4gICAgICBwYWRkaW5nTGVmdDogMCxcbiAgICAgIHRvcDogcHJvcHMuZmxvYXRpbmdMYWJlbFRleHQgPyA2IDogLTRcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgdG9wOiBwcm9wcy5mbG9hdGluZ0xhYmVsVGV4dCA/IDggOiAwXG4gICAgfSxcbiAgICBoaWRlRHJvcERvd25VbmRlcmxpbmU6IHtcbiAgICAgIGJvcmRlclRvcDogJ25vbmUnXG4gICAgfSxcbiAgICBkcm9wRG93bk1lbnU6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICB9XG4gIH07XG59XG5cbnZhciBTZWxlY3RGaWVsZCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFNlbGVjdEZpZWxkLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTZWxlY3RGaWVsZCgpIHtcbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBTZWxlY3RGaWVsZCk7XG4gICAgcmV0dXJuICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKFNlbGVjdEZpZWxkLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShTZWxlY3RGaWVsZCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoU2VsZWN0RmllbGQsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYXV0b1dpZHRoID0gX3Byb3BzLmF1dG9XaWR0aCxcbiAgICAgICAgICBtdWx0aXBsZSA9IF9wcm9wcy5tdWx0aXBsZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICBsYWJlbFN0eWxlID0gX3Byb3BzLmxhYmVsU3R5bGUsXG4gICAgICAgICAgaWNvblN0eWxlID0gX3Byb3BzLmljb25TdHlsZSxcbiAgICAgICAgICBpZCA9IF9wcm9wcy5pZCxcbiAgICAgICAgICB1bmRlcmxpbmVEaXNhYmxlZFN0eWxlID0gX3Byb3BzLnVuZGVybGluZURpc2FibGVkU3R5bGUsXG4gICAgICAgICAgdW5kZXJsaW5lRm9jdXNTdHlsZSA9IF9wcm9wcy51bmRlcmxpbmVGb2N1c1N0eWxlLFxuICAgICAgICAgIG1lbnVJdGVtU3R5bGUgPSBfcHJvcHMubWVudUl0ZW1TdHlsZSxcbiAgICAgICAgICBzZWxlY3RlZE1lbnVJdGVtU3R5bGUgPSBfcHJvcHMuc2VsZWN0ZWRNZW51SXRlbVN0eWxlLFxuICAgICAgICAgIHVuZGVybGluZVN0eWxlID0gX3Byb3BzLnVuZGVybGluZVN0eWxlLFxuICAgICAgICAgIGRyb3BEb3duTWVudVByb3BzID0gX3Byb3BzLmRyb3BEb3duTWVudVByb3BzLFxuICAgICAgICAgIGVycm9yU3R5bGUgPSBfcHJvcHMuZXJyb3JTdHlsZSxcbiAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsRml4ZWQgPSBfcHJvcHMuZmxvYXRpbmdMYWJlbEZpeGVkLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0ID0gX3Byb3BzLmZsb2F0aW5nTGFiZWxUZXh0LFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxTdHlsZSA9IF9wcm9wcy5mbG9hdGluZ0xhYmVsU3R5bGUsXG4gICAgICAgICAgaGludFN0eWxlID0gX3Byb3BzLmhpbnRTdHlsZSxcbiAgICAgICAgICBoaW50VGV4dCA9IF9wcm9wcy5oaW50VGV4dCxcbiAgICAgICAgICBmdWxsV2lkdGggPSBfcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgICAgIGVycm9yVGV4dCA9IF9wcm9wcy5lcnJvclRleHQsXG4gICAgICAgICAgbGlzdFN0eWxlID0gX3Byb3BzLmxpc3RTdHlsZSxcbiAgICAgICAgICBtYXhIZWlnaHQgPSBfcHJvcHMubWF4SGVpZ2h0LFxuICAgICAgICAgIG1lbnVTdHlsZSA9IF9wcm9wcy5tZW51U3R5bGUsXG4gICAgICAgICAgb25Gb2N1cyA9IF9wcm9wcy5vbkZvY3VzLFxuICAgICAgICAgIG9uQmx1ciA9IF9wcm9wcy5vbkJsdXIsXG4gICAgICAgICAgb25DaGFuZ2UgPSBfcHJvcHMub25DaGFuZ2UsXG4gICAgICAgICAgc2VsZWN0aW9uUmVuZGVyZXIgPSBfcHJvcHMuc2VsZWN0aW9uUmVuZGVyZXIsXG4gICAgICAgICAgdmFsdWUgPSBfcHJvcHMudmFsdWUsXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnYXV0b1dpZHRoJywgJ211bHRpcGxlJywgJ2NoaWxkcmVuJywgJ3N0eWxlJywgJ2xhYmVsU3R5bGUnLCAnaWNvblN0eWxlJywgJ2lkJywgJ3VuZGVybGluZURpc2FibGVkU3R5bGUnLCAndW5kZXJsaW5lRm9jdXNTdHlsZScsICdtZW51SXRlbVN0eWxlJywgJ3NlbGVjdGVkTWVudUl0ZW1TdHlsZScsICd1bmRlcmxpbmVTdHlsZScsICdkcm9wRG93bk1lbnVQcm9wcycsICdlcnJvclN0eWxlJywgJ2Rpc2FibGVkJywgJ2Zsb2F0aW5nTGFiZWxGaXhlZCcsICdmbG9hdGluZ0xhYmVsVGV4dCcsICdmbG9hdGluZ0xhYmVsU3R5bGUnLCAnaGludFN0eWxlJywgJ2hpbnRUZXh0JywgJ2Z1bGxXaWR0aCcsICdlcnJvclRleHQnLCAnbGlzdFN0eWxlJywgJ21heEhlaWdodCcsICdtZW51U3R5bGUnLCAnb25Gb2N1cycsICdvbkJsdXInLCAnb25DaGFuZ2UnLCAnc2VsZWN0aW9uUmVuZGVyZXInLCAndmFsdWUnXSk7XG5cblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9UZXh0RmllbGQyLmRlZmF1bHQsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIG90aGVyLCB7XG4gICAgICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsRml4ZWQ6IGZsb2F0aW5nTGFiZWxGaXhlZCxcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dDogZmxvYXRpbmdMYWJlbFRleHQsXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbFN0eWxlOiBmbG9hdGluZ0xhYmVsU3R5bGUsXG4gICAgICAgICAgaGludFN0eWxlOiBoaW50U3R5bGUsXG4gICAgICAgICAgaGludFRleHQ6ICFoaW50VGV4dCAmJiAhZmxvYXRpbmdMYWJlbFRleHQgPyAnICcgOiBoaW50VGV4dCxcbiAgICAgICAgICBmdWxsV2lkdGg6IGZ1bGxXaWR0aCxcbiAgICAgICAgICBlcnJvclRleHQ6IGVycm9yVGV4dCxcbiAgICAgICAgICB1bmRlcmxpbmVTdHlsZTogdW5kZXJsaW5lU3R5bGUsXG4gICAgICAgICAgZXJyb3JTdHlsZTogZXJyb3JTdHlsZSxcbiAgICAgICAgICBvbkZvY3VzOiBvbkZvY3VzLFxuICAgICAgICAgIG9uQmx1cjogb25CbHVyLFxuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICB1bmRlcmxpbmVEaXNhYmxlZFN0eWxlOiB1bmRlcmxpbmVEaXNhYmxlZFN0eWxlLFxuICAgICAgICAgIHVuZGVybGluZUZvY3VzU3R5bGU6IHVuZGVybGluZUZvY3VzU3R5bGVcbiAgICAgICAgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9Ecm9wRG93bk1lbnUyLmRlZmF1bHQsXG4gICAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7XG4gICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5kcm9wRG93bk1lbnUsIG1lbnVTdHlsZSksXG4gICAgICAgICAgICBsYWJlbFN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmxhYmVsLCBsYWJlbFN0eWxlKSxcbiAgICAgICAgICAgIGljb25TdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5pY29uLCBpY29uU3R5bGUpLFxuICAgICAgICAgICAgbWVudUl0ZW1TdHlsZTogbWVudUl0ZW1TdHlsZSxcbiAgICAgICAgICAgIHNlbGVjdGVkTWVudUl0ZW1TdHlsZTogc2VsZWN0ZWRNZW51SXRlbVN0eWxlLFxuICAgICAgICAgICAgdW5kZXJsaW5lU3R5bGU6IHN0eWxlcy5oaWRlRHJvcERvd25VbmRlcmxpbmUsXG4gICAgICAgICAgICBsaXN0U3R5bGU6IGxpc3RTdHlsZSxcbiAgICAgICAgICAgIGF1dG9XaWR0aDogYXV0b1dpZHRoLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHQsXG4gICAgICAgICAgICBtdWx0aXBsZTogbXVsdGlwbGUsXG4gICAgICAgICAgICBzZWxlY3Rpb25SZW5kZXJlcjogc2VsZWN0aW9uUmVuZGVyZXJcbiAgICAgICAgICB9LCBkcm9wRG93bk1lbnVQcm9wcyksXG4gICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFNlbGVjdEZpZWxkO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuU2VsZWN0RmllbGQuZGVmYXVsdFByb3BzID0ge1xuICBhdXRvV2lkdGg6IGZhbHNlLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIGZ1bGxXaWR0aDogZmFsc2UsXG4gIG11bHRpcGxlOiBmYWxzZVxufTtcblNlbGVjdEZpZWxkLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5TZWxlY3RGaWVsZC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgd2lkdGggd2lsbCBhdXRvbWF0aWNhbGx5IGJlIHNldCBhY2NvcmRpbmcgdG8gdGhlXG4gICAqIGl0ZW1zIGluc2lkZSB0aGUgbWVudS5cbiAgICogVG8gY29udHJvbCB0aGUgd2lkdGggaW4gQ1NTIGluc3RlYWQsIGxlYXZlIHRoaXMgcHJvcCBzZXQgdG8gYGZhbHNlYC5cbiAgICovXG4gIGF1dG9XaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhlIGBNZW51SXRlbWAgZWxlbWVudHMgdG8gcG9wdWxhdGUgdGhlIHNlbGVjdCBmaWVsZCB3aXRoLlxuICAgKiBJZiB0aGUgbWVudSBpdGVtcyBoYXZlIGEgYGxhYmVsYCBwcm9wLCB0aGF0IHZhbHVlIHdpbGxcbiAgICogcmVwcmVzZW50IHRoZSBzZWxlY3RlZCBtZW51IGl0ZW0gaW4gdGhlIHJlbmRlcmVkIHNlbGVjdCBmaWVsZC5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgc2VsZWN0IGZpZWxkIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT2JqZWN0IHRoYXQgY2FuIGhhbmRsZSBhbmQgb3ZlcnJpZGUgYW55IHByb3BlcnR5IG9mIGNvbXBvbmVudCBEcm9wRG93bk1lbnUuXG4gICAqL1xuICBkcm9wRG93bk1lbnVQcm9wczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgZXJyb3IgZWxlbWVudC5cbiAgICovXG4gIGVycm9yU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGVycm9yIGNvbnRlbnQgdG8gZGlzcGxheS5cbiAgICovXG4gIGVycm9yVGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGZsb2F0aW5nIGxhYmVsIHdpbGwgZmxvYXQgZXZlbiB3aGVuIG5vIHZhbHVlIGlzIHNlbGVjdGVkLlxuICAgKi9cbiAgZmxvYXRpbmdMYWJlbEZpeGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICAqL1xuICBmbG9hdGluZ0xhYmVsU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAgKi9cbiAgZmxvYXRpbmdMYWJlbFRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBzZWxlY3QgZmllbGQgd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBoaW50IGVsZW1lbnQuXG4gICAqL1xuICBoaW50U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGhpbnQgY29udGVudCB0byBkaXNwbGF5LlxuICAgKi9cbiAgaGludFRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBpY29uIGVsZW1lbnQuXG4gICAqL1xuICBpY29uU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGlkIHByb3AgZm9yIHRoZSB0ZXh0IGZpZWxkLlxuICAgKi9cbiAgaWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGxhYmVsIHN0eWxlIHdoZW4gdGhlIHNlbGVjdCBmaWVsZCBpcyBpbmFjdGl2ZS5cbiAgICovXG4gIGxhYmVsU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHVuZGVybHlpbmcgYExpc3RgIGVsZW1lbnQuXG4gICAqL1xuICBsaXN0U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgbWF4LWhlaWdodCBvZiB0aGUgdW5kZXJseWluZyBgRHJvcERvd25NZW51YCBlbGVtZW50LlxuICAgKi9cbiAgbWF4SGVpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIG1lbnUgaXRlbXMuXG4gICAqL1xuICBtZW51SXRlbVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSB1bmRlcmx5aW5nIGBEcm9wRG93bk1lbnVgIGVsZW1lbnQuXG4gICAqL1xuICBtZW51U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogSWYgdHJ1ZSwgYHZhbHVlYCBtdXN0IGJlIGFuIGFycmF5IGFuZCB0aGUgbWVudSB3aWxsIHN1cHBvcnRcbiAgICogbXVsdGlwbGUgc2VsZWN0aW9ucy5cbiAgICovXG4gIG11bHRpcGxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uQmx1cjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiBhIG1lbnUgaXRlbSBpcyBzZWxlY3RlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRvdWNoVGFwIGV2ZW50IHRhcmdldGluZyB0aGUgbWVudSBpdGVtXG4gICAqIHRoYXQgd2FzIHNlbGVjdGVkLlxuICAgKiBAcGFyYW0ge251bWJlcn0ga2V5IFRoZSBpbmRleCBvZiB0aGUgc2VsZWN0ZWQgbWVudSBpdGVtLCBvciB1bmRlZmluZWRcbiAgICogaWYgYG11bHRpcGxlYCBpcyB0cnVlLlxuICAgKiBAcGFyYW0ge2FueX0gcGF5bG9hZCBJZiBgbXVsdGlwbGVgIGlzIHRydWUsIHRoZSBtZW51J3MgYHZhbHVlYFxuICAgKiBhcnJheSB3aXRoIGVpdGhlciB0aGUgbWVudSBpdGVtJ3MgYHZhbHVlYCBhZGRlZCAoaWZcbiAgICogaXQgd2Fzbid0IGFscmVhZHkgc2VsZWN0ZWQpIG9yIG9taXR0ZWQgKGlmIGl0IHdhcyBhbHJlYWR5IHNlbGVjdGVkKS5cbiAgICogT3RoZXJ3aXNlLCB0aGUgYHZhbHVlYCBvZiB0aGUgbWVudSBpdGVtLlxuICAgKi9cbiAgb25DaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Gb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2Ygc2VsZWN0ZWQgbWVudSBpdGVtcy5cbiAgICovXG4gIHNlbGVjdGVkTWVudUl0ZW1TdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBDdXN0b21pemUgdGhlIHJlbmRlcmluZyBvZiB0aGUgc2VsZWN0ZWQgaXRlbS5cbiAgICpcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlIElmIGBtdWx0aXBsZWAgaXMgdHJ1ZSwgdGhlIG1lbnUncyBgdmFsdWVgXG4gICAqIGFycmF5IHdpdGggZWl0aGVyIHRoZSBtZW51IGl0ZW0ncyBgdmFsdWVgIGFkZGVkIChpZlxuICAgKiBpdCB3YXNuJ3QgYWxyZWFkeSBzZWxlY3RlZCkgb3Igb21pdHRlZCAoaWYgaXQgd2FzIGFscmVhZHkgc2VsZWN0ZWQpLlxuICAgKiBPdGhlcndpc2UsIHRoZSBgdmFsdWVgIG9mIHRoZSBtZW51IGl0ZW0uXG4gICAqIEBwYXJhbSB7YW55fSBtZW51SXRlbSBUaGUgc2VsZWN0ZWQgYE1lbnVJdGVtYC5cbiAgICogSWYgYG11bHRpcGxlYCBpcyB0cnVlLCB0aGlzIHdpbGwgYmUgYW4gYXJyYXkgd2l0aCB0aGUgYE1lbnVJdGVtYHMgbWF0Y2hpbmcgdGhlIGB2YWx1ZWBzIHBhcmFtZXRlci5cbiAgICovXG4gIHNlbGVjdGlvblJlbmRlcmVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHVuZGVybGluZSBlbGVtZW50IHdoZW4gdGhlIHNlbGVjdFxuICAgKiBmaWVsZCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIHVuZGVybGluZURpc2FibGVkU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHVuZGVybGluZSBlbGVtZW50IHdoZW4gdGhlIHNlbGVjdCBmaWVsZFxuICAgKiBpcyBmb2N1c2VkLlxuICAgKi9cbiAgdW5kZXJsaW5lRm9jdXNTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgdW5kZXJsaW5lIGVsZW1lbnQuXG4gICAqL1xuICB1bmRlcmxpbmVTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiBgbXVsdGlwbGVgIGlzIHRydWUsIGFuIGFycmF5IG9mIHRoZSBgdmFsdWVgcyBvZiB0aGUgc2VsZWN0ZWRcbiAgICogbWVudSBpdGVtcy4gT3RoZXJ3aXNlLCB0aGUgYHZhbHVlYCBvZiB0aGUgc2VsZWN0ZWQgbWVudSBpdGVtLlxuICAgKiBJZiBwcm92aWRlZCwgdGhlIG1lbnUgd2lsbCBiZSBhIGNvbnRyb2xsZWQgY29tcG9uZW50LlxuICAgKi9cbiAgdmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBTZWxlY3RGaWVsZDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvU2VsZWN0RmllbGQvU2VsZWN0RmllbGQuanNcbi8vIG1vZHVsZSBpZCA9IDE1MzNcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX1NlbGVjdEZpZWxkID0gcmVxdWlyZSgnLi9TZWxlY3RGaWVsZCcpO1xuXG52YXIgX1NlbGVjdEZpZWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1NlbGVjdEZpZWxkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1NlbGVjdEZpZWxkMi5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9TZWxlY3RGaWVsZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTUzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqICBCZWZvcmVBZnRlcldyYXBwZXJcbiAqICAgIEFuIGFsdGVybmF0aXZlIGZvciB0aGUgOjpiZWZvcmUgYW5kIDo6YWZ0ZXIgY3NzIHBzZXVkby1lbGVtZW50cyBmb3JcbiAqICAgIGNvbXBvbmVudHMgd2hvc2Ugc3R5bGVzIGFyZSBkZWZpbmVkIGluIGphdmFzY3JpcHQgaW5zdGVhZCBvZiBjc3MuXG4gKlxuICogIFVzYWdlOiBGb3IgdGhlIGVsZW1lbnQgdGhhdCB3ZSB3YW50IHRvIGFwcGx5IGJlZm9yZSBhbmQgYWZ0ZXIgZWxlbWVudHMgdG8sXG4gKiAgICB3cmFwIGl0cyBjaGlsZHJlbiB3aXRoIEJlZm9yZUFmdGVyV3JhcHBlci4gRm9yIGV4YW1wbGU6XG4gKlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlcj5cbiAqICA8UGFwZXI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+IC8vIFNlZSBub3RpY2VcbiAqICAgIDxCZWZvcmVBZnRlcldyYXBwZXI+ICAgICAgICByZW5kZXJzICAgICAgICAgPGRpdi8+IC8vIGJlZm9yZSBlbGVtZW50XG4gKiAgICAgIFtjaGlsZHJlbiBvZiBwYXBlcl0gICAgICAgLS0tLS0tPiAgICAgICAgIFtjaGlsZHJlbiBvZiBwYXBlcl1cbiAqICAgIDwvQmVmb3JlQWZ0ZXJXcmFwcGVyPiAgICAgICAgICAgICAgICAgICAgICAgPGRpdi8+IC8vIGFmdGVyIGVsZW1lbnRcbiAqICA8L1BhcGVyPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gKlxuICogIE5vdGljZTogTm90aWNlIHRoYXQgdGhpcyBkaXYgYnVuZGxlcyB0b2dldGhlciBvdXIgZWxlbWVudHMuIElmIHRoZSBlbGVtZW50XG4gKiAgICB0aGF0IHdlIHdhbnQgdG8gYXBwbHkgYmVmb3JlIGFuZCBhZnRlciBlbGVtZW50cyBpcyBhIEhUTUwgdGFnIChpLmUuIGFcbiAqICAgIGRpdiwgcCwgb3IgYnV0dG9uIHRhZyksIHdlIGNhbiBhdm9pZCB0aGlzIGV4dHJhIG5lc3RpbmcgYnkgcGFzc2luZyB1c2luZ1xuICogICAgdGhlIEJlZm9yZUFmdGVyV3JhcHBlciBpbiBwbGFjZSBvZiBzYWlkIHRhZyBsaWtlIHNvOlxuICpcbiAqICA8cD5cbiAqICAgIDxCZWZvcmVBZnRlcldyYXBwZXI+ICAgZG8gdGhpcyBpbnN0ZWFkICAgPEJlZm9yZUFmdGVyV3JhcHBlciBlbGVtZW50VHlwZT0ncCc+XG4gKiAgICAgIFtjaGlsZHJlbiBvZiBwXSAgICAgICAgICAtLS0tLS0+ICAgICAgICAgW2NoaWxkcmVuIG9mIHBdXG4gKiAgICA8L0JlZm9yZUFmdGVyV3JhcHBlcj4gICAgICAgICAgICAgICAgICAgIDwvQmVmb3JlQWZ0ZXJXcmFwcGVyPlxuICogIDwvcD5cbiAqXG4gKiAgQmVmb3JlQWZ0ZXJXcmFwcGVyIGZlYXR1cmVzIHNwcmVhZCBmdW5jdGlvbmFsaXR5LiBUaGlzIG1lYW5zIHRoYXQgd2UgY2FuXG4gKiAgcGFzcyBIVE1MIHRhZyBwcm9wZXJ0aWVzIGRpcmVjdGx5IGludG8gdGhlIEJlZm9yZUFmdGVyV3JhcHBlciB0YWcuXG4gKlxuICogIFdoZW4gdXNpbmcgQmVmb3JlQWZ0ZXJXcmFwcGVyLCBlbnN1cmUgdGhhdCB0aGUgcGFyZW50IG9mIHRoZSBiZWZvcmVFbGVtZW50XG4gKiAgYW5kIGFmdGVyRWxlbWVudCBoYXZlIGEgZGVmaW5lZCBzdHlsZSBwb3NpdGlvbi5cbiAqL1xuXG52YXIgc3R5bGVzID0ge1xuICBib3g6IHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICB9XG59O1xuXG52YXIgQmVmb3JlQWZ0ZXJXcmFwcGVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoQmVmb3JlQWZ0ZXJXcmFwcGVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBCZWZvcmVBZnRlcldyYXBwZXIoKSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgQmVmb3JlQWZ0ZXJXcmFwcGVyKTtcbiAgICByZXR1cm4gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoQmVmb3JlQWZ0ZXJXcmFwcGVyLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShCZWZvcmVBZnRlcldyYXBwZXIpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKEJlZm9yZUFmdGVyV3JhcHBlciwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBiZWZvcmVTdHlsZSA9IF9wcm9wcy5iZWZvcmVTdHlsZSxcbiAgICAgICAgICBhZnRlclN0eWxlID0gX3Byb3BzLmFmdGVyU3R5bGUsXG4gICAgICAgICAgYmVmb3JlRWxlbWVudFR5cGUgPSBfcHJvcHMuYmVmb3JlRWxlbWVudFR5cGUsXG4gICAgICAgICAgYWZ0ZXJFbGVtZW50VHlwZSA9IF9wcm9wcy5hZnRlckVsZW1lbnRUeXBlLFxuICAgICAgICAgIGVsZW1lbnRUeXBlID0gX3Byb3BzLmVsZW1lbnRUeXBlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2JlZm9yZVN0eWxlJywgJ2FmdGVyU3R5bGUnLCAnYmVmb3JlRWxlbWVudFR5cGUnLCAnYWZ0ZXJFbGVtZW50VHlwZScsICdlbGVtZW50VHlwZSddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cblxuICAgICAgdmFyIGJlZm9yZUVsZW1lbnQgPSB2b2lkIDA7XG4gICAgICB2YXIgYWZ0ZXJFbGVtZW50ID0gdm9pZCAwO1xuXG4gICAgICBpZiAoYmVmb3JlU3R5bGUpIHtcbiAgICAgICAgYmVmb3JlRWxlbWVudCA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHRoaXMucHJvcHMuYmVmb3JlRWxlbWVudFR5cGUsIHtcbiAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5ib3gsIGJlZm9yZVN0eWxlKSksXG4gICAgICAgICAga2V5OiAnOjpiZWZvcmUnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWZ0ZXJTdHlsZSkge1xuICAgICAgICBhZnRlckVsZW1lbnQgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0aGlzLnByb3BzLmFmdGVyRWxlbWVudFR5cGUsIHtcbiAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5ib3gsIGFmdGVyU3R5bGUpKSxcbiAgICAgICAgICBrZXk6ICc6OmFmdGVyJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNoaWxkcmVuID0gW2JlZm9yZUVsZW1lbnQsIHRoaXMucHJvcHMuY2hpbGRyZW4sIGFmdGVyRWxlbWVudF07XG5cbiAgICAgIHZhciBwcm9wcyA9IG90aGVyO1xuICAgICAgcHJvcHMuc3R5bGUgPSBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgdGhpcy5wcm9wcy5zdHlsZSkpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy5lbGVtZW50VHlwZSwgcHJvcHMsIGNoaWxkcmVuKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEJlZm9yZUFmdGVyV3JhcHBlcjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkJlZm9yZUFmdGVyV3JhcHBlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGJlZm9yZUVsZW1lbnRUeXBlOiAnZGl2JyxcbiAgYWZ0ZXJFbGVtZW50VHlwZTogJ2RpdicsXG4gIGVsZW1lbnRUeXBlOiAnZGl2J1xufTtcbkJlZm9yZUFmdGVyV3JhcHBlci5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuQmVmb3JlQWZ0ZXJXcmFwcGVyLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgYWZ0ZXJFbGVtZW50VHlwZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGFmdGVyU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBiZWZvcmVFbGVtZW50VHlwZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGJlZm9yZVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgZWxlbWVudFR5cGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gQmVmb3JlQWZ0ZXJXcmFwcGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9pbnRlcm5hbC9CZWZvcmVBZnRlcldyYXBwZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE1Mzhcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX0JlZm9yZUFmdGVyV3JhcHBlciA9IHJlcXVpcmUoJy4vQmVmb3JlQWZ0ZXJXcmFwcGVyJyk7XG5cbnZhciBfQmVmb3JlQWZ0ZXJXcmFwcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0JlZm9yZUFmdGVyV3JhcHBlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBzdHlsZXMgPSB7XG4gIGJlZm9yZToge1xuICAgIGNvbnRlbnQ6IFwiJyAnXCIsXG4gICAgZGlzcGxheTogJ3RhYmxlJ1xuICB9LFxuICBhZnRlcjoge1xuICAgIGNvbnRlbnQ6IFwiJyAnXCIsXG4gICAgY2xlYXI6ICdib3RoJyxcbiAgICBkaXNwbGF5OiAndGFibGUnXG4gIH1cbn07XG5cbnZhciBDbGVhckZpeCA9IGZ1bmN0aW9uIENsZWFyRml4KF9yZWYpIHtcbiAgdmFyIHN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3JlZiwgWydzdHlsZScsICdjaGlsZHJlbiddKTtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgIF9CZWZvcmVBZnRlcldyYXBwZXIyLmRlZmF1bHQsXG4gICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHtcbiAgICAgIGJlZm9yZVN0eWxlOiBzdHlsZXMuYmVmb3JlLFxuICAgICAgYWZ0ZXJTdHlsZTogc3R5bGVzLmFmdGVyLFxuICAgICAgc3R5bGU6IHN0eWxlXG4gICAgfSksXG4gICAgY2hpbGRyZW5cbiAgKTtcbn07XG5cbkNsZWFyRml4Lm11aU5hbWUgPSAnQ2xlYXJGaXgnO1xuXG5DbGVhckZpeC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5cbmV4cG9ydHMuZGVmYXVsdCA9IENsZWFyRml4O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9pbnRlcm5hbC9DbGVhckZpeC5qc1xuLy8gbW9kdWxlIGlkID0gMTUzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdEV2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCdyZWFjdC1ldmVudC1saXN0ZW5lcicpO1xuXG52YXIgX3JlYWN0RXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEV2ZW50TGlzdGVuZXIpO1xuXG52YXIgX2tleWNvZGUgPSByZXF1aXJlKCdrZXljb2RlJyk7XG5cbnZhciBfa2V5Y29kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXljb2RlKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxudmFyIF9Gb2N1c1JpcHBsZSA9IHJlcXVpcmUoJy4vRm9jdXNSaXBwbGUnKTtcblxudmFyIF9Gb2N1c1JpcHBsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Gb2N1c1JpcHBsZSk7XG5cbnZhciBfVG91Y2hSaXBwbGUgPSByZXF1aXJlKCcuL1RvdWNoUmlwcGxlJyk7XG5cbnZhciBfVG91Y2hSaXBwbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVG91Y2hSaXBwbGUpO1xuXG52YXIgX1BhcGVyID0gcmVxdWlyZSgnLi8uLi9QYXBlcicpO1xuXG52YXIgX1BhcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhcGVyKTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlcyhwcm9wcywgY29udGV4dCkge1xuICB2YXIgYmFzZVRoZW1lID0gY29udGV4dC5tdWlUaGVtZS5iYXNlVGhlbWU7XG5cblxuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGN1cnNvcjogcHJvcHMuZGlzYWJsZWQgPyAnbm90LWFsbG93ZWQnIDogJ3BvaW50ZXInLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBvdmVyZmxvdzogJ3Zpc2libGUnLFxuICAgICAgZGlzcGxheTogJ3RhYmxlJyxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgaW5wdXQ6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgY3Vyc29yOiAnaW5oZXJpdCcsXG4gICAgICBwb2ludGVyRXZlbnRzOiAnYWxsJyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICB6SW5kZXg6IDIsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgbWFyZ2luOiAwXG4gICAgfSxcbiAgICBjb250cm9sczoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHdpZHRoOiAnY2FsYygxMDAlIC0gNjBweCknLFxuICAgICAgbGluZUhlaWdodDogJzI0cHgnLFxuICAgICAgY29sb3I6IGJhc2VUaGVtZS5wYWxldHRlLnRleHRDb2xvcixcbiAgICAgIGZvbnRGYW1pbHk6IGJhc2VUaGVtZS5mb250RmFtaWx5XG4gICAgfSxcbiAgICB3cmFwOiB7XG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpLFxuICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICB3aWR0aDogNjAgLSBiYXNlVGhlbWUuc3BhY2luZy5kZXNrdG9wR3V0dGVyTGVzcyxcbiAgICAgIG1hcmdpblJpZ2h0OiBwcm9wcy5sYWJlbFBvc2l0aW9uID09PSAncmlnaHQnID8gYmFzZVRoZW1lLnNwYWNpbmcuZGVza3RvcEd1dHRlckxlc3MgOiAwLFxuICAgICAgbWFyZ2luTGVmdDogcHJvcHMubGFiZWxQb3NpdGlvbiA9PT0gJ2xlZnQnID8gYmFzZVRoZW1lLnNwYWNpbmcuZGVza3RvcEd1dHRlckxlc3MgOiAwXG4gICAgfSxcbiAgICByaXBwbGU6IHtcbiAgICAgIGNvbG9yOiBwcm9wcy5yaXBwbGVDb2xvciB8fCBiYXNlVGhlbWUucGFsZXR0ZS5wcmltYXJ5MUNvbG9yLFxuICAgICAgaGVpZ2h0OiAnMjAwJScsXG4gICAgICB3aWR0aDogJzIwMCUnLFxuICAgICAgdG9wOiAtMTIsXG4gICAgICBsZWZ0OiAtMTJcbiAgICB9XG4gIH07XG59XG5cbnZhciBFbmhhbmNlZFN3aXRjaCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKEVuaGFuY2VkU3dpdGNoLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBFbmhhbmNlZFN3aXRjaCgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBFbmhhbmNlZFN3aXRjaCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBFbmhhbmNlZFN3aXRjaC5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoRW5oYW5jZWRTd2l0Y2gpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzS2V5Ym9hcmRGb2N1c2VkOiBmYWxzZVxuICAgIH0sIF90aGlzLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMudGFiUHJlc3NlZCA9IGZhbHNlO1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpc0tleWJvYXJkRm9jdXNlZDogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgaXNJbnB1dENoZWNrZWQgPSBfdGhpcy5yZWZzLmNoZWNrYm94LmNoZWNrZWQ7XG5cbiAgICAgIGlmICghX3RoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ2NoZWNrZWQnKSAmJiBfdGhpcy5wcm9wcy5vblBhcmVudFNob3VsZFVwZGF0ZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vblBhcmVudFNob3VsZFVwZGF0ZShpc0lucHV0Q2hlY2tlZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblN3aXRjaCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vblN3aXRjaChldmVudCwgaXNJbnB1dENoZWNrZWQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBjb2RlID0gKDAsIF9rZXljb2RlMi5kZWZhdWx0KShldmVudCk7XG5cbiAgICAgIGlmIChjb2RlID09PSAndGFiJykge1xuICAgICAgICBfdGhpcy50YWJQcmVzc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5pc0tleWJvYXJkRm9jdXNlZCAmJiBjb2RlID09PSAnc3BhY2UnKSB7XG4gICAgICAgIF90aGlzLmhhbmRsZUNoYW5nZShldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlS2V5VXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5pc0tleWJvYXJkRm9jdXNlZCAmJiAoMCwgX2tleWNvZGUyLmRlZmF1bHQpKGV2ZW50KSA9PT0gJ3NwYWNlJykge1xuICAgICAgICBfdGhpcy5oYW5kbGVDaGFuZ2UoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlRG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy8gb25seSBsaXN0ZW4gdG8gbGVmdCBjbGlja3NcbiAgICAgIGlmIChldmVudC5idXR0b24gPT09IDApIHtcbiAgICAgICAgX3RoaXMucmVmcy50b3VjaFJpcHBsZS5zdGFydChldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VVcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnJlZnMudG91Y2hSaXBwbGUuZW5kKCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VMZWF2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnJlZnMudG91Y2hSaXBwbGUuZW5kKCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMucmVmcy50b3VjaFJpcHBsZS5zdGFydChldmVudCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hFbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5yZWZzLnRvdWNoUmlwcGxlLmVuZCgpO1xuICAgIH0sIF90aGlzLmhhbmRsZUJsdXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNLZXlib2FyZEZvY3VzZWQ6IGZhbHNlXG4gICAgICB9KTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkJsdXIoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZUZvY3VzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBzZXRUaW1lb3V0IGlzIG5lZWRlZCBiZWN1YXNlIHRoZSBmb2N1cyBldmVudCBmaXJlcyBmaXJzdFxuICAgICAgLy8gV2FpdCBzbyB0aGF0IHdlIGNhbiBjYXB0dXJlIGlmIHRoaXMgd2FzIGEga2V5Ym9hcmQgZm9jdXNcbiAgICAgIC8vIG9yIHRvdWNoIGZvY3VzXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLnRhYlByZXNzZWQpIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0tleWJvYXJkRm9jdXNlZDogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LCAxNTApO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkZvY3VzKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoRW5oYW5jZWRTd2l0Y2gsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBpbnB1dE5vZGUgPSB0aGlzLnJlZnMuY2hlY2tib3g7XG4gICAgICBpZiAoKCF0aGlzLnByb3BzLnN3aXRjaGVkIHx8IGlucHV0Tm9kZS5jaGVja2VkICE9PSB0aGlzLnByb3BzLnN3aXRjaGVkKSAmJiB0aGlzLnByb3BzLm9uUGFyZW50U2hvdWxkVXBkYXRlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25QYXJlbnRTaG91bGRVcGRhdGUoaW5wdXROb2RlLmNoZWNrZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgdmFyIGhhc0NoZWNrZWRQcm9wID0gbmV4dFByb3BzLmhhc093blByb3BlcnR5KCdjaGVja2VkJyk7XG4gICAgICB2YXIgaGFzTmV3RGVmYXVsdFByb3AgPSBuZXh0UHJvcHMuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHRDaGVja2VkJykgJiYgbmV4dFByb3BzLmRlZmF1bHRDaGVja2VkICE9PSB0aGlzLnByb3BzLmRlZmF1bHRDaGVja2VkO1xuXG4gICAgICBpZiAoaGFzQ2hlY2tlZFByb3AgfHwgaGFzTmV3RGVmYXVsdFByb3ApIHtcbiAgICAgICAgdmFyIHN3aXRjaGVkID0gbmV4dFByb3BzLmNoZWNrZWQgfHwgbmV4dFByb3BzLmRlZmF1bHRDaGVja2VkIHx8IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHN3aXRjaGVkOiBzd2l0Y2hlZFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblBhcmVudFNob3VsZFVwZGF0ZSAmJiBzd2l0Y2hlZCAhPT0gdGhpcy5wcm9wcy5zd2l0Y2hlZCkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25QYXJlbnRTaG91bGRVcGRhdGUoc3dpdGNoZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNTd2l0Y2hlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzU3dpdGNoZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZzLmNoZWNrYm94LmNoZWNrZWQ7XG4gICAgfVxuXG4gICAgLy8gbm8gY2FsbGJhY2sgaGVyZSBiZWNhdXNlIHRoZXJlIGlzIG5vIGV2ZW50XG5cbiAgfSwge1xuICAgIGtleTogJ3NldFN3aXRjaGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U3dpdGNoZWQobmV3U3dpdGNoZWRWYWx1ZSkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmhhc093blByb3BlcnR5KCdjaGVja2VkJykgfHwgdGhpcy5wcm9wcy5jaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblBhcmVudFNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgIHRoaXMucHJvcHMub25QYXJlbnRTaG91bGRVcGRhdGUobmV3U3dpdGNoZWRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWZzLmNoZWNrYm94LmNoZWNrZWQgPSBuZXdTd2l0Y2hlZFZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ01hdGVyaWFsLVVJOiBDYW5ub3QgY2FsbCBzZXQgbWV0aG9kIHdoaWxlIGNoZWNrZWQgaXMgZGVmaW5lZCBhcyBhIHByb3BlcnR5LicpIDogdm9pZCAwO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZzLmNoZWNrYm94LnZhbHVlO1xuICAgIH1cblxuICAgIC8vIENoZWNrYm94IGlucHV0cyBvbmx5IHVzZSBTUEFDRSB0byBjaGFuZ2UgdGhlaXIgc3RhdGUuIFVzaW5nIEVOVEVSIHdpbGxcbiAgICAvLyB1cGRhdGUgdGhlIHVpIGJ1dCBub3QgdGhlIGlucHV0LlxuXG5cbiAgICAvKipcbiAgICAgKiBCZWNhdXNlIGJvdGggdGhlIHJpcHBsZXMgYW5kIHRoZSBjaGVja2JveCBpbnB1dCBjYW5ub3Qgc2hhcmUgcG9pbnRlclxuICAgICAqIGV2ZW50cywgdGhlIGNoZWNrYm94IGlucHV0IHRha2VzIGNvbnRyb2wgb2YgcG9pbnRlciBldmVudHMgYW5kIGNhbGxzXG4gICAgICogcmlwcGxlIGFuaW1hdGlvbnMgbWFudWFsbHkuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG5hbWUgPSBfcHJvcHMubmFtZSxcbiAgICAgICAgICB2YWx1ZSA9IF9wcm9wcy52YWx1ZSxcbiAgICAgICAgICBpY29uU3R5bGUgPSBfcHJvcHMuaWNvblN0eWxlLFxuICAgICAgICAgIGlucHV0U3R5bGUgPSBfcHJvcHMuaW5wdXRTdHlsZSxcbiAgICAgICAgICBpbnB1dFR5cGUgPSBfcHJvcHMuaW5wdXRUeXBlLFxuICAgICAgICAgIGxhYmVsID0gX3Byb3BzLmxhYmVsLFxuICAgICAgICAgIGxhYmVsU3R5bGUgPSBfcHJvcHMubGFiZWxTdHlsZSxcbiAgICAgICAgICBsYWJlbFBvc2l0aW9uID0gX3Byb3BzLmxhYmVsUG9zaXRpb24sXG4gICAgICAgICAgb25Td2l0Y2ggPSBfcHJvcHMub25Td2l0Y2gsXG4gICAgICAgICAgb25CbHVyID0gX3Byb3BzLm9uQmx1cixcbiAgICAgICAgICBvbkZvY3VzID0gX3Byb3BzLm9uRm9jdXMsXG4gICAgICAgICAgb25Nb3VzZVVwID0gX3Byb3BzLm9uTW91c2VVcCxcbiAgICAgICAgICBvbk1vdXNlRG93biA9IF9wcm9wcy5vbk1vdXNlRG93bixcbiAgICAgICAgICBvbk1vdXNlTGVhdmUgPSBfcHJvcHMub25Nb3VzZUxlYXZlLFxuICAgICAgICAgIG9uVG91Y2hTdGFydCA9IF9wcm9wcy5vblRvdWNoU3RhcnQsXG4gICAgICAgICAgb25Ub3VjaEVuZCA9IF9wcm9wcy5vblRvdWNoRW5kLFxuICAgICAgICAgIG9uUGFyZW50U2hvdWxkVXBkYXRlID0gX3Byb3BzLm9uUGFyZW50U2hvdWxkVXBkYXRlLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkLFxuICAgICAgICAgIGRpc2FibGVUb3VjaFJpcHBsZSA9IF9wcm9wcy5kaXNhYmxlVG91Y2hSaXBwbGUsXG4gICAgICAgICAgZGlzYWJsZUZvY3VzUmlwcGxlID0gX3Byb3BzLmRpc2FibGVGb2N1c1JpcHBsZSxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIHJpcHBsZUNvbG9yID0gX3Byb3BzLnJpcHBsZUNvbG9yLFxuICAgICAgICAgIHJpcHBsZVN0eWxlID0gX3Byb3BzLnJpcHBsZVN0eWxlLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIHN3aXRjaGVkID0gX3Byb3BzLnN3aXRjaGVkLFxuICAgICAgICAgIHN3aXRjaEVsZW1lbnQgPSBfcHJvcHMuc3dpdGNoRWxlbWVudCxcbiAgICAgICAgICB0aHVtYlN0eWxlID0gX3Byb3BzLnRodW1iU3R5bGUsXG4gICAgICAgICAgdHJhY2tTdHlsZSA9IF9wcm9wcy50cmFja1N0eWxlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ25hbWUnLCAndmFsdWUnLCAnaWNvblN0eWxlJywgJ2lucHV0U3R5bGUnLCAnaW5wdXRUeXBlJywgJ2xhYmVsJywgJ2xhYmVsU3R5bGUnLCAnbGFiZWxQb3NpdGlvbicsICdvblN3aXRjaCcsICdvbkJsdXInLCAnb25Gb2N1cycsICdvbk1vdXNlVXAnLCAnb25Nb3VzZURvd24nLCAnb25Nb3VzZUxlYXZlJywgJ29uVG91Y2hTdGFydCcsICdvblRvdWNoRW5kJywgJ29uUGFyZW50U2hvdWxkVXBkYXRlJywgJ2Rpc2FibGVkJywgJ2Rpc2FibGVUb3VjaFJpcHBsZScsICdkaXNhYmxlRm9jdXNSaXBwbGUnLCAnY2xhc3NOYW1lJywgJ3JpcHBsZUNvbG9yJywgJ3JpcHBsZVN0eWxlJywgJ3N0eWxlJywgJ3N3aXRjaGVkJywgJ3N3aXRjaEVsZW1lbnQnLCAndGh1bWJTdHlsZScsICd0cmFja1N0eWxlJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgICAgdmFyIHdyYXBTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLndyYXAsIGljb25TdHlsZSk7XG4gICAgICB2YXIgbWVyZ2VkUmlwcGxlU3R5bGUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJpcHBsZSwgcmlwcGxlU3R5bGUpO1xuXG4gICAgICBpZiAodGh1bWJTdHlsZSkge1xuICAgICAgICB3cmFwU3R5bGVzLm1hcmdpbkxlZnQgLz0gMjtcbiAgICAgICAgd3JhcFN0eWxlcy5tYXJnaW5SaWdodCAvPSAyO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGFiZWxFbGVtZW50ID0gbGFiZWwgJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdsYWJlbCcsXG4gICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5sYWJlbCwgbGFiZWxTdHlsZSkpIH0sXG4gICAgICAgIGxhYmVsXG4gICAgICApO1xuXG4gICAgICB2YXIgc2hvd1RvdWNoUmlwcGxlID0gIWRpc2FibGVkICYmICFkaXNhYmxlVG91Y2hSaXBwbGU7XG4gICAgICB2YXIgc2hvd0ZvY3VzUmlwcGxlID0gIWRpc2FibGVkICYmICFkaXNhYmxlRm9jdXNSaXBwbGU7XG5cbiAgICAgIHZhciB0b3VjaFJpcHBsZSA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Ub3VjaFJpcHBsZTIuZGVmYXVsdCwge1xuICAgICAgICByZWY6ICd0b3VjaFJpcHBsZScsXG4gICAgICAgIGtleTogJ3RvdWNoUmlwcGxlJyxcbiAgICAgICAgc3R5bGU6IG1lcmdlZFJpcHBsZVN0eWxlLFxuICAgICAgICBjb2xvcjogbWVyZ2VkUmlwcGxlU3R5bGUuY29sb3IsXG4gICAgICAgIG11aVRoZW1lOiB0aGlzLmNvbnRleHQubXVpVGhlbWUsXG4gICAgICAgIGNlbnRlclJpcHBsZTogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHZhciBmb2N1c1JpcHBsZSA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Gb2N1c1JpcHBsZTIuZGVmYXVsdCwge1xuICAgICAgICBrZXk6ICdmb2N1c1JpcHBsZScsXG4gICAgICAgIGlubmVyU3R5bGU6IG1lcmdlZFJpcHBsZVN0eWxlLFxuICAgICAgICBjb2xvcjogbWVyZ2VkUmlwcGxlU3R5bGUuY29sb3IsXG4gICAgICAgIG11aVRoZW1lOiB0aGlzLmNvbnRleHQubXVpVGhlbWUsXG4gICAgICAgIHNob3c6IHRoaXMuc3RhdGUuaXNLZXlib2FyZEZvY3VzZWRcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgcmlwcGxlcyA9IFtzaG93VG91Y2hSaXBwbGUgPyB0b3VjaFJpcHBsZSA6IG51bGwsIHNob3dGb2N1c1JpcHBsZSA/IGZvY3VzUmlwcGxlIDogbnVsbF07XG5cbiAgICAgIHZhciBpbnB1dEVsZW1lbnQgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwge1xuICAgICAgICByZWY6ICdjaGVja2JveCcsXG4gICAgICAgIHR5cGU6IGlucHV0VHlwZSxcbiAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5pbnB1dCwgaW5wdXRTdHlsZSkpLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgb25CbHVyOiB0aGlzLmhhbmRsZUJsdXIsXG4gICAgICAgIG9uRm9jdXM6IHRoaXMuaGFuZGxlRm9jdXMsXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUNoYW5nZSxcbiAgICAgICAgb25Nb3VzZVVwOiBzaG93VG91Y2hSaXBwbGUgJiYgdGhpcy5oYW5kbGVNb3VzZVVwLFxuICAgICAgICBvbk1vdXNlRG93bjogc2hvd1RvdWNoUmlwcGxlICYmIHRoaXMuaGFuZGxlTW91c2VEb3duLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHNob3dUb3VjaFJpcHBsZSAmJiB0aGlzLmhhbmRsZU1vdXNlTGVhdmUsXG4gICAgICAgIG9uVG91Y2hTdGFydDogc2hvd1RvdWNoUmlwcGxlICYmIHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcbiAgICAgICAgb25Ub3VjaEVuZDogc2hvd1RvdWNoUmlwcGxlICYmIHRoaXMuaGFuZGxlVG91Y2hFbmRcbiAgICAgIH0pKTtcblxuICAgICAgLy8gSWYgdG9nZ2xlIGNvbXBvbmVudCAoaW5kaWNhdGVkIGJ5IHdoZXRoZXIgdGhlIHN0eWxlIGluY2x1ZGVzIHRodW1iKSBtYW51YWxseSBsYXkgb3V0XG4gICAgICAvLyBlbGVtZW50cyBpbiBvcmRlciB0byBuZXN0IHJpcHBsZSBlbGVtZW50c1xuICAgICAgdmFyIHN3aXRjaE9yVGh1bWJFbGVtZW50ID0gIXRodW1iU3R5bGUgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMod3JhcFN0eWxlcykgfSxcbiAgICAgICAgc3dpdGNoRWxlbWVudCxcbiAgICAgICAgcmlwcGxlc1xuICAgICAgKSA6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcyh3cmFwU3R5bGVzKSB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnZGl2JywgeyBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHRyYWNrU3R5bGUpKSB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX1BhcGVyMi5kZWZhdWx0LFxuICAgICAgICAgIHsgc3R5bGU6IHRodW1iU3R5bGUsIHpEZXB0aDogMSwgY2lyY2xlOiB0cnVlIH0sXG4gICAgICAgICAgJyAnLFxuICAgICAgICAgIHJpcHBsZXMsXG4gICAgICAgICAgJyAnXG4gICAgICAgIClcbiAgICAgICk7XG5cbiAgICAgIHZhciBlbGVtZW50c0luT3JkZXIgPSBsYWJlbFBvc2l0aW9uID09PSAncmlnaHQnID8gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IHN0eWxlOiBzdHlsZXMuY29udHJvbHMgfSxcbiAgICAgICAgc3dpdGNoT3JUaHVtYkVsZW1lbnQsXG4gICAgICAgIGxhYmVsRWxlbWVudFxuICAgICAgKSA6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBzdHlsZTogc3R5bGVzLmNvbnRyb2xzIH0sXG4gICAgICAgIGxhYmVsRWxlbWVudCxcbiAgICAgICAgc3dpdGNoT3JUaHVtYkVsZW1lbnRcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgcmVmOiAncm9vdCcsIGNsYXNzTmFtZTogY2xhc3NOYW1lLCBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSkgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0RXZlbnRMaXN0ZW5lcjIuZGVmYXVsdCwge1xuICAgICAgICAgIHRhcmdldDogJ3dpbmRvdycsXG4gICAgICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICAgICAgb25LZXlVcDogdGhpcy5oYW5kbGVLZXlVcFxuICAgICAgICB9KSxcbiAgICAgICAgaW5wdXRFbGVtZW50LFxuICAgICAgICBlbGVtZW50c0luT3JkZXJcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBFbmhhbmNlZFN3aXRjaDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkVuaGFuY2VkU3dpdGNoLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5FbmhhbmNlZFN3aXRjaC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNoZWNrZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgZGVmYXVsdENoZWNrZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgZGlzYWJsZUZvY3VzUmlwcGxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGRpc2FibGVUb3VjaFJpcHBsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBkaXNhYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBpY29uU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBpbnB1dFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgaW5wdXRUeXBlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkLFxuICBsYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICBsYWJlbFBvc2l0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsnbGVmdCcsICdyaWdodCddKSxcbiAgbGFiZWxTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIG5hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBvbkJsdXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25Gb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbk1vdXNlRG93bjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvbk1vdXNlTGVhdmU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25Nb3VzZVVwOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uUGFyZW50U2hvdWxkVXBkYXRlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uU3dpdGNoOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uVG91Y2hFbmQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgb25Ub3VjaFN0YXJ0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHJpcHBsZUNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgcmlwcGxlU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHN3aXRjaEVsZW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZWxlbWVudC5pc1JlcXVpcmVkLFxuICBzd2l0Y2hlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsXG4gIHRodW1iU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICB0cmFja1N0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgdmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYW55XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBFbmhhbmNlZFN3aXRjaDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvaW50ZXJuYWwvRW5oYW5jZWRTd2l0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDE1NDBcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHVyZSA9IHJlcXVpcmUoJ3JlY29tcG9zZS9wdXJlJyk7XG5cbnZhciBfcHVyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wdXJlKTtcblxudmFyIF9TdmdJY29uID0gcmVxdWlyZSgnLi4vLi4vU3ZnSWNvbicpO1xuXG52YXIgX1N2Z0ljb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3ZnSWNvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBOYXZpZ2F0aW9uQXJyb3dEcm9wRG93biA9IGZ1bmN0aW9uIE5hdmlnYXRpb25BcnJvd0Ryb3BEb3duKHByb3BzKSB7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICBfU3ZnSWNvbjIuZGVmYXVsdCxcbiAgICBwcm9wcyxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ003IDEwbDUgNSA1LTV6JyB9KVxuICApO1xufTtcbk5hdmlnYXRpb25BcnJvd0Ryb3BEb3duID0gKDAsIF9wdXJlMi5kZWZhdWx0KShOYXZpZ2F0aW9uQXJyb3dEcm9wRG93bik7XG5OYXZpZ2F0aW9uQXJyb3dEcm9wRG93bi5kaXNwbGF5TmFtZSA9ICdOYXZpZ2F0aW9uQXJyb3dEcm9wRG93bic7XG5OYXZpZ2F0aW9uQXJyb3dEcm9wRG93bi5tdWlOYW1lID0gJ1N2Z0ljb24nO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBOYXZpZ2F0aW9uQXJyb3dEcm9wRG93bjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvc3ZnLWljb25zL25hdmlnYXRpb24vYXJyb3ctZHJvcC1kb3duLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3B1cmUgPSByZXF1aXJlKCdyZWNvbXBvc2UvcHVyZScpO1xuXG52YXIgX3B1cmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHVyZSk7XG5cbnZhciBfU3ZnSWNvbiA9IHJlcXVpcmUoJy4uLy4uL1N2Z0ljb24nKTtcblxudmFyIF9TdmdJY29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N2Z0ljb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVG9nZ2xlUmFkaW9CdXR0b25DaGVja2VkID0gZnVuY3Rpb24gVG9nZ2xlUmFkaW9CdXR0b25DaGVja2VkKHByb3BzKSB7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICBfU3ZnSWNvbjIuZGVmYXVsdCxcbiAgICBwcm9wcyxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ00xMiA3Yy0yLjc2IDAtNSAyLjI0LTUgNXMyLjI0IDUgNSA1IDUtMi4yNCA1LTUtMi4yNC01LTUtNXptMC01QzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHonIH0pXG4gICk7XG59O1xuVG9nZ2xlUmFkaW9CdXR0b25DaGVja2VkID0gKDAsIF9wdXJlMi5kZWZhdWx0KShUb2dnbGVSYWRpb0J1dHRvbkNoZWNrZWQpO1xuVG9nZ2xlUmFkaW9CdXR0b25DaGVja2VkLmRpc3BsYXlOYW1lID0gJ1RvZ2dsZVJhZGlvQnV0dG9uQ2hlY2tlZCc7XG5Ub2dnbGVSYWRpb0J1dHRvbkNoZWNrZWQubXVpTmFtZSA9ICdTdmdJY29uJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gVG9nZ2xlUmFkaW9CdXR0b25DaGVja2VkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9zdmctaWNvbnMvdG9nZ2xlL3JhZGlvLWJ1dHRvbi1jaGVja2VkLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3B1cmUgPSByZXF1aXJlKCdyZWNvbXBvc2UvcHVyZScpO1xuXG52YXIgX3B1cmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHVyZSk7XG5cbnZhciBfU3ZnSWNvbiA9IHJlcXVpcmUoJy4uLy4uL1N2Z0ljb24nKTtcblxudmFyIF9TdmdJY29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N2Z0ljb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVG9nZ2xlUmFkaW9CdXR0b25VbmNoZWNrZWQgPSBmdW5jdGlvbiBUb2dnbGVSYWRpb0J1dHRvblVuY2hlY2tlZChwcm9wcykge1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgX1N2Z0ljb24yLmRlZmF1bHQsXG4gICAgcHJvcHMsXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MiAwLTgtMy41OC04LThzMy41OC04IDgtOCA4IDMuNTggOCA4LTMuNTggOC04IDh6JyB9KVxuICApO1xufTtcblRvZ2dsZVJhZGlvQnV0dG9uVW5jaGVja2VkID0gKDAsIF9wdXJlMi5kZWZhdWx0KShUb2dnbGVSYWRpb0J1dHRvblVuY2hlY2tlZCk7XG5Ub2dnbGVSYWRpb0J1dHRvblVuY2hlY2tlZC5kaXNwbGF5TmFtZSA9ICdUb2dnbGVSYWRpb0J1dHRvblVuY2hlY2tlZCc7XG5Ub2dnbGVSYWRpb0J1dHRvblVuY2hlY2tlZC5tdWlOYW1lID0gJ1N2Z0ljb24nO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUb2dnbGVSYWRpb0J1dHRvblVuY2hlY2tlZDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvc3ZnLWljb25zL3RvZ2dsZS9yYWRpby1idXR0b24tdW5jaGVja2VkLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsImltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IHtQcm9maWxlfSBmcm9tICcuL1Byb2ZpbGUnO1xyXG5cclxuaW1wb3J0IHtjYWxjdWxhdGVDYWxvcmllc1RhcmdldH0gZnJvbSAnbW9kdWxlcy9jYWxvcmllc1RhcmdldCc7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgICBjYWxjdWxhdGVDYWxvcmllc1RhcmdldDogKHZhbHVlcykgPT4ge2Rpc3BhdGNoKGNhbGN1bGF0ZUNhbG9yaWVzVGFyZ2V0KHZhbHVlcykpO31cclxufSk7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcbiAgICBjYWxvcmllc1RhcmdldDogc3RhdGUuY2Fsb3JpZXNUYXJnZXRcclxufSk7XHJcblxyXG5jb25zdCBQcm9maWxlQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUHJvZmlsZSk7XHJcblxyXG5leHBvcnQge1Byb2ZpbGVDb250YWluZXJ9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL1Byb2ZpbGUvUHJvZmlsZUNvbnRhaW5lci5qcyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHR2YXIgcmVzdWx0ID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNzYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0Q2xhc3M7XG5cbnZhciBfZmxleGJveGdyaWQgPSByZXF1aXJlKCdmbGV4Ym94Z3JpZC9kaXN0L2ZsZXhib3hncmlkLmNzcycpO1xuXG52YXIgX2ZsZXhib3hncmlkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZsZXhib3hncmlkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0Q2xhc3MoY2xhc3NOYW1lKSB7XG4gIHJldHVybiBfZmxleGJveGdyaWQyLmRlZmF1bHQgJiYgX2ZsZXhib3hncmlkMi5kZWZhdWx0W2NsYXNzTmFtZV0gPyBfZmxleGJveGdyaWQyLmRlZmF1bHRbY2xhc3NOYW1lXSA6IGNsYXNzTmFtZTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtZmxleGJveC1ncmlkL2xpYi9jbGFzc05hbWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3NjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlUHJvcHM7XG5mdW5jdGlvbiBjcmVhdGVQcm9wcyhwcm9wVHlwZXMsIHByb3BzLCBjbGFzc05hbWVzKSB7XG4gIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gIE9iamVjdC5rZXlzKHByb3BzKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBrZXkgPT09ICdjaGlsZHJlbicgfHwgIXByb3BUeXBlc1trZXldO1xuICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gbmV3UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gIH0pO1xuXG4gIHZhciBjbGFzc05hbWUgPSBjbGFzc05hbWVzLmZpbHRlcihmdW5jdGlvbiAoY24pIHtcbiAgICByZXR1cm4gY247XG4gIH0pLmpvaW4oJyAnKTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG5ld1Byb3BzLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL2NyZWF0ZVByb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSA3NjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMyA0IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgbWVtbztcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBtZW1vO1xuXHRcdH07XG5cdH0sXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdChzZWxmLm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cdH0pLFxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0fSksXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0aWYoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcblxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDc2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0Q29sdW1uUHJvcHMgPSBleHBvcnRzLkNvbCA9IGV4cG9ydHMuZ2V0Um93UHJvcHMgPSBleHBvcnRzLlJvdyA9IGV4cG9ydHMuR3JpZCA9IHVuZGVmaW5lZDtcblxudmFyIF9Sb3cyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL1JvdycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2dldFJvd1Byb3BzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX1JvdzIuZ2V0Um93UHJvcHM7XG4gIH1cbn0pO1xuXG52YXIgX0NvbDIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvQ29sJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZ2V0Q29sdW1uUHJvcHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfQ29sMi5nZXRDb2x1bW5Qcm9wcztcbiAgfVxufSk7XG5cbnZhciBfR3JpZDIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvR3JpZCcpO1xuXG52YXIgX0dyaWQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfR3JpZDIpO1xuXG52YXIgX1JvdzMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3cyKTtcblxudmFyIF9Db2wzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuR3JpZCA9IF9HcmlkMy5kZWZhdWx0O1xuZXhwb3J0cy5Sb3cgPSBfUm93My5kZWZhdWx0O1xuZXhwb3J0cy5Db2wgPSBfQ29sMy5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3NzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5WaWV3cG9ydFNpemVUeXBlID0gZXhwb3J0cy5Db2x1bW5TaXplVHlwZSA9IHVuZGVmaW5lZDtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBDb2x1bW5TaXplVHlwZSA9IGV4cG9ydHMuQ29sdW1uU2l6ZVR5cGUgPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsIF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbF0pO1xudmFyIFZpZXdwb3J0U2l6ZVR5cGUgPSBleHBvcnRzLlZpZXdwb3J0U2l6ZVR5cGUgPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsneHMnLCAnc20nLCAnbWQnLCAnbGcnXSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWZsZXhib3gtZ3JpZC9saWIvdHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDc3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfVGV4dEZpZWxkID0gcmVxdWlyZSgnLi9UZXh0RmllbGQnKTtcblxudmFyIF9UZXh0RmllbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dEZpZWxkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1RleHRGaWVsZDIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3Nzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMgNCA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX1JhaXNlZEJ1dHRvbiA9IHJlcXVpcmUoJy4vUmFpc2VkQnV0dG9uJyk7XG5cbnZhciBfUmFpc2VkQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JhaXNlZEJ1dHRvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9SYWlzZWRCdXR0b24yLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIDQgNSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRhaW5lci1mbHVpZCxcXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uY29udGFpbmVyLWZsdWlkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcblxcbi5yb3cge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gIC1tcy1mbGV4OiAwIDEgYXV0bztcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IC0wLjVyZW07XFxufVxcblxcbi5yb3cucmV2ZXJzZSB7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IHJldmVyc2U7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbn1cXG5cXG4uY29sLnJldmVyc2Uge1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogcmV2ZXJzZTtcXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxufVxcblxcbi5jb2wteHMsXFxuLmNvbC14cy0xLFxcbi5jb2wteHMtMixcXG4uY29sLXhzLTMsXFxuLmNvbC14cy00LFxcbi5jb2wteHMtNSxcXG4uY29sLXhzLTYsXFxuLmNvbC14cy03LFxcbi5jb2wteHMtOCxcXG4uY29sLXhzLTksXFxuLmNvbC14cy0xMCxcXG4uY29sLXhzLTExLFxcbi5jb2wteHMtMTIsXFxuLmNvbC14cy1vZmZzZXQtMCxcXG4uY29sLXhzLW9mZnNldC0xLFxcbi5jb2wteHMtb2Zmc2V0LTIsXFxuLmNvbC14cy1vZmZzZXQtMyxcXG4uY29sLXhzLW9mZnNldC00LFxcbi5jb2wteHMtb2Zmc2V0LTUsXFxuLmNvbC14cy1vZmZzZXQtNixcXG4uY29sLXhzLW9mZnNldC03LFxcbi5jb2wteHMtb2Zmc2V0LTgsXFxuLmNvbC14cy1vZmZzZXQtOSxcXG4uY29sLXhzLW9mZnNldC0xMCxcXG4uY29sLXhzLW9mZnNldC0xMSxcXG4uY29sLXhzLW9mZnNldC0xMiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gIC1tcy1mbGV4OiAwIDAgYXV0bztcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi5jb2wteHMge1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XFxuICBmbGV4LWJhc2lzOiAwO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29sLXhzLTEge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDguMzMzMzMzMzMlO1xcbiAgZmxleC1iYXNpczogOC4zMzMzMzMzMyU7XFxuICBtYXgtd2lkdGg6IDguMzMzMzMzMzMlO1xcbn1cXG5cXG4uY29sLXhzLTIge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDE2LjY2NjY2NjY3JTtcXG4gIGZsZXgtYmFzaXM6IDE2LjY2NjY2NjY3JTtcXG4gIG1heC13aWR0aDogMTYuNjY2NjY2NjclO1xcbn1cXG5cXG4uY29sLXhzLTMge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDI1JTtcXG4gIGZsZXgtYmFzaXM6IDI1JTtcXG4gIG1heC13aWR0aDogMjUlO1xcbn1cXG5cXG4uY29sLXhzLTQge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDMzLjMzMzMzMzMzJTtcXG4gIGZsZXgtYmFzaXM6IDMzLjMzMzMzMzMzJTtcXG4gIG1heC13aWR0aDogMzMuMzMzMzMzMzMlO1xcbn1cXG5cXG4uY29sLXhzLTUge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDQxLjY2NjY2NjY3JTtcXG4gIGZsZXgtYmFzaXM6IDQxLjY2NjY2NjY3JTtcXG4gIG1heC13aWR0aDogNDEuNjY2NjY2NjclO1xcbn1cXG5cXG4uY29sLXhzLTYge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDUwJTtcXG4gIGZsZXgtYmFzaXM6IDUwJTtcXG4gIG1heC13aWR0aDogNTAlO1xcbn1cXG5cXG4uY29sLXhzLTcge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDU4LjMzMzMzMzMzJTtcXG4gIGZsZXgtYmFzaXM6IDU4LjMzMzMzMzMzJTtcXG4gIG1heC13aWR0aDogNTguMzMzMzMzMzMlO1xcbn1cXG5cXG4uY29sLXhzLTgge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDY2LjY2NjY2NjY3JTtcXG4gIGZsZXgtYmFzaXM6IDY2LjY2NjY2NjY3JTtcXG4gIG1heC13aWR0aDogNjYuNjY2NjY2NjclO1xcbn1cXG5cXG4uY29sLXhzLTkge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDc1JTtcXG4gIGZsZXgtYmFzaXM6IDc1JTtcXG4gIG1heC13aWR0aDogNzUlO1xcbn1cXG5cXG4uY29sLXhzLTEwIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4My4zMzMzMzMzMyU7XFxuICBmbGV4LWJhc2lzOiA4My4zMzMzMzMzMyU7XFxuICBtYXgtd2lkdGg6IDgzLjMzMzMzMzMzJTtcXG59XFxuXFxuLmNvbC14cy0xMSB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOTEuNjY2NjY2NjclO1xcbiAgZmxleC1iYXNpczogOTEuNjY2NjY2NjclO1xcbiAgbWF4LXdpZHRoOiA5MS42NjY2NjY2NyU7XFxufVxcblxcbi5jb2wteHMtMTIge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC0wIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC0xIHtcXG4gIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtMiB7XFxuICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC0zIHtcXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTQge1xcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtNSB7XFxuICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC02IHtcXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTcge1xcbiAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtOCB7XFxuICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC05IHtcXG4gIG1hcmdpbi1sZWZ0OiA3NSU7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTEwIHtcXG4gIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTExIHtcXG4gIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7XFxufVxcblxcbi5zdGFydC14cyB7XFxuICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcXG4gIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi5jZW50ZXIteHMge1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5lbmQteHMge1xcbiAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xcbiAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLnRvcC14cyB7XFxuICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XFxuICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLm1pZGRsZS14cyB7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib3R0b20teHMge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcXG4gIC1tcy1mbGV4LWFsaWduOiBlbmQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi5hcm91bmQteHMge1xcbiAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uYmV0d2Vlbi14cyB7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZpcnN0LXhzIHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDA7XFxuICAtbXMtZmxleC1vcmRlcjogLTE7XFxuICBvcmRlcjogLTE7XFxufVxcblxcbi5sYXN0LXhzIHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDI7XFxuICAtbXMtZmxleC1vcmRlcjogMTtcXG4gIG9yZGVyOiAxO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4ZW0pIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogNDlyZW07XFxuICB9XFxuXFxuICAuY29sLXNtLFxcbiAgLmNvbC1zbS0xLFxcbiAgLmNvbC1zbS0yLFxcbiAgLmNvbC1zbS0zLFxcbiAgLmNvbC1zbS00LFxcbiAgLmNvbC1zbS01LFxcbiAgLmNvbC1zbS02LFxcbiAgLmNvbC1zbS03LFxcbiAgLmNvbC1zbS04LFxcbiAgLmNvbC1zbS05LFxcbiAgLmNvbC1zbS0xMCxcXG4gIC5jb2wtc20tMTEsXFxuICAuY29sLXNtLTEyLFxcbiAgLmNvbC1zbS1vZmZzZXQtMCxcXG4gIC5jb2wtc20tb2Zmc2V0LTEsXFxuICAuY29sLXNtLW9mZnNldC0yLFxcbiAgLmNvbC1zbS1vZmZzZXQtMyxcXG4gIC5jb2wtc20tb2Zmc2V0LTQsXFxuICAuY29sLXNtLW9mZnNldC01LFxcbiAgLmNvbC1zbS1vZmZzZXQtNixcXG4gIC5jb2wtc20tb2Zmc2V0LTcsXFxuICAuY29sLXNtLW9mZnNldC04LFxcbiAgLmNvbC1zbS1vZmZzZXQtOSxcXG4gIC5jb2wtc20tb2Zmc2V0LTEwLFxcbiAgLmNvbC1zbS1vZmZzZXQtMTEsXFxuICAuY29sLXNtLW9mZnNldC0xMiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgIC1tcy1mbGV4OiAwIDAgYXV0bztcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICB9XFxuXFxuICAuY29sLXNtIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XFxuICAgIGZsZXgtYmFzaXM6IDA7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tMSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4LjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogOC4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogOC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLXNtLTIge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTYuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiAxNi42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogMTYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1zbS0zIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDI1JTtcXG4gICAgZmxleC1iYXNpczogMjUlO1xcbiAgICBtYXgtd2lkdGg6IDI1JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tNCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAzMy4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDMzLjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLXNtLTUge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNDEuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA0MS42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogNDEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1zbS02IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDUwJTtcXG4gICAgZmxleC1iYXNpczogNTAlO1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tNyB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1OC4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDU4LjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLXNtLTgge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNjYuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA2Ni42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogNjYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1zbS05IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDc1JTtcXG4gICAgZmxleC1iYXNpczogNzUlO1xcbiAgICBtYXgtd2lkdGg6IDc1JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tMTAge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogODMuMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA4My4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogODMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS0xMSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA5MS42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDkxLjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA5MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLXNtLTEyIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTAge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTEge1xcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLXNtLW9mZnNldC0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTMge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1vZmZzZXQtNCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLXNtLW9mZnNldC01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTYge1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1vZmZzZXQtNyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLXNtLW9mZnNldC04IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTkge1xcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1vZmZzZXQtMTAge1xcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1vZmZzZXQtMTEge1xcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLnN0YXJ0LXNtIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgfVxcblxcbiAgLmNlbnRlci1zbSB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmVuZC1zbSB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcXG4gICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICB9XFxuXFxuICAudG9wLXNtIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xcbiAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgfVxcblxcbiAgLm1pZGRsZS1zbSB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYm90dG9tLXNtIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgfVxcblxcbiAgLmFyb3VuZC1zbSB7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcblxcbiAgLmJldHdlZW4tc20ge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAuZmlyc3Qtc20ge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAwO1xcbiAgICAtbXMtZmxleC1vcmRlcjogLTE7XFxuICAgIG9yZGVyOiAtMTtcXG4gIH1cXG5cXG4gIC5sYXN0LXNtIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjtcXG4gICAgLW1zLWZsZXgtb3JkZXI6IDE7XFxuICAgIG9yZGVyOiAxO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogNjVyZW07XFxuICB9XFxuXFxuICAuY29sLW1kLFxcbiAgLmNvbC1tZC0xLFxcbiAgLmNvbC1tZC0yLFxcbiAgLmNvbC1tZC0zLFxcbiAgLmNvbC1tZC00LFxcbiAgLmNvbC1tZC01LFxcbiAgLmNvbC1tZC02LFxcbiAgLmNvbC1tZC03LFxcbiAgLmNvbC1tZC04LFxcbiAgLmNvbC1tZC05LFxcbiAgLmNvbC1tZC0xMCxcXG4gIC5jb2wtbWQtMTEsXFxuICAuY29sLW1kLTEyLFxcbiAgLmNvbC1tZC1vZmZzZXQtMCxcXG4gIC5jb2wtbWQtb2Zmc2V0LTEsXFxuICAuY29sLW1kLW9mZnNldC0yLFxcbiAgLmNvbC1tZC1vZmZzZXQtMyxcXG4gIC5jb2wtbWQtb2Zmc2V0LTQsXFxuICAuY29sLW1kLW9mZnNldC01LFxcbiAgLmNvbC1tZC1vZmZzZXQtNixcXG4gIC5jb2wtbWQtb2Zmc2V0LTcsXFxuICAuY29sLW1kLW9mZnNldC04LFxcbiAgLmNvbC1tZC1vZmZzZXQtOSxcXG4gIC5jb2wtbWQtb2Zmc2V0LTEwLFxcbiAgLmNvbC1tZC1vZmZzZXQtMTEsXFxuICAuY29sLW1kLW9mZnNldC0xMiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgIC1tcy1mbGV4OiAwIDAgYXV0bztcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICB9XFxuXFxuICAuY29sLW1kIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XFxuICAgIGZsZXgtYmFzaXM6IDA7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtMSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4LjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogOC4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogOC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLW1kLTIge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTYuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiAxNi42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogMTYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1tZC0zIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDI1JTtcXG4gICAgZmxleC1iYXNpczogMjUlO1xcbiAgICBtYXgtd2lkdGg6IDI1JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtNCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAzMy4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDMzLjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLW1kLTUge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNDEuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA0MS42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogNDEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1tZC02IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDUwJTtcXG4gICAgZmxleC1iYXNpczogNTAlO1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtNyB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1OC4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDU4LjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLW1kLTgge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNjYuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA2Ni42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogNjYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1tZC05IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDc1JTtcXG4gICAgZmxleC1iYXNpczogNzUlO1xcbiAgICBtYXgtd2lkdGg6IDc1JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtMTAge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogODMuMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA4My4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogODMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC0xMSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA5MS42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDkxLjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA5MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLW1kLTEyIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTAge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTEge1xcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTMge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC1vZmZzZXQtNCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTYge1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC1vZmZzZXQtNyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC04IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTkge1xcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC1vZmZzZXQtMTAge1xcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC1vZmZzZXQtMTEge1xcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLnN0YXJ0LW1kIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgfVxcblxcbiAgLmNlbnRlci1tZCB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmVuZC1tZCB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcXG4gICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICB9XFxuXFxuICAudG9wLW1kIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xcbiAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgfVxcblxcbiAgLm1pZGRsZS1tZCB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYm90dG9tLW1kIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgfVxcblxcbiAgLmFyb3VuZC1tZCB7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcblxcbiAgLmJldHdlZW4tbWQge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAuZmlyc3QtbWQge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAwO1xcbiAgICAtbXMtZmxleC1vcmRlcjogLTE7XFxuICAgIG9yZGVyOiAtMTtcXG4gIH1cXG5cXG4gIC5sYXN0LW1kIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjtcXG4gICAgLW1zLWZsZXgtb3JkZXI6IDE7XFxuICAgIG9yZGVyOiAxO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1ZW0pIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogNzZyZW07XFxuICB9XFxuXFxuICAuY29sLWxnLFxcbiAgLmNvbC1sZy0xLFxcbiAgLmNvbC1sZy0yLFxcbiAgLmNvbC1sZy0zLFxcbiAgLmNvbC1sZy00LFxcbiAgLmNvbC1sZy01LFxcbiAgLmNvbC1sZy02LFxcbiAgLmNvbC1sZy03LFxcbiAgLmNvbC1sZy04LFxcbiAgLmNvbC1sZy05LFxcbiAgLmNvbC1sZy0xMCxcXG4gIC5jb2wtbGctMTEsXFxuICAuY29sLWxnLTEyLFxcbiAgLmNvbC1sZy1vZmZzZXQtMCxcXG4gIC5jb2wtbGctb2Zmc2V0LTEsXFxuICAuY29sLWxnLW9mZnNldC0yLFxcbiAgLmNvbC1sZy1vZmZzZXQtMyxcXG4gIC5jb2wtbGctb2Zmc2V0LTQsXFxuICAuY29sLWxnLW9mZnNldC01LFxcbiAgLmNvbC1sZy1vZmZzZXQtNixcXG4gIC5jb2wtbGctb2Zmc2V0LTcsXFxuICAuY29sLWxnLW9mZnNldC04LFxcbiAgLmNvbC1sZy1vZmZzZXQtOSxcXG4gIC5jb2wtbGctb2Zmc2V0LTEwLFxcbiAgLmNvbC1sZy1vZmZzZXQtMTEsXFxuICAuY29sLWxnLW9mZnNldC0xMiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgIC1tcy1mbGV4OiAwIDAgYXV0bztcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICB9XFxuXFxuICAuY29sLWxnIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XFxuICAgIGZsZXgtYmFzaXM6IDA7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctMSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4LjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogOC4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogOC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTIge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTYuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiAxNi42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogMTYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1sZy0zIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDI1JTtcXG4gICAgZmxleC1iYXNpczogMjUlO1xcbiAgICBtYXgtd2lkdGg6IDI1JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctNCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAzMy4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDMzLjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTUge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNDEuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA0MS42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogNDEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1sZy02IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDUwJTtcXG4gICAgZmxleC1iYXNpczogNTAlO1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctNyB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1OC4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDU4LjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTgge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNjYuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA2Ni42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogNjYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1sZy05IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDc1JTtcXG4gICAgZmxleC1iYXNpczogNzUlO1xcbiAgICBtYXgtd2lkdGg6IDc1JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctMTAge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogODMuMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA4My4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogODMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy0xMSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA5MS42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDkxLjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA5MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTEyIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTAge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTEge1xcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTMge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtNCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTYge1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtNyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC04IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTkge1xcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtMTAge1xcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtMTEge1xcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLnN0YXJ0LWxnIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgfVxcblxcbiAgLmNlbnRlci1sZyB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmVuZC1sZyB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcXG4gICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICB9XFxuXFxuICAudG9wLWxnIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xcbiAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgfVxcblxcbiAgLm1pZGRsZS1sZyB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYm90dG9tLWxnIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgfVxcblxcbiAgLmFyb3VuZC1sZyB7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcblxcbiAgLmJldHdlZW4tbGcge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAuZmlyc3QtbGcge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAwO1xcbiAgICAtbXMtZmxleC1vcmRlcjogLTE7XFxuICAgIG9yZGVyOiAtMTtcXG4gIH1cXG5cXG4gIC5sYXN0LWxnIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjtcXG4gICAgLW1zLWZsZXgtb3JkZXI6IDE7XFxuICAgIG9yZGVyOiAxO1xcbiAgfVxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vZmxleGJveGdyaWQvZGlzdC9mbGV4Ym94Z3JpZC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDkwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxudmFyIF9jb2xvck1hbmlwdWxhdG9yID0gcmVxdWlyZSgnLi4vdXRpbHMvY29sb3JNYW5pcHVsYXRvcicpO1xuXG52YXIgX0VuaGFuY2VkQnV0dG9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvRW5oYW5jZWRCdXR0b24nKTtcblxudmFyIF9FbmhhbmNlZEJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FbmhhbmNlZEJ1dHRvbik7XG5cbnZhciBfUGFwZXIgPSByZXF1aXJlKCcuLi9QYXBlcicpO1xuXG52YXIgX1BhcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhcGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdmFsaWRhdGVMYWJlbChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXByb3BzLmNoaWxkcmVuICYmIHByb3BzLmxhYmVsICE9PSAwICYmICFwcm9wcy5sYWJlbCAmJiAhcHJvcHMuaWNvbikge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignUmVxdWlyZWQgcHJvcCBsYWJlbCBvciBjaGlsZHJlbiBvciBpY29uIHdhcyBub3Qgc3BlY2lmaWVkIGluICcgKyBjb21wb25lbnROYW1lICsgJy4nKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0LCBzdGF0ZSkge1xuICB2YXIgX2NvbnRleHQkbXVpVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lLFxuICAgICAgYmFzZVRoZW1lID0gX2NvbnRleHQkbXVpVGhlbWUuYmFzZVRoZW1lLFxuICAgICAgYnV0dG9uID0gX2NvbnRleHQkbXVpVGhlbWUuYnV0dG9uLFxuICAgICAgcmFpc2VkQnV0dG9uID0gX2NvbnRleHQkbXVpVGhlbWUucmFpc2VkQnV0dG9uLFxuICAgICAgYm9yZGVyUmFkaXVzID0gX2NvbnRleHQkbXVpVGhlbWUuYm9yZGVyUmFkaXVzO1xuICB2YXIgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkQmFja2dyb3VuZENvbG9yID0gcHJvcHMuZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBkaXNhYmxlZExhYmVsQ29sb3IgPSBwcm9wcy5kaXNhYmxlZExhYmVsQ29sb3IsXG4gICAgICBmdWxsV2lkdGggPSBwcm9wcy5mdWxsV2lkdGgsXG4gICAgICBpY29uID0gcHJvcHMuaWNvbixcbiAgICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICBsYWJlbFBvc2l0aW9uID0gcHJvcHMubGFiZWxQb3NpdGlvbixcbiAgICAgIHByaW1hcnkgPSBwcm9wcy5wcmltYXJ5LFxuICAgICAgc2Vjb25kYXJ5ID0gcHJvcHMuc2Vjb25kYXJ5LFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZTtcblxuXG4gIHZhciBhbW91bnQgPSBwcmltYXJ5IHx8IHNlY29uZGFyeSA/IDAuNCA6IDAuMDg7XG5cbiAgdmFyIGJhY2tncm91bmRDb2xvciA9IHJhaXNlZEJ1dHRvbi5jb2xvcjtcbiAgdmFyIGxhYmVsQ29sb3IgPSByYWlzZWRCdXR0b24udGV4dENvbG9yO1xuXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmRDb2xvciA9IGRpc2FibGVkQmFja2dyb3VuZENvbG9yIHx8IHJhaXNlZEJ1dHRvbi5kaXNhYmxlZENvbG9yO1xuICAgIGxhYmVsQ29sb3IgPSBkaXNhYmxlZExhYmVsQ29sb3IgfHwgcmFpc2VkQnV0dG9uLmRpc2FibGVkVGV4dENvbG9yO1xuICB9IGVsc2UgaWYgKHByaW1hcnkpIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3IgPSByYWlzZWRCdXR0b24ucHJpbWFyeUNvbG9yO1xuICAgIGxhYmVsQ29sb3IgPSByYWlzZWRCdXR0b24ucHJpbWFyeVRleHRDb2xvcjtcbiAgfSBlbHNlIGlmIChzZWNvbmRhcnkpIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3IgPSByYWlzZWRCdXR0b24uc2Vjb25kYXJ5Q29sb3I7XG4gICAgbGFiZWxDb2xvciA9IHJhaXNlZEJ1dHRvbi5zZWNvbmRhcnlUZXh0Q29sb3I7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHByb3BzLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgYmFja2dyb3VuZENvbG9yID0gcHJvcHMuYmFja2dyb3VuZENvbG9yO1xuICAgIH1cbiAgICBpZiAocHJvcHMubGFiZWxDb2xvcikge1xuICAgICAgbGFiZWxDb2xvciA9IHByb3BzLmxhYmVsQ29sb3I7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1dHRvbkhlaWdodCA9IHN0eWxlICYmIHN0eWxlLmhlaWdodCB8fCBidXR0b24uaGVpZ2h0O1xuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpLFxuICAgICAgbWluV2lkdGg6IGZ1bGxXaWR0aCA/ICcxMDAlJyA6IGJ1dHRvbi5taW5XaWR0aFxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBoZWlnaHQ6IGJ1dHRvbkhlaWdodCxcbiAgICAgIGxpbmVIZWlnaHQ6IGJ1dHRvbkhlaWdodCArICdweCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgICAgLy8gVGhhdCdzIHRoZSBkZWZhdWx0IHZhbHVlIGZvciBhIGJ1dHRvbiBidXQgbm90IGEgbGlua1xuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGZvbnRTaXplOiByYWlzZWRCdXR0b24uZm9udFNpemUsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwLFxuICAgICAgdGV4dFRyYW5zZm9ybTogcmFpc2VkQnV0dG9uLnRleHRUcmFuc2Zvcm0gfHwgYnV0dG9uLnRleHRUcmFuc2Zvcm0gfHwgJ3VwcGVyY2FzZScsXG4gICAgICBmb250V2VpZ2h0OiByYWlzZWRCdXR0b24uZm9udFdlaWdodCxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIHBhZGRpbmdMZWZ0OiBpY29uICYmIGxhYmVsUG9zaXRpb24gIT09ICdiZWZvcmUnID8gOCA6IGJhc2VUaGVtZS5zcGFjaW5nLmRlc2t0b3BHdXR0ZXJMZXNzLFxuICAgICAgcGFkZGluZ1JpZ2h0OiBpY29uICYmIGxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnID8gOCA6IGJhc2VUaGVtZS5zcGFjaW5nLmRlc2t0b3BHdXR0ZXJMZXNzLFxuICAgICAgY29sb3I6IGxhYmVsQ29sb3JcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgbWFyZ2luTGVmdDogbGFiZWwgJiYgbGFiZWxQb3NpdGlvbiAhPT0gJ2JlZm9yZScgPyAxMiA6IDAsXG4gICAgICBtYXJnaW5SaWdodDogbGFiZWwgJiYgbGFiZWxQb3NpdGlvbiA9PT0gJ2JlZm9yZScgPyAxMiA6IDBcbiAgICB9LFxuICAgIG92ZXJsYXk6IHtcbiAgICAgIGhlaWdodDogYnV0dG9uSGVpZ2h0LFxuICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IChzdGF0ZS5rZXlib2FyZEZvY3VzZWQgfHwgc3RhdGUuaG92ZXJlZCkgJiYgIWRpc2FibGVkICYmICgwLCBfY29sb3JNYW5pcHVsYXRvci5mYWRlKShsYWJlbENvbG9yLCBhbW91bnQpLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIHRvcDogMFxuICAgIH0sXG4gICAgcmlwcGxlOiB7XG4gICAgICBjb2xvcjogbGFiZWxDb2xvcixcbiAgICAgIG9wYWNpdHk6ICEocHJpbWFyeSB8fCBzZWNvbmRhcnkpID8gMC4xIDogMC4xNlxuICAgIH1cbiAgfTtcbn1cblxudmFyIFJhaXNlZEJ1dHRvbiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFJhaXNlZEJ1dHRvbiwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmFpc2VkQnV0dG9uKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFJhaXNlZEJ1dHRvbik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBSYWlzZWRCdXR0b24uX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFJhaXNlZEJ1dHRvbikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgaG92ZXJlZDogZmFsc2UsXG4gICAgICBrZXlib2FyZEZvY3VzZWQ6IGZhbHNlLFxuICAgICAgdG91Y2hlZDogZmFsc2UsXG4gICAgICBpbml0aWFsWkRlcHRoOiAwLFxuICAgICAgekRlcHRoOiAwXG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBvbmx5IGxpc3RlbiB0byBsZWZ0IGNsaWNrc1xuICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgekRlcHRoOiBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoICsgMVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vdXNlRG93bikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VVcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB6RGVwdGg6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGhcbiAgICAgIH0pO1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VVcCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMuc3RhdGUua2V5Ym9hcmRGb2N1c2VkKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB6RGVwdGg6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGgsXG4gICAgICAgICAgaG92ZXJlZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZUxlYXZlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VMZWF2ZShldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VFbnRlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5rZXlib2FyZEZvY3VzZWQgJiYgIV90aGlzLnN0YXRlLnRvdWNoZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGhvdmVyZWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZUVudGVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VFbnRlcihldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0b3VjaGVkOiB0cnVlLFxuICAgICAgICB6RGVwdGg6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGggKyAxXG4gICAgICB9KTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uVG91Y2hTdGFydCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vblRvdWNoU3RhcnQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZVRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRvdWNoZWQ6IHRydWUsXG4gICAgICAgIHpEZXB0aDogX3RoaXMuc3RhdGUuaW5pdGlhbFpEZXB0aFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblRvdWNoRW5kKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uVG91Y2hFbmQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZUtleWJvYXJkRm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQsIGtleWJvYXJkRm9jdXNlZCkge1xuICAgICAgdmFyIHpEZXB0aCA9IGtleWJvYXJkRm9jdXNlZCAmJiAhX3RoaXMucHJvcHMuZGlzYWJsZWQgPyBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoICsgMSA6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGg7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgekRlcHRoOiB6RGVwdGgsXG4gICAgICAgIGtleWJvYXJkRm9jdXNlZDoga2V5Ym9hcmRGb2N1c2VkXG4gICAgICB9KTtcbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoUmFpc2VkQnV0dG9uLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHZhciB6RGVwdGggPSB0aGlzLnByb3BzLmRpc2FibGVkID8gMCA6IDE7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgekRlcHRoOiB6RGVwdGgsXG4gICAgICAgIGluaXRpYWxaRGVwdGg6IHpEZXB0aFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgekRlcHRoID0gbmV4dFByb3BzLmRpc2FibGVkID8gMCA6IDE7XG4gICAgICB2YXIgbmV4dFN0YXRlID0ge1xuICAgICAgICB6RGVwdGg6IHpEZXB0aCxcbiAgICAgICAgaW5pdGlhbFpEZXB0aDogekRlcHRoXG4gICAgICB9O1xuXG4gICAgICBpZiAobmV4dFByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIG5leHRTdGF0ZS5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBfcHJvcHMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgIGJ1dHRvblN0eWxlID0gX3Byb3BzLmJ1dHRvblN0eWxlLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3IgPSBfcHJvcHMuZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgZGlzYWJsZWRMYWJlbENvbG9yID0gX3Byb3BzLmRpc2FibGVkTGFiZWxDb2xvcixcbiAgICAgICAgICBmdWxsV2lkdGggPSBfcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgICAgIGljb24gPSBfcHJvcHMuaWNvbixcbiAgICAgICAgICBsYWJlbCA9IF9wcm9wcy5sYWJlbCxcbiAgICAgICAgICBsYWJlbENvbG9yID0gX3Byb3BzLmxhYmVsQ29sb3IsXG4gICAgICAgICAgbGFiZWxQb3NpdGlvbiA9IF9wcm9wcy5sYWJlbFBvc2l0aW9uLFxuICAgICAgICAgIGxhYmVsU3R5bGUgPSBfcHJvcHMubGFiZWxTdHlsZSxcbiAgICAgICAgICBvdmVybGF5U3R5bGUgPSBfcHJvcHMub3ZlcmxheVN0eWxlLFxuICAgICAgICAgIHByaW1hcnkgPSBfcHJvcHMucHJpbWFyeSxcbiAgICAgICAgICByaXBwbGVTdHlsZSA9IF9wcm9wcy5yaXBwbGVTdHlsZSxcbiAgICAgICAgICBzZWNvbmRhcnkgPSBfcHJvcHMuc2Vjb25kYXJ5LFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2JhY2tncm91bmRDb2xvcicsICdidXR0b25TdHlsZScsICdjaGlsZHJlbicsICdjbGFzc05hbWUnLCAnZGlzYWJsZWQnLCAnZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3InLCAnZGlzYWJsZWRMYWJlbENvbG9yJywgJ2Z1bGxXaWR0aCcsICdpY29uJywgJ2xhYmVsJywgJ2xhYmVsQ29sb3InLCAnbGFiZWxQb3NpdGlvbicsICdsYWJlbFN0eWxlJywgJ292ZXJsYXlTdHlsZScsICdwcmltYXJ5JywgJ3JpcHBsZVN0eWxlJywgJ3NlY29uZGFyeScsICdzdHlsZSddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0LCB0aGlzLnN0YXRlKTtcbiAgICAgIHZhciBtZXJnZWRSaXBwbGVTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5yaXBwbGUsIHJpcHBsZVN0eWxlKTtcblxuICAgICAgdmFyIGJ1dHRvbkV2ZW50SGFuZGxlcnMgPSBkaXNhYmxlZCA/IHt9IDoge1xuICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVNb3VzZURvd24sXG4gICAgICAgIG9uTW91c2VVcDogdGhpcy5oYW5kbGVNb3VzZVVwLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMuaGFuZGxlTW91c2VMZWF2ZSxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhhbmRsZU1vdXNlRW50ZXIsXG4gICAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuICAgICAgICBvblRvdWNoRW5kOiB0aGlzLmhhbmRsZVRvdWNoRW5kLFxuICAgICAgICBvbktleWJvYXJkRm9jdXM6IHRoaXMuaGFuZGxlS2V5Ym9hcmRGb2N1c1xuICAgICAgfTtcblxuICAgICAgdmFyIGxhYmVsRWxlbWVudCA9IGxhYmVsICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5sYWJlbCwgbGFiZWxTdHlsZSkpLCBrZXk6ICdsYWJlbEVsZW1lbnQnIH0sXG4gICAgICAgIGxhYmVsXG4gICAgICApO1xuXG4gICAgICB2YXIgaWNvbkNsb25lZCA9IGljb24gJiYgKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGljb24sIHtcbiAgICAgICAgY29sb3I6IGljb24ucHJvcHMuY29sb3IgfHwgc3R5bGVzLmxhYmVsLmNvbG9yLFxuICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5pY29uLCBpY29uLnByb3BzLnN0eWxlKSxcbiAgICAgICAga2V5OiAnaWNvbkNsb25lZCdcbiAgICAgIH0pO1xuXG4gICAgICAvLyBQbGFjZSBsYWJlbCBiZWZvcmUgb3IgYWZ0ZXIgY2hpbGRyZW4uXG4gICAgICB2YXIgZW5oYW5jZWRCdXR0b25DaGlsZHJlbiA9IGxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnID8gW2xhYmVsRWxlbWVudCwgaWNvbkNsb25lZCwgY2hpbGRyZW5dIDogW2NoaWxkcmVuLCBpY29uQ2xvbmVkLCBsYWJlbEVsZW1lbnRdO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9QYXBlcjIuZGVmYXVsdCxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSxcbiAgICAgICAgICB6RGVwdGg6IHRoaXMuc3RhdGUuekRlcHRoXG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9FbmhhbmNlZEJ1dHRvbjIuZGVmYXVsdCxcbiAgICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwgYnV0dG9uRXZlbnRIYW5kbGVycywge1xuICAgICAgICAgICAgcmVmOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmJ1dHRvbiwgYnV0dG9uU3R5bGUpLFxuICAgICAgICAgICAgZm9jdXNSaXBwbGVDb2xvcjogbWVyZ2VkUmlwcGxlU3R5bGVzLmNvbG9yLFxuICAgICAgICAgICAgdG91Y2hSaXBwbGVDb2xvcjogbWVyZ2VkUmlwcGxlU3R5bGVzLmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNSaXBwbGVPcGFjaXR5OiBtZXJnZWRSaXBwbGVTdHlsZXMub3BhY2l0eSxcbiAgICAgICAgICAgIHRvdWNoUmlwcGxlT3BhY2l0eTogbWVyZ2VkUmlwcGxlU3R5bGVzLm9wYWNpdHlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6ICdvdmVybGF5JyxcbiAgICAgICAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5vdmVybGF5LCBvdmVybGF5U3R5bGUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuaGFuY2VkQnV0dG9uQ2hpbGRyZW5cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBSYWlzZWRCdXR0b247XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5SYWlzZWRCdXR0b24ubXVpTmFtZSA9ICdSYWlzZWRCdXR0b24nO1xuUmFpc2VkQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBsYWJlbFBvc2l0aW9uOiAnYWZ0ZXInLFxuICBmdWxsV2lkdGg6IGZhbHNlLFxuICBwcmltYXJ5OiBmYWxzZSxcbiAgc2Vjb25kYXJ5OiBmYWxzZVxufTtcblJhaXNlZEJ1dHRvbi5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuUmFpc2VkQnV0dG9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSBidXR0b24sXG4gICAqIGJ1dCBub3QgdGhlIGRlZmF1bHQgZGlzYWJsZWQgYmFja2dyb3VuZCBjb2xvclxuICAgKiAodXNlIGBkaXNhYmxlZEJhY2tncm91bmRDb2xvcmAgZm9yIHRoaXMpLlxuICAgKi9cbiAgYmFja2dyb3VuZENvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBidXR0b24gZWxlbWVudC5cbiAgICovXG4gIGJ1dHRvblN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBidXR0b24uXG4gICAqIElmIGEgbGFiZWwgaXMgcHJvdmlkZWQgdmlhIHRoZSBgbGFiZWxgIHByb3AsIHRoZSB0ZXh0IHdpdGhpbiB0aGUgbGFiZWxcbiAgICogd2lsbCBiZSBkaXNwbGF5ZWQgaW4gYWRkaXRpb24gdG8gdGhlIGNvbnRlbnQgcHJvdmlkZWQgaGVyZS5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgQ1NTIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgICogVGhlIGVsZW1lbnQgdG8gdXNlIGFzIHRoZSBjb250YWluZXIgZm9yIHRoZSBSYWlzZWRCdXR0b24uIEVpdGhlciBhIHN0cmluZyB0b1xuICAgICogdXNlIGEgRE9NIGVsZW1lbnQgb3IgYSBSZWFjdEVsZW1lbnQuIFRoaXMgaXMgdXNlZnVsIGZvciB3cmFwcGluZyB0aGVcbiAgICAqIFJhaXNlZEJ1dHRvbiBpbiBhIGN1c3RvbSBMaW5rIGNvbXBvbmVudC4gSWYgYSBSZWFjdEVsZW1lbnQgaXMgZ2l2ZW4sIGVuc3VyZVxuICAgICogdGhhdCBpdCBwYXNzZXMgYWxsIG9mIGl0cyBnaXZlbiBwcm9wcyB0aHJvdWdoIHRvIHRoZSB1bmRlcmx5aW5nIERPTVxuICAgICogZWxlbWVudCBhbmQgcmVuZGVycyBpdHMgY2hpbGRyZW4gcHJvcCBmb3IgcHJvcGVyIGludGVncmF0aW9uLlxuICAgICovXG4gIGNvbnRhaW5lckVsZW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50XSksXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgZWxlbWVudCdzIHJpcHBsZSBlZmZlY3Qgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVUb3VjaFJpcHBsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSBidXR0b25cbiAgICogd2hlbiBpdCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkQmFja2dyb3VuZENvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgYnV0dG9uJ3MgbGFiZWwgd2hlbiB0aGUgYnV0dG9uIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWRMYWJlbENvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBidXR0b24gd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFRoZSBVUkwgdG8gbGluayB0byB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cbiAgICovXG4gIGhyZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogQW4gaWNvbiB0byBiZSBkaXNwbGF5ZWQgd2l0aGluIHRoZSBidXR0b24uXG4gICAqL1xuICBpY29uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgdG8gYmUgZGlzcGxheWVkIHdpdGhpbiB0aGUgYnV0dG9uLlxuICAgKiBJZiBjb250ZW50IGlzIHByb3ZpZGVkIHZpYSB0aGUgYGNoaWxkcmVuYCBwcm9wLCB0aGF0IGNvbnRlbnQgd2lsbCBiZVxuICAgKiBkaXNwbGF5ZWQgaW4gYWRkaXRpb24gdG8gdGhlIGxhYmVsIHByb3ZpZGVkIGhlcmUuXG4gICAqL1xuICBsYWJlbDogdmFsaWRhdGVMYWJlbCxcbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgYnV0dG9uJ3MgbGFiZWwuXG4gICAqL1xuICBsYWJlbENvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgYnV0dG9uJ3MgbGFiZWwgcmVsYXRpdmUgdG8gdGhlIGJ1dHRvbidzIGBjaGlsZHJlbmAuXG4gICAqL1xuICBsYWJlbFBvc2l0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsnYmVmb3JlJywgJ2FmdGVyJ10pLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGJ1dHRvbidzIGxhYmVsIGVsZW1lbnQuXG4gICAqL1xuICBsYWJlbFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZURvd246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZUVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VMZWF2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlVXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Ub3VjaEVuZDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvblRvdWNoU3RhcnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gdGhlIGJ1dHRvbiBpcyB0b3VjaC10YXBwZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUb3VjaFRhcCBldmVudCB0YXJnZXRpbmcgdGhlIGJ1dHRvbi5cbiAgICovXG4gIG9uVG91Y2hUYXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUgc3R5bGUgb2YgdGhlIGJ1dHRvbiBvdmVybGF5LlxuICAgKi9cbiAgb3ZlcmxheVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBidXR0b24gd2lsbCB1c2UgdGhlIHRoZW1lJ3MgcHJpbWFyeSBjb2xvci5cbiAgICovXG4gIHByaW1hcnk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUgc3R5bGUgb2YgdGhlIHJpcHBsZSBlbGVtZW50LlxuICAgKi9cbiAgcmlwcGxlU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIHVzZSB0aGUgdGhlbWUncyBzZWNvbmRhcnkgY29sb3IuXG4gICAqIElmIGJvdGggYHNlY29uZGFyeWAgYW5kIGBwcmltYXJ5YCBhcmUgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIHVzZVxuICAgKiB0aGUgdGhlbWUncyBwcmltYXJ5IGNvbG9yLlxuICAgKi9cbiAgc2Vjb25kYXJ5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBSYWlzZWRCdXR0b247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbi9SYWlzZWRCdXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDkwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdEV2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCdyZWFjdC1ldmVudC1saXN0ZW5lcicpO1xuXG52YXIgX3JlYWN0RXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEV2ZW50TGlzdGVuZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcm93c0hlaWdodCA9IDI0O1xuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQsIHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScgfSxcbiAgICB0ZXh0YXJlYToge1xuICAgICAgaGVpZ2h0OiBzdGF0ZS5oZWlnaHQsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgcmVzaXplOiAnbm9uZScsXG4gICAgICBmb250OiAnaW5oZXJpdCcsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgY3Vyc29yOiAnaW5oZXJpdCdcbiAgICB9LFxuICAgIHNoYWRvdzoge1xuICAgICAgcmVzaXplOiAnbm9uZScsXG4gICAgICAvLyBPdmVyZmxvdyBhbHNvIG5lZWRlZCB0byBoZXJlIHRvIHJlbW92ZSB0aGUgZXh0cmEgcm93XG4gICAgICAvLyBhZGRlZCB0byB0ZXh0YXJlYXMgaW4gRmlyZWZveC5cbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIC8vIFZpc2liaWxpdHkgbmVlZGVkIHRvIGhpZGUgdGhlIGV4dHJhIHRleHQgYXJlYSBvbiBpcGFkc1xuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGhlaWdodDogJ2F1dG8nXG4gICAgfVxuICB9O1xufVxuXG52YXIgRW5oYW5jZWRUZXh0YXJlYSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKEVuaGFuY2VkVGV4dGFyZWEsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEVuaGFuY2VkVGV4dGFyZWEoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgRW5oYW5jZWRUZXh0YXJlYSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBFbmhhbmNlZFRleHRhcmVhLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShFbmhhbmNlZFRleHRhcmVhKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBoZWlnaHQ6IG51bGxcbiAgICB9LCBfdGhpcy5oYW5kbGVSZXNpemUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnN5bmNIZWlnaHRXaXRoU2hhZG93KHVuZGVmaW5lZCwgZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICBfdGhpcy5zeW5jSGVpZ2h0V2l0aFNoYWRvdyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlTGluaycpKSB7XG4gICAgICAgIF90aGlzLnByb3BzLnZhbHVlTGluay5yZXF1ZXN0Q2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKEVuaGFuY2VkVGV4dGFyZWEsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5yb3dzICogcm93c0hlaWdodFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc3luY0hlaWdodFdpdGhTaGFkb3coKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUgfHwgbmV4dFByb3BzLnJvd3NNYXggIT09IHRoaXMucHJvcHMucm93c01heCkge1xuICAgICAgICB0aGlzLnN5bmNIZWlnaHRXaXRoU2hhZG93KG5leHRQcm9wcy52YWx1ZSwgbnVsbCwgbmV4dFByb3BzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRJbnB1dE5vZGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnB1dE5vZGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZzLmlucHV0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgIHRoaXMuZ2V0SW5wdXROb2RlKCkudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc3luY0hlaWdodFdpdGhTaGFkb3codmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N5bmNIZWlnaHRXaXRoU2hhZG93JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3luY0hlaWdodFdpdGhTaGFkb3cobmV3VmFsdWUsIGV2ZW50LCBwcm9wcykge1xuICAgICAgdmFyIHNoYWRvdyA9IHRoaXMucmVmcy5zaGFkb3c7XG4gICAgICB2YXIgZGlzcGxheVRleHQgPSB0aGlzLnByb3BzLmhpbnRUZXh0ICYmIChuZXdWYWx1ZSA9PT0gJycgfHwgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBuZXdWYWx1ZSA9PT0gbnVsbCkgPyB0aGlzLnByb3BzLmhpbnRUZXh0IDogbmV3VmFsdWU7XG5cbiAgICAgIGlmIChkaXNwbGF5VGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNoYWRvdy52YWx1ZSA9IGRpc3BsYXlUZXh0O1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3SGVpZ2h0ID0gc2hhZG93LnNjcm9sbEhlaWdodDtcblxuICAgICAgLy8gR3VhcmRpbmcgZm9yIGpzZG9tLCB3aGVyZSBzY3JvbGxIZWlnaHQgaXNuJ3QgcHJlc2VudC5cbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdG1wdmFyL2pzZG9tL2lzc3Vlcy8xMDEzXG4gICAgICBpZiAobmV3SGVpZ2h0ID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgICAgcHJvcHMgPSBwcm9wcyB8fCB0aGlzLnByb3BzO1xuXG4gICAgICBpZiAocHJvcHMucm93c01heCA+PSBwcm9wcy5yb3dzKSB7XG4gICAgICAgIG5ld0hlaWdodCA9IE1hdGgubWluKHByb3BzLnJvd3NNYXggKiByb3dzSGVpZ2h0LCBuZXdIZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICBuZXdIZWlnaHQgPSBNYXRoLm1heChuZXdIZWlnaHQsIHJvd3NIZWlnaHQpO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5oZWlnaHQgIT09IG5ld0hlaWdodCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBoZWlnaHQ6IG5ld0hlaWdodFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocHJvcHMub25IZWlnaHRDaGFuZ2UpIHtcbiAgICAgICAgICBwcm9wcy5vbkhlaWdodENoYW5nZShldmVudCwgbmV3SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3Byb3BzLm9uQ2hhbmdlLFxuICAgICAgICAgIG9uSGVpZ2h0Q2hhbmdlID0gX3Byb3BzLm9uSGVpZ2h0Q2hhbmdlLFxuICAgICAgICAgIHJvd3MgPSBfcHJvcHMucm93cyxcbiAgICAgICAgICByb3dzTWF4ID0gX3Byb3BzLnJvd3NNYXgsXG4gICAgICAgICAgc2hhZG93U3R5bGUgPSBfcHJvcHMuc2hhZG93U3R5bGUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgaGludFRleHQgPSBfcHJvcHMuaGludFRleHQsXG4gICAgICAgICAgdGV4dGFyZWFTdHlsZSA9IF9wcm9wcy50ZXh0YXJlYVN0eWxlLFxuICAgICAgICAgIHZhbHVlTGluayA9IF9wcm9wcy52YWx1ZUxpbmssXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnb25DaGFuZ2UnLCAnb25IZWlnaHRDaGFuZ2UnLCAncm93cycsICdyb3dzTWF4JywgJ3NoYWRvd1N0eWxlJywgJ3N0eWxlJywgJ2hpbnRUZXh0JywgJ3RleHRhcmVhU3R5bGUnLCAndmFsdWVMaW5rJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMuc3RhdGUpO1xuICAgICAgdmFyIHJvb3RTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKTtcbiAgICAgIHZhciB0ZXh0YXJlYVN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMudGV4dGFyZWEsIHRleHRhcmVhU3R5bGUpO1xuICAgICAgdmFyIHNoYWRvd1N0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgdGV4dGFyZWFTdHlsZXMsIHN0eWxlcy5zaGFkb3csIHNoYWRvd1N0eWxlKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlTGluaycpKSB7XG4gICAgICAgIG90aGVyLnZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZUxpbmsudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMocm9vdFN0eWxlcykgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0RXZlbnRMaXN0ZW5lcjIuZGVmYXVsdCwgeyB0YXJnZXQ6ICd3aW5kb3cnLCBvblJlc2l6ZTogdGhpcy5oYW5kbGVSZXNpemUgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIHtcbiAgICAgICAgICByZWY6ICdzaGFkb3cnLFxuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKHNoYWRvd1N0eWxlcyksXG4gICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgcm93czogdGhpcy5wcm9wcy5yb3dzLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUsXG4gICAgICAgICAgdmFsdWVMaW5rOiB0aGlzLnByb3BzLnZhbHVlTGlua1xuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHtcbiAgICAgICAgICByZWY6ICdpbnB1dCcsXG4gICAgICAgICAgcm93czogdGhpcy5wcm9wcy5yb3dzLFxuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKHRleHRhcmVhU3R5bGVzKSxcbiAgICAgICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVDaGFuZ2VcbiAgICAgICAgfSkpXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRW5oYW5jZWRUZXh0YXJlYTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkVuaGFuY2VkVGV4dGFyZWEuZGVmYXVsdFByb3BzID0ge1xuICByb3dzOiAxXG59O1xuRW5oYW5jZWRUZXh0YXJlYS5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuRW5oYW5jZWRUZXh0YXJlYS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGRlZmF1bHRWYWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGhpbnRUZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uSGVpZ2h0Q2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHJvd3M6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICByb3dzTWF4OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgc2hhZG93U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgdGV4dGFyZWFTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdmFsdWVMaW5rOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gRW5oYW5jZWRUZXh0YXJlYTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL0VuaGFuY2VkVGV4dGFyZWEuanNcbi8vIG1vZHVsZSBpZCA9IDkwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9zaGFsbG93RXF1YWwgPSByZXF1aXJlKCdyZWNvbXBvc2Uvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dFcXVhbCk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbnZhciBfRW5oYW5jZWRUZXh0YXJlYSA9IHJlcXVpcmUoJy4vRW5oYW5jZWRUZXh0YXJlYScpO1xuXG52YXIgX0VuaGFuY2VkVGV4dGFyZWEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRW5oYW5jZWRUZXh0YXJlYSk7XG5cbnZhciBfVGV4dEZpZWxkSGludCA9IHJlcXVpcmUoJy4vVGV4dEZpZWxkSGludCcpO1xuXG52YXIgX1RleHRGaWVsZEhpbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dEZpZWxkSGludCk7XG5cbnZhciBfVGV4dEZpZWxkTGFiZWwgPSByZXF1aXJlKCcuL1RleHRGaWVsZExhYmVsJyk7XG5cbnZhciBfVGV4dEZpZWxkTGFiZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dEZpZWxkTGFiZWwpO1xuXG52YXIgX1RleHRGaWVsZFVuZGVybGluZSA9IHJlcXVpcmUoJy4vVGV4dEZpZWxkVW5kZXJsaW5lJyk7XG5cbnZhciBfVGV4dEZpZWxkVW5kZXJsaW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RleHRGaWVsZFVuZGVybGluZSk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0LCBzdGF0ZSkge1xuICB2YXIgX2NvbnRleHQkbXVpVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lLFxuICAgICAgYmFzZVRoZW1lID0gX2NvbnRleHQkbXVpVGhlbWUuYmFzZVRoZW1lLFxuICAgICAgX2NvbnRleHQkbXVpVGhlbWUkdGV4ID0gX2NvbnRleHQkbXVpVGhlbWUudGV4dEZpZWxkLFxuICAgICAgZmxvYXRpbmdMYWJlbENvbG9yID0gX2NvbnRleHQkbXVpVGhlbWUkdGV4LmZsb2F0aW5nTGFiZWxDb2xvcixcbiAgICAgIGZvY3VzQ29sb3IgPSBfY29udGV4dCRtdWlUaGVtZSR0ZXguZm9jdXNDb2xvcixcbiAgICAgIHRleHRDb2xvciA9IF9jb250ZXh0JG11aVRoZW1lJHRleC50ZXh0Q29sb3IsXG4gICAgICBkaXNhYmxlZFRleHRDb2xvciA9IF9jb250ZXh0JG11aVRoZW1lJHRleC5kaXNhYmxlZFRleHRDb2xvcixcbiAgICAgIGJhY2tncm91bmRDb2xvciA9IF9jb250ZXh0JG11aVRoZW1lJHRleC5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBlcnJvckNvbG9yID0gX2NvbnRleHQkbXVpVGhlbWUkdGV4LmVycm9yQ29sb3I7XG5cblxuICB2YXIgc3R5bGVzID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgIGxpbmVIZWlnaHQ6ICcyNHB4JyxcbiAgICAgIHdpZHRoOiBwcm9wcy5mdWxsV2lkdGggPyAnMTAwJScgOiAyNTYsXG4gICAgICBoZWlnaHQ6IChwcm9wcy5yb3dzIC0gMSkgKiAyNCArIChwcm9wcy5mbG9hdGluZ0xhYmVsVGV4dCA/IDcyIDogNDgpLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgICAgZm9udEZhbWlseTogYmFzZVRoZW1lLmZvbnRGYW1pbHksXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnMjAwbXMnLCAnaGVpZ2h0JyksXG4gICAgICBjdXJzb3I6IHByb3BzLmRpc2FibGVkID8gJ25vdC1hbGxvd2VkJyA6ICdhdXRvJ1xuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgYm90dG9tOiAyLFxuICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgbGluZUhlaWdodDogJzEycHgnLFxuICAgICAgY29sb3I6IGVycm9yQ29sb3IsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpXG4gICAgfSxcbiAgICBmbG9hdGluZ0xhYmVsOiB7XG4gICAgICBjb2xvcjogcHJvcHMuZGlzYWJsZWQgPyBkaXNhYmxlZFRleHRDb2xvciA6IGZsb2F0aW5nTGFiZWxDb2xvcixcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH0sXG4gICAgaW5wdXQ6IHtcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxuICAgICAgY29sb3I6IHByb3BzLmRpc2FibGVkID8gZGlzYWJsZWRUZXh0Q29sb3IgOiB0ZXh0Q29sb3IsXG4gICAgICBjdXJzb3I6ICdpbmhlcml0JyxcbiAgICAgIGZvbnQ6ICdpbmhlcml0JyxcbiAgICAgIFdlYmtpdFRleHRGaWxsQ29sb3I6IHByb3BzLmRpc2FibGVkID8gZGlzYWJsZWRUZXh0Q29sb3IgOiB0ZXh0Q29sb3IsXG4gICAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3JnYmEoMCwwLDAsMCknIH0sXG4gICAgaW5wdXROYXRpdmU6IHtcbiAgICAgIGFwcGVhcmFuY2U6ICd0ZXh0ZmllbGQnIH1cbiAgfTtcblxuICBzdHlsZXMudGV4dGFyZWEgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5pbnB1dCwge1xuICAgIG1hcmdpblRvcDogcHJvcHMuZmxvYXRpbmdMYWJlbFRleHQgPyAzNiA6IDEyLFxuICAgIG1hcmdpbkJvdHRvbTogcHJvcHMuZmxvYXRpbmdMYWJlbFRleHQgPyAtMzYgOiAtMTIsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZm9udDogJ2luaGVyaXQnXG4gIH0pO1xuXG4gIC8vIERvIG5vdCBhc3NpZ24gYSBoZWlnaHQgdG8gdGhlIHRleHRhcmVhIGFzIGhlIGhhbmRsZXMgaXQgb24gaGlzIG93bi5cbiAgc3R5bGVzLmlucHV0LmhlaWdodCA9ICcxMDAlJztcblxuICBpZiAoc3RhdGUuaXNGb2N1c2VkKSB7XG4gICAgc3R5bGVzLmZsb2F0aW5nTGFiZWwuY29sb3IgPSBmb2N1c0NvbG9yO1xuICB9XG5cbiAgaWYgKHByb3BzLmZsb2F0aW5nTGFiZWxUZXh0KSB7XG4gICAgc3R5bGVzLmlucHV0LmJveFNpemluZyA9ICdib3JkZXItYm94JztcblxuICAgIGlmICghcHJvcHMubXVsdGlMaW5lKSB7XG4gICAgICBzdHlsZXMuaW5wdXQubWFyZ2luVG9wID0gMTQ7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmVycm9yVGV4dCkge1xuICAgICAgc3R5bGVzLmVycm9yLmJvdHRvbSA9ICFwcm9wcy5tdWx0aUxpbmUgPyBzdHlsZXMuZXJyb3IuZm9udFNpemUgKyAzIDogMztcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhdGUuZXJyb3JUZXh0KSB7XG4gICAgaWYgKHN0YXRlLmlzRm9jdXNlZCkge1xuICAgICAgc3R5bGVzLmZsb2F0aW5nTGFiZWwuY29sb3IgPSBzdHlsZXMuZXJyb3IuY29sb3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyB2YWxpZCB0byBiZSBkaXNwbGF5ZWQgaW5zaWRlIGFuIGlucHV0LlxuICpcbiAqIEBwYXJhbSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdHJpbmcgcHJvdmlkZWQgaXMgdmFsaWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gaXNWYWxpZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09ICcnICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgJiYgIShBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApO1xufVxuXG52YXIgVGV4dEZpZWxkID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoVGV4dEZpZWxkLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUZXh0RmllbGQoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgVGV4dEZpZWxkKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IFRleHRGaWVsZC5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoVGV4dEZpZWxkKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc0ZvY3VzZWQ6IGZhbHNlLFxuICAgICAgZXJyb3JUZXh0OiB1bmRlZmluZWQsXG4gICAgICBoYXNWYWx1ZTogZmFsc2VcbiAgICB9LCBfdGhpcy5oYW5kbGVJbnB1dEJsdXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgaXNGb2N1c2VkOiBmYWxzZSB9KTtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25CbHVyKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGhhc1ZhbHVlOiBpc1ZhbGlkKGV2ZW50LnRhcmdldC52YWx1ZSkgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlSW5wdXRGb2N1cyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIF90aGlzLnNldFN0YXRlKHsgaXNGb2N1c2VkOiB0cnVlIH0pO1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Gb2N1cyhldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlSGVpZ2h0Q2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50LCBoZWlnaHQpIHtcbiAgICAgIHZhciBuZXdIZWlnaHQgPSBoZWlnaHQgKyAyNDtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5mbG9hdGluZ0xhYmVsVGV4dCkge1xuICAgICAgICBuZXdIZWlnaHQgKz0gMjQ7XG4gICAgICB9XG4gICAgICBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUoX3RoaXMpLnN0eWxlLmhlaWdodCA9IG5ld0hlaWdodCArICdweCc7XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFRleHRGaWVsZCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBuYW1lID0gX3Byb3BzLm5hbWUsXG4gICAgICAgICAgaGludFRleHQgPSBfcHJvcHMuaGludFRleHQsXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQgPSBfcHJvcHMuZmxvYXRpbmdMYWJlbFRleHQsXG4gICAgICAgICAgaWQgPSBfcHJvcHMuaWQ7XG5cblxuICAgICAgdmFyIHByb3BzTGVhZiA9IGNoaWxkcmVuID8gY2hpbGRyZW4ucHJvcHMgOiB0aGlzLnByb3BzO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZXJyb3JUZXh0OiB0aGlzLnByb3BzLmVycm9yVGV4dCxcbiAgICAgICAgaGFzVmFsdWU6IGlzVmFsaWQocHJvcHNMZWFmLnZhbHVlKSB8fCBpc1ZhbGlkKHByb3BzTGVhZi5kZWZhdWx0VmFsdWUpXG4gICAgICB9KTtcblxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShuYW1lIHx8IGhpbnRUZXh0IHx8IGZsb2F0aW5nTGFiZWxUZXh0IHx8IGlkLCAnTWF0ZXJpYWwtVUk6IFdlIGRvblxcJ3QgaGF2ZSBlbm91Z2ggaW5mb3JtYXRpb25cXG4gICAgICB0byBidWlsZCBhIHJvYnVzdCB1bmlxdWUgaWQgZm9yIHRoZSBUZXh0RmllbGQgY29tcG9uZW50LiBQbGVhc2UgcHJvdmlkZSBhbiBpZCBvciBhIG5hbWUuJykgOiB2b2lkIDA7XG5cbiAgICAgIHZhciB1bmlxdWVJZCA9IG5hbWUgKyAnLScgKyBoaW50VGV4dCArICctJyArIGZsb2F0aW5nTGFiZWxUZXh0ICsgJy0nICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMHhGRkZGKTtcbiAgICAgIHRoaXMudW5pcXVlSWQgPSB1bmlxdWVJZC5yZXBsYWNlKC9bXkEtWmEtejAtOS1dL2dpLCAnJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAobmV4dFByb3BzLmVycm9yVGV4dCAhPT0gdGhpcy5wcm9wcy5lcnJvclRleHQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZXJyb3JUZXh0OiBuZXh0UHJvcHMuZXJyb3JUZXh0XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dFByb3BzLmNoaWxkcmVuICYmIG5leHRQcm9wcy5jaGlsZHJlbi5wcm9wcykge1xuICAgICAgICBuZXh0UHJvcHMgPSBuZXh0UHJvcHMuY2hpbGRyZW4ucHJvcHM7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0UHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgICAgdmFyIGhhc1ZhbHVlID0gaXNWYWxpZChuZXh0UHJvcHMudmFsdWUpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGhhc1ZhbHVlOiBoYXNWYWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG4gICAgICByZXR1cm4gISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKSB8fCAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMuY29udGV4dCwgbmV4dENvbnRleHQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2JsdXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgaWYgKHRoaXMuaW5wdXQpIHtcbiAgICAgICAgdGhpcy5nZXRJbnB1dE5vZGUoKS5ibHVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZm9jdXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgIGlmICh0aGlzLmlucHV0KSB7XG4gICAgICAgIHRoaXMuZ2V0SW5wdXROb2RlKCkuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZWxlY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3QoKSB7XG4gICAgICBpZiAodGhpcy5pbnB1dCkge1xuICAgICAgICB0aGlzLmdldElucHV0Tm9kZSgpLnNlbGVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnB1dCA/IHRoaXMuZ2V0SW5wdXROb2RlKCkudmFsdWUgOiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SW5wdXROb2RlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5wdXROb2RlKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4gfHwgdGhpcy5wcm9wcy5tdWx0aUxpbmUgPyB0aGlzLmlucHV0LmdldElucHV0Tm9kZSgpIDogX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMuaW5wdXQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19pc0NvbnRyb2xsZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaXNDb250cm9sbGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wczIuY2hpbGRyZW4sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzMi5jbGFzc05hbWUsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMyLmRpc2FibGVkLFxuICAgICAgICAgIGVycm9yU3R5bGUgPSBfcHJvcHMyLmVycm9yU3R5bGUsXG4gICAgICAgICAgZXJyb3JUZXh0ID0gX3Byb3BzMi5lcnJvclRleHQsXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbEZpeGVkID0gX3Byb3BzMi5mbG9hdGluZ0xhYmVsRml4ZWQsXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbEZvY3VzU3R5bGUgPSBfcHJvcHMyLmZsb2F0aW5nTGFiZWxGb2N1c1N0eWxlLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxTaHJpbmtTdHlsZSA9IF9wcm9wczIuZmxvYXRpbmdMYWJlbFNocmlua1N0eWxlLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxTdHlsZSA9IF9wcm9wczIuZmxvYXRpbmdMYWJlbFN0eWxlLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0ID0gX3Byb3BzMi5mbG9hdGluZ0xhYmVsVGV4dCxcbiAgICAgICAgICBmdWxsV2lkdGggPSBfcHJvcHMyLmZ1bGxXaWR0aCxcbiAgICAgICAgICBoaW50VGV4dCA9IF9wcm9wczIuaGludFRleHQsXG4gICAgICAgICAgaGludFN0eWxlID0gX3Byb3BzMi5oaW50U3R5bGUsXG4gICAgICAgICAgaWQgPSBfcHJvcHMyLmlkLFxuICAgICAgICAgIGlucHV0U3R5bGUgPSBfcHJvcHMyLmlucHV0U3R5bGUsXG4gICAgICAgICAgbXVsdGlMaW5lID0gX3Byb3BzMi5tdWx0aUxpbmUsXG4gICAgICAgICAgb25CbHVyID0gX3Byb3BzMi5vbkJsdXIsXG4gICAgICAgICAgb25DaGFuZ2UgPSBfcHJvcHMyLm9uQ2hhbmdlLFxuICAgICAgICAgIG9uRm9jdXMgPSBfcHJvcHMyLm9uRm9jdXMsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMyLnN0eWxlLFxuICAgICAgICAgIHR5cGUgPSBfcHJvcHMyLnR5cGUsXG4gICAgICAgICAgdW5kZXJsaW5lRGlzYWJsZWRTdHlsZSA9IF9wcm9wczIudW5kZXJsaW5lRGlzYWJsZWRTdHlsZSxcbiAgICAgICAgICB1bmRlcmxpbmVGb2N1c1N0eWxlID0gX3Byb3BzMi51bmRlcmxpbmVGb2N1c1N0eWxlLFxuICAgICAgICAgIHVuZGVybGluZVNob3cgPSBfcHJvcHMyLnVuZGVybGluZVNob3csXG4gICAgICAgICAgdW5kZXJsaW5lU3R5bGUgPSBfcHJvcHMyLnVuZGVybGluZVN0eWxlLFxuICAgICAgICAgIHJvd3MgPSBfcHJvcHMyLnJvd3MsXG4gICAgICAgICAgcm93c01heCA9IF9wcm9wczIucm93c01heCxcbiAgICAgICAgICB0ZXh0YXJlYVN0eWxlID0gX3Byb3BzMi50ZXh0YXJlYVN0eWxlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzMiwgWydjaGlsZHJlbicsICdjbGFzc05hbWUnLCAnZGlzYWJsZWQnLCAnZXJyb3JTdHlsZScsICdlcnJvclRleHQnLCAnZmxvYXRpbmdMYWJlbEZpeGVkJywgJ2Zsb2F0aW5nTGFiZWxGb2N1c1N0eWxlJywgJ2Zsb2F0aW5nTGFiZWxTaHJpbmtTdHlsZScsICdmbG9hdGluZ0xhYmVsU3R5bGUnLCAnZmxvYXRpbmdMYWJlbFRleHQnLCAnZnVsbFdpZHRoJywgJ2hpbnRUZXh0JywgJ2hpbnRTdHlsZScsICdpZCcsICdpbnB1dFN0eWxlJywgJ211bHRpTGluZScsICdvbkJsdXInLCAnb25DaGFuZ2UnLCAnb25Gb2N1cycsICdzdHlsZScsICd0eXBlJywgJ3VuZGVybGluZURpc2FibGVkU3R5bGUnLCAndW5kZXJsaW5lRm9jdXNTdHlsZScsICd1bmRlcmxpbmVTaG93JywgJ3VuZGVybGluZVN0eWxlJywgJ3Jvd3MnLCAncm93c01heCcsICd0ZXh0YXJlYVN0eWxlJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMuc3RhdGUpO1xuICAgICAgdmFyIGlucHV0SWQgPSBpZCB8fCB0aGlzLnVuaXF1ZUlkO1xuXG4gICAgICB2YXIgZXJyb3JUZXh0RWxlbWVudCA9IHRoaXMuc3RhdGUuZXJyb3JUZXh0ICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmVycm9yLCBlcnJvclN0eWxlKSkgfSxcbiAgICAgICAgdGhpcy5zdGF0ZS5lcnJvclRleHRcbiAgICAgICk7XG5cbiAgICAgIHZhciBmbG9hdGluZ0xhYmVsVGV4dEVsZW1lbnQgPSBmbG9hdGluZ0xhYmVsVGV4dCAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1RleHRGaWVsZExhYmVsMi5kZWZhdWx0LFxuICAgICAgICB7XG4gICAgICAgICAgbXVpVGhlbWU6IHRoaXMuY29udGV4dC5tdWlUaGVtZSxcbiAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5mbG9hdGluZ0xhYmVsLCBmbG9hdGluZ0xhYmVsU3R5bGUsIHRoaXMuc3RhdGUuaXNGb2N1c2VkID8gZmxvYXRpbmdMYWJlbEZvY3VzU3R5bGUgOiBudWxsKSxcbiAgICAgICAgICBzaHJpbmtTdHlsZTogZmxvYXRpbmdMYWJlbFNocmlua1N0eWxlLFxuICAgICAgICAgIGh0bWxGb3I6IGlucHV0SWQsXG4gICAgICAgICAgc2hyaW5rOiB0aGlzLnN0YXRlLmhhc1ZhbHVlIHx8IHRoaXMuc3RhdGUuaXNGb2N1c2VkIHx8IGZsb2F0aW5nTGFiZWxGaXhlZCxcbiAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWRcbiAgICAgICAgfSxcbiAgICAgICAgZmxvYXRpbmdMYWJlbFRleHRcbiAgICAgICk7XG5cbiAgICAgIHZhciBpbnB1dFByb3BzID0ge1xuICAgICAgICBpZDogaW5wdXRJZCxcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoZWxlbSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuaW5wdXQgPSBlbGVtO1xuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgb25CbHVyOiB0aGlzLmhhbmRsZUlucHV0Qmx1cixcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UsXG4gICAgICAgIG9uRm9jdXM6IHRoaXMuaGFuZGxlSW5wdXRGb2N1c1xuICAgICAgfTtcblxuICAgICAgdmFyIGNoaWxkU3R5bGVNZXJnZWQgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmlucHV0LCBpbnB1dFN0eWxlKTtcblxuICAgICAgdmFyIGlucHV0RWxlbWVudCA9IHZvaWQgMDtcbiAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICBpbnB1dEVsZW1lbnQgPSBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBpbnB1dFByb3BzLCBjaGlsZHJlbi5wcm9wcywge1xuICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoY2hpbGRTdHlsZU1lcmdlZCwgY2hpbGRyZW4ucHJvcHMuc3R5bGUpXG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0RWxlbWVudCA9IG11bHRpTGluZSA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9FbmhhbmNlZFRleHRhcmVhMi5kZWZhdWx0LCAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHtcbiAgICAgICAgICBzdHlsZTogY2hpbGRTdHlsZU1lcmdlZCxcbiAgICAgICAgICB0ZXh0YXJlYVN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnRleHRhcmVhLCBzdHlsZXMuaW5wdXROYXRpdmUsIHRleHRhcmVhU3R5bGUpLFxuICAgICAgICAgIHJvd3M6IHJvd3MsXG4gICAgICAgICAgcm93c01heDogcm93c01heCxcbiAgICAgICAgICBoaW50VGV4dDogaGludFRleHRcbiAgICAgICAgfSwgb3RoZXIsIGlucHV0UHJvcHMsIHtcbiAgICAgICAgICBvbkhlaWdodENoYW5nZTogdGhpcy5oYW5kbGVIZWlnaHRDaGFuZ2VcbiAgICAgICAgfSkpIDogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmlucHV0TmF0aXZlLCBjaGlsZFN0eWxlTWVyZ2VkKSlcbiAgICAgICAgfSwgb3RoZXIsIGlucHV0UHJvcHMpKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJvb3RQcm9wcyA9IHt9O1xuXG4gICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgcm9vdFByb3BzID0gb3RoZXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIHJvb3RQcm9wcywge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpKVxuICAgICAgICB9KSxcbiAgICAgICAgZmxvYXRpbmdMYWJlbFRleHRFbGVtZW50LFxuICAgICAgICBoaW50VGV4dCA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9UZXh0RmllbGRIaW50Mi5kZWZhdWx0LCB7XG4gICAgICAgICAgbXVpVGhlbWU6IHRoaXMuY29udGV4dC5tdWlUaGVtZSxcbiAgICAgICAgICBzaG93OiAhKHRoaXMuc3RhdGUuaGFzVmFsdWUgfHwgZmxvYXRpbmdMYWJlbFRleHQgJiYgIXRoaXMuc3RhdGUuaXNGb2N1c2VkKSB8fCAhdGhpcy5zdGF0ZS5oYXNWYWx1ZSAmJiBmbG9hdGluZ0xhYmVsVGV4dCAmJiBmbG9hdGluZ0xhYmVsRml4ZWQgJiYgIXRoaXMuc3RhdGUuaXNGb2N1c2VkLFxuICAgICAgICAgIHN0eWxlOiBoaW50U3R5bGUsXG4gICAgICAgICAgdGV4dDogaGludFRleHRcbiAgICAgICAgfSkgOiBudWxsLFxuICAgICAgICBpbnB1dEVsZW1lbnQsXG4gICAgICAgIHVuZGVybGluZVNob3cgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVGV4dEZpZWxkVW5kZXJsaW5lMi5kZWZhdWx0LCB7XG4gICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgIGRpc2FibGVkU3R5bGU6IHVuZGVybGluZURpc2FibGVkU3R5bGUsXG4gICAgICAgICAgZXJyb3I6ICEhdGhpcy5zdGF0ZS5lcnJvclRleHQsXG4gICAgICAgICAgZXJyb3JTdHlsZTogZXJyb3JTdHlsZSxcbiAgICAgICAgICBmb2N1czogdGhpcy5zdGF0ZS5pc0ZvY3VzZWQsXG4gICAgICAgICAgZm9jdXNTdHlsZTogdW5kZXJsaW5lRm9jdXNTdHlsZSxcbiAgICAgICAgICBtdWlUaGVtZTogdGhpcy5jb250ZXh0Lm11aVRoZW1lLFxuICAgICAgICAgIHN0eWxlOiB1bmRlcmxpbmVTdHlsZVxuICAgICAgICB9KSA6IG51bGwsXG4gICAgICAgIGVycm9yVGV4dEVsZW1lbnRcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBUZXh0RmllbGQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5UZXh0RmllbGQuZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIGZsb2F0aW5nTGFiZWxGaXhlZDogZmFsc2UsXG4gIG11bHRpTGluZTogZmFsc2UsXG4gIGZ1bGxXaWR0aDogZmFsc2UsXG4gIHR5cGU6ICd0ZXh0JyxcbiAgdW5kZXJsaW5lU2hvdzogdHJ1ZSxcbiAgcm93czogMVxufTtcblRleHRGaWVsZC5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuVGV4dEZpZWxkLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBjc3MgY2xhc3MgbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHN0cmluZyB0byB1c2UgZm9yIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSB0ZXh0IGZpZWxkIGlmIHNldCB0byB0cnVlLlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFRoZSBzdHlsZSBvYmplY3QgdG8gdXNlIHRvIG92ZXJyaWRlIGVycm9yIHN0eWxlcy5cbiAgICovXG4gIGVycm9yU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGVycm9yIGNvbnRlbnQgdG8gZGlzcGxheS5cbiAgICovXG4gIGVycm9yVGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGZsb2F0aW5nIGxhYmVsIHdpbGwgZmxvYXQgZXZlbiB3aGVuIHRoZXJlIGlzIG5vIHZhbHVlLlxuICAgKi9cbiAgZmxvYXRpbmdMYWJlbEZpeGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgc3R5bGUgb2JqZWN0IHRvIHVzZSB0byBvdmVycmlkZSBmbG9hdGluZyBsYWJlbCBzdHlsZXMgd2hlbiBmb2N1c2VkLlxuICAgKi9cbiAgZmxvYXRpbmdMYWJlbEZvY3VzU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIHN0eWxlIG9iamVjdCB0byB1c2UgdG8gb3ZlcnJpZGUgZmxvYXRpbmcgbGFiZWwgc3R5bGVzIHdoZW4gc2hydW5rLlxuICAgKi9cbiAgZmxvYXRpbmdMYWJlbFNocmlua1N0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBzdHlsZSBvYmplY3QgdG8gdXNlIHRvIG92ZXJyaWRlIGZsb2F0aW5nIGxhYmVsIHN0eWxlcy5cbiAgICovXG4gIGZsb2F0aW5nTGFiZWxTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCB0byB1c2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBlbGVtZW50LlxuICAgKi9cbiAgZmxvYXRpbmdMYWJlbFRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBmaWVsZCByZWNlaXZlcyB0aGUgcHJvcGVydHkgd2lkdGggMTAwJS5cbiAgICovXG4gIGZ1bGxXaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIFRleHRGaWVsZCdzIGhpbnQgdGV4dCBlbGVtZW50LlxuICAgKi9cbiAgaGludFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBoaW50IGNvbnRlbnQgdG8gZGlzcGxheS5cbiAgICovXG4gIGhpbnRUZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgaWQgcHJvcCBmb3IgdGhlIHRleHQgZmllbGQuXG4gICAqL1xuICBpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgVGV4dEZpZWxkJ3MgaW5wdXQgZWxlbWVudC5cbiAgICogV2hlbiBtdWx0aUxpbmUgaXMgZmFsc2U6IGRlZmluZSB0aGUgc3R5bGUgb2YgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqIFdoZW4gbXVsdGlMaW5lIGlzIHRydWU6IGRlZmluZSB0aGUgc3R5bGUgb2YgdGhlIGNvbnRhaW5lciBvZiB0aGUgdGV4dGFyZWEuXG4gICAqL1xuICBpbnB1dFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIElmIHRydWUsIGEgdGV4dGFyZWEgZWxlbWVudCB3aWxsIGJlIHJlbmRlcmVkLlxuICAgKiBUaGUgdGV4dGFyZWEgYWxzbyBncm93cyBhbmQgc2hyaW5rcyBhY2NvcmRpbmcgdG8gdGhlIG51bWJlciBvZiBsaW5lcy5cbiAgICovXG4gIG11bHRpTGluZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogTmFtZSBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAgICovXG4gIG5hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbkJsdXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgZmlyZWQgd2hlbiB0aGUgdGV4dGZpZWxkJ3MgdmFsdWUgY2hhbmdlcy5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IENoYW5nZSBldmVudCB0YXJnZXRpbmcgdGhlIHRleHQgZmllbGQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdWYWx1ZSBUaGUgbmV3IHZhbHVlIG9mIHRoZSB0ZXh0IGZpZWxkLlxuICAgKi9cbiAgb25DaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Gb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogTnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpTGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuXG4gICAqIG11bHRpTGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzTWF4OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgVGV4dEZpZWxkJ3MgdGV4dGFyZWEgZWxlbWVudC5cbiAgICogVGhlIFRleHRGaWVsZCB1c2UgZWl0aGVyIGEgdGV4dGFyZWEgb3IgYW4gaW5wdXQsXG4gICAqIHRoaXMgcHJvcGVydHkgaGFzIGVmZmVjdHMgb25seSB3aGVuIG11bHRpTGluZSBpcyB0cnVlLlxuICAgKi9cbiAgdGV4dGFyZWFTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIHR5cGUgb2YgaW5wdXQgdG8gZGlzcGxheVxuICAgKiBzdWNoIGFzIFwicGFzc3dvcmRcIiBvciBcInRleHRcIi5cbiAgICovXG4gIHR5cGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlXG4gICAqIFRleHRGaWVsZCdzIHVuZGVybGluZSBlbGVtZW50IHdoZW4gZGlzYWJsZWQuXG4gICAqL1xuICB1bmRlcmxpbmVEaXNhYmxlZFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBUZXh0RmllbGQnc1xuICAgKiB1bmRlcmxpbmUgZWxlbWVudCB3aGVuIGZvY3Vzc2VkLlxuICAgKi9cbiAgdW5kZXJsaW5lRm9jdXNTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBzaG93cyB0aGUgdW5kZXJsaW5lIGZvciB0aGUgdGV4dCBmaWVsZC5cbiAgICovXG4gIHVuZGVybGluZVNob3c6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBUZXh0RmllbGQncyB1bmRlcmxpbmUgZWxlbWVudC5cbiAgICovXG4gIHVuZGVybGluZVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgdGV4dCBmaWVsZC5cbiAgICovXG4gIHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueVxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dEZpZWxkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkLmpzXG4vLyBtb2R1bGUgaWQgPSA5MDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMgNCA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzKSB7XG4gIHZhciBoaW50Q29sb3IgPSBwcm9wcy5tdWlUaGVtZS50ZXh0RmllbGQuaGludENvbG9yLFxuICAgICAgc2hvdyA9IHByb3BzLnNob3c7XG5cblxuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3BhY2l0eTogc2hvdyA/IDEgOiAwLFxuICAgICAgY29sb3I6IGhpbnRDb2xvcixcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgICBib3R0b206IDEyXG4gICAgfVxuICB9O1xufVxuXG52YXIgVGV4dEZpZWxkSGludCA9IGZ1bmN0aW9uIFRleHRGaWVsZEhpbnQocHJvcHMpIHtcbiAgdmFyIHByZXBhcmVTdHlsZXMgPSBwcm9wcy5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIHRleHQgPSBwcm9wcy50ZXh0O1xuXG5cbiAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyhwcm9wcyk7XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yb290LCBzdHlsZSkpIH0sXG4gICAgdGV4dFxuICApO1xufTtcblxuVGV4dEZpZWxkSGludC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFRoZSBtYXRlcmlhbC11aSB0aGVtZSBhcHBsaWVkIHRvIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBoaW50IHRleHQgc2hvdWxkIGJlIHZpc2libGUuXG4gICAqL1xuICBzaG93OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGhpbnQgdGV4dCBkaXNwbGF5ZWQuXG4gICAqL1xuICB0ZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVcbn0gOiB7fTtcblxuVGV4dEZpZWxkSGludC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3c6IHRydWVcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRleHRGaWVsZEhpbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL1RleHRGaWVsZC9UZXh0RmllbGRIaW50LmpzXG4vLyBtb2R1bGUgaWQgPSA5MDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMgNCA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzKSB7XG4gIHZhciBkZWZhdWx0U3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxpbmVIZWlnaHQ6ICcyMnB4JyxcbiAgICB0b3A6IDM4LFxuICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgekluZGV4OiAxLCAvLyBOZWVkZWQgdG8gZGlzcGxheSBsYWJlbCBhYm92ZSBDaHJvbWUncyBhdXRvY29tcGxldGUgZmllbGQgYmFja2dyb3VuZFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpIHRyYW5zbGF0ZSgwLCAwKScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCB0b3AnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZSdcbiAgfTtcblxuICB2YXIgc2hyaW5rU3R5bGVzID0gcHJvcHMuc2hyaW5rID8gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjc1KSB0cmFuc2xhdGUoMCwgLTI4cHgpJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgfSwgcHJvcHMuc2hyaW5rU3R5bGUpIDogbnVsbDtcblxuICByZXR1cm4ge1xuICAgIHJvb3Q6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShkZWZhdWx0U3R5bGVzLCBwcm9wcy5zdHlsZSwgc2hyaW5rU3R5bGVzKVxuICB9O1xufVxuXG52YXIgVGV4dEZpZWxkTGFiZWwgPSBmdW5jdGlvbiBUZXh0RmllbGRMYWJlbChwcm9wcykge1xuICB2YXIgbXVpVGhlbWUgPSBwcm9wcy5tdWlUaGVtZSxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBodG1sRm9yID0gcHJvcHMuaHRtbEZvcixcbiAgICAgIG9uVG91Y2hUYXAgPSBwcm9wcy5vblRvdWNoVGFwO1xuICB2YXIgcHJlcGFyZVN0eWxlcyA9IG11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyhwcm9wcyk7XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdsYWJlbCcsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcyhzdHlsZXMucm9vdCksXG4gICAgICBodG1sRm9yOiBodG1sRm9yLFxuICAgICAgb25Ub3VjaFRhcDogb25Ub3VjaFRhcFxuICAgIH0sXG4gICAgY2hpbGRyZW5cbiAgKTtcbn07XG5cblRleHRGaWVsZExhYmVsLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIFRoZSBsYWJlbCBjb250ZW50cy5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgY3NzIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgbGFiZWwgaWYgc2V0IHRvIHRydWUuXG4gICAqL1xuICBkaXNhYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSB0YXJnZXQgZWxlbWVudCB0aGF0IHRoaXMgbGFiZWwgc2hvdWxkIHJlZmVyIHRvLlxuICAgKi9cbiAgaHRtbEZvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFRoZSBtYXRlcmlhbC11aSB0aGVtZSBhcHBsaWVkIHRvIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmb3Igd2hlbiB0aGUgbGFiZWwgaXMgc2VsZWN0ZWQgdmlhIGEgdG91Y2ggdGFwLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVG91Y2hUYXAgZXZlbnQgdGFyZ2V0aW5nIHRoZSB0ZXh0IGZpZWxkIGxhYmVsLlxuICAgKi9cbiAgb25Ub3VjaFRhcDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgZmxvYXRpbmcgbGFiZWwgc2hvdWxkIHNocmluay5cbiAgICovXG4gIHNocmluazogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudCB3aGVuIHNocnVuay5cbiAgICovXG4gIHNocmlua1N0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcblxuVGV4dEZpZWxkTGFiZWwuZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIHNocmluazogZmFsc2Vcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRleHRGaWVsZExhYmVsO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkTGFiZWwuanNcbi8vIG1vZHVsZSBpZCA9IDkxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgcGFyZW50IGBUZXh0RmllbGRgIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSB1bmRlcmxpbmUgd2hlbiBwYXJlbnQgYFRleHRGaWVsZGAgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIHBhcmVudCBgVGV4dEZpZWxkYCBoYXMgYW4gZXJyb3IuXG4gICAqL1xuICBlcnJvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHVuZGVybGluZSB3aGVuIHBhcmVudCBgVGV4dEZpZWxkYCBoYXMgYW4gZXJyb3IuXG4gICAqL1xuICBlcnJvclN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIHBhcmVudCBgVGV4dEZpZWxkYCBpcyBmb2N1c2VkLlxuICAgKi9cbiAgZm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSB1bmRlcmxpbmUgd2hlbiBwYXJlbnQgYFRleHRGaWVsZGAgaXMgZm9jdXNlZC5cbiAgICovXG4gIGZvY3VzU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBUaGUgbWF0ZXJpYWwtdWkgdGhlbWUgYXBwbGllZCB0byB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBkaXNhYmxlZFN0eWxlOiB7fSxcbiAgZXJyb3I6IGZhbHNlLFxuICBlcnJvclN0eWxlOiB7fSxcbiAgZm9jdXM6IGZhbHNlLFxuICBmb2N1c1N0eWxlOiB7fSxcbiAgc3R5bGU6IHt9XG59O1xuXG52YXIgVGV4dEZpZWxkVW5kZXJsaW5lID0gZnVuY3Rpb24gVGV4dEZpZWxkVW5kZXJsaW5lKHByb3BzKSB7XG4gIHZhciBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzYWJsZWRTdHlsZSA9IHByb3BzLmRpc2FibGVkU3R5bGUsXG4gICAgICBlcnJvciA9IHByb3BzLmVycm9yLFxuICAgICAgZXJyb3JTdHlsZSA9IHByb3BzLmVycm9yU3R5bGUsXG4gICAgICBmb2N1cyA9IHByb3BzLmZvY3VzLFxuICAgICAgZm9jdXNTdHlsZSA9IHByb3BzLmZvY3VzU3R5bGUsXG4gICAgICBtdWlUaGVtZSA9IHByb3BzLm11aVRoZW1lLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZTtcbiAgdmFyIGVycm9yU3R5bGVDb2xvciA9IGVycm9yU3R5bGUuY29sb3I7XG4gIHZhciBwcmVwYXJlU3R5bGVzID0gbXVpVGhlbWUucHJlcGFyZVN0eWxlcyxcbiAgICAgIF9tdWlUaGVtZSR0ZXh0RmllbGQgPSBtdWlUaGVtZS50ZXh0RmllbGQsXG4gICAgICBib3JkZXJDb2xvciA9IF9tdWlUaGVtZSR0ZXh0RmllbGQuYm9yZGVyQ29sb3IsXG4gICAgICBkaXNhYmxlZFRleHRDb2xvciA9IF9tdWlUaGVtZSR0ZXh0RmllbGQuZGlzYWJsZWRUZXh0Q29sb3IsXG4gICAgICBlcnJvckNvbG9yID0gX211aVRoZW1lJHRleHRGaWVsZC5lcnJvckNvbG9yLFxuICAgICAgZm9jdXNDb2xvciA9IF9tdWlUaGVtZSR0ZXh0RmllbGQuZm9jdXNDb2xvcjtcblxuXG4gIHZhciBzdHlsZXMgPSB7XG4gICAgcm9vdDoge1xuICAgICAgYm9yZGVyVG9wOiAnbm9uZScsXG4gICAgICBib3JkZXJMZWZ0OiAnbm9uZScsXG4gICAgICBib3JkZXJSaWdodDogJ25vbmUnLFxuICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgMXB4JyxcbiAgICAgIGJvcmRlckNvbG9yOiBib3JkZXJDb2xvcixcbiAgICAgIGJvdHRvbTogOCxcbiAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIGJvcmRlckJvdHRvbTogJ2RvdHRlZCAycHgnLFxuICAgICAgYm9yZGVyQ29sb3I6IGRpc2FibGVkVGV4dENvbG9yXG4gICAgfSxcbiAgICBmb2N1czoge1xuICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgMnB4JyxcbiAgICAgIGJvcmRlckNvbG9yOiBmb2N1c0NvbG9yLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDApJyxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KClcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBib3JkZXJDb2xvcjogZXJyb3JTdHlsZUNvbG9yID8gZXJyb3JTdHlsZUNvbG9yIDogZXJyb3JDb2xvcixcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgxKSdcbiAgICB9XG4gIH07XG5cbiAgdmFyIHVuZGVybGluZSA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLnJvb3QsIHN0eWxlKTtcbiAgdmFyIGZvY3VzZWRVbmRlcmxpbmUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHVuZGVybGluZSwgc3R5bGVzLmZvY3VzLCBmb2N1c1N0eWxlKTtcblxuICBpZiAoZGlzYWJsZWQpIHVuZGVybGluZSA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgdW5kZXJsaW5lLCBzdHlsZXMuZGlzYWJsZWQsIGRpc2FibGVkU3R5bGUpO1xuICBpZiAoZm9jdXMpIGZvY3VzZWRVbmRlcmxpbmUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIGZvY3VzZWRVbmRlcmxpbmUsIHsgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJyB9KTtcbiAgaWYgKGVycm9yKSBmb2N1c2VkVW5kZXJsaW5lID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBmb2N1c2VkVW5kZXJsaW5lLCBzdHlsZXMuZXJyb3IpO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICBudWxsLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdocicsIHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLCBzdHlsZTogcHJlcGFyZVN0eWxlcyh1bmRlcmxpbmUpIH0pLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdocicsIHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLCBzdHlsZTogcHJlcGFyZVN0eWxlcyhmb2N1c2VkVW5kZXJsaW5lKSB9KVxuICApO1xufTtcblxuVGV4dEZpZWxkVW5kZXJsaW5lLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHByb3BUeXBlcyA6IHt9O1xuVGV4dEZpZWxkVW5kZXJsaW5lLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dEZpZWxkVW5kZXJsaW5lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkVW5kZXJsaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA5MTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMgNCA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRDb2x1bW5Qcm9wcyA9IGdldENvbHVtblByb3BzO1xuZXhwb3J0cy5kZWZhdWx0ID0gQ29sO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2NyZWF0ZVByb3BzID0gcmVxdWlyZSgnLi4vY3JlYXRlUHJvcHMnKTtcblxudmFyIF9jcmVhdGVQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVQcm9wcyk7XG5cbnZhciBfY2xhc3NOYW1lcyA9IHJlcXVpcmUoJy4uL2NsYXNzTmFtZXMnKTtcblxudmFyIF9jbGFzc05hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzTmFtZXMpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZSgnLi4vdHlwZXMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICB4czogX3R5cGVzLkNvbHVtblNpemVUeXBlLFxuICBzbTogX3R5cGVzLkNvbHVtblNpemVUeXBlLFxuICBtZDogX3R5cGVzLkNvbHVtblNpemVUeXBlLFxuICBsZzogX3R5cGVzLkNvbHVtblNpemVUeXBlLFxuICB4c09mZnNldDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHNtT2Zmc2V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgbWRPZmZzZXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBsZ09mZnNldDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGZpcnN0OiBfdHlwZXMuVmlld3BvcnRTaXplVHlwZSxcbiAgbGFzdDogX3R5cGVzLlZpZXdwb3J0U2l6ZVR5cGUsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHRhZ05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlXG59O1xuXG52YXIgY2xhc3NNYXAgPSB7XG4gIHhzOiAnY29sLXhzJyxcbiAgc206ICdjb2wtc20nLFxuICBtZDogJ2NvbC1tZCcsXG4gIGxnOiAnY29sLWxnJyxcbiAgeHNPZmZzZXQ6ICdjb2wteHMtb2Zmc2V0JyxcbiAgc21PZmZzZXQ6ICdjb2wtc20tb2Zmc2V0JyxcbiAgbWRPZmZzZXQ6ICdjb2wtbWQtb2Zmc2V0JyxcbiAgbGdPZmZzZXQ6ICdjb2wtbGctb2Zmc2V0J1xufTtcblxuZnVuY3Rpb24gaXNJbnRlZ2VyKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbHVlKSAmJiBNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldENvbENsYXNzTmFtZXMocHJvcHMpIHtcbiAgdmFyIGV4dHJhQ2xhc3NlcyA9IFtdO1xuXG4gIGlmIChwcm9wcy5jbGFzc05hbWUpIHtcbiAgICBleHRyYUNsYXNzZXMucHVzaChwcm9wcy5jbGFzc05hbWUpO1xuICB9XG5cbiAgaWYgKHByb3BzLmZpcnN0KSB7XG4gICAgZXh0cmFDbGFzc2VzLnB1c2goKDAsIF9jbGFzc05hbWVzMi5kZWZhdWx0KSgnZmlyc3QtJyArIHByb3BzLmZpcnN0KSk7XG4gIH1cblxuICBpZiAocHJvcHMubGFzdCkge1xuICAgIGV4dHJhQ2xhc3Nlcy5wdXNoKCgwLCBfY2xhc3NOYW1lczIuZGVmYXVsdCkoJ2xhc3QtJyArIHByb3BzLmxhc3QpKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3Qua2V5cyhwcm9wcykuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gY2xhc3NNYXBba2V5XTtcbiAgfSkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gKDAsIF9jbGFzc05hbWVzMi5kZWZhdWx0KShpc0ludGVnZXIocHJvcHNba2V5XSkgPyBjbGFzc01hcFtrZXldICsgJy0nICsgcHJvcHNba2V5XSA6IGNsYXNzTWFwW2tleV0pO1xuICB9KS5jb25jYXQoZXh0cmFDbGFzc2VzKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29sdW1uUHJvcHMocHJvcHMpIHtcbiAgcmV0dXJuICgwLCBfY3JlYXRlUHJvcHMyLmRlZmF1bHQpKHByb3BUeXBlcywgcHJvcHMsIGdldENvbENsYXNzTmFtZXMocHJvcHMpKTtcbn1cblxuZnVuY3Rpb24gQ29sKHByb3BzKSB7XG4gIHZhciB0YWdOYW1lID0gcHJvcHMudGFnTmFtZSxcbiAgICAgIGNvbHVtblByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ3RhZ05hbWUnXSk7XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHRhZ05hbWUgfHwgJ2RpdicsIGdldENvbHVtblByb3BzKGNvbHVtblByb3BzKSk7XG59XG5cbkNvbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWZsZXhib3gtZ3JpZC9saWIvY29tcG9uZW50cy9Db2wuanNcbi8vIG1vZHVsZSBpZCA9IDkxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBHcmlkO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2NyZWF0ZVByb3BzID0gcmVxdWlyZSgnLi4vY3JlYXRlUHJvcHMnKTtcblxudmFyIF9jcmVhdGVQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVQcm9wcyk7XG5cbnZhciBfY2xhc3NOYW1lcyA9IHJlcXVpcmUoJy4uL2NsYXNzTmFtZXMnKTtcblxudmFyIF9jbGFzc05hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzTmFtZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICBmbHVpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICB0YWdOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZVxufTtcblxuZnVuY3Rpb24gR3JpZChwcm9wcykge1xuICB2YXIgY29udGFpbmVyQ2xhc3MgPSAoMCwgX2NsYXNzTmFtZXMyLmRlZmF1bHQpKHByb3BzLmZsdWlkID8gJ2NvbnRhaW5lci1mbHVpZCcgOiAnY29udGFpbmVyJyk7XG4gIHZhciBjbGFzc05hbWVzID0gW3Byb3BzLmNsYXNzTmFtZSwgY29udGFpbmVyQ2xhc3NdO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChwcm9wcy50YWdOYW1lIHx8ICdkaXYnLCAoMCwgX2NyZWF0ZVByb3BzMi5kZWZhdWx0KShwcm9wVHlwZXMsIHByb3BzLCBjbGFzc05hbWVzKSk7XG59XG5cbkdyaWQucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL2NvbXBvbmVudHMvR3JpZC5qc1xuLy8gbW9kdWxlIGlkID0gOTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDMgNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0Um93UHJvcHMgPSBnZXRSb3dQcm9wcztcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdztcblxudmFyIF9jbGFzc05hbWVzID0gcmVxdWlyZSgnLi4vY2xhc3NOYW1lcycpO1xuXG52YXIgX2NsYXNzTmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NOYW1lcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfY3JlYXRlUHJvcHMgPSByZXF1aXJlKCcuLi9jcmVhdGVQcm9wcycpO1xuXG52YXIgX2NyZWF0ZVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVByb3BzKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoJy4uL3R5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciByb3dLZXlzID0gWydzdGFydCcsICdjZW50ZXInLCAnZW5kJywgJ3RvcCcsICdtaWRkbGUnLCAnYm90dG9tJywgJ2Fyb3VuZCcsICdiZXR3ZWVuJ107XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIHJldmVyc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgc3RhcnQ6IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICBjZW50ZXI6IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICBlbmQ6IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICB0b3A6IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICBtaWRkbGU6IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICBib3R0b206IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICBhcm91bmQ6IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICBiZXR3ZWVuOiBfdHlwZXMuVmlld3BvcnRTaXplVHlwZSxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdGFnTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVcbn07XG5cbmZ1bmN0aW9uIGdldFJvd0NsYXNzTmFtZXMocHJvcHMpIHtcbiAgdmFyIG1vZGlmaWNhdG9ycyA9IFtwcm9wcy5jbGFzc05hbWUsICgwLCBfY2xhc3NOYW1lczIuZGVmYXVsdCkoJ3JvdycpXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd0tleXMubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIga2V5ID0gcm93S2V5c1tpXTtcbiAgICB2YXIgdmFsdWUgPSBwcm9wc1trZXldO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbW9kaWZpY2F0b3JzLnB1c2goKDAsIF9jbGFzc05hbWVzMi5kZWZhdWx0KShrZXkgKyAnLScgKyB2YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9wcy5yZXZlcnNlKSB7XG4gICAgbW9kaWZpY2F0b3JzLnB1c2goKDAsIF9jbGFzc05hbWVzMi5kZWZhdWx0KSgncmV2ZXJzZScpKTtcbiAgfVxuXG4gIHJldHVybiBtb2RpZmljYXRvcnM7XG59XG5cbmZ1bmN0aW9uIGdldFJvd1Byb3BzKHByb3BzKSB7XG4gIHJldHVybiAoMCwgX2NyZWF0ZVByb3BzMi5kZWZhdWx0KShwcm9wVHlwZXMsIHByb3BzLCBnZXRSb3dDbGFzc05hbWVzKHByb3BzKSk7XG59XG5cbmZ1bmN0aW9uIFJvdyhwcm9wcykge1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocHJvcHMudGFnTmFtZSB8fCAnZGl2JywgZ2V0Um93UHJvcHMocHJvcHMpKTtcbn1cblxuUm93LnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtZmxleGJveC1ncmlkL2xpYi9jb21wb25lbnRzL1Jvdy5qc1xuLy8gbW9kdWxlIGlkID0gOTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDMgNCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmxleGJveGdyaWQuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZsZXhib3hncmlkLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZsZXhib3hncmlkLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZsZXhib3hncmlkL2Rpc3QvZmxleGJveGdyaWQuY3NzXG4vLyBtb2R1bGUgaWQgPSA5MTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMyA0Il0sInNvdXJjZVJvb3QiOiIifQ==