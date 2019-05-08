import React, { Component } from 'react'
import { Button, Col, Row, Typography, Icon } from 'antd'
import { queryResource } from '../../../lib/util'
import { flattenParams } from '../../../lib/helpers'
import { setParameterValues } from '../../../lib/clients/devices'

const { Text } = Typography

class TR143ControlPane extends Component {
  constructor (props) {
    super(props)
    this.state = {
      device: {}, // argh
      compliant: false,
      testsAvailability: {
        ping: true,
        download: true,
        upload: true
      },
      results: {
        ping: props.pingResults,
        download: props.downloadResults,
        upload: props.uploadResults
      }
    }
  }

  componentDidMount = () => {
    this.checkDeviceCompliance()
  }

  // componentDidUpdate = prevProps => {
  //   if (prevProps.pingResults.ping !== this.props.pingResults) {
  //     this.setState({
  //       results: { ping: this.props.pingResults }
  //     })
  //   }
  //   if (prevProps.downloadResults.download !== this.props.downloadResults) {
  //     this.setState({
  //       results: {
  //         download: this.props.downloadResults
  //       }
  //     })
  //   }
  //   if (prevProps.uploadResults.upload !== this.props.uploadResults) {
  //     this.setState({
  //       results: { upload: this.props.uploadResults }
  //     })
  //   }
  // }

  checkDeviceCompliance = () => {
    let compliant = false
    const testsAvailability = {
      ping: false,
      download: false,
      upload: false
    }
    this.props.defaultParams.forEach(v => {
      if (v._path.indexOf('IPPingDiagnostics') >= 0) {
        compliant = true
        testsAvailability.ping = true
      }
      if (v._path.indexOf('DownloadDiagnostics') >= 0) {
        compliant = true
        testsAvailability.download = true
      }
      if (v._path.indexOf('UploadDiagnostics') >= 0) {
        compliant = true
        testsAvailability.upload = true
      }
    })
    this.setState({ compliant, testsAvailability })
  }

  handlePingTest = () => {
    this.setState({
      testsAvailability: {
        ping: false,
        download: false,
        upload: false
      }
    })
    this.props.handlePingTest()
  }

  handleDownloadTest = () => {
    this.setState({
      testsAvailability: {
        ping: false,
        download: false,
        upload: false
      }
    })
    this.props.handleDownloadTest().then(r => {
      if (r.ok) {
        console.log('tuff')
      }
    })
  }

  handleUploadTest = () => {
    this.setState({
      testsAvailability: {
        ping: false,
        download: false,
        upload: false
      }
    })
    this.props.handleUploadTest().then(r => {
      if (r.ok) {
        console.log('tuff')
      }
    })
  }

  render = () => (
    <>
      <Row style={{ width: 'fit-content' }}>
        <Col span={16}>
          <h3>Diagnostics</h3>
        </Col>
      </Row>
      <Row style={{ marginBottom: 10 }}>
        <table
          style={{
            borderCollapse: 'separate',
            borderSpacing: '15px 0',
            margin: '0 -15px 20px'
          }}
        >
          <tbody>
            <tr>
              <td>
                <b>TR143 compliance</b>
              </td>
              <td>
                {this.state.compliant ? (
                  <Icon
                    type="check-circle"
                    theme="filled"
                    style={{ color: 'green' }}
                  />
                ) : (
                  <Icon
                    type="close-circle"
                    theme="filled"
                    style={{ color: 'red' }}
                  />
                )}
              </td>
            </tr>
            <tr>
              <td>
                <b>Available tests</b>
              </td>
              <td>
                {Object.entries(this.state.testsAvailability)
                  .map(([k, v] = []) => {
                    if (k === 'ping') return 'Ping'
                    if (k === 'download') return 'Download'
                    if (k === 'upload') return 'Upload'
                  })
                  .join(', ')}
              </td>
            </tr>
          </tbody>
        </table>
      </Row>
      <Row style={{ marginBottom: 10 }}>
        <Col span={10}>
          <Button
            type={this.state.testsAvailability.ping ? 'default' : 'disabled'}
            onClick={
              this.state.testsAvailability.ping ? this.handlePingTest : null
            }
          >
            Ping Test
          </Button>
        </Col>
        <Col span={14}>
          {/* <Text>{JSON.stringify(this.state.results.ping)}</Text> */}
        </Col>
      </Row>
      <Row style={{ marginBottom: 10 }}>
        <Col span={10}>
          <Button
            type={
              this.state.testsAvailability.download ? 'default' : 'disabled'
            }
            onClick={
              this.state.testsAvailability.download
                ? this.handleDownloadTest
                : null
            }
          >
            Download Test
          </Button>
        </Col>
        <Col span={14}>
          {/* <Text>{JSON.stringify(this.state.results.download)}</Text> */}
        </Col>
      </Row>
      <Row style={{ marginBottom: 10 }}>
        <Col span={10}>
          <Button
            type={this.state.testsAvailability.upload ? 'default' : 'disabled'}
            onClick={
              this.state.testsAvailability.upload ? this.handleUploadTest : null
            }
          >
            Upload Test
          </Button>
        </Col>

        <Col span={14}>
          {/* <Text>{JSON.stringify(this.state.results.upload)}</Text> */}
        </Col>
      </Row>
    </>
  )
}

export default TR143ControlPane
