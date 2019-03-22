import React, { Component } from 'react'
import { Button, Icon, Table, Typography, Divider } from 'antd'
import Link from 'next/link'
import { withRouter } from 'next/router'

import BaseLayout from '../components/Layout'
import DevicesTable from '../components/devices/Table'
import FilterModal from '../components/ui/FilterModal'

const cols = {
  Serial_Number: ['_deviceId._SerialNumber'],
  Manufacturer: ['_deviceId._Manufacturer'],
  Product_Class: ['_deviceId._ProductClass'],
  Software_Version: ['InternetGatewayDevice.DeviceInfo.SoftwareVersion'],
  Model_Name: ['InternetGatewayDevice.DeviceInfo.ModelName'],
  ID: ['_id'],
  Last_Inform: ['_lastInform'],
}

class Devices extends Component {
  constructor(props) {
    super(props)
    this.state = {
      header: {},
      params: { ...props.router.query },
      modalVisible: false,
    }
  }

  componentWillMount = () => {
    this.fillHeader()
  }

  fillHeader = () => {
    let header
    if (this.state.params.action === 'show')
      header = {
        title: this.state.params.id,
        subtitle: 'this.state.params.id',
        extra: (
          <div>
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
          </div>
        ),
        footer: (
          <div style={{ padding: 15 }}>
            <table>
              <tr>
                <td>
                  <b>fsdfsdfsd</b>
                </td>
                <td> dsadasdsadas</td>
              </tr>
              <tr>
                <td>
                  <b>fsdfsdfsd</b>
                </td>
                <td> dsadasdsadas</td>
              </tr>
              <tr>
                <td>
                  <b>fsdfsdfsd</b>
                </td>
                <td> dsadasdsadas</td>
              </tr>
            </table>
          </div>
        ),
        breadcrumb: '',
      }
    else header = { title: 'Devices' }
    this.setState({ header })
  }

  showModal = () => this.setState({ modalVisible: true })

  handleFilterChange = filter => {
    console.log(filter)
    if (this.table) this.table.reset()
    this.setState({ query: filter, modalVisible: false })
  }

  handleCancel = e => this.setState({ modalVisible: false })

  clearFilters = () => this.table && this.table.reset()

  render = () => {
    return (
      <BaseLayout
        title={this.state.header.title}
        subtitle={this.state.header.subtitle}
        extra={this.state.header.extra}
        footer={this.state.header.footer}
      >
        {this.state.params.action === 'show' ? (
          <div />
        ) : (
          <div>
            <Button
              type="primary"
              onClick={this.showModal}
              style={{ margin: '0 5px 20px' }}
            >
              <Icon type="filter" theme="filled" />
              Filters
            </Button>
            <Button
              onClick={this.clearFilters}
              style={{ margin: '0 5px 20px' }}
            >
              Clear filters
            </Button>

            <FilterModal
              visible={this.state.modalVisible}
              fields={cols}
              defaultFormValue={this.state.params.query}
              onFilterChange={this.handleFilterChange}
              onCancel={this.handleCancel}
            />

            <DevicesTable
              ref={r => (this.table = r)}
              query={this.state.query}
              columns={cols}
              defaultStartPage={this.state.params.page}
              defaultSort={this.state.params.sort}
            />
          </div>
        )}
      </BaseLayout>
    )
  }
}

export default withRouter(Devices)
