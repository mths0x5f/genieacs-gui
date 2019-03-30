import React, { Component } from 'react'
import { Table, Typography, Divider } from 'antd'
import Link from 'next/link'

import './Table.css'
import LastInformBadge from './LastInformBadge'
import { queryResource } from '../../../lib/util'
import { paramValue } from '../../../lib/helpers'

const { Text } = Typography

class DevicesTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sort: props.defaultSort
        ? {
            // convert the query str to obj mongo expects
            [props.defaultSort.replace('-', '')]:
              props.defaultSort[0] === '-' ? -1 : 1,
          }
        : null,
      data: [],
      pagination: {
        current: props.defaultStartPage ? +props.defaultStartPage : 1,
        pageSize: props.pageSize ? props.pageSize : 10,
        hideOnSinglePage: true,
        showTotal: (total, r) => `${r[0]} - ${r[1]} of ${total} items`,
      },
      loading: true,
    }
    // create columns with sort state on creation
    this.columns = this.createColumns(props.columns)
  }

  componentDidMount = () => {
    this.fetchData(this.props.query, this.state.pagination, this.state.sort)
  }

  componentDidUpdate = prevProps => {
    if (this.props.query !== prevProps.query) {
      this.setState(
        {
          sort: this.props.defaultSort
            ? {
                // convert the query str to obj mongo expects
                [this.props.defaultSort.replace('-', '')]:
                  this.props.defaultSort[0] === '-' ? -1 : 1,
              }
            : null,
          pagination: {
            ...this.state.pagination,
            current: this.props.defaultStartPage
              ? +this.props.defaultStartPage
              : 1,
          },
        },
        () =>
          this.fetchData(
            this.props.query,
            this.state.pagination,
            this.state.sort
          )
      )
    }
  }

  fetchData = (query, { current, pageSize } = {}, sort) => {
    this.setState({ loading: true })
    queryResource('devices', {
      query,
      projection: ['_lastInform', ...Object.values(this.props.columns).flat()],
      skip: current ? (current - 1) * pageSize : null,
      limit: pageSize,
      sort,
    }).then(res => {
      res.json().then(json => {
        // successfuly returned data
        this.setState({
          data: this.parseDataModelFromJson(json),
          loading: false,
          pagination: {
            ...this.state.pagination,
            total: +res.headers.get('total'),
          },
        })
      })
    })
    // TODO
    // .catch(ex => {
    //   console.error('error fetching data', ex)
    // })
  }

  parseDataModelFromJson = devices => {
    let rows = []
    devices.forEach(device => {
      let obj = {}
      Object.entries(this.props.columns).forEach(column => {
        let paths = column[1]
        for (let path of paths) {
          let { value } = paramValue(path, device)
          if (value !== null) {
            obj['' + paths] = value
            break
          }
        }
      })
      rows.push(obj)
    })
    return rows
  }

  createColumns = cols => {
    let columns = []
    let [sortedPath, sortedDirection] = this.state.sort
      ? Object.entries(this.state.sort)[0]
      : ['', 1]

    for (let [label, path] of Object.entries(cols)) {
      let defaultSortOrder
      if (sortedPath !== '' && ('' + path).indexOf(sortedPath) >= 0) {
        // why? recent datetimes have greater values than old ones.
        // it is kinda counter-intuitive sort "seconds ago" greater than "months ago"
        if (sortedPath !== '_lastInform')
          defaultSortOrder = sortedDirection === 1 ? 'ascend' : 'descend'
        else defaultSortOrder = sortedDirection === 1 ? 'descend' : 'ascend'
      } else defaultSortOrder = false

      columns.push({
        title: label.replace(/_/g, ' '),
        dataIndex: '' + path,
        key: '' + path,
        sorter: true,
        defaultSortOrder,
        render:
          '' + path === '_lastInform'
            ? this.lastInformRender
            : this.blankCellRender,
      })
    }

    columns.push({
      title: 'Action',
      key: 'action',
      align: 'center',
      fixed: 'right',
      width: 100,
      render: this.actionCellsRender,
    })

    return columns
  }

  blankCellRender = text => (
    <span>{text ? text : <Text disabled>blank</Text>}</span>
  )

  lastInformRender = datetime => <LastInformBadge datetime={datetime} />

  actionCellsRender = (text, record) => (
    <span>
      {/* <Divider type="vertical" /> */}
      <Link href={`/devices/${encodeURI(record._id)}`}>
        <a>Show</a>
      </Link>
    </span>
  )

  handleTableChange = (pager, filters, sorter) => {
    const pagination = { ...this.state.pagination }
    pagination.current = pager.current

    let sort = {}
    if (sorter.order) {
      // why? recent datetimes have greater values than old ones.
      // it is kinda counter-intuitive sort "seconds ago" greater than "months ago"
      if (sorter.field !== '_lastInform')
        sort[`${sorter.field}`] = sorter.order === 'ascend' ? 1 : -1
      else sort[`${sorter.field}`] = sorter.order === 'ascend' ? -1 : 1
    }

    this.setState({ pagination, sort })
    this.fetchData(this.props.query, pagination, sort)

    this.props.onTableChange && this.props.onTableChange(pager.current, sort)
  }

  render = () => (
    <div>
      <Table
        {...this.props}
        size="middle"
        columns={this.columns}
        loading={this.state.loading}
        dataSource={this.state.data}
        rowKey="_id"
        pagination={this.state.pagination}
        onChange={this.handleTableChange}
        scroll={{ x: true }}
      />
    </div>
  )
}

export default DevicesTable
