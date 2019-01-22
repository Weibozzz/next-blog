import {
  Form, Button, Checkbox,
  Layout, Menu, Breadcrumb, Row, Col, Pagination, Input, Tabs, Table, List, Avatar, Icon, message, Modal
} from 'antd';
import {getAdminBlogList, getIpList, getSearchList, postComments, postUserComments} from "../../store/actions";
import {getAdminBlogUrl, getBlogUrl, getIpUrl, postCommentUrl, postUserCommentUrl} from "../../config";
import {ALL, pageNum, TITLE} from "../../config/constantsData";

const confirm = Modal.confirm;
export const REQ_ACTION = {
  //搜索文章
  onSearch(_this,val) {
    _this.setState({
      inputVal: val,
      currentPage: 1
    })

    const {dispatch} = _this.props;
    let queryStringObj;
    _this.setState({
      keyWard: val
    })
    if (val) {
      queryStringObj = {
        type: TITLE,
        num: 1,
        pageNum,
        wd: val
      }
    } else {
      queryStringObj = {
        type: ALL,
        num: 1,
        pageNum
      }
    }

    getSearchList(dispatch, getBlogUrl(queryStringObj))
  },

  //分页变化查询
  onChange(_this,page, pageSize) {
    console.log(arguments)
    const {dispatch} = _this.props;
    const {password} = sessionStorage;

    const queryStringObj = {
      type: ALL,
      num: page,
      pageNum,
      token: password
    }
    getAdminBlogList(dispatch, getAdminBlogUrl(queryStringObj))
  },
  //删除文章
  handleDelArticle(_this,id) {
    const {dispatch} = _this.props;
    const {defaultConfirmObj} = _this.state;
    const confirmObj = {
      title: 'Are you sure delete this article?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
    }
    const {password} = sessionStorage;
    const queryStringObj = {
      type: 'del',
      num: id,
      token: password
    };
    confirm({
      ...confirmObj,
      ...defaultConfirmObj,
      onOk() {
        getAdminBlogList(dispatch, getAdminBlogUrl(queryStringObj)).then(res => {
          const {adminBlogData = []} = res;
          if (!adminBlogData.length) {
            message.warning('您可能没权限')
            return;
          }
          if (res) {
            message.success(`id为${id}的文章删除成功`)
          } else {
            message.error('删除失败')
          }
        })
      },
      onCancel() {
      },
    });

  },

  //删除留言
  handleDelUserComment(_this,id) {
    const {dispatch} = _this.props;
    const {defaultConfirmObj} = _this.state;
    const {password} = sessionStorage;
    const queryStringObj = {
      type: 'del',
      num: id,
      token: password
    };
    confirm({
      ...defaultConfirmObj,
      onOk() {
        postUserComments(dispatch, postUserCommentUrl(), queryStringObj).then(res => {
          const {getUserCommentsData} = res;
          if (!getUserCommentsData.length) {
            message.warning('您可能没权限')
            return;
          }
          if (res) {
            message.success(`id为${id}的用户留言删除成功`)
          } else {
            message.error('删除失败')
          }
        })
      },
      onCancel() {
      },
    });

  },
  //删除评论
  handleDelAdminComment(_this,id) {
    const {dispatch} = _this.props;
    const {defaultConfirmObj} = _this.state;
    const {password} = sessionStorage;
    const queryStringObj = {
      type: 'del',
      delNum: id,
      token: password
    };
    confirm({
      ...defaultConfirmObj,
      onOk() {
        postComments(dispatch, postCommentUrl(), queryStringObj).then(res => {
          const {getCommentsData} = res;
          if (!getCommentsData.length) {
            message.warning('您可能没权限')
            return;
          }
          if (res) {
            message.success(`id为${id}的用户评论删除成功`)
          } else {
            message.error('删除失败')
          }
        })
      },
      onCancel() {
      },
    });
  },

  //上拉加载数据
  scrollBTMLoading(_this) {
    const {dispatch} = _this.props;
    let {pageSize: num, tabKey} = _this.state
    const {password} = sessionStorage;
    const queryStringObj = {
      type: ALL,
      num,
      pageNum,
      token: password
    }
    let footerDom = document.getElementsByClassName('footer-content')[0];
    let {innerHeight: windowHeight} = window;
    let {bottom} = footerDom.getBoundingClientRect();
    if (bottom - windowHeight < 1 && tabKey !== '1') {
      console.log('该请求数据了')
      let newNum = ++num;
      _this.setState({
        isLoading: true,
        pageSize: newNum
      })
      let newQueryStringObj = {...queryStringObj, num: newNum};
      if (tabKey === '4') {
        //浏览记录分页
        getIpList(dispatch, getIpUrl(newQueryStringObj)).then(res => {
          if (res) {
            _this.setState({
              isLoading: false
            })
          }
        })
      } else if (tabKey === '3') {
        //评论管理
        postComments(dispatch, postCommentUrl(), newQueryStringObj).then(res => {
          if (res) {
            _this.setState({
              isLoading: false
            })
          }
        })
      }
    }
  }
}
