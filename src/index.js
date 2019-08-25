import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAGaaZ3HKAq2Y7tg5Z4BTzCuBsBrbqpyW0",
  authDomain: "evernote-clone-9ecd5.firebaseapp.com",
  databaseURL: "https://evernote-clone-9ecd5.firebaseio.com",
  projectId: "evernote-clone-9ecd5",
  storageBucket: "evernote-clone-9ecd5.appspot.com",
  messagingSenderId: "464490415897",
  appId: "1:464490415897:web:21ab84f8849435dd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
