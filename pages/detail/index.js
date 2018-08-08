import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
  Layout, Menu, Breadcrumb, Row, Col, BackTop, Card, Form,
  Input, Tooltip, Cascader, Select, Checkbox, Button,
  AutoComplete, List, Avatar, Icon, Divider
} from 'antd';
import 'whatwg-fetch'
import Head from 'next/head';
import Router from 'next/router'
import marked from 'marked'
import hljs from 'highlight.js';
import MarkNav from 'markdown-navbar';
import './markdown-navbar.less';
//组件
import ArticleTitle from '../../components/ArticleTitle';
import PrevNextPage from '../../components/PrevNextPage';
import Comments from '../../components/Comments';
import MyLayout from '../../components/MyLayout';
//其他
import {getDetailUrl, getCommentsUrl, getLastIdUrl, getNextIdUrl, getBlogUrl, addZanUrl} from '../../config';
import {COMMON_TITLE, MY_BLOG} from '../../config/constantsData';
import {POPUP_TIPS} from '../../config/constantTag';
import {getHtml, OldTime} from '../../until';
import './index.less'
import './pop-tips.less'
import {addZan} from "../../store/actions";
//定义
const {Content} = Layout;

let timer;
hljs.configure({
  tabReplace: '  ',
  classPrefix: 'hljs-',
  languages: ['CSS', 'HTML, XML', 'JavaScript', 'PHP', 'Python', 'Stylus', 'TypeScript', 'Markdown']
})
marked.setOptions({
  highlight: (code) => hljs.highlightAuto(code).value,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleID: '',
      articleLike: 0,
      fn: null,
      isShowEditIcon: false,
      topWidth:0
    }
  }

  componentWillMount() {
    const {blogData = []} = this.props;
    let {id: articleID} = blogData[0] || {};
    this.setState({
      articleID
    })
  }

  componentDidMount() {
    window.onscroll = () => {
      this.getRateWidth()
    }
    window.onresize = () => {
      this.getRateWidth()
    }
    const {password} = sessionStorage;
    const {query = {}} = Router;
    const {id = ''} = query
    this.setState({
      isShowEditIcon: password ? id : ''
    })
  }

  componentWillUnmount() {
    window.onscroll = null
    window.onresize = null
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
    let {blogData = [], commentsData = [], getCommentsData = [], lastIdData = [], nextIdData = [], userAgent = 'pc'} = this.props;
    let {articleID, articleLike, isShowEditIcon,topWidth} = this.state;
    let {content = '', createTime = '', title = '', url = '', id, type = '', like = 0} = blogData[0] || {};

    const resultLike = Math.max(articleLike, like)

    commentsData = commentsData.length > getCommentsData.length ? commentsData : getCommentsData
      .sort((a, b) => b.createTime - a.createTime)

    const bool = createTime > OldTime || articleID === 1;

    let decode_html = decodeURIComponent(content)
    const myBlog = 'http://www.liuweibo.cn/'
    const myOldGithub = 'https://15691808595.github.io'
    const myNewGithub = 'https://Weibozzz.github.io'
    const regExp = /(http:\/\/www\.liuweibo\.cn\/(jianli|img|liuweibo_FrontEnd_CV\.doc))|(https:\/\/15691808595\.github\.io)/gim;
    let _html_content = bool ?
      marked(getHtml(decode_html, createTime))
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
        <div id="read-nprogress" style={{width:topWidth}}></div>
        <MyLayout>

          <Col
            className='left-icon-wrapper'
            sm={{span: 0}}
            xs={{span: 0}}
            lg={{span: 2}}>
            <div className="remark-num">{resultLike}</div>
            <Button onClick={this.onAddZan.bind(this)} className='my-button-icon'>
              <Icon type="like"/>
            </Button>
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
              <Icon className='icon' type="message"/>
            </a>
          </Col>
          <Col sm={{span: 24}}
               xs={{span: 24}}
               lg={{span: 22}}>

            <ArticleTitle commentsData={commentsData} detailArticle={blogData[0]}/>
            <div style={{background: '#fff', padding: '0 24px 24px 24px'}}>
              <Row>
                <Col
                  sm={{span: 24}}
                  xs={{span: 24}}
                  lg={{span: bool ? 15 : 24}}>

                  <div
                    className={bool ? 'new-detail' : 'old-detail'}
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
                  <Button onClick={this.onAddZan.bind(this)} type="primary" size="large">
                    赞
                    <span className="split-line">|</span>
                    {resultLike}
                  </Button>
                </Col>
              </Row>
              <Divider/>
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
code {
    padding: 2px 4px;
    font-size: 90%;
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 4px;
}
.new-detail ul{
    margin: 1.5em 0 1.5em 3em;
    padding-left: 0;
}

.new-detail li{
    display: list-item;
    margin:.3em 0;
    list-style: disc;
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
  const {getCommentsData} = state
  return {getCommentsData};
}
const WrappedRegistrationForm = Form.create()(Detail);
export default connect(mapStateToProps)(WrappedRegistrationForm);