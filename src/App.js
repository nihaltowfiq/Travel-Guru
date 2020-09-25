import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Booking from './components/Booking/Booking';
import SignUp from './components/UsersRole/SignUp';
import Login from './components/UsersRole/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import HotelDetails from './components/HotelDetails/HotelDetails';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <main>
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <p>{loggedInUser.email} {loggedInUser.name}</p>
          <Router>
            <Switch>
              <Route path='/home'>
                <Home></Home>
              </Route>
              <Route path='/booking/:placeName'>
                <Booking></Booking>
              </Route>
              <Route path='/signUp'>
                <Header></Header>
                <SignUp></SignUp>
              </Route>
              <PrivateRoute path='/HotelDetails/:placeName'>
                <Header></Header>
                <HotelDetails></HotelDetails>
              </PrivateRoute>
              <Route path='/login'>
                <Header></Header>
                <Login></Login>
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
        </UserContext.Provider>
      </main>
    </div>
  );
}

export default App;
