import React from 'react';
import styled from 'styled-components'

const ContainerFiltro = styled.div`
background-color: #E4ECFC;
text-align: center;
`

export class Filter extends React.Component {

    render() {
        return (
            <ContainerFiltro>
                <h2>Filtro <span role="img" aria-label="xxxxx">🔍</span></h2>
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