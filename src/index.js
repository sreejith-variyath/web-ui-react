/*----
		ENTRY Point to the APP. Its configured in config/paths.js 
		and webpack.config 
*/
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';



import { Router,browserHistory } from 'react-router';
import configureStore from './store/store';
import routes from './routes';

const store= configureStore();
var icontentCollector=(
  <Provider store={store}>
   <Router history={browserHistory} routes={routes}>
   </Router>
  </Provider>
 );

render(
 icontentCollector,
  document.getElementById('root')
);
