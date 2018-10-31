import * as _ from 'lodash'

import ActionType from '../actions'
import {
  ActionName,
  Mode,
  NUMBERS,
  PRINTABLE_CHARACTERS,
  RANDOM_LENGTH,
  SYMBOLS,
} from '../constants'
import quotes from '../static/quotes.json'
import { ITextInfo } from '../store'

export const newQuote = (): ITextInfo => {
  const { author, context, text } = _.sample(quotes)
  return {
    author,
    context,
    mode: Mode.quote,
    text,
  }
}

export const newCode = (): ITextInfo => {
  return {
    author: null,
    context: null,
    mode: Mode.code,
    text: '',
  }
}

export const newRandom = (): ITextInfo => {
  const text = _.range(RANDOM_LENGTH)
    .map(() => _.sample(PRINTABLE_CHARACTERS))
    .join('')
  return {
    author: null,
    context: null,
    mode: Mode.random,
    text,
  }
}

export const newSymbols = (): ITextInfo => {
  const text = _.range(RANDOM_LENGTH)
    .map(() => _.sample(SYMBOLS))
    .join('')
  return {
    author: null,
    context: null,
    mode: Mode.symbols,
    text,
  }
}

export const newNumbers = (): ITextInfo => {
  const text = _.range(RANDOM_LENGTH)
    .map(() => _.sample(NUMBERS))
    .join('')
  return {
    author: null,
    context: null,
    mode: Mode.numbers,
    text,
  }
}

export const newRepeated = (words: string[] | undefined): ITextInfo => {
  const text = _.range(RANDOM_LENGTH)
    .map(() => _.sample(words))
    .join(' ')
  return {
    author: null,
    context: null,
    mode: Mode.repeatedWords,
    text,
  }
}

export default (
  state: ITextInfo = newQuote(),
  action: ActionType,
): ITextInfo => {
  switch (action.type) {
    case ActionName.newText:
      const mode =
        action.payload.mode === undefined ? state.mode : action.payload.mode
      switch (mode) {
        case Mode.quote:
          return newQuote()
        case Mode.code:
          return newCode()
        case Mode.random:
          return newRandom()
        case Mode.symbols:
          return newSymbols()
        case Mode.numbers:
          return newNumbers()
        case Mode.repeatedWords:
          return newRepeated(action.payload.words)
        default:
          return state
      }
    default:
      return state
  }
}
