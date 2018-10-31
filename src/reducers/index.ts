import { combineReducers } from 'redux'

import ActionType from '../actions'
import { IStoreState } from '../store'
import textInfo from './text'
import typingInfo from './typing'

export default combineReducers<IStoreState, ActionType>({
  textInfo,
  typingInfo,
})
