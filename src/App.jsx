// src/App.js
import React from 'react';
import Fetch from './Fetch';
import { List } from './List';
const App = () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=9';

  const renderPokemonList = (data) => (
    <div>
      <h1>Pokémon List</h1>
      <List data = {data}/>
    </div>
  );



  return <Fetch url={url} render={renderPokemonList} />;
};


export default App;