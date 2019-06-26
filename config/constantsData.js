import React from 'react';
const dev = process.env.NODE_ENV !== 'production'
//备案地址
export const MIIT_BEIAN = 'http://www.miitbeian.gov.cn'

//請求地址
export const DEV_DOMAIN = 'http://localhost:7654/';
export const DEV_DOMAIN_4324 = 'http://localhost:4324';
export const MY_BLOG = dev ? DEV_DOMAIN_4324 : 'http://www.liuweibo.cn'
export const ONLINE_DOMAIN = MY_BLOG + ':7654';
export const ONLINE_GITBOOK = MY_BLOG + ':4321';
export const LINK_ABOUT_ME = MY_BLOG + 'p/146';

// 图片大于这个数会先压缩在上传到七牛云，单位M
export const UPLOAD_MAX_SIZE = 1;

//github地址
export const GITHUB_ADDRESS = 'https://github.com/Weibozzz/next-blog';
export const GITHUB_DOCS_ADDRESS = {
  url: 'https://weibozzz.github.io',
  des: '前端知识体系'
};
export const GITHUB_DOCS_ADDRESS_URL_STRING = `<a href=${GITHUB_DOCS_ADDRESS.url} target="_blank">
  ${GITHUB_DOCS_ADDRESS.des}</a>`
export const GITHUB_DOCS_ADDRESS_URL = <a href={GITHUB_DOCS_ADDRESS.url} target="_blank">
  {GITHUB_DOCS_ADDRESS.des}</a>
export const TOP_TIPS = <span>欢迎来到刘伟波个人网站，最新仓库体验地址
【{GITHUB_DOCS_ADDRESS_URL}】
喜欢可以收藏哦!</span>
//分页数
export const pageNum = 10;
export const TITLE = 'title'
export const ARTICLE = 'article'
export const ALL = 'all'

//导航路由
export const INDEX = '/'
export const INDEX_TXT = '网站首页'
export const BLOG = '/blog'
export const BLOG_TXT = '文章列表'
export const ADMIN = '/admin'
export const ADMIN_TXT = '后台管理'
export const LIFE = '/life'
export const LIFE_TXT = '生活记录'
export const ABOUT = '/about'
export const ABOUT_TXT = '关于我'
export const POST_ARTICLE = '/postArticle'
export const POST_ARTICLE_TXT = '发布文章'
export const VERSIONS = '/versions'
export const VERSIONS_TXT = '更新日志'
export const DOCS_TXT = '文档中心'
export const MENU_RULE = {
  '/':[BLOG_TXT],
  [BLOG]:[BLOG_TXT],
  '我的收藏':[BLOG_TXT],
  [LIFE]:[LIFE_TXT],
  [ABOUT]:[ABOUT_TXT],
  [POST_ARTICLE]:[POST_ARTICLE_TXT],
  [ADMIN]:[ADMIN_TXT],
  [VERSIONS]:[VERSIONS_TXT],
}

//seo
export const COMMON_TITLE = '刘伟波-天天向上'
export const INDEX_TITLE = '刘伟波的个人网站'
export const INDEX_ENGLISH = 'Liu WeiBo\'s Personal Website'
export const KEYWORDS = '刘伟波, 个人网站,个人博客,  web前端'
export const Description = '刘伟波的个人网站，刘伟波的技术作品，刘伟波的生活成长'

//首页背景
// http://images.static.liuweibo.cn
// http://pbw4yrlys.bkt.clouddn.com
export const BG_INDEX = [
  {
    key: '西安钟楼',
    value: 'http://images.static.liuweibo.cn/image/index/zhoulou.jpg'
  },
  {
    key: '上海东方明珠',
    value: 'http://images.static.liuweibo.cn/image/index/dongfangmingzhu.jpg'
  },
  {
    key: '华山',
    value: 'http://images.static.liuweibo.cn/image/index/huashan.jpg'
  },
  {
    key: '明德楼',
    value: 'http://images.static.liuweibo.cn/image/index/mindelou.jpg'
  },
  {
    key: '韩城古城',
    value: 'http://images.static.liuweibo.cn/image/index/hanchegngucheng.jpg'
  },
  {
    key: '韩城司马迁',
    value: 'http://images.static.liuweibo.cn/image/index/simaqina.jpg'
  },
  {
    key: '韩城美食',
    value: 'http://images.static.liuweibo.cn/image/index/hanchegnmeishi.jpg'
  },
]
//首页切换时间
export const defaultTimer = 10000;
//文章分类图片icon
export const ARTICLE_TYPE_ICON = {
  vue: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531898804960&di=bb204eb57425de2ad3ea2cb6d1358df2&imgtype=0&src=http%3A%2F%2Fimage.evget.com%2Fimages%2Farticle%2F2016%2FJavascriptky-3.png',
  js: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899278471&di=cf1e2753bbc588c0bc464c78a4d212fd&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F4610b912c8fcc3ced0c353279a45d688d43f20a6.jpg',
  node: 'http://p3.so.qhmsg.com/bdr/200_200_/t016cf3f2122f3fea98.png',
  react: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4217379483,208217009&fm=27&gp=0.jpg',
  h5: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899317728&di=ce75860f4ce734fdbaa75ac46ac9541c&imgtype=0&src=http%3A%2F%2Fimg2.donews.com%2F2014%2F1117%2F75136433.jpg',
  css: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899340281&di=1da2d46a754250dd998cc350d712721e&imgtype=0&src=http%3A%2F%2Fs6.sinaimg.cn%2Fmw690%2F004kTKjwzy6WlEAPznv25%26690',
  angular: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899186529&di=2ab6317937e397e54a573f149afbded5&imgtype=0&src=http%3A%2F%2Fwww.th7.cn%2Fd%2Ffile%2Fp%2F2015%2F07%2F10%2Fcf3703b1280a5680e9c833ed191d5638.jpg',
  php: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899359741&di=20e63930f8dc3a384e377846173d65e1&imgtype=0&src=http%3A%2F%2Fpx.thea.cn%2FPublic%2FUpload%2F2893678%2FIntro%2F1473304881.jpg',
  mysql: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532494114&di=d7a904bf9cca31fc01ee38465c59a85a&imgtype=jpg&er=1&src=http%3A%2F%2Fs3.sinaimg.cn%2Flarge%2F002CwWVCzy6MMjHltCi62',
  server: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899560408&di=10405259462a1bc63c257f9183fd85a1&imgtype=0&src=http%3A%2F%2Fimg011.hc360.cn%2Fk2%2FM02%2F5D%2FD6%2FwKhQxVfI4gSEHICVAAAAADw6QqA997.jpg',
  interesting: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899490315&di=cde9b22f2ac8bda254f6838419cfe61c&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20171_14_1%2Fa2t5fm9607718748992.jpg',
  fight: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899419656&di=9fd12f388d86e990014516f101ab28c7&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fn12%2Fjfs%2Ft253%2F89%2F336734149%2F67826%2Fbc5eeb58%2F53e9ced2N8472b3d1.jpg%2521q70.jpg',
  others: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899523703&di=1b6438eb70ce2ae0a8e1df64774c4bce&imgtype=0&src=http%3A%2F%2Fwww.cidianwang.com%2Ffile%2F2017412%2F201741285824464.jpg'
}
//生活部分图片
export const LIFE_IMAGE = [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900063149&di=53e2bb1c3edc9d5a9646b9a97cc2ff94&imgtype=0&src=http%3A%2F%2Fuploads.oh100.com%2Fallimg%2F1706%2F25-1F605093625.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900063148&di=527129ef93dc3d55a68b603bb98e16a9&imgtype=0&src=http%3A%2F%2Fuploads.oh100.com%2Fallimg%2F1707%2F96-1FF1151Q0.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900063148&di=b199a98890734ffc50b64f7efaaa3d33&imgtype=0&src=http%3A%2F%2Fi2.sanwen.net%2Fdoc%2F1609%2F830-1609301I647.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900063162&di=32d77d92542052e1fcec437153d62204&imgtype=0&src=http%3A%2F%2Fwww.zgnhzx.com%2FUploadFiles%2Ftalent%2F2016%2F12%2F201612190924565895.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900237921&di=d645ba5b24d0e1f00d3f80368190d06e&imgtype=0&src=http%3A%2F%2Fi2.sanwen.net%2Fdoc%2F1609%2F830-16092Q25947-50.jpg',

  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532494978&di=641a9b9604ba88e1963f18f89ae882bb&imgtype=jpg&er=1&src=http%3A%2F%2Fs15.sinaimg.cn%2Fmw690%2F001OQ1Ugty6Nlz6m70y4e%26amp%3B690',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900281046&di=d69ee49f0ea3c15c7f0483f98e489b4e&imgtype=0&src=http%3A%2F%2Fs8.sinaimg.cn%2Fmiddle%2F8ee3e0acxb0171b491f27%26690',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532495027&di=4d3f70886405dd11d3740539b656ba26&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.baizhan.net%2Fuploads%2Fallimg%2F171106%2F47_171106115211_1.png',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531900324719&di=bbda13a0a0245f13c561d32cad6717da&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161013%2Fe4be947df7304b77bf96c7b60aeb06c4_th.jpg',
  'http://youimg1.c-ctrip.com/target/tg/726/811/170/9f4eedef3f664f798ea0846041b4fad8.jpg',

  'http://pic18.nipic.com/20111213/3752183_140830948000_2.jpg',
  'http://img8.zol.com.cn/bbs/upload/23566/23565123.jpg',
  'http://p1.so.qhmsg.com/t0101bc5934a0f24496.jpg',
  'http://p5.so.qhimgs1.com/sdr/200_200_/t010042e1ab48b0e8bb.jpg',
  'http://img15.3lian.com/2015/h1/308/d/130.jpg',

  'http://pic1.win4000.com/wallpaper/8/59360eb9ec476.jpg',
  'http://img.mp.sohu.com/upload/20170808/544c7191626b42ce8b76c157edb6d725_th.png',
  'http://pic22.nipic.com/20120725/8333799_081850001333_2.jpg'

];
//发布文章分类
export const POST_ARTICLE_TYPE = [
  {key: "h5", value: " html"},
  {key: "css", value: " css"},
  {key: "js", value: " javascript"},
  {key: "vue", value: " vue"},
  {key: "react", value: " react"},
  {key: "angular", value: " angular"},
  {key: "node", value: " node"},
  {key: "php", value: " php"},
  {key: "java", value: " java"},
  {key: "mysql", value: " mysql"},
  {key: "server", value: " 服务器之类"},
  {key: "interesting", value: " 生活喜好"},
  {key: "fight", value: " 激励向上"},
  {key: "markdown", value: " markdown"},
  {key: "设计模式", value: " 设计模式"},
  {key: "阅读书籍", value: " 阅读书籍"},
  {key: "算法", value: " 算法"},
  {key: "工具", value: " 工具"},
  {key: "正则", value: " 正则"},
  {key: "技巧", value: " 技巧"},
  {key: "shell", value: " shell"},
  {key: "others", value: " 其他"},
];
export const POST_ARTICLE_TYPE_MAPPING = POST_ARTICLE_TYPE.reduce((total,{key,value})=>{
  total[key]=value
  return total
},{})
//评论icon
export const COMMENT_IMAGES = [
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532749734&di=fbfe0c2328cc8115b40f23945818cc58&imgtype=jpg&er=1&src=http%3A%2F%2Fen.pimg.jp%2F012%2F462%2F665%2F1%2F12462665.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532155572971&di=b2ae74aa22311f807cc768c088ab71c6&imgtype=0&src=http%3A%2F%2Fis2.mzstatic.com%2Fimage%2Fthumb%2FPurple69%2Fv4%2Fb1%2Fb1%2F2c%2Fb1b12c2a-3a8f-420d-d988-b09c2455188e%2Fmzl.gzrdswmf.png%2F0x0ss-85.jpg',
  'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532751108&di=333a1fefafd1ec1b1838f5305acfa215&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F39%2F99%2F02K58PIC4t7_1024.png'
];


//色系
export const COLORS_ARR = [
  '#FF5F57',
  '#FFBD2E',
  '#28CA42',
  '#941966',
  '#1c2c36',
  '#2982ff',
  '#e0f0d8',
  '#0098c8',
  '#ba2d2a',
  '#de3803',
]

//发布文章版权
export const POST_ARTICLE_COPY =(id)=>{
  return  `


--
作者：刘伟波

链接：[${MY_BLOG}/p/${id+1}](${MY_BLOG}/p/${id+1})

来源：[刘伟波博客](http://www.liuweibo.cn)

本文原创版权属于刘伟波 ，转载请注明出处，谢谢合作
      `;
}
// 发布阅读书籍声明
export const POST_READING_STATEMENT = ()=>{
  return `
  > 关于阅读书籍部分，是个人在本书籍中收集的精华部分和实战部分，为了后续再次阅读节省时间
  和方便在工作中的应用，后续会分享本书籍的电子版pdf在线下载。不过我还是建议读着去阅读原著。
  
  --
  
  `;
}

export const COMMENT_LIMIT = {
  key:'评论内容不能超过500字符',
  value:500
};
//关于我
export const commentPlaceHolder = `欢迎提出您在使用过程中遇到的问题或宝贵建议（${COMMENT_LIMIT.key}字以内），感谢您对博主的支持。(必填)`
export const COMMENT_TIPS = (param='sf')=>{
  return<span>
    评论支持markdown，{COMMENT_LIMIT.key},如果内容过多或者要及时回复,建议去 {param} 平台,一般一天之内就会回复。
  </span>
};
