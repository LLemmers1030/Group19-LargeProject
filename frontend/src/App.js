import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SignInPage from './pages/signin';
import HouseListings from './pages/listings';
import UserDashboard from './pages/dashboard';
import Main from './components/MainD';
import Maintenance from './components/Maintenance';
import Settings from './components/Settings';
import Contact from './components/Contact';
import ForgotPasswordScreen from './pages/ForgotPasswordScreen';
import ResetPasswordScreen from './pages/ResetPasswordScreen';
import VerificationScreen from './pages/verificationPage';
// import url from ('url')

// Potential zoom fix issue
// var scale = 'scale(1)';
// document.body.style.webkitTransform = scale;    // Chrome, Opera, Safari
// document.body.style.msTransform = scale;       // IE 9
// document.body.style.transform = scale;     // General

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
  });
  return vars;
}

function App() {
  return (
    <Router>
      <Switch>
        {/* Router and Route takes us to a different page */}
        <Route path="/" component={Home} exact />
        {/* Takes the route towards the sign in page */}
        <Route path="/signin" component={SignInPage} exact />
        <Route path="/listings" component={HouseListings} exact />
        <Route path="/resetpassword" component={ResetPasswordScreen} exact />
        <Route path="/forgotpassword" component={ForgotPasswordScreen} exact />
        <Route path="/verify/:token" component={VerificationScreen} exact />
        <Route path="/Passwords/reset/:token/:email" component={ResetPasswordScreen} exact />
        <Route render={(props) => (
          <UserDashboard {...props}>
            <Switch>
              {/*<Route path="/" exact component={Home}/> */}
              <Route path="/dashboard" exact component={Main} />
              <Route path="/dashboard/maintenance" component={Maintenance} />
              <Route path="/dashboard/settings" component={Settings} />
              <Route path="/dashboard/contact" component={Contact} />
            </Switch>
          </UserDashboard>
        )} />
      </Switch>
    </Router>
  );
}

export default App;
