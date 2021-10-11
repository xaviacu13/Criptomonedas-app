import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Error from './Error';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';

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

const Formulario = ({saveCriptomoney, saveMoney}) => {

  const MONEY = [
    {cod: 'USD', name: 'Dolar de Estados unidos'},
    {cod: 'MXN', name: 'Peso Mexicano'},
    {cod: 'EUR', name: 'Euro'},
    {cod: 'GBP', name: 'Libra Esterlina'},
    {cod: 'ARS', name: 'Peso Argentino'},
    {cod: 'BOB', name: 'Moneda Boliviana'},
  ];

  const [ listcripto, saveCripto] = useState([]);
  const [ error, saveError ] = useState(false);


  const [ money, SelectMoney ] = useMoneda('Elige tu moneda', '', MONEY);
  const [cripto, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda', '', listcripto);

  useEffect(() => {
    const getAPI =async () =>{
      const url =`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
      const result = await axios.get(url);
      saveCripto(result.data.Data);
    }
    getAPI();
  }, []);

  const quoteMoney = e => {
    e.preventDefault();

    if (money === '' || cripto === ''){
      saveError(true);
      return;
    }
    saveError(false);
    saveMoney(money);
    saveCriptomoney(cripto);
  }

  return ( 
    <form
      onSubmit={quoteMoney}
    >
      {error && <Error  message='Ambos campos son obligatorios' />}
      <SelectMoney />

      <SelectCripto />

      <Button
        type="submit"
        value="Calcular"
      />
    </form>
   );
}

Formulario.propTypes = {
  saveCripto: PropTypes.func.isRequired,
  saveMoney: PropTypes.func.isRequired,
}
 
export default Formulario;