import React from 'react'

export const Card = ({pokeData}) => {
  console.log(pokeData);
  return (
    <div className='pokemon-card'>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`}
        alt={pokeData.name}
      />
      <p>{pokeData.name}</p>
      <p>Experiencia:{pokeData.base_experience}</p>
    </div>
  )
}
