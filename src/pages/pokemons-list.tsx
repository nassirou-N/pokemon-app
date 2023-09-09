import React, { FunctionComponent,useEffect,useState } from 'react'
import PokemonCard from '../components/pokemon-card';
import Pokemon from '../models/pokemon';

import PokemonService from '../services/pokemon-service';

const PokemonList:FunctionComponent = () => {
  const [pokemons,setPokemons] = useState<Pokemon[]>([]);

  useEffect(()=>{
    PokemonService.getPokemons().then(pokemons => setPokemons(pokemons));
  },[])

  return (
    <div className=''>
      <h1 className='center'>Pokémons</h1>
      <p className='center'>le nombre de pokemons est : {pokemons.length}</p>
      <div className='container'>
         <div className='row'>
          {pokemons.map( pokemon =>( 
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
  </div>
   
  )
}

export default PokemonList
