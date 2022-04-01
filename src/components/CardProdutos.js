import React from 'react';
import styled from 'styled-components';

const ContainerCard = styled.div`
    border: 5px outset #B0C4DE;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    width: 300px;
    margin: 50px;
`

const Button =styled.button`
    margin: 10px;
    text-decoration: underline;

        &:hover{
            color: white;
            background: #B0C4DE;
            cursor: pointer;
        }
`

function CardProdutos(props) {
    return (
            <ContainerCard>
                <img src={props.imagem} alt={props.alt} />
                <p>{props.produto}</p>
                <p>R${props.preco}</p>
                <Button /* onClick={props.onClickAddCarrinho} */>Adicionar ao Carrinho</Button>
            </ContainerCard>
    )
}

export default CardProdutos;