import React from 'react';
import classNames from 'classnames';

class ImgFigure extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * imgFigure的点击处理函数
   *  判断当前点击的图片是否是中心图片
   *  若是，则执行当前图片的翻转
   *  若否，则将点击图片居中，同时所有图片的位置都会有调整
   */
  handleClick(e){
    if(this.props.arrange.isCenter){
      this.props.inverse();
    }else {
      this.props.center();
    }
    e.stopPropagation();
    e.preventDefault();
  }

  /**
   * 获取图片的样式，包括
   * 1. 设置position
   * 2. 设置旋转角度transform:rotate
   * 3. 设置z-index
   */
  getImgeStyle(){
    let styleObj = {};

    /* 如果props属性中指定了这张图片的位置,则使用 */
    if (this.props.arrange.pos) {
      Object.keys(this.props.arrange.pos).forEach(key => {
        styleObj[key] = this.props.arrange.pos[key]
      })
    }

    /* 添加图片旋转角度样式 */
    if(this.props.arrange.rotate){
      let prefixArr =  ['MozTransform','MsTransform','WebkitTransform','transform'];
      prefixArr.forEach( value => {
        styleObj[value] = `rotate(${this.props.arrange.rotate}deg)`;
      });
    }

    /* 设置中心图片的z-index,保证中心图片始终在最上层 */
    if(this.props.arrange.isCenter){
      styleObj.zIndex = 11;
    }
    return styleObj;
  }


  render() {
    let styleObj = this.getImgeStyle();

    let figureClass = classNames({
      'img-figure': true,
      'my-img-figure': true,
      'is-inverse': this.props.arrange.isInverse   // 反转样式
    });

    let data = this.props.data;
    return (
      <figure
        className={figureClass}
              style={styleObj}
              onClick={this.handleClick}>

        <img src={data.imageUrl} alt={data.title}/>
        <figcaption>
          <h2 className="img-title">{data.title}</h2>
          <div className="img-back" onClick={this.handleClick}>
            <p> {data.desc} </p>
          </div>
        </figcaption>
      </figure>
    );
  }
}

export default ImgFigure;


/**
 1. data
 {
   "fileName": "1.jpg",
   "title": "Heaven of time",
   "desc": "Here he comes Here comes Speed Racer."
 }
 2. arrange
 {
    pos:{ left:0, top:0}
    rotate: 0          //旋转角度
    isInverse： false  // 图片是否正反面
    isCenter: false   //图片是否居中
 }


 **/