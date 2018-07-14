import React,{Component} from 'react';
import Head from 'next/head';
import {
  Layout, Menu, Breadcrumb, Row, Col,
  List, Avatar, Icon, Pagination, Alert,
  Input, Button, Radio, Tooltip, Spin
} from 'antd'
import {COMMON_TITLE,ABOUT_TXT}  from '../../config/constantsData';
const {Content} = Layout;
class About extends Component {
  constructor() {
    super();

  }
  render(){
    return (
     <div>
       <Head>
         <title>{ABOUT_TXT}{COMMON_TITLE}</title>
       </Head>
       <Layout>
         <Content style={{padding: '0 50px'}}>
           <div style={{background: '#fff', padding: 24, minHeight: 380}}>

             关于自己
           </div>
         </Content>
       </Layout>
     </div>


    );
  }
}
export default About;