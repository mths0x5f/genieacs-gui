import React, { Component } from 'react'
import { Badge } from 'antd'
import moment from 'moment'

class LastInformBadge extends Component {
  constructor(props) {
    super(props)
    this.state = { status: this.badgeStatus(), text: this.fromNow() }
  }

  tick = () =>
    this.setState({ status: this.badgeStatus(), text: this.fromNow() })

  componentDidMount = () =>
    this.setState({ interval: setInterval(this.tick, 40000) })

  componentWillUnmount = () => clearInterval(this.state.interval)

  badgeStatus = () => {
    let secs = moment().diff(this.props.datetime, 'seconds')
    let informTime = this.props.informInterval
    let status = 'default'
    if (secs <= 300) status = 'success'
    if (secs >= (informTime ? informTime : 43200)) status = 'warning'
    if (secs >= (informTime ? informTime * 2 : 86400)) status = 'error'
    return status
  }

  fromNow = () => moment(this.props.datetime).fromNow()

  render = () => <Badge status={this.state.status} text={this.state.text} />
}

export default LastInformBadge
