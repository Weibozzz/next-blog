import {actionTypes} from "./action-types";
import fetch from 'isomorphic-unfetch'

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
