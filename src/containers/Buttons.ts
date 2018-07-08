import { connect } from 'react-redux'
import Buttons from '../components/Buttons'
import { newText } from '../actions'
import { Dispatch } from 'redux'

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    newText: (mode?: string, words?: string[]) => {
      dispatch(newText(mode, words))
    },
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Buttons)
