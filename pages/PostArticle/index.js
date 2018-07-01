import React, {Component} from 'react'
import {Layout, Menu, Breadcrumb, Row, Col} from 'antd'
import {List, Avatar, Icon, Pagination, Alert, Input, Button,Select } from 'antd'
import {connect} from 'react-redux'
import Head from 'next/head';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const {Content} = Layout;
const {TextArea} = Input;
const Option = Select.Option;

const PostArticle = props=>(
  <div>

    <Head>
      <title>发布文章</title>
    </Head>
      <Header/>
      发布文章
      <Footer/>
  </div>
)
export default connect()(PostArticle)
