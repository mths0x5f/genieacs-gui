import React, { Component } from 'react'
import { withRouter } from 'next/router'

import BaseLayout, { Content, Header } from '../components/layout'
import Index, { Show } from '../components/devices/views'
import LastInformBadge from '../components/devices/ui/LastInformBadge'

class Devices extends Component {
  constructor (props) {
    super(props)
    this.state = {
      header: {},
      params: { ...props.router.query }
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
        // footer: (
        //   <div style={{ padding: 20, paddingTop: 0, textAlign: 'right' }}>
        //     <Button type="default" style={{ margin: '0 5px' }}>
        //       Ping
        //     </Button>
        //     <Button type="dashed" style={{ margin: '0 5px' }}>
        //       Reboot
        //     </Button>
        //     <Button type="danger" style={{ margin: '0 5px' }}>
        //       Factory reset
        //     </Button>
        //     <Button type="danger" style={{ margin: '0 5px' }}>
        //       Delete
        //     </Button>
        //   </div>
        // )
      }
    } else {
      header = { title: 'Devices' }
    }

    this.setState({ header })
  }

  handleDeviceChange = device => {
    const header = this.state.header
    this.setState({
      header: {
        ...header,
        subTitle: <LastInformBadge datetime={device._lastInform}/>
      }
    })
  }

  render = () => {
    return (
      <BaseLayout>
        <Header {...this.state.header} subTitle={this.state.header.subTitle}/>

        {this.state.params.action === 'show' ? (
          <Content>
            <Show
              router={this.props.router}
              onDeviceChange={this.handleDeviceChange}
            />
          </Content>
        ) : (
          <Content>
            <Index router={this.props.router}/>
          </Content>
        )}
      </BaseLayout>
    )
  }
}

export default withRouter(Devices)
// window.addEventListener('popstate', this.handlePopState)
// handlePopState = e => location.pathname === '/devices' && location.reload()
