import React, {Component} from 'react'
import {
  Layout, Menu, Breadcrumb, Row, Col,
  List, Avatar, Icon, Pagination, Alert, Input, Button, Radio, Tooltip
} from 'antd'
import {connect} from 'react-redux'
import Link from 'next/link';

import {formatTime, getRandomArr} from '../../until';
import {ARTICLE_TYPE_ICON, LIFE_IMAGE} from '../../config/constantsData';
import * as ROUTER from "../../config/constantsData";
import {qiniuyun_cdn_all_type, qiniuyun_cdn_icon} from '../../config/qiniuyun_cdn';
import './index.less'

const lifeImages = qiniuyun_cdn_all_type.lifeImages;
const IconText = ({type, text}) => (
  <span>
    <Icon type={type} style={{marginRight: 8}}/>
    {text}
  </span>
)
const ListTitle = ({dataSource = {}}) => {
  const {listData = [], pathname = ''} = dataSource;
  const noeDate = Date.now() / 1000 | 0;
  const diff = noeDate - 10 * 24 * 60 * 60;
  //随机图片   热门文章（每一页排名前三）  最新文章（最近10天）
  let randomArr = [], hotData = [], newData = [];
  if (listData.length) {
    randomArr = getRandomArr(lifeImages, listData.length);
    hotData = listData.map(v => ({id: v.id, visitor: v.visitor})).sort((a, b) => b.visitor - a.visitor).slice(0, 3)
    newData = listData.filter(v => v.createTime - diff >= 0).map(v => v.id);
  }
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={listData}
      footer={<div style={{color: '#999'}}>我是有底线的 ……</div>}
      renderItem={(item, index) => {
        let lifeImageSrc = randomArr.length ? randomArr[index] : '';
        let ResultLifeUrl = lifeImages[lifeImageSrc].dl_remove_attname_url;
        let isIcon = pathname === '';
        return (
          <List.Item
            key={item.title}
            className={isIcon ? '' : 'life-img-wrapper'}
            actions={[
              formatTime(item.createTime),
              <IconText type="star-o" text="156"/>,
              <IconText type="like-o" text={item.like}/>,
              <IconText type="message" text="2"/>,
              <IconText type="eye-o" text={item.visitor}/>,
            ]}
            extra={isIcon ?
              <img className="icon-img" width={40} alt="logo" src={qiniuyun_cdn_icon[item.type]}/>
              :
              <img className="life-img" width={272} alt="logo" src={ResultLifeUrl}/>}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar}/>}
              title={
                <Link as={`/p/${item.id}`} href={`/detail?id=${item.id}`}>
                  <a className="article-title">
                    <div className="article-status">{item.title}</div>
                    {
                      hotData.map(v => v.id).indexOf(item.id) !== -1
                        ? <div className='article-status hot'>HOT</div>
                        : ''
                    }
                    {
                      newData.indexOf(item.id) !== -1 ?
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
