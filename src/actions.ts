import { action } from 'typesafe-actions'

export const changeCharsTyped = (chars: number) => action('CHANGE_CHARS_TYPED', { chars })

export const newText = (mode?: string, words?: string[]) => action('NEW_TEXT', { mode, words })

export const changeErrorPercent = (errorPercent: number) => action('CHANGE_ERROR_PERCENT', { errorPercent })
