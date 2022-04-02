import React from 'react';
import styled from 'styled-components';
import CardProdutos from './CardProdutos';

const ContainerProdutos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 5px outset #B0C4DE;
    height: 500px;
    background-image:url(https://images.pexels.com/photos/207529/pexels-photo-207529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
    background-repeat: no-repeat;
    height: 100vh;
        h3{
            color: white;   
        }
`


const ContainerLista = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

class Main extends React.Component {
    state = {
        ordenacao: "crescente"
    }
    onChangeOrdenacao = (event) => {
        this.setState({ ordenacao: event.target.value })
    }

    render() {

        const { arrayDeProdutos, valorMin, valorMax, nomeBuscado } = this.props

        const listaFiltrada = arrayDeProdutos.filter((produto) => {
            return (
                produto.nome.toUpperCase().includes(nomeBuscado.toUpperCase())

            )

        }).filter(produto => {
            return (
                valorMin === "" || produto.value >= valorMin
            )
        }

        ).filter(produto => {
            return (
                valorMax === "" || produto.value <= valorMax
            )
        }
        ).sort((produtoAtual, produtoSeguinte) => {
            switch (this.state.ordenacao) {
                case "crescente":
                    return produtoAtual.value - produtoSeguinte.value;
                case "decrescente":
                    return produtoSeguinte.value - produtoAtual.value;
                default:
                    return ""
            }

        }).map((produto) => {
            return (
                <CardProdutos key={produto.id}
                    imagem={produto.imagem}
                    produto={produto.nome}
                    preco={produto.value}
                    onClickAddCarrinho={() => this.props.addCarrinho(produto)}
                />
            )
        })

        return (
                <ContainerProdutos>
                    
                <div>
                    <h3>Ordenação:
                        <select onChange={this.onChangeOrdenacao} name="sort">
                            <option value="crescente">Crescente</option>
                            <option value="decrescente">Decrescente</option>
                        </select>
                    </h3>
                </div>

                <ContainerLista>
                {listaFiltrada}
                </ContainerLista>

                </ContainerProdutos>
        )
    }
}
export default Main;