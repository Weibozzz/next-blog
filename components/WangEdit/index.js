import React, { Component } from 'react';
import E from 'wangeditor'

class WangEdit extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editorContent: ''
    }
  }

  componentDidMount() {
    const {originContent=''} = this.props;
    const elem = this.refs.editorElem
    const editor = new E(elem)
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.onchange = html => {
      this.setState({
        editorContent: html
      })
    }
    editor.create()
    editor.txt.html(originContent)
  }
  clickHandle() {
    alert(this.state.editorContent)
  }
  render() {
    return (
      <div className="wang-edit">
        <div ref="editorElem" style={{textAlign: 'left'}}>
        </div>

        <button onClick={this.clickHandle.bind(this)}>获取内容</button>
      </div>
    );
  }
}

export default WangEdit;
