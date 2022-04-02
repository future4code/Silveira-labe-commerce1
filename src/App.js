import React from 'react';
import imagem1 from './img/joia-alma.png';
import imagem2 from './img/joia-mente.png';
import imagem3 from './img/joia-realidade.png';
import imagem4 from './img/joia-tempo.png';
import imagem5 from './img/joia-poder.png';
import imagem6 from './img/joia-espaco.png';
import { Filter } from './components/Filter';
import Produtos from './components/Produtos';
import { Carrinho } from './components/Carrinho';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'; 

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: black;
  }
`

const Home = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 200px;
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
    listaProdutos: this.produtos,
    minFilter: '',
    maxFilter: '',
    nameFilter: '',
    produtosCarrinho: []
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

  adicionarAoCarrinho = (produto) => {
    const novoProduto = [
      ...this.state.produtosCarrinho
    ]

    const produtoDoCarrinho = this.state.produtosCarrinho.find((prod) => {
      return prod.id === produto.id;
    })

    if(produtoDoCarrinho) {
      produtoDoCarrinho.quantidade++;
    } else {
      novoProduto.push({
        ...produto,
        quantidade: 1
      });
    }

    this.setState({produtosCarrinho: novoProduto})
  }

  somarValorTotal = () => {
    let valorTotal = 0;
    
    for(let produto of this.state.produtosCarrinho) {
      valorTotal += produto.value * produto.quantidade;
    }

    return valorTotal;
}

// FUNÇÃO REMOVER PRODUTO DO CARRINHO (INCOMPLETA)

//   removerCarrinho = (id) => {
//     const produtoRemovido = [
//       ...this.state.produtosCarrinho
//     ]

//     produtoRemovido.filter((produto) => {
//       return id != produto.id;
//     })

//     this.setState({produtosCarrinho: produtoRemovido})
// }

  render() { 

    return (
      <div>
      <Home>
        
        <GlobalStyle />

        <Filter
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onChangeMinFilter={this.onChangeMinFilter}
          onChangeMaxFilter={this.onChangeMaxFilter}
          onChangeNameFilter={this.onChangeNameFilter}
        />

        <Produtos
        arrayDeProdutos={this.state.listaProdutos}
        valorMin={this.state.minFilter}
        valorMax={this.state.maxFilter}
        nomeBuscado={this.state.nameFilter}
        addCarrinho={this.adicionarAoCarrinho}
        />

        <Carrinho 
        produtosCarrinho={this.state.produtosCarrinho}
        somaValorTotal={this.somarValorTotal()}
        // removerCarrinho={this.removerCarrinho}
        />


      </Home>
      </div>
    )
  }
}

export default App;
