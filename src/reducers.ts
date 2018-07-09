import * as _ from 'lodash'
import { ActionType } from 'typesafe-actions';
import { PRINTABLE_CHARACTERS, RANDOM_LENGTH, Mode, ActionName } from './constants'
import quotes from './quotes.json'
import * as actions from './actions'
import { IStoreState } from './models'

export type Action = ActionType<typeof actions>

export function rootReducer(state: IStoreState, action: Action): IStoreState {
  switch (action.type) {
    case ActionName.newText:
      let text
      let author = null, context = null
      const mode = (action.payload.mode === null) ? state.mode : action.payload.mode
      switch (mode) {
        case Mode.quote:
          [author, context, text] = _.sample(quotes)
          break
        case Mode.random:
          text = _.range(RANDOM_LENGTH)
            .map(() => _.sample(PRINTABLE_CHARACTERS))
            .join('')
          break
        case Mode.code:
          text = ''
          break
        case Mode.repeatedWords:
          text = _.range(RANDOM_LENGTH)
            .map(() => _.sample(action.payload.words))
            .join(' ')
          break
        default:
          return state
      }
      return {
        ...state,
        chars: 0,
        errorPercent: 0,
        text,
        author,
        context,
        mode,
      }

    case ActionName.changeCharsTypes:
      return {
        ...state,
        chars: action.payload.chars,
      }

    case ActionName.changeErrorPercent:
      return {
        ...state,
        errorPercent: action.payload.errorPercent,
      }

    default:
      return state
  }
}
