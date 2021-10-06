import React from 'react';
import styled from  '@emotion/styled';
import image from './cripto1.png'

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

function App() {
  return (
   <Container>
     <div>
       <Image
        src={image}
        alt="Cripto image"
       />

     </div>
     <div>

     </div>
   </Container>
  );
}

export default App;
