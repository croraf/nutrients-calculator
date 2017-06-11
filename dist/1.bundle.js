webpackJsonp([1],{

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Admin = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _NutrientForm = __webpack_require__(778);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Admin = function (_React$Component) {
    _inherits(Admin, _React$Component);

    function Admin() {
        _classCallCheck(this, Admin);

        return _possibleConstructorReturn(this, (Admin.__proto__ || Object.getPrototypeOf(Admin)).apply(this, arguments));
    }

    _createClass(Admin, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: { padding: '20px', paddingTop: '0px', marginTop: '-10px' } },
                _react2.default.createElement(_NutrientForm.NutrientForm, { onSubmit: function onSubmit(values) {
                        console.log('submitting: ' + JSON.stringify(values));
                    } })
            );
        }
    }]);

    return Admin;
}(_react2.default.Component);

exports.Admin = Admin;

/***/ }),

/***/ 774:
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

var _reactBootstrap = __webpack_require__(187);

var _reduxForm = __webpack_require__(317);

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
            var _props = this.props,
                input = _props.input,
                meta = _props.meta,
                props = _objectWithoutProperties(_props, ['input', 'meta']);

            return _react2.default.createElement(_reactBootstrap.FormControl, _extends({}, input, props));
        }
    }]);

    return FormControlWrapper;
}(_react2.default.Component);

var FieldComponent = function (_React$Component2) {
    _inherits(FieldComponent, _React$Component2);

    function FieldComponent() {
        _classCallCheck(this, FieldComponent);

        return _possibleConstructorReturn(this, (FieldComponent.__proto__ || Object.getPrototypeOf(FieldComponent)).apply(this, arguments));
    }

    _createClass(FieldComponent, [{
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                controlId = _props2.controlId,
                label = _props2.label,
                help = _props2.help,
                props = _objectWithoutProperties(_props2, ['controlId', 'label', 'help']);

            return _react2.default.createElement(
                _reactBootstrap.FormGroup,
                { controlId: controlId },
                _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    label
                ),
                _react2.default.createElement(_reduxForm.Field, _extends({ name: controlId, component: FormControlWrapper }, props)),
                help && _react2.default.createElement(
                    _reactBootstrap.HelpBlock,
                    null,
                    help
                )
            );
        }
    }]);

    return FieldComponent;
}(_react2.default.Component);

exports.FieldComponent = FieldComponent;

/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CarbohidratesComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(187);

var _FieldComponent = __webpack_require__(774);

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
                _reactBootstrap.Row,
                null,
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 3 },
                    _react2.default.createElement(_FieldComponent.FieldComponent, {
                        controlId: 'Carbohidrates',
                        type: 'text',
                        label: 'Carbohidrates',
                        placeholder: 'Enter text' })
                ),
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 9 },
                    _react2.default.createElement(
                        _reactBootstrap.Col,
                        { xs: 4 },
                        _react2.default.createElement(_FieldComponent.FieldComponent, {
                            controlId: 'AA1',
                            type: 'text',
                            label: 'AA1',
                            placeholder: 'Enter text' })
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Col,
                        { xs: 4 },
                        _react2.default.createElement(_FieldComponent.FieldComponent, {
                            controlId: 'AA1',
                            type: 'text',
                            label: 'AA1',
                            placeholder: 'Enter text' })
                    )
                )
            );
        }
    }]);

    return CarbohidratesComponent;
}(_react2.default.Component);

exports.CarbohidratesComponent = CarbohidratesComponent;

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FatsComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(187);

var _FieldComponent = __webpack_require__(774);

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
                _reactBootstrap.Row,
                null,
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 3 },
                    _react2.default.createElement(_FieldComponent.FieldComponent, {
                        controlId: 'Fats',
                        type: 'text',
                        label: 'Fats',
                        placeholder: 'Enter text' })
                ),
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 9 },
                    _react2.default.createElement(
                        _reactBootstrap.Col,
                        { xs: 4 },
                        _react2.default.createElement(_FieldComponent.FieldComponent, {
                            controlId: 'AA1',
                            type: 'text',
                            label: 'AA1',
                            placeholder: 'Enter text' })
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Col,
                        { xs: 4 },
                        _react2.default.createElement(_FieldComponent.FieldComponent, {
                            controlId: 'AA1',
                            type: 'text',
                            label: 'AA1',
                            placeholder: 'Enter text' })
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Col,
                        { xs: 4 },
                        _react2.default.createElement(_FieldComponent.FieldComponent, {
                            controlId: 'AA1',
                            type: 'text',
                            label: 'AA1',
                            placeholder: 'Enter text' })
                    )
                )
            );
        }
    }]);

    return FatsComponent;
}(_react2.default.Component);

exports.FatsComponent = FatsComponent;

/***/ }),

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NutrientForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(317);

var _reactBootstrap = __webpack_require__(187);

var _FieldComponent = __webpack_require__(774);

var _ProteinsComponent = __webpack_require__(779);

var _FatsComponent = __webpack_require__(777);

var _CarbohidratesComponent = __webpack_require__(776);

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
                    _reactBootstrap.Grid,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 12, xsOffset: 0 },
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
                        _reactBootstrap.Row,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 12, xsOffset: 0 },
                            _react2.default.createElement(_FieldComponent.FieldComponent, {
                                controlId: 'Source',
                                type: 'text',
                                label: 'Source link',
                                placeholder: 'Enter text' })
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        null,
                        _react2.default.createElement(
                            'div',
                            { style: { display: 'flex', justifyContent: 'center' } },
                            _react2.default.createElement(
                                _reactBootstrap.Button,
                                { type: 'submit', disabled: !this.props.dirty },
                                'Save nutrient'
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Button,
                                { type: 'button', disabled: !this.props.dirty, onClick: this.props.reset },
                                'Cancel'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return NutrientForm;
}(_react2.default.Component);

var initialValues = {};

var NutrientFormReduxWrapper = (0, _reduxForm.reduxForm)({
    form: 'manageNutrients',
    destroyOnUnmount: true,
    initialValues: initialValues
})(NutrientForm);

exports.NutrientForm = NutrientFormReduxWrapper;

/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProteinsComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(187);

var _FieldComponent = __webpack_require__(774);

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
                _reactBootstrap.Row,
                null,
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 3 },
                    _react2.default.createElement(_FieldComponent.FieldComponent, {
                        controlId: 'Proteins',
                        type: 'text',
                        label: 'Proteins',
                        placeholder: 'Enter text' })
                ),
                _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 9 },
                    _react2.default.createElement(
                        _reactBootstrap.Col,
                        { xs: 4 },
                        _react2.default.createElement(_FieldComponent.FieldComponent, {
                            controlId: 'AA1',
                            type: 'text',
                            label: 'AA1',
                            placeholder: 'Enter text' }),
                        _react2.default.createElement(_FieldComponent.FieldComponent, {
                            controlId: 'AA2',
                            type: 'text',
                            label: 'AA2',
                            placeholder: 'Enter text' }),
                        _react2.default.createElement(_FieldComponent.FieldComponent, {
                            controlId: 'AA3',
                            type: 'text',
                            label: 'AA3',
                            placeholder: 'Enter text' }),
                        _react2.default.createElement(_FieldComponent.FieldComponent, {
                            controlId: 'AA4',
                            type: 'text',
                            label: 'AA4',
                            placeholder: 'Enter text' })
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Col,
                        { xs: 4 },
                        _react2.default.createElement(_FieldComponent.FieldComponent, {
                            controlId: 'AA1',
                            type: 'text',
                            label: 'AA1',
                            placeholder: 'Enter text' }),
                        _react2.default.createElement(_FieldComponent.FieldComponent, {
                            controlId: 'AA2',
                            type: 'text',
                            label: 'AA2',
                            placeholder: 'Enter text' }),
                        _react2.default.createElement(_FieldComponent.FieldComponent, {
                            controlId: 'AA3',
                            type: 'text',
                            label: 'AA3',
                            placeholder: 'Enter text' }),
                        _react2.default.createElement(_FieldComponent.FieldComponent, {
                            controlId: 'AA4',
                            type: 'text',
                            label: 'AA4',
                            placeholder: 'Enter text' })
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Col,
                        { xs: 4 },
                        _react2.default.createElement(_FieldComponent.FieldComponent, {
                            controlId: 'AA1',
                            type: 'text',
                            label: 'AA1',
                            placeholder: 'Enter text' }),
                        _react2.default.createElement(_FieldComponent.FieldComponent, {
                            controlId: 'AA2',
                            type: 'text',
                            label: 'AA2',
                            placeholder: 'Enter text' }),
                        _react2.default.createElement(_FieldComponent.FieldComponent, {
                            controlId: 'AA3',
                            type: 'text',
                            label: 'AA3',
                            placeholder: 'Enter text' }),
                        _react2.default.createElement(_FieldComponent.FieldComponent, {
                            controlId: 'AA4',
                            type: 'text',
                            label: 'AA4',
                            placeholder: 'Enter text' })
                    )
                )
            );
        }
    }]);

    return ProteinsComponent;
}(_react2.default.Component);

exports.ProteinsComponent = ProteinsComponent;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL0FkbWluL0FkbWluLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvQWRtaW4vTnV0cmllbnRGb3JtL0ZpZWxkQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvQWRtaW4vTnV0cmllbnRGb3JtL0NhcmJvaGlkcmF0ZXNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9BZG1pbi9OdXRyaWVudEZvcm0vRmF0c0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL0FkbWluL051dHJpZW50Rm9ybS9OdXRyaWVudEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9BZG1pbi9OdXRyaWVudEZvcm0vUHJvdGVpbnNDb21wb25lbnQuanMiXSwibmFtZXMiOlsiQWRtaW4iLCJwYWRkaW5nIiwicGFkZGluZ1RvcCIsIm1hcmdpblRvcCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiQ29tcG9uZW50IiwiRm9ybUNvbnRyb2xXcmFwcGVyIiwicHJvcHMiLCJpbnB1dCIsIm1ldGEiLCJGaWVsZENvbXBvbmVudCIsImNvbnRyb2xJZCIsImxhYmVsIiwiaGVscCIsIkNhcmJvaGlkcmF0ZXNDb21wb25lbnQiLCJGYXRzQ29tcG9uZW50IiwiTnV0cmllbnRGb3JtIiwiaGFuZGxlU3VibWl0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZGlydHkiLCJyZXNldCIsImluaXRpYWxWYWx1ZXMiLCJOdXRyaWVudEZvcm1SZWR1eFdyYXBwZXIiLCJmb3JtIiwiZGVzdHJveU9uVW5tb3VudCIsIlByb3RlaW5zQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7Ozs7Ozs7O0lBRU1BLEs7Ozs7Ozs7Ozs7O2lDQUNRO0FBQ04sbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLE9BQU8sRUFBQ0Ms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VjtBQUlJLHlDQUFZLFlBSmhCLEdBREo7QUFNSTtBQUNJLHVDQUFVLEtBRGQ7QUFFSSxrQ0FBSyxNQUZUO0FBR0ksbUNBQU0sS0FIVjtBQUlJLHlDQUFZLFlBSmhCLEdBTko7QUFXSTtBQUNJLHVDQUFVLEtBRGQ7QUFFSSxrQ0FBSyxNQUZUO0FBR0ksbUNBQU0sS0FIVjtBQUlJLHlDQUFZLFlBSmhCLEdBWEo7QUFnQkk7QUFDSSx1Q0FBVSxLQURkO0FBRUksa0NBQUssTUFGVDtBQUdJLG1DQUFNLEtBSFY7QUFJSSx5Q0FBWSxZQUpoQjtBQWhCSixxQkF4Qko7QUErQ0k7QUFBQTtBQUFBLDBCQUFLLElBQUksQ0FBVDtBQUVJO0FBQ0ksdUNBQVUsS0FEZDtBQUVJLGtDQUFLLE1BRlQ7QUFHSSxtQ0FBTSxLQUhWO0FBSUkseUNBQVksWUFKaEIsR0FGSjtBQU9JO0FBQ0ksdUNBQVUsS0FEZDtBQUVJLGtDQUFLLE1BRlQ7QUFHSSxtQ0FBTSxLQUhWO0FBSUkseUNBQVksWUFKaEIsR0FQSjtBQVlJO0FBQ0ksdUNBQVUsS0FEZDtBQUVJLGtDQUFLLE1BRlQ7QUFHSSxtQ0FBTSxLQUhWO0FBSUkseUNBQVksWUFKaEIsR0FaSjtBQWlCSTtBQUNJLHVDQUFVLEtBRGQ7QUFFSSxrQ0FBSyxNQUZUO0FBR0ksbUNBQU0sS0FIVjtBQUlJLHlDQUFZLFlBSmhCO0FBakJKO0FBL0NKO0FBUkosYUFGSjtBQW9GSDs7OztFQXRGMkIsZ0JBQU1yQixTOztRQXlGOUJxQixpQixHQUFBQSxpQiIsImZpbGUiOiIxLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge051dHJpZW50Rm9ybX0gZnJvbSAnLi9OdXRyaWVudEZvcm0vTnV0cmllbnRGb3JtJztcclxuXHJcbmNsYXNzIEFkbWluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6ICcyMHB4JywgcGFkZGluZ1RvcDogJzBweCcsIG1hcmdpblRvcDogJy0xMHB4J319PlxyXG4gICAgICAgICAgICAgICAgPE51dHJpZW50Rm9ybSBvblN1Ym1pdD17KHZhbHVlcykgPT4ge2NvbnNvbGUubG9nKCdzdWJtaXR0aW5nOiAnICsgSlNPTi5zdHJpbmdpZnkodmFsdWVzKSk7fX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtBZG1pbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy9BZG1pbi9BZG1pbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge0Zvcm1Hcm91cCwgQ29udHJvbExhYmVsLCBGb3JtQ29udHJvbCwgSGVscEJsb2NrfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQge0ZpZWxkfSBmcm9tICdyZWR1eC1mb3JtJztcclxuXHJcbmNsYXNzIEZvcm1Db250cm9sV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIgKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7aW5wdXQsIG1ldGEsIC4uLnByb3BzfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCB7Li4uaW5wdXR9IHsuLi5wcm9wc30gLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBGaWVsZENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB7IGNvbnRyb2xJZCwgbGFiZWwsIGhlbHAsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNvbnRyb2xJZD17Y29udHJvbElkfT5cclxuICAgICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+e2xhYmVsfTwvQ29udHJvbExhYmVsPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9e2NvbnRyb2xJZH0gY29tcG9uZW50PXtGb3JtQ29udHJvbFdyYXBwZXJ9IHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIHtoZWxwICYmIDxIZWxwQmxvY2s+e2hlbHB9PC9IZWxwQmxvY2s+fVxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtGaWVsZENvbXBvbmVudH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy9BZG1pbi9OdXRyaWVudEZvcm0vRmllbGRDb21wb25lbnQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1JvdywgQ29sfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0IHtGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9GaWVsZENvbXBvbmVudCc7XHJcblxyXG5jbGFzcyBDYXJib2hpZHJhdGVzQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J0NhcmJvaGlkcmF0ZXMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdDYXJib2hpZHJhdGVzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCcgLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17OX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17NH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD0nQUExJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdBQTEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCcgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J0FBMSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQUExJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtDYXJib2hpZHJhdGVzQ29tcG9uZW50fTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL0FkbWluL051dHJpZW50Rm9ybS9DYXJib2hpZHJhdGVzQ29tcG9uZW50LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtSb3csIENvbH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCB7RmllbGRDb21wb25lbnR9IGZyb20gJy4vRmllbGRDb21wb25lbnQnO1xyXG5cclxuY2xhc3MgRmF0c0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8RmllbGRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdGYXRzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRmF0cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezR9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J0FBMSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQUExJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdBQTEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0FBMSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXs0fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdBQTEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0FBMSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7RmF0c0NvbXBvbmVudH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy9BZG1pbi9OdXRyaWVudEZvcm0vRmF0c0NvbXBvbmVudC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge3JlZHV4Rm9ybX0gZnJvbSAncmVkdXgtZm9ybSc7XHJcbmltcG9ydCB7LypDaGVja2JveCwgUmFkaW8sICovQnV0dG9uLCBHcmlkLCBSb3csIENvbH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCB7RmllbGRDb21wb25lbnR9IGZyb20gJy4vRmllbGRDb21wb25lbnQnO1xyXG4vKmltcG9ydCB7RGVib3VuY2VGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9EZWJvdW5jZUZpZWxkQ29tcG9uZW50JzsqL1xyXG5pbXBvcnQge1Byb3RlaW5zQ29tcG9uZW50fSBmcm9tICcuL1Byb3RlaW5zQ29tcG9uZW50JztcclxuaW1wb3J0IHtGYXRzQ29tcG9uZW50fSBmcm9tICcuL0ZhdHNDb21wb25lbnQnO1xyXG5pbXBvcnQge0NhcmJvaGlkcmF0ZXNDb21wb25lbnR9IGZyb20gJy4vQ2FyYm9oaWRyYXRlc0NvbXBvbmVudCc7XHJcblxyXG5jbGFzcyBOdXRyaWVudEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMucHJvcHMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSB4c09mZnNldD17MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J25hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nTnV0cmllbnQgbmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm90ZWluc0NvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYXRzQ29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmJvaGlkcmF0ZXNDb21wb25lbnQgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHhzT2Zmc2V0PXswfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD0nU291cmNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1NvdXJjZSBsaW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8RmllbGRDb21wb25lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdmb3JtQ29udHJvbHNTZWxlY3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1NlbGVjdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRDbGFzcz0nc2VsZWN0JyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J3NlbGVjdCc+c2VsZWN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J290aGVyJz4uLi48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGRDb21wb25lbnQ+Ki99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPEZpZWxkQ29tcG9uZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD0nZm9ybUNvbnRyb2xzU2VsZWN0TXVsdGlwbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1NlbGVjdE11bHRpcGxlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudENsYXNzPSdzZWxlY3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU9e3RydWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdzZWxlY3QnPnNlbGVjdC1tdWx0aXBsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSdvdGhlcic+Li4uPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkQ29tcG9uZW50PiovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxGaWVsZENvbXBvbmVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J2Zvcm1Db250cm9sc1RleHRhcmVhJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdUZXh0YXJlYSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRDbGFzcz0ndGV4dGFyZWEnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSd0ZXh0YXJlYScgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVib3VuY2VGaWVsZENvbXBvbmVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J2Zvcm1Db250cm9sc0RlYm91bmNlSW5wdXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0RlYm91bmNlIElucHV0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudENsYXNzPSdpbnB1dCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2lucHV0JyAvPiovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxGaWVsZENvbXBvbmVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J2Zvcm1Db250cm9sc1N0YXRpYydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nU3RhdGljIHRleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Q2xhc3M9J3N0YXRpYydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxAZXhhbXBsZS5jb21cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmllbGRDb21wb25lbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbExhYmVsPlN0YXRpYyB0ZXh0PC9Db250cm9sTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sLlN0YXRpYz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWxAZXhhbXBsZS5jb21cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sLlN0YXRpYz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPiovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIGRpc2FibGVkPXshdGhpcy5wcm9wcy5kaXJ0eX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZSBudXRyaWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J2J1dHRvbicgZGlzYWJsZWQ9eyF0aGlzLnByb3BzLmRpcnR5fSBvbkNsaWNrPXt0aGlzLnByb3BzLnJlc2V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxWYWx1ZXMgPSB7XHJcbn07XHJcblxyXG5jb25zdCBOdXRyaWVudEZvcm1SZWR1eFdyYXBwZXIgPSByZWR1eEZvcm0oe1xyXG4gICAgZm9ybTogJ21hbmFnZU51dHJpZW50cycsXHJcbiAgICBkZXN0cm95T25Vbm1vdW50OiB0cnVlLFxyXG4gICAgaW5pdGlhbFZhbHVlczogaW5pdGlhbFZhbHVlc1xyXG59KShOdXRyaWVudEZvcm0pO1xyXG5cclxuZXhwb3J0IHtOdXRyaWVudEZvcm1SZWR1eFdyYXBwZXIgYXMgTnV0cmllbnRGb3JtfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL0FkbWluL051dHJpZW50Rm9ybS9OdXRyaWVudEZvcm0uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1JvdywgQ29sfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0IHtGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9GaWVsZENvbXBvbmVudCc7XHJcblxyXG5jbGFzcyBQcm90ZWluc0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpZWxkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD0nUHJvdGVpbnMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdQcm90ZWlucydcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezR9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J0FBMSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQUExJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdBQTInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0FBMidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD0nQUEzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdBQTMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J0FBNCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQUE0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdBQTEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0FBMSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD0nQUEyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdBQTInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J0FBMydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQUEzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdBQTQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0FBNCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXs0fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdBQTEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0FBMSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD0nQUEyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdBQTInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J0FBMydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQUEzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdBQTQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0FBNCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1Byb3RlaW5zQ29tcG9uZW50fTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcm91dGVzL0FkbWluL051dHJpZW50Rm9ybS9Qcm90ZWluc0NvbXBvbmVudC5qcyJdLCJzb3VyY2VSb290IjoiIn0=