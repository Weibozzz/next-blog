import {getDomain} from "./env";
import {toQueryStr} from '../until';

//前台
export const getBlogUrl = (obj) => {
  return getDomain() + 'api/getBlog' + toQueryStr(obj);
}
export const addZanUrl = (obj) => {
  return getDomain() + 'api/zan' + toQueryStr(obj);
}
export const getDetailUrl = (obj) => {
  return getDomain() + 'api/detail' + toQueryStr(obj);
}
export const getTotalUrl = (obj) => {
  return getDomain() + 'api/total' + toQueryStr(obj);
}
export const getLastIdUrl = (obj) => {
  return getDomain() + 'api/lastId' + toQueryStr(obj);
}

export const getNextIdUrl = (obj) => {
  return getDomain() + 'api/nextId' + toQueryStr(obj);
}
export const getIpUrl = (obj) => {
  return getDomain() + 'api/getIp' + toQueryStr(obj);
}
export const postSaveIpUrl = ()=>{
  return getDomain() + 'api/saveIp';
}

//评论
export const getCommentsUrl = (obj) => {
  return getDomain() + 'api/comments' + toQueryStr(obj);
}
export const postCommentUrl = () => {
  return getDomain() + 'api/postComment';
}
//留言
export const postUserCommentUrl = () => {
  return getDomain() + 'api/postUserComment';
}

export const getUserCommentUrl = (obj) => {
  //获得用户留言
  return getDomain() + 'api/getUserComment'+ toQueryStr(obj);
}

/*export const getAdminCommentUrl = () => {
  //获得用户评论
  return getDomain() + 'api/getAdminComment';
}*/

export const postArticleUrl = () => {
  //发表文章
  return getDomain() + 'api/postArticle';
}

export const getLifeUrl = () => {
  //生活板块
  return getDomain() + 'api/life';
}
export const getViewUrl = () => {
  //生活板块
  return getDomain() + 'api/getView';
}

//后台
export const getAdminBlogUrl = (obj) => {
  return getDomain() + 'api/getAdminBlog'+ toQueryStr(obj);
}
export const postAdminDetailUrl = () => {
  return getDomain() + 'api/postAdminDetail';
}
export const postAdminPasswordUrl = () => {
  return getDomain() + 'api/postAdminPassword';
}

// export const getBlogUrl = domain+'/api/getBlog'
// export const getTotalUrl = domain+'/api/total'
// export const getLifeUrl = domain+'/api/life'
// export const getDetailUrl = domain+'/api/detail'
// export const getLastIdUrl = domain+'/api/lastId'
// export const getNextIdUrl = domain+'/api/nextId'
// export const getCommentsUrl = domain+'/api/comments'
// export const postArticleUrl = domain+'/api/postArticle'
// export const postCommentUrl = domain+'/api/postComment'


// export const getAdminBlogUrl = domain + '/api/getAdminBlog'
// export const getAdminCommentsUrl = domain + '/api/getAdminComments'
// export const postAdminDetailUrl = domain + '/api/postAdminDetail'

