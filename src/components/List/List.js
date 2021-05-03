import React, { useContext } from 'react';
import PokemonContext from '../context/PokemonContex';

function List() {
  const { state, dispatch } = useContext(PokemonContext);
  return (
    <div className='container d-flex'>
      {state.pokemon.map((el) => {
        return (
          <>
            <div className="card me-5 mt-5">
              <img
                src={el.sprites.front_default}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" key={el.id}>
                <h5 className="card-title">{el.name}</h5>
                <button
                  onClick={() =>
                    dispatch({ type: 'POKEMON_DEL', payload: el.id })
                  }
                  type="submit"
                  className="btn btn-primary"
                >
                  Del
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default List;
