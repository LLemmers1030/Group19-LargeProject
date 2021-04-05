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
        <Route render={(props)=>(
                <UserDashboard {...props}>
                    <Switch>
                        {/*<Route path="/" exact component={Home}/> */}
                        <Route path="/dashboard" exact component={Main}/>
                        <Route path="/dashboard/maintenance" component={Maintenance}/>
                        <Route path="/dashboard/settings" component={Settings}/>
                        <Route path="/dashboard/contact" component={Contact}/>
                    </Switch>
                </UserDashboard>
            )}/>
      </Switch>
    </Router>
  );
}

export default App;
