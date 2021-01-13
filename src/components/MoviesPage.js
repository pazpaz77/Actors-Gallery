import logo from './logo.svg';
import './App.css';

import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';



class MoviesPage extends React.Component {
    
  render() {

  const movieArr = ['lala', 'lala 2', 'mama koy'];
 
  return (
    <Container>
      <LiveSearchBox 
        placeHolderText="Search for a Movie" 
        result={movieArr}>

      </LiveSearchBox>
     
    </Container>
  );
}

}

export default MoviesPage;