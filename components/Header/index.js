import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb, Row, Col} from 'antd';
import Link from 'next/link'
import Head from 'next/head';
import TopTips from '../../components/TopTips';
import * as ROUTER from '../../config/constantsData';

const {Header, Content} = Layout;
const routes = [
  {
    href: ROUTER.INDEX,
    txt: ROUTER.INDEX_TXT
  },
  {
    href: ROUTER.BLOG,
    txt: ROUTER.BLOG_TXT
  },
  {
    href: ROUTER.ADMIN,
    txt: ROUTER.ADMIN_TXT
  },
  {
    href: ROUTER.LIFE,
    txt: ROUTER.LIFE_TXT
  },
  {
    href: ROUTER.TEST,
    txt: ROUTER.TEST_TXT
  },
  {
    href: ROUTER.POST_ARTICLE,
    txt: ROUTER.POST_ARTICLE_TXT
  },
  {
    href: 'Test2',
    txt: '测试2'
  },
]
const TopNav = (props) => (
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
                routes.map((item,index)=>(
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
)
export default TopNav

