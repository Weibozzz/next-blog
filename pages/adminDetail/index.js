import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
  Layout, Menu, Breadcrumb, Row, Col, BackTop, Card, Form,
  Input, Tooltip, Cascader, Select, Checkbox, Button,
  AutoComplete, List, Avatar, Icon, Divider
} from 'antd';
import 'whatwg-fetch'
import Head from 'next/head';

import ArticleTitle from '../../components/ArticleTitle';
import EditArticle from '../../components/EditArticle';
import {COMMON_TITLE} from '../../config/constantsData';
import {getDetailUrl} from '../../config';
import {getArticleInfo} from '../../until';
import MyLayout from '../../components/MyLayout';

const {Content} = Layout;

class AdminDetail extends Component {
  constructor(props) {
    super(props);
    this.state={
      autoCompleteResult:[1,2],
      articleID:''
    }
  }
  componentWillMount(){
    const {adminBlogDetailData = []} = this.props;
    let {id:articleID} = adminBlogDetailData[0] || {};
    this.setState({
      articleID
    })
  }
  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({autoCompleteResult});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {dispatch} = this.props;
    let {articleID:id} = this.state;
    if(!id){
      return;
    }
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const {comment,email,nickname,website} = values;

      }
    });
  }
  render() {
    //接口
    let {adminBlogDetailData=[]} = this.props;
    let {articleID=''} = this.state;
    const objArticleInfo = getArticleInfo(adminBlogDetailData)
    const {title='',url='',short='',type=''} = objArticleInfo
    adminBlogDetailData=adminBlogDetailData[0] || {}


    return (
      <div className="detail">
        <Head>
          <title>{title}&raquo;{COMMON_TITLE}</title>
        </Head>
        <MyLayout>
          <Content >
            <div style={{background: '#fff', padding: 24, minHeight: 380}}>
              <ArticleTitle detailArticle={adminBlogDetailData}/>
              <EditArticle dataSource={Object.assign({},adminBlogDetailData,{articleID})}/>
            </div>

          </Content>
        </MyLayout>
      </div>
    );
  }
}
AdminDetail.getInitialProps = async function (context) {
  try {
    const {id} = context.query
    let queryStrObj = {id};
    const adminBlogDetail = await fetch(getDetailUrl(queryStrObj))
    const adminBlogDetailData = await adminBlogDetail.json()


    return {adminBlogDetailData}
  } catch (error) {
    return {};
  }
}
const WrappedRegistrationForm = Form.create()(AdminDetail);
export default WrappedRegistrationForm;
