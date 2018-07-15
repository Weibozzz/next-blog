import React, { Component } from 'react'
import Link from 'next/link';
import { withRouter } from 'next/router'
import { Layout, Menu, Breadcrumb, Row, Col ,List, Avatar, Icon,Pagination,Alert,Input,Button,Radio,Tooltip   } from 'antd'

import {GITHUB_ADDRESS,TOP_TIPS} from '../../config/constantsData';


const TopTips = ({router})=>{
  const {pathname} = router;
  const pathBreancrumbList = [
    {
      key:'',
      value:['网站首页']
    },
    {
      key:'/Blog',
      value:['文章列表']
    },
    {
      key:'/Admin',
      value:['后台管理']
    },
    {
      key:'/Life',
      value:['生活记录']
    },
    {
      key:'/PostArticle',
      value:['发布文章']
    },
  ]
  const BreadcrumbItemList = ['']
  return (
    <div className="Blog">
      <Alert
        message={TOP_TIPS}
        type="warning"
        closable
        banner={true}
      />
      <div>
        <Button href={GITHUB_ADDRESS} icon="github">Github</Button>
      </div>
      {/*<Breadcrumb style={{margin: '16px 0'}}>
        {
          BreadcrumbItemList.map((v,index)=>{
            return (

              <Breadcrumb.Item key={index}>
                <Link  href='javascript:;'>
                  <a>{v}</a>
                </Link>
                网站首页
              </Breadcrumb.Item>
            );
          })
        }

      </Breadcrumb>*/}
    </div>
  );
}
export default withRouter(TopTips)
