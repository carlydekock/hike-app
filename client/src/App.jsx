import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Update from './routes/Update';
import Detail from './routes/Detail';
import Profile from './routes/Profile';
import List from './routes/List'
import { HikesContextProvider } from './context/HikesContext';
import ProtectedRoute from './auth/protected-route';
import Landing from './routes/Landing';
import {useAuth0, withAuth0} from '@auth0/auth0-react';

const App = (props) => {

  const user = useAuth0();
  console.log('this is user inside app', user);

  let [currentUser, setCurrentUser] = useState({});
  currentUser = user.user; //user info within the Auth0 user object

  useEffect(() => {
    console.log('inside useEffect - update to user');
    setCurrentUser(currentUser);
  }, [currentUser])
  
  return (
    <HikesContextProvider>
      <div className="container">
        <Router>
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/">
              {!props.auth0.isAuthenticated ? <Landing /> : <Home />}
            </Route>
            <Route exact path="/list" component={List} />
            <Route exact path="/hikes/:id/update" component={Update} />
            <Route exact path="/hikes/:id" component={Detail} />
            <ProtectedRoute exact path="/profile" component={Profile} />
          </Switch>
        </Router>
      </div>
    </HikesContextProvider>
  )
};

export default withAuth0(App);