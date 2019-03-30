webpackHotUpdate("static/development/pages/devices.js",{

/***/ "./components/devices/ui/Params.js":
/*!*****************************************!*\
  !*** ./components/devices/ui/Params.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Params_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Params.css */ "./components/devices/ui/Params.css");
/* harmony import */ var _Params_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Params_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../lib/helpers */ "./lib/helpers.js");







// genieacs-gui/app/views/devices/_params.html.erb  counterpart





var TreeNode = antd__WEBPACK_IMPORTED_MODULE_8__["Tree"].TreeNode;
var Text = antd__WEBPACK_IMPORTED_MODULE_8__["Typography"].Text;
var Search = antd__WEBPACK_IMPORTED_MODULE_8__["Input"].Search;
var iconStyle = {
  color: 'rgba(0, 0, 0, 0.65)',
  marginRight: 10
};

var sorter = function sorter(a, b) {
  return a._path > b._path ? 1 : a._path < b._path ? -1 : 0;
};

var highlightText = function highlightText(text, textToHighlight) {
  var s = text.search(new RegExp(textToHighlight, 'i'));
  var e = s + textToHighlight.length;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, s >= 0 ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, text.substring(0, s), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("mark", {
    style: {
      backgroundColor: 'yellow'
    }
  }, text.substring(s, e)), text.substring(e)) : text);
};

var Params =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Params, _Component);

  function Params(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Params);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Params).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentDidMount", function () {
      return _this.processParams(_this.state.params, true);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "processParams", function (params, group) {
      var searchTerm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var p;
      if (group) p = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_11__["groupParams"])(params);else p = {
        children: params
      };

      var tree = _this.treeNodes(p, searchTerm);

      _this.setState({
        tree: tree
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSearch", function (e) {
      var search = function search(v, s) {
        return v._path.search(new RegExp(s, 'i')) >= 0 || v._value && ('' + v._value).search(new RegExp(s, 'i')) >= 0;
      };

      var searchText = e.target.value; // setTimeout is used to delay search and smooth typing

      clearTimeout(_this.typingTimeout);
      _this.typingTimeout = setTimeout(function () {
        var params = _this.state.params.filter(function (v) {
          return search(v, searchText);
        });

        _this.processParams(params, searchText === '', searchText);
      }, 500 / searchText.length);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "treeNodes", function (params, searchTerm) {
      var nodes = params.children.map(function (p) {
        if (p.children) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TreeNode, {
            title: _this.renderNode(p, searchTerm),
            key: p._path,
            selectable: false
          }, _this.treeNodes(p, searchTerm));
        }

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TreeNode, {
          title: _this.renderNode(p, searchTerm),
          key: p._path,
          selectable: false
        });
      });
      return nodes;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderNode", function (p, searchTerm) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          whiteSpace: 'normal',
          borderBottom: '1px solid #e8e8e8',
          padding: 5
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        span: 16
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Text, {
        className: "long-text",
        title: p._path
      }, p._object ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "bars",
        style: iconStyle
      }) : p._writable ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "edit",
        style: iconStyle
      }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "info-circle",
        style: iconStyle
      }), highlightText(p._path, searchTerm))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        span: 6,
        push: 2
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], {
        gutter: 2
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        span: 14
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Text, {
        type: "secondary",
        title: "Last update: ".concat(p._timestamp)
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "clock-circle",
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, iconStyle, {
          color: 'rgba(0, 0, 0, 0.45)'
        })
      }), moment__WEBPACK_IMPORTED_MODULE_9___default()(p._timestamp).fromNow())), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        span: 10,
        pull: 2
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        onClick: function onClick() {
          return _this.handleRefresh(p._path);
        }
      }, "Refresh"), p._object ? p._writable && (p._path.match(/\.[\d]+$/) ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
        type: "vertical"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Delete")) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
        type: "vertical"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Add"))) : p._writable && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
        type: "vertical"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Edit")))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Row"], null, !p._object && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
        span: 16
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Text, {
        className: "long-text",
        type: "secondary",
        style: {
          padding: '0 24px',
          color: '#002f2f'
        }
      }, p._value ? highlightText('' + p._value, searchTerm) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Text, {
        disabled: true
      }, "blank")))));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleRefresh", function (p) {
      console.log('refresh', p);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", null, "Device parameters"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Search, {
        placeholder: "Search...",
        style: {
          margin: '5px 0'
        },
        onChange: _this.handleSearch
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          height: '500px',
          overflowX: 'hidden',
          overflowY: 'auto',
          padding: 0
        }
      }, _this.state.tree && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Tree"], {
        blockNode: true,
        switcherIcon: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
          type: "down"
        }),
        defaultExpandedKeys: ['InternetGatewayDevice', 'Device']
      }, _this.state.tree)));
    });

    _this.typingTimeout = 0;
    _this.state = {
      params: props.defaultParams.sort(sorter)
    };
    return _this;
  }

  return Params;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Params);

/***/ })

})
//# sourceMappingURL=devices.js.3593b26c2430cb8208c0.hot-update.js.map