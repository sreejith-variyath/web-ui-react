const  collections = [{
  "id":"1486540705840",
  "description": "Job123",
  "repository_connection": "InPutConnector",
  "document_specification": {
    "startpoint": {
      "_value_": "",
      "_attribute_path": "C:\\Users\\sreejith\\InputRepo",
      "_attribute_converttouri": "false",
      "include": [
        {
          "_value_": "",
          "_attribute_match": "*",
          "_attribute_type": "file"
        },
        {
          "_value_": "",
          "_attribute_match": "*",
          "_attribute_type": "directory"
        }
      ]
    }
  },
  "pipelinestage": [
    {
      "stage_id": "0",
      "stage_isoutput": "true",
      "stage_connectionname": "CustomConnector",
      "stage_specification": {}
    },
    {
      "stage_id": "1",
      "stage_isoutput": "true",
      "stage_connectionname": "iDNAOutputConnector",
      "stage_specification": {}
    }
  ],
  "start_mode": "manual",
  "run_mode": "scan once",
  "hopcount_mode": "accurate",
  "priority": "5",
  "recrawl_interval": "86400000",
  "expiration_interval": "infinite",
  "reseed_interval": "3600000",
   "collectionStatus":{
      "queue_exact": "true",
      "documents_processed": "0",
      "documents_in_queue": "0",
      "end_time": null,
      "status": "not yet run",
      "documents_outstanding": "0",
      "start_time": null,
      "processed_exact": "true",
      "outstanding_exact": "true",
    }
},{
  "id":"1486540705841",
  "description": "Job456",
  "repository_connection": "InPutConnector",
  "document_specification": {
    "startpoint": {
      "_value_": "",
      "_attribute_path": "C:\\Users\\sreejith\\InputRepo",
      "_attribute_converttouri": "false",
      "include": [
        {
          "_value_": "",
          "_attribute_match": "*",
          "_attribute_type": "file"
        },
        {
          "_value_": "",
          "_attribute_match": "*",
          "_attribute_type": "directory"
        }
      ]
    }
  },
  "pipelinestage": [
    {
      "stage_id": "0",
      "stage_isoutput": "true",
      "stage_connectionname": "CustomConnector",
      "stage_specification": {}
    },
    {
      "stage_id": "1",
      "stage_isoutput": "true",
      "stage_connectionname": "iDNAOutputConnector",
      "stage_specification": {}
    }
  ],
  "start_mode": "manual",
  "run_mode": "scan once",
  "hopcount_mode": "accurate",
  "priority": "5",
  "recrawl_interval": "86400000",
  "expiration_interval": "infinite",
  "reseed_interval": "3600000",
   "collectionStatus":{
      "queue_exact": "true",
      "documents_processed": "0",
      "documents_in_queue": "0",
      "end_time": null,
      "status": "not yet run",
      "documents_outstanding": "0",
      "start_time": null,
      "processed_exact": "true",
      "outstanding_exact": "true",
    }
},{
  "id":"1486540705842",
  "description": "Job789",
  "repository_connection": "InPutConnector",
  "document_specification": {
    "startpoint": {
      "_value_": "",
      "_attribute_path": "C:\\Users\\sreejith\\InputRepo",
      "_attribute_converttouri": "false",
      "include": [
        {
          "_value_": "",
          "_attribute_match": "*",
          "_attribute_type": "file"
        },
        {
          "_value_": "",
          "_attribute_match": "*",
          "_attribute_type": "directory"
        }
      ]
    }
  },
  "pipelinestage": [
    {
      "stage_id": "0",
      "stage_isoutput": "true",
      "stage_connectionname": "CustomConnector",
      "stage_specification": {}
    },
    {
      "stage_id": "1",
      "stage_isoutput": "true",
      "stage_connectionname": "iDNAOutputConnector",
      "stage_specification": {}
    }
  ],
  "start_mode": "manual",
  "run_mode": "scan once",
  "hopcount_mode": "accurate",
  "priority": "5",
  "recrawl_interval": "86400000",
  "expiration_interval": "infinite",
  "reseed_interval": "3600000",
   "collectionStatus":{
      "queue_exact": "true",
      "documents_processed": "0",
      "documents_in_queue": "0",
      "end_time": null,
      "status": "not yet run",
      "documents_outstanding": "0",
      "start_time": null,
      "processed_exact": "true",
      "outstanding_exact": "true",
    }
}]
export default collections;

/*
import React from 'react';
var prospect = React.createClass({
getInitialState: function() {
    return {
      jobs: []
    }
  },
  componentWillMount: function() {
    this.serverRequest = 
      axios
        .get("http://localhost:8345/mcf-api-service/json/jobs")
        .then(function(result) {    
          this.setState({
            prospect: result.data.job
          });
        })
  },
  render:function(){
    console.log("getting prospect from backend"+this.state.prospect);
    return prospect;
  }
});
export default prospect;*/