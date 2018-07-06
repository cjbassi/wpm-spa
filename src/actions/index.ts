import { action } from 'typesafe-actions'

export const changeMode = (mode: string) => action('CHANGE_MODE', mode)

export const changeCharsTyped = (chars: number) => action('CHANGE_CHARS_TYPED', chars)

export const newText = () => action('NEW_TEXT')

export const changeErrorPercent = (errorPercent: number) => action('CHANGE_ERROR_PERCENT', errorPercent)
