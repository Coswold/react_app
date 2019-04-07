import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle'
import { update } from './actions'
import { loadState, saveState } from './utils'

import reducers from './reducers';

import NewTimer from './components/new-timer'

import ListTimers from './components/list-timers'

const persistedState = loadState()
const store = createStore(reducers, persistedState)
store.subscribe(throttle(() => {
    saveState(store.getState())
}, 1000));

let lastUpdateTime = Date.now()
setInterval(() => {
    const now = Date.now()
    const deltaTime = now - lastUpdateTime
    lastUpdateTime = now
    store.dispatch(update(deltaTime))
}, 50)

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">A Cool Timer</h1>
            </header>
            <NewTimer />
            <ListTimers />
            <p className="App-intro">
              Timer
            </p>
          </div>
        </Provider>
    );
  }
}

export default App;
