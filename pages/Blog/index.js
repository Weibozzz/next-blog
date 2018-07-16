import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  Layout, Menu, Breadcrumb, Row, Col,
  List, Avatar, Icon, Pagination, Alert,
  Input, Button, Radio, Tooltip, Spin
} from 'antd'
import Router from 'next/router'
import 'whatwg-fetch'
import Link from 'next/link';
import Head from 'next/head'

import {getSearchList, getSearchTotal, getSearchPageList} from '../../store/actions'
import ListTitle from '../../components/ListTitle';
import {getBlogUrl, getTotalUrl} from '../../config';
import {pageNum, TITLE, ALL,COMMON_TITLE,INDEX_TITLE,BLOG_TXT} from '../../config/constantsData';
import MyLayout from '../../components/MyLayout';
const {Content} = Layout;
const Search = Input.Search;

class Blog extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 1,
      keyWard: ''
    };
  }

  onSearch(val) {
    const {dispatch} = this.props;
    let queryStringObj, queryTotalString;
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
      queryTotalString = {
        type: TITLE,
        wd: val
      };
    } else {
      queryStringObj = {
        type: ALL,
        num: 1,
        pageNum
      }
      queryTotalString = {
        type: ALL
      };
    }

    getSearchList(dispatch, getBlogUrl(queryStringObj))
    getSearchTotal(dispatch, getTotalUrl(queryTotalString))
  }
  componentDidMount(){
    const {router={}} = Router
    const {query={}} = router
    const {id='1'} = query
    this.setState({
      currentPage: Number(id)
    })
  }
  onChange(page, pageSize) {
    const {dispatch} = this.props
    const {keyWard: wd} = this.state
    this.setState({
      currentPage: page
    })

    let {searchTotalData = []} = this.props;
    if (searchTotalData.length) {
      let queryStringObj = {
        type: TITLE,
        num: page,
        pageNum,
        wd
      }
      getSearchPageList(dispatch, getBlogUrl(queryStringObj))
    }
    Router.push(`/Blog/${page}`)

  }
  onClickPageChange(e){
    e.preventDefault()
  }
  itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <a>Previous</a>;
    } else if (type === 'next') {
      return <a>Next</a>;
    }
    // return originalElement;
    return (
      <Link   as={`/Blog/${current}`} href={`/Blog?id=${current}`}>
        <a onClick={this.onClickPageChange.bind(this)}>{current}</a>
      </Link>
    );
  }

  render() {
    let total,listData;
    let { currentPage } = this.state;
    let {pageBlogData = [], totalPageData = [], searchData = [], searchTotalData = [],userAgent='pc'} = this.props;
    //如果用户进行搜索，就用搜索的数据，这里为了用户体验，并没有服务端渲染
    if (searchData.length) {
      pageBlogData = searchData
    }
    listData=pageBlogData
    if (searchTotalData.length) {
      ({total} = searchTotalData[0] || {})
    } else {
      ({total} = totalPageData[0] || {})
    }
    return (
      <div className="Blog">
        <Head>
          <title>{BLOG_TXT}&raquo;{COMMON_TITLE}</title>
        </Head>
        <MyLayout>
          <Content >
            <Search placeholder="input search text" onSearch={this.onSearch.bind(this)} enterButton="Search"
                    size="large"/>
            <div style={{background: '#fff', padding: 24, minHeight: 380}}>
              <ListTitle dataSource={{listData}} />

              <Pagination current={currentPage} total={total} itemRender={this.itemRender.bind(this)} onChange={this.onChange.bind(this)}/>
            </div>
          </Content>
        </MyLayout>
      </div>
    )
  }
}

Blog.getInitialProps = async function (context) {
  const {id = 1} = context.query
  let queryStringObj = {
    type: ALL,
    num: id,
    pageNum
  }
  let queryTotalString = {type: ALL};
  const pageBlog = await fetch(getBlogUrl(queryStringObj))
  const totalPage = await fetch(getTotalUrl(queryTotalString))
  const pageBlogData = await pageBlog.json()
  const totalPageData = await totalPage.json()


  return {pageBlogData, totalPageData}
}
//这里根据需要传入redux
const mapStateToProps = state => {
  const {res, searchData, searchTotalData} = state
  return {res, searchData, searchTotalData};
}
export default connect(mapStateToProps)(Blog)
