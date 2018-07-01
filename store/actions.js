import * as ActionTypes from './action-types';

// 异步请求

export const asyncTest = data =>{
    return {
        type:ActionTypes.TEST_ASYNC,
        data
    }
};
export const getTotal = data =>{
    return {
        type:ActionTypes.GET_TOTAL,
        data
    }
};
export const getDetail = data =>{
  return {
    type:ActionTypes.GET_DETAIL,
    data
  }
};
export const getLastId = data =>{
  return {
    type:ActionTypes.GET_LAST_ID,
    data
  }
};
export const getNextId = data =>{
  return {
    type:ActionTypes.GET_NEXT_ID,
    data
  }
};
export const getComments = data =>{
  return {
    type:ActionTypes.GET_COMMENTS,
    data
  }
};
export const getAdminComments = data =>{
  return {
    type:ActionTypes.GET_ADMIN_COMMENTS,
    data
  }
};
export const getLife = data =>{
    return {
        type:ActionTypes.GET_LIFE,
        data
    }
};
export const getAdminBlog = data =>{
    return {
        type:ActionTypes.GET_ADMIN_BLOG,
        data
    }
};
export const postAdminDetail = data =>{
    return {
        type:ActionTypes.POST_ADMIN_DETAIL,
        data
    }
};
export const postArticle = data =>{
  return {
    type:ActionTypes.POST_ARTICLE,
    data
  }
};
export const postComment = data =>{
  return {
    type:ActionTypes.POST_COMMENT,
    data
  }
};