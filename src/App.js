import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login/login'
import SignUp from './login/signup'
import Main from './components/MainComponent'
import {
  BrowserRouter as Router,Switch,Route, Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
     <div className="App">
      <Switch>
      <Route path='/login' exact component={Login}/>
      <Route path='/signup' exact component={SignUp}/>
      <Route path='/'  component={Main}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
