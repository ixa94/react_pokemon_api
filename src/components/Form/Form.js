import React from 'react';

function Form({habdler}) {
  return (
 <form onSubmit={habdler}>
   <label>
     Poke <input type='text'   name='pokeInput'  />
     
   </label>
   <button>Catch poke</button>
 </form>
  );
}

export default Form;
