import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import LoginComponent from './login/login';
import DashboardComponent from './dashboard/dashboard';
import SignupComponent from './signup/signup';

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

const routing = (
  <Router>
    <div id='routing-container'>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
      <Route path='/' exact component={App}></Route>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
