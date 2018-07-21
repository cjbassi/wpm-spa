import { connect } from 'react-redux'
import App from '../components/App'
import { IStoreState } from '../store'

const mapStateToProps = (state: IStoreState) => {
  return {
    author: state.textInfo.author,
  }
}

export default connect(mapStateToProps)(App)
