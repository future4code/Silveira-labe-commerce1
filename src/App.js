import React from 'react';
import styled from 'styled-components';
import Main from './components/Main';

const ContainerHome=styled.div`
background-color: white;
font-family: 'Courier New';
`

class App extends React.Component {

  render() {

    return (
      <ContainerHome>
        <Main />

      </ContainerHome>
    )
  }
}

export default App;