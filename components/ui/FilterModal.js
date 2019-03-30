import React, { Component } from 'react'
import { Modal, Select, Row, Col, Tabs, Alert } from 'antd'
import dynamic from 'next/dynamic'
import compile from 'monquery'

const TextEditor = dynamic(import('./TextEditor'), { ssr: false })

const { TabPane } = Tabs

const mongoQueryRef =
  'https://docs.mongodb.com/manual/reference/method/db.collection.find/#query-using-operators'

class FilterModal extends Component {
  state = {
    mode: this.props.defaultFormValue ? 'advanced' : 'simple',
    // form values
    simpleFormValues: new Map(),
    advancedFormValue: this.props.defaultFormValue
      ? JSON.stringify(JSON.parse(this.props.defaultFormValue), null, 2)
      : '{\n  \n}',
    // alerts
    simpleTipsVisible: false,
    invalidJsonAlertVisible: false,
  }

  componentDidMount = () => {
    let simpleTipsVisible = localStorage.getItem('filtermodal.simpletips')
    if (simpleTipsVisible === null) {
      localStorage.setItem('filtermodal.simpletips', true)
      simpleTipsVisible = 'true'
    }
    this.setState({
      simpleTipsVisible: simpleTipsVisible === 'true' ? true : false,
    })
  }

  handleModeChange = mode => {
    // TODO: when modal opened in advanced mode, editor is not autofocused
    if (mode === 'advanced' && this.ace) this.ace.editor.focus()
    // TODO: .focus() does not work as advised
    else if (mode === 'simple' && this.stSelect) this.stSelect.focus()

    this.setState({ mode })
  }

  handleOk = e => {
    let query

    if (this.state.mode === 'simple')
      try {
        query = this.createSimpleFilter()
      } catch (ex) {
        return // should NEVER happen
      }
    else
      try {
        query = this.createAdvancedFilter()
      } catch (ex) {
        this.setState({ invalidJsonAlertVisible: true })
        return
      }

    this.setState({ query, invalidJsonAlertVisible: false }, () => {
      console.debug('calling back onFilterChange with filter', query)
      this.props.onFilterChange(this.state.query)
    })
  }

  createSimpleFilter = () => {
    let fields = Array.from(this.state.simpleFormValues.entries()).reduce(
      (rs, [key, value] = e) => {
        let qs = value.map(v => {
          for (let op of ['!=', '>=', '<=', '>', '<']) {
            if (v.slice(0, 2).indexOf(op) >= 0) {
              let val = v.replace(op, '')
              val = +val === +val ? `${Number(val)}` : `"${val}"`
              return `${key} ${op} ${val}`
            }
          }
          return `${key}: "/${v}/i"`
        })
        if (qs.length > 0) rs.push(`(${qs.join(' OR ')})`)
        return rs
      },
      []
    )
    return fields.length > 0 ? compile(fields.join(' AND ')) : {}
  }

  createAdvancedFilter = () => {
    let query = JSON.parse(this.state.advancedFormValue)
    // the query param does not support
    // anything but an obj in root level
    if (Array.isArray(query) || !(query instanceof Object)) throw SyntaxError
    return query
  }

  handleSimpleFormChange = (key, value) => {
    this.setState(prevState => {
      simpleFormValues: prevState.simpleFormValues.set(key, value)
    })
  }

  handleAdvancedFormChange = advancedFormValue => {
    this.setState({ advancedFormValue })
  }

  renderFields = xs => {
    let fields = Object.entries(xs)
    const rows = [...Array(Math.ceil(fields.length / 2))]
    const productRows = rows.map((row, index) =>
      fields.slice(index * 2, index * 2 + 2)
    )
    let i = 0
    const content = productRows.map((row, index) => (
      <Row gutter={5} style={{ margin: '0 2px' }} key={index}>
        {row.map(([field, path] = []) => {
          let cols = (
            <Col xs={{ span: 24 }} lg={{ span: 12 }} key={field}>
              <label>{field.replace(/_/g, ' ')}</label>
              <Select
                ref={+i ? null : r => (this.stSelect = r)}
                mode="tags"
                style={{ width: '100%', margin: '5px 0 10px' }}
                placeholder={field.replace(/_/g, ' ')}
                notFoundContent={false}
                allowClear={true}
                onChange={e => this.handleSimpleFormChange(path, e)}
                autoFocus={+i ? false : true}
                tabIndex={+i}
              />
            </Col>
          )
          i++
          return cols
        })}
      </Row>
    ))
    return <div>{content}</div>
  }

  renderCodeEditor = () => (
    <div>
      <label>
        {'Input here a JSON structured like the '}
        <a href={mongoQueryRef} target="_blank">
          {'MongoDB query format'}
        </a>
      </label>
      <TextEditor
        aceref={r => (this.ace = r)}
        mode="json"
        theme="tomorrow"
        value={this.state.advancedFormValue}
        onChange={this.handleAdvancedFormChange}
        fontSize={16}
        height={'300px'}
        width={'100%'}
        style={{ margin: '15px 0 10px' }}
        setOptions={{ showLineNumbers: false }}
      />
    </div>
  )

  render = () => (
    <Modal
      title={false}
      visible={this.props.visible}
      closable={false}
      width={'80%'}
      style={{ minWidth: 350, maxWidth: 800 }}
      okText="Filter"
      onOk={this.handleOk}
      onCancel={this.props.onCancel}
    >
      <Tabs
        defaultActiveKey={this.state.mode}
        tabPosition="top"
        onChange={this.handleModeChange}
        style={{ marginTop: -10 }}
      >
        <TabPane tab="Simple" key="simple">
          {this.state.simpleTipsVisible && (
            <Alert
              closable
              afterClose={() =>
                this.setState({ simpleTipsVisible: false }, () =>
                  localStorage.setItem('filtermodal.simpletips', false)
                )
              }
              message={
                'Each field is related by an AND operator, as tokens inside a field are related by an OR. You can input >, >=, <, <= and != to the beginning of each token for different comparison operation.'
              }
              type="info"
              showIcon
              style={{ marginBottom: 15 }}
            />
          )}
          <div
            style={{
              maxHeight: 500,
              overflowX: 'hidden',
              overflowY: 'auto',
            }}
          >
            {this.renderFields(this.props.fields)}
          </div>
        </TabPane>
        <TabPane tab="Advanced" key="advanced">
          {this.state.invalidJsonAlertVisible && (
            <Alert
              message={'You must input a valid JSON object at root level.'}
              type="error"
              showIcon
              style={{ marginBottom: 15 }}
            />
          )}
          {this.renderCodeEditor()}
        </TabPane>
      </Tabs>
    </Modal>
  )
}

export default FilterModal
