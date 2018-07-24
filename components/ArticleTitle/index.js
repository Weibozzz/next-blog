import React,{Component} from 'react';
import { List, Avatar, Icon ,Divider,Row,Col} from 'antd';
import {formatTime,getArticleInfo} from '../../until';
import {COLORS_ARR} from '../../config/constantsData';
import './index.less'

const STEP = 20;
const MARGIN_TOPS = 2;
const MARGIN_LEFTS = 5;
const getRandomMarginTop = ()=>{
  return Math.floor(Math.random()*MARGIN_TOPS)*STEP;
}
const getRandomMarginLeft = ()=>{
  return Math.ceil(Math.random()*MARGIN_LEFTS)*STEP;
}

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
          <div className="content">
            {
              COLORS_ARR.map(v=>(
                <a className="link-friends-a"
                   style={{marginLeft:getRandomMarginLeft(),marginTop:getRandomMarginTop()}}
                   href="https://www.baidu.com" target="_blank">
                  <span style={{backgroundColor:v}}>{v}</span>
                </a>
              ))
            }
          </div>
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