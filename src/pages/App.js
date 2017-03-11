import React from 'react';
import RightNavigationBar from "../components/RightNavigation";
import Header from "../components/Header";
//import DataContainer from "./dataContainer";
//import FooterDiv from "./components/Footer";
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import '../style/css/bootstrap-override.css';
import '../style/css/style.css';
import '../style/css/menu.css'

var dataContainer = {
    padding:'19px'
};


var App = React.createClass({
  render:function() {
    return (
      <Grid fluid={true}> 
      <Header />
      <Row>
        <Col md={2} > <RightNavigationBar />  </Col>  {/* There is a 15px left and right padding for col */} 
        <Col md={10} style={dataContainer}> {this.props.children} </Col>
        <Col md={9}> </Col>  
      </Row>
    </Grid>
    );
  }
});

export default App;
