/*reducer 是纯方法
* 传入旧状态和action
* 返回新状态
*/
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import {combineReducers} from 'redux'
import {
  TEST_ASYNC,
  GET_TOTAL,
  GET_DETAIL,
  GET_ADMIN_BLOG,
  POST_ADMIN_DETAIL,
  POST_ARTICLE,
  GET_LIFE,
  GET_COMMENTS,
  GET_LAST_ID,
  GET_NEXT_ID,
  GET_ADMIN_COMMENTS,
  POST_COMMENT
} from './actions'

// 异步
const testAsync = (state = [], action) => {
  switch (action.type) {
    case TEST_ASYNC:
      return action.data
    default:
      return state
  }
}
const total = (state = [], action) => {
  switch (action.type) {
    case GET_TOTAL:
      return action.data
    default:
      return state
  }
}
const detail = (state = [], action) => {
  switch (action.type) {
    case GET_DETAIL:
      return action.data
    default:
      return state
  }
}
const lastId = (state = [], action) => {
  switch (action.type) {
    case GET_LAST_ID:
      return action.data
    default:
      return state
  }
}
const nextId = (state = [], action) => {
  switch (action.type) {
    case GET_NEXT_ID:
      return action.data
    default:
      return state
  }
}
const comments = (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return action.data
    default:
      return state
  }
}
const adminComments = (state = [], action) => {
  switch (action.type) {
    case GET_ADMIN_COMMENTS:
      return action.data
    default:
      return state
  }
}
const life = (state = [], action) => {
  switch (action.type) {
    case GET_LIFE:
      return action.data
    default:
      return state
  }
}
const adminBlog = (state = [], action) => {
  switch (action.type) {
    case GET_ADMIN_BLOG:
      return action.data
    default:
      return state
  }
}
const adminDetail = (state = [], action) => {
  switch (action.type) {
    case POST_ADMIN_DETAIL:
      return action.data
    default:
      return state
  }
}
//发表文章
const article = (state = [], action) => {
  switch (action.type) {
    case POST_ARTICLE:
      return action.data
    default:
      return state
  }
}
//发布评论
const comment = (state = [], action) => {
  switch (action.type) {
    case POST_COMMENT:
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
