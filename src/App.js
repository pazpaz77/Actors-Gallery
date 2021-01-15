import logo from './logo.svg';
import './App.css';

import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import ActorsView from './components/ActorView';
import ActorModel from './data-models/ActorModel';

function App() {

  const actorData = [];

  actorData.push(new ActorModel("Mimi", "jjis", 1984, "https://m.media-amazon.com/images/M/MV5BMzlkODQ0ODMtYmQ5NS00MWZhLTlkMjAtYTMwYzg5MjNkNmFmXkEyXkFqcGdeQXVyMjUwNzgxNjk@._V1_UY317_CR22,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0951420/?ref_=nm_mv_close", "50"));

  console.log(actorData)
  
  return (
    <Container>
      {/* <LiveSearchBox placeHolderText="Search for a Movie"></LiveSearchBox> */}
      <ActorsView actors={actorData}/>
    </Container>
  );
}

export default App;
