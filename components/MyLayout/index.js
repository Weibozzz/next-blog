import React,{Component} from 'react';
import { Layout,Row,Col} from 'antd';

const MyLayout = (props)=>{
  return (

    <Layout>
      <Row>
        <Col sm={{ span: 24, offset: 0 }}
             xs={{ span: 24, offset: 0 }}
             lg={{ span: 20, offset: 2}}>
          {props.children}
        </Col>
      </Row>
    </Layout>
  )
}
export default MyLayout