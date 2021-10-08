import React from 'react';

const Qoute = ({result}) => {
  if(Object.keys(result).length === 0) return null;

  return ( 
    <div>
      <p> El precio es: <span>{result.PRICE}</span> </p>
      <p> El precio mas Alto del dia: <span>{result.HIGHDAY}</span> </p>
      <p> El precio mas bajo: <span>{result.LOWDAY}</span> </p>
      <p> Variacion ultimos 24 horas: <span>{result.CHANGEPCT24HOURS}</span> </p>
      <p> Ultima actualizacion: <span>{result.LASTUPDATE}</span> </p>
    </div>
  );
}
 
export default Qoute;