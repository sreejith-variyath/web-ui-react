import {combineReducers} from 'redux';
import collection from './collectionReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	form: formReducer,
	collectionList:collection
});

export default rootReducer;