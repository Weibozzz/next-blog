import React, {Component} from 'react'
import {Layout, Menu, Breadcrumb, Row, Col, List, Avatar, Icon, Pagination, Alert, Input, Button, Select} from 'antd'
import {connect} from 'react-redux'
import Head from 'next/head';

import EditArticle from '../../components/EditArticle';
import {POST_ARTICLE_TXT,COMMON_TITLE,pageNum,ALL} from '../../config/constantsData';
import MyLayout from '../../components/MyLayout';
import {getBlogUrl} from '../../config';

const {Content} = Layout;



class PostArticle extends Component {
  render() {
    const {pageBlogData} = this.props;
    return (
      <div>
        <Head>
          <title>{POST_ARTICLE_TXT}&raquo;{COMMON_TITLE}</title>
        </Head>
        <div className="post-article">
          <MyLayout>
            <Content >
              <EditArticle sourceData={pageBlogData}/>
            </Content>
          </MyLayout>
        </div>
      </div>
    );
  }
}
//得到文章最大id
PostArticle.getInitialProps = async function (context) {
  let queryStringObj = {
    type: ALL,
    num: 1,
    pageNum
  }
  const pageBlog = await fetch(getBlogUrl(queryStringObj))
  const pageBlogData = await pageBlog.json()

  return {pageBlogData}
}
export default connect()(PostArticle)
