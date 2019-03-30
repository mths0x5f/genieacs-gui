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
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../lib/util */ "./lib/util.js");







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
      }), Object(_lib_util__WEBPACK_IMPORTED_MODULE_12__["highlightText"])(p._path, searchTerm))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Col"], {
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
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, "Refresh"), p._object ? p._writable && (p._path.match(/\.[\d]+$/) ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Divider"], {
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
      }, p._value ? Object(_lib_util__WEBPACK_IMPORTED_MODULE_12__["highlightText"])('' + p._value, searchTerm) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Text, {
        disabled: true
      }, "blank")))));
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

/***/ }),

/***/ "./components/devices/ui/Table.js":
/*!****************************************!*\
  !*** ./components/devices/ui/Table.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Table_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Table.css */ "./components/devices/ui/Table.css");
/* harmony import */ var _Table_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_Table_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _LastInformBadge__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./LastInformBadge */ "./components/devices/ui/LastInformBadge.js");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../lib/util */ "./lib/util.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../lib/helpers */ "./lib/helpers.js");




















var Text = antd__WEBPACK_IMPORTED_MODULE_14__["Typography"].Text;

var DevicesTable =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_11__["default"])(DevicesTable, _Component);

  function DevicesTable(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, DevicesTable);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__["default"])(DevicesTable).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "componentDidMount", function () {
      _this.fetchData(_this.props.query, _this.state.pagination, _this.state.sort);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "componentDidUpdate", function (prevProps) {
      if (_this.props.query !== prevProps.query) {
        _this.setState({
          sort: _this.props.defaultSort ? Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])({}, _this.props.defaultSort.replace('-', ''), _this.props.defaultSort[0] === '-' ? -1 : 1) : null,
          pagination: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__["default"])({}, _this.state.pagination, {
            current: _this.props.defaultStartPage ? +_this.props.defaultStartPage : 1
          })
        }, function () {
          return _this.fetchData(_this.props.query, _this.state.pagination, _this.state.sort);
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "fetchData", function (query) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          current = _ref2.current,
          pageSize = _ref2.pageSize;

      var sort = arguments.length > 2 ? arguments[2] : undefined;

      _this.setState({
        loading: true
      });

      Object(_lib_util__WEBPACK_IMPORTED_MODULE_18__["queryResource"])('devices', {
        query: query,
        projection: ['_lastInform'].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_4___default()(_this.props.columns).flat())),
        skip: current ? (current - 1) * pageSize : null,
        limit: pageSize,
        sort: sort
      }).then(function (res) {
        res.json().then(function (json) {
          // successfuly returned data
          _this.setState({
            data: _this.parseDataModelFromJson(json),
            loading: false,
            pagination: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__["default"])({}, _this.state.pagination, {
              total: +res.headers.get('total')
            })
          });
        });
      }); // TODO
      // .catch(ex => {
      //   console.error('error fetching data', ex)
      // })
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "parseDataModelFromJson", function (devices) {
      var rows = [];
      devices.forEach(function (device) {
        var obj = {};

        _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3___default()(_this.props.columns).forEach(function (column) {
          var paths = column[1];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_2___default()(paths), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var path = _step.value;

              var _paramValue = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_19__["paramValue"])(path, device),
                  value = _paramValue.value;

              if (value !== null) {
                obj['' + paths] = value;
                break;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        });

        rows.push(obj);
      });
      return rows;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "createColumns", function (cols) {
      var columns = [];

      var _ref3 = _this.state.sort ? _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3___default()(_this.state.sort)[0] : ['', 1],
          _ref4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, 2),
          sortedPath = _ref4[0],
          sortedDirection = _ref4[1];

      var _arr = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3___default()(cols);

      for (var _i = 0; _i < _arr.length; _i++) {
        var _arr$_i = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_arr[_i], 2),
            label = _arr$_i[0],
            path = _arr$_i[1];

        var defaultSortOrder = void 0;

        if (sortedPath !== '' && ('' + path).indexOf(sortedPath) >= 0) {
          // why? recent datetimes have greater values than old ones.
          // it is kinda counter-intuitive sort "seconds ago" greater than "months ago"
          if (sortedPath !== '_lastInform') defaultSortOrder = sortedDirection === 1 ? 'ascend' : 'descend';else defaultSortOrder = sortedDirection === 1 ? 'descend' : 'ascend';
        } else defaultSortOrder = false;

        columns.push({
          title: label.replace(/_/g, ' '),
          dataIndex: '' + path,
          key: '' + path,
          sorter: true,
          defaultSortOrder: defaultSortOrder,
          render: '' + path === '_lastInform' ? _this.lastInformRender : _this.blankCellRender
        });
      }

      columns.push({
        title: 'Action',
        key: 'action',
        align: 'center',
        fixed: 'right',
        width: 100,
        render: _this.actionCellsRender
      });
      return columns;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "blankCellRender", function (text) {
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", null, text ? text : react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(Text, {
        disabled: true
      }, "blank"));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "lastInformRender", function (datetime) {
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_LastInformBadge__WEBPACK_IMPORTED_MODULE_17__["default"], {
        datetime: datetime
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "actionCellsRender", function (text, record) {
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
        href: "/devices/".concat(encodeURI(record._id))
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("a", null, "Show")));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "handleTableChange", function (pager, filters, sorter) {
      var pagination = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__["default"])({}, _this.state.pagination);

      pagination.current = pager.current;
      var sort = {};

      if (sorter.order) {
        // why? recent datetimes have greater values than old ones.
        // it is kinda counter-intuitive sort "seconds ago" greater than "months ago"
        if (sorter.field !== '_lastInform') sort["".concat(sorter.field)] = sorter.order === 'ascend' ? 1 : -1;else sort["".concat(sorter.field)] = sorter.order === 'ascend' ? -1 : 1;
      }

      _this.setState({
        pagination: pagination,
        sort: sort
      });

      _this.fetchData(_this.props.query, pagination, sort);

      _this.props.onTableChange && _this.props.onTableChange(pager.current, sort);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_10__["default"])(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_14__["Table"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.props, {
        size: "middle",
        columns: _this.columns,
        loading: _this.state.loading,
        dataSource: _this.state.data,
        rowKey: "_id",
        pagination: _this.state.pagination,
        onChange: _this.handleTableChange,
        scroll: {
          x: true
        }
      })));
    });

    _this.state = {
      sort: props.defaultSort ? Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_12__["default"])({}, props.defaultSort.replace('-', ''), props.defaultSort[0] === '-' ? -1 : 1) : null,
      data: [],
      pagination: {
        current: props.defaultStartPage ? +props.defaultStartPage : 1,
        pageSize: props.pageSize ? props.pageSize : 10,
        hideOnSinglePage: true,
        showTotal: function showTotal(total, r) {
          return "".concat(r[0], " - ").concat(r[1], " of ").concat(total, " items");
        }
      },
      loading: true // create columns with sort state on creation

    };
    _this.columns = _this.createColumns(props.columns);
    return _this;
  }

  return DevicesTable;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DevicesTable);

/***/ }),

/***/ "./components/devices/views/show.js":
/*!******************************************!*\
  !*** ./components/devices/views/show.js ***!
  \******************************************/
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
/* harmony import */ var _ui_Params__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/Params */ "./components/devices/ui/Params.js");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../lib/util */ "./lib/util.js");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../lib/helpers */ "./lib/helpers.js");













var Show =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Show, _Component);

  function Show(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Show);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Show).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentDidMount", function () {
      _this.fetchDevice(_this.state.params.id);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "fetchDevice", function (_id) {
      Object(_lib_util__WEBPACK_IMPORTED_MODULE_10__["queryResource"])('devices', {
        query: {
          _id: _id
        }
      }).then(function (res) {
        res.json().then(function (json) {
          if (json.length !== 1) throw Error; // successfuly returned data

          _this.setState({
            device: json[0],
            deviceParams: Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_11__["flattenParams"])(json[0])
          });
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, _this.state.deviceParams ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ui_Params__WEBPACK_IMPORTED_MODULE_9__["default"], {
        defaultParams: _this.state.deviceParams
      }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          textAlign: 'center',
          padding: '200px 0'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Spin"], {
        size: "large"
      })));
    });

    _this.state = {
      header: {},
      params: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.router.query),
      device: {}
    };
    return _this;
  }

  return Show;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Show);

/***/ }),

/***/ "./lib/helpers.js":
/*!************************!*\
  !*** ./lib/helpers.js ***!
  \************************/
/*! exports provided: devices, getParam, paramValue, flattenParams, groupParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devices", function() { return devices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParam", function() { return getParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paramValue", function() { return paramValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenParams", function() { return flattenParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupParams", function() { return groupParams; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util */ "./lib/util.js");







 // brainless js port of the original

var getParam = function getParam(path, device) {
  var ref = device;
  var nodes = path.split('.');
  var pp = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_6___default()(nodes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var node = _step.value;
      pp.push(node);
      var p = pp.join('.');

      if (p in ref) {
        ref = ref[p];
        pp = [];
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (pp.length !== 0) return null;
  return ref;
}; // a bit different return value from original but it's all


var paramValue = function paramValue(path, device) {
  var classes = ['long-text', 'param-value'];
  var param = getParam(path, device);
  if (param === null) return {
    value: null,
    timestamp: null,
    classes: null
  };
  var val, timestamp;

  if (Object(_babel_runtime_corejs2_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_5__["default"])(param) === 'object') {
    val = '_orig' in param ? param['_orig'] : param['_value'];
    if ('_timestamp' in param) timestamp = param['_timestamp'];
    if (param['_writable']) classes.push('value-writable');
  } else val = param;

  var valHtml = Object(_util__WEBPACK_IMPORTED_MODULE_7__["escapeHtml"])(val ? val.toString() : '');
  var barePath = path.replace(/\.\d+\./, '..');
  /* this piece of code calls custom formatters for some parameters
  if Rails.configuration.parameter_renderers.has_key?(bare_path)
    begin
      valHtml = ParameterRenderers::send(Rails.configuration.parameter_renderers[bare_path], val)
    rescue => e
      logger.error("Exception in renderer '#{Rails.configuration.parameter_renderers[path]}' for value '#{val}': #{e}")
    end
  end
  */

  return {
    value: valHtml,
    timestamp: timestamp,
    classes: classes
  };
}; // 1:1 port of the original


var flattenParams = function flattenParams(params) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var output = [];

  var _arr = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4___default()(params);

  for (var _i = 0; _i < _arr.length; _i++) {
    var _arr$_i = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_arr[_i], 2),
        n = _arr$_i[0],
        v = _arr$_i[1];

    if (n.startsWith('_') || typeof v === 'string') continue;
    v['_path'] = "".concat(prefix).concat(n);
    output.push(v);

    if (!('_value' in v)) {
      output.push.apply(output, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(flattenParams(v, prefix ? "".concat(prefix).concat(n, ".") : "".concat(n, "."))));
    }
  }

  return output;
}; // make a compact tree structure from a flattened param list


var groupParams = function groupParams(ps) {
  var root = {
    children: []
  };
  var nodes = {
    '': root
  };
  ps.forEach(function (p) {
    // filter only meta from ps
    var meta = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(p).filter(function (k) {
      return k[0] === '_';
    }).reduce(function (o, k) {
      o[k] = p[k];
      return o;
    }, {}); // link the nodes


    var parent = p._path.substring(0, p._path.lastIndexOf('.'));

    nodes[p._path] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, p._object && {
      children: []
    }, meta);
    nodes[parent].children.push(nodes[p._path]);
  });
  return root;
};

var devices = {
  getParam: getParam,
  paramValue: paramValue,
  flattenParams: flattenParams,
  groupParams: groupParams
};


/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js"));

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js"));



var fetch = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");

var escapeHtml = function escapeHtml(unsafe) {
  return unsafe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
};

var highlight = function highlight(text, searchTerm) {
  var s = text.search(new RegExp(searchTerm, 'i'));
  var e = s + searchTerm.length;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, s >= 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, text.substring(0, s), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mark", {
    style: {
      backgroundColor: 'yellow'
    }
  }, text.substring(s, e)), text.substring(e)) : text);
};

var setQueryStringParameter = function setQueryStringParameter(name, value) {
  var params = new URLSearchParams(location.search);
  var state = (0, _objectSpread2.default)({}, window.history.state);
  params.set(name, value);
  var to = decodeURIComponent("".concat(location.pathname, "?").concat(params));
  state['url'] = to;
  state['as'] = to;
  window.history.pushState(state, '', to);
};

var toQuery = function toQuery(o) {
  return (0, _keys.default)(o).map(function (k) {
    return "".concat(k, "=").concat(o[k]);
  }).join('&');
};

var queryResource =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(resource) {
    var _ref2,
        query,
        projection,
        skip,
        limit,
        sort,
        args,
        _args = arguments;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2 = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, query = _ref2.query, projection = _ref2.projection, skip = _ref2.skip, limit = _ref2.limit, sort = _ref2.sort;
            args = (0, _objectSpread2.default)({}, query && {
              query: encodeURI((0, _stringify.default)(query))
            }, projection && {
              projection: projection.join(',')
            }, skip && {
              skip: skip
            }, limit && {
              limit: limit
            }, sort && {
              sort: (0, _stringify.default)(sort)
            });
            return _context.abrupt("return", fetch("/api/".concat(resource, "?").concat(toQuery(args))));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function queryResource(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  escapeHtml: escapeHtml,
  setQueryStringParameter: setQueryStringParameter,
  toQuery: toQuery,
  queryResource: queryResource
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

})
//# sourceMappingURL=devices.js.d2b2eb096a76cbcf4042.hot-update.js.map