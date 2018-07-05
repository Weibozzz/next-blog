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
import {COMMON_TITLE} from '../../config/constantsData';
import {getDetailUrl} from '../../config';
import {getArticleInfo} from '../../until';

const {Content} = Layout;

const FormItem = Form.Item;
const { TextArea } = Input;
const AutoCompleteOption = AutoComplete.Option;
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
        console.log('Received values of form: ', values);

        console.log({id,comment,email,nickname,website})

      }
    });
  }
  render() {
    //接口
    console.log(this.props)
    let {adminBlogDetailData=[]} = this.props;
    const objArticleInfo = getArticleInfo(adminBlogDetailData)
    adminBlogDetailData=adminBlogDetailData[0] || {}

    //表单
    const {getFieldDecorator} = this.props.form;
    const {autoCompleteResult} = this.state;

    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 8},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));
    return (
      <div className="detail">
        <Head>
          <title>{COMMON_TITLE}</title>
        </Head>
        <Layout>
          <Content style={{padding: '0 50px'}}>
            <div style={{background: '#fff', padding: 24, minHeight: 380}}>
              <Form onSubmit={this.handleSubmit}>
                <FormItem
                  {...formItemLayout}
                  label={(
                    <span>
              Nickname&nbsp;
                      <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
                  )}
                >
                  {getFieldDecorator('文章标题', {
                    rules: [{ required: true, message: 'Please input 文章标题!', whitespace: true }],
                    initialValue:objArticleInfo.title
                  })(
                    <Input />
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="原文url地址"
                >
                  {getFieldDecorator('url', {
                    rules: [{
                      type: 'email', message: 'The input is not valid url!',
                    }, {
                      required: false, message: 'Please input your url!',
                    }],
                    initialValue:objArticleInfo.url
                  })(
                    <Input/>
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="Website"
                >
                  {getFieldDecorator('website', {
                    rules: [{required: false, message: 'Please input website!'}],
                  })(
                    <AutoComplete
                      dataSource={websiteOptions}
                      onChange={this.handleWebsiteChange}
                      placeholder="website"
                    >
                      <Input/>
                    </AutoComplete>
                  )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="简短介绍"
                >
                  {getFieldDecorator('short', {
                    rules: [ {
                      required: false, message: 'Please input your E-mail!',
                    }],
                    initialValue:objArticleInfo.short
                  })(
                    <TextArea/>
                  )}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">提交评论</Button>
                </FormItem>
              </Form>
              <ArticleTitle detailArticle={adminBlogDetailData}/>
              <div>admindetail</div>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}
AdminDetail.getInitialProps = async function (context) {
  const {id} = context.query
  console.log('admin id',id)
  let queryStrObj = {id};
  const adminBlogDetail = await fetch(getDetailUrl(queryStrObj))
  const adminBlogDetailData = await adminBlogDetail.json()


  return {adminBlogDetailData}
}
const WrappedRegistrationForm = Form.create()(AdminDetail);
export default WrappedRegistrationForm;