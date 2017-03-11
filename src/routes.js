import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './pages/App';
import home from './pages/home';
import Collections from './pages/Collections';

export default (
	<Route path="/" component={App}>
      <IndexRoute component={home} />
      <Route path="/collections" component={Collections} />
    </Route>
	);