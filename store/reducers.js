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
    case actionTypes.HOT_ARTICLE_DATA:
      //获得热门文章
      return Object.assign({}, state, {
        hotArticleData: action.hotArticleData
      })
    case actionTypes.MODIFY_ARTICLE_DATA:
      //获得修改文章
      return Object.assign({}, state, {
        modifyArticleData: action.modifyArticleData
      })
    case actionTypes.HOT_RECOMMEND_DATA:
      //获得不同type热门文章
      return Object.assign({}, state, {
        hotRecommendData: action.hotRecommendData
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
    case actionTypes.GET_CREATE_TIME:
      //生活板块
      return Object.assign({}, state, {
        createTimeListData: action.createTimeListData
      })
    case actionTypes.SET_COMMENT_INDEX:
      //设置评论回复index
      return Object.assign({}, state, {
        commentIndex: action.commentIndex
      })
    case actionTypes.SET_ANSWER_ID:
      //设置回复评论answerid
      return Object.assign({}, state, {
        answerId: action.answerId
      })
    case actionTypes.IS_COLLECT_ARTICLE:
      //设置是否展示收藏文章列表
      return Object.assign({}, state, {
        isCollectArticle: action.isCollectArticle
      })

    case actionTypes.GET_QINIU_TOKEN:
      //获得七牛云存储的token
      return Object.assign({}, state, {
        qiniuToken: action.qiniuToken
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
    case actionTypes.SAVE_IP:
      //存取ip地址返回
      return Object.assign({}, state, {
        geSaveIpData: action.geSaveIpData
      })
    case actionTypes.GET_IP:
      //得到ip地址返回
      return Object.assign({}, state, {
        ipListData: action.ipListData
      })
    case actionTypes.GET_VIEW:
      //得到view数量返回
      return Object.assign({}, state, {
        viewListData: action.viewListData
      })

    //后台
    case actionTypes.GET_COMMENTS:
      //获得博客用户评论数据
      return Object.assign({}, state, {
        getAdminCommentsData: action.getAdminCommentsData
      })
    case actionTypes.GET_COMMENTS_USER:
      //获得博客用户留言数据
      return Object.assign({}, state, {
        getCommentsUserData: action.getCommentsUserData
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
