import { createStore,applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';

import promise from 'redux-promise';
/*
  We use Axios for API calls, Axios returns a Promise in return. But Actions need to be pure JSON object 
  with all the data before it reaches Reducers. So, we use redux-promise to intercept anytime 
  the “Action” contains a Promise object and resolve it before the control hits the Reducers
*/ 

const enhancer = applyMiddleware(promise);

export default function configureStore(initialState){
	console.log('creating store',initialState);
	const store=createStore(rootReducer,initialState,enhancer);
	return store;
}

