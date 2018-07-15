const dev = process.env.NODE_ENV !== 'production'
//备案地址
export const MIIT_BEIAN = 'http://www.miitbeian.gov.cn'

//請求地址
export const DEV_DOMAIN = 'http://localhost:7654/';
export const DEV_DOMAIN_4322 = 'http://localhost:4322/';
export const MY_BLOG = dev ? DEV_DOMAIN_4322 : 'http://www.liuweibo.cn'
export const ONLINE_DOMAIN = MY_BLOG + ':7654';
export const ONLINE_GITBOOK = MY_BLOG + ':4321';
export const LINK_ABOUT_ME = MY_BLOG + 'p/146';


//github地址
export const GITHUB_ADDRESS = 'https://github.com/Weibozzz/next-blog';
export const TOP_TIPS = 'next服务端渲染博客正在重构和开发中......'
//分页数
export const pageNum = 10;
export const TITLE = 'title'
export const ALL = 'all'

//导航路由
export const INDEX = '/'
export const INDEX_TXT = '网站首页'
export const BLOG = '/Blog'
export const BLOG_TXT = '文章列表'
export const ADMIN = '/Admin'
export const ADMIN_TXT = '后台管理'
export const LIFE = '/Life'
export const LIFE_TXT = '生活记录'
export const ABOUT = '/About'
export const ABOUT_TXT = '关于我'
export const POST_ARTICLE = '/PostArticle'
export const POST_ARTICLE_TXT = '发布文章'
export const DOCS_TXT = '文档中心'

//seo
export const COMMON_TITLE = '刘伟波-天天向上'
export const INDEX_TITLE = '刘伟波的个人网站'
export const INDEX_ENGLISH = 'Liu WeiBo\'s Personal Website'
export const KEYWORDS = '刘伟波, 个人网站,个人博客,  web前端'
export const Description = '刘伟波的个人网站，刘伟波的技术作品，刘伟波的生活成长'

//首页背景
export const BG_INDEX = [
  {
    key: '西安钟楼',
    value: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531646533823&di=d1854fda2bb5d7d70d2b715c2ec05238&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180103%2Fb01e4dce16114060bc52bdb3288f7352.jpeg'
  },
  {
    key: '上海东方明珠',
    value: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531646391234&di=1cdbfbdc9b1f4fcf423e915e4db7a504&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1309%2F08%2Fc13%2F25403453_1378612597227.jpg'
  },
  {
    key: '华山',
    value: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531646684183&di=463eb7c844e05717779305ff364fab52&imgtype=0&src=http%3A%2F%2Ffile31.mafengwo.net%2FM00%2F5A%2F76%2FwKgBs1dA8JqAHVD-ABm1p79fL4w20.jpeg'
  },
  {
    key: '明德楼',
    value: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531646741490&di=151a14e19e0338506385674a8b60cd39&imgtype=0&src=http%3A%2F%2Fi8.qhimg.com%2Ft01abe458c044f86c7f.jpg'
  },
  {
    key: '韩城古城',
    value: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532241502&di=4cd423f68d0c918ff4c1b22c30c158de&imgtype=jpg&er=1&src=http%3A%2F%2Fimgk.zol.com.cn%2Fdcbbs%2F10364%2Fa10363582.jpg'
  },
  {
    key: '韩城司马迁',
    value: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531646839303&di=21fb213bd0db500738f41a259e966d19&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170731%2Fbfdffa2d0de04bd69da78987e6fe557d_th.png'
  },
  {
    key: '韩城美食',
    value: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531646911000&di=a26a9a391b5906d908bbdecd5ed9373d&imgtype=0&src=http%3A%2F%2Fp1.pccoo.cn%2Fyp%2F20131021%2F201310211536103932.jpg'
  },
]
//关于我
export const commentPlaceHolder = '欢迎提出您在使用过程中遇到的问题或宝贵建议（400字以内），感谢您对博主的支持。(必填)'
