import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb, Row, Col} from 'antd';
import Link from 'next/link'
import Head from 'next/head';
import TopTips from '../../components/TopTips';

const {Header,Content} = Layout;

const TopNav =(props)=> (
  <div>
      <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <link rel='stylesheet' href='/_next/static/style.css' />
      </Head>
      <Layout>
          <Header style={{position: 'fixed',height:'64px', width: '100%', padding: 0, zIndex: 10}}>
              <Row>
                  <Col span={2}></Col>
                  <Col span={17}>
                      <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{lineHeight: '64px'}}
                      >
                          <Menu.Item key="1">
                              <Link href="/">
                                  <a>网站首页</a>
                              </Link>
                          </Menu.Item>
                          <Menu.Item key="2">
                              <Link href="/Blog">
                                  <a>文章列表</a>
                              </Link>
                          </Menu.Item>
                          <Menu.Item key="3">
                              <Link href="/Admin">
                                  <a>前端技术</a>
                              </Link>
                          </Menu.Item>
                          <Menu.Item key="4">
                              <Link href="/Life">
                                  <a> 生活与创作</a>
                              </Link>
                          </Menu.Item>
                          <Menu.Item key="5">
                              <Link href="/Test">
                                  <a>建议与反馈</a>
                              </Link>
                          </Menu.Item>
                          <Menu.Item key="6">
                              <Link href="/PostArticle">
                                  <a>发布文章</a>
                              </Link>
                          </Menu.Item>
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

