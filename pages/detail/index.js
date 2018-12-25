import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Layout, Menu, Breadcrumb, Row, Col, BackTop, Card, Form,
  Input, Tooltip, Cascader, Select, Checkbox, Button,
  AutoComplete, List, Avatar, Icon, Divider
} from 'antd';
import 'whatwg-fetch';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import marked from 'marked';
import hljs from 'highlight.js';
import MarkNav from 'markdown-navbar';
import { untilMaxWidthOrHeight } from './util';
import './markdown-navbar.less';
//组件
import ArticleTitle from '../../components/ArticleTitle';
import PrevNextPage from '../../components/PrevNextPage';
import Comments from '../../components/Comments';
import MyLayout from '../../components/MyLayout';
//其他
import { getDetailUrl, getCommentsUrl, getLastIdUrl, getNextIdUrl, getBlogUrl, addZanUrl } from '../../config';
import { COMMON_TITLE, MY_BLOG, POST_READING_STATEMENT } from '../../config/constantsData';
import { markdownConfig } from '../../config/markdown';
import { getHtml, OldTime, throttle ,NewCdnTime,changeCdnUrl} from '../../until';
import './index.less';
import './pop-tips.less';
import { addZan, getHotArticleList, getHotRecommendList } from '../../store/actions';


//定义
const { Content } = Layout;

let timer;
const { options, config } = markdownConfig;
hljs.configure(config);
marked.setOptions({
  highlight: (code) => hljs.highlightAuto(code).value,
  ...options
});

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleID: '',
      articleLike: 0,
      fn: null,
      isShowEditIcon: false,
      topWidth: 0
    };
  }

  componentWillMount() {
    const { blogData = [], dispatch } = this.props;
    let { type = '' } = blogData[0] || '';
    type = type.split(',')
      .join('.');
    const queryTotalString = {
      type: 'hot|' + type
    };
    getHotRecommendList(dispatch, getBlogUrl(queryTotalString));
    let { id: articleID } = blogData[0] || {};
    this.setState({
      articleID
    });
  }

  componentDidMount() {
    const life = ['interesting', 'fight'];
    const { blogData = [] } = this.props;
    let { type = '' } = blogData[0] || '';
    if(life.indexOf(type)!==-1){
      // 设置非生活图片图片宽高 最大宽或者高 为300px
      untilMaxWidthOrHeight();
    }
    window.onscroll = throttle(() => {
      this.getRateWidth();
    });
    window.onresize = throttle(() => {
      this.getRateWidth();
    });
    const { password } = sessionStorage;
    const { query = {} } = Router;
    const { id = '' } = query;
    this.setState({
      isShowEditIcon: password ? id : ''
    });
  }


  componentWillUnmount() {
    window.onscroll = null;
    window.onresize = null;
  }

  getRateWidth() {
    const {scrollHeight} = document.body;
    const {innerHeight, innerWidth} = window;
    const {scrollY} = window;
    //这里的rate会大于1，原因是toptips组件ssr为false,导致高度有错误
    let rate = Math.min(scrollY / (scrollHeight - innerHeight), 1);
    const topWidth = rate * innerWidth;
    this.setState({
      topWidth
    })
  }

  onAddZan() {
    const {articleID} = this.state;
    const {dispatch} = this.props;
    const queryStringObj = {
      id: articleID
    }
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      addZan(dispatch, addZanUrl(queryStringObj)).then(res => {
        const {addZanData = []} = res;
        const {like = 0} = addZanData[0]
        this.setState({
          articleLike: like
        })
      })
    }, 500)
  }

  render() {
//接口
    let {blogData = [], commentsData = [], getCommentsData = [], lastIdData = [], nextIdData = [], userAgent = 'pc', hotRecommendData = []} = this.props;
    let {articleID, articleLike, isShowEditIcon, topWidth} = this.state;
    let {content = '', createTime = '', title = '', url = '', id, type = '', like = 0} = blogData[0] || {};
    const isShowReadingStatement = /阅读书籍/g.test(type);
    const resultLike = Math.max(articleLike, like)

    commentsData = commentsData.length > getCommentsData.length ? commentsData : getCommentsData
      .sort((a, b) => b.createTime - a.createTime)

    const bool = createTime > OldTime || articleID === 1;
    let decode_html;
    try {
      decode_html = decodeURIComponent(content)
    } catch (err) {
      decode_html = content
    }
    const myBlog = 'http://www.liuweibo.cn/'
    const myOldGithub = 'https://15691808595.github.io'
    const myNewGithub = 'https://Weibozzz.github.io'
    const regExp = /(http:\/\/www\.liuweibo\.cn\/(jianli|img|liuweibo_FrontEnd_CV\.doc))|(https:\/\/15691808595\.github\.io)/gim;
    const markdedHtml = `${isShowReadingStatement ? POST_READING_STATEMENT() : ''}${getHtml(decode_html, createTime)}`;
    let _html_content = bool ?
      marked(markdedHtml)
      :
      type === 'interesting' || type === 'fight' && id >= 146 && id <= 178
        ?
        getHtml(decode_html
            .replace(regExp, (res) => {
              switch (res) {
                case myBlog + 'jianli':
                  return myBlog + 'static/jianli'
                case myBlog + 'img':
                  return myBlog + 'static'
                case myBlog + 'liuweibo_FrontEnd_CV.doc':
                  return myBlog + 'static/cv/liuweibo_FrontEnd_CV.doc'
                case myOldGithub:
                  return myNewGithub
              }
            })
          , createTime)
        : getHtml(decode_html, createTime)

    return (
      <div className="detail">
        <Head>
          <title>{title}{COMMON_TITLE}</title>
        </Head>
        <div id="read-nprogress" style={{width: topWidth}}></div>
        <MyLayout>

          <Col
            className='left-icon-wrapper'
            sm={{span: 0}}
            xs={{span: 0}}
            lg={{span: 2}}>
            <div className="remark-num">{resultLike}</div>
            <Tooltip placement="right" title={`赞一个吧！`}>
              <Button onClick={this.onAddZan.bind(this)} className='my-button-icon'>
                <Icon type="like"/>
              </Button>
            </Tooltip>

            <Icon className='icon' type="weibo"/>
            <Icon className='icon' type="twitter"/>
            <Icon className='icon' type="wechat"/>

            {
              isShowEditIcon ?
                <a href={`/adminDetail/${isShowEditIcon}`}>
                  <Icon className='icon' type="edit"/>
                </a> : ''
            }
            <a href="#comment">
              <Tooltip placement="right" title={`来评论吧`}>
                <Icon className='icon' type="message"/>
              </Tooltip>
            </a>
          </Col>
          <Col sm={{span: 24}}
               xs={{span: 24}}
               lg={{span: 22}}>

            <ArticleTitle commentsData={commentsData} detailArticle={blogData[0]} htmlStr={_html_content}/>
            <div style={{background: '#fff', padding: '0 24px 24px 24px'}}>
              <Row>
                <Col
                  sm={{span: 24}}
                  xs={{span: 24}}
                  lg={{span: bool ? 15 : 24}}>

                  <div
                    className={bool ? 'new-detail markdown-style' : 'old-detail'}
                    dangerouslySetInnerHTML={{
                      __html: _html_content
                    }}
                  ></div>

                </Col>
                {
                  bool ? <Col
                    className="sticky-nav"
                    sm={{span: 0}}
                    xs={{span: 0}}
                    lg={{span: 8}}>
                    <MarkNav
                      className="article-menu"
                      source={decode_html}
                      headingTopOffset={0}
                    />
                  </Col> : ''
                }

              </Row>
              <PrevNextPage dataSource={{url, lastIdData, nextIdData}}></PrevNextPage>
              <Row className='zan-wrapper'>
                <Col span={4} offset={10}>
                  <Tooltip placement="bottom" title={`赞一个吧！`}>
                    <Button onClick={this.onAddZan.bind(this)} type="primary" size="large">
                      赞
                      <span className="split-line">|</span>
                      {resultLike}
                    </Button>
                  </Tooltip>
                </Col>
              </Row>
              <Divider/>
              <div className='recommend-post'>
                <h3>你可能感兴趣的文章</h3>
                <ul className='recommend-post-ul'>
                  {
                    hotRecommendData.map(v => (
                      <li key={v.id}>
                        <Link as={`/p/${v.id}`} href={`/detail?id=${v.id}`}>
                          <Tooltip placement="top" title={v.title}>
                            <a>{v.title}</a>
                          </Tooltip>
                        </Link>
                        {
                          v.type.split(',').map((v, index) => (
                            <span style={{marginLeft: index === 0 ? 10 : 0}} key={v} className="tag">{v} </span>))
                        }

                        <span style={{color: '#666'}}><Icon type="eye"/> {v.visitor}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <Comments dataSource={{commentsData, articleID}}></Comments>
            </div>
          </Col>

        </MyLayout>
        <style>{`
        .a-img{
          margin-bottom:20px;
          text-align:center;
        }
.old-detail pre{
    border:1px solid #ccc;
    background-color:#f5f5f5;
}


.new-detail h1,.new-detail h2{
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
}
.ant-divider{
    background:#3246da
}
.comment-wrapper h2{
  margin-left:20px;
}
.sticky-nav{
  position: sticky;
  top: 128px;
}


`}</style>
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
  let lastIdData, nextIdData
  try {
    lastIdData = await lastId.json()
  } catch (e) {
    lastIdData = []
  }
  try {
    nextIdData = await nextId.json()
  } catch (e) {
    nextIdData = []
  }


  return {blogData, commentsData, lastIdData, nextIdData}
}
const mapStateToProps = state => {
  const {getCommentsData, hotRecommendData} = state
  return {getCommentsData, hotRecommendData};
}
const WrappedRegistrationForm = Form.create()(Detail);
export default connect(mapStateToProps)(WrappedRegistrationForm);
