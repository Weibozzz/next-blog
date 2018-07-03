import {actionTypes} from "./action-types";
import fetch from 'isomorphic-unfetch'

//前台
export const getSearchPageList = async (dispatch, url) => {
  //点击搜索分页搜索到的文章列表
  const res = await fetch(url)
  const jsonData = await res.json()
  return dispatch({type: actionTypes.SEARCH_PAGE_DATA, searchData: jsonData})
}
export const getSearchList = async (dispatch, url) => {
  //第一次搜索到的文章列表
  const res = await fetch(url)
  const jsonData = await res.json()
  return dispatch({type: actionTypes.SEARCH_DATA, searchData: jsonData})

}
export const getSearchTotal = async (dispatch, url) => {
  //搜索的所有页数
  const res = await fetch(url)
  const jsonData = await res.json()
  return dispatch({type: actionTypes.GET_SEARCH_TOTAL_DATA, searchTotalData: jsonData})

}
//后台

export const getAdminBlogList = async (dispatch, url) => {
  //点击搜索分页搜索到的文章列表
  const res = await fetch(url)
  const jsonData = await res.json()
  return dispatch({type: actionTypes.GET_ADMIN_DATA, adminBlogData: jsonData})
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
