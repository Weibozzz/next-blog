import React,{Component} from 'react'
import {connect} from 'react-redux'
import Head from 'next/head'
import Link from 'next/link';


import {Layout, Menu, Breadcrumb, Row, Col, Pagination, Input,Tabs,Table,List, Avatar, Icon} from 'antd';

import Header from '../../components/Header';
import {formatTime} from '../../until';
import {getAdminBlogUrl} from '../../config';
import {getAdminBlogList} from '../../store/actions';


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
    console.log(this.props)
    const {dispatch} = this.props;
    const queryStringObj = {
      type:'all',
      num:1,
      pageNum:10
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

  }

  onSearch(val) {
    this.setState({
      inputVal: val,
      currentPage: 1
    })
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

    const {adminBlogData=[]} = this.props
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
                    total={100} itemRender={this.itemRender.bind(this)} onChange={this.onChange.bind(this)}/>
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
const mapStateToProps = state => {
  console.log(state)
  const {adminBlogData} = state
  return {adminBlogData};
}
export default connect(mapStateToProps)(Admin)