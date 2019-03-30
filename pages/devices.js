import React, { Component } from 'react'
import { Button, Icon, Table, Typography, Divider } from 'antd'
import { withRouter } from 'next/router'

import BaseLayout, { Header, Content } from '../components/layout'
import Index, { Show } from '../components/devices/views'

class Devices extends Component {
  constructor(props) {
    super(props)
    this.state = {
      header: {},
      params: { ...props.router.query },
    }
  }

  componentDidMount = () => {
    this.fillHeader()
  }

  fillHeader = () => {
    let header
    if (this.state.params.action === 'show') {
      header = {
        title: this.state.params.id,
        subTitle: 'this.state.params.id',
        extra: (
          <>
            <Button type="primary" style={{ margin: '0 5px' }}>
              Refresh
            </Button>
            <Button type="default" style={{ margin: '0 5px' }}>
              Ping
            </Button>
            <Button type="dashed" style={{ margin: '0 5px' }}>
              Reboot
            </Button>
            {/* <Button type="danger" style={{margin:'0 5px'}}>Factory reset</Button> */}
            {/* <Button type="danger" style={{margin:'0 5px'}}>Delete</Button> */}
          </>
        ),
        footer: '',
      }
    } else header = { title: 'Devices' }

    this.setState({ header })
  }

  handleDeviceChange = () => {}

  render = () => {
    return (
      <BaseLayout>
        <Header {...this.state.header} />

        {this.state.params.action === 'show' ? (
          <Content>
            <Show
              router={this.props.router}
              onDeviceChange={this.handleDeviceChange}
            />
          </Content>
        ) : (
          <Content>
            <Index router={this.props.router} />
          </Content>
        )}
      </BaseLayout>
    )
  }
}

export default withRouter(Devices)
// window.addEventListener('popstate', this.handlePopState)
// handlePopState = e => location.pathname === '/devices' && location.reload()
