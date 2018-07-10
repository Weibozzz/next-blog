import React,{Component} from 'react';
import {
  Layout, Menu, Breadcrumb, Row, Col,
  List, Avatar, Icon, Pagination, Alert,
  Input, Button, Radio, Tooltip, Spin
} from 'antd'
const {Content} = Layout;
class About extends Component {
  constructor() {
    super();

  }
  render(){
    return (
     <div>
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