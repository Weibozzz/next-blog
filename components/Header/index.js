import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Layout, Menu, Breadcrumb, Row, Col} from 'antd';
import Link from 'next/link'
// prefetch预加载
import dynamic from 'next/dynamic';
import * as ROUTER from '../../config/constantsData';
import {postAdminPasswordUrl} from '../../config';
import {postAdminPassword} from '../../store/actions';
import MyHead from '../../components/MyHead';
import {LINK_ABOUT_ME} from "../../config/constantsData";

//toptis不需要seo
const DynasicTopTipsNoSsr = dynamic(import('../../components/TopTips'),{
  ssr:false
})
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
    const {userAgent='pc'} = this.props;
    if (Object.prototype.toString.call(selectedKeys) === '[object String]') {
      selectedKeys = ['/']
    }
    const regSelectKey = /\/Blog[\/]?[0-9]?/;
    if(selectedKeys[0]&&regSelectKey.test(selectedKeys[0])){
      selectedKeys=['/Blog']
    }
    let newRoutes;
    if (isLogin) {
      newRoutes = routes
    } else {
      newRoutes = routes.filter(v => !v.isSuperAdmin)
    }
    return (
      <div>
        <MyHead/>
        <Layout>
          <Header style={{position: userAgent==='pc'?'fixed':'static', height: '64px', width: '100%', padding: 0, zIndex: 10}}>
            <Row>
              <Col span={2}></Col>
              <Col sm={{ span: 24 }}
                   xs={{ span: 24 }}
                   lg={{ span: 17}}>
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
                          <Link prefetch href={item.href}>
                            <a onClick={this.onExit.bind(this)}>{item.txt}</a>
                          </Link>
                        </Menu.Item>
                        :
                        <Menu.Item key={item.href}>
                          <Link prefetch href={item.href}>
                            <a>{item.txt}</a>
                          </Link>
                        </Menu.Item>

                    })
                  }
                </Menu>
              </Col>
            </Row>
          </Header>

          <Row>
            <Col sm={{ span: 24, offset: 0 }}
                 xs={{ span: 24, offset: 0 }}
                 lg={{ span: 20, offset: 2}}>

              <Content style={{ marginTop: 64}}>
                <DynasicTopTipsNoSsr/>
              </Content>
            </Col>
          </Row>
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

