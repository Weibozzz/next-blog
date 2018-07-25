import {actionTypes} from "./action-types";

const exampleInitialState = {}
export const reducer = (state = exampleInitialState, action) => {

  switch (action.type) {
    //前台
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
    case actionTypes.ADD_ZAN:
      //搜索的所有页数
      return Object.assign({}, state, {
        addZanData: action.addZanData
      })

    case actionTypes.GET_LIFE:
      //生活板块
      return Object.assign({}, state, {
        lifeData: action.lifeData
      })


    case actionTypes.POST_COMMENTS:
      //发布评论,然后获得更新后的评论
      return Object.assign({}, state, {
        getCommentsData: action.getCommentsData
      })
    case actionTypes.POST_USER_COMMENTS:
      //发布留言,然后获得更新后的评论
      return Object.assign({}, state, {
        getUserCommentsData: action.getUserCommentsData
      })
    case actionTypes.POST_ARTICLE:
      //发布文章后的返回
      return Object.assign({}, state, {
        postArticleData: action.postArticleData
      })

    //后台
    case actionTypes.GET_COMMENTS:
      //获得博客数据
      return Object.assign({}, state, {
        getAdminCommentsData: action.getAdminCommentsData
      })
    case actionTypes.GET_ADMIN_DATA:
      //获得博客数据
      return Object.assign({}, state, {
        adminBlogData: action.adminBlogData
      })
    case actionTypes.POST_ADMIN_DETAIL:
      //发布文章
      return Object.assign({}, state, {
        postAdminDetailData: action.postAdminDetailData
      })
    case actionTypes.POST_ADMIN_PASSWORD:
      //检查密码是否正确为管理员
      return Object.assign({}, state, {
        postAdminPasswordData: action.postAdminPasswordData
      })
    default:
      return state
  }
}