import React, { useState } from 'react';

const useMoneda = (moneda, stateInicial, options) => {

  const [state, refreshState] = useState (stateInicial);

  const Selecionar = () => (
    <>
      <label>{moneda}</label>
      <select
        onChange={ e => refreshState(e.target.value)}
        value={state}
      >
        <option value="">- Seleccione -</option>
        {options.map(op => (
          <option key={op.cod} value={op.cod}>{op.name}</option>
        ))}
      </select>
    </>

  );

  return [state, Selecionar, refreshState];
}
 
export default useMoneda;