import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Booking from './components/Booking/Booking';
import SignUp from './components/Login/SignUp';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/signUp'>
          <Header></Header>
          <SignUp></SignUp>
        </Route>
        <Route path='/login'>
          <Header></Header>
          <Login></Login>
        </Route>
        <Route path='/booking/:placeName'>
          <Booking></Booking>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='*'>
          <Header></Header>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
