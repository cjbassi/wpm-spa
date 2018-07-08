import { connect } from 'react-redux'
import SourceTextInfo from '../components/SourceTextInfo'
import { IStoreState } from '../models'

const matchStateToProps = (state: IStoreState) => {
  return {
    author: state.quoteObj[0],
    context: state.quoteObj[1],
  }
}

export default connect(
  matchStateToProps,
)(SourceTextInfo)
