import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from '../config/configureStore'
import App from './App'

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <App />
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}
