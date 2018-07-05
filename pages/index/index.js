import React from 'react'
import {connect} from 'react-redux'
import Head from 'next/head'
import {Button,Switch} from 'antd';

class Index extends React.Component {


  render () {
    return (
      <div>
        <Head>
          <title>刘伟波博客</title>
        </Head>
        <h1>请看其他页面</h1>


      </div>
    )
  }
}

export default connect()(Index)