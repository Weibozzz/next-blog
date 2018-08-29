import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import {reducer} from './reducers';

const exampleInitialState = {commentIndex: -1, answerId: '', isCollectArticle: false}


export function initializeStore(initialState = exampleInitialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
