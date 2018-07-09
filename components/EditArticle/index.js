import React, {Component} from 'react'
import {Layout, Menu, Breadcrumb, Row, Col} from 'antd'
import {List, Avatar, Icon, Pagination, Alert, Input, Button, Select} from 'antd'
import {connect} from 'react-redux'

import Edit from '../../components/Edit';

import {postArticleUrl} from '../../config';
import {postArticle} from '../../store/actions';

const {TextArea} = Input;
const Option = Select.Option;

class EditArticle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectVal: '',
      titleVal: '',
      shortVal: '',
      urlVal: '',
      editCont: '',
      isEdit:'' //空值默认不为修改文章
    }
  }

  componentWillMount() {
    const {dataSource = {}} = this.props;
    const {title, short, type, url, content,articleID=''} = dataSource;
    console.log(dataSource)

    this.setState({
      selectVal: type,
      titleVal: title,
      shortVal: short,
      urlVal: url,
      editCont: content,
      isEdit:articleID
    })
  }

  handleChangeSelect(value) {
    this.setState({
      selectVal: value
    })
  }

  handleChangeTitle(e) {
    this.setState({
      titleVal: e.target.value
    })
  }

  handleChangeUrl(e) {
    this.setState({
      urlVal: e.target.value
    })
  }

  handleChangeShort(e) {
    this.setState({
      shortVal: e.target.value
    })
  }

  //编辑器内容
  handleChangeMarkEdit(txt) {
    this.setState({
      editCont: txt
    })
  }

  onSubmit() {
    const {dispatch} = this.props;
    return ;
    const {
      selectVal,
      titleVal,
      shortVal,
      urlVal,
      editCont,
      isEdit:id
    } = this.state;
    let queryParamsObj={
      title: titleVal,
      url: urlVal,
      content: encodeURIComponent(editCont),
      user: '刘伟波',
      type: selectVal,
      short: shortVal,
      img: 'js.png'
    };
    if(isEdit!==''){
      //修改文章 isEdit为文章id
      queryParamsObj=Object.assign({},queryParamsObj,{id})
    }

    postArticle(dispatch, postArticleUrl(), queryParamsObj)
  }

  render() {
    const {
      editCont='',
      selectVal='',
      titleVal='',
      shortVal='',
      urlVal=''
    } = this.state;
    const {dataSource = {}} = this.props;
    const {createTime} = dataSource;
    return (
      <div>
        <Row>
          <Col span={20}>
            <Input
              defaultValue={titleVal} onChange={this.handleChangeTitle.bind(this)} placeholder="文章标题"/>
          </Col>
          <Col span={1}>
          </Col>
          <Col span={3}>
            <Select defaultValue={selectVal===''?'文章类型':selectVal} style={{width: '100%'}} onChange={this.handleChangeSelect.bind(this)}>
              <Option value="h5">html</Option>
              <Option value="css">css</Option>
              <Option value="js">javascript</Option>
              <Option value="vue">vue</Option>
              <Option value="react">react</Option>
              <Option value="angular">angular</Option>
              <Option value="node">node</Option>
              <Option value="php">php</Option>
              <Option value="mysql">mysql</Option>
              <Option value="server">服务器之类</Option>
              <Option value="interesting">生活喜好</Option>
              <Option value="fight">激励向上</Option>
              <Option value="others">其他</Option>
            </Select>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Input
              defaultValue={urlVal} onChange={this.handleChangeUrl.bind(this)} placeholder="原文的URL链接地址"/>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
                                    <TextArea
                                      onChange={this.handleChangeShort.bind(this)}
                                      placeholder='简短介绍'
                                      defaultValue={shortVal}
                                      rows={2}/>
          </Col>
        </Row>
        <Edit editCont={editCont} createTime={createTime} handleChangeMarkEdit={this.handleChangeMarkEdit.bind(this)}/>
        <Button type="primary" onClick={this.onSubmit.bind(this)}>提交</Button>
      </div>
    );
  }
}

export default connect()(EditArticle)
