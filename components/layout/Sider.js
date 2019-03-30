import React from "react";
import { Layout as AntLayout} from "antd";

import Menu from "./Menu";

const Sider = props => (
  <AntLayout.Sider
    theme="light"
    breakpoint="md"
    collapsible={true}
    style={{
      height: "100vh",
      boxShadow: "1px 0px 5px 0px rgba(0,0,0,0.25)",
      zIndex: 1
    }}
  >
    <div
      className="logo"
      style={{
        height: 32,
        margin: 16,
        background: "rgba(0,0,0,.2)",
      }}
    />
    <Menu iconTheme="twoTone" faultsCount={0} />
  </AntLayout.Sider>
);

export default Sider;
