import React, {Component} from 'react'
import {Layout, Menu, Breadcrumb, Row, Col} from 'antd'
import {List, Avatar, Icon, Pagination, Alert, Input, Button, Radio, Tooltip} from 'antd'
import {connect} from 'react-redux'
import Link from 'next/link';

import {formatTime,getRandomArr} from '../../until';
import {ARTICLE_TYPE_ICON,LIFE_IMAGE} from '../../config/constantsData';
import * as ROUTER from "../../config/constantsData";
import './index.less'

const IconText = ({type, text}) => (
  <span>
    <Icon type={type} style={{marginRight: 8}}/>
    {text}
  </span>
)
const ListTitle = ({dataSource={}}) => {
  const {listData=[],pathname=''} = dataSource;
  const noeDate = Date.now() / 1000 |0;
  const diff =noeDate- 10 * 24 *60 *60;
  //随机图片   热门文章（每一页排名前三）  最新文章（最近10天）
  let randomArr=[],hotData=[],newData=[];
  if(listData.length){
    randomArr = getRandomArr(LIFE_IMAGE,listData.length);
    hotData=listData.map(v=>({id:v.id,visitor:v.visitor})).sort((a,b)=>b.visitor-a.visitor).slice(0,3)
    newData=listData.filter(v=>v.createTime-diff>=0).map(v=>v.id);
  }
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={listData}
      footer={<div style={{color:'#999'}}>我是有底线的 ……</div>}
      renderItem={(item,index) => {
        let lifeImageSrc = randomArr.length?randomArr[index]:'';
        return (
          <List.Item
            key={item.title}
            actions={[
              formatTime(item.createTime),
              <IconText type="star-o" text="156"/>,
              <IconText type="like-o" text={item.like}/>,
              <IconText type="message" text="2"/>,
              <IconText type="eye-o" text={item.visitor}/>,
            ]}
            extra={pathname === '' ?
              <img className="img" width={40} alt="logo" src={ARTICLE_TYPE_ICON[item.type]}/>
              :
              <img className="img" width={272} alt="logo" src={LIFE_IMAGE[lifeImageSrc]}/>}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar}/>}
              title={
                <Link as={`/p/${item.id}`} href={`/detail?id=${item.id}`}>
                  <a className="article-title">
                    <div className="article-status">{item.title}</div>
                    {
                      hotData.map(v=>v.id).indexOf(item.id)!==-1
                      ?<div className='article-status hot'>HOT</div>
                        :''
                    }
                    {
                      newData.indexOf(item.id)!==-1?
                        <div className='article-status new'>HEW</div>
                        :
                        ''
                    }


                    </a>
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
        );
      }}
    />
  );
}
export default ListTitle
