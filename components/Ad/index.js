import React,{Component} from 'react';
import {connect} from 'react-redux';
import { List, Avatar, Icon ,Divider,Row,Col,Tooltip} from 'antd';
import {COLORS_ARR} from '../../config/constantsData';
import {getRandomMarginTop,getRandomMarginLeft,getRandomTxt} from '../../config/constantTag';

class Ad extends Component {
  constructor(props) {
    super(props);
    this.state={
      dataSource:[]
    }
  }
  componentWillMount (){
    const {dataSource} = this.props;
    this.setState({
      dataSource
    })
  }
  componentWillReceiveProps (){
    const {dataSource} = this.props;
    this.setState({
      dataSource
    })
  }
  shouldComponentUpdate ({dataSource}){
    const {dataSource:hasUrlComment} = this.props;
    return dataSource.length!==hasUrlComment.length;
  }
  render(){
    const {dataSource:hasUrlComment} = this.props;
    return (
      <div className="ad-wrapper ">
        <div className="content">
          {
            hasUrlComment.map((v,index)=>{
              let ran = Math.random()*COLORS_ARR.length | 0;
              let color = COLORS_ARR[ran];
              return (
                <Tooltip key={index}  placement="right" title={v.user}>
                  <a className="link-friends-a"
                     style={{marginLeft:getRandomMarginLeft(),marginTop:getRandomMarginTop()}}
                     href={v.website} target="_blank" >
                    <span style={{backgroundColor:color}}>{getRandomTxt(v.user)}</span>
                  </a>
                </Tooltip>
              );
            })
          }
        </div>
        <div className="remark">
          <Tooltip placement="bottomLeft" title={`想展示你的友情链接？赶快评论吧，这里会加上你的友链。`}>
            <a className="my-link" href="#comment">想展示你的友情链接？</a>
          </Tooltip>

        </div>
      </div>
    );
  }
}

export default Ad
