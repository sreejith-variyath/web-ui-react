import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
var contentDiv = {
  boxShadow: '0 0 7px black',
};

var logoConnector = {
	marginLeft:878,
};

var Header= React.createClass({
	render:function (){
	return (
		<Row>
		    <Col md={12} style={contentDiv}>
				<img role="presentation" src="./images/logo.png"/>
				<img style={logoConnector} role="presentation" src="./images/logo-icollector.png"/>
			</Col>
		</Row>
	);
  }
});

export default Header;

