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
