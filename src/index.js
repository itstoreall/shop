import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Throw the props down
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import 'modern-normalize/modern-normalize.css';
import './styles/base.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

/**
 * Pure Redux (Conception)
 * 
import { createStore } from 'redux';
 
// Initial state = 0
const reducer = (state = 0, action) => {

  // State changes cases
  switch (action.type) {
    case 'state/increment':
      return state + action.payload;
    case 'state/decrement':
      return state - action.payload;

    default:
      return state;
  }
};

const store = createStore(reducer);

// All store functions
console.log('store:', store);

// The state after use increment
console.log('state before:', store.getState());

// Use increment
store.dispatch({
  type: 'state/increment',
  payload: 15,
});

// The state after use increment
console.log('increment 15:', store.getState()); // 15

// Use decrement
store.dispatch({
  type: 'state/decrement',
  payload: 7,
});

// The state after use decrement
console.log('decrement 7:', store.getState()); // 8
 * 
 */
