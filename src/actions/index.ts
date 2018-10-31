import { ActionType } from 'typesafe-actions'

import * as actions from './actions'

type Action = ActionType<typeof actions>
export default Action
