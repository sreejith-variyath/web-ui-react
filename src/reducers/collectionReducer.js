import collectionData from '../data/collections';
import {FETCH_COLLECTION,FETCH_COLLECTION_SUCCESS,CREATE_REPO_CONNECTION} from '../actions/collections'

const INITIAL_STATE = { collections:[], error:null, loading: false};


function collection(state = INITIAL_STATE,action){
	console.log("reducer",state);
	switch(action.type){
		case  FETCH_COLLECTION:

		 	console.log("Fetching the collections");
		  	return { ...state, collections:[], error: null, loading: true }; 
		case FETCH_COLLECTION_SUCCESS: 
		console.log("Fetching sucess the collections", action);
			return { ...state, collections:action.payload, error: null, loading: false }; 
		case CREATE_REPO_CONNECTION: 
		console.log("Fetching sucess the collections", action);
			return { ...state, collections:action.payload, error: null, loading: false }; 	
		default	:
		    return state;
	}
}
export default collection;