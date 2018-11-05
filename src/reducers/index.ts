import { combineReducers } from 'redux'

import ActionType from '../actions'
import { IStoreState } from '../store'
import textData from './text'
import typingData from './typing'

export default combineReducers<IStoreState, ActionType>({
  textData,
  typingData,
})
