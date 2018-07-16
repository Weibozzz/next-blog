import React, {Component} from 'react';
import {connect} from 'react-redux';
import Head from 'next/head';
import Link from 'next/link';
import 'whatwg-fetch'
import marked from 'marked'
import hljs from 'highlight.js';
import {
  Layout, Menu, Breadcrumb, Row, Col,
  List, Avatar, Icon, Pagination, Alert,
  Input, Button, Radio, Tooltip, Spin, Divider
} from 'antd'
import {COMMON_TITLE, ABOUT_TXT, LINK_ABOUT_ME, commentPlaceHolder} from '../../config/constantsData';
import Comments from '../../components/Comments';
import {getUserCommentUrl,getDetailUrl} from "../../config";
import MyLayout from '../../components/MyLayout';
import './index.less'

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
class About extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {


  }

  render() {
    const {commentsUserData=[],getUserCommentsData=[],aboutMeData=[],userAgent='pc'} = this.props;
    console.log(userAgent)
    const {content=''} = aboutMeData[0] || {};
    let myContent = marked(decodeURIComponent(content));
    const dataSourceObj = {
      commentsData:getUserCommentsData.length?getUserCommentsData:commentsUserData,
      commentTitle: '留言',
      commentPlaceHolder,
      commentBtnMsg: '提交留言',
      commentRow: 20,
      isUserSubmit: true
    }
    return (
      <div>
        <Head>
          <title>{ABOUT_TXT}&raquo;{COMMON_TITLE}</title>
        </Head>
        <MyLayout >
          <Content >
            <div className={userAgent==='pc'?'about':'about is-mobile'} >
              <div className='about-me' dangerouslySetInnerHTML={{__html:myContent}}></div>
              <Divider/>
              <Comments dataSource={dataSourceObj}></Comments>
            </div>

          </Content>
        </MyLayout>
      </div>
    );
  }
}
About.getInitialProps = async function (context) {
  //评论
  const comments = await fetch(getUserCommentUrl())
  const commentsUserData = await comments.json()
  //关于自己 id为1
  let queryStrObj = {id:1};
  const aboutMe = await fetch(getDetailUrl(queryStrObj))
  const aboutMeData = await aboutMe.json()


  return {commentsUserData,aboutMeData}
}
const mapStateToProps = state => {
  const {getUserCommentsData} = state;
  return {getUserCommentsData};
}
export default connect(mapStateToProps)(About);