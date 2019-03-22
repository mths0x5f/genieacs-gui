webpackHotUpdate("static/development/pages/devices.js",{

/***/ "./components/devices/Table.js":
/*!*************************************!*\
  !*** ./components/devices/Table.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lib/util */ "./lib/util.js");
/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_lib_util__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../lib/helpers */ "./lib/helpers.js");















var Text = antd__WEBPACK_IMPORTED_MODULE_11__["Typography"].Text;
var Option = antd__WEBPACK_IMPORTED_MODULE_11__["Select"].Option;

var DevicesTable =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(DevicesTable, _Component);

  function DevicesTable(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, DevicesTable);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(DevicesTable).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "reset", function () {
      console.debug('resetting table state');

      _this.setState({
        pagination: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _this.state.pagination, {
          current: 1
        }),
        sort: null
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "componentDidMount", function () {
      window.addEventListener('popstate', _this.handlePopState);

      _this.fetchData(_this.state.query, _this.state.pagination, _this.state.sort);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "componentDidUpdate", function (prevProps) {
      // Typical usage (don't forget to compare props):
      if (_this.props.query !== prevProps.query) {
        _this.setState({
          query: _this.props.query
        }, function () {
          return _this.fetchData(_this.state.query, _this.state.pagination, _this.state.sort);
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "showTotal", function (total, range) {
      return "".concat(range[0], " - ").concat(range[1], " of ").concat(total, " items");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "columns", function (o, sort) {
      var columns = [];
      var sorted = sort ? _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(sort)[0] : ['', 1];

      var _arr = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(o);

      for (var _i = 0; _i < _arr.length; _i++) {
        var i = _arr[_i];
        var sortOrder = void 0;
        if (sorted[0] === '' + i[1]) sortOrder = sorted[1] === 1 ? 'ascend' : 'descend';else sortOrder = false;
        columns.push({
          title: i[0].replace('_', ' '),
          dataIndex: i[1],
          key: i[1],
          sorter: true,
          sortOrder: sortOrder,
          render: function render(text) {
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, text ? text : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Text, {
              disabled: true
            }, "blank"));
          }
        });
      }

      columns.push({
        title: 'Action',
        key: 'action',
        fixed: 'right',
        width: 150,
        render: function render(text, record) {
          return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
            href: "/devices/".concat(record._id)
          }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", null, "Show")));
        }
      });
      return columns;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "parseData", function (columns, devices) {
      var rows = [];
      devices.forEach(function (device) {
        var obj = {};

        _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(columns).forEach(function (column) {
          var paths = column[1];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = _babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_1___default()(paths), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var path = _step.value;

              var _paramValue = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_14__["paramValue"])(path, device),
                  value = _paramValue.value;

              if (value !== null) {
                obj[path] = value;
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "fetchData", function (query) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          current = _ref.current,
          pageSize = _ref.pageSize;

      var sort = arguments.length > 2 ? arguments[2] : undefined;

      _this.setState({
        loading: true
      });

      Object(_lib_util__WEBPACK_IMPORTED_MODULE_13__["queryResource"])('devices', {
        query: query,
        projection: ['_lastInform', '_deviceId', 'InternetGatewayDevice.DeviceInfo'],
        skip: current ? (current - 1) * pageSize : null,
        limit: pageSize,
        sort: sort
      }).then(function (res) {
        res.json().then(function (json) {
          _this.setState({
            data: _this.parseData(_this.props.columns, json),
            loading: false,
            pagination: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _this.state.pagination, {
              total: +res.headers.get('total')
            })
          });
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handlePopState", function (e) {
      return location.pathname === '/devices' && location.reload();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleTableChange", function (pagination, filters, sorter) {
      var pager = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _this.state.pagination);

      pager.current = pagination.current;
      Object(_lib_util__WEBPACK_IMPORTED_MODULE_13__["setQueryStringParameter"])('page', pager.current);
      var sort = {};

      if (sorter.order) {
        sort["".concat(sorter.field[0])] = sorter.order === 'ascend' ? 1 : -1;
        Object(_lib_util__WEBPACK_IMPORTED_MODULE_13__["setQueryStringParameter"])('sort', sorter.order === 'ascend' ? sorter.field[0] : '-' + sorter.field[0]);
      }

      _this.setState({
        pagination: pager,
        sort: sort
      });

      _this.fetchData(_this.state.query, pager, sort);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_11__["Table"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.props, {
        size: "small",
        columns: _this.columns(_this.props.columns, _this.state.sort),
        loading: _this.state.loading,
        dataSource: _this.state.data,
        rowKey: "_id",
        pagination: _this.state.pagination,
        onChange: _this.handleTableChange,
        scroll: {
          x: 1300
        }
      })));
    });

    _this.state = {
      query: props.query ? props.query : {},
      sort: props.sort ? Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, props.sort.replace('-', ''), props.sort[0] === '-' ? -1 : 1) : null,
      data: [],
      pagination: {
        current: props.startPage ? +props.startPage : 1,
        pageSize: 10,
        hideOnSinglePage: true,
        showTotal: _this.showTotal
      },
      loading: true
    };
    return _this;
  }

  return DevicesTable;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DevicesTable);

/***/ })

})
//# sourceMappingURL=devices.js.9b5b7325d57fb9a42f96.hot-update.js.map