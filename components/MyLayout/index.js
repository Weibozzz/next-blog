import React from 'react';
import { Layout, Row, Col } from 'antd';

const MyLayout = (props) => {
  return (
    <Layout>
      <Row>
        <Col
          className="article-content-wrapper"
          sm={{ span: 24, offset: 0 }}
          xs={{ span: 24, offset: 0 }}
          lg={{ span: 20, offset: 2 }}
        >
          {props.children}
        </Col>
      </Row>
      <style>
        {`
      .article-content-wrapper{
      background-color: #fff;
      }

      `}
      </style>
    </Layout>

  );
};
export default MyLayout;
