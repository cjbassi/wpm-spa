import { connect } from 'react-redux'
import App from '../components/App'
import { IStoreState } from '../models'

const mapStateToProps = (state: IStoreState) => {
  return {
    author: state.author,
  }
}

export default connect(
  mapStateToProps,
)(App)
