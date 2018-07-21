import { connect } from 'react-redux'
import SourceTextInfo from '../components/SourceTextInfo'
import { IStoreState } from '../store'

const matchStateToProps = (state: IStoreState) => {
  return {
    author: state.textInfo.author,
    context: state.textInfo.context,
  }
}

export default connect(matchStateToProps)(SourceTextInfo)
