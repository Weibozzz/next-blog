import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Layout, Menu, Breadcrumb, Row, Col, BackTop, Card, Form,
  Input, Tooltip, Cascader, Select, Checkbox, Button,
  AutoComplete, List, Avatar, Icon, Divider, message
} from 'antd';

import {COMMENT_IMAGES} from "../../config/constantsData";
import MyCard from '../MyCard';
import FormComment from '../FormComment';
import {mockCommentsData} from './mockData';
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

    commentsData = mockCommentsData
    return (
      <div className="comment-wrapper" id="comment">
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