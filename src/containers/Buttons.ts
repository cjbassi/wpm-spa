import { connect } from 'react-redux'
import Buttons from '../components/Buttons'
import { newText, changeMode } from '../actions'
import { Dispatch } from 'redux'

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    newText: () => {
      dispatch(newText())
    },
    changeMode: (mode: string) => {
      dispatch(changeMode(mode))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Buttons)
