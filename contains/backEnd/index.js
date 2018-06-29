import axios from 'axios';
import {getAdminBlog, postAdminDetail,getAdminComments} from '../../actions'

import {domain} from '../common';

var qs = require("qs");
export const getAdminBlogUrl = domain + '/api/getAdminBlog'
export const getAdminCommentsUrl = domain + '/api/getAdminComments'
export const postAdminDetailUrl = domain + '/api/postAdminDetail'


export const getAdminCommentsData = url => {
  return dispatch => {
    axios.get(url).then(res => {
      dispatch(getAdminComments(res.data))
    })
  }
}
export const getAdminBlogData = url => {
  return dispatch => {
    axios.get(url).then(res => {
      dispatch(getAdminBlog(res.data))
    })
  }
}
export const postAdminDetailData = (url, data) => {
  return dispatch => {
    axios({
      method: 'POST',
      url,
      data: qs.stringify(data),
      headers: {"Content-Type": "application/x-www-form-urlencoded",},

    }).then(res => {
      dispatch(postAdminDetail(res.data))
    })
  }
}

export const _getAdminBlogData = (_this, type, num, pageNum, val) => {
  if(type==='del'){
    return  _this.props.dispatch(getAdminBlogData(`${getAdminBlogUrl}?type=${type}&num=${num}`));
  }
  return val
    ? _this.props.dispatch(getAdminBlogData(`${getAdminBlogUrl}?type=${type}&num=${num}&pageNum=${pageNum}&wd=${val}`))
    : _this.props.dispatch(getAdminBlogData(`${getAdminBlogUrl}?type=${type}&num=${num}&pageNum=${pageNum}`))
}
export const _getAdminCommentsData = (_this, a_id, id) => {
  return id
    ? _this.props.dispatch(getAdminCommentsData(`${getAdminCommentsUrl}?a_id=${a_id}&id=${id}`))
    : _this.props.dispatch(getAdminCommentsData(`${getAdminCommentsUrl}?a_id=${a_id}`))
}