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
  message, Upload, Modal, Radio
} from 'antd'
import {connect} from 'react-redux'
import Router from 'next/router'
import {CopyToClipboard} from 'react-copy-to-clipboard';

import Edit from '../../components/Edit';

import {getBlogUrl, getTotalUrl, postArticleUrl, getQiniuTokenUrl} from '../../config';
import {bucket_domin} from '../../config/qiniu_config';
import {postArticle, getQiniuToken} from '../../store/actions';
import {regUrl, getHtml, getImageName} from '../../until';
import {checkAndHandleCompression} from '../../until/upload-file';
import {POST_ARTICLE_TYPE, POST_ARTICLE_COPY, ALL, pageNum, UPLOAD_MAX_SIZE} from '../../config/constantsData';
import './index.less'

const copy = require('copy-text-to-clipboard');
const qiniu = require('qiniu-js')
const {TextArea} = Input;
const Option = Select.Option;

const RadioGroup = Radio.Group;
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
      timer: null,
      inter: null,
      markdownUploadLink: [],
      isAutoSubmit: true,
      radioValue: 1,

      previewVisible: false,
      bucket: '',
      imageTwo: '', //图片二级目录 image/common/xxx.jpg
      previewImage: '',
      loadPercent: 0,
      fileList: [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }],
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
      saveStatus: ''
    })
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  shouldComponentUpdate(a, b) {
    const {fileList, editCont} = b;
    const {fileList: stateFileList, editCont: stateEditCont} = this.state;
    return fileList.length !== stateFileList.length || editCont === stateEditCont;
  }

  handleChangeSelect(value) {
    this.setState({
      selectVal: value.join()
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
    let time = 15;
    let {inter, isAutoSubmit} = this.state;
    if (inter) {
      clearInterval(inter)
      this.setState({
        inter: null
      })
    }
    inter = setInterval(() => {
      this.setState({
        saveStatus: `正在保存(${--time})……`
      })
      if (time === 0) {
        clearInterval(inter)
      }
    }, 1000);
    this.setState({
      editCont: txt,
      inter,
      saveStatus: `正在保存(${time})……`,
      notEditArticle: true //正在修改文章
    })
    let {timer} = this.state;
    if (timer) {
      clearTimeout(timer)
      this.setState({
        timer: null,
        saveStatus: `正在保存(${time})……`
      })
    }
    timer = setTimeout(() => {
      if (isAutoSubmit) {
        this.onSubmit()
      }
      this.setState({
        saveStatus: '已提交'
      })
    }, time * 1000);
    this.setState({
      timer
    })
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
    let {inter} = this.state;
    if (inter) {
      clearInterval(inter)
      this.setState({
        inter: null,
        isAutoSubmit: false,
        saveStatus: '已提交'
      })
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

  //上传

  handleCancel = () => this.setState({previewVisible: false})
  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({fileList}) => {
    this.setState({fileList})
  }

  async beforeUpload(file, fileList) {
    const {password} = sessionStorage
    let {bucket, imageTwo, markdownUploadLink, radioValue} = this.state;
    bucket = bucket || 'article';
    let self = this;
    const {dispatch} = this.props;
    const paramsObj = {
      bucket,
      token: password
    }
    let qiniuData;
    try {
      qiniuData = await getQiniuToken(dispatch, getQiniuTokenUrl(paramsObj))
    } catch (err) {
      message.error('七牛获取token错误' + JSON.stringify(err))
      return;
    }
    const {qiniuToken: qiniuTokenData} = qiniuData
    const {qiniuToken} = qiniuTokenData[0] || {}
    const observer = {
      next(res) {
        const {total} = res;
        const {percent} = total;
        self.setState({
          loadPercent: percent
        })
        if (percent === 100) {
          message.success('上传成功')
        }
      },
      error(err) {
        console.log(err)
        // ...
        message.error('err:' + JSON.stringify(err))
      },
      complete(res) {
        // ...
      }
    }
    const {name, lastModified, size} = file;
    console.log(size / 1024 + 'kb')
    console.log(size / 1024 / 1024 + 'M')
    let {uploadSrc, uploadFile} = {}
    if (size / 1024 / 1024 > UPLOAD_MAX_SIZE && radioValue === 1) {
      //如果大于 UPLOAD_MAX_SIZE M进行压缩,并且选择了可以压缩
      ({uploadSrc, uploadFile} = await checkAndHandleCompression(file, UPLOAD_MAX_SIZE));
    } else {
      uploadFile = file;
    }
    console.log(uploadFile)

    const {font, back = 'png'} = getImageName(name)
    const newFileName = `image/${imageTwo ? imageTwo : 'common'}/${font}_${lastModified}_${size}_${+new Date()}${back}`
    const config = {
      useCdnDomain: true,
      region: null
    };
    const putExtra = {
      fname: "",
      params: {},
      mimeType: [] || null
    };
    // return ;
    const observable = qiniu.upload(uploadFile, newFileName, qiniuToken, putExtra, config)
    const subscription = observable.subscribe(observer) // 上传开始
    let qiniu_upload_link = bucket_domin[bucket] + newFileName;
    this.setState({
      markdownUploadLink: [...markdownUploadLink, qiniu_upload_link]
    })
    return true;
  }

  handleChangeBucket(e) {
    const arr = e.target.value.split(',');
    const bucket = arr[0];
    const imageTwo = arr[1];
    this.setState({
      bucket,
      imageTwo
    })
  }

  onCopyLink(v) {
    let link = `![${v}](${v})`;
    copy(link)
  }

  onChangeRadio = (e) => {
    this.setState({
      radioValue: e.target.value,
    });
  }

  render() {
    const {
      editCont = '',
      selectVal = '',
      titleVal = '',
      shortVal = '',
      urlVal = '',
      saveStatus,
      bucket,
      loadPercent,
      markdownUploadLink
    } = this.state;
    const resultSelectVal = selectVal?selectVal.split(','):[]
    const {dataSource = {}} = this.props;
    const {createTime, id} = dataSource;
    //上传
    const {previewVisible, previewImage, fileList, radioValue} = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus"/>
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div>
        <Row>
          <Col span={24}>
            <InputGroup compact>
              <Input style={{width: '50%'}}
                     onChange={this.handleChangeTitle.bind(this)}
                     placeholder="文章标题"
                     title='文章标题'
                     defaultValue={titleVal}/>
              <Select style={{width: '50%'}}
                      mode="tags"
                      placeholder="请选择文章类型"
                      onChange={this.handleChangeSelect.bind(this)}
                      defaultValue={resultSelectVal}>
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
                                    <TextArea
                                      onChange={this.handleChangeShort.bind(this)}
                                      placeholder='简短介绍'
                                      title="简短介绍"
                                      defaultValue={shortVal}
                                      rows={2}/>
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

        <Edit editCont={editCont} id={id} createTime={createTime}
              handleChangeMarkEdit={this.handleChangeMarkEdit.bind(this)}/>
        <Button type="primary" onClick={this.onSubmit.bind(this)}>提交</Button>
        <div className="save-status">{saveStatus}</div>
        {markdownUploadLink.length ?
          markdownUploadLink.map((v, i) =>
            <Button className='markdown-image-link' onClick={this.onCopyLink.bind(this, v)} type='danger'
                    size='small'>第{i + 2}张</Button>
          )
          : ''}
        <Row>
          <Col span={20}>
            <div className="upload-wrapper" style={{border: `1px solid ${loadPercent === 100 ? 'green' : 'orange'}`}}>
              <Upload
                action=""
                listType="picture-card"
                fileList={fileList}
                beforeUpload={this.beforeUpload.bind(this)}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
              >
                {uploadButton}
              </Upload>
            </div>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{width: '100%'}} src={previewImage}/>
            </Modal>
          </Col>
          <Col span={4}>
            <Input
              defaultValue={bucket}
              onChange={this.handleChangeBucket.bind(this)}
              title="上传的bucket,默认为article，文件名二级目录以逗号分隔，如common，例如：article,common"
              placeholder="鼠标移上面看如何传参"/>
            {loadPercent === 0 || loadPercent === 100 ? '' : <span>{loadPercent}%</span>}
            <div title={`这里默认大于${UPLOAD_MAX_SIZE}M会自动压缩图片`}>
              <RadioGroup onChange={this.onChangeRadio} value={radioValue}>
                <Radio value={1}>压缩文件</Radio>
                <Radio value={2}>不压缩文件</Radio>
              </RadioGroup>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect()(EditArticle)
