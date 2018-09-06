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


class ListTitle extends Component {
  constructor() {
    super();
    this.state = {
      collectArr: [],
    }
  }

  componentDidMount() {
    let collectArrStr = localStorage.getItem('collectArrStr');
    let collectArr;
    try {
      collectArr = JSON.parse(collectArrStr)
    } catch (err) {
      collectArr = []
    }
    this.setState({
      collectArr
    })
  }

  onCollect(item) {
    let collectArrStr = localStorage.getItem('collectArrStr');
    try {
      collectArrStr = JSON.parse(collectArrStr) || []
    } catch (err) {
      console.log('收藏语法错误，请规范使用')
      localStorage.setItem('collectArrStr', '[]')
      collectArrStr = []
    }
    const {id} = item;
    if (collectArrStr.length) {
      let index = collectArrStr.findIndex(v => v.id === id);
      if (index === -1) {
        collectArrStr.push(item)
        localStorage.setItem('collectArrStr', JSON.stringify(collectArrStr))
      } else {
        collectArrStr.splice(index, 1);
        localStorage.setItem('collectArrStr', JSON.stringify(collectArrStr))
        console.log('文章已经收藏过了,删除收藏')
      }
    } else {
      collectArrStr.push(item);
      localStorage.setItem('collectArrStr', JSON.stringify(collectArrStr))
    }
    this.setState({
      collectArr: collectArrStr
    })
  }

  render() {
    const {dataSource = {}, searchType = ''} = this.props;
    const {listData = [], pathname = ''} = dataSource;
    let {collectArr = []} = this.state;
    if (!collectArr) {
      collectArr = []
    }
    collectArr = collectArr.map(v => v.id)
    const noeDate = Date.now() / 1000 | 0;
    const diff = noeDate - 10 * 24 * 60 * 60;
    //随机图片   热门文章（每一页排名前三）  最新文章（最近10天）
    let randomArr = [], hotData = [], newData = [];

    if (listData.length && pathname) {
      randomArr = getRandomArr(lifeImages, listData.length);
      hotData = listData.map(v => ({id: v.id, visitor: v.visitor})).sort((a, b) => b.visitor - a.visitor).slice(0, 3)
      newData = listData.filter(v => v.createTime - diff >= 0).map(v => v.id);
    }
    return (
      <List
        className="list-title-wrapper"
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        footer={<div style={{color: '#999'}}>我是有底线的 ……</div>}
        renderItem={(item, index) => {
          let lifeImageSrc = randomArr.length ? randomArr[index] : null;

          let ResultLifeUrl = lifeImageSrc !== null && lifeImages[lifeImageSrc].dl_remove_attname_url;

          let isIcon = pathname === '';
          const {type = ['js']} = item;
          const srcImg = type.split(',')[0] || 'js';
          const qiniu_srcImg = qiniuyun_cdn_icon[srcImg] || qiniuyun_cdn_icon.others;
          let isCollect = collectArr.indexOf(item.id) !== -1;
          return (
            <List.Item
              key={item.title}
              className={isIcon ? '' : 'life-img-wrapper'}
              actions={[
                formatTime(item.createTime),
                <Tooltip placement="right" title={`点击${isCollect?'取消收藏':'收藏'}`}>
                  <span style={{color: isCollect ? 'rgb(255, 0, 96)' : ''}} onClick={this.onCollect.bind(this, item)}>
                      <IconText type={isCollect ? 'star' : 'star-o'} text="157"/>
                   </span>
                </Tooltip>,
                <IconText type="like-o" text={item.like}/>,
                <IconText type="message" text="2"/>,
                <Tooltip placement="right" title={`阅读量 ${item.visitor}`}>
                  <span>
                    <IconText type="eye-o" text={item.visitor}/>
                  </span>
                </Tooltip>,
              ]}
              extra={isIcon ?
                <img className="icon-img" width={40} alt={srcImg} src={qiniu_srcImg}/>
                :
                <img className="life-img" width={272} alt={srcImg} src={ResultLifeUrl}/>}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar}/>}
                title={
                  <Link as={`/p/${item.id}`} href={`/detail?id=${item.id}`}>
                    <a className="article-title">
                      <Tooltip placement="top" title={item.title}>
                        <div className="article-status">{item.title}</div>
                      </Tooltip>
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
                      {
                        type.split(',').map((v, index) => (
                          <span style={{marginLeft: index === 0 ? 10 : 0}} key={v} className="tag">{v}</span>))
                      }


                    </a>
                  </Link>
                }
                description={pathname === '' ? searchType === 'article' ? '暂不支持模糊查询高亮，可以点击进去搜索' : '' : item.short}
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
}

export default ListTitle
