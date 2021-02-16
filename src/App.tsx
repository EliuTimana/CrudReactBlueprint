import React from 'react';
import './App.scss';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Login } from './components/auth/Login';
import { Position, Toaster } from '@blueprintjs/core';
import { SecurityService } from './services/SecurityService';
import { Home } from './components/Home';

export const AppToaster = Toaster.create({
  position: Position.TOP,
  autoFocus: true
});

function App() {
  const isLoggedIn = SecurityService.loggedIn();
  return (
      <BrowserRouter>
        {!isLoggedIn && <Redirect to="/login"/>}
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
