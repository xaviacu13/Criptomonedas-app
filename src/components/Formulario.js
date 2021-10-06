import React from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';

const Button = styled.input`
  margin-top: 20px;
  font-family: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #FFF;

  &:hover{
    background-color: #326AC0;
    cursor: pointer;
    transition: background-color .3s ease;
  }
`;

const Formulario = () => {

  const MONEY = [
    {cod: 'USD', name: 'Dolar de Estados unidos'},
    {cod: 'MXN', name: 'Peso Mexicano'},
    {cod: 'EUR', name: 'Euro'},
    {cod: 'GBP', name: 'Libra Esterlina'},
    {cod: 'ARS', name: 'Peso Argentino'},
    {cod: 'BOB', name: 'Moneda Boliviana'},
  ]

  const[ moneda, SelectMoneda ] = useMoneda('Elija tu moneda', '', MONEY);

  return ( 
    <form>
      <SelectMoneda />
      <Button
        type="submit"
        value="Calculate"
      />
    </form>
   );
}
 
export default Formulario;