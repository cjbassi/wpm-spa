import { connect } from 'react-redux'
import App from '../components/App'
import { IStoreState } from '../reducers'

const mapStateToProps = (state: IStoreState) => {
  return {
    mode: state.mode,
  }
}

export default connect(
  mapStateToProps,
  null,
)(App)
