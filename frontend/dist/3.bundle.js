webpackJsonp([3],{

/***/ 1027:
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

var _reactEventListener = __webpack_require__(293);

var _reactEventListener2 = _interopRequireDefault(_reactEventListener);

var _keycode = __webpack_require__(181);

var _keycode2 = _interopRequireDefault(_keycode);

var _transitions = __webpack_require__(24);

var _transitions2 = _interopRequireDefault(_transitions);

var _Overlay = __webpack_require__(1030);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _RenderToLayer = __webpack_require__(297);

var _RenderToLayer2 = _interopRequireDefault(_RenderToLayer);

var _Paper = __webpack_require__(103);

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
TransitionItem.propTypes = undefined !== "production" ? {
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
DialogInline.propTypes = undefined !== "production" ? {
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
Dialog.propTypes = undefined !== "production" ? {
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

/***/ }),

/***/ 1028:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Dialog = __webpack_require__(1027);

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Dialog2.default;

/***/ }),

/***/ 1029:
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

var _react = __webpack_require__(0);

var _propTypes = __webpack_require__(1);

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

AutoLockScrolling.propTypes = undefined !== "production" ? {
  lock: _propTypes2.default.bool.isRequired
} : {};
exports.default = AutoLockScrolling;

/***/ }),

/***/ 1030:
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

var _AutoLockScrolling = __webpack_require__(1029);

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
Overlay.propTypes = undefined !== "production" ? {
  autoLockScrolling: _propTypes2.default.bool,
  show: _propTypes2.default.bool.isRequired,
  /**
   * Override the inline-styles of the root element.
   */
  style: _propTypes2.default.object,
  transitionEnabled: _propTypes2.default.bool
} : {};
exports.default = Overlay;

/***/ }),

/***/ 1045:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateIngredient = exports.deleteIngredient = exports.editIngredient = exports.saveIngredient = undefined;

var _fetchResourceFromBackend = __webpack_require__(107);

var _ingredients = __webpack_require__(301);

var _defineIngredientDialogue = __webpack_require__(296);

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

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Admin = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FloatingActionButton = __webpack_require__(1526);

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

var _Dialog = __webpack_require__(1028);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _FlatButton = __webpack_require__(923);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _add = __webpack_require__(1542);

var _add2 = _interopRequireDefault(_add);

var _NutrientForm = __webpack_require__(1188);

var _IngredientsListContainer = __webpack_require__(1184);

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

/***/ 1183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IngredientsList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _List = __webpack_require__(1527);

var _inbox = __webpack_require__(1543);

var _inbox2 = _interopRequireDefault(_inbox);

var _Paper = __webpack_require__(103);

var _Paper2 = _interopRequireDefault(_Paper);

var _RightIconMenu = __webpack_require__(1190);

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

/***/ 1184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IngredientsListContainer = undefined;

var _reactRedux = __webpack_require__(30);

var _IngredientsList = __webpack_require__(1183);

var _ingredientsAdmin = __webpack_require__(1045);

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

/***/ 1185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CarbohidratesComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFlexboxGrid = __webpack_require__(770);

var _FieldComponent = __webpack_require__(949);

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

/***/ 1186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FatsComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFlexboxGrid = __webpack_require__(770);

var _FieldComponent = __webpack_require__(949);

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

/***/ 1187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FormControlWrapperContainer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(30);

var _TextField = __webpack_require__(778);

var _TextField2 = _interopRequireDefault(_TextField);

var _AutoComplete = __webpack_require__(1520);

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

/***/ 1188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NutrientForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(30);

var _reduxForm = __webpack_require__(294);

var _RaisedButton = __webpack_require__(784);

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _FieldComponent = __webpack_require__(949);

var _ProteinsComponent = __webpack_require__(1189);

var _FatsComponent = __webpack_require__(1186);

var _CarbohidratesComponent = __webpack_require__(1185);

var _reactFlexboxGrid = __webpack_require__(770);

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

/***/ 1189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProteinsComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFlexboxGrid = __webpack_require__(770);

var _FieldComponent = __webpack_require__(949);

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

/***/ 1190:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RightIconMenu = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = __webpack_require__(105);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _moreVert = __webpack_require__(1547);

var _moreVert2 = _interopRequireDefault(_moreVert);

var _IconMenu = __webpack_require__(305);

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _MenuItem = __webpack_require__(295);

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

/***/ 1519:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(16);

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = __webpack_require__(108);

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _keycode = __webpack_require__(181);

var _keycode2 = _interopRequireDefault(_keycode);

var _TextField = __webpack_require__(778);

var _TextField2 = _interopRequireDefault(_TextField);

var _Menu = __webpack_require__(1529);

var _Menu2 = _interopRequireDefault(_Menu);

var _MenuItem = __webpack_require__(295);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Divider = __webpack_require__(1522);

var _Divider2 = _interopRequireDefault(_Divider);

var _Popover = __webpack_require__(183);

var _Popover2 = _interopRequireDefault(_Popover);

var _propTypes3 = __webpack_require__(33);

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
AutoComplete.propTypes = undefined !== "production" ? {
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

/***/ }),

/***/ 1520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _AutoComplete = __webpack_require__(1519);

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AutoComplete2.default;

/***/ }),

/***/ 1521:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(16);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(15);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _simpleAssign = __webpack_require__(12);

var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

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

Divider.propTypes = undefined !== "production" ? {
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

/***/ }),

/***/ 1522:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Divider = __webpack_require__(1521);

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Divider2.default;

/***/ }),

/***/ 1525:
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

var _FontIcon = __webpack_require__(304);

var _FontIcon2 = _interopRequireDefault(_FontIcon);

var _Paper = __webpack_require__(103);

var _Paper2 = _interopRequireDefault(_Paper);

var _childUtils = __webpack_require__(310);

var _warning = __webpack_require__(18);

var _warning2 = _interopRequireDefault(_warning);

var _propTypes3 = __webpack_require__(33);

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
      undefined !== "production" ? (0, _warning2.default)(!this.props.iconClassName || !this.props.children, 'Material-UI: You have set both an iconClassName and a child icon. ' + 'It is recommended you use only one method when adding ' + 'icons to FloatingActionButtons.') : void 0;
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
FloatingActionButton.propTypes = undefined !== "production" ? {
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

/***/ }),

/***/ 1526:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _FloatingActionButton = __webpack_require__(1525);

var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FloatingActionButton2.default;

/***/ }),

/***/ 1527:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.makeSelectable = exports.ListItem = exports.List = undefined;

var _List2 = __webpack_require__(186);

var _List3 = _interopRequireDefault(_List2);

var _ListItem2 = __webpack_require__(306);

var _ListItem3 = _interopRequireDefault(_ListItem2);

var _makeSelectable2 = __webpack_require__(1528);

var _makeSelectable3 = _interopRequireDefault(_makeSelectable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.List = _List3.default;
exports.ListItem = _ListItem3.default;
exports.makeSelectable = _makeSelectable3.default;
exports.default = _List3.default;

/***/ }),

/***/ 1528:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectable = undefined;

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

var _colorManipulator = __webpack_require__(104);

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

/***/ 1529:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MenuItem = exports.Menu = undefined;

var _Menu2 = __webpack_require__(182);

var _Menu3 = _interopRequireDefault(_Menu2);

var _MenuItem2 = __webpack_require__(295);

var _MenuItem3 = _interopRequireDefault(_MenuItem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Menu = _Menu3.default;
exports.MenuItem = _MenuItem3.default;
exports.default = _Menu3.default;

/***/ }),

/***/ 1542:
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

/***/ 1543:
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

/***/ 1547:
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

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AdminContainer = undefined;

var _reactRedux = __webpack_require__(30);

var _reduxForm = __webpack_require__(294);

var _defineIngredientDialogue = __webpack_require__(296);

var _ingredientsAdmin = __webpack_require__(1045);

var _Admin = __webpack_require__(1182);

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

/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _FlatButton = __webpack_require__(943);

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _FlatButton2.default;

/***/ }),

/***/ 943:
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

var _FlatButtonLabel = __webpack_require__(944);

var _FlatButtonLabel2 = _interopRequireDefault(_FlatButtonLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateLabel(props, propName, componentName) {
  if (undefined !== 'production') {
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
FlatButton.propTypes = undefined !== "production" ? {
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

/***/ }),

/***/ 944:
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
FlatButtonLabel.propTypes = undefined !== "production" ? {
  label: _propTypes2.default.node,
  style: _propTypes2.default.object
} : {};
exports.default = FlatButtonLabel;

/***/ }),

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FieldComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(294);

var _FormControlWrapperContainer = __webpack_require__(1187);

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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0RpYWxvZy9EaWFsb2cuanM/ODlhNCIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0RpYWxvZy9pbmRleC5qcz84N2M4Iiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvaW50ZXJuYWwvQXV0b0xvY2tTY3JvbGxpbmcuanM/ZTQ4MCIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL2ludGVybmFsL092ZXJsYXkuanM/ZWZlYSIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbmdyZWRpZW50c0FkbWluLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvQWRtaW4vQWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9BZG1pbi9JbmdyZWRpZW50c0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9BZG1pbi9JbmdyZWRpZW50c0xpc3RDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9BZG1pbi9OdXRyaWVudEZvcm0vQ2FyYm9oaWRyYXRlc0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL0FkbWluL051dHJpZW50Rm9ybS9GYXRzQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvQWRtaW4vTnV0cmllbnRGb3JtL0Zvcm1Db250cm9sV3JhcHBlckNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL0FkbWluL051dHJpZW50Rm9ybS9OdXRyaWVudEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9BZG1pbi9OdXRyaWVudEZvcm0vUHJvdGVpbnNDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9BZG1pbi9SaWdodEljb25NZW51LmpzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvQXV0b0NvbXBsZXRlL0F1dG9Db21wbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0F1dG9Db21wbGV0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0RpdmlkZXIvRGl2aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0RpdmlkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9GbG9hdGluZ0FjdGlvbkJ1dHRvbi9GbG9hdGluZ0FjdGlvbkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0Zsb2F0aW5nQWN0aW9uQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvTGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL0xpc3QvbWFrZVNlbGVjdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9NZW51L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvc3ZnLWljb25zL2NvbnRlbnQvYWRkLmpzIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvc3ZnLWljb25zL2NvbnRlbnQvaW5ib3guanMiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9tb3JlLXZlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9BZG1pbi9BZG1pbkNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzP2RhMDQqKiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWZsZXhib3gtZ3JpZC9saWIvY2xhc3NOYW1lcy5qcz9mNTZhKiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWZsZXhib3gtZ3JpZC9saWIvY3JlYXRlUHJvcHMuanM/YjJjMioiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzP2I5ODAqKiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWZsZXhib3gtZ3JpZC9saWIvaW5kZXguanM/MjljMSoiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL3R5cGVzLmpzPzhiOWMqIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL2luZGV4LmpzPzc0NzciLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9SYWlzZWRCdXR0b24vaW5kZXguanM/OGU5NSIsIndlYnBhY2s6Ly8vLi9+L2ZsZXhib3hncmlkL2Rpc3QvZmxleGJveGdyaWQuY3NzP2M4NGIqIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvUmFpc2VkQnV0dG9uL1JhaXNlZEJ1dHRvbi5qcz84NGZkIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL0VuaGFuY2VkVGV4dGFyZWEuanM/NmFmMiIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1RleHRGaWVsZC9UZXh0RmllbGQuanM/YmE1YiIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1RleHRGaWVsZC9UZXh0RmllbGRIaW50LmpzPzE4MjUiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkTGFiZWwuanM/YjhmMSIsIndlYnBhY2s6Ly8vLi9+L21hdGVyaWFsLXVpL1RleHRGaWVsZC9UZXh0RmllbGRVbmRlcmxpbmUuanM/YTM5MCIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWZsZXhib3gtZ3JpZC9saWIvY29tcG9uZW50cy9Db2wuanM/NmIxMioiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL2NvbXBvbmVudHMvR3JpZC5qcz9mMmViKiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWZsZXhib3gtZ3JpZC9saWIvY29tcG9uZW50cy9Sb3cuanM/NzZiOCoiLCJ3ZWJwYWNrOi8vLy4vfi9mbGV4Ym94Z3JpZC9kaXN0L2ZsZXhib3hncmlkLmNzcz80Yjg5KioiLCJ3ZWJwYWNrOi8vLy4vfi9tYXRlcmlhbC11aS9GbGF0QnV0dG9uL2luZGV4LmpzP2M1NmYqIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvRmxhdEJ1dHRvbi9GbGF0QnV0dG9uLmpzP2NmZTQqIiwid2VicGFjazovLy8uL34vbWF0ZXJpYWwtdWkvRmxhdEJ1dHRvbi9GbGF0QnV0dG9uTGFiZWwuanM/MDA4MSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9BZG1pbi9OdXRyaWVudEZvcm0vRmllbGRDb21wb25lbnQuanMiXSwibmFtZXMiOlsic2F2ZUluZ3JlZGllbnQiLCJpbmdyZWRpZW50IiwiZGlzcGF0Y2giLCJ0eXBlIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzdWx0IiwiaW5ncmVkaWVudElkIiwidXBkYXRlSW5ncmVkaWVudCIsImRlbGV0ZUluZ3JlZGllbnQiLCJlZGl0SW5ncmVkaWVudCIsImJ1dHRvbk91dGVyU3R5bGUiLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0IiwiekluZGV4IiwiQWRtaW4iLCJoYW5kbGVTYXZlU3VibWl0IiwidmFsdWVzIiwicHJvcHMiLCJlZGl0SWQiLCJvcGVuRGlhbG9ndWUiLCJjbG9zZURpYWxvZ3VlIiwic2F2ZURpYWxvZ3VlIiwib3BlbiIsImluaXRpYWxWYWx1ZXMiLCJhY3Rpb25zIiwicGFkZGluZyIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYm9vbCIsIm9iamVjdCIsIkluZ3JlZGllbnRzTGlzdCIsImluZ3JlZGllbnRzIiwiYm9yZGVyIiwidGV4dEFsaWduIiwibWFyZ2luIiwibWFyZ2luVG9wIiwiaGVpZ2h0Iiwib3ZlcmZsb3dZIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInJldmVyc2UiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJpZCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiSW5ncmVkaWVudHNMaXN0Q29udGFpbmVyIiwiQ2FyYm9oaWRyYXRlc0NvbXBvbmVudCIsIkZhdHNDb21wb25lbnQiLCJGb3JtQ29udHJvbFdyYXBwZXIiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiaW5wdXQiLCJtZXRhIiwiZGF0YVNvdXJjZSIsIm5hbWUiLCJtYXRjaCIsInZpc2l0ZWQiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsIkZvcm1Db250cm9sV3JhcHBlckNvbnRhaW5lciIsIk51dHJpZW50Rm9ybSIsImhhbmRsZVN1Ym1pdCIsIk51dHJpZW50Rm9ybVJlZHV4V3JhcHBlciIsImZvcm0iLCJkZXN0cm95T25Vbm1vdW50IiwiUHJvdGVpbnNDb21wb25lbnQiLCJpY29uQnV0dG9uRWxlbWVudCIsIlJpZ2h0SWNvbk1lbnUiLCJlZGl0SGFuZGxlciIsImVsZW1lbnRLZXkiLCJkZWxldGVIYW5kbGVyIiwiZGVmaW5lSW5ncmVkaWVudERpYWxvZ3VlIiwiQWRtaW5Db250YWluZXIiLCJGaWVsZENvbXBvbmVudCIsImNvbnRyb2xJZCIsImhlbHAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsbUVBQW1FLGFBQWE7QUFDaEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVAsb0RBQW9EO0FBQ3BEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUCxvREFBb0Q7QUFDcEQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxpQ0FBaUMsVUFBVSxvREFBb0QsNkJBQTZCO0FBQzVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxzRUFBc0UsZUFBZTtBQUNyRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLHNGQUFzRjtBQUMvRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxXQUFXLGdFQUFnRTtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsMERBQTBEO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHNFQUFzRSxlQUFlO0FBQ3JGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsb0VBQW9FO0FBQ3pJO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCx5Qjs7Ozs7Ozs7QUNsbEJBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLG1DOzs7Ozs7OztBQ2JBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsb0M7Ozs7Ozs7O0FDM0hBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVB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QTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsbUVBQW1FLGFBQWE7QUFDaEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsdUM7Ozs7Ozs7O0FDdllBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGlEOzs7Ozs7OztBQ2JBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7OztBQ3hCQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVB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Q0FBbUMsd0JBQXdCLGVBQWUsS0FBSyxHQUFHOztBQUUxaGhCOzs7Ozs7Ozs7QUNQQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkRBQTZEOztBQUU3RCw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxtR0FBbUc7QUFDNUc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsK0I7Ozs7Ozs7O0FDcGVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxtQ0FBbUM7QUFDNUMscUVBQXFFLGdEQUFnRDtBQUNySDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELG1DOzs7Ozs7OztBQzFQQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHNCQUFzQixtQkFBbUI7QUFDekM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0JBQXdCLHdDQUF3QztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0JBQWtCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsOEVBQThFO0FBQ3ZGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsdUZBQXVGO0FBQ3ZGO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyx3RUFBd0U7QUFDakY7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RkE7Ozs7QUFHQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBSEE7OztJQU1NQyxjOzs7Ozs7Ozs7OztpQ0FFUTtBQUFBLHlCQUVnQyxLQUFLN0QsS0FGckM7QUFBQSxnQkFFRThELFNBRkYsVUFFRUEsU0FGRjtBQUFBLGdCQUVhQyxJQUZiLFVBRWFBLElBRmI7QUFBQSxnQkFFc0IvRCxLQUZ0Qjs7QUFJTixtQkFDSTtBQUFBO0FBQUE7QUFHSSwyRUFBTyxNQUFNOEQsU0FBYixFQUF3QixtRUFBeEIsSUFBb0U5RCxLQUFwRTtBQUhKLGFBREo7QUFTSDs7OztFQWZ3QixnQkFBTVMsUzs7UUFtQjNCb0QsYyxHQUFBQSxjIiwiZmlsZSI6IjMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbnZhciBfcmVhY3RFdmVudExpc3RlbmVyID0gcmVxdWlyZSgncmVhY3QtZXZlbnQtbGlzdGVuZXInKTtcblxudmFyIF9yZWFjdEV2ZW50TGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RFdmVudExpc3RlbmVyKTtcblxudmFyIF9rZXljb2RlID0gcmVxdWlyZSgna2V5Y29kZScpO1xuXG52YXIgX2tleWNvZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5Y29kZSk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbnZhciBfT3ZlcmxheSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL092ZXJsYXknKTtcblxudmFyIF9PdmVybGF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX092ZXJsYXkpO1xuXG52YXIgX1JlbmRlclRvTGF5ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9SZW5kZXJUb0xheWVyJyk7XG5cbnZhciBfUmVuZGVyVG9MYXllcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZW5kZXJUb0xheWVyKTtcblxudmFyIF9QYXBlciA9IHJlcXVpcmUoJy4uL1BhcGVyJyk7XG5cbnZhciBfUGFwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGFwZXIpO1xuXG52YXIgX1RyYW5zaXRpb25Hcm91cCA9IHJlcXVpcmUoJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvbkdyb3VwJyk7XG5cbnZhciBfVHJhbnNpdGlvbkdyb3VwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYW5zaXRpb25Hcm91cCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUcmFuc2l0aW9uSXRlbSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFRyYW5zaXRpb25JdGVtLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUcmFuc2l0aW9uSXRlbSgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBUcmFuc2l0aW9uSXRlbSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBUcmFuc2l0aW9uSXRlbS5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoVHJhbnNpdGlvbkl0ZW0pKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0eWxlOiB7fVxuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShUcmFuc2l0aW9uSXRlbSwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZW50ZXJUaW1lb3V0KTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmxlYXZlVGltZW91dCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbEVudGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbEVudGVyKGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudFdpbGxBcHBlYXIoY2FsbGJhY2spO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxBcHBlYXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsQXBwZWFyKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgc3BhY2luZyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5iYXNlVGhlbWUuc3BhY2luZztcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwgJyArIHNwYWNpbmcuZGVza3RvcEtleWxpbmVJbmNyZW1lbnQgKyAncHgpJ1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5lbnRlclRpbWVvdXQgPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCA0NTApOyAvLyBtYXRjaGVzIHRyYW5zaXRpb24gZHVyYXRpb25cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsTGVhdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTGVhdmUoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsIDApJ1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5sZWF2ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCA0NTApOyAvLyBtYXRjaGVzIHRyYW5zaXRpb24gZHVyYXRpb25cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydzdHlsZScsICdjaGlsZHJlbiddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCB0aGlzLnN0YXRlLnN0eWxlLCBzdHlsZSkpIH0pLFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFRyYW5zaXRpb25JdGVtO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuVHJhbnNpdGlvbkl0ZW0uY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblRyYW5zaXRpb25JdGVtLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0KSB7XG4gIHZhciBhdXRvU2Nyb2xsQm9keUNvbnRlbnQgPSBwcm9wcy5hdXRvU2Nyb2xsQm9keUNvbnRlbnQsXG4gICAgICBvcGVuID0gcHJvcHMub3BlbjtcbiAgdmFyIF9jb250ZXh0JG11aVRoZW1lID0gY29udGV4dC5tdWlUaGVtZSxcbiAgICAgIF9jb250ZXh0JG11aVRoZW1lJGJhcyA9IF9jb250ZXh0JG11aVRoZW1lLmJhc2VUaGVtZSxcbiAgICAgIHNwYWNpbmcgPSBfY29udGV4dCRtdWlUaGVtZSRiYXMuc3BhY2luZyxcbiAgICAgIHBhbGV0dGUgPSBfY29udGV4dCRtdWlUaGVtZSRiYXMucGFsZXR0ZSxcbiAgICAgIGRpYWxvZyA9IF9jb250ZXh0JG11aVRoZW1lLmRpYWxvZyxcbiAgICAgIHpJbmRleCA9IF9jb250ZXh0JG11aVRoZW1lLnpJbmRleDtcblxuXG4gIHZhciBndXR0ZXIgPSBzcGFjaW5nLmRlc2t0b3BHdXR0ZXI7XG4gIHZhciBib3JkZXJTY3JvbGwgPSAnMXB4IHNvbGlkICcgKyBwYWxldHRlLmJvcmRlckNvbG9yO1xuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIFdlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiAncmdiYSgwLDAsMCwwKScsIC8vIFJlbW92ZSBtb2JpbGUgY29sb3IgZmxhc2hpbmcgKGRlcHJlY2F0ZWQpXG4gICAgICB6SW5kZXg6IHpJbmRleC5kaWFsb2csXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiBvcGVuID8gMCA6IC0xMDAwMCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHRyYW5zaXRpb246IG9wZW4gPyBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnMG1zJywgJ2xlZnQnLCAnMG1zJykgOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnMG1zJywgJ2xlZnQnLCAnNDUwbXMnKVxuICAgIH0sXG4gICAgY29udGVudDoge1xuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3JnYmEoMCwwLDAsMCknLCAvLyBSZW1vdmUgbW9iaWxlIGNvbG9yIGZsYXNoaW5nIChkZXByZWNhdGVkKVxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgd2lkdGg6ICc3NSUnLFxuICAgICAgbWF4V2lkdGg6IHNwYWNpbmcuZGVza3RvcEtleWxpbmVJbmNyZW1lbnQgKiAxMixcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICB6SW5kZXg6IHpJbmRleC5kaWFsb2dcbiAgICB9LFxuICAgIGFjdGlvbnNDb250YWluZXI6IHtcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6ICdyZ2JhKDAsMCwwLDApJywgLy8gUmVtb3ZlIG1vYmlsZSBjb2xvciBmbGFzaGluZyAoZGVwcmVjYXRlZClcbiAgICAgIHBhZGRpbmc6IDgsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgICAgbWFyZ2luVG9wOiBhdXRvU2Nyb2xsQm9keUNvbnRlbnQgPyAtMSA6IDBcbiAgICB9LFxuICAgIG92ZXJsYXk6IHtcbiAgICAgIHpJbmRleDogekluZGV4LmRpYWxvZ092ZXJsYXlcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgICBwYWRkaW5nOiBndXR0ZXIgKyAncHggJyArIGd1dHRlciArICdweCAyMHB4ICcgKyBndXR0ZXIgKyAncHgnLFxuICAgICAgY29sb3I6IHBhbGV0dGUudGV4dENvbG9yLFxuICAgICAgZm9udFNpemU6IGRpYWxvZy50aXRsZUZvbnRTaXplLFxuICAgICAgbGluZUhlaWdodDogJzMycHgnLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgbWFyZ2luQm90dG9tOiBhdXRvU2Nyb2xsQm9keUNvbnRlbnQgPyAtMSA6IDBcbiAgICB9LFxuICAgIGJvZHk6IHtcbiAgICAgIGZvbnRTaXplOiBkaWFsb2cuYm9keUZvbnRTaXplLFxuICAgICAgY29sb3I6IGRpYWxvZy5ib2R5Q29sb3IsXG4gICAgICBwYWRkaW5nOiAocHJvcHMudGl0bGUgPyAwIDogZ3V0dGVyKSArICdweCAnICsgZ3V0dGVyICsgJ3B4ICcgKyBndXR0ZXIgKyAncHgnLFxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBvdmVyZmxvd1k6IGF1dG9TY3JvbGxCb2R5Q29udGVudCA/ICdhdXRvJyA6ICdoaWRkZW4nLFxuICAgICAgYm9yZGVyVG9wOiBhdXRvU2Nyb2xsQm9keUNvbnRlbnQgPyBib3JkZXJTY3JvbGwgOiAnbm9uZScsXG4gICAgICBib3JkZXJCb3R0b206IGF1dG9TY3JvbGxCb2R5Q29udGVudCA/IGJvcmRlclNjcm9sbCA6ICdub25lJ1xuICAgIH1cbiAgfTtcbn1cblxudmFyIERpYWxvZ0lubGluZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50Mikge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShEaWFsb2dJbmxpbmUsIF9Db21wb25lbnQyKTtcblxuICBmdW5jdGlvbiBEaWFsb2dJbmxpbmUoKSB7XG4gICAgdmFyIF9yZWYyO1xuXG4gICAgdmFyIF90ZW1wMiwgX3RoaXMyLCBfcmV0MjtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIERpYWxvZ0lubGluZSk7XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0MiA9IChfdGVtcDIgPSAoX3RoaXMyID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZjIgPSBEaWFsb2dJbmxpbmUuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKERpYWxvZ0lubGluZSkpLmNhbGwuYXBwbHkoX3JlZjIsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMyKSwgX3RoaXMyLmhhbmRsZVRvdWNoVGFwT3ZlcmxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzMi5yZXF1ZXN0Q2xvc2UoZmFsc2UpO1xuICAgIH0sIF90aGlzMi5oYW5kbGVLZXlVcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCgwLCBfa2V5Y29kZTIuZGVmYXVsdCkoZXZlbnQpID09PSAnZXNjJykge1xuICAgICAgICBfdGhpczIucmVxdWVzdENsb3NlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpczIuaGFuZGxlUmVzaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLnBvc2l0aW9uRGlhbG9nKCk7XG4gICAgfSwgX3RlbXAyKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpczIsIF9yZXQyKTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKERpYWxvZ0lubGluZSwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5wb3NpdGlvbkRpYWxvZygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHRoaXMucG9zaXRpb25EaWFsb2coKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwb3NpdGlvbkRpYWxvZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBvc2l0aW9uRGlhbG9nKCkge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFjdGlvbnMgPSBfcHJvcHMyLmFjdGlvbnMsXG4gICAgICAgICAgYXV0b0RldGVjdFdpbmRvd0hlaWdodCA9IF9wcm9wczIuYXV0b0RldGVjdFdpbmRvd0hlaWdodCxcbiAgICAgICAgICBhdXRvU2Nyb2xsQm9keUNvbnRlbnQgPSBfcHJvcHMyLmF1dG9TY3JvbGxCb2R5Q29udGVudCxcbiAgICAgICAgICBib2R5U3R5bGUgPSBfcHJvcHMyLmJvZHlTdHlsZSxcbiAgICAgICAgICBvcGVuID0gX3Byb3BzMi5vcGVuLFxuICAgICAgICAgIHJlcG9zaXRpb25PblVwZGF0ZSA9IF9wcm9wczIucmVwb3NpdGlvbk9uVXBkYXRlLFxuICAgICAgICAgIHRpdGxlID0gX3Byb3BzMi50aXRsZTtcblxuXG4gICAgICBpZiAoIW9wZW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2xpZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG4gICAgICB2YXIgY29udGFpbmVyID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgdmFyIGRpYWxvZ1dpbmRvdyA9IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzLnJlZnMuZGlhbG9nV2luZG93KTtcbiAgICAgIHZhciBkaWFsb2dDb250ZW50ID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMucmVmcy5kaWFsb2dDb250ZW50KTtcbiAgICAgIHZhciBtaW5QYWRkaW5nVG9wID0gMTY7XG5cbiAgICAgIC8vIFJlc2V0IHRoZSBoZWlnaHQgaW4gY2FzZSB0aGUgd2luZG93IHdhcyByZXNpemVkLlxuICAgICAgZGlhbG9nV2luZG93LnN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgZGlhbG9nQ29udGVudC5zdHlsZS5oZWlnaHQgPSAnJztcblxuICAgICAgdmFyIGRpYWxvZ1dpbmRvd0hlaWdodCA9IGRpYWxvZ1dpbmRvdy5vZmZzZXRIZWlnaHQ7XG4gICAgICB2YXIgcGFkZGluZ1RvcCA9IChjbGllbnRIZWlnaHQgLSBkaWFsb2dXaW5kb3dIZWlnaHQpIC8gMiAtIDY0O1xuICAgICAgaWYgKHBhZGRpbmdUb3AgPCBtaW5QYWRkaW5nVG9wKSBwYWRkaW5nVG9wID0gbWluUGFkZGluZ1RvcDtcblxuICAgICAgLy8gVmVydGljYWxseSBjZW50ZXIgdGhlIGRpYWxvZyB3aW5kb3csIGJ1dCBtYWtlIHN1cmUgaXQgZG9lc24ndFxuICAgICAgLy8gdHJhbnNpdGlvbiB0byB0aGF0IHBvc2l0aW9uLlxuICAgICAgaWYgKHJlcG9zaXRpb25PblVwZGF0ZSB8fCAhY29udGFpbmVyLnN0eWxlLnBhZGRpbmdUb3ApIHtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmdUb3AgPSBwYWRkaW5nVG9wICsgJ3B4JztcbiAgICAgIH1cblxuICAgICAgLy8gRm9yY2UgYSBoZWlnaHQgaWYgdGhlIGRpYWxvZyBpcyB0YWxsZXIgdGhhbiBjbGllbnRIZWlnaHRcbiAgICAgIGlmIChhdXRvRGV0ZWN0V2luZG93SGVpZ2h0IHx8IGF1dG9TY3JvbGxCb2R5Q29udGVudCkge1xuICAgICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgICAgIHN0eWxlcy5ib2R5ID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5ib2R5LCBib2R5U3R5bGUpO1xuICAgICAgICB2YXIgbWF4RGlhbG9nQ29udGVudEhlaWdodCA9IGNsaWVudEhlaWdodCAtIDIgKiA2NDtcblxuICAgICAgICBpZiAodGl0bGUpIG1heERpYWxvZ0NvbnRlbnRIZWlnaHQgLT0gZGlhbG9nQ29udGVudC5wcmV2aW91c1NpYmxpbmcub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgIGlmIChfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4uY291bnQoYWN0aW9ucykpIHtcbiAgICAgICAgICBtYXhEaWFsb2dDb250ZW50SGVpZ2h0IC09IGRpYWxvZ0NvbnRlbnQubmV4dFNpYmxpbmcub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgZGlhbG9nQ29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBtYXhEaWFsb2dDb250ZW50SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgaWYgKG1heERpYWxvZ0NvbnRlbnRIZWlnaHQgPiBkaWFsb2dXaW5kb3dIZWlnaHQpIHtcbiAgICAgICAgICBkaWFsb2dDb250ZW50LnN0eWxlLmJvcmRlckJvdHRvbSA9ICdub25lJztcbiAgICAgICAgICBkaWFsb2dDb250ZW50LnN0eWxlLmJvcmRlclRvcCA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlcXVlc3RDbG9zZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlcXVlc3RDbG9zZShidXR0b25DbGlja2VkKSB7XG4gICAgICBpZiAoIWJ1dHRvbkNsaWNrZWQgJiYgdGhpcy5wcm9wcy5tb2RhbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uUmVxdWVzdENsb3NlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25SZXF1ZXN0Q2xvc2UoISFidXR0b25DbGlja2VkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYWN0aW9ucyA9IF9wcm9wczMuYWN0aW9ucyxcbiAgICAgICAgICBhY3Rpb25zQ29udGFpbmVyQ2xhc3NOYW1lID0gX3Byb3BzMy5hY3Rpb25zQ29udGFpbmVyQ2xhc3NOYW1lLFxuICAgICAgICAgIGFjdGlvbnNDb250YWluZXJTdHlsZSA9IF9wcm9wczMuYWN0aW9uc0NvbnRhaW5lclN0eWxlLFxuICAgICAgICAgIGJvZHlDbGFzc05hbWUgPSBfcHJvcHMzLmJvZHlDbGFzc05hbWUsXG4gICAgICAgICAgYm9keVN0eWxlID0gX3Byb3BzMy5ib2R5U3R5bGUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMzLmNoaWxkcmVuLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wczMuY2xhc3NOYW1lLFxuICAgICAgICAgIGNvbnRlbnRDbGFzc05hbWUgPSBfcHJvcHMzLmNvbnRlbnRDbGFzc05hbWUsXG4gICAgICAgICAgY29udGVudFN0eWxlID0gX3Byb3BzMy5jb250ZW50U3R5bGUsXG4gICAgICAgICAgb3ZlcmxheUNsYXNzTmFtZSA9IF9wcm9wczMub3ZlcmxheUNsYXNzTmFtZSxcbiAgICAgICAgICBvdmVybGF5U3R5bGUgPSBfcHJvcHMzLm92ZXJsYXlTdHlsZSxcbiAgICAgICAgICBvcGVuID0gX3Byb3BzMy5vcGVuLFxuICAgICAgICAgIHRpdGxlQ2xhc3NOYW1lID0gX3Byb3BzMy50aXRsZUNsYXNzTmFtZSxcbiAgICAgICAgICB0aXRsZVN0eWxlID0gX3Byb3BzMy50aXRsZVN0eWxlLFxuICAgICAgICAgIHRpdGxlID0gX3Byb3BzMy50aXRsZSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wczMuc3R5bGU7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG5cbiAgICAgIHN0eWxlcy5yb290ID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yb290LCBzdHlsZSk7XG4gICAgICBzdHlsZXMuY29udGVudCA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMuY29udGVudCwgY29udGVudFN0eWxlKTtcbiAgICAgIHN0eWxlcy5ib2R5ID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5ib2R5LCBib2R5U3R5bGUpO1xuICAgICAgc3R5bGVzLmFjdGlvbnNDb250YWluZXIgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmFjdGlvbnNDb250YWluZXIsIGFjdGlvbnNDb250YWluZXJTdHlsZSk7XG4gICAgICBzdHlsZXMub3ZlcmxheSA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMub3ZlcmxheSwgb3ZlcmxheVN0eWxlKTtcbiAgICAgIHN0eWxlcy50aXRsZSA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMudGl0bGUsIHRpdGxlU3R5bGUpO1xuXG4gICAgICB2YXIgYWN0aW9uc0NvbnRhaW5lciA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5jb3VudChhY3Rpb25zKSA+IDAgJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogYWN0aW9uc0NvbnRhaW5lckNsYXNzTmFtZSwgc3R5bGU6IHByZXBhcmVTdHlsZXMoc3R5bGVzLmFjdGlvbnNDb250YWluZXIpIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KGFjdGlvbnMpXG4gICAgICApO1xuXG4gICAgICB2YXIgdGl0bGVFbGVtZW50ID0gdGl0bGU7XG4gICAgICBpZiAoX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KHRpdGxlKSkge1xuICAgICAgICB0aXRsZUVsZW1lbnQgPSBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KHRpdGxlLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiB0aXRsZS5wcm9wcy5jbGFzc05hbWUgfHwgdGl0bGVDbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy50aXRsZSwgdGl0bGUucHJvcHMuc3R5bGUpKVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRpdGxlID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aXRsZUVsZW1lbnQgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnaDMnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiB0aXRsZUNsYXNzTmFtZSwgc3R5bGU6IHByZXBhcmVTdHlsZXMoc3R5bGVzLnRpdGxlKSB9LFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIHN0eWxlOiBwcmVwYXJlU3R5bGVzKHN0eWxlcy5yb290KSB9LFxuICAgICAgICBvcGVuICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdEV2ZW50TGlzdGVuZXIyLmRlZmF1bHQsIHtcbiAgICAgICAgICB0YXJnZXQ6ICd3aW5kb3cnLFxuICAgICAgICAgIG9uS2V5VXA6IHRoaXMuaGFuZGxlS2V5VXAsXG4gICAgICAgICAgb25SZXNpemU6IHRoaXMuaGFuZGxlUmVzaXplXG4gICAgICAgIH0pLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfVHJhbnNpdGlvbkdyb3VwMi5kZWZhdWx0LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogJ2RpdicsXG4gICAgICAgICAgICByZWY6ICdkaWFsb2dXaW5kb3cnLFxuICAgICAgICAgICAgdHJhbnNpdGlvbkFwcGVhcjogdHJ1ZSxcbiAgICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXJUaW1lb3V0OiA0NTAsXG4gICAgICAgICAgICB0cmFuc2l0aW9uRW50ZXI6IHRydWUsXG4gICAgICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0OiA0NTBcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9wZW4gJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBUcmFuc2l0aW9uSXRlbSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjb250ZW50Q2xhc3NOYW1lLFxuICAgICAgICAgICAgICBzdHlsZTogc3R5bGVzLmNvbnRlbnRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgX1BhcGVyMi5kZWZhdWx0LFxuICAgICAgICAgICAgICB7IHpEZXB0aDogNCB9LFxuICAgICAgICAgICAgICB0aXRsZUVsZW1lbnQsXG4gICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHJlZjogJ2RpYWxvZ0NvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBib2R5Q2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMoc3R5bGVzLmJvZHkpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBhY3Rpb25zQ29udGFpbmVyXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfT3ZlcmxheTIuZGVmYXVsdCwge1xuICAgICAgICAgIHNob3c6IG9wZW4sXG4gICAgICAgICAgY2xhc3NOYW1lOiBvdmVybGF5Q2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlOiBzdHlsZXMub3ZlcmxheSxcbiAgICAgICAgICBvblRvdWNoVGFwOiB0aGlzLmhhbmRsZVRvdWNoVGFwT3ZlcmxheVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIERpYWxvZ0lubGluZTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkRpYWxvZ0lubGluZS5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuRGlhbG9nSW5saW5lLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgYWN0aW9uczogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICBhY3Rpb25zQ29udGFpbmVyQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgYWN0aW9uc0NvbnRhaW5lclN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgYXV0b0RldGVjdFdpbmRvd0hlaWdodDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBhdXRvU2Nyb2xsQm9keUNvbnRlbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgYm9keUNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGJvZHlTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNvbnRlbnRDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBjb250ZW50U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBtb2RhbDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBvblJlcXVlc3RDbG9zZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICBvcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wuaXNSZXF1aXJlZCxcbiAgb3ZlcmxheUNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIG92ZXJsYXlTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHJlcG9zaXRpb25PblVwZGF0ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHRpdGxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIHRpdGxlQ2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdGl0bGVTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcblxudmFyIERpYWxvZyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50Mykge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShEaWFsb2csIF9Db21wb25lbnQzKTtcblxuICBmdW5jdGlvbiBEaWFsb2coKSB7XG4gICAgdmFyIF9yZWYzO1xuXG4gICAgdmFyIF90ZW1wMywgX3RoaXMzLCBfcmV0MztcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIERpYWxvZyk7XG5cbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0MyA9IChfdGVtcDMgPSAoX3RoaXMzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZjMgPSBEaWFsb2cuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKERpYWxvZykpLmNhbGwuYXBwbHkoX3JlZjMsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMzKSwgX3RoaXMzLnJlbmRlckxheWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KERpYWxvZ0lubGluZSwgX3RoaXMzLnByb3BzKTtcbiAgICB9LCBfdGVtcDMpLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzMywgX3JldDMpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoRGlhbG9nLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUmVuZGVyVG9MYXllcjIuZGVmYXVsdCwgeyByZW5kZXI6IHRoaXMucmVuZGVyTGF5ZXIsIG9wZW46IHRydWUsIHVzZUxheWVyRm9yQ2xpY2tBd2F5OiBmYWxzZSB9KTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIERpYWxvZztcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkRpYWxvZy5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuRGlhbG9nLmRlZmF1bHRQcm9wcyA9IHtcbiAgYXV0b0RldGVjdFdpbmRvd0hlaWdodDogdHJ1ZSxcbiAgYXV0b1Njcm9sbEJvZHlDb250ZW50OiBmYWxzZSxcbiAgbW9kYWw6IGZhbHNlLFxuICByZXBvc2l0aW9uT25VcGRhdGU6IHRydWVcbn07XG5EaWFsb2cucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogQWN0aW9uIGJ1dHRvbnMgdG8gZGlzcGxheSBiZWxvdyB0aGUgRGlhbG9nIGNvbnRlbnQgKGBjaGlsZHJlbmApLlxuICAgKiBUaGlzIHByb3BlcnR5IGFjY2VwdHMgZWl0aGVyIGEgUmVhY3QgZWxlbWVudCwgb3IgYW4gYXJyYXkgb2YgUmVhY3QgZWxlbWVudHMuXG4gICAqL1xuICBhY3Rpb25zOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgYGNsYXNzTmFtZWAgdG8gYWRkIHRvIHRoZSBhY3Rpb25zIGNvbnRhaW5lcidzIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGFjdGlvbnNDb250YWluZXJDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogT3ZlcnJpZGVzIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBhY3Rpb25zIGNvbnRhaW5lcidzIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGFjdGlvbnNDb250YWluZXJTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIGhlaWdodCBvZiB0aGUgYERpYWxvZ2Agd2lsbCBiZSBhdXRvIGRldGVjdGVkLiBBIG1heCBoZWlnaHRcbiAgICogd2lsbCBiZSBlbmZvcmNlZCBzbyB0aGF0IHRoZSBjb250ZW50IGRvZXMgbm90IGV4dGVuZCBiZXlvbmQgdGhlIHZpZXdwb3J0LlxuICAgKi9cbiAgYXV0b0RldGVjdFdpbmRvd0hlaWdodDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogSWYgc2V0IHRvIHRydWUsIHRoZSBib2R5IGNvbnRlbnQgb2YgdGhlIGBEaWFsb2dgIHdpbGwgYmUgc2Nyb2xsYWJsZS5cbiAgICovXG4gIGF1dG9TY3JvbGxCb2R5Q29udGVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhlIGBjbGFzc05hbWVgIHRvIGFkZCB0byB0aGUgY29udGVudCdzIHJvb3QgZWxlbWVudCB1bmRlciB0aGUgdGl0bGUuXG4gICAqL1xuICBib2R5Q2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgY29udGVudCdzIHJvb3QgZWxlbWVudCB1bmRlciB0aGUgdGl0bGUuXG4gICAqL1xuICBib2R5U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGNvbnRlbnRzIG9mIHRoZSBgRGlhbG9nYC5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgY3NzIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgYGNsYXNzTmFtZWAgdG8gYWRkIHRvIHRoZSBjb250ZW50IGNvbnRhaW5lci5cbiAgICovXG4gIGNvbnRlbnRDbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogT3ZlcnJpZGVzIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBjb250ZW50IGNvbnRhaW5lci5cbiAgICovXG4gIGNvbnRlbnRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBGb3JjZSB0aGUgdXNlciB0byB1c2Ugb25lIG9mIHRoZSBhY3Rpb25zIGluIHRoZSBgRGlhbG9nYC5cbiAgICogQ2xpY2tpbmcgb3V0c2lkZSB0aGUgYERpYWxvZ2Agd2lsbCBub3QgdHJpZ2dlciB0aGUgYG9uUmVxdWVzdENsb3NlYC5cbiAgICovXG4gIG1vZGFsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIHRoZSBgRGlhbG9nYCBpcyByZXF1ZXN0ZWQgdG8gYmUgY2xvc2VkIGJ5IGEgY2xpY2sgb3V0c2lkZSB0aGUgYERpYWxvZ2Agb3Igb24gdGhlIGJ1dHRvbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbH0gYnV0dG9uQ2xpY2tlZCBEZXRlcm1pbmVzIHdoZXRoZXIgYSBidXR0b24gY2xpY2sgdHJpZ2dlcmVkIHRoaXMgcmVxdWVzdC5cbiAgICovXG4gIG9uUmVxdWVzdENsb3NlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDb250cm9scyB3aGV0aGVyIHRoZSBEaWFsb2cgaXMgb3BlbmVkIG9yIG5vdC5cbiAgICovXG4gIG9wZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogVGhlIGBjbGFzc05hbWVgIHRvIGFkZCB0byB0aGUgYE92ZXJsYXlgIGNvbXBvbmVudCB0aGF0IGlzIHJlbmRlcmVkIGJlaGluZCB0aGUgYERpYWxvZ2AuXG4gICAqL1xuICBvdmVybGF5Q2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgYE92ZXJsYXlgIGNvbXBvbmVudCB0aGF0IGlzIHJlbmRlcmVkIGJlaGluZCB0aGUgYERpYWxvZ2AuXG4gICAqL1xuICBvdmVybGF5U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBgRGlhbG9nYCBzaG91bGQgYmUgcmVwb3NpdGlvbmVkIHdoZW4gaXQncyBjb250ZW50cyBhcmUgdXBkYXRlZC5cbiAgICovXG4gIHJlcG9zaXRpb25PblVwZGF0ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSB0aXRsZSB0byBkaXNwbGF5IG9uIHRoZSBgRGlhbG9nYC4gQ291bGQgYmUgbnVtYmVyLCBzdHJpbmcsIGVsZW1lbnQgb3IgYW4gYXJyYXkgY29udGFpbmluZyB0aGVzZSB0eXBlcy5cbiAgICovXG4gIHRpdGxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgYGNsYXNzTmFtZWAgdG8gYWRkIHRvIHRoZSB0aXRsZSdzIHJvb3QgY29udGFpbmVyIGVsZW1lbnQuXG4gICAqL1xuICB0aXRsZUNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBPdmVycmlkZXMgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHRpdGxlJ3Mgcm9vdCBjb250YWluZXIgZWxlbWVudC5cbiAgICovXG4gIHRpdGxlU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBEaWFsb2c7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL0RpYWxvZy9EaWFsb2cuanNcbi8vIG1vZHVsZSBpZCA9IDEwMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfRGlhbG9nID0gcmVxdWlyZSgnLi9EaWFsb2cnKTtcblxudmFyIF9EaWFsb2cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRGlhbG9nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX0RpYWxvZzIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvRGlhbG9nL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgb3JpZ2luYWxCb2R5T3ZlcmZsb3cgPSBudWxsO1xudmFyIGxvY2tpbmdDb3VudGVyID0gMDtcblxudmFyIEF1dG9Mb2NrU2Nyb2xsaW5nID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoQXV0b0xvY2tTY3JvbGxpbmcsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEF1dG9Mb2NrU2Nyb2xsaW5nKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIEF1dG9Mb2NrU2Nyb2xsaW5nKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IEF1dG9Mb2NrU2Nyb2xsaW5nLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShBdXRvTG9ja1Njcm9sbGluZykpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmxvY2tlZCA9IGZhbHNlLCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoQXV0b0xvY2tTY3JvbGxpbmcsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmxvY2sgPT09IHRydWUpIHtcbiAgICAgICAgdGhpcy5wcmV2ZW50U2Nyb2xsaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5sb2NrICE9PSBuZXh0UHJvcHMubG9jaykge1xuICAgICAgICBpZiAobmV4dFByb3BzLmxvY2spIHtcbiAgICAgICAgICB0aGlzLnByZXZlbnRTY3JvbGxpbmcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFsbG93U2Nyb2xsaW5nKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5hbGxvd1Njcm9sbGluZygpO1xuICAgIH1cblxuICAgIC8vIGZvcmNlIHRvIG9ubHkgbG9jay91bmxvY2sgb25jZVxuXG4gIH0sIHtcbiAgICBrZXk6ICdwcmV2ZW50U2Nyb2xsaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJldmVudFNjcm9sbGluZygpIHtcbiAgICAgIGlmICh0aGlzLmxvY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxvY2tpbmdDb3VudGVyID0gbG9ja2luZ0NvdW50ZXIgKyAxO1xuICAgICAgdGhpcy5sb2NrZWQgPSB0cnVlO1xuXG4gICAgICAvLyBvbmx5IGxvY2sgdGhlIGZpcnN0IHRpbWUgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgICAgaWYgKGxvY2tpbmdDb3VudGVyID09PSAxKSB7XG4gICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbiAgICAgICAgb3JpZ2luYWxCb2R5T3ZlcmZsb3cgPSBib2R5LnN0eWxlLm92ZXJmbG93O1xuICAgICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWxsb3dTY3JvbGxpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhbGxvd1Njcm9sbGluZygpIHtcbiAgICAgIGlmICh0aGlzLmxvY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBsb2NraW5nQ291bnRlciA9IGxvY2tpbmdDb3VudGVyIC0gMTtcbiAgICAgICAgdGhpcy5sb2NrZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxvY2tpbmdDb3VudGVyID09PSAwICYmIG9yaWdpbmFsQm9keU92ZXJmbG93ICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbiAgICAgICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IG9yaWdpbmFsQm9keU92ZXJmbG93IHx8ICcnO1xuICAgICAgICBvcmlnaW5hbEJvZHlPdmVyZmxvdyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBBdXRvTG9ja1Njcm9sbGluZztcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkF1dG9Mb2NrU2Nyb2xsaW5nLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgbG9jazogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWRcbn0gOiB7fTtcbmV4cG9ydHMuZGVmYXVsdCA9IEF1dG9Mb2NrU2Nyb2xsaW5nO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9pbnRlcm5hbC9BdXRvTG9ja1Njcm9sbGluZy5qc1xuLy8gbW9kdWxlIGlkID0gMTAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG52YXIgX0F1dG9Mb2NrU2Nyb2xsaW5nID0gcmVxdWlyZSgnLi9BdXRvTG9ja1Njcm9sbGluZycpO1xuXG52YXIgX0F1dG9Mb2NrU2Nyb2xsaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0F1dG9Mb2NrU2Nyb2xsaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0KSB7XG4gIHZhciBvdmVybGF5ID0gY29udGV4dC5tdWlUaGVtZS5vdmVybGF5O1xuXG5cbiAgdmFyIHN0eWxlID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogJy0xMDAlJyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IG92ZXJsYXkuYmFja2dyb3VuZENvbG9yLFxuICAgICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJywgLy8gUmVtb3ZlIG1vYmlsZSBjb2xvciBmbGFzaGluZyAoZGVwcmVjYXRlZClcblxuICAgICAgLy8gVHdvIHdheXMgdG8gcHJvbW90ZSBvdmVybGF5IHRvIGl0cyBvd24gcmVuZGVyIGxheWVyXG4gICAgICB3aWxsQ2hhbmdlOiAnb3BhY2l0eScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVaKDApJyxcblxuICAgICAgdHJhbnNpdGlvbjogcHJvcHMudHJhbnNpdGlvbkVuYWJsZWQgJiYgX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzBtcycsICdsZWZ0JywgJzQwMG1zJykgKyAnLCAnICsgX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoJzQwMG1zJywgJ29wYWNpdHknKVxuICAgIH1cbiAgfTtcblxuICBpZiAocHJvcHMuc2hvdykge1xuICAgICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZS5yb290LCB7XG4gICAgICBsZWZ0OiAwLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCcwbXMnLCAnbGVmdCcpICsgJywgJyArIF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCc0MDBtcycsICdvcGFjaXR5JylcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxudmFyIE92ZXJsYXkgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShPdmVybGF5LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBPdmVybGF5KCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIE92ZXJsYXkpO1xuICAgIHJldHVybiAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChPdmVybGF5Ll9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShPdmVybGF5KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShPdmVybGF5LCBbe1xuICAgIGtleTogJ3NldE9wYWNpdHknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRPcGFjaXR5KG9wYWNpdHkpIHtcbiAgICAgIHRoaXMucmVmcy5vdmVybGF5LnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGF1dG9Mb2NrU2Nyb2xsaW5nID0gX3Byb3BzLmF1dG9Mb2NrU2Nyb2xsaW5nLFxuICAgICAgICAgIHNob3cgPSBfcHJvcHMuc2hvdyxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICB0cmFuc2l0aW9uRW5hYmxlZCA9IF9wcm9wcy50cmFuc2l0aW9uRW5hYmxlZCxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydhdXRvTG9ja1Njcm9sbGluZycsICdzaG93JywgJ3N0eWxlJywgJ3RyYW5zaXRpb25FbmFibGVkJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwgeyByZWY6ICdvdmVybGF5Jywgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yb290LCBzdHlsZSkpIH0pLFxuICAgICAgICBhdXRvTG9ja1Njcm9sbGluZyAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfQXV0b0xvY2tTY3JvbGxpbmcyLmRlZmF1bHQsIHsgbG9jazogc2hvdyB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE92ZXJsYXk7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5PdmVybGF5LmRlZmF1bHRQcm9wcyA9IHtcbiAgYXV0b0xvY2tTY3JvbGxpbmc6IHRydWUsXG4gIHN0eWxlOiB7fSxcbiAgdHJhbnNpdGlvbkVuYWJsZWQ6IHRydWVcbn07XG5PdmVybGF5LmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5PdmVybGF5LnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgYXV0b0xvY2tTY3JvbGxpbmc6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgc2hvdzogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICB0cmFuc2l0aW9uRW5hYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sXG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBPdmVybGF5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9pbnRlcm5hbC9PdmVybGF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIiwiaW1wb3J0IHtmZXRjaFJlc291cmNlRnJvbUJhY2tlbmR9IGZyb20gJy4vdXRpbGl0aWVzL2ZldGNoUmVzb3VyY2VGcm9tQmFja2VuZCc7XHJcbmltcG9ydCB7ZmV0Y2hJbmdyZWRpZW50c30gZnJvbSAnLi9pbmdyZWRpZW50cyc7XHJcbmltcG9ydCB7b3BlbkRpYWxvZ3VlfSBmcm9tICcuL2RlZmluZUluZ3JlZGllbnREaWFsb2d1ZSc7XHJcblxyXG5jb25zdCBzYXZlSW5ncmVkaWVudCA9IChpbmdyZWRpZW50KSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIFxyXG4gICAgZGlzcGF0Y2goe3R5cGU6ICdJTkdSRURJRU5UX1NBVklORyd9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnc2F2aW5nOiAnLCBpbmdyZWRpZW50KTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0ge21ldGhvZDogJ1BPU1QnLCBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sIGJvZHk6IEpTT04uc3RyaW5naWZ5KGluZ3JlZGllbnQpfTtcclxuXHJcbiAgICBmZXRjaFJlc291cmNlRnJvbUJhY2tlbmQoJy9hcGkvaW5ncmVkaWVudHMnLCBvcHRpb25zKS50aGVuKCByZXN1bHQgPT4ge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnSU5HUkVESUVOVF9TQVZFRCcsIGluZ3JlZGllbnRJZDogcmVzdWx0fSk7XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoSW5ncmVkaWVudHMoKSk7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVJbmdyZWRpZW50ID0gKGluZ3JlZGllbnQsIGluZ3JlZGllbnRJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBcclxuICAgIGRpc3BhdGNoKHt0eXBlOiAnSU5HUkVESUVOVF9VUERBVElORyd9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygndXBkYXRpbmc6ICcsIGluZ3JlZGllbnQpO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7bWV0aG9kOiAnUFVUJywgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LCBib2R5OiBKU09OLnN0cmluZ2lmeShpbmdyZWRpZW50KX07XHJcblxyXG4gICAgZmV0Y2hSZXNvdXJjZUZyb21CYWNrZW5kKCcvYXBpL2luZ3JlZGllbnRzLycgKyBpbmdyZWRpZW50SWQsIG9wdGlvbnMpLnRoZW4oIHJlc3VsdCA9PiB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoSW5ncmVkaWVudHMoKSk7XHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBkZWxldGVJbmdyZWRpZW50ID0gKGluZ3JlZGllbnRJZCkgPT4gKGRpc3BhdGNoKSA9PiB7XHJcbiAgICBcclxuICAgIGRpc3BhdGNoKHt0eXBlOiAnSU5HUkVESUVOVF9ERUxFVElORyd9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnZGVsZXRpbmcnLCBpbmdyZWRpZW50SWQpO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7bWV0aG9kOiAnREVMRVRFJ307XHJcblxyXG4gICAgZmV0Y2hSZXNvdXJjZUZyb21CYWNrZW5kKCcvYXBpL2luZ3JlZGllbnRzLycgKyBpbmdyZWRpZW50SWQsIG9wdGlvbnMpLnRoZW4oIHJlc3VsdCA9PiB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdJTkdSRURJRU5UX0RFTEVURUQnLCBpbmdyZWRpZW50SWQ6IGluZ3JlZGllbnRJZH0pO1xyXG5cclxuICAgICAgICBkaXNwYXRjaChmZXRjaEluZ3JlZGllbnRzKCkpO1xyXG5cclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3QgZWRpdEluZ3JlZGllbnQgPSAoaW5ncmVkaWVudElkKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIFxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdmZXRjaGluZycsIGluZ3JlZGllbnRJZCk7XHJcblxyXG4gICAgZmV0Y2hSZXNvdXJjZUZyb21CYWNrZW5kKCcvYXBpL2luZ3JlZGllbnRzLycgKyBpbmdyZWRpZW50SWQpLnRoZW4oIHJlc3VsdCA9PiB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgZGlzcGF0Y2gob3BlbkRpYWxvZ3VlKHJlc3VsdCwgaW5ncmVkaWVudElkKSk7XHJcbiAgICAgICAgLypkaXNwYXRjaCh7dHlwZTogJ0lOR1JFRElFTlRfREVMRVRFRCcsIGluZ3JlZGllbnRJZDogaW5ncmVkaWVudElkfSk7XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKGZldGNoSW5ncmVkaWVudHMoKSk7Ki9cclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcblxyXG5leHBvcnQge3NhdmVJbmdyZWRpZW50LCBlZGl0SW5ncmVkaWVudCwgZGVsZXRlSW5ncmVkaWVudCwgdXBkYXRlSW5ncmVkaWVudH07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2R1bGVzL2luZ3JlZGllbnRzQWRtaW4uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IEZsb2F0aW5nQWN0aW9uQnV0dG9uIGZyb20gJ21hdGVyaWFsLXVpL0Zsb2F0aW5nQWN0aW9uQnV0dG9uJztcclxuaW1wb3J0IERpYWxvZyBmcm9tICdtYXRlcmlhbC11aS9EaWFsb2cnO1xyXG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9GbGF0QnV0dG9uJztcclxuaW1wb3J0IENvbnRlbnRBZGQgZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL2NvbnRlbnQvYWRkJztcclxuXHJcbmltcG9ydCB7TnV0cmllbnRGb3JtfSBmcm9tICcuL051dHJpZW50Rm9ybS9OdXRyaWVudEZvcm0nO1xyXG5pbXBvcnQge0luZ3JlZGllbnRzTGlzdENvbnRhaW5lcn0gZnJvbSAnLi9JbmdyZWRpZW50c0xpc3RDb250YWluZXInO1xyXG5cclxuY29uc3QgYnV0dG9uT3V0ZXJTdHlsZSA9IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgYm90dG9tOiAnLTMwcHgnLFxyXG4gICAgcmlnaHQ6ICc1MHB4JyxcclxuICAgIHpJbmRleDogMTAwXHJcbn07XHJcblxyXG5jbGFzcyBBZG1pbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgaGFuZGxlU2F2ZVN1Ym1pdCA9ICh2YWx1ZXMpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLnNhdmVJbmdyZWRpZW50KHZhbHVlcywgdGhpcy5wcm9wcy5lZGl0SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtvcGVuRGlhbG9ndWUsIGNsb3NlRGlhbG9ndWUsIHNhdmVEaWFsb2d1ZSwgb3BlbiwgaW5pdGlhbFZhbHVlc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBhY3Rpb25zID0gW1xyXG4gICAgICAgICAgICA8RmxhdEJ1dHRvblxyXG4gICAgICAgICAgICBsYWJlbD1cIlNhdmUgaW5ncmVkaWVudFwiXHJcbiAgICAgICAgICAgIHByaW1hcnk9e3RydWV9XHJcbiAgICAgICAgICAgIGtleWJvYXJkRm9jdXNlZD17dHJ1ZX1cclxuICAgICAgICAgICAgb25Ub3VjaFRhcD17c2F2ZURpYWxvZ3VlfVxyXG4gICAgICAgICAgICAvPixcclxuICAgICAgICAgICAgPEZsYXRCdXR0b25cclxuICAgICAgICAgICAgbGFiZWw9XCJDYW5jZWxcIlxyXG4gICAgICAgICAgICBwcmltYXJ5PXt0cnVlfVxyXG4gICAgICAgICAgICBvblRvdWNoVGFwPXtjbG9zZURpYWxvZ3VlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nOiAnMTBweCd9fT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRGVmaW5lIGluZ3JlZGllbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM9e2FjdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWw9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlRGlhbG9ndWV9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b1Njcm9sbEJvZHlDb250ZW50PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8TnV0cmllbnRGb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVNhdmVTdWJtaXR9IGluaXRpYWxWYWx1ZXM9e2luaXRpYWxWYWx1ZXN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0RpYWxvZz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEluZ3JlZGllbnRzTGlzdENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxGbG9hdGluZ0FjdGlvbkJ1dHRvbiBvblRvdWNoVGFwPXtvcGVuRGlhbG9ndWV9IHN0eWxlPXtidXR0b25PdXRlclN0eWxlfSB6RGVwdGg9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudEFkZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxvYXRpbmdBY3Rpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkFkbWluLnByb3BUeXBlcyA9IHtcclxuICAgIG9wZW5EaWFsb2d1ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIGNsb3NlRGlhbG9ndWU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBzYXZlRGlhbG9ndWU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICBzYXZlSW5ncmVkaWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIGVkaXRJZDogUHJvcFR5cGVzLnN0cmluZywgLy8gb25seSBhdmFpbGFibGUgd2hlbiBEaWFsb2d1ZSBpcyBvcGVuIGZvciBlZGl0aW5nIGV4aXN0aW5nIG51dHJpZW50XHJcbiAgICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgIC8vIFRPRE86IGRlZmluZSBhbGwgaW5ncmVkaWVudHNcclxuICAgIGluaXRpYWxWYWx1ZXM6IFByb3BUeXBlcy5vYmplY3RcclxufTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHtBZG1pbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvQWRtaW4vQWRtaW4uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IHtMaXN0LCBMaXN0SXRlbX0gZnJvbSAnbWF0ZXJpYWwtdWkvTGlzdCc7XHJcbmltcG9ydCBDb250ZW50SW5ib3ggZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL2NvbnRlbnQvaW5ib3gnO1xyXG5cclxuaW1wb3J0IFBhcGVyIGZyb20gJ21hdGVyaWFsLXVpL1BhcGVyJztcclxuXHJcbi8qaW1wb3J0IEFjdGlvbkdyYWRlIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9hY3Rpb24vZ3JhZGUnO1xyXG5pbXBvcnQgQ29udGVudFNlbmQgZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL2NvbnRlbnQvc2VuZCc7XHJcbmltcG9ydCBDb250ZW50RHJhZnRzIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9jb250ZW50L2RyYWZ0cyc7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ21hdGVyaWFsLXVpL0RpdmlkZXInO1xyXG5pbXBvcnQgQWN0aW9uSW5mbyBmcm9tICdtYXRlcmlhbC11aS9zdmctaWNvbnMvYWN0aW9uL2luZm8nO1xyXG5pbXBvcnQgQWN0aW9uRGVsZXRlIGZyb20gJ21hdGVyaWFsLXVpL3N2Zy1pY29ucy9hY3Rpb24vZGVsZXRlJztcclxuaW1wb3J0IFN1YmhlYWRlciBmcm9tICdtYXRlcmlhbC11aS9TdWJoZWFkZXInOyovXHJcbi8qaW1wb3J0IHtDYXJkLCBDYXJkQWN0aW9ucywgQ2FyZEhlYWRlciwgQ2FyZE1lZGlhLCBDYXJkVGl0bGUsIENhcmRUZXh0fSBmcm9tICdtYXRlcmlhbC11aS9DYXJkJzsqL1xyXG5cclxuaW1wb3J0IHtSaWdodEljb25NZW51fSBmcm9tICcuL1JpZ2h0SWNvbk1lbnUnO1xyXG5cclxuY2xhc3MgSW5ncmVkaWVudHNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlciAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtpbmdyZWRpZW50cz17fSwgZGVsZXRlSW5ncmVkaWVudCwgZWRpdEluZ3JlZGllbnR9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFBhcGVyIHpEZXB0aD17Mn0gc3R5bGU9e3tib3JkZXI6ICcxcHggc29saWQgYmxhY2snfX0+XHJcbiAgICAgICAgICAgICAgICA8aDMgc3R5bGU9e3t0ZXh0QWxpZ246ICdsZWZ0JywgcGFkZGluZzogJzE1cHggMHB4IDE1cHggMjBweCcsIG1hcmdpbjogMH19PkF2YWlsYWJsZSBpbmdyZWRpZW50czwvaDM+XHJcbiAgICAgICAgICAgICAgICB7Lyo8Q2FyZEhlYWRlciB0aXRsZT1cIkxpc3Qgb2YgYXZhaWxhYmxlIGluZ3JlZGllbnRzXCIgLz4qL31cclxuICAgICAgICAgICAgICAgIHsvKjxEaXZpZGVyIC8+Ki99XHJcbiAgICAgICAgICAgICAgICA8TGlzdCBzdHlsZT17e2JvcmRlcjogJzFweCBzb2xpZCBibGFjaycsIG1hcmdpblRvcDogJzBweCcsIGhlaWdodDogJzQwMHB4Jywgb3ZlcmZsb3dZOiAnYXV0byd9fT5cclxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoaW5ncmVkaWVudHMpLm1hcCgoa2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LypSaWdodEljb25NZW51KGRlbGV0ZUluZ3JlZGllbnQsIGtleSkqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5VGV4dD17aW5ncmVkaWVudHNba2V5XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0SWNvbj17PENvbnRlbnRJbmJveCAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodEljb25CdXR0b249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmlnaHRJY29uTWVudSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUluZ3JlZGllbnQ9e2RlbGV0ZUluZ3JlZGllbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0SW5ncmVkaWVudD17ZWRpdEluZ3JlZGllbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50S2V5PXtrZXl9Lz59Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KS5yZXZlcnNlKCl9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuSW5ncmVkaWVudHNMaXN0LnByb3BUeXBlcyA9IHtcclxuICAgIGluZ3JlZGllbnRzOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgZGVsZXRlSW5ncmVkaWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIGVkaXRJbmdyZWRpZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHtJbmdyZWRpZW50c0xpc3R9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvQWRtaW4vSW5ncmVkaWVudHNMaXN0LmpzIiwiaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQge0luZ3JlZGllbnRzTGlzdH0gZnJvbSAnLi9JbmdyZWRpZW50c0xpc3QnO1xyXG5cclxuaW1wb3J0IHtkZWxldGVJbmdyZWRpZW50LCBlZGl0SW5ncmVkaWVudH0gZnJvbSAnbW9kdWxlcy9pbmdyZWRpZW50c0FkbWluJztcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICAgIGRlbGV0ZUluZ3JlZGllbnQ6IChpZCkgPT4ge2Rpc3BhdGNoKGRlbGV0ZUluZ3JlZGllbnQoaWQpKTt9LFxyXG4gICAgZWRpdEluZ3JlZGllbnQ6IChpZCkgPT4ge2Rpc3BhdGNoKGVkaXRJbmdyZWRpZW50KGlkKSk7fVxyXG59KTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICAgIGluZ3JlZGllbnRzOiBzdGF0ZS5pbmdyZWRpZW50cy5pbmdyZWRpZW50c1xyXG59KTtcclxuXHJcbmNvbnN0IEluZ3JlZGllbnRzTGlzdENvbnRhaW5lciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEluZ3JlZGllbnRzTGlzdCk7XHJcblxyXG5leHBvcnQge0luZ3JlZGllbnRzTGlzdENvbnRhaW5lcn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy9BZG1pbi9JbmdyZWRpZW50c0xpc3RDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtSb3csIENvbH0gZnJvbSAncmVhY3QtZmxleGJveC1ncmlkJztcclxuXHJcbmltcG9ydCB7RmllbGRDb21wb25lbnR9IGZyb20gJy4vRmllbGRDb21wb25lbnQnO1xyXG5cclxuY2xhc3MgQ2FyYm9oaWRyYXRlc0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8RmllbGRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdDYXJib2hpZHJhdGVzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdDYXJib2hpZHJhdGVzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCcgLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCB4cz17OX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17NH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdGaWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0ZpYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J1N1Z2FyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nU3VnYXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPENvbCB4cz17NH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdBQTEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdBQTEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPiovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7Q2FyYm9oaWRyYXRlc0NvbXBvbmVudH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy9BZG1pbi9OdXRyaWVudEZvcm0vQ2FyYm9oaWRyYXRlc0NvbXBvbmVudC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge1JvdywgQ29sfSBmcm9tICdyZWFjdC1mbGV4Ym94LWdyaWQnO1xyXG5cclxuaW1wb3J0IHtGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9GaWVsZENvbXBvbmVudCc7XHJcblxyXG5jbGFzcyBGYXRzQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J0ZhdHMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0ZhdHMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0JyAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHhzPXs5fT5cclxuICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXs0fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J1NhdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1NhdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdQb2x5dW5zJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nUG9seXVucydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXs0fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J01vbm91bnMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdNb25vdW5zJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge0ZhdHNDb21wb25lbnR9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvQWRtaW4vTnV0cmllbnRGb3JtL0ZhdHNDb21wb25lbnQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ21hdGVyaWFsLXVpL1RleHRGaWVsZCc7XHJcbmltcG9ydCBBdXRvQ29tcGxldGUgZnJvbSAnbWF0ZXJpYWwtdWkvQXV0b0NvbXBsZXRlJztcclxuXHJcbmNsYXNzIEZvcm1Db250cm9sV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuXHJcbiAgICAgICAgLy8gY2F0Y2hpbmcgcGxhY2Vob2xkZXIgbm90IHRvIGZvcndhcmQgaXQgdG8gVGV4dEZpZWxkXHJcbiAgICAgICAgY29uc3Qge2xhYmVsLCBwbGFjZWhvbGRlciwgaW5wdXQsIG1ldGEsIGRhdGFTb3VyY2UsIC4uLnByb3BzfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHsvKkVuaGFuY2VkIEZvcm1Db250cm9sIGlmIGl0IGlzIHRoZSBuYW1lIG9mIHRoZSBpbmdyZWRpZW50LCByYXRoZXIgdGhhbiBxdWFudGl0eSovfVxyXG4gICAgICAgICAgICAgICAge2lucHV0Lm5hbWUubWF0Y2goL25hbWUkLykgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxBdXRvQ29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ9e2xhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e09iamVjdC52YWx1ZXMoZGF0YVNvdXJjZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFRleHQ9e21ldGEudmlzaXRlZCA9PT0gZmFsc2UgPyBpbnB1dC52YWx1ZSA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9IC8+IDpcclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0PXtsYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm9wc30gLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuXHJcbn0pO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xyXG4gICAgZGF0YVNvdXJjZTogc3RhdGUuaW5ncmVkaWVudHMuaW5ncmVkaWVudHNcclxufSk7XHJcblxyXG5jb25zdCBGb3JtQ29udHJvbFdyYXBwZXJDb250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShGb3JtQ29udHJvbFdyYXBwZXIpO1xyXG5cclxuZXhwb3J0IHtGb3JtQ29udHJvbFdyYXBwZXJDb250YWluZXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvQWRtaW4vTnV0cmllbnRGb3JtL0Zvcm1Db250cm9sV3JhcHBlckNvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmltcG9ydCB7cmVkdXhGb3JtfSBmcm9tICdyZWR1eC1mb3JtJztcclxuaW1wb3J0IFJhaXNlZEJ1dHRvbiBmcm9tICdtYXRlcmlhbC11aS9SYWlzZWRCdXR0b24nO1xyXG5cclxuaW1wb3J0IHtGaWVsZENvbXBvbmVudH0gZnJvbSAnLi9GaWVsZENvbXBvbmVudCc7XHJcbi8qaW1wb3J0IHtEZWJvdW5jZUZpZWxkQ29tcG9uZW50fSBmcm9tICcuL0RlYm91bmNlRmllbGRDb21wb25lbnQnOyovXHJcbmltcG9ydCB7UHJvdGVpbnNDb21wb25lbnR9IGZyb20gJy4vUHJvdGVpbnNDb21wb25lbnQnO1xyXG5pbXBvcnQge0ZhdHNDb21wb25lbnR9IGZyb20gJy4vRmF0c0NvbXBvbmVudCc7XHJcbmltcG9ydCB7Q2FyYm9oaWRyYXRlc0NvbXBvbmVudH0gZnJvbSAnLi9DYXJib2hpZHJhdGVzQ29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7R3JpZCwgUm93LCBDb2x9IGZyb20gJ3JlYWN0LWZsZXhib3gtZ3JpZCc7XHJcblxyXG5jbGFzcyBOdXRyaWVudEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMucHJvcHMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGZsdWlkPXt0cnVlfSBzdHlsZT17e3BhZGRpbmc6ICcwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IG9mZnNldD17MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J25hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nTnV0cmllbnQgbmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm90ZWluc0NvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYXRzQ29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmJvaGlkcmF0ZXNDb21wb25lbnQgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IG9mZnNldD17MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J1NvdXJjZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdTb3VyY2UgbGluaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHsvKjxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSAgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhaXNlZEJ1dHRvbiB0eXBlPSdzdWJtaXQnIGRpc2FibGVkPXtmYWxzZSAmJiAhdGhpcy5wcm9wcy5kaXJ0eX0gIHN0eWxlPXt7bWFyZ2luTGVmdDogJzVweCcsIG1hcmdpblJpZ2h0OiAnNXB4JywgcGFkZGluZ0xlZnQ6ICcxMHB4JywgcGFkZGluZ1JpZ2h0OiAnMTBweCd9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZSBudXRyaWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWlzZWRCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmFpc2VkQnV0dG9uIHR5cGU9J2J1dHRvbicgZGlzYWJsZWQ9e2ZhbHNlICYmICF0aGlzLnByb3BzLmRpcnR5fSBvbkNsaWNrPXt0aGlzLnByb3BzLnJlc2V0fSAgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnNXB4JywgbWFyZ2luUmlnaHQ6ICc1cHgnLCBwYWRkaW5nTGVmdDogJzEwcHgnLCBwYWRkaW5nUmlnaHQ6ICcxMHB4J319ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmFpc2VkQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L1Jvdz4qL31cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5sZXQgTnV0cmllbnRGb3JtUmVkdXhXcmFwcGVyID0gcmVkdXhGb3JtKHtcclxuICAgIGZvcm06ICdtYW5hZ2VOdXRyaWVudHMnLFxyXG4gICAgZGVzdHJveU9uVW5tb3VudDogdHJ1ZVxyXG59KShOdXRyaWVudEZvcm0pO1xyXG5cclxuLypOdXRyaWVudEZvcm1SZWR1eFdyYXBwZXIgPSBjb25uZWN0KFxyXG4gICAgc3RhdGUgPT4gKHtcclxuXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlczoge1xyXG4gICAgICAgICAgICBuYW1lOiAncmFmYScsXHJcbiAgICAgICAgICAgIEFBMTogMjFcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4pKE51dHJpZW50Rm9ybVJlZHV4V3JhcHBlcik7Ki9cclxuXHJcbmV4cG9ydCB7TnV0cmllbnRGb3JtUmVkdXhXcmFwcGVyIGFzIE51dHJpZW50Rm9ybX07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy9BZG1pbi9OdXRyaWVudEZvcm0vTnV0cmllbnRGb3JtLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7Um93LCBDb2x9IGZyb20gJ3JlYWN0LWZsZXhib3gtZ3JpZCc7XHJcblxyXG5pbXBvcnQge0ZpZWxkQ29tcG9uZW50fSBmcm9tICcuL0ZpZWxkQ29tcG9uZW50JztcclxuXHJcbmNsYXNzIFByb3RlaW5zQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaWVsZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J1Byb3RlaW5zJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdQcm90ZWlucydcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnIC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgeHM9ezl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezR9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD0nQUExJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQUExJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdBQTQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdBQTQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J0FBNydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0FBNydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdBQTInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdBQTInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J0FBNSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0FBNSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD0nQUE4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQUE4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezR9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZENvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD0nQUEzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQUEzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbnRlciB0ZXh0JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPSdBQTYnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdBQTYnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHRleHQnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9J0FBOSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0FBOSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgdGV4dCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtQcm90ZWluc0NvbXBvbmVudH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy9BZG1pbi9OdXRyaWVudEZvcm0vUHJvdGVpbnNDb21wb25lbnQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5cclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnbWF0ZXJpYWwtdWkvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSAnbWF0ZXJpYWwtdWkvc3ZnLWljb25zL25hdmlnYXRpb24vbW9yZS12ZXJ0JztcclxuaW1wb3J0IEljb25NZW51IGZyb20gJ21hdGVyaWFsLXVpL0ljb25NZW51JztcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ21hdGVyaWFsLXVpL01lbnVJdGVtJztcclxuXHJcbmltcG9ydCB7LypncmV5NDAwLCAqL2RhcmtCbGFjay8qLCBsaWdodEJsYWNrKi99IGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcy9jb2xvcnMnO1xyXG5cclxuY29uc3QgaWNvbkJ1dHRvbkVsZW1lbnQgPSAoXHJcbiAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgIHRvdWNoPXt0cnVlfVxyXG4gICAgICAgIHRvb2x0aXA9XCJtb3JlXCJcclxuICAgICAgICB0b29sdGlwUG9zaXRpb249XCJib3R0b20tbGVmdFwiXHJcbiAgICA+XHJcbiAgICAgICAgPE1vcmVWZXJ0SWNvbiBjb2xvcj17ZGFya0JsYWNrfSAvPlxyXG4gICAgPC9JY29uQnV0dG9uPlxyXG4pO1xyXG5cclxuY2xhc3MgUmlnaHRJY29uTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgZWRpdEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5lZGl0SW5ncmVkaWVudCh0aGlzLnByb3BzLmVsZW1lbnRLZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kZWxldGVJbmdyZWRpZW50KHRoaXMucHJvcHMuZWxlbWVudEtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuXHJcbiAgICAgICAgLy8gbmVlZCB0byBjYXRjaCBzb21lIHByb3BlcnRpZXMsIG5vdCB0byBwYXNzIHRoZW0gZnVydGhlclxyXG4gICAgICAgIGNvbnN0IHtlbGVtZW50S2V5LCBkZWxldGVJbmdyZWRpZW50LCBlZGl0SW5ncmVkaWVudCwgLi4ucHJvcHN9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEljb25NZW51IHsuLi5wcm9wc30gaWNvbkJ1dHRvbkVsZW1lbnQ9e2ljb25CdXR0b25FbGVtZW50fT5cclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvblRvdWNoVGFwPXt0aGlzLmVkaXRIYW5kbGVyfT5FZGl0PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvblRvdWNoVGFwPXt0aGlzLmRlbGV0ZUhhbmRsZXJ9PkRlbGV0ZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDwvSWNvbk1lbnU+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuLypjb25zdCBSaWdodEljb25NZW51ID0gKGRlbGV0ZUluZ3JlZGllbnQsIGVsZW1lbnRLZXkpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEljb25NZW51IGljb25CdXR0b25FbGVtZW50PXtpY29uQnV0dG9uRWxlbWVudH0gb25JdGVtVG91Y2hUYXA9eygpID0+IHtkZWxldGVJbmdyZWRpZW50KGVsZW1lbnRLZXkpO319PlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0+RWRpdDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbT5EZWxldGU8L01lbnVJdGVtPlxyXG4gICAgICAgIDwvSWNvbk1lbnU+XHJcbiAgICApOyAgXHJcbn07Ki9cclxuXHJcblJpZ2h0SWNvbk1lbnUucHJvcFR5cGVzID0ge1xyXG4gICAgLy8gVE9ETzogY2hlY2sgZm9yIG90aGVyIHByb3BlcnRpZXNcclxuICAgIGVkaXRJbmdyZWRpZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgZGVsZXRlSW5ncmVkaWVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIGVsZW1lbnRLZXk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCB7UmlnaHRJY29uTWVudX07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yb3V0ZXMvQWRtaW4vUmlnaHRJY29uTWVudS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG5cbnZhciBfZXh0ZW5kczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmRzMik7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YnKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX2tleWNvZGUgPSByZXF1aXJlKCdrZXljb2RlJyk7XG5cbnZhciBfa2V5Y29kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXljb2RlKTtcblxudmFyIF9UZXh0RmllbGQgPSByZXF1aXJlKCcuLi9UZXh0RmllbGQnKTtcblxudmFyIF9UZXh0RmllbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dEZpZWxkKTtcblxudmFyIF9NZW51ID0gcmVxdWlyZSgnLi4vTWVudScpO1xuXG52YXIgX01lbnUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTWVudSk7XG5cbnZhciBfTWVudUl0ZW0gPSByZXF1aXJlKCcuLi9NZW51SXRlbScpO1xuXG52YXIgX01lbnVJdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbnVJdGVtKTtcblxudmFyIF9EaXZpZGVyID0gcmVxdWlyZSgnLi4vRGl2aWRlcicpO1xuXG52YXIgX0RpdmlkZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRGl2aWRlcik7XG5cbnZhciBfUG9wb3ZlciA9IHJlcXVpcmUoJy4uL1BvcG92ZXIvUG9wb3ZlcicpO1xuXG52YXIgX1BvcG92ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9wb3Zlcik7XG5cbnZhciBfcHJvcFR5cGVzMyA9IHJlcXVpcmUoJy4uL3V0aWxzL3Byb3BUeXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0LCBzdGF0ZSkge1xuICB2YXIgYW5jaG9yRWwgPSBzdGF0ZS5hbmNob3JFbDtcbiAgdmFyIGZ1bGxXaWR0aCA9IHByb3BzLmZ1bGxXaWR0aDtcblxuXG4gIHZhciBzdHlsZXMgPSB7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiBmdWxsV2lkdGggPyAnMTAwJScgOiAyNTZcbiAgICB9LFxuICAgIG1lbnU6IHtcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB3aWR0aDogZnVsbFdpZHRoID8gJzEwMCUnIDogMjU2XG4gICAgfSxcbiAgICBpbm5lckRpdjoge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgfVxuICB9O1xuXG4gIGlmIChhbmNob3JFbCAmJiBmdWxsV2lkdGgpIHtcbiAgICBzdHlsZXMucG9wb3ZlciA9IHtcbiAgICAgIHdpZHRoOiBhbmNob3JFbC5jbGllbnRXaWR0aFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG52YXIgQXV0b0NvbXBsZXRlID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoQXV0b0NvbXBsZXRlLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBBdXRvQ29tcGxldGUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgQXV0b0NvbXBsZXRlKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IEF1dG9Db21wbGV0ZS5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoQXV0b0NvbXBsZXRlKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBhbmNob3JFbDogbnVsbCxcbiAgICAgIGZvY3VzVGV4dEZpZWxkOiB0cnVlLFxuICAgICAgb3BlbjogZmFsc2UsXG4gICAgICBzZWFyY2hUZXh0OiB1bmRlZmluZWRcbiAgICB9LCBfdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBPbmx5IHRha2UgaW50byBhY2NvdW50IHRoZSBQb3BvdmVyIGNsaWNrQXdheSB3aGVuIHdlIGFyZVxuICAgICAgLy8gbm90IGZvY3VzaW5nIHRoZSBUZXh0RmllbGQuXG4gICAgICBpZiAoIV90aGlzLnN0YXRlLmZvY3VzVGV4dEZpZWxkKSB7XG4gICAgICAgIF90aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBLZWVwIHRoZSBUZXh0RmllbGQgZm9jdXNlZFxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVJdGVtVG91Y2hUYXAgPSBmdW5jdGlvbiAoZXZlbnQsIGNoaWxkKSB7XG4gICAgICB2YXIgZGF0YVNvdXJjZSA9IF90aGlzLnByb3BzLmRhdGFTb3VyY2U7XG4gICAgICB2YXIgaW5kZXggPSBwYXJzZUludChjaGlsZC5rZXksIDEwKTtcbiAgICAgIHZhciBjaG9zZW5SZXF1ZXN0ID0gZGF0YVNvdXJjZVtpbmRleF07XG4gICAgICB2YXIgc2VhcmNoVGV4dCA9IF90aGlzLmNob3NlblJlcXVlc3RUZXh0KGNob3NlblJlcXVlc3QpO1xuXG4gICAgICB2YXIgdXBkYXRlSW5wdXQgPSBmdW5jdGlvbiB1cGRhdGVJbnB1dCgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uVXBkYXRlSW5wdXQoc2VhcmNoVGV4dCwgX3RoaXMucHJvcHMuZGF0YVNvdXJjZSwge1xuICAgICAgICAgIHNvdXJjZTogJ3RvdWNoVGFwJ1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBfdGhpcy50aW1lclRvdWNoVGFwQ2xvc2VJZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLnRpbWVyVG91Y2hUYXBDbG9zZUlkID0gbnVsbDtcbiAgICAgICAgICBfdGhpcy5jbG9zZSgpO1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uTmV3UmVxdWVzdChjaG9zZW5SZXF1ZXN0LCBpbmRleCk7XG4gICAgICAgIH0sIF90aGlzLnByb3BzLm1lbnVDbG9zZURlbGF5KTtcbiAgICAgIH07XG5cbiAgICAgIGlmICh0eXBlb2YgX3RoaXMucHJvcHMuc2VhcmNoVGV4dCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdXBkYXRlSW5wdXQoKTtcbiAgICAgICAgX3RoaXMudGltZXJUb3VjaFRhcENsb3NlSWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzZWFyY2hUZXh0OiBzZWFyY2hUZXh0XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB1cGRhdGVJbnB1dCgpO1xuICAgICAgICAgIF90aGlzLnRpbWVyVG91Y2hUYXBDbG9zZUlkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmNob3NlblJlcXVlc3RUZXh0ID0gZnVuY3Rpb24gKGNob3NlblJlcXVlc3QpIHtcbiAgICAgIGlmICh0eXBlb2YgY2hvc2VuUmVxdWVzdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGNob3NlblJlcXVlc3Q7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY2hvc2VuUmVxdWVzdFtfdGhpcy5wcm9wcy5kYXRhU291cmNlQ29uZmlnLnRleHRdO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZUVzY0tleURvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5jbG9zZSgpO1xuICAgIH0sIF90aGlzLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbktleURvd24pIF90aGlzLnByb3BzLm9uS2V5RG93bihldmVudCk7XG5cbiAgICAgIHN3aXRjaCAoKDAsIF9rZXljb2RlMi5kZWZhdWx0KShldmVudCkpIHtcbiAgICAgICAgY2FzZSAnZW50ZXInOlxuICAgICAgICAgIF90aGlzLmNsb3NlKCk7XG4gICAgICAgICAgdmFyIHNlYXJjaFRleHQgPSBfdGhpcy5zdGF0ZS5zZWFyY2hUZXh0O1xuICAgICAgICAgIGlmIChzZWFyY2hUZXh0ICE9PSAnJykge1xuICAgICAgICAgICAgX3RoaXMucHJvcHMub25OZXdSZXF1ZXN0KHNlYXJjaFRleHQsIC0xKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZXNjJzpcbiAgICAgICAgICBfdGhpcy5jbG9zZSgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgICAgIGZvY3VzVGV4dEZpZWxkOiBmYWxzZSxcbiAgICAgICAgICAgIGFuY2hvckVsOiBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUoX3RoaXMucmVmcy5zZWFyY2hUZXh0RmllbGQpXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBzZWFyY2hUZXh0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAvLyBNYWtlIHN1cmUgdGhhdCB3ZSBoYXZlIGEgbmV3IHNlYXJjaFRleHQuXG4gICAgICAvLyBGaXggYW4gaXNzdWUgd2l0aCBhIENvcmRvdmEgV2Vidmlld1xuICAgICAgaWYgKHNlYXJjaFRleHQgPT09IF90aGlzLnN0YXRlLnNlYXJjaFRleHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlYXJjaFRleHQ6IHNlYXJjaFRleHQsXG4gICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgIGFuY2hvckVsOiBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUoX3RoaXMucmVmcy5zZWFyY2hUZXh0RmllbGQpXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uVXBkYXRlSW5wdXQoc2VhcmNoVGV4dCwgX3RoaXMucHJvcHMuZGF0YVNvdXJjZSwge1xuICAgICAgICAgIHNvdXJjZTogJ2NoYW5nZSdcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LCBfdGhpcy5oYW5kbGVCbHVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMuc3RhdGUuZm9jdXNUZXh0RmllbGQgJiYgX3RoaXMudGltZXJUb3VjaFRhcENsb3NlSWQgPT09IG51bGwpIHtcbiAgICAgICAgX3RoaXMudGltZXJCbHVyQ2xvc2UgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5jbG9zZSgpO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkJsdXIoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZUZvY3VzID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIV90aGlzLnN0YXRlLm9wZW4gJiYgX3RoaXMucHJvcHMub3Blbk9uRm9jdXMpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG9wZW46IHRydWUsXG4gICAgICAgICAgYW5jaG9yRWw6IF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZShfdGhpcy5yZWZzLnNlYXJjaFRleHRGaWVsZClcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNUZXh0RmllbGQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Gb2N1cykge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkZvY3VzKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoQXV0b0NvbXBsZXRlLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHRoaXMucmVxdWVzdHNMaXN0ID0gW107XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlbjogdGhpcy5wcm9wcy5vcGVuLFxuICAgICAgICBzZWFyY2hUZXh0OiB0aGlzLnByb3BzLnNlYXJjaFRleHQgfHwgJydcbiAgICAgIH0pO1xuICAgICAgdGhpcy50aW1lclRvdWNoVGFwQ2xvc2VJZCA9IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2hUZXh0ICE9PSBuZXh0UHJvcHMuc2VhcmNoVGV4dCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBzZWFyY2hUZXh0OiBuZXh0UHJvcHMuc2VhcmNoVGV4dFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnByb3BzLm9wZW4gIT09IG5leHRQcm9wcy5vcGVuKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG9wZW46IG5leHRQcm9wcy5vcGVuLFxuICAgICAgICAgIGFuY2hvckVsOiBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcy5yZWZzLnNlYXJjaFRleHRGaWVsZClcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyVG91Y2hUYXBDbG9zZUlkKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyQmx1ckNsb3NlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbG9zZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICBhbmNob3JFbDogbnVsbFxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xvc2UpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYmx1cicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICB0aGlzLnJlZnMuc2VhcmNoVGV4dEZpZWxkLmJsdXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmb2N1cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgdGhpcy5yZWZzLnNlYXJjaFRleHRGaWVsZC5mb2N1cygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhbmNob3JPcmlnaW4gPSBfcHJvcHMuYW5jaG9yT3JpZ2luLFxuICAgICAgICAgIGFuaW1hdGVkID0gX3Byb3BzLmFuaW1hdGVkLFxuICAgICAgICAgIGFuaW1hdGlvbiA9IF9wcm9wcy5hbmltYXRpb24sXG4gICAgICAgICAgZGF0YVNvdXJjZSA9IF9wcm9wcy5kYXRhU291cmNlLFxuICAgICAgICAgIGRhdGFTb3VyY2VDb25maWcgPSBfcHJvcHMuZGF0YVNvdXJjZUNvbmZpZyxcbiAgICAgICAgICBkaXNhYmxlRm9jdXNSaXBwbGUgPSBfcHJvcHMuZGlzYWJsZUZvY3VzUmlwcGxlLFxuICAgICAgICAgIGVycm9yU3R5bGUgPSBfcHJvcHMuZXJyb3JTdHlsZSxcbiAgICAgICAgICBmbG9hdGluZ0xhYmVsVGV4dCA9IF9wcm9wcy5mbG9hdGluZ0xhYmVsVGV4dCxcbiAgICAgICAgICBmaWx0ZXIgPSBfcHJvcHMuZmlsdGVyLFxuICAgICAgICAgIGZ1bGxXaWR0aCA9IF9wcm9wcy5mdWxsV2lkdGgsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgaGludFRleHQgPSBfcHJvcHMuaGludFRleHQsXG4gICAgICAgICAgbWF4U2VhcmNoUmVzdWx0cyA9IF9wcm9wcy5tYXhTZWFyY2hSZXN1bHRzLFxuICAgICAgICAgIG1lbnVDbG9zZURlbGF5ID0gX3Byb3BzLm1lbnVDbG9zZURlbGF5LFxuICAgICAgICAgIHRleHRGaWVsZFN0eWxlID0gX3Byb3BzLnRleHRGaWVsZFN0eWxlLFxuICAgICAgICAgIG1lbnVTdHlsZSA9IF9wcm9wcy5tZW51U3R5bGUsXG4gICAgICAgICAgbWVudVByb3BzID0gX3Byb3BzLm1lbnVQcm9wcyxcbiAgICAgICAgICBsaXN0U3R5bGUgPSBfcHJvcHMubGlzdFN0eWxlLFxuICAgICAgICAgIHRhcmdldE9yaWdpbiA9IF9wcm9wcy50YXJnZXRPcmlnaW4sXG4gICAgICAgICAgb25CbHVyID0gX3Byb3BzLm9uQmx1cixcbiAgICAgICAgICBvbkNsb3NlID0gX3Byb3BzLm9uQ2xvc2UsXG4gICAgICAgICAgb25Gb2N1cyA9IF9wcm9wcy5vbkZvY3VzLFxuICAgICAgICAgIG9uS2V5RG93biA9IF9wcm9wcy5vbktleURvd24sXG4gICAgICAgICAgb25OZXdSZXF1ZXN0ID0gX3Byb3BzLm9uTmV3UmVxdWVzdCxcbiAgICAgICAgICBvblVwZGF0ZUlucHV0ID0gX3Byb3BzLm9uVXBkYXRlSW5wdXQsXG4gICAgICAgICAgb3Blbk9uRm9jdXMgPSBfcHJvcHMub3Blbk9uRm9jdXMsXG4gICAgICAgICAgcG9wb3ZlclByb3BzID0gX3Byb3BzLnBvcG92ZXJQcm9wcyxcbiAgICAgICAgICBzZWFyY2hUZXh0UHJvcCA9IF9wcm9wcy5zZWFyY2hUZXh0LFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2FuY2hvck9yaWdpbicsICdhbmltYXRlZCcsICdhbmltYXRpb24nLCAnZGF0YVNvdXJjZScsICdkYXRhU291cmNlQ29uZmlnJywgJ2Rpc2FibGVGb2N1c1JpcHBsZScsICdlcnJvclN0eWxlJywgJ2Zsb2F0aW5nTGFiZWxUZXh0JywgJ2ZpbHRlcicsICdmdWxsV2lkdGgnLCAnc3R5bGUnLCAnaGludFRleHQnLCAnbWF4U2VhcmNoUmVzdWx0cycsICdtZW51Q2xvc2VEZWxheScsICd0ZXh0RmllbGRTdHlsZScsICdtZW51U3R5bGUnLCAnbWVudVByb3BzJywgJ2xpc3RTdHlsZScsICd0YXJnZXRPcmlnaW4nLCAnb25CbHVyJywgJ29uQ2xvc2UnLCAnb25Gb2N1cycsICdvbktleURvd24nLCAnb25OZXdSZXF1ZXN0JywgJ29uVXBkYXRlSW5wdXQnLCAnb3Blbk9uRm9jdXMnLCAncG9wb3ZlclByb3BzJywgJ3NlYXJjaFRleHQnXSk7XG5cbiAgICAgIHZhciBfcmVmMiA9IHBvcG92ZXJQcm9wcyB8fCB7fSxcbiAgICAgICAgICBwb3BvdmVyU3R5bGUgPSBfcmVmMi5zdHlsZSxcbiAgICAgICAgICBwb3BvdmVyT3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcmVmMiwgWydzdHlsZSddKTtcblxuICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgb3BlbiA9IF9zdGF0ZS5vcGVuLFxuICAgICAgICAgIGFuY2hvckVsID0gX3N0YXRlLmFuY2hvckVsLFxuICAgICAgICAgIHNlYXJjaFRleHQgPSBfc3RhdGUuc2VhcmNoVGV4dCxcbiAgICAgICAgICBmb2N1c1RleHRGaWVsZCA9IF9zdGF0ZS5mb2N1c1RleHRGaWVsZDtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0LCB0aGlzLnN0YXRlKTtcblxuICAgICAgdmFyIHJlcXVlc3RzTGlzdCA9IFtdO1xuXG4gICAgICBkYXRhU291cmNlLmV2ZXJ5KGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICBzd2l0Y2ggKHR5cGVvZiBpdGVtID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGl0ZW0pKSB7XG4gICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGlmIChmaWx0ZXIoc2VhcmNoVGV4dCwgaXRlbSwgaXRlbSkpIHtcbiAgICAgICAgICAgICAgcmVxdWVzdHNMaXN0LnB1c2goe1xuICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9NZW51SXRlbTIuZGVmYXVsdCwge1xuICAgICAgICAgICAgICAgICAgaW5uZXJEaXZTdHlsZTogc3R5bGVzLmlubmVyRGl2LFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5VGV4dDogaXRlbSxcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVGb2N1c1JpcHBsZTogZGlzYWJsZUZvY3VzUmlwcGxlLFxuICAgICAgICAgICAgICAgICAga2V5OiBpbmRleFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGl0ZW0gJiYgdHlwZW9mIGl0ZW1bX3RoaXMyLnByb3BzLmRhdGFTb3VyY2VDb25maWcudGV4dF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHZhciBpdGVtVGV4dCA9IGl0ZW1bX3RoaXMyLnByb3BzLmRhdGFTb3VyY2VDb25maWcudGV4dF07XG4gICAgICAgICAgICAgIGlmICghX3RoaXMyLnByb3BzLmZpbHRlcihzZWFyY2hUZXh0LCBpdGVtVGV4dCwgaXRlbSkpIGJyZWFrO1xuXG4gICAgICAgICAgICAgIHZhciBpdGVtVmFsdWUgPSBpdGVtW190aGlzMi5wcm9wcy5kYXRhU291cmNlQ29uZmlnLnZhbHVlXTtcbiAgICAgICAgICAgICAgaWYgKGl0ZW1WYWx1ZS50eXBlICYmIChpdGVtVmFsdWUudHlwZS5tdWlOYW1lID09PSBfTWVudUl0ZW0yLmRlZmF1bHQubXVpTmFtZSB8fCBpdGVtVmFsdWUudHlwZS5tdWlOYW1lID09PSBfRGl2aWRlcjIuZGVmYXVsdC5tdWlOYW1lKSkge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RzTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW1UZXh0LFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoaXRlbVZhbHVlLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVGb2N1c1JpcHBsZTogZGlzYWJsZUZvY3VzUmlwcGxlXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RzTGlzdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHRleHQ6IGl0ZW1UZXh0LFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9NZW51SXRlbTIuZGVmYXVsdCwge1xuICAgICAgICAgICAgICAgICAgICBpbm5lckRpdlN0eWxlOiBzdHlsZXMuaW5uZXJEaXYsXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnlUZXh0OiBpdGVtVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUZvY3VzUmlwcGxlOiBkaXNhYmxlRm9jdXNSaXBwbGUsXG4gICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXhcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAvLyBEbyBub3RoaW5nXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIShtYXhTZWFyY2hSZXN1bHRzICYmIG1heFNlYXJjaFJlc3VsdHMgPiAwICYmIHJlcXVlc3RzTGlzdC5sZW5ndGggPT09IG1heFNlYXJjaFJlc3VsdHMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVxdWVzdHNMaXN0ID0gcmVxdWVzdHNMaXN0O1xuXG4gICAgICB2YXIgbWVudSA9IG9wZW4gJiYgcmVxdWVzdHNMaXN0Lmxlbmd0aCA+IDAgJiYgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9NZW51Mi5kZWZhdWx0LFxuICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHtcbiAgICAgICAgICByZWY6ICdtZW51JyxcbiAgICAgICAgICBhdXRvV2lkdGg6IGZhbHNlLFxuICAgICAgICAgIGRpc2FibGVBdXRvRm9jdXM6IGZvY3VzVGV4dEZpZWxkLFxuICAgICAgICAgIG9uRXNjS2V5RG93bjogdGhpcy5oYW5kbGVFc2NLZXlEb3duLFxuICAgICAgICAgIGluaXRpYWxseUtleWJvYXJkRm9jdXNlZDogdHJ1ZSxcbiAgICAgICAgICBvbkl0ZW1Ub3VjaFRhcDogdGhpcy5oYW5kbGVJdGVtVG91Y2hUYXAsXG4gICAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlTW91c2VEb3duLFxuICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLm1lbnUsIG1lbnVTdHlsZSksXG4gICAgICAgICAgbGlzdFN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmxpc3QsIGxpc3RTdHlsZSlcbiAgICAgICAgfSwgbWVudVByb3BzKSxcbiAgICAgICAgcmVxdWVzdHNMaXN0Lm1hcChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgIHJldHVybiBpLnZhbHVlO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSkgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1RleHRGaWVsZDIuZGVmYXVsdCwgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7XG4gICAgICAgICAgcmVmOiAnc2VhcmNoVGV4dEZpZWxkJyxcbiAgICAgICAgICBhdXRvQ29tcGxldGU6ICdvZmYnLFxuICAgICAgICAgIG9uQmx1cjogdGhpcy5oYW5kbGVCbHVyLFxuICAgICAgICAgIG9uRm9jdXM6IHRoaXMuaGFuZGxlRm9jdXMsXG4gICAgICAgICAgb25LZXlEb3duOiB0aGlzLmhhbmRsZUtleURvd24sXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQ6IGZsb2F0aW5nTGFiZWxUZXh0LFxuICAgICAgICAgIGhpbnRUZXh0OiBoaW50VGV4dCxcbiAgICAgICAgICBmdWxsV2lkdGg6IGZ1bGxXaWR0aCxcbiAgICAgICAgICBtdWx0aUxpbmU6IGZhbHNlLFxuICAgICAgICAgIGVycm9yU3R5bGU6IGVycm9yU3R5bGUsXG4gICAgICAgICAgc3R5bGU6IHRleHRGaWVsZFN0eWxlXG4gICAgICAgIH0sIG90aGVyLCB7XG4gICAgICAgICAgLy8gdmFsdWUgYW5kIG9uQ2hhbmdlIGFyZSBpZGlvbWF0aWMgcHJvcGVydGllcyBvZnRlbiBsZWFrZWQuXG4gICAgICAgICAgLy8gV2UgcHJldmVudCB0aGVpciBvdmVycmlkZXMgaW4gb3JkZXIgdG8gcmVkdWNlIHBvdGVudGlhbCBidWdzLlxuICAgICAgICAgIHZhbHVlOiBzZWFyY2hUZXh0LFxuICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUNoYW5nZVxuICAgICAgICB9KSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9Qb3BvdmVyMi5kZWZhdWx0LFxuICAgICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe1xuICAgICAgICAgICAgc3R5bGU6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLnBvcG92ZXIsIHBvcG92ZXJTdHlsZSksXG4gICAgICAgICAgICBjYW5BdXRvUG9zaXRpb246IGZhbHNlLFxuICAgICAgICAgICAgYW5jaG9yT3JpZ2luOiBhbmNob3JPcmlnaW4sXG4gICAgICAgICAgICB0YXJnZXRPcmlnaW46IHRhcmdldE9yaWdpbixcbiAgICAgICAgICAgIG9wZW46IG9wZW4sXG4gICAgICAgICAgICBhbmNob3JFbDogYW5jaG9yRWwsXG4gICAgICAgICAgICB1c2VMYXllckZvckNsaWNrQXdheTogZmFsc2UsXG4gICAgICAgICAgICBvblJlcXVlc3RDbG9zZTogdGhpcy5oYW5kbGVSZXF1ZXN0Q2xvc2UsXG4gICAgICAgICAgICBhbmltYXRlZDogYW5pbWF0ZWQsXG4gICAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGlvblxuICAgICAgICAgIH0sIHBvcG92ZXJPdGhlciksXG4gICAgICAgICAgbWVudVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQXV0b0NvbXBsZXRlO1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuQXV0b0NvbXBsZXRlLmRlZmF1bHRQcm9wcyA9IHtcbiAgYW5jaG9yT3JpZ2luOiB7XG4gICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgIGhvcml6b250YWw6ICdsZWZ0J1xuICB9LFxuICBhbmltYXRlZDogdHJ1ZSxcbiAgZGF0YVNvdXJjZUNvbmZpZzoge1xuICAgIHRleHQ6ICd0ZXh0JyxcbiAgICB2YWx1ZTogJ3ZhbHVlJ1xuICB9LFxuICBkaXNhYmxlRm9jdXNSaXBwbGU6IHRydWUsXG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKHNlYXJjaFRleHQsIGtleSkge1xuICAgIHJldHVybiBzZWFyY2hUZXh0ICE9PSAnJyAmJiBrZXkuaW5kZXhPZihzZWFyY2hUZXh0KSAhPT0gLTE7XG4gIH0sXG4gIGZ1bGxXaWR0aDogZmFsc2UsXG4gIG9wZW46IGZhbHNlLFxuICBvcGVuT25Gb2N1czogZmFsc2UsXG4gIG9uVXBkYXRlSW5wdXQ6IGZ1bmN0aW9uIG9uVXBkYXRlSW5wdXQoKSB7fSxcbiAgb25OZXdSZXF1ZXN0OiBmdW5jdGlvbiBvbk5ld1JlcXVlc3QoKSB7fSxcbiAgbWVudUNsb3NlRGVsYXk6IDMwMCxcbiAgdGFyZ2V0T3JpZ2luOiB7XG4gICAgdmVydGljYWw6ICd0b3AnLFxuICAgIGhvcml6b250YWw6ICdsZWZ0J1xuICB9XG59O1xuQXV0b0NvbXBsZXRlLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5BdXRvQ29tcGxldGUucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKipcbiAgICogTG9jYXRpb24gb2YgdGhlIGFuY2hvciBmb3IgdGhlIGF1dG8gY29tcGxldGUuXG4gICAqL1xuICBhbmNob3JPcmlnaW46IF9wcm9wVHlwZXM0LmRlZmF1bHQub3JpZ2luLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGF1dG8gY29tcGxldGUgaXMgYW5pbWF0ZWQgYXMgaXQgaXMgdG9nZ2xlZC5cbiAgICovXG4gIGFuaW1hdGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdCBhbmltYXRpb24gY29tcG9uZW50IHVzZWQuXG4gICAqL1xuICBhbmltYXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIEFycmF5IG9mIHN0cmluZ3Mgb3Igbm9kZXMgdXNlZCB0byBwb3B1bGF0ZSB0aGUgbGlzdC5cbiAgICovXG4gIGRhdGFTb3VyY2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXkuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIENvbmZpZyBmb3Igb2JqZWN0cyBsaXN0IGRhdGFTb3VyY2UuXG4gICAqXG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IGRhdGFTb3VyY2VDb25maWdcbiAgICpcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHRleHQgYGRhdGFTb3VyY2VgIGVsZW1lbnQga2V5IHVzZWQgdG8gZmluZCBhIHN0cmluZyB0byBiZSBtYXRjaGVkIGZvciBzZWFyY2hcbiAgICogYW5kIHNob3duIGFzIGEgYFRleHRGaWVsZGAgaW5wdXQgdmFsdWUgYWZ0ZXIgY2hvb3NpbmcgdGhlIHJlc3VsdC5cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHZhbHVlIGBkYXRhU291cmNlYCBlbGVtZW50IGtleSB1c2VkIHRvIGZpbmQgYSBzdHJpbmcgdG8gYmUgc2hvd24gaW4gc2VhcmNoIHJlc3VsdHMuXG4gICAqL1xuICBkYXRhU291cmNlQ29uZmlnOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIERpc2FibGVzIGZvY3VzIHJpcHBsZSB3aGVuIHRydWUuXG4gICAqL1xuICBkaXNhYmxlRm9jdXNSaXBwbGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHN0eWxlIHByb3AgZm9yIGVycm9yLlxuICAgKi9cbiAgZXJyb3JTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgZXJyb3IgY29udGVudCB0byBkaXNwbGF5LlxuICAgKi9cbiAgZXJyb3JUZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiB1c2VkIHRvIGZpbHRlciB0aGUgYXV0byBjb21wbGV0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlYXJjaFRleHQgVGhlIHRleHQgdG8gc2VhcmNoIGZvciB3aXRoaW4gYGRhdGFTb3VyY2VgLlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IGBkYXRhU291cmNlYCBlbGVtZW50LCBvciBgdGV4dGAgcHJvcGVydHkgb24gdGhhdCBlbGVtZW50IGlmIGl0J3Mgbm90IGEgc3RyaW5nLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGluZGljYXRlcyB0aGUgYXV0byBjb21wbGV0ZSBsaXN0IHdpbGwgaW5jbHVkZSBga2V5YCB3aGVuIHRoZSBpbnB1dCBpcyBgc2VhcmNoVGV4dGAuXG4gICAqL1xuICBmaWx0ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IHRvIHVzZSBmb3IgYWRkaW5nIGZsb2F0aW5nIGxhYmVsIGVsZW1lbnQuXG4gICAqL1xuICBmbG9hdGluZ0xhYmVsVGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGZpZWxkIHJlY2VpdmVzIHRoZSBwcm9wZXJ0eSBgd2lkdGg6IDEwMCVgLlxuICAgKi9cbiAgZnVsbFdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgaGludCBjb250ZW50IHRvIGRpc3BsYXkuXG4gICAqL1xuICBoaW50VGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogT3ZlcnJpZGUgc3R5bGUgZm9yIGxpc3QuXG4gICAqL1xuICBsaXN0U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIG1heCBudW1iZXIgb2Ygc2VhcmNoIHJlc3VsdHMgdG8gYmUgc2hvd24uXG4gICAqIEJ5IGRlZmF1bHQgaXQgc2hvd3MgYWxsIHRoZSBpdGVtcyB3aGljaCBtYXRjaGVzIGZpbHRlci5cbiAgICovXG4gIG1heFNlYXJjaFJlc3VsdHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICAvKipcbiAgICogRGVsYXkgZm9yIGNsb3NpbmcgdGltZSBvZiB0aGUgbWVudS5cbiAgICovXG4gIG1lbnVDbG9zZURlbGF5OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgLyoqXG4gICAqIFByb3BzIHRvIGJlIHBhc3NlZCB0byBtZW51LlxuICAgKi9cbiAgbWVudVByb3BzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHN0eWxlIGZvciBtZW51LlxuICAgKi9cbiAgbWVudVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25CbHVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIHRoZSBtZW51IGlzIGNsb3NlZC5cbiAgICovXG4gIG9uQ2xvc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Gb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbktleURvd246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgZmlyZWQgd2hlbiBhIGxpc3QgaXRlbSBpcyBzZWxlY3RlZCwgb3IgZW50ZXIgaXMgcHJlc3NlZCBpbiB0aGUgYFRleHRGaWVsZGAuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaG9zZW5SZXF1ZXN0IEVpdGhlciB0aGUgYFRleHRGaWVsZGAgaW5wdXQgdmFsdWUsIGlmIGVudGVyIGlzIHByZXNzZWQgaW4gdGhlIGBUZXh0RmllbGRgLFxuICAgKiBvciB0aGUgdGV4dCB2YWx1ZSBvZiB0aGUgY29ycmVzcG9uZGluZyBsaXN0IGl0ZW0gdGhhdCB3YXMgc2VsZWN0ZWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggaW4gYGRhdGFTb3VyY2VgIG9mIHRoZSBsaXN0IGl0ZW0gc2VsZWN0ZWQsIG9yIGAtMWAgaWYgZW50ZXIgaXMgcHJlc3NlZCBpbiB0aGVcbiAgICogYFRleHRGaWVsZGAuXG4gICAqL1xuICBvbk5ld1JlcXVlc3Q6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgZmlyZWQgd2hlbiB0aGUgdXNlciB1cGRhdGVzIHRoZSBgVGV4dEZpZWxkYC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlYXJjaFRleHQgVGhlIGF1dG8tY29tcGxldGUncyBgc2VhcmNoVGV4dGAgdmFsdWUuXG4gICAqIEBwYXJhbSB7YXJyYXl9IGRhdGFTb3VyY2UgVGhlIGF1dG8tY29tcGxldGUncyBgZGF0YVNvdXJjZWAgYXJyYXkuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMgQWRkaXRpb25hbCBpbmZvcm1hdGlvbiBsaW5rZWQgdGhlIHVwZGF0ZS5cbiAgICovXG4gIG9uVXBkYXRlSW5wdXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIEF1dG8gY29tcGxldGUgbWVudSBpcyBvcGVuIGlmIHRydWUuXG4gICAqL1xuICBvcGVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgbGlzdCBpdGVtIGlzIHNob3dlZCB3aGVuIGEgZm9jdXMgZXZlbnQgdHJpZ2dlcnMuXG4gICAqL1xuICBvcGVuT25Gb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogUHJvcHMgdG8gYmUgcGFzc2VkIHRvIHBvcG92ZXIuXG4gICAqL1xuICBwb3BvdmVyUHJvcHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGV4dCBiZWluZyBpbnB1dCB0byBhdXRvIGNvbXBsZXRlLlxuICAgKi9cbiAgc2VhcmNoVGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3JpZ2luIGZvciBsb2NhdGlvbiBvZiB0YXJnZXQuXG4gICAqL1xuICB0YXJnZXRPcmlnaW46IF9wcm9wVHlwZXM0LmRlZmF1bHQub3JpZ2luLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgQXV0b0NvbXBsZXRlJ3MgVGV4dEZpZWxkIGVsZW1lbnQuXG4gICAqL1xuICB0ZXh0RmllbGRTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcblxuXG5BdXRvQ29tcGxldGUubGV2ZW5zaHRlaW5EaXN0YW5jZSA9IGZ1bmN0aW9uIChzZWFyY2hUZXh0LCBrZXkpIHtcbiAgdmFyIGN1cnJlbnQgPSBbXTtcbiAgdmFyIHByZXYgPSB2b2lkIDA7XG4gIHZhciB2YWx1ZSA9IHZvaWQgMDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8PSBrZXkubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8PSBzZWFyY2hUZXh0Lmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAoaSAmJiBqKSB7XG4gICAgICAgIGlmIChzZWFyY2hUZXh0LmNoYXJBdChqIC0gMSkgPT09IGtleS5jaGFyQXQoaSAtIDEpKSB2YWx1ZSA9IHByZXY7ZWxzZSB2YWx1ZSA9IE1hdGgubWluKGN1cnJlbnRbal0sIGN1cnJlbnRbaiAtIDFdLCBwcmV2KSArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IGkgKyBqO1xuICAgICAgfVxuICAgICAgcHJldiA9IGN1cnJlbnRbal07XG4gICAgICBjdXJyZW50W2pdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBjdXJyZW50LnBvcCgpO1xufTtcblxuQXV0b0NvbXBsZXRlLm5vRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkF1dG9Db21wbGV0ZS5kZWZhdWx0RmlsdGVyID0gQXV0b0NvbXBsZXRlLmNhc2VTZW5zaXRpdmVGaWx0ZXIgPSBmdW5jdGlvbiAoc2VhcmNoVGV4dCwga2V5KSB7XG4gIHJldHVybiBzZWFyY2hUZXh0ICE9PSAnJyAmJiBrZXkuaW5kZXhPZihzZWFyY2hUZXh0KSAhPT0gLTE7XG59O1xuXG5BdXRvQ29tcGxldGUuY2FzZUluc2Vuc2l0aXZlRmlsdGVyID0gZnVuY3Rpb24gKHNlYXJjaFRleHQsIGtleSkge1xuICByZXR1cm4ga2V5LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCkpICE9PSAtMTtcbn07XG5cbkF1dG9Db21wbGV0ZS5sZXZlbnNodGVpbkRpc3RhbmNlRmlsdGVyID0gZnVuY3Rpb24gKGRpc3RhbmNlTGVzc1RoYW4pIHtcbiAgaWYgKGRpc3RhbmNlTGVzc1RoYW4gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBBdXRvQ29tcGxldGUubGV2ZW5zaHRlaW5EaXN0YW5jZTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZGlzdGFuY2VMZXNzVGhhbiAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyAnRXJyb3I6IEF1dG9Db21wbGV0ZS5sZXZlbnNodGVpbkRpc3RhbmNlRmlsdGVyIGlzIGEgZmlsdGVyIGdlbmVyYXRvciwgbm90IGEgZmlsdGVyISc7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHMsIGspIHtcbiAgICByZXR1cm4gQXV0b0NvbXBsZXRlLmxldmVuc2h0ZWluRGlzdGFuY2UocywgaykgPCBkaXN0YW5jZUxlc3NUaGFuO1xuICB9O1xufTtcblxuQXV0b0NvbXBsZXRlLmZ1enp5RmlsdGVyID0gZnVuY3Rpb24gKHNlYXJjaFRleHQsIGtleSkge1xuICB2YXIgY29tcGFyZVN0cmluZyA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICBzZWFyY2hUZXh0ID0gc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpO1xuXG4gIHZhciBzZWFyY2hUZXh0SW5kZXggPSAwO1xuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwga2V5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGlmIChjb21wYXJlU3RyaW5nW2luZGV4XSA9PT0gc2VhcmNoVGV4dFtzZWFyY2hUZXh0SW5kZXhdKSB7XG4gICAgICBzZWFyY2hUZXh0SW5kZXggKz0gMTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2VhcmNoVGV4dEluZGV4ID09PSBzZWFyY2hUZXh0Lmxlbmd0aDtcbn07XG5cbkF1dG9Db21wbGV0ZS5JdGVtID0gX01lbnVJdGVtMi5kZWZhdWx0O1xuQXV0b0NvbXBsZXRlLkRpdmlkZXIgPSBfRGl2aWRlcjIuZGVmYXVsdDtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQXV0b0NvbXBsZXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9BdXRvQ29tcGxldGUvQXV0b0NvbXBsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9BdXRvQ29tcGxldGUgPSByZXF1aXJlKCcuL0F1dG9Db21wbGV0ZScpO1xuXG52YXIgX0F1dG9Db21wbGV0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BdXRvQ29tcGxldGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfQXV0b0NvbXBsZXRlMi5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9BdXRvQ29tcGxldGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE1MjBcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIERpdmlkZXIgPSBmdW5jdGlvbiBEaXZpZGVyKHByb3BzLCBjb250ZXh0KSB7XG4gIHZhciBpbnNldCA9IHByb3BzLmluc2V0LFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkocHJvcHMsIFsnaW5zZXQnLCAnc3R5bGUnXSk7XG4gIHZhciBfY29udGV4dCRtdWlUaGVtZSA9IGNvbnRleHQubXVpVGhlbWUsXG4gICAgICBiYXNlVGhlbWUgPSBfY29udGV4dCRtdWlUaGVtZS5iYXNlVGhlbWUsXG4gICAgICBwcmVwYXJlU3R5bGVzID0gX2NvbnRleHQkbXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuXG4gIHZhciBzdHlsZXMgPSB7XG4gICAgcm9vdDoge1xuICAgICAgbWFyZ2luOiAwLFxuICAgICAgbWFyZ2luVG9wOiAtMSxcbiAgICAgIG1hcmdpbkxlZnQ6IGluc2V0ID8gNzIgOiAwLFxuICAgICAgaGVpZ2h0OiAxLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJhc2VUaGVtZS5wYWxldHRlLmJvcmRlckNvbG9yXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnaHInLCAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwgeyBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSkgfSkpO1xufTtcblxuRGl2aWRlci5tdWlOYW1lID0gJ0RpdmlkZXInO1xuXG5EaXZpZGVyLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBgRGl2aWRlcmAgd2lsbCBiZSBpbmRlbnRlZC5cbiAgICovXG4gIGluc2V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5cbkRpdmlkZXIuZGVmYXVsdFByb3BzID0ge1xuICBpbnNldDogZmFsc2Vcbn07XG5cbkRpdmlkZXIuY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRGl2aWRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvRGl2aWRlci9EaXZpZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9EaXZpZGVyID0gcmVxdWlyZSgnLi9EaXZpZGVyJyk7XG5cbnZhciBfRGl2aWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9EaXZpZGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX0RpdmlkZXIyLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL0RpdmlkZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE1MjJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9zaW1wbGVBc3NpZ24gPSByZXF1aXJlKCdzaW1wbGUtYXNzaWduJyk7XG5cbnZhciBfc2ltcGxlQXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NpbXBsZUFzc2lnbik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbnZhciBfY29sb3JNYW5pcHVsYXRvciA9IHJlcXVpcmUoJy4uL3V0aWxzL2NvbG9yTWFuaXB1bGF0b3InKTtcblxudmFyIF9FbmhhbmNlZEJ1dHRvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFsL0VuaGFuY2VkQnV0dG9uJyk7XG5cbnZhciBfRW5oYW5jZWRCdXR0b24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRW5oYW5jZWRCdXR0b24pO1xuXG52YXIgX0ZvbnRJY29uID0gcmVxdWlyZSgnLi4vRm9udEljb24nKTtcblxudmFyIF9Gb250SWNvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Gb250SWNvbik7XG5cbnZhciBfUGFwZXIgPSByZXF1aXJlKCcuLi9QYXBlcicpO1xuXG52YXIgX1BhcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhcGVyKTtcblxudmFyIF9jaGlsZFV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvY2hpbGRVdGlscycpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9wcm9wVHlwZXMzID0gcmVxdWlyZSgnLi4vdXRpbHMvcHJvcFR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlczMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQpIHtcbiAgdmFyIGZsb2F0aW5nQWN0aW9uQnV0dG9uID0gY29udGV4dC5tdWlUaGVtZS5mbG9hdGluZ0FjdGlvbkJ1dHRvbjtcblxuXG4gIHZhciBiYWNrZ3JvdW5kQ29sb3IgPSBwcm9wcy5iYWNrZ3JvdW5kQ29sb3IgfHwgZmxvYXRpbmdBY3Rpb25CdXR0b24uY29sb3I7XG4gIHZhciBpY29uQ29sb3IgPSBmbG9hdGluZ0FjdGlvbkJ1dHRvbi5pY29uQ29sb3I7XG5cbiAgaWYgKHByb3BzLmRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZENvbG9yID0gcHJvcHMuZGlzYWJsZWRDb2xvciB8fCBmbG9hdGluZ0FjdGlvbkJ1dHRvbi5kaXNhYmxlZENvbG9yO1xuICAgIGljb25Db2xvciA9IGZsb2F0aW5nQWN0aW9uQnV0dG9uLmRpc2FibGVkVGV4dENvbG9yO1xuICB9IGVsc2UgaWYgKHByb3BzLnNlY29uZGFyeSkge1xuICAgIGJhY2tncm91bmRDb2xvciA9IGZsb2F0aW5nQWN0aW9uQnV0dG9uLnNlY29uZGFyeUNvbG9yO1xuICAgIGljb25Db2xvciA9IGZsb2F0aW5nQWN0aW9uQnV0dG9uLnNlY29uZGFyeUljb25Db2xvcjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgfSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIGhlaWdodDogZmxvYXRpbmdBY3Rpb25CdXR0b24uYnV0dG9uU2l6ZSxcbiAgICAgIHdpZHRoOiBmbG9hdGluZ0FjdGlvbkJ1dHRvbi5idXR0b25TaXplLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgdmVydGljYWxBbGlnbjogJ2JvdHRvbSdcbiAgICB9LFxuICAgIGNvbnRhaW5lcldoZW5NaW5pOiB7XG4gICAgICBoZWlnaHQ6IGZsb2F0aW5nQWN0aW9uQnV0dG9uLm1pbmlTaXplLFxuICAgICAgd2lkdGg6IGZsb2F0aW5nQWN0aW9uQnV0dG9uLm1pbmlTaXplXG4gICAgfSxcbiAgICBvdmVybGF5OiB7XG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpLFxuICAgICAgdG9wOiAwXG4gICAgfSxcbiAgICBvdmVybGF5V2hlbkhvdmVyZWQ6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogKDAsIF9jb2xvck1hbmlwdWxhdG9yLmZhZGUpKGljb25Db2xvciwgMC40KVxuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgaGVpZ2h0OiBmbG9hdGluZ0FjdGlvbkJ1dHRvbi5idXR0b25TaXplLFxuICAgICAgbGluZUhlaWdodDogZmxvYXRpbmdBY3Rpb25CdXR0b24uYnV0dG9uU2l6ZSArICdweCcsXG4gICAgICBmaWxsOiBpY29uQ29sb3IsXG4gICAgICBjb2xvcjogaWNvbkNvbG9yXG4gICAgfSxcbiAgICBpY29uV2hlbk1pbmk6IHtcbiAgICAgIGhlaWdodDogZmxvYXRpbmdBY3Rpb25CdXR0b24ubWluaVNpemUsXG4gICAgICBsaW5lSGVpZ2h0OiBmbG9hdGluZ0FjdGlvbkJ1dHRvbi5taW5pU2l6ZSArICdweCdcbiAgICB9XG4gIH07XG59XG5cbnZhciBGbG9hdGluZ0FjdGlvbkJ1dHRvbiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKEZsb2F0aW5nQWN0aW9uQnV0dG9uLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBGbG9hdGluZ0FjdGlvbkJ1dHRvbigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBGbG9hdGluZ0FjdGlvbkJ1dHRvbik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBGbG9hdGluZ0FjdGlvbkJ1dHRvbi5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoRmxvYXRpbmdBY3Rpb25CdXR0b24pKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvdmVyZWQ6IGZhbHNlLFxuICAgICAgdG91Y2g6IGZhbHNlLFxuICAgICAgekRlcHRoOiB1bmRlZmluZWRcbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZURvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIG9ubHkgbGlzdGVuIHRvIGxlZnQgY2xpY2tzXG4gICAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAwKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgekRlcHRoOiBfdGhpcy5wcm9wcy56RGVwdGggKyAxIH0pO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VEb3duKSBfdGhpcy5wcm9wcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VVcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoeyB6RGVwdGg6IF90aGlzLnByb3BzLnpEZXB0aCB9KTtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vdXNlVXApIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Nb3VzZVVwKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZUxlYXZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoIV90aGlzLnJlZnMuY29udGFpbmVyLmlzS2V5Ym9hcmRGb2N1c2VkKCkpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyB6RGVwdGg6IF90aGlzLnByb3BzLnpEZXB0aCwgaG92ZXJlZDogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZUxlYXZlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VMZWF2ZShldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VFbnRlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5yZWZzLmNvbnRhaW5lci5pc0tleWJvYXJkRm9jdXNlZCgpICYmICFfdGhpcy5zdGF0ZS50b3VjaCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGhvdmVyZWQ6IHRydWUgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZUVudGVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VFbnRlcihldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0b3VjaDogdHJ1ZSxcbiAgICAgICAgekRlcHRoOiBfdGhpcy5wcm9wcy56RGVwdGggKyAxXG4gICAgICB9KTtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblRvdWNoU3RhcnQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Ub3VjaFN0YXJ0KGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVUb3VjaEVuZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0b3VjaDogdHJ1ZSxcbiAgICAgICAgekRlcHRoOiBfdGhpcy5wcm9wcy56RGVwdGhcbiAgICAgIH0pO1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uVG91Y2hFbmQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Ub3VjaEVuZChldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlS2V5Ym9hcmRGb2N1cyA9IGZ1bmN0aW9uIChldmVudCwga2V5Ym9hcmRGb2N1c2VkKSB7XG4gICAgICBpZiAoa2V5Ym9hcmRGb2N1c2VkICYmICFfdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IHpEZXB0aDogX3RoaXMucHJvcHMuekRlcHRoICsgMSB9KTtcbiAgICAgICAgX3RoaXMucmVmcy5vdmVybGF5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICgwLCBfY29sb3JNYW5pcHVsYXRvci5mYWRlKShnZXRTdHlsZXMoX3RoaXMucHJvcHMsIF90aGlzLmNvbnRleHQpLmljb24uY29sb3IsIDAuNCk7XG4gICAgICB9IGVsc2UgaWYgKCFfdGhpcy5zdGF0ZS5ob3ZlcmVkKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgekRlcHRoOiBfdGhpcy5wcm9wcy56RGVwdGggfSk7XG4gICAgICAgIF90aGlzLnJlZnMub3ZlcmxheS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgfVxuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShGbG9hdGluZ0FjdGlvbkJ1dHRvbiwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgekRlcHRoOiB0aGlzLnByb3BzLmRpc2FibGVkID8gMCA6IHRoaXMucHJvcHMuekRlcHRoXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KSghdGhpcy5wcm9wcy5pY29uQ2xhc3NOYW1lIHx8ICF0aGlzLnByb3BzLmNoaWxkcmVuLCAnTWF0ZXJpYWwtVUk6IFlvdSBoYXZlIHNldCBib3RoIGFuIGljb25DbGFzc05hbWUgYW5kIGEgY2hpbGQgaWNvbi4gJyArICdJdCBpcyByZWNvbW1lbmRlZCB5b3UgdXNlIG9ubHkgb25lIG1ldGhvZCB3aGVuIGFkZGluZyAnICsgJ2ljb25zIHRvIEZsb2F0aW5nQWN0aW9uQnV0dG9ucy4nKSA6IHZvaWQgMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHZhciBuZXh0U3RhdGUgPSB7fTtcblxuICAgICAgaWYgKG5leHRQcm9wcy5kaXNhYmxlZCAhPT0gdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICBuZXh0U3RhdGUuekRlcHRoID0gbmV4dFByb3BzLmRpc2FibGVkID8gMCA6IHRoaXMucHJvcHMuekRlcHRoO1xuICAgICAgfVxuICAgICAgaWYgKG5leHRQcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICBuZXh0U3RhdGUuaG92ZXJlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yID0gX3Byb3BzLmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIGNoaWxkcmVuUHJvcCA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBkaXNhYmxlZENvbG9yID0gX3Byb3BzLmRpc2FibGVkQ29sb3IsXG4gICAgICAgICAgbWluaSA9IF9wcm9wcy5taW5pLFxuICAgICAgICAgIHNlY29uZGFyeSA9IF9wcm9wcy5zZWNvbmRhcnksXG4gICAgICAgICAgaWNvblN0eWxlID0gX3Byb3BzLmljb25TdHlsZSxcbiAgICAgICAgICBpY29uQ2xhc3NOYW1lID0gX3Byb3BzLmljb25DbGFzc05hbWUsXG4gICAgICAgICAgekRlcHRoID0gX3Byb3BzLnpEZXB0aCxcbiAgICAgICAgICBvdGhlciA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMzLmRlZmF1bHQpKF9wcm9wcywgWydiYWNrZ3JvdW5kQ29sb3InLCAnY2xhc3NOYW1lJywgJ2NoaWxkcmVuJywgJ2Rpc2FibGVkJywgJ2Rpc2FibGVkQ29sb3InLCAnbWluaScsICdzZWNvbmRhcnknLCAnaWNvblN0eWxlJywgJ2ljb25DbGFzc05hbWUnLCAnekRlcHRoJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuXG4gICAgICB2YXIgaWNvbkVsZW1lbnQgPSB2b2lkIDA7XG4gICAgICBpZiAoaWNvbkNsYXNzTmFtZSkge1xuICAgICAgICBpY29uRWxlbWVudCA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Gb250SWNvbjIuZGVmYXVsdCwge1xuICAgICAgICAgIGNsYXNzTmFtZTogaWNvbkNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBzdHlsZXMuaWNvbiwgbWluaSAmJiBzdHlsZXMuaWNvbldoZW5NaW5pLCBpY29uU3R5bGUpXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hpbGRyZW4gPSB2b2lkIDA7XG5cbiAgICAgIGlmIChjaGlsZHJlblByb3ApIHtcbiAgICAgICAgY2hpbGRyZW4gPSAoMCwgX2NoaWxkVXRpbHMuZXh0ZW5kQ2hpbGRyZW4pKGNoaWxkcmVuUHJvcCwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5pY29uLCBtaW5pICYmIHN0eWxlcy5pY29uV2hlbk1pbmksIGljb25TdHlsZSwgY2hpbGQucHJvcHMuc3R5bGUpXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBidXR0b25FdmVudEhhbmRsZXJzID0gZGlzYWJsZWQgPyBudWxsIDoge1xuICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVNb3VzZURvd24sXG4gICAgICAgIG9uTW91c2VVcDogdGhpcy5oYW5kbGVNb3VzZVVwLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMuaGFuZGxlTW91c2VMZWF2ZSxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhhbmRsZU1vdXNlRW50ZXIsXG4gICAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuICAgICAgICBvblRvdWNoRW5kOiB0aGlzLmhhbmRsZVRvdWNoRW5kLFxuICAgICAgICBvbktleWJvYXJkRm9jdXM6IHRoaXMuaGFuZGxlS2V5Ym9hcmRGb2N1c1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfUGFwZXIyLmRlZmF1bHQsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yb290LCB0aGlzLnByb3BzLnN0eWxlKSxcbiAgICAgICAgICB6RGVwdGg6IHRoaXMuc3RhdGUuekRlcHRoLFxuICAgICAgICAgIGNpcmNsZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfRW5oYW5jZWRCdXR0b24yLmRlZmF1bHQsXG4gICAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIGJ1dHRvbkV2ZW50SGFuZGxlcnMsIHtcbiAgICAgICAgICAgIHJlZjogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5jb250YWluZXIsIHRoaXMucHJvcHMubWluaSAmJiBzdHlsZXMuY29udGFpbmVyV2hlbk1pbmksIGljb25TdHlsZSksXG4gICAgICAgICAgICBmb2N1c1JpcHBsZUNvbG9yOiBzdHlsZXMuaWNvbi5jb2xvcixcbiAgICAgICAgICAgIHRvdWNoUmlwcGxlQ29sb3I6IHN0eWxlcy5pY29uLmNvbG9yXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVmOiAnb3ZlcmxheScsXG4gICAgICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMub3ZlcmxheSwgdGhpcy5zdGF0ZS5ob3ZlcmVkICYmICF0aGlzLnByb3BzLmRpc2FibGVkICYmIHN0eWxlcy5vdmVybGF5V2hlbkhvdmVyZWQpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGljb25FbGVtZW50LFxuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBGbG9hdGluZ0FjdGlvbkJ1dHRvbjtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkZsb2F0aW5nQWN0aW9uQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBtaW5pOiBmYWxzZSxcbiAgc2Vjb25kYXJ5OiBmYWxzZSxcbiAgekRlcHRoOiAyXG59O1xuRmxvYXRpbmdBY3Rpb25CdXR0b24uY29udGV4dFR5cGVzID0ge1xuICBtdWlUaGVtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QuaXNSZXF1aXJlZFxufTtcbkZsb2F0aW5nQWN0aW9uQnV0dG9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIFRoaXMgdmFsdWUgd2lsbCBvdmVycmlkZSB0aGUgZGVmYXVsdCBiYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgYnV0dG9uLlxuICAgKiBIb3dldmVyIGl0IHdpbGwgbm90IG92ZXJyaWRlIHRoZSBkZWZhdWx0IGRpc2FibGVkIGJhY2tncm91bmQgY29sb3IuXG4gICAqIFRoaXMgaGFzIHRvIGJlIHNldCBzZXBhcmF0ZWx5IHVzaW5nIHRoZSBkaXNhYmxlZENvbG9yIGF0dHJpYnV0ZS5cbiAgICovXG4gIGJhY2tncm91bmRDb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGlzIGlzIHdoYXQgZGlzcGxheWVkIGluc2lkZSB0aGUgZmxvYXRpbmcgYWN0aW9uIGJ1dHRvbjsgZm9yIGV4YW1wbGUsIGEgU1ZHIEljb24uXG4gICAqL1xuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogVGhlIGNzcyBjbGFzcyBuYW1lIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogRGlzYWJsZXMgdGhlIGJ1dHRvbiBpZiBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGlzIHZhbHVlIHdpbGwgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgYmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIGJ1dHRvbiB3aGVuIGl0IGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWRDb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgVVJMIHRvIGxpbmsgdG8gd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqL1xuICBocmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBpY29uIHdpdGhpbiB0aGUgRmxvYXRpbmdBY3Rpb25CdXR0b24gaXMgYSBGb250SWNvbiBjb21wb25lbnQuXG4gICAqIFRoaXMgcHJvcGVydHkgaXMgdGhlIGNsYXNzbmFtZSBvZiB0aGUgaWNvbiB0byBiZSBkaXNwbGF5ZWQgaW5zaWRlIHRoZSBidXR0b24uXG4gICAqIEFuIGFsdGVybmF0aXZlIHRvIGFkZGluZyBhbiBpY29uQ2xhc3NOYW1lIHdvdWxkIGJlIHRvIG1hbnVhbGx5IGluc2VydCBhXG4gICAqIEZvbnRJY29uIGNvbXBvbmVudCBvciBjdXN0b20gU3ZnSWNvbiBjb21wb25lbnQgb3IgYXMgYSBjaGlsZCBvZiBGbG9hdGluZ0FjdGlvbkJ1dHRvbi5cbiAgICovXG4gIGljb25DbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgZXF1aXZhbGVudCB0byBpY29uQ2xhc3NOYW1lIGV4Y2VwdCB0aGF0IGl0IGlzIHVzZWQgZm9yXG4gICAqIG92ZXJyaWRpbmcgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIEZvbnRJY29uIGNvbXBvbmVudC5cbiAgICovXG4gIGljb25TdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgYnV0dG9uIHdpbGwgYmUgYSBzbWFsbCBmbG9hdGluZyBhY3Rpb24gYnV0dG9uLlxuICAgKi9cbiAgbWluaTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlRG93bjogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlRW50ZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZUxlYXZlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VVcDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvblRvdWNoRW5kOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uVG91Y2hTdGFydDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiB0aGUgYnV0dG9uIGlzIHRvdWNoLXRhcHBlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRvdWNoVGFwIGV2ZW50IHRhcmdldGluZyB0aGUgYnV0dG9uLlxuICAgKi9cbiAgb25Ub3VjaFRhcDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIHVzZSB0aGUgc2Vjb25kYXJ5IGJ1dHRvbiBjb2xvcnMuXG4gICAqL1xuICBzZWNvbmRhcnk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgekRlcHRoIG9mIHRoZSB1bmRlcmx5aW5nIGBQYXBlcmAgY29tcG9uZW50LlxuICAgKi9cbiAgekRlcHRoOiBfcHJvcFR5cGVzNC5kZWZhdWx0LnpEZXB0aFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gRmxvYXRpbmdBY3Rpb25CdXR0b247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL0Zsb2F0aW5nQWN0aW9uQnV0dG9uL0Zsb2F0aW5nQWN0aW9uQnV0dG9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9GbG9hdGluZ0FjdGlvbkJ1dHRvbiA9IHJlcXVpcmUoJy4vRmxvYXRpbmdBY3Rpb25CdXR0b24nKTtcblxudmFyIF9GbG9hdGluZ0FjdGlvbkJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GbG9hdGluZ0FjdGlvbkJ1dHRvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9GbG9hdGluZ0FjdGlvbkJ1dHRvbjIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvRmxvYXRpbmdBY3Rpb25CdXR0b24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE1MjZcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5tYWtlU2VsZWN0YWJsZSA9IGV4cG9ydHMuTGlzdEl0ZW0gPSBleHBvcnRzLkxpc3QgPSB1bmRlZmluZWQ7XG5cbnZhciBfTGlzdDIgPSByZXF1aXJlKCcuL0xpc3QnKTtcblxudmFyIF9MaXN0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpc3QyKTtcblxudmFyIF9MaXN0SXRlbTIgPSByZXF1aXJlKCcuL0xpc3RJdGVtJyk7XG5cbnZhciBfTGlzdEl0ZW0zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTGlzdEl0ZW0yKTtcblxudmFyIF9tYWtlU2VsZWN0YWJsZTIgPSByZXF1aXJlKCcuL21ha2VTZWxlY3RhYmxlJyk7XG5cbnZhciBfbWFrZVNlbGVjdGFibGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFrZVNlbGVjdGFibGUyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5MaXN0ID0gX0xpc3QzLmRlZmF1bHQ7XG5leHBvcnRzLkxpc3RJdGVtID0gX0xpc3RJdGVtMy5kZWZhdWx0O1xuZXhwb3J0cy5tYWtlU2VsZWN0YWJsZSA9IF9tYWtlU2VsZWN0YWJsZTMuZGVmYXVsdDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9MaXN0My5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9MaXN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMubWFrZVNlbGVjdGFibGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9jb2xvck1hbmlwdWxhdG9yID0gcmVxdWlyZSgnLi4vdXRpbHMvY29sb3JNYW5pcHVsYXRvcicpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgbWFrZVNlbGVjdGFibGUgPSBmdW5jdGlvbiBtYWtlU2VsZWN0YWJsZShNeUNvbXBvbmVudCkge1xuICB2YXIgX2NsYXNzLCBfdGVtcDI7XG5cbiAgcmV0dXJuIF90ZW1wMiA9IF9jbGFzcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoX2NsYXNzLCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIF9jbGFzcygpIHtcbiAgICAgIHZhciBfcmVmO1xuXG4gICAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMy5kZWZhdWx0KSh0aGlzLCBfY2xhc3MpO1xuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBfY2xhc3MuX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKF9jbGFzcykpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmhhc1NlbGVjdGVkRGVzY2VuZGFudCA9IGZ1bmN0aW9uIChwcmV2aW91c1ZhbHVlLCBjaGlsZCkge1xuICAgICAgICBpZiAoX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSAmJiBjaGlsZC5wcm9wcy5uZXN0ZWRJdGVtcyAmJiBjaGlsZC5wcm9wcy5uZXN0ZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkLnByb3BzLm5lc3RlZEl0ZW1zLnJlZHVjZShfdGhpcy5oYXNTZWxlY3RlZERlc2NlbmRhbnQsIHByZXZpb3VzVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmV2aW91c1ZhbHVlIHx8IF90aGlzLmlzQ2hpbGRTZWxlY3RlZChjaGlsZCwgX3RoaXMucHJvcHMpO1xuICAgICAgfSwgX3RoaXMuaGFuZGxlSXRlbVRvdWNoVGFwID0gZnVuY3Rpb24gKGV2ZW50LCBpdGVtKSB7XG4gICAgICAgIHZhciBpdGVtVmFsdWUgPSBpdGVtLnByb3BzLnZhbHVlO1xuXG4gICAgICAgIGlmIChpdGVtVmFsdWUgIT09IF90aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCwgaXRlbVZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gICAgfVxuXG4gICAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoX2NsYXNzLCBbe1xuICAgICAga2V5OiAnZXh0ZW5kQ2hpbGQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGV4dGVuZENoaWxkKGNoaWxkLCBzdHlsZXMsIHNlbGVjdGVkSXRlbVN0eWxlKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIGlmIChjaGlsZCAmJiBjaGlsZC50eXBlICYmIGNoaWxkLnR5cGUubXVpTmFtZSA9PT0gJ0xpc3RJdGVtJykge1xuICAgICAgICAgIHZhciBzZWxlY3RlZCA9IHRoaXMuaXNDaGlsZFNlbGVjdGVkKGNoaWxkLCB0aGlzLnByb3BzKTtcbiAgICAgICAgICB2YXIgc2VsZWN0ZWRDaGlsZHJlblN0eWxlcyA9IHZvaWQgMDtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkQ2hpbGRyZW5TdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcywgc2VsZWN0ZWRJdGVtU3R5bGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBtZXJnZWRDaGlsZHJlblN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgY2hpbGQucHJvcHMuc3R5bGUsIHNlbGVjdGVkQ2hpbGRyZW5TdHlsZXMpO1xuXG4gICAgICAgICAgdGhpcy5rZXlJbmRleCArPSAxO1xuXG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgIG9uVG91Y2hUYXA6IGZ1bmN0aW9uIG9uVG91Y2hUYXAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3RoaXMyLmhhbmRsZUl0ZW1Ub3VjaFRhcChldmVudCwgY2hpbGQpO1xuICAgICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMub25Ub3VjaFRhcCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uVG91Y2hUYXAoZXZlbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAga2V5OiB0aGlzLmtleUluZGV4LFxuICAgICAgICAgICAgc3R5bGU6IG1lcmdlZENoaWxkcmVuU3R5bGVzLFxuICAgICAgICAgICAgbmVzdGVkSXRlbXM6IGNoaWxkLnByb3BzLm5lc3RlZEl0ZW1zLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5leHRlbmRDaGlsZChjaGlsZCwgc3R5bGVzLCBzZWxlY3RlZEl0ZW1TdHlsZSk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGluaXRpYWxseU9wZW46IHRoaXMuaXNJbml0aWFsbHlPcGVuKGNoaWxkKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2lzSW5pdGlhbGx5T3BlbicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNJbml0aWFsbHlPcGVuKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcy5pbml0aWFsbHlPcGVuKSB7XG4gICAgICAgICAgcmV0dXJuIGNoaWxkLnByb3BzLmluaXRpYWxseU9wZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzU2VsZWN0ZWREZXNjZW5kYW50KGZhbHNlLCBjaGlsZCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnaXNDaGlsZFNlbGVjdGVkJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc0NoaWxkU2VsZWN0ZWQoY2hpbGQsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiBwcm9wcy52YWx1ZSA9PT0gY2hpbGQucHJvcHMudmFsdWU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1TdHlsZSA9IF9wcm9wcy5zZWxlY3RlZEl0ZW1TdHlsZSxcbiAgICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2NoaWxkcmVuJywgJ3NlbGVjdGVkSXRlbVN0eWxlJ10pO1xuXG5cbiAgICAgICAgdGhpcy5rZXlJbmRleCA9IDA7XG4gICAgICAgIHZhciBzdHlsZXMgPSB7fTtcblxuICAgICAgICBpZiAoIXNlbGVjdGVkSXRlbVN0eWxlKSB7XG4gICAgICAgICAgdmFyIHRleHRDb2xvciA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5iYXNlVGhlbWUucGFsZXR0ZS50ZXh0Q29sb3I7XG4gICAgICAgICAgc3R5bGVzLmJhY2tncm91bmRDb2xvciA9ICgwLCBfY29sb3JNYW5pcHVsYXRvci5mYWRlKSh0ZXh0Q29sb3IsIDAuMik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgTXlDb21wb25lbnQsXG4gICAgICAgICAgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHRoaXMuc3RhdGUpLFxuICAgICAgICAgIF9yZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5leHRlbmRDaGlsZChjaGlsZCwgc3R5bGVzLCBzZWxlY3RlZEl0ZW1TdHlsZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIF9jbGFzcztcbiAgfShfcmVhY3QuQ29tcG9uZW50KSwgX2NsYXNzLnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAgIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgc2VsZWN0ZWRJdGVtU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAgIHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueVxuICB9LCBfY2xhc3MuY29udGV4dFR5cGVzID0ge1xuICAgIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG4gIH0sIF90ZW1wMjtcbn07XG5cbmV4cG9ydHMubWFrZVNlbGVjdGFibGUgPSBtYWtlU2VsZWN0YWJsZTtcbmV4cG9ydHMuZGVmYXVsdCA9IG1ha2VTZWxlY3RhYmxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9MaXN0L21ha2VTZWxlY3RhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuTWVudUl0ZW0gPSBleHBvcnRzLk1lbnUgPSB1bmRlZmluZWQ7XG5cbnZhciBfTWVudTIgPSByZXF1aXJlKCcuL01lbnUnKTtcblxudmFyIF9NZW51MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbnUyKTtcblxudmFyIF9NZW51SXRlbTIgPSByZXF1aXJlKCcuLi9NZW51SXRlbScpO1xuXG52YXIgX01lbnVJdGVtMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01lbnVJdGVtMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuTWVudSA9IF9NZW51My5kZWZhdWx0O1xuZXhwb3J0cy5NZW51SXRlbSA9IF9NZW51SXRlbTMuZGVmYXVsdDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9NZW51My5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9NZW51L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3B1cmUgPSByZXF1aXJlKCdyZWNvbXBvc2UvcHVyZScpO1xuXG52YXIgX3B1cmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHVyZSk7XG5cbnZhciBfU3ZnSWNvbiA9IHJlcXVpcmUoJy4uLy4uL1N2Z0ljb24nKTtcblxudmFyIF9TdmdJY29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N2Z0ljb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgQ29udGVudEFkZCA9IGZ1bmN0aW9uIENvbnRlbnRBZGQocHJvcHMpIHtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgIF9TdmdJY29uMi5kZWZhdWx0LFxuICAgIHByb3BzLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnonIH0pXG4gICk7XG59O1xuQ29udGVudEFkZCA9ICgwLCBfcHVyZTIuZGVmYXVsdCkoQ29udGVudEFkZCk7XG5Db250ZW50QWRkLmRpc3BsYXlOYW1lID0gJ0NvbnRlbnRBZGQnO1xuQ29udGVudEFkZC5tdWlOYW1lID0gJ1N2Z0ljb24nO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDb250ZW50QWRkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9zdmctaWNvbnMvY29udGVudC9hZGQuanNcbi8vIG1vZHVsZSBpZCA9IDE1NDJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHVyZSA9IHJlcXVpcmUoJ3JlY29tcG9zZS9wdXJlJyk7XG5cbnZhciBfcHVyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wdXJlKTtcblxudmFyIF9TdmdJY29uID0gcmVxdWlyZSgnLi4vLi4vU3ZnSWNvbicpO1xuXG52YXIgX1N2Z0ljb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfU3ZnSWNvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBDb250ZW50SW5ib3ggPSBmdW5jdGlvbiBDb250ZW50SW5ib3gocHJvcHMpIHtcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgIF9TdmdJY29uMi5kZWZhdWx0LFxuICAgIHByb3BzLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnTTE5IDNINC45OWMtMS4xMSAwLTEuOTguODktMS45OCAyTDMgMTljMCAxLjEuODggMiAxLjk5IDJIMTljMS4xIDAgMi0uOSAyLTJWNWMwLTEuMTEtLjktMi0yLTJ6bTAgMTJoLTRjMCAxLjY2LTEuMzUgMy0zIDNzLTMtMS4zNC0zLTNINC45OVY1SDE5djEweicgfSlcbiAgKTtcbn07XG5Db250ZW50SW5ib3ggPSAoMCwgX3B1cmUyLmRlZmF1bHQpKENvbnRlbnRJbmJveCk7XG5Db250ZW50SW5ib3guZGlzcGxheU5hbWUgPSAnQ29udGVudEluYm94JztcbkNvbnRlbnRJbmJveC5tdWlOYW1lID0gJ1N2Z0ljb24nO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDb250ZW50SW5ib3g7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL3N2Zy1pY29ucy9jb250ZW50L2luYm94LmpzXG4vLyBtb2R1bGUgaWQgPSAxNTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3B1cmUgPSByZXF1aXJlKCdyZWNvbXBvc2UvcHVyZScpO1xuXG52YXIgX3B1cmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHVyZSk7XG5cbnZhciBfU3ZnSWNvbiA9IHJlcXVpcmUoJy4uLy4uL1N2Z0ljb24nKTtcblxudmFyIF9TdmdJY29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1N2Z0ljb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTmF2aWdhdGlvbk1vcmVWZXJ0ID0gZnVuY3Rpb24gTmF2aWdhdGlvbk1vcmVWZXJ0KHByb3BzKSB7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICBfU3ZnSWNvbjIuZGVmYXVsdCxcbiAgICBwcm9wcyxcbiAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ00xMiA4YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptMCAyYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMCA2Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnonIH0pXG4gICk7XG59O1xuTmF2aWdhdGlvbk1vcmVWZXJ0ID0gKDAsIF9wdXJlMi5kZWZhdWx0KShOYXZpZ2F0aW9uTW9yZVZlcnQpO1xuTmF2aWdhdGlvbk1vcmVWZXJ0LmRpc3BsYXlOYW1lID0gJ05hdmlnYXRpb25Nb3JlVmVydCc7XG5OYXZpZ2F0aW9uTW9yZVZlcnQubXVpTmFtZSA9ICdTdmdJY29uJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gTmF2aWdhdGlvbk1vcmVWZXJ0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9zdmctaWNvbnMvbmF2aWdhdGlvbi9tb3JlLXZlcnQuanNcbi8vIG1vZHVsZSBpZCA9IDE1NDdcbi8vIG1vZHVsZSBjaHVua3MgPSAzIiwiaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHN1Ym1pdCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xyXG5cclxuaW1wb3J0IHtvcGVuRGlhbG9ndWUsIGNsb3NlRGlhbG9ndWUvKiwgc2F2ZURpYWxvZ3VlKi99IGZyb20gJ21vZHVsZXMvZGVmaW5lSW5ncmVkaWVudERpYWxvZ3VlJztcclxuaW1wb3J0IHtzYXZlSW5ncmVkaWVudCwgdXBkYXRlSW5ncmVkaWVudH0gZnJvbSAnbW9kdWxlcy9pbmdyZWRpZW50c0FkbWluJztcclxuXHJcbmltcG9ydCB7QWRtaW59IGZyb20gJy4vQWRtaW4nO1xyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG5cclxuICAgIG9wZW5EaWFsb2d1ZTogKCkgPT4ge2Rpc3BhdGNoKG9wZW5EaWFsb2d1ZSgpKTt9LFxyXG4gICAgY2xvc2VEaWFsb2d1ZTogKCkgPT4ge2Rpc3BhdGNoKGNsb3NlRGlhbG9ndWUoKSk7fSxcclxuICAgIHNhdmVEaWFsb2d1ZTogKCkgPT4ge2Rpc3BhdGNoKHN1Ym1pdCgnbWFuYWdlTnV0cmllbnRzJykpOyBkaXNwYXRjaChjbG9zZURpYWxvZ3VlKCkpO30sXHJcblxyXG4gICAgc2F2ZUluZ3JlZGllbnQ6ICh2YWx1ZXMsIGVkaXRJZCkgPT4ge2VkaXRJZCA/IGRpc3BhdGNoKHVwZGF0ZUluZ3JlZGllbnQodmFsdWVzLCBlZGl0SWQpKSA6IGRpc3BhdGNoKHNhdmVJbmdyZWRpZW50KHZhbHVlcykpO31cclxufSk7XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XHJcblxyXG4gICAgb3Blbjogc3RhdGUuZGVmaW5lSW5ncmVkaWVudERpYWxvZ3VlLm9wZW4sXHJcbiAgICBpbml0aWFsVmFsdWVzOiBzdGF0ZS5kZWZpbmVJbmdyZWRpZW50RGlhbG9ndWUuaW5pdGlhbFZhbHVlcyxcclxuICAgIGVkaXRJZDogc3RhdGUuZGVmaW5lSW5ncmVkaWVudERpYWxvZ3VlLmVkaXRJZFxyXG59KTtcclxuXHJcbmNvbnN0IEFkbWluQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQWRtaW4pO1xyXG5cclxuZXhwb3J0IHtBZG1pbkNvbnRhaW5lcn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy9BZG1pbi9BZG1pbkNvbnRhaW5lci5qcyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHR2YXIgcmVzdWx0ID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNzYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0Q2xhc3M7XG5cbnZhciBfZmxleGJveGdyaWQgPSByZXF1aXJlKCdmbGV4Ym94Z3JpZC9kaXN0L2ZsZXhib3hncmlkLmNzcycpO1xuXG52YXIgX2ZsZXhib3hncmlkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZsZXhib3hncmlkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0Q2xhc3MoY2xhc3NOYW1lKSB7XG4gIHJldHVybiBfZmxleGJveGdyaWQyLmRlZmF1bHQgJiYgX2ZsZXhib3hncmlkMi5kZWZhdWx0W2NsYXNzTmFtZV0gPyBfZmxleGJveGdyaWQyLmRlZmF1bHRbY2xhc3NOYW1lXSA6IGNsYXNzTmFtZTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtZmxleGJveC1ncmlkL2xpYi9jbGFzc05hbWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3NjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlUHJvcHM7XG5mdW5jdGlvbiBjcmVhdGVQcm9wcyhwcm9wVHlwZXMsIHByb3BzLCBjbGFzc05hbWVzKSB7XG4gIHZhciBuZXdQcm9wcyA9IHt9O1xuXG4gIE9iamVjdC5rZXlzKHByb3BzKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBrZXkgPT09ICdjaGlsZHJlbicgfHwgIXByb3BUeXBlc1trZXldO1xuICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gbmV3UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gIH0pO1xuXG4gIHZhciBjbGFzc05hbWUgPSBjbGFzc05hbWVzLmZpbHRlcihmdW5jdGlvbiAoY24pIHtcbiAgICByZXR1cm4gY247XG4gIH0pLmpvaW4oJyAnKTtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIG5ld1Byb3BzLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL2NyZWF0ZVByb3BzLmpzXG4vLyBtb2R1bGUgaWQgPSA3NjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMyA0IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgbWVtbztcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBtZW1vO1xuXHRcdH07XG5cdH0sXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdChzZWxmLm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cdH0pLFxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0fSksXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0aWYoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcblxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDc2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0Q29sdW1uUHJvcHMgPSBleHBvcnRzLkNvbCA9IGV4cG9ydHMuZ2V0Um93UHJvcHMgPSBleHBvcnRzLlJvdyA9IGV4cG9ydHMuR3JpZCA9IHVuZGVmaW5lZDtcblxudmFyIF9Sb3cyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL1JvdycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2dldFJvd1Byb3BzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX1JvdzIuZ2V0Um93UHJvcHM7XG4gIH1cbn0pO1xuXG52YXIgX0NvbDIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvQ29sJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZ2V0Q29sdW1uUHJvcHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfQ29sMi5nZXRDb2x1bW5Qcm9wcztcbiAgfVxufSk7XG5cbnZhciBfR3JpZDIgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvR3JpZCcpO1xuXG52YXIgX0dyaWQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfR3JpZDIpO1xuXG52YXIgX1JvdzMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3cyKTtcblxudmFyIF9Db2wzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQ29sMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuR3JpZCA9IF9HcmlkMy5kZWZhdWx0O1xuZXhwb3J0cy5Sb3cgPSBfUm93My5kZWZhdWx0O1xuZXhwb3J0cy5Db2wgPSBfQ29sMy5kZWZhdWx0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3NzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5WaWV3cG9ydFNpemVUeXBlID0gZXhwb3J0cy5Db2x1bW5TaXplVHlwZSA9IHVuZGVmaW5lZDtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBDb2x1bW5TaXplVHlwZSA9IGV4cG9ydHMuQ29sdW1uU2l6ZVR5cGUgPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsIF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbF0pO1xudmFyIFZpZXdwb3J0U2l6ZVR5cGUgPSBleHBvcnRzLlZpZXdwb3J0U2l6ZVR5cGUgPSBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsneHMnLCAnc20nLCAnbWQnLCAnbGcnXSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWZsZXhib3gtZ3JpZC9saWIvdHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDc3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfVGV4dEZpZWxkID0gcmVxdWlyZSgnLi9UZXh0RmllbGQnKTtcblxudmFyIF9UZXh0RmllbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dEZpZWxkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1RleHRGaWVsZDIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3Nzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMgNCA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX1JhaXNlZEJ1dHRvbiA9IHJlcXVpcmUoJy4vUmFpc2VkQnV0dG9uJyk7XG5cbnZhciBfUmFpc2VkQnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JhaXNlZEJ1dHRvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9SYWlzZWRCdXR0b24yLmRlZmF1bHQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIDQgNSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRhaW5lci1mbHVpZCxcXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uY29udGFpbmVyLWZsdWlkIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxufVxcblxcbi5yb3cge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gIC1tcy1mbGV4OiAwIDEgYXV0bztcXG4gIGZsZXg6IDAgMSBhdXRvO1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXJpZ2h0OiAtMC41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IC0wLjVyZW07XFxufVxcblxcbi5yb3cucmV2ZXJzZSB7XFxuICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IHJldmVyc2U7XFxuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbn1cXG5cXG4uY29sLnJldmVyc2Uge1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogcmV2ZXJzZTtcXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxufVxcblxcbi5jb2wteHMsXFxuLmNvbC14cy0xLFxcbi5jb2wteHMtMixcXG4uY29sLXhzLTMsXFxuLmNvbC14cy00LFxcbi5jb2wteHMtNSxcXG4uY29sLXhzLTYsXFxuLmNvbC14cy03LFxcbi5jb2wteHMtOCxcXG4uY29sLXhzLTksXFxuLmNvbC14cy0xMCxcXG4uY29sLXhzLTExLFxcbi5jb2wteHMtMTIsXFxuLmNvbC14cy1vZmZzZXQtMCxcXG4uY29sLXhzLW9mZnNldC0xLFxcbi5jb2wteHMtb2Zmc2V0LTIsXFxuLmNvbC14cy1vZmZzZXQtMyxcXG4uY29sLXhzLW9mZnNldC00LFxcbi5jb2wteHMtb2Zmc2V0LTUsXFxuLmNvbC14cy1vZmZzZXQtNixcXG4uY29sLXhzLW9mZnNldC03LFxcbi5jb2wteHMtb2Zmc2V0LTgsXFxuLmNvbC14cy1vZmZzZXQtOSxcXG4uY29sLXhzLW9mZnNldC0xMCxcXG4uY29sLXhzLW9mZnNldC0xMSxcXG4uY29sLXhzLW9mZnNldC0xMiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gIC1tcy1mbGV4OiAwIDAgYXV0bztcXG4gIGZsZXg6IDAgMCBhdXRvO1xcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxufVxcblxcbi5jb2wteHMge1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XFxuICBmbGV4LWJhc2lzOiAwO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29sLXhzLTEge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDguMzMzMzMzMzMlO1xcbiAgZmxleC1iYXNpczogOC4zMzMzMzMzMyU7XFxuICBtYXgtd2lkdGg6IDguMzMzMzMzMzMlO1xcbn1cXG5cXG4uY29sLXhzLTIge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDE2LjY2NjY2NjY3JTtcXG4gIGZsZXgtYmFzaXM6IDE2LjY2NjY2NjY3JTtcXG4gIG1heC13aWR0aDogMTYuNjY2NjY2NjclO1xcbn1cXG5cXG4uY29sLXhzLTMge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDI1JTtcXG4gIGZsZXgtYmFzaXM6IDI1JTtcXG4gIG1heC13aWR0aDogMjUlO1xcbn1cXG5cXG4uY29sLXhzLTQge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDMzLjMzMzMzMzMzJTtcXG4gIGZsZXgtYmFzaXM6IDMzLjMzMzMzMzMzJTtcXG4gIG1heC13aWR0aDogMzMuMzMzMzMzMzMlO1xcbn1cXG5cXG4uY29sLXhzLTUge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDQxLjY2NjY2NjY3JTtcXG4gIGZsZXgtYmFzaXM6IDQxLjY2NjY2NjY3JTtcXG4gIG1heC13aWR0aDogNDEuNjY2NjY2NjclO1xcbn1cXG5cXG4uY29sLXhzLTYge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDUwJTtcXG4gIGZsZXgtYmFzaXM6IDUwJTtcXG4gIG1heC13aWR0aDogNTAlO1xcbn1cXG5cXG4uY29sLXhzLTcge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDU4LjMzMzMzMzMzJTtcXG4gIGZsZXgtYmFzaXM6IDU4LjMzMzMzMzMzJTtcXG4gIG1heC13aWR0aDogNTguMzMzMzMzMzMlO1xcbn1cXG5cXG4uY29sLXhzLTgge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDY2LjY2NjY2NjY3JTtcXG4gIGZsZXgtYmFzaXM6IDY2LjY2NjY2NjY3JTtcXG4gIG1heC13aWR0aDogNjYuNjY2NjY2NjclO1xcbn1cXG5cXG4uY29sLXhzLTkge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDc1JTtcXG4gIGZsZXgtYmFzaXM6IDc1JTtcXG4gIG1heC13aWR0aDogNzUlO1xcbn1cXG5cXG4uY29sLXhzLTEwIHtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4My4zMzMzMzMzMyU7XFxuICBmbGV4LWJhc2lzOiA4My4zMzMzMzMzMyU7XFxuICBtYXgtd2lkdGg6IDgzLjMzMzMzMzMzJTtcXG59XFxuXFxuLmNvbC14cy0xMSB7XFxuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogOTEuNjY2NjY2NjclO1xcbiAgZmxleC1iYXNpczogOTEuNjY2NjY2NjclO1xcbiAgbWF4LXdpZHRoOiA5MS42NjY2NjY2NyU7XFxufVxcblxcbi5jb2wteHMtMTIge1xcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC0wIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC0xIHtcXG4gIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJTtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtMiB7XFxuICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC0zIHtcXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTQge1xcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtNSB7XFxuICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC02IHtcXG4gIG1hcmdpbi1sZWZ0OiA1MCU7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTcge1xcbiAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJTtcXG59XFxuXFxuLmNvbC14cy1vZmZzZXQtOCB7XFxuICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclO1xcbn1cXG5cXG4uY29sLXhzLW9mZnNldC05IHtcXG4gIG1hcmdpbi1sZWZ0OiA3NSU7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTEwIHtcXG4gIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XFxufVxcblxcbi5jb2wteHMtb2Zmc2V0LTExIHtcXG4gIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyU7XFxufVxcblxcbi5zdGFydC14cyB7XFxuICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcXG4gIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi5jZW50ZXIteHMge1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5lbmQteHMge1xcbiAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xcbiAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLnRvcC14cyB7XFxuICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XFxuICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLm1pZGRsZS14cyB7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib3R0b20teHMge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcXG4gIC1tcy1mbGV4LWFsaWduOiBlbmQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi5hcm91bmQteHMge1xcbiAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uYmV0d2Vlbi14cyB7XFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZpcnN0LXhzIHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDA7XFxuICAtbXMtZmxleC1vcmRlcjogLTE7XFxuICBvcmRlcjogLTE7XFxufVxcblxcbi5sYXN0LXhzIHtcXG4gIC13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6IDI7XFxuICAtbXMtZmxleC1vcmRlcjogMTtcXG4gIG9yZGVyOiAxO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4ZW0pIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogNDlyZW07XFxuICB9XFxuXFxuICAuY29sLXNtLFxcbiAgLmNvbC1zbS0xLFxcbiAgLmNvbC1zbS0yLFxcbiAgLmNvbC1zbS0zLFxcbiAgLmNvbC1zbS00LFxcbiAgLmNvbC1zbS01LFxcbiAgLmNvbC1zbS02LFxcbiAgLmNvbC1zbS03LFxcbiAgLmNvbC1zbS04LFxcbiAgLmNvbC1zbS05LFxcbiAgLmNvbC1zbS0xMCxcXG4gIC5jb2wtc20tMTEsXFxuICAuY29sLXNtLTEyLFxcbiAgLmNvbC1zbS1vZmZzZXQtMCxcXG4gIC5jb2wtc20tb2Zmc2V0LTEsXFxuICAuY29sLXNtLW9mZnNldC0yLFxcbiAgLmNvbC1zbS1vZmZzZXQtMyxcXG4gIC5jb2wtc20tb2Zmc2V0LTQsXFxuICAuY29sLXNtLW9mZnNldC01LFxcbiAgLmNvbC1zbS1vZmZzZXQtNixcXG4gIC5jb2wtc20tb2Zmc2V0LTcsXFxuICAuY29sLXNtLW9mZnNldC04LFxcbiAgLmNvbC1zbS1vZmZzZXQtOSxcXG4gIC5jb2wtc20tb2Zmc2V0LTEwLFxcbiAgLmNvbC1zbS1vZmZzZXQtMTEsXFxuICAuY29sLXNtLW9mZnNldC0xMiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgIC1tcy1mbGV4OiAwIDAgYXV0bztcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICB9XFxuXFxuICAuY29sLXNtIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XFxuICAgIGZsZXgtYmFzaXM6IDA7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tMSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4LjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogOC4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogOC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLXNtLTIge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTYuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiAxNi42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogMTYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1zbS0zIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDI1JTtcXG4gICAgZmxleC1iYXNpczogMjUlO1xcbiAgICBtYXgtd2lkdGg6IDI1JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tNCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAzMy4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDMzLjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLXNtLTUge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNDEuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA0MS42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogNDEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1zbS02IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDUwJTtcXG4gICAgZmxleC1iYXNpczogNTAlO1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tNyB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1OC4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDU4LjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLXNtLTgge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNjYuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA2Ni42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogNjYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1zbS05IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDc1JTtcXG4gICAgZmxleC1iYXNpczogNzUlO1xcbiAgICBtYXgtd2lkdGg6IDc1JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tMTAge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogODMuMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA4My4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogODMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS0xMSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA5MS42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDkxLjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA5MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLXNtLTEyIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTAge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTEge1xcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLXNtLW9mZnNldC0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTMge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1vZmZzZXQtNCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLXNtLW9mZnNldC01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTYge1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1vZmZzZXQtNyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLXNtLW9mZnNldC04IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtc20tb2Zmc2V0LTkge1xcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1vZmZzZXQtMTAge1xcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1zbS1vZmZzZXQtMTEge1xcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLnN0YXJ0LXNtIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgfVxcblxcbiAgLmNlbnRlci1zbSB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmVuZC1zbSB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcXG4gICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICB9XFxuXFxuICAudG9wLXNtIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xcbiAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgfVxcblxcbiAgLm1pZGRsZS1zbSB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYm90dG9tLXNtIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgfVxcblxcbiAgLmFyb3VuZC1zbSB7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcblxcbiAgLmJldHdlZW4tc20ge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAuZmlyc3Qtc20ge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAwO1xcbiAgICAtbXMtZmxleC1vcmRlcjogLTE7XFxuICAgIG9yZGVyOiAtMTtcXG4gIH1cXG5cXG4gIC5sYXN0LXNtIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjtcXG4gICAgLW1zLWZsZXgtb3JkZXI6IDE7XFxuICAgIG9yZGVyOiAxO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogNjVyZW07XFxuICB9XFxuXFxuICAuY29sLW1kLFxcbiAgLmNvbC1tZC0xLFxcbiAgLmNvbC1tZC0yLFxcbiAgLmNvbC1tZC0zLFxcbiAgLmNvbC1tZC00LFxcbiAgLmNvbC1tZC01LFxcbiAgLmNvbC1tZC02LFxcbiAgLmNvbC1tZC03LFxcbiAgLmNvbC1tZC04LFxcbiAgLmNvbC1tZC05LFxcbiAgLmNvbC1tZC0xMCxcXG4gIC5jb2wtbWQtMTEsXFxuICAuY29sLW1kLTEyLFxcbiAgLmNvbC1tZC1vZmZzZXQtMCxcXG4gIC5jb2wtbWQtb2Zmc2V0LTEsXFxuICAuY29sLW1kLW9mZnNldC0yLFxcbiAgLmNvbC1tZC1vZmZzZXQtMyxcXG4gIC5jb2wtbWQtb2Zmc2V0LTQsXFxuICAuY29sLW1kLW9mZnNldC01LFxcbiAgLmNvbC1tZC1vZmZzZXQtNixcXG4gIC5jb2wtbWQtb2Zmc2V0LTcsXFxuICAuY29sLW1kLW9mZnNldC04LFxcbiAgLmNvbC1tZC1vZmZzZXQtOSxcXG4gIC5jb2wtbWQtb2Zmc2V0LTEwLFxcbiAgLmNvbC1tZC1vZmZzZXQtMTEsXFxuICAuY29sLW1kLW9mZnNldC0xMiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgIC1tcy1mbGV4OiAwIDAgYXV0bztcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICB9XFxuXFxuICAuY29sLW1kIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XFxuICAgIGZsZXgtYmFzaXM6IDA7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtMSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4LjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogOC4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogOC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLW1kLTIge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTYuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiAxNi42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogMTYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1tZC0zIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDI1JTtcXG4gICAgZmxleC1iYXNpczogMjUlO1xcbiAgICBtYXgtd2lkdGg6IDI1JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtNCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAzMy4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDMzLjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLW1kLTUge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNDEuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA0MS42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogNDEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1tZC02IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDUwJTtcXG4gICAgZmxleC1iYXNpczogNTAlO1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtNyB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1OC4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDU4LjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLW1kLTgge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNjYuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA2Ni42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogNjYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1tZC05IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDc1JTtcXG4gICAgZmxleC1iYXNpczogNzUlO1xcbiAgICBtYXgtd2lkdGg6IDc1JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtMTAge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogODMuMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA4My4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogODMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC0xMSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA5MS42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDkxLjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA5MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLW1kLTEyIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTAge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTEge1xcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTMge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC1vZmZzZXQtNCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTYge1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC1vZmZzZXQtNyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLW1kLW9mZnNldC04IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbWQtb2Zmc2V0LTkge1xcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC1vZmZzZXQtMTAge1xcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1tZC1vZmZzZXQtMTEge1xcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLnN0YXJ0LW1kIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgfVxcblxcbiAgLmNlbnRlci1tZCB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmVuZC1tZCB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcXG4gICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICB9XFxuXFxuICAudG9wLW1kIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xcbiAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgfVxcblxcbiAgLm1pZGRsZS1tZCB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYm90dG9tLW1kIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgfVxcblxcbiAgLmFyb3VuZC1tZCB7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcblxcbiAgLmJldHdlZW4tbWQge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAuZmlyc3QtbWQge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAwO1xcbiAgICAtbXMtZmxleC1vcmRlcjogLTE7XFxuICAgIG9yZGVyOiAtMTtcXG4gIH1cXG5cXG4gIC5sYXN0LW1kIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjtcXG4gICAgLW1zLWZsZXgtb3JkZXI6IDE7XFxuICAgIG9yZGVyOiAxO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc1ZW0pIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogNzZyZW07XFxuICB9XFxuXFxuICAuY29sLWxnLFxcbiAgLmNvbC1sZy0xLFxcbiAgLmNvbC1sZy0yLFxcbiAgLmNvbC1sZy0zLFxcbiAgLmNvbC1sZy00LFxcbiAgLmNvbC1sZy01LFxcbiAgLmNvbC1sZy02LFxcbiAgLmNvbC1sZy03LFxcbiAgLmNvbC1sZy04LFxcbiAgLmNvbC1sZy05LFxcbiAgLmNvbC1sZy0xMCxcXG4gIC5jb2wtbGctMTEsXFxuICAuY29sLWxnLTEyLFxcbiAgLmNvbC1sZy1vZmZzZXQtMCxcXG4gIC5jb2wtbGctb2Zmc2V0LTEsXFxuICAuY29sLWxnLW9mZnNldC0yLFxcbiAgLmNvbC1sZy1vZmZzZXQtMyxcXG4gIC5jb2wtbGctb2Zmc2V0LTQsXFxuICAuY29sLWxnLW9mZnNldC01LFxcbiAgLmNvbC1sZy1vZmZzZXQtNixcXG4gIC5jb2wtbGctb2Zmc2V0LTcsXFxuICAuY29sLWxnLW9mZnNldC04LFxcbiAgLmNvbC1sZy1vZmZzZXQtOSxcXG4gIC5jb2wtbGctb2Zmc2V0LTEwLFxcbiAgLmNvbC1sZy1vZmZzZXQtMTEsXFxuICAuY29sLWxnLW9mZnNldC0xMiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XFxuICAgIC1tcy1mbGV4OiAwIDAgYXV0bztcXG4gICAgZmxleDogMCAwIGF1dG87XFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuICB9XFxuXFxuICAuY29sLWxnIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XFxuICAgIGZsZXgtYmFzaXM6IDA7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctMSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA4LjMzMzMzMzMzJTtcXG4gICAgZmxleC1iYXNpczogOC4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogOC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTIge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTYuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiAxNi42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogMTYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1sZy0zIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDI1JTtcXG4gICAgZmxleC1iYXNpczogMjUlO1xcbiAgICBtYXgtd2lkdGg6IDI1JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctNCB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAzMy4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDMzLjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTUge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNDEuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA0MS42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogNDEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1sZy02IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDUwJTtcXG4gICAgZmxleC1iYXNpczogNTAlO1xcbiAgICBtYXgtd2lkdGg6IDUwJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctNyB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA1OC4zMzMzMzMzMyU7XFxuICAgIGZsZXgtYmFzaXM6IDU4LjMzMzMzMzMzJTtcXG4gICAgbWF4LXdpZHRoOiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTgge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogNjYuNjY2NjY2NjclO1xcbiAgICBmbGV4LWJhc2lzOiA2Ni42NjY2NjY2NyU7XFxuICAgIG1heC13aWR0aDogNjYuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLmNvbC1sZy05IHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDc1JTtcXG4gICAgZmxleC1iYXNpczogNzUlO1xcbiAgICBtYXgtd2lkdGg6IDc1JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctMTAge1xcbiAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogODMuMzMzMzMzMzMlO1xcbiAgICBmbGV4LWJhc2lzOiA4My4zMzMzMzMzMyU7XFxuICAgIG1heC13aWR0aDogODMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy0xMSB7XFxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiA5MS42NjY2NjY2NyU7XFxuICAgIGZsZXgtYmFzaXM6IDkxLjY2NjY2NjY3JTtcXG4gICAgbWF4LXdpZHRoOiA5MS42NjY2NjY2NyU7XFxuICB9XFxuXFxuICAuY29sLWxnLTEyIHtcXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDEwMCU7XFxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTAge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTEge1xcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTMge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtNCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTYge1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtNyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XFxuICB9XFxuXFxuICAuY29sLWxnLW9mZnNldC04IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcXG4gIH1cXG5cXG4gIC5jb2wtbGctb2Zmc2V0LTkge1xcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtMTAge1xcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlO1xcbiAgfVxcblxcbiAgLmNvbC1sZy1vZmZzZXQtMTEge1xcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbiAgfVxcblxcbiAgLnN0YXJ0LWxnIHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgfVxcblxcbiAgLmNlbnRlci1sZyB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmVuZC1sZyB7XFxuICAgIC13ZWJraXQtYm94LXBhY2s6IGVuZDtcXG4gICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICB9XFxuXFxuICAudG9wLWxnIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xcbiAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgfVxcblxcbiAgLm1pZGRsZS1sZyB7XFxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYm90dG9tLWxnIHtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcXG4gICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgfVxcblxcbiAgLmFyb3VuZC1sZyB7XFxuICAgIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcblxcbiAgLmJldHdlZW4tbGcge1xcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAuZmlyc3QtbGcge1xcbiAgICAtd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOiAwO1xcbiAgICAtbXMtZmxleC1vcmRlcjogLTE7XFxuICAgIG9yZGVyOiAtMTtcXG4gIH1cXG5cXG4gIC5sYXN0LWxnIHtcXG4gICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMjtcXG4gICAgLW1zLWZsZXgtb3JkZXI6IDE7XFxuICAgIG9yZGVyOiAxO1xcbiAgfVxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vZmxleGJveGdyaWQvZGlzdC9mbGV4Ym94Z3JpZC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDkwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxudmFyIF9jb2xvck1hbmlwdWxhdG9yID0gcmVxdWlyZSgnLi4vdXRpbHMvY29sb3JNYW5pcHVsYXRvcicpO1xuXG52YXIgX0VuaGFuY2VkQnV0dG9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvRW5oYW5jZWRCdXR0b24nKTtcblxudmFyIF9FbmhhbmNlZEJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FbmhhbmNlZEJ1dHRvbik7XG5cbnZhciBfUGFwZXIgPSByZXF1aXJlKCcuLi9QYXBlcicpO1xuXG52YXIgX1BhcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BhcGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdmFsaWRhdGVMYWJlbChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXByb3BzLmNoaWxkcmVuICYmIHByb3BzLmxhYmVsICE9PSAwICYmICFwcm9wcy5sYWJlbCAmJiAhcHJvcHMuaWNvbikge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignUmVxdWlyZWQgcHJvcCBsYWJlbCBvciBjaGlsZHJlbiBvciBpY29uIHdhcyBub3Qgc3BlY2lmaWVkIGluICcgKyBjb21wb25lbnROYW1lICsgJy4nKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0LCBzdGF0ZSkge1xuICB2YXIgX2NvbnRleHQkbXVpVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lLFxuICAgICAgYmFzZVRoZW1lID0gX2NvbnRleHQkbXVpVGhlbWUuYmFzZVRoZW1lLFxuICAgICAgYnV0dG9uID0gX2NvbnRleHQkbXVpVGhlbWUuYnV0dG9uLFxuICAgICAgcmFpc2VkQnV0dG9uID0gX2NvbnRleHQkbXVpVGhlbWUucmFpc2VkQnV0dG9uLFxuICAgICAgYm9yZGVyUmFkaXVzID0gX2NvbnRleHQkbXVpVGhlbWUuYm9yZGVyUmFkaXVzO1xuICB2YXIgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkQmFja2dyb3VuZENvbG9yID0gcHJvcHMuZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBkaXNhYmxlZExhYmVsQ29sb3IgPSBwcm9wcy5kaXNhYmxlZExhYmVsQ29sb3IsXG4gICAgICBmdWxsV2lkdGggPSBwcm9wcy5mdWxsV2lkdGgsXG4gICAgICBpY29uID0gcHJvcHMuaWNvbixcbiAgICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICBsYWJlbFBvc2l0aW9uID0gcHJvcHMubGFiZWxQb3NpdGlvbixcbiAgICAgIHByaW1hcnkgPSBwcm9wcy5wcmltYXJ5LFxuICAgICAgc2Vjb25kYXJ5ID0gcHJvcHMuc2Vjb25kYXJ5LFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZTtcblxuXG4gIHZhciBhbW91bnQgPSBwcmltYXJ5IHx8IHNlY29uZGFyeSA/IDAuNCA6IDAuMDg7XG5cbiAgdmFyIGJhY2tncm91bmRDb2xvciA9IHJhaXNlZEJ1dHRvbi5jb2xvcjtcbiAgdmFyIGxhYmVsQ29sb3IgPSByYWlzZWRCdXR0b24udGV4dENvbG9yO1xuXG4gIGlmIChkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmRDb2xvciA9IGRpc2FibGVkQmFja2dyb3VuZENvbG9yIHx8IHJhaXNlZEJ1dHRvbi5kaXNhYmxlZENvbG9yO1xuICAgIGxhYmVsQ29sb3IgPSBkaXNhYmxlZExhYmVsQ29sb3IgfHwgcmFpc2VkQnV0dG9uLmRpc2FibGVkVGV4dENvbG9yO1xuICB9IGVsc2UgaWYgKHByaW1hcnkpIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3IgPSByYWlzZWRCdXR0b24ucHJpbWFyeUNvbG9yO1xuICAgIGxhYmVsQ29sb3IgPSByYWlzZWRCdXR0b24ucHJpbWFyeVRleHRDb2xvcjtcbiAgfSBlbHNlIGlmIChzZWNvbmRhcnkpIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3IgPSByYWlzZWRCdXR0b24uc2Vjb25kYXJ5Q29sb3I7XG4gICAgbGFiZWxDb2xvciA9IHJhaXNlZEJ1dHRvbi5zZWNvbmRhcnlUZXh0Q29sb3I7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHByb3BzLmJhY2tncm91bmRDb2xvcikge1xuICAgICAgYmFja2dyb3VuZENvbG9yID0gcHJvcHMuYmFja2dyb3VuZENvbG9yO1xuICAgIH1cbiAgICBpZiAocHJvcHMubGFiZWxDb2xvcikge1xuICAgICAgbGFiZWxDb2xvciA9IHByb3BzLmxhYmVsQ29sb3I7XG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1dHRvbkhlaWdodCA9IHN0eWxlICYmIHN0eWxlLmhlaWdodCB8fCBidXR0b24uaGVpZ2h0O1xuXG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpLFxuICAgICAgbWluV2lkdGg6IGZ1bGxXaWR0aCA/ICcxMDAlJyA6IGJ1dHRvbi5taW5XaWR0aFxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBoZWlnaHQ6IGJ1dHRvbkhlaWdodCxcbiAgICAgIGxpbmVIZWlnaHQ6IGJ1dHRvbkhlaWdodCArICdweCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgICAgLy8gVGhhdCdzIHRoZSBkZWZhdWx0IHZhbHVlIGZvciBhIGJ1dHRvbiBidXQgbm90IGEgbGlua1xuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIGZvbnRTaXplOiByYWlzZWRCdXR0b24uZm9udFNpemUsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAwLFxuICAgICAgdGV4dFRyYW5zZm9ybTogcmFpc2VkQnV0dG9uLnRleHRUcmFuc2Zvcm0gfHwgYnV0dG9uLnRleHRUcmFuc2Zvcm0gfHwgJ3VwcGVyY2FzZScsXG4gICAgICBmb250V2VpZ2h0OiByYWlzZWRCdXR0b24uZm9udFdlaWdodCxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgIHBhZGRpbmdMZWZ0OiBpY29uICYmIGxhYmVsUG9zaXRpb24gIT09ICdiZWZvcmUnID8gOCA6IGJhc2VUaGVtZS5zcGFjaW5nLmRlc2t0b3BHdXR0ZXJMZXNzLFxuICAgICAgcGFkZGluZ1JpZ2h0OiBpY29uICYmIGxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnID8gOCA6IGJhc2VUaGVtZS5zcGFjaW5nLmRlc2t0b3BHdXR0ZXJMZXNzLFxuICAgICAgY29sb3I6IGxhYmVsQ29sb3JcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgbWFyZ2luTGVmdDogbGFiZWwgJiYgbGFiZWxQb3NpdGlvbiAhPT0gJ2JlZm9yZScgPyAxMiA6IDAsXG4gICAgICBtYXJnaW5SaWdodDogbGFiZWwgJiYgbGFiZWxQb3NpdGlvbiA9PT0gJ2JlZm9yZScgPyAxMiA6IDBcbiAgICB9LFxuICAgIG92ZXJsYXk6IHtcbiAgICAgIGhlaWdodDogYnV0dG9uSGVpZ2h0LFxuICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IChzdGF0ZS5rZXlib2FyZEZvY3VzZWQgfHwgc3RhdGUuaG92ZXJlZCkgJiYgIWRpc2FibGVkICYmICgwLCBfY29sb3JNYW5pcHVsYXRvci5mYWRlKShsYWJlbENvbG9yLCBhbW91bnQpLFxuICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgIHRvcDogMFxuICAgIH0sXG4gICAgcmlwcGxlOiB7XG4gICAgICBjb2xvcjogbGFiZWxDb2xvcixcbiAgICAgIG9wYWNpdHk6ICEocHJpbWFyeSB8fCBzZWNvbmRhcnkpID8gMC4xIDogMC4xNlxuICAgIH1cbiAgfTtcbn1cblxudmFyIFJhaXNlZEJ1dHRvbiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKFJhaXNlZEJ1dHRvbiwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmFpc2VkQnV0dG9uKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIFJhaXNlZEJ1dHRvbik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBSYWlzZWRCdXR0b24uX19wcm90b19fIHx8ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKFJhaXNlZEJ1dHRvbikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgaG92ZXJlZDogZmFsc2UsXG4gICAgICBrZXlib2FyZEZvY3VzZWQ6IGZhbHNlLFxuICAgICAgdG91Y2hlZDogZmFsc2UsXG4gICAgICBpbml0aWFsWkRlcHRoOiAwLFxuICAgICAgekRlcHRoOiAwXG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBvbmx5IGxpc3RlbiB0byBsZWZ0IGNsaWNrc1xuICAgICAgaWYgKGV2ZW50LmJ1dHRvbiA9PT0gMCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgekRlcHRoOiBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoICsgMVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbk1vdXNlRG93bikge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlRG93bihldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VVcCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB6RGVwdGg6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGhcbiAgICAgIH0pO1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uTW91c2VVcCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlVXAoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmICghX3RoaXMuc3RhdGUua2V5Ym9hcmRGb2N1c2VkKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB6RGVwdGg6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGgsXG4gICAgICAgICAgaG92ZXJlZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZUxlYXZlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VMZWF2ZShldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlTW91c2VFbnRlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5zdGF0ZS5rZXlib2FyZEZvY3VzZWQgJiYgIV90aGlzLnN0YXRlLnRvdWNoZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGhvdmVyZWQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Nb3VzZUVudGVyKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uTW91c2VFbnRlcihldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlVG91Y2hTdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0b3VjaGVkOiB0cnVlLFxuICAgICAgICB6RGVwdGg6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGggKyAxXG4gICAgICB9KTtcblxuICAgICAgaWYgKF90aGlzLnByb3BzLm9uVG91Y2hTdGFydCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vblRvdWNoU3RhcnQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZVRvdWNoRW5kID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRvdWNoZWQ6IHRydWUsXG4gICAgICAgIHpEZXB0aDogX3RoaXMuc3RhdGUuaW5pdGlhbFpEZXB0aFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vblRvdWNoRW5kKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uVG91Y2hFbmQoZXZlbnQpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmhhbmRsZUtleWJvYXJkRm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQsIGtleWJvYXJkRm9jdXNlZCkge1xuICAgICAgdmFyIHpEZXB0aCA9IGtleWJvYXJkRm9jdXNlZCAmJiAhX3RoaXMucHJvcHMuZGlzYWJsZWQgPyBfdGhpcy5zdGF0ZS5pbml0aWFsWkRlcHRoICsgMSA6IF90aGlzLnN0YXRlLmluaXRpYWxaRGVwdGg7XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgekRlcHRoOiB6RGVwdGgsXG4gICAgICAgIGtleWJvYXJkRm9jdXNlZDoga2V5Ym9hcmRGb2N1c2VkXG4gICAgICB9KTtcbiAgICB9LCBfdGVtcCksICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkoX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoUmFpc2VkQnV0dG9uLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHZhciB6RGVwdGggPSB0aGlzLnByb3BzLmRpc2FibGVkID8gMCA6IDE7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgekRlcHRoOiB6RGVwdGgsXG4gICAgICAgIGluaXRpYWxaRGVwdGg6IHpEZXB0aFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgekRlcHRoID0gbmV4dFByb3BzLmRpc2FibGVkID8gMCA6IDE7XG4gICAgICB2YXIgbmV4dFN0YXRlID0ge1xuICAgICAgICB6RGVwdGg6IHpEZXB0aCxcbiAgICAgICAgaW5pdGlhbFpEZXB0aDogekRlcHRoXG4gICAgICB9O1xuXG4gICAgICBpZiAobmV4dFByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIG5leHRTdGF0ZS5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBfcHJvcHMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgIGJ1dHRvblN0eWxlID0gX3Byb3BzLmJ1dHRvblN0eWxlLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3IgPSBfcHJvcHMuZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgZGlzYWJsZWRMYWJlbENvbG9yID0gX3Byb3BzLmRpc2FibGVkTGFiZWxDb2xvcixcbiAgICAgICAgICBmdWxsV2lkdGggPSBfcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgICAgIGljb24gPSBfcHJvcHMuaWNvbixcbiAgICAgICAgICBsYWJlbCA9IF9wcm9wcy5sYWJlbCxcbiAgICAgICAgICBsYWJlbENvbG9yID0gX3Byb3BzLmxhYmVsQ29sb3IsXG4gICAgICAgICAgbGFiZWxQb3NpdGlvbiA9IF9wcm9wcy5sYWJlbFBvc2l0aW9uLFxuICAgICAgICAgIGxhYmVsU3R5bGUgPSBfcHJvcHMubGFiZWxTdHlsZSxcbiAgICAgICAgICBvdmVybGF5U3R5bGUgPSBfcHJvcHMub3ZlcmxheVN0eWxlLFxuICAgICAgICAgIHByaW1hcnkgPSBfcHJvcHMucHJpbWFyeSxcbiAgICAgICAgICByaXBwbGVTdHlsZSA9IF9wcm9wcy5yaXBwbGVTdHlsZSxcbiAgICAgICAgICBzZWNvbmRhcnkgPSBfcHJvcHMuc2Vjb25kYXJ5LFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2JhY2tncm91bmRDb2xvcicsICdidXR0b25TdHlsZScsICdjaGlsZHJlbicsICdjbGFzc05hbWUnLCAnZGlzYWJsZWQnLCAnZGlzYWJsZWRCYWNrZ3JvdW5kQ29sb3InLCAnZGlzYWJsZWRMYWJlbENvbG9yJywgJ2Z1bGxXaWR0aCcsICdpY29uJywgJ2xhYmVsJywgJ2xhYmVsQ29sb3InLCAnbGFiZWxQb3NpdGlvbicsICdsYWJlbFN0eWxlJywgJ292ZXJsYXlTdHlsZScsICdwcmltYXJ5JywgJ3JpcHBsZVN0eWxlJywgJ3NlY29uZGFyeScsICdzdHlsZSddKTtcbiAgICAgIHZhciBwcmVwYXJlU3R5bGVzID0gdGhpcy5jb250ZXh0Lm11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXModGhpcy5wcm9wcywgdGhpcy5jb250ZXh0LCB0aGlzLnN0YXRlKTtcbiAgICAgIHZhciBtZXJnZWRSaXBwbGVTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5yaXBwbGUsIHJpcHBsZVN0eWxlKTtcblxuICAgICAgdmFyIGJ1dHRvbkV2ZW50SGFuZGxlcnMgPSBkaXNhYmxlZCA/IHt9IDoge1xuICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVNb3VzZURvd24sXG4gICAgICAgIG9uTW91c2VVcDogdGhpcy5oYW5kbGVNb3VzZVVwLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMuaGFuZGxlTW91c2VMZWF2ZSxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmhhbmRsZU1vdXNlRW50ZXIsXG4gICAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuICAgICAgICBvblRvdWNoRW5kOiB0aGlzLmhhbmRsZVRvdWNoRW5kLFxuICAgICAgICBvbktleWJvYXJkRm9jdXM6IHRoaXMuaGFuZGxlS2V5Ym9hcmRGb2N1c1xuICAgICAgfTtcblxuICAgICAgdmFyIGxhYmVsRWxlbWVudCA9IGxhYmVsICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5sYWJlbCwgbGFiZWxTdHlsZSkpLCBrZXk6ICdsYWJlbEVsZW1lbnQnIH0sXG4gICAgICAgIGxhYmVsXG4gICAgICApO1xuXG4gICAgICB2YXIgaWNvbkNsb25lZCA9IGljb24gJiYgKDAsIF9yZWFjdC5jbG9uZUVsZW1lbnQpKGljb24sIHtcbiAgICAgICAgY29sb3I6IGljb24ucHJvcHMuY29sb3IgfHwgc3R5bGVzLmxhYmVsLmNvbG9yLFxuICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5pY29uLCBpY29uLnByb3BzLnN0eWxlKSxcbiAgICAgICAga2V5OiAnaWNvbkNsb25lZCdcbiAgICAgIH0pO1xuXG4gICAgICAvLyBQbGFjZSBsYWJlbCBiZWZvcmUgb3IgYWZ0ZXIgY2hpbGRyZW4uXG4gICAgICB2YXIgZW5oYW5jZWRCdXR0b25DaGlsZHJlbiA9IGxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnID8gW2xhYmVsRWxlbWVudCwgaWNvbkNsb25lZCwgY2hpbGRyZW5dIDogW2NoaWxkcmVuLCBpY29uQ2xvbmVkLCBsYWJlbEVsZW1lbnRdO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9QYXBlcjIuZGVmYXVsdCxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKSxcbiAgICAgICAgICB6RGVwdGg6IHRoaXMuc3RhdGUuekRlcHRoXG4gICAgICAgIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9FbmhhbmNlZEJ1dHRvbjIuZGVmYXVsdCxcbiAgICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwgYnV0dG9uRXZlbnRIYW5kbGVycywge1xuICAgICAgICAgICAgcmVmOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmJ1dHRvbiwgYnV0dG9uU3R5bGUpLFxuICAgICAgICAgICAgZm9jdXNSaXBwbGVDb2xvcjogbWVyZ2VkUmlwcGxlU3R5bGVzLmNvbG9yLFxuICAgICAgICAgICAgdG91Y2hSaXBwbGVDb2xvcjogbWVyZ2VkUmlwcGxlU3R5bGVzLmNvbG9yLFxuICAgICAgICAgICAgZm9jdXNSaXBwbGVPcGFjaXR5OiBtZXJnZWRSaXBwbGVTdHlsZXMub3BhY2l0eSxcbiAgICAgICAgICAgIHRvdWNoUmlwcGxlT3BhY2l0eTogbWVyZ2VkUmlwcGxlU3R5bGVzLm9wYWNpdHlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6ICdvdmVybGF5JyxcbiAgICAgICAgICAgICAgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5vdmVybGF5LCBvdmVybGF5U3R5bGUpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuaGFuY2VkQnV0dG9uQ2hpbGRyZW5cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBSYWlzZWRCdXR0b247XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5SYWlzZWRCdXR0b24ubXVpTmFtZSA9ICdSYWlzZWRCdXR0b24nO1xuUmFpc2VkQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBsYWJlbFBvc2l0aW9uOiAnYWZ0ZXInLFxuICBmdWxsV2lkdGg6IGZhbHNlLFxuICBwcmltYXJ5OiBmYWxzZSxcbiAgc2Vjb25kYXJ5OiBmYWxzZVxufTtcblJhaXNlZEJ1dHRvbi5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuUmFpc2VkQnV0dG9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSBidXR0b24sXG4gICAqIGJ1dCBub3QgdGhlIGRlZmF1bHQgZGlzYWJsZWQgYmFja2dyb3VuZCBjb2xvclxuICAgKiAodXNlIGBkaXNhYmxlZEJhY2tncm91bmRDb2xvcmAgZm9yIHRoaXMpLlxuICAgKi9cbiAgYmFja2dyb3VuZENvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBidXR0b24gZWxlbWVudC5cbiAgICovXG4gIGJ1dHRvblN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBidXR0b24uXG4gICAqIElmIGEgbGFiZWwgaXMgcHJvdmlkZWQgdmlhIHRoZSBgbGFiZWxgIHByb3AsIHRoZSB0ZXh0IHdpdGhpbiB0aGUgbGFiZWxcbiAgICogd2lsbCBiZSBkaXNwbGF5ZWQgaW4gYWRkaXRpb24gdG8gdGhlIGNvbnRlbnQgcHJvdmlkZWQgaGVyZS5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgQ1NTIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgICogVGhlIGVsZW1lbnQgdG8gdXNlIGFzIHRoZSBjb250YWluZXIgZm9yIHRoZSBSYWlzZWRCdXR0b24uIEVpdGhlciBhIHN0cmluZyB0b1xuICAgICogdXNlIGEgRE9NIGVsZW1lbnQgb3IgYSBSZWFjdEVsZW1lbnQuIFRoaXMgaXMgdXNlZnVsIGZvciB3cmFwcGluZyB0aGVcbiAgICAqIFJhaXNlZEJ1dHRvbiBpbiBhIGN1c3RvbSBMaW5rIGNvbXBvbmVudC4gSWYgYSBSZWFjdEVsZW1lbnQgaXMgZ2l2ZW4sIGVuc3VyZVxuICAgICogdGhhdCBpdCBwYXNzZXMgYWxsIG9mIGl0cyBnaXZlbiBwcm9wcyB0aHJvdWdoIHRvIHRoZSB1bmRlcmx5aW5nIERPTVxuICAgICogZWxlbWVudCBhbmQgcmVuZGVycyBpdHMgY2hpbGRyZW4gcHJvcCBmb3IgcHJvcGVyIGludGVncmF0aW9uLlxuICAgICovXG4gIGNvbnRhaW5lckVsZW1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5lbGVtZW50XSksXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgZWxlbWVudCdzIHJpcHBsZSBlZmZlY3Qgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVUb3VjaFJpcHBsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSBidXR0b25cbiAgICogd2hlbiBpdCBpcyBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkQmFja2dyb3VuZENvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgYnV0dG9uJ3MgbGFiZWwgd2hlbiB0aGUgYnV0dG9uIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWRMYWJlbENvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBidXR0b24gd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFRoZSBVUkwgdG8gbGluayB0byB3aGVuIHRoZSBidXR0b24gaXMgY2xpY2tlZC5cbiAgICovXG4gIGhyZWY6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogQW4gaWNvbiB0byBiZSBkaXNwbGF5ZWQgd2l0aGluIHRoZSBidXR0b24uXG4gICAqL1xuICBpY29uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgbGFiZWwgdG8gYmUgZGlzcGxheWVkIHdpdGhpbiB0aGUgYnV0dG9uLlxuICAgKiBJZiBjb250ZW50IGlzIHByb3ZpZGVkIHZpYSB0aGUgYGNoaWxkcmVuYCBwcm9wLCB0aGF0IGNvbnRlbnQgd2lsbCBiZVxuICAgKiBkaXNwbGF5ZWQgaW4gYWRkaXRpb24gdG8gdGhlIGxhYmVsIHByb3ZpZGVkIGhlcmUuXG4gICAqL1xuICBsYWJlbDogdmFsaWRhdGVMYWJlbCxcbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgYnV0dG9uJ3MgbGFiZWwuXG4gICAqL1xuICBsYWJlbENvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgYnV0dG9uJ3MgbGFiZWwgcmVsYXRpdmUgdG8gdGhlIGJ1dHRvbidzIGBjaGlsZHJlbmAuXG4gICAqL1xuICBsYWJlbFBvc2l0aW9uOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mKFsnYmVmb3JlJywgJ2FmdGVyJ10pLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIGJ1dHRvbidzIGxhYmVsIGVsZW1lbnQuXG4gICAqL1xuICBsYWJlbFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZURvd246IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZUVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VMZWF2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbk1vdXNlVXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Ub3VjaEVuZDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvblRvdWNoU3RhcnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gdGhlIGJ1dHRvbiBpcyB0b3VjaC10YXBwZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUb3VjaFRhcCBldmVudCB0YXJnZXRpbmcgdGhlIGJ1dHRvbi5cbiAgICovXG4gIG9uVG91Y2hUYXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUgc3R5bGUgb2YgdGhlIGJ1dHRvbiBvdmVybGF5LlxuICAgKi9cbiAgb3ZlcmxheVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBidXR0b24gd2lsbCB1c2UgdGhlIHRoZW1lJ3MgcHJpbWFyeSBjb2xvci5cbiAgICovXG4gIHByaW1hcnk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUgc3R5bGUgb2YgdGhlIHJpcHBsZSBlbGVtZW50LlxuICAgKi9cbiAgcmlwcGxlU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIHVzZSB0aGUgdGhlbWUncyBzZWNvbmRhcnkgY29sb3IuXG4gICAqIElmIGJvdGggYHNlY29uZGFyeWAgYW5kIGBwcmltYXJ5YCBhcmUgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIHVzZVxuICAgKiB0aGUgdGhlbWUncyBwcmltYXJ5IGNvbG9yLlxuICAgKi9cbiAgc2Vjb25kYXJ5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBSYWlzZWRCdXR0b247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL1JhaXNlZEJ1dHRvbi9SYWlzZWRCdXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDkwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdEV2ZW50TGlzdGVuZXIgPSByZXF1aXJlKCdyZWFjdC1ldmVudC1saXN0ZW5lcicpO1xuXG52YXIgX3JlYWN0RXZlbnRMaXN0ZW5lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEV2ZW50TGlzdGVuZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcm93c0hlaWdodCA9IDI0O1xuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQsIHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScgfSxcbiAgICB0ZXh0YXJlYToge1xuICAgICAgaGVpZ2h0OiBzdGF0ZS5oZWlnaHQsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgcmVzaXplOiAnbm9uZScsXG4gICAgICBmb250OiAnaW5oZXJpdCcsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgY3Vyc29yOiAnaW5oZXJpdCdcbiAgICB9LFxuICAgIHNoYWRvdzoge1xuICAgICAgcmVzaXplOiAnbm9uZScsXG4gICAgICAvLyBPdmVyZmxvdyBhbHNvIG5lZWRlZCB0byBoZXJlIHRvIHJlbW92ZSB0aGUgZXh0cmEgcm93XG4gICAgICAvLyBhZGRlZCB0byB0ZXh0YXJlYXMgaW4gRmlyZWZveC5cbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIC8vIFZpc2liaWxpdHkgbmVlZGVkIHRvIGhpZGUgdGhlIGV4dHJhIHRleHQgYXJlYSBvbiBpcGFkc1xuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGhlaWdodDogJ2F1dG8nXG4gICAgfVxuICB9O1xufVxuXG52YXIgRW5oYW5jZWRUZXh0YXJlYSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKEVuaGFuY2VkVGV4dGFyZWEsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEVuaGFuY2VkVGV4dGFyZWEoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgRW5oYW5jZWRUZXh0YXJlYSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9ICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKF9yZWYgPSBFbmhhbmNlZFRleHRhcmVhLl9fcHJvdG9fXyB8fCAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShFbmhhbmNlZFRleHRhcmVhKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBoZWlnaHQ6IG51bGxcbiAgICB9LCBfdGhpcy5oYW5kbGVSZXNpemUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnN5bmNIZWlnaHRXaXRoU2hhZG93KHVuZGVmaW5lZCwgZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICBfdGhpcy5zeW5jSGVpZ2h0V2l0aFNoYWRvdyhldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlTGluaycpKSB7XG4gICAgICAgIF90aGlzLnByb3BzLnZhbHVlTGluay5yZXF1ZXN0Q2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKEVuaGFuY2VkVGV4dGFyZWEsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5yb3dzICogcm93c0hlaWdodFxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc3luY0hlaWdodFdpdGhTaGFkb3coKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMudmFsdWUgIT09IHRoaXMucHJvcHMudmFsdWUgfHwgbmV4dFByb3BzLnJvd3NNYXggIT09IHRoaXMucHJvcHMucm93c01heCkge1xuICAgICAgICB0aGlzLnN5bmNIZWlnaHRXaXRoU2hhZG93KG5leHRQcm9wcy52YWx1ZSwgbnVsbCwgbmV4dFByb3BzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRJbnB1dE5vZGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbnB1dE5vZGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWZzLmlucHV0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgIHRoaXMuZ2V0SW5wdXROb2RlKCkudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuc3luY0hlaWdodFdpdGhTaGFkb3codmFsdWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N5bmNIZWlnaHRXaXRoU2hhZG93JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3luY0hlaWdodFdpdGhTaGFkb3cobmV3VmFsdWUsIGV2ZW50LCBwcm9wcykge1xuICAgICAgdmFyIHNoYWRvdyA9IHRoaXMucmVmcy5zaGFkb3c7XG4gICAgICB2YXIgZGlzcGxheVRleHQgPSB0aGlzLnByb3BzLmhpbnRUZXh0ICYmIChuZXdWYWx1ZSA9PT0gJycgfHwgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBuZXdWYWx1ZSA9PT0gbnVsbCkgPyB0aGlzLnByb3BzLmhpbnRUZXh0IDogbmV3VmFsdWU7XG5cbiAgICAgIGlmIChkaXNwbGF5VGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNoYWRvdy52YWx1ZSA9IGRpc3BsYXlUZXh0O1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3SGVpZ2h0ID0gc2hhZG93LnNjcm9sbEhlaWdodDtcblxuICAgICAgLy8gR3VhcmRpbmcgZm9yIGpzZG9tLCB3aGVyZSBzY3JvbGxIZWlnaHQgaXNuJ3QgcHJlc2VudC5cbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdG1wdmFyL2pzZG9tL2lzc3Vlcy8xMDEzXG4gICAgICBpZiAobmV3SGVpZ2h0ID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgICAgcHJvcHMgPSBwcm9wcyB8fCB0aGlzLnByb3BzO1xuXG4gICAgICBpZiAocHJvcHMucm93c01heCA+PSBwcm9wcy5yb3dzKSB7XG4gICAgICAgIG5ld0hlaWdodCA9IE1hdGgubWluKHByb3BzLnJvd3NNYXggKiByb3dzSGVpZ2h0LCBuZXdIZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICBuZXdIZWlnaHQgPSBNYXRoLm1heChuZXdIZWlnaHQsIHJvd3NIZWlnaHQpO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5oZWlnaHQgIT09IG5ld0hlaWdodCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBoZWlnaHQ6IG5ld0hlaWdodFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocHJvcHMub25IZWlnaHRDaGFuZ2UpIHtcbiAgICAgICAgICBwcm9wcy5vbkhlaWdodENoYW5nZShldmVudCwgbmV3SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIG9uQ2hhbmdlID0gX3Byb3BzLm9uQ2hhbmdlLFxuICAgICAgICAgIG9uSGVpZ2h0Q2hhbmdlID0gX3Byb3BzLm9uSGVpZ2h0Q2hhbmdlLFxuICAgICAgICAgIHJvd3MgPSBfcHJvcHMucm93cyxcbiAgICAgICAgICByb3dzTWF4ID0gX3Byb3BzLnJvd3NNYXgsXG4gICAgICAgICAgc2hhZG93U3R5bGUgPSBfcHJvcHMuc2hhZG93U3R5bGUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgaGludFRleHQgPSBfcHJvcHMuaGludFRleHQsXG4gICAgICAgICAgdGV4dGFyZWFTdHlsZSA9IF9wcm9wcy50ZXh0YXJlYVN0eWxlLFxuICAgICAgICAgIHZhbHVlTGluayA9IF9wcm9wcy52YWx1ZUxpbmssXG4gICAgICAgICAgb3RoZXIgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMy5kZWZhdWx0KShfcHJvcHMsIFsnb25DaGFuZ2UnLCAnb25IZWlnaHRDaGFuZ2UnLCAncm93cycsICdyb3dzTWF4JywgJ3NoYWRvd1N0eWxlJywgJ3N0eWxlJywgJ2hpbnRUZXh0JywgJ3RleHRhcmVhU3R5bGUnLCAndmFsdWVMaW5rJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMuc3RhdGUpO1xuICAgICAgdmFyIHJvb3RTdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnJvb3QsIHN0eWxlKTtcbiAgICAgIHZhciB0ZXh0YXJlYVN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMudGV4dGFyZWEsIHRleHRhcmVhU3R5bGUpO1xuICAgICAgdmFyIHNoYWRvd1N0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgdGV4dGFyZWFTdHlsZXMsIHN0eWxlcy5zaGFkb3csIHNoYWRvd1N0eWxlKTtcblxuICAgICAgaWYgKHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlTGluaycpKSB7XG4gICAgICAgIG90aGVyLnZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZUxpbmsudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMocm9vdFN0eWxlcykgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0RXZlbnRMaXN0ZW5lcjIuZGVmYXVsdCwgeyB0YXJnZXQ6ICd3aW5kb3cnLCBvblJlc2l6ZTogdGhpcy5oYW5kbGVSZXNpemUgfSksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIHtcbiAgICAgICAgICByZWY6ICdzaGFkb3cnLFxuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKHNoYWRvd1N0eWxlcyksXG4gICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgcm93czogdGhpcy5wcm9wcy5yb3dzLFxuICAgICAgICAgIGRlZmF1bHRWYWx1ZTogdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgdmFsdWU6IHRoaXMucHJvcHMudmFsdWUsXG4gICAgICAgICAgdmFsdWVMaW5rOiB0aGlzLnByb3BzLnZhbHVlTGlua1xuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7fSwgb3RoZXIsIHtcbiAgICAgICAgICByZWY6ICdpbnB1dCcsXG4gICAgICAgICAgcm93czogdGhpcy5wcm9wcy5yb3dzLFxuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKHRleHRhcmVhU3R5bGVzKSxcbiAgICAgICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVDaGFuZ2VcbiAgICAgICAgfSkpXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gRW5oYW5jZWRUZXh0YXJlYTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkVuaGFuY2VkVGV4dGFyZWEuZGVmYXVsdFByb3BzID0ge1xuICByb3dzOiAxXG59O1xuRW5oYW5jZWRUZXh0YXJlYS5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuRW5oYW5jZWRUZXh0YXJlYS5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGRlZmF1bHRWYWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5hbnksXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGhpbnRUZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIG9uQ2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uSGVpZ2h0Q2hhbmdlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIHJvd3M6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICByb3dzTWF4OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgc2hhZG93U3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgdGV4dGFyZWFTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdmFsdWVMaW5rOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gRW5oYW5jZWRUZXh0YXJlYTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvVGV4dEZpZWxkL0VuaGFuY2VkVGV4dGFyZWEuanNcbi8vIG1vZHVsZSBpZCA9IDkwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9zaGFsbG93RXF1YWwgPSByZXF1aXJlKCdyZWNvbXBvc2Uvc2hhbGxvd0VxdWFsJyk7XG5cbnZhciBfc2hhbGxvd0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWxsb3dFcXVhbCk7XG5cbnZhciBfdHJhbnNpdGlvbnMgPSByZXF1aXJlKCcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnKTtcblxudmFyIF90cmFuc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2l0aW9ucyk7XG5cbnZhciBfRW5oYW5jZWRUZXh0YXJlYSA9IHJlcXVpcmUoJy4vRW5oYW5jZWRUZXh0YXJlYScpO1xuXG52YXIgX0VuaGFuY2VkVGV4dGFyZWEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRW5oYW5jZWRUZXh0YXJlYSk7XG5cbnZhciBfVGV4dEZpZWxkSGludCA9IHJlcXVpcmUoJy4vVGV4dEZpZWxkSGludCcpO1xuXG52YXIgX1RleHRGaWVsZEhpbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dEZpZWxkSGludCk7XG5cbnZhciBfVGV4dEZpZWxkTGFiZWwgPSByZXF1aXJlKCcuL1RleHRGaWVsZExhYmVsJyk7XG5cbnZhciBfVGV4dEZpZWxkTGFiZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV4dEZpZWxkTGFiZWwpO1xuXG52YXIgX1RleHRGaWVsZFVuZGVybGluZSA9IHJlcXVpcmUoJy4vVGV4dEZpZWxkVW5kZXJsaW5lJyk7XG5cbnZhciBfVGV4dEZpZWxkVW5kZXJsaW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RleHRGaWVsZFVuZGVybGluZSk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzLCBjb250ZXh0LCBzdGF0ZSkge1xuICB2YXIgX2NvbnRleHQkbXVpVGhlbWUgPSBjb250ZXh0Lm11aVRoZW1lLFxuICAgICAgYmFzZVRoZW1lID0gX2NvbnRleHQkbXVpVGhlbWUuYmFzZVRoZW1lLFxuICAgICAgX2NvbnRleHQkbXVpVGhlbWUkdGV4ID0gX2NvbnRleHQkbXVpVGhlbWUudGV4dEZpZWxkLFxuICAgICAgZmxvYXRpbmdMYWJlbENvbG9yID0gX2NvbnRleHQkbXVpVGhlbWUkdGV4LmZsb2F0aW5nTGFiZWxDb2xvcixcbiAgICAgIGZvY3VzQ29sb3IgPSBfY29udGV4dCRtdWlUaGVtZSR0ZXguZm9jdXNDb2xvcixcbiAgICAgIHRleHRDb2xvciA9IF9jb250ZXh0JG11aVRoZW1lJHRleC50ZXh0Q29sb3IsXG4gICAgICBkaXNhYmxlZFRleHRDb2xvciA9IF9jb250ZXh0JG11aVRoZW1lJHRleC5kaXNhYmxlZFRleHRDb2xvcixcbiAgICAgIGJhY2tncm91bmRDb2xvciA9IF9jb250ZXh0JG11aVRoZW1lJHRleC5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBlcnJvckNvbG9yID0gX2NvbnRleHQkbXVpVGhlbWUkdGV4LmVycm9yQ29sb3I7XG5cblxuICB2YXIgc3R5bGVzID0ge1xuICAgIHJvb3Q6IHtcbiAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgIGxpbmVIZWlnaHQ6ICcyNHB4JyxcbiAgICAgIHdpZHRoOiBwcm9wcy5mdWxsV2lkdGggPyAnMTAwJScgOiAyNTYsXG4gICAgICBoZWlnaHQ6IChwcm9wcy5yb3dzIC0gMSkgKiAyNCArIChwcm9wcy5mbG9hdGluZ0xhYmVsVGV4dCA/IDcyIDogNDgpLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgICAgZm9udEZhbWlseTogYmFzZVRoZW1lLmZvbnRGYW1pbHksXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgnMjAwbXMnLCAnaGVpZ2h0JyksXG4gICAgICBjdXJzb3I6IHByb3BzLmRpc2FibGVkID8gJ25vdC1hbGxvd2VkJyA6ICdhdXRvJ1xuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgYm90dG9tOiAyLFxuICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgbGluZUhlaWdodDogJzEycHgnLFxuICAgICAgY29sb3I6IGVycm9yQ29sb3IsXG4gICAgICB0cmFuc2l0aW9uOiBfdHJhbnNpdGlvbnMyLmRlZmF1bHQuZWFzZU91dCgpXG4gICAgfSxcbiAgICBmbG9hdGluZ0xhYmVsOiB7XG4gICAgICBjb2xvcjogcHJvcHMuZGlzYWJsZWQgPyBkaXNhYmxlZFRleHRDb2xvciA6IGZsb2F0aW5nTGFiZWxDb2xvcixcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH0sXG4gICAgaW5wdXQ6IHtcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxuICAgICAgY29sb3I6IHByb3BzLmRpc2FibGVkID8gZGlzYWJsZWRUZXh0Q29sb3IgOiB0ZXh0Q29sb3IsXG4gICAgICBjdXJzb3I6ICdpbmhlcml0JyxcbiAgICAgIGZvbnQ6ICdpbmhlcml0JyxcbiAgICAgIFdlYmtpdFRleHRGaWxsQ29sb3I6IHByb3BzLmRpc2FibGVkID8gZGlzYWJsZWRUZXh0Q29sb3IgOiB0ZXh0Q29sb3IsXG4gICAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3JnYmEoMCwwLDAsMCknIH0sXG4gICAgaW5wdXROYXRpdmU6IHtcbiAgICAgIGFwcGVhcmFuY2U6ICd0ZXh0ZmllbGQnIH1cbiAgfTtcblxuICBzdHlsZXMudGV4dGFyZWEgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHN0eWxlcy5pbnB1dCwge1xuICAgIG1hcmdpblRvcDogcHJvcHMuZmxvYXRpbmdMYWJlbFRleHQgPyAzNiA6IDEyLFxuICAgIG1hcmdpbkJvdHRvbTogcHJvcHMuZmxvYXRpbmdMYWJlbFRleHQgPyAtMzYgOiAtMTIsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZm9udDogJ2luaGVyaXQnXG4gIH0pO1xuXG4gIC8vIERvIG5vdCBhc3NpZ24gYSBoZWlnaHQgdG8gdGhlIHRleHRhcmVhIGFzIGhlIGhhbmRsZXMgaXQgb24gaGlzIG93bi5cbiAgc3R5bGVzLmlucHV0LmhlaWdodCA9ICcxMDAlJztcblxuICBpZiAoc3RhdGUuaXNGb2N1c2VkKSB7XG4gICAgc3R5bGVzLmZsb2F0aW5nTGFiZWwuY29sb3IgPSBmb2N1c0NvbG9yO1xuICB9XG5cbiAgaWYgKHByb3BzLmZsb2F0aW5nTGFiZWxUZXh0KSB7XG4gICAgc3R5bGVzLmlucHV0LmJveFNpemluZyA9ICdib3JkZXItYm94JztcblxuICAgIGlmICghcHJvcHMubXVsdGlMaW5lKSB7XG4gICAgICBzdHlsZXMuaW5wdXQubWFyZ2luVG9wID0gMTQ7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlLmVycm9yVGV4dCkge1xuICAgICAgc3R5bGVzLmVycm9yLmJvdHRvbSA9ICFwcm9wcy5tdWx0aUxpbmUgPyBzdHlsZXMuZXJyb3IuZm9udFNpemUgKyAzIDogMztcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhdGUuZXJyb3JUZXh0KSB7XG4gICAgaWYgKHN0YXRlLmlzRm9jdXNlZCkge1xuICAgICAgc3R5bGVzLmZsb2F0aW5nTGFiZWwuY29sb3IgPSBzdHlsZXMuZXJyb3IuY29sb3I7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyB2YWxpZCB0byBiZSBkaXNwbGF5ZWQgaW5zaWRlIGFuIGlucHV0LlxuICpcbiAqIEBwYXJhbSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSBzdHJpbmcgcHJvdmlkZWQgaXMgdmFsaWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gaXNWYWxpZCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09ICcnICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgJiYgIShBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApO1xufVxuXG52YXIgVGV4dEZpZWxkID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czMuZGVmYXVsdCkoVGV4dEZpZWxkLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUZXh0RmllbGQoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazMuZGVmYXVsdCkodGhpcywgVGV4dEZpZWxkKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KSh0aGlzLCAoX3JlZiA9IFRleHRGaWVsZC5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoVGV4dEZpZWxkKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBpc0ZvY3VzZWQ6IGZhbHNlLFxuICAgICAgZXJyb3JUZXh0OiB1bmRlZmluZWQsXG4gICAgICBoYXNWYWx1ZTogZmFsc2VcbiAgICB9LCBfdGhpcy5oYW5kbGVJbnB1dEJsdXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgaXNGb2N1c2VkOiBmYWxzZSB9KTtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25CbHVyKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGhhc1ZhbHVlOiBpc1ZhbGlkKGV2ZW50LnRhcmdldC52YWx1ZSkgfSk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlSW5wdXRGb2N1cyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKF90aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIF90aGlzLnNldFN0YXRlKHsgaXNGb2N1c2VkOiB0cnVlIH0pO1xuICAgICAgaWYgKF90aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Gb2N1cyhldmVudCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlSGVpZ2h0Q2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50LCBoZWlnaHQpIHtcbiAgICAgIHZhciBuZXdIZWlnaHQgPSBoZWlnaHQgKyAyNDtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5mbG9hdGluZ0xhYmVsVGV4dCkge1xuICAgICAgICBuZXdIZWlnaHQgKz0gMjQ7XG4gICAgICB9XG4gICAgICBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUoX3RoaXMpLnN0eWxlLmhlaWdodCA9IG5ld0hlaWdodCArICdweCc7XG4gICAgfSwgX3RlbXApLCAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MzLmRlZmF1bHQpKFRleHRGaWVsZCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBuYW1lID0gX3Byb3BzLm5hbWUsXG4gICAgICAgICAgaGludFRleHQgPSBfcHJvcHMuaGludFRleHQsXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbFRleHQgPSBfcHJvcHMuZmxvYXRpbmdMYWJlbFRleHQsXG4gICAgICAgICAgaWQgPSBfcHJvcHMuaWQ7XG5cblxuICAgICAgdmFyIHByb3BzTGVhZiA9IGNoaWxkcmVuID8gY2hpbGRyZW4ucHJvcHMgOiB0aGlzLnByb3BzO1xuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZXJyb3JUZXh0OiB0aGlzLnByb3BzLmVycm9yVGV4dCxcbiAgICAgICAgaGFzVmFsdWU6IGlzVmFsaWQocHJvcHNMZWFmLnZhbHVlKSB8fCBpc1ZhbGlkKHByb3BzTGVhZi5kZWZhdWx0VmFsdWUpXG4gICAgICB9KTtcblxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gKDAsIF93YXJuaW5nMi5kZWZhdWx0KShuYW1lIHx8IGhpbnRUZXh0IHx8IGZsb2F0aW5nTGFiZWxUZXh0IHx8IGlkLCAnTWF0ZXJpYWwtVUk6IFdlIGRvblxcJ3QgaGF2ZSBlbm91Z2ggaW5mb3JtYXRpb25cXG4gICAgICB0byBidWlsZCBhIHJvYnVzdCB1bmlxdWUgaWQgZm9yIHRoZSBUZXh0RmllbGQgY29tcG9uZW50LiBQbGVhc2UgcHJvdmlkZSBhbiBpZCBvciBhIG5hbWUuJykgOiB2b2lkIDA7XG5cbiAgICAgIHZhciB1bmlxdWVJZCA9IG5hbWUgKyAnLScgKyBoaW50VGV4dCArICctJyArIGZsb2F0aW5nTGFiZWxUZXh0ICsgJy0nICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMHhGRkZGKTtcbiAgICAgIHRoaXMudW5pcXVlSWQgPSB1bmlxdWVJZC5yZXBsYWNlKC9bXkEtWmEtejAtOS1dL2dpLCAnJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAobmV4dFByb3BzLmVycm9yVGV4dCAhPT0gdGhpcy5wcm9wcy5lcnJvclRleHQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZXJyb3JUZXh0OiBuZXh0UHJvcHMuZXJyb3JUZXh0XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dFByb3BzLmNoaWxkcmVuICYmIG5leHRQcm9wcy5jaGlsZHJlbi5wcm9wcykge1xuICAgICAgICBuZXh0UHJvcHMgPSBuZXh0UHJvcHMuY2hpbGRyZW4ucHJvcHM7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0UHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgICAgdmFyIGhhc1ZhbHVlID0gaXNWYWxpZChuZXh0UHJvcHMudmFsdWUpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGhhc1ZhbHVlOiBoYXNWYWx1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUsIG5leHRDb250ZXh0KSB7XG4gICAgICByZXR1cm4gISgwLCBfc2hhbGxvd0VxdWFsMi5kZWZhdWx0KSh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICEoMCwgX3NoYWxsb3dFcXVhbDIuZGVmYXVsdCkodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKSB8fCAhKDAsIF9zaGFsbG93RXF1YWwyLmRlZmF1bHQpKHRoaXMuY29udGV4dCwgbmV4dENvbnRleHQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2JsdXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgaWYgKHRoaXMuaW5wdXQpIHtcbiAgICAgICAgdGhpcy5nZXRJbnB1dE5vZGUoKS5ibHVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZm9jdXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgIGlmICh0aGlzLmlucHV0KSB7XG4gICAgICAgIHRoaXMuZ2V0SW5wdXROb2RlKCkuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZWxlY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3QoKSB7XG4gICAgICBpZiAodGhpcy5pbnB1dCkge1xuICAgICAgICB0aGlzLmdldElucHV0Tm9kZSgpLnNlbGVjdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbnB1dCA/IHRoaXMuZ2V0SW5wdXROb2RlKCkudmFsdWUgOiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SW5wdXROb2RlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5wdXROb2RlKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4gfHwgdGhpcy5wcm9wcy5tdWx0aUxpbmUgPyB0aGlzLmlucHV0LmdldElucHV0Tm9kZSgpIDogX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMuaW5wdXQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19pc0NvbnRyb2xsZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaXNDb250cm9sbGVkKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wczIuY2hpbGRyZW4sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzMi5jbGFzc05hbWUsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMyLmRpc2FibGVkLFxuICAgICAgICAgIGVycm9yU3R5bGUgPSBfcHJvcHMyLmVycm9yU3R5bGUsXG4gICAgICAgICAgZXJyb3JUZXh0ID0gX3Byb3BzMi5lcnJvclRleHQsXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbEZpeGVkID0gX3Byb3BzMi5mbG9hdGluZ0xhYmVsRml4ZWQsXG4gICAgICAgICAgZmxvYXRpbmdMYWJlbEZvY3VzU3R5bGUgPSBfcHJvcHMyLmZsb2F0aW5nTGFiZWxGb2N1c1N0eWxlLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxTaHJpbmtTdHlsZSA9IF9wcm9wczIuZmxvYXRpbmdMYWJlbFNocmlua1N0eWxlLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxTdHlsZSA9IF9wcm9wczIuZmxvYXRpbmdMYWJlbFN0eWxlLFxuICAgICAgICAgIGZsb2F0aW5nTGFiZWxUZXh0ID0gX3Byb3BzMi5mbG9hdGluZ0xhYmVsVGV4dCxcbiAgICAgICAgICBmdWxsV2lkdGggPSBfcHJvcHMyLmZ1bGxXaWR0aCxcbiAgICAgICAgICBoaW50VGV4dCA9IF9wcm9wczIuaGludFRleHQsXG4gICAgICAgICAgaGludFN0eWxlID0gX3Byb3BzMi5oaW50U3R5bGUsXG4gICAgICAgICAgaWQgPSBfcHJvcHMyLmlkLFxuICAgICAgICAgIGlucHV0U3R5bGUgPSBfcHJvcHMyLmlucHV0U3R5bGUsXG4gICAgICAgICAgbXVsdGlMaW5lID0gX3Byb3BzMi5tdWx0aUxpbmUsXG4gICAgICAgICAgb25CbHVyID0gX3Byb3BzMi5vbkJsdXIsXG4gICAgICAgICAgb25DaGFuZ2UgPSBfcHJvcHMyLm9uQ2hhbmdlLFxuICAgICAgICAgIG9uRm9jdXMgPSBfcHJvcHMyLm9uRm9jdXMsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMyLnN0eWxlLFxuICAgICAgICAgIHR5cGUgPSBfcHJvcHMyLnR5cGUsXG4gICAgICAgICAgdW5kZXJsaW5lRGlzYWJsZWRTdHlsZSA9IF9wcm9wczIudW5kZXJsaW5lRGlzYWJsZWRTdHlsZSxcbiAgICAgICAgICB1bmRlcmxpbmVGb2N1c1N0eWxlID0gX3Byb3BzMi51bmRlcmxpbmVGb2N1c1N0eWxlLFxuICAgICAgICAgIHVuZGVybGluZVNob3cgPSBfcHJvcHMyLnVuZGVybGluZVNob3csXG4gICAgICAgICAgdW5kZXJsaW5lU3R5bGUgPSBfcHJvcHMyLnVuZGVybGluZVN0eWxlLFxuICAgICAgICAgIHJvd3MgPSBfcHJvcHMyLnJvd3MsXG4gICAgICAgICAgcm93c01heCA9IF9wcm9wczIucm93c01heCxcbiAgICAgICAgICB0ZXh0YXJlYVN0eWxlID0gX3Byb3BzMi50ZXh0YXJlYVN0eWxlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzMiwgWydjaGlsZHJlbicsICdjbGFzc05hbWUnLCAnZGlzYWJsZWQnLCAnZXJyb3JTdHlsZScsICdlcnJvclRleHQnLCAnZmxvYXRpbmdMYWJlbEZpeGVkJywgJ2Zsb2F0aW5nTGFiZWxGb2N1c1N0eWxlJywgJ2Zsb2F0aW5nTGFiZWxTaHJpbmtTdHlsZScsICdmbG9hdGluZ0xhYmVsU3R5bGUnLCAnZmxvYXRpbmdMYWJlbFRleHQnLCAnZnVsbFdpZHRoJywgJ2hpbnRUZXh0JywgJ2hpbnRTdHlsZScsICdpZCcsICdpbnB1dFN0eWxlJywgJ211bHRpTGluZScsICdvbkJsdXInLCAnb25DaGFuZ2UnLCAnb25Gb2N1cycsICdzdHlsZScsICd0eXBlJywgJ3VuZGVybGluZURpc2FibGVkU3R5bGUnLCAndW5kZXJsaW5lRm9jdXNTdHlsZScsICd1bmRlcmxpbmVTaG93JywgJ3VuZGVybGluZVN0eWxlJywgJ3Jvd3MnLCAncm93c01heCcsICd0ZXh0YXJlYVN0eWxlJ10pO1xuICAgICAgdmFyIHByZXBhcmVTdHlsZXMgPSB0aGlzLmNvbnRleHQubXVpVGhlbWUucHJlcGFyZVN0eWxlcztcblxuICAgICAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHRoaXMuc3RhdGUpO1xuICAgICAgdmFyIGlucHV0SWQgPSBpZCB8fCB0aGlzLnVuaXF1ZUlkO1xuXG4gICAgICB2YXIgZXJyb3JUZXh0RWxlbWVudCA9IHRoaXMuc3RhdGUuZXJyb3JUZXh0ICYmIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmVycm9yLCBlcnJvclN0eWxlKSkgfSxcbiAgICAgICAgdGhpcy5zdGF0ZS5lcnJvclRleHRcbiAgICAgICk7XG5cbiAgICAgIHZhciBmbG9hdGluZ0xhYmVsVGV4dEVsZW1lbnQgPSBmbG9hdGluZ0xhYmVsVGV4dCAmJiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX1RleHRGaWVsZExhYmVsMi5kZWZhdWx0LFxuICAgICAgICB7XG4gICAgICAgICAgbXVpVGhlbWU6IHRoaXMuY29udGV4dC5tdWlUaGVtZSxcbiAgICAgICAgICBzdHlsZTogKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5mbG9hdGluZ0xhYmVsLCBmbG9hdGluZ0xhYmVsU3R5bGUsIHRoaXMuc3RhdGUuaXNGb2N1c2VkID8gZmxvYXRpbmdMYWJlbEZvY3VzU3R5bGUgOiBudWxsKSxcbiAgICAgICAgICBzaHJpbmtTdHlsZTogZmxvYXRpbmdMYWJlbFNocmlua1N0eWxlLFxuICAgICAgICAgIGh0bWxGb3I6IGlucHV0SWQsXG4gICAgICAgICAgc2hyaW5rOiB0aGlzLnN0YXRlLmhhc1ZhbHVlIHx8IHRoaXMuc3RhdGUuaXNGb2N1c2VkIHx8IGZsb2F0aW5nTGFiZWxGaXhlZCxcbiAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWRcbiAgICAgICAgfSxcbiAgICAgICAgZmxvYXRpbmdMYWJlbFRleHRcbiAgICAgICk7XG5cbiAgICAgIHZhciBpbnB1dFByb3BzID0ge1xuICAgICAgICBpZDogaW5wdXRJZCxcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoZWxlbSkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuaW5wdXQgPSBlbGVtO1xuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlZDogdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgb25CbHVyOiB0aGlzLmhhbmRsZUlucHV0Qmx1cixcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UsXG4gICAgICAgIG9uRm9jdXM6IHRoaXMuaGFuZGxlSW5wdXRGb2N1c1xuICAgICAgfTtcblxuICAgICAgdmFyIGNoaWxkU3R5bGVNZXJnZWQgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmlucHV0LCBpbnB1dFN0eWxlKTtcblxuICAgICAgdmFyIGlucHV0RWxlbWVudCA9IHZvaWQgMDtcbiAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICBpbnB1dEVsZW1lbnQgPSBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBpbnB1dFByb3BzLCBjaGlsZHJlbi5wcm9wcywge1xuICAgICAgICAgIHN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoY2hpbGRTdHlsZU1lcmdlZCwgY2hpbGRyZW4ucHJvcHMuc3R5bGUpXG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0RWxlbWVudCA9IG11bHRpTGluZSA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9FbmhhbmNlZFRleHRhcmVhMi5kZWZhdWx0LCAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHtcbiAgICAgICAgICBzdHlsZTogY2hpbGRTdHlsZU1lcmdlZCxcbiAgICAgICAgICB0ZXh0YXJlYVN0eWxlOiAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLnRleHRhcmVhLCBzdHlsZXMuaW5wdXROYXRpdmUsIHRleHRhcmVhU3R5bGUpLFxuICAgICAgICAgIHJvd3M6IHJvd3MsXG4gICAgICAgICAgcm93c01heDogcm93c01heCxcbiAgICAgICAgICBoaW50VGV4dDogaGludFRleHRcbiAgICAgICAgfSwgb3RoZXIsIGlucHV0UHJvcHMsIHtcbiAgICAgICAgICBvbkhlaWdodENoYW5nZTogdGhpcy5oYW5kbGVIZWlnaHRDaGFuZ2VcbiAgICAgICAgfSkpIDogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgKDAsIF9leHRlbmRzMy5kZWZhdWx0KSh7XG4gICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcygoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoc3R5bGVzLmlucHV0TmF0aXZlLCBjaGlsZFN0eWxlTWVyZ2VkKSlcbiAgICAgICAgfSwgb3RoZXIsIGlucHV0UHJvcHMpKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJvb3RQcm9wcyA9IHt9O1xuXG4gICAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgICAgcm9vdFByb3BzID0gb3RoZXI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgICgwLCBfZXh0ZW5kczMuZGVmYXVsdCkoe30sIHJvb3RQcm9wcywge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpKVxuICAgICAgICB9KSxcbiAgICAgICAgZmxvYXRpbmdMYWJlbFRleHRFbGVtZW50LFxuICAgICAgICBoaW50VGV4dCA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9UZXh0RmllbGRIaW50Mi5kZWZhdWx0LCB7XG4gICAgICAgICAgbXVpVGhlbWU6IHRoaXMuY29udGV4dC5tdWlUaGVtZSxcbiAgICAgICAgICBzaG93OiAhKHRoaXMuc3RhdGUuaGFzVmFsdWUgfHwgZmxvYXRpbmdMYWJlbFRleHQgJiYgIXRoaXMuc3RhdGUuaXNGb2N1c2VkKSB8fCAhdGhpcy5zdGF0ZS5oYXNWYWx1ZSAmJiBmbG9hdGluZ0xhYmVsVGV4dCAmJiBmbG9hdGluZ0xhYmVsRml4ZWQgJiYgIXRoaXMuc3RhdGUuaXNGb2N1c2VkLFxuICAgICAgICAgIHN0eWxlOiBoaW50U3R5bGUsXG4gICAgICAgICAgdGV4dDogaGludFRleHRcbiAgICAgICAgfSkgOiBudWxsLFxuICAgICAgICBpbnB1dEVsZW1lbnQsXG4gICAgICAgIHVuZGVybGluZVNob3cgPyBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVGV4dEZpZWxkVW5kZXJsaW5lMi5kZWZhdWx0LCB7XG4gICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgIGRpc2FibGVkU3R5bGU6IHVuZGVybGluZURpc2FibGVkU3R5bGUsXG4gICAgICAgICAgZXJyb3I6ICEhdGhpcy5zdGF0ZS5lcnJvclRleHQsXG4gICAgICAgICAgZXJyb3JTdHlsZTogZXJyb3JTdHlsZSxcbiAgICAgICAgICBmb2N1czogdGhpcy5zdGF0ZS5pc0ZvY3VzZWQsXG4gICAgICAgICAgZm9jdXNTdHlsZTogdW5kZXJsaW5lRm9jdXNTdHlsZSxcbiAgICAgICAgICBtdWlUaGVtZTogdGhpcy5jb250ZXh0Lm11aVRoZW1lLFxuICAgICAgICAgIHN0eWxlOiB1bmRlcmxpbmVTdHlsZVxuICAgICAgICB9KSA6IG51bGwsXG4gICAgICAgIGVycm9yVGV4dEVsZW1lbnRcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBUZXh0RmllbGQ7XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5UZXh0RmllbGQuZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIGZsb2F0aW5nTGFiZWxGaXhlZDogZmFsc2UsXG4gIG11bHRpTGluZTogZmFsc2UsXG4gIGZ1bGxXaWR0aDogZmFsc2UsXG4gIHR5cGU6ICd0ZXh0JyxcbiAgdW5kZXJsaW5lU2hvdzogdHJ1ZSxcbiAgcm93czogMVxufTtcblRleHRGaWVsZC5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuVGV4dEZpZWxkLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIFRoZSBjc3MgY2xhc3MgbmFtZSBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoZSB0ZXh0IHN0cmluZyB0byB1c2UgZm9yIHRoZSBkZWZhdWx0IHZhbHVlLlxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueSxcbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSB0ZXh0IGZpZWxkIGlmIHNldCB0byB0cnVlLlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIFRoZSBzdHlsZSBvYmplY3QgdG8gdXNlIHRvIG92ZXJyaWRlIGVycm9yIHN0eWxlcy5cbiAgICovXG4gIGVycm9yU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGVycm9yIGNvbnRlbnQgdG8gZGlzcGxheS5cbiAgICovXG4gIGVycm9yVGV4dDogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGZsb2F0aW5nIGxhYmVsIHdpbGwgZmxvYXQgZXZlbiB3aGVuIHRoZXJlIGlzIG5vIHZhbHVlLlxuICAgKi9cbiAgZmxvYXRpbmdMYWJlbEZpeGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBUaGUgc3R5bGUgb2JqZWN0IHRvIHVzZSB0byBvdmVycmlkZSBmbG9hdGluZyBsYWJlbCBzdHlsZXMgd2hlbiBmb2N1c2VkLlxuICAgKi9cbiAgZmxvYXRpbmdMYWJlbEZvY3VzU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIHN0eWxlIG9iamVjdCB0byB1c2UgdG8gb3ZlcnJpZGUgZmxvYXRpbmcgbGFiZWwgc3R5bGVzIHdoZW4gc2hydW5rLlxuICAgKi9cbiAgZmxvYXRpbmdMYWJlbFNocmlua1N0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBzdHlsZSBvYmplY3QgdG8gdXNlIHRvIG92ZXJyaWRlIGZsb2F0aW5nIGxhYmVsIHN0eWxlcy5cbiAgICovXG4gIGZsb2F0aW5nTGFiZWxTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCB0byB1c2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBlbGVtZW50LlxuICAgKi9cbiAgZmxvYXRpbmdMYWJlbFRleHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBmaWVsZCByZWNlaXZlcyB0aGUgcHJvcGVydHkgd2lkdGggMTAwJS5cbiAgICovXG4gIGZ1bGxXaWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIFRleHRGaWVsZCdzIGhpbnQgdGV4dCBlbGVtZW50LlxuICAgKi9cbiAgaGludFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSBoaW50IGNvbnRlbnQgdG8gZGlzcGxheS5cbiAgICovXG4gIGhpbnRUZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgaWQgcHJvcCBmb3IgdGhlIHRleHQgZmllbGQuXG4gICAqL1xuICBpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgVGV4dEZpZWxkJ3MgaW5wdXQgZWxlbWVudC5cbiAgICogV2hlbiBtdWx0aUxpbmUgaXMgZmFsc2U6IGRlZmluZSB0aGUgc3R5bGUgb2YgdGhlIGlucHV0IGVsZW1lbnQuXG4gICAqIFdoZW4gbXVsdGlMaW5lIGlzIHRydWU6IGRlZmluZSB0aGUgc3R5bGUgb2YgdGhlIGNvbnRhaW5lciBvZiB0aGUgdGV4dGFyZWEuXG4gICAqL1xuICBpbnB1dFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIElmIHRydWUsIGEgdGV4dGFyZWEgZWxlbWVudCB3aWxsIGJlIHJlbmRlcmVkLlxuICAgKiBUaGUgdGV4dGFyZWEgYWxzbyBncm93cyBhbmQgc2hyaW5rcyBhY2NvcmRpbmcgdG8gdGhlIG51bWJlciBvZiBsaW5lcy5cbiAgICovXG4gIG11bHRpTGluZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogTmFtZSBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAgICovXG4gIG5hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKiogQGlnbm9yZSAqL1xuICBvbkJsdXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgZmlyZWQgd2hlbiB0aGUgdGV4dGZpZWxkJ3MgdmFsdWUgY2hhbmdlcy5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IENoYW5nZSBldmVudCB0YXJnZXRpbmcgdGhlIHRleHQgZmllbGQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdWYWx1ZSBUaGUgbmV3IHZhbHVlIG9mIHRoZSB0ZXh0IGZpZWxkLlxuICAgKi9cbiAgb25DaGFuZ2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Gb2N1czogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogTnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpTGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuXG4gICAqIG11bHRpTGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzTWF4OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgVGV4dEZpZWxkJ3MgdGV4dGFyZWEgZWxlbWVudC5cbiAgICogVGhlIFRleHRGaWVsZCB1c2UgZWl0aGVyIGEgdGV4dGFyZWEgb3IgYW4gaW5wdXQsXG4gICAqIHRoaXMgcHJvcGVydHkgaGFzIGVmZmVjdHMgb25seSB3aGVuIG11bHRpTGluZSBpcyB0cnVlLlxuICAgKi9cbiAgdGV4dGFyZWFTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgdGhlIHR5cGUgb2YgaW5wdXQgdG8gZGlzcGxheVxuICAgKiBzdWNoIGFzIFwicGFzc3dvcmRcIiBvciBcInRleHRcIi5cbiAgICovXG4gIHR5cGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlXG4gICAqIFRleHRGaWVsZCdzIHVuZGVybGluZSBlbGVtZW50IHdoZW4gZGlzYWJsZWQuXG4gICAqL1xuICB1bmRlcmxpbmVEaXNhYmxlZFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBUZXh0RmllbGQnc1xuICAgKiB1bmRlcmxpbmUgZWxlbWVudCB3aGVuIGZvY3Vzc2VkLlxuICAgKi9cbiAgdW5kZXJsaW5lRm9jdXNTdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBzaG93cyB0aGUgdW5kZXJsaW5lIGZvciB0aGUgdGV4dCBmaWVsZC5cbiAgICovXG4gIHVuZGVybGluZVNob3c6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSBUZXh0RmllbGQncyB1bmRlcmxpbmUgZWxlbWVudC5cbiAgICovXG4gIHVuZGVybGluZVN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgdGV4dCBmaWVsZC5cbiAgICovXG4gIHZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmFueVxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dEZpZWxkO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkLmpzXG4vLyBtb2R1bGUgaWQgPSA5MDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMgNCA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzKSB7XG4gIHZhciBoaW50Q29sb3IgPSBwcm9wcy5tdWlUaGVtZS50ZXh0RmllbGQuaGludENvbG9yLFxuICAgICAgc2hvdyA9IHByb3BzLnNob3c7XG5cblxuICByZXR1cm4ge1xuICAgIHJvb3Q6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3BhY2l0eTogc2hvdyA/IDEgOiAwLFxuICAgICAgY29sb3I6IGhpbnRDb2xvcixcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgICBib3R0b206IDEyXG4gICAgfVxuICB9O1xufVxuXG52YXIgVGV4dEZpZWxkSGludCA9IGZ1bmN0aW9uIFRleHRGaWVsZEhpbnQocHJvcHMpIHtcbiAgdmFyIHByZXBhcmVTdHlsZXMgPSBwcm9wcy5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIHRleHQgPSBwcm9wcy50ZXh0O1xuXG5cbiAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyhwcm9wcyk7XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdkaXYnLFxuICAgIHsgc3R5bGU6IHByZXBhcmVTdHlsZXMoKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHN0eWxlcy5yb290LCBzdHlsZSkpIH0sXG4gICAgdGV4dFxuICApO1xufTtcblxuVGV4dEZpZWxkSGludC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFRoZSBtYXRlcmlhbC11aSB0aGVtZSBhcHBsaWVkIHRvIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBoaW50IHRleHQgc2hvdWxkIGJlIHZpc2libGUuXG4gICAqL1xuICBzaG93OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgcm9vdCBlbGVtZW50LlxuICAgKi9cbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogVGhlIGhpbnQgdGV4dCBkaXNwbGF5ZWQuXG4gICAqL1xuICB0ZXh0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVcbn0gOiB7fTtcblxuVGV4dEZpZWxkSGludC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3c6IHRydWVcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRleHRGaWVsZEhpbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL1RleHRGaWVsZC9UZXh0RmllbGRIaW50LmpzXG4vLyBtb2R1bGUgaWQgPSA5MDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMgNCA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGVzKHByb3BzKSB7XG4gIHZhciBkZWZhdWx0U3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxpbmVIZWlnaHQ6ICcyMnB4JyxcbiAgICB0b3A6IDM4LFxuICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KCksXG4gICAgekluZGV4OiAxLCAvLyBOZWVkZWQgdG8gZGlzcGxheSBsYWJlbCBhYm92ZSBDaHJvbWUncyBhdXRvY29tcGxldGUgZmllbGQgYmFja2dyb3VuZFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpIHRyYW5zbGF0ZSgwLCAwKScsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCB0b3AnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdhdXRvJyxcbiAgICB1c2VyU2VsZWN0OiAnbm9uZSdcbiAgfTtcblxuICB2YXIgc2hyaW5rU3R5bGVzID0gcHJvcHMuc2hyaW5rID8gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHtcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjc1KSB0cmFuc2xhdGUoMCwgLTI4cHgpJyxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgfSwgcHJvcHMuc2hyaW5rU3R5bGUpIDogbnVsbDtcblxuICByZXR1cm4ge1xuICAgIHJvb3Q6ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShkZWZhdWx0U3R5bGVzLCBwcm9wcy5zdHlsZSwgc2hyaW5rU3R5bGVzKVxuICB9O1xufVxuXG52YXIgVGV4dEZpZWxkTGFiZWwgPSBmdW5jdGlvbiBUZXh0RmllbGRMYWJlbChwcm9wcykge1xuICB2YXIgbXVpVGhlbWUgPSBwcm9wcy5tdWlUaGVtZSxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBodG1sRm9yID0gcHJvcHMuaHRtbEZvcixcbiAgICAgIG9uVG91Y2hUYXAgPSBwcm9wcy5vblRvdWNoVGFwO1xuICB2YXIgcHJlcGFyZVN0eWxlcyA9IG11aVRoZW1lLnByZXBhcmVTdHlsZXM7XG5cbiAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyhwcm9wcyk7XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICdsYWJlbCcsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICBzdHlsZTogcHJlcGFyZVN0eWxlcyhzdHlsZXMucm9vdCksXG4gICAgICBodG1sRm9yOiBodG1sRm9yLFxuICAgICAgb25Ub3VjaFRhcDogb25Ub3VjaFRhcFxuICAgIH0sXG4gICAgY2hpbGRyZW5cbiAgKTtcbn07XG5cblRleHRGaWVsZExhYmVsLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIFRoZSBsYWJlbCBjb250ZW50cy5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgY3NzIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgbGFiZWwgaWYgc2V0IHRvIHRydWUuXG4gICAqL1xuICBkaXNhYmxlZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSB0YXJnZXQgZWxlbWVudCB0aGF0IHRoaXMgbGFiZWwgc2hvdWxkIHJlZmVyIHRvLlxuICAgKi9cbiAgaHRtbEZvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqIFRoZSBtYXRlcmlhbC11aSB0aGVtZSBhcHBsaWVkIHRvIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmb3Igd2hlbiB0aGUgbGFiZWwgaXMgc2VsZWN0ZWQgdmlhIGEgdG91Y2ggdGFwLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVG91Y2hUYXAgZXZlbnQgdGFyZ2V0aW5nIHRoZSB0ZXh0IGZpZWxkIGxhYmVsLlxuICAgKi9cbiAgb25Ub3VjaFRhcDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgZmxvYXRpbmcgbGFiZWwgc2hvdWxkIHNocmluay5cbiAgICovXG4gIHNocmluazogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudCB3aGVuIHNocnVuay5cbiAgICovXG4gIHNocmlua1N0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAqL1xuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn0gOiB7fTtcblxuVGV4dEZpZWxkTGFiZWwuZGVmYXVsdFByb3BzID0ge1xuICBkaXNhYmxlZDogZmFsc2UsXG4gIHNocmluazogZmFsc2Vcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRleHRGaWVsZExhYmVsO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkTGFiZWwuanNcbi8vIG1vZHVsZSBpZCA9IDkxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDUiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX3RyYW5zaXRpb25zID0gcmVxdWlyZSgnLi4vc3R5bGVzL3RyYW5zaXRpb25zJyk7XG5cbnZhciBfdHJhbnNpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbnMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgcGFyZW50IGBUZXh0RmllbGRgIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSB1bmRlcmxpbmUgd2hlbiBwYXJlbnQgYFRleHRGaWVsZGAgaXMgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZFN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIHBhcmVudCBgVGV4dEZpZWxkYCBoYXMgYW4gZXJyb3IuXG4gICAqL1xuICBlcnJvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHVuZGVybGluZSB3aGVuIHBhcmVudCBgVGV4dEZpZWxkYCBoYXMgYW4gZXJyb3IuXG4gICAqL1xuICBlcnJvclN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdCxcbiAgLyoqXG4gICAqIFRydWUgaWYgdGhlIHBhcmVudCBgVGV4dEZpZWxkYCBpcyBmb2N1c2VkLlxuICAgKi9cbiAgZm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBpbmxpbmUtc3R5bGVzIG9mIHRoZSB1bmRlcmxpbmUgd2hlbiBwYXJlbnQgYFRleHRGaWVsZGAgaXMgZm9jdXNlZC5cbiAgICovXG4gIGZvY3VzU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBUaGUgbWF0ZXJpYWwtdWkgdGhlbWUgYXBwbGllZCB0byB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBkaXNhYmxlZFN0eWxlOiB7fSxcbiAgZXJyb3I6IGZhbHNlLFxuICBlcnJvclN0eWxlOiB7fSxcbiAgZm9jdXM6IGZhbHNlLFxuICBmb2N1c1N0eWxlOiB7fSxcbiAgc3R5bGU6IHt9XG59O1xuXG52YXIgVGV4dEZpZWxkVW5kZXJsaW5lID0gZnVuY3Rpb24gVGV4dEZpZWxkVW5kZXJsaW5lKHByb3BzKSB7XG4gIHZhciBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgZGlzYWJsZWRTdHlsZSA9IHByb3BzLmRpc2FibGVkU3R5bGUsXG4gICAgICBlcnJvciA9IHByb3BzLmVycm9yLFxuICAgICAgZXJyb3JTdHlsZSA9IHByb3BzLmVycm9yU3R5bGUsXG4gICAgICBmb2N1cyA9IHByb3BzLmZvY3VzLFxuICAgICAgZm9jdXNTdHlsZSA9IHByb3BzLmZvY3VzU3R5bGUsXG4gICAgICBtdWlUaGVtZSA9IHByb3BzLm11aVRoZW1lLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZTtcbiAgdmFyIGVycm9yU3R5bGVDb2xvciA9IGVycm9yU3R5bGUuY29sb3I7XG4gIHZhciBwcmVwYXJlU3R5bGVzID0gbXVpVGhlbWUucHJlcGFyZVN0eWxlcyxcbiAgICAgIF9tdWlUaGVtZSR0ZXh0RmllbGQgPSBtdWlUaGVtZS50ZXh0RmllbGQsXG4gICAgICBib3JkZXJDb2xvciA9IF9tdWlUaGVtZSR0ZXh0RmllbGQuYm9yZGVyQ29sb3IsXG4gICAgICBkaXNhYmxlZFRleHRDb2xvciA9IF9tdWlUaGVtZSR0ZXh0RmllbGQuZGlzYWJsZWRUZXh0Q29sb3IsXG4gICAgICBlcnJvckNvbG9yID0gX211aVRoZW1lJHRleHRGaWVsZC5lcnJvckNvbG9yLFxuICAgICAgZm9jdXNDb2xvciA9IF9tdWlUaGVtZSR0ZXh0RmllbGQuZm9jdXNDb2xvcjtcblxuXG4gIHZhciBzdHlsZXMgPSB7XG4gICAgcm9vdDoge1xuICAgICAgYm9yZGVyVG9wOiAnbm9uZScsXG4gICAgICBib3JkZXJMZWZ0OiAnbm9uZScsXG4gICAgICBib3JkZXJSaWdodDogJ25vbmUnLFxuICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgMXB4JyxcbiAgICAgIGJvcmRlckNvbG9yOiBib3JkZXJDb2xvcixcbiAgICAgIGJvdHRvbTogOCxcbiAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIGJvcmRlckJvdHRvbTogJ2RvdHRlZCAycHgnLFxuICAgICAgYm9yZGVyQ29sb3I6IGRpc2FibGVkVGV4dENvbG9yXG4gICAgfSxcbiAgICBmb2N1czoge1xuICAgICAgYm9yZGVyQm90dG9tOiAnc29saWQgMnB4JyxcbiAgICAgIGJvcmRlckNvbG9yOiBmb2N1c0NvbG9yLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDApJyxcbiAgICAgIHRyYW5zaXRpb246IF90cmFuc2l0aW9uczIuZGVmYXVsdC5lYXNlT3V0KClcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBib3JkZXJDb2xvcjogZXJyb3JTdHlsZUNvbG9yID8gZXJyb3JTdHlsZUNvbG9yIDogZXJyb3JDb2xvcixcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgxKSdcbiAgICB9XG4gIH07XG5cbiAgdmFyIHVuZGVybGluZSA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgc3R5bGVzLnJvb3QsIHN0eWxlKTtcbiAgdmFyIGZvY3VzZWRVbmRlcmxpbmUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIHVuZGVybGluZSwgc3R5bGVzLmZvY3VzLCBmb2N1c1N0eWxlKTtcblxuICBpZiAoZGlzYWJsZWQpIHVuZGVybGluZSA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwgdW5kZXJsaW5lLCBzdHlsZXMuZGlzYWJsZWQsIGRpc2FibGVkU3R5bGUpO1xuICBpZiAoZm9jdXMpIGZvY3VzZWRVbmRlcmxpbmUgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe30sIGZvY3VzZWRVbmRlcmxpbmUsIHsgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJyB9KTtcbiAgaWYgKGVycm9yKSBmb2N1c2VkVW5kZXJsaW5lID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHt9LCBmb2N1c2VkVW5kZXJsaW5lLCBzdHlsZXMuZXJyb3IpO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICBudWxsLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdocicsIHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLCBzdHlsZTogcHJlcGFyZVN0eWxlcyh1bmRlcmxpbmUpIH0pLFxuICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdocicsIHsgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLCBzdHlsZTogcHJlcGFyZVN0eWxlcyhmb2N1c2VkVW5kZXJsaW5lKSB9KVxuICApO1xufTtcblxuVGV4dEZpZWxkVW5kZXJsaW5lLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHByb3BUeXBlcyA6IHt9O1xuVGV4dEZpZWxkVW5kZXJsaW5lLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGV4dEZpZWxkVW5kZXJsaW5lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9tYXRlcmlhbC11aS9UZXh0RmllbGQvVGV4dEZpZWxkVW5kZXJsaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA5MTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDMgNCA1IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRDb2x1bW5Qcm9wcyA9IGdldENvbHVtblByb3BzO1xuZXhwb3J0cy5kZWZhdWx0ID0gQ29sO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2NyZWF0ZVByb3BzID0gcmVxdWlyZSgnLi4vY3JlYXRlUHJvcHMnKTtcblxudmFyIF9jcmVhdGVQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVQcm9wcyk7XG5cbnZhciBfY2xhc3NOYW1lcyA9IHJlcXVpcmUoJy4uL2NsYXNzTmFtZXMnKTtcblxudmFyIF9jbGFzc05hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzTmFtZXMpO1xuXG52YXIgX3R5cGVzID0gcmVxdWlyZSgnLi4vdHlwZXMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICB4czogX3R5cGVzLkNvbHVtblNpemVUeXBlLFxuICBzbTogX3R5cGVzLkNvbHVtblNpemVUeXBlLFxuICBtZDogX3R5cGVzLkNvbHVtblNpemVUeXBlLFxuICBsZzogX3R5cGVzLkNvbHVtblNpemVUeXBlLFxuICB4c09mZnNldDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIHNtT2Zmc2V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgbWRPZmZzZXQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuICBsZ09mZnNldDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gIGZpcnN0OiBfdHlwZXMuVmlld3BvcnRTaXplVHlwZSxcbiAgbGFzdDogX3R5cGVzLlZpZXdwb3J0U2l6ZVR5cGUsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHRhZ05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlXG59O1xuXG52YXIgY2xhc3NNYXAgPSB7XG4gIHhzOiAnY29sLXhzJyxcbiAgc206ICdjb2wtc20nLFxuICBtZDogJ2NvbC1tZCcsXG4gIGxnOiAnY29sLWxnJyxcbiAgeHNPZmZzZXQ6ICdjb2wteHMtb2Zmc2V0JyxcbiAgc21PZmZzZXQ6ICdjb2wtc20tb2Zmc2V0JyxcbiAgbWRPZmZzZXQ6ICdjb2wtbWQtb2Zmc2V0JyxcbiAgbGdPZmZzZXQ6ICdjb2wtbGctb2Zmc2V0J1xufTtcblxuZnVuY3Rpb24gaXNJbnRlZ2VyKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbHVlKSAmJiBNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldENvbENsYXNzTmFtZXMocHJvcHMpIHtcbiAgdmFyIGV4dHJhQ2xhc3NlcyA9IFtdO1xuXG4gIGlmIChwcm9wcy5jbGFzc05hbWUpIHtcbiAgICBleHRyYUNsYXNzZXMucHVzaChwcm9wcy5jbGFzc05hbWUpO1xuICB9XG5cbiAgaWYgKHByb3BzLmZpcnN0KSB7XG4gICAgZXh0cmFDbGFzc2VzLnB1c2goKDAsIF9jbGFzc05hbWVzMi5kZWZhdWx0KSgnZmlyc3QtJyArIHByb3BzLmZpcnN0KSk7XG4gIH1cblxuICBpZiAocHJvcHMubGFzdCkge1xuICAgIGV4dHJhQ2xhc3Nlcy5wdXNoKCgwLCBfY2xhc3NOYW1lczIuZGVmYXVsdCkoJ2xhc3QtJyArIHByb3BzLmxhc3QpKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3Qua2V5cyhwcm9wcykuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gY2xhc3NNYXBba2V5XTtcbiAgfSkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gKDAsIF9jbGFzc05hbWVzMi5kZWZhdWx0KShpc0ludGVnZXIocHJvcHNba2V5XSkgPyBjbGFzc01hcFtrZXldICsgJy0nICsgcHJvcHNba2V5XSA6IGNsYXNzTWFwW2tleV0pO1xuICB9KS5jb25jYXQoZXh0cmFDbGFzc2VzKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29sdW1uUHJvcHMocHJvcHMpIHtcbiAgcmV0dXJuICgwLCBfY3JlYXRlUHJvcHMyLmRlZmF1bHQpKHByb3BUeXBlcywgcHJvcHMsIGdldENvbENsYXNzTmFtZXMocHJvcHMpKTtcbn1cblxuZnVuY3Rpb24gQ29sKHByb3BzKSB7XG4gIHZhciB0YWdOYW1lID0gcHJvcHMudGFnTmFtZSxcbiAgICAgIGNvbHVtblByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ3RhZ05hbWUnXSk7XG5cbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHRhZ05hbWUgfHwgJ2RpdicsIGdldENvbHVtblByb3BzKGNvbHVtblByb3BzKSk7XG59XG5cbkNvbC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWZsZXhib3gtZ3JpZC9saWIvY29tcG9uZW50cy9Db2wuanNcbi8vIG1vZHVsZSBpZCA9IDkxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAzIDQiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBHcmlkO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG52YXIgX2NyZWF0ZVByb3BzID0gcmVxdWlyZSgnLi4vY3JlYXRlUHJvcHMnKTtcblxudmFyIF9jcmVhdGVQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVQcm9wcyk7XG5cbnZhciBfY2xhc3NOYW1lcyA9IHJlcXVpcmUoJy4uL2NsYXNzTmFtZXMnKTtcblxudmFyIF9jbGFzc05hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzTmFtZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJvcFR5cGVzID0ge1xuICBmbHVpZDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICB0YWdOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZVxufTtcblxuZnVuY3Rpb24gR3JpZChwcm9wcykge1xuICB2YXIgY29udGFpbmVyQ2xhc3MgPSAoMCwgX2NsYXNzTmFtZXMyLmRlZmF1bHQpKHByb3BzLmZsdWlkID8gJ2NvbnRhaW5lci1mbHVpZCcgOiAnY29udGFpbmVyJyk7XG4gIHZhciBjbGFzc05hbWVzID0gW3Byb3BzLmNsYXNzTmFtZSwgY29udGFpbmVyQ2xhc3NdO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChwcm9wcy50YWdOYW1lIHx8ICdkaXYnLCAoMCwgX2NyZWF0ZVByb3BzMi5kZWZhdWx0KShwcm9wVHlwZXMsIHByb3BzLCBjbGFzc05hbWVzKSk7XG59XG5cbkdyaWQucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1mbGV4Ym94LWdyaWQvbGliL2NvbXBvbmVudHMvR3JpZC5qc1xuLy8gbW9kdWxlIGlkID0gOTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDMgNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0Um93UHJvcHMgPSBnZXRSb3dQcm9wcztcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdztcblxudmFyIF9jbGFzc05hbWVzID0gcmVxdWlyZSgnLi4vY2xhc3NOYW1lcycpO1xuXG52YXIgX2NsYXNzTmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NOYW1lcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfY3JlYXRlUHJvcHMgPSByZXF1aXJlKCcuLi9jcmVhdGVQcm9wcycpO1xuXG52YXIgX2NyZWF0ZVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVByb3BzKTtcblxudmFyIF90eXBlcyA9IHJlcXVpcmUoJy4uL3R5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciByb3dLZXlzID0gWydzdGFydCcsICdjZW50ZXInLCAnZW5kJywgJ3RvcCcsICdtaWRkbGUnLCAnYm90dG9tJywgJ2Fyb3VuZCcsICdiZXR3ZWVuJ107XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIHJldmVyc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgc3RhcnQ6IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICBjZW50ZXI6IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICBlbmQ6IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICB0b3A6IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICBtaWRkbGU6IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICBib3R0b206IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICBhcm91bmQ6IF90eXBlcy5WaWV3cG9ydFNpemVUeXBlLFxuICBiZXR3ZWVuOiBfdHlwZXMuVmlld3BvcnRTaXplVHlwZSxcbiAgY2xhc3NOYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdGFnTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGVcbn07XG5cbmZ1bmN0aW9uIGdldFJvd0NsYXNzTmFtZXMocHJvcHMpIHtcbiAgdmFyIG1vZGlmaWNhdG9ycyA9IFtwcm9wcy5jbGFzc05hbWUsICgwLCBfY2xhc3NOYW1lczIuZGVmYXVsdCkoJ3JvdycpXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd0tleXMubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIga2V5ID0gcm93S2V5c1tpXTtcbiAgICB2YXIgdmFsdWUgPSBwcm9wc1trZXldO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbW9kaWZpY2F0b3JzLnB1c2goKDAsIF9jbGFzc05hbWVzMi5kZWZhdWx0KShrZXkgKyAnLScgKyB2YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9wcy5yZXZlcnNlKSB7XG4gICAgbW9kaWZpY2F0b3JzLnB1c2goKDAsIF9jbGFzc05hbWVzMi5kZWZhdWx0KSgncmV2ZXJzZScpKTtcbiAgfVxuXG4gIHJldHVybiBtb2RpZmljYXRvcnM7XG59XG5cbmZ1bmN0aW9uIGdldFJvd1Byb3BzKHByb3BzKSB7XG4gIHJldHVybiAoMCwgX2NyZWF0ZVByb3BzMi5kZWZhdWx0KShwcm9wVHlwZXMsIHByb3BzLCBnZXRSb3dDbGFzc05hbWVzKHByb3BzKSk7XG59XG5cbmZ1bmN0aW9uIFJvdyhwcm9wcykge1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocHJvcHMudGFnTmFtZSB8fCAnZGl2JywgZ2V0Um93UHJvcHMocHJvcHMpKTtcbn1cblxuUm93LnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtZmxleGJveC1ncmlkL2xpYi9jb21wb25lbnRzL1Jvdy5qc1xuLy8gbW9kdWxlIGlkID0gOTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDMgNCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmxleGJveGdyaWQuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZsZXhib3hncmlkLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2ZsZXhib3hncmlkLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZsZXhib3hncmlkL2Rpc3QvZmxleGJveGdyaWQuY3NzXG4vLyBtb2R1bGUgaWQgPSA5MTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMyA0IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX0ZsYXRCdXR0b24gPSByZXF1aXJlKCcuL0ZsYXRCdXR0b24nKTtcblxudmFyIF9GbGF0QnV0dG9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0ZsYXRCdXR0b24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfRmxhdEJ1dHRvbjIuZGVmYXVsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvRmxhdEJ1dHRvbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnKTtcblxudmFyIF9jcmVhdGVDbGFzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDbGFzczIpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yKTtcblxudmFyIF9pbmhlcml0czIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnKTtcblxudmFyIF9pbmhlcml0czMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmhlcml0czIpO1xuXG52YXIgX3NpbXBsZUFzc2lnbiA9IHJlcXVpcmUoJ3NpbXBsZS1hc3NpZ24nKTtcblxudmFyIF9zaW1wbGVBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2ltcGxlQXNzaWduKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF90cmFuc2l0aW9ucyA9IHJlcXVpcmUoJy4uL3N0eWxlcy90cmFuc2l0aW9ucycpO1xuXG52YXIgX3RyYW5zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb25zKTtcblxudmFyIF9jb2xvck1hbmlwdWxhdG9yID0gcmVxdWlyZSgnLi4vdXRpbHMvY29sb3JNYW5pcHVsYXRvcicpO1xuXG52YXIgX0VuaGFuY2VkQnV0dG9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvRW5oYW5jZWRCdXR0b24nKTtcblxudmFyIF9FbmhhbmNlZEJ1dHRvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FbmhhbmNlZEJ1dHRvbik7XG5cbnZhciBfRmxhdEJ1dHRvbkxhYmVsID0gcmVxdWlyZSgnLi9GbGF0QnV0dG9uTGFiZWwnKTtcblxudmFyIF9GbGF0QnV0dG9uTGFiZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmxhdEJ1dHRvbkxhYmVsKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdmFsaWRhdGVMYWJlbChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXByb3BzLmNoaWxkcmVuICYmIHByb3BzLmxhYmVsICE9PSAwICYmICFwcm9wcy5sYWJlbCAmJiAhcHJvcHMuaWNvbikge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignUmVxdWlyZWQgcHJvcCBsYWJlbCBvciBjaGlsZHJlbiBvciBpY29uIHdhcyBub3Qgc3BlY2lmaWVkIGluICcgKyBjb21wb25lbnROYW1lICsgJy4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIEZsYXRCdXR0b24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMy5kZWZhdWx0KShGbGF0QnV0dG9uLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBGbGF0QnV0dG9uKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIEZsYXRCdXR0b24pO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gRmxhdEJ1dHRvbi5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoRmxhdEJ1dHRvbikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgaG92ZXJlZDogZmFsc2UsXG4gICAgICBpc0tleWJvYXJkRm9jdXNlZDogZmFsc2UsXG4gICAgICB0b3VjaDogZmFsc2VcbiAgICB9LCBfdGhpcy5oYW5kbGVLZXlib2FyZEZvY3VzID0gZnVuY3Rpb24gKGV2ZW50LCBpc0tleWJvYXJkRm9jdXNlZCkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBpc0tleWJvYXJkRm9jdXNlZDogaXNLZXlib2FyZEZvY3VzZWQgfSk7XG4gICAgICBfdGhpcy5wcm9wcy5vbktleWJvYXJkRm9jdXMoZXZlbnQsIGlzS2V5Ym9hcmRGb2N1c2VkKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZUVudGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAvLyBDYW5jZWwgaG92ZXIgc3R5bGVzIGZvciB0b3VjaCBkZXZpY2VzXG4gICAgICBpZiAoIV90aGlzLnN0YXRlLnRvdWNoKSBfdGhpcy5zZXRTdGF0ZSh7IGhvdmVyZWQ6IHRydWUgfSk7XG4gICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlRW50ZXIoZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZU1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgaG92ZXJlZDogZmFsc2UgfSk7XG4gICAgICBfdGhpcy5wcm9wcy5vbk1vdXNlTGVhdmUoZXZlbnQpO1xuICAgIH0sIF90aGlzLmhhbmRsZVRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHsgdG91Y2g6IHRydWUgfSk7XG4gICAgICBfdGhpcy5wcm9wcy5vblRvdWNoU3RhcnQoZXZlbnQpO1xuICAgIH0sIF90ZW1wKSwgKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMy5kZWZhdWx0KShfdGhpcywgX3JldCk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShGbGF0QnV0dG9uLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKG5leHRQcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBob3ZlcmVkOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBfcHJvcHMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkLFxuICAgICAgICAgIGZ1bGxXaWR0aCA9IF9wcm9wcy5mdWxsV2lkdGgsXG4gICAgICAgICAgaG92ZXJDb2xvciA9IF9wcm9wcy5ob3ZlckNvbG9yLFxuICAgICAgICAgIGljb24gPSBfcHJvcHMuaWNvbixcbiAgICAgICAgICBsYWJlbCA9IF9wcm9wcy5sYWJlbCxcbiAgICAgICAgICBsYWJlbFN0eWxlID0gX3Byb3BzLmxhYmVsU3R5bGUsXG4gICAgICAgICAgbGFiZWxQb3NpdGlvbiA9IF9wcm9wcy5sYWJlbFBvc2l0aW9uLFxuICAgICAgICAgIHByaW1hcnkgPSBfcHJvcHMucHJpbWFyeSxcbiAgICAgICAgICByaXBwbGVDb2xvciA9IF9wcm9wcy5yaXBwbGVDb2xvcixcbiAgICAgICAgICBzZWNvbmRhcnkgPSBfcHJvcHMuc2Vjb25kYXJ5LFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgIG90aGVyID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMuZGVmYXVsdCkoX3Byb3BzLCBbJ2JhY2tncm91bmRDb2xvcicsICdjaGlsZHJlbicsICdkaXNhYmxlZCcsICdmdWxsV2lkdGgnLCAnaG92ZXJDb2xvcicsICdpY29uJywgJ2xhYmVsJywgJ2xhYmVsU3R5bGUnLCAnbGFiZWxQb3NpdGlvbicsICdwcmltYXJ5JywgJ3JpcHBsZUNvbG9yJywgJ3NlY29uZGFyeScsICdzdHlsZSddKTtcbiAgICAgIHZhciBfY29udGV4dCRtdWlUaGVtZSA9IHRoaXMuY29udGV4dC5tdWlUaGVtZSxcbiAgICAgICAgICBib3JkZXJSYWRpdXMgPSBfY29udGV4dCRtdWlUaGVtZS5ib3JkZXJSYWRpdXMsXG4gICAgICAgICAgX2NvbnRleHQkbXVpVGhlbWUkYnV0ID0gX2NvbnRleHQkbXVpVGhlbWUuYnV0dG9uLFxuICAgICAgICAgIGJ1dHRvbkhlaWdodCA9IF9jb250ZXh0JG11aVRoZW1lJGJ1dC5oZWlnaHQsXG4gICAgICAgICAgYnV0dG9uTWluV2lkdGggPSBfY29udGV4dCRtdWlUaGVtZSRidXQubWluV2lkdGgsXG4gICAgICAgICAgYnV0dG9uVGV4dFRyYW5zZm9ybSA9IF9jb250ZXh0JG11aVRoZW1lJGJ1dC50ZXh0VHJhbnNmb3JtLFxuICAgICAgICAgIF9jb250ZXh0JG11aVRoZW1lJGZsYSA9IF9jb250ZXh0JG11aVRoZW1lLmZsYXRCdXR0b24sXG4gICAgICAgICAgYnV0dG9uRmlsdGVyQ29sb3IgPSBfY29udGV4dCRtdWlUaGVtZSRmbGEuYnV0dG9uRmlsdGVyQ29sb3IsXG4gICAgICAgICAgYnV0dG9uQ29sb3IgPSBfY29udGV4dCRtdWlUaGVtZSRmbGEuY29sb3IsXG4gICAgICAgICAgZGlzYWJsZWRUZXh0Q29sb3IgPSBfY29udGV4dCRtdWlUaGVtZSRmbGEuZGlzYWJsZWRUZXh0Q29sb3IsXG4gICAgICAgICAgZm9udFNpemUgPSBfY29udGV4dCRtdWlUaGVtZSRmbGEuZm9udFNpemUsXG4gICAgICAgICAgZm9udFdlaWdodCA9IF9jb250ZXh0JG11aVRoZW1lJGZsYS5mb250V2VpZ2h0LFxuICAgICAgICAgIHByaW1hcnlUZXh0Q29sb3IgPSBfY29udGV4dCRtdWlUaGVtZSRmbGEucHJpbWFyeVRleHRDb2xvcixcbiAgICAgICAgICBzZWNvbmRhcnlUZXh0Q29sb3IgPSBfY29udGV4dCRtdWlUaGVtZSRmbGEuc2Vjb25kYXJ5VGV4dENvbG9yLFxuICAgICAgICAgIHRleHRDb2xvciA9IF9jb250ZXh0JG11aVRoZW1lJGZsYS50ZXh0Q29sb3IsXG4gICAgICAgICAgX2NvbnRleHQkbXVpVGhlbWUkZmxhMiA9IF9jb250ZXh0JG11aVRoZW1lJGZsYS50ZXh0VHJhbnNmb3JtLFxuICAgICAgICAgIHRleHRUcmFuc2Zvcm0gPSBfY29udGV4dCRtdWlUaGVtZSRmbGEyID09PSB1bmRlZmluZWQgPyBidXR0b25UZXh0VHJhbnNmb3JtIHx8ICd1cHBlcmNhc2UnIDogX2NvbnRleHQkbXVpVGhlbWUkZmxhMjtcblxuICAgICAgdmFyIGRlZmF1bHRUZXh0Q29sb3IgPSBkaXNhYmxlZCA/IGRpc2FibGVkVGV4dENvbG9yIDogcHJpbWFyeSA/IHByaW1hcnlUZXh0Q29sb3IgOiBzZWNvbmRhcnkgPyBzZWNvbmRhcnlUZXh0Q29sb3IgOiB0ZXh0Q29sb3I7XG5cbiAgICAgIHZhciBkZWZhdWx0SG92ZXJDb2xvciA9ICgwLCBfY29sb3JNYW5pcHVsYXRvci5mYWRlKShidXR0b25GaWx0ZXJDb2xvciwgMC4yKTtcbiAgICAgIHZhciBkZWZhdWx0UmlwcGxlQ29sb3IgPSBidXR0b25GaWx0ZXJDb2xvcjtcbiAgICAgIHZhciBidXR0b25Ib3ZlckNvbG9yID0gaG92ZXJDb2xvciB8fCBkZWZhdWx0SG92ZXJDb2xvcjtcbiAgICAgIHZhciBidXR0b25SaXBwbGVDb2xvciA9IHJpcHBsZUNvbG9yIHx8IGRlZmF1bHRSaXBwbGVDb2xvcjtcbiAgICAgIHZhciBidXR0b25CYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3IgfHwgYnV0dG9uQ29sb3I7XG4gICAgICB2YXIgaG92ZXJlZCA9ICh0aGlzLnN0YXRlLmhvdmVyZWQgfHwgdGhpcy5zdGF0ZS5pc0tleWJvYXJkRm9jdXNlZCkgJiYgIWRpc2FibGVkO1xuXG4gICAgICB2YXIgbWVyZ2VkUm9vdFN0eWxlcyA9ICgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KSh7fSwge1xuICAgICAgICBoZWlnaHQ6IGJ1dHRvbkhlaWdodCxcbiAgICAgICAgbGluZUhlaWdodDogYnV0dG9uSGVpZ2h0ICsgJ3B4JyxcbiAgICAgICAgbWluV2lkdGg6IGZ1bGxXaWR0aCA/ICcxMDAlJyA6IGJ1dHRvbk1pbldpZHRoLFxuICAgICAgICBjb2xvcjogZGVmYXVsdFRleHRDb2xvcixcbiAgICAgICAgdHJhbnNpdGlvbjogX3RyYW5zaXRpb25zMi5kZWZhdWx0LmVhc2VPdXQoKSxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXMsXG4gICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGhvdmVyZWQgPyBidXR0b25Ib3ZlckNvbG9yIDogYnV0dG9uQmFja2dyb3VuZENvbG9yLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgICAgIH0sIHN0eWxlKTtcblxuICAgICAgdmFyIGljb25DbG9uZWQgPSB2b2lkIDA7XG4gICAgICB2YXIgbGFiZWxTdHlsZUljb24gPSB7fTtcblxuICAgICAgaWYgKGljb24pIHtcbiAgICAgICAgdmFyIGljb25TdHlsZXMgPSAoMCwgX3NpbXBsZUFzc2lnbjIuZGVmYXVsdCkoe1xuICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgICAgIG1hcmdpbkxlZnQ6IGxhYmVsICYmIGxhYmVsUG9zaXRpb24gIT09ICdiZWZvcmUnID8gMTIgOiAwLFxuICAgICAgICAgIG1hcmdpblJpZ2h0OiBsYWJlbCAmJiBsYWJlbFBvc2l0aW9uID09PSAnYmVmb3JlJyA/IDEyIDogMFxuICAgICAgICB9LCBpY29uLnByb3BzLnN0eWxlKTtcbiAgICAgICAgaWNvbkNsb25lZCA9IF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoaWNvbiwge1xuICAgICAgICAgIGNvbG9yOiBpY29uLnByb3BzLmNvbG9yIHx8IG1lcmdlZFJvb3RTdHlsZXMuY29sb3IsXG4gICAgICAgICAgc3R5bGU6IGljb25TdHlsZXMsXG4gICAgICAgICAga2V5OiAnaWNvbkNsb25lZCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnKSB7XG4gICAgICAgICAgbGFiZWxTdHlsZUljb24ucGFkZGluZ1JpZ2h0ID0gODtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYWJlbFN0eWxlSWNvbi5wYWRkaW5nTGVmdCA9IDg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIG1lcmdlZExhYmVsU3R5bGVzID0gKDAsIF9zaW1wbGVBc3NpZ24yLmRlZmF1bHQpKHtcbiAgICAgICAgbGV0dGVyU3BhY2luZzogMCxcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogdGV4dFRyYW5zZm9ybSxcbiAgICAgICAgZm9udFdlaWdodDogZm9udFdlaWdodCxcbiAgICAgICAgZm9udFNpemU6IGZvbnRTaXplXG4gICAgICB9LCBsYWJlbFN0eWxlSWNvbiwgbGFiZWxTdHlsZSk7XG5cbiAgICAgIHZhciBsYWJlbEVsZW1lbnQgPSBsYWJlbCA/IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9GbGF0QnV0dG9uTGFiZWwyLmRlZmF1bHQsIHsga2V5OiAnbGFiZWxFbGVtZW50JywgbGFiZWw6IGxhYmVsLCBzdHlsZTogbWVyZ2VkTGFiZWxTdHlsZXMgfSkgOiB1bmRlZmluZWQ7XG5cbiAgICAgIC8vIFBsYWNlIGxhYmVsIGJlZm9yZSBvciBhZnRlciBjaGlsZHJlbi5cbiAgICAgIHZhciBlbmhhbmNlZEJ1dHRvbkNoaWxkcmVuID0gbGFiZWxQb3NpdGlvbiA9PT0gJ2JlZm9yZScgPyBbbGFiZWxFbGVtZW50LCBpY29uQ2xvbmVkLCBjaGlsZHJlbl0gOiBbY2hpbGRyZW4sIGljb25DbG9uZWQsIGxhYmVsRWxlbWVudF07XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX0VuaGFuY2VkQnV0dG9uMi5kZWZhdWx0LFxuICAgICAgICAoMCwgX2V4dGVuZHMzLmRlZmF1bHQpKHt9LCBvdGhlciwge1xuICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgICBmb2N1c1JpcHBsZUNvbG9yOiBidXR0b25SaXBwbGVDb2xvcixcbiAgICAgICAgICBmb2N1c1JpcHBsZU9wYWNpdHk6IDAuMyxcbiAgICAgICAgICBvbktleWJvYXJkRm9jdXM6IHRoaXMuaGFuZGxlS2V5Ym9hcmRGb2N1cyxcbiAgICAgICAgICBvbk1vdXNlTGVhdmU6IHRoaXMuaGFuZGxlTW91c2VMZWF2ZSxcbiAgICAgICAgICBvbk1vdXNlRW50ZXI6IHRoaXMuaGFuZGxlTW91c2VFbnRlcixcbiAgICAgICAgICBvblRvdWNoU3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcbiAgICAgICAgICBzdHlsZTogbWVyZ2VkUm9vdFN0eWxlcyxcbiAgICAgICAgICB0b3VjaFJpcHBsZUNvbG9yOiBidXR0b25SaXBwbGVDb2xvcixcbiAgICAgICAgICB0b3VjaFJpcHBsZU9wYWNpdHk6IDAuM1xuICAgICAgICB9KSxcbiAgICAgICAgZW5oYW5jZWRCdXR0b25DaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEZsYXRCdXR0b247XG59KF9yZWFjdC5Db21wb25lbnQpO1xuXG5GbGF0QnV0dG9uLm11aU5hbWUgPSAnRmxhdEJ1dHRvbic7XG5GbGF0QnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBmdWxsV2lkdGg6IGZhbHNlLFxuICBsYWJlbFN0eWxlOiB7fSxcbiAgbGFiZWxQb3NpdGlvbjogJ2FmdGVyJyxcbiAgb25LZXlib2FyZEZvY3VzOiBmdW5jdGlvbiBvbktleWJvYXJkRm9jdXMoKSB7fSxcbiAgb25Nb3VzZUVudGVyOiBmdW5jdGlvbiBvbk1vdXNlRW50ZXIoKSB7fSxcbiAgb25Nb3VzZUxlYXZlOiBmdW5jdGlvbiBvbk1vdXNlTGVhdmUoKSB7fSxcbiAgb25Ub3VjaFN0YXJ0OiBmdW5jdGlvbiBvblRvdWNoU3RhcnQoKSB7fSxcbiAgcHJpbWFyeTogZmFsc2UsXG4gIHNlY29uZGFyeTogZmFsc2Vcbn07XG5GbGF0QnV0dG9uLmNvbnRleHRUeXBlcyA9IHtcbiAgbXVpVGhlbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5GbGF0QnV0dG9uLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgLyoqXG4gICAqIENvbG9yIG9mIGJ1dHRvbiB3aGVuIG1vdXNlIGlzIG5vdCBob3ZlcmluZyBvdmVyIGl0LlxuICAgKi9cbiAgYmFja2dyb3VuZENvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFRoaXMgaXMgd2hhdCB3aWxsIGJlIGRpc3BsYXllZCBpbnNpZGUgdGhlIGJ1dHRvbi5cbiAgICogSWYgYSBsYWJlbCBpcyBzcGVjaWZpZWQsIHRoZSB0ZXh0IHdpdGhpbiB0aGUgbGFiZWwgcHJvcCB3aWxsXG4gICAqIGJlIGRpc3BsYXllZC4gT3RoZXJ3aXNlLCB0aGUgY29tcG9uZW50IHdpbGwgZXhwZWN0IGNoaWxkcmVuXG4gICAqIHdoaWNoIHdpbGwgdGhlbiBiZSBkaXNwbGF5ZWQuIChJbiBvdXIgZXhhbXBsZSxcbiAgICogd2UgYXJlIG5lc3RpbmcgYW4gYDxpbnB1dCB0eXBlPVwiZmlsZVwiIC8+YCBhbmQgYSBgc3BhbmBcbiAgICogdGhhdCBhY3RzIGFzIG91ciBsYWJlbCB0byBiZSBkaXNwbGF5ZWQuKSBUaGlzIG9ubHlcbiAgICogYXBwbGllcyB0byBmbGF0IGFuZCByYWlzZWQgYnV0dG9ucy5cbiAgICovXG4gIGNoaWxkcmVuOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIC8qKlxuICAgKiBUaGUgQ1NTIGNsYXNzIG5hbWUgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgZWxlbWVudCB0byB1c2UgYXMgdGhlIGNvbnRhaW5lciBmb3IgdGhlIEZsYXRCdXR0b24uIEVpdGhlciBhIHN0cmluZyB0b1xuICAgKiB1c2UgYSBET00gZWxlbWVudCBvciBhIFJlYWN0RWxlbWVudC4gVGhpcyBpcyB1c2VmdWwgZm9yIHdyYXBwaW5nIHRoZVxuICAgKiBGbGF0QnV0dG9uIGluIGEgY3VzdG9tIExpbmsgY29tcG9uZW50LiBJZiBhIFJlYWN0RWxlbWVudCBpcyBnaXZlbiwgZW5zdXJlXG4gICAqIHRoYXQgaXQgcGFzc2VzIGFsbCBvZiBpdHMgZ2l2ZW4gcHJvcHMgdGhyb3VnaCB0byB0aGUgdW5kZXJseWluZyBET01cbiAgICogZWxlbWVudCBhbmQgcmVuZGVycyBpdHMgY2hpbGRyZW4gcHJvcCBmb3IgcHJvcGVyIGludGVncmF0aW9uLlxuICAgKi9cbiAgY29udGFpbmVyRWxlbWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnRdKSxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBlbGVtZW50J3MgcmlwcGxlIGVmZmVjdCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZVRvdWNoUmlwcGxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBEaXNhYmxlcyB0aGUgYnV0dG9uIGlmIHNldCB0byB0cnVlLlxuICAgKi9cbiAgZGlzYWJsZWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIElmIHRydWUsIHRoZSBidXR0b24gd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgLyoqXG4gICAqIENvbG9yIG9mIGJ1dHRvbiB3aGVuIG1vdXNlIGhvdmVycyBvdmVyLlxuICAgKi9cbiAgaG92ZXJDb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIC8qKlxuICAgKiBUaGUgVVJMIHRvIGxpbmsgdG8gd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAqL1xuICBocmVmOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIFVzZSB0aGlzIHByb3BlcnR5IHRvIGRpc3BsYXkgYW4gaWNvbi5cbiAgICovXG4gIGljb246IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgLyoqXG4gICAqIExhYmVsIGZvciB0aGUgYnV0dG9uLlxuICAgKi9cbiAgbGFiZWw6IHZhbGlkYXRlTGFiZWwsXG4gIC8qKlxuICAgKiBQbGFjZSBsYWJlbCBiZWZvcmUgb3IgYWZ0ZXIgdGhlIHBhc3NlZCBjaGlsZHJlbi5cbiAgICovXG4gIGxhYmVsUG9zaXRpb246IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoWydiZWZvcmUnLCAnYWZ0ZXInXSksXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgaW5saW5lLXN0eWxlcyBvZiB0aGUgYnV0dG9uJ3MgbGFiZWwgZWxlbWVudC5cbiAgICovXG4gIGxhYmVsU3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBmb2N1c2VkIG9yIGJsdXJyZWQgYnkgdGhlIGtleWJvYXJkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgYGZvY3VzYCBvciBgYmx1cmAgZXZlbnQgdGFyZ2V0aW5nIHRoZSBlbGVtZW50LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzS2V5Ym9hcmRGb2N1c2VkIEluZGljYXRlcyB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIGZvY3VzZWQuXG4gICAqL1xuICBvbktleWJvYXJkRm9jdXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqIEBpZ25vcmUgKi9cbiAgb25Nb3VzZUVudGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIC8qKiBAaWdub3JlICovXG4gIG9uTW91c2VMZWF2ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAvKiogQGlnbm9yZSAqL1xuICBvblRvdWNoU3RhcnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGZpcmVkIHdoZW4gdGhlIGJ1dHRvbiBpcyB0b3VjaC10YXBwZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUb3VjaFRhcCBldmVudCB0YXJnZXRpbmcgdGhlIGJ1dHRvbi5cbiAgICovXG4gIG9uVG91Y2hUYXA6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgLyoqXG4gICAqIElmIHRydWUsIGNvbG9ycyBidXR0b24gYWNjb3JkaW5nIHRvXG4gICAqIHByaW1hcnlUZXh0Q29sb3IgZnJvbSB0aGUgVGhlbWUuXG4gICAqL1xuICBwcmltYXJ5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIC8qKlxuICAgKiBDb2xvciBmb3IgdGhlIHJpcHBsZSBhZnRlciBidXR0b24gaXMgY2xpY2tlZC5cbiAgICovXG4gIHJpcHBsZUNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgLyoqXG4gICAqIElmIHRydWUsIGNvbG9ycyBidXR0b24gYWNjb3JkaW5nIHRvIHNlY29uZGFyeVRleHRDb2xvciBmcm9tIHRoZSB0aGVtZS5cbiAgICogVGhlIHByaW1hcnkgcHJvcCBoYXMgcHJlY2VuZGVudCBpZiBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIHNlY29uZGFyeTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGlubGluZS1zdHlsZXMgb2YgdGhlIHJvb3QgZWxlbWVudC5cbiAgICovXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufSA6IHt9O1xuZXhwb3J0cy5kZWZhdWx0ID0gRmxhdEJ1dHRvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbWF0ZXJpYWwtdWkvRmxhdEJ1dHRvbi9GbGF0QnV0dG9uLmpzXG4vLyBtb2R1bGUgaWQgPSA5NDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgMyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZicpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc0NhbGxDaGVjazIpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcycpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNsYXNzMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfc2ltcGxlQXNzaWduID0gcmVxdWlyZSgnc2ltcGxlLWFzc2lnbicpO1xuXG52YXIgX3NpbXBsZUFzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaW1wbGVBc3NpZ24pO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZXMocHJvcHMsIGNvbnRleHQpIHtcbiAgdmFyIGJhc2VUaGVtZSA9IGNvbnRleHQubXVpVGhlbWUuYmFzZVRoZW1lO1xuXG5cbiAgcmV0dXJuIHtcbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHBhZGRpbmdMZWZ0OiBiYXNlVGhlbWUuc3BhY2luZy5kZXNrdG9wR3V0dGVyTGVzcyxcbiAgICAgIHBhZGRpbmdSaWdodDogYmFzZVRoZW1lLnNwYWNpbmcuZGVza3RvcEd1dHRlckxlc3MsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xuICAgIH1cbiAgfTtcbn1cblxudmFyIEZsYXRCdXR0b25MYWJlbCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKEZsYXRCdXR0b25MYWJlbCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRmxhdEJ1dHRvbkxhYmVsKCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIEZsYXRCdXR0b25MYWJlbCk7XG4gICAgcmV0dXJuICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMuZGVmYXVsdCkodGhpcywgKEZsYXRCdXR0b25MYWJlbC5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoRmxhdEJ1dHRvbkxhYmVsKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMy5kZWZhdWx0KShGbGF0QnV0dG9uTGFiZWwsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbGFiZWwgPSBfcHJvcHMubGFiZWwsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGU7XG4gICAgICB2YXIgcHJlcGFyZVN0eWxlcyA9IHRoaXMuY29udGV4dC5tdWlUaGVtZS5wcmVwYXJlU3R5bGVzO1xuXG4gICAgICB2YXIgc3R5bGVzID0gZ2V0U3R5bGVzKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7IHN0eWxlOiBwcmVwYXJlU3R5bGVzKCgwLCBfc2ltcGxlQXNzaWduMi5kZWZhdWx0KShzdHlsZXMucm9vdCwgc3R5bGUpKSB9LFxuICAgICAgICBsYWJlbFxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEZsYXRCdXR0b25MYWJlbDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkZsYXRCdXR0b25MYWJlbC5jb250ZXh0VHlwZXMgPSB7XG4gIG11aVRoZW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdC5pc1JlcXVpcmVkXG59O1xuRmxhdEJ1dHRvbkxhYmVsLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgbGFiZWw6IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZSxcbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59IDoge307XG5leHBvcnRzLmRlZmF1bHQgPSBGbGF0QnV0dG9uTGFiZWw7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L21hdGVyaWFsLXVpL0ZsYXRCdXR0b24vRmxhdEJ1dHRvbkxhYmVsLmpzXG4vLyBtb2R1bGUgaWQgPSA5NDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgMyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG4vKmltcG9ydCB7Rm9ybUdyb3VwLCBDb250cm9sTGFiZWwsIEZvcm1Db250cm9sLCBIZWxwQmxvY2t9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7Ki9cclxuaW1wb3J0IHtGaWVsZH0gZnJvbSAncmVkdXgtZm9ybSc7XHJcblxyXG5pbXBvcnQge0Zvcm1Db250cm9sV3JhcHBlckNvbnRhaW5lcn0gZnJvbSAnLi9Gb3JtQ29udHJvbFdyYXBwZXJDb250YWluZXInO1xyXG5cclxuXHJcbmNsYXNzIEZpZWxkQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHsgY29udHJvbElkLCBoZWxwLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgey8qPEZvcm1Hcm91cCBjb250cm9sSWQ9e2NvbnRyb2xJZH0+XHJcbiAgICAgICAgICAgICAgICA8Q29udHJvbExhYmVsPntsYWJlbH08L0NvbnRyb2xMYWJlbD4qL31cclxuICAgICAgICAgICAgICAgIDxGaWVsZCBuYW1lPXtjb250cm9sSWR9IGNvbXBvbmVudD17Rm9ybUNvbnRyb2xXcmFwcGVyQ29udGFpbmVyfSB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgICB7LyogICB7aGVscCAmJiA8SGVscEJsb2NrPntoZWxwfTwvSGVscEJsb2NrPn1cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+Ki99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge0ZpZWxkQ29tcG9uZW50fTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JvdXRlcy9BZG1pbi9OdXRyaWVudEZvcm0vRmllbGRDb21wb25lbnQuanMiXSwic291cmNlUm9vdCI6IiJ9