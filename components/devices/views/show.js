import React, { Component } from 'react'
import { Spin } from 'antd'

import Params from '../ui/Params'

import { queryResource } from '../../../lib/util'
import { flattenParams, paramValue } from '../../../lib/helpers'

class Show extends Component {
  constructor(props) {
    super(props)
    this.state = {
      header: {},
      params: { ...props.router.query },
      device: {},
    }
  }

  componentDidMount = () => {
    this.fetchDevice(this.state.params.id)
  }

  fetchDevice = _id => {
    queryResource('devices', { query: { _id } }).then(res => {
      res.json().then(json => {
        if (json.length !== 1) throw Error
        // successfuly returned data
        this.setState({
          device: json[0],
          deviceParams: flattenParams(json[0]),
        })
      })
    })
  }

  render = () => (
    <>
      {this.state.deviceParams ? (
        <Params defaultParams={this.state.deviceParams} />
      ) : (
        <div style={{ textAlign: 'center', padding: '200px 0' }}>
          <Spin size="large" />
        </div>
      )}
    </>
  )
}

export default Show
