import React, {Component} from 'react'
import {Layout, Menu, Breadcrumb, Row, Col, List, Avatar, Icon, Pagination, Alert, Input, Button, Select} from 'antd'
import {connect} from 'react-redux'
import Head from 'next/head';

import EditArticle from '../../components/EditArticle';

const {Content} = Layout;
const {TextArea} = Input;
const Option = Select.Option;



class PostArticle extends Component {
  constructor() {
    super()
    this.state = {

    }

  }




  render() {
    return (
      <div>
        <Head>
          <title>发布文章</title>
        </Head>
        <div className="post-article">
          <Layout>
            <Content style={{padding: '0 50px'}}>
              <EditArticle/>
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default connect()(PostArticle)
