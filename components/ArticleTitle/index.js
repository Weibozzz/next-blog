import React,{Component} from 'react';
import { List, Avatar, Icon ,Divider,Row,Col} from 'antd';
import {formatTime,getArticleInfo} from '../../until';
import './index.less'

const ArticleTitle = ({detailArticle={}})=>{
  let {title,createTime,user,visitor,lastModify,modifyCount,type='js',url=''} = detailArticle
  if(lastModify===0){
    lastModify=createTime
  }
  return (
    <div className="article-title ">
      <Row>
        <Col sm={{ span: 24}}
             xs={{ span: 24}}
             lg={{ span: 15}}>

          <h2>{title}</h2>
          <p>
            {
              url===''?
                <span className="origin-article">原</span>:''
            }
            <span className="tag">{type}</span>
          </p>
          <ul className="clearfix detail-info" >
            <li className="fl">发布时间：{formatTime(createTime)}</li>
            <li className="fl">作者：{user}</li>
            <li className="fl">浏览次数：{visitor}</li>
            <li className="fl">最后修改：{formatTime(lastModify)}</li>
            <li className="fl">修改次数：{modifyCount}</li>
          </ul>
          <Divider/>
        </Col>
        <Col sm={{ span: 0}}
             xs={{ span: 0}}
             lg={{ span: 8}}
              className="advertisement-wrapper"
        >
          <div className="content"></div>
          <div className="remark" title="想展示你的友情链接？赶快评论吧，这里会加上你的友链。">
            <a className="my-link" href="#comment">想展示你的友情链接？</a>
          </div>
        </Col>
      </Row>

      <style jsx>{`
        .detail-info li{
          margin-right: 20px;
        }
        `}

      </style>
    </div>
  )
}
export default ArticleTitle