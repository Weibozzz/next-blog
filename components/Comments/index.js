import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Layout, Menu, Breadcrumb, Row, Col, BackTop, Card, Form,
  Input, Tooltip, Cascader, Select, Checkbox, Button,
  AutoComplete, List, Avatar, Icon, Divider, message, Alert, Tag
} from 'antd';

import {COMMENT_IMAGES, COMMENT_TIPS} from "../../config/constantsData";
import {default_comment, DEFAULT_TAG_ARR} from "../../config/constantTag";
import MyCard from '../MyCard';
import FormComment from '../FormComment';
import {mockCommentsData} from './mockData';
import {getMyCommenData} from './until';
import './index.less'


class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoCompleteResult: [],
      articleID: ''
    }
  }


  componentWillMount() {
    const {blogData = []} = this.props;
    let {id: articleID} = blogData[0] || {};
    this.setState({
      articleID
    })
  }


  render() {
    const {dataSource = {}, commentIndex = -1} = this.props;
    let {commentsData = [], commentTitle = '发表评论', commentRow = 8} = dataSource;
    commentsData = [...default_comment, ...getMyCommenData(commentsData)];
    const sf = DEFAULT_TAG_ARR.find(v => v.user === 'sf');
    const {user, website} = sf;
    const tipsRender = <span>
      {COMMENT_TIPS} <Tag color="purple">
      <a href={website} title={user}>{user}</a>
    </Tag>
    </span>;
    return (
      <div className="comment-wrapper" id="comment">
        <Alert message={tipsRender} type="info" showIcon/>
        <h2>{commentTitle}：</h2>
        <Row>
          <Col
            sm={{span: 22, offset: 1}}
            xs={{span: 22, offset: 1}}
            lg={{span: commentRow, offset: 0}}
          >
            {
              commentIndex === -1 ? <FormComment {...this.props}></FormComment> : ''
            }

          </Col>
        </Row>
        {
          commentsData.map((v, i) => {
              let index = i % COMMENT_IMAGES.length;
              return (
                <MyCard key={i} dataSource={{index, v, i}}>
                  <FormComment {...this.props}></FormComment>
                </MyCard>
              )
            }
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {commentIndex} = state;
  return {commentIndex};
}

const WrappedRegistrationForm = Form.create()(Comments);
export default connect(mapStateToProps)(WrappedRegistrationForm);
