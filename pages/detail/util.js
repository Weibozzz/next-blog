import { message } from 'antd';
/**
 * 设置图片宽高 最大宽或者高 为300px
 * @param len
 */
export function untilMaxWidthOrHeight(len = 300) {
  const imgList=document.querySelectorAll('.detail img');
  for (let i = 0; i < imgList.length; i++) {
    if(imgList[i].width>imgList[i].height){
      imgList[i].style.height=len+'px'
      imgList[i].style.width='auto'
    }else {
      imgList[i].style.width=len+'px'
      imgList[i].style.height='auto'
    }
  }
}

/**
 * 点击复制代码到剪贴板
 */
export function clickCopyCode () {
  let btn = document.createElement('button');
  btn.className = 'copy-code'
  btn.title = '点击复制代码'
  btn.innerText = ''
  let preList = document.getElementsByTagName('pre')
  for (let i=0;i<preList.length;i++){
    let codeDom = preList[i];
    codeDom.appendChild(btn.cloneNode(true))
    codeDom.addEventListener('click',f1,false)
  }
}

function f1 (e) {
  if(e.target.className === 'copy-code'){
    let emailLink = e.target.parentNode.firstElementChild; // 文字
    let range = document.createRange();
    range.selectNode(emailLink);
    window.getSelection().addRange(range);

    try {
      // Now that we've selected the anchor text, execute the copy command
      let successful = document.execCommand('copy');
      let msg = successful ? 'successful' : 'unsuccessful';
      message.success('Copy code ' + msg)
    } catch(err) {
      message.error('Oops, unable to copy')
    }

    // Remove the selections - NOTE: Should use
    // removeRange(range) when it is supported
    window.getSelection().removeAllRanges();
  }
}
