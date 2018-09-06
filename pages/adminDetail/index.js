import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Layout,  Form,
} from 'antd';
import 'whatwg-fetch';
import Head from 'next/head';

import ArticleTitle from '../../components/ArticleTitle';
import EditArticle from '../../components/EditArticle';
import { COMMON_TITLE } from '../../config/constantsData';
import { getDetailUrl } from '../../config';
import { getArticleInfo } from '../../until';
import MyLayout from '../../components/MyLayout';

const { Content } = Layout;

class AdminDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleID: ''
    };
  }

  componentWillMount() {
    const { adminBlogDetailData = [] } = this.props;
    const { id: articleID } = adminBlogDetailData[0] || {};
    this.setState({
      articleID
    });
  }

  render() {
    // 接口
    let { adminBlogDetailData = [] } = this.props;
    const { articleID = '' } = this.state;
    const objArticleInfo = getArticleInfo(adminBlogDetailData);
    const {
      title = '',
    } = objArticleInfo;
    adminBlogDetailData = adminBlogDetailData[0] || {};


    return (
      <div className="detail">
        <Head>
          <title>
            {title}
&raquo;
            {COMMON_TITLE}
          </title>
        </Head>
        <MyLayout>
          <Content>
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
              <ArticleTitle detailArticle={adminBlogDetailData} />
              <EditArticle dataSource={Object.assign({}, adminBlogDetailData, { articleID })} />
            </div>

          </Content>
        </MyLayout>
      </div>
    );
  }
}
AdminDetail.getInitialProps = async function (context) {
  const { id } = context.query;
  const queryStrObj = { id };
  const adminBlogDetail = await fetch(getDetailUrl(queryStrObj));
  const adminBlogDetailData = await adminBlogDetail.json();


  return { adminBlogDetailData };
};
const WrappedRegistrationForm = Form.create()(AdminDetail);
export default WrappedRegistrationForm;
