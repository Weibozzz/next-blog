import React,{Component} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Layout, Menu, Breadcrumb, Row, Col,
  List, Avatar, Icon, Pagination, Alert,
  Input, Button, Radio, Tooltip, Spin
} from 'antd'
import {COMMON_TITLE, ABOUT_TXT, MY_BLOG} from '../config/constantsData';
const {Content} = Layout;
class Error extends Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  constructor() {
    super();

  }
  render(){
    return (
      <div>
        <Head>
          <title>error-{COMMON_TITLE}</title>
        </Head>
        <Layout>
          <Content style={{padding: '0 50px'}}>
            <div className="_error" style={{background: '#fff', padding: 24, minHeight: 380}}>

              <p className="cont">
                {this.props.statusCode
                  ?
                  <div>
                    An error {this.props.statusCode} occurred on server
                    <p>
                      <Link href={MY_BLOG}>
                        <a>返回首页</a>
                      </Link>
                    </p>
                  </div>
                  : 'An error occurred on client'}
              </p>
            </div>
          </Content>
        </Layout>
        <style jsx>{`
          ._error{
            position:relative;
          }
          .cont{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%,-50%,0);
            text-align: center;
          }
        `}</style>
      </div>


    );
  }
}
export default Error;