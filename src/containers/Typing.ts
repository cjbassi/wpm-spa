import { connect } from 'react-redux'
import Typing from '../components/Typing'
import { Dispatch } from 'redux'
import { newText, changeCharsTyped, changeErrorPercent } from '../actions'
import { IStoreState } from '../models'

const matchStateToProps = (state: IStoreState) => {
  const text = (state.mode === 'quote') ? state.quoteObj[2] :
    (state.mode === 'random') ? state.random : state.code
  return {
    text,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    newText: () => {
      dispatch(newText())
    },
    changeCharsTyped: (chars: number) => {
      dispatch(changeCharsTyped(chars))
    },
    changeErrorPercent: (percent: number) => {
      dispatch(changeErrorPercent(percent))
    }
  }
}

export default connect(
  matchStateToProps,
  mapDispatchToProps,
)(Typing)
