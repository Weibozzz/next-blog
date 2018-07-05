import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
  Layout, Menu, Breadcrumb, Row, Col, BackTop, Card, Form,
  Input, Tooltip, Cascader, Select, Checkbox, Button,
  AutoComplete, List, Avatar, Icon, Divider
} from 'antd';
import 'whatwg-fetch'
import Head from 'next/head';
import Link from 'next/link';

import {formatTime, getHtml, OldTime} from '../../until';
import Header from '../../components/Header';
import ArticleTitle from '../../components/ArticleTitle';
import PrevNextPage from '../../components/PrevNextPage';
import Comments from '../../components/Comments';

import {getDetailUrl, getCommentsUrl,postCommentUrl,getLastIdUrl,getNextIdUrl} from '../../config';
import {postComments} from '../../store/actions';
import {COMMON_TITLE} from '../../config/constantsData';

const {Content} = Layout;

const FormItem = Form.Item;
const { TextArea } = Input;
const AutoCompleteOption = AutoComplete.Option;

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state={
      autoCompleteResult:[1,2],
      articleID:''
    }
  }
  componentWillMount(){
    const {blogData = []} = this.props;
    let {id:articleID} = blogData[0] || {};
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

        let {articleID} = this.state;
        const queryStringComment = {
          id:articleID,
          comment,
          email,
          nickname,
          website
        }
        postComments(dispatch,postCommentUrl(),queryStringComment)
      }
    });
  }
  render() {
    //接口
    console.log(this.props)
    let {blogData = [], commentsData = [],getCommentsData=[],lastIdData=[],nextIdData=[]} = this.props;
    let {articleID} = this.state;
    const {content = '', createTime = '',title='',url=''} = blogData[0] || {};

    commentsData=[...commentsData,...getCommentsData]
      .filter(v=>v.a_id===articleID)
      .sort((a,b)=>b.createTime-a.createTime)


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
          <title>{title}{COMMON_TITLE}</title>
        </Head>
        <Header/>
        <Layout>
          <Content style={{padding: '0 50px'}}>
            <div style={{background: '#fff', padding: 24, minHeight: 380}}>
              <ArticleTitle detailArticle={blogData[0]}/>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    createTime > OldTime ?
                      marked(getHtml(decodeURIComponent(content), createTime), {breaks: true})
                      : getHtml(decodeURIComponent(content), createTime)
                }}
              ></div>
              <PrevNextPage dataSource={{url,lastIdData,nextIdData}}></PrevNextPage>
            </div>
            {/*<div className="comment-wrapper">
              <h2>发表评论：</h2>
              <Row>
                <Col span={8}>
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
                      {getFieldDecorator('nickname', {
                        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                      })(
                        <Input />
                      )}
                    </FormItem>
                    <FormItem
                      {...formItemLayout}
                      label="E-mail"
                    >
                      {getFieldDecorator('email', {
                        rules: [{
                          type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                          required: false, message: 'Please input your E-mail!',
                        }],
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
                      label="comment"
                    >
                      {getFieldDecorator('comment', {
                        rules: [ {
                          required: true, message: 'Please input your E-mail!',
                        }],
                      })(
                        <TextArea/>
                      )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                      <Button type="primary" htmlType="submit">提交评论</Button>
                    </FormItem>
                  </Form>
                </Col>
              </Row>
              {
                commentsData.map((v, i) =>
                  (
                    <Card
                      bodyStyle={{background: "#f8f8f8"}}
                      key={i} title={
                      <span>
                       <span style={{color: '#34538b', fontWeight: 'bold'}}>{v.user}</span>
                        说道：
                    </span>
                    }
                      extra={<a href="javascript:;">{formatTime(v.createTime)}</a>}>
                      <p>{v.msg}</p>
                    </Card>
                  )
                )
              }
            </div>*/}
            <Comments dataSource={{commentsData,articleID}}></Comments>
          </Content>
        </Layout>
      </div>
    );
  }
}

Detail.getInitialProps = async function (context) {
  const {id} = context.query
  let queryStrObj = {id};
  const blog = await fetch(getDetailUrl(queryStrObj))
  const comments = await fetch(getCommentsUrl(queryStrObj))
  const lastId = await fetch(getLastIdUrl(queryStrObj))
  const nextId = await fetch(getNextIdUrl(queryStrObj))

  const blogData = await blog.json()
  const commentsData = await comments.json()
  let lastIdData ,nextIdData
  try {
    lastIdData = await lastId.json()
  } catch (e) {
    lastIdData = []
  }
  try {
    nextIdData = await nextId.json()
  } catch (e) {
    nextIdData =[]
  }


  return {blogData, commentsData,lastIdData,nextIdData}
}
const mapStateToProps = state => {
  console.log(state)
  const {getCommentsData} = state
  return {getCommentsData};
}
const WrappedRegistrationForm = Form.create()(Detail);
export default connect(mapStateToProps)(WrappedRegistrationForm);