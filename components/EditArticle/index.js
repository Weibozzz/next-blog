import React, {Component} from 'react'
import Link from 'next/link';
import {
  Layout,
  Menu,
  Breadcrumb,
  Row,
  Col,
  List,
  Avatar,
  Icon,
  Pagination,
  Alert,
  Input,
  Button,
  Select,
  message
} from 'antd'
import {connect} from 'react-redux'
import Router from 'next/router'

import Edit from '../../components/Edit';

import {getBlogUrl, getTotalUrl, postArticleUrl} from '../../config';
import {postArticle} from '../../store/actions';
import {regUrl, getHtml} from '../../until';
import {POST_ARTICLE_TYPE, POST_ARTICLE_COPY, ALL, pageNum} from '../../config/constantsData';

const {TextArea} = Input;
const Option = Select.Option;
const InputGroup = Input.Group;


class EditArticle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectVal: 'js',
      titleVal: '',
      shortVal: '',
      urlVal: '',
      editCont: '',
      isEdit: '', //空值默认不为修改文章
      notEditArticle: false,  //默认不修改文章
      timer: null
    }
  }

  componentWillMount() {
    const {dataSource = {}} = this.props;
    const {title, short, type, url, content, articleID = '', createTime} = dataSource;

    this.setState({
      selectVal: type,
      titleVal: title,
      shortVal: short,
      urlVal: url,
      editCont: getHtml(content, createTime),
      isEdit: articleID,
      isAutoSave: false,
      isNowEdit:false
    })
  }

  componentDidMount() {
    this.setState({
      timer: setInterval(() => {
        const {isAutoSave} = this.state;
        console.log('willmount',isAutoSave)
        if(isAutoSave){
          this.onSubmit()
          this.setState({
            isAutoSave:false,
            isNowEdit:false,
          })
        }
      }, 30000)
    })

  }

  componentWillUnmount() {
    const {timer} = this.state;
    this.setState({
      timer: clearInterval(timer)
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
    console.log(123)
    const {editCont, isAutoSave,isNowEdit} = this.state;
    this.setState({
      editCont: txt,
      isNowEdit:true,
      isAutoSave: txt !== editCont&&!isNowEdit, //如果之前和现在的不一样并且没有正在修改，则设置为true,设置自动保存
      notEditArticle: true //正在修改文章
    })
    console.log('txt !== editCont&&!isNowEdit',txt !== editCont&&!isNowEdit)
    let timer;
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      this.setState({
        isNowEdit:false
      })
      console.log('txt !== editCont&&!isNowEdit 后',txt !== editCont&&!isNowEdit)
    }, 1000);
  }

  onSubmit() {
    const {dispatch, sourceData = []} = this.props;
    let {id: maxArticleId} = sourceData[0] || '';
    const {password} = sessionStorage;
    const {isEdit, notEditArticle} = this.state;
    let {
      selectVal = '',
      titleVal = '',
      shortVal = '',
      urlVal = '',
      editCont = '',
      isEdit: id,
    } = this.state;
    if (titleVal === '' || selectVal === '' || editCont === '') {
      message.error('必填项不能为空');
      return;
    }
    if (urlVal !== '' && !regUrl.test(urlVal)) {
      message.warning('url不正确')
      return;
    }
    const bool = isEdit !== '';
    if (!bool) {
      //如果是发布文章，带上版权信息

      editCont += POST_ARTICLE_COPY(maxArticleId)
    }
    let queryParamsObj = {
      title: titleVal.trim(),
      url: urlVal.trim(),
      content: !notEditArticle ? decodeURIComponent(editCont) : encodeURIComponent(editCont),
      user: '刘伟波',
      type: selectVal,
      short: shortVal.trim(),
      img: 'js.png',
      token: password
    };
    if (bool) {
      //修改文章 isEdit为文章id
      queryParamsObj = Object.assign({}, queryParamsObj, {id})
    }
    postArticle(dispatch, postArticleUrl(), queryParamsObj).then(res => {
      const {postArticleData = []} = res;
      if (Array.isArray(postArticleData) && !postArticleData.length) {
        message.warning('您可能没权限,或者文章已存在')
        return;
      }
      if (res) {
        message.success(bool ? this.editTipsDom() : this.postTipsDom(++maxArticleId));
      }
    })
  }

  postTipsDom(maxArticleId) {
    return <span>
      发布文章成功，点击
      <Link href={`/adminDetail/${maxArticleId}`}>
        <a>修改</a>
      </Link>
      或者
      <Link href={`/p/${maxArticleId}`}>
        <a>查看</a>
      </Link>
      文章
    </span>;
  }

  editTipsDom() {
    const {query = {}} = Router;
    const {id = ''} = query
    return <span>
      修改文章成功，点击
      <Link href={`/p/${id}`}>
        <a>查看</a>
      </Link>
      文章
    </span>;
  }

  render() {
    const {
      editCont = '',
      selectVal = '',
      titleVal = '',
      shortVal = '',
      urlVal = ''
    } = this.state;
    const {dataSource = {}} = this.props;
    const {createTime, id} = dataSource;
    return (
      <div>
        <Row>
          <Col span={24}>
            <InputGroup compact>
              <Input style={{width: '90%'}}
                     onChange={this.handleChangeTitle.bind(this)}
                     placeholder="文章标题"
                     title='文章标题'
                     defaultValue={titleVal}/>
              <Select style={{width: '10%'}}
                      onChange={this.handleChangeSelect.bind(this)}
                      defaultValue={selectVal === '' ? '文章类型' : selectVal}>
                {
                  POST_ARTICLE_TYPE.map(v => (
                    <Option value={v.key}>{v.value}</Option>
                  ))
                }
              </Select>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Input
              defaultValue={urlVal}
              onChange={this.handleChangeUrl.bind(this)}
              title="参考的URL链接地址"
              placeholder="参考的URL链接地址"/>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
                                    <TextArea
                                      onChange={this.handleChangeShort.bind(this)}
                                      placeholder='简短介绍'
                                      title="简短介绍"
                                      defaultValue={shortVal}
                                      rows={2}/>
          </Col>
        </Row>
        <Edit editCont={editCont} id={id} createTime={createTime}
              handleChangeMarkEdit={this.handleChangeMarkEdit.bind(this)}/>
        <Button type="primary" onClick={this.onSubmit.bind(this)}>提交</Button>
      </div>
    );
  }
}

export default connect()(EditArticle)
