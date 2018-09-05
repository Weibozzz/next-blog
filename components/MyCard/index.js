import React, {Component} from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';
import {
  Layout, Menu, Breadcrumb, Row, Col, BackTop, Card, Form,
  Input, Tooltip, Cascader, Select, Checkbox, Button,
  AutoComplete, List, Avatar, Icon, Divider, message
} from 'antd';
import marked from 'marked'
import hljs from 'highlight.js';

import {formatTime, getHtml, regUrl} from "../../until";
import {COMMENT_IMAGES} from "../../config/constantsData";
import {setCommentIndex,setAnswerId} from '../../store/actions';
import {qiniuyun_cdn_icon_i} from '../../config/qiniuyun_cdn';
import './index.less'
import {markdownConfig} from "../../config/markdown";

const {options,config} = markdownConfig
hljs.configure(config)
marked.setOptions({
  highlight: (code) => hljs.highlightAuto(code).value,
  ...options
});
class MyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onFormActive(index,answerId){
    const {dispatch} = this.props;
    setCommentIndex(dispatch,index)
    setAnswerId(dispatch,answerId)
  }
  getUserReactDom(v){
    return v.website && regUrl.test(v.website) ?
      <Link href={v.website}>
        <a className="link-comment-user" style={{color: '#017E66', fontWeight: 'bold'}}>{v.user || v.name}</a>
      </Link>
      :
      <span style={{color: '#000', fontWeight: 'bold'}}>{v.user || v.name}</span>;
  }
  isAuth(v){
    return (v.user || v.name)==='刘伟波'?<span style={{marginLeft:5,marginRight:10}} className="author-comment">作者</span>:'';
  }
  render() {
    const {dataSource = {}, children = {},commentIndex=-1} = this.props;
    const {index, v, i} = dataSource
    const markHtml = marked(getHtml(v.msg,v.createTime))
    return <Card
      className="css-move-top"
      bodyStyle={{background: "#f8f8f8"}}
      key={i} title={
      <span>
                  {
                    this.getUserReactDom(v)
                  }
        {this.isAuth(v)}
        说道：

                    </span>
    }
      extra={<a href="javascript:;">{formatTime(v.createTime)}</a>}>
      <div className="msg-p">
        <div dangerouslySetInnerHTML={{__html:markHtml}}></div>
      </div>
      <div className="icon-comment">
        <div className="icon-posi"><img src={(v.user || v.name)==='刘伟波'?qiniuyun_cdn_icon_i.i:COMMENT_IMAGES[index]} alt=""/></div>
      </div>
      {
        v.id!==-1? <div><a onClick={this.onFormActive.bind(this,i,v.id)} href="javascript:;">回复</a></div>:''
      }

      <div className="form-active">
        {
          v.answerArr?<ul className="answer-wrapper-ul">
            {
              v.answerArr.map((s,k)=>(
                <li key={k}>
                  <div dangerouslySetInnerHTML={{__html:marked(getHtml(s.msg))}}></div>
                    — {this.getUserReactDom(s)}
                  {this.isAuth(s)}
                  <span className="time">{formatTime(s.createTime)}</span>
                </li>
              ))
            }
          </ul>:''
        }
        {commentIndex===i?children:''}
      </div>
    </Card>
    ;
  }
}
const mapStateToProps = state => {
  const {commentIndex} = state;
  return {commentIndex};
}

export default connect(mapStateToProps)(MyCard);
