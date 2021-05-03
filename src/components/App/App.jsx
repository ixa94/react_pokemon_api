import { useReducer } from 'react';
import Form from '../Form/Form';
import List from '../List/List';
import './App.css';
import PokeReducer from '../reducer/pokeReducer.jsx';
import PokemonContext from '../context/PokemonContex.jsx';

function App() {
  ///new

  const [state, dispatch] = useReducer(PokeReducer, { pokemon: [] });

  //old

  const hadlerForm = (event) => {
    event.preventDefault();
    const { pokeInput } = event.target;

    fetch(`${process.env.REACT_APP_URL}${pokeInput.value}`)
      .then((responce) => responce.json())
      .then((data) => dispatch({ type: 'POKEMON_ADD', payload: data }));
  };

  console.log(state);

  return (
    <PokemonContext.Provider value={{state,dispatch}}>

    
    <div className="App">
      <Form habdler={hadlerForm} />
      <List />
    </div>
    </PokemonContext.Provider>
  );
}

export default App;
