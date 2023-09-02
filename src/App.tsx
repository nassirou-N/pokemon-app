import React from 'react';
import PokemonList from './pages/pokemons-list';
import PokemonsDetail from './pages/pokemon-detail';
import { BrowserRouter as Router,Route,  Routes,Link } from 'react-router-dom';



function App() {
  

  return (
    <Router>
      <div>

    
        {/**bar de navigation */}
        <nav>
          <div className='nav-wrapper teal'>
            <Link to="/" className='brand-logo center'>Pokédéx</Link>
          </div>
        </nav>
        {/** le systeme de gestions des routes */}
          <Routes>
            <Route  path='/' element={<PokemonList/>} />
            <Route  path='/pokemons' element={<PokemonList/>} />
            <Route  path='/pokemons/:id' element={<PokemonsDetail/>} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
