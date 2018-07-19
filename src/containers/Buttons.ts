import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { newText } from '../actions/actions'
import Buttons from '../components/Buttons'

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
