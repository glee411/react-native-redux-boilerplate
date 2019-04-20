import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import { addNavigationHelpers } from 'react-navigation'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './redux/store'

import AppNavigatorComponent from './navigations/AppNavigator.js'
import App from './App'

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeCreated: false,
      store: null,
    };
  }

  componentDidMount() {
    configureStore()
    .then(({ store, persistor }) =>
      this.setState({ store, persistor, storeCreated: true }));
  }

  render() {
    if (!this.state.storeCreated) return null;
    return (
      <Provider store={ this.state.store }>
        <PersistGate loading={null} persistor={ this.state.persistor }>
          <AppNavigatorComponent />
        </PersistGate>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('stretchapp', () => MainApp);
