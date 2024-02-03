import React from 'react'
import { Card } from './Card'
import Fetch from './Fetch'

export const List = ({data}) => {
    const renderPokemonCard = (pokemonData) => <Card pokeData={pokemonData} />
    return (
        <div>
            <ul className='pokemon-list'>
                {data.results.map((pokemon, index) => (
                    <li key={index}>
                        <Fetch url={pokemon.url} render={renderPokemonCard} />
                    </li>
                ))}
            </ul>

        </div>
    )
}
