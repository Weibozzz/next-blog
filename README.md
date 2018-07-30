# next-blog

#### 项目介绍
利用react服务端框架next.js写的博客
线上地址： [http://www.liuweibo.cn](http://www.liuweibo.cn) 

#### 软件架构
软件架构说明
`react.js next.js antd `


#### 安装教程

1. 运行
虽然是服务端渲染，但是也要调用接口，所以需要调用后端的接口
```bash
cnpm i 
npm run build
npm run dev
```
2. xxxx
3. xxxx

#### 使用说明

1. xxxx
2. xxxx
3. xxxx

#### 参与贡献

1. Fork 本项目
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request


#### 遗留问题

1.
2. cdn  node查看图片日期
3. 配置图片描述和更改
4. 浏览记录下拉分页
6. 推荐文章
7. $sql="select t_view from date_view order by id desc limit 2"
8. $sql = "update visitor_counter set `all`=`all`+1 where id=1";
$sql="insert into date_view(date) values ('$now')";
 $sql='select max(id)as maxId from date_view';
  $sql="update date_view set `t_view`=`t_view`+1 where id='$maxId'";
   $sql="select `date` from date_view where id = '$maxId'";
8. 浏览记录月周天总
14. 发布文章修改文章自动保存

##### 待学习修改
1. 开发环境 warning.js:33 Warning: A component is `contentEditable`
2. 自动上传图片到七牛云，并且转为markdown格式图片
5. eslint

## 关于作者 / About

- github:[https://github.com/Weibozzz](https://github.com/Weibozzz)
- 个人博客:[http://www.liuweibo.cn](http://www.liuweibo.cn)
- segmentfault:[https://segmentfault.com/u/weibozzz](https://segmentfault.com/u/weibozzz)

## 版权声明
- 所有原创文章的著作权属于 Weibozzz。