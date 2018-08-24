import React,{Component} from 'react';
import {connect} from 'react-redux';
import { List, Avatar, Icon ,Divider,Row,Col} from 'antd';
import {formatTime,regUrl} from '../../until';
import {COLORS_ARR} from '../../config/constantsData';
import {DEFAULT_TAG_ARR,getRandomMarginTop,getRandomMarginLeft,getRandomTxt} from '../../config/constantTag';
import Ad from '../Ad';
import './index.less'


const ArticleTitle = (...args)=>{
  const {detailArticle={},commentsData=[]} = args[0];
  let hasUrlComment = commentsData.filter(v=>regUrl.test(v.website)).slice(0,10)
  if(hasUrlComment.length<10){
    hasUrlComment=[...hasUrlComment,...DEFAULT_TAG_ARR].slice(0,10)
  }
  let {title,createTime,user,visitor,lastModify,modifyCount,type=['js'],url='',like=0} = detailArticle
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
            {
              type.split(',').map(v=>(<span key={v} className="tag">{v}</span>))
            }

          </p>
          <ul className="clearfix detail-info" >
            <li className="fl">发布时间：{formatTime(createTime)}</li>
            <li className="fl"><Icon type="user" /> {user}</li>
            <li className="fl"><Icon type="eye" /> {visitor}</li>
            <li className="fl"><Icon type="edit" /> {formatTime(lastModify)}</li>
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
