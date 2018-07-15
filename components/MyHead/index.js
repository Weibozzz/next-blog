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
    <meta httpEquiv="description" content="刘伟波-天天向上"/>
    <meta name="Keywords" content={ROUTER.KEYWORDS}/>
    <meta name="Description" content={ROUTER.Description}/>
    <meta name="author" content="刘伟波,liuweibo"/>
    <link rel='stylesheet' href='/_next/static/style.css'/>
    <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
    <title>{ROUTER.INDEX_TITLE} &raquo; {ROUTER.COMMON_TITLE}</title>
  </Head>
)
export default MyHead

