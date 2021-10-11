import React, {useState} from 'react';
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

const SelectCripto = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.3rem;
`;

const useCriptomoneda = (money, stateInicial, options) => {

  console.log(options);

  const [state, refreshState] = useState (stateInicial);

  const Selecionar = () => (
    <>
      <Label>{money}</Label>
      <SelectCripto
        onChange={ e => refreshState(e.target.value)}
        value={state}
      >
        <option value="">- Seleccione -</option>
        {options.map(op => (
          <option key={op.CoinInfo.Id} value={op.CoinInfo.Name}>{op.CoinInfo.FullName}</option>
        ))}
      </SelectCripto>
    </>

  );

  return [state, Selecionar, refreshState];
}
 
export default useCriptomoneda;