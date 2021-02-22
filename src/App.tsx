import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import IndexView from './views/index'
import AboutView from './views/about'

function App() {
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route exact path="/">
          <IndexView />
        </Route>
        <Route path="/about">
          <AboutView />
        </Route>
      </Switch>
      <AppFooter />
    </Router>
  );
}

export default App;
