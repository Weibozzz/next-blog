import {actionTypes} from "./action-types";
import fetch from 'isomorphic-unfetch'

//前台
export const getSearchPageList = async (dispatch, url) => {
  //点击搜索分页搜索到的文章列表
  const res = await fetch(url)
  const jsonData = await res.json()
  return dispatch({type: actionTypes.SEARCH_PAGE_DATA, searchData: jsonData})
}
export const getSearchList = async (dispatch, url,myCollect) => {
  //第一次搜索到的文章列表
  if(url==='myCollect'){
    return dispatch({type: actionTypes.SEARCH_DATA, searchData: myCollect});
  }
  const res = await fetch(url)
  const jsonData = await res.json()
  return dispatch({type: actionTypes.SEARCH_DATA, searchData: jsonData})

}
export const getHotArticleList = async (dispatch, url) => {
  //获得热门文章
  const res = await fetch(url)
  const jsonData = await res.json()
  return dispatch({type: actionTypes.HOT_ARTICLE_DATA, hotArticleData: jsonData})

}
export const getModifyArticleList = async (dispatch, url) => {
  //获得最近修改文章
  const res = await fetch(url)
  const jsonData = await res.json()
  return dispatch({type: actionTypes.MODIFY_ARTICLE_DATA, modifyArticleData: jsonData})

}
export const getHotRecommendList = async (dispatch, url) => {
  //获得不同type热门文章
  const res = await fetch(url)
  const jsonData = await res.json()
  return dispatch({type: actionTypes.HOT_RECOMMEND_DATA, hotRecommendData: jsonData})

}
export const getSearchTotal = async (dispatch, url) => {
  //搜索的所有页数
  const res = await fetch(url)
  const jsonData = await res.json()
  return dispatch({type: actionTypes.GET_SEARCH_TOTAL_DATA, searchTotalData: jsonData})

}
export const addZan = async (dispatch, url) => {
  //搜索的所有页数
  const res = await fetch(url)
  const jsonData = await res.json()
  return dispatch({type: actionTypes.ADD_ZAN, addZanData: jsonData})

}
export const getLifeList = async (dispatch, url) => {
  //生活板块
  const res = await fetch(url)
  const jsonData = await res.json()
  return dispatch({type: actionTypes.GET_LIFE, lifeData: jsonData})

}
export const getQiniuToken = async (dispatch, url) => {
  //获得七牛云存储的token
  const res = await fetch(url)
  const jsonData = await res.json()
  return dispatch({type: actionTypes.GET_QINIU_TOKEN, qiniuToken: jsonData})

}
export const setCommentIndex =  (dispatch, commentIndex) => {
  //设置评论回复index
  return dispatch({type: actionTypes.SET_COMMENT_INDEX, commentIndex})

}
export const setAnswerId =  (dispatch, answerId) => {
  //设置回复评论answerid
  return dispatch({type: actionTypes.SET_ANSWER_ID, answerId})

}
export const collectArticleList =  (dispatch, isCollectArticle) => {
  //设置是否展示收藏文章列表
  return dispatch({type: actionTypes.IS_COLLECT_ARTICLE, isCollectArticle})

}
export const getIpList = async (dispatch, url) => {
  //生活板块
  const res = await fetch(url)
  const jsonData = await res.json()
  return dispatch({type: actionTypes.GET_IP, ipListData: jsonData})

}
export const getViewList = async (dispatch, url) => {
  //生活板块
  const res = await fetch(url)
  const jsonData = await res.json()
  return dispatch({type: actionTypes.GET_VIEW, viewListData: jsonData})

}
export const getCreateTimeList = async (dispatch, url) => {
  //获得所有创建文章的时间
  const res = await fetch(url)
  const jsonData = await res.json()
  return dispatch({type: actionTypes.GET_CREATE_TIME, createTimeListData: jsonData})

}

export const postComments = async (dispatch, url,body) => {
  //发布评论,然后获得更新后的评论
  const res = await fetch(url,{
    method: 'POST',
    body:JSON.stringify(body)
  })
  const jsonData = await res.json()
  return dispatch({type: actionTypes.POST_COMMENTS, getCommentsData: jsonData})

}
export const postSaveIp = async (dispatch, url,body) => {
  //存储ip
  const res = await fetch(url,{
    method: 'POST',
    body:JSON.stringify(body)
  })
  const jsonData = await res.json()
  return dispatch({type: actionTypes.SAVE_IP, geSaveIpData: jsonData})

}
export const postUserComments = async (dispatch, url,body) => {
  //发布评论,然后获得更新后的评论
  const res = await fetch(url,{
    method: 'POST',
    body:JSON.stringify(body)
  })
  const jsonData = await res.json()
  return dispatch({type: actionTypes.POST_USER_COMMENTS, getUserCommentsData: jsonData})

}
export const postArticle = async (dispatch, url,body) => {
  //发布文章 修改文章
  const res = await fetch(url,{
    method: 'POST',
    body:JSON.stringify(body)
  })
  const jsonData = await res.json()
  return dispatch({type: actionTypes.POST_ARTICLE, postArticleData: jsonData})

}

//后台

export const getAdminBlogList = async (dispatch, url) => {
  //点击搜索分页搜索到的文章列表
  const res = await fetch(url)
  const jsonData = await res.json()
  return dispatch({type: actionTypes.GET_ADMIN_DATA, adminBlogData: jsonData})
}
export const getCommentsUserList = async (dispatch, url) => {
  //上拉加载更多的评论
  const res = await fetch(url)
  const jsonData = await res.json()
  return dispatch({type: actionTypes.GET_COMMENTS_USER, getCommentsUserData: jsonData})
}

/*export const getCommentsList = async (dispatch, url) => {
  //得到所有用户评论
  const res = await fetch(url)
  const jsonData = await res.json()
  return dispatch({type: actionTypes.GET_COMMENTS, getAdminCommentsData: jsonData})
}*/

// export const postAdminDetail = async (dispatch, url) => {
//   //修改文章
//   const res = await fetch(url)
//   const jsonData = await res.json()
//   return dispatch({type: actionTypes.POST_ADMIN_DETAIL, postAdminDetailData: jsonData})
// }
export const postAdminPassword = async (dispatch, url,body) => {
  //检查密码是否正确为管理员
  const res = await fetch(url,{
    method: 'POST',
    body:JSON.stringify(body)
  })
  const jsonData = await res.json()
  return dispatch({type: actionTypes.POST_ADMIN_PASSWORD,postAdminPasswordData: jsonData})
}


