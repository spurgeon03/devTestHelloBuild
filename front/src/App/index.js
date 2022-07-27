import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Favorites } from '../Favorites';
import { Profile } from '../Profile';
import { Home } from '../Home';
import { SignUp } from '../SignUp';
import { SignIn } from '../SignIn';
import { ProtectedRoute } from './ProtectedRoute';
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/">
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      </Route>
      <Route path="/favorites">
        <ProtectedRoute>
          <Favorites />
        </ProtectedRoute>
      </Route>
      <Route path="/profile">
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      </Route>
    </Switch>
  </Router>
);

export { App };
