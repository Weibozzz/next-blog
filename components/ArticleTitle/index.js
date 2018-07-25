import React,{Component} from 'react';
import {connect} from 'react-redux';
import { List, Avatar, Icon ,Divider,Row,Col} from 'antd';
import {formatTime} from '../../until';
import {COLORS_ARR} from '../../config/constantsData';
import {DEFAULT_TAG_ARR,getRandomMarginTop,getRandomMarginLeft,getRandomTxt} from '../../config/constantTag';
import Ad from '../Ad';
import './index.less'


const ArticleTitle = (...args)=>{
  const {detailArticle={},commentsData=[]} = args[0];
  let hasUrlComment = commentsData.filter(v=>v.website!=='').slice(0,10)
  if(hasUrlComment.length<10){
    hasUrlComment=[...hasUrlComment,...DEFAULT_TAG_ARR].slice(0,10)
  }
  let {title,createTime,user,visitor,lastModify,modifyCount,type='js',url='',like=0} = detailArticle
  if(lastModify===0){
    lastModify=createTime
  }
  return (
    <div className="article-title-component ">
      <Row>
        <Col sm={{ span: 24}}
             xs={{ span: 24}}
             lg={{ span: 15}}>

          <h1>{title}</h1>
          <p className="tag-wrapper">
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
          <Ad dataSource={hasUrlComment}/>
        {/*  <div className="content">
            {
              hasUrlComment.map((v,index)=>{
                let ran = Math.random()*COLORS_ARR.length | 0;
                let color = COLORS_ARR[ran];
                return (
                  <a key={index} className="link-friends-a"
                     style={{marginLeft:getRandomMarginLeft(),marginTop:getRandomMarginTop()}}
                     href={v.website} target="_blank" title={v.user}>
                    <span style={{backgroundColor:color}}>{getRandomTxt(v.user)}</span>
                  </a>
                );
              })
            }
          </div>
          <div className="remark" title="想展示你的友情链接？赶快评论吧，这里会加上你的友链。">
            <a className="my-link" href="#comment">想展示你的友情链接？</a>
          </div>*/}
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
const mapStateToProps = state => {
  const {getCommentsData} = state;
  return {getCommentsData};
}
export default connect(mapStateToProps)(ArticleTitle)