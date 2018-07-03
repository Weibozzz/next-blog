import {actionTypes} from "./action-types";

const exampleInitialState = {}
export const reducer = (state = exampleInitialState, action) => {

  switch (action.type) {
    case actionTypes.SEARCH_DATA:
      //第一次搜索到的文章列表
      return Object.assign({}, state, {
        searchData: action.searchData
      })
    case actionTypes.SEARCH_PAGE_DATA:
      //点击搜索分页搜索到的文章列表
      return Object.assign({}, state, {
        searchData: action.searchData
      })
    case actionTypes.GET_SEARCH_TOTAL_DATA:
      //搜索的所有页数
      return Object.assign({}, state, {
        searchTotalData: action.searchTotalData
      })


    case actionTypes.POST_COMMENTS:
      //发布评论,然后获得更新后的评论
      return Object.assign({}, state, {
        getCommentsData: action.getCommentsData
      })
    default:
      return state
  }
}