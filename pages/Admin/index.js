import React,{Component} from 'react'
import {connect} from 'react-redux'
import Head from 'next/head'
import Link from 'next/link';


import {Layout, Menu, Breadcrumb, Row, Col, Pagination, Input,Tabs,Table,List, Avatar, Icon} from 'antd';

import Header from '../../components/Header';
import {formatTime} from '../../until';
import {getAdminBlogUrl, getBlogUrl, getTotalUrl} from '../../config';
import {getAdminBlogList, getSearchList} from '../../store/actions';
import {ALL, pageNum, TITLE} from "../../config/constantsData";


const TabPane = Tabs.TabPane;
const {Content} = Layout;
const Search = Input.Search;
class Admin extends Component {
  constructor() {
    super()
    this.state = {
      pageNum: 10,
      currentPage: 1,
      inputVal: ''
    }
  }

  componentWillMount() {
    const {dispatch} = this.props;
    const queryStringObj = {
      type:ALL,
      num:1,
      pageNum
    }
    getAdminBlogList(dispatch, getAdminBlogUrl(queryStringObj))
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

    const queryStringObj = {
      type:ALL,
      num:page,
      pageNum
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
  handleDelComment(id){
  }
  handleDelArticle(id){

  }
  render () {
    function onChange(pagination, filters, sorter) {
      console.log('params', pagination, filters, sorter);
    }

    function onClick(pagination, filters, sorter) {
      console.log('onClick', pagination, filters, sorter);
    }

    function callback(key) {
      console.log(key);
    }

    let {adminBlogData=[],totalPageData=[],searchData=[]} = this.props
    if (searchData.length) {
      adminBlogData = searchData
    }
    const keys = adminBlogData.map(v => ([...Object.keys(v),'操作']));
    const columns = keys && keys[0] ? keys[0].map(v => (
      v === 'title' ?
        {
          title: v, dataIndex: v, render: (text, row, index) =>
          <Link href={`/AdminDetail/${row.id}`}>
            <a>{text}</a>
          </Link>
        } :
        v==='操作'?
          {
            title: v, dataIndex: v, render: (text, row, index) =>
            <a href="javascript:;" onClick={this.handleDelArticle.bind(this,row.id)} >删除</a>
          }:
          {title: v, dataIndex: v}
    )) : [];
    const data = adminBlogData.map((v, i) => Object.assign({}, v, {key: i}, {createTime: formatTime(v.createTime)}))
    const {total} = totalPageData[0] || {}
    return (
      <div>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <link rel='stylesheet' href='/_next/static/style.css' />
          <title>admin</title>
        </Head>
        <Header/>
        <Layout>
          <Content style={{padding: '0 50px'}}>
            <Search placeholder="input search text" onSearch={this.onSearch.bind(this)} enterButton="Search"
                    size="large"/>
            <div style={{background: '#fff', padding: 24, minHeight: 380}}>
              <Tabs defaultActiveKey="1" onChange={callback}>
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
                          console.log(record)
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

                </TabPane>
                <TabPane tab="浏览记录" key="3">Content of Tab Pane 3</TabPane>
              </Tabs>
            </div>
          </Content>
        </Layout>
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
  console.log(state)
  const {adminBlogData,searchData} = state
  return {adminBlogData,searchData};
}
export default connect(mapStateToProps)(Admin)