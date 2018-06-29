import axios from 'axios';
import {asyncTest, getDetail,getLastId,getNextId, getTotal, postAdminDetail, postArticle,getLife,getComments,postComment} from '../../actions'
import {domain} from '../common';
var qs = require("qs");
export const getBlogUrl = domain+'/api/getBlog'
export const getTotalUrl = domain+'/api/total'
export const getLifeUrl = domain+'/api/life'
export const getDetailUrl = domain+'/api/detail'
export const getLastIdUrl = domain+'/api/lastId'
export const getNextIdUrl = domain+'/api/nextId'
export const getCommentsUrl = domain+'/api/comments'
export const postArticleUrl = domain+'/api/postArticle'
export const postCommentUrl = domain+'/api/postComment'

export const getBlogData = url=>{
  console.log(url)
    return dispatch => {
        axios.get(url).then(res => {
            dispatch(asyncTest(res.data))
        })
    }
}
export const getTotalData =(url)=> {
    return dispatch => {
        axios.get(url).then(res => {
            dispatch(getTotal(res.data))
        })
    }
}
export const getLifeData =(url)=> {
    return dispatch => {
        axios.get(url).then(res => {
            dispatch(getLife(res.data))
        })
    }
}
export const getCommentsData =(url)=> {
    return dispatch => {
        axios.get(url).then(res => {
            dispatch(getComments(res.data))
        })
    }
}
export const getDetailData= (url)=> {
  return dispatch => {
    axios.get(url).then(res => {
      dispatch(getDetail(res.data))
    })
  }
}
export const getLastIdData= (url)=> {
    console.log(url)
  return dispatch => {
    axios.get(url).then(res => {
      dispatch(getLastId(res.data))
    })
  }
}
export const getNextIdData= (url)=> {
  return dispatch => {
    axios.get(url).then(res => {
      dispatch(getNextId(res.data))
    })
  }
}
export const postCommentData = (data)=>{
  console.log(data)
  return dispatch => {
    axios({
      method: 'POST',
      url:postCommentUrl,
      data:qs.stringify(data),
      headers: {"Content-Type": "application/x-www-form-urlencoded",},

    }).then(res => {
      dispatch(postComment(res.data))
    })
  }
}
export const postArticleData = (url,data)=>{
  return dispatch => {
    axios({
      method: 'POST',
      url,
      data:qs.stringify(data),
      headers: {"Content-Type": "application/x-www-form-urlencoded",},

    }).then(res => {
      dispatch(postArticle(res.data))
    })
  }
}
export const _getTotalData= (_this,type,val)=> {
    return val
        ? _this.props.dispatch(getTotalData(`${getTotalUrl}?type=${type}&wd=${val}`))
        :_this.props.dispatch(getTotalData(`${getTotalUrl}?type=${type}`))
}

export const _getBlogData= (_this,url,type,num,pageNum,val)=> {
  if(type==='id'){
    return _this.props.dispatch(getBlogData(`${url}?type=${type}&num=${num}`))
  }
    return val
        ?_this.props.dispatch(getBlogData(`${url}?type=${type}&num=${num}&pageNum=${pageNum}&wd=${val}`))
        :_this.props.dispatch(getBlogData(`${url}?type=${type}&num=${num}&pageNum=${pageNum}`))
}

