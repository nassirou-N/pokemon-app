import React, { FunctionComponent,useEffect,useState } from 'react'
import PokemonCard from '../components/pokemon-card';
import Pokemon from '../models/pokemon';

import PokemonService from '../services/pokemon-service';
import { Link } from 'react-router-dom';

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
        <Link className='btn-floating btn-large waves-effect waves-light red z-depth-3' style={{position:'fixed',bottom:'25px',right:'25px'}} to="/pokemon/add">
          <i className='material-icons'>add</i>
        </Link>
      </div>
  </div>
   
  )
}

export default PokemonList
