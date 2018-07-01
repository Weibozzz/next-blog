import React from 'react'
import {connect} from 'react-redux'
import fetch from 'isomorphic-unfetch'
import {startClock,asyncTest, serverRenderClock,incrementCount,serverRenderIncrementCount} from '../../store/store'
import Examples from '../../components/examples'
import Head from 'next/head'
import {Button,Switch} from 'antd';
import Header from '../../components/Header';

class Admin extends React.Component {

  render () {
    return (
      <div>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <link rel='stylesheet' href='/_next/static/style.css' />
          <title>admin</title>
        </Head>
        <Header/>
        <Button type="primary">Primary</Button>
        <Switch defaultChecked name='switch' />
      </div>
    )
  }
}

export default connect()(Admin)