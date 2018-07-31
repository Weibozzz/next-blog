import React, {Component} from 'react'
import {connect} from 'react-redux'
import Head from 'next/head'
import Link from 'next/link';
import md5 from 'blueimp-md5';


import {
  Form, Button, Checkbox,
  Layout, Menu, Breadcrumb, Row, Col, Pagination, Input, Tabs, Table, List, Avatar, Icon, message, Modal
} from 'antd';

import {formatTime} from '../../until';
import {
  getAdminBlogUrl,
  getBlogUrl,
  getTotalUrl,
  postAdminPasswordUrl,
  getUserCommentUrl,
  postUserCommentUrl,
  postCommentUrl,
  getIpUrl
} from '../../config';
import {
  getAdminBlogList,
  getSearchList,
  postAdminPassword,
  postUserComments,
  postComments,
  getIpList,
  getCommentsUserList
} from '../../store/actions';
import {ALL, pageNum, TITLE, ADMIN_TXT, COMMON_TITLE} from "../../config/constantsData";
import MyLayout from '../../components/MyLayout';

const FormItem = Form.Item;
const confirm = Modal.confirm;
const TabPane = Tabs.TabPane;
const {Content} = Layout;
const Search = Input.Search;

class Admin extends Component {
  constructor() {
    super()
    this.state = {
      pageNum,
      currentPage: 1,
      inputVal: '',
      isLogin: false,
      isLoading: false,
      tabKey: '1',
      pageSize: 1,
      defaultConfirmObj: {
        title: 'Are you sure delete this article?',
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
      }
    }
  }

  componentDidMount() {
    const {dispatch} = this.props;
    const {password} = sessionStorage
    const queryStringObj = {
      type: ALL,
      num: 1,
      pageNum,
      token: password
    }
    getAdminBlogList(dispatch, getAdminBlogUrl(queryStringObj))
    postComments(dispatch, postCommentUrl(), queryStringObj)
    getIpList(dispatch, getIpUrl(queryStringObj))
    getCommentsUserList(dispatch, getUserCommentUrl(queryStringObj))

    window.onscroll = () => {
      this.scrollBTMLoading()
    }
    window.onresize = () => {
      this.scrollBTMLoading()
    }
  }

  componentWillUnmount() {
    window.onscroll = null;
    window.onresize = null;
  }

  scrollBTMLoading() {
    const {dispatch} = this.props;
    let {pageSize: num, tabKey} = this.state
    const {password} = sessionStorage;
    const queryStringObj = {
      type: ALL,
      num,
      pageNum,
      token: password
    }
    let footerDom = document.getElementsByClassName('footer-content')[0];
    let {innerHeight: windowHeight} = window;
    let {bottom} = footerDom.getBoundingClientRect();
    if (bottom - windowHeight < 1 && tabKey !== '1') {
      console.log('该请求数据了')
      let newNum = ++num;
      this.setState({
        isLoading: true,
        pageSize: newNum
      })
      let newQueryStringObj = {...queryStringObj, num: newNum};
      if (tabKey === '4') {
        //浏览记录分页
        getIpList(dispatch, getIpUrl(newQueryStringObj)).then(res => {
          if (res) {
            this.setState({
              isLoading: false
            })
          }
        })
      } else if (tabKey === '3') {
        //评论管理
        postComments(dispatch, postCommentUrl(), newQueryStringObj).then(res => {
          if (res) {
            this.setState({
              isLoading: false
            })
          }
        })
      }
    }
  }

  itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <a>Previous</a>;
    } else if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  }

  onChange(page, pageSize) {
    const {dispatch} = this.props;
    const {password} = sessionStorage;

    const queryStringObj = {
      type: ALL,
      num: page,
      pageNum,
      token: password
    }
    getAdminBlogList(dispatch, getAdminBlogUrl(queryStringObj))
  }


  onSearch(val) {
    this.setState({
      inputVal: val,
      currentPage: 1
    })

    const {dispatch} = this.props;
    let queryStringObj;
    this.setState({
      keyWard: val
    })
    if (val) {
      queryStringObj = {
        type: TITLE,
        num: 1,
        pageNum,
        wd: val
      }
    } else {
      queryStringObj = {
        type: ALL,
        num: 1,
        pageNum
      }
    }

    getSearchList(dispatch, getBlogUrl(queryStringObj))
  }

  //删除文章
  handleDelArticle(id) {
    const {dispatch} = this.props;
    const {defaultConfirmObj} = this.state;
    const {password} = sessionStorage;
    const queryStringObj = {
      type: 'del',
      num: id,
      token: password
    };
    confirm({
      ...defaultConfirmObj,
      onOk() {
        getAdminBlogList(dispatch, getAdminBlogUrl(queryStringObj)).then(res => {
          const {adminBlogData = []} = res;
          if (!adminBlogData.length) {
            message.warning('您可能没权限')
            return;
          }
          if (res) {
            message.success(`id为${id}的文章删除成功`)
          } else {
            message.error('删除失败')
          }
        })
      },
      onCancel() {
      },
    });

  }

  //删除留言
  handleDelUserComment(id) {
    const {dispatch} = this.props;
    const {defaultConfirmObj} = this.state;
    const {password} = sessionStorage;
    const queryStringObj = {
      type: 'del',
      num: id,
      token: password
    };
    confirm({
      ...defaultConfirmObj,
      onOk() {
        postUserComments(dispatch, postUserCommentUrl(), queryStringObj).then(res => {
          const {getUserCommentsData} = res;
          if (!getUserCommentsData.length) {
            message.warning('您可能没权限')
            return;
          }
          if (res) {
            message.success(`id为${id}的用户留言删除成功`)
          } else {
            message.error('删除失败')
          }
        })
      },
      onCancel() {
      },
    });

  }

  //删除评论
  handleDelAdminComment(id) {
    const {dispatch} = this.props;
    const {defaultConfirmObj} = this.state;
    const {password} = sessionStorage;
    const queryStringObj = {
      type: 'del',
      delNum: id,
      token: password
    };
    confirm({
      ...defaultConfirmObj,
      onOk() {
        postComments(dispatch, postCommentUrl(), queryStringObj).then(res => {
          const {getCommentsData} = res;
          if (!getCommentsData.length) {
            message.warning('您可能没权限')
            return;
          }
          if (res) {
            message.success(`id为${id}的用户评论删除成功`)
          } else {
            message.error('删除失败')
          }
        })
      },
      onCancel() {
      },
    });
  }

  callback(key) {
    this.setState({
      tabKey: key
    })
  }

  handleSubmit = (e) => {
    const {dispatch} = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const {password} = values;
        postAdminPassword(dispatch, postAdminPasswordUrl(), {password: md5(password)}).then(res => {
          const {postAdminPasswordData = []} = res;
          if (!postAdminPasswordData.length) {
            message.warning('密码不正确，重新输入！！！')
            return;
          }
          const {password} = postAdminPasswordData[0];
          sessionStorage.setItem('password', password)
          this.setState({
            isLogin: true
          })
          location.reload()
        })
      }
    });
  }

  //设置文章评论
  setCommentWidth(v) {
    let extend = {};
    if (v === '操作') {
      extend = {
        width: 50, render: (text, row, index) =>
          <a href="javascript:;" onClick={this.handleDelAdminComment.bind(this, row.id)}>删除</a>
      }
    }
    if (v === 'a_id') {
      extend = {
        width: 50,render: (text, row, index) =>
          <Link as={`/p/${row.a_id}`} href={`/p/${row.a_id}`}>
            <a>{text}</a>
          </Link>
      }
    }
    if (v === 'id' ) {
      extend = {width: 50}
    }
    if (v === 'user') {
      extend = {width: 80};
    }
    if (v === 'email' || v === 'website' || v === 'createTime') {
      extend = {width: 150};
    }
    if (v === 'address' || v === 'ip' || v === 'real_ip') {
      extend = {width: 100}
    }
    return {title: v, dataIndex: v, ...extend};
  }

  //设置用户留言
  setUserCommentWidth(v) {
    let extend = {};
    if (v === '操作') {
      extend = {
        width: 50, render: (text, row, index) =>
          <a href="javascript:;" onClick={this.handleDelUserComment.bind(this, row.id)}>删除</a>
      }
    }
    if (v === 'address' || v === 'ip' || v === 'real_ip' || v === 'website') {
      extend = {width: 100}
    }
    return {title: v, dataIndex: v, ...extend};
  }

  //设置文章增删改查
  setArticle(v) {
    let extend = {};
    if (v === 'title') {
      extend = {
        render: (text, row, index) =>
          <Link as={`/adminDetail/${row.id}`} href={`/adminDetail/${row.id}`}>
            <a>{text}</a>
          </Link>
      }
    }else {
      if(v==='操作'){
        extend={
           render: (text, row, index) =>
            <a href="javascript:;" onClick={this.handleDelArticle.bind(this, row.id)}>删除</a>
        }
      }
    }
    return {title: v, dataIndex: v, ...extend};
  }

  render() {
    function onChange(pagination, filters, sorter) {
    }

    function onClick(pagination, filters, sorter) {
    }

    let {adminBlogData = [], totalPageData = [], searchData = [], getCommentsUserData: commentsUserData = [], getUserCommentsData = [], getCommentsData = [], ipListData = [], dispatch} = this.props;
    //浏览记录
    const ipKeys = ipListData.map(v => ([...Object.keys(v)]));
    const ipColumns = ipKeys && ipKeys[0] ? ipKeys[0].map(v => ({
      title: v, dataIndex: v
    })) : [];
    const ipData = ipListData.map((v, i) => Object.assign({}, v, {key: i}, {createTime: formatTime(v.createTime)}))
    //文章
    if (searchData.length) {
      adminBlogData = searchData
    }
    const keys = adminBlogData.map(v => ([...Object.keys(v), '操作']));
    const columns = keys && keys[0] ? keys[0].map(v => {
      return this.setArticle(v);
    }) : [];
    const data = adminBlogData.map((v, i) => Object.assign({}, v, {key: i}, {createTime: formatTime(v.createTime)}))
    //留言
    if (getUserCommentsData.length) {
      commentsUserData = getUserCommentsData
    }
    const keysUserComments = commentsUserData.map(v => ([...Object.keys(v), '操作']));
    const columnsUserComments = keysUserComments && keysUserComments[0] ? keysUserComments[0].map(v => {
      return this.setUserCommentWidth(v);
    }) : [];
    const dataCommentsUserData = commentsUserData.map((v, i) => Object.assign({}, v, {key: i}, {createTime: formatTime(v.createTime)}))
    //评论
    const keysAdminComments = getCommentsData.map(v => ([...Object.keys(v), '操作']));
    const columnsAdminComments = keysAdminComments && keysAdminComments[0] ? keysAdminComments[0].map(v => {
      return this.setCommentWidth(v);
    }) : [];
    const dataAdminCommentsData = getCommentsData.map(
      (v, i) => Object.assign({}, v, {key: i}, {createTime: formatTime(v.createTime)})
    )

    //分页
    const {total} = totalPageData[0] || {};
    const {postAdminPasswordData = []} = this.props;
    const {getFieldDecorator} = this.props.form;
    const {isLoading} = this.state;
    return (
      <div>
        <Head>
          <title>{ADMIN_TXT}&raquo;{COMMON_TITLE}</title>
        </Head>
        <MyLayout>
          <Content>
            {
              postAdminPasswordData.length ?
                <div>

                  <Search placeholder="input search text" onSearch={this.onSearch.bind(this)} enterButton="Search"
                          size="large"/>
                  <div style={{background: '#fff', padding: 24, minHeight: 380}}>
                    <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
                      <TabPane tab="文章管理" key="1">
                        <Table
                          bordered={true}
                          columns={columns}
                          dataSource={data}
                          pagination={false}
                          onChange={onChange}
                          onRow={(record) => {
                            return {
                              onClick: () => {
                              },       // 点击行
                              onMouseEnter: () => {
                              },  // 鼠标移入行
                            };
                          }}
                        />
                        <Pagination

                          defaultCurrent={this.state.currentPage}
                          total={total} itemRender={this.itemRender.bind(this)} onChange={this.onChange.bind(this)}/>
                      </TabPane>
                      <TabPane tab="留言管理" key="2">
                        <Table
                          bordered={true}
                          columns={columnsUserComments}
                          dataSource={dataCommentsUserData}
                          pagination={false}
                          onChange={onChange}
                          onRow={(record) => {
                            return {
                              onClick: () => {
                              },       // 点击行
                              onMouseEnter: () => {
                              },  // 鼠标移入行
                            };
                          }}
                        />
                      </TabPane>
                      <TabPane tab="评论管理" key="3">

                        <Table
                          bordered={true}
                          columns={columnsAdminComments}
                          dataSource={dataAdminCommentsData}
                          pagination={false}
                          onChange={onChange}
                          onRow={(record) => {
                            return {
                              onClick: () => {
                              },       // 点击行
                              onMouseEnter: () => {
                              },  // 鼠标移入行
                            };
                          }}
                        />
                      </TabPane>
                      <TabPane tab="浏览记录" key="4">

                        <Table
                          bordered={true}
                          columns={ipColumns}
                          dataSource={ipData}
                          pagination={false}
                          onChange={onChange}
                          onRow={(record) => {
                            return {
                              onClick: () => {
                              },       // 点击行
                              onMouseEnter: () => {
                              },  // 鼠标移入行
                            };
                          }}
                        />
                      </TabPane>
                    </Tabs>
                    {
                      isLoading ? <div style={{textAlign: 'center'}} className="loading-admin">loading……</div>
                        : ''
                    }

                  </div>

                </div>
                :
                <div style={{background: '#fff', padding: 24, minHeight: 380}}>
                  <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                      {getFieldDecorator('userName', {
                        rules: [{required: true, message: 'Please input your username!'}],
                      })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password!'}],
                      })(
                        <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                               placeholder="Password"/>
                      )}
                    </FormItem>
                    <FormItem>
                      <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                      </Button>
                    </FormItem>
                  </Form>

                </div>
            }
          </Content>
        </MyLayout>
      </div>
    )
  }
}

Admin.getInitialProps = async function () {
  let queryTotalString = {type: ALL};
  const totalPage = await fetch(getTotalUrl(queryTotalString))
  const totalPageData = await totalPage.json()

  return {totalPageData}
}
const mapStateToProps = state => {
  const {adminBlogData, searchData, postAdminPasswordData, getUserCommentsData, getCommentsData, ipListData, getCommentsUserData} = state
  return {
    adminBlogData,
    searchData,
    postAdminPasswordData,
    getUserCommentsData,
    getCommentsData,
    ipListData,
    getCommentsUserData
  };
}
const WrappedNormalLoginForm = Form.create()(Admin);
export default connect(mapStateToProps)(WrappedNormalLoginForm)