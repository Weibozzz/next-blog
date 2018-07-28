import timeago from 'timeago.js';
import {COLORS_ARR}  from '../config/constantsData';
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
export const formatTime = time => {
  let zh = ["日", "一", "二", "三", "四", "五", "六"];
  let date = new Date(time * 1000);
  let oneWeekTime = 7 * 24 * 60 * 60 * 1000;
  return Date.now() - date>=oneWeekTime ?
    format.asString('yyyy-MM-dd hh:mm', date) + ' 星期' + zh[date.getDay()]
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
export const getHtml = (str, newTime) => {
  if (OldTime > newTime) { //这是曾经的文章
    return str ? str
      : null
  } else {
    return str ? str.replace(/@quot;|@apos;/g, function (str) {
        if (str === '@quot;') {
          return '"'
        } else if (str === "@apos;") {
          return "'"
        }
      })
      : null
  }
}

export function toQueryStr(obj) {
  return "?" + JSON.stringify(obj).replace(/{|}|\"|\'/g, "").replace(/,/g, "&").replace(/:/g, "=");
}

export const regUrl = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
/**
 * 取出指定数组长度的随机数组
 * @param arr
 * @param len
 * @returns {Array}
 */
export const getRandomArr = (arr, len) => {
  let result = []
  while (1) {
    let random = Math.random() * arr.length | 0;
    if (result.indexOf(random) === -1) {
      result.push(random)
    }
    if (result.length === len) {

      break;
    }

  }
  return result;
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
//获取用户真实ip
export const  getIPs=(callback)=> {
  var ip_dups = {};

  //compatibility for firefox and chrome
  var RTCPeerConnection = window.RTCPeerConnection
    || window.mozRTCPeerConnection    || window.webkitRTCPeerConnection;
  var mediaConstraints = {
    optional: [{RtpDataChannels: true}]
  };

  //firefox already has a default stun server in about:config
  //  media.peerconnection.default_iceservers =
  //  [{"url": "stun:stun.services.mozilla.com"}]
  var servers = undefined;

  //add same stun server for chrome
  if(window.webkitRTCPeerConnection)
    servers = {iceServers: [{urls: "stun:stun.services.mozilla.com"}]};

  //construct a new RTCPeerConnection
  var pc = new RTCPeerConnection(servers, mediaConstraints);

  //listen for candidate events
  pc.onicecandidate = function(ice){

    //skip non-candidate events
    if(ice.candidate){

      //match just the IP address
      var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/
      var ip_addr = ip_regex.exec(ice.candidate.candidate)[1];

      //remove duplicates
      if(ip_dups[ip_addr] === undefined)
        callback(ip_addr);

      ip_dups[ip_addr] = true;
    }
  };

  //create a bogus data channel
  pc.createDataChannel("");

  //create an offer sdp
  pc.createOffer(function(result){

    //trigger the stun server request
    pc.setLocalDescription(result, function(){});

  }, function(){});
}
