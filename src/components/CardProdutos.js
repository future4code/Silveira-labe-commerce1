import React from 'react';
import styled from 'styled-components';

const ContainerCard = styled.div`
border: 5px outset #B0C4DE;
width: 300px;
text-align: center;
margin: 15px;
align-items: center;
font-size: 20px;
font-weight: bold;
background-image: url(https://www.itl.cat/wallview/xwTJwm_dark-galaxy-high-resolution-backgrounds/);
    p{
        color: white;
    }
`

const Button =styled.button`
margin: 10px;
padding: 0 15px;
border-radius: 10px;

        &:hover{
            color: white;
            background: #B0C4DE;
            cursor: pointer;
        }
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
                <p>R${props.preco}</p>
                <Button onClick={props.onClickAddCarrinho}>Adicionar ao Carrinho</Button>
            </ContainerCard>
        </div>
    )
}

export default CardProdutos;