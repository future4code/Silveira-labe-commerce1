import React from 'react';
import styled from 'styled-components';
import CardProdutos from './CardProdutos';

const ContainerLista = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const ContainerOrdenacao = styled.div`
display: flex;
justify-content: right;
text-align: center;
font-size: 20px;
font-weight: bold;
font-family: 'Courier New';
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
                    return produtoAtual.value - produtoSeguinte.value
                case "decrescente":
                    return produtoSeguinte.value - produtoAtual.value
                default:
                    return ""
            }

        }).map((produto) => {
            return (
                <CardProdutos key={produto.id}
                    imagem={produto.imagem}
                    produto={produto.nome}
                    preco={produto.value}
                />

            )
        })

        return (
            <ContainerLista>
                <ContainerOrdenacao>
                    <label>Ordenação:
                        <select onChange={this.onChangeOrdenacao} name="sort">
                            <option value="crescente">Crescente</option>
                            <option value="decrescente">Decrescente</option>
                        </select>
                    </label>

                </ContainerOrdenacao>
                <div>
                    {listaFiltrada}
                </div>
            </ContainerLista>
        )
    }
}
export default Main;

