import React, { Component } from 'react'
import { Table, Typography, Divider, Button, Select } from 'antd'
import Link from 'next/link'

import { setQueryStringParameter, queryResource } from '../../lib/util'
import { paramValue } from '../../lib/helpers'

const { Text } = Typography
const { Option } = Select

class DevicesTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: props.query ? props.query : {},
      sort: props.sort
        ? { [props.sort.replace('-', '')]: props.sort[0] === '-' ? -1 : 1 }
        : null,
      data: [],
      pagination: {
        current: props.startPage ? +props.startPage : 1,
        pageSize: 10,
        hideOnSinglePage: true,
        showTotal: this.showTotal,
      },
      loading: true,
    }
  }

  reset = () => {
    console.debug('resetting table state')
    this.setState({
      query: {},
      pagination: { ...this.state.pagination, current: 1 },
      sort: null,
    })
  }

  componentDidMount = () => {
    window.addEventListener('popstate', this.handlePopState)
    this.fetchData(this.state.query, this.state.pagination, this.state.sort)
  }

  componentDidUpdate = prevProps => {
    // Typical usage (don't forget to compare props):
    console.log('update')
    if (this.props.query !== prevProps.query) {
      this.setState({ query: this.props.query }, () =>
        this.fetchData(this.state.query, this.state.pagination, this.state.sort)
      )
    }
  }

  showTotal = (total, range) => `${range[0]} - ${range[1]} of ${total} items`

  columns = (o, sort) => {
    let columns = []
    let sorted = sort ? Object.entries(sort)[0] : ['', 1]
    for (let i of Object.entries(o)) {
      let sortOrder
      if (sorted[0] === '' + i[1])
        sortOrder = sorted[1] === 1 ? 'ascend' : 'descend'
      else sortOrder = false

      columns.push({
        title: i[0].replace('_', ' '),
        dataIndex: i[1],
        key: i[1],
        sorter: true,
        sortOrder,
        render: text => (
          <span>{text ? text : <Text disabled>blank</Text>}</span>
        ),
      })
    }
    columns.push({
      title: 'Action',
      key: 'action',
      fixed: 'right',
      width: 150,
      render: (text, record) => (
        <span>
          {/* <Divider type="vertical" /> */}
          <Link href={`/devices/${record._id}`}>
            <a>Show</a>
          </Link>
        </span>
      ),
    })
    return columns
  }

  parseData = (columns, devices) => {
    let rows = []
    devices.forEach(device => {
      let obj = {}
      Object.entries(columns).forEach(column => {
        let paths = column[1]
        for (let path of paths) {
          let { value } = paramValue(path, device)
          if (value !== null) {
            obj[path] = value
            break
          }
        }
      })
      rows.push(obj)
    })
    return rows
  }

  fetchData = (query, { current, pageSize } = {}, sort) => {
    this.setState({ loading: true })
    queryResource('devices', {
      query,
      projection: [
        '_lastInform',
        '_deviceId',
        'InternetGatewayDevice.DeviceInfo',
        // ...Object.values(cols)
      ],
      skip: current ? (current - 1) * pageSize : null,
      limit: pageSize,
      sort,
    }).then(res => {
      res.json().then(json => {
        this.setState({
          data: this.parseData(this.props.columns, json),
          loading: false,
          pagination: {
            ...this.state.pagination,
            total: +res.headers.get('total'),
          },
        })
      })
    })
  }

  handlePopState = e => location.pathname === '/devices' && location.reload()

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination }
    pager.current = pagination.current
    setQueryStringParameter('page', pager.current)

    let sort = {}
    if (sorter.order) {
      sort[`${sorter.field[0]}`] = sorter.order === 'ascend' ? 1 : -1
      setQueryStringParameter(
        'sort',
        sorter.order === 'ascend' ? sorter.field[0] : '-' + sorter.field[0]
      )
    }

    this.setState({ pagination: pager, sort })
    this.fetchData(this.state.query, pager, sort)
  }

  render = () => (
    <div>
      <Table
        {...this.props}
        size="small"
        columns={this.columns(this.props.columns, this.state.sort)}
        loading={this.state.loading}
        dataSource={this.state.data}
        rowKey="_id"
        pagination={this.state.pagination}
        onChange={this.handleTableChange}
        scroll={{ x: 1300 }}
      />
    </div>
  )
}

export default DevicesTable
