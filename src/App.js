import React from 'react';
import styled from 'styled-components';
import CardProdutos from './components/CardProdutos';
import imagem1 from './img/joia-alma.png';
import imagem2 from './img/joia-mente.png';
import imagem3 from './img/joia-realidade.png';
import imagem4 from './img/joia-tempo.png';
import imagem5 from './img/joia-poder.png';
import imagem6 from './img/joia-espaco.png';

const ContainerLista = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
background-image: url(https://www.itl.cat/wallview/xwTJwm_dark-galaxy-high-resolution-backgrounds/);
`

const Span = styled.div`
display: flex;
justify-content: right;
text-align: center;
font-size: 20px;
font-weight: bold;
font-family: 'Courier New';
background-image: url(https://www.itl.cat/wallview/xwTJwm_dark-galaxy-high-resolution-backgrounds/);
`

class App extends React.Component {
  state = {
    sortingParameter: "",
    produtos: [
      {
        id: 1,
        nome: "Space Stone",
        value: 100.0,
        imagem: imagem6
      },
      {
        id: 2,
        nome: "Mind Stone",
        value: 200.0,
        imagem: imagem2
      },
      {
        id: 3,
        nome: "Reality Stone",
        value: 300.0,
        imagem: imagem3
      },
      {
        id: 4,
        nome: "Power Stone",
        value: 400.0,
        imagem: imagem5
      },
      {
        id: 5,
        nome: "Time Stone",
        value: 500.0,
        imagem: imagem4
      },
      {
        id: 6,
        nome: "Soul Stone",
        value: 600.0,
        imagem: imagem1
      }
    ]
  }

  updatesSortingParameter = (event) => {
    this.setState({
      sortingParameter: event.target.value
    })
  }

  render() {
    const listarProdutos = this.state.produtos.map((produto) => {
      return (
        <CardProdutos
          imagem={produto.imagem}
          produto={produto.nome}
          preco={produto.value}
        />

      )
    })

      .sort((a, b) => {
        switch (this.state.sortingParameter) {
          case "crescente":
            return a.price.localeCompare(b.price)
            default:
            return a.price - b.price
        }
      })

    return (
      <div>
        <div>

        </div>
        <Span>
          <label for="sort">Ordenação:</label>
          <select name="sort"
            value={this.state.sortingParameter}
            onChange={this.updatesSortingParameter}
          >
            <option value="">Nenhum</option>
            <option value="crescente">Crescente</option>
            <option value="decrescente">Decrescente</option>
          </select>
        </Span>
        <ContainerLista>
          {listarProdutos}
        </ContainerLista>
      </div>
    )
  }
}

export default App;