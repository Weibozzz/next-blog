import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row, Col, Form,
} from 'antd';

import { COMMENT_IMAGES } from "../../config/constantsData";
import { default_comment } from "../../config/constantTag";
import MyCard from '../MyCard';
import FormComment from '../FormComment';
import { getMyCommenData } from './until';
import './index.less';


class Comments extends Component {
  render() {
    const { dataSource = {}, commentIndex = -1 } = this.props;
    const { commentTitle = '发表评论', commentRow = 8 } = dataSource;
    let { commentsData = [] } = dataSource;
    commentsData = [...default_comment, ...getMyCommenData(commentsData)];
    return (
      <div className="comment-wrapper" id="comment">
        <h2>
          {commentTitle}
          ：
        </h2>
        <Row>
          <Col
            sm={{ span: 22, offset: 1 }}
            xs={{ span: 22, offset: 1 }}
            lg={{ span: commentRow, offset: 0 }}
          >
            {
              commentIndex === -1 ? <FormComment {...this.props} /> : ''
            }

          </Col>
        </Row>
        {
          commentsData.map((v, i) => {
            const index = i % COMMENT_IMAGES.length;
            return (
              <MyCard key={v.id} dataSource={{ index, v, i }}>
                <FormComment {...this.props} />
              </MyCard>
            );
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { commentIndex } = state;
  return { commentIndex };
};

const WrappedRegistrationForm = Form.create()(Comments);
export default connect(mapStateToProps)(WrappedRegistrationForm);
