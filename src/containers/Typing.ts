import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { changeCharsTyped, changeErrorPercent, newText } from '../actions'
import Typing from '../components/Typing'
import { IStoreState } from '../models'

const matchStateToProps = (state: IStoreState) => {
  return {
    text: state.text,
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
    },
  }
}

export default connect(
  matchStateToProps,
  mapDispatchToProps,
)(Typing)
