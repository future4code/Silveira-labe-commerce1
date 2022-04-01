// import React from 'react';
// import styled from 'styled-components';
// import CardProdutos from './CardProdutos';
// import imagem1 from '../img/joia-alma.png';
// import imagem2 from '../img/joia-mente.png';
// import imagem3 from '../img/joia-realidade.png';
// import imagem4 from '../img/joia-tempo.png';
// import imagem5 from '../img/joia-poder.png';
// import imagem6 from '../img/joia-espaco.png';

// const ContainerLista=styled.div`
// display: flex;
// flex-wrap: wrap;
// justify-content: space-around;
// `

// class Main extends React.Component {
//   state = {
//     produtos: [
//       {
//         id: 1,
//         nome: "Space Stone",
//         value: 100.0,
//         imagem: imagem6
//       },
//       {
//         id: 2,
//         nome: "Mind Stone",
//         value: 100.0,
//         imagem: imagem2
//       },
//       {
//         id: 3,
//         nome: "Reality Stone",
//         value: 100.0,
//         imagem: imagem3
//       },
//       {
//         id: 4,
//         nome: "Power Stone",
//         value: 100.0,
//         imagem: imagem5
//       },
//       {
//         id: 5,
//         nome: "Time Stone",
//         value: 100.0,
//         imagem: imagem4
//       },
//       {
//         id: 6,
//         nome: "Soul Stone",
//         value: 100.0,
//         imagem: imagem1
//       }
//     ]
//   }

//   render() {
//     const filteredAndOrdenedList = this.getFilteredAndOrdenedList
//     const listarProdutos = this.state.produtos.map((produto) => {
//       return <ProductsContainer>
//           <ProductsHeader>

//           </ProductsHeader>
//         </ProductsContainer>
//         return(
//         <CardProdutos
//           imagem={produto.imagem}
//           produto={produto.nome}
//           preco={produto.value}
//         />
//       )
//     })

//     return (
//       <div>
//         <ContainerLista>
//         {listarProdutos}
//         </ContainerLista>
//         <select>
//           <option value="">Nenhum</option>
//           <option value="crescente">Crescente</option>
//           <option value="decrescente">Decrescente</option>
//         </select>
//       </div>
//     )
//   }
// }

// export default Main;

