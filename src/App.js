import React from 'react';
import styled from 'styled-components';
import { Carrinho } from './components/Carrinho';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <MainContainer className="App">

      <Carrinho />

    </MainContainer>
  );
}

export default App;