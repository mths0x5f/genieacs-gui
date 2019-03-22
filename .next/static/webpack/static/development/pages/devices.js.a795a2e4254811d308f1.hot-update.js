webpackHotUpdate("static/development/pages/devices.js",{

/***/ "./pages/devices.js":
/*!**************************!*\
  !*** ./pages/devices.js ***!
  \**************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_devices_Table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/devices/Table */ "./components/devices/Table.js");
/* harmony import */ var _components_ui_FilterModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/ui/FilterModal */ "./components/ui/FilterModal.js");














var cols = {
  Serial_Number: ['_deviceId._SerialNumber'],
  Manufacturer: ['_deviceId._Manufacturer'],
  Product_Class: ['_deviceId._ProductClass'],
  Software_Version: ['InternetGatewayDevice.DeviceInfo.SoftwareVersion'],
  Model_Name: ['InternetGatewayDevice.DeviceInfo.ModelName'],
  ID: ['_id'],
  Last_Inform: ['_lastInform']
};

var Devices =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Devices, _Component);

  function Devices(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Devices);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Devices).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentWillMount", function () {
      _this.fillHeader();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "fillHeader", function () {
      var header;
      if (_this.state.params.action === 'show') header = {
        title: _this.state.params.id,
        subtitle: 'this.state.params.id',
        extra: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "primary",
          style: {
            margin: '0 5px'
          }
        }, "Refresh"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "default",
          style: {
            margin: '0 5px'
          }
        }, "Ping"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "dashed",
          style: {
            margin: '0 5px'
          }
        }, "Reboot")),
        footer: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            padding: 15
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "fsdfsdfsd")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", null, " dsadasdsadas")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "fsdfsdfsd")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", null, " dsadasdsadas")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", null, "fsdfsdfsd")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("td", null, " dsadasdsadas")))),
        breadcrumb: ''
      };else header = {
        title: 'Devices'
      };

      _this.setState({
        header: header
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showModal", function () {
      return _this.setState({
        modalVisible: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleFilterChange", function (filter) {
      console.log(filter);
      if (_this.table) _this.table.reset();

      _this.setState({
        query: filter,
        modalVisible: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleCancel", function (e) {
      return _this.setState({
        modalVisible: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: _this.state.header.title,
        subtitle: _this.state.header.subtitle,
        extra: _this.state.header.extra,
        footer: _this.state.header.footer
      }, _this.state.params.action === 'show' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        type: "primary",
        onClick: _this.showModal,
        style: {
          margin: '0 5px 20px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        type: "filter",
        theme: "filled"
      }), "Filters"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        href: "/devices",
        style: {
          margin: '0 5px 20px'
        }
      }, "Clear"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ui_FilterModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
        visible: _this.state.modalVisible,
        fields: cols,
        defaultFormValue: _this.state.params.query,
        onFilterChange: _this.handleFilterChange,
        onCancel: _this.handleCancel
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_devices_Table__WEBPACK_IMPORTED_MODULE_12__["default"], {
        ref: function ref(r) {
          return _this.table = r;
        },
        query: _this.state.query,
        columns: cols,
        defaultStartPage: _this.state.params.page,
        defaultSort: _this.state.params.sort
      })));
    });

    _this.state = {
      header: {},
      params: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.router.query),
      modalVisible: false
    };
    return _this;
  }

  return Devices;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(Devices));

/***/ })

})
//# sourceMappingURL=devices.js.a795a2e4254811d308f1.hot-update.js.map