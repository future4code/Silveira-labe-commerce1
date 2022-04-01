import React from 'react';
import styled from 'styled-components';

const ContainerCard = styled.div`
border: 5px outset #B0C4DE;
width: 300px;
text-align: center;
margin: 50px;
align-items: center;
font-size: 20px;
font-weight: bold;
font-family: 'Courier New';
`


const Button =styled.button`
margin: 10px;
text-decoration: underline;

        &:hover{
            color: white;
            background: #B0C4DE;
            cursor: pointer;
        }`


const ImgProduto = styled.img`
width: 40%;`


function CardProdutos(props) {
    return (
        <div>
            <ContainerCard>
                <ImgProduto src={props.imagem} alt={props.alt} />
                <p>{props.produto}</p>
                <p>{props.preco}</p>
                <Button>Adicionar ao Carrinho</Button>
            </ContainerCard>
        </div>
    )
}

export default CardProdutos;