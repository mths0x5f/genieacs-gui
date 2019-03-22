import React, { Component } from "react";
import { PageHeader, Icon } from "antd";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayBackIcon: <Icon type="arrow-left" />
    };
  }

  componentDidMount = () =>
    this.setState({ displayBackIcon: this.displayBackIcon() });

  goBack = () => (window !== undefined) & window.history.back();

  displayBackIcon = () =>
    (window !== undefined) & (window.history.length !== 1) ? (
      <Icon type="arrow-left" />
    ) : (
      false
    );

  render = () => (
    <PageHeader
      onBack={() => this.goBack()}
      backIcon={this.state.displayBackIcon}
      {...this.props}
    />
  );
}

export default Header;
