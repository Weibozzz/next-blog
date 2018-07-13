import React from 'react'
import {connect} from 'react-redux'
import {Button,Switch} from 'antd';

class Index extends React.Component {


  render () {
    return (
      <div>
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531216186295&di=cf3d3d7fb5ff5980f011925f0e103be3&imgtype=0&src=http%3A%2F%2Fcimage.tianjimedia.com%2FuploadImages%2F2017%2F12%2F20171205150411334.jpg%3FimageView%26thumbnail%3D100y75"
          alt="菅纫姿"/>

        <style>{`
          img{
            width:100%;
          }
        `}</style>
      </div>
    )
  }
}

export default connect()(Index)