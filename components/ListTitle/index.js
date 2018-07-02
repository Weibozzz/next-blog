import React, {Component} from 'react'
import {Layout, Menu, Breadcrumb, Row, Col} from 'antd'
import {List, Avatar, Icon, Pagination, Alert, Input, Button, Radio, Tooltip} from 'antd'
import {connect} from 'react-redux'
import Link from 'next/link';

import {formatTime} from '../../until';

const IconText = ({type, text}) => (
  <span>
    <Icon type={type} style={{marginRight: 8}}/>
    {text}
  </span>
)
const pathname = ''
const ListTitle = ({listData}) => (
  <List
    itemLayout="vertical"
    size="large"
    dataSource={listData}
    footer={<div><b>ant design</b> footer part</div>}
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          formatTime(item.createTime),
          <IconText type="star-o" text="156"/>,
          <IconText type="like-o" text={item.like}/>,
          <IconText type="message" text="2"/>,
          <IconText type="eye-o" text={item.visitor}/>,
        ]}
        extra={pathname === '' ? '' :
          <img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>}
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar}/>}
          title={
            <Link as={`/p/${item.id}`} href={`/detail?id=${item.id}`}>
              <a>{item.title}</a>
            </Link>
          }
          description={pathname === '' ? '' : item.short}
        />
        {
          pathname === '' ? '' :
            <Link as={`/p/${item.id}`} href={`/detail?id=${item.id}`}>
              <a> 阅读全文......</a>
            </Link>
        }
      </List.Item>
    )}
  />
)
export default ListTitle
