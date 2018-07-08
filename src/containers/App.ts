import { connect } from 'react-redux'
import App from '../components/App'
import { IStoreState } from '../models'

const mapStateToProps = (state: IStoreState) => {
  return {
    mode: state.mode,
  }
}

export default connect(
  mapStateToProps,
  null,
)(App)
