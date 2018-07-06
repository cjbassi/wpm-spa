import { ActionType } from 'typesafe-actions'
import * as _ from 'lodash'
import { randomItem, PRINTABLE_CHARACTERS } from '../utils'
import quotes from '../quotes.json'
import * as actions from '../actions'

const RANDOM_LENGTH = 50

export const initialState = {
  mode: 'quote',
  quoteObj: randomItem(quotes),
  random: '',
  code: '',
  chars: 0,
  errorPercent: 0,
}

export interface IStoreState {
  mode: string,
  quoteObj: object,
  random: string,
  code: string,
  chars: number,
  errorPercent: number,
}

export type Actions = ActionType<typeof actions>

export function rootReducer(state: IStoreState, action: Actions): IStoreState {
  switch (action.type) {
    case 'NEW_TEXT':
      const newState = {
        ...state,
        chars: 0,
        errorPercent: 0,
      }
      switch (state.mode) {
        case 'quote':
          return {
            ...newState,
            quoteObj: randomItem(quotes),
          }
        case 'random':
          const random = _.range(RANDOM_LENGTH)
            .map(() => randomItem(PRINTABLE_CHARACTERS))
            .join('')
          return {
            ...newState,
            random,
          }
        case 'code':
          return {
            ...newState,
            code: '',
          }
        default:
          return state
      }

    case 'CHANGE_CHARS_TYPED':
      return {
        ...state,
        chars: action.payload,
      }

    case 'CHANGE_MODE':
      return {
        ...state,
        mode: action.payload,
        chars: 0,
      }

    case 'CHANGE_ERROR_PERCENT':
      return {
        ...state,
        errorPercent: action.payload,
      }

    default:
      return state
  }
}
