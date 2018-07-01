import React from 'react'
import {connect} from 'react-redux'
import fetch from 'isomorphic-unfetch'
import {startClock,asyncTest, serverRenderClock,incrementCount,serverRenderIncrementCount} from '../../store/store'
import Examples from '../../components/examples'
import Head from 'next/head'
import {Button,Switch} from 'antd';
import Header from '../../components/Header';

class Index extends React.Component {
  static async getInitialProps ({ reduxStore, req}) {
    const isServer = !!req
    const blogData = await fetch('http://www.liuweibo.cn/getBlog?type=all&num=1&pageNum=10')
    const blogDataJson = await blogData.json()
    reduxStore.dispatch(serverRenderClock(isServer))
    reduxStore.dispatch(serverRenderIncrementCount(isServer,blogDataJson))
    return {}
  }

  componentDidMount () {
    const {dispatch} = this.props
     this.timer = startClock(dispatch)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div>
        <Head>
          <title>刘伟波博客</title>
        </Head>
        <Header/>
        <Examples />
        <Button type="primary">Primary</Button>
        <Switch defaultChecked name='switch' />


      </div>
    )
  }
}

export default connect()(Index)