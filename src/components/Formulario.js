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

  const[ moneda, SelectMoneda, refreshState ] = useMoneda();

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