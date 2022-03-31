import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
    width: 20vw;
    height: 30vw;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`

const ContainerProduto = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 5px;
`

export class Carrinho extends React.Component {
    
    render() {
        return (
            <ContainerCarrinho>
                <h2>Carrinho</h2>

                <ContainerProduto>
                    <p>Qtd produto</p>
                    <p>Nome produto</p>
                    <button>Remover</button>
                </ContainerProduto>

                <ContainerProduto>
                    <p>Qtd produto</p>
                    <p>Nome produto</p>
                    <button>Remover</button>
                </ContainerProduto>

                <ContainerProduto>
                    <p>Qtd produto</p>
                    <p>Nome produto</p>
                    <button>Remover</button>
                </ContainerProduto>

                <ContainerProduto>
                    <p>Qtd produto</p>
                    <p>Nome produto</p>
                    <button>Remover</button>
                </ContainerProduto>

                <p>Valor Total: R$10000,00</p>
            </ContainerCarrinho>
        );
    }
}