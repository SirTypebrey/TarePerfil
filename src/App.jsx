import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { MenuItems } from './data/MenuItems';
import BootstrapHeader from './components/BootstrapHeader';

export function App() {
  return (
    <Router>
      <BootstrapHeader />
      {MenuItems.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
            exact
            component={item.component}
          />
        );
      })}
    </Router>
  );
}
