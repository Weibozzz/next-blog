import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Layout, Menu, Breadcrumb, Row, Col, BackTop, Card, Form,
  Input, Tooltip, Cascader, Select, Checkbox, Button, Spin,
  AutoComplete, List, Avatar, Icon, Divider, message, Tag, Alert
} from 'antd';

import Loading from '../loading'
import {regUrl, real_ip} from "../../until";
import {getCookie, setCookie} from "../../until/cookie";
import {postComments, postUserComments, setAnswerId, setCommentIndex} from "../../store/actions";
import {postCommentUrl, postUserCommentUrl} from "../../config";
import {COMMENT_TIPS, COMMENT_LIMIT, commentPlaceHolder, BILILI_ADDRESS} from "../../config/constantsData";
import {DEFAULT_TAG_ARR} from "../../config/constantTag";
import {tailFormItemLayout, tailCommentsTip, formItemLayout} from './constants';

const FormItem = Form.Item;
const {TextArea} = Input;
const AutoCompleteOption = AutoComplete.Option;

class FormComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      nickname: '',
      email: '',
      website: '',
      autoCompleteResult: [],
    }
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.cn', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({autoCompleteResult});
  }
  // 存储 cookie
  handleSetCookie(nickname,email,website){
    setCookie('nickname', nickname, 180)
    setCookie('email', email, 180)
    setCookie('website', website, 180)
  }
  // 获取 cookie
  handleGetCookie(){
    return {
      nickname:getCookie('nickname') || '',
      email: getCookie('email') || '',
      website: getCookie('website') || ''
    };
  }
  componentDidMount(){
    this.setState(this.handleGetCookie())
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {dispatch, dataSource = {}, answerId} = this.props;
    const { password } = sessionStorage;
    const {commentsData: commentsDataOrigin = [], articleID: id, isUserSubmit = false} = dataSource;
    if (!id && !isUserSubmit) {
      return;
    }
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        const {comment = '', email = '', nickname = '', website = ''} = values;
        if (website !== '' && !regUrl.test(website)) {
          message.warning('url不正确,示例："http://www.xxx.com"')
          return;
        }
        if (nickname.length < 2 || comment.length < 2) {
          message.warning('用户名或者评论内容过少')
          return;
        }
        if (comment.length > COMMENT_LIMIT.value) {
          message.warning(COMMENT_LIMIT.key)
          return;
        }

        this.setState({
          isLoading: true
        })
        let realIp = ''
        try {
          realIp = await real_ip()
        } catch (err) {
        }
        let queryParamsObj = {};
        try {
          queryParamsObj = {real_ip: realIp, ip: returnCitySN['cip'], address: returnCitySN['cname']};
        } catch (err) {
        }
        const isExist = commentsDataOrigin.findIndex(v => {
          const {user, name} = v;
          return ((user || name) === nickname) && ((user || name) !== '刘伟波');
        }) !== -1;
        if (isExist && !answerId) {
          message.warning('用户名已存在')
          return;
        }
        const queryStringComment = {
          id,
          comment: comment.trim(),
          email: email.trim(),
          nickname: nickname.trim(),
          website: website.trim(),
          name: nickname.trim(),
          token: password,
          answerId,
          ...queryParamsObj
        }
        //如果是详情页提交它，如果是关于我，则不用关心id
        isUserSubmit ?
          postUserComments(dispatch, postUserCommentUrl(), queryStringComment).then(res => {
            const {getUserCommentsData} = res;
            if (getUserCommentsData.length) {
              this.handleSetCookie(nickname,email,website)
              message.success(`留言发表成功，感谢支持！`);
            }else {
              message.warning('您可能没权限');
            }
            this.setState({
              isLoading: false
            })
          })
          :
          postComments(dispatch, postCommentUrl(), queryStringComment).then(res => {
            if ((res.getCommentsData.length)) {
              this.handleSetCookie(nickname,email,website)
              message.success(`评论发表成功，感谢支持！`);
            }else {
              message.warning('您可能没权限');
            }
            this.setState({
              isLoading: false
            })
          })

        setCommentIndex(dispatch, -1)
        setAnswerId(dispatch, '')
      }
    });
  }

  render() {
    const {dataSource = {}} = this.props;
    const {commentBtnMsg = '提交评论'} = dataSource;
    const {nickname,email,website: commentWebsite} = this.state
    const {autoCompleteResult, isLoading} = this.state;
    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));
    const {getFieldDecorator} = this.props.form;
    const sf = DEFAULT_TAG_ARR.find(v => v.user === 'segmentfault');
    const {user, website} = sf;
    const tipsRender = <span>
      {COMMENT_TIPS()}
    </span>;
    return <div>
      {
        isLoading &&  <Loading></Loading>
      }
      <Row>
        <Col {...tailCommentsTip}>
          <Alert message={tipsRender} type="info" showIcon/>
        </Col>
      </Row>
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              Nickname&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o"/>
              </Tooltip>
            </span>
          )}
        >
          {getFieldDecorator('nickname', {
            initialValue: nickname,
            rules: [{
              required: true,
              max: 15,
              whitespace: true
            }],
          })(
            <Input
              title="用户名"
              placeholder="用户名"/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="E-mail"
        >
          {getFieldDecorator('email', {
            initialValue: email,
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: false, message: 'Please input your E-mail!',
            }],
          })(
            <Input
              title="不会被公开，可第一时间接收通知"
              placeholder="不会被公开，可第一时间接收通知"/>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Website"
        >
          {getFieldDecorator('website', {
            initialValue: commentWebsite,
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
            rules: [{
              required: true, message: 'Please input your comment!',
            }],
          })(
            <TextArea
              rows={6}
              title={commentPlaceHolder}
              placeholder={commentPlaceHolder}/>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">{commentBtnMsg}</Button>
        </FormItem>
      </Form>
    </div>

  }
}

const mapStateToProps = state => {
  const {answerId} = state;
  return {answerId};
}
const WrappedRegistrationForm = Form.create()(FormComment);
export default connect(mapStateToProps)(WrappedRegistrationForm);
