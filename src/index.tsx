import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './assets/css/fonts.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { decode, getToken } from './utils/token';
import { setUser } from './pages/LoginPage/loginSlice';

const token = getToken();

if (token) {
  const decodeUser = decode(token);
  store.dispatch(setUser({ user: decodeUser }));
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
