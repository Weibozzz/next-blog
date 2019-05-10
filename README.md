# next-blog

## 项目介绍
利用react服务端框架next.js写的博客，喜欢就给个Star支持一下。
[https://github.com/Weibozzz/next-blog](https://github.com/Weibozzz/next-blog)
线上地址： [http://www.liuweibo.cn](http://www.liuweibo.cn)
本项目使用next.js经验分享：[http://www.liuweibo.cn/p/206](http://www.liuweibo.cn/p/206)
另外还有一个仓库，建立自己的前端知识体系：[https://github.com/Weibozzz/Weibozzz.github.io](https://github.com/Weibozzz/Weibozzz.github.io)

## 软件架构
软件架构说明
`react.js next.js antd mysql node koa2 fetch `

## 网站使用技术

- 前端：React(16.x) Next.js antd-design fetch Less
- 后端：node框架koa和mysql （目前前后端分离，这里只负责写接口，和平常的ajax获取接口一样，这里就不开放源码了）
- 网站目的：业余学习，记录技术文章，学以致用
- 网站功能
    - markdown发布文章
    - 修改文章（增删改查）
    - 用户评论
    - 上传图片到七牛云存储
    - 点击图片预览功能
    - 支持手机自适应

## 安装教程

1. 快速开始
虽然是服务端渲染，但是也要调用接口，所以需要调用后端的接口

**进入config文件夹下的env.js的isShow设置为true**,这里只是调用了我自己线上的接口，当然你
只能看不能修改接口哦。如果为false则调不到接口，需要自己去写接口。


2. 运行
```bash
cnpm i
npm run dev
```
3. 部署
```bash
cnpm i
npm run build
npm start
```


## 使用说明

- 关于演示不能上传图片，不能发表文章或者修改属于正常情况，因为只是为了展示。
- 关于路看不到发布文章路由和后台管理也属于正常情况，可以修改代码展示路由效果。

## 网站截图

1. 详情页
![http://pd96wjt4m.bkt.clouddn.com/image/common/detail_1536836727000_459470_1536836749510.png](http://pd96wjt4m.bkt.clouddn.com/image/common/detail_1536836727000_459470_1536836749510.png)
2. 列表页
![http://pd96wjt4m.bkt.clouddn.com/image/common/list_1536836639000_822188_1536836780676.png](http://pd96wjt4m.bkt.clouddn.com/image/common/list_1536836639000_822188_1536836780676.png)
3. 编辑页面和发布文章，上传图片到七牛云
![http://pd96wjt4m.bkt.clouddn.com/image/common/edit_1536836607000_802376_1536836825962.png](http://pd96wjt4m.bkt.clouddn.com/image/common/edit_1536836607000_802376_1536836825962.png)


## 网站技术介绍
> 完全借助于 [next.js](https://github.com/zeit/next.js) 开发的个人网站，线上地址 [http://www.liuweibo.cn](http://www.liuweibo.cn) 总结一下开发完成后的心得和使用体会。gtihub源码[https://github.com/Weibozzz/next-blog](https://github.com/Weibozzz/next-blog)。喜欢就给个Star支持一下。

### 为什么使用服务器端渲染(SSR)？
- 网站是要推广的，所以需要更好的 SEO，搜索引擎可以抓取完整页面
- 访问速度，更快的加载静态页面

### 网站使用技术

- 前端：React(16.x) Next.js antd-design fetch Less
- 后端：node框架koa和mysql （目前前后端分离，这里只负责写接口，和平常的ajax获取接口一样，这里就不开放源码了）
- 网站目的：业余学习，记录技术文章，学以致用
- 网站功能
    - 发布文章
    - 修改文章（增删改查）
    - 用户评论

### 源码剖析
> 这里就只讲重点了

#### 入口文件`server.js`
这里用的官方提供的`express`，同时开启`gzip`压缩

```js
const express = require('express')
const next = require('next')

const compression = require('compression')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
let port= dev?4322:80

app.prepare()
  .then(() => {
    const server = express()

    if (!dev) {
      server.use(compression()) //gzip
    }
    //文章二级页面
    server.get('/p/:id', (req, res) => {
      const actualPage = '/detail'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost ' port)
    })
  })
  .catch((ex) => {
    process.exit(1)
  })

```
#### page根组件_app.js
用于传递redux数据,store就和普通react用法一样了，还有header和footer可以放在这里,同理还有`_err.js`用于处理404页面

```js

import App, {Container} from 'next/app'
import React from 'react'
import {withRouter} from 'next/router' // 接入next的router
import withReduxStore from '../lib/with-redux-store' // 接入next的redux
import {Provider} from 'react-redux'


class MyApp extends App {
  render() {

    const {Component, pageProps, reduxStore, router: {pathname}} = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
         <Component {...myPageProps}  />
        </Provider>

      </Container>
    )
  }
}

export default withReduxStore(withRouter(MyApp))

```
#### 网站的服务端渲染页面Blog页面
 - `link`用于跳转页面，利用as把原本的http://***.com?id=1变为漂亮的 /id/1
 - `head`可以嵌套meta标签进行seo
 - 配置不需要seo的组件

```js
import dynamic from 'next/dynamic';

//不需要seo
const DynasicTopTipsNoSsr = dynamic(import('../../components/TopTips'),{
  ssr:false
})

import React, {Component} from 'react'
import {connect} from 'react-redux'
import Router from 'next/router'
import 'whatwg-fetch' // 用于fetch请求数据
import Link from 'next/link'; // next的跳转link
import Head from 'next/head'  // next的跳转head可用于seo

class Blog extends Component {

  render() {
    return (
      <div className="Blog">
        <Head>
          <title>{BLOG_TXT}&raquo;{COMMON_TITLE}</title>
        </Head>
        <MyLayout>
          <Link   as={`/Blog/${current}`} href={`/Blog?id=${current}`}>
            <a onClick={this.onClickPageChange.bind(this)}>{current}</a>
          </Link>
        </MyLayout>
      </div>
    )
  }
}
//这里才是重点，getInitialProps方法来请求数据进行渲染，达到服务端渲染的目的
Blog.getInitialProps = async function (context) {
  const {id = 1} = context.query
  let queryStringObj = {
    type: ALL,
    num: id,
    pageNum
  }
  let queryTotalString = {type: ALL};
  const pageBlog = await fetch(getBlogUrl(queryStringObj))
  const pageBlogData = await pageBlog.json()


  return {pageBlogData}
}
// 这里根据需要传入redux
const mapStateToProps = state => {
  const {res, searchData, searchTotalData} = state
  return {res, searchData, searchTotalData};
}
export default connect(mapStateToProps)(Blog)

```

#### 静态资源
根目录创建`static`文件夹，这里是强制要求，否则加载不到静态资源
#### 配置antd和主题并且按需加载
#### 主题配置
antd-custom.less
```css
@primary-color: #722ED0;

@layout-header-height: 40px;
@border-radius-base: 0px;

```
styles.less
```css
@import "~antd/dist/antd.less";
@import "./antd-custom.less";

```
最后统一配置在公共`head`
```html
<Head>
    <meta charSet="utf-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1"/>
    <meta name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/>
    <meta name="renderer" content="webkit"/>
    <meta httpEquiv="description" content="刘伟波-天天向上"/>
    <meta name="author" content="刘伟波,liuweibo"/>
    <link rel='stylesheet' href='/_next/static/style.css'/>
    <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
    <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
  </Head>

```
#### 按需加载配置
`.babelrc`文件

```json
{
  "presets": ["next/babel"],
  "plugins": [
    "transform-decorators-legacy",
    [
      "import",
      {
        "libraryName": "antd",
        "style": "less"
      }
    ]
  ]
}

```
`next.config.js`文件配置
```js
const withLess = require('@zeit/next-less')

module.exports =   withLess(
  {
    lessLoaderOptions: {
      javascriptEnabled: true,
      cssModules: true,

    }
  }
)

```
#### 页面css
感觉和`vue`的`scope`一样，`style`的`jsx`,加了`global`为全局，否则只在这里生效
```js
render() {

    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...myPageProps}  />
        </Provider>

        <style jsx global>{`

.fl{
    float: left;
}
.fr{
    float: right;
}
        `}</style>
      </Container>
    )
```

#### 页面顶部加载进度条
```js
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()
```

#### markdown发表文章和代码高亮
使用只需要`marked('放入markdown字符串');`
```js
import marked from 'marked'
import hljs from 'highlight.js';

hljs.configure({
  tabReplace: '  ',
  classPrefix: 'hljs-',
  languages: ['CSS', 'HTML, XML', 'JavaScript', 'PHP', 'Python', 'Stylus', 'TypeScript', 'Markdown']
})
marked.setOptions({
  highlight: (code) => hljs.highlightAuto(code).value,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});
```

## 学累了，来个图放松下

![http://images.liuweibo.cn/image/common/2a35e89324d3ad64d52683ad1343732e_1535531349000_84470_1535531469641.jpg](http://images.liuweibo.cn/image/common/2a35e89324d3ad64d52683ad1343732e_1535531349000_84470_1535531469641.jpg))







## 参与贡献

1. Fork 本项目
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request


## 遗留问题

1. 访问量大的时候要做数据缓存
2. cdn  node查看图片日期
3. 配置图片描述和更改
4. 上传图片高质量暂未支持上传,上传代码改进
7. 上传为刚好1M bug
10. 登陆后支持收藏文章和修改评论
7. 发表文章如果上一篇文章被删除，自增id不是自加1，需要去查询数据库

9. 填写markdown代码高亮，类似于掘金
10. versions当天的要合并


### 待学习修改
1. 开发环境 warning.js:33 Warning: A component is `contentEditable`
5. eslint

## 关于作者 / About

- github:[https://github.com/Weibozzz](https://github.com/Weibozzz)
- 个人博客:[http://www.liuweibo.cn](http://www.liuweibo.cn)
- segmentfault:[https://segmentfault.com/u/weibozzz](https://segmentfault.com/u/weibozzz)

## 版权声明
- 所有原创文章的著作权属于 Weibozzz。

作者：刘伟波

链接：[http://www.liuweibo.cn/p/206](http://www.liuweibo.cn/p/206)

来源：[刘伟波博客](http://www.liuweibo.cn)

本文原创版权属于刘伟波 ，转载请注明出处，谢谢合作

