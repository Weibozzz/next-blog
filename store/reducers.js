
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import {combineReducers} from 'redux'
import * as ActionTypes from './action-types';

// 异步
const testAsync = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.TEST_ASYNC:
      return action.data
    default:
      return state
  }
}
const total = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.GET_TOTAL:
      return action.data
    default:
      return state
  }
}
const detail = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.GET_DETAIL:
      return action.data
    default:
      return state
  }
}
const lastId = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.GET_LAST_ID:
      return action.data
    default:
      return state
  }
}
const nextId = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.GET_NEXT_ID:
      return action.data
    default:
      return state
  }
}
const comments = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.GET_COMMENTS:
      return action.data
    default:
      return state
  }
}
const adminComments = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.GET_ADMIN_COMMENTS:
      return action.data
    default:
      return state
  }
}
const life = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.GET_LIFE:
      return action.data
    default:
      return state
  }
}
const adminBlog = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.GET_ADMIN_BLOG:
      return action.data
    default:
      return state
  }
}
const adminDetail = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.POST_ADMIN_DETAIL:
      return action.data
    default:
      return state
  }
}
//发表文章
const article = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.POST_ARTICLE:
      return action.data
    default:
      return state
  }
}
//发布评论
const comment = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.POST_COMMENT:
      return action.data
    default:
      return state
  }
}
// 不同响应合并成一个reducer
const myBlog = combineReducers({
  testAsync,
  total,
  detail,
  life,
  adminBlog,
  adminDetail,
  article,
  comment,
  comments,
  lastId,
  nextId,
  adminComments
})


//export default myBlog
export const initStore = () => {
  return createStore(
    myBlog,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
