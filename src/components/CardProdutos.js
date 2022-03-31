import React from 'react';
import styled from 'styled-components';

const ContainerCard = styled.div`
border: 5px outset white;
width: 300px;
text-align: center;
margin: 50px;
align-items: center;
font-size: 20px;
font-weight: bold;
font-family: 'Courier New';
`

const ImgProduto = styled.img`
width: 40%;
`

function CardProdutos(props) {
    return (
        <div>
        <ContainerCard>
            <ImgProduto src={props.imagem} alt={props.alt} />
            <p>{props.produto}</p>
            <p>{props.preco}</p>
            <button>Adicionar ao Carrinho</button>
        </ContainerCard>
        </div>
    )
}

export default CardProdutos;