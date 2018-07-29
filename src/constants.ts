export const PRINTABLE_CHARACTERS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,./<>?;:\'"[]\\{}|`~!@#$%^&*()-_=+ '.split(
  '',
)

export const SYMBOLS = ',./<>?;:\'"[]\\{}|`~!@#$%^&*()-_=+'.split('')

export const NUMBERS = '0123456789'.split('')

export const RANDOM_LENGTH = 50

export enum Mode {
  quote = 'quote',
  code = 'code',
  random = 'random',
  symbols = 'symbols',
  numbers = 'numbers',
  repeatedWords = 'repeated-words',
}

export enum ActionName {
  newText = 'NEW_TEXT',
  changeCharsTypes = 'CHANGE_CHARS_TYPED',
  changeErrorPercent = 'CHANGE_ERROR_PERCENT',
}
