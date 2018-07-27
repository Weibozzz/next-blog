const STEP = 20;
const MARGIN_TOPS = 2;
const MARGIN_LEFTS = 5;
const MAX_LENGTH_TXT = 6;
export const getRandomMarginTop = ()=>{
  return Math.floor(Math.random()*MARGIN_TOPS)*STEP;
}
export const getRandomMarginLeft = ()=>{
  return Math.ceil(Math.random()*MARGIN_LEFTS)*STEP;
}
export const getRandomTxt = (text)=>{
  let len = text.length;
  let random = Math.random()*len;
  if(len>MAX_LENGTH_TXT){
    return text.slice(0,Math.ceil(random));
  }
  return text;
}

export const DEFAULT_TAG_ARR =[
  {
    website:'http://www.liuweibo.cn',
    user:'刘伟波网站'
  },
  {
    website:'https://segmentfault.com/u/weibozzz',
    user:'sf'
  },
  {
    website:'https://github.com/Weibozzz',
    user:'github'
  },
  {
    website:'http://www.liuweibo.cn:4321/',
    user:'文档中心'
  },
  {
    website:'https://github.com/Weibozzz/next-blog',
    user:'本网站源码'
  },
]
export const POPUP_TIPS = ['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善']