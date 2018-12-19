import { Action, ActionName } from '../actions'
import { ITypingData } from '../store'

const initialState = {
  charsTyped: 0,
  errorPercent: 0,
}

export default (
  state: ITypingData = initialState,
  action: Action,
): ITypingData => {
  switch (action.type) {
    case ActionName.changeCharsTypes:
    case ActionName.changeErrorPercent:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
