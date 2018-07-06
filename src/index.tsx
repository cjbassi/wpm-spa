import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer, initialState } from './reducers'
import { IStoreState } from './reducers'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore<IStoreState, any, any, any>(rootReducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
