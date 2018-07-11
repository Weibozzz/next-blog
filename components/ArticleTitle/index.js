import React,{Component} from 'react';
import { List, Avatar, Icon ,Divider} from 'antd';
import {formatTime,getArticleInfo} from '../../until';

const ArticleTitle = ({detailArticle={}})=>{
  let {title,createTime,user,visitor,lastModify,modifyCount} = detailArticle
  if(lastModify===0){
    lastModify=createTime
  }
  return (
    <div>
      <h2>{title}</h2>
      <ul className="clearfix detail-info" >
        <li className="fl">发布时间：{formatTime(createTime)}</li>
        <li className="fl">作者：{user}</li>
        <li className="fl">浏览次数：{visitor}</li>
        <li className="fl">最后修改：{formatTime(lastModify)}</li>
        <li className="fl">修改次数：{modifyCount}</li>
      </ul>
      <Divider/>

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