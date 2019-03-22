import React, { Component } from 'react'
import brace from 'brace'
import AceEditor from 'react-ace'

import 'brace/mode/json'
import 'brace/mode/javascript'
import 'brace/theme/tomorrow'
import 'brace/theme/monokai'

class TextEditor extends Component {
  componentDidMount = () => {
    if (this.props.aceref) this.props.aceref(this.refs.ace)
  }

  render = () => (
    <AceEditor
      {...this.props}
      ref="ace"
      editorProps={{ $blockScrolling: Infinity }}
      className={'ant-input'}
    />
  )
}

export default TextEditor
