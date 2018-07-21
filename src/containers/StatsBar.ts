import { connect } from 'react-redux'
import StatsBar from '../components/StatsBar'
import { IStoreState } from '../store'

const matchStateToProps = (state: IStoreState) => {
  return {
    chars: state.typingInfo.charsTyped,
    errorPercent: state.typingInfo.errorPercent,
  }
}

export default connect(matchStateToProps)(StatsBar)
