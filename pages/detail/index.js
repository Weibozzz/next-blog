import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
  Layout, Menu, Breadcrumb, Row, Col, BackTop, Card, Form,
  Input, Tooltip, Cascader, Select, Checkbox, Button,
  AutoComplete, List, Avatar, Icon, Divider
} from 'antd';
import 'whatwg-fetch'
import Head from 'next/head';
import marked from 'marked'
import hljs from 'highlight.js';
//组件
import ArticleTitle from '../../components/ArticleTitle';
import PrevNextPage from '../../components/PrevNextPage';
import Comments from '../../components/Comments';
//其他
import {getDetailUrl, getCommentsUrl,getLastIdUrl,getNextIdUrl} from '../../config';
import {COMMON_TITLE} from '../../config/constantsData';
import {getHtml, OldTime} from '../../until';
//定义
const {Content} = Layout;


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
    this.state={
      articleID:''
    }
  }
  componentWillMount(){
    const {blogData = []} = this.props;
    let {id:articleID} = blogData[0] || {};
    this.setState({
      articleID
    })
  }
  render() {
//接口
    let {blogData = [], commentsData = [],getCommentsData=[],lastIdData=[],nextIdData=[]} = this.props;
    let {articleID} = this.state;
    const {content = '', createTime = '',title='',url=''} = blogData[0] || {};

    commentsData=[...commentsData,...getCommentsData]
      .filter(v=>v.a_id===articleID)
      .sort((a,b)=>b.createTime-a.createTime)

    const bool = createTime > OldTime;

    return (
      <div className="detail">
        <Head>
          <title>{title}{COMMON_TITLE}</title>
        </Head>
        <Layout>
          <Content style={{padding: '0 50px'}}>
            <div style={{background: '#fff', padding: 24}}>
              <ArticleTitle detailArticle={blogData[0]}/>
              <div
                className={bool?'new-detail':'old-detail'}
                dangerouslySetInnerHTML={{
                  __html:bool ?
                    marked(getHtml(decodeURIComponent(content), createTime))
                    : getHtml(decodeURIComponent(content), createTime)
                }}
              ></div>
              <PrevNextPage dataSource={{url,lastIdData,nextIdData}}></PrevNextPage>
            </div>
            <Comments dataSource={{commentsData,articleID}}></Comments>
          </Content>
        </Layout>
        <style>{`
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
  let lastIdData ,nextIdData
  try {
    lastIdData = await lastId.json()
  } catch (e) {
    lastIdData = []
  }
  try {
    nextIdData = await nextId.json()
  } catch (e) {
    nextIdData =[]
  }


  return {blogData, commentsData,lastIdData,nextIdData}
}
const mapStateToProps = state => {
  const {getCommentsData} = state
  return {getCommentsData};
}
const WrappedRegistrationForm = Form.create()(Detail);
export default connect(mapStateToProps)(WrappedRegistrationForm);