import React, { Component } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import 'whatwg-fetch';
import marked from 'marked';
import hljs from 'highlight.js';
import {
  Layout, Divider
} from 'antd';
import {
  COMMON_TITLE, ABOUT_TXT, commentPlaceHolder
} from '../../config/constantsData';
import Comments from '../../components/Comments';
import { getUserCommentUrl, getDetailUrl } from "../../config";
import { POPUP_TIPS } from '../../config/constantTag';
import { fnTextPopup } from '../../until';
import MyLayout from '../../components/MyLayout';
import './index.less';

const { Content } = Layout;
hljs.configure({
  tabReplace: '  ',
  classPrefix: 'hljs-',
  languages: ['CSS', 'HTML, XML', 'JavaScript', 'PHP', 'Python', 'Stylus', 'TypeScript', 'Markdown']
});
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
    this.state = {
      fn: null
    };
  }

  componentDidMount() {
    // 点击页面出现 富强 民主
    const fn = fnTextPopup(POPUP_TIPS);
    this.setState({
      fn
    });
  }

  componentWillUnmount() {
    const { fn } = this.state;
    document.documentElement.removeEventListener('click', fn);
  }

  render() {
    const {
      commentsUserData = [], getUserCommentsData = [], aboutMeData = [], userAgent = 'pc'
    } = this.props;
    const { content = '' } = aboutMeData[0] || {};
    const myContent = marked(decodeURIComponent(content));
    const dataSourceObj = {
      commentsData: getUserCommentsData.length ? getUserCommentsData : commentsUserData,
      commentTitle: '留言',
      commentPlaceHolder,
      commentBtnMsg: '提交留言',
      commentRow: 20,
      isUserSubmit: true
    };
    return (
      <div>
        <Head>
          <title>
            {ABOUT_TXT}
            &raquo;
            {COMMON_TITLE}
          </title>
        </Head>
        <MyLayout>
          <Content>
            <div className={userAgent === 'pc' ? 'about' : 'about is-mobile'}>
              <div className="cv-wrapper">
                <img src="http://pbw4yrlys.bkt.clouddn.com/image/my/IMG_20160408_224056.jpg" alt="me" />
                <div className="info">
                  <div className="title">刘伟波</div>
                  <div className="remark">Web前端工程师</div>
                </div>
                <div className="content">
                  多年来一直从事web前端开发，熟悉h5,vue,react，现就职与蚂蚁金服无线端技术，
                  任web高级开发工程师一职,一直致力与Web技术的研究
                </div>
              </div>
              <div className="about-me" dangerouslySetInnerHTML={{ __html: myContent }} />
              <Divider />
              <Comments dataSource={dataSourceObj} />
            </div>

          </Content>
        </MyLayout>
      </div>
    );
  }
}

About.getInitialProps = async function () {
  // 评论
  const comments = await fetch(getUserCommentUrl({ hasToken: 'no' }));
  const commentsUserData = await comments.json();
  // 关于自己 id为1
  const queryStrObj = { id: 1 };
  const aboutMe = await fetch(getDetailUrl(queryStrObj));
  const aboutMeData = await aboutMe.json();


  return { commentsUserData, aboutMeData };
};
const mapStateToProps = state => {
  const { getUserCommentsData } = state;
  return { getUserCommentsData };
};
export default connect(mapStateToProps)(About);
