import React,{Component} from 'react';
import { Layout,BackTop} from 'antd';
const {Footer } = Layout;

class blogFooter extends Component {
  constructor() {
    super();

  }
  render (){
    return (
      <Footer style={{ textAlign: 'center' }}>
        <p> Power & Designed by liuweibo</p>
        <p>© 2017   陕ICP备17015350号</p>
        <BackTop/>
      </Footer>
    );
  }
}

export default blogFooter;
