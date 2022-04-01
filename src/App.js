import React from 'react';
import imagem1 from './img/joia-alma.png';
import imagem2 from './img/joia-mente.png';
import imagem3 from './img/joia-realidade.png';
import imagem4 from './img/joia-tempo.png';
import imagem5 from './img/joia-poder.png';
import imagem6 from './img/joia-espaco.png';
import { Filter } from './components/Filter';
import Produtos from './components/Produtos';
import styled from 'styled-components';

const Home = styled.div`

`


class App extends React.Component {

  produtos = [
    {
      id: 1,
      nome: "Space Stone",
      value: 900.0,
      imagem: imagem6
    },
    {
      id: 2,
      nome: "Mind Stone",
      value: 850.0,
      imagem: imagem2
    },
    {
      id: 3,
      nome: "Reality Stone",
      value: 750.0,
      imagem: imagem3
    },
    {
      id: 4,
      nome: "Power Stone",
      value: 900.0,
      imagem: imagem5
    },
    {
      id: 5,
      nome: "Time Stone",
      value: 1000.0,
      imagem: imagem4
    },
    {
      id: 6,
      nome: "Soul Stone",
      value: 500.0,
      imagem: imagem1
    }
  ]

  state = {
    minFilter: '',
    maxFilter: '',
    nameFilter: '',
    productsInCart: [

    ]
  }
  onChangeMinFilter = (event) => {
    this.setState({ minFilter: event.target.value })
  }
  onChangeMaxFilter = (event) => {
    this.setState({ maxFilter: event.target.value })
  }
  onChangeNameFilter = (event) => {
    this.setState({ nameFilter: event.target.value })
  }





  render() { 

    return (
      <Home>
        <header/>
        <main>

        <Filter
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onChangeMinFilter={this.onChangeMinFilter}
          onChangeMaxFilter={this.onChangeMaxFilter}
          onChangeNameFilter={this.onChangeNameFilter}
        />
        <Produtos
        arrayDeProdutos={this.produtos}
        valorMin={this.state.minFilter}
        valorMax={this.state.maxFilter}
        nomeBuscado={this.state.nameFilter}
        />

        </main>
        <footer>

        </footer>

      </Home>
    )
  }
}

export default App;
