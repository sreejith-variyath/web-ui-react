import { connect } from 'react-redux';
import  collectionList  from '../components/CollectionList';
import {fetchCollections,fetchCollectionsSuccess} from '../actions/collections';


const mapStateToProps = (state) => {
	console.log("mapStateToProps");
  return { 
  	   collectionList: state.collectionList
  };
}
const mapActionToState = (dispatch) =>{
	return {
		deleteCollection: (id) => {
			console.log("deleted collection ",id);
		},
		fetchProspects:() => {
		    dispatch(fetchCollections()).then((response) => { console.log("before fetch sucess",response);
		    	console.log("seding to fetch sucess",response.payload.data.job);
		        dispatch(fetchCollectionsSuccess(response.payload.data.job));
            });
		}
	}
}

export default connect(mapStateToProps, mapActionToState)(collectionList);