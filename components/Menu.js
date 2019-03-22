import React, { Component } from "react";
import Link from "next/link";
import { withRouter } from "next/router";

import { Menu as AntMenu, Icon } from "antd";

const iconStyle = { fontSize: "1.2em" };

class Menu extends Component {
  selectKeys = () =>
    this.props.router.route === "/"
      ? ["home"]
      : [this.props.router.route.replace("/", "")];

  render() {
    return (
      <AntMenu
        theme="light"
        mode="inline"
        defaultSelectedKeys={this.selectKeys()}
        inlineIndent={16}
        forceSubMenuRender={true}
        style={{ borderRight: 0 }}
      >
        <AntMenu.Item key="home">
          <Link href="/">
            <a href="/">
              <Icon
                type="home"
                theme={this.props.iconTheme}
                twoToneColor="#fe942e"
                style={iconStyle}
              />
              <span className="nav-text">Home</span>
            </a>
          </Link>
        </AntMenu.Item>
        <AntMenu.Item key="devices">
          <Link href="/devices">
            <a href="/devices">
              <Icon
                type="cloud"
                theme={this.props.iconTheme}
                twoToneColor="#1890ff"
                style={iconStyle}
              />
              <span className="nav-text">Devices</span>
            </a>
          </Link>
        </AntMenu.Item>
        <AntMenu.Item key="faults">
          <Link href="/faults">
            <a href="/faults">
              <Icon
                type="alert"
                theme={this.props.iconTheme}
                twoToneColor="#fe2e2e"
                style={iconStyle}
              />
              <span className="nav-text">
                Faults ({this.props.faultsCount})
              </span>
            </a>
          </Link>
        </AntMenu.Item>
        <AntMenu.Item key="files">
          <Link href="/files">
            <a href="/files">
              <Icon
                type="folder"
                theme={this.props.iconTheme}
                twoToneColor="#aeb404"
                style={iconStyle}
              />
              <span className="nav-text">Files</span>
            </a>
          </Link>
        </AntMenu.Item>
        <AntMenu.SubMenu
          key="tools"
          title={
            <span>
              <Icon
                type="tool"
                theme={this.props.iconTheme}
                twoToneColor="#1e90ff"
                style={iconStyle}
              />
              <span className="nav-text">Tools</span>
            </span>
          }
        >
          <AntMenu.Item key="presets">
            <Link href="/presets">
              <a href="/presets">
                <Icon
                  type="clock-circle"
                  theme={this.props.iconTheme}
                  twoToneColor="#fa58f4"
                  style={iconStyle}
                />
                <span className="nav-text">Presets</span>
              </a>
            </Link>
          </AntMenu.Item>
          <AntMenu.Item key="objects">
            <Link href="/objects">
              <a href="/objects">
                <Icon
                  type="book"
                  theme={this.props.iconTheme}
                  twoToneColor="#fe2e64"
                  style={iconStyle}
                />
                <span className="nav-text">Objects</span>
              </a>
            </Link>
          </AntMenu.Item>
          <AntMenu.Item key="provisions">
            <Link href="/provisions">
              <a href="/provisions">
                <Icon
                  type="code"
                  theme={this.props.iconTheme}
                  twoToneColor="#848484"
                  style={iconStyle}
                />
                <span className="nav-text">Provisions</span>
              </a>
            </Link>
          </AntMenu.Item>
          <AntMenu.Item key="virtual_parameters">
            <Link href="/virtual_parameters">
              <a href="/virtual_parameters">
                <Icon
                  type="reconciliation"
                  theme={this.props.iconTheme}
                  twoToneColor="#5858fa"
                  style={iconStyle}
                />
                <span className="nav-text">Virtual Parameters</span>
              </a>
            </Link>
          </AntMenu.Item>
        </AntMenu.SubMenu>
        <AntMenu.Item key="settings">
          <Link href="/settings">
            <a href="/settings">
              <Icon
                type="setting"
                theme={this.props.iconTheme}
                twoToneColor="#04b404"
                style={iconStyle}
              />
              <span className="nav-text">Settings</span>
            </a>
          </Link>
        </AntMenu.Item>
      </AntMenu>
    );
  }
}

export default withRouter(Menu);
