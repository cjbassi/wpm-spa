import * as _ from 'lodash'
import quotes from './quotes.json'

export interface IStoreState {
  mode: string,
  text: string,
  author: string | null,
  context: string | null,
  chars: number,
  errorPercent: number,
}

const [author, context, text] = _.sample(quotes)

export const initialState = {
  mode: 'quote',
  text,
  author,
  context,
  chars: 0,
  errorPercent: 0,
}
