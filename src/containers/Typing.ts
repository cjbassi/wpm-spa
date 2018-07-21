import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {
  changeCharsTyped,
  changeErrorPercent,
  newText,
} from '../actions/actions'
import Typing from '../components/Typing'
import { IStoreState } from '../store'

const matchStateToProps = (state: IStoreState) => {
  return {
    text: state.textInfo.text,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeCharsTyped: (chars: number) => {
      dispatch(changeCharsTyped(chars))
    },
    changeErrorPercent: (percent: number) => {
      dispatch(changeErrorPercent(percent))
    },
    newText: () => {
      dispatch(newText())
      dispatch(changeCharsTyped(0))
      dispatch(changeErrorPercent(0))
    },
  }
}

export default connect(
  matchStateToProps,
  mapDispatchToProps,
)(Typing)
