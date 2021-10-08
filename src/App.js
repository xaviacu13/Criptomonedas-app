import React, { useState, useEffect } from 'react';
import styled from  '@emotion/styled';
import image from './cripto1.png'
import Formulario from './components/Formulario';
import axios from 'axios';
import Qoute from './components/Qoute';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {

  const [money, saveMoney] = useState('');
  const [cripto, saveCripto] = useState('');
  const [result, saveResult] = useState({});

  useEffect(() => {
    const quoteCriptoMoney = async () => {
      if(money === '') return;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${money}`;
      const result = await axios.get(url);
      saveResult(result.data.DISPLAY[cripto][money]);
    }
    quoteCriptoMoney();
  }, [money, cripto])


  return (
   <Container>
     <div>
       <Image
        src={image}
        alt="Cripto image"
       />

     </div>
     <div>
      <Heading>Cotizador</Heading>
      <Formulario
        saveCriptomoney={saveCripto}
        saveMoney={saveMoney}
      />
      <Qoute
        result={result}
      />
     </div>
   </Container>
  );
}

export default App;
