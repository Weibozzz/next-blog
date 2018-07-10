import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Layout, Menu, Breadcrumb, Row, Col} from 'antd';
import Link from 'next/link'
import Head from 'next/head';
import TopTips from '../../components/TopTips';
import * as ROUTER from '../../config/constantsData';
import {postAdminPasswordUrl} from '../../config';
import {postAdminPassword} from '../../store/actions';

const {Header, Content} = Layout;
const routes = [
  {
    href: ROUTER.INDEX,
    txt: ROUTER.INDEX_TXT,
    isSuperAdmin:false
  },
  {
    href: ROUTER.BLOG,
    txt: ROUTER.BLOG_TXT,
    isSuperAdmin:false
  },
  {
    href: ROUTER.LIFE,
    txt: ROUTER.LIFE_TXT,
    isSuperAdmin:false
  },
  {
    href: ROUTER.ABOUT,
    txt: ROUTER.ABOUT_TXT,
    isSuperAdmin:false
  },
  {
    href: ROUTER.ADMIN,
    txt: ROUTER.ADMIN_TXT,
    isSuperAdmin:true
  },
  {
    href: ROUTER.POST_ARTICLE,
    txt: ROUTER.POST_ARTICLE_TXT,
    isSuperAdmin:true
  },
]

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
  }


  render() {
    const {postAdminPasswordData=[]} = this.props;
    let newRoutes;
    if(postAdminPasswordData.length){
      newRoutes=routes
    }else {
      newRoutes=routes.filter(v=>!v.isSuperAdmin)
    }
    return (
      <div>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1'/>
          <meta charSet='utf-8'/>
          <link rel='stylesheet' href='/_next/static/style.css'/>
        </Head>
        <Layout>
          <Header style={{position: 'fixed', height: '64px', width: '100%', padding: 0, zIndex: 10}}>
            <Row>
              <Col span={2}></Col>
              <Col span={17}>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['2']}
                  style={{lineHeight: '64px'}}
                >
                  {
                    newRoutes.map((item, index) => (
                      <Menu.Item key={item.href}>
                        <Link href={item.href}>
                          <a>{item.txt}</a>
                        </Link>
                      </Menu.Item>
                    ))
                  }
                </Menu>
              </Col>
            </Row>
          </Header>
          <Content style={{padding: '0 50px', marginTop: 64}}>
            <TopTips/>
          </Content>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {postAdminPasswordData} = state
  return {postAdminPasswordData};
}
export default connect(mapStateToProps)(TopNav)

