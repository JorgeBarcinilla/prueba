import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import axios from "axios";
import reducers from './reducers';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import Index from './views/index';
import SignIn from './views/signIn';
import SignUp from './views/signUp';
import Home from './views/home';

import authGuard from "./components/HOCs/authGuard";
const jwtToken = localStorage.getItem('JWT_TOKEN');
axios.defaults.headers.common['Authorization'] = jwtToken;

function App() {
  return (
    <Provider store={createStore(reducers, {
      auth:{
        token: jwtToken,
        isAuthenticated : jwtToken ? true : false
      }
    }, applyMiddleware(reduxThunk))}>
      <Router>
        <Route path="/" exact component={Index}/>
        <Route path="/signIn" exact component={SignIn}/>
        <Route path="/signUp" exact component={SignUp}/>
        <Route path="/home" exact component={authGuard(Home)}/>
      </Router>
    </Provider>
  );
}

export default App;
