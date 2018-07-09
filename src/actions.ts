import { action } from 'typesafe-actions'
import { ActionName } from './constants'

export const changeCharsTyped = (chars: number) => action(ActionName.changeCharsTypes, { chars })

export const newText = (mode?: string, words?: string[]) => action(ActionName.newText, { mode, words })

export const changeErrorPercent = (errorPercent: number) => action(ActionName.changeErrorPercent, { errorPercent })
