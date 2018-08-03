import React, {Component} from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';
import {
  Layout, Menu, Breadcrumb, Row, Col, BackTop, Card, Form,
  Input, Tooltip, Cascader, Select, Checkbox, Button,
  AutoComplete, List, Avatar, Icon, Divider, message
} from 'antd';

import {formatTime, regUrl} from "../../until";
import {COMMENT_IMAGES} from "../../config/constantsData";
import {setCommentIndex} from '../../store/actions';

class MyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  onFormActive(index){
    const {dispatch} = this.props;
    setCommentIndex(dispatch,index)
  }
  render() {
    const {dataSource = {}, children = {},commentIndex=-1} = this.props;
    const {index, v, i} = dataSource
    return <Card
      className="css-move-top"
      bodyStyle={{background: "#f8f8f8"}}
      key={i} title={
      <span>
                  {
                    v.website && regUrl.test(v.website) ?
                      <Link href={v.website}>
                        <a style={{color: '#34538b', fontWeight: 'bold'}}>{v.user || v.name}</a>
                      </Link>
                      :
                      <span style={{color: '#000', fontWeight: 'bold'}}>{v.user || v.name}</span>
                  }
        说道：

                    </span>
    }
      extra={<a href="javascript:;">{formatTime(v.createTime)}</a>}>
      <p className="msg-p">{v.msg}</p>
      <img src={COMMENT_IMAGES[index]} alt=""/>
      <div><a onClick={this.onFormActive.bind(this,i)} href="javascript:;">回复</a></div>
      <div className="form-active">
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