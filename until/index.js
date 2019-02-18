import timeago from 'timeago.js';
import {COLORS_ARR}  from '../config/constantsData';
import {getIPs} from 'real-ip';
let format = require('date-format');
export const updateHtml = str => {
  return str.replace(/'|"|:|\.|\[|\]|\\/g, function (str) {

    if (str === '"') {
      return '@quot;'
    } else if (str === "'") {
      return '@apos;'
    } else if (str === ':') {
      return '&#58;'
    } else if (str === '[') {
      return '&#91;'
    } else if (str === '[') {
      return '&#93;'
    } else if (str === '\\') {//自定义的 找不到
      return '&#43;'
    } else {
      return '&#183;'
    }
  });
}
export const spaceAdd = str => str && str.replace(/\+/g, '&nbsp;')
export const getPathName = props => props.location && props.location.pathname && props.location.pathname.substring(1);
export const NbspToSpace = str => str && str.replace(/&nbsp;/g, '　')
export const formatTime = (time,type) => {
  let zh = ["日", "一", "二", "三", "四", "五", "六"];
  let date = new Date(time * 1000);
  let oneWeekTime = 7 * 24 * 60 * 60 * 1000;
  let result = type === 'mm-dd' ? format.asString('MM-dd', date) :format.asString('yyyy-MM-dd hh:mm', date) + ' 星期' + zh[date.getDay()]
  return Date.now() - date>=oneWeekTime ?
    result
    :
    timeago().format(date)
}
export const getArticleInfo = detailArr => {
  let {...rest} = detailArr && detailArr[0] ? detailArr[0] : {};
  /*{
      content,
          createTime,
          id,
          img,
          lastModify,
          like,
          modifyCount,
          recommend,
          short,
          title,
          type,
          url,
          user,
          visitor,
          week
  }*/
  return rest
}
export const OldTime = 1531094400;  // 2018-07-09 00:00:00 星期一
export const NewCdnTime = 1545723881;  // 2018-12-25 15:44:41 星期二 切換了cdn域名
/**
 * 七牛云cdn测试域名到期，切换新的域名
 */
export const changeCdnUrl = (createTime,code)=> {
  let newCont = code.replace(/(pbw4yrlys\.bkt\.clouddn\.com)/gim,'images.static.liuweibo.cn')
    .replace(/(pd96wjt4m\.bkt\.clouddn\.com)/gim,'images.liuweibo.cn')
  // return createTime > NewCdnTime ? code : newCont;
  return newCont;
};
export const getHtml = (str, newTime) => {
  return str ? str.replace(/@quot;|@apos;/g, function (str) {
      if (str === '@quot;') {
        return '"'
      } else if (str === "@apos;") {
        return "'"
      }
    })
    : '';
}

export function toQueryStr(obj){
  return "?" + JSON.stringify(obj).replace(/{|}|\"|\'/g, "").replace(/,/g, "&").replace(/:/g, "=");
}
//对所有文章创建时间进行处理
export function getYearAndMounth(time) {
  if(!time)return '';
  const tt=new Date(Number(time)*1000);
  return tt.getFullYear()+'年'+String(+tt.getMonth()+1).padStart(2,0)+'月';
}
//数组去重并且记住每个重复的个数
export function cancelRepeat(arr) {
  let newArr=[];
  let obj={};
  for(let i in arr){
    if(!obj[arr[i]]){
      obj[arr[i]]=1;
      newArr.push(arr[i]);
    }else {
      obj[arr[i]]++;
    }
  }
  return obj;
}
export const regUrl = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
/**
 * 取出指定数组长度的随机数组
 * @param arr
 * @param len
 * @returns {Array}
 */
export const getRandomArr = (arr, len) => {
  let result = [];
  let resultArr = [];
  while (1) {
    let random = Math.random() * arr.length | 0;
    if (result.indexOf(random) === -1) {
      result.push(random)
    }
    if(result.length===Math.min(10,len)){
      resultArr=resultArr.concat(result)
      result=[]
    }
    if (resultArr.length>=len ) {
      break;
    }
  }
  return resultArr.slice(0,len)
}
/**
 * 获得图片前缀name
 * @param imageName
 * @returns {string}
 */
export const getImageName = (imageName)=>{
  const index = imageName.lastIndexOf('.');
  return {
    font:index<0?imageName:imageName.substring(0,index),
    back:index<0?'.png':imageName.substring(index)
  }

};
//节流函数
export const throttle = (fn,interval)=>{
  let timer;
  return ()=>{
    if(timer){
      return ;
    }
    timer=setTimeout(() => {
      clearTimeout(timer)
      fn()
      timer=null;
    }, interval||500);
  };
}
/**
 * 对象数组去重
 * @param arr
 * @param key
 * @returns {*}
 */
export const removeSameArray = (arr, key) => {
  let obj = {}
  return arr.reduce((total, item) => {
    let val = item[key];
    if (!obj[val]) {
      total.push(item)
      obj[val] = val
    }
    return total;
  }, [])
}
export const reg_rule = {
  life: /^image\/life/,
  fight: /^image\/fight/,
  my: /^image\/my/,
  scenery: /^image\/scenery/,
}
export const fnTextPopup = function (arr, options) {
  // arr参数是必须的
  const len = COLORS_ARR.length;
  if (!arr || !arr.length) {
    return;
  }
  // 主逻辑
  let index = 0;
  let fn=function (event) {
    let color1 = COLORS_ARR[Math.random()*len | 0];
    let color2 = COLORS_ARR[Math.random()*len | 0];
    let x = event.pageX, y = event.pageY;
    let eleText = document.createElement('span');
    eleText.className = 'text-popup';
    eleText.style.backgroundImage=`linear-gradient(to right, ${color1}, ${color2}, ${color1})`;
    this.appendChild(eleText);
    if (arr[index]) {
      eleText.innerHTML = arr[index];
    } else {
      index = 0;
      eleText.innerHTML = arr[0];
    }
    // 动画结束后删除自己
    eleText.addEventListener('animationend', function () {
      eleText.parentNode.removeChild(eleText);
    });
    // 位置
    eleText.style.left = (x - eleText.clientWidth / 2) + 'px';
    eleText.style.top = (y - eleText.clientHeight) + 'px';
    // index递增
    index++;
  }
  document.documentElement.addEventListener('click', fn);
  return fn;
};
export const real_ip = ()=> new Promise((resolve, reject) => {
  getIPs(ip=>{
    resolve(ip)
  })
  setInterval(() => {
    reject('时间过长')
  }, 2000);
});
