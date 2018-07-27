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
export const POPUP_TIPS = [
  '人生可以没有名利，金钱，但必须拥有美好心情',
  '岁月会让你的大脑变得轻松，也会让你的脚步变得沉重',
  '你的努力不是为了给谁看，而是让人生有更多的选择',
  '有实力才会有面子,面子是要实力来支撑',
  '生活对我们每个人都是公平的，只是心态的不同造就了人生的不同',
  '滚石不生苔，转业不聚财 -- 智哥',
  '有时候你以为天就要塌下来了 其实是自己站歪了',
  '时间能把你想要的东西都能慢慢给你，但也会把你舍不得的都慢慢带走',
  '衣带渐宽终不悔，为伊消得人憔悴',
  '做事不需人人都理解，只需尽心尽力',
  '真正的大师永远都怀着一颗学徒的心 ——易',
  '敢想，敢说，敢做是我们成功的首要前提',
  '当你拥有一切的时候你就失去了一切',
  '时间就像海绵里的水，只要你去挤，他总会有的',
  '再冷的石头，坐上三年也会暖',
  '金钱损失了还能挽回，一旦失去信誉就很难挽回',
  '人之所以能，是相信能',
]