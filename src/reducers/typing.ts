import { combineReducers } from 'redux'
import ActionType from '../actions'
import { ActionName } from '../constants'
import { ITypingInfo } from '../store'

export const changeCharsTyped = (
  state: number = 0,
  action: ActionType,
): number => {
  switch (action.type) {
    case ActionName.changeCharsTypes:
      return action.payload.charsTyped
    default:
      return state
  }
}

export const changeErrorPercent = (
  state: number = 0,
  action: ActionType,
): number => {
  switch (action.type) {
    case ActionName.changeErrorPercent:
      return action.payload.errorPercent
    default:
      return state
  }
}

export default combineReducers<ITypingInfo, ActionType>({
  charsTyped: changeCharsTyped,
  errorPercent: changeErrorPercent,
})
