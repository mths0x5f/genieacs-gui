import React, { Component } from 'react'
import { Button, Icon, Table, Typography, Divider } from 'antd'
import Link from 'next/link'

import DevicesTable from '../ui/Table'
import LastInformBadge from '../ui/LastInformBadge'
import FilterModal from '../../ui/FilterModal'

const cols = {
  Serial_Number: ['_deviceId._SerialNumber'],
  Manufacturer: ['_deviceId._Manufacturer'],
  Product_Class: ['_deviceId._ProductClass'],
  Software_Version: ['InternetGatewayDevice.DeviceInfo.SoftwareVersion'],
  Model_Name: ['InternetGatewayDevice.DeviceInfo.ModelName'],
  ID: ['_id'],
  Last_Inform: ['_lastInform'],
}

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      header: {},
      params: { ...props.router.query },
      modalVisible: false,
    }
  }

  showModal = () => this.setState({ modalVisible: true })

  handleFilterChange = filter =>
    this.setState({ query: filter, modalVisible: false })

  handleCancel = e => this.setState({ modalVisible: false })

  clearFilters = () => {
    this.setState({ query: {} })
  }

  onTableChange = (page, sort) => {
    console.log(page, sort)
  }

  render = () => (
    <>
      <Button
        type="primary"
        onClick={this.showModal}
        style={{ margin: '0 5px 20px' }}
      >
        <Icon type="filter" theme="filled" />
        Filters
      </Button>

      <Button onClick={this.clearFilters} style={{ margin: '0 5px 20px' }}>
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
        columns={cols}
        pageSize={20}
        query={this.state.query}
        defaultSort={this.state.params.sort}
        defaultStartPage={this.state.params.page}
        onTableChange={this.onTableChange}
      />
    </>
  )
}

export default Index

import Show from './show'

export { Show }
