import * as _ from 'lodash'
import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
import { ActionName, Mode, PRINTABLE_CHARACTERS, RANDOM_LENGTH } from './constants'
import { IStoreState } from './models'
import quotes from './quotes.json'

export type Action = ActionType<typeof actions>

export function rootReducer(state: IStoreState, action: Action): IStoreState {
  switch (action.type) {
    case ActionName.newText:
      let text
      let author = null
      let context = null
      const mode = (action.payload.mode === undefined) ? state.mode : action.payload.mode
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
        author,
        chars: 0,
        context,
        errorPercent: 0,
        mode,
        text,
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
