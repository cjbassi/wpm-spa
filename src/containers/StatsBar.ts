import { connect } from 'react-redux'
import StatsBar from '../components/StatsBar'
import { IStoreState } from '../reducers'

const matchStateToProps = (state: IStoreState) => {
  return {
    chars: state.chars,
    errorPercent: state.errorPercent,
  }
}

export default connect(
  matchStateToProps,
)(StatsBar)
