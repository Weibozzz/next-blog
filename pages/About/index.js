import React, {Component} from 'react';
import {connect} from 'react-redux';
import Head from 'next/head';
import Link from 'next/link';
import 'whatwg-fetch'
import {
  Layout, Menu, Breadcrumb, Row, Col,
  List, Avatar, Icon, Pagination, Alert,
  Input, Button, Radio, Tooltip, Spin, Divider
} from 'antd'
import {COMMON_TITLE, ABOUT_TXT, LINK_ABOUT_ME, commentPlaceHolder} from '../../config/constantsData';
import Comments from '../../components/Comments';
import {getUserComment} from "../../config";
import './index.less'

const {Content} = Layout;

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {


  }

  render() {
    const {commentsUserData=[],getUserCommentsData=[]} = this.props;
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
        <Layout>
          <Content style={{padding: '0 50px'}}>
            <div className="about">
              <section>
                <div className="header">
                  About Blog
                </div>
                <div className="mid">
                  <p>简单介绍下博客使用技术：</p>
                  <p className="title">博客前端：</p>
                  <p className="txt">采用服务器端渲染(ssr),基于 React.js 的通用应用框架:Next.js + antd-design + fetch + Less</p>
                  <p className="title">博客后端:</p>
                  <p className="txt">
                    UI层：使用 Next + Next-Router + React + fetch + Less + antd-design
                  </p>
                  <p className="txt">
                    服务层：使用 Node.js + Koa2 + Mysql
                  </p>
                </div>
              </section>
              <section>
                <div className="header">
                  About Me
                </div>
                <div className="mid">
                  <p className="title">
                    个人简介
                  </p>
                  <ul>
                    <li>姓名：刘伟波</li>
                    <li>英文名：Weibozzz</li>
                    <li>爱好：写代码,Lol,旅游,下棋</li>
                    <li>最不能忍受别人的事：不诚信，不守时</li>
                  </ul>
                  <p className="title">
                    技能
                  </p>
                  <ul>
                    <li>
                      前端：HTML5/CSS3、ES(5/6)、JQ、vue全家桶、react全家桶、微信小程序、支付宝小程序
                    </li>
                    <li>
                      UI框架：Bootstrap、Antd-design、Mint-UI、Iview 等等
                    </li>
                    <li>
                      后端：Php、NodeJs、Mysql数据库、Express、Koa2、Egg.js 等等
                    </li>
                  </ul>
                  <p className="title">
                    联系方式
                  </p>
                  <p className="txt">
                    739291780@qq.com
                  </p>
                  <p className="txt">
                    <Link href={LINK_ABOUT_ME}>
                      <a> 了解更多</a>
                    </Link>
                  </p>

                </div>
              </section>
              <Divider/>
              <Comments dataSource={dataSourceObj}></Comments>
            </div>

          </Content>
        </Layout>
      </div>
    );
  }
}
About.getInitialProps = async function (context) {
  const comments = await fetch(getUserComment())
  const commentsUserData = await comments.json()


  return {commentsUserData}
}
const mapStateToProps = state => {
  const {getUserCommentsData} = state;
  return {getUserCommentsData};
}
export default connect(mapStateToProps)(About);