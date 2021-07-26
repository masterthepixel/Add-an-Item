import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddItemPage from '../pages/Main';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <AddItemPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
