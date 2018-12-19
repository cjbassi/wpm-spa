import { combineReducers } from 'redux'

import { Action } from '../actions'
import { IStoreState } from '../store'
import textData from './text'
import typingData from './typing'

export default combineReducers<IStoreState, Action>({
  textData,
  typingData,
})
