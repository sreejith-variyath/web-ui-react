import React from 'react'
import { reduxForm, Field } from 'redux-form';
import {Button } from 'react-bootstrap';
import renderField from './renderField';
import renderSelect from './renderSelect';
import {createRepoConnection} from '../actions/collections';

var validateAndCreateCollection = function(values,dispatch){
     return (dispatch(createRepoConnection(values)));

}


const NewCollectionForm = React.createClass({
	getInitialState: function() {
	    return {
	      prospectName: "",
	      InputRepo:"",OutPutRepo:"",filePath:"",scanFrequency:""
	    };
	  },
	handleOnchange:function(event){
		const parameterName = event.target.name;
		this.setState({
			[parameterName]:event.target.value
		});
	 
	},
	render:function(){
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(validateAndCreateCollection)}>
			 	<Field type="text" label="Name" size="30" name="prospectname" component={renderField}  />
	        	<Field name="InputRepo" label="InputConnector"   component={renderSelect} >
	        		<option></option>
			        <option name="FileSystem">FileSystem</option>
			        <option name="WindowsShare">WindowsShare</option>
			     </Field>
		         <Field type="text" label="server" name="server" component={renderField} /> 
		         <Field type="text" label="username" name="username" component={renderField} /> 
		         <Field type="password" label="password" name="password" component={renderField} /> 
		          
		    	 <Button  type="submit" >Create</Button> 
			</form>
		)
	}
	});

export default reduxForm({
  form: 'NewCollectionForm'  // a unique identifier for this form
})(NewCollectionForm)