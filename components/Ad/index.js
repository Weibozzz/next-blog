import React, { Component } from 'react';
import Link from 'next/link';
import { COLORS_ARR } from '../../config/constantsData';
import { getRandomMarginTop, getRandomMarginLeft, getRandomTxt } from '../../config/constantTag';

class Ad extends Component {
  shouldComponentUpdate({ dataSource }) {
    const { dataSource: hasUrlComment } = this.props;
    return dataSource.length !== hasUrlComment.length;
  }

  render() {
    const { dataSource: hasUrlComment } = this.props;
    return (
      <div className="ad-wrapper ">
        <div className="content">
          {
            hasUrlComment.map((v) => {
              const ran = Math.random() * COLORS_ARR.length | 0;
              const color = COLORS_ARR[ran];
              return (
                <Link key={v.user} href={v.website}>
                  <a
                    className="link-friends-a"
                    style={{ marginLeft: getRandomMarginLeft(), marginTop: getRandomMarginTop() }}
                    target="_blank"
                    title={v.user}
                  >
                    <span style={{ backgroundColor: color }}>{getRandomTxt(v.user)}</span>
                  </a>
                </Link>

              );
            })
          }
        </div>
        <div className="remark" title="想展示你的友情链接？赶快评论吧，这里会加上你的友链。">
          <a className="my-link" href="#comment">想展示你的友情链接？</a>
        </div>
      </div>
    );
  }
}

export default Ad;
