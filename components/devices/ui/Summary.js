/**
  This component is responsible for displaying CPE summary info
  It is directly related to file below in the original genieacs-gui
    genieacs-gui/app/views/devices/_summary_group.html.erb
 */

import React, { Component } from 'react'
import { Row, Col, Button, Icon } from 'antd'

import { getParam, paramValue } from '../../../lib/helpers'

/*
  => component created to counterpart original
     genieacs-gui/app/views/devices/_object_table.html.erb
     TODO: originally configured to display the hosts table,
     work is not finished as not decided if it's necessary

const ObjectTable = props => (
  <table>
    <tr>
      {Object.keys(this.props.paramsToShow).reduce((l, k) => {
        if (k[0] !== '_') l.push(<th>{k.replace(/_/g, ' ')}</th>)
        return l
      }, [])}
    </tr>
    {this.props.deviceObj &&
      Object.entries(this.props.deviceObj).map(([k, v] = []) => {
        if (k[0] !== '_') {
          for (const [k2, v2] of Object.entries(this.props.paramsToShow)) {
            if (k[0] === '_') continue
            return <tr />
          }
        }
        return <></>
      })}
  </table>
)
*/

class Summary extends Component {
  constructor (props) {
    super(props)
    this.state = { loading: false }
  }

  componentDidUpdate = prevProps => {
    if (prevProps.deviceObj !== this.props.deviceObj) {
      this.setState({ loading: false })
    }
  }

  skeletonRow = k => (
    <tr key={k}>
      <td>
        <b>{k.replace(/_/g, ' ')}</b>
      </td>
      <td>
        <div
          style={{
            width: 280,
            height: '1.2em',
            lineHeight: 1.5,
            background:
              'linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%)',
            backgroundSize: '400% 100%',
            animation: 'ant-skeleton-loading 1.4s ease infinite'
          }}
        />
      </td>
    </tr>
  )

  render = () => (
    <Row style={{ width: 'fit-content' }}>
      <Col span={16}>
        <h3>Summary</h3>
      </Col>
      <Col span={8} style={{ textAlign: 'right' }}>
        <Button
          title="Refresh summary info"
          onClick={() => {
            this.setState({ loading: true }, () => this.props.onRefreshAsked())
          }}
          size="small"
        >
          <Icon type="sync" />
          Refresh
        </Button>
      </Col>
      <Col span={24}>
        <table
          style={{
            borderCollapse: 'separate',
            borderSpacing: '15px 0',
            margin: '0 -15px 20px'
          }}
        >
          <tbody>
            {!this.state.loading
              ? Object.entries(this.props.paramsToShow).map(([k, v] = []) => {
                for (const vv of v) {
                  let p
                  /*
                => below code is preliminary for exact porting of existing features
                  but after second, third and fourth thoughts maybe this is not the
                  best way to render configurable tabular data

                if (
                  typeof vv === 'object' &&
                  '_object' in vv &&
                  (p = getParam(vv['_object'], this.props.deviceObj)) !== null
                ) {
                  return (
                    <div>
                      <br />
                      <h4>{k}</h4>
                      <ObjectTable paramsToShow={vv} deviceObj={p} />
                    </div>
                  )
                }
              */
                  if (typeof vv === 'object') return null

                  if (
                    typeof vv === 'string' &&
                      (p = getParam(vv, this.props.deviceObj)) !== null
                  ) {
                    return (
                      <tr key={vv}>
                        <td>
                          <b>{k.replace(/_/g, ' ')}</b>
                        </td>
                        <td>
                          {paramValue(vv, this.props.deviceObj).value}
                          {/* {p['_writable'] && ( */}
                          {/*    <> */}
                          {/*      {' — '} */}
                          {/*      <a onClick={this.props.onEditParam}>Edit</a> */}
                          {/*    </> */}
                          {/* )} */}
                        </td>
                      </tr>
                    )
                  }
                }
                return this.skeletonRow(k)
              })
              : Object.entries(this.props.paramsToShow).reduce(
                (rows, [k, v] = []) => {
                  typeof v[0] === 'string' && rows.push(this.skeletonRow(k))
                  return rows
                },
                []
              )}
          </tbody>
        </table>
      </Col>
    </Row>
  )
}

export default Summary
