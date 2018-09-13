# next-blog

#### 项目介绍
利用react服务端框架next.js写的博客，喜欢就给个Star支持一下。
[https://github.com/Weibozzz/next-blog](https://github.com/Weibozzz/next-blog)
线上地址： [http://www.liuweibo.cn](http://www.liuweibo.cn)
本项目使用next.js经验分享：[http://www.liuweibo.cn/p/206](http://www.liuweibo.cn/p/206)

#### 软件架构
软件架构说明
`react.js next.js antd mysql node koa2 fetch `

#### 网站使用技术

- 前端：React(16.x) Next.js antd-design fetch Less
- 后端：node框架koa和mysql （目前前后端分离，这里只负责写接口，和平常的ajax获取接口一样，这里就不开放源码了）
- 网站目的：业余学习，记录技术文章，学以致用
- 网站功能
    - markdown发布文章
    - 修改文章（增删改查）
    - 用户评论
    - 上传图片到七牛云存储

#### 安装教程

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


#### 使用说明

- 关于演示不能上传图片，不能发表文章或者修改属于正常情况，因为只是为了展示。
- 关于路看不到发布文章路由和后台管理也属于正常情况，可以修改代码展示路由效果。

#### 网站截图

1. 详情页
![http://pd96wjt4m.bkt.clouddn.com/image/common/detail_1536836727000_459470_1536836749510.png](http://pd96wjt4m.bkt.clouddn.com/image/common/detail_1536836727000_459470_1536836749510.png)
2. 列表页
![http://pd96wjt4m.bkt.clouddn.com/image/common/list_1536836639000_822188_1536836780676.png](http://pd96wjt4m.bkt.clouddn.com/image/common/list_1536836639000_822188_1536836780676.png)
3. 编辑页面和发布文章，上传图片到七牛云
![http://pd96wjt4m.bkt.clouddn.com/image/common/edit_1536836607000_802376_1536836825962.png](http://pd96wjt4m.bkt.clouddn.com/image/common/edit_1536836607000_802376_1536836825962.png)

#### 参与贡献

1. Fork 本项目
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request


#### 遗留问题

1. 访问量大的时候要做数据缓存
2. cdn  node查看图片日期
3. 配置图片描述和更改
4. 上传图片高质量暂未支持上传,上传代码改进
7. 上传为刚好1M bug
10. 登陆后支持收藏文章和修改评论
7. 顶部加载滚动条首次没loading
8. 增加koa子模块
9. 评论支持markdown，评论内容过多建议去sf平台


##### 待学习修改
1. 开发环境 warning.js:33 Warning: A component is `contentEditable`
5. eslint

## 关于作者 / About

- github:[https://github.com/Weibozzz](https://github.com/Weibozzz)
- 个人博客:[http://www.liuweibo.cn](http://www.liuweibo.cn)
- segmentfault:[https://segmentfault.com/u/weibozzz](https://segmentfault.com/u/weibozzz)

## 版权声明
- 所有原创文章的著作权属于 Weibozzz。
