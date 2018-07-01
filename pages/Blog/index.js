import React, {Component} from 'react'
import {Layout, Menu, Breadcrumb, Row, Col} from 'antd'
import {List, Avatar, Icon, Pagination, Alert, Input, Button, Radio, Tooltip, Spin} from 'antd'
import {connect} from 'react-redux'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link';

import {serverRenderIncrementCount,getBlogItemList} from '../../store/store'
import Header from '../../components/Header';
import Head from 'next/head'
import ListTitle from '../../components/ListTitle';
import Footer from '../../components/Footer';

const {Content} = Layout;
const Search = Input.Search;



class Blog extends Component {
  constructor() {
    super()
    this.state = {
      pageNum: 10,
      currentPage: 1
    }
  }
  onSearch(){

  }
  onChange(page,pageSize){
    const {dispatch} = this.props
    this.setState({
      currentPage: page
    })
    getBlogItemList(dispatch,`http://www.liuweibo.cn/getBlog?type=all&num=${page}&pageNum=10`)
  }
  itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <a>Previous</a>;
    } else if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  }
  render() {
console.log(this.props)
    return (
      <div className="Blog">
        <Head>
          <title>blog</title>
        </Head>
        <Header/>
        <Layout>
          <Content style={{padding: '0 50px'}}>
            <Row gutter={16}>
              <Col className="gutter-row" span={22}>
                <Search placeholder="input search text" onSearch={this.onSearch.bind(this)} enterButton="Search"
                        size="large"/>
              </Col>
              <Col className="gutter-row" span={2}>
                <Link href={`/PostArticle`}>
                  <a>
                    <Button size="large" type="primary">发布文章</Button>
                  </a>
                </Link>
              </Col>
            </Row>
            <div style={{background: '#fff', padding: 24, minHeight: 380}}>
              <ListTitle listData={this.props.res} />

              <Pagination total={100} itemRender={this.itemRender.bind(this)} onChange={this.onChange.bind(this)}/>
            </div>
          </Content>
        </Layout>
        <Footer/>
      </div>
    )
  }
}
Blog.getInitialProps = async function ({ reduxStore, req}) {
  const isServer = !!req
  const blogData = await fetch('http://www.liuweibo.cn/getBlog?type=all&num=1&pageNum=10')
  const blogDataJson = await blogData.json()
  reduxStore.dispatch(serverRenderIncrementCount(isServer,blogDataJson))
  return {}
}
const mapStateToProps = state=>{
  console.log(state)
  const {res} = state
  return {res};
}
export default connect(mapStateToProps)(Blog)
