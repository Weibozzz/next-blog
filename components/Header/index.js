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
    isSuperAdmin: false
  },
  {
    href: ROUTER.BLOG,
    txt: ROUTER.BLOG_TXT,
    isSuperAdmin: false
  },
  {
    href: ROUTER.LIFE,
    txt: ROUTER.LIFE_TXT,
    isSuperAdmin: false
  },
  {
    href: ROUTER.ONLINE_GITBOOK,
    txt: ROUTER.DOCS_TXT,
    isSuperAdmin: false
  },
  {
    href: ROUTER.ABOUT,
    txt: ROUTER.ABOUT_TXT,
    isSuperAdmin: false
  },
  {
    href: ROUTER.ADMIN,
    txt: ROUTER.ADMIN_TXT,
    isSuperAdmin: true
  },
  {
    href: ROUTER.POST_ARTICLE,
    txt: ROUTER.POST_ARTICLE_TXT,
    isSuperAdmin: true
  },
  {
    href: 'javascript:;',
    txt: '退出',
    isSuperAdmin: true,
    exit: true
  },
]

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      defaultSelectedKeys: '/'
    }
  }

  componentDidMount() {
    const {pathname = '/'} = location;
    const {dispatch} = this.props;
    const {password = ''} = localStorage;
    this.setState({
      selectedKeys: [pathname]
    })
    if (!password) {
      return;
    }
    postAdminPassword(dispatch, postAdminPasswordUrl(), {password: password}).then(res => {
      const {postAdminPasswordData = []} = res;
      if (postAdminPasswordData.length) {
        this.setState({
          isLogin: true
        })
      }
    })
  }

  onSelect({keyPath, key}) {
    this.setState({
      selectedKeys: keyPath
    })
  }

  onExit() {
    //退出清除localStorage
    localStorage.removeItem('password')
    this.setState({
      isLogin: false
    })
  }

  render() {
    let {isLogin, selectedKeys = ['/']} = this.state;
    if (Object.prototype.toString.call(selectedKeys) === '[object String]') {
      selectedKeys = ['/']
    }
    let newRoutes;
    if (isLogin) {
      newRoutes = routes
    } else {
      newRoutes = routes.filter(v => !v.isSuperAdmin)
    }
    return (
      <div>
        <Head>

          <meta charset="utf-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1"/>
          <meta class="meta-ctrl-pc" name="viewport"
                content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/>
          <meta name="renderer" content="webkit"/>
          <meta http-equiv="description" content="刘伟波-天天向上"/>
          <meta name="Keywords" content="刘伟波, 个人博客, 个人网站, web前端"/>
          <meta name="Description" content="刘伟波的个人博客，刘伟波的技术作品，刘伟波的生活成长"/>
          <meta name="author" content="刘伟波,liuweibo"/>
          <link rel='stylesheet' href='/_next/static/style.css'/>
          <title>刘伟波的个人博客 &raquo; 刘伟波-天天向上</title>
        </Head>
        <Layout>
          <Header style={{position: 'fixed', height: '64px', width: '100%', padding: 0, zIndex: 10}}>
            <Row>
              <Col span={2}></Col>
              <Col span={17}>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  onClick={this.onSelect.bind(this)}
                  defaultSelectedKeys={['/']}
                  selectedKeys={selectedKeys}
                  style={{lineHeight: '64px'}}
                >
                  {
                    newRoutes.map((item, index) => {
                      return item.exit ?
                        <Menu.Item key={item.href}>
                          <Link href={item.href}>
                            <a onClick={this.onExit.bind(this)}>{item.txt}</a>
                          </Link>
                        </Menu.Item>
                        :
                        <Menu.Item key={item.href}>
                          <Link href={item.href}>
                            <a>{item.txt}</a>
                          </Link>
                        </Menu.Item>

                    })
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

