export const TEST_ASYNC = 'TEST_ASYNC';
export const GET_TOTAL = 'GET_TOTAL';
export const GET_DETAIL = 'GET_DETAIL';
export const GET_NEXT_ID = 'GET_NEXT_ID';
export const GET_LAST_ID = 'GET_LAST_ID';
export const GET_ADMIN_BLOG = 'GET_ADMIN_BLOG';
export const GET_LIFE = 'GET_LIFE';
export const GET_COMMENTS = 'GET_COMMENTS';

export const GET_ADMIN_COMMENTS = 'GET_ADMIN_COMMENTS';

export const POST_ADMIN_DETAIL = 'POST_ADMIN_DETAIL';
export const POST_ARTICLE = 'POST_ARTICLE';
export const POST_COMMENT = 'POST_COMMENT';


// 异步请求

export const asyncTest = data =>{
    return {
        type:TEST_ASYNC,
        data
    }
};
export const getTotal = data =>{
    return {
        type:GET_TOTAL,
        data
    }
};
export const getDetail = data =>{
  return {
    type:GET_DETAIL,
    data
  }
};
export const getLastId = data =>{
  return {
    type:GET_LAST_ID,
    data
  }
};
export const getNextId = data =>{
  return {
    type:GET_NEXT_ID,
    data
  }
};
export const getComments = data =>{
  return {
    type:GET_COMMENTS,
    data
  }
};
export const getAdminComments = data =>{
  return {
    type:GET_ADMIN_COMMENTS,
    data
  }
};
export const getLife = data =>{
    return {
        type:GET_LIFE,
        data
    }
};
export const getAdminBlog = data =>{
    return {
        type:GET_ADMIN_BLOG,
        data
    }
};
export const postAdminDetail = data =>{
    return {
        type:POST_ADMIN_DETAIL,
        data
    }
};
export const postArticle = data =>{
  return {
    type:POST_ARTICLE,
    data
  }
};
export const postComment = data =>{
  return {
    type:POST_COMMENT,
    data
  }
};