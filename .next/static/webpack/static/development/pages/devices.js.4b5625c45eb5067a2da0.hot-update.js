webpackHotUpdate("static/development/pages/devices.js",{

/***/ "./components/ui/FilterModal.js":
/*!**************************************!*\
  !*** ./components/ui/FilterModal.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next-server/dynamic */ "./node_modules/next-server/dynamic.js");
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_server_dynamic__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var monquery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! monquery */ "./node_modules/monquery/index.js");
/* harmony import */ var monquery__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(monquery__WEBPACK_IMPORTED_MODULE_15__);
















var TextEditor = next_server_dynamic__WEBPACK_IMPORTED_MODULE_14___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./TextEditor */ "./components/ui/TextEditor.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./TextEditor */ "./components/ui/TextEditor.js")];
    },
    modules: ['./TextEditor']
  }
});
var TabPane = antd__WEBPACK_IMPORTED_MODULE_13__["Tabs"].TabPane;
var mongoQueryRef = 'https://docs.mongodb.com/manual/reference/method/db.collection.find/#query-using-operators';

var FilterModal =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(FilterModal, _Component);

  function FilterModal() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, FilterModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(FilterModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "editor", react__WEBPACK_IMPORTED_MODULE_12___default.a.createRef());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "state", {
      mode: _this.props.defaultFormValue ? 'advanced' : 'simple',
      // form values
      simpleFormValues: new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_5___default.a(),
      advancedFormValue: _this.props.defaultFormValue ? _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default()(JSON.parse(_this.props.defaultFormValue), null, 2) : '{\n  \n}',
      // alerts
      simpleTipsVisible: false,
      invalidJsonAlertVisible: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "componentDidMount", function () {
      var simpleTipsVisible = localStorage.getItem('filtermodal.simpletips');

      if (simpleTipsVisible === null) {
        localStorage.setItem('filtermodal.simpletips', true);
        simpleTipsVisible = 'true';
      }

      _this.setState({
        simpleTipsVisible: simpleTipsVisible === 'true' ? true : false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "handleModeChange", function (mode) {
      if (mode === 'advanced') console.log(_this.editor.current.focus());

      _this.setState({
        mode: mode
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "handleOk", function (e) {
      var query;
      if (_this.state.mode === 'simple') try {
        query = _this.createSimpleFilter();
      } catch (ex) {
        return; // should NEVER happen
      } else try {
        query = _this.createAdvancedFilter();
      } catch (ex) {
        _this.setState({
          invalidJsonAlertVisible: true
        });

        return;
      }

      _this.setState({
        query: query,
        invalidJsonAlertVisible: false
      }, function () {
        return _this.props.onFilterChange(_this.state.query);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "createSimpleFilter", function () {
      var fields = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_3___default()(_this.state.simpleFormValues.entries()).map(function () {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : e,
            _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        var qs = value.map(function (v) {
          var _arr = ['!=', '>=', '<=', '>', '<'];

          for (var _i = 0; _i < _arr.length; _i++) {
            var op = _arr[_i];

            if (v.slice(0, 2).indexOf(op) >= 0) {
              var val = v.replace(op, '');
              val = +val === +val ? "".concat(Number(val)) : "\"".concat(val, "\"");
              return "".concat(key, " ").concat(op, " ").concat(val);
            }
          }

          return "".concat(key, ": \"/").concat(v, "/i\"");
        });
        return "(".concat(qs.join(' OR '), ")");
      });

      return monquery__WEBPACK_IMPORTED_MODULE_15___default()(fields.join(' AND '));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "createAdvancedFilter", function () {
      JSON.parse(_this.state.advancedFormValue); // the query param does not support
      // anything but an obj in root level

      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(query) || !(query instanceof Object)) throw SyntaxError;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "handleSimpleFormChange", function (key, value) {
      _this.setState(function (prevState) {
        simpleFormValues: prevState.simpleFormValues.set(key, value);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "handleAdvancedFormChange", function (advancedFormValue) {
      _this.setState({
        advancedFormValue: advancedFormValue
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "renderFields", function (fields) {
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Row"], {
        gutter: 5,
        style: {
          margin: '0 2px'
        }
      }, _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default()(fields).map(function (field, index) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Col"], {
          span: 12,
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", null, field[0].replace(/_/g, ' ')), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Select"], {
          mode: "tags",
          style: {
            width: '100%',
            margin: '5px 0 10px'
          },
          placeholder: field[0].replace(/_/g, ' '),
          notFoundContent: false,
          allowClear: true,
          onChange: function onChange(e) {
            return _this.handleSimpleFormChange(field[1], e);
          },
          autoFocus: +index ? false : true,
          tabIndex: +index
        }));
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "renderCodeEditor", function () {
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("label", null, 'Input here a JSON structured like the ', react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
        href: mongoQueryRef,
        target: "_blank"
      }, 'MongoDB query format')), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(TextEditor, {
        ref: _this.editor,
        mode: "json",
        theme: "tomorrow",
        value: _this.state.advancedFormValue,
        onChange: _this.handleAdvancedFormChange,
        fontSize: 16,
        height: '300px',
        width: '100%',
        style: {
          margin: '15px 0 10px'
        },
        setOptions: {
          showLineNumbers: false
        }
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Modal"], {
        title: false,
        visible: _this.props.visible,
        closable: false,
        width: '80%',
        style: {
          maxWidth: 800
        },
        okText: "Filter",
        onOk: _this.handleOk,
        onCancel: _this.props.onCancel
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Tabs"], {
        defaultActiveKey: _this.state.mode,
        tabPosition: "left",
        onChange: _this.handleModeChange
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(TabPane, {
        tab: "Simple",
        key: "simple"
      }, _this.state.simpleTipsVisible && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Alert"], {
        closable: true,
        afterClose: function afterClose() {
          return _this.setState({
            simpleTipsVisible: false
          }, function () {
            return localStorage.setItem('filtermodal.simpletips', false);
          });
        },
        message: 'Each field is related by an AND operator, as tokens inside a field are related by an OR. You can input >, >=, <, <= and != to the beginning of each token for different comparison operation.',
        type: "info",
        showIcon: true,
        style: {
          marginBottom: 15
        }
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          maxHeight: 500,
          overflowX: 'hidden',
          overflowY: 'auto'
        }
      }, _this.renderFields(_this.props.fields))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(TabPane, {
        tab: "Advanced",
        key: "advanced"
      }, _this.state.invalidJsonAlertVisible && react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_13__["Alert"], {
        message: 'You must input a valid JSON object at root level.',
        type: "error",
        showIcon: true,
        style: {
          marginBottom: 15
        }
      }), _this.renderCodeEditor())));
    });

    return _this;
  }

  return FilterModal;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FilterModal);

/***/ })

})
//# sourceMappingURL=devices.js.4b5625c45eb5067a2da0.hot-update.js.map