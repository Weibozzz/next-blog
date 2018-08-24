import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  Layout, Menu, Breadcrumb, Row, Col,
  List, Avatar, Icon, Pagination, Alert,
  Input, Button, Radio, Tooltip, Spin, Select
} from 'antd'
import Router from 'next/router'
import 'whatwg-fetch'
import Link from 'next/link';
import Head from 'next/head'

import {
  getSearchList,
  getHotArticleList,
  getSearchTotal,
  getSearchPageList,
  postSaveIp,
  getIpList, getViewList
} from '../../store/actions'
import ListTitle from '../../components/ListTitle';
import {getBlogUrl, getIpUrl, getTotalUrl, getViewUrl, postSaveIpUrl} from '../../config';
import {
  pageNum,
  TITLE,
  ARTICLE,
  ALL,
  COMMON_TITLE,
  INDEX_TITLE,
  BLOG_TXT,
  POST_ARTICLE_TYPE
} from '../../config/constantsData';
import MyLayout from '../../components/MyLayout';
import {real_ip} from '../../until';
import './index.less'

const Option = Select.Option;
const {Content} = Layout;
const Search = Input.Search;

class Blog extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 1,
      keyWard: '',
      searchType: TITLE
    };
  }

  componentWillMount(){
    const {dispatch} = this.props;
    const queryTotalString = {
      type: 'hot'
    };
    getHotArticleList(dispatch, getBlogUrl(queryTotalString))
    getViewList(dispatch, getViewUrl())
  }
  async componentDidMount() {

    const {router = {}} = Router
    const {query = {}} = router
    const {id = '1'} = query
    this.setState({
      currentPage: Number(id)
    })
    const {dispatch} = this.props;
    const realIp = await real_ip()
    let queryParamsObj = {real_ip: realIp, ip: returnCitySN['cip'], address: returnCitySN['cname']};
    //存取用户ip
    postSaveIp(dispatch, postSaveIpUrl(), queryParamsObj)
  }

  onSearch(val, type = ALL) {
    const {dispatch} = this.props;
    const {searchType} = this.state;
    let queryStringObj, queryTotalString;
    this.setState({
      keyWard: val
    })
    if (val) {
      queryStringObj = {
        type: searchType,
        num: 1,
        pageNum,
        wd: val
      }
      queryTotalString = {
        type: searchType,
        wd: val
      };
    } else {
      queryStringObj = {
        type,
        num: 1,
        pageNum
      }
      queryTotalString = {
        type
      };
    }

    getSearchList(dispatch, getBlogUrl(queryStringObj))
    getSearchTotal(dispatch, getTotalUrl(queryTotalString))
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
    if (wd !== '') {
      return;
    }
    Router.push(`/blog/${page}`)

  }

  onClickPageChange(e) {
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
      <Link as={`/blog/${current}`} href={`/blog?id=${current}`}>
        <a onClick={this.onClickPageChange.bind(this)}>{current}</a>
      </Link>
    );
  }

  onSearchTypeHandleChange(value) {
    this.setState({
      searchType: value
    })
  }

  render() {
    let total, listData;
    let {currentPage, searchType} = this.state;
    let {pageBlogData = [], totalPageData = [], searchData = [], searchTotalData = [], userAgent = 'pc',hotArticleData=[]} = this.props;
    //如果用户进行搜索，就用搜索的数据，这里为了用户体验，并没有服务端渲染
    if (searchData.length) {
      pageBlogData = searchData
    }
    listData = pageBlogData
    if (searchType === ARTICLE) {
      listData = searchData
    }
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
          <Row>
            <Col span={16}>
              <Content>
                <Row>
                  <Col span={20}>
                    <Search placeholder="input search text" onSearch={this.onSearch.bind(this)} enterButton="Search"
                            size="large"/>
                  </Col>
                  <Col span={4}>
                    <Select
                      showSearch
                      style={{width: '100%'}}
                      placeholder="title模糊搜索"
                      optionFilterProp="children"
                      onChange={this.onSearchTypeHandleChange.bind(this)}
                      filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                      <Option value={TITLE}>title模糊搜索</Option>
                      <Option value={ARTICLE}>article模糊搜索</Option>
                    </Select>
                  </Col>
                </Row>
                <div style={{background: '#fff', padding: 24, minHeight: 380}}>
                  <ListTitle searchType={searchType} dataSource={{listData}}/>

                  <Pagination current={currentPage} total={total} itemRender={this.itemRender.bind(this)}
                              onChange={this.onChange.bind(this)}/>
                </div>
              </Content>
            </Col>
            <Col span={8}>
              <div className=" blog-right ">
                <div className='tag-container'>
                  <p className='title'>相关标签</p>
                  <ul className='clearfix'>
                    {
                      POST_ARTICLE_TYPE.map(v => {
                        switch (v.key) {
                          case 'mysql':
                            return <li onClick={this.onSearch.bind(this, '', v.key)} key={v.key}
                                       className='tag fl iconfont icon-mysql'>{v.key}</li>;
                            break;
                          case 'react':
                            return <li onClick={this.onSearch.bind(this, '', v.key)} key={v.key}
                                       className='tag fl iconfont icon-react'>{v.key}</li>;
                            break;
                          case 'vue':
                            return <li onClick={this.onSearch.bind(this, '', v.key)} key={v.key}
                                       className='tag fl iconfont icon-vue'>{v.key}</li>;
                            break;
                          case 'angular':
                            return <li onClick={this.onSearch.bind(this, '', v.key)} key={v.key}
                                       className='tag fl iconfont icon-angular'>{v.key}</li>;
                            break;
                          case 'node':
                            return <li onClick={this.onSearch.bind(this, '', v.key)} key={v.key}
                                       className='tag fl iconfont icon-nodejs'>{v.key}</li>;
                            break;
                          default:
                            return <li onClick={this.onSearch.bind(this, '', v.key)} key={v.key}
                                       className='tag fl '>{v.key}</li>;
                        }
                      })
                    }
                  </ul>
                </div>
                <div>
                  <p className='title'>排行榜</p>
                  <ul>
                    {
                      hotArticleData.map((v,index)=>{

                        return <li key={v.id} className="clearfix">
                          <Row>
                            <Col span={1}>
                              <span style={{color:'#999'}}>{index+1}.</span>
                            </Col>
                            <Col  span={19}>
                              <Link as={`/p/${v.id}`} href={`/detail?id=${v.id}`}>
                                <a style={{marginLeft:4}}> {v.title}</a>
                              </Link>
                            </Col>
                            <Col span={4}>
                              <span className='fr' style={{color:'#666'}}><Icon type="eye" /> {v.visitor}</span>
                            </Col>
                          </Row>
                        </li>;
                      })
                    }
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
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
  const {res, searchData, searchTotalData,hotArticleData} = state
  return {res, searchData, searchTotalData,hotArticleData};
}
export default connect(mapStateToProps)(Blog)
