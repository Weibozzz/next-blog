import React, {Component} from 'react';
import Head from 'next/head';
import * as ROUTER from '../../config/constantsData';

const MyHead = ()=>(
  <Head>

    <meta charSet="utf-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1"/>
    <meta name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/>
    <meta name="renderer" content="webkit"/>
    <meta httpEquiv="description" content="刘伟波-伟波前端"/>
    <meta name="Keywords" content={ROUTER.KEYWORDS}/>
    <meta name="Description" content={ROUTER.Description}/>
    <meta name="author" content="刘伟波,liuweibo"/>
    <link rel='stylesheet' href='/static/css/iconfont/iconfont.css'/>
    <link rel='stylesheet' type='text/css' href='/static/css/nprogress.css' />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css" />
    <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
    <script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>
    <script src="https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js"></script>
    <title>{ROUTER.INDEX_TITLE} &raquo; {ROUTER.COMMON_TITLE}</title>
  </Head>
)
export default MyHead

