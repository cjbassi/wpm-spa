import * as _ from 'lodash'
import { ActionType } from 'typesafe-actions';
import { PRINTABLE_CHARACTERS, RANDOM_LENGTH } from './constants'
import quotes from './quotes.json'
import * as actions from './actions'
import { IStoreState } from './models'

export type Action = ActionType<typeof actions>

export function rootReducer(state: IStoreState, action: Action): IStoreState {
  switch (action.type) {
    case 'NEW_TEXT':
      let text
      let author = null, context = null
      const mode = (action.payload.mode === null) ? state.mode : action.payload.mode
      switch (mode) {
        case 'quote':
          [author, context, text] = _.sample(quotes)
          break
        case 'random':
          text = _.range(RANDOM_LENGTH)
            .map(() => _.sample(PRINTABLE_CHARACTERS))
            .join('')
          break
        case 'code':
          text = ''
          break
        case 'repeated-words':
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

    case 'CHANGE_CHARS_TYPED':
      return {
        ...state,
        chars: action.payload.chars,
      }

    case 'CHANGE_ERROR_PERCENT':
      return {
        ...state,
        errorPercent: action.payload.errorPercent,
      }

    default:
      return state
  }
}
