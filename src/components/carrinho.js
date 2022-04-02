import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
border: 5px outset #B0C4DE;
background-color: #B0C4DE;
text-align: center;
`

const Titulo = styled.h3`
    display: flex;
    justify-content: space-around;
`

const Img = styled.img`
    height: 75%;
`

const ContainerProduto = styled.div`
    display: flex;
    justify-content: space-between;
`

export class Carrinho extends React.Component {

    render() {
        const listarProdutosCarrinho = this.props.produtosCarrinho.map((produto) => {
            return (
                <ContainerProduto>
                    <p>{produto.quantidade}x</p>
                    <p>{produto.nome}</p>
                    <button onClick={() => this.props.removerCarrinho(produto.id)}>Remover</button>
                </ContainerProduto>
            )
        })

        return (
            <ContainerCarrinho>
                <Titulo>
                    <h3>Carrinho 🛒</h3>
                </Titulo>

                {listarProdutosCarrinho}

                <p>Valor Total: R${this.props.somaValorTotal}</p>
            </ContainerCarrinho>
        );
    }
}