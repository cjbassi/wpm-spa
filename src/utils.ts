export const randomItem = <T extends {}>(indexable: T[]): T => {
  return indexable[Math.floor(Math.random() *  indexable.length)]
}

export const PRINTABLE_CHARACTERS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,./<>?;:\'"[]\\{}|`~!@#$%^&*()-_=+ '.split('')
