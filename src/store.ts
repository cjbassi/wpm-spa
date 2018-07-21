import { createStore } from 'redux'
import rootReducer from './reducers'

export interface ITextInfo {
  mode: string
  text: string
  author: string | null
  context: string | null
}

export interface ITypingInfo {
  charsTyped: number
  errorPercent: number
}

export interface IStoreState {
  textInfo: ITextInfo
  typingInfo: ITypingInfo
}

export default createStore<IStoreState, any, any, any>(rootReducer)
