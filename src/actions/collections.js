
import axios from 'axios';

/* ==== ACTION TYPES===*/

export const FETCH_COLLECTION = 'FETCH_COLLECTION';
export const CREATE_COLLECTION = 'CREATE_COLLECTION';
export const DELETE_COLLECTION = 'DELETE_COLLECTION';
export const UPDATE_COLLECTION = 'UPDATE_COLLECTION';
export const FETCH_COLLECTION_SUCCESS = 'FETCH_COLLECTION_SUCCESS';
export const FETCH_SPECIFIC_COLLECTION = 'FETCH_SPECIFIC_COLLECTION';
export const CREATE_COLLECTION_SUCCESS = 'CREATE_COLLECTION_SUCCESS';
export const DELETE_COLLECTION_SUCCESS = 'DELETE_COLLECTION_SUCCESS';
export const UPDATE_COLLECTION_SUCCESS = 'UPDATE_COLLECTION_SUCCESS';
export const FETCH_SPECIFIC_COLLECTION_SUCCESS = 'FETCH_SPECIFIC_COLLECTION_SUCCESS';
export const CREATE_REPO_CONNECTION = 'CREATE_REPO_CONNECTION';
export const CREATE_REPO_CONNECTION_SUCCESS = 'CREATE_REPO_CONNECTION_SUCCESS';

const ROOT_URL = "http://localhost:2222/mcfgateway";

/*== ACTION CREATORS ==*/

export function fetchCollections(){
	const request = axios({
    method: 'get',
    url: `${ROOT_URL}/prospect`    
  });

	return {
		type : FETCH_COLLECTION,
		payload : request
	}
}

export function fetchCollectionsSuccess(collections) {
  console.log("inside API to FetchCollectionsSucess",collections);
  return {
    type: FETCH_COLLECTION_SUCCESS,
    payload: collections
  };
}
export function createRepoConnection(repConnection){
  console.log("creating repoconections",repConnection);
  const request = axios({
    method: 'PUT',
    data: repConnection,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    url: `${ROOT_URL}/repositoryconnections`
  });
  return {
    type: CREATE_REPO_CONNECTION,
    payload:repConnection //  makeServerRequest("http://postsServer.com/api/id")
  }
}
export function createRepoConnectionSuccess(repConnection) {
  return {
    type: CREATE_REPO_CONNECTION_SUCCESS,
    payload: repConnection
  };
}

export function createCollection(prospect){
  const request = axios({
    method: 'POST',
    data: prospect,
    url: `http://localhost:2222/mcfgateway/prospect`
  });
  console.log("create response",request);
  return {
    type: CREATE_COLLECTION,
    payload:request //  makeServerRequest("http://postsServer.com/api/id")
  }
}
export function createCollectionSuccess(newProspect) {
  return {
    type: CREATE_COLLECTION_SUCCESS,
    payload: newProspect
  };
}
