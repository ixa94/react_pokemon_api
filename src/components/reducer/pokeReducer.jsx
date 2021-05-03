

function PokeReducer(state, action) {
  switch (action.type) {
    case 'POKEMON_ADD':
      return {
      ...state,
      pokemon:[...state.pokemon,action.payload]
      }

      // ...state - копия всего state (pokemons,text,people) + разворот
    // { pokemon: []}

    // ещё раз обращаемся к нужному ключу (в нашем случае pokemon)

    // наполняем ключ pokemon, значением (массив) на основе исходного state
    // [...state.pokemon

    // , action.payload] - "полезная нагрузка", которую мы добавляем в pokemon

    // добавление происходит через dispatch({ type: 'POKEMON_ADD', payload: data })


    case 'POKEMON_DEL':
      return {...state,
      pokemon:
      [...state.pokemon]
      .filter(el=> el.id !== action.payload)
    
    };
    default:
      return state
  }
}

export default PokeReducer;
