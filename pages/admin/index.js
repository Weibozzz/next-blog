import React, {Component} from 'react'
import {connect} from 'react-redux'
import Head from 'next/head'
import md5 from 'blueimp-md5';


import {
  Form, Button, Checkbox,
  Layout, Menu, Breadcrumb, Row, Col, Pagination, Input, Tabs, Table, List, Avatar, Icon, message, Modal
} from 'antd';

import {
  getAdminBlogUrl,
  getTotalUrl,
  postAdminPasswordUrl,
  getUserCommentUrl,
  postCommentUrl,
  getIpUrl,
  getViewUrl
} from '../../config';
import {
  getAdminBlogList,
  postAdminPassword,
  postComments,
  getIpList,
  getCommentsUserList,
  getViewList
} from '../../store/actions';
import {ALL, pageNum, TITLE, ADMIN_TXT, COMMON_TITLE} from "../../config/constantsData";
import MyLayout from '../../components/MyLayout';
import {REQ_ACTION} from './req-action';
import {TABLE_DATA} from './table-data';

const FormItem = Form.Item;
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
    getViewList(dispatch, getViewUrl())

    window.onscroll = () => {
      REQ_ACTION.scrollBTMLoading(this)
    }
    window.onresize = () => {
      REQ_ACTION.scrollBTMLoading(this)
    }
  }

  componentWillUnmount() {
    window.onscroll = null;
    window.onresize = null;
  }


  itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <a>Previous</a>;
    } else if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  }


  onTabChangeCallback(key) {
    this.setState({
      tabKey: key
    })
  }
  //登录
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



  render() {
    function onChange(pagination, filters, sorter) {
    }

    function onClick(pagination, filters, sorter) {
    }

    let {adminBlogData = [], totalPageData = [], searchData = [],
      viewListData={},
      getCommentsUserData: commentsUserData = [], getUserCommentsData = [],
      getCommentsData = [], ipListData = []} = this.props;
    //昨日今日浏览记录
    const {curView,yesView} = TABLE_DATA.getView(viewListData)
    //浏览记录
    const {ipColumns,ipData} = TABLE_DATA.ipData(ipListData)
    //文章
    const {columns,data} = TABLE_DATA.articleData(searchData,adminBlogData)
    //留言
    const {columnsUserComments,dataCommentsUserData} = TABLE_DATA.articleUserCommentData(getUserCommentsData,commentsUserData)

    //评论
    const {columnsAdminComments,dataAdminCommentsData} = TABLE_DATA.articleComment(getCommentsData)


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

                  <Search placeholder="input search text" onSearch={REQ_ACTION.onSearch.bind(this,this)} enterButton="Search"
                          size="large"/>
                  <div style={{background: '#fff', padding: 24, minHeight: 380}}>
                    <div className="view-date">
                      昨日访问量：{yesView} 今日访问量：{curView}
                    </div>
                    <Tabs defaultActiveKey="1" onChange={this.onTabChangeCallback.bind(this)}>
                      <TabPane tab="文章管理" key="1">
                        <Table
                          bordered={true}
                          columns={columns}
                          dataSource={data}
                          pagination={false}
                          onChange={onChange}
                          scroll={{ x: 1300 }}
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
                          total={total} itemRender={this.itemRender.bind(this)} onChange={REQ_ACTION.onChange.bind(this,this)}/>
                      </TabPane>
                      <TabPane tab="留言管理" key="2">
                        <Table
                          bordered={true}
                          columns={columnsUserComments}
                          dataSource={dataCommentsUserData}
                          pagination={false}
                          onChange={onChange}
                          scroll={{ x: 1300 }}
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
                          scroll={{ x: 1300 }}
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
                          scroll={{ x: 1300 }}
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
  const {adminBlogData, searchData, postAdminPasswordData, getUserCommentsData, getCommentsData, ipListData, getCommentsUserData,viewListData} = state
  return {
    adminBlogData,
    searchData,
    postAdminPasswordData,
    getUserCommentsData,
    getCommentsData,
    ipListData,
    getCommentsUserData,
    viewListData
  };
}
const WrappedNormalLoginForm = Form.create()(Admin);
export default connect(mapStateToProps)(WrappedNormalLoginForm)