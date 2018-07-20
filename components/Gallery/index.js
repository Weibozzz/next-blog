import ImgFigure from './ImgFigure.js';
import ControllerUnit from './ControllerUnit.js';
import React from 'react';
import {findDOMNode} from 'react-dom';
import MyHead from '../MyHead';
import {getRangeRandom, get30DegRandom} from './until';
import {getRandomArr} from '../../until';
import {qiniuyun_cdn,qiniuyun_cdn_1,qiniuyun_cdn_2} from '../../config/qiniuyun_cdn';
import './index.less'

// console.log([...qiniuyun_cdn,...qiniuyun_cdn_1,...qiniuyun_cdn_2].length)
const imageDatas = getRandomArr(qiniuyun_cdn,20).map(v=>({
  "imageUrl": qiniuyun_cdn[v].dl_remove_attname_url,
  "title": "Heaven of time",
  "desc": "Here he comes Here comes Speed Racer."
}))
/**
 * 获取图片的输出地址，imageJsonDatas和imageDatas的结构详见最下面
 * 这种图片地址获取方式是通过webpack的loader实现的
 */



class GalleryByReactApp extends React.Component {

  constructor(props) {
    super(props);
    this.Constant = {
      centerPos: {  // 中心图片位置
        left: 0,
        top: 0
      },
      leftSection: {  // 左扇区，x和y临界值
        x: [0,0],
        y: [0,0]
      },
      rightSection: { // 右扇区，x和y临界值
        x: [0,0],
        y: [0,0]
      },
      topSection: {   // 上扇区，x和y临界值
        x: [0, 0],
        y: [0, 0]
      }
    };

    /** imgsArrangeArr 存放每张图片的位置信息，旋转角度信息 */
    this.state = {
      imgsArrangeArr: [
        /* {
             pos:{ left:0, top:0}
             rotate: 0          //旋转角度
             isInverse： false  // 图片是否正反面
             isCenter: false   //图片是否居中
        }  */
      ]
    };
  }

  /**
   *  重新布局所有图片
   *  @param: centerIndex指定居中排布哪个图片
   */
  rearrange(centerIndex) {
    let { imgsArrangeArr } = this.state;
    let { centerPos, leftSection, rightSection, topSection } = this.Constant;

    /**
     * 1. 根据传入的索引分离出居中图片
     * 2. 设置居中图片的位置信息
     * 3. 最后需要将分离出的居中图片插回imgsArrangeArr(保证索引和imageDatas中一一对应)
     */
    let center = imgsArrangeArr.splice(centerIndex, 1);
    center[0] = {
      'pos': centerPos,
      'rotate': 0,
      'isCenter': true
    };

    /**
     * 1. 获取需要布局上扇区的图片数量，0个或者1个，50%概率
     * 2. 获取一个布局到上扇区图片的索引值（范围是0-14或者0-15）
     * 3. 从imgsArrangeArr分离出该索引代表的对象，根据topImgNum是否为0, imgsArrangTopArr可能为空
     * 4. 最后也是要插回imgsArrangeArr
     **/
    let top = [];
    let topNum = Math.floor(Math.random() * 2); //取一个或者不取
    let topIndex = Math.floor(Math.random() * imgsArrangeArr.length);
    top = imgsArrangeArr.splice(topIndex, topNum);

    /** 设置布局位于上扇区的图片位置信息 */
    top.forEach((value, index) => {
      top[index] = {
        pos: {
          top: getRangeRandom(topSection.y[0], topSection.y[1]),
          left: getRangeRandom(topSection.x[0], topSection.x[1])
        },
        rotate: get30DegRandom(),
        isCenter: false
      };
    });

    /** 布局左两扇区的图片 */
    for (let i = 0, j = imgsArrangeArr.length, k = j / 2; i < j; i++) {
      //前半部分布局左边,右边部分布局右边,y值左右扇区多一样，所以这里取左扇区的值
      let xRang = i<k ? leftSection.x :rightSection.x;
      imgsArrangeArr[i] = {
        pos: {
          top: getRangeRandom(leftSection.y[0], leftSection.y[1]),
          left: getRangeRandom(xRang[0], xRang[1])
        },
        rotate: get30DegRandom(),
        isCenter: false
      };
    }

    /** 如果上扇区有图片，插回imgsArrangeArr */
    if (top && top[0]) {
      imgsArrangeArr.splice(topIndex, 0, top[0]);
    }
    /** 将中心图片插回imgsArrangeArr */
    imgsArrangeArr.splice(centerIndex, 0, center[0]);

    this.setState({ imgsArrangeArr });
  }

  /**
   * 利用rearrange函数居中对应index的图片
   * @param index 需要被居中的图片的索引值
   * return {function}
   */
  center(index){
    this.rearrange(index);
  }

  /**
   * 翻转图片
   * @param index 传入当前被执行inverse操作的图片对应的图片信息数组的index值
   */
  inverse(index) {
    let { imgsArrangeArr } = this.state;
    imgsArrangeArr[index].isInverse = !imgsArrangeArr[index].isInverse;
    this.setState({
      imgsArrangeArr
    });
  }


  /**
   * componentDidMount方法：组件渲染完成后(即已经出现在dom中)执行的操作
   * 操作：为每张图片计算其位置范围
   */
  componentDidMount() {

    /** 拿到舞台的大小，计算一半的值*/
    let stageDOM = findDOMNode(this.refs['stage']), // 拿到舞台dom节点
      stageW = stageDOM.scrollWidth,              // 舞台宽度
      stageH = stageDOM.scrollHeight,             // 舞台高度
      halfStageW = Math.ceil(stageW / 2),         // 舞台一半宽度
      halfStageH = Math.ceil(stageH / 2);         // 舞台一半高度

    /** 拿到一个imgFigure的大小，因为所有imgFigure都一样，所以这里去第一个imgFigure0*/
    let imgFigureDOM = findDOMNode(this.refs['imgFigure0']), // 拿到随便一个图片节点
      imgW = imgFigureDOM.scrollWidth,                     // 图片宽度
      imgH = imgFigureDOM.scrollHeight,                    // 图片高度
      halfImgW = Math.ceil(imgW / 2),                      // 图片一半宽度
      halfImgH = Math.ceil(imgH / 2);                      // 图片一半高度

    /** 计算中心图片的位置点,  this.Constant存放不变的值 */
    this.Constant.centerPos = {
      left: halfStageW - halfImgW,   // 中心图片left值，需要减去一半图片宽度
      top: halfStageH - halfImgH     // 中心图片top值，需要减去一半图片高度
    };

    /** 计算左扇区，x和y的临界值 */
    this.Constant.leftSection.x[0] = -halfImgW;                         // 左扇区最左值，这里设定最多超多舞台左边界图片宽度的一半
    this.Constant.leftSection.x[1] = halfStageW - halfImgW * 3;         // 左扇区最右值，注意这里绝对定位的left是指图片左边距离屏幕左边界的距离，所以这里是1.5倍图片宽度，临界情况是图片右边紧贴中心图片最左边
    this.Constant.leftSection.y[0] = -halfImgH;                         // 左扇区的最上，这里设定最多超多舞台上边界图片高度的一半
    this.Constant.leftSection.y[1] = stageH - halfImgH;                 // 左扇区的最下，这里设定高于舞台下边界图片高度的一半
    /** 计算右扇区，x和y的临界值*/
    this.Constant.rightSection.x[0] = halfStageW + halfImgW;            // 右扇区最左值，贴到中心图片的右边，距离中心线半个图片宽度
    this.Constant.rightSection.x[1] = stageW - halfImgW;                // 右扇区最右值，道理同左扇区最右值
    this.Constant.rightSection.y[0] =  this.Constant.leftSection.y[0];  // 同左扇区最上
    this.Constant.rightSection.y[1] =  this.Constant.leftSection.y[1];  // 同左扇区最下
    /** 计算上扇，x和y的临界值 */
    this.Constant.topSection.y[0] = -halfImgH;                          // 上扇区最上，同左右扇区最上
    this.Constant.topSection.y[1] = halfStageH - halfImgH * 3;          // 上扇区最下，道理同左扇区最右值
    this.Constant.topSection.x[0] = halfStageW - imgW;                  // 上扇区最左，中轴线往左一个图片宽度
    this.Constant.topSection.x[1] = halfStageW;                         // 上扇区最右，中轴线（注意left值是以左边为准）

    this.rearrange(0); //默认指定第一张居中
  }


  render() {
    let cotrollerUnits = [],
      imgFigure = [];

    imageDatas.forEach((value, index) => {
      if (!this.state.imgsArrangeArr[index]) {
        this.state.imgsArrangeArr[index] = {
          pos: {
            left: 0,
            top: 0
          },
          rotate: 0,
          isInverse: false,
          isCenter: false
        }
      }
      let commonProps = {
        key: index,
        arrange: this.state.imgsArrangeArr[index],
        inverse: this.inverse.bind(this,index),
        center: this.center.bind(this,index)
      };
      imgFigure.push( <ImgFigure data={value} ref={'imgFigure' + index} {...commonProps} /> );
      cotrollerUnits.push( <ControllerUnit  {...commonProps} />);
    });

    return (
      <div style={{height:'100%'}}>
        <MyHead></MyHead>
        <section className="stage" ref="stage">
          <section className="img-sec">
            {imgFigure}
          </section>
          <nav className="controller-nav">
            {cotrollerUnits}
          </nav>
        </section>
      </div>
    );
  }
}

export default GalleryByReactApp;


/**
 1. imageJsonDatas 的大致结构
 Array[
 {
      desc:"Here he comes Here comes Speed Racer. "
      fileName:"4.jpg"
      title:"Heaven of time"
  }
 ...
 ...
 ]

 ======================================================================================

 2. imageDatas 的大致结构
 Array[
 {
     desc:"Here he comes Here comes Speed Racer. "
     fileName:"4.jpg"
     imageUrl:"/assets/ace3d5b785f01689d46740d26b55d68a.jpg"
     title:"Heaven of time"
 }
 ...
 ...
 ]

 ======================================================================================

 3.  舞台示意图(外部虚线包围的是上扇区，左右扇区以此类推，没有下扇区)

 |-----—-上扇区线-----|
 |         |         |
 |—————舞台线——————|——-——————|—————————|————————————————————|
 |                |<--------|-------->|                    |
 |                |         |         |                    |
 |                |         |         |                    |
 |----------------|----  ___|____ ----|--------------------|
 |                      |        |                         |
 |                      | 中心图片|                         |
 |                      |________|                         |
 |                          |                              |
 |                          |                              |
 |                          |                              |
 |                          |                              |
 |——————————————————————————|—————舞台线————————————————————|
 |
 中轴线
 */