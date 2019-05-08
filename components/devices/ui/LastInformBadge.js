import React, { Component } from 'react'
import { Badge } from 'antd'
import moment from 'moment'

class LastInformBadge extends Component {
  constructor (props) {
    super(props)
    this.state = { status: this.badgeStatus(), text: this.fromNow() }
  }

  tick = () =>
    this.setState({ status: this.badgeStatus(), text: this.fromNow() })

  componentDidMount = () =>
    this.setState({ interval: setInterval(this.tick, 30000) })

  componentWillUnmount = () => clearInterval(this.state.interval)

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (prevProps.datetime !== this.props.datetime) {
      this.tick()
    }
  }

  badgeStatus = () => {
    const secs = moment().diff(this.props.datetime, 'seconds')
    const informTime = this.props.informInterval
    let status = 'default'
    if (secs <= 300) status = 'success'
    if (secs >= (informTime || 43200)) status = 'warning'
    if (secs >= (informTime ? informTime * 2 : 86400)) status = 'error'
    return status
  }

  fromNow = () => moment(this.props.datetime).fromNow()

  render = () => (
    <span title={this.props.datetime}>
      <Badge status={this.state.status} text={this.state.text}/>
    </span>
  )
}

export default LastInformBadge
