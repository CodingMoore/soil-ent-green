import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
// import { createFirestoreInstance } from "redux-firestore"; - Probably unnecessary since I am using Firebase real-time database instead of firestore
import firebase from "./firebase";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer);

const rrfProps = {
  firebase,
  config: {
        userProfile: "users"
  },
  dispatch: store.dispatch,
  //createFirestoreInstance  - Probably unnecessary since I am using Firebase real-time database
}

ReactDOM.render(
  <Provider store = { store }>
    <ReactReduxFirebaseProvider { ...rrfProps }>
    <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
