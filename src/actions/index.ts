import { ActionType } from 'typesafe-actions'

import * as actions from './actions'

export type Action = ActionType<typeof actions>

export * from './actions'

export enum ActionName {
  newText = 'NEW_TEXT',
  changeCharsTypes = 'CHANGE_CHARS_TYPED',
  changeErrorPercent = 'CHANGE_ERROR_PERCENT',
}
