import React, { Component } from 'react';
import {
  List, Avatar, Icon
} from 'antd';
import Link from 'next/link';

import { formatTime, getRandomArr } from '../../until';
import { qiniuyun_cdn_all_type, qiniuyun_cdn_icon } from '../../config/qiniuyun_cdn';
import './index.less';

const { lifeImages } = qiniuyun_cdn_all_type;
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);


class ListTitle extends Component {
  constructor() {
    super();
    this.state = {
      collectArr: [],
    };
  }

  componentDidMount() {
    const collectArrStr = localStorage.getItem('collectArrStr');
    let collectArr;
    try {
      collectArr = JSON.parse(collectArrStr);
    } catch (err) {
      collectArr = [];
    }
    this.setState({
      collectArr
    });
  }

  onCollect(item) {
    let collectArrStr = localStorage.getItem('collectArrStr');
    try {
      collectArrStr = JSON.parse(collectArrStr) || [];
    } catch (err) {
      console.log('收藏语法错误，请规范使用');
      localStorage.setItem('collectArrStr', '[]');
      collectArrStr = [];
    }
    const { id } = item;
    if (collectArrStr.length) {
      const index = collectArrStr.findIndex(v => v.id === id);
      if (index === -1) {
        collectArrStr.push(item);
        localStorage.setItem('collectArrStr', JSON.stringify(collectArrStr));
      } else {
        collectArrStr.splice(index, 1);
        localStorage.setItem('collectArrStr', JSON.stringify(collectArrStr));
        console.log('文章已经收藏过了,删除收藏');
      }
    } else {
      collectArrStr.push(item);
      localStorage.setItem('collectArrStr', JSON.stringify(collectArrStr));
    }
    this.setState({
      collectArr: collectArrStr
    });
  }

  render() {
    const { dataSource = {}, searchType = '' } = this.props;
    const { listData = [], pathname = '' } = dataSource;
    let { collectArr = [] } = this.state;
    if (!collectArr) {
      collectArr = [];
    }
    collectArr = collectArr.map(v => v.id);
    const noeDate = Date.now() / 1000 | 0;
    const diff = noeDate - 10 * 24 * 60 * 60;
    // 随机图片   热门文章（每一页排名前三）  最新文章（最近10天）
    let randomArr = [];
    let hotData = [];
    let
      newData = [];

    if (listData.length && pathname) {
      randomArr = getRandomArr(lifeImages, listData.length);
      hotData = listData.map(v => ({ id: v.id, visitor: v.visitor }))
        .sort((a, b) => b.visitor - a.visitor)
        .slice(0, 3);
      newData = listData.filter(v => v.createTime - diff >= 0).map(v => v.id);
    }
    return (
      <List
        className="list-title-wrapper"
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        footer={<div style={{ color: '#999' }}>我是有底线的 ……</div>}
        renderItem={(item, index) => {
          const lifeImageSrc = randomArr.length ? randomArr[index] : null;

          const ResultLifeUrl = lifeImageSrc !== null
            && lifeImages[lifeImageSrc].dl_remove_attname_url;

          const isIcon = pathname === '';
          const { type = ['js'] } = item;
          const srcImg = type.split(',')[0] || 'js';
          const qiniu_srcImg = qiniuyun_cdn_icon[srcImg] || qiniuyun_cdn_icon.others;
          const isCollect = collectArr.indexOf(item.id) !== -1;
          return (
            <List.Item
              key={item.title}
              className={isIcon ? '' : 'life-img-wrapper'}
              actions={[
                formatTime(item.createTime),
                <span onClick={this.onCollect.bind(this, item)} style={{ color: isCollect ? 'rgb(255, 0, 96)' : '' }}>
                  <IconText type={isCollect ? 'star' : 'star-o'} text="157" />
                </span>,
                <IconText type="like-o" text={item.like} />,
                <IconText type="message" text="2" />,
                <IconText type="eye-o" text={item.visitor} />,
              ]}
              extra={isIcon
                ? <img className="icon-img" width={40} alt={srcImg} src={qiniu_srcImg} />
                : <img className="life-img" width={272} alt={srcImg} src={ResultLifeUrl} />}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={(
                  <Link as={`/p/${item.id}`} href={`/detail?id=${item.id}`}>
                    <a className="article-title">
                      <div className="article-status">{item.title}</div>
                      {
                        hotData.map(v => v.id).indexOf(item.id) !== -1
                          ? <div className="article-status hot">HOT</div>
                          : ''
                      }
                      {
                        newData.indexOf(item.id) !== -1
                          ? <div className="article-status new">HEW</div>
                          : ''
                      }
                      {
                        type.split(',').map((v, typeIndex) => (
                          <span style={{ marginLeft: typeIndex === 0 ? 10 : 0 }} key={v} className="tag">{v}</span>))
                      }


                    </a>
                  </Link>
                )}
                description={pathname === '' ? searchType === 'article' ? '暂不支持模糊查询高亮，可以点击进去搜索' : '' : item.short}
              />
              {
                pathname === '' ? ''
                  : (
                    <Link as={`/p/${item.id}`} href={`/detail?id=${item.id}`}>
                      <a> 阅读全文......</a>
                    </Link>
                  )
              }
            </List.Item>
          );
        }}
      />
    );
  }
}

export default ListTitle;
