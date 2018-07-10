import React,{Component} from 'react';
import {connect} from 'react-redux';
import Link from 'next/link';
import {
  Layout, Menu, Breadcrumb, Row, Col, BackTop, Card, Form,
  Input, Tooltip, Cascader, Select, Checkbox, Button,
  AutoComplete, List, Avatar, Icon, Divider,message
} from 'antd';

import {formatTime,regUrl} from "../../until";
import {postComments} from "../../store/actions";
import {postCommentUrl} from "../../config";


//表单定义
const FormItem = Form.Item;
const { TextArea } = Input;
const AutoCompleteOption = AutoComplete.Option;

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


class Comments extends Component {
  constructor(props) {
    super(props);
    this.state={
      autoCompleteResult:[],
      articleID:''
    }
  }
  componentWillMount(){
    const {blogData = []} = this.props;
    console.log('components comments',this.props)
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
      autoCompleteResult = ['.com','.cn', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({autoCompleteResult});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {dispatch,dataSource={}} = this.props;
    const {articleID:id} = dataSource;
    if(!id){
      return;
    }
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const {comment,email,nickname,website} = values;
        if(website!==''&&!regUrl.test(website)){
          message.warning('url不正确,示例："http://www.xxx.com"')
          return ;
        }
        const queryStringComment = {
          id,
          comment,
          email,
          nickname,
          website
        }
        postComments(dispatch,postCommentUrl(),queryStringComment).then(res=>{
          if(res){
            message.success(`评论发表成功`);
          }
        })
      }
    });
  }
  render(){
    const {dataSource={}} = this.props;
    const {commentsData=[]} = dataSource;
    //表单
    const {getFieldDecorator} = this.props.form;
    const {autoCompleteResult} = this.state;
    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));
    return (
      <div className="comment-wrapper">
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
                  <Input
                    title="用户名"
                    placeholder="用户名" />
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

                  <Input
                    title="不会被公开"
                    placeholder="不会被公开"/>
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
                    placeholder='SEO推广 示例："http://xxx.com"'
                  >
                    <Input
                      title='SEO推广 示例："http://xxx.com"'/>
                  </AutoComplete>
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="comment"
              >
                {getFieldDecorator('comment', {
                  rules: [ {
                    required: true, message: 'Please input your comment!',
                  }],
                })(
                  <TextArea
                    title="来吐槽"
                    placeholder="来吐槽"/>
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
                  {
                    v.website?
                      <Link href={v.website} >
                        <a style={{color: '#34538b', fontWeight: 'bold'}}>{v.user}</a>
                      </Link>
                      :
                      <span style={{color: '#000', fontWeight: 'bold'}}>{v.user}</span>
                  }
                        说道：
                    </span>
              }
                extra={<a href="javascript:;">{formatTime(v.createTime)}</a>}>
                <p>{v.msg}</p>
              </Card>
            )
          )
        }
      </div>
    )
  }
}
const WrappedRegistrationForm = Form.create()(Comments);
export default connect()(WrappedRegistrationForm);