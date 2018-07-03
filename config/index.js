import {getDomain} from "./env";
import {toQueryStr} from '../until';

export const getBlogUrl = (obj) => {
  return getDomain() + 'api/getBlog' + toQueryStr(obj);
}
export const getDetailUrl = (obj) => {
  return getDomain() + 'api/detail' + toQueryStr(obj);
}
export const getTotalUrl = (obj) => {
  return getDomain() + 'api/total' + toQueryStr(obj);
}
export const getCommentsUrl = (obj) => {
  return getDomain() + 'api/comments' + toQueryStr(obj);
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

