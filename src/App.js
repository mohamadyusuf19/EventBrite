import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import Routes from './config/Routes'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(thunk))

class App extends Component {
  constructor() {
    super()
    console.ignoredYellowBox = [
      'Warning', `Warning: Can't call setState`
    ];
  }

  render() {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>      
    )
  }
}

export default App