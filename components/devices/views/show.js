import React, { Component } from 'react'
import { Col, message, Row, Spin } from 'antd'

import Params from '../ui/Params'
import Summary from '../ui/Summary'
import TR143ControlPane from '../ui/TR143ControlPane'

import { queryResource } from '../../../lib/util'
import {
  refreshSummary,
  setParameterValues,
  refreshParam
} from '../../../lib/clients/devices'
import { flattenParams } from '../../../lib/helpers'
import Head from 'next/head'

const summaryParams = {
  Serial_Number: ['_deviceId._SerialNumber'],
  Manufacturer: ['_deviceId._Manufacturer'],
  Product_Class: ['_deviceId._ProductClass'],
  Software_Version: ['InternetGatewayDevice.DeviceInfo.SoftwareVersion'],
  Model_Name: ['InternetGatewayDevice.DeviceInfo.ModelName'],
  ID: ['_id'],
  Last_Inform: ['_lastInform'],
  Inform: ['InternetGatewayDevice.ManagementServer.PeriodicInformInterval'],
  Hosts: [
    {
      _object: 'InternetGatewayDevice.LANDevice.1.Hosts.Host',
      Host_name: 'HostName',
      IP: 'IPAddress',
      MAC: 'MACAddress'
    }
  ]
}

class Show extends Component {
  constructor (props) {
    super(props)
    this.state = {
      header: {},
      params: { ...props.router.query },
      device: {},
      watchers: { ping: 0, download: 0, upload: 0 },
      results: { ping: {}, download: {}, upload: {} }
    }
  }

  componentDidMount = () => {
    this.fetchDevice(this.state.params.id).then(() =>
      this.props.onDeviceChange(this.state.device)
    )
  }

  fetchDevice = _id => {
    return new Promise(resolve =>
      queryResource('devices', { query: { _id } }).then(res => {
        res.json().then(json => {
          if (json.length !== 1) throw Error
          // successfuly returned data
          this.setState(
            { device: json[0], deviceParams: flattenParams(json[0]) },
            resolve
          )
        })
      })
    )
  }

  handleSummaryRefresh = () => {
    const msgCloser = message.loading('Trying to update summary', 0)
    refreshSummary(this.state.params.id, summaryParams).then(([ids, res]) => {
      if (res.status === 200) {
        message.success('Summary refreshed', 3)
      } else if (res.status === 202) {
        message.warning(res.statusText, 3)
      } else {
        message.error(`Unexpected error (${res.status}): ${res.text()}`, 3)
      }
      msgCloser()
      this.fetchDevice(this.state.params.id).then(() =>
        this.props.onDeviceChange(this.state.device)
      )
    })
  }

  handlePingTest = () => {
    clearInterval(this.state.watchers.ping)
    const params = [
      ['InternetGatewayDevice.IPPingDiagnostics.Host', '177.69.115.28'],
      ['InternetGatewayDevice.IPPingDiagnostics.DataBlockSize', '56'],
      ['InternetGatewayDevice.IPPingDiagnostics.Timeout', '20000'],
      ['InternetGatewayDevice.IPPingDiagnostics.NumberOfRepetitions', '10'],
      ['InternetGatewayDevice.IPPingDiagnostics.DiagnosticsState', 'Requested']
    ]
    setParameterValues(this.state.params.id, params).then(r => {
      if (r.ok) {
        console.log('tuff')
        const id = setInterval(this.watchPingResults, 1000)
        this.setState({ watchers: { ...this.state.watchers, ping: id } })
      }
    })
  }

  watchPingResults = () => {
    refreshParam(
      this.state.params.id,
      'InternetGatewayDevice.IPPingDiagnostics'
    ).then(r => {
      this.fetchDevice(this.state.params.id).then(() =>
        this.props.onDeviceChange(this.state.device)
      )
    })
    const rs = this.state.device.InternetGatewayDevice.IPPingDiagnostics
    this.setState({ results: { ...this.state.results, ping: rs } })
  }

  handleDownloadTest = () => {
    clearInterval(this.state.watchers.download)
    const params = [
      [
        'InternetGatewayDevice.DownloadDiagnostics.DownloadURL',
        'http://177.69.115.28:8080/download/file01.dat'
      ],
      [
        'InternetGatewayDevice.DownloadDiagnostics.DiagnosticsState',
        'Requested'
      ]
    ]
    return setParameterValues(this.state.params.id, params).then(r => {
      if (r.ok) {
        console.log('tuff')
        const id = setInterval(this.watchDownloadResults, 1000)
        this.setState({ watchers: { ...this.state.watchers, download: id } })
      }
    })
  }

  watchDownloadResults = () => {
    refreshParam(
      this.state.params.id,
      'InternetGatewayDevice.DownloadDiagnostics'
    ).then(r => {
      this.fetchDevice(this.state.params.id).then(() =>
        this.props.onDeviceChange(this.state.device)
      )
    })
    const rs = this.state.device.InternetGatewayDevice.DownloadDiagnostics
    this.setState({ results: { ...this.state.results, download: rs } })
  }

  handleUploadTest = () => {
    const params = [
      [
        'InternetGatewayDevice.UploadDiagnostics.UploadURL',
        'http://177.69.115.28:8080/upload/up.php'
      ],
      ['InternetGatewayDevice.UploadDiagnostics.TestFileLength', '8192'],
      ['InternetGatewayDevice.UploadDiagnostics.DiagnosticsState', 'Requested']
    ]

    return setParameterValues(this.state.params.id, params).then(r => {
      if (r.ok) {
        console.log('tuff')
        const id = setInterval(this.watchUploadResults, 1000)
        this.setState({ watchers: { ...this.state.watchers, upload: id } })
      }
    })
  }

  watchUploadResults = () => {
    refreshParam(
      this.state.params.id,
      'InternetGatewayDevice.UploadDiagnostics'
    ).then(r => {
      this.fetchDevice(this.state.params.id).then(() =>
        this.props.onDeviceChange(this.state.device)
      )
    })
    const rs = this.state.device.InternetGatewayDevice.UploadDiagnostics
    this.setState({ results: { ...this.state.results, upload: rs } })
  }

  render = () => (
    <>
      <Head>
        <title>Device {this.state.params.id}</title>
      </Head>
      <Row gutter={100} style={{ marginBottom: 10, width: '100%' }}>
        <Col lg={10}>
          <Summary
            paramsToShow={summaryParams}
            deviceObj={this.state.device}
            onRefreshAsked={this.handleSummaryRefresh}
          />
        </Col>
        <Col lg={10}>
          {this.state.deviceParams ? (
            <TR143ControlPane
              defaultParams={this.state.deviceParams}
              handlePingTest={this.handlePingTest}
              handleDownloadTest={this.handleDownloadTest}
              handleUploadTest={this.handleUploadTest}
              pingResults={this.state.results.ping}
              downloadResults={this.state.results.download}
              uploadResults={this.state.results.upload}
            />
          ) : (
            <div style={{ textAlign: 'center', padding: '100px 0' }}>
              <Spin />
            </div>
          )}
        </Col>
      </Row>
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
