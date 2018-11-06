declare module 'react-keydown'

interface IQuote {
  author: string
  context: string
  text: string
}

interface IQuotes {
  [key: number]: IQuote
}

declare module 'quotes.json' {
  export default IQuotes
}
