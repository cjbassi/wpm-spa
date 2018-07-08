import { connect } from 'react-redux'
import SourceTextInfo from '../components/SourceTextInfo'
import { IStoreState } from '../models'

const matchStateToProps = (state: IStoreState) => {
  return {
    author: state.author,
    context: state.context,
  }
}

export default connect(
  matchStateToProps,
)(SourceTextInfo)
