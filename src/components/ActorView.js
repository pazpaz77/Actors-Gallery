import logo from './logo.svg';
import './App.css';
import { Card, Col, Row, Table } from 'react-bootstrap';
import React from 'react';
import ActorModel from './data-models/ActorModel';

class ActorsView extends React.Component {
    constructor(props){
      super(props)
  
    }
  
    render() {
  
      const actorCard = [];
      console.log(this.props.actors)
      
      for(let i=0; i<this.props.actors.length; i++) {
        const cardContent = (
          <Col sm={12} md={6} lg={4}>
            <Card style={{ width: '18rem' , textAlign: 'center'}}>
            <Card.Img variant="center" src={this.props.actors[i]['imageurl']} />
            <Card.Title>First Name : {this.props.actors[i].fname}<br />
                       Last Name : {this.props.actors[i].lname}<br />
                       Age : {this.props.actors[i].getBirthday()} <br />
                       IMDB LINK : <a href={this.props.actors[i].IMDBlink}> PRESS </a>
            </Card.Title>
            </Card>
        </Col>
        )}   
        
        actorCard.push(cardContent);
    }
      return (
        {actorCard}
      )
    }
  
  
  
  export default ActorsView;