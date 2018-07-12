const dev = process.env.NODE_ENV !== 'production'
//备案地址
export const MIIT_BEIAN = 'http://www.miitbeian.gov.cn'

//請求地址
export const DEV_DOMAIN = 'http://localhost:7654/';
export const DEV_DOMAIN_4322 = 'http://localhost:4322/';
export const MY_BLOG = dev?DEV_DOMAIN_4322:'http://www.liuweibo.cn'
export const ONLINE_DOMAIN = MY_BLOG+':7654';
export const ONLINE_GITBOOK = MY_BLOG+':4321';
export const LINK_ABOUT_ME = MY_BLOG+'/p/146';



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
export const COMMON_TITLE = '>>刘伟波-天天向上'
export const INDEX_TITLE = '刘伟波的个人主页'
