//浏览记录
import {formatTime} from "../../until";
import {SET_TABLE} from "./setTable";

export const TABLE_DATA = {
  ipData(ipListData){
    const ipKeys = ipListData.map(v => ([...Object.keys(v)]));
    const ipColumns = ipKeys && ipKeys[0] ? ipKeys[0].map(v => {
      return SET_TABLE.setHistoryRecode(v,this);
    }) : [];
    const ipData = ipListData.map((v, i) => Object.assign({}, v, {key: i}, {createTime: formatTime(v.createTime)}))
    return {
      ipColumns,ipData
    };
  },
  articleData(searchData,adminBlogData,_this){
    if (searchData.length) {
      adminBlogData = searchData
    }
    const keys = adminBlogData.map(v => ([...Object.keys(v), '操作']));
    const columns = keys && keys[0] ? keys[0].map(v => {
      return SET_TABLE.setArticle(v,_this);
    }) : [];
    const data = adminBlogData.map((v, i) => Object.assign({}, v, {key: i}, {createTime: formatTime(v.createTime)}))
    return {columns,data};
  },
  articleUserCommentData(getUserCommentsData,commentsUserData,_this){

    if (getUserCommentsData.length) {
      commentsUserData = getUserCommentsData
    }
    const keysUserComments = commentsUserData.map(v => ([...Object.keys(v), '操作']));
    const columnsUserComments = keysUserComments && keysUserComments[0] ? keysUserComments[0].map(v => {
      return SET_TABLE.setUserCommentWidth(v,_this);
    }) : [];
    const dataCommentsUserData = commentsUserData.map((v, i) => Object.assign({}, v, {key: i}, {createTime: formatTime(v.createTime)}))
    return {columnsUserComments,dataCommentsUserData};
  },
  articleComment(getCommentsData,_this){
    const keysAdminComments = getCommentsData.map(v => ([...Object.keys(v), '操作']));
    const columnsAdminComments = keysAdminComments && keysAdminComments[0] ? keysAdminComments[0].map(v => {
      return SET_TABLE.setCommentWidth(v,_this);
    }) : [];
    const dataAdminCommentsData = getCommentsData.map(
      (v, i) => Object.assign({}, v, {key: i}, {createTime: formatTime(v.createTime)})
    )
    return {columnsAdminComments,dataAdminCommentsData};
  },
  getView({date}){
    if(date){
      const viewListData = JSON.parse(date)
      let {t_view:curView} = viewListData[0];
      let {t_view:yesView} = viewListData[1];
      return {curView,yesView};
    }
    return {};
  }
}
