import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
background-color: #E4ECFC;
text-align: center;
`

const ContainerProduto = styled.div`
    display: flex;
    justify-content: space-between;
`

export class Carrinho extends React.Component {

    render() {
        const listarProdutosCarrinho = this.props.produtosCarrinho.map((produto, key) => {
            return (
                <ContainerProduto key={produto.id}>
                    <p>{produto.quantidade}x</p>
                    <p>{produto.nome}</p>
                    <button onClick={() => this.props.removerCarrinho(produto.id)}>Remover</button>
                </ContainerProduto>
            )
        })

        return (
            <ContainerCarrinho>
                    <h3>
                        Carrinho <span role="img" aria-label="xxxxx">🛒</span>
                    </h3>
    
                {listarProdutosCarrinho}

                <p>Valor Total: R${this.props.somaValorTotal}</p>
            </ContainerCarrinho>
        );
    }
}