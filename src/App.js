// import React from 'react';
// import styled from 'styled-components';
// import Main from './components/Main';


// const ContainerHome=styled.div`
// background-color: white;
// font-family: 'Courier New';
// `

// class App extends React.Component {
//   state={
//     minFilter: '10',
//     maxFilter: '1000',
//     nameFilter: 'Produto'
//   }

//   render() {
//     return (
//       <AppContainer>
//         <Filters
//         minFilter={this.state.minFilter}
//         maxFilter={this.state.maxFilter}
//         nameFilter={this.state.nameFilter}
//         />
//         <Produtos
//          produtos={produtos}
//          minFilter={this.state.minFilter}
//          maxFilter={this.state.maxFilter}
//          nameFilter={this.state.nameFilter}
//          />

//         <ShoppingCart/>
//       </AppContainer>

//     );
//   }
// }

// export default App;
import React from 'react';
import styled from 'styled-components';
import CardProdutos from './components/CardProdutos';
import imagem1 from './img/joia-alma.png';
import imagem2 from './img/joia-mente.png';
import imagem3 from './img/joia-realidade.png';
import imagem4 from './img/joia-tempo.png';
import imagem5 from './img/joia-poder.png';
import imagem6 from './img/joia-espaco.png';
import { Filter } from './components/Filter';

const ContainerLista = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`

const Span = styled.div`
display: flex;
justify-content: right;
text-align: center;
font-size: 20px;
font-weight: bold;
font-family: 'Courier New';
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
    const listarProdutos = this.produtos.map((produto) => {
      return (
        <CardProdutos key={produto.id}
          imagem={produto.imagem}
          produto={produto.nome}
          preco={produto.value}
        />

      )
    })

    return (
      <div>
        <Filter
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          onChangeMinFilter={this.onChangeMinFilter}
          onChangeMaxFilter={this.onChangeMaxFilter}
          onChangeNameFilter={this.onChangeNameFilter}
        />
        <Span>
          <label htmlFor="sort">Ordenação:</label>
          <select name="sort">
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
