import React from 'react';
import PokemonList from './pages/pokemons-list';
import PokemonsDetail from './pages/pokemon-detail';
import { BrowserRouter as Router,Route,  Routes,Link } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';

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
            <Route  path='/pokemon/add' element={<PokemonAdd/>} />
            <Route  path='/pokemons/:id' element={<PokemonsDetail/>} />
            <Route  path='/pokemons/edit/:id' element={<PokemonEdit/>} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
