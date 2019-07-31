import React from 'react';
import ReactDOM from 'react-dom';
// pages
import App from './pages';
// firebase
import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
