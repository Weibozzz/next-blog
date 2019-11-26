import React, { Component } from 'react'
import QueueAnim from 'rc-queue-anim';
import { connect } from 'react-redux'
import {
  Layout, Menu, Breadcrumb, Row, Col,
  List, Avatar, Icon, Pagination, Alert,
  Input, Button, Radio, Tooltip, Spin, Select, Tabs
} from 'antd'
import Router from 'next/router'
import 'whatwg-fetch'
import Link from 'next/link'
import Head from 'next/head'
import {
  getSearchList,
  getHotArticleList,
  getModifyArticleList,
  getSearchTotal,
  getSearchPageList,
  postSaveIp,
  getViewList, getCreateTimeList, collectArticleList
} from '../../store/actions'
import ListTitle from '../../components/ListTitle'
import { getBlogUrl, getIpUrl, getTotalUrl, getViewUrl, postSaveIpUrl, getCreateTimeUrl } from '../../config'
import {
  pageNum,
  TITLE,
  ARTICLE,
  ALL,
  COMMON_TITLE,
  INDEX_TITLE,
  BLOG_TXT,
  POST_ARTICLE_TYPE,
  GITHUB_DOCS_ADDRESS_URL
} from '../../config/constantsData'
import MyLayout from '../../components/MyLayout'
import { real_ip, getYearAndMounth, cancelRepeat, formatTime } from '../../until'
import { getType, getTimeIndex, isHighLightAll, tagHighLight } from './searchType'
import './index.less'
import { getView } from '../../until/getiView'

const Option = Select.Option
const { Content } = Layout
const Search = Input.Search
const TabPane = Tabs.TabPane

class Blog extends Component {
  constructor () {
    super()
    this.state = {
      currentPage: 1,
      keyWard: '',
      searchType: TITLE,
      isNotWd: false,
      timeActiveIndex: -1,
      all: '全部文章',
      highLightAll: true,
      tagHighLight: false
    }
  }

  componentWillMount () {
    const { dispatch } = this.props
    const queryTotalString = {
      type: 'hot'
    }
    getHotArticleList(dispatch, getBlogUrl(queryTotalString))
    getModifyArticleList(dispatch, getBlogUrl({ type: 'modifyCount' }))
    getViewList(dispatch, getViewUrl())
    getCreateTimeList(dispatch, getCreateTimeUrl())
  }

  async componentDidMount () {

    const { router = {} } = Router
    const { query = {} } = router
    const { id = '1' } = query
    this.setState({
      currentPage: Number(id)
    })
    const { dispatch } = this.props
    const realIp = await real_ip()
    try {
      let queryParamsObj = { real_ip: realIp, ip: returnCitySN['cip'], address: returnCitySN['cname'] }
      //存取用户ip
      postSaveIp(dispatch, postSaveIpUrl(), queryParamsObj)
    } catch (error) {
      console.warn(error)
    }
  }

  onSearch (type, val) {
    const { searchType } = this.state
    const resultType = getType(type, searchType)
    const resultIndex = getTimeIndex(type)
    if (resultIndex === -1) {
      this.setState({
        timeActiveIndex: -1
      })
    }
    const { dispatch } = this.props
    this.setState({
      keyWard: val,
      highLightAll: isHighLightAll(resultType),
      isNotWd: true,
      tagHighLight: tagHighLight(resultType)
    })
    let queryStringObj = {
      type: resultType,
      num: 1,
      pageNum,
      wd: val
    }
    let queryTotalString = {
      type: resultType,
      wd: val
    }
    getSearchList(dispatch, getBlogUrl(queryStringObj))
    getSearchTotal(dispatch, getTotalUrl(queryTotalString))
    collectArticleList(dispatch, false)
  }

  onChange (page, pageSize) {
    const { dispatch } = this.props
    const { keyWard: wd, isNotWd, searchType } = this.state
    this.setState({
      currentPage: page
    })

    let { searchTotalData = [] } = this.props
    if (searchTotalData.length) {
      let queryStringObj = {
        type: searchType,
        num: page,
        pageNum,
        wd
      }
      getSearchPageList(dispatch, getBlogUrl(queryStringObj))
    }
    if (wd !== '' || isNotWd) {
      return
    }
    Router.push(`/blog/${page}`)

  }

  onClickPageChange (e) {
    e.preventDefault()
  }

  itemRender (current, type, originalElement) {
    if (type === 'prev') {
      return <a>Previous</a>
    } else if (type === 'next') {
      return <a>Next</a>
    }
    // return originalElement;
    return (
      <Link as={`/blog/${current}`} href={`/blog?id=${current}`}>
        <a onClick={this.onClickPageChange.bind(this)}>{current}</a>
      </Link>
    )
  }

  onSearchTypeHandleChange (value) {
    this.setState({
      searchType: value
    })
  }

  onArticleTime (title, timeIndex) {
    const reg = /(\d{4})年(\d{2})月/
    this.setState({
      timeActiveIndex: timeIndex
    })
    let yyyy,
      mm
    if (!reg.test(title)) {
      yyyy = 2017
      mm = 1
    } else {
      const arr = title.match(reg)
      yyyy = +arr[1] || 2017
      mm = +arr[2] || 1
    }
    const t1 = new Date(yyyy + '-' + mm + '-01 00:00:00').getTime() / 1000
    mm == 12 && (yyyy += 1, mm = 0)
    const t2 = new Date(yyyy + '-' + (mm + 1) + '-01 00:00:00').getTime() / 1000
    this.onSearch(`timeRange|${t1}.${t2}`, '')
  }

  getTagKey (item) {
    const { key, value } = item
    if (key === 'interesting' || key === 'fight' || key === 'others') {
      return value
    }
    return key
  }
  getDescription () {
    return (
      <span>
        本站只是为了展示 React SSR 的效果而搭建的一个博客平台，
        前端技术博客知识体系移步这里
        【{GITHUB_DOCS_ADDRESS_URL}】
      </span>
    )
  }
  render () {
    let total,
      listData
    let { currentPage, tagHighLight, searchType, timeActiveIndex, all, highLightAll, keywords } = this.state
    let {
      pageBlogData = [], totalPageData = [], searchData = [],
      searchTotalData = [], userAgent = 'pc', hotArticleData = [], modifyArticleData = [],
      createTimeListData = [], isCollectArticle = false, viewListData
    } = this.props
    //昨日今日浏览记录
    const { curView, yesView, his } = getView(viewListData)
    //如果用户进行搜索，就用搜索的数据，这里为了用户体验，并没有服务端渲染
    const yearMonthArr = createTimeListData.map(v => getYearAndMounth(v.createTime))
    const resultYMArr = cancelRepeat(yearMonthArr)
    if (searchData.length) {
      pageBlogData = searchData
    }
    listData = pageBlogData
    if (searchType === ARTICLE) {
      listData = searchData
    }
    if (searchTotalData.length) {
      ({ total } = searchTotalData[0] || {})
    } else {
      ({ total } = totalPageData[0] || {})
    }
    const iconArr = ['mysql', 'react', 'vue', 'angular', 'node']

    const selectBefore = (
      <Select defaultValue="title模糊搜索"
              onChange={this.onSearchTypeHandleChange.bind(this)}
              style={{ width: 140 }}>
        <Option value={TITLE}>title模糊搜索</Option>
        <Option value={ARTICLE}>article模糊搜索</Option>
      </Select>
    )
    return (
      <div className="Blog">
        <Head>
          <title>{BLOG_TXT}&raquo;{COMMON_TITLE}</title>
        </Head>
        <MyLayout>
          <Row>
            <Col
              sm={{ span: 24 }}
              xs={{ span: 24 }}
              lg={{ span: 16 }}>
              <Content>
                <Search placeholder="input search text" onSearch={this.onSearch.bind(this, 'handSearch')}
                        enterButton="Search"
                        size="large" addonBefore={selectBefore} />
                <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                  <Alert
                    message="技术文章提示"
                    description={this.getDescription()}
                    type="info"
                    showIcon
                  />
                  <ListTitle searchType={searchType} dataSource={{ listData }} />
                  {!isCollectArticle &&
                  <Pagination current={currentPage} total={total} itemRender={this.itemRender.bind(this)}
                              onChange={this.onChange.bind(this)} />}

                </div>
              </Content>
            </Col>
            <Col
              sm={{ span: 0 }}
              xs={{ span: 0 }}
              lg={{ span: 8 }}>
              <div className=" blog-right ">
                <div className='tag-container'>
                  <p className='title'>相关标签</p>
                  <ul className='clearfix'>
                    <QueueAnim>
                      {
                        [...[{ key: all }], ...POST_ARTICLE_TYPE].map(v => {
                          return <li onClick={this.onSearch.bind(this, v.key, '')} key={v.key}
                                     className={`${((v.key === all && highLightAll) || tagHighLight === v.key) && !isCollectArticle ? 'active' : ''} tag fl iconfont ${iconArr.indexOf(v.key) !== -1 ? 'icon-' + v.key : ''}`}>
                            <Tooltip placement="right" title={this.getTagKey(v)}>
                              {this.getTagKey(v)}
                            </Tooltip>
                          </li>
                        })
                      }
                    </QueueAnim>
                  </ul>
                </div>
                <Tabs defaultActiveKey="1">
                  <TabPane tab="最近更新" key="1">
                    <div>
                      <List
                        size="small"
                        bordered
                        dataSource={modifyArticleData}
                        renderItem={(v, index) => (<List.Item>
                          <Col span={20}>
                            <Link as={`/p/${v.id}`} href={`/detail?id=${v.id}`}>
                              <Tooltip placement="top" title={v.title}>
                                <a style={{ marginLeft: 4 }}> {v.title}</a>
                              </Tooltip>
                            </Link>
                          </Col>
                          <Col span={4} className='fr'>
                            <Tooltip placement="right" title={`更新于 ${formatTime(v.lastModify)}`}>
                              <span className='fr' style={{ color: '#666' }}><Icon type="edit" /> {formatTime(v.lastModify, 'mm-dd')}</span>
                            </Tooltip>
                          </Col>
                        </List.Item>)}
                      />
                    </div>
                  </TabPane>
                  <TabPane tab="排行榜" key="2">
                    <div>
                      <List
                        size="small"
                        bordered
                        dataSource={hotArticleData}
                        renderItem={(v, index) => (<List.Item>
                          <Col span={20}>
                            <Link as={`/p/${v.id}`} href={`/detail?id=${v.id}`}>
                              <Tooltip placement="top" title={v.title}>
                                <a style={{ marginLeft: 4 }}> {v.title}</a>
                              </Tooltip>
                            </Link>
                          </Col>
                          <Col span={4} className='fr'>
                            <Tooltip placement="right" title={`阅读量 ${v.visitor}`}>
                              <span className='fr' style={{ color: '#666' }}><Icon type="eye" /> {v.visitor}</span>
                            </Tooltip>
                          </Col>
                        </List.Item>)}
                      />
                    </div>
                  </TabPane>
                </Tabs>
                <div>
                  <h3>文章存档</h3>
                  <Row>
                    <List
                      size="small"
                      dataSource={Object.entries(resultYMArr)}
                      renderItem={(item, index) => (
                        <Col span={12} onClick={this.onArticleTime.bind(this, item[0], index)} key={item[0]}>
                          <List.Item>
                            <Tooltip placement="right" title={`${item[0]}的文章`}>
                              <span
                                className={`time-active ${timeActiveIndex === index ? 'active' : ''}`}>
                              {item[0]}({item[1]})
                            </span>
                            </Tooltip>

                          </List.Item>
                        </Col>
                      )
                      }
                    />
                  </Row>
                </div>
                <div>
                  <h3>历史浏览</h3>
                  <div className="view-date">
                    昨日访问量：{yesView} 今日访问量：{curView} 历史访问量：{his}
                  </div>
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
  const { id = 1 } = context.query
  let queryStringObj = {
    type: ALL,
    num: id,
    pageNum
  }
  let queryTotalString = { type: ALL }
  const pageBlog = await fetch(getBlogUrl(queryStringObj))
  const totalPage = await fetch(getTotalUrl(queryTotalString))
  let pageBlogData = await pageBlog.json()
  const totalPageData = await totalPage.json()
  pageBlogData = pageBlogData.filter(v => v.type !== 'interesting' && v.type !== 'fight')

  return { pageBlogData, totalPageData }
}
//这里根据需要传入redux
const mapStateToProps = state => {
  const { res, searchData, searchTotalData, hotArticleData, createTimeListData, isCollectArticle, viewListData, modifyArticleData } = state
  console.log(state)
  return { res, searchData, searchTotalData, hotArticleData, createTimeListData, isCollectArticle, viewListData, modifyArticleData }
}
export default connect(mapStateToProps)(Blog)
