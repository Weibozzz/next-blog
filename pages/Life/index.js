import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  Layout, Menu, Breadcrumb, Row, Col,
  List, Avatar, Icon, Pagination, Alert,
  Input, Button, Radio, Tooltip, Spin
} from 'antd'

import 'whatwg-fetch'
import Head from 'next/head'

import {getLifeList} from '../../store/actions'
import ListTitle from '../../components/ListTitle';
import {getLifeUrl} from '../../config';
import {COMMON_TITLE,LIFE_TXT} from '../../config/constantsData';

const {Content} = Layout;


class Life extends Component {
  constructor() {
    super()
    this.state = {
    }
  }
  componentWillMount(){
    const {dispatch} = this.props;
    getLifeList(dispatch, getLifeUrl())
  }

  render() {

    const {lifeData:listData} = this.props
    return (
      <div className="life">
        <Head>
          <title>{LIFE_TXT}{COMMON_TITLE}</title>
        </Head>
        <Layout>
          <Content style={{padding: '0 50px'}}>
            <div style={{background: '#fff', padding: 24, minHeight: 380}}>
              <ListTitle dataSource={{listData,pathname:'Life'}}/>

            </div>
          </Content>
        </Layout>
      </div>
    )
  }
}

//这里根据需要传入redux
const mapStateToProps = state => {
  const {lifeData} = state
  return {lifeData};
}

export default connect(mapStateToProps)(Life)
