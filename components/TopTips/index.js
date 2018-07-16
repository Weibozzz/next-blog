import React, { Component } from 'react'
import Link from 'next/link';
import Router from 'next/router'
import { withRouter } from 'next/router'
import { Layout, Menu, Breadcrumb, Row, Col ,List, Avatar, Icon,Pagination,Alert,Input,Button,Radio,Tooltip   } from 'antd'

import {GITHUB_ADDRESS,TOP_TIPS} from '../../config/constantsData';

let routerUrl;
Router.onRouteChangeStart = (url) => {
  routerUrl=url;
  // console.log(`Loading: ${url}`)
}
const TopTips = ({router})=>{
  const {pathname} = router;
  let resultPathname = routerUrl||pathname;
/*  console.log(resultPathname)
  const pathnameMapping = {
    '':['网站首页'],
    '/Blog':['文章列表'],
    '/Admin':['后台管理'],
    '/Life':['生活记录'],
    '/About':['关于我'],
    '/PostArticle':['发布文章'],
  }
  const BreadcrumbItemList = [
    {
      key:resultPathname,
      value:pathnameMapping[resultPathname]
    }
  ]
  console.log(BreadcrumbItemList)*/
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
    {/*  <Breadcrumb style={{margin: '16px 0'}}>
        {
          resultPathname==='/detail'&&BreadcrumbItemList.map((v,index)=>{
            return (

              <Breadcrumb.Item key={index}>
                <Link  href={v.key}>
                  <a>{v.value}</a>
                </Link>
              </Breadcrumb.Item>
            );
          })
        }

      </Breadcrumb>*/}
    </div>
  );
}
export default withRouter(TopTips)
