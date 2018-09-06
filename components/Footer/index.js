import React, { Component } from 'react';
import Link from 'next/link';
import { Layout, BackTop } from 'antd';

import { MIIT_BEIAN, LINK_ABOUT_ME } from '../../config/constantsData';

const { Footer } = Layout;

class blogFooter extends Component {
  render() {
    return (
      <Footer className="footer-content">
        <p>
          {' '}
Power & Designed by
          <Link href={LINK_ABOUT_ME}>
            <a> liuweibo</a>
          </Link>
        </p>
        <p className="copy">
© 2017
          <Link href={MIIT_BEIAN}>
            <a> 陕ICP备17015350号</a>
          </Link>
        </p>
        <BackTop />
        <style>
          {`
            .footer-content{
              text-align:center;

            }
            .copy a{
              color:rgba(0, 0, 0, 0.65);;
            }
          `}
        </style>
      </Footer>
    );
  }
}

export default blogFooter;
