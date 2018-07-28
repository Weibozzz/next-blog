import React from 'react'
import {connect} from 'react-redux'
import {Button, Switch,Row,Col} from 'antd';
import Link from 'next/link';
import MyHead from '../../components/MyHead';
import * as ROUTER from '../../config/constantsData';
import {getIPs} from '../../until';
import './index.less'
const publicIp = require('public-ip');


let timer;
class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      bg: '',
      defaultIndexBg: 0
    }
  }
  componentWillMount(){
    this.setState({
      defaultIndexBg: this.getRandom()
    })
  }
  componentDidMount(){
    timer=setInterval(()=>{
      this.setState({
        defaultIndexBg:this.getRandom()
      })
    },ROUTER.defaultTimer)

    getIPs(ip=>{
      publicIp.v4().then(ip => {
        console.log('ipv4',ip);
        //=> '46.5.21.123'
      });

      publicIp.v6().then(ip => {
        console.log('ipv6',ip);
        //=> 'fe80::200:f8ff:fe21:67cf'
      });
      console.log('真实ip',ip)
    })
  }
  componentWillUnmount(){
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
        <Row className="my-row">
          <Col
               sm={{ span: 24, offset: 0 }}
               xs={{ span: 24, offset: 0 }}
               lg={{ span: 10, offset: 7 }}
                className="my-col">

            <div className="layout">
              <div className="header">
                <h1 onClick={this.onChangeBg.bind(this)}>
                  {ROUTER.INDEX_TITLE}
                </h1>
                <h2>
                  2018年7月15日 - 刘伟波 刘伟波,16年西安文理学院毕业,目前上海担任支付宝城市服务等业务，热爱web前端,多年来一直从事web前端开发，熟悉h5,vue,react。
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
          </Col>
        </Row>

      </div>
    )
  }
}

export default connect()(Index)