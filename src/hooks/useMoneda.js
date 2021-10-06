import React, { useState } from 'react';

const useMoneda = () => {

  const [state, refreshState] = useState ('');

  const Selecionar = () => (
    <>
      <label>Moneda</label>
      <select>
        <option value="MXN">Peso Mexicano</option>
      </select>
    </>

  );

  return [state, Selecionar, refreshState];
}
 
export default useMoneda;