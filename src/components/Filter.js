import React from 'react';
import styled from 'styled-components'

const ContainerFiltro = styled.div`
background-color: #E4ECFC;
text-align: center;
`
const Titulo = styled.h3`
background-color: #B0C4DE;
    display: flex;
    justify-content: space-around;
    height: 50px;

`

export class Filter extends React.Component {

    render() {
        return (
            <ContainerFiltro>
                <h2>Filtro 🔍</h2>
                <p>Valor mínimo:</p>
                <input
                    type="number"
                    value={this.props.minFilter}
                    onChange={this.props.onChangeMinFilter}
                    placeholder="1"
                />
                <p>Valor máximo:</p>
                <input

                    type="number"
                    value={this.props.maxFilter}
                    onChange={this.props.onChangeMaxFilter} 
                    placeholder="1000"
                    />

                <p>Busca por nome:</p>
                <input
                    type="text"
                    value={this.props.nameFilter}
                    onChange={this.props.onChangeNameFilter}
                    placeholder="Pesquisar..."
                />

            </ContainerFiltro>

        )
    }
}