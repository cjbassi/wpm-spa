import * as _ from 'lodash'

import { Action, ActionName } from '../actions'
import {
  Mode,
  NUMBERS,
  PRINTABLE_CHARACTERS,
  RANDOM_LENGTH,
  SYMBOLS,
} from '../constants'
import quotes from '../static/quotes.json'
import { ITextData } from '../store'

export const newQuote = (): ITextData => {
  const { author, context, text } = _.sample(quotes)!
  console.log(text)
  return {
    author,
    context,
    mode: Mode.quote,
    text,
  }
}

export const newCode = (): ITextData => {
  return {
    author: undefined,
    context: undefined,
    mode: Mode.code,
    text: '', // TODO
  }
}

export const newRandom = (): ITextData => {
  const text = _.range(RANDOM_LENGTH)
    .map(() => _.sample(PRINTABLE_CHARACTERS))
    .join('')
  return {
    author: undefined,
    context: undefined,
    mode: Mode.random,
    text,
  }
}

export const newSymbols = (): ITextData => {
  const text = _.range(RANDOM_LENGTH)
    .map(() => _.sample(SYMBOLS))
    .join('')
  return {
    author: undefined,
    context: undefined,
    mode: Mode.symbols,
    text,
  }
}

export const newNumbers = (): ITextData => {
  const text = _.range(RANDOM_LENGTH)
    .map(() => _.sample(NUMBERS))
    .join('')
  return {
    author: undefined,
    context: undefined,
    mode: Mode.numbers,
    text,
  }
}

export const newRepeated = (words?: string[]): ITextData => {
  const text = _.range(RANDOM_LENGTH)
    .map(() => _.sample(words))
    .join(' ')
  return {
    author: undefined,
    context: undefined,
    mode: Mode.repeatedWords,
    text,
  }
}

export default (state: ITextData = newQuote(), action: Action): ITextData => {
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
