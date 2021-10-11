import React from 'react';
import styled from '@emotion/styled';

const ResultDiv = styled.div`
  color: #FFF;
  font-family: Arial, Helvetica, sans-serif;
`;

const Price = styled.p`
  font-size: 30px;
  span{
    font-weight: bold;
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  span{
    font-weight: bold;
  }
`;

const Qoute = ({result}) => {
  if(Object.keys(result).length === 0) return null;

  return ( 
    <ResultDiv>
      <Price> El precio es: <span>{result.PRICE}</span> </Price>
      <Paragraph> El precio mas Alto del dia: <span>{result.HIGHDAY}</span> </Paragraph>
      <Paragraph> El precio mas bajo: <span>{result.LOWDAY}</span> </Paragraph>
      <Paragraph> Variacion ultimos 24 horas: <span>{result.CHANGEPCT24HOURS}</span> </Paragraph>
      <Paragraph> Ultima actualizacion: <span>{result.LASTUPDATE}</span> </Paragraph>
    </ResultDiv>
  );
}
 
export default Qoute;