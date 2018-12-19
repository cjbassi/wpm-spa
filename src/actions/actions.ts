import { action } from 'typesafe-actions'

import { ActionName } from './index'

export const newText = (mode?: string, words?: string[]) =>
  action(ActionName.newText, { mode, words })

export const changeCharsTyped = (charsTyped: number) =>
  action(ActionName.changeCharsTypes, { charsTyped })

export const changeErrorPercent = (errorPercent: number) =>
  action(ActionName.changeErrorPercent, { errorPercent })
