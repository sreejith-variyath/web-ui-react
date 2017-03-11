import React from 'react';
import Table from 'react-bootstrap/lib/Table';
import {ProgressBar} from 'react-bootstrap';
import {Button,Glyphicon,ButtonGroup} from 'react-bootstrap';
import NewCollectionModel from './NewCollectionModel';

var collectionList = React.createClass({
	componentWillMount() {
  		this.props.fetchProspects();
  	},
	delete : (id)=>{
			this.props.deleteCollection(id);
	},
	renderCollections : function(collections){
       return (collections).map((collection)=>{
       	let documents_processed = collection.jobstatus.documents_processed;
		let documents_in_queue = collection.jobstatus.documents_in_queue;
		let percentage_progress= (documents_processed/documents_in_queue)*100;
       	return <tr key={collection.id}><td>{collection.description}</td>
       			   <td>{collection.jobstatus.status}</td>
       			   <td>{collection.jobstatus.status !== 'not yet run' && collection.jobstatus.status !== 'starting up' && 
					    collection.jobstatus.status !== 'restarting' && collection.jobstatus.status !== 'running no connector' && 
					 <ProgressBar active now={percentage_progress} label={percentage_progress+'%'} />} 
					</td>
       			    <td>
					 <ButtonGroup>
					    <Button><Glyphicon glyph="info-sign" /></Button> 
					    <Button onClick={()=>{this.delete(collection.id)}}><Glyphicon glyph="Trash" /></Button> 
					 </ButtonGroup> 
					</td>
       			</tr>
       });
    },
    render: function(){
     return (<div> <NewCollectionModel />
			<Table responsive className="proList">
			    <thead>
			      <tr>
			      	 <th>Name</th>
			      	 <th>Status</th>
			      	 <th>Progress</th>
			      	 <th>Action</th>
			      </tr>
			    </thead>
			    <tbody>
			      {this.renderCollections(this.props.collectionList.collections)}
				</tbody>
			</Table></div>);
	}
});

export default collectionList;