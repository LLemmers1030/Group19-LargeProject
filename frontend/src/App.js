import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SignInPage from './pages/signin';
import HouseListings from './pages/listings';

// Potential zoom fix issue
// var scale = 'scale(1)';
// document.body.style.webkitTransform = scale;    // Chrome, Opera, Safari
// document.body.style.msTransform = scale;       // IE 9
// document.body.style.transform = scale;     // General

function App() {
  return (
    <Router>
      <Switch>
        {/* Router and Route takes us to a different page */}
        <Route path="/" component={Home} exact />
        {/* Takes the route towards the sign in page */}
        <Route path="/signin" component={SignInPage} exact />
        <Route path="/listings" component={HouseListings} exact />
      </Switch>
    </Router>
  );
}

export default App;
