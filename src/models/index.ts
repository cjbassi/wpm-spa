import { randomItem } from "../utils"
import quotes from '../quotes.json'

export interface IStoreState {
  mode: string,
  quoteObj: object,
  random: string,
  code: string,
  chars: number,
  errorPercent: number,
}

export const initialState = {
  mode: 'quote',
  quoteObj: randomItem(quotes),
  random: '',
  code: '',
  chars: 0,
  errorPercent: 0,
}
