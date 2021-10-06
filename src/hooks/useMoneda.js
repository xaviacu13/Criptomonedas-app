import React, { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.3rem;
`;

const useMoneda = (moneda, stateInicial, options) => {

  const [state, refreshState] = useState (stateInicial);

  const Selecionar = () => (
    <>
      <Label>{moneda}</Label>
      <Select
        onChange={ e => refreshState(e.target.value)}
        value={state}
      >
        <option value="">- Seleccione -</option>
        {options.map(op => (
          <option key={op.cod} value={op.cod}>{op.name}</option>
        ))}
      </Select>
    </>

  );

  return [state, Selecionar, refreshState];
}
 
export default useMoneda;