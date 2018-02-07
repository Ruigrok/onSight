import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import Auth from './Auth/Auth';
import history from './history';
import App from './App';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Community from './Community/Community'
import Callback from './Callback/Callback';



const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={App}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route exact path="/" render={(props) => <Redirect to="/home"/>} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
           <Route path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Profile auth={auth} {...props} />
            )
          )} />
           <Route path="/community" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Community auth={auth} {...props} />
            )
          )} /> 
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>        
        </div>
      </Router>
  );
}