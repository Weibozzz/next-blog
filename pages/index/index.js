import React from 'react'
import {connect} from 'react-redux'
import {Button, Switch} from 'antd';
import Link from 'next/link';
import MyHead from '../../components/MyHead';
import * as ROUTER from '../../config/constantsData';
import './index.less'

class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      bg: '',
      defaultIndexBg: 0,
      timer:null
    }
  }
  componentWillMount(){
    this.setState({
      defaultIndexBg: this.getRandom()
    })
  }
  componentDidMount(){
    let timer=setInterval(()=>{
      this.setState({
        defaultIndexBg:this.getRandom(),
        timer
      })
    },ROUTER.defaultTimer)
  }
  componentWillUnmount(){
    const {timer} = this.state;
    clearInterval(timer)
  }
  getRandom(){
    const {BG_INDEX} = ROUTER;
    return Math.random() * BG_INDEX.length | 0;
  }

  onChangeBg() {
    const {defaultIndexBg} = this.state;
    let random = this.getRandom();
    if(random===defaultIndexBg){
      random = this.getRandom();
    }
    this.setState({
      defaultIndexBg: random
    })
  }

  render() {
    const {defaultIndexBg} = this.state;
    return (
      <div className="index" style={{backgroundImage: `url(${ROUTER.BG_INDEX[defaultIndexBg].value})`}}>
        <MyHead/>
        <div className="layout">
          <div className="header">
            <h1 onClick={this.onChangeBg.bind(this)}>
              {ROUTER.INDEX_TITLE}
            </h1>
            <h2>
              2018年7月15日 - 刘伟波 刘伟波,16年西安文理学院毕业,目前上海担任支付宝城市服务等业务，热爱web前端,喜欢酷炫的Web Skills。
            </h2>
            <p>
              {ROUTER.INDEX_ENGLISH}
            </p>
          </div>
          <ul className="mid">
            <li>
              <Link href={ROUTER.BLOG}>
                <a>&raquo; 技术文章 (Blog)</a>
              </Link>
            </li>
            <li>
              <Link href={ROUTER.LIFE}>
                <a>&raquo; 生活感想 (Life)</a>
              </Link>
            </li>
            <li>
              <Link href={ROUTER.ONLINE_GITBOOK}>
                <a>&raquo; 文档中心 (Weibozzz)</a>
              </Link>
            </li>
          </ul>
          <div className="footer">
            <Link href={ROUTER.ABOUT}>
              <a> Contact </a>
            </Link>
            <span>| </span>
            http://www.liuweibo.cn
          </div>
        </div>

      </div>
    )
  }
}

export default connect()(Index)