import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
    border: 1px solid black;
    background-color: grey;
`

const Titulo = styled.h2`
    border: 1px solid white;
    display: flex;
    justify-content: space-around;
    height: 50px;
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
                    <Img src="https://media.discordapp.net/attachments/953034002300801044/959549644088676422/cart_icon-icons.com_48341.png" />
                    <h2>Carrinho</h2>
                </Titulo>

                {listarProdutosCarrinho}

                <p>Valor Total: R${this.props.somaValorTotal}</p>
            </ContainerCarrinho>
        );
    }
}