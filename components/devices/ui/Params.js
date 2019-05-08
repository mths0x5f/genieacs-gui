// genieacs-gui/app/views/devices/_params.html.erb  counterpart

import React, { Component } from 'react'
import { Col, Icon, Input, Row, Tree, Typography } from 'antd'
import moment from 'moment'

import './Params.css'
import { groupParams } from '../../../lib/helpers'

const { TreeNode } = Tree
const { Text } = Typography
const { Search } = Input

const iconStyle = { color: 'rgba(0, 0, 0, 0.65)', marginRight: 10 }

const sorter = (a, b) => (a._path > b._path ? 1 : a._path < b._path ? -1 : 0)

const highlightText = (text, textToHighlight) => {
  const s = text.search(new RegExp(textToHighlight, 'i'))
  const e = s + textToHighlight.length
  return (
    <>
      {s >= 0 ? (
        <>
          {text.substring(0, s)}
          <mark style={{ backgroundColor: 'yellow' }}>
            {text.substring(s, e)}
          </mark>
          {text.substring(e)}
        </>
      ) : (
        text
      )}
    </>
  )
}

class Params extends Component {
  constructor (props) {
    super(props)
    this.typingTimeout = 0
    this.state = {
      params: props.defaultParams.sort(sorter),
      tree: null
    }
  }

  componentDidMount = () => {
    console.log('mounted', this.state.params)
    this.processParams(this.state.params, true)
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevProps.defaultParams !== this.props.defaultParams) {
      this.setState({ params: this.props.defaultParams.sort(sorter) }, () => {
        console.log('updated', this.state.params)
        const searchTerm = this.state.searchText ? this.state.searchText : ''
        this.processParams(this.state.params, true, searchTerm)
      })
    }
  }

  processParams = (params, group, searchTerm = '') => {
    let p
    if (group) {
      p = groupParams(params)
    } else {
      p = { children: params }
    }
    const tree = this.treeNodes(p, searchTerm)
    this.setState({ tree })
  }

  handleSearch = e => {
    const search = (v, s) =>
      v._path.search(new RegExp(s, 'i')) >= 0 ||
      (v._value && ('' + v._value).search(new RegExp(s, 'i')) >= 0)

    const searchText = e.target.value
    this.setState({ searchText })

    // setTimeout is used to delay search and smooth typing
    clearTimeout(this.typingTimeout)

    this.typingTimeout = setTimeout(() => {
      const params = this.state.params.filter(v => search(v, searchText))
      this.processParams(params, searchText === '', searchText)
    }, 500 / searchText.length)
  }

  treeNodes = (params, searchTerm) => {
    const nodes = params.children.map(p => {
      if (p.children) {
        return (
          <TreeNode
            title={this.renderNode(p, searchTerm)}
            key={p._path}
            selectable={false}
          >
            {this.treeNodes(p, searchTerm)}
          </TreeNode>
        )
      }
      return (
        <TreeNode
          title={this.renderNode(p, searchTerm)}
          key={p._path}
          selectable={false}
        />
      )
    })
    return nodes
  }

  renderNode = (p, searchTerm) => {
    return (
      <div
        style={{
          whiteSpace: 'normal',
          borderBottom: '1px solid #e8e8e8',
          padding: 5
        }}
      >
        <Row>
          <Col span={16}>
            <Text className="long-text" title={p._path}>
              {p._object ? (
                <Icon type="bars" style={iconStyle} />
              ) : p._writable ? (
                <Icon type="edit" style={iconStyle} />
              ) : (
                <Icon type="info-circle" style={iconStyle} />
              )}
              {highlightText(p._path, searchTerm)}
            </Text>
          </Col>
          <Col span={6} push={2}>
            <Row gutter={2}>
              <Col span={14}>
                <Text type="secondary" title={`Last update: ${p._timestamp}`}>
                  <Icon
                    type="clock-circle"
                    style={{ ...iconStyle, color: 'rgba(0, 0, 0, 0.45)' }}
                  />
                  {moment(p._timestamp).fromNow()}
                </Text>
              </Col>
              {/* <Col span={10} pull={2}> */}
              {/*  <a onClick={() => this.handleRefresh(p._path)}>Refresh</a> */}
              {/*  {p._object */}
              {/*    ? p._writable && */}
              {/*    (p._path.match(/\.[\d]+$/) ? ( */}
              {/*      <> */}
              {/*        <Divider type="vertical"/> */}
              {/*        <a>Delete</a> */}
              {/*      </> */}
              {/*    ) : ( */}
              {/*      <> */}
              {/*        <Divider type="vertical"/> */}
              {/*        <a>Add</a> */}
              {/*      </> */}
              {/*    )) */}
              {/*    : p._writable && ( */}
              {/*    <> */}
              {/*      <Divider type="vertical"/> */}
              {/*      <a>Edit</a> */}
              {/*    </> */}
              {/*  )} */}
              {/* </Col> */}
            </Row>
          </Col>
        </Row>
        <Row>
          {!p._object && (
            <Col span={16}>
              <Text
                className="long-text"
                type="secondary"
                style={{ padding: '0 24px', color: '#002f2f' }}
              >
                {p._value ? (
                  highlightText('' + p._value, searchTerm)
                ) : (
                  <Text disabled>blank</Text>
                )}
              </Text>
            </Col>
          )}
        </Row>
      </div>
    )
  }

  handleRefresh = p => {
    console.log('refresh', p)
  }

  render = () => (
    <>
      <h3>Device parameters</h3>
      <Search
        placeholder="Search..."
        style={{ margin: '5px 0' }}
        onChange={this.handleSearch}
      />
      <div
        style={{
          height: '500px',
          overflowX: 'hidden',
          overflowY: 'auto',
          padding: 0
        }}
      >
        {this.state.tree && (
          <Tree
            blockNode
            switcherIcon={<Icon type="down" />}
            defaultExpandedKeys={['InternetGatewayDevice', 'Device']}
          >
            {this.state.tree}
          </Tree>
        )}
      </div>
    </>
  )
}

export default Params
